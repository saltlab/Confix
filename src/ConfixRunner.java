import core.XpathSolver;

import instrumentor.JSASTInstrumenter;
import instrumentor.JSModifyProxyPlugin;
import instrumentor.ProxyConfiguration;

import testgenerator.TestSuiteGenerator;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.owasp.webscarab.model.Preferences;
import org.owasp.webscarab.plugin.Framework;
import org.owasp.webscarab.plugin.proxy.Proxy;
import org.owasp.webscarab.plugin.*;

import java.io.File;
import java.io.PrintStream;
import java.util.concurrent.TimeUnit;


public class ConfixRunner {

	private static WebDriver driver;
	private static String url;
	private String DOM = null;
	
	private static JSModifyProxyPlugin JSModifier;

	public static void driverSetup(ProxyConfiguration prox) throws Exception {
		FirefoxProfile profile = new FirefoxProfile();
		if (prox != null) {
			profile.setPreference("network.proxy.http", prox.getHostname());
			profile.setPreference("network.proxy.http_port", prox.getPort());
			profile.setPreference("network.proxy.type", prox.getType().toInt());
			/* use proxy for everything, including localhost */
			profile.setPreference("network.proxy.no_proxies_on", "");
		}
		driver = new FirefoxDriver(profile);
		//url = "http://localhost:8888/claroline-1.11.7/index.php?logout=true";
		url = "http://localhost:8888/test.htm";
		
		//url = "/Users/aminmf/Documents/workspace/Confix/test.html";
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	public void driverExecute(String javascript) throws Exception {
		((JavascriptExecutor) driver).executeScript(javascript);
	}

	public static void driverQuit() throws Exception {
		//if (getCoverageReport)
		//	((JavascriptExecutor) driver).executeScript(" if (window.jscoverage_report) {return jscoverage_report('CodeCoverageReport');}");
		driver.quit();
	}

	public static void load(){
		driver.get(url);
		//driver.findElement(By.id("login")).clear();
		//driver.findElement(By.id("login")).sendKeys("nainy");
		//driver.findElement(By.id("password")).clear();
		//driver.findElement(By.id("password")).sendKeys("nainy");
		//driver.findElement(By.cssSelector("button[type=\"submit\"]")).click();
	}


	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {

		// 1) Intercept and instrument the JavaScript code via a proxy
		ProxyConfiguration prox = new ProxyConfiguration();
		runProxy(prox);
		driverSetup(prox);
		load();
		
		// 2) Transform the DOM constraints in the JavaScript code into xpath constraint (xpath rule)
		// 3) solve xpath constraints and generate corresponding XML as DOMFixture
		String xpathToSolve = JSModifier.generateXpathConstraint();
		XpathSolver xpathsolver = new XpathSolver();
		xpathsolver.setXpath(xpathToSolve);
		xpathsolver.solve();
		String DOMFixture = xpathsolver.getDOMFixture();
		
		System.out.println(DOMFixture);
		
		// 4) Generate a QUnit test file for a function (with DOM fixture for common paths in the module setup part, and different test methods for each path)
		String testSuiteNameToGenerate = "test.js";
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuiteNameToGenerate, DOMFixture);
		tsg.generateTestSuite();
		
		driverQuit();
	}


	// The XML solver output is on the stream so we write it into a text file
	private static void writeStreamToFile(String string) {
		try {
			System.setOut(new PrintStream(new File("output/output-file.txt")));
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

	private static void runProxy(ProxyConfiguration prox) {
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



}
