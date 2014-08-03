package core;

public class ElementConstraint {
	private String xpath;
	
	private String stringValueConstraint;
	private int intValueConstraint;
	private boolean booleanValueConstraint; // {true, false}

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
