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
	private List<String> functionsNameList;
	private List<String> DOMFixtureList;
	private List<List<String>> attributeConstraints;

	public TestSuiteGenerator(String testSuiteNameToGenerate, List<String> DOMFixture, List<String> functionsNameList, List<List<String>> attributeConstraints){
		this.testSuiteNameToGenerate = testSuiteNameToGenerate;
		this.DOMFixtureList = DOMFixture;
		this.functionsNameList = functionsNameList;
		this.attributeConstraints = attributeConstraints;

	}

	/**
	 * Generating the extended test suite in multiple files
	 */
	public void generateTestSuite() {

		ArrayList<TestFunction> testFunctions = new ArrayList<TestFunction>();
		int counter = 0;

		for (int i=0; i<functionsNameList.size(); i++) {
			//For each path to the sink node
			TestFunction testFunction = new TestFunction("Testing function " + functionsNameList.get(i));
			int pathCount = 0;
			testFunction.setFixture(DOMFixtureList.get(i));

			// adding attribute constraints
			for (String ac: attributeConstraints.get(i))
				testFunction.addStatement(ac + ";");

			testFunction.addStatement(functionsNameList.get(i) + "();");

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
