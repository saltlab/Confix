package core;

import instrumentor.JSASTVisitor;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

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
	private List<String> xpathsToSolve = new ArrayList<String>();
	private List<String> DOMDependentFunctionsList = new ArrayList<String>();
	private List<DOMConstraint> DOMConstraintList = new ArrayList<DOMConstraint>();

	/**
	 * Construct without patterns.
	 * 
	 * @param astVisit
	 *            The JSASTVisitor to run over all JavaScript.
	 */
	public JSAnalyzer(JSASTVisitor astVisit) {
		excludeFilenamePatterns = new ArrayList<String>();
		astVisitor = astVisit;
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
	 * @param input
	 *            The JavaScript code to be analyzed
	 * @param scopename
	 *            Name of the current scope (filename mostly)
	 */
	public String analyzeJavaScript(String input, String scopename) {

		try {
			AstRoot ast = null;	

			/* initialize JavaScript context */
			Context cx = Context.enter();

			/* create a new parser */
			Parser rhinoParser = new Parser(new CompilerEnvirons(), cx.getErrorReporter());

			/* parse some script and save it in AST */
			ast = rhinoParser.parse(new String(input), scopename, 0);

			//System.out.println("AST BEFORE INSTRUMENTATION: ");
			//System.out.println(ast.toSource());
			//System.out.println(ast.debugPrint());

			astVisitor.setScopeName(scopename);
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
			//System.out.println(ast.toSource());
			//System.out.println(ast.debugPrint());

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
