/*
    Automatic JavaScript Invariants is a plugin for Crawljax that can be
    used to derive JavaScript invariants automatically and use them for
    regressions testing.
    Copyright (C) 2010  crawljax.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */
package instrumentor;

import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;


/**
 * This class is used to visit all JS nodes. When a node matches a certain condition, this class
 * will add instrumentation code near this code.
 * 
 * @author Amin Milani Fard
 * @author Frank Groeneveld
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

		String code = "var " + jsName + "_exec_counter = new Array(); " +
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