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
	
	// if isElement
	private static List<String> attributeValue = new ArrayList<String>(); // e.g. id="demo", innerHTML = "text"
	
}
