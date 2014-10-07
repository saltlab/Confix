import core.ConcolicEngine;

public class ConfixRunner {

	private static String jsAdderess = "output/phormer_tests/phorm.js";
	private static String scopeName = "phorm.js";
	private static String testSuiteNameToGenerate = "tests_phormer.js";
	
	// provide input values for a DOM dependent function 
	private static String functionToTest = "SaveRating(-10)";

	public static void main(String[] args) throws Exception {

		ConcolicEngine ce = new ConcolicEngine(jsAdderess, scopeName, functionToTest, testSuiteNameToGenerate);
		ce.run();
	}


}
