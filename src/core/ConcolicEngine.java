package core;

import instrumentor.JSASTInstrumenter;
import instrumentor.JSModifyProxyPlugin;
import instrumentor.ProxyConfiguration;

import java.io.File;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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

	private WebDriver driver;
	private JSModifyProxyPlugin JSModifier;
	private JSAnalyzer codeAnalyzer;
	private TraceAnalyzer traceAnalyzer;

	private String jsAddress;
	private String scopeName;
	private String functionToTest;
	private String testSuiteNameToGenerate;
	private String fixture = "";

	public ConcolicEngine(String jsAdderess, String scopeName, String functionToTest, String testSuiteNameToGenerate){
		this.jsAddress = jsAdderess;
		this.scopeName = scopeName;
		this.functionToTest = functionToTest;
		this.testSuiteNameToGenerate = testSuiteNameToGenerate;
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
		//instrumentDynamically(false);  // No need for dynamic instrumentation at proxy level.
		codeAnalyzer = new JSAnalyzer(new JSASTInstrumenter(), jsAddress, scopeName);
		codeAnalyzer.instrumentJavaScript();

		// Dynamic symbolic execution (done in a browser to deal with DOM)
		String htmlTestFile = (System.getProperty("user.dir")+"/"+jsAddress).replace(scopeName, "concolic.htm");
		//System.out.println(htmlTestFile);
		codeAnalyzer.generateHTMLTestFile(htmlTestFile);


		
		do {
			// Loading the htmlTestFile and reset the fixture
			loadPage(htmlTestFile);

			// Apply the new fixture on htmlTestFile
			((JavascriptExecutor) driver).executeScript("$(\"#confixTestFixture\").append('" + fixture + "');");

			// Execute the function under test according to the user input value
			((JavascriptExecutor) driver).executeScript(functionToTest + ";");
			// Get the execution trace

			ArrayList traceList = (ArrayList)((JavascriptExecutor) driver).executeScript("return getConfixTrace();");
			Map<String,String> map;
			for (int i=0; i<traceList.size(); i++){
				map = (Map<String,String>)(traceList.get(i));
				traceAnalyzer.analyzeTrace(map);
			}
		
			//Map<String,String> map = (Map<String,String>)((JavascriptExecutor) driver).executeScript("return getConfixTrace();");
			//for(String key : map.keySet()) {
			//	String value = map.get(key);
			//	System.out.printf("%s: %s\n", key, value);
			//}


			//Map<String, Integer> map = (Map<String, Integer>)  ((JavascriptExecutor) driver).executeScript("return {foo: 1, bar: 2}");
			//System.out.printf("foo: %d\n", map.get("foo"));
			//System.out.printf("bar: %d\n", map.get("bar"));



			// Generate DOM constraints from the trace

			// Transform the DOM constraints in the into xpath constraint (xpath rule)

			// Solve xpath constraints and generate corresponding DOMFixture

			//String xpathToSolve = JSModifier.generateXpathConstraint();
			//HashSet<String> functionsList = JSModifier.getDOMDependentFunctions();

			// Generate a new fixture to execute another path. If all paths were exercised, fixture will be set to "" to terminate the loop
			fixture = "";

		} while (fixture!="");

		quitDriver();
	
		generateTestSuite();
		
	}


	private void generateTestSuite() throws Exception {
		List<String> functionsList = getDOMDependentFunctions();
		List<List<String>> attributeConstraintList = getAttributeConstraintList(functionsList);
		List<String> DOMFixtureList = getDOMFixtureList(functionsList);
		
		// Generate a QUnit test file for a DOM-dependent function with DOM fixture
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuiteNameToGenerate, DOMFixtureList, functionsList, attributeConstraintList);
		tsg.generateTestSuite();
	}


	private void instrumentDynamically(boolean useproxy) throws Exception {
		if (useproxy){
			// setting a proxy for intercepting and instrument the JavaScript code
			ProxyConfiguration prox = new ProxyConfiguration();
			runProxy(prox);
			driverSetup(prox);
		}else{
			// setting the webdriver without proxy
			driver = new FirefoxDriver();
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
		JSModifier = new JSModifyProxyPlugin(new JSASTInstrumenter());
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

	public List<String> getDOMDependentFunctions() {
		return codeAnalyzer.getDOMDependentFunctions();
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





}
