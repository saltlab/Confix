import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class BunnyHuntConfixRunner {

	static Method testGenerationMethod = Method.MANUAL;

	private static String jsFolderNameToTest = "BunnyHunt";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "preload.js";
	//private static String jsNameToTest = "clouds.js";
	//private static String jsNameToTest = "bunnies.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		// Testing preload.js DDFs
		//functionToTest.add("preloadImages()");
		//functionToTest.add("ready()");

		// Testing clouds.js DDFs
		//functionToTest.add("cloudsInit()");
		//functionToTest.add("moveCloud1()");
		//functionToTest.add("moveCloud2()");

		// Testing clouds.js DDFs
		functionToTest.add("initBunnies()");
		
		//functionToTest.add("highlightSquare()");  // The input should be a DOM element, ConFix can't handle it


		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
