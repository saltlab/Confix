package instrumentor;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.StringTokenizer;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.Token;
import org.mozilla.javascript.ast.Assignment;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.Block;
import org.mozilla.javascript.ast.BreakStatement;
import org.mozilla.javascript.ast.ContinueStatement;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.ForLoop;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.IfStatement;
import org.mozilla.javascript.ast.InfixExpression;
import org.mozilla.javascript.ast.KeywordLiteral;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.ObjectLiteral;
import org.mozilla.javascript.ast.ObjectProperty;
import org.mozilla.javascript.ast.ParenthesizedExpression;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.ReturnStatement;
import org.mozilla.javascript.ast.Scope;
import org.mozilla.javascript.ast.StringLiteral;
import org.mozilla.javascript.ast.SwitchCase;
import org.mozilla.javascript.ast.Symbol;
import org.mozilla.javascript.ast.ThrowStatement;
import org.mozilla.javascript.ast.TryStatement;
import org.mozilla.javascript.ast.UnaryExpression;
import org.mozilla.javascript.ast.VariableDeclaration;
import org.mozilla.javascript.ast.VariableInitializer;
import org.mozilla.javascript.ast.WhileLoop;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import core.DOMConstraint;
import core.ElementTypeVariable;


/**
 * This class is used to visit AST nodes of the given JS code. When a node matches a certain condition, it will be instrumentated with a wrapper function.
 */

public class JSASTInstrumentor implements NodeVisitor{

	protected static final Logger LOGGER = LoggerFactory.getLogger(JSASTInstrumentor.class.getName());

	private final ArrayList<String> jqueryList=new ArrayList<String>();
	private final ArrayList<String> jsList=new ArrayList<String>();

	private int instrumentedLinesCounter = 0;
	private boolean instrumentFunctionCall = false;

	private CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
	private String scopeName = null;	// Contains the scopename of the AST we are visiting. Generally this will be the filename
	protected String jsName = null;		//To store js corresponding name

	public JSASTInstrumentor(){
		jqueryList.add("addClass");
		jqueryList.add("removeClass");
		jqueryList.add("removeAttr");
		jqueryList.add("css");
		jqueryList.add("attr");
		jqueryList.add("prop");
		jqueryList.add("append");
		jqueryList.add("appendTo");
		jqueryList.add("prepend");
		jqueryList.add("prependTo");
		jqueryList.add("insertBefore");
		jqueryList.add("insertAfter");
		jqueryList.add("detach");
		jqueryList.add("remove");

		jsList.add("getElementById");
		jsList.add("getElementsByTagName");
		jsList.add("setAttribute");
		jsList.add("getAttribute");
		jsList.add("removeAttribute");
	}

	/**
	 * @param scopeName
	 *            the scopeName to set
	 */
	public void setScopeName(String scopeName) {
		this.scopeName = scopeName;
		//This is used to name the array which stores execution count for the scope in URL 
		int index = scopeName.lastIndexOf('/');
		String s = scopeName.substring(index+1, scopeName.length());
		jsName = s.replace('.', '_');
	}

	/**
	 * @return the scopeName
	 */
	public String getScopeName() {
		return scopeName;
	}

	/**
	 * Parse some JavaScript to a simple AST.
	 * 
	 * @param code
	 *            The JavaScript source code to parse.
	 * @return The AST node.
	 */
	public AstNode parse(String code) {
		//Parser p = new Parser(compilerEnvirons, null);

		compilerEnvirons.setErrorReporter(new ConsoleErrorReporter());
		Parser p = new Parser(compilerEnvirons, new ConsoleErrorReporter());

		//System.out.print(code+"*******\n");
		return p.parse(code, null, 0);
	}

	/**
	 * Find out the function name of a certain node and return "anonymous" if it's an anonymous function.
	 * 
	 * @param f
	 *            The function node.
	 * @return The function name.
	 */
	protected String getFunctionName(FunctionNode f) {
		if (f==null)
			return "NoFunctionNode";
		else if(f.getParent() instanceof ObjectProperty){
			return ((ObjectProperty)f.getParent()).getLeft().toSource();
		}
		Name functionName = f.getFunctionName();

		if (functionName == null) {
			return "anonymous" + f.getLineno();
		} else {
			return functionName.toSource();
		}
	}

	/**
	 * Create a new block node with two children.
	 * 
	 * @param node
	 *            The child.
	 * @return The new block.
	 */
	private Block createBlockWithNode(AstNode node) {
		Block b = new Block();
		b.addChild(node);
		return b;
	}

	/**
	 * @param node
	 *            The node we want to have wrapped.
	 * @return The (new) node parent (the block probably)
	 */
	private AstNode makeSureBlockExistsAround(AstNode node) {

		AstNode parent = node.getParent();

		if (parent instanceof IfStatement) {
			/* the parent is an if and there are no braces, so we should make a new block */
			IfStatement i = (IfStatement) parent;

			/* replace the if or the then, depending on what the current node is */
			if (i.getThenPart().equals(node)) {
				i.setThenPart(createBlockWithNode(node));
			} else if (i.getElsePart()!=null){
				if (i.getElsePart().equals(node))
					i.setElsePart(createBlockWithNode(node));
			}

		} else if (parent instanceof WhileLoop) {
			/* the parent is a while and there are no braces, so we should make a new block */
			/* I don't think you can find this in the real world, but just to be sure */
			WhileLoop w = (WhileLoop) parent;
			if (w.getBody().equals(node))
				w.setBody(createBlockWithNode(node));
		} else if (parent instanceof ForLoop) {
			/* the parent is a for and there are no braces, so we should make a new block */
			/* I don't think you can find this in the real world, but just to be sure */
			ForLoop f = (ForLoop) parent;
			if (f.getBody().equals(node))
				f.setBody(createBlockWithNode(node));
		}

		return node.getParent();
	}

	/**
	 * Actual visiting method.
	 * 
	 * @param node
	 *            The node that is currently visited.
	 * @return Whether to visit the children.
	 */
	public boolean visit(AstNode node) {	
		//System.out.println("visit");
		String nodeName = node.shortName();
		int nodeType = node.getType();
		int nodeDepth = node.depth();
		/*
		System.out.println("node.shortName() : " + nodeName);
		System.out.println("node.depth() : " + nodeDepth);
		System.out.println("node.getLineno() : " + (node.getLineno()+1));
		System.out.println("node.toSource() : \n" + node.toSource());
		System.out.println("node.getType() : " + node.getType());
		System.out.println("node.debugPrint() : \n" + node.debugPrint());
		 */

		if (isInstrumentFunctionCall()){
			if (node instanceof FunctionCall)
				instrumentFunctionCallNode(node);
		}else{
			if (node instanceof Name)
				instrumentNameNode(node);
			else if (node instanceof IfStatement)
				instrumentIfStatementNode(node);
			else if (node instanceof FunctionNode)
				instrumentFunctionNode(node);
			//else if (node instanceof FunctionCall && isInstrumentFunctionCall())
			//	instrumentFunctionCallNode(node);
			else if (node instanceof SwitchCase)
				instrumentSwitchCaseNode(node);
			else if (node instanceof InfixExpression)
				instrumentInfixExpressionNode(node);
			else if (node instanceof VariableInitializer)
				instrumentVariableInitializerNode(node);
			else if (node instanceof ReturnStatement)
				instrumentReturnStatementNode(node);
			else if (node instanceof ForLoop)
				instrumentForLoopNode(node);
		}

		/* have a look at the children of this node */
		return true;
	}


	private void instrumentForLoopNode(AstNode node) {
		System.out.println("=== instrumentForLoopNode ===");
		String enclosingFunction = "";
		if (node.getEnclosingFunction()!=null)
			enclosingFunction = ((FunctionNode) node.getEnclosingFunction()).getFunctionName().getIdentifier();

		ForLoop fl = (ForLoop) node;
		AstNode conditionNode = fl.getCondition();

		System.out.println("conditionNode.shortName() : " + conditionNode.shortName());
		System.out.println("conditionNode.toSource() : \n" + conditionNode.toSource());
		System.out.println("conditionNode.getType() : " + conditionNode.getType());
		System.out.println("conditionNode.getAstRoot() : " + conditionNode.getAstRoot());
		System.out.println("conditionNode.debugPrint() : \n" + conditionNode.debugPrint());


		// Extracting variables used in the condition.
		ArrayList<String> VarList = getVarListFromDebugPrint(conditionNode.debugPrint());


		// instrumenting the condition
		String originalCondition = conditionNode.toSource().replace("\"", "\\\"");		
		// e.g. if(x>5) -> confixWrapper("condition", "x>5", ["x"], [x], x>5)
		String wrapperCode = "if (confixWrapper(\"loopCondition\", \""+ originalCondition +"\", [";
		if (VarList.size()>0)
			for (String v: VarList){
				if (v.equals("children") || v.equals("length") || v.equals("lengt") || v.equals("leng")){

				}else
					wrapperCode += ("\"" + v + "\", "); 
			}
		else
			wrapperCode += "\"\""; 

		wrapperCode += "], [";

		if (VarList.size()>0)
			for (String v: VarList){
				if (v.equals("children") || v.equals("length") || v.equals("lengt") || v.equals("leng")){

				}else
					wrapperCode += (v + ", "); 
			}

		wrapperCode += "], \"" + enclosingFunction + "\", " + conditionNode.toSource() + ")) temp;";
		System.out.println("wrapperCode before: " + wrapperCode );
		wrapperCode = wrapperCode.replace("\\\\\"", "\\\"");
		System.out.println("wrapperCode : " + wrapperCode );
		AstNode wrapperNode = parse(wrapperCode);
		//System.out.println(wrapperNode.toSource());
		//System.out.println( ().getCondition().toSource());

		IfStatement tempIS = (IfStatement) (AstNode) wrapperNode.getFirstChild();
		System.out.println("Replacing condition: " + fl.getCondition().toSource() + " with wrapperCondition: " + tempIS.getCondition().toSource());
		fl.setCondition(tempIS.getCondition());
		System.out.println("New condition: " + fl.getCondition().toSource());	


	}


	private ArrayList<String> getVarListFromDebugPrint(String debugPrint) {
		// Extracting variables used in the condition.
		ArrayList<String> result = new ArrayList<String>();
		int index = debugPrint.indexOf("NAME");
		while (index>=0){
			String token  = debugPrint.substring(debugPrint.indexOf("NAME"));
			token = token.substring(token.indexOf(" ")+1);
			token = token.substring(token.indexOf(" ")+1);
			token = token.substring(token.indexOf(" ")+1);
			if (token.indexOf("\n")>0){
				result.add(token.substring(0,token.indexOf("\n")));
				System.out.println(token.substring(0,token.indexOf("\n")));
			}
			else{ 
				System.out.println(token);
				result.add(token);
			}
			debugPrint = debugPrint.substring(debugPrint.indexOf("NAME")+1, debugPrint.length()-1);
			index = debugPrint.indexOf("NAME");
		}
		return result;
	}



	private void instrumentReturnStatementNode(AstNode node) {

		System.out.println("=== instrumentReturnStatementNode ===");
		String enclosingFunction = "";
		if (node.getEnclosingFunction()!=null)
			enclosingFunction = ((FunctionNode) node.getEnclosingFunction()).getFunctionName().getIdentifier();

		ReturnStatement rs = (ReturnStatement) node;
		System.out.println("rs.toSource(): " + rs.toSource());
		if (rs.getReturnValue()!=null){
			System.out.println("rs.getReturnValue().toSource(): " + rs.getReturnValue().toSource());

			String originalSource = rs.toSource().replace("\"", "\\\"");		
			originalSource = originalSource.replace("\n", "").replace("\r", ""); // if it contains a function body		
			// e.g. return a; -> return confixWrapper("return", "a", [""], [], a);
			String wrapperCode = "function temp(){ return confixWrapper(\"return\", \""+ originalSource +"\", [\"\"], [], \"" + enclosingFunction + "\", " + rs.getReturnValue().toSource() + ") }";
			System.out.println("wrapperCode before: " + wrapperCode );
			wrapperCode = wrapperCode.replace("\\\\\"", "\\\"");
			System.out.println("wrapperCode : " + wrapperCode );
			AstNode wrapperNode = parse(wrapperCode);
			System.out.println(wrapperNode.toSource());

			FunctionNode fn = (FunctionNode) (AstNode) wrapperNode.getFirstChild();
			Block block = (Block) fn.getBody();
			ReturnStatement tempRS = (ReturnStatement) block.getFirstChild();

			System.out.println("Replacing returnVal: " + rs.toSource() + " with wrappedInfix: " + tempRS.toSource());
			rs.setReturnValue(tempRS.getReturnValue());
			System.out.println("New returnVal is: " + rs.toSource());	
		}
	}

	private void instrumentVariableInitializerNode(AstNode node) {
		System.out.println("=== instrumentVariableInitializerNode ===");

		String enclosingFunction = "";
		if (node.getEnclosingFunction()!=null)
			enclosingFunction = ((FunctionNode) node.getEnclosingFunction()).getFunctionName().getIdentifier();

		VariableInitializer vi = (VariableInitializer) node;

		Name varName = (Name) vi.getTarget();
		AstNode varLiteral = vi.getInitializer();
		//System.out.println("parentNode.getChildBefore(ASTNode).getString() :" + parentNode.getChildBefore(ASTNode).getString());
		System.out.println("VariableInitializer - source: " + vi.toSource());
		System.out.println("VariableInitializer - varName: " + varName.toSource());
		System.out.println("VariableInitializer - varLiteral: " + varLiteral.toSource());


		String left = varName.toSource();
		String right =  varLiteral.toSource();

		String originalSource = vi.toSource().replace("\"", "\\\"");		
		originalSource = originalSource.replace("\n", "").replace("\r", ""); // if it contains a function body		
		// e.g. var a = b -> a = confixWrapper("infix", "var a=b", [""], [], b)
		String wrapperCode = "var " + left + " = confixWrapper(\"initvar\", \"var "+ originalSource +"\", [\"\"], [], \"" + enclosingFunction + "\", " + right + ")";
		System.out.println("wrapperCode : " + wrapperCode );
		AstNode wrapperNode = parse(wrapperCode);
		System.out.println(wrapperNode.toSource());

		ExpressionStatement es = (ExpressionStatement) (AstNode) wrapperNode.getFirstChild();
		System.out.println("ES: " + es.toSource());
		VariableDeclaration vd = (VariableDeclaration) (AstNode) es.getExpression();


		VariableInitializer tempVI = (VariableInitializer) (AstNode) vd.getVariables().get(0);


		System.out.println("Replacing initvar: " + vi.toSource() + " with wrappedInfix: " + tempVI.toSource());
		vi.setTarget(tempVI.getTarget());
		vi.setInitializer(tempVI.getInitializer());
		System.out.println("New initvar is: " + vi.toSource());	

	}


	private void instrumentInfixExpressionNode(AstNode node) {
		System.out.println("=== instrumentInfixExpressionNode ===");
		String enclosingFunction = "";
		if (node.getEnclosingFunction()!=null)
			enclosingFunction = ((FunctionNode) node.getEnclosingFunction()).getFunctionName().getIdentifier();

		InfixExpression infix = (InfixExpression) node;
		String left = infix.getLeft().toSource();
		String oprator = ASTNodeUtility.operatorToString(infix.getOperator());
		String right = infix.getRight().toSource();

		System.out.println("infix.toSource(): " + infix.toSource());
		System.out.println("Left: " + left);
		System.out.println("Left.shortName: " + infix.getLeft().shortName());
		System.out.println("Operator: " + oprator);
		System.out.println("Right: " + right);			
		System.out.println("Right.shortName: " + infix.getRight().shortName());

		String originalSource = infix.toSource().replace("\"", "\\\"");		
		originalSource = originalSource.replace("\n", "").replace("\r", ""); // if it contains a function body		
		if (oprator.equals("=")){
			// e.g. a = b -> a = confixWrapper("infix", "a=b", [""], [], b)
			//String wrapperCode = left + " = confixWrapper(\"infix\", \""+ originalSource +"\", [\"\"], [], \"" + enclosingFunction + "\", " + right + ")";

			String wrapperCode = left + " = confixWrapper(\"infix\", \""+ originalSource +"\", [";
			if (right.contains(".value"))  // e.g. p = itemList.children[i].value;
				wrapperCode += ("\"" + right.replace(".value", "") + "\", "); 
			else if (right.contains(".innerHTML"))  // e.g. p = x.innerHTML;
				wrapperCode += ("\"" + right.replace(".innerHTML", "") + "\", "); 
			else
				wrapperCode += "\"\""; 

			wrapperCode += "], [";

			if (right.contains(".value"))  // e.g. p = itemList.children[i].value;
				wrapperCode += (right.replace(".value", "") + ", "); 
			else if (right.contains(".innerHTML"))  // e.g. p = x.innerHTML;
				wrapperCode += (right.replace(".innerHTML", "") + ", "); 

			wrapperCode += "], \"" + enclosingFunction + "\", " + right + ")";

			System.out.println("wrapperCode before: " + wrapperCode );
			wrapperCode = wrapperCode.replace("\\\\\"", "\\\"");
			System.out.println("wrapperCode : " + wrapperCode );
			AstNode wrapperNode = parse(wrapperCode);
			System.out.println(wrapperNode.toSource());

			ExpressionStatement es = (ExpressionStatement) (AstNode) wrapperNode.getFirstChild();
			System.out.println("ES: " + es.toSource());
			InfixExpression tempInf = (InfixExpression) (AstNode) es.getExpression();
			System.out.println("Replacing infix: " + infix.toSource() + " with wrappedInfix: " + tempInf.toSource());
			infix.setLeft(tempInf.getLeft());
			infix.setOperator(tempInf.getOperator());
			infix.setRight(tempInf.getRight());
			System.out.println("New infix is: " + infix.toSource());	
		}
		// No need for other instrumentation at this point
		//else if (oprator.equals("GETPROP")){	
		//TODO
		// e.g. document.getElementById -> a = confixWrapper("infix", "document.getElementById", [""], [], getElementById)
		// -> nodeName: PropertyGet, e.g. Left: $("p").innerHTML
		// consider the parent node until there is no more GETPROP
		//}

	}


	private void instrumentIfStatementNode(AstNode node) {
		System.out.println("=== instrumentIfStatementNode ===");
		String enclosingFunction = "";
		if (node.getEnclosingFunction()!=null)
			enclosingFunction = ((FunctionNode) node.getEnclosingFunction()).getFunctionName().getIdentifier();

		IfStatement is = (IfStatement) node;
		AstNode conditionNode = is.getCondition();

		System.out.println("conditionNode.shortName() : " + conditionNode.shortName());
		System.out.println("conditionNode.depth() : " + conditionNode.depth());
		System.out.println("conditionNode.getLineno() : " + (conditionNode.getLineno()+1));
		System.out.println("conditionNode.toSource() : \n" + conditionNode.toSource());
		System.out.println("conditionNode.getType() : " + conditionNode.getType());
		System.out.println("conditionNode.getAstRoot() : " + conditionNode.getAstRoot());
		System.out.println("conditionNode.debugPrint() : \n" + conditionNode.debugPrint());

		// instrumenting the condition
		String originalCondition = conditionNode.toSource().replace("\"", "\\\"");		
		// e.g. if(x>5) -> confixWrapper("condition", "x>5", ["x"], [x], x>5)
		String wrapperCode = "if (confixWrapper(\"condition\", \""+ originalCondition +"\", [\"\"], [], \"" + enclosingFunction + "\", " + conditionNode.toSource() + ")) temp;";
		System.out.println("wrapperCode before: " + wrapperCode );
		wrapperCode = wrapperCode.replace("\\\\\"", "\\\"");
		System.out.println("wrapperCode : " + wrapperCode );
		AstNode wrapperNode = parse(wrapperCode);
		//System.out.println(wrapperNode.toSource());
		//System.out.println( ().getCondition().toSource());

		IfStatement tempIS = (IfStatement) (AstNode) wrapperNode.getFirstChild();
		System.out.println("Replacing condition: " + is.getCondition().toSource() + " with wrapperCondition: " + tempIS.getCondition().toSource());
		is.setCondition(tempIS.getCondition());
		System.out.println("New condition: " + is.getCondition().toSource());	
	}


	private void instrumentSwitchCaseNode(AstNode node) {
		/*
		if (node instanceof SwitchCase) {
			//Add block around all statements in the switch case
			SwitchCase sc = (SwitchCase)node;
			List<AstNode> statements = sc.getStatements();
			List<AstNode> blockStatement = new ArrayList<AstNode>();
			Block b = new Block();

			if (statements != null) {
				Iterator<AstNode> it = statements.iterator();
				while (it.hasNext()) {
					AstNode stmnt = it.next();
					b.addChild(stmnt);
				}

				blockStatement.add(b);
				sc.setStatements(blockStatement);
			}

		}
		// we will not log the incremental part of the for loops
		if (node.getParent() instanceof ForLoop){
			ForLoop forloop=(ForLoop)node.getParent();
			if (forloop.getIncrement().equals(node))
				return false;
		}
		if (node.getParent() instanceof ElementGet){
			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="ElementGet";
			AstNode nodeForVarLog=node;
			AstNode newNode=createNode(func, nodeForVarLog, statementCategory);
			appendElemGetNode(node, newNode);
		}

		else if (node instanceof SwitchStatement){
			FunctionNode func=node.getEnclosingFunction();
			AstNode nodeForVarLog=((SwitchStatement) node).getExpression();
			String statementCategory="SwitchStatementCondition";
			if (!(nodeForVarLog instanceof KeywordLiteral)){
				AstNode newNode=createNode(func, nodeForVarLog, statementCategory);

				AstNode parent = makeSureBlockExistsAround(node);

				// the parent is something we can prepend to
				parent.addChildAfter(newNode, node);
			}
		}

		 */	}


	private void instrumentFunctionNode(AstNode node) {
		FunctionNode f = (FunctionNode) node;
		int numOfParam = f.getParams().size();
		int lineNumber = node.getLineno()+1;
		int fLength = f.getEndLineno() - f.getLineno();
		int fDepth = node.depth();
		//System.out.println(f.debugPrint());
		/*for (Symbol s: f.getSymbols()){
			int sType = s.getDeclType();
			if (sType == Token.LP || sType == Token.VAR || sType == Token.LET || sType == Token.CONST){
				System.out.println("s.getName() : " + s.getName());
			}
		}*/
		//System.out.println(f.getSymbolTable());
		//System.out.println(f.getSymbols());

		System.out.println("=== instrumentFunctionNode ===");
		String fName = "";
		if (f.getFunctionName()!=null){
			fName = f.getFunctionName().getIdentifier();
			System.out.println("fName = " + fName);
		}
		System.out.println("Nothing instrumented!");

	}


	private void instrumentNameNode(AstNode node) {
		System.out.println("=== instrumentNameNode ===");

		/* function calls like .addClass, .css, .attr ... */
		if (node.getParent() instanceof PropertyGet
				&& node.getParent().getParent() instanceof FunctionCall
				&& !node.getParent().toSource().contains("function")){
			if(jqueryList.contains(node.toSource())){
				//setJsDomMap(node.getParent().getParent(), "jquery_c_arg");
			}
			else if(jsList.contains(node.toSource())){
				//setJsDomMap(node.getParent().getParent(), "js_c_id_tag");
			}
			else if(node.toSource().equals("insertBefore") || node.toSource().equals("replaceChild")){
				//setJsDomMap(node.getParent().getParent(), "js_s_arg");
			}

		}
		else if(node.getParent() instanceof PropertyGet){
			if(node.toSource().equals("innerHTML") || node.toSource().equals("innerText")){
				System.out.println(".............. innerHTML found!");
			}
		}

	}

	private void instrumentFunctionCallNode(AstNode node) {
		System.out.println("=== instrumentFunctionCallNode ===");
		// getting the enclosing function name
		String enclosingFunction = "";
		if (node.getEnclosingFunction()!=null)
			if (node.getEnclosingFunction().getFunctionName()!=null)
				enclosingFunction = ((FunctionNode) node.getEnclosingFunction()).getFunctionName().getIdentifier();

		//System.out.println("enclosingFunction: " + enclosingFunction);

		if (node.shortName().equals("NewExpression"))
			return;

		FunctionCall fcall = (FunctionCall) node;
		AstNode targetNode = fcall.getTarget(); // node evaluating to the function to call. E.g document.getElemenyById(x)

		//if (!fcall.getTarget().toSource().contains("confixWrapper"))
		//	System.out.println("fcall.getTarget().toSource(): " + fcall.getTarget().toSource());

		// avoid instrumenting wrapper function calls!
		if (fcall.getParent().toSource().contains("confixWrapper")){
			System.out.println("Not instrumenting " + fcall.getTarget().toSource() + ", because of: " + fcall.getParent().toSource());
			return;
		}

		// TODO: Getting rid of alert() function calls as they make trouble closing sometimes during concolic execution
		//if (fcall.toSource().contains("alert(")){
		//		
		//}
		
		// e.g. Replacing functionCall: document.getElementById(x) with wrapperFunCall: confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], document.getElementById(x))
		List<AstNode> args = new ArrayList<AstNode>(fcall.getArguments());
		String wrapperCode = "confixWrapper(\"functionCall\", \""+ fcall.toSource().replace("\"", "\\\"") +"\", [";
		for (int i=0; i<args.size(); i++)
			wrapperCode += ("\"" + args.get(i).toSource().replace("\"", "").replace("'", "") + "\",");
		wrapperCode += "], [";
		for (int i=0; i<args.size(); i++)
			wrapperCode += args.get(i).toSource() + ",";
		wrapperCode += "], \"" + enclosingFunction + "\", " + fcall.toSource() + ")";
		System.out.println("wrapperCode : " + wrapperCode );

		AstNode wrapperNode = parse(wrapperCode);
		ExpressionStatement es = (ExpressionStatement)((AstNode) wrapperNode.getFirstChild());
		FunctionCall wrapperFunCall = (FunctionCall) es.getExpression();
		args.add(wrapperFunCall.getArguments().get(0));
		//wrapperFunCall.addArgument(fcall);
		System.out.println("Replacing functionCall: " + fcall.toSource() + " with wrapperFunCall: " + wrapperFunCall.toSource());
		fcall.setTarget(wrapperFunCall.getTarget());
		fcall.setArguments(wrapperFunCall.getArguments());			
		System.out.println("New functionCall: " + fcall.toSource());

	}

	/**
	 * Creates a node that can be inserted at a certain point in the AST root.
	 * 
	 * @param root
	 * 			The AST root that will enclose the node.
	 * @param postfix
	 * 			The postfix name.
	 * @param lineNo
	 * 			Linenumber where the node will be inserted.
	 * @param rootCount
	 * 			Unique integer that identifies the AstRoot
	 * @return The new node
	 */
	protected AstNode createNode(AstRoot root, String postfix, int lineNo, int rootCount) {
		// instrumenting out of function
		// Adds instrumentation code
		String code = jsName + "_exec_counter[" + Integer.toString(instrumentedLinesCounter) + "]++;";
		instrumentedLinesCounter++;

		return parse(code);
	}

	protected AstNode createFunctionTypeNameTrackingNode(FunctionNode callerFunc, AstNode node) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 *  create node for logging variable/function-parameters
	 */
	protected AstNode createNode(FunctionNode function, AstNode nodeForVarLog, String statementCategory) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * create node for tracking function calls
	 */
	protected AstNode createFunctionTrackingNode(FunctionNode calleeFunction, String callerName) {
		return null;
	}	

	/**
	 * This method is called when the complete AST has been traversed.
	 * 
	 * @param node
	 *            The AST root node.
	 */
	public void finish(AstRoot node) {
		// add header code
		node.addChildToFront(headerCode());
		// instrumentedLinesCounter resets to 0 for the next codes
		instrumentedLinesCounter = 0;
	}

	/**
	 * This method is called before the AST is going to be traversed.
	 */
	public void start() {
		// just to be sure that index start from 0
		instrumentedLinesCounter = 0;
	}


	/**
	 * This will be added to the beginning of the script
	 * 
	 * @return The AstNode which contains array.
	 */
	private AstNode headerCode() {
		// statement can be functionCall, assignment, return, condition, etc.
		String code = "trace = [];";

		code += "function confixWrapper(statementType, statement, varList, varValueList, enclosingFunction, actualStatement){" +
				"trace.push({statementType: statementType, statement: statement, varList: varList, varValueList: varValueList, enclosingFunction: enclosingFunction, actualStatement: actualStatement});" +
				"return actualStatement;" +
				"}";

		code += "function getConfixTrace(){" +
				"return trace;" +
				"}";

		// this is XHR replacing
		code += // Storing the original XMLHTTPRequest object
				"var _XMLHttpRequest = XMLHttpRequest;" +
				// Redefining XHR
				"XMLHttpRequest = function() {" +
				"    var xhr = new _XMLHttpRequest();" +
				// Replacing the function for opening a new request
				"    var _open = xhr.open;" +
				"    xhr.open = function(method, url, async) {" +
				// fake URL
				"        url = \"http://localhost:8888\";" +
				"        method = 'GET';" +
				"        return _open.apply(this, [ method, url, async ]);" +
				"    };" +
				"    return xhr;" +
				"};";

		
		/*// this is to get coverage, removed as we use JSCover instead
		 * code += "var " + jsName + "_exec_counter = new Array(); " +
				"for (var i=0;i<" + instrumentedLinesCounter + ";i++)" +
				"if("+jsName + "_exec_counter[i]== undefined || "+jsName + "_exec_counter[i]== null) "+jsName + "_exec_counter[i]=0;";
		*/
		// instrumentedLinesCounter resets to 0 for the next codes
		instrumentedLinesCounter = 0;

		return parse(code);
	}

	/**
	 * Creates a node that can be inserted at a certain point within a function.
	 * 
	 * @param function
	 *            The function that will enclose the node.
	 * @param postfix
	 *            The postfix function name (enter/exit).
	 * @param lineNo
	 *            Linenumber where the node will be inserted.
	 * @return The new node.
	 */
	protected AstNode createNode(FunctionNode function, String postfix, int lineNo) {
		String name = getFunctionName(function);

		// Adds instrumentation code
		String code = jsName + "_exec_counter[" + Integer.toString(instrumentedLinesCounter) + "]++;";
		instrumentedLinesCounter++;

		return parse(code);
	}

	public boolean isInstrumentFunctionCall() {
		return instrumentFunctionCall;
	}

	public void setInstrumentFunctionCall(boolean instrumentFunctionCall) {
		this.instrumentFunctionCall = instrumentFunctionCall;
	}


}

