package core;

import instrumentor.JSASTInstrumenter;
import instrumentor.JSModifyProxyPlugin;
import instrumentor.ProxyConfiguration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.owasp.webscarab.model.Preferences;
import org.owasp.webscarab.plugin.Framework;
import org.owasp.webscarab.plugin.proxy.Proxy;
import org.owasp.webscarab.plugin.*;

import testgenerator.TestSuiteGenerator;

import com.crawljax.plugins.aji.executiontracer.AstInstrumenter;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;
import java.util.jar.JarFile;


public class runner {

	private static WebDriver driver;
	private static String url;
	private String DOM = null;

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
		/* TODO:
		 * Generate a QUnit test file for a function (with DOM fixture for common paths in the module setup part, and different test methods for each path)
		 * Execute test cases
		 * Transform constarints to xpath using string/int solver
		 * Extract generated xml from output file or console and generate fixture
		 */

		ProxyConfiguration prox = new ProxyConfiguration();
		runProxy(prox);
		driverSetup(prox);
		load();
		
		// Intercepting and instrumenting the JavaScript code via a proxy

		String constraint = "";
		/*
		 * transforming the DOM constraint into xpath
		 */
		String xpathToSolve = constraintToXpath(constraint);

		// The XML solver output is on the stream so we write it into a text file
		//writeStreamToFile("output-file.txt");
		XpathSolver xpathsolver = new XpathSolver();
		xpathsolver.setXpath(xpathToSolve);
		xpathsolver.setConstraintFileName("constraints.txt");
		// writing the xpath in the constraints.txt file to be used by the solver
		// TODO: write xpathToSolve to constraintFileName

		//xpathsolver.solve();


		//TODO: Solve xpath using xpath solver
		DOMConstraint constraintOnDOM = null;
		String XML = xpathsolver.XpathToXML(constraintOnDOM);
		
		//TODO: Extract generated xml from output file or console and generate fixture

		String testSuiteNameToGenerate = "";
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuiteNameToGenerate);

		
		
		driverQuit();
	}

	private static void writeStreamToFile(String string) {
		try {
			System.setOut(new PrintStream(new File("output-file.txt")));
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

	private static void runProxy(ProxyConfiguration prox) {
		prox.setPort(3128);
		JSModifyProxyPlugin modifier = new JSModifyProxyPlugin(new JSASTInstrumenter());
		//JSModifyProxyPlugin modifier = new JSModifyProxyPlugin("TEMP");  // output forlder name
		modifier.excludeDefaults();
		Framework framework = new Framework();
		Preferences.setPreference("Proxy.listeners", "127.0.0.1:" + prox.getPort());
		Proxy proxy = new Proxy(framework);
		proxy.addPlugin(modifier);
		proxy.run();
	}

	private static String constraintToXpath(String constraint) {
		// TODO Auto-generated method stub
		return null;
	}

}
