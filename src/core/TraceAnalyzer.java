package core;

import instrumentor.ASTNodeUtility;
import instrumentor.ConsoleErrorReporter;
import instrumentor.JSASTVisitor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;

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
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.UnaryExpression;
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
	public static HashSet<String> DomDependentFunctions = new HashSet<String>();
	private List<ArrayList<DOMConstraint>> pathConditions = new ArrayList<ArrayList<DOMConstraint>>();
	private static HashSet<DOMConstraint> DOMConstraintList = new HashSet<DOMConstraint>();

	
	private static String xpath="";
	private static int numOfDOMElementsInFixture = 0;

	
	public TraceAnalyzer(){
		// adding the initial "document" node to be used for xpath generation
		ElementTypeVariable DOMElement = new ElementTypeVariable();
		DOMElement.setDOMJSVariable("document");
		DOMConstraint dc = new DOMConstraint(DOMElement);
		DOMConstraintList.add(dc);

	}

	
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
				DomDependentFunctions.add(enclosingFunctionName);
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

					DomDependentFunctions.add(enclosingFunctionName);
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
					DomDependentFunctions.add(enclosingFunctionName);
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

		System.out.println("=== analyseIfStatementNode ===");

		AstNode generatedNode = parse(map.get("statement"));
		AstNode node = (AstNode) generatedNode.getFirstChild();
		IfStatement is = (IfStatement) node;
		AstNode conditionNode = is.getCondition();

		ArrayList<DOMConstraint> pathCondition = new ArrayList<DOMConstraint>(); 

		FunctionNode func=node.getEnclosingFunction();

		System.out.println("conditionNode.shortName() : " + conditionNode.shortName());
		System.out.println("conditionNode.depth() : " + conditionNode.depth());
		System.out.println("conditionNode.getLineno() : " + (conditionNode.getLineno()+1));
		System.out.println("conditionNode.toSource() : \n" + conditionNode.toSource());
		System.out.println("conditionNode.getType() : " + conditionNode.getType());
		System.out.println("conditionNode.getAstRoot() : " + conditionNode.getAstRoot());
		System.out.println("conditionNode.debugPrint() : \n" + conditionNode.debugPrint());

		
		String conditionShortName = conditionNode.shortName();

		if (conditionShortName.equals("InfixExpression")){	// e.g. if (x<5)
			System.out.println("*** InfixExpression found in the condition ***");
			InfixExpression ie = (InfixExpression) conditionNode;
			String left = ie.getLeft().toSource();
			String oprator = ASTNodeUtility.operatorToString(ie.getOperator());
			String right = ie.getRight().toSource();

			System.out.println("Left: " + left);
			System.out.println("Operator: " + oprator);
			System.out.println("Right: " + right);	

			// check if the path condition is on a DOM element

			// adding the pathCondition to the 
			/*DOMElementTypeVariable DOMElement = new DOMElementTypeVariable();
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

			// considering multiple constraints
			if (oprator.equals("&&") || oprator.equals("||")){

			}if (oprator.equals("==") || oprator.equals("===")){  
				if (ie.getLeft() instanceof Name){  // e.g. if we have a = $('id') or a = $('id').html()  and then if (a == X)
					// search among JSVariables
					for (DOMConstraint dc: DOMConstraintList){
						if (dc.getDOMElementTypeVariable().getDOMJSVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getDOMJSVariable() + " variable which refers to a DOM element is used in a condition");
							break;
						}else if (dc.getDOMElementTypeVariable().getId_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getId_attributeVariable() + " variable which refers to an id attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".id");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}else if (dc.getDOMElementTypeVariable().getType_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getType_attributeVariable() + " variable which refers to a type attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".type");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}else if (dc.getDOMElementTypeVariable().getName_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getName_attributeVariable() + " variable which refers to a name attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".name");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}else if (dc.getDOMElementTypeVariable().getClass_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getClass_attributeVariable() + " variable which refers to a class attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".class");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}else if (dc.getDOMElementTypeVariable().getValue_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getValue_attributeVariable() + " variable which refers to a value attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".value");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}else if (dc.getDOMElementTypeVariable().getInnerHTML_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getInnerHTML_attributeVariable() + " variable which refers to an innerHTML attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".innerHTML");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}else if (dc.getDOMElementTypeVariable().getSrc_attributeVariable().equals(ie.getLeft().toSource())){
							System.out.println(dc.getDOMElementTypeVariable().getSrc_attributeVariable() + " variable which refers to an src attribute of a DOM element is used in a condition");
							// replacing the condition to be used later for generating combination of satisfier statemets in the javascript test fuctions
							String condition = conditionNode.toSource();
							condition = condition.replace(ie.getLeft().toSource(), dc.getDOMElementTypeVariable().getOriginalAccessCode() + ".src");
							//System.out.println("condition after replacement: " + condition);
							dc.addConstraint(condition, true);
							break;
						}

					}
				}

			}

		}else if (conditionShortName.equals("Name")){	// e.g. if (t)  -> variable should be true to go in
			Name varName = (Name) conditionNode;
			System.out.println("varName.toSource(): " + varName.toSource());
		}else if (conditionShortName.equals("UnaryExpression")){	// e.g. if (!t)  -> variable should be false to go in
			UnaryExpression ue = (UnaryExpression) conditionNode;
			String oprator = ASTNodeUtility.operatorToString(ue.getOperator());
			System.out.println("Oprator: " + oprator);
			System.out.println("Operand: " + ue.getOperand().toSource());
		}else if (conditionShortName.equals("PropertyGet")){  // e.g. if (a.innerHTML)
			PropertyGet pg = (PropertyGet)conditionNode;
			String property = pg.getRight().toSource();
			if (property.equals("innerHTML")){
				System.out.println("innerHTML found");
			}
		}

		pathConditions.add(pathCondition);

	}
	
	private void analyseInfixExpressionNode(Map<String, String> map) {
		System.out.println("=== analyseInfixExpressionNode ===");
		AstNode node;  //TODO: get from trace
		
		
		
		
		
		
		
		
		InfixExpression ie = (InfixExpression) node;

		String left = ie.getLeft().toSource();
		String oprator = ASTNodeUtility.operatorToString(ie.getOperator());
		String right = ie.getRight().toSource();

		System.out.println("Left: " + left);
		System.out.println("Operator: " + oprator);
		System.out.println("Right: " + right);			

		if (oprator.equals("GETPROP")){  // -> nodeName: PropertyGet, e.g. Left: $("p").innerHTML
			if (right.equals("innerHTML")){
				AstNode parentNode = node.getParent();
				//System.out.println("parentNode: " + parentNode.toSource());
				//System.out.println("shortName: " + parentNode.shortName());
				if (parentNode instanceof IfStatement){
					// innerHTML of an element was used as an if condition -> e.g. if (a.innerHTML)
					System.out.println(left + ".innerHTML is used as an if condition");
					if (ie.getLeft() instanceof FunctionCall){
						// this is to make sure ie.getLeft() will be added if not already exist
						instrumentFunctionCallNode(ie.getLeft());
						for (DOMConstraint dc: DOMConstraintList)
							if (dc.getDOMElementTypeVariable().getSource().equals(left))
								dc.addConstraint(left+".innerHTML", true);
					}
				}else if (parentNode instanceof Assignment){
					// innerHTML of an element value was used or set -> e.g. a.innerHTML = x / y = a.innerHTML 
					Assignment asmt = (Assignment)parentNode;
					if (asmt.getLeft().equals(node)){ // innerHTML is set
						System.out.println(left + ".innerHTML is set to " + asmt.getRight().toSource());
					}else{
						System.out.println(asmt.getLeft().toSource() + " is set to " + left + ".innerHTML");
						// adding the variable storing this attribute
						if (ie.getLeft() instanceof FunctionCall){
							System.out.println("analyseFunctionCallNode");
							// this is to make sure ie.getLeft() will be added if not already exist
							instrumentFunctionCallNode(ie.getLeft());
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getDOMElementTypeVariable().getSource().equals(left))
									dc.getDOMElementTypeVariable().setInnerHTML_attributeVariable(asmt.getLeft().toSource());
						}
					}
				}else if (parentNode instanceof VariableInitializer){
					// innerHTML of an element used to initialize a variable -> e.g. v = dg('indicator').innerHTML
					VariableInitializer vi = (VariableInitializer)parentNode;
					System.out.println("innerHTML property for " + left + " is used to initialize " + vi.getTarget().toSource());
				}
			}else if (right.equals("src")){
				AstNode parentNode = node.getParent();
				//System.out.println("parentNode: " + parentNode.toSource());
				//System.out.println("shortName: " + parentNode.shortName());
				if (parentNode instanceof IfStatement){
					// src of an element was used as an if condition -> e.g. if (a.src)
					System.out.println(left + ".src is used as an if condition");
					if (ie.getLeft() instanceof FunctionCall){
						// this is to make sure ie.getLeft() will be added if not already exist
						instrumentFunctionCallNode(ie.getLeft());
						for (DOMConstraint dc: DOMConstraintList)
							if (dc.getDOMElementTypeVariable().getSource().equals(left)){
								dc.addConstraint(left+".src", true);
								break;
							}
					}
				}else if (parentNode instanceof Assignment){
					// src of an element value was used or set -> e.g. a.src = x / y = a.src 
					Assignment asmt = (Assignment)parentNode;
					if (asmt.getLeft().equals(node)){ // src is set
						System.out.println(left + ".src is set to " + asmt.getRight().toSource());
					}else{
						System.out.println(asmt.getLeft().toSource() + " is set to " + left + ".src");
						// adding the variable storing this attribute
						if (ie.getLeft() instanceof FunctionCall){
							System.out.println("analyseFunctionCallNode");
							// this is to make sure ie.getLeft() will be added if not already exist
							instrumentFunctionCallNode(ie.getLeft());
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getDOMElementTypeVariable().getSource().equals(left))
									dc.getDOMElementTypeVariable().setSrc_attributeVariable(asmt.getLeft().toSource());
						}
					}
				}else if (parentNode instanceof VariableInitializer){
					// src of an element used to initialize a variable -> e.g. v = dg('indicator').src
					VariableInitializer vi = (VariableInitializer)parentNode;
					System.out.println("src property for " + left + " is used to initialize " + vi.getTarget().toSource());
				}else{
					//  just a use of src prop, make sure the prop exist and the tag is set to eithert frame, iframe, img, input, layer, script, textarea, video
					if (ie.getLeft() instanceof FunctionCall){
						// this is to make sure ie.getLeft() will be added if not already exist
						instrumentFunctionCallNode(ie.getLeft());
						for (DOMConstraint dc: DOMConstraintList)
							if (dc.getDOMElementTypeVariable().getSource().equals(left)){
								dc.getDOMElementTypeVariable().setTag_attribute("img");
								dc.getDOMElementTypeVariable().setSrc_attribute("ConfixGeneratedSrc");
								break;
							}
					}


				}
			}else if (right.equals("style")){  	//  element.style.property  : Change the style of an HTML element
				AstNode parentNode = node.getParent();
				//System.out.println("parentNode: " + parentNode.toSource());
				//System.out.println("shortName: " + parentNode.shortName());
				if (parentNode instanceof InfixExpression){  // e.g. e.style.
					InfixExpression pie = (InfixExpression) parentNode;
					String pLeft = pie.getLeft().toSource();
					String pOprator = ASTNodeUtility.operatorToString(pie.getOperator());
					String pRight = pie.getRight().toSource();
					//System.out.println(pRight + " property of style attribute for element " + left);
					if (parentNode.getParent() instanceof IfStatement){
						// property of style attribute of an element was used as an if condition -> e.g. if (cur.style.MozOpacity)
						System.out.println(parentNode.toSource() + " is used as an if condition");
						if (ie.getLeft() instanceof FunctionCall){
							// this is to make sure ie.getLeft() will be added if not already exist
							instrumentFunctionCallNode(ie.getLeft());
							for (DOMConstraint dc: DOMConstraintList)
								if (dc.getDOMElementTypeVariable().getSource().equals(left))
									dc.addConstraint(parentNode.toSource(), true);
						}
					}else if (parentNode.getParent() instanceof Assignment){
						// style of an element value was used or set -> e.g. a.style.display = x / y = a.style.display
						Assignment asmt = (Assignment) parentNode.getParent();
						if (asmt.getLeft().equals(parentNode)){ // style is set
							System.out.println(parentNode.toSource() + " is set to " + asmt.getRight().toSource());
						}else{
							System.out.println(asmt.getLeft().toSource() + " is set to " + parentNode.toSource());
						}
					}else if (parentNode instanceof VariableInitializer){
						// style of an element used to initialize a variable -> e.g. v = dg('indicator').style
						VariableInitializer vi = (VariableInitializer)parentNode;
						System.out.println(parentNode + " is used to initialize " + vi.getTarget().toSource());
					}
				}else if (parentNode instanceof IfStatement){
					// style of an element was used as an if condition -> e.g. if (a.style)
					System.out.println("style property for " + left + " is used as an if condition");
				}else if (parentNode instanceof Assignment){
					// style of an element value was used or set -> e.g. a.style = x / y = a.style 
					Assignment asmt = (Assignment)parentNode;
					if (asmt.getLeft().equals(node)){ // style is set
						System.out.println("style property for " + left + " is set to " + asmt.getRight().toSource());
					}else{
						System.out.println(asmt.getLeft().toSource() + " is set to style property for " + left);
					}
				}else if (parentNode instanceof VariableInitializer){
					// style of an element used to initialize a variable -> e.g. v = dg('indicator').style
					VariableInitializer vi = (VariableInitializer)parentNode;
					System.out.println("style property for " + left + " is used to initialize " + vi.getTarget().toSource());
				}
			}else if (right.equals("anchors")){
				// serach the DOMElementVariable list to check if a corresponding DOMJSVariable exists
				// e.g. a.innerHTML = document.anchors[0].innerHTML; -> document is a default DOMJSVariable in the DOMElementVariable list
				boolean JSVarExist = false;
				for (DOMConstraint dc: DOMConstraintList){
					String JSVar = dc.getDOMElementTypeVariable().getDOMJSVariable();
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
						DOMConstraintList.add(newDC);
						break;
					}
				}
				if (JSVarExist == false){
					// add the new DOMElementVariable
				}
			}


		}else if (oprator.equals("=")){  // -> nodeName: Assignment

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
			String JSVar = dc.getDOMElementTypeVariable().getDOMJSVariable();
			if (JSVar!=null)
				if (JSVar.equals(left)){
					System.out.println("********* A property of JSVAr: " + JSVar + " is being set");
				}else if (JSVar.equals(right)){
					System.out.println("********* A property of JSVAr: " + JSVar + " is being used");
				}
		}

	}

	
	public List<String> generateXpathConstraints() {	
		// setting the xpathToSolve for each function
		HashSet<String> fList = getDOMDependentFunctionsList();
		DOMDependentFunctionsList.addAll(fList); 
		HashSet<DOMConstraint> dList = getDOMConstraintList();
		DOMConstraintList.addAll(dList); 

		for (String DDF: DOMDependentFunctionsList){
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
	}

	public static String generateXpathConstraint(String enclosingFunctionName) {
		xpath = "select(\"document[";
		List<String> JSDOMVars = new ArrayList<String>();
		// Transform constraints to xpath
		for (DOMConstraint dc : DOMConstraintList){
			if (dc.isAddedToTheXpath())
				continue;
			//dc.setAddedToTheXpath(true); // this is to consider each constraint only once -> this is done in the recursive function generateSubXpath

			if (dc.getDOMElementTypeVariable().getDOMJSVariable().equals("document")) // ignore the first node
				continue;

			// for each node consider all its children nodes
			if (dc.getEnclosingFunctionName().equals(enclosingFunctionName))
				generateSubXpath(dc, enclosingFunctionName);
		}

		xpath += "]\")";

		return xpath;
	}

	private static void generateSubXpath(DOMConstraint currentConstraint, String enclosingFunctionName){
		// generate xpath for currentConstraint first (id+attributes) and then add its children
		String id = currentConstraint.getDOMElementTypeVariable().getId_attribute();
		String tag = currentConstraint.getDOMElementTypeVariable().getTag_attribute();
		String type = currentConstraint.getDOMElementTypeVariable().getType_attribute();
		String name = currentConstraint.getDOMElementTypeVariable().getName_attribute();
		String Class = currentConstraint.getDOMElementTypeVariable().getClass_attribute();
		String value = currentConstraint.getDOMElementTypeVariable().getValue_attribute();
		String src = currentConstraint.getDOMElementTypeVariable().getSrc_attribute();
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

		currentConstraint.setAddedToTheXpath(true); // this is to consider each constraint only once

		for (DOMConstraint dc : DOMConstraintList){
			if (dc.getDOMElementTypeVariable().getDOMJSVariable().equals("document")) // ignore the first node
				continue;
			if(dc.getDOMElementTypeVariable().getParentElementJSVariable().equals(currentConstraint.getDOMElementTypeVariable().getDOMJSVariable())){
				//xpath += " and child::";
				if (dc.getEnclosingFunctionName().equals(enclosingFunctionName))
					generateSubXpath(dc, enclosingFunctionName);
			}
		}
		xpath += "]";
	}

	public static void resetXpath(){
		numOfDOMElementsInFixture = 0;
	}


	public static HashSet<String> getDOMDependentFunctionsList() {
		return DomDependentFunctions;
	}
	
	public List<String> getDOMDependentFunctions() {
		return DOMDependentFunctionsList;
	}
	
	public HashSet<DOMConstraint> getDOMConstraintList() {
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
