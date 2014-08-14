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

	private String parentNodeElement;	// e.g. a = document.getElementById("demo"); then document is a DOMJSVariable / a.getElementByTag('p') -> a

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
	
	
	@Override
	public String toString() {

		return "[DOMJSVariable=" + DOMJSVariable
				+ "\n parentNodeElement:" + parentNodeElement
				+ "\n attribues:" + getAttribues() + "]";
	}
	
	public String getDOMJSVariable() {
		return DOMJSVariable;
	}

	public void setDOMJSVariable(String dOMJSVariable) {
		DOMJSVariable = dOMJSVariable;
	}

	public String getAttribues() {
		attribues = "";
		
		if (id_attribute!=null)
			attribues += (" id=\"" + id_attribute + "\"");		
		if (type_attribute!=null)
			attribues += (" type=\"" + type_attribute + "\"");		
		if (name_attribute!=null)
			attribues += (" name=\"" + name_attribute + "\"");		
		if (tag_attribute!=null)
			attribues += (" tag=\"" + tag_attribute + "\"");		
		if (class_attribute!=null)
			attribues += (" class=\"" + class_attribute + "\"");		
		if (value_attribute!=null)
			attribues += (" value=\"" + value_attribute + "\"");		
		if (src_attribute!=null)
			attribues += (" src=\"" + src_attribute + "\"");		
		if (innerHTML_attribute!=null)
			attribues += (" innerHTML=\"" + innerHTML_attribute + "\"");	

		return attribues;
	}

	public void setAttribues(String attribues) {
		this.attribues = attribues;
	}

	public String getId_attribute() {
		return id_attribute;
	}

	public void setId_attribute(String id_attribute) {
		id_attribute = id_attribute.replace("\"", "");
		this.id_attribute = id_attribute;
	}

	public String getType_attribute() {
		return type_attribute;
	}

	public void setType_attribute(String type_attribute) {
		type_attribute = type_attribute.replace("\"", "");
		this.type_attribute = type_attribute;
	}

	public String getTag_attribute() {
		return tag_attribute;
	}

	public void setTag_attribute(String tag_attribute) {
		tag_attribute = tag_attribute.replace("\"", "");
		this.tag_attribute = tag_attribute;
	}

	public String getName_attribute() {
		return name_attribute;
	}

	public void setName_attribute(String name_attribute) {
		name_attribute = name_attribute.replace("\"", "");
		this.name_attribute = name_attribute;
	}

	public String getClass_attribute() {
		return class_attribute;
	}

	public void setClass_attribute(String class_attribute) {
		class_attribute = class_attribute.replace("\"", "");
		this.class_attribute = class_attribute;
	}

	public String getValue_attribute() {
		return value_attribute;
	}

	public void setValue_attribute(String value_attribute) {
		value_attribute = value_attribute.replace("\"", "");
		this.value_attribute = value_attribute;
	}

	public String getSrc_attribute() {
		return src_attribute;
	}

	public void setSrc_attribute(String src_attribute) {
		src_attribute = src_attribute.replace("\"", "");
		this.src_attribute = src_attribute;
	}

	public String getInnerHTML_attribute() {
		return innerHTML_attribute;
	}

	public void setInnerHTML_attribute(String innerHTML_attribute) {
		innerHTML_attribute = innerHTML_attribute.replace("\"", "");
		this.innerHTML_attribute = innerHTML_attribute;
	}

	public String getParentNodeElement() {
		return parentNodeElement;
	}

	public void setParentNodeElement(String parentNodeElement) {
		this.parentNodeElement = parentNodeElement;
	}
	
}
