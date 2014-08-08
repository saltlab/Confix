package instrumentor;

import java.util.HashMap;
import java.util.Map;

import org.mozilla.javascript.Token;

public class ASTNodeUtility {

	private static Map<Integer,String> operatorNames =	new HashMap<Integer,String>();
	static {
		operatorNames.put(Token.IN, "in");
		operatorNames.put(Token.TYPEOF, "typeof");
		operatorNames.put(Token.INSTANCEOF, "instanceof");
		operatorNames.put(Token.DELPROP, "delete");
		operatorNames.put(Token.COMMA, ",");
		operatorNames.put(Token.COLON, ":");
		operatorNames.put(Token.SEMI, ";");
		operatorNames.put(Token.LB, "[");
		operatorNames.put(Token.RB, "]");
		operatorNames.put(Token.LC, "{");
		operatorNames.put(Token.RC, "}");
		operatorNames.put(Token.LP, "(");
		operatorNames.put(Token.RP, ")");
		operatorNames.put(Token.OR, "||");
		operatorNames.put(Token.AND, "&&");
		operatorNames.put(Token.INC, "++");
		operatorNames.put(Token.DEC, "--");
		operatorNames.put(Token.BITOR, "|");
		operatorNames.put(Token.BITXOR, "^");
		operatorNames.put(Token.BITAND, "&");
		operatorNames.put(Token.EQ, "==");
		operatorNames.put(Token.NE, "!=");
		operatorNames.put(Token.LT, "<");
		operatorNames.put(Token.GT, ">");
		operatorNames.put(Token.LE, "<=");
		operatorNames.put(Token.GE, ">=");
		operatorNames.put(Token.LSH, "<<");
		operatorNames.put(Token.RSH, ">>");
		operatorNames.put(Token.URSH, ">>>");
		operatorNames.put(Token.ADD, "+");
		operatorNames.put(Token.SUB, "-");
		operatorNames.put(Token.MUL, "*");
		operatorNames.put(Token.DIV, "/");
		operatorNames.put(Token.MOD, "%");
		operatorNames.put(Token.NOT, "!");
		operatorNames.put(Token.BITNOT, "~");
		operatorNames.put(Token.POS, "+");
		operatorNames.put(Token.NEG, "-");
		operatorNames.put(Token.SHEQ, "===");
		operatorNames.put(Token.SHNE, "!==");
		operatorNames.put(Token.ASSIGN, "=");
		operatorNames.put(Token.ASSIGN_BITOR, "|=");
		operatorNames.put(Token.ASSIGN_BITAND, "&=");
		operatorNames.put(Token.ASSIGN_LSH, "<<=");
		operatorNames.put(Token.ASSIGN_RSH, ">>=");
		operatorNames.put(Token.ASSIGN_URSH, ">>>=");
		operatorNames.put(Token.ASSIGN_ADD, "+=");
		operatorNames.put(Token.ASSIGN_SUB, "-=");
		operatorNames.put(Token.ASSIGN_MUL, "*=");
		operatorNames.put(Token.ASSIGN_DIV, "/=");
		operatorNames.put(Token.ASSIGN_MOD, "%=");
		operatorNames.put(Token.ASSIGN_BITXOR, "^=");
		operatorNames.put(Token.VOID, "void");
		operatorNames.put(Token.RETURN, "return");
		operatorNames.put(Token.GOTO, "goto");
		operatorNames.put(Token.IFEQ, "ifequal");
		operatorNames.put(Token.IFNE, "ifnotequal");
		operatorNames.put(Token.SETNAME, "setname");
		operatorNames.put(Token.NEW, "new");
		operatorNames.put(Token.GETPROP, "GETPROP");
		operatorNames.put(Token.SETPROP, "SETPROP");
		operatorNames.put(Token.GETELEM, "GETELEM");
		operatorNames.put(Token.SETELEM, "SETELEM");
		operatorNames.put(Token.CALL, "CALL");
		operatorNames.put(Token.NAME, "NAME");
		operatorNames.put(Token.NUMBER, "NUMBER");
		operatorNames.put(Token.STRING, "STRING");
		operatorNames.put(Token.NULL, "NULL");
		operatorNames.put(Token.THIS, "THIS");
		operatorNames.put(Token.FALSE, "FALSE");
		operatorNames.put(Token.TRUE, "TRUE");
		operatorNames.put(Token.GETVAR, "GETVAR");
		operatorNames.put(Token.SETVAR, "SETVAR");
		operatorNames.put(Token.HOOK, "?:");
		operatorNames.put(Token.DOT, ".");
		operatorNames.put(Token.SETPROP_OP, "x.y op= something");
		operatorNames.put(Token.SETELEM_OP, "x[y] op= something");
	}

	/**
	 * Returns the string name for this operator.
	 * @param op the token type, e.g. {@link Token#ADD} or {@link Token#TYPEOF}
	 * @return the source operator string, such as "+" or "typeof"
	 */
	public static String operatorToString(int op) {
		String result = operatorNames.get(op);
		if (result != null)
			return result;
		return "";
	}
}
