import core.ConcolicEngine;
import core.DOMConstraint;
import core.JSAnalyzer;
import core.XpathSolver;

import instrumentor.JSASTInstrumenter;
import instrumentor.JSModifyProxyPlugin;
import instrumentor.ProxyConfiguration;

import testgenerator.TestSuiteGenerator;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class ConfixRunner {

	private static String url = "http://localhost:8888/concolic.htm";
	private static String jsAdderess = "output/phormer_tests/phorm.js";
	private static String scopeName = "phorm.js";
	private static String testSuiteNameToGenerate = "tests_phormer.js";
	
	// provide input values for a DOM dependent function 
	private static String functionToTest = "f(-10)";

	public static void main(String[] args) throws Exception {

		ConcolicEngine ce = new ConcolicEngine(url, jsAdderess, scopeName, functionToTest);
		ce.run();
		List<String> functionsList = ce.getDOMDependentFunctions();
		List<List<String>> attributeConstraintList = ce.getAttributeConstraintList(functionsList);
		List<String> DOMFixtureList = ce.getDOMFixtureList(functionsList);
		
		// Generate a QUnit test file for a DOM-dependent function with DOM fixture
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuiteNameToGenerate, DOMFixtureList, functionsList, attributeConstraintList);
		tsg.generateTestSuite();
	}


}
