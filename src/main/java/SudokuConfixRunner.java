import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class SudokuConfixRunner {

	//static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	//static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	static Method testGenerationMethod = Method.CONFIX_MANUAL;

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
			functionToTest.add("squareObjects.push('test'); shuffleBoard()");
			functionToTest.add("newGame()");
			functionToTest.add("showCell(null)");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("var inputDiv = document.createElement('div'); " +
					"document.body.appendChild(inputDiv); " +
					"showCell(inputDiv)");  // The input should be a DOM element, ConFix can't handle it
			
			functionToTest.add("showCell('generateDOMInput')");  
			
			functionToTest.add("showColumnsInGroup()");
			
			functionToTest.add("highlightSquare()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("var inputObj = document.createElement('div'); " +
					"inputObj.style.backgroundColor = 'red'; " +
					"document.body.appendChild(inputObj); " +
					"highlightSquare(null,inputObj);");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("var inputObj = document.createElement('div'); " +
					"inputObj.style.backgroundColor = 'red'; " +
					"document.body.appendChild(inputObj); " +
					"highlightSquare(null,inputObj);");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("gameFinished = true; highlightSquare(null,null);");  // The input should be a DOM element, ConFix can't handle it

			functionToTest.add("isGameFinished()");
			functionToTest.add("initSudoku()");
			functionToTest.add("insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); gameFinished = true; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber()");
			functionToTest.add("higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber()");
			
			functionToTest.add("helpMe()");
			functionToTest.add("gameFinished = true; helpMe()");
			functionToTest.add("isCorrect('generateDOMInput')");
			functionToTest.add("getPossibleNumbers('generateDOMInput')");
			functionToTest.add("showHint()");
			functionToTest.add("revealAll()");
			functionToTest.add("switchLevel('generateDOMInput')");
			functionToTest.add("gameFinished=true; switchLevel('generateDOMInput')");
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
