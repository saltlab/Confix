package core;

import instrumentor.JSASTInstrumentor;
import instrumentor.JSModifyProxyPlugin;
import instrumentor.ProxyConfiguration;

import java.io.File;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.owasp.webscarab.model.Preferences;
import org.owasp.webscarab.plugin.Framework;
import org.owasp.webscarab.plugin.proxy.Proxy;

import testgenerator.TestSuiteGenerator;

public class ConcolicEngine {

	private WebDriver driver;
	private JSModifyProxyPlugin JSModifier;
	private JSAnalyzer codeAnalyzer;
	private TraceAnalyzer traceAnalyzer;

	private String jsAddress;
	private String scopeName;
	private String functionToTest;
	private String testSuiteNameToGenerate;
	private String fixture = "";

	private List<String> DOMFixtureList = new ArrayList<String>();
	private List<String> attributeConstraints = new ArrayList<String>();

	public ConcolicEngine(String jsAdderess, String scopeName, String functionToTest, String testSuiteNameToGenerate){
		this.jsAddress = jsAdderess;
		this.scopeName = scopeName;
		this.functionToTest = functionToTest;
		this.testSuiteNameToGenerate = testSuiteNameToGenerate;
		this.codeAnalyzer = new JSAnalyzer(new JSASTInstrumentor(), jsAddress, scopeName);
		this.traceAnalyzer = new TraceAnalyzer();
	}


	// Runs the concolic exectuion
	public void run() throws Exception {
		/*
		 * 1) Execute the program.
		 * 2) Symbolically re-execute the program on the trace, generating a set of symbolic constraints (including path conditions).
		 * 3) Negate the last path condition not already negated in order to visit a new execution path. If there is no such path condition, 
		 * the algorithm terminates.
		 * 4) Use solver to generate a new input. If there is no input satisfying the constraints, return to step 3 to try the next execution path.
		 * 5) Return to step 1.
		 */

		// Instrument the JavaScript code
		instrumentDynamically(false);  // No need for dynamic instrumentation at proxy level.
		codeAnalyzer.instrumentJavaScript();

		// Dynamic symbolic execution (done in a browser to deal with DOM)
		String htmlTestFile = (System.getProperty("user.dir")+"/"+jsAddress).replace(scopeName, "concolic.htm");
		//System.out.println(htmlTestFile);
		codeAnalyzer.generateHTMLTestFile(htmlTestFile);

		fixture = "<div id=\"rateStatus\"/>";//  <div id=\"indicator\"/>";

		int pathCounter = 1;
		do {
			// Loading the htmlTestFile and reset the fixture
			loadPage("file:///" + htmlTestFile);

			// Apply the new fixture on htmlTestFile
			((JavascriptExecutor) driver).executeScript("$(\"#confixTestFixture\").append('" + fixture + "');");

			try{
				// Execute the function under test according to the user input value
				((JavascriptExecutor) driver).executeScript(functionToTest + ";");
			}
			catch(Exception e){
				System.out.println("Failed to execute function " + functionToTest + ": " + e);
			}

			// Get the execution trace
			ArrayList traceList = (ArrayList)((JavascriptExecutor) driver).executeScript("return getConfixTrace();");
			System.out.println("traceList: " + traceList);
			Map<String,String> map;
			for (int i=0; i<traceList.size(); i++){
				map = (Map<String,String>)(traceList.get(i));
				traceAnalyzer.analyzeTrace(map);
			}

			// Generate DOM constraints from the trace

			//System.out.println("traceAnalyzer.getDOMDependentFunctions(): " + traceAnalyzer.getDOMDependentFunctions());

			List<List<String>> attributeConstraintList = getAttributeConstraintList(traceAnalyzer.getDOMDependentFunctions());

			System.out.println("attributeConstraintList: " + attributeConstraintList);

			String DOMFixture = getDOMFixture();

			System.out.println("DOMFixture: " + DOMFixture);
			DOMFixtureList.add(DOMFixture);

			// Transform the DOM constraints in into xpath constraint (xpath rule)

			// Solve xpath constraints and generate corresponding DOMFixture

			// Generate a new fixture to execute another path. If all paths were exercised, fixture will be set to "" to terminate the loop
			fixture = "";
			System.out.println("=======> Path #" + pathCounter + ": DOM fixture: " + fixture);

		} while (fixture!="");

		quitDriver();

	}




	private void instrumentDynamically(boolean useproxy) throws Exception {
		if (useproxy){
			// setting a proxy for intercepting and instrument the JavaScript code
			ProxyConfiguration prox = new ProxyConfiguration();
			runProxy(prox);
			driverSetup(prox);
		}else{
			FirefoxBinary binary = new FirefoxBinary(new File("/Applications/Firefox 2.app/Contents/MacOS/firefox"));
			FirefoxProfile profile = new FirefoxProfile();
			driver = new FirefoxDriver(binary, profile);
			// setting the webdriver without proxy
			//driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
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

	private void runProxy(ProxyConfiguration prox) {
		prox.setPort(3128);
		JSModifier = new JSModifyProxyPlugin(new JSASTInstrumentor());
		//JSModifyProxyPlugin modifier = new JSModifyProxyPlugin("TEMP");  // output forlder name
		JSModifier.excludeDefaults();
		Framework framework = new Framework();
		Preferences.setPreference("Proxy.listeners", "127.0.0.1:" + prox.getPort());
		Proxy proxy = new Proxy(framework);
		proxy.addPlugin(JSModifier);
		proxy.run();
	}

	public void driverExecute(String javascript) throws Exception {
		((JavascriptExecutor) driver).executeScript(javascript);
	}

	public void quitDriver() throws Exception {
		//if (getCoverageReport)
		//	((JavascriptExecutor) driver).executeScript(" if (window.jscoverage_report) {return jscoverage_report('CodeCoverageReport');}");
		driver.quit();
	}

	public void loadPage(String htmlTestFile){
		driver.get(htmlTestFile);
	}



	public void generateTestSuite() throws Exception {
		// Generate a QUnit test file for a DOM-dependent function with DOM fixture
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuiteNameToGenerate, DOMFixtureList, functionToTest, attributeConstraints);
		tsg.generateTestSuite();
	}






	/*
	public List<String> getAttributeConstraintList() {
		//attributeConstraints
		List<String> attributeConstraintList = new ArrayList<String>();
		System.out.println(">>>>>>>> Listing DOM constraints in DOM dependent functionToTest: " + functionToTest);
		for (DOMConstraint dc: traceAnalyzer.getDOMConstraintList()){
			System.out.println(dc.getCorrespondingXpath());
			System.out.println("ATTRIBUTE CONSTRAINTS:" + dc.getConstraints());
			//attributeList.add(dc.getConstraints());
			attributeConstraintList.add(dc.getStatementsForAllConstraints());
			//if (dc.getDOMElementTypeVariable().getInnerHTML_attributeVariable()!="")
			//System.out.println("**************** InnerHTML_attributeVariable():" + dc.getDOMElementTypeVariable().getInnerHTML_attributeVariable());
		}
		return attributeConstraintList;
	}*/


	public List<List<String>> getAttributeConstraintList(HashSet<String> functionsList) {
		List<List<String>> attributeConstraintList = new ArrayList<List<String>>();
		for (String DDF: functionsList){
			System.out.println(">>>>>>>> Listing DOM constraints in DDF: " + DDF);
			for (DOMConstraint dc: traceAnalyzer.getDOMConstraintList()){

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

	public String getDOMFixture() throws Exception {
		XpathSolver xpathsolver = new XpathSolver();
		String DOMFixture = "";
		String xpathToSolve = traceAnalyzer.generateXpathConstraints();
		System.out.println("DOM fixture for function: " + functionToTest);
		if (!xpathToSolve.equals("select(\"document[]\")")){
			xpathsolver.setXpath(xpathToSolve);
			xpathsolver.solve();
			DOMFixture = xpathsolver.getDOMFixture();
		}
		System.out.println(DOMFixture);
		return DOMFixture;
	}



	// The XML solver output is on the stream so we write it into a text file
	private void writeStreamToFile(String string) {
		try {
			System.setOut(new PrintStream(new File("output/output-file.txt")));
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}


	// OLD VERSION
	/*public List<String> getDOMFixtureList(HashSet<String> functionsList) throws Exception {
		XpathSolver xpathsolver = new XpathSolver();
		String DOMFixture = "";
		List<String> DOMFixtureList = new ArrayList<String>();
		for (String xpathToSolve : traceAnalyzer.generateXpathConstraints()){
			System.out.println("DOM fixture for function: " + functionToTest);
			xpathsolver.setXpath(xpathToSolve);
			xpathsolver.solve();
			DOMFixture = xpathsolver.getDOMFixture();
			DOMFixtureList.add(DOMFixture);
			System.out.println(DOMFixture);
		}
		return DOMFixtureList;
	}
	 */

}
