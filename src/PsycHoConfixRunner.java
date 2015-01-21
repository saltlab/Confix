import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class PsycHoConfixRunner {

	//static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.FIXINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	//static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	static Method testGenerationMethod = Method.CONFIX_MANUAL;

	private static String jsFolderNameToTest = "PsycHo";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "doDuty.js";
	//	private static String jsNameToTest = "ecp.js";
	//	private static String jsNameToTest = "extra.js"; -> combined with doDuty
	//	private static String jsNameToTest = "kines.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = "QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		if(jsNameToTest.equals("doDuty.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				/*functionToTest.add("foundSide('_DefaultDivBackBackEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackIsColorEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackIsColorEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackIsTextureEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackIsImageEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackColorEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackColorErA', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackTextureEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivBackImageEr', 'test')");
				functionToTest.add("foundSide('_DefaultBorderStyleEr', 'test')");
				*/functionToTest.add("foundSide('_DefaultBorderWidthEr', 'test')");
				/*functionToTest.add("foundSide('_DefaultBorderColorEr', 'test')");
				functionToTest.add("foundSide('_DefaultBorderColorErA', 'test')");
				functionToTest.add("foundSide('_SepBorderStyleEr', 'test')");
				functionToTest.add("foundSide('_SepBorderWidthEr', 'test')");
				functionToTest.add("foundSide('_SepBorderColorEr', 'test')");
				functionToTest.add("foundSide('_SepBorderColorErA', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackBackEr', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackIsColorEr', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackIsTextureEr', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackIsImageEr', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackColorEr', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackColorErA', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackTextureEr', 'test')");
				functionToTest.add("foundSide('_PartSepDivBackImageEr', 'test')");
				functionToTest.add("foundSide('_PartSepHeight', 'test')");
				functionToTest.add("foundSide('_PartSepHeightInc', 'test')");
				functionToTest.add("foundSide('_PartSepHeightDec', 'test')");
				functionToTest.add("foundSide('_PartDivLineHeightEr', 'test')");
				functionToTest.add("foundSide('_TitleColorEr', 'test')");
				functionToTest.add("foundSide('_TitleColorErA', 'test')");
				functionToTest.add("foundSide('_DefaultDivColorEr', 'test')");
				functionToTest.add("foundSide('_DefaultDivColorErA', 'test')");
				functionToTest.add("foundSide('_TitleUnderlineEr', 'test')");
				functionToTest.add("foundSide('_TitleUnderlineErA', 'test')");
				functionToTest.add("foundSide('_LinkColorEr', 'test')");
				functionToTest.add("foundSide('_LinkColorErA', 'test')");
				functionToTest.add("foundSide('_LinkHoverEr', 'test')");
				functionToTest.add("foundSide('_LinkHoverErA', 'test')");
				functionToTest.add("foundSide('_RemoveThisBox', 'test')");
				functionToTest.add("foundSide('_AddOneBox', 'test')");
				functionToTest.add("foundSide('_EditThisPart', 'test')");
				functionToTest.add("foundSide('_TitleTxt', 'test')");
				functionToTest.add("foundSide('_PreSurr', 'test')");
				functionToTest.add("foundSide('_PstSurr', 'test')");
				functionToTest.add("foundSide('_LinkTxt', 'test')");
				functionToTest.add("foundSide('_LinkUrl', 'test')");
				functionToTest.add("foundSide('_LinkTtl', 'test')");
				functionToTest.add("foundSide('_RemLink', 'test')");
				functionToTest.add("foundSide('_InsLink', 'test')");
				functionToTest.add("foundSide('_addImg', 'test')");
				functionToTest.add("foundSide('_boxNumForce', 'test')");
				functionToTest.add("foundSide('_linkNumForce', 'test')");
*/


				functionToTest.add("foundSide('', '')");
				functionToTest.add("foundSide('')");
			} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			}else if (testGenerationMethod == Method.FIXINP){
			}
		}if(jsNameToTest.equals("ecp.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				functionToTest.add("dg('id')");
			} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			}else if (testGenerationMethod == Method.FIXINP){
			}
		}if(jsNameToTest.equals("extra.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				functionToTest.add("dg('id')");
			} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			}else if (testGenerationMethod == Method.FIXINP){
			}
		}if(jsNameToTest.equals("kines.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				functionToTest.add("dg('id')");
			} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			}else if (testGenerationMethod == Method.FIXINP){
			}
		}


		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}

}
