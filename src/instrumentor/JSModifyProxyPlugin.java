package instrumentor;

import java.io.IOException;
import java.util.ArrayList;
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



public class JSModifyProxyPlugin extends ProxyPlugin {

	private static final Logger LOGGER = LoggerFactory.getLogger(JSModifyProxyPlugin.class.getName());

	private List<String> excludeFilenamePatterns;

	private JSASTModifier modifier;
	private DomJsCodeLevelVisitor domJsVisitor;
	private String outputfolder;
	private int indexOfJsDomToVisit=0;
	private boolean singleMutationDone=false;

	private boolean shouldStartDomJsMutations=false;
	private boolean shouldGetInfoFromCode=false;

	/**
	 * Construct without patterns.
	 * 
	 * @param modify
	 *            The JSASTModifier to run over all JavaScript.
	 */
	public JSModifyProxyPlugin(JSASTModifier modify) {

		excludeFilenamePatterns = new ArrayList<String>();
		modifier = modify;
		shouldGetInfoFromCode=true;
		shouldStartDomJsMutations=false;
	}

	/**
	 * Constructor with patterns.
	 * 
	 * @param modify
	 *            The JSASTModifier to run over all JavaScript.
	 * @param excludes
	 *            List with variable patterns to exclude.
	 */
	public JSModifyProxyPlugin(JSASTModifier modify, List<String> excludes) {
		excludeFilenamePatterns = excludes;
		modifier = modify;
		shouldGetInfoFromCode=true;
		shouldStartDomJsMutations=false;
	}

	public JSModifyProxyPlugin(String outputfolder){
		excludeFilenamePatterns = new ArrayList<String>();
		this.outputfolder=outputfolder;
	}


	public void setJSModifyProxyPluginForDOMJSVis(DomJsCodeLevelVisitor domVis, int indexOfDom){

		shouldGetInfoFromCode=false;
		shouldStartDomJsMutations=true;
		domJsVisitor=domVis;
		indexOfJsDomToVisit=indexOfDom;
		singleMutationDone=false;


	}

	/**
	 * Adds some defaults to the list of files that should be excluded from modification. These
	 * include:
	 * <ul>
	 * <li>jQuery</li>
	 * <li>Prototype</li>
	 * <li>Scriptaculous</li>
	 * <li>MooTools</li>
	 * <li>Dojo</li>
	 * <li>YUI</li>
	 * <li>All kinds of Google scripts (Adwords, Analytics, etc)</li>
	 * <li>Minified JavaScript files with min, compressed or pack in the URL.</li>
	 * </ul>
	 */
	public void excludeDefaults() {
		excludeFilenamePatterns.add(".*jquery[-0-9.]*.js?.*");
		excludeFilenamePatterns.add(".*jquery.*.js?.*");
		//	excludeFilenamePatterns.add(".*same-game.*.htm?.*");
		excludeFilenamePatterns.add(".*prototype.*js?.*");
		excludeFilenamePatterns.add(".*scriptaculous.*.js?.*");
		excludeFilenamePatterns.add(".*mootools.js?.*");
		excludeFilenamePatterns.add(".*dojo.xd.js?.*");
		excludeFilenamePatterns.add(".*yuiloader.js?.*");
		excludeFilenamePatterns.add(".*google.*");
		excludeFilenamePatterns.add(".*min.*.js?.*");
		excludeFilenamePatterns.add(".*pack.*.js?.*");
		excludeFilenamePatterns.add(".*compressed.*.js?.*");
		excludeFilenamePatterns.add(".*rpc.*.js?.*");
		excludeFilenamePatterns.add(".*o9dKSTNLPEg.*.js?.*");
		excludeFilenamePatterns.add(".*gdn6pnx.*.js?.*");
		excludeFilenamePatterns.add(".*show_ads.*.js?.*");
		//	excludeFilenamePatterns.add(".*ga.*.js?.*");
		//The following 10 excluded files are just for Tudu
		excludeFilenamePatterns.add(".*builder.js");
		excludeFilenamePatterns.add(".*controls.js");
		excludeFilenamePatterns.add(".*dragdrop.js");
		excludeFilenamePatterns.add(".*effects.js");
		excludeFilenamePatterns.add(".*prototype.js");
		excludeFilenamePatterns.add(".*scriptaculous.js");
		excludeFilenamePatterns.add(".*slider.js");
		excludeFilenamePatterns.add(".*unittest.js");
		//	excludeFilenamePatterns.add(".*engine.js");
		excludeFilenamePatterns.add(".*util.js");
		excludeFilenamePatterns.add(".*cycle.js");
		///////
		excludeFilenamePatterns.add(".*qunit.js");
		excludeFilenamePatterns.add(".*filesystem.js");
		excludeFilenamePatterns.add(".*functional.js");
		excludeFilenamePatterns.add(".*test.core.js");
		excludeFilenamePatterns.add(".*inject.js");

	}

	@Override
	public String getPluginName() {
		return "JSInstrumentPlugin";
	}

	@Override
	public HTTPClient getProxyPlugin(HTTPClient in) {
		return new Plugin(in);
	}

	private boolean shouldModify(String name) {
		/* try all patterns and if 1 matches, return false */
		for (String pattern : excludeFilenamePatterns) {
			if (name.matches(pattern)) {
				System.out.println("Not modifying response for " + name);
				LOGGER.info("Not modifying response for " + name);
				return false;
			}
		}

		LOGGER.info("Modifying response for " + name);
		System.out.println("Modifying response for " + name);

		return true;
	}

	/**
	 * This method tries to add instrumentation code to the input it receives. The original input is
	 * returned if we can't parse the input correctly (which might have to do with the fact that the
	 * input is no JavaScript because the server uses a wrong Content-Type header for JSON data)
	 * 
	 * @param input
	 *            The JavaScript to be modified
	 * @param scopename
	 *            Name of the current scope (filename mostly)
	 * @return The modified JavaScript
	 */
	private synchronized String modifyJS(String input, String scopename) {

		if (!shouldModify(scopename)) {
			return input;
		}

		try {

			AstRoot ast = null;	

			/* initialize JavaScript context */
			Context cx = Context.enter();

			/* create a new parser */
			Parser rhinoParser = new Parser(new CompilerEnvirons(), cx.getErrorReporter());

			/* parse some script and save it in AST */
			ast = rhinoParser.parse(new String(input), scopename, 0);

			System.out.println("AST BEFORE INSTRUMENTATION: ");
			System.out.println(ast.toSource());
			System.out.println(ast.debugPrint());

			shouldGetInfoFromCode = true;
			if(shouldGetInfoFromCode){
				modifier.setScopeName(scopename);
				modifier.start();

				/* recurse through AST */
				modifier.shouldTrackFunctionNodes=true;
				ast.visit(modifier);

				//if(modifier.shouldTrackFunctionCalls){
				//	modifier.shouldTrackFunctionNodes=false;
				//	ast.visit(modifier);
				//}


				modifier.finish(ast);
			}
			else if(shouldStartDomJsMutations){

				domJsVisitor.setScopeName(scopename);
				ast.visit(domJsVisitor);
				domJsVisitor.setJsDomList();
				List<Object> desiredList=domJsVisitor.getElementfromJsDomList(indexOfJsDomToVisit);
				if(desiredList!=null){
					NodeMutator nm=new NodeMutator(outputfolder,scopename);
					singleMutationDone=nm.mutateDomJsCodeLevel(desiredList);
				}
				else{
					NodeMutator nm=new NodeMutator(outputfolder,scopename);
					StringBuffer stb=new StringBuffer();
					stb.append("no changes made to the code"+"\n");
					stb.append("================"+"\n");
					nm.writeResultsToFile(stb.toString());
				}
			}


			/* clean up */
			Context.exit();

			System.out.println("AST AFTER INSTRUMENTATION: ");
			System.out.println(ast.toSource());
			System.out.println(ast.debugPrint());

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

	/**
	 * This method modifies the response to a request.
	 * 
	 * @param response
	 *            The response.
	 * @param request
	 *            The request.
	 * @return The modified response.
	 */
	private Response createResponse(Response response, Request request) {

		System.out.println("createResponse");

		String type = response.getHeader("Content-Type");

		if (request.getURL().toString().contains("?thisisavarexectracingcall")) {
			LOGGER.info("Execution trace request " + request.getURL().toString());
			return response;
		}
		if (request.getURL().toString().contains("?thisisafuncexectracingcall")){

			LOGGER.info("Execution trace request " + request.getURL().toString());
			return response;
		}

		if (type != null && type.contains("javascript")) {

			/* instrument the code if possible */
			response.setContent(modifyJS(new String(response.getContent()),
					request.getURL().toString()).getBytes());
		} else if (type != null && type.contains("html")) {
			try {
				Document dom = Helper.getDocument(new String(response.getContent()));
				/* find script nodes in the html */
				NodeList nodes = dom.getElementsByTagName("script");

				for (int i = 0; i < nodes.getLength(); i++) {

					Node nType = nodes.item(i).getAttributes().getNamedItem("type");
					/* instrument if this is a JavaScript node */
					if ((nType != null && nType.getTextContent() != null && nType
							.getTextContent().toLowerCase().contains("javascript"))) {
						String content = nodes.item(i).getTextContent();
						if (content.length() > 0) {
							String js = modifyJS(content, request.getURL() + "script" + i);
							nodes.item(i).setTextContent(js);
							continue;
						}
					}

					/* also check for the less used language="javascript" type tag */
					nType = nodes.item(i).getAttributes().getNamedItem("language");
					if ((nType != null && nType.getTextContent() != null && nType
							.getTextContent().toLowerCase().contains("javascript"))) {
						String content = nodes.item(i).getTextContent();
						if (content.length() > 0) {
							String js = modifyJS(content, request.getURL() + "script" + i);
							nodes.item(i).setTextContent(js);
						}

					}
				}
				/* only modify content when we did modify anything */
				if (nodes.getLength() > 0) {
					/* set the new content */
					response.setContent(Helper.getDocumentToByteArray(dom));
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		/* return the response to the webbrowser */
		return response;
	}


	private class Plugin implements HTTPClient {

		private HTTPClient client = null;

		/**
		 * Constructor for this plugin.
		 * 
		 * @param in
		 *            The HTTPClient connection.
		 */
		public Plugin(HTTPClient in) {
			client = in;
		}

		public Response fetchResponse(Request request) throws IOException {

			System.out.println("fetchResponse");

			Response response = client.fetchResponse(request);
			return createResponse(response, request);
		}
	}




}
