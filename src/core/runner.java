package core;

import instrumentor.DomJsCodeLevelVisitor;
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

		
		/*
		 * DOM accessing statements in JavaScript:
		 * E.g. document.getElementByID('id') / document.getElementByTag('div') / $('id')
		 */
		
			
		
		
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
		JSModifyProxyPlugin modifier = new JSModifyProxyPlugin(new instrumentor.AstInstrumenter());
		//JSModifyProxyPlugin modifier = new JSModifyProxyPlugin("TEMP");  // output forlder name
		//DomJsCodeLevelVisitor domJsVis=new DomJsCodeLevelVisitor();
		//modifier.setJSModifyProxyPluginForDOMJSVis(domJsVis, 4);
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
