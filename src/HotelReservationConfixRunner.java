import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class HotelReservationConfixRunner {

	static Method testGenerationMethod = Method.CONFIX;

	private static String jsFolderNameToTest = "sudoku";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "game.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = "QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		// Testing game.js DDFs
		functionToTest.add("shuffleBoard()");
		functionToTest.add("newGame()");
		//functionToTest.add("showCell()");  // The input should be a DOM element, ConFix can't handle it
		functionToTest.add("showColumnsInGroup()");
		//functionToTest.add("highlightSquare()");  // The input should be a DOM element, ConFix can't handle it
		functionToTest.add("isGameFinished()");
		functionToTest.add("initSudoku()");
		//functionToTest.add("insertNumber()"); // The input should be a DOM element, ConFix can't handle it
		functionToTest.add("helpMe()");
		//functionToTest.add("isCorrect()"); // The input should be a DOM element, ConFix can't handle it
		//functionToTest.add("getTopPos()"); // The input should be a DOM element, ConFix can't handle it
		//functionToTest.add("getLeftPos()"); // The input should be a DOM element, ConFix can't handle it
		//functionToTest.add("getPossibleNumbers()"); // The input should be a DOM element, ConFix can't handle it
		functionToTest.add("showHint()");
		functionToTest.add("revealAll()");
		//functionToTest.add("switchLevel(initLevel,linkObj)");   // The input should be a DOM element, ConFix can't handle it


		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
