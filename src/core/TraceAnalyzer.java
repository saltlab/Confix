package core;

import instrumentor.ConsoleErrorReporter;
import instrumentor.JSASTVisitor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.RhinoException;
import org.mozilla.javascript.ast.Assignment;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.VariableInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;




public class TraceAnalyzer {

	private static final Logger LOGGER = LoggerFactory.getLogger(TraceAnalyzer.class.getName());

	private CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
	
	private List<String> xpathsToSolve = new ArrayList<String>();
	private List<String> DOMDependentFunctionsList = new ArrayList<String>();
	private List<DOMConstraint> DOMConstraintList = new ArrayList<DOMConstraint>();

	
	public void analyzeTrace(Map<String, String> map) {
		System.out.printf("statementType: %s\n", map.get("statementType"));
		System.out.printf("statement: %s\n", map.get("statement"));
		System.out.printf("varList: %s\n", map.get("varList"));
		System.out.printf("varValueList: %s\n", map.get("varValueList"));
		System.out.printf("actualStatement: %s\n", map.get("actualStatement"));
		
		// parsing the original statement for analysis
		if (map.get("statementType").equals("functionCall"))
			analyseFunctionCallNode(map);		
		else if (map.get("statementType").equals("condition"))
			analyseIfStatementNode(map);
		else if (map.get("statementType").equals("assignment"))
			analyseAssignmentNode(map);
		else if (map.get("statementType").equals("return"))
			analyseReturnNode(map);
	}


	/*  Detecting DOM accessing function calls
	The following methods can be used on HTML documents:
	document.getElementById() 			Returns the element that has the ID attribute with the specified value
	document.getElementsByClassName() 	Returns a NodeList containing all elements with the specified class name
	document.getElementsByName() 		Accesses all elements with a specified name
	document.getElementsByTagName() 	Returns a NodeList containing all elements with the specified tagname
	$()									(jQuery) : Find an element by element id
	 */
	private void analyseFunctionCallNode(Map<String, String> map) {
		System.out.println("=== analyseFunctionCallNode ===");
		
		AstNode generatedNode = parse(map.get("statement"));
		ExpressionStatement es = (ExpressionStatement)((AstNode) generatedNode.getFirstChild());
		AstNode node = es.getExpression();

		FunctionCall fcall = (FunctionCall) node;
		AstNode targetNode = fcall.getTarget(); // node evaluating to the function to call. E.g document.getElemenyById(x)
		String targetBody = targetNode.toSource();
		AstNode parentNode = node.getParent();

		String functionType = "";  // The called function is either "accessingDOM" or "notAccessingDOM" 
		String argument = "";
		String argumentShortName = "";
		String enclosingFunctionName = "";
		// to store the var in the JS code that a DOM element is assigned to
		String DOMJSVariable = "";
		//String DOMJSVariable = "anonym"+Integer.toString((new Random()).nextInt(100)); 

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

		// getting the argument (id, class, tag, etc.) based on which DOM element is selected
		if (fcall.getArguments().size()>0){
			argument = fcall.getArguments().get(0).toSource();
			//argument = argument.replace("'", "");
			argumentShortName = fcall.getArguments().get(0).shortName();
			System.out.println("argument: " + argument + " - argumentShortName: " + argumentShortName);
		}


		if (targetBody.contains("getElementById") || targetBody.contains("getElementsByTagName") || 
				targetBody.contains("getElementsByName") || targetBody.contains("getElementsByClassName") ||
				targetBody.equals("$") || targetBody.equals("jQuery"))
			functionType = "accessingDOM";
		else
			functionType = "notAccessingDOM"; 



		// e.g. document.getElemenyById(x)
		if (targetNode instanceof PropertyGet){
			PropertyGet pg = (PropertyGet)targetNode;
			targetBody = pg.getRight().toSource();
			// getting parentNodeElement e.g. document in document.getElemenyById(x) or a in a.getElemenyById(x)
			String parentNodeElement = pg.getLeft().toSource();

			// TODO: return document.getElementbyID(x) -> return should be considered as an assignment *********
			// TODO: some static analysis!!!!

			// e.g. getElementsByTagName("p")
			if (argumentShortName.equals("StringLiteral")){   

				// Adding the enclosingFunctionName to the list of DDF during static instrumentation. DDF can increase during dynamic execution if a function calls a DDF   
				JSASTVisitor.DomDependentFunctions.add(enclosingFunctionName);
				ElementTypeVariable DOMElement = new ElementTypeVariable();
				DOMElement.setParentElementJSVariable(pg.getLeft().toSource());
				// adding the child node to the list for the parent
				for (DOMConstraint d: DOMConstraintList){
					if (d.getDOMElementTypeVariable().getDOMJSVariable().equals(parentNodeElement))
						System.out.println(d.getDOMElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
				}

				DOMElement.setDOMJSVariable(DOMJSVariable);
				DOMElement.setOriginalAccessCode(parentNodeElement + "." + targetBody + "(" + argument + ")");
				System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + parentNodeElement + "." + targetBody + "(" + argument + ")");

				if (targetBody.equals("getElementById")){
					DOMElement.setId_attribute(argument);
				}else if (targetBody.equals("getElementsByTagName")){
					DOMElement.setTag_attribute(argument);
				}else if (targetBody.equals("getElementsByName")){
					DOMElement.setName_attribute(argument);
				}else if (targetBody.equals("getElementsByClassName")){
					DOMElement.setClass_attribute(argument);
				}	

				DOMConstraint dc = new DOMConstraint(DOMElement);
				dc.setEnclosingFunctionName(enclosingFunctionName);
				DOMConstraintList.add(dc);
			}else 
				// e.g.  DIV = "div";  d = getElementsByTagName(DIV);
				if (argumentShortName.equals("Name")){   
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + targetBody + "(" + argument + ")");
					//backward slicing to find the corresponding defined variable in the symbol table
					// set the id_attributeVariable to argument
					// if argument is an input of a function then assign id to "TheIDShouldBeSetFromFunctionInput"

					JSASTVisitor.DomDependentFunctions.add(enclosingFunctionName);
					ElementTypeVariable DOMElement = new ElementTypeVariable();
					DOMElement.setParentElementJSVariable(pg.getLeft().toSource());
					// adding the child node to the list for the parent
					for (DOMConstraint d: DOMConstraintList){
						if (d.getDOMElementTypeVariable().getDOMJSVariable().equals(parentNodeElement))
							System.out.println(d.getDOMElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
					}

					DOMElement.setDOMJSVariable(DOMJSVariable);
					DOMElement.setOriginalAccessCode(parentNodeElement + "." + targetBody + "(" + argument + ")");
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + parentNodeElement + "." + targetBody + "(" + argument + ")");

					if (targetBody.equals("getElementById")){
						DOMElement.setId_attribute("TheIDShouldBeSetFromFunctionInput");
					}else if (targetBody.equals("getElementsByTagName")){
						DOMElement.setTag_attribute("TheTagShouldBeSetFromFunctionInput");
					}else if (targetBody.equals("getElementsByName")){
						DOMElement.setName_attribute("TheNameShouldBeSetFromFunctionInput");
					}else if (targetBody.equals("getElementsByClassName")){
						DOMElement.setClass_attribute("TheCalssNameShouldBeSetFromFunctionInput");
					}	

					DOMConstraint dc = new DOMConstraint(DOMElement);
					dc.setEnclosingFunctionName(enclosingFunctionName);
					DOMConstraintList.add(dc);
				}else
					// e.g. d = getElementsById("item"+i);
					if (argumentShortName.equals("Name")){   
					}
		}

		// e.g. $(x)
		if(targetNode instanceof Name){
			targetBody = ((Name)fcall.getTarget()).getIdentifier();
			//System.out.println("calledFunctionName is " + calledFunctionName);

			if(targetBody.equals("$") || targetBody.equals("jQuery")){

				if (argumentShortName.equals("StringLiteral")){   // e.g. $('id')
					JSASTVisitor.DomDependentFunctions.add(enclosingFunctionName);
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + targetBody + "(" + argument + ")");

					ElementTypeVariable DOMElement = new ElementTypeVariable();
					System.out.println("parentNodeElement: document");
					DOMElement.setParentElementJSVariable("document");
					// adding the child node to the list for the parent
					for (DOMConstraint d: DOMConstraintList){
						if (d.getDOMElementTypeVariable().getDOMJSVariable().equals("document"))
							System.out.println(d.getDOMElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
					}

					DOMElement.setDOMJSVariable(DOMJSVariable);
					DOMElement.setOriginalAccessCode(targetBody + "('" + argument + "')");

					if (argument.startsWith("#")){			//	e.g. $("#myElement"); // selects one HTML element with ID "myElement"  
						DOMElement.setId_attribute(argument);
					}else if (argument.startsWith(".")){	//	e.g. $(".myClass"); // selects HTML elements with class "myClass" 
						DOMElement.setClass_attribute(argument);
					}else {									//	e.g. $("div"); // selects all HTML div elements  
						DOMElement.setTag_attribute(argument);
					}

					//TODO:
					//	e.g. $("p#myElement"); // selects paragraph elements with ID "myElement"  
					//	e.g. $("ul li a.navigation"); // selects anchors with class "navigation" that are nested in list items  

					DOMElement.setSource(node.toSource());
					DOMConstraint dc = new DOMConstraint(DOMElement);
					dc.setEnclosingFunctionName(enclosingFunctionName);
					DOMConstraintList.add(dc);

				}else if (argumentShortName.equals("Name")){   // e.g.  DIV = "<div />";  d = $(DIV);
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + targetBody + "(" + argument + ")");
					//backward slicing to find the corresponding defined variable in the symbol table
					// set the id_attributeVariable to argument
					// if argument is an input of a function then assign id to "TheIDShouldBeSetFromFunctionInput"
				}
			}

		}

	}


	private void analyseReturnNode(Map<String, String> map) {
		// TODO Auto-generated method stub
		
	}

	private void analyseAssignmentNode(Map<String, String> map) {
		// TODO Auto-generated method stub
		
	}

	private void analyseIfStatementNode(Map<String, String> map) {
		// TODO Auto-generated method stub
		
	}

	
	public List<String> generateXpathConstraints() {	
		// setting the xpathToSolve for each function
		HashSet<String> fList = JSASTVisitor.getDOMDependentFunctionsList();
		DOMDependentFunctionsList.addAll(fList); 
		HashSet<DOMConstraint> dList = JSASTVisitor.getDOMConstraintList();
		DOMConstraintList.addAll(dList); 

		for (String DDF: DOMDependentFunctionsList){
			System.out.println("****** Generating xpath for DOM constraints in DDF: " + DDF);
			String xpathToSolve = JSASTVisitor.generateXpathConstraint(DDF);
			JSASTVisitor.resetXpath();
			xpathsToSolve.add(xpathToSolve);
			System.out.println("xpathToSolve: " + xpathToSolve);
		}

		// e.g. select("html/body/descendant::switch[ancestor::body[ancestor::html]]//descendant::audio[preceding-sibling::video/test2]/
		//		descendant::seq/descendant::audio[preceding-sibling::video/test2]/test[@attr_100]")

		// System.out.println(xpathsToSolve);
		return xpathsToSolve;
	}


	public List<String> getDOMDependentFunctions() {
		return DOMDependentFunctionsList;
	}

	public List<DOMConstraint> getDOMConstraintList() {
		return DOMConstraintList;
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

}
