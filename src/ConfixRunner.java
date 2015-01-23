import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class ConfixRunner {

	static Method testGenerationMethod = Method.CONFIX_MANUAL;
	
	private static String jsFolderNameToTest = "RunningExample";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "example.js";	

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;


	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		functionToTest.add("sumTotalPrice()");
		
		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
}


}
