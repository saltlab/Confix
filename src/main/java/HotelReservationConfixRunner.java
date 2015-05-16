import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class HotelReservationConfixRunner {

	//static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	//static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	static Method testGenerationMethod = Method.CONFIX_MANUAL;

	private static String jsFolderNameToTest = "HotelReservation";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "validation.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		// Testing validation.js DDFs
		if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
			
			//functionToTest.add("sumTotalPrice()");
			
			functionToTest.add("checkPassConfirm()");
			functionToTest.add("checkValid()");
			functionToTest.add("RequiredField(null)");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("validateEmail()");
			functionToTest.add("validateNumber(null)");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("var f = document.createElement('form'); f.name = 'frm'; document.body.appendChild(f);" +
					"var phone = document.createElement('input'); phone.name = 'phnum';  f.appendChild(phone);" +
					" validateNumber(f)");  // The input should be a DOM element, ConFix can't handle it
			
			
			//<form name="frm" class="form" onSubmit="return (RequiredField(this) && checkValid(this) && validateEmail()&& validateNumber(this));">
			
			functionToTest.add("RequiredField(null)");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("var f = document.createElement('form'); f.name = 'frm'; document.body.appendChild(f);" +
					"var phone = document.createElement('input'); phone.name = 'phnum';  f.appendChild(phone);" +
					" RequiredField(f)");  // The input should be a DOM element, ConFix can't handle it

			/*
			<table>
			<tr>
			<td>First name:</td>
			<td><input type="text" name="firstname" />
			<span id="error_firstname" class="error">*</span></td>
			</tr>

			<tr>
			<td>Last name: </td>
			<td><input type="text" name="lastname" />
			<span id="error_lastname" class="error">*</span></td>
			</tr>

			<tr>
			<td>Address: </td>
			<td><textarea rows="5" cols="17" name="address" >
			</textarea><span id="error_address" class="error">*</span></td>
			</tr>

			<tr>
			<td>Email:</td>
			<td><input type="text" name="email" />
			<span id="error_email" class="error">*</span>
			</td>
			</tr>

			<tr>	
			<td>Card No. :</td>
			<td> <input type=text name='cardno' maxlength=19 size=20></td>
			<td><span id="error_cardno" class="error">*</span></td>
			</tr>
			*/
			
			
			//functionToTest.add("isValidCard('123')");
			//functionToTest.add("isValidCard('1234567890123')");
			
			//functionToTest.add("isValidVISA('1234567890123')");
			//functionToTest.add("isValidVISA('4')");
			//functionToTest.add("isValidVISA('4123456789012')");
			//functionToTest.add("isValidVISA('4123456789012345')");
			
			//functionToTest.add("isValidMasterCard('1234567890123')");
			//functionToTest.add("isValidMasterCard('5)");
			//functionToTest.add("isValidMasterCard('5123456789012')");
			//functionToTest.add("isValidMasterCard('5523456789012345')");
			//functionToTest.add("isValidMasterCard('552345678901234')");
			
			//functionToTest.add("trim('test')");
			
			
			
		} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			functionToTest.add("checkPassConfirm()");
			functionToTest.add("checkValid()");
			functionToTest.add("RequiredField()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("validateEmail()");
			functionToTest.add("validateNumber()");  // The input should be a DOM element, ConFix can't handle it

			//functionToTest.add("isValidCard('123')");
			//functionToTest.add("isValidCard('1234567890123')");
			
			//functionToTest.add("isValidVISA('1234567890123')");
			//functionToTest.add("isValidVISA('4')");
			//functionToTest.add("isValidVISA('4123456789012')");
			//functionToTest.add("isValidVISA('4123456789012345')");
			
			//functionToTest.add("isValidMasterCard('1234567890123')");
			//functionToTest.add("isValidMasterCard('5)");
			//functionToTest.add("isValidMasterCard('5123456789012')");
			//functionToTest.add("isValidMasterCard('5523456789012345')");

			
			//functionToTest.add("trim('test')");
			
		}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			
			
			functionToTest.add("checkPassConfirm()");
			functionToTest.add("checkValid()");
			functionToTest.add("RequiredField()");  // The input should be a DOM element, ConFix can't handle it
			functionToTest.add("validateEmail()");
			functionToTest.add("validateNumber()");  // The input should be a DOM element, ConFix can't handle it
		

			//functionToTest.add("isValidCard()");
			//functionToTest.add("isValidVISA()");
			//functionToTest.add("isValidMasterCard()");
			//functionToTest.add("trim()");
		}

		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
