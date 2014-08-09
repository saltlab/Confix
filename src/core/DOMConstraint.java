package core;

public class DOMConstraint {
	
	// Example: a = document.getElementById("demo");
	private String variable;	// a 
	private String value;		// document.getElementById("demo")   / document.anchors[0].innerHTML
	
	private String attributeConstraint;		// id = "demo"
	
	private String stringValueConstraint;	// document.anchors[0].innerHTML = "text"
	private int intValueConstraint;			// x.size = 4
	private boolean booleanValueConstraint; // radio button selected/not selected {true, false}
	
	//TODO: what about dependency to anoter DOM element such as being a child node of another node?
	
	private String xpath;
	
	private String comparisonNotation;  // {"!=","==","<",">"}
	
	public void addStringConstraint(String xpath, String comparisonNotation, String stringValueConstraint){
		this.xpath = xpath;
		this.comparisonNotation = comparisonNotation;
		this.stringValueConstraint = stringValueConstraint;
	}

	public void addIntConstraint(String xpath, String comparisonNotation, int intValueConstraint){
		this.xpath = xpath;
		this.comparisonNotation = comparisonNotation;
		this.intValueConstraint = intValueConstraint;
	}
	
	public void addBoolConstraint(String xpath, String comparisonNotation, String booleanValueConstraint){
		this.xpath = xpath;
		this.comparisonNotation = comparisonNotation;
		this.stringValueConstraint = booleanValueConstraint;
	}
	
	public String getSatisfiedXpath(){
		return null;
	}
	
}
