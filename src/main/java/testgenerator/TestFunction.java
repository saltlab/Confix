package testgenerator;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Amin Milani Fard
 */
public class TestFunction {
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fixture == null) ? 0 : fixture.hashCode());
		result = prime * result
				+ ((statements == null) ? 0 : statements.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TestFunction other = (TestFunction) obj;
		if (fixture == null) {
			if (other.fixture != null)
				return false;
		} else if (!fixture.equals(other.fixture))
			return false;
		if (statements == null) {
			if (other.statements != null)
				return false;
		} else if (!statements.equals(other.statements))
			return false;
		return true;
	}

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
