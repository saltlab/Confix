package core;

import java.util.ArrayList;
import java.util.List;

/**
 * Storing information regarding a DOM element type variable
 * 
 * @author aminmf
 */

public class DOMElementTypeVariable {
	
	private String DOMJSVariable;	// e.g. a = document.getElementById("demo"); then a is a DOMJSVariable

	private boolean isElement = false;				// e.g. x = document.getElementById("demo") then isElement = true for x
	private boolean isPropertyOfElement = false;	// e.g. x = $('id').innerHTML then isPropertyOfElement = true for x
	private String attribues = "";
	
	// if isElement
	private String id_attribute = null; // e.g. id="demo"
	private String type_attribute = null; // e.g. type="button"
	private String name_attribute = null; // e.g. name="subject"
	private String tag_attribute = "div"; // using tag="div" as a default value for the element as long as we have no more information about it
	private String class_attribute = null; // e.g. class="main"
	private String value_attribute = null; // e.g. value="test"
	private String src_attribute = null; // e.g. scr="/image.jpg"
	private String innerHTML_attribute = null; // e.g. innerHTML="text"
	
	
	// construct the list of not-null attributes
	public String getAttributes(){
		addToAttributes("id", id_attribute);
		addToAttributes("type", type_attribute);
		addToAttributes("name", name_attribute);
		addToAttributes("tag", tag_attribute);
		addToAttributes("class", class_attribute);
		addToAttributes("value", value_attribute);
		addToAttributes("src", src_attribute);
		addToAttributes("innerHTML", innerHTML_attribute);

		return attribues;
	}
	
	public void addToAttributes(String att, String value){
		if (value!=null)
			attribues += " " + att + "=\"" + value +"\"";
	}

	public String getDOMJSVariable() {
		return DOMJSVariable;
	}

	public void setDOMJSVariable(String dOMJSVariable) {
		DOMJSVariable = dOMJSVariable;
	}

	public boolean isElement() {
		return isElement;
	}

	public void setElement(boolean isElement) {
		this.isElement = isElement;
	}

	public boolean isPropertyOfElement() {
		return isPropertyOfElement;
	}

	public void setPropertyOfElement(boolean isPropertyOfElement) {
		this.isPropertyOfElement = isPropertyOfElement;
	}

	public String getAttribues() {
		return attribues;
	}

	public void setAttribues(String attribues) {
		this.attribues = attribues;
	}

	public String getId_attribute() {
		return id_attribute;
	}

	public void setId_attribute(String id_attribute) {
		this.id_attribute = id_attribute;
	}

	public String getType_attribute() {
		return type_attribute;
	}

	public void setType_attribute(String type_attribute) {
		this.type_attribute = type_attribute;
	}

	public String getTag_attribute() {
		return tag_attribute;
	}

	public void setTag_attribute(String tag_attribute) {
		this.tag_attribute = tag_attribute;
	}

	public String getName_attribute() {
		return name_attribute;
	}

	public void setName_attribute(String name_attribute) {
		this.name_attribute = name_attribute;
	}

	public String getClass_attribute() {
		return class_attribute;
	}

	public void setClass_attribute(String class_attribute) {
		this.class_attribute = class_attribute;
	}

	public String getValue_attribute() {
		return value_attribute;
	}

	public void setValue_attribute(String value_attribute) {
		this.value_attribute = value_attribute;
	}

	public String getSrc_attribute() {
		return src_attribute;
	}

	public void setSrc_attribute(String src_attribute) {
		this.src_attribute = src_attribute;
	}

	public String getInnerHTML_attribute() {
		return innerHTML_attribute;
	}

	public void setInnerHTML_attribute(String innerHTML_attribute) {
		this.innerHTML_attribute = innerHTML_attribute;
	}
	
}
