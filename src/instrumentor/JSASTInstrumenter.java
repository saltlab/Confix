package instrumentor;

import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;


/**
 * This class is used to visit all JS nodes. When a node matches a certain condition, this class
 * will add instrumentation code near this code.
 */
public class JSASTInstrumenter extends JSASTVisitor {

	private int instrumentedLinesCounter = 0;
	
	public JSASTInstrumenter() {
		super();
	}

	/**
	 * This will be added to the begining of the script
	 * 
	 * @return The AstNode which contains array.
	 */
	private AstNode jsLineExectutionCounter() {
		String code = "function confixFunCall(functionType, functionCallName, args, argsValues, actualFunCall){" +
					   "return actualFunCall;" +
					   "}";
		code += "var " + jsName + "_exec_counter = new Array(); " +
				"for (var i=0;i<" + instrumentedLinesCounter + ";i++)" +
				"if("+jsName + "_exec_counter[i]== undefined || "+jsName + "_exec_counter[i]== null) "+jsName + "_exec_counter[i]=0;";
		
		// Amin: instrumentedLinesCounter resets to 0 for the next codes
		instrumentedLinesCounter = 0;
		//System.out.println(code);
		
		return parse(code);
	}

	@Override // instrumenting within a function
	protected AstNode createNode(FunctionNode function, String postfix, int lineNo) {
		String name = getFunctionName(function);

		// Amin: Adds instrumentation code
		String code = jsName + "_exec_counter[" + Integer.toString(instrumentedLinesCounter) + "]++;";
		instrumentedLinesCounter++;
		
		return parse(code);
	}

	@Override// instrumenting out of function
	protected AstNode createNode(AstRoot root, String postfix, int lineNo, int rootCount) {

		// Amin: Adds instrumentation code
		 String code = jsName + "_exec_counter[" + Integer.toString(instrumentedLinesCounter) + "]++;";
		instrumentedLinesCounter++;

		return parse(code);
	}

	@Override
	public void finish(AstRoot node) {
		/* add initialization code for the count of executed lines array */
		node.addChildToFront(jsLineExectutionCounter());
		// Amin: instrumentedLinesCounter resets to 0 for the next codes
		instrumentedLinesCounter = 0;
	}

	@Override
	public void start() {
		// Amin: just to be sure that index start from 0
		instrumentedLinesCounter = 0;
	}

	@Override
	protected AstNode createFunctionTypeNameTrackingNode(
			FunctionNode callerFunc, AstNode node) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected AstNode createNode(FunctionNode function, AstNode nodeForVarLog,
			String statementCategory) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected AstNode createFunctionTrackingNode(FunctionNode calleeFunction,
			String callerName) {
		// TODO Auto-generated method stub
		return null;
	}	
}
