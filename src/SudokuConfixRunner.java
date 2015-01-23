import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class SudokuConfixRunner {

	//static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.FIXINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	//static Method testGenerationMethod = Method.CONFIX_MANUAL;

	private static String jsFolderNameToTest = "sudoku";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "game.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		// Testing game.js DDFs
		if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
			functionToTest.add("shuffleBoard()");
			functionToTest.add("newGame()");
			functionToTest.add("showCell(null)");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showColumnsInGroup()");
			functionToTest.add("highlightSquare(null,null)");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("isGameFinished()");
			functionToTest.add("initSudoku()");
			functionToTest.add("insertNumber(null)"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("helpMe()");
			functionToTest.add("isCorrect(null)"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getTopPos(null)"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getLeftPos(null)"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getPossibleNumbers(null)"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showHint()");
			functionToTest.add("revealAll()");
			functionToTest.add("switchLevel(null,null)");   // The input should be a DOM element, ConFix can't handle it
		} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			functionToTest.add("shuffleBoard()");
			functionToTest.add("newGame()");
			functionToTest.add("showCell()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showColumnsInGroup()");
			functionToTest.add("highlightSquare()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("isGameFinished()");
			functionToTest.add("initSudoku()");
			functionToTest.add("insertNumber()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("helpMe()");
			functionToTest.add("isCorrect()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getTopPos()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getLeftPos()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getPossibleNumbers()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showHint()");
			functionToTest.add("revealAll()");
			functionToTest.add("switchLevel()");   // The input should be a DOM element, ConFix can't handle it
		}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			functionToTest.add("shuffleBoard()");
			functionToTest.add("newGame()");
			functionToTest.add("showCell()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showColumnsInGroup()");
			functionToTest.add("highlightSquare()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("isGameFinished()");
			functionToTest.add("initSudoku()");
			functionToTest.add("insertNumber()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("helpMe()");
			functionToTest.add("isCorrect()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getTopPos()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getLeftPos()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getPossibleNumbers()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showHint()");
			functionToTest.add("revealAll()");
			functionToTest.add("switchLevel()");   // The input should be a DOM element, ConFix can't handle it
		}else if (testGenerationMethod == Method.FIXINP){
			functionToTest.add("shuffleBoard()");
			functionToTest.add("newGame()");
			functionToTest.add("showCell()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showColumnsInGroup()");
			functionToTest.add("highlightSquare()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("isGameFinished()");
			functionToTest.add("initSudoku()");
			functionToTest.add("insertNumber()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("helpMe()");
			functionToTest.add("isCorrect()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getTopPos()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getLeftPos()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("getPossibleNumbers()"); // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("showHint()");
			functionToTest.add("revealAll()");
			functionToTest.add("switchLevel()");   // The input should be a DOM element, ConFix can't handle it
		}


		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
