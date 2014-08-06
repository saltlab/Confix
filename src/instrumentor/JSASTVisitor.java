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
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.ForLoop;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.IfStatement;
import org.mozilla.javascript.ast.InfixExpression;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.ObjectProperty;
import org.mozilla.javascript.ast.ParenthesizedExpression;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.ReturnStatement;
import org.mozilla.javascript.ast.StringLiteral;
import org.mozilla.javascript.ast.Symbol;
import org.mozilla.javascript.ast.WhileLoop;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.crawljax.plugins.aji.ConsoleErrorReporter;


public abstract class JSASTVisitor implements NodeVisitor{

	protected static final Logger LOGGER = LoggerFactory.getLogger(JSASTVisitor.class.getName());

	private static List<String> functionCallsNotToVisit=new ArrayList<String>();
	private static List<String> functionNodes=new ArrayList<String>();
	
	public boolean shouldTrackFunctionCalls=true;
	public boolean shouldTrackFunctionNodes=true;
	

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
		//		jqueryList.add("append");
		//		jqueryList.add("appendTo");
		//		jqueryList.add("prepend");
		//		jqueryList.add("prependTo");
		//		jqueryList.add("insertBefore");
		//		jqueryList.add("insertAfter");
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
		 *  Finding HTML Elements
			document.getElementById() 	Find an element by element id
			document.getElementsByTagName() 	Find elements by tag name
			document.getElementsByClassName() 	Find elements by class name

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
		 * 
		 * 
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

		System.out.println("visit");

		System.out.println(node.debugPrint());

		String ASTNodeName = node.shortName();
		int type = node.getType();
		int ASTDepth = node.depth();

		System.out.println("node.shortName() : " + ASTNodeName);
		System.out.println("node.depth() : " + ASTDepth);
		System.out.println("node.getLineno() : " + (node.getLineno()+1));
		System.out.println("node.toSource() : " + node.toSource());
		System.out.println("node.getType() : " + node.getType());
		System.out.println("node.getAstRoot() : " + node.getAstRoot());
		System.out.println("node.debugPrint() : " + node.debugPrint());

		
		
		
		
		if(shouldTrackFunctionNodes){
			if(node instanceof FunctionNode){
				FunctionNode fNode=(FunctionNode) node;
				System.out.println(fNode.debugPrint());
				System.out.println(getFunctionName(fNode));
				functionNodes.add(getFunctionName((FunctionNode)node));
			}
		}
		else{
			if(node instanceof FunctionNode){
				FunctionNode fNode=(FunctionNode) node;
				String funcName=getFunctionName(fNode);
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

		if (1==1)
			return true;
			
		/*
		// check if we are in the up the currentObjectNodeDepth
		if (ASTDepth < currentObjectNodeDepth && lastMessageChain==1 && ignoreDepthChange==false){  // dealing with a.b.c = ... patterns  
			nextNameIsProperty = false;
			//nextNameIsObject = true;
			//System.out.println("analyseAstNode(): Level changed! nextNameIsObject");
			//System.out.println("analyseAstNode(): Level changed! nextName is not property anymore");
		}

		// check if we are in LHS of the current assignment, used to check if a property is defined and not just used
		if (ASTDepth==assignmentNodeDepth+1){
			if (assignmentLHSVisited == false){
				assignmentLHSVisited = true;
			}else
				LHS = false;
		}


		if (ASTNodeName.equals("Name")){
			//System.out.println(ASTNode.debugPrint());

			for (Symbol s: ASTNode.getAstRoot().getSymbols()){
				int sType = s.getDeclType();
			    if (sType == Token.LP || sType == Token.VAR || sType == Token.LET || sType == Token.CONST){
			    	//System.out.println("global detected: " + s.getName());
			    	globals.add(s.getName());
			    }
			}
			//System.out.println();
		}
//		else if (ASTNodeName.equals("FunctionNode")){
//			FunctionNode f = (FunctionNode) ASTNode;
//			for (Symbol s: f.getSymbols()){
//				int sType = s.getDeclType();
//			    if (sType == Token.LP || sType == Token.VAR || sType == Token.LET || sType == Token.CONST){
//			    	System.out.println("s.getName() : " + s.getName());
//			    }
//			}
//			
//			System.out.println(f.getSymbolTable());
//			System.out.println(f.getSymbols());
//		}        



		if (ASTNodeName.equals("Name"))
			analyseNameNode();
		else if (ASTNodeName.equals("VariableDeclaration"))
			analyseVariable();
		else if (ASTNodeName.equals("ObjectLiteral"))
			analyseObjectLiteralNode();
		else if (ASTNodeName.equals("ObjectProperty"))
			analyseObjectPropertyNode();
		else if (ASTNodeName.equals("FunctionNode"))
			analyseFunctionNode();
		else if (ASTNodeName.equals("PropertyGet"))  // this is for inner function defined properties such as this.name = ...
			analysePropertyGetNode();
		else if (ASTNodeName.equals("NewExpression"))
			analyseNewExpressionNode();
		else if (ASTNodeName.equals("FunctionCall"))
			analyseFunctionCallNode();
		else if (ASTNodeName.equals("Assignment"))
			analyseAssignmentNode();
		else if (ASTNodeName.equals("CatchClause"))
			analyseCatchClause();
		else if (ASTNodeName.equals("ReturnStatement") || ASTNodeName.equals("BreakStatement") || ASTNodeName.equals("ContinueStatement") || ASTNodeName.equals("ThrowStatement"))
			analyseRechability();
		else if (ASTNodeName.equals("Block"))
			analyseBlock();		
		else if (type == Token.SWITCH)
			isSwitchSmell();
		else if (type == Token.THIS)
			thisInClosure();

		 */





		if (node instanceof Name) {
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
		else if(node instanceof FunctionCall){
			if( ((FunctionCall)node).getTarget() instanceof Name){

				if(((Name)((FunctionCall)node).getTarget()).getIdentifier().equals("$")){
					//				setJsDomMap(((Name)((FunctionCall)node).getTarget()), "jquery_r_dollar");

					if(((FunctionCall)node).getArguments().size()==1
							&& ((FunctionCall)node).getArguments().get(0) instanceof StringLiteral
							&& ((FunctionCall)node).getArguments().get(0).toSource().startsWith(".")
							|| ((FunctionCall)node).getArguments().get(0).toSource().startsWith("#") ){
						setJsDomMap(((FunctionCall)node).getArguments().get(0), "jquery_c_selSign");
					}

				}
			}
		}


		return true;
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

