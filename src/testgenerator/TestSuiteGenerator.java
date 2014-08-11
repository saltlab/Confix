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
        // runs before each test
		${testSetupCode}
    },
    teardown: function() {
        // runs after each test
		${testTearDownCode}
    }
});


#foreach( $function in $testFunctions )

test("${function.functionName}", function() {
    // test something
#foreach( $statement in $function.statements )
	$statement
#end
});

#end
 */


public class TestSuiteGenerator {

	/**
	 * Generating the extended test suite in multiple files
	 */
	private void generateTestSuite(String testSuiteNameToGenerate) {

		ArrayList<TestFunction> testFunctions = new ArrayList<TestFunction>();
		int counter = 0;
		
		for (int i=0;i<10;i++) {
			//For each path to the sink node
			TestFunction testFunction = new TestFunction("function" + Integer.toString(counter));
			int pathCount = 0;
			for (int j=0;j<10;j++) {
				//For each path ...
				pathCount++;
				testFunction.addStatement("// Testing paths " + Integer.toString(pathCount) + " i.e., .... ");
				testFunction.addStatement("new statement");
			}				

			// adding the test method to the file
			testFunctions.add(testFunction);

			String moduleName = testSuiteNameToGenerate;

			String TEST_SUITE_PATH = "src/test/confix/generated/" + testSuiteNameToGenerate;

			String FILE_NAME_TEMPLATE = "TestCase.vm";

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


}
