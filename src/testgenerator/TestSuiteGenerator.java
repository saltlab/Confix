package testgenerator;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;


/* Generating QUnit test suite of the foillowing format

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
	private String DOMFixture;
	private List<String> functionsList;

	public TestSuiteGenerator(String testSuiteNameToGenerate, String DOMFixture, List<String> functionsList){
		this.testSuiteNameToGenerate = testSuiteNameToGenerate;
		this.DOMFixture = DOMFixture;
		this.functionsList = functionsList;
	}

	/**
	 * Generating the extended test suite in multiple files
	 */
	public void generateTestSuite() {

		ArrayList<TestFunction> testFunctions = new ArrayList<TestFunction>();
		int counter = 0;

		for (String fName: functionsList) {
			//For each path to the sink node
			TestFunction testFunction = new TestFunction("Testing function " + fName);
			int pathCount = 0;
			testFunction.addStatement(fName + "();");

			/*for (int j=0;j<10;j++) {
				//For each path ...
				pathCount++;
				testFunction.addStatement("// Testing paths " + Integer.toString(pathCount) + " i.e., .... ");
				testFunction.addStatement("new statement");
			}				
			 */

			// adding the test method to the file
			testFunctions.add(testFunction);
		}

		String moduleName = testSuiteNameToGenerate;

		String TEST_SUITE_PATH = "output/" + testSuiteNameToGenerate;

		String FILE_NAME_TEMPLATE = "TestCase.vm";

		try {
			String fileName = null;

			QUnitTestGenerator generator = new QUnitTestGenerator(moduleName, testFunctions, DOMFixture);

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
