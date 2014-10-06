package core;

import instrumentor.JSASTVisitor;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.apache.commons.io.CopyUtils;
import org.apache.commons.io.IOUtils;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.RhinoException;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.owasp.webscarab.httpclient.HTTPClient;
import org.owasp.webscarab.model.Request;
import org.owasp.webscarab.model.Response;
import org.owasp.webscarab.plugin.proxy.BrowserCache;
import org.owasp.webscarab.plugin.proxy.ProxyPlugin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;



import com.crawljax.util.Helper;



public class JSAnalyzer {

	private static final Logger LOGGER = LoggerFactory.getLogger(JSAnalyzer.class.getName());

	private List<String> excludeFilenamePatterns;

	private JSASTVisitor astVisitor;
	private String outputfolder;
	private String jsAddress, scopeName;
	
	private List<String> xpathsToSolve = new ArrayList<String>();
	private List<String> DOMDependentFunctionsList = new ArrayList<String>();
	private List<DOMConstraint> DOMConstraintList = new ArrayList<DOMConstraint>();

	/**
	 * Construct without patterns.
	 * 
	 * @param astVisit
	 *            The JSASTVisitor to run over all JavaScript.
	 * @param scopeName 
	 * @param jsAddress 
	 */
	public JSAnalyzer(JSASTVisitor astVisit, String jsAddress, String scopeName) {
		this.excludeFilenamePatterns = new ArrayList<String>();
		this.astVisitor = astVisit;
		this.jsAddress = jsAddress;
		this.scopeName = scopeName;
	}

	/**
	 * Constructor with patterns.
	 * 
	 * @param astVisit
	 *            The JSASTVisitor to run over all JavaScript.
	 * @param excludes
	 *            List with variable patterns to exclude.
	 */
	public JSAnalyzer(JSASTVisitor astVisit, List<String> excludes) {
		excludeFilenamePatterns = excludes;
		astVisitor = astVisit;
	}

	public JSAnalyzer(String outputfolder){
		excludeFilenamePatterns = new ArrayList<String>();
		this.outputfolder=outputfolder;
	}


	/**
	 * @param jsAddress
	 *            Address of the JavaScript code to be instrumented
	 * @param scopeName
	 *            Name of the current scope (filename mostly)
	 * @throws Exception 
	 */
	@SuppressWarnings("deprecation")
	public String instrumentJavaScript() throws Exception {

		// reading js form the input file
		String input = "";
		FileInputStream inputStream = new FileInputStream(jsAddress);
		String outputFileAddress = jsAddress.replace(".js", "_instrumented.js");
		FileOutputStream outputStream = new FileOutputStream(outputFileAddress);
		try {
			input = IOUtils.toString(inputStream);
		} finally {
			inputStream.close();
		}	    

		try {
			AstRoot ast = null;	

			/* initialize JavaScript context */
			Context cx = Context.enter();

			/* create a new parser */
			Parser rhinoParser = new Parser(new CompilerEnvirons(), cx.getErrorReporter());

			/* parse some script and save it in AST */
			ast = rhinoParser.parse(new String(input), scopeName, 0);

			//System.out.println("AST BEFORE INSTRUMENTATION: ");
			System.out.println(ast.toSource());
			//System.out.println(ast.debugPrint());


			//writeJSToFile(scopename, input);
			//writeFunctionsToFile(input);


			//System.out.println("AST BEFORE : ");
			//System.out.println(ast.toSource());


			astVisitor.setScopeName(scopeName);
			astVisitor.start();

			/* recurse through AST */
			ast.visit(astVisitor);

			astVisitor.finish(ast);

			/* clean up */
			Context.exit();

			// setting the xpathToSolve for each function
			HashSet<String> fList = astVisitor.getDOMDependentFunctionsList();
			DOMDependentFunctionsList.addAll(fList); 
			HashSet<DOMConstraint> dList = astVisitor.getDOMConstraintList();
			DOMConstraintList.addAll(dList); 

			for (String DDF: DOMDependentFunctionsList){
				System.out.println("****** Generating xpath for DOM constraints in DDF: " + DDF);
				String xpathToSolve = astVisitor.generateXpathConstraint(DDF);
				astVisitor.resetXpath();
				xpathsToSolve.add(xpathToSolve);
				System.out.println("xpathToSolve: " + xpathToSolve);
			}


			//System.out.println("AST AFTER INSTRUMENTATION: ");
			String instrumentedCode = ast.toSource();
			System.out.println(instrumentedCode);
			//System.out.println(ast.debugPrint());

			try {
				CopyUtils.copy( instrumentedCode, outputStream);
				outputStream.flush();
			} finally {
				outputStream.close();
			}

			return ast.toSource();
		} catch (RhinoException re) {
			System.err.println(re.getMessage());
			LOGGER.warn("Unable to instrument. This might be a JSON response sent"
					+ " with the wrong Content-Type or a syntax error.");
		} catch (IllegalArgumentException iae) {

			LOGGER.warn("Invalid operator exception catched. Not instrumenting code.");
		}
		LOGGER.warn("Here is the corresponding buffer: \n" + input + "\n");

		return input;
	}


	@SuppressWarnings("deprecation")
	public void generateHTMLTestFile(String htmlTestFile) throws Exception {
		String instrumentedFileName = scopeName.replace(".js", "_instrumented.js");
		FileOutputStream outputStream = new FileOutputStream(htmlTestFile);
		String htmlTestContent = "<!DOCTYPE html> <html> <head> <script src=\"" + instrumentedFileName + "\"> </script> </head> <body> <div id=\"confixTestFixture\"> </div> </body> </html>";
		
		try {
			CopyUtils.copy(htmlTestContent, outputStream);
			outputStream.flush();
		} finally {
			outputStream.close();
		}
	}

	
	private void writeJSToFile(String scopename, String input) {
		try {
			System.out.println("writing on /jsCode/" + scopename);
			File file = new File("jsCode/" + scopename);
			if (!file.exists()) {
				file.createNewFile();
			}
			FileOutputStream fop = new FileOutputStream(file);
			fop.write(input.getBytes());
			fop.flush();
			fop.close();
		}
		catch (IOException ioe) {
			System.out.println("IO Exception");
		}
	}

	// Look for instances of "function" in input then figure out where it ends
	private void writeFunctionsToFile(String input) {
		String inputCopy = input;
		int indexOfFuncString = inputCopy.indexOf("function ");
		while (indexOfFuncString != -1) {
			String sub = inputCopy.substring(indexOfFuncString);
			int nextOpenParen = sub.indexOf("(");
			String funcName = sub.substring(9, nextOpenParen); //"function " has 9 characters
			int firstOpenBrace = sub.indexOf("{");
			int countOpenBraces = 1;
			int countCloseBraces = 0;
			int endIndex = firstOpenBrace;
			while (countOpenBraces != countCloseBraces) {
				endIndex++;
				if (sub.charAt(endIndex) == '{') {
					countOpenBraces++;
				}
				else if (sub.charAt(endIndex) == '}') {
					countCloseBraces++;
				}
			}
			String code = sub.substring(0, endIndex+1);
			try {
				File file = new File("jsCode/" +  funcName + ".js");
				if (!file.exists()) {
					file.createNewFile();
				}
				FileOutputStream fop = new FileOutputStream(file);
				fop.write(code.getBytes());
				fop.flush();
				fop.close();
			}
			catch (IOException ioe) {
				System.out.println("IO Exception");
			}
			inputCopy = sub.substring(endIndex+1);
			indexOfFuncString = inputCopy.indexOf("function ");
		}
	}


	public List<String> generateXpathConstraints() {
		// e.g. select("html/body/descendant::switch[ancestor::body[ancestor::html]]//descendant::audio[preceding-sibling::video/test2]/
		//		descendant::seq/descendant::audio[preceding-sibling::video/test2]/test[@attr_100]")

		// System.out.println(xpathsToSolve);
		return xpathsToSolve;
	}


	public List<String> getDOMDependentFunctions() {
		return DOMDependentFunctionsList;
	}

	public List<DOMConstraint> getDOMConstraintList() {
		return DOMConstraintList;
	}

}
