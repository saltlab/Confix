package core;

public class DOMConstraint {

	// Example: a = document.getElementById("demo"); -> attribute constraint is: id = "demo"
	private DOMElementTypeVariable DOMElementVariable;
	
	private boolean addedToTheXpath = false;  // this is to know if the constarint is added to the final xpath or not
	

	public DOMConstraint(DOMElementTypeVariable DOMElementVariable) {
		System.out.println("DOMElementVariable: " + DOMElementVariable);
		this.DOMElementVariable = DOMElementVariable;
	}
	
	private String stringValueConstraint;	// document.anchors[0].innerHTML = "text"
	private int intValueConstraint;			// x.size = 4
	private boolean booleanValueConstraint; // radio button selected/not selected {true, false}
	
	//TODO: what about dependency to anoter DOM element such as being a child node of another node?
	
	private String xpath;
	
	private String comparisonNotation;  // {"!=","==","<",">"}
	
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
		this.addedToTheXpath = addedToTheXpath;
	}

	
}
