package core;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.jar.Attributes;
import java.util.jar.JarFile;
import java.util.jar.Manifest;

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

	public void solve() throws IOException, InterruptedException{
		//JarFile j = new JarFile(new File("/Users/aminmf/Downloads/websolver/lmusolver/lmusolver.jar"));
		//String mainClassName = j.getManifest().getMainAttributes().getValue("Main-Class");
		//System.out.println(mainClassName);
		//String[] formula = {constraintFileName};
		//fr.inrialpes.wam.treelogic.BottomUpSolver.CommandLineSolver.main(formula);		
		Process ps = Runtime.getRuntime().exec("java -jar lib/solver.jar auxiliary/constraints.txt -attributes");
		ps.waitFor();
		java.io.InputStream is=ps.getInputStream();
		byte b[]=new byte[is.available()];
		is.read(b,0,b.length);
		System.out.println(new String(b));
	} 

	// TODO: Solve xpath using xpath solver
	public String XpathToXML(DOMConstraint constraint){
		String XML = null;
		// Calling  xpth solver from here!
		// Should then read the XML from the generated output file and return it
		return XML;
	}

}
