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

		//functionToTest.add("dg('test')");

		//functionToTest.add("toggleInfo()"); // IndexOutOfBoundsException
		//functionToTest.add("toggleInfo('')"); // IndexOutOfBoundsException
		//functionToTest.add("toggleInfo('Show')");
		//functionToTest.add("toggleInfo('Hide')");

		//functionToTest.add("reToggleInfo()");

		//functionToTest.add("reshuffle()");

		//functionToTest.add("updateIndic()");

		//functionToTest.add("SaveRating(0,1)");
		//functionToTest.add("SaveRating(0,0)");

		//functionToTest.add("prepareBody()");

		//functionToTest.add("hideElem('id')");

		//functionToTest.add("showElem('id')");

		//functionToTest.add("inlineElem('id')");

		//functionToTest.add("tableRowElem('id')");

		//functionToTest.add("checkWV()");

		//functionToTest.add("doReply(0)");

		//functionToTest.add("doReply(1)");

		functionToTest.add("ss_next()"); // IndexOutOfBoundsException

		//functionToTest.add("ss_prev()"); // IndexOutOfBoundsException

		//functionToTest.add("ss_update()"); // IndexOutOfBoundsException

		//functionToTest.add("ss_playpause()");  // IndexOutOfBoundsException

		//functionToTest.add("ss_toggleSmaller()");

		//functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings

		//functionToTest.add("ss_slideshow()");

		//functionToTest.add("sumTotalPrice()");

		ConcolicEngine ce = new ConcolicEngine(jsAdderess, scopeName, functionToTest, testSuiteNameToGenerate);
		ce.run();
	}


}
