package core;

public class DOMConstraint {

	// Example: a = document.getElementById("demo"); -> attribute constraint is: id = "demo"
	private DOMElementTypeVariable DOMElementVariable;
	

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
	public String getCorrespondingXpath(){
		String tag = DOMElementVariable.getTag_attribute();
		// select("html/body/descendant::switch[ancestor::body[ancestor::html]]//descendant::audio[preceding-sibling::video/test2]/
		//		descendant::seq/descendant::audio[preceding-sibling::video/test2]/test[@attr_100]")

		xpath = "";
		System.out.println("DOMElementVariable: " + DOMElementVariable);
		return xpath;
	}
	
}
