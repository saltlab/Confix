import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class SimpleToDoConfixRunner {

	//static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	//static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	static Method testGenerationMethod = Method.CONFIX_MANUAL;

	private static String jsFolderNameToTest = "SimpleTodo";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "app.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
			functionToTest.add("createNewTaskElement('test')");
			functionToTest.add("addTask()");
			functionToTest.add("editTask()");
			functionToTest.add("deleteTask()");
			functionToTest.add("tasksCompleted()");
			functionToTest.add("tasksIncomplete()");
			functionToTest.add("bindTaskEvents()");
		} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			functionToTest.add("createNewTaskElement()");
			functionToTest.add("addTask()");
			functionToTest.add("editTask()");
			functionToTest.add("deleteTask()");
			functionToTest.add("tasksCompleted()");
			functionToTest.add("tasksIncomplete()");
			functionToTest.add("bindTaskEvents()");
		}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			functionToTest.add("createNewTaskElement()");
			functionToTest.add("addTask()");
			functionToTest.add("editTask()");
			functionToTest.add("deleteTask()");
			functionToTest.add("tasksCompleted()");
			functionToTest.add("tasksIncomplete()");
			functionToTest.add("bindTaskEvents()");
		}

		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
