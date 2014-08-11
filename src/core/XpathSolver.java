package core;

public class XpathSolver {

	private String xpath;
	private String constraintFileName;

	public XpathSolver(){
		this.xpath = "";
		this.constraintFileName = "constraints.txt";
	}
	
	public void setXpath(String xpath){
		this.xpath = xpath;
	}

	public void setConstraintFileName(String constraintFileName){
		this.constraintFileName = constraintFileName;
	}
	
	public void writeConstraintToFile(String constraintFileName){
		this.constraintFileName = constraintFileName;
	}
	
	public void solve(){
		//JarFile j = new JarFile(new File("/Users/aminmf/Downloads/websolver/lmusolver/lmusolver.jar"));
		//String mainClassName = j.getManifest().getMainAttributes().getValue("Main-Class");
		//System.out.println(mainClassName);
		
		String[] formula = {constraintFileName};
		fr.inrialpes.wam.treelogic.BottomUpSolver.CommandLineSolver.main(formula);		
	}
	
	// TODO: Solve xpath using xpath solver
	public String XpathToXML(DOMConstraint constraint){
		String XML = null;
		// Calling  xpth solver from here!
		// Should then read the XML from the generated output file and return it
		return XML;
	}

}
