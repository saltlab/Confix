import java.util.ArrayList;

import core.ConcolicEngine;
import core.utils.Method;

public class PhormerConfixRunner {

	//static Method testGenerationMethod = Method.NOINP;
	//static Method testGenerationMethod = Method.JALANGI;
	//static Method testGenerationMethod = Method.MANUAL;
	//static Method testGenerationMethod = Method.CONFIX_NOINP;
	//static Method testGenerationMethod = Method.CONFIX_JALANGI;
	static Method testGenerationMethod = Method.CONFIX_MANUAL;


	private static String jsFolderNameToTest = "phormer";  // the folder should be available in the "input/" directory
	//private static String jsNameToTest = "admin.js";
	//private static String jsNameToTest = "addPhoto.js";
	//private static String jsNameToTest = "phorm.js";
	//private static String jsNameToTest = "help.js";
	private static String jsNameToTest = "skeleton.js";


	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;


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
				functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings
				functionToTest.add("ss_slideshow()");
			} else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
				functionToTest.add("dg('test')"); // check
				functionToTest.add("toggleInfo('Show')");
				functionToTest.add("toggleInfo('a')");
				functionToTest.add("reToggleInfo()");
				functionToTest.add("reshuffle()");
				functionToTest.add("updateIndic()");
				functionToTest.add("SaveRating('','')");
				functionToTest.add("prepareBody()"); // check
				functionToTest.add("hideElem('test')"); // check
				functionToTest.add("showElem('test')"); // check
				functionToTest.add("inlineElem('test')"); // check
				functionToTest.add("tableRowElem('test')"); // check
				functionToTest.add("checkWV()");
				functionToTest.add("doReply('test')");
				functionToTest.add("ss_next()");
				functionToTest.add("ss_prev()");
				functionToTest.add("ss_update()");
				functionToTest.add("ss_playpause()"); 
				functionToTest.add("ss_toggleSmaller()");
				functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings
				functionToTest.add("ss_slideshow()");
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
				functionToTest.add("ss_run()");  // Confix can't generate fixture due to dependency of local variable settings
				functionToTest.add("ss_slideshow()");
			}
		}if(jsNameToTest.equals("help.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				functionToTest.add("HideHelp()");
				functionToTest.add("dgp('id')");
				functionToTest.add("ShowHelp('test', null, 'it')");
				functionToTest.add("ShowHelp('test', null, 'test')"); // more combinations
				functionToTest.add("ShowHelp('test', 'test', 'test')");
				functionToTest.add("SwitchSelectIE()");
				functionToTest.add("GetItHelpMsg('test')");
			}else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
				functionToTest.add("HideHelp()");
				functionToTest.add("dgp('id')");
				functionToTest.add("ShowHelp('test', 'test', 'test')");
				functionToTest.add("SwitchSelectIE()");
				functionToTest.add("GetItHelpMsg('test')");
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
				functionToTest.add("HideHelp()");
				functionToTest.add("dgp()");
				functionToTest.add("ShowHelp()");
				functionToTest.add("SwitchSelectIE()");
				functionToTest.add("GetItHelpMsg()");
			}

		}if(jsNameToTest.equals("addPhoto.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				functionToTest.add("setExif('test')");
				functionToTest.add("AjaxVal[0] = '!test'; setExif('test')");
				functionToTest.add("AjaxVal[0] = 'test;'; setExif('test')");
				functionToTest.add("AjaxVal[0] = null; setExif('test')");
				
				functionToTest.add("imageUploaded(false, 'test')");
				functionToTest.add("imageUploaded(true, 'test')");
				functionToTest.add("hasgd = false; imageUploaded(true, 'test')");
				
				functionToTest.add("AjaxVal[0] = ''; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = ''; writeYet('test', true)");

				functionToTest.add("AjaxVal[0] = 'ERRORtest'; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'ERRORtest'; writeYet('test', true)");
				functionToTest.add("AjaxVal[0] = 'DELEDtest'; writeYet('test', true)");
				functionToTest.add("AjaxVal[0] = 'DELEDtest'; writeYet('test', true)");

				functionToTest.add("AjaxVal[0] = 'EMPTYtest'; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'EMPTYtest'; writeYet('test', true)");
				functionToTest.add("AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', true)");
				

				functionToTest.add("AjaxVal[0] = 'STARTtest'; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'STARTtest'; writeYet('test', true)");
				functionToTest.add("AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', true)");

				functionToTest.add("AjaxVal[0] = 'THUMBtest'; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'THUMBtest'; writeYet('test', true)");

				functionToTest.add("AjaxVal[0] = 'UNZIPtest'; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'UNZIPtest'; writeYet('test', true)");
				
				functionToTest.add("AjaxVal[0] = 'ENDEDtest'; writeYet('test', false)");
				functionToTest.add("AjaxVal[0] = 'ENDEDtest'; writeYet('test', true)");

				functionToTest.add("uploadSubmitted('test', 'test', false, 'test') ");
				functionToTest.add("uploadSubmitted('test', 'test', true, 'test') ");
				functionToTest.add("rethumb_fill('test')");
				functionToTest.add("rethumb()");
			}else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
				functionToTest.add("setExif('test')");
				functionToTest.add("imageUploaded('test', 'test')");
				functionToTest.add("writeYet('test', 'test')");
				functionToTest.add("uploadSubmitted('a', 'a', 'a', '') ");
				functionToTest.add("rethumb_fill('test')");
				functionToTest.add("rethumb()");
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
				functionToTest.add("setExif()");
				functionToTest.add("imageUploaded()");
				functionToTest.add("writeYet()");
				functionToTest.add("uploadSubmitted() ");
				functionToTest.add("rethumb_fill()");
				functionToTest.add("rethumb()");
			}
		}if(jsNameToTest.equals("admin.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
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
				functionToTest.add("confirmDelete('test')");
				functionToTest.add("ConfirmDelPhotoID('test')");
				functionToTest.add("ConfirmDelPhoto()");
				functionToTest.add("ConfirmRestore()");
				functionToTest.add("ConfirmSave()");
				functionToTest.add("showlinkline('test')");
				functionToTest.add("hidelinkline('test')");
				functionToTest.add("linkAddBelow(0)");
				functionToTest.add("linkDelThis()");
				functionToTest.add("removeThisNode('test')");
				functionToTest.add("addMainColDiv()");
				functionToTest.add("updateMode()");
				functionToTest.add("fixBoldInput('test','test')");
				functionToTest.add("fixBoldInput('test')");
				functionToTest.add("changePrev()");
				functionToTest.add("ToggleAdvPref()");
				functionToTest.add("updateTimeDiffer('test')");
				functionToTest.add("CheckDateDrafts()");
				functionToTest.add("CheckActionDrafts()");
				functionToTest.add("CheckDeleteThisDrafts('test')");
				functionToTest.add("updateSelCount()");
				functionToTest.add("DraftsSelectBit('test','test1')");
				functionToTest.add("AddAddBox()");
			}else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
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
				functionToTest.add("confirmDelete('test')");
				functionToTest.add("ConfirmDelPhotoID('test')");
				functionToTest.add("ConfirmDelPhoto()");
				functionToTest.add("ConfirmRestore()");
				functionToTest.add("ConfirmSave()");
				functionToTest.add("showlinkline('test')");
				functionToTest.add("hidelinkline('test')");
				functionToTest.add("linkAddBelow(0)");
				functionToTest.add("linkDelThis()");
				functionToTest.add("removeThisNode('test')");
				functionToTest.add("addMainColDiv()");
				functionToTest.add("updateMode()");
				functionToTest.add("fixBoldInput('test','test1')");
				functionToTest.add("changePrev()");
				functionToTest.add("ToggleAdvPref()");
				functionToTest.add("updateTimeDiffer('test')");
				functionToTest.add("CheckDateDrafts()");
				functionToTest.add("CheckActionDrafts()");
				functionToTest.add("CheckDeleteThisDrafts('test')");
				functionToTest.add("updateSelCount()");
				functionToTest.add("DraftsSelectBit('test','test1')");
				functionToTest.add("AddAddBox()");
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
				functionToTest.add("PrepareBody()");
				functionToTest.add("dg()");
				functionToTest.add("hideElem()");
				functionToTest.add("showElem()");
				functionToTest.add("inlineElem()");
				functionToTest.add("tableRowElem()");
				functionToTest.add("checkChangePass()");
				functionToTest.add("checkInstallPass()");
				functionToTest.add("checkPrivacyRow()");
				functionToTest.add("checkHasPass()");
				functionToTest.add("checkDate()");
				functionToTest.add("CheckAddPhotoTime()");
				functionToTest.add("CheckAddPhoto()");
				functionToTest.add("confirmDelete()");
				functionToTest.add("ConfirmDelPhotoID()");
				functionToTest.add("ConfirmDelPhoto()");
				functionToTest.add("ConfirmRestore()");
				functionToTest.add("ConfirmSave()");
				functionToTest.add("showlinkline()");
				functionToTest.add("hidelinkline()");
				functionToTest.add("linkAddBelow()");
				functionToTest.add("linkDelThis()");
				functionToTest.add("removeThisNode()");
				functionToTest.add("addMainColDiv()");
				functionToTest.add("updateMode()");
				functionToTest.add("fixBoldInput()");
				functionToTest.add("changePrev()");
				functionToTest.add("ToggleAdvPref()");
				functionToTest.add("updateTimeDiffer()");
				functionToTest.add("CheckDateDrafts()");
				functionToTest.add("CheckActionDrafts()");
				functionToTest.add("updateSelCount()");
				functionToTest.add("DraftsSelectBit()");
				functionToTest.add("CheckDeleteThisDrafts()");
				functionToTest.add("AddAddBox()");
			}
		}if(jsNameToTest.equals("skeleton.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL){
				functionToTest.add("SaveRatio()");
				functionToTest.add("MouseDown('test','test1')");
				functionToTest.add("MouseDownTheSkeleton('test')");
				functionToTest.add("ExpandSkl()");
				functionToTest.add("MouseMoveInside('test')");
				functionToTest.add("UpdateThumbPrev()");
				//functionToTest.add("getMyXY(true,0)"); // non-DDF
				//functionToTest.add("getMyXY(true,1)"); // non-DDF
				//functionToTest.add("getMyXY(false,0)"); // non-DDF
				//functionToTest.add("getMyXY(false,1)"); // non-DDF
			}else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI){
				functionToTest.add("SaveRatio()");
				functionToTest.add("MouseDown('a','a')");
				functionToTest.add("MouseDownTheSkeleton('a')");
				functionToTest.add("ExpandSkl()");
				functionToTest.add("MouseMoveInside('test')");
				functionToTest.add("UpdateThumbPrev()");
				//functionToTest.add("getMyXY(1,0)"); // non-DDF
			}else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP){
				functionToTest.add("SaveRatio()");
				functionToTest.add("MouseDown()");
				functionToTest.add("MouseDownTheSkeleton()");
				functionToTest.add("ExpandSkl()");
				functionToTest.add("MouseMoveInside()");
				functionToTest.add("UpdateThumbPrev()");
				//functionToTest.add("getMyXY()"); // non-DDF
			}
		}


		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}


}
