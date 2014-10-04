package core;

import instrumentor.JSASTInstrumenter;
import instrumentor.JSModifyProxyPlugin;
import instrumentor.ProxyConfiguration;

import java.io.File;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.owasp.webscarab.model.Preferences;
import org.owasp.webscarab.plugin.Framework;
import org.owasp.webscarab.plugin.proxy.Proxy;

import testgenerator.TestSuiteGenerator;

public class ConcolicEngine {
	/*
	 * Concolic DOM generation
	 * 1) Input variables take values w.r.t DOM elements. These variables will be treated as symbolic variables
	 * during symbolic execution. All other variables will be treated as concrete values.
	 * 2) Instrument the program so that each operation which may affect a symbolic variable value or a path condition
	 * is logged to a trace file, as well as any error that occurs.
	 * 3) Choose an arbitrary input to begin with.
	 * 4) Execute the program.
	 * 5) Symbolically re-execute the program on the trace, generating a set of symbolic constraints (including path conditions).
	 * 6) Negate the last path condition not already negated in order to visit a new execution path. If there is no such path condition, 
	 * the algorithm terminates.
	 * 7) Invoke an automated theorem prover to generate a new input. If there is no input satisfying the constraints, 
	 * return to step 6 to try the next execution path.
	 * 8) Return to step 4.
	 */
	private String url;
	private WebDriver driver;
	private JSModifyProxyPlugin JSModifier;
	private JSAnalyzer codeAnalyzer;

	private String jsAddress;
	private String scopeName;
	private String functionToTest;

	public ConcolicEngine(String jsAdderess, String scopeName, String functionToTest){
		this.jsAddress = jsAdderess;
		this.scopeName = scopeName;
		this.functionToTest = functionToTest;
	}
	

	public void driverSetup(ProxyConfiguration prox) throws Exception {
		FirefoxProfile profile = new FirefoxProfile();
		if (prox != null) {
			profile.setPreference("network.proxy.http", prox.getHostname());
			profile.setPreference("network.proxy.http_port", prox.getPort());
			profile.setPreference("network.proxy.type", prox.getType().toInt());
			/* use proxy for everything, including localhost */
			profile.setPreference("network.proxy.no_proxies_on", "");
		}
		driver = new FirefoxDriver(profile);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	public void driverExecute(String javascript) throws Exception {
		((JavascriptExecutor) driver).executeScript(javascript);
	}

	public void driverQuit() throws Exception {
		//if (getCoverageReport)
		//	((JavascriptExecutor) driver).executeScript(" if (window.jscoverage_report) {return jscoverage_report('CodeCoverageReport');}");
		driver.quit();
	}

	public void load(){
		driver.get(url);
	}



	// Runs the cocolic exectuion
	public void run() throws Exception {
		
		// Intercept and instrument the JavaScript code via a proxy
		// No need for dynamic instrumentation. Removed!
		/*ProxyConfiguration prox = new ProxyConfiguration();
		runProxy(prox);
		driverSetup(prox);
		load();
		 */
		
		// Instrument the JavaScript code
		codeAnalyzer = new JSAnalyzer(new JSASTInstrumenter(), jsAddress, scopeName);
	    codeAnalyzer.instrumentJavaScript();
		

		// Dynamic symbolic execution
	    String htmlTestFile = (System.getProperty("user.dir")+"/"+jsAddress).replace(scopeName, "concolic.thm");
	    codeAnalyzer.generateHTMLTestFile(htmlTestFile);

	    System.out.println(htmlTestFile);
		url = "http://localhost:8888/concolic.htm";
	    
	    
		/*driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(url);
		//((JavascriptExecutor) driver).executeScript(functionToTest + ";");
		driverQuit();
		*/
		
		// 2) Transform the DOM constraints in the JavaScript code into xpath constraint (xpath rule)
		// 3) solve xpath constraints and generate corresponding XML as DOMFixture
		//String xpathToSolve = JSModifier.generateXpathConstraint();
		//HashSet<String> functionsList = JSModifier.getDOMDependentFunctions();
		// Directly analyzing the code
			    
		
		// These are to be used externally by the runner class to generate test suite
	    //List<String> functionsList = codeAnalyzer.getDOMDependentFunctions();
	    //List<List<String>> attributeConstraintList = getAttributeConstraintList(functionsList);
		//List<String> DOMFixtureList = getDOMFixtureList(functionsList);
		
	    	    
	}


	public List<List<String>> getAttributeConstraintList(List<String> functionsList) {
		List<List<String>> attributeConstraintList = new ArrayList<List<String>>();
		for (String DDF: functionsList){
			System.out.println(">>>>>>>> Listing DOM constraints in DDF: " + DDF);
			for (DOMConstraint dc: codeAnalyzer.getDOMConstraintList()){
				
				if (dc.getEnclosingFunctionName().equals(DDF)){
					System.out.println(dc.getCorrespondingXpath());
					System.out.println("ATTRIBUTE CONSTRAINTS:" + dc.getConstraints());
					//attributeList.add(dc.getConstraints());
					attributeConstraintList.add(dc.getStatementsForAllConstraints());
					//if (dc.getDOMElementTypeVariable().getInnerHTML_attributeVariable()!="")
						//System.out.println("**************** InnerHTML_attributeVariable():" + dc.getDOMElementTypeVariable().getInnerHTML_attributeVariable());
				}
			}
		}
		return attributeConstraintList;
	}

	public List<String> getDOMFixtureList(List<String> functionsList) throws Exception {
		XpathSolver xpathsolver = new XpathSolver();
		String DOMFixture = "";
		int i = 0;
		List<String> DOMFixtureList = new ArrayList<String>();
		for (String xpathToSolve : codeAnalyzer.generateXpathConstraints()){
			System.out.println("DOM fixture for function: " + functionsList.get(i++));
			xpathsolver.setXpath(xpathToSolve);
			xpathsolver.solve();
			DOMFixture = xpathsolver.getDOMFixture();
			DOMFixtureList.add(DOMFixture);
			System.out.println(DOMFixture);
		}
		return DOMFixtureList;
	}
	
	

	// The XML solver output is on the stream so we write it into a text file
	private void writeStreamToFile(String string) {
		try {
			System.setOut(new PrintStream(new File("output/output-file.txt")));
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

	private void runProxy(ProxyConfiguration prox) {
		prox.setPort(3128);
		JSModifier = new JSModifyProxyPlugin(new JSASTInstrumenter());
		//JSModifyProxyPlugin modifier = new JSModifyProxyPlugin("TEMP");  // output forlder name
		JSModifier.excludeDefaults();
		Framework framework = new Framework();
		Preferences.setPreference("Proxy.listeners", "127.0.0.1:" + prox.getPort());
		Proxy proxy = new Proxy(framework);
		proxy.addPlugin(JSModifier);
		proxy.run();
	}


	public List<String> getDOMDependentFunctions() {
		return codeAnalyzer.getDOMDependentFunctions();
	}

	
}
