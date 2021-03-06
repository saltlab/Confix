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

import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.owasp.webscarab.model.Preferences;
import org.owasp.webscarab.plugin.Framework;
import org.owasp.webscarab.plugin.proxy.Proxy;

import core.utils.Method;


import testgenerator.TestSuiteGenerator;

public class ConcolicEngine {

	private Method testGenerationMethod;

	private WebDriver driver;
	private JSModifyProxyPlugin JSModifier;
	private JSAnalyzer codeAnalyzer;
	private TraceAnalyzer traceAnalyzer;

	private String jsAddress;
	private String scopeName;
	private ArrayList<String> functionsToTest = new ArrayList<String>();
	private String currentFunctionToTest;
	private String testSuitePathToGenerate;
	private String testSuiteFileToGenerate;
	private String fixture = "";

	private boolean shouldGetCoverage  = true;

	private List<String> DOMFixtureList = new ArrayList<String>();

	public ConcolicEngine(String jsAdderess, String scopeName, ArrayList<String> functionsToTest, String testSuitePathToGenerate, String testSuiteFileToGenerate, Method testGenerationMethod){
		this.testGenerationMethod = testGenerationMethod;
		this.jsAddress = jsAdderess;
		this.scopeName = scopeName;
		this.functionsToTest = functionsToTest;
		this.testSuitePathToGenerate = testSuitePathToGenerate;
		this.testSuiteFileToGenerate = testSuiteFileToGenerate;
		this.codeAnalyzer = new JSAnalyzer(new JSASTInstrumentor(), jsAddress, scopeName);
		this.traceAnalyzer = new TraceAnalyzer();
	}


	// Runs the concolic exectuion
	public void run() throws Exception {
		// Generating a QUnit test file for a DOM-dependent function with DOM fixture
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuitePathToGenerate, testSuiteFileToGenerate);

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

		String concolicHTMLRunnerPath = "";

		// for each function in the functionsToTest
		for (String fname: functionsToTest){
			currentFunctionToTest = fname;

			System.out.println("Generating fixture for function :" + fname);

			// e.g of a fixture is "<div id=\"rateStatus\"/>";
			fixture = "";

			int tryNext = 1;

			int pathCounter = 1;
			do {

				System.out.println("do-while!");

				// Loading the htmlTestFile and reset the fixture
				if (!shouldGetCoverage)
					concolicHTMLRunnerPath = "file:///" + htmlTestFile;
				else{
					// To get coverage by JSCover the runner html should be loaded from a server not local directory
					// Also the XHR replacement in the instrumented file should be removed as JSCover also changes XHR
					concolicHTMLRunnerPath = "http://localhost:8888/concolic/concolic_" + scopeName.replace(".js", "")  + ".htm";
				}

				// Resetting the trace collected in the previous run
				driver.get(concolicHTMLRunnerPath);

				// Apply the new fixture on htmlTestFile
				try{
					if (fixture!=""){
						((JavascriptExecutor) driver).executeScript("$(\"#confixTestFixture\").append('" + fixture + "');");
						System.out.println("The new fixture appended!");
					}else{
						System.out.println("No fixture to append!");
					}
				}
				catch (UnhandledAlertException ue)
				{
					try{((JavascriptExecutor) driver).executeScript("window.onbeforeunload = function(e){};");}
					catch(Exception e){System.out.println("Failed to close the popup!" + e);}
					//Alert alert = driver.switchTo().alert();
				    //System.out.println(alert.getText());
				}   
				catch(Exception e){
					System.out.println("Failed to append DOM fixture!" + e);
				}

				try{
					// Execute the function under test according to the user input value
					((JavascriptExecutor) driver).executeScript(currentFunctionToTest + ";");
					System.out.println("The function under test executed!");
				}
				catch(Exception e){
					System.out.println("Failed to execute function " + currentFunctionToTest + ": " + e);
				}

				// Concolic fixture generation
				if (testGenerationMethod == Method.CONFIX_NOINP || testGenerationMethod == Method.CONFIX_JALANGI || testGenerationMethod == Method.CONFIX_MANUAL){

					// Get the execution trace
					traceAnalyzer.resetDOMConstraintList();
					ArrayList traceList = null;
					try{
						System.out.println("Getting the traceList...");
						traceList = (ArrayList)((JavascriptExecutor) driver).executeScript("return getConfixTrace();");
						System.out.println("The traceList is returned from the code!");
					}
					catch(Exception e){
						System.out.println("Failed to execute getConfixTrace();" + e);
					}

					//System.out.println("traceList: " + traceList);
					System.out.println("########## Processiong a new traceList ##########");
					Map<String,String> map;
					for (int i=0; i<traceList.size(); i++){
						map = (Map<String,String>)(traceList.get(i));
						traceAnalyzer.analyzeTrace(map);
					}
					System.out.println("########## Finished processiong the traceList ##########");

					// check if all the new path condition is repeated i.e. all paths are exercised
					ArrayList<DOMConstraint> currentPathCondition = new ArrayList<DOMConstraint>();

					currentPathCondition.addAll(traceAnalyzer.getcurrentPathCondition());
					if (traceAnalyzer.addToPathConditions(currentPathCondition)){
						traceAnalyzer.clearCurrentPathCodition();
						//traceAnalyzer.getDOMConstraintList();
						TraceAnalyzer.generatedID = 0;  // resetting the static auto-increment generatedID

						//for (DOMConstraint dc: traceAnalyzer.getDOMConstraintList()){
						//	dc.getCorrespondingXpath();
						//}

						//make sure that all parentElementJSVariables actually exist in the DOMConstraintList. This is due to DOM element (manually generated) as function arguments
						traceAnalyzer.makeSureAllParentsExist();

						// Generate DOM constraints from the trace
						String DOMFixture = getDOMFixture();

						System.out.println("DOMFixture: " + DOMFixture);
						if (!DOMFixture.equals("") && DOMFixtureList.contains(DOMFixture)){
							tryNext++;
							if (tryNext == 3){ 
								DOMFixtureList.clear();  // clearing the DOMFixtureList to avoid terminating fixture generation for other functions that have a same fixture
								System.out.println("No new fixture found!");
								tryNext = 1;
								break;
							}
						}
						DOMFixtureList.add(DOMFixture);

						// Transform the DOM constraints in into xpath constraint (xpath rule)
						// Solve xpath constraints and generate corresponding DOMFixture
						// Generate a new fixture to execute another path. If all paths were exercised, fixture will be set to "" to terminate the loop

						// Updating the fixture
						fixture = DOMFixture;
					}
					else
						fixture = ""; // not using Confix

					// Generating a new test method
					tsg.addNewTestMethod(currentFunctionToTest, fixture, pathCounter);

					System.out.println("=======> Path #" + pathCounter++ + ": DOM fixture: " + fixture);

					if (pathCounter==10)  // generate for at most 10 paths
						fixture="";


				}else{
					System.out.println("=======> No new path was found. Terminating the concolic engine...");
					fixture="";
					// Generating a new test method
					tsg.addNewTestMethod(currentFunctionToTest, fixture, pathCounter);
				}

				if (shouldGetCoverage){
					// updating the coverage report
					try{
						((JavascriptExecutor) driver).executeScript("return jscoverage_report('CoverageReport');");
					}
					catch(Exception e){
						System.out.println("Failed to execute function " + e);
					}
				}

				//driver.quit();
				//instrumentDynamically(false);  // No need for dynamic instrumentation at proxy level.


			} while (fixture!="");
		}

		// Generate a QUnit test file
		tsg.generateTestSuite();


		driver.quit();
	}



	private void instrumentDynamically(boolean useproxy) throws Exception {
		if (useproxy){
			// setting a proxy for intercepting and instrument the JavaScript code
			ProxyConfiguration prox = new ProxyConfiguration();
			runProxy(prox);
			driverSetup(prox);
		}else{
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("network.proxy.http", "localhost");
			profile.setPreference("network.proxy.http_port", 3128);
			profile.setPreference("network.proxy.type", 1);
			/* use proxy for everything, including localhost */
			profile.setPreference("network.proxy.no_proxies_on", "");
			//FirefoxProfile profile = new FirefoxProfile();



			// Setting the webdriver with proxy
			if (shouldGetCoverage){
				//FirefoxBinary binary = new FirefoxBinary(new File("/Applications/Firefox 2.app/Contents/MacOS/firefox"));
				//driver = new FirefoxDriver(binary, profile);
				driver = new FirefoxDriver(profile);	// Setting the webdriver for older version of FF with proxy
			}
			else
				driver = new FirefoxDriver();  // setting the webdriver without proxy

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
		System.out.println("DOM fixture for function: " + currentFunctionToTest);

		if (xpathToSolve.length()>1000)
			return DOMFixture;

		if (!xpathToSolve.equals("select(\"document[]\")")){
			xpathsolver.setXpath(xpathToSolve);
			xpathsolver.solve();
			DOMFixture = xpathsolver.getDOMFixture();
		}
		DOMFixture = DOMFixture.replace("DOLLAR_", "$");

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


	public void generateCoverageReport() {
		FirefoxProfile profile = new FirefoxProfile();
		profile.setPreference("network.proxy.http", "localhost");
		profile.setPreference("network.proxy.http_port", 3128);
		profile.setPreference("network.proxy.type", 1);
		/* use proxy for everything, including localhost */
		profile.setPreference("network.proxy.no_proxies_on", "");

		// using older version of FF
		//FirefoxBinary binary = new FirefoxBinary(new File("/Applications/Firefox 2.app/Contents/MacOS/firefox"));
		//driver = new FirefoxDriver(binary, profile);
		// using current version of FF
		driver = new FirefoxDriver();

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		driver.get("file:///Users/aminmf/Documents/workspace/confix/output/phormer_tests/phorm_tests.html");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		Alert alert = driver.switchTo().alert();
		alert.getText();
		alert.accept();


		((JavascriptExecutor) driver).executeScript(" if (window.jscoverage_report) {return jscoverage_report('CodeCoverageReport');}");
		driver.quit();
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

	
	
	private void waitForPageToLoad() {  // could be used to make sure the js code execution happens after the page is fully loaded
		String pageLoadStatus = null;
		int secons = 5;
		do {
			pageLoadStatus = (String)((JavascriptExecutor) driver).executeScript("return document.readyState");
			System.out.print(".");
		} while ( !pageLoadStatus.equals("complete") );
		System.out.println();
		System.out.println("Page Loaded.");

		// even pausing for more few seconds!
		/*System.out.print("Pausing for " + secons + " seconds: ");
		try {
			Thread.currentThread();		
			int x = 1;
			while(x <= secons) {
				Thread.sleep(1000);
				System.out.print(" " + x );
				x = x + 1;
			}
			System.out.print('\n');
		} catch (InterruptedException ex) {
			ex.printStackTrace();
		}*/	
	}

}
