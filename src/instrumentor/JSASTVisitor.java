package instrumentor;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.Token;
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
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.ObjectLiteral;
import org.mozilla.javascript.ast.ObjectProperty;
import org.mozilla.javascript.ast.ParenthesizedExpression;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.ReturnStatement;
import org.mozilla.javascript.ast.StringLiteral;
import org.mozilla.javascript.ast.SwitchCase;
import org.mozilla.javascript.ast.Symbol;
import org.mozilla.javascript.ast.ThrowStatement;
import org.mozilla.javascript.ast.TryStatement;
import org.mozilla.javascript.ast.VariableDeclaration;
import org.mozilla.javascript.ast.WhileLoop;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;




public abstract class JSASTVisitor implements NodeVisitor{

	protected static final Logger LOGGER = LoggerFactory.getLogger(JSASTVisitor.class.getName());

	private static List<String> functionCallsNotToVisit=new ArrayList<String>();
	private static List<String> functionNodes=new ArrayList<String>();

	public boolean shouldTrackFunctionCalls=true;
	public boolean shouldTrackFunctionNodes=true;

	private int m_rootCount = 0;

	private boolean LHS = false;			// This is to decide if the ASTNode is at the left hand-side of an assignment 
	private int assignmentNodeDepth = 0;	// This is to store ASTNode depth of assignment to be used for detecting LHS value 
	private boolean assignmentLHSVisited = false; 

	private static List<String> DomDependentFunctions = new ArrayList<String>();


	/**
	 * This is used by the JavaScript node creation functions that follow.
	 */
	private CompilerEnvirons compilerEnvirons = new CompilerEnvirons();

	/**
	 * Contains the scopename of the AST we are visiting. Generally this will be the filename
	 */
	private String scopeName = null;

	//To store js corresponding name
	protected String jsName = null;

	/* forexample for variable x we have: typeOfCode -> <sourceCode>*/ 
	private HashMap<String,ArrayList<AstNode>> jsDomMap;
	private final ArrayList<String> jqueryList=new ArrayList<String>();
	private final ArrayList<String> jsList=new ArrayList<String>();
	private ArrayList<ArrayList<Object>> jsDomList=new ArrayList<ArrayList<Object>>();

	public JSASTVisitor(){

		jsDomMap=new HashMap<String,ArrayList<AstNode>>();
		jqueryList.add("addClass");
		jqueryList.add("removeClass");
		jqueryList.add("removeAttr");
		jqueryList.add("css");
		jqueryList.add("attr");
		jqueryList.add("prop");
		//jqueryList.add("append");
		//jqueryList.add("appendTo");
		//jqueryList.add("prepend");
		//jqueryList.add("prependTo");
		//jqueryList.add("insertBefore");
		//jqueryList.add("insertAfter");
		jqueryList.add("detach");
		jqueryList.add("remove");

		jsList.add("getElementById");
		jsList.add("getElementsByTagName");
		jsList.add("setAttribute");
		jsList.add("getAttribute");
		jsList.add("removeAttribute");


		// Function calls that we do not need to visit
		functionCallsNotToVisit.add("parseInt");
		functionCallsNotToVisit.add("jQuery");
		functionCallsNotToVisit.add("setTimeout");
		functionCallsNotToVisit.add("$");
		functionCallsNotToVisit.add(".css");
		functionCallsNotToVisit.add(".addClass");
		functionCallsNotToVisit.add(".click");
		functionCallsNotToVisit.add(".unbind");
		functionCallsNotToVisit.add("Math.");
		functionCallsNotToVisit.add(".append");
		functionCallsNotToVisit.add(".attr");
		functionCallsNotToVisit.add(".random");
		functionCallsNotToVisit.add("push");
		functionCallsNotToVisit.add(".split");
		functionCallsNotToVisit.add("v");
		functionCallsNotToVisit.add("send(new Array(");
		functionCallsNotToVisit.add("new Array(");
		functionCallsNotToVisit.add("btoa");
		functionCallsNotToVisit.add("atob");
		functionCallsNotToVisit.add("atob");


		/*
		 * Amin: DOM accessor
		 * 
		 * 

			Changing HTML Elements
			element.innerHTML= 	Change the inner HTML of an element
			element.attribute= 	Change the attribute of an HTML element
			element.setAttribute(attribute,value) 	Change the attribute of an HTML element
			element.style.property= 	Change the style of an HTML element

			Adding and Deleting Elements
			document.createElement() 	Create an HTML element
			document.removeChild() 	Remove an HTML element
			document.appendChild() 	Add an HTML element
			document.replaceChild() 	Replace an HTML element
			document.write(text) 	Write into the HTML output stream

			Finding HTML Objects
			document.anchors 	Returns all <a> with a value in the name attribute 
			document.applets 	Returns all <applet> elements (Deprecated in HTML5) 
			document.baseURI 	Returns the absolute base URI of the document 
			document.body 	Returns the <body> element 
			document.cookie 	Returns the document's cookie 
			document.doctype 	Returns the document's doctype 
			document.documentElement 	Returns the <html> element 
			document.documentMode 	Returns the mode used by the browser 
			document.documentURI 	Returns the URI of the document 
			document.domain 	Returns the domain name of the document server 
			document.domConfig 	Returns the DOM configuration 
			document.embeds 	Returns all <embed> elements 
			document.forms 	Returns all <form> elements 
			document.head 	Returns the <head> element 
			document.images 	Returns all <image> elements 
			document.implementation 	Returns the DOM implementation 
			document.inputEncoding 	Returns the document's encoding (character set) 
			document.lastModified 	Returns the date and time the document was updated 
			document.links 	Returns all <area> and <a> elements value in href 
			document.readyState 	Returns the (loading) status of the document 
			document.referrer 	Returns the URI of the referrer (the linking document) 
			document.scripts 	Returns all <script> elements 
			document.strictErrorChecking 	Returns if error checking is enforced 
			document.title 	Returns the <title> element 
			document.URL 	Returns the complete URL of the document 




			This example finds the element with id="main", and then finds all <p> elements inside "main":
Example
var x = document.getElementById("main");
var y = x.getElementsByTagName("p"); 



This example finds the form element with id="frm1", in the forms collection, and displays all element values:
Example
var x = document.getElementById("frm1");
var text = "";
var i;
for (i = 0; i <x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;




Changing the Value of an Attribute

To change the value of an HTML attribute, use this syntax:
document.getElementById(id).attribute=new value


 <img id="myImage" src="smiley.gif">

 document.getElementById("myImage").src = "landscape.jpg";




 The following example collects the node value of an <h1> element and copies it into a <p> element:
Example
<html>
<body>

<h1 id="intro">My First Page</h1>

<p id="demo">Hello!</p>

<script>
var myText = document.getElementById("intro").childNodes[0].nodeValue;
document.getElementById("demo").innerHTML = myText;
</script>

</body>
</html>

Using the firstChild property is the same as using childNodes[0]:
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
Element 	1
Attribute 	2
Text 	3
Comment 	8
Document 	9




createElement
createTextNode
appendChild
replaceChild
removeChild
insertBefore



The getElementsByTagName() method returns a node list. A node list is an array-like collection of nodes.




The JavaScript Way:
function myFunction() {
    var obj = document.getElementById("h01");
    obj.innerHTML = "Hello jQuery";
}
onload = myFunction;

The jQuery equivalent is different:
The jQuery Way:
function myFunction() {
    $("#h01").html("Hello jQuery");
}
$(document).ready(myFunction);


     $("#h01").attr("style", "color:red").html("Hello jQuery")






The JavaScript Way:
function myFunction() {
    var obj = document.getElementById("h01");
    obj.innerHTML = "Hello Prototype";
}
onload = myFunction;

The Prototype equivalent is different:
The Prototype Way:
function myFunction() {
    $("h01").insert("Hello Prototype!");
}
Event.observe(window, "load", myFunction);



<button id="btn1" name="subject" type="submit" value="fav_HTML">HTML</button>
var x = document.getElementById("btn1").value;



<form id="form1">
<button id="btn1" type="button">HTML</button>
</form>
var x = document.getElementById("btn1").form.id;





  <form id="frm1" action="form_action.asp">
First name: <input type="text" name="fname"><br>
Last name: <input type="text" name="lname"><br><br>
<input type="button" onclick="myFunction()" value="Submit">
</form>

  document.getElementById("frm1").submit();
      document.getElementById("frm1").reset();



		 * Document Object Properties and Methods

The following properties and methods can be used on HTML documents:
Property / Method 	Description
document.addEventListener() 	Attaches an event handler to the document
document.adoptNode(node) 	Returns an adopted node from another document to this document
document.anchors 	Returns a collection of all the anchors in the document
document.applets 	Returns a collection of all the applets in the document
document.baseURI 	Returns the absolute base URI of a document
document.body 	Returns the body element of the document
document.close() 	Closes the output stream previously opened with document.open()
document.cookie 	Returns all name/value pairs of cookies in the document
document.createAttribute() 	Creates an attribute node
document.createComment() 	Creates a Comment node with the specified text
document.createDocumentFragment() 	Creates an empty DocumentFragment node
document.createElement() 	Creates an Element node
document.createTextNode() 	Creates a Text node
document.doctype 	Returns the Document Type Declaration associated with the document
document.documentElement 	Returns the Document Element of the document (the HTML element)
document.documentMode 	Returns the mode used by the browser to render the document
document.documentURI 	Sets or returns the location of the document
document.domain 	Returns the domain name of the server that loaded the document
document.domConfig 	Returns the configuration used when normalizeDocument() is invoked
document.embeds 	Returns a collection of all the embeds in the document
document.forms 	Returns a collection of all the forms in the document
document.getElementById() 	Returns the element that has the ID attribute with the specified value
document.getElementsByClassName() 	Returns a NodeList containing all elements with the specified class name
document.getElementsByName() 	Accesses all elements with a specified name
document.getElementsByTagName() 	Returns a NodeList containing all elements with the specified tagname
document.head 	Returns the head element of the document
document.images 	Returns a collection of all the images in the document
document.implementation 	Returns the DOMImplementation object that handles this document
document.importNode() 	Imports a node from another document
document.inputEncoding 	Returns the encoding, character set, used for the document
document.lastModified 	Returns the date and time the document was last modified
document.links 	Returns a collection of all the links in the document
document.normalize() 	Removes empty Text nodes, and joins adjacent nodes
document.normalizeDocument() 	Removes empty Text nodes, and joins adjacent nodes
document.open() 	Opens an HTML output stream to collect output from document.write()
document.readyState 	Returns the (loading) status of the document
document.referrer 	Returns the URL of the document that loaded the current document
document.removeEventListener() 	Removes an event handler from the document (that has been attached with the addEventListener() method)
document.renameNode() 	Renames the specified node
document.scripts 	Returns a collection of all the scripts in the document
document.strictErrorChecking 	Sets or returns whether error-checking is enforced or not
document.title 	Sets or returns the title of the document
document.URL 	Returns the full URL of the document
document.write() 	Writes HTML expressions or JavaScript code to a document
document.writeln() 	Same as write(), but adds a newline character after each statement




Properties and Methods

The following properties and methods can be used on all HTML elements:
Property / Method 	Description
element.accessKey 	Sets or returns the accesskey for an element
element.addEventListener() 	Attaches an event handler to the specified element
element.appendChild() 	Adds a new child node, to an element, as the last child node
element.attributes 	Returns a NamedNodeMap of an element's attributes
element.childNodes 	Returns a NodeList of child nodes for an element
element.className 	Sets or returns the class attribute of an element
element.clientHeight 	Returns the viewable height of an element
element.clientWidth 	Returns the viewable width of an element
element.cloneNode() 	Clones an element
element.compareDocumentPosition() 	Compares the document position of two elements
element.contentEditable 	Sets or returns whether the content of an element is editable or not
element.dir 	Sets or returns the text direction of an element
element.firstChild 	Returns the first child of an element
element.getAttribute() 	Returns the specified attribute value of an element node
element.getAttributeNode() 	Returns the specified attribute node
element.getElementsByClassName() 	Returns a collection of all child elements with the specified class name
element.getElementsByTagName() 	Returns a collection of all child elements with the specified tagname
element.getFeature() 	Returns an object which implements the APIs of a specified feature
element.getUserData() 	Returns the object associated to a key on an element
element.hasAttribute() 	Returns true if an element has the specified attribute, otherwise false
element.hasAttributes() 	Returns true if an element has any attributes, otherwise false
element.hasChildNodes() 	Returns true if an element has any child nodes, otherwise false
element.id 	Sets or returns the id of an element

element.innerHTML 	Sets or returns the content of an element

element.insertBefore() 	Inserts a new child node before a specified, existing, child node
element.isContentEditable 	Returns true if the content of an element is editable, otherwise false
element.isDefaultNamespace() 	Returns true if a specified namespaceURI is the default, otherwise false
element.isEqualNode() 	Checks if two elements are equal
element.isSameNode() 	Checks if two elements are the same node
element.isSupported() 	Returns true if a specified feature is supported on the element
element.lang 	Sets or returns the language code for an element
element.lastChild 	Returns the last child of an element
element.namespaceURI 	Returns the namespace URI of an element
element.nextSibling 	Returns the next node at the same node tree level
element.nodeName 	Returns the name of an element
element.nodeType 	Returns the node type of an element
element.nodeValue 	Sets or returns the value of an element
element.normalize() 	Joins adjacent text nodes and removes empty text nodes in an element
element.offsetHeight 	Returns the height of an element
element.offsetWidth 	Returns the width of an element
element.offsetLeft 	Returns the horizontal offset position of an element
element.offsetParent 	Returns the offset container of an element
element.offsetTop 	Returns the vertical offset position of an element
element.ownerDocument 	Returns the root element (document object) for an element
element.parentNode 	Returns the parent node of an element
element.previousSibling 	Returns the previous element at the same node tree level
element.removeAttribute() 	Removes a specified attribute from an element
element.removeAttributeNode() 	Removes a specified attribute node, and returns the removed node
element.removeChild() 	Removes a child node from an element
element.replaceChild() 	Replaces a child node in an element
element.removeEventListener() 	Removes an event handler that has been attached with the addEventListener() method
element.scrollHeight 	Returns the entire height of an element
element.scrollLeft 	Returns the distance between the left edge of an element and the view
element.scrollTop 	Returns the distance between the top edge of an element and the view
element.scrollWidth 	Returns the entire width of an element
element.setAttribute() 	Sets or changes the specified attribute, to the specified value
element.setAttributeNode() 	Sets or changes the specified attribute node
element.setIdAttribute() 	
element.setIdAttributeNode() 	
element.setUserData() 	Associates an object to a key on an element
element.style 	Sets or returns the style attribute of an element
element.tabIndex 	Sets or returns the tab order of an element
element.tagName 	Returns the tag name of an element
element.textContent 	Sets or returns the textual content of a node and its descendants
element.title 	Sets or returns the title attribute of an element
element.toString() 	Converts an element to a string

nodelist.item() 	Returns the node at the specified index in a NodeList
nodelist.length 	Returns the number of nodes in a NodeList





Properties and Methods
Property / Method 	Description
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




		 * 
		 * document.getElementById()
		 * innerHTML for <p>
		 * document.title in <title>
		 * 
		 *     var x = document.getElementsByName("x");
		 *		document.getElementById("demo").innerHTML = x.length;   => How many elements named x?


    document.getElementsByTagName

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
	 * Find out the function name of a certain node and return "anonymous" if it's an anonymous
	 * function.
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


	private boolean shouldVisitFunctionCall(FunctionCall function){
		if (functionCallsNotToVisit.size()==0)
			return true;
		for (String funcName:functionCallsNotToVisit){

			if (function.getTarget().toSource().contains(funcName)){
				return false;
			}
		}
		return true;
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
		System.out.println("node.getAstRoot() : " + node.getAstRoot());
		System.out.println("node.debugPrint() : \n" + node.debugPrint());
		/*

		node.shortName() : ExpressionStatement
		a = document.getElementById("demo");
		44	      EXPR_VOID 18 36
		44	        ASSIGN 0 35
		44	          NAME 0 1 a
		48	          CALL 4 31
		48	            GETPROP 0 23
		48	              NAME 0 8 document
		57	              NAME 9 14 getElementById
		72	            STRING 24 6

		node.shortName() : Assignment
		node.depth() : 4
		node.getLineno() : 3
		node.toSource() : 
		a = document.getElementById("demo")
		node.getType() : 90

		node.shortName() : ExpressionStatement
		node.depth() : 3
		node.getLineno() : 9
		node.toSource() : 
		var inner = f();

		node.getType() : 133
		node.getAstRoot() : 136
		node.debugPrint() : 
		236	      EXPR_VOID 18 16
		236	        VAR 0 15
		240	          VAR 4 11
		240	            NAME 0 5 inner
		248	            CALL 8 3
		248	              NAME 0 1 f

		node.shortName() : VariableDeclaration
		node.depth() : 4
		node.getLineno() : 9
		node.toSource() : 
		var inner = f()
		node.getType() : 122
		node.getAstRoot() : 136
		node.debugPrint() : 
		236	        VAR 0 15
		240	          VAR 4 11
		240	            NAME 0 5 inner
		248	            CALL 8 3
		248	              NAME 0 1 f

		node.shortName() : VariableInitializer
		node.depth() : 5
		node.getLineno() : 9
		node.toSource() : 
		inner = f()	

		 */




		/*if (!shouldTrackFunctionCalls){
		if (node instanceof FunctionNode)
			if (!shouldVisitFunction((FunctionNode) node)){
				return false;
			}

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

		else if (node instanceof FunctionCall){

			FunctionNode func=node.getEnclosingFunction();
			List<AstNode> nodeForVarLog=((FunctionCall) node).getArguments();
			String statementCategory="FunctionCallArgument";

			for (int i=0;i<nodeForVarLog.size();i++){
				if (!(nodeForVarLog.get(i) instanceof KeywordLiteral)){
					AstNode newNode=createNode(func, nodeForVarLog.get(i), statementCategory);
					appendNode(node, newNode);


				}
			}


		}
		else if (node instanceof Assignment){

			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="AssignmentComputation";
			AstNode nodeForVarLog=node;
			AstNode newNode=createNode(func, nodeForVarLog, statementCategory);

			appendNode(node, newNode);

		}

		else if (node instanceof UnaryExpression){

			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="UnaryExpression";
			AstNode nodeForVarLog=node;
			AstNode newNode=createNode(func, nodeForVarLog, statementCategory);
			appendNode(node, newNode);

		}

		if (node.getParent() instanceof ElementGet){
			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="ElementGet";
			AstNode nodeForVarLog=node;
			AstNode newNode=createNode(func, nodeForVarLog, statementCategory);
			appendElemGetNode(node, newNode);
		}


		else if (node instanceof ReturnStatement){

			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="ReturnStatementArgument";
			AstNode nodeForVarLog=((ReturnStatement)node).getReturnValue();
			if (!(nodeForVarLog instanceof KeywordLiteral) && nodeForVarLog!=null){
				AstNode newNode=createNode(func, nodeForVarLog, statementCategory);

				AstNode parent = makeSureBlockExistsAround(node);

				// the parent is something we can prepend to
				parent.addChildBefore(newNode, node);
			}

		}

		else if (node instanceof IfStatement){

			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="IfStatementCondition";
			AstNode nodeForVarLog=((IfStatement) node).getCondition();
			if (!(nodeForVarLog instanceof KeywordLiteral)){
				AstNode newNode=createNode(func, nodeForVarLog, statementCategory);

				AstNode parent = makeSureBlockExistsAround(node);

				// the parent is something we can prepend to
				parent.addChildAfter(newNode, node);
			}

		}

		else if (node instanceof ForLoop){

			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="ForLoopCondition";
			AstNode nodeForVarLog=((ForLoop) node).getCondition();
			if (!(nodeForVarLog instanceof KeywordLiteral)){
				AstNode newNode=createNode(func, nodeForVarLog, statementCategory);

				AstNode parent = makeSureBlockExistsAround(node);

				// the parent is something we can prepend to
				parent.addChildAfter(newNode, node);
			}
		}


		else if (node instanceof WhileLoop){

			FunctionNode func=node.getEnclosingFunction();
			String statementCategory="WhileLoopCondition";
			AstNode nodeForVarLog=((WhileLoop) node).getCondition();
			if (!(nodeForVarLog instanceof KeywordLiteral)){
				AstNode newNode=createNode(func, nodeForVarLog, statementCategory);

				AstNode parent = makeSureBlockExistsAround(node);

				// the parent is something we can prepend to
				parent.addChildAfter(newNode, node);
			}

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
	}

		 */


		/* if shouldTrackFunctionCalls

		if(node instanceof FunctionNode){
			FunctionNode fNode=(FunctionNode) node;
			String funcName=getFunctionName(fNode);
			if(shouldTrackFunctionNodes){
				//System.out.println(fNode.debugPrint());
				System.out.println("Function name is: " + funcName);
				functionNodes.add(funcName);
			}
			else{
				String code="var me = arguments.callee;";
				code+="me.funcName = " + "'" + funcName + "'" +";";
				code+="var callerName = arguments.callee.caller.funcName;";
				AstNode funcNameNode=parse(code);
				fNode.getBody().addChildToFront(funcNameNode);
				AstNode newNode=createFunctionTrackingNode(fNode, "callerName");
				//	appendNodeAfterFunctionCall(node, newNode);
				fNode.getBody().addChildAfter(newNode,funcNameNode);
			}
		}

		 */

		// check if we are in LHS of the current assignment, used to check if a property is defined and not just used
		if (nodeDepth==assignmentNodeDepth+1){
			if (assignmentLHSVisited == false){
				assignmentLHSVisited = true;
			}else
				LHS = false;
		}


		if (nodeName.equals("AstRoot"))  // = if (node instanceof AstRoot)
			analyseAstRootNode(node);
		else if (nodeName.equals("Name"))  // = if (node instanceof Name)
			analyseNameNode(node);
		else if (nodeName.equals("VariableDeclaration"))
			analyseVariable();
		else if (nodeName.equals("ObjectLiteral"))
			analyseObjectLiteralNode(node);
		else if (nodeName.equals("FunctionNode")) // = if (node instanceof FunctionNode)
			analyseFunctionNode(node);
		else if (nodeName.equals("PropertyGet"))  // this is for inner function defined properties such as this.name = ...
			analysePropertyGetNode();
		else if (nodeName.equals("NewExpression"))
			analyseNewExpressionNode();
		else if (nodeName.equals("FunctionCall"))
			analyseFunctionCallNode(node);
		else if (nodeName.equals("Assignment"))
			analyseAssignmentNode(node);
		else if (nodeType == Token.SWITCH)
			analyseSwitch();





		FunctionNode f;

		if (!((node instanceof FunctionNode || node instanceof ReturnStatement || node instanceof SwitchCase || node instanceof AstRoot || node instanceof ExpressionStatement || node instanceof BreakStatement || node instanceof ContinueStatement || node instanceof ThrowStatement || node instanceof VariableDeclaration))) {// || node instanceof ExpressionStatement || node instanceof BreakStatement || node instanceof ContinueStatement || node instanceof ThrowStatement || node instanceof VariableDeclaration || node instanceof ReturnStatement || node instanceof SwitchCase)) {
			return true;
		}


		// if (node instanceof BreakStatement || node instanceof ConditionalExpression || node instanceof ContinueStatement || node instanceof ExpressionStatement || node instanceof FunctionCall || node instanceof Assignment || node instanceof InfixExpression || node instanceof ThrowStatement || node instanceof UnaryExpression || node instanceof VariableDeclaration || node instanceof VariableInitializer || node instanceof XmlDotQuery || node instanceof XmlMemberGet || node instanceof XmlPropRef || node instanceof Yield) {
		if (node instanceof ExpressionStatement || node instanceof BreakStatement || node instanceof ContinueStatement || node instanceof ThrowStatement || node instanceof VariableDeclaration) {
			if (node instanceof VariableDeclaration) {
				//Make sure this variable declaration is not part of a for loop
				if (node.getParent() instanceof ForLoop) {
					return true;
				}
			}

			//Make sure additional try statement is not instrumented
			if (node instanceof TryStatement) {
				return true; //no need to add instrumentation before try statement anyway since we only instrument what's inside the blocks
			}

			f = node.getEnclosingFunction();

			if (f != null) {
				AstNode firstLine_node = (AstNode) f.getBody().getFirstChild();
				if (f instanceof FunctionNode && firstLine_node instanceof IfStatement) { //Perform extra check due to addition if statement
					firstLine_node = (AstNode) firstLine_node.getNext();
				}
				if (f instanceof FunctionNode && firstLine_node instanceof TryStatement) {
					TryStatement firstLine_node_try = (TryStatement) firstLine_node;
					firstLine_node = (AstNode) firstLine_node_try.getTryBlock().getFirstChild();
				}
				firstLine_node = (AstNode) firstLine_node.getNext();
				int firstLine = 0;
				if (firstLine_node != null) {
					//If first child is an ExpressionStatement or VariableDeclaration, then there might be multiple instances of the instrumented node at the beginning of the FunctionNode's list of children
					while (firstLine_node != null) {
						firstLine = firstLine_node.getLineno();
						if (firstLine > 0) {
							break;
						}
						else {
							firstLine_node = (AstNode) firstLine_node.getNext();
						}
					}
				}

				if (node.getLineno() >= firstLine) {
					AstNode newNode = createNode(f, ":::INTERMEDIATE", node.getLineno()-firstLine+1);
					//AstNode parent = node.getParent();

					AstNode parent = makeSureBlockExistsAround(node);

					//parent.addChildAfter(newNode, node);
					try {
						parent.addChildBefore(newNode, node);
					}
					catch (NullPointerException npe) {
						//System.out.println("Could not addChildBefore!");
						//System.out.println(npe.getMessage());
					}
				}
			}
			else { //The expression must be outside a function
				AstRoot rt = node.getAstRoot();
				if (rt == null || rt.getSourceName() == null) {
					return true;
				}
				AstNode firstLine_node = (AstNode) rt.getFirstChild();
				//if (firstLine_node instanceof IfStatement) { //Perform extra check due to addition if statement
				//	firstLine_node = (AstNode) firstLine_node.getNext();
				//}
				if (firstLine_node instanceof Block) {
					firstLine_node = (AstNode)firstLine_node.getFirstChild(); //Try statement
				}
				if (firstLine_node instanceof TryStatement) {
					TryStatement firstLine_node_try = (TryStatement) firstLine_node;
					firstLine_node = (AstNode) firstLine_node_try.getTryBlock().getFirstChild();
				}
				firstLine_node = (AstNode) firstLine_node.getNext();
				int firstLine = 0;
				if (firstLine_node != null) {
					//If first child is an ExpressionStatement or VariableDeclaration, then there might be multiple instances of the instrumented node at the beginning of the FunctionNode's list of children
					while (firstLine_node != null) {
						firstLine = firstLine_node.getLineno();
						if (firstLine > 0) {
							break;
						}
						else {
							firstLine_node = (AstNode) firstLine_node.getNext();
						}
					}
				}

				if (node.getLineno() >= firstLine) {
					AstNode newNode = createNode(rt, ":::INTERMEDIATE", node.getLineno()-firstLine+1, m_rootCount);
					//AstNode parent = node.getParent();

					AstNode parent = makeSureBlockExistsAround(node);

					//parent.addChildAfter(newNode, node);
					try {
						parent.addChildBefore(newNode, node);
					}
					catch (NullPointerException npe) {
						System.out.println(npe.getMessage());
					}
				}
			}
		}
		else if (node instanceof ReturnStatement) {
			f = node.getEnclosingFunction();
			AstNode firstLine_node = (AstNode) f.getBody().getFirstChild();
			if (f instanceof FunctionNode && firstLine_node instanceof IfStatement) { //Perform extra check due to addition if statement
				firstLine_node = (AstNode) firstLine_node.getNext();
			}
			if (f instanceof FunctionNode && firstLine_node instanceof TryStatement) {
				TryStatement firstLine_node_try = (TryStatement) firstLine_node;
				firstLine_node = (AstNode) firstLine_node_try.getTryBlock().getFirstChild();
			}
			firstLine_node = (AstNode) firstLine_node.getNext();
			int firstLine = 0;
			if (firstLine_node != null) {
				//If first child is an ExpressionStatement or VariableDeclaration, then there might be multiple instances of the instrumented node at the beginning of the FunctionNode's list of children
				while (firstLine_node != null) {
					firstLine = firstLine_node.getLineno();
					if (firstLine > 0) {
						break;
					}
					else {
						firstLine_node = (AstNode) firstLine_node.getNext();
					}
				}
			}

			AstNode parent = makeSureBlockExistsAround(node);

			AstNode newNode = createNode(f, ProgramPoint.EXITPOSTFIX, node.getLineno()-firstLine+1);

			/* the parent is something we can prepend to */
			parent.addChildBefore(newNode, node);

		}
		else if (node instanceof SwitchCase) {
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



		System.out.println(getJsDomList());

		/* have a look at the children of this node */
		return true;
	}

	private void analyseAstRootNode(AstNode node) {
		AstRoot rt = (AstRoot) node;

		if (rt.getSourceName() == null) //make sure this is an actual AstRoot, not one we created
			return;

		//this is the entry point of the AST root
		m_rootCount++;
		AstNode newNode = createNode(rt, ProgramPoint.ENTERPOSTFIX, rt.getLineno(), m_rootCount);

		rt.addChildToFront(newNode);

		node = (AstNode) rt.getFirstChild();
		node = (AstNode) node.getNext(); //The first node is the node just added in front, so get next node
		int firstLine = 0;
		if (node != null) {
			firstLine = node.getLineno();
		}

		// get last line of the function
		node = (AstNode) rt.getLastChild();
		//if this is not a return statement, we need to add logging here also
		if (!(node instanceof ReturnStatement)) {
			AstNode newNode_end = createNode(rt, ProgramPoint.EXITPOSTFIX, node.getLineno()-firstLine+1, m_rootCount);
			//add as last statement
			rt.addChildToBack(newNode_end);
		}	
	}



	private void analyseSwitch() {
		// TODO Auto-generated method stub

	}



	/**
	 * Deciding if an expression is a LHS
	 * Used to distinguish ownProperties and usedProperties
	 */
	private void analyseAssignmentNode(AstNode node) {
		assignmentNodeDepth = node.depth();
		assignmentLHSVisited = false;
		LHS = true;
	}



	private void analyseNewExpressionNode() {
		// TODO Auto-generated method stub

	}



	private void analysePropertyGetNode() {
		// TODO Auto-generated method stub

	}


	private String currentFunctionName = "";

	private void analyseFunctionNode(AstNode node) {
		FunctionNode f = (FunctionNode) node;

		System.out.println("THIS IS A FUNCTION");

		for (Symbol s: f.getSymbols()){
			int sType = s.getDeclType();
			if (sType == Token.LP || sType == Token.VAR || sType == Token.LET || sType == Token.CONST){
				System.out.println("s.getName() : " + s.getName());
			}
		}
		System.out.println(f.getSymbolTable());
		System.out.println(f.getSymbols());

		String fName = "";
		if (f.getFunctionName()!=null){
			fName = f.getFunctionName().getIdentifier();
			System.out.println("fName = " + fName);
			currentFunctionName = fName;
		}

		int numOfParam = f.getParams().size();
		int lineNumber = node.getLineno()+1;
		int fLength = f.getEndLineno() - f.getLineno();
		int fDepth = node.depth();

		//System.out.println(f.debugPrint());

		// TODO: Add the function to the list of DOM dependent jsFunctions if does not already exist
		//FunctionInfo newFunction = new FunctionInfo(fName, numOfParam, fLength, lineNumber);



		/* this is function enter */
		AstNode newNode = createNode(f, ProgramPoint.ENTERPOSTFIX, f.getLineno());
		f.getBody().addChildToFront(newNode);
		node = (AstNode) f.getBody().getFirstChild();
		node = (AstNode) node.getNext(); //The first node is the node just added in front, so get next node
		int firstLine = 0;
		if (node != null) {
			firstLine = node.getLineno();
		}
		/* get last line of the function */
		node = (AstNode) f.getBody().getLastChild();
		/* if this is not a return statement, we need to add logging here also */
		if (!(node instanceof ReturnStatement)) {
			AstNode newNode_end = createNode(f, ProgramPoint.EXITPOSTFIX, node.getLineno()-firstLine+1);
			/* add as last statement */
			f.getBody().addChildToBack(newNode_end);
		}			
		//System.out.println(func.toSource());

	}




	private void analyseObjectLiteralNode(AstNode node) {		
		ObjectLiteral o = ( ObjectLiteral) node;
		//System.out.println("Found object literal: " + candidateObjectName);
		List<ObjectProperty> prop =  o.getElements();
		for (ObjectProperty op : prop){
			if (op.getLeft().shortName().equals("Name")){
				//System.out.println("op.getString(): " + ((Name)(op.getLeft())).getIdentifier()  );
				//newJSObj.addOwnProperty(((Name)(op.getLeft())).getIdentifier());
			}
			else if (op.getLeft().shortName().equals("StringLiteral")){
				//System.out.println("op.getString(): " + ((StringLiteral)(op.getLeft())).getValue()  );
				//newJSObj.addOwnProperty(((StringLiteral)(op.getLeft())).getValue());
			}
			else{
				System.out.println("UNKNOWN!!");
			}
		}

	}



	private void analyseVariable() {
		// TODO Auto-generated method stub

	}



	private void analyseNameNode(AstNode node) {

		//System.out.println(ASTNode.debugPrint());

		for (Symbol s: node.getAstRoot().getSymbols()){
			int sType = s.getDeclType();
			if (sType == Token.LP || sType == Token.VAR || sType == Token.LET || sType == Token.CONST){
				System.out.println("global detected: " + s.getName());
			}
		}


		/* function calls like .addClass, .css, .attr ... */
		if (node.getParent() instanceof PropertyGet
				&& node.getParent().getParent() instanceof FunctionCall
				&& !node.getParent().toSource().contains("function")){
			if(jqueryList.contains(node.toSource())){
				setJsDomMap(node.getParent().getParent(), "jquery_c_arg");
			}
			else if(jsList.contains(node.toSource())){
				setJsDomMap(node.getParent().getParent(), "js_c_id_tag");
			}
			else if(node.toSource().equals("insertBefore")
					|| node.toSource().equals("replaceChild")){
				//				setJsDomMap(node.getParent().getParent(), "js_s_arg");
			}

		}
		else if(node.getParent() instanceof PropertyGet){
			if(node.toSource().equals("innerHTML")
					|| node.toSource().equals("innerText")){
				setJsDomMap(node, "js_innerHTML_innerText");
			}
		}

	}



	private void analyseFunctionCallNode(AstNode ASTNode) {
		/*  Detecting DOM acessing function calls
		document.getElementById() 			Find an element by element id
		document.getElementsByTagName() 	Find elements by tag name
		document.getElementsByClassName() 	Find elements by class name
		$()									Find an element by element id
		 */
		FunctionCall fcall = (FunctionCall) ASTNode;
		System.out.println(ASTNode.debugPrint());

		String calledFunctionName = "";

		if( fcall.getTarget() instanceof Name){

			calledFunctionName = ((Name)fcall.getTarget()).getIdentifier();
			System.out.println("calledFunctionName is " + calledFunctionName);

			if(calledFunctionName.equals("$")){
				System.out.println("Accessing DOM via " + calledFunctionName + "() in function " + currentFunctionName);
				DomDependentFunctions.add(currentFunctionName);

				/*setJsDomMap(((Name)fcall.getTarget()), "jquery_r_dollar");
				if(fcall.getArguments().size()==1
						&& fcall.getArguments().get(0) instanceof StringLiteral
						&& fcall.getArguments().get(0).toSource().startsWith(".")
						|| fcall.getArguments().get(0).toSource().startsWith("#") ){
					setJsDomMap(fcall.getArguments().get(0), "jquery_c_selSign");
				}*/
			}

		}else if ( fcall.getTarget() instanceof PropertyGet){
			calledFunctionName = ((PropertyGet)fcall.getTarget()).getRight().toSource();		
			System.out.println("calledFunctionName is " + calledFunctionName);

			if (calledFunctionName.equals("getElementById") || calledFunctionName.equals("getElementsByTagName") || calledFunctionName.equals("getElementsByClassName")){
				System.out.println("Accessing DOM via " + calledFunctionName + "() in function " + currentFunctionName);
				DomDependentFunctions.add(currentFunctionName);
			}
		}


		// check for callback
		boolean detected = false;
		for (AstNode node : fcall.getArguments())
			if (node.shortName().equals("FunctionNode")){
				System.out.println("callback found at line : " + ( ASTNode.getLineno()+1));
			}

	}



	private void setJsDomMap(AstNode node,String codeType){

		ArrayList<AstNode> list=new ArrayList<AstNode>();
		if(jsDomMap.get(codeType)!=null){

			list=jsDomMap.get(codeType);

		}				
		list.add(node);
		jsDomMap.put(codeType, list);					

	}

	public  HashMap<String,ArrayList<AstNode>> getJsDomList(){
		return jsDomMap;

	}
	public void setJsDomList(){

		System.out.println("****** jsDomList ******");


		if(jsDomList.size()>0 || jsDomMap.size()==0)
			return;
		Set<String> keys=jsDomMap.keySet();
		Iterator<String> it=keys.iterator();
		while(it.hasNext()){
			String codeType=it.next();
			ArrayList<AstNode> nodes=jsDomMap.get(codeType);
			for(AstNode node:nodes){
				ArrayList<Object> list=new ArrayList<Object>();
				list.add(codeType);
				list.add(node);

				System.out.println(node.toSource());

				//NodeMutator nm=new NodeMutator("All",scopeName);
				//nm.mutateDomJsCodeLevel(list);


				jsDomList.add(list);

			}
		}

		//System.out.println(jsDomList);

	}

	public ArrayList<Object> getElementfromJsDomList(int index){
		if(jsDomList.size()==0 || index>=jsDomList.size()) return null;
		return jsDomList.get(index);
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



	public void appendNode(AstNode node, AstNode newNode){
		AstNode parent = node;

		while (parent!=null && ! (parent instanceof ReturnStatement) && ! (parent instanceof ExpressionStatement)){
			parent=parent.getParent();
		}

		if (parent instanceof ReturnStatement){
			AstNode attachBefore=parent;
			AstNode parentToAttach=makeSureBlockExistsAround(parent);
			parentToAttach.addChildBefore(newNode, attachBefore);
		}

		else if (parent!=null){
			AstNode attachAfter=parent;
			AstNode parentToAttach=makeSureBlockExistsAround(parent);
			parentToAttach.addChildAfter(newNode, attachAfter);
		}
	}


	public void appendElemGetNode(AstNode node, AstNode newNode){
		AstNode parent = node;

		while (parent!=null && ! (parent instanceof ReturnStatement) 
				&& ! (parent instanceof ExpressionStatement) && ! (parent instanceof InfixExpression)){
			parent=parent.getParent();
		}

		if (parent instanceof ReturnStatement){
			AstNode attachBefore=parent;
			AstNode parentToAttach=makeSureBlockExistsAround(parent);
			parentToAttach.addChildBefore(newNode, attachBefore);
			return;
		}

		if (parent instanceof InfixExpression){
			while(parent instanceof InfixExpression || parent instanceof ParenthesizedExpression){
				parent=parent.getParent();
			}
		}
		if (parent!=null){
			AstNode attachAfter=parent;
			AstNode parentToAttach=makeSureBlockExistsAround(parent);
			parentToAttach.addChildAfter(newNode, attachAfter);
		}
	}


	public void appendNodeAfterFunctionCall(AstNode node, AstNode newNode){
		AstNode parent = node;

		while (parent!=null && ! (parent instanceof ReturnStatement) && ! (parent instanceof ExpressionStatement)){

			if(parent instanceof IfStatement){
				AstNode parentToAttach=makeSureBlockExistsAround(parent);
				parentToAttach.addChildAfter(newNode, parent);
				return;
			}
			if(parent.getParent() instanceof WhileLoop){
				WhileLoop whileLoop=(WhileLoop) parent.getParent();
				AstNode parentToAttach=makeSureBlockExistsAround(whileLoop.getBody());
				parentToAttach.addChildrenToFront(newNode);
				return;
			}

			if(parent.getParent() instanceof ForLoop){
				ForLoop forLoop=(ForLoop) parent.getParent();
				AstNode parentToAttach=makeSureBlockExistsAround(forLoop.getBody());
				parentToAttach.addChildrenToFront(newNode);
				return;
			}
			parent=parent.getParent();
		}

		if (parent instanceof ReturnStatement){
			AstNode attachBefore=parent;
			AstNode parentToAttach=makeSureBlockExistsAround(parent);
			parentToAttach.addChildBefore(newNode, attachBefore);
		}

		else if (parent!=null){
			AstNode attachAfter=parent;
			AstNode parentToAttach=makeSureBlockExistsAround(parent);
			parentToAttach.addChildAfter(newNode, attachAfter);
		}
	}

}

