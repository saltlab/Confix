package instrumentor;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.Set;

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


/*
 * The visitor class extracts all DOM dependent functions and determine different paths in those functions.
 * It generates a constraints table as well as DOM elements table to be used later for translating to xpath and solving them.
 * Generate a QUnit test file for a function (with DOM fixture for common paths in the module setup part, and different test methods for each path)
 * Extracting all DOM element variables (direct and indirect) and generating the constraint table
 */

public abstract class JSASTVisitor implements NodeVisitor{

	protected static final Logger LOGGER = LoggerFactory.getLogger(JSASTVisitor.class.getName());

	private final ArrayList<String> jqueryList=new ArrayList<String>();
	private final ArrayList<String> jsList=new ArrayList<String>();

	private int m_rootCount = 0;


	private CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
	private String scopeName = null;	// Contains the scopename of the AST we are visiting. Generally this will be the filename
	protected String jsName = null;		//To store js corresponding name

	public JSASTVisitor(){
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

		/*
		 * Amin: DOM accessor

			// Changing the Value of an Attribute: document.getElementById(id).attribute=new value
			document.getElementById("myImage").src = "landscape.jpg";

			//The following example collects the node value of an <h1> element and copies it into a <p> element:
			//<h1 id="intro">My First Page</h1>
			//<p id="demo">Hello!</p>

			var myText = document.getElementById("intro").childNodes[0].nodeValue;
			document.getElementById("demo").innerHTML = myText;

			//Using the firstChild property is the same as using childNodes[0]:
			myText = document.getElementById("intro").firstChild.nodeValue;


			The nodeName property specifies the name of a node.
		    nodeName is read-only
		    nodeName of an element node is the same as the tag name
		    nodeName of an attribute node is the attribute name
		    nodeName of a text node is always #text
		    nodeName of the document node is always #document
			Note: nodeName always contains the uppercase tag name of an HTML element.


			The nodeValue property specifies the value of a node.
		    nodeValue for element nodes is undefined
		    nodeValue for text nodes is the text itself
		    nodeValue for attribute nodes is the attribute value

			The nodeType property returns the type of node. nodeType is read only.
			The most important node types are:
			Element type 	NodeType
			Element 		1
			Attribute 		2
			Text 			3
			Comment 		8
			Document 		9



	function myFunction() {
		    var obj = document.getElementById("h01");
		    obj.innerHTML = "Hello jQuery";
		}

		The jQuery Way:
		    $("#h01").html("Hello jQuery");

	    $("#h01").attr("style", "color:red").html("Hello jQuery")



		//<button id="btn1" name="subject" type="submit" value="fav_HTML">HTML</button>
		var x = document.getElementById("btn1").value;

		//<form id="form1">
		//<button id="btn1" type="button">HTML</button>
		//</form>
		var x = document.getElementById("btn1").form.id;

		//<form id="frm1" action="form_action.asp">
		//First name: <input type="text" name="fname"><br>
		//Last name: <input type="text" name="lname"><br><br>
		//<input type="button" onclick="myFunction()" value="Submit">
		//</form>
		document.getElementById("frm1").submit();
      	document.getElementById("frm1").reset();


		The following methods can be used on all HTML elements:
		element.appendChild() 	Adds a new child node, to an element, as the last child node
		element.getAttribute() 	Returns the specified attribute value of an element node
		element.getAttributeNode() 	Returns the specified attribute node
		element.getElementsByClassName() 	Returns a collection of all child elements with the specified class name
		element.getElementsByTagName() 	Returns a collection of all child elements with the specified tagname
		element.hasAttribute() 	Returns true if an element has the specified attribute, otherwise false
		element.hasAttributes() 	Returns true if an element has any attributes, otherwise false
		element.hasChildNodes() 	Returns true if an element has any child nodes, otherwise false
		element.insertBefore() 	Inserts a new child node before a specified, existing, child node
		element.removeAttribute() 	Removes a specified attribute from an element
		element.removeAttributeNode() 	Removes a specified attribute node, and returns the removed node
		element.removeChild() 	Removes a child node from an element
		element.replaceChild() 	Replaces a child node in an element
		element.removeEventListener() 	Removes an event handler that has been attached with the addEventListener() method
		element.setAttribute() 	Sets or changes the specified attribute, to the specified value
		element.setAttributeNode() 	Sets or changes the specified attribute node
		element.setIdAttribute() 	
		element.setIdAttributeNode() 	



		nodelist.length 	Returns the number of nodes in a NodeList



		Properties and Methods
		attr.isId 	Returns true if the attribute is of type Id, otherwise it returns false
		attr.name 	Returns the name of an attribute
		attr.value 	Sets or returns the value of the attribute
		attr.specified 	Returns true if the attribute has been specified, otherwise it returns false

		nodemap.getNamedItem() 	Returns a specified attribute node from a NamedNodeMap.
		nodemap.item() 	Returns the node at a specified index in a NamedNodeMap
		nodemap.length 	Returns the number of nodes in a NamedNodeMap
		nodemap.removeNamedItem() 	Removes a specified attribute node
		nodemap.setNamedItem() 	Sets the specified attribute node (by name)


		<a id="myAnchor" href="http://www.microsoft.com">Microsoft</a>
		document.getElementById('myAnchor').innerHTML="W3Schools";
		document.getElementById('myAnchor').href="http://www.w3schools.com";
		document.getElementById('myAnchor').target="_blank";


		 *     var x = document.getElementsByName("x");
		 *		document.getElementById("demo").innerHTML = x.length;   => How many elements named x?

	    document.anchors.length  => Number of anchors
	    document.getElementById("demo").innerHTML =
	    document.anchors[0].innerHTML;
	    "Number of links: " + document.links.length
	    "The href of the first link is " + document.links[0].href;
	    "Number of forms: " + document.forms.length
	    "The name of the first for is " + document.forms[0].name
	    "Number of images: " + document.images.length

	    document.getElementById("demo").innerHTML =
		"The id of the first image is " + document.images[0].id

		document.getElementById('p1').style.visibility='visible'"
		 */
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
		if (node instanceof Name)
			instrumentNameNode(node);
		else if (node instanceof IfStatement)
			instrumentIfStatementNode(node);
		else if (node instanceof FunctionNode)
			instrumentFunctionNode(node);
		else if (node instanceof FunctionCall)
			instrumentFunctionCallNode(node);
		else if (node instanceof SwitchCase)
			instrumentSwitchCaseNode(node);
		else if (node instanceof InfixExpression)
			instrumentInfixExpressionNode(node);
		else if (node instanceof VariableInitializer)
			instrumentVariableInitializerNode(node);
		else if (node instanceof ReturnStatement)
			instrumentReturnStatementNode(node);

		/* have a look at the children of this node */
		return true;
	}


	private void instrumentReturnStatementNode(AstNode node) {
		System.out.println("=== instrumentReturnStatementNode ===");
		ReturnStatement rs = (ReturnStatement) node;
		System.out.println("ra.toSource(): " + rs.toSource());
		if (rs.getReturnValue()!=null){
			System.out.println("ra.getReturnValue().toSource(): " + rs.getReturnValue().toSource());

			String originalSource = rs.toSource().replace("\"", "\\\"");		
			originalSource = originalSource.replace("\n", "").replace("\r", ""); // if it contains a function body		
			// e.g. return a; -> return confixWrapper("return", "a", [""], [], a);
			String wrapperCode = "function temp(){ return confixWrapper(\"return\", \""+ originalSource +"\", [\"\"], [], " + rs.getReturnValue().toSource() + ") }";
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
		String wrapperCode = "var " + left + " = confixWrapper(\"initvar\", \"var "+ originalSource +"\", [\"\"], [], " + right + ")";
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
		InfixExpression infex = (InfixExpression) node;


		String left = infex.getLeft().toSource();
		String oprator = ASTNodeUtility.operatorToString(infex.getOperator());
		String right = infex.getRight().toSource();

		System.out.println("infex.toSource(): " + infex.toSource());
		System.out.println("Left: " + left);
		System.out.println("Left.shortName: " + infex.getLeft().shortName());
		System.out.println("Operator: " + oprator);
		System.out.println("Right: " + right);			
		System.out.println("Right.shortName: " + infex.getRight().shortName());

		String originalSource = infex.toSource().replace("\"", "\\\"");		
		originalSource = originalSource.replace("\n", "").replace("\r", ""); // if it contains a function body		
		if (oprator.equals("=")){
			// e.g. a = b -> a = confixWrapper("infix", "a=b", [""], [], b)
			String wrapperCode = left + " = confixWrapper(\"infix\", \""+ originalSource +"\", [\"\"], [], " + right + ")";
			System.out.println("wrapperCode : " + wrapperCode );
			AstNode wrapperNode = parse(wrapperCode);
			System.out.println(wrapperNode.toSource());

			ExpressionStatement es = (ExpressionStatement) (AstNode) wrapperNode.getFirstChild();
			System.out.println("ES: " + es.toSource());
			InfixExpression tempInf = (InfixExpression) (AstNode) es.getExpression();
			System.out.println("Replacing infix: " + infex.toSource() + " with wrappedInfix: " + tempInf.toSource());
			infex.setLeft(tempInf.getLeft());
			infex.setOperator(tempInf.getOperator());
			infex.setRight(tempInf.getRight());
			System.out.println("New infix is: " + infex.toSource());	

		}		

	}


	private void instrumentIfStatementNode(AstNode node) {
		System.out.println("=== instrumentIfStatementNode ===");

		FunctionNode func=node.getEnclosingFunction();  // TODO: Add this to the wrapper function later
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
		String wrapperCode = "if (confixWrapper(\"condition\", \""+ originalCondition +"\", [\"\"], [], " + conditionNode.toSource() + ")) temp;";
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
		System.out.println("=== analyseNameNode ===");

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
		if (node.shortName().equals("NewExpression"))
			return;

		FunctionCall fcall = (FunctionCall) node;
		AstNode targetNode = fcall.getTarget(); // node evaluating to the function to call. E.g document.getElemenyById(x)
		String targetBody = targetNode.toSource();
		AstNode parentNode = node.getParent();

		//if (!fcall.getTarget().toSource().contains("confixWrapper"))
		//	System.out.println("fcall.getTarget().toSource(): " + fcall.getTarget().toSource());

		String functionType = "";  // The called function is either "accessingDOM" or "notAccessingDOM" 
		String argument = "";
		String argumentShortName = "";
		String enclosingFunctionName = "";
		// to store the var in the JS code that a DOM element is assigned to
		String DOMJSVariable = "";
		//String DOMJSVariable = "anonym"+Integer.toString((new Random()).nextInt(100)); 

		// avoid instrumenting wrapper function calls!
		if (fcall.getParent().toSource().contains("confixWrapper")){
			//System.out.println("Not instrumenting because of: " + fcall.getParent().toSource());
			return;
		}

		// getting the enclosing function name
		FunctionNode func=node.getEnclosingFunction();
		if (func.getFunctionName()!=null){
			enclosingFunctionName = func.getFunctionName().getIdentifier();
			System.out.println("enclosingFunctionName = " + enclosingFunctionName);
		}

		// e.g. var x = document.getElemenyById('id1')
		if (parentNode.shortName().equals("VariableInitializer")){
			VariableInitializer vi = (VariableInitializer)parentNode;
			Name varName = (Name) vi.getTarget();
			AstNode varLiteral = vi.getInitializer();
			DOMJSVariable = varName.toSource();
			//System.out.println("parentNode.getChildBefore(ASTNode).getString() :" + parentNode.getChildBefore(ASTNode).getString());
			System.out.println("VariableInitializer - varName: " + varName.toSource());
			System.out.println("VariableInitializer - varLiteral: " + varLiteral.toSource());
		}else 
			// e.g. x = document.getElemenyById('id2')
			if (parentNode.shortName().equals("Assignment")){
				Assignment asmt = (Assignment)parentNode;
				DOMJSVariable = asmt.getLeft().toSource();
			}

		// e.g. Replacing functionCall: document.getElementById(x) with wrapperFunCall: confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], document.getElementById(x))
		List<AstNode> args = new ArrayList(fcall.getArguments());
		String wrapperCode = "confixWrapper(\"functionCall\", \""+ fcall.toSource().replace("\"", "\\\"") +"\", [";
		for (int i=0; i<args.size(); i++)
			wrapperCode += ("\"" + args.get(i).toSource().replace("\"", "").replace("'", "") + "\",");
		wrapperCode += "], [";
		for (int i=0; i<args.size(); i++)
			wrapperCode += args.get(i).toSource() + ",";
		wrapperCode += "], "+ fcall.toSource() + ")";
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
	 * Creates a node that can be inserted at a certain point in function.
	 * 
	 * @param function
	 *            The function that will enclose the node.
	 * @param postfix
	 *            The postfix function name (enter/exit).
	 * @param lineNo
	 *            Linenumber where the node will be inserted.
	 * @return The new node.
	 */
	protected abstract AstNode createNode(FunctionNode function, String postfix, int lineNo);

	/**
	 * Creates a node that can be inserted at a certain point in the AST root.
	 * Changed by Amin
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
	protected abstract AstNode createNode(AstRoot root, String postfix, int lineNo, int rootCount);

	protected abstract AstNode createFunctionTypeNameTrackingNode(FunctionNode callerFunc, AstNode node);
	/**
	 *  create node for logging variable/function-parameters
	 */
	protected abstract AstNode createNode(FunctionNode function, AstNode nodeForVarLog, String statementCategory);

	/**
	 * create node for tracking function calls
	 */
	protected abstract AstNode createFunctionTrackingNode(FunctionNode calleeFunction, String callerName);
	/**
	 * This method is called when the complete AST has been traversed.
	 * 
	 * @param node
	 *            The AST root node.
	 */
	public abstract void finish(AstRoot node);

	/**
	 * This method is called before the AST is going to be traversed.
	 */
	public abstract void start();


}

