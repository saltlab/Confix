import java.util.ArrayList;

import core.ConcolicEngine;

public class ConfixRunner {

	private static String jsAdderess = "output/phormer_tests/phorm.js";
	private static String scopeName = "phorm.js";
	private static String testSuiteNameToGenerate = "tests_phormer.js";
	
	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();
	
	public static void main(String[] args) throws Exception {

		// Testing phormer.js DDFs
		/*functionToTest.add("toggleInfo()");
		functionToTest.add("toggleInfo('')");
		functionToTest.add("toggleInfo('Show')");
		functionToTest.add("toggleInfo('Hide')");
		functionToTest.add("toggleInfo()");
		functionToTest.add("toggleInfo()");
		functionToTest.add("toggleInfo()");
		*/
		functionToTest.add("dg('test')");
		functionToTest.add("NewSaveRating(1,3)");
		functionToTest.add("sumTotalPrice()");
		functionToTest.add("SaveRating(1,3)");

		ConcolicEngine ce = new ConcolicEngine(jsAdderess, scopeName, functionToTest, testSuiteNameToGenerate);
		ce.run();
	}


}
