import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class HotelReservationConfixRunner {

	static Method testGenerationMethod = Method.CONFIX;

	private static String jsFolderNameToTest = "HotelReservation";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "validation.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = "QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		// Testing validation.js DDFs
		functionToTest.add("checkPassConfirm()");
		functionToTest.add("checkValid()");
		//functionToTest.add("RequiredField()");  // The input should be a DOM element, ConFix can't handle it
		functionToTest.add("validateEmail()");
		//functionToTest.add("validateNumber()");  // The input should be a DOM element, ConFix can't handle it
		

		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}