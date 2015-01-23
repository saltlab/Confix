import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class MinesweeperConfixRunner {

	static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.FIXINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	//static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	//static Method testGenerationMethod = Method.CONFIX_MANUAL;

	private static String jsFolderNameToTest = "Minesweeper";  // the folder should be available in the "input/" directory
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
			//functionToTest.add("shuffleBoard()");
			//functionToTest.add("newGame()");
			//functionToTest.add("switchLevel(initLevel,linkObj)");   // The input should be a DOM element, ConFix can't handle it
		} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
		}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
		}else if (testGenerationMethod == Method.FIXINP){
		}

		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
