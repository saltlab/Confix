import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class PhormerConfixRunner {

	static Method testGenerationMethod = Method.CONFIX_MANUAL;
	
	private static String jsFolderNameToTest = "phormer";  // the folder should be available in the "input/" directory
	private static String jsNameToTest = "phorm.js";
	//private static String jsNameToTest = "help.js";
	//private static String jsNameToTest = "addPhoto.js";
	//private static String jsNameToTest = "admin.js";
	//private static String jsNameToTest = "skeleton.js";
	

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = "QUnit_" + jsNameToTest;


	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		if(jsNameToTest.equals("phorm.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){

				functionToTest.add("dg('id')");
				functionToTest.add("toggleInfo()");
				functionToTest.add("toggleInfo('')");
				functionToTest.add("toggleInfo('Show')");
				functionToTest.add("toggleInfo('Hide')");
				functionToTest.add("reToggleInfo()");
				functionToTest.add("reshuffle()");
				functionToTest.add("updateIndic()");
				functionToTest.add("SaveRating(0,1)");
				functionToTest.add("SaveRating(0,0)");
				functionToTest.add("prepareBody()");
				functionToTest.add("hideElem('id')");
				functionToTest.add("showElem('id')");
				functionToTest.add("inlineElem('id')");
				functionToTest.add("tableRowElem('id')");
				functionToTest.add("checkWV()");
				functionToTest.add("doReply(0)");
				functionToTest.add("doReply(1)");
				functionToTest.add("ss_next()");
				functionToTest.add("ss_prev()");
				functionToTest.add("ss_update()");
				functionToTest.add("ss_playpause()"); 
				functionToTest.add("ss_toggleSmaller()");
				//functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings
				functionToTest.add("ss_slideshow()");
				functionToTest.add("sumTotalPrice()");

			} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){

				functionToTest.add("dg('id')"); // check
				functionToTest.add("toggleInfo()"); // check
				functionToTest.add("toggleInfo('')");
				functionToTest.add("toggleInfo('Show')");
				functionToTest.add("toggleInfo('Hide')");
				functionToTest.add("reToggleInfo()");
				functionToTest.add("reshuffle()");
				functionToTest.add("updateIndic()");
				functionToTest.add("SaveRating(0,1)"); // check
				functionToTest.add("SaveRating(0,0)");
				functionToTest.add("prepareBody()"); // check
				functionToTest.add("hideElem('id')"); // check
				functionToTest.add("showElem('id')"); // check
				functionToTest.add("inlineElem('id')"); // check
				functionToTest.add("tableRowElem('id')"); // check
				functionToTest.add("checkWV()");
				functionToTest.add("doReply(0)"); // check
				functionToTest.add("doReply(1)");
				functionToTest.add("ss_next()");
				functionToTest.add("ss_prev()");
				functionToTest.add("ss_update()");
				functionToTest.add("ss_playpause()"); 
				functionToTest.add("ss_toggleSmaller()");
				//functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings
				functionToTest.add("ss_slideshow()");
				functionToTest.add("sumTotalPrice()");

			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
			
				functionToTest.add("dg()");
				functionToTest.add("toggleInfo()");
				functionToTest.add("reToggleInfo()");
				functionToTest.add("reshuffle()");
				functionToTest.add("updateIndic()");
				functionToTest.add("SaveRating()");
				functionToTest.add("prepareBody()");
				functionToTest.add("hideElem()");
				functionToTest.add("showElem()");
				functionToTest.add("inlineElem()");
				functionToTest.add("tableRowElem()");
				functionToTest.add("checkWV()");
				functionToTest.add("doReply()");
				functionToTest.add("ss_next()");
				functionToTest.add("ss_prev()");
				functionToTest.add("ss_update()");
				functionToTest.add("ss_playpause()"); 
				functionToTest.add("ss_toggleSmaller()");
				functionToTest.add("ss_slideshow()");
				functionToTest.add("sumTotalPrice()");

			}else if (testGenerationMethod == Method.RNDINP){

				functionToTest.add("dg('test')");
				functionToTest.add("toggleInfo('test')");
				functionToTest.add("reToggleInfo()");
				functionToTest.add("reshuffle()");
				functionToTest.add("updateIndic()");
				functionToTest.add("SaveRating('test','test')");
				functionToTest.add("prepareBody()");
				functionToTest.add("hideElem('test')");
				functionToTest.add("showElem('test')");
				functionToTest.add("inlineElem('test')");
				functionToTest.add("tableRowElem('test')");
				functionToTest.add("checkWV()");
				functionToTest.add("doReply('test')");
				functionToTest.add("doReply('test')");
				functionToTest.add("ss_next()");
				functionToTest.add("ss_prev()");
				functionToTest.add("ss_update()");
				functionToTest.add("ss_playpause()"); 
				functionToTest.add("ss_toggleSmaller()");
				//functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings
				functionToTest.add("ss_slideshow()");
				functionToTest.add("sumTotalPrice()");
				
			}
			
		}if(jsNameToTest.equals("help.js")){

			functionToTest.add("HideHelp()");
			functionToTest.add("dgp('id')");
			functionToTest.add("ShowHelp('test', null, 'it')");
			functionToTest.add("ShowHelp('test', null, 'test')"); // more combinations
			functionToTest.add("SwitchSelectIE()");
			
		}if(jsNameToTest.equals("addPhoto.js")){

			functionToTest.add("setExif('test')");
			functionToTest.add("imageUploaded(false, 'test')");
			functionToTest.add("imageUploaded(true, 'test')");
			functionToTest.add("writeYet('test', false)");
			functionToTest.add("writeYet('test', true)");
			functionToTest.add("uploadSubmitted('test', 'test', false, 'test') ");
			functionToTest.add("uploadSubmitted('test', 'test', true, 'test') ");

		}if(jsNameToTest.equals("admin.js")){

			functionToTest.add("PrepareBody()");
			functionToTest.add("dg('test')");
			functionToTest.add("hideElem('test')");
			functionToTest.add("showElem('test')");
			functionToTest.add("inlineElem('test')");
			functionToTest.add("tableRowElem('test')");
			functionToTest.add("checkChangePass()");
			functionToTest.add("checkInstallPass()");
			functionToTest.add("checkPrivacyRow()");
			functionToTest.add("checkHasPass()");
			functionToTest.add("checkDate()");
			functionToTest.add("CheckAddPhotoTime()");
			functionToTest.add("CheckAddPhoto()");
			functionToTest.add("ConfirmDelPhoto()");
			functionToTest.add("showlinkline('test')");
			functionToTest.add("hidelinkline('test')");
			functionToTest.add("linkAddBelow('test')");
			functionToTest.add("linkDelThis('test')");
			functionToTest.add("removeThisNode('test')");
			functionToTest.add("addMainColDiv()");
			functionToTest.add("updateMode()");
			functionToTest.add("fixBoldInput('test','test1')");
			functionToTest.add("changePrev()");
			functionToTest.add("rethumb_fill('test')");
			functionToTest.add("rethumb()");
			functionToTest.add("ToggleAdvPref()");
			functionToTest.add("updateTimeDiffer('test')");
			functionToTest.add("CheckDateDrafts()");
			functionToTest.add("CheckActionDrafts()");
			functionToTest.add("updateSelCount()");
			functionToTest.add("DraftsSelectBit('test','test1')");
			functionToTest.add("AddAddBox()");
			
		}if(jsNameToTest.equals("skeleton.js")){

			functionToTest.add("SaveRatio()");
			functionToTest.add("MouseDown('test','test1')");
			functionToTest.add("MouseDownTheSkeleton('test')");
			functionToTest.add("ExpandSkl()");
			functionToTest.add("MouseMoveInside('test')");
			functionToTest.add("UpdateThumbPrev()");
			functionToTest.add("()");
			functionToTest.add("()");
			functionToTest.add("()");
			functionToTest.add("()");			
			
		}
		
		
		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
}


}
