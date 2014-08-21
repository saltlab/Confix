package core;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Storing information regarding a DOM element attribute type variable
 * 
 * @author aminmf
 */

public class AttributeTypeVariable {

	private String attributeJSVariable;	// e.g. a = document.getElementById("demo").innerHTML; then a is an attributeJSVariable
	private ElementTypeVariable elementTypeVariable;  // e.g. $('id').html() -> $('id')
	private String attribue = "";	// e.g. document.getElementById("demo").innerHTML; then innerHTML is an attribue


	public String getAttributeJSVariable() {
		return attributeJSVariable;
	}
	public void setAttributeJSVariable(String attributeJSVariable) {
		this.attributeJSVariable = attributeJSVariable;
	}
	public ElementTypeVariable getElementTypeVariable() {
		return elementTypeVariable;
	}
	public void setElementTypeVariable(ElementTypeVariable elementTypeVariable) {
		this.elementTypeVariable = elementTypeVariable;
	}
	public String getAttribue() {
		return attribue;
	}
	public void setAttribue(String attribue) {
		this.attribue = attribue;
	}
		

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((attribue == null) ? 0 : attribue.hashCode());
		result = prime
				* result
				+ ((attributeJSVariable == null) ? 0 : attributeJSVariable
						.hashCode());
		result = prime
				* result
				+ ((elementTypeVariable == null) ? 0 : elementTypeVariable
						.hashCode());
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
		AttributeTypeVariable other = (AttributeTypeVariable) obj;
		if (attribue == null) {
			if (other.attribue != null)
				return false;
		} else if (!attribue.equals(other.attribue))
			return false;
		if (attributeJSVariable == null) {
			if (other.attributeJSVariable != null)
				return false;
		} else if (!attributeJSVariable.equals(other.attributeJSVariable))
			return false;
		if (elementTypeVariable == null) {
			if (other.elementTypeVariable != null)
				return false;
		} else if (!elementTypeVariable.equals(other.elementTypeVariable))
			return false;
		return true;
	}

	
}
