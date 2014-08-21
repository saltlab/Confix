package testgenerator;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Amin Milani Fard
 */
public class TestFunction {
	private String FunctionName;
	private String fixture = "TEMP";
	private ArrayList<String> statements = new ArrayList<String>();

	public TestFunction(String FunctionName) {
		this.FunctionName = FunctionName;
	}

	public String getFunctionName() {
		return FunctionName;
	}

	public void setFunctionName(String FunctionName) {
		this.FunctionName = FunctionName;
	}

	public ArrayList<String> getStatements() {
		return statements;
	}

	public void setStatements(ArrayList<String> statements) {
		this.statements = statements;
	}

	public void addStatement(String statement) {
		statements.add(statement);
	}

	public String getFixture() {
		return fixture;
	}

	public void setFixture(String fixture) {
		this.fixture = fixture;
	}

}
