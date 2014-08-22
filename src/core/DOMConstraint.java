package core;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

public class DOMConstraint {

	// Example: a = document.getElementById("demo"); -> attribute constraint is: id = "demo"
	private ElementTypeVariable DOMElementVariable;
	private String enclosingFunctionName = "";

	private boolean addedToTheXpath = false;  // this is to know if the constarint is added to the final xpath or not


	public DOMConstraint(ElementTypeVariable DOMElementVariable) {
		System.out.println("DOMElementVariable: " + DOMElementVariable);
		this.DOMElementVariable = DOMElementVariable;
	}


	/*
	    statementToSatisfyConditionalConstraint and statementToNotSatisfyConditionalConstraint will be generated as JavaScript statements to be added to the test functions
		that dynamically at run-time add to the attributes to satisfy the given constraint.
	 */
	private List<String> statementToSatisfyConditionalConstraint = new ArrayList<String>();
	private List<String> statementToNotSatisfyConditionalConstraint = new ArrayList<String>();
	private List<String> statementToSatisfyGeneralConstraints = new ArrayList<String>();

	private List<String> statementForAllConstraints = new ArrayList<String>();
	
	//TODO: what about dependency to anoter DOM element such as being a child node of another node?

	private String xpath;

	public ElementTypeVariable getDOMElementTypeVariable(){
		return DOMElementVariable;
	}

	public void addConstraint(String constraint, boolean conditional){  // conditional means the constraint is used in a condition e.g. if (document.anchors[0].innerHTML === "text")
		if (conditional==false){
			this.statementToSatisfyGeneralConstraints.add(constraint);
		}else{  // if (conditional==true) generate statements
			if (constraint.contains("==") || constraint.contains("===")){
				addStatementToSatisfyConstraint(constraint.replace("==", "="));
				addStatementToNotSatisfyConstraint(constraint.replace("==", "=") + " + \"NEGATE\"");
			}else{
				addStatementToSatisfyConstraint(constraint);
				addStatementToNotSatisfyConstraint( "!"+ constraint);
			} 
		}
	}

	public void generateAllConstraints(){
		
	}

	// TODO:  Transform constraints to xpath using string/int solver
	/*public String getCorrespondingXpath(){
		String id = DOMElementVariable.getId_attribute();
		String tag = DOMElementVariable.getTag_attribute();
		String type = DOMElementVariable.getType_attribute();
		String name = DOMElementVariable.getName_attribute();
		String Class = DOMElementVariable.getClass_attribute();
		String value = DOMElementVariable.getValue_attribute();
		String src = DOMElementVariable.getSrc_attribute();
		String innerHTML = DOMElementVariable.getInnerHTML_attribute();


		// select("html/body/descendant::switch[ancestor::body[ancestor::html]]//descendant::audio[preceding-sibling::video/test2]/
		//		descendant::seq/descendant::audio[preceding-sibling::video/test2]/test[@attr_100]")

		xpath = "************** select(\"document[" + tag;

		if (id!=null || type!=null || name!=null || Class!=null || value!=null || src!=null)
			xpath += "[";

		if(id!=null)
			xpath += "@id_" + id;
		if(type!=null)
			xpath += "and @type_" + type;
		if(name!=null)
			xpath += "and @name_" + name;
		if(Class!=null)
			xpath += "and @class_" + Class;
		if(value!=null)
			xpath += "and @value_" + value;
		if(src!=null)
			xpath += "and @scr_" + src;

		if (id!=null || type!=null || name!=null || Class!=null || value!=null || src!=null)
			xpath += "]";

		xpath += "]\")";
		System.out.println("DOMElementVariable: " + DOMElementVariable);
		return xpath;
	}*/

	// TODO:  Transform constraints to xpath using string/int solver
	public String getCorrespondingXpath(){
		String id = DOMElementVariable.getId_attribute();
		String tag = DOMElementVariable.getTag_attribute();
		String type = DOMElementVariable.getType_attribute();
		String name = DOMElementVariable.getName_attribute();
		String Class = DOMElementVariable.getClass_attribute();
		String value = DOMElementVariable.getValue_attribute();
		String src = DOMElementVariable.getSrc_attribute();
		String innerHTML = DOMElementVariable.getInnerHTML_attribute();


		// select("html/body/descendant::switch[ancestor::body[ancestor::html]]//descendant::audio[preceding-sibling::video/test2]/
		//		descendant::seq/descendant::audio[preceding-sibling::video/test2]/test[@attr_100]")

		xpath = tag;

		if (id!=null || type!=null || name!=null || Class!=null || value!=null || src!=null)
			xpath += "[";

		if(id!=null)
			xpath += "@id_" + id;
		if(type!=null)
			xpath += "and @type_" + type;
		if(name!=null)
			xpath += "and @name_" + name;
		if(Class!=null)
			xpath += "and @class_" + Class;
		if(value!=null)
			xpath += "and @value_" + value;
		if(src!=null)
			xpath += "and @scr_" + src;

		if (id!=null || type!=null || name!=null || Class!=null || value!=null || src!=null)
			xpath += "]";

		System.out.println("DOMElementVariable: " + DOMElementVariable);
		return xpath;
	}

	public boolean isAddedToTheXpath() {
		return addedToTheXpath;
	}

	public void setAddedToTheXpath(boolean addedToTheXpath) {
		System.out.println("setAddedToTheXpath for xpath: " + getCorrespondingXpath());
		this.addedToTheXpath = addedToTheXpath;
	}

	public String getEnclosingFunctionName() {
		return enclosingFunctionName;
	}

	public void setEnclosingFunctionName(String enclosingFunctionName) {
		this.enclosingFunctionName = enclosingFunctionName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime
				* result
				+ ((DOMElementVariable == null) ? 0 : DOMElementVariable
						.hashCode());
		result = prime * result + (addedToTheXpath ? 1231 : 1237);
		result = prime
				* result
				+ ((enclosingFunctionName == null) ? 0 : enclosingFunctionName
						.hashCode());
		result = prime * result + ((xpath == null) ? 0 : xpath.hashCode());
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
		DOMConstraint other = (DOMConstraint) obj;
		if (DOMElementVariable == null) {
			if (other.DOMElementVariable != null)
				return false;
		} else if (!DOMElementVariable.equals(other.DOMElementVariable))
			return false;
		if (addedToTheXpath != other.addedToTheXpath)
			return false;
		if (enclosingFunctionName == null) {
			if (other.enclosingFunctionName != null)
				return false;
		} else if (!enclosingFunctionName.equals(other.enclosingFunctionName))
			return false;
		if (xpath == null) {
			if (other.xpath != null)
				return false;
		} else if (!xpath.equals(other.xpath))
			return false;
		return true;
	}

	public List<String> getConstraints() {
		return statementToSatisfyGeneralConstraints;
	}


	public List<String> getStatementToSatisfyConstraint() {
		return statementToSatisfyConditionalConstraint;
	}

	public void addStatementToSatisfyConstraint(
			String statementToSatisfyConstraint) {
		this.statementToSatisfyConditionalConstraint.add(statementToSatisfyConstraint);
	}

	public List<String> getStatementToNotSatisfyConstraint() {
		return statementToNotSatisfyConditionalConstraint;
	}

	public void addStatementToNotSatisfyConstraint(
			String statementToNotSatisfyConstraint) {
		this.statementToNotSatisfyConditionalConstraint.add(statementToNotSatisfyConstraint);
	}

	public List<String> getStatementsForAllConstraints() {
		String statementForConstraints = "";
		// For a set of n constraints, produce 2^n combinations of constraints corresponding to paths
		System.out.println("produce 2^n combinations");
		int nomOfConditionalConstraints = statementToSatisfyConditionalConstraint.size();
		System.out.println(nomOfConditionalConstraints);
		String controllerBits = "";
		int numOfCombinations = (int)Math.pow(2,nomOfConditionalConstraints);
		for(int i=0 ; i< numOfCombinations ; i++){
			statementForConstraints = "";
			controllerBits = StringUtils.leftPad(Integer.toBinaryString(i), nomOfConditionalConstraints, '0');
			//System.out.println(controllerBits);
			for(int j=0 ; j< nomOfConditionalConstraints ; j++){
				if (controllerBits.charAt(j) == '1'){ // use the statementToSatisfyConstraint
					System.out.println(statementToSatisfyConditionalConstraint.get(j)+ ";" + "\n\t");
					statementForConstraints += statementToSatisfyConditionalConstraint.get(j);
				}else{ // statementToNotSatisfyConstraint
					System.out.println(statementToNotSatisfyConditionalConstraint.get(j)+ ";" + "\n\t");
					statementForConstraints += statementToNotSatisfyConditionalConstraint.get(j);
				}
				if (j<nomOfConditionalConstraints-1)
					statementForConstraints += ";\n\t";
			}
			statementForAllConstraints.add(statementForConstraints);
		}
		return statementForAllConstraints;
	}

}
