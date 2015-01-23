package core;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.jar.Attributes;
import java.util.jar.JarFile;
import java.util.jar.Manifest;


import org.apache.commons.lang.StringUtils;

public class XpathSolver {

	private String xpathToSolve;
	private String constraintFileName;
	private String constraint;
	private String DOMFixture;

	public XpathSolver(){
		this.xpathToSolve = "";
		this.constraint = "";
	}

	public void setXpath(String xpath){
		this.xpathToSolve = xpath;
		//System.out.println(" writing the xpathToSolve: " + xpath + " in the constraints.txt file");
		// writing the xpathToSolve in the constraints.txt file to be used by the solver
		try {
			FileWriter fw = new FileWriter("auxiliary/constraints.txt", false); //clearing the old data
			fw.write(xpathToSolve + "\n");
			fw.close();
		} catch (IOException e) {
			e.printStackTrace();
			System.err.println("IOException: " + e.getMessage());
		}				
	}

	public void writeConstraintToFile(String constraintFileName){

	}
	
	public void solve() throws IOException, InterruptedException{
		//JarFile j = new JarFile(new File("/Users/aminmf/Downloads/websolver/lmusolver/lmusolver.jar"));
		//String mainClassName = j.getManifest().getMainAttributes().getValue("Main-Class");
		//System.out.println(mainClassName);
		//String[] formula = {constraintFileName};
		//fr.inrialpes.wam.treelogic.BottomUpSolver.CommandLineSolver.main(formula);		
		//System.out.println("SOLVING");
		Process ps = Runtime.getRuntime().exec("java -jar lib/solver.jar auxiliary/constraints.txt -attributes");
		ps.waitFor();
		java.io.InputStream is=ps.getInputStream();
		byte b[]=new byte[is.available()];
		is.read(b,0,b.length);
		System.out.println(new String(b));
		DOMFixture = new String(b);
	} 

	public String getDOMFixture(){
		// returning the processed XML as DOM fixture
		//System.out.println(DOMFixture);
        DOMFixture = StringUtils.substringBetween(DOMFixture, "<document solver:target=\"true\">", "</document>");
        DOMFixture = DOMFixture.replaceAll("_[0-9][0-9] ", " ").replaceAll("_[0-9][0-9]>", ">");
        DOMFixture = DOMFixture.replaceAll("_[0-9] ", " ").replaceAll("_[0-9]>", ">");
        DOMFixture = DOMFixture.replace("=\"_otherValue\"", "\"").replace("id_", "id=\"")
        		.replace("type_", "type=\"").replace("name_", "name=\"").replace("class_", "class=\"")
        		.replace("value_", "value=\"").replace("src_", "src=\"").replace("checked_", "checked=\"");
        
        DOMFixture = DOMFixture.replaceAll("[\n\r]", "").replace("    ", " ").replace("  ", " ");
        
		return DOMFixture;
	}

}
