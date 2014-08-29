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

	private static String url = "http://localhost:8888/phormer331/";
	private static String functionToTest = "http://localhost:8888/phormer331/";
	private static String jsAdderess = "output/phormer_tests/phorm.js";
	private static String scopeName = "phorm.js";
	private static String testSuiteNameToGenerate = "tests_phormer.js";
	
	public static void main(String[] args) throws Exception {

		//TODO: apply these changes
		//get as inputs: input values for a given set of DOM dependent functions

		ConcolicEngine ce = new ConcolicEngine(url, jsAdderess, scopeName);
		ce.run();
		List<String> functionsList = ce.getDOMDependentFunctions();
		List<List<String>> attributeConstraintList = ce.getAttributeConstraintList(functionsList);
		List<String> DOMFixtureList = ce.getDOMFixtureList(functionsList);
		
		// Generate a QUnit test file for a function (with DOM fixture for common paths in the module setup part, and different test methods for each path)
		TestSuiteGenerator tsg = new TestSuiteGenerator(testSuiteNameToGenerate, DOMFixtureList, functionsList, attributeConstraintList);
		tsg.generateTestSuite();

	}


}
