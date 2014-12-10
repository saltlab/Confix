package core;

import instrumentor.ASTNodeUtility;
import instrumentor.ConsoleErrorReporter;
import instrumentor.JSASTInstrumentor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.StringTokenizer;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.RhinoException;
import org.mozilla.javascript.ast.Assignment;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.IfStatement;
import org.mozilla.javascript.ast.InfixExpression;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.ParenthesizedExpression;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.UnaryExpression;
import org.mozilla.javascript.ast.VariableDeclaration;
import org.mozilla.javascript.ast.VariableInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;


/**
 * This class is used to visit analyze the trace generated during a function execution. It extracts all 
 * DOM dependent functions, and generates a constraints table as well as DOM elements table to be used later 
 * for translating to xpath and solving them.
 */

public class TraceAnalyzer {

	private static final Logger LOGGER = LoggerFactory.getLogger(TraceAnalyzer.class.getName());

	private CompilerEnvirons compilerEnvirons = new CompilerEnvirons();

	private List<String> xpathsToSolve = new ArrayList<String>();
	public HashSet<String> DOMDependentFunctions = new HashSet<String>();

	//private static HashSet<DOMConstraint> DOMConstraintList = new HashSet<DOMConstraint>();
	private static ArrayList<DOMConstraint> DOMConstraintList = new ArrayList<DOMConstraint>();

	private static ArrayList<DOMConstraint> ConditionalConstraints = new ArrayList<DOMConstraint>();     // e.g. in the case of $('#id')
	private static ArrayList<DOMConstraint> NonConditionalConstraints = new ArrayList<DOMConstraint>();  // e.g. in the case of if (d.innerHTML === 'bla')

	private static String xpath="";
	private static int numOfDOMElementsInFixture = 0;

	private String lastLoopCondition = "";
	public static int numOfCombinations = 0;
	public static int generatedID = 0;   // designed to be auto-increment and reset once fixture generated


	private List<ArrayList<DOMConstraint>> pathConditions = new ArrayList<ArrayList<DOMConstraint>>();
	private ArrayList<DOMConstraint> currentPathCondition = new ArrayList<DOMConstraint>();
	public ArrayList<DOMConstraint> getcurrentPathCondition() {
		System.out.println("Adding DOMConstraintList:" + DOMConstraintList + " to currentPathCondition: " + currentPathCondition);
		System.out.println("pathConditions:" + pathConditions);
		currentPathCondition.addAll(DOMConstraintList);
		System.out.println("currentPathCondition is:" + currentPathCondition);
		System.out.println("pathConditions:" + pathConditions);
		return currentPathCondition;
	}
	public List<ArrayList<DOMConstraint>> getPathConditions() {
		return pathConditions;
	}
	public boolean addToPathConditions(ArrayList<DOMConstraint> currentPathCondition) {
		if (currentPathCondition.isEmpty()){
			System.out.println("currentPathCondition is empty!");
			return true;
		}
		// adds the currentPathCondition to the pathConditions if not already exist
		if (pathConditions.contains(currentPathCondition)){
			System.out.println("currentPathCondition: " + currentPathCondition + " found in pathConditions: " + pathConditions);
			return false;
		}
		System.out.println("currentPathCondition: " + currentPathCondition + " added to pathConditions: " + pathConditions);
		pathConditions.add(currentPathCondition);
		return true;
	}
	public void clearCurrentPathCodition(){
		currentPathCondition.clear();
	}





	public TraceAnalyzer(){
		// adding the initial "document" node to be used for xpath generation
		ElementTypeVariable DOMElement = new ElementTypeVariable();
		DOMElement.setDOMJSVariable("document");
		DOMConstraint dc = new DOMConstraint(DOMElement);
		DOMConstraintList.add(dc);

	}

	public void resetDOMConstraintList(){
		DOMConstraintList.clear();
	}

	public void analyzeTrace(Map<String, String> map) {

		System.out.println("****** Analyzing a new trace ******");
		System.out.println("map: " + map);

		System.out.printf("statementType: %s\n", map.get("statementType"));
		System.out.printf("enclosingFunction: %s\n", map.get("enclosingFunction"));
		System.out.printf("statement: %s\n", map.get("statement"));
		System.out.printf("varList: %s\n", map.get("varList"));
		System.out.printf("varValueList: %s\n", map.get("varValueList"));
		System.out.printf("actualStatement: %s\n", map.get("actualStatement"));

		// parsing the original statement for analysis
		if (map.get("statementType").equals("functionCall"))
			analyseFunctionCallNode(map);		
		else if (map.get("statementType").equals("condition"))
			analyseIfStatementNode(map);
		else if (map.get("statementType").equals("loopCondition"))
			analyseForLoopNode(map);
		else if (map.get("statementType").equals("infix"))
			analyseInfixExpressionNode(map);
		else if (map.get("statementType").equals("initvar"))
			analyseVariableInitializerNode(map);
		else if (map.get("statementType").equals("return"))
			analyseReturnNode(map);		
	}



	/*

	The following properties can be used on all HTML elements:

	element.attribute = 	Change the attribute of an HTML element
	element.setAttribute(attribute,value) 	Change the attribute of an HTML element
	element.style 	Sets or returns the style attribute of an element
	element.style.property = 	Change the style of an HTML element

	element.attributes 	Returns a NamedNodeMap of an element's attributes
	element.childNodes 	Returns a NodeList of child nodes for an element
	element.className 	Sets or returns the class attribute of an element
	element.clientHeight 	Returns the viewable height of an element
	element.clientWidth 	Returns the viewable width of an element
	element.contentEditable 	Sets or returns whether the content of an element is editable or not
	element.firstChild 	Returns the first child of an element
	element.id 	Sets or returns the id of an element
	element.innerHTML 	Sets or returns the content of an element
	element.isContentEditable 	Returns true if the content of an element is editable, otherwise false
	element.lastChild 	Returns the last child of an element
	element.nextSibling 	Returns the next node at the same node tree level
	element.nodeName 	Returns the name of an element
	element.nodeType 	Returns the node type of an element
	element.nodeValue 	Sets or returns the value of an element
	element.offsetHeight 	Returns the height of an element
	element.offsetWidth 	Returns the width of an element
	element.offsetLeft 	Returns the horizontal offset position of an element
	element.offsetParent 	Returns the offset container of an element
	element.offsetTop 	Returns the vertical offset position of an element
	element.parentNode 	Returns the parent node of an element
	element.previousSibling 	Returns the previous element at the same node tree level
	element.scrollHeight 	Returns the entire height of an element
	element.scrollLeft 	Returns the distance between the left edge of an element and the view
	element.scrollTop 	Returns the distance between the top edge of an element and the view
	element.scrollWidth 	Returns the entire width of an element
	element.tagName 	Returns the tag name of an element
	element.textContent 	Sets or returns the textual content of a node and its descendants
	element.title 	Sets or returns the title attribute of an element

	 */


	private void analyseVariableInitializerNode(Map<String, String> map) {
		System.out.println("=== analyseVariableInitializerNode ===");

		AstNode generatedNode = parse(map.get("statement"));

		ExpressionStatement es = (ExpressionStatement)((AstNode) generatedNode.getFirstChild());
		//System.out.println("ES: " + es.toSource());
		VariableDeclaration vd = (VariableDeclaration) (AstNode) es.getExpression();
		VariableInitializer vi = (VariableInitializer) (AstNode) vd.getVariables().get(0);

		// to store the var in the JS code that a DOM element is assigned to
		String DOMJSVariable = "";
		//String DOMJSVariable = "anonym"+Integer.toString((new Random()).nextInt(100)); 

		// if a DOM element is assigned to a variable, e.g. var x = document.getElemenyById('id1')
		Name varName = (Name) vi.getTarget();
		AstNode varLiteral = vi.getInitializer();
		DOMJSVariable = varName.toSource();
		//System.out.println("parentNode.getChildBefore(ASTNode).getString() :" + parentNode.getChildBefore(ASTNode).getString());
		System.out.println("Variable:" + varName.toSource() + " initialized to: " + varLiteral.toSource());

	}


	private void analyseFunctionCallNode(Map<String, String> map) {
		System.out.println("=== analyseFunctionCallNode ===");
		/*  Detecting DOM accessing function calls
		document.getElementById() 			Returns the element that has the ID attribute with the specified value
		document.getElementsByClassName() 	Returns a NodeList containing all elements with the specified class name
		document.getElementsByName() 		Accesses all elements with a specified name
		document.getElementsByTagName() 	Returns a NodeList containing all elements with the specified tagname
		$()									(jQuery) : Find an element by element id
		 */		
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
		String enclosingFunctionName = 	map.get("enclosingFunction");
		// to store the var in the JS code that a DOM element is assigned to
		String DOMJSVariable = "";
		//String DOMJSVariable = "anonym"+Integer.toString((new Random()).nextInt(100)); 


		/*

		System.out.printf("statementType: %s\n", map.get("statementType"));
		System.out.printf("enclosingFunction: %s\n", map.get("enclosingFunction"));
		System.out.printf("statement: %s\n", map.get("statement"));
		System.out.printf("varList: %s\n", map.get("varList"));
		System.out.printf("varValueList: %s\n", map.get("varValueList"));
		System.out.printf("actualStatement: %s\n", map.get("actualStatement"));

		 */


		// parsing actual statement to see if there is a DOM element access. e.g. actualStatement: [org.openqa.selenium.remote.RemoteWebElement@1e2123e2 -> unknown locator]
		String RemoteWebElement = "";
		String actualStatement = String.format("%s", map.get("actualStatement"));
		if (actualStatement.contains("RemoteWebElement")){
			// extract RemoteWebElementID
			RemoteWebElement = actualStatement.substring(actualStatement.lastIndexOf("@") + 1, actualStatement.indexOf(" "));
			System.out.println("RemoteWebElement: " + RemoteWebElement);
		}


		ArrayList<String> argumentList = getArguments(map, "varList");
		System.out.println("argumentList: " + argumentList);
		ArrayList<String> argumentValueList = getArguments(map, "varValueList");
		System.out.println("argumentValueList: " + argumentValueList);

		// if varList and varValueList are different then a variable is used to refer to an element locator


		// e.g. var x = document.getElemenyById('id1')
		if (parentNode.shortName().equals("VariableInitializer")){
			VariableInitializer vi = (VariableInitializer)parentNode;
			Name varName = (Name) vi.getTarget();
			AstNode varLiteral = vi.getInitializer();
			DOMJSVariable = varName.toSource();
			//System.out.println("parentNode.getChildBefore(ASTNode).getString() :" + parentNode.getChildBefore(ASTNode).getString());
			System.out.println("Variable:" + varName.toSource() + " initialized to: " + varLiteral.toSource());
		}else 
			// e.g. x = document.getElemenyById('id2')
			if (parentNode.shortName().equals("Assignment")){
				Assignment asmt = (Assignment)parentNode;
				DOMJSVariable = asmt.getLeft().toSource();
			}

		// getting the argument (id, class, tag, etc.) based on which DOM element is selected
		if (fcall.getArguments().size()>0){
			argument = fcall.getArguments().get(0).toSource();
			argument = argument.replace("'", "");
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
		if (targetNode instanceof PropertyGet && functionType.equals("accessingDOM")){
			PropertyGet pg = (PropertyGet)targetNode;
			targetBody = pg.getRight().toSource();
			// getting parentNodeElement e.g. document in document.getElemenyById(x) or a in a.getElemenyById(x)
			String parentNodeElement = pg.getLeft().toSource();

			// TODO: return document.getElementbyID(x) -> return should be considered as an assignment *********
			// TODO: some static analysis!!!!

			// e.g. getElementsByTagName("p")
			//if (argumentShortName.equals("StringLiteral")){   

			// Adding the enclosingFunctionName to the list of DDF during static instrumentation. DDF can increase during dynamic execution if a function calls a DDF   
			DOMDependentFunctions.add(enclosingFunctionName);
			ElementTypeVariable DOMElement = new ElementTypeVariable();
			DOMElement.setParentElementJSVariable(parentNodeElement);
			// adding the child node to the list for the parent
			for (DOMConstraint d: DOMConstraintList){
				if (d.getElementTypeVariable().getDOMJSVariable().equals(parentNodeElement))
					System.out.println(d.getElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
			}

			DOMElement.setDOMJSVariable(DOMJSVariable);
			if (argumentValueList.size() > 0){
				DOMElement.setOriginalAccessCode(parentNodeElement + "." + targetBody + "(" + argumentValueList.get(0) + ")");
				System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + parentNodeElement + "." + targetBody + "('" + argumentValueList.get(0) + "')");

				if (targetBody.equals("getElementById")){
					DOMElement.setId_attribute(argumentValueList.get(0));
				}else if (targetBody.equals("getElementsByTagName")){
					DOMElement.setTag_attribute(argumentValueList.get(0));
				}else if (targetBody.equals("getElementsByName")){
					DOMElement.setName_attribute(argumentValueList.get(0));
				}else if (targetBody.equals("getElementsByClassName")){
					DOMElement.setClass_attribute(argumentValueList.get(0));
				}	
			}

			DOMElement.setRemoteWebElementID(RemoteWebElement);
			DOMConstraint dc = new DOMConstraint(DOMElement);
			dc.setEnclosingFunctionName(enclosingFunctionName);
			if (!DOMConstraintList.contains(dc))
				DOMConstraintList.add(dc);


			//}else 
			// e.g.  DIV = "div";  d = getElementsByTagName(DIV);

			/*
				if (argumentShortName.equals("Name")){   
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + targetBody + "(" + argumentValueList.get(0) + ")");
					//backward slicing to find the corresponding defined variable in the symbol table
					// set the id_attributeVariable to argument
					// if argument is an input of a function then assign id to "TheIDShouldBeSetFromFunctionInput"

					DOMDependentFunctions.add(enclosingFunctionName);
					ElementTypeVariable DOMElement = new ElementTypeVariable();
					DOMElement.setParentElementJSVariable(pg.getLeft().toSource());
					// adding the child node to the list for the parent
					for (DOMConstraint d: DOMConstraintList){
						if (d.getElementTypeVariable().getDOMJSVariable().equals(parentNodeElement))
							System.out.println(d.getElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
					}

					DOMElement.setDOMJSVariable(DOMJSVariable);
					DOMElement.setOriginalAccessCode(parentNodeElement + "." + targetBody + "(" + argumentValueList.get(0) + ")");
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + parentNodeElement + "." + targetBody + "(" + argumentValueList.get(0) + ")");

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
			 */
		}

		// e.g. $(x)
		if(targetNode instanceof Name){
			targetBody = ((Name)fcall.getTarget()).getIdentifier();
			//System.out.println("calledFunctionName is " + calledFunctionName);

			if(targetBody.equals("$") || targetBody.equals("jQuery")){

				if (argumentShortName.equals("StringLiteral")){   // e.g. $('id')
					DOMDependentFunctions.add(enclosingFunctionName);
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + targetBody + "(" + argumentValueList.get(0) + ")");

					ElementTypeVariable DOMElement = new ElementTypeVariable();
					System.out.println("parentNodeElement: document");
					DOMElement.setParentElementJSVariable("document");
					// adding the child node to the list for the parent
					for (DOMConstraint d: DOMConstraintList){
						if (d.getElementTypeVariable().getDOMJSVariable().equals("document"))
							System.out.println(d.getElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
					}

					DOMElement.setDOMJSVariable(DOMJSVariable);
					DOMElement.setOriginalAccessCode(targetBody + "('" + argumentValueList.get(0) + "')");

					if (argumentValueList.get(0).startsWith("#")){			//	e.g. $("#myElement"); // selects one HTML element with ID "myElement"  
						DOMElement.setId_attribute(argumentValueList.get(0));
					}else if (argumentValueList.get(0).startsWith(".")){	//	e.g. $(".myClass"); // selects HTML elements with class "myClass" 
						DOMElement.setClass_attribute(argumentValueList.get(0));
					}else {									//	e.g. $("div"); // selects all HTML div elements  
						DOMElement.setTag_attribute(argumentValueList.get(0));
					}

					//TODO:
					//	e.g. $("p#myElement"); // selects paragraph elements with ID "myElement"  
					//	e.g. $("ul li a.navigation"); // selects anchors with class "navigation" that are nested in list items  

					DOMElement.setRemoteWebElementID(RemoteWebElement);
					DOMElement.setSource(node.toSource());
					DOMConstraint dc = new DOMConstraint(DOMElement);
					dc.setEnclosingFunctionName(enclosingFunctionName);
					if (!DOMConstraintList.contains(dc))
						DOMConstraintList.add(dc);

				}else if (argumentShortName.equals("Name")){   // e.g.  DIV = "<div />";  d = $(DIV);
					System.out.println("Function " + enclosingFunctionName + " accesses DOM via " + targetBody + "(" + argumentValueList.get(0) + ")");
					//backward slicing to find the corresponding defined variable in the symbol table
					// set the id_attributeVariable to argument
					// if argument is an input of a function then assign id to "TheIDShouldBeSetFromFunctionInput"
				}
			}

		}

	}

	private ArrayList<String> getArguments(Map<String, String> map, String value){
		ArrayList<String> result = new ArrayList<String>();
		String temp = String.format("%s", map.get(value));
		temp = temp.replace("[", "").replace("]", "").replace(" ", "");
		StringTokenizer st = new StringTokenizer(temp, ",");
		while (st.hasMoreElements()) {
			result.add((String) st.nextElement());
		}
		return result;
	}


	private void analyseReturnNode(Map<String, String> map) {
		System.out.println("=== analyseReturnNode ===");
		String returenedValue = String.format("%s", map.get("actualStatement"));
		if (returenedValue.contains("org.openqa.selenium.remote.RemoteWebElement")){
			System.out.println("Function " + map.get("enclosingFunction") + " returns a DOM element.");
		}

	}

	private void analyseIfStatementNode(Map<String, String> map) {

		System.out.println("=== analyseIfStatementNode ===");

		AstNode generatedNode = parse(map.get("statement"));
		ExpressionStatement es = (ExpressionStatement)((AstNode) generatedNode.getFirstChild());
		AstNode conditionNode = es.getExpression();

		// check if it is a DOM dependent condition
		if (isDOMDependentCondition(conditionNode)){

			System.out.println("DOM dependent condtion found!");
			System.out.println("conditionNode.shortName(): " + conditionNode.shortName());
			System.out.println("conditionNode.toSource(): \n" + conditionNode.toSource());
			System.out.println("conditionNode.debugPrint(): \n" + conditionNode.debugPrint());

			ArrayList<DOMConstraint> pathCondition = new ArrayList<DOMConstraint>(); 

			analyseConditionNode(conditionNode);

			//ConditionalConstraints
			//currentPathCondition.add(pathCondition);
		}else{
			System.out.println("Condtion is not DOM dependent!");
			System.out.println("conditionNode.shortName(): " + conditionNode.shortName());
			System.out.println("conditionNode.toSource(): \n" + conditionNode.toSource());
		}
	}


	// check if it is a DOM dependent condition
	private boolean isDOMDependentCondition(AstNode conditionNode) {

		// 1) Extracting variables used in the condition.
		System.out.println("Extracting variables used in the condition");
		String debugPrint = conditionNode.debugPrint();
		ArrayList<String> candidateDOMJSVariable = new ArrayList<String>();
		int index = debugPrint.indexOf("NAME");
		while (index>=0){
			String token  = debugPrint.substring(debugPrint.indexOf("NAME"));
			token = token.substring(token.indexOf(" ")+1);
			token = token.substring(token.indexOf(" ")+1);
			token = token.substring(token.indexOf(" ")+1);
			if (token.indexOf("\n")>0){
				candidateDOMJSVariable.add(token.substring(0,token.indexOf("\n")));
				System.out.println(token.substring(0,token.indexOf("\n")));
			}
			else{ 
				System.out.println(token);
				candidateDOMJSVariable.add(token);
			}
			debugPrint = debugPrint.substring(debugPrint.indexOf("NAME")+1, debugPrint.length()-1);
			index = debugPrint.indexOf("NAME");
		}

		// 2.1) check if any variable refers to a known DOMJSVariable
		for (String candidateVar :candidateDOMJSVariable){
			for (DOMConstraint dc: DOMConstraintList){
				if (dc.getElementTypeVariable().getDOMJSVariable().equals(candidateVar)){
					System.out.println(candidateVar + " is a DOM JS variable!");
					System.out.println("Condition: " + conditionNode.toSource() + " is DOM dependent");
					return true;
				}
			}
		}
		// 2.2) check if any variable refers to a known DOMJSVariable attribute
		for (String candidateVar :candidateDOMJSVariable){
			for (DOMConstraint dc: DOMConstraintList){
				if (dc.getElementTypeVariable().getId_attributeVariable().equals(candidateVar)
						|| dc.getElementTypeVariable().getId_attributeVariable().equals(candidateVar)
						|| dc.getElementTypeVariable().getInnerHTML_attributeVariable().equals(candidateVar)
						|| dc.getElementTypeVariable().getName_attributeVariable().equals(candidateVar)
						|| dc.getElementTypeVariable().getSrc_attributeVariable().equals(candidateVar)
						|| dc.getElementTypeVariable().getType_attributeVariable().equals(candidateVar)
						|| dc.getElementTypeVariable().getValue_attributeVariable().equals(candidateVar)
						){
					System.out.println(candidateVar + " is a DOM attribute JS variable!");
					System.out.println("Condition: " + conditionNode.toSource() + " is DOM dependent");
					return true;
				}
			}
		}

		// 2.2) check if an attribute of a recently found DOMJSVariable attribute
		for (String candidateVar :candidateDOMJSVariable){
			if(candidateVar.equals("check") || candidateVar.equals("checked")){
					System.out.println(candidateVar + " attribute was used!");
					System.out.println("Condition: " + conditionNode.toSource() + " is DOM dependent");
					return true;
			}
		}

		return false;
	}


	private void analyseForLoopNode(Map<String, String> map) {

		System.out.println("=== analyseForLoopNode ===");

		AstNode generatedNode = parse(map.get("statement"));
		ExpressionStatement es = (ExpressionStatement)((AstNode) generatedNode.getFirstChild());
		AstNode conditionNode = es.getExpression();

		// check if it is a DOM dependent condition
		if (isDOMDependentCondition(conditionNode)){
			System.out.println("DOMDependent condtion found!");
			System.out.println("conditionNode.shortName(): " + conditionNode.shortName());
			System.out.println("conditionNode.toSource(): " + conditionNode.toSource());
			System.out.println("conditionNode.debugPrint(): \n" + conditionNode.debugPrint());

			ArrayList<DOMConstraint> pathCondition = new ArrayList<DOMConstraint>(); 

			// Consider loop conditions only once
			if (!conditionNode.toSource().equals(lastLoopCondition)){
				lastLoopCondition = conditionNode.toSource();
				analyseConditionNode(conditionNode);

				//pathConditions.add(pathCondition);

			}else{
				System.out.println("Repeated loop condition found!");
			}
		}else{
			System.out.println("Condtion is not DOM dependent!");
			System.out.println("conditionNode.shortName(): " + conditionNode.shortName());
			System.out.println("conditionNode.toSource(): \n" + conditionNode.toSource());
		}
	}


	private void analyseConditionNode(AstNode conditionNode) {
		String conditionShortName = conditionNode.shortName();

		if (conditionShortName.equals("InfixExpression"))		// e.g. x<5
			analyseInfixExpressionInCondition(conditionNode);
		else if (conditionShortName.equals("Name"))				// e.g. t  -> variable should be true to go in
			analyseNameInCondition(conditionNode);
		else if (conditionShortName.equals("UnaryExpression"))	// e.g. !t  -> variable should be false to go in
			analyseUnaryExpressionInCondition(conditionNode);
		else if (conditionShortName.equals("PropertyGet"))		// e.g. a.innerHTML
			analysePropertyGetInCondition(conditionNode);
		else if (conditionShortName.equals("ParenthesizedExpression"))		// e.g. (x<4  && y)
			analyseParenthesizedExpressionCondition(conditionNode);
		else {
			System.out.println("Condition is of type: " + conditionShortName.equals("InfixExpression") + ". Not supported yet!");
		}

	}


	private void analyseParenthesizedExpressionCondition(AstNode conditionNode) {
		System.out.println("analyseParenthesizedExpressionCondition");
		ParenthesizedExpression pe = (ParenthesizedExpression) conditionNode;
		if (((AstNode) pe.getExpression()) instanceof InfixExpression){
			System.out.println("Recursive call to analyseInfixExpressionInCondition for the expression inside the parenthesis");
			analyseConditionNode((AstNode) pe.getExpression());
		}
	}


	private void analysePropertyGetInCondition(AstNode conditionNode) {
		System.out.println("analysePropertyGetInCondition");
		PropertyGet pg = (PropertyGet)conditionNode;
		String property = pg.getRight().toSource();
		String left = pg.getLeft().toSource();

		System.out.println("property: " + property);
		System.out.println("left: " + left);

		if (property.equals("innerHTML")){
			System.out.println("innerHTML found");
		}else if (property.equals("length")){
			// checking for different possibilities
			AstNode leftNode = pg.getLeft();

			//  e.g. x.children.length
			if (leftNode instanceof PropertyGet){
				PropertyGet pg2 = (PropertyGet)leftNode;
				//System.out.println("pg2.getLeft().toSource(): " + pg2.getLeft().toSource());
				//System.out.println("pg2.getRight().toSource(): " + pg2.getRight().toSource());
				if (pg2.getRight().toSource().equals("children")){
					System.out.println("pg2.getLeft().toSource(): " + pg2.getLeft().toSource());   // e.g. x
					System.out.println("pg2.getRight().toSource(): " + pg2.getRight().toSource()); 

					// add a child node to the parent node in the fixture

					AstNode parentNode = conditionNode.getParent();
					// if the parent is infix e.g. itemList.children.length === 0
					if (parentNode.shortName().equals("InfixExpression")){
						System.out.println("parentNode.toSource(): " + parentNode.toSource());
						InfixExpression pie = (InfixExpression) parentNode;
						String pLeft = pie.getLeft().toSource();	// e.g. itemList.children.length
						String pOprator = ASTNodeUtility.operatorToString(pie.getOperator()); // e.g. ===
						String pRight = pie.getRight().toSource(); // e.g. 0

						ElementTypeVariable DOMElement = new ElementTypeVariable();
						DOMElement.setParentElementJSVariable(pg2.getLeft().toSource());
						// adding the child node to the list for the parent
						for (DOMConstraint d: DOMConstraintList){
							if (d.getElementTypeVariable().getDOMJSVariable().equals(pg2.getLeft().toSource()))
								System.out.println("found " + d.getElementTypeVariable().getDOMJSVariable() + " as the parent of the new node!");
						}

						DOMElement.setDOMJSVariable("");
						//DOMElement.setRemoteWebElementID(RemoteWebElement);
						DOMConstraint dc = new DOMConstraint(DOMElement);
						//dc.setEnclosingFunctionName(enclosingFunctionName);

						// check if it is needed to add more than one child, else check if a child already exist
						for (DOMConstraint d: DOMConstraintList){
							if (d.getElementTypeVariable().getParentElementJSVariable().equals(pg2.getLeft().toSource())){
								System.out.println("We already have " + d.getElementTypeVariable().getDOMJSVariable() + " as a child node of the parent node!");
								boolean shouldAddMorethanOneChild = false;
								if (!shouldAddMorethanOneChild){
									return;
								}
							}
						}
						// now that the node is the first child, or we can add more than one children, add the new child to the DOMConstraintList  
						if (!DOMConstraintList.contains(dc))
							DOMConstraintList.add(dc);
					}
				}
			}

		}else if (property.equals("checked")){
			
			
			DOMConstraintList.get(DOMConstraintList.size()-1).getElementTypeVariable().setTag_attribute("input");
			DOMConstraintList.get(DOMConstraintList.size()-1).getElementTypeVariable().setChecked_attribute("true");
			
			/*
			// checking for different possibilities
			AstNode leftNode = pg.getLeft();

			//  e.g. x.children.length
			if (leftNode instanceof PropertyGet){
				PropertyGet pg2 = (PropertyGet)leftNode;
				//System.out.println("pg2.getLeft().toSource(): " + pg2.getLeft().toSource());
				//System.out.println("pg2.getRight().toSource(): " + pg2.getRight().toSource());
				if (pg2.getRight().toSource().equals("children")){
					System.out.println("pg2.getLeft().toSource(): " + pg2.getLeft().toSource());   // e.g. x
					System.out.println("pg2.getRight().toSource(): " + pg2.getRight().toSource()); 

					// add a child node to the parent node in the fixture

					AstNode parentNode = conditionNode.getParent();
					// if the parent is infix e.g. itemList.children.length === 0
					if (parentNode.shortName().equals("InfixExpression")){
						System.out.println("parentNode.toSource(): " + parentNode.toSource());
						InfixExpression pie = (InfixExpression) parentNode;
						String pLeft = pie.getLeft().toSource();	// e.g. itemList.children.length
						String pOprator = ASTNodeUtility.operatorToString(pie.getOperator()); // e.g. ===
						String pRight = pie.getRight().toSource(); // e.g. 0

						ElementTypeVariable DOMElement = new ElementTypeVariable();
						DOMElement.setParentElementJSVariable(pg2.getLeft().toSource());
						// adding the child node to the list for the parent
						for (DOMConstraint d: DOMConstraintList){
							if (d.getElementTypeVariable().getDOMJSVariable().equals(pg2.getLeft().toSource()))
								System.out.println("found " + d.getElementTypeVariable().getDOMJSVariable() + " as the parent of the new node!");
						}

						DOMElement.setDOMJSVariable("");
						//DOMElement.setRemoteWebElementID(RemoteWebElement);
						DOMConstraint dc = new DOMConstraint(DOMElement);
						//dc.setEnclosingFunctionName(enclosingFunctionName);

						// check if it is needed to add more than one child, else check if a child already exist
						for (DOMConstraint d: DOMConstraintList){
							if (d.getElementTypeVariable().getParentElementJSVariable().equals(pg2.getLeft().toSource())){
								System.out.println("We already have " + d.getElementTypeVariable().getDOMJSVariable() + " as a child node of the parent node!");
								boolean shouldAddMorethanOneChild = false;
								if (!shouldAddMorethanOneChild){
									return;
								}
							}
						}
						// now that the node is the first child, or we can add more than one children, add the new child to the DOMConstraintList  
						if (!DOMConstraintList.contains(dc))
							DOMConstraintList.add(dc);
					}
				}
			}
			*/
		}

	}


	private void analyseUnaryExpressionInCondition(AstNode conditionNode) {
		System.out.println("analyseUnaryExpressionInCondition");
		UnaryExpression ue = (UnaryExpression) conditionNode;
		String oprator = ASTNodeUtility.operatorToString(ue.getOperator());
		System.out.println("Oprator: " + oprator);
		System.out.println("Operand: " + ue.getOperand().toSource());
	}

	private void analyseNameInCondition(AstNode conditionNode) {
		// e.g. if (t)  -> variable should be true to go in
		System.out.println("analyseNameInCondition");
		Name varName = (Name) conditionNode;
		System.out.println("varName.toSource(): " + varName.toSource());
	}

	private void analyseInfixExpressionInCondition(AstNode conditionNode) {
		// e.g. if (x<5)
		String conditionShortName = conditionNode.shortName();

		System.out.println("analyseInfixExpressionInCondition");
		InfixExpression infix = (InfixExpression) conditionNode;
		String leftOperand = infix.getLeft().toSource();
		String oprator = ASTNodeUtility.operatorToString(infix.getOperator());
		String rightOperand = infix.getRight().toSource();

		System.out.println("Left: " + leftOperand);
		System.out.println("Operator: " + oprator);
		System.out.println("Right: " + rightOperand);	

		System.out.println("infix.getLeft().shortName: " + infix.getLeft().shortName());
		analyseConditionNode(infix.getLeft());

		System.out.println("infix.getRight().shortName: " + infix.getRight().shortName());
		analyseConditionNode(infix.getRight());



		// TODO: check if the path condition is on a DOM element

		// adding the pathCondition to the 
		/*ElementTypeVariable DOMElement = new ElementTypeVariable();
			System.out.println("parentNodeElement: document");
			DOMElement.setParentElementJSVariable("document");
			// adding the child node to the list for the parent
			for (DOMConstraint d: DOMConstraintList){
				if (d.getDOMElementTypeVariable().getDOMJSVariable().equals("document"))
					System.out.println(d.getDOMElementTypeVariable().getDOMJSVariable() + " is the parent of " + DOMJSVariable);
			}

			DOMElement.setDOMJSVariable(DOMJSVariable);

			DOMElement.setId_attribute(argument);
			DOMConstraint dc = new DOMConstraint(DOMElement);
		 */		


		// check if operands are not simple expressions

		//analyseConditionNode();


		if (oprator.equals("&&") || oprator.equals("||")){
			// TODO: Considering multiple constraints
			analyseConditionNode(infix.getLeft());
			analyseConditionNode(infix.getRight());

			/*
			if (infix.getLeft() instanceof InfixExpression){
				System.out.println("Recursive call to analyseInfixExpressionInCondition for the left operand");
				analyseInfixExpressionInCondition(infix.getLeft());
			}
			if (infix.getRight() instanceof InfixExpression){
				System.out.println("Recursive call to analyseInfixExpressionInCondition for the right operand");
				analyseInfixExpressionInCondition(infix.getRight());
			}*/

		}
		else if (oprator.equals("==") || oprator.equals("===") || oprator.equals("!==")  || oprator.equals("!=") || oprator.equals(">") || oprator.equals("<") || oprator.equals(">=") || oprator.equals("<=")){  
			if (infix.getLeft() instanceof Name){  // e.g. if (a == ...)
				// search among JSVariables
				for (DOMConstraint dc: DOMConstraintList){ // e.g. if we have a = $('id') or a = $('id').html()  and then if (a == X)

					System.out.println("dc.getElementTypeVariable(): " + dc.getElementTypeVariable());

					ElementTypeVariable etv = dc.getElementTypeVariable();
					if (etv.getDOMJSVariable().equals(leftOperand)){
						System.out.println(etv.getDOMJSVariable() + " variable which refers to a DOM element is used in a condition");
						break;
					}else if (etv.getId_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getId_attributeVariable() + " variable which refers to an id attribute of a DOM element is used in a condition");

						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}else if (etv.getType_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getType_attributeVariable() + " variable which refers to a type attribute of a DOM element is used in a condition");

						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}else if (etv.getName_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getName_attributeVariable() + " variable which refers to a name attribute of a DOM element is used in a condition");

						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}else if (etv.getClass_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getClass_attributeVariable() + " variable which refers to a class attribute of a DOM element is used in a condition");

						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}else if (etv.getValue_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getValue_attributeVariable() + " variable which refers to a value attribute of a DOM element is used in a condition");
						if (oprator.equals("==") || oprator.equals("==="))
							etv.setValue_attribute(rightOperand);
						else if (oprator.equals("!==") || oprator.equals("!="))
							etv.setValue_attribute(rightOperand+"1");
						else if (oprator.equals(">") || oprator.equals(">="))
							etv.setValue_attribute(Integer.toString(Integer.parseInt(rightOperand)+1));
						else if (oprator.equals("<") || oprator.equals("<="))
							etv.setValue_attribute(Integer.toString(Integer.parseInt(rightOperand)-1));
						System.out.println("evt:" + etv);
						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}else if (etv.getInnerHTML_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getInnerHTML_attributeVariable() + " variable which refers to an innerHTML attribute of a DOM element is used in a condition");
						if (oprator.equals("==") || oprator.equals("==="))
							etv.setInnerHTML_attribute(rightOperand);
						else if (oprator.equals("!==") || oprator.equals("!="))
							etv.setInnerHTML_attribute("Not"+rightOperand);
						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}else if (etv.getSrc_attributeVariable().equals(leftOperand)){
						System.out.println(etv.getSrc_attributeVariable() + " variable which refers to an src attribute of a DOM element is used in a condition");

						// TODO: need to be checked later
						String condition = conditionNode.toSource();
						dc.addConstraint(condition, true);
						break;
					}
				}
			}
		}
	}





	private void analyseInfixExpressionNode(Map<String, String> map) {
		System.out.println("=== analyseInfixExpressionNode ===");
		String statement = map.get("statement");
		// TODO: needs refactoring. This is done temorary for the phormer app
		statement = statement.replace("\"document.cookie.split(\"; \")", "\"document.cookie.split(\\\"; \\\")");
		//System.out.println(statement);
		AstNode generatedNode = parse(statement);
		ExpressionStatement es = (ExpressionStatement)((AstNode) generatedNode.getFirstChild());
		InfixExpression infix = (InfixExpression) es.getExpression();
		String left = infix.getLeft().toSource();
		String oprator = ASTNodeUtility.operatorToString(infix.getOperator());
		String right = infix.getRight().toSource();

		System.out.println("Left: " + left);
		System.out.println("Operator: " + oprator);
		System.out.println("Right: " + right);			

		// TODO

		if (oprator.equals("=")){  // Assignment: e.g. t = getElemById('x')

			String returenedValue = String.format("%s", map.get("actualStatement"));
			if (returenedValue.contains("org.openqa.selenium.remote.RemoteWebElement")){
				System.out.println("Variable "+ left + " referes to a DOM element.");
				// parsing actual statement to see if there is a DOM element access. e.g. actualStatement: [org.openqa.selenium.remote.RemoteWebElement@1e2123e2 -> unknown locator]
				String RemoteWebElement = "";
				// extract RemoteWebElementID
				RemoteWebElement = returenedValue.substring(returenedValue.lastIndexOf("@") + 1, returenedValue.indexOf(" "));
				System.out.println("RemoteWebElement: " + RemoteWebElement);

				for (DOMConstraint dc: DOMConstraintList)
					if (dc.getElementTypeVariable().getRemoteWebElementID().equals(RemoteWebElement)){
						dc.getElementTypeVariable().setDOMJSVariable(left);
						System.out.println("Set the RemoteWebElement for " + dc.getElementTypeVariable());
						break;
					}

			}



			// assigning with an attribute value of an element. e.g. a = b.innerHTML or a = b.value
			// search among current DOMJSVariables, if the RemoteWebElementID is equal to the nodes value 

			if (right.contains(".value")){
				// e.g. document.getElementById('t').value
				System.out.println("Variable "+ left + " referes to a DOM element's value attribute.");

				ArrayList<String> argumentValueList = getArguments(map, "varValueList"); // e.g. varValueList: [[org.openqa.selenium.remote.RemoteWebElement@1c5a0a44 -> unknown locator]]
				String DOMAccess = argumentValueList.get(0);

				if (DOMAccess.contains("org.openqa.selenium.remote.RemoteWebElement")){
					// parsing actual statement to see if there is a DOM element access. e.g. actualStatement: [org.openqa.selenium.remote.RemoteWebElement@1e2123e2 -> unknown locator]
					String RemoteWebElement = "";
					// extract RemoteWebElementID
					RemoteWebElement = DOMAccess.substring(DOMAccess.lastIndexOf("@") + 1, DOMAccess.indexOf("->"));
					System.out.println("RemoteWebElement: " + RemoteWebElement);

					boolean foundDOMElement = false;
					for (DOMConstraint dc: DOMConstraintList)
						if (dc.getElementTypeVariable().getRemoteWebElementID().equals(RemoteWebElement)){
							dc.getElementTypeVariable().setValue_attributeVariable(left);
							System.out.println(left + " is set as the variable refering to the value attribute of element:" + dc.getElementTypeVariable());
							foundDOMElement = true;
							break;
						}
					if (!foundDOMElement){
						// the value attribute is not set for an existing element. check if is set for a child node of an existing DOM element
						if (right.contains(".children")){
							String parentNodeInJS = right.substring(0, right.indexOf(".children"));
							System.out.println("The value attribute of a child node of a JSDOMVariable " + parentNodeInJS + " is assigned to the variable:" + left);
							// updating the child node to the list for the parent
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getElementTypeVariable().getParentElementJSVariable().equals(parentNodeInJS)){
									dc.getElementTypeVariable().setValue_attributeVariable(left);
									System.out.println(left + " is set as the variable refering to the value attribute of element:" + dc.getElementTypeVariable());
									break;
								}
						}
					}

				}else{
					System.out.println("Something is wrong! Value was used but not for a DOM element!!");
				}

				AstNode parentNode = infix.getParent();
				System.out.println("Value attribute used!");
				System.out.println("parentNode.toSource(): " + parentNode.toSource());
				System.out.println("parentNode.shortName(): " + parentNode.shortName());
			}
			else if (right.contains(".innerHTML")){
				// e.g. right is document.getElementById('t').innerHTML
				System.out.println("Variable "+ left + " referes to a DOM element's innerHTML attribute.");

				ArrayList<String> argumentValueList = getArguments(map, "varValueList"); // e.g. varValueList: [[org.openqa.selenium.remote.RemoteWebElement@1c5a0a44 -> unknown locator]]
				String DOMAccess = argumentValueList.get(0);

				if (DOMAccess.contains("org.openqa.selenium.remote.RemoteWebElement")){
					// parsing actual statement to see if there is a DOM element access. e.g. actualStatement: [org.openqa.selenium.remote.RemoteWebElement@1e2123e2 -> unknown locator]
					String RemoteWebElement = "";
					// extract RemoteWebElementID
					RemoteWebElement = DOMAccess.substring(DOMAccess.lastIndexOf("@") + 1, DOMAccess.indexOf("->"));
					System.out.println("RemoteWebElement: " + RemoteWebElement);

					boolean foundDOMElement = false;
					for (DOMConstraint dc: DOMConstraintList)
						if (dc.getElementTypeVariable().getRemoteWebElementID().equals(RemoteWebElement)){
							dc.getElementTypeVariable().setInnerHTML_attributeVariable(left);
							System.out.println(left + " is set as the variable refering to the innerHTML attribute of element:" + dc.getElementTypeVariable());
							foundDOMElement = true;
							break;
						}
					if (!foundDOMElement){
						// the innerHTML attribute is not set for an existing element. check if is set for a child node of an existing DOM element
						if (right.contains(".children")){
							String parentNodeInJS = right.substring(0, right.indexOf(".children"));
							System.out.println("The innerHTML attribute of a child node of a JSDOMVariable " + parentNodeInJS + " is assigned to the variable:" + left);
							// updating the child node to the list for the parent
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getElementTypeVariable().getParentElementJSVariable().equals(parentNodeInJS)){
									dc.getElementTypeVariable().setInnerHTML_attributeVariable(left);
									System.out.println(left + " is set as the variable refering to the innerHTML attribute of element:" + dc.getElementTypeVariable());
									break;
								}
						}
					}

				}else{
					System.out.println("Something is wrong! Value was used but not for a DOM element!!");
				}

				AstNode parentNode = infix.getParent();
				System.out.println("innerHTML attribute used!");
				System.out.println("parentNode.toSource(): " + parentNode.toSource());
				System.out.println("parentNode.shortName(): " + parentNode.shortName());
			}




		}else if (oprator.equals("GETPROP")){  // -> nodeName: PropertyGet, e.g. Left: $("p").innerHTML
			if (right.equals("innerHTML")){
				// e.g. $("p").innerHTML
				AstNode parentNode = infix.getParent();
				System.out.println("parentNode.toSource(): " + parentNode.toSource());
				System.out.println("parentNode.shortName(): " + parentNode.shortName());

				if (parentNode instanceof IfStatement){
					// innerHTML of an element was used in an if condition -> e.g. if (a.innerHTML)
					System.out.println(left + ".innerHTML is used in an if condition");
					if (infix.getLeft() instanceof FunctionCall){
						// this is to make sure infix.getLeft() will be added if not already exist
						//instrumentFunctionCallNode(infix.getLeft());
						for (DOMConstraint dc: DOMConstraintList)
							if (dc.getElementTypeVariable().getSource().equals(left))
								dc.addConstraint(left+".innerHTML", true);
					}
				}else if (parentNode instanceof Assignment){
					// innerHTML of an element value was used or set -> e.g. a.innerHTML = x .... y = a.innerHTML 
					Assignment asmt = (Assignment)parentNode;
					if (asmt.getLeft().equals(infix)){ 
						// innerHTML is set e.g. a.innerHTML = x
						System.out.println(left + ".innerHTML is set to " + asmt.getRight().toSource());
						// TODO: Check if the asmt.getRight() value to be used exists
					}else{
						// innerHTML is used e.g. y = a.innerHTML
						System.out.println(asmt.getLeft().toSource() + " is set to " + left + ".innerHTML");
						// adding the variable storing this attribute
						if (infix.getLeft() instanceof FunctionCall){
							// e.g. f(x).innerHTML
							System.out.println("analyseFunctionCallNode");
							// this is to make sure infix.getLeft() will be added if not already exist
							//instrumentFunctionCallNode(infix.getLeft());
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getElementTypeVariable().getSource().equals(left))
									dc.getElementTypeVariable().setInnerHTML_attributeVariable(asmt.getLeft().toSource());
						}
					}
				}else if (parentNode instanceof VariableInitializer){
					// innerHTML of an element used to initialize a variable -> e.g. var v = dg('indicator').innerHTML
					VariableInitializer vi = (VariableInitializer)parentNode;
					System.out.println("innerHTML property for " + left + " is used to initialize " + vi.getTarget().toSource());
					// TODO: in this case there should be sth as an innerHTML value
				}
			}else if (right.equals("checked")){
				// e.g. if(dg('item').checked)
				AstNode parentNode = infix.getParent();
				System.out.println("parentNode.toSource(): " + parentNode.toSource());
				System.out.println("parentNode.shortName(): " + parentNode.shortName());
				//  just a use of checked prop, make sure the prop exist and the tag is set to either input, etc...
				if (infix.getLeft() instanceof FunctionCall){
					// this is to make sure ie.getLeft() will be added if not already exist
					//instrumentFunctionCallNode(infix.getLeft());
					for (DOMConstraint dc: DOMConstraintList)
						if (dc.getElementTypeVariable().getSource().equals(left)){
							dc.getElementTypeVariable().setTag_attribute("input");
							dc.getElementTypeVariable().setSrc_attribute("ConfixGeneratedInput");
							break;
						}
				}
			}else if (right.equals("src")){
				// e.g. dg('ss_photo').src = ...
				AstNode parentNode = infix.getParent();
				System.out.println("parentNode.toSource(): " + parentNode.toSource());
				System.out.println("parentNode.shortName(): " + parentNode.shortName());
				if (parentNode instanceof IfStatement){
					// src of an element was used in an if condition -> e.g. if (a.src)
					System.out.println(left + ".src is used in an if condition");
					if (infix.getLeft() instanceof FunctionCall){
						// e.g. dg('ss_photo').src 
						// this is to make sure ie.getLeft() will be added if not already exist
						//instrumentFunctionCallNode(infix.getLeft());
						for (DOMConstraint dc: DOMConstraintList)
							if (dc.getElementTypeVariable().getSource().equals(left)){
								dc.addConstraint(left+".src", true);
								break;
							}
					}
				}else if (parentNode instanceof Assignment){
					// src of an element value was used or set -> e.g. a.src = x .... y = a.src 
					Assignment asmt = (Assignment)parentNode;
					if (asmt.getLeft().equals(infix)){ // src is set
						System.out.println(left + ".src is set to " + asmt.getRight().toSource());
					}else{
						System.out.println(asmt.getLeft().toSource() + " is set to " + left + ".src");
						// adding the variable storing this attribute
						if (infix.getLeft() instanceof FunctionCall){
							System.out.println("analyseFunctionCallNode");
							// this is to make sure ie.getLeft() will be added if not already exist
							//instrumentFunctionCallNode(infix.getLeft());
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getElementTypeVariable().getSource().equals(left))
									dc.getElementTypeVariable().setSrc_attributeVariable(asmt.getLeft().toSource());
						}
					}
				}else if (parentNode instanceof VariableInitializer){
					// src of an element used to initialize a variable -> e.g. var v = dg('indicator').src
					VariableInitializer vi = (VariableInitializer)parentNode;
					System.out.println("src property for " + left + " is used to initialize " + vi.getTarget().toSource());
				}else{
					//  just a use of src prop, make sure the prop exist and the tag is set to either frame, iframe, img, input, layer, script, textarea, video
					if (infix.getLeft() instanceof FunctionCall){
						// this is to make sure ie.getLeft() will be added if not already exist
						//instrumentFunctionCallNode(infix.getLeft());
						for (DOMConstraint dc: DOMConstraintList)
							if (dc.getElementTypeVariable().getSource().equals(left)){
								dc.getElementTypeVariable().setTag_attribute("img");
								dc.getElementTypeVariable().setSrc_attribute("ConfixGeneratedSrc");
								break;
							}
					}


				}
			}else if (right.equals("style")){  	
				//  e.g. element.style.property  : Change the style of an HTML element
				AstNode parentNode = infix.getParent();
				System.out.println("parentNode.toSource(): " + parentNode.toSource());
				System.out.println("parentNode.shortName(): " + parentNode.shortName());
				if (parentNode instanceof InfixExpression){  
					// e.g. e.style.
					InfixExpression pie = (InfixExpression) parentNode;
					String pLeft = pie.getLeft().toSource();
					String pOprator = ASTNodeUtility.operatorToString(pie.getOperator());
					String pRight = pie.getRight().toSource();
					System.out.println(pRight + " property of style attribute for element " + left);
					if (parentNode.getParent() instanceof IfStatement){
						// property of style attribute of an element was used in an if condition -> e.g. if (cur.style.MozOpacity)
						System.out.println(parentNode.toSource() + " is used in an if condition");
						if (infix.getLeft() instanceof FunctionCall){
							// this is to make sure infix.getLeft() will be added if not already exist
							//instrumentFunctionCallNode(infix.getLeft());
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getElementTypeVariable().getSource().equals(left))
									dc.addConstraint(parentNode.toSource(), true);
						}
					}else if (parentNode.getParent() instanceof Assignment){
						// style of an element value was used or set -> e.g. a.style.display = x ... y = a.style.display
						Assignment asmt = (Assignment) parentNode.getParent();
						if (asmt.getLeft().equals(parentNode)){ 
							// style is set
							System.out.println(parentNode.toSource() + " is set to " + asmt.getRight().toSource());
						}else{
							// style is used
							System.out.println(asmt.getLeft().toSource() + " is set to " + parentNode.toSource());
						}
					}else if (parentNode instanceof VariableInitializer){
						// style of an element used to initialize a variable -> e.g. var v = dg('indicator').style
						VariableInitializer vi = (VariableInitializer)parentNode;
						System.out.println(parentNode + " is used to initialize " + vi.getTarget().toSource());
					}
				}else if (parentNode instanceof IfStatement){
					// style of an element was used as an if condition -> e.g. if (a.style)
					System.out.println("style property for " + left + " is used as an if condition");
				}else if (parentNode instanceof Assignment){
					// style of an element value was used or set -> e.g. a.style = x ... y = a.style 
					Assignment asmt = (Assignment)parentNode;
					if (asmt.getLeft().equals(infix)){ // style is set
						System.out.println("style property for " + left + " is set to " + asmt.getRight().toSource());
					}else{
						System.out.println(asmt.getLeft().toSource() + " is set to style property for " + left);
					}
				}else if (parentNode instanceof VariableInitializer){
					// style of an element used to initialize a variable -> e.g. var v = dg('indicator').style
					VariableInitializer vi = (VariableInitializer)parentNode;
					System.out.println("style property for " + left + " is used to initialize " + vi.getTarget().toSource());
				}
			}else if (right.equals("anchors")){
				// serach the DOMElementVariable list to check if a corresponding DOMJSVariable exists
				// e.g. a.innerHTML = document.anchors[0].innerHTML; -> document is a default DOMJSVariable in the DOMElementVariable list
				boolean JSVarExist = false;
				for (DOMConstraint dc: DOMConstraintList){
					String JSVar = dc.getElementTypeVariable().getDOMJSVariable();
					if (left.equals(JSVar)){
						JSVarExist = true;
						System.out.println(JSVar + " is the parent of anchors");

						ElementTypeVariable DOMElement = new ElementTypeVariable();
						DOMElement.setParentElementJSVariable(left);
						// adding the child node to the list for the parent
						//String DOMJSVariable = "anonym"+Integer.toString((new Random()).nextInt(100)); // to store the var in the JS code that a DOM element is assigned to
						String DOMJSVariable = "";
						DOMElement.setDOMJSVariable(DOMJSVariable);

						//System.out.println("Function " + enclosingFunctionName + " accesses DOM via .anchors");

						DOMElement.setTag_attribute("a");
						DOMElement.setName_attribute("ConfixGenName" + Integer.toString((new Random()).nextInt(100)));

						// TODO...
						DOMConstraint newDC = new DOMConstraint(DOMElement);
						if (!DOMConstraintList.contains(newDC))
							DOMConstraintList.add(newDC);
						break;
					}
				}
				if (JSVarExist == false){
					// add the new DOMElementVariable
				}
			}


		}else if (oprator.equals("==") || oprator.equals("===")){  // -> nodeName: InfixExpression

		}
		//TODO: considering other comparison operators



		/*
			The following properties can be used on HTML documents:
			document.anchors 	Returns a collection of all <a> with a value in the name attribute
			document.applets 	Returns a collection of all <applet> elements (Deprecated in HTML5)
			document.embeds 	Returns a collection of all <embed> elements 
			document.forms 	Returns a collection of all the <form> elements 
			document.head 	Returns the <head> element
			document.images 	Returns a collection of all <image> elements 
			document.links 	Returns a collection of all <area> and <a> elements value in href
			document.title 	Sets or returns the <title> element

			Adding and Deleting Elements
			document.createElement() 	Create an HTML element
			document.removeChild() 	Remove an HTML element
			document.appendChild() 	Add an HTML element
			document.replaceChild() 	Replace an HTML element
			document.write(text) 	Write into the HTML output stream
		 */


		// serach the DOMElementVariable list to check if on the left or right a DOMJSVariable is used
		for (DOMConstraint dc: DOMConstraintList){
			String JSVar = dc.getElementTypeVariable().getDOMJSVariable();
			if (JSVar!=null)
				if (JSVar.equals(left)){
					System.out.println("********* A property of JSVAr: " + JSVar + " is being set");
				}else if (JSVar.equals(right)){
					System.out.println("********* A property of JSVAr: " + JSVar + " is being used");
				}
		}

	}


	public String generateXpathConstraints() {	
		String xpathToSolve = generateXpathConstraint();
		resetXpath();
		System.out.println("xpathToSolve: " + xpathToSolve);
		return xpathToSolve;
	}

	//	public static String generateXpathConstraint(String enclosingFunctionName) {  -> this is for the old static version
	public static String generateXpathConstraint() {
		xpath = "select(\"document[";
		//List<String> JSDOMVars = new ArrayList<String>();

		System.out.println("++++++++++++++++");
		for (DOMConstraint dc : DOMConstraintList)
			System.out.println(dc.getElementTypeVariable());
		System.out.println("++++++++++++++++");


		// Transform constraints to xpath
		for (DOMConstraint dc : DOMConstraintList){
			if (dc.isAddedToTheXpath())
				continue;
			//dc.setAddedToTheXpath(true); // this is to consider each constraint only once -> this is done in the recursive function generateSubXpath

			if (dc.getElementTypeVariable().getDOMJSVariable().equals("document")) // ignore the first node
				continue;

			// for each node consider all its children nodes
			//if (dc.getEnclosingFunctionName().equals(enclosingFunctionName))
			//generateSubXpath(dc, enclosingFunctionName); -> this is for the old static version

			generateSubXpath(dc);
		}

		xpath += "]\")";

		return xpath;
	}


	private static void generateSubXpath(DOMConstraint currentConstraint){
		// generate xpath for currentConstraint first (id+attributes) and then add its children
		String id = currentConstraint.getElementTypeVariable().getId_attribute();
		String tag = currentConstraint.getElementTypeVariable().getTag_attribute();
		String type = currentConstraint.getElementTypeVariable().getType_attribute();
		String name = currentConstraint.getElementTypeVariable().getName_attribute();
		String Class = currentConstraint.getElementTypeVariable().getClass_attribute();
		String value = currentConstraint.getElementTypeVariable().getValue_attribute();
		String src = currentConstraint.getElementTypeVariable().getSrc_attribute();
		String checked = currentConstraint.getElementTypeVariable().getChecked_attribute();
		if (numOfDOMElementsInFixture>0)
			xpath += " and child::";
		xpath += (tag + "_" + Integer.toString(numOfDOMElementsInFixture++) + "[");  // e.g. div_0[, p_1[, img_2[, ...
		if(id!=null)
			xpath += "@id_" + id;
		if(type!=null)
			xpath += " and @type_" + type;
		if(name!=null)
			xpath += " and @name_" + name;
		if(Class!=null)
			xpath += " and @class_" + Class;
		if(value!=null)
			xpath += " and @value_" + value;
		if(src!=null)
			xpath += " and @src_" + src;
		if(checked!=null)
			xpath += " and @checked_" + checked;

		currentConstraint.setAddedToTheXpath(true); // this is to consider each constraint only once

		for (DOMConstraint dc : DOMConstraintList){
			if (dc.getElementTypeVariable().getDOMJSVariable().equals("document")) // ignore the first node
				continue;
			if(dc.getElementTypeVariable().getParentElementJSVariable().equals(currentConstraint.getElementTypeVariable().getDOMJSVariable())){
				//xpath += " and child::";
				generateSubXpath(dc);
			}
		}
		xpath += "]";
	}

	public static void resetXpath(){
		numOfDOMElementsInFixture = 0;
	}


	public HashSet<String> getDOMDependentFunctions() {
		return DOMDependentFunctions;
	}


	//public HashSet<DOMConstraint> getDOMConstraintList() {
	public ArrayList<DOMConstraint> getDOMConstraintList() {
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


	// returns true if a variable in the JS code is of DOM element type 
	private boolean isDOMElementVariable(String var){
		// search among JSVariables in the DOMConstraintList
		for (DOMConstraint dc: DOMConstraintList){
			ElementTypeVariable etv = dc.getElementTypeVariable();   // e.g. a in a = $('id')
			if (etv.getDOMJSVariable().equals(var)){
				System.out.println("Variable: " + var + " is of DOM element type");
				return true;
			}
		}
		return false;
	}


	// OLD VERSION
	/*public List<String> generateXpathConstraints() {	
		// setting the xpathToSolve for each function
		HashSet<DOMConstraint> dList = getDOMConstraintList();
		DOMConstraintList.addAll(dList); 

		for (String DDF: DOMDependentFunctions){
			System.out.println("****** Generating xpath for DOM constraints in DDF: " + DDF);
			String xpathToSolve = generateXpathConstraint(DDF);
			resetXpath();
			xpathsToSolve.add(xpathToSolve);
			System.out.println("xpathToSolve: " + xpathToSolve);
		}

		// e.g. select("html/body/descendant::switch[ancestor::body[ancestor::html]]//descendant::audio[preceding-sibling::video/test2]/
		//		descendant::seq/descendant::audio[preceding-sibling::video/test2]/test[@attr_100]")

		// System.out.println(xpathsToSolve);
		return xpathsToSolve;
	}*/


}


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
