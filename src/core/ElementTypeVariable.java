package core;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Storing information regarding a DOM element type variable
 * 
 * @author aminmf
 */

public class ElementTypeVariable {

	private String DOMJSVariable;	// e.g. a = document.getElementById("demo"); then a is a DOMJSVariable

	private String originalAccessCode = ""; // e.g.  document.getElementById("demo")  or $('id')

	private String RemoteWebElementID = ""; // e.g. 1e2123e2 in  actualStatement: [org.openqa.selenium.remote.RemoteWebElement@1e2123e2 -> unknown locator]


	private String source = "";

	private String parentElementJSVariable;	// e.g. a = document.getElementById("demo"); then document is a DOMJSVariable / a.getElementByTag('p') -> a
	private List<String> childrenElementJSVariables = new ArrayList<String>();	// e.g. b = a.getElementByTag("p"); then b is a child of a

	private String attribues = "";

	// if isElement
	private String id_attribute = "ConfixGeneID" + TraceAnalyzer.generatedID++; // "ConfixGeneID%d" id is the default id to make sure all elements has at least one attribute for the sake of xpath generation step
	private String type_attribute = null; // e.g. type="button"
	private String name_attribute = null; // e.g. name="subject"
	private String tag_attribute = "div"; // using tag="div" as a default value for the element as long as we have no more information about it
	private String class_attribute = null; // e.g. class="main"
	private String value_attribute = null; // e.g. value="test"
	private String src_attribute = null; // e.g. scr="/image.jpg"
	private String innerHTML_attribute = null; // e.g. innerHTML="text"

	// variables set by attribute values: e.g. a = document.getElementById("demo").innerHTML; then a is an innerHTML_attributeVariable
	private String id_attributeVariable = ""; 
	private String type_attributeVariable = "";
	private String name_attributeVariable = "";
	private String class_attributeVariable = "";
	private String value_attributeVariable = "";
	private String src_attributeVariable = ""; 
	private String innerHTML_attributeVariable = ""; 



	@Override
	public String toString() {

		return "[DOMJSVariable=" + DOMJSVariable
				+ "\n parentElementJSVariable: " + parentElementJSVariable
				+ "\n RemoteWebElementID: " + RemoteWebElementID
				+ "\n attribues:" + getAttribues() + "]";
	}

	public void addChildElementJSVariables(String child){
		childrenElementJSVariables.add(child);
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
		// changing the default div tag to input as div elements do not have value attributes
		setTag_attribute("input");
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

	public String getParentElementJSVariable() {
		return parentElementJSVariable;
	}

	public void setParentElementJSVariable(String parentElementJSVariable) {
		this.parentElementJSVariable = parentElementJSVariable;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((DOMJSVariable == null) ? 0 : DOMJSVariable.hashCode());
		
		result = prime * result
				+ ((RemoteWebElementID == null) ? 0 : RemoteWebElementID.hashCode());
		
	
		result = prime * result
				+ ((attribues == null) ? 0 : attribues.hashCode());
		result = prime
				* result
				+ ((childrenElementJSVariables == null) ? 0
						: childrenElementJSVariables.hashCode());
		result = prime * result
				+ ((class_attribute == null) ? 0 : class_attribute.hashCode());
		result = prime * result
				+ ((id_attribute == null) ? 0 : id_attribute.hashCode());
		result = prime
				* result
				+ ((innerHTML_attribute == null) ? 0 : innerHTML_attribute
						.hashCode());
		result = prime * result
				+ ((name_attribute == null) ? 0 : name_attribute.hashCode());
		result = prime
				* result
				+ ((parentElementJSVariable == null) ? 0
						: parentElementJSVariable.hashCode());
		result = prime * result
				+ ((src_attribute == null) ? 0 : src_attribute.hashCode());
		result = prime * result
				+ ((tag_attribute == null) ? 0 : tag_attribute.hashCode());
		result = prime * result
				+ ((type_attribute == null) ? 0 : type_attribute.hashCode());
		result = prime * result
				+ ((value_attribute == null) ? 0 : value_attribute.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ElementTypeVariable other = (ElementTypeVariable) obj;
		if (DOMJSVariable == null) {
			if (other.DOMJSVariable != null)
				return false;
		} else if (!DOMJSVariable.equals(other.DOMJSVariable))
			return false;

		if (!RemoteWebElementID.equals(other.RemoteWebElementID))
			return false;

		if (attribues == null) {
			if (other.attribues != null)
				return false;
		} else if (!attribues.equals(other.attribues))
			return false;
		if (childrenElementJSVariables == null) {
			if (other.childrenElementJSVariables != null)
				return false;
		} else if (!childrenElementJSVariables
				.equals(other.childrenElementJSVariables))
			return false;
		if (class_attribute == null) {
			if (other.class_attribute != null)
				return false;
		} else if (!class_attribute.equals(other.class_attribute))
			return false;
		if (id_attribute == null) {
			if (other.id_attribute != null)
				return false;
		} else if (!id_attribute.equals(other.id_attribute))
			return false;
		if (innerHTML_attribute == null) {
			if (other.innerHTML_attribute != null)
				return false;
		} else if (!innerHTML_attribute.equals(other.innerHTML_attribute))
			return false;
		if (name_attribute == null) {
			if (other.name_attribute != null)
				return false;
		} else if (!name_attribute.equals(other.name_attribute))
			return false;
		if (parentElementJSVariable == null) {
			if (other.parentElementJSVariable != null)
				return false;
		} else if (!parentElementJSVariable
				.equals(other.parentElementJSVariable))
			return false;
		if (src_attribute == null) {
			if (other.src_attribute != null)
				return false;
		} else if (!src_attribute.equals(other.src_attribute))
			return false;
		if (tag_attribute == null) {
			if (other.tag_attribute != null)
				return false;
		} else if (!tag_attribute.equals(other.tag_attribute))
			return false;
		if (type_attribute == null) {
			if (other.type_attribute != null)
				return false;
		} else if (!type_attribute.equals(other.type_attribute))
			return false;
		if (value_attribute == null) {
			if (other.value_attribute != null)
				return false;
		} else if (!value_attribute.equals(other.value_attribute))
			return false;
		return true;
	}


	public String getId_attributeVariable() {
		return id_attributeVariable;
	}

	public void setId_attributeVariable(String id_attributeVariable) {
		this.id_attributeVariable = id_attributeVariable;
	}

	public String getType_attributeVariable() {
		return type_attributeVariable;
	}

	public void setType_attributeVariable(String type_attributeVariable) {
		this.type_attributeVariable = type_attributeVariable;
	}

	public String getName_attributeVariable() {
		return name_attributeVariable;
	}

	public void setName_attributeVariable(String name_attributeVariable) {
		this.name_attributeVariable = name_attributeVariable;
	}

	public String getClass_attributeVariable() {
		return class_attributeVariable;
	}

	public void setClass_attributeVariable(String class_attributeVariable) {
		this.class_attributeVariable = class_attributeVariable;
	}

	public String getValue_attributeVariable() {
		return value_attributeVariable;
	}

	public void setValue_attributeVariable(String value_attributeVariable) {
		this.value_attributeVariable = value_attributeVariable;
	}

	public String getSrc_attributeVariable() {
		return src_attributeVariable;
	}

	public void setSrc_attributeVariable(String src_attributeVariable) {
		this.src_attributeVariable = src_attributeVariable;
	}

	public String getInnerHTML_attributeVariable() {
		return innerHTML_attributeVariable;
	}

	public void setInnerHTML_attributeVariable(String innerHTML_attributeVariable) {
		this.innerHTML_attributeVariable = innerHTML_attributeVariable;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getOriginalAccessCode() {
		return originalAccessCode;
	}

	public void setOriginalAccessCode(String originalAccessCode) {
		this.originalAccessCode = originalAccessCode;
	}

	public String getRemoteWebElementID() {
		return RemoteWebElementID;
	}

	public void setRemoteWebElementID(String remoteWebElementID) {
		RemoteWebElementID = remoteWebElementID;
	}


}
