package testgenerator;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;


/* Generating QUnit test suite

// QUnit test cases generated @ ${date}

module("${moduleName}", {
    setup: function() {
        // generate fixture before each test
		$("#qunit-fixture").appendTo("${fixture});
    },
    teardown: function() {
        // runs after each test
		${testTearDownCode}
    }
});


#foreach( $function in $testFunctions )

test("${function.functionName}", function() {
	var $fixture = $( "#qunit-fixture" );
    // test something
#foreach( $statement in $function.statements )
	$statement
#end
});

#end

 */


public class TestSuiteGenerator {

	private String testSuiteNameToGenerate;
	ArrayList<TestFunction> testFunctions = new ArrayList<TestFunction>();

	public TestSuiteGenerator(String testSuiteNameToGenerate){
		this.testSuiteNameToGenerate = testSuiteNameToGenerate;
	}

	public void addNewTestMethod(String functionName, String DOMFixture, int pathNumber){
		System.out.println("Adding test method for function "  + functionName + " for path " + pathNumber);
		TestFunction testFunction = new TestFunction("Testing function " + functionName + " for path " + pathNumber);
		testFunction.setFixture(DOMFixture);
		// calling the function
		testFunction.addStatement(functionName + ";");
		// adding the test method to the file
		testFunctions.add(testFunction);
	}

	/**
	 * Generating the QUnit test file
	 */
	public void generateTestSuite() {

		String moduleName = testSuiteNameToGenerate;

		String TEST_SUITE_PATH = "output/" + testSuiteNameToGenerate;

		String FILE_NAME_TEMPLATE = "TestCaseTemplate.vm";

		try {
			String fileName = null;

			QUnitTestGenerator generator = new QUnitTestGenerator(moduleName, testFunctions);

			fileName = generator.generate(TEST_SUITE_PATH, FILE_NAME_TEMPLATE);

			System.out.println("Tests succesfully generated in " + fileName);		

		} catch (IOException e) {
			System.out.println("Error in checking " + TEST_SUITE_PATH);
			e.printStackTrace();
		} catch (Exception e) {
			System.out.println("Error generating testsuite: " + e.getMessage());
			e.printStackTrace();
		}			

		testFunctions.clear(); // clearing testFunctions for the next QUnit file

	}


}
