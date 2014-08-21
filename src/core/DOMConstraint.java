package core;

public class DOMConstraint {

	// Example: a = document.getElementById("demo"); -> attribute constraint is: id = "demo"
	private DOMElementTypeVariable DOMElementVariable;
	private String enclosingFunctionName = "";
	
	private boolean addedToTheXpath = false;  // this is to know if the constarint is added to the final xpath or not
	

	public DOMConstraint(DOMElementTypeVariable DOMElementVariable) {
		System.out.println("DOMElementVariable: " + DOMElementVariable);
		this.DOMElementVariable = DOMElementVariable;
	}
	
	// conditions : e.g. if (x < 10) 
	private String left;	// x
	private String operator;	// <
	private String right;	// 10
	
	
	
	
	private String stringValueConstraint;	// document.anchors[0].innerHTML === "text"
	private int intValueConstraint;			// x.size === 4
	private boolean booleanValueConstraint; // radio button selected/not selected {true, false}
	private String comparisonNotation;  // {"!=","==","<",">"}
	
	//TODO: what about dependency to anoter DOM element such as being a child node of another node?
	
	private String xpath;
	
	
	public DOMElementTypeVariable getDOMElementTypeVariable(){
		return DOMElementVariable;
	}
		
	public void addStringConstraint(String comparisonNotation, String stringValueConstraint){
		this.comparisonNotation = comparisonNotation;
		this.stringValueConstraint = stringValueConstraint;
	}

	public void addIntConstraint(String comparisonNotation, int intValueConstraint){
		this.comparisonNotation = comparisonNotation;
		this.intValueConstraint = intValueConstraint;
	}
	
	public void addBoolConstraint(String comparisonNotation, String booleanValueConstraint){
		this.comparisonNotation = comparisonNotation;
		this.stringValueConstraint = booleanValueConstraint;
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

	public String getLeft() {
		return left;
	}

	public void setLeft(String left) {
		this.left = left;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public String getRight() {
		return right;
	}

	public void setRight(String right) {
		this.right = right;
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
		result = prime * result + (booleanValueConstraint ? 1231 : 1237);
		result = prime
				* result
				+ ((comparisonNotation == null) ? 0 : comparisonNotation
						.hashCode());
		result = prime
				* result
				+ ((enclosingFunctionName == null) ? 0 : enclosingFunctionName
						.hashCode());
		result = prime * result + intValueConstraint;
		result = prime * result + ((left == null) ? 0 : left.hashCode());
		result = prime * result
				+ ((operator == null) ? 0 : operator.hashCode());
		result = prime * result + ((right == null) ? 0 : right.hashCode());
		result = prime
				* result
				+ ((stringValueConstraint == null) ? 0 : stringValueConstraint
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
		if (booleanValueConstraint != other.booleanValueConstraint)
			return false;
		if (comparisonNotation == null) {
			if (other.comparisonNotation != null)
				return false;
		} else if (!comparisonNotation.equals(other.comparisonNotation))
			return false;
		if (enclosingFunctionName == null) {
			if (other.enclosingFunctionName != null)
				return false;
		} else if (!enclosingFunctionName.equals(other.enclosingFunctionName))
			return false;
		if (intValueConstraint != other.intValueConstraint)
			return false;
		if (left == null) {
			if (other.left != null)
				return false;
		} else if (!left.equals(other.left))
			return false;
		if (operator == null) {
			if (other.operator != null)
				return false;
		} else if (!operator.equals(other.operator))
			return false;
		if (right == null) {
			if (other.right != null)
				return false;
		} else if (!right.equals(other.right))
			return false;
		if (stringValueConstraint == null) {
			if (other.stringValueConstraint != null)
				return false;
		} else if (!stringValueConstraint.equals(other.stringValueConstraint))
			return false;
		if (xpath == null) {
			if (other.xpath != null)
				return false;
		} else if (!xpath.equals(other.xpath))
			return false;
		return true;
	}
	
}
