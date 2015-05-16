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
	//private static String jsNameToTest = "doDuty.js";
	private static String jsNameToTest = "kines.js";
	//private static String jsNameToTest = "ecp.js";
	//private static String jsNameToTest = "extra.js";

	private static String jsPathToTest = "input/" + jsFolderNameToTest + "/" + jsNameToTest;
	private static String testSuitePathToGenerate = "output/" + jsFolderNameToTest + "_QUnits";
	private static String testSuiteFileToGenerate = testGenerationMethod + "_QUnit_" + jsNameToTest;

	// provide input values for a DOM dependent function 
	private static ArrayList<String> functionToTest = new ArrayList<String>();

	public static void main(String[] args) throws Exception {

		long startTime = System.currentTimeMillis();

		if(jsNameToTest.equals("doDuty.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL)
				doDutyManual();
			else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI)
				doDutyJalangi();
			else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP)
				doDutyNoInp();
		}else if(jsNameToTest.equals("ecp.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL)
				ecpManual();
			else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI)
				ecpJalangi();
			else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP)
				ecpNoInp();
		}else if(jsNameToTest.equals("kines.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL)
				kinesManual();
			else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI)
				kinesJalangi();
			else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP)
				kinesNoInp();
		}else if(jsNameToTest.equals("extra.js")){
			if (testGenerationMethod == Method.MANUAL || testGenerationMethod == Method.CONFIX_MANUAL)
				extraManual();
			else if (testGenerationMethod == Method.JALANGI || testGenerationMethod == Method.CONFIX_JALANGI)
				extraJalangi();
			else if (testGenerationMethod == Method.NOINP || testGenerationMethod == Method.CONFIX_NOINP)
				extraNoInp();
		}

		ConcolicEngine ce = new ConcolicEngine(jsPathToTest, jsNameToTest, functionToTest, testSuitePathToGenerate, testSuiteFileToGenerate, testGenerationMethod);
		ce.run();

		long endTime = System.currentTimeMillis();
		System.out.println("The concolic execution took " + (endTime - startTime)/1000 + " seconds");		
	}


	private static void extraNoInp() {
		functionToTest.add("showDarkMoon()");
		functionToTest.add("hideDarkMoon()");
		functionToTest.add("isDivVisible()");
		functionToTest.add("HideAll()");
		functionToTest.add("preloadImgs()");
		functionToTest.add("hhh()");
		functionToTest.add("fixIEFields()");
		functionToTest.add("fixitnow()");
		functionToTest.add("alertPathedHide()");
		functionToTest.add("SelRadio()");
		functionToTest.add("SwitchFloat()");
		functionToTest.add("ToggleTextVal()");
		functionToTest.add("ToggleText()");
		functionToTest.add("SetHeaderImage()");
		functionToTest.add("ToggleObjectDisplay()");
		functionToTest.add("SwitchDisplay()");
		functionToTest.add("ToggleDisplay()");
		functionToTest.add("disableEditLink()");
		functionToTest.add("enableEditLink()");
		functionToTest.add("TogglePsychoeds()");
		functionToTest.add("ToggleEnhanceds()");
		functionToTest.add("PushImgBut()");
		functionToTest.add("IPickColor()");
		functionToTest.add("writeCurrentTime()");
		functionToTest.add("SwitchSelectIE()");
		functionToTest.add("HideCP()");
		functionToTest.add("ShowCP()");
		functionToTest.add("ShowPsycHokinesis()");
		functionToTest.add("HidePsycHokinesis()");
		functionToTest.add("ShowPsycHodrama()");
		functionToTest.add("HidePsycHokinesis()");
		functionToTest.add("HidePsycHodrama()");
		functionToTest.add("UpdateAddImageNow()");
		functionToTest.add("ShowAddImage()");
		functionToTest.add("HideAddImage()");
		functionToTest.add("HideHelp()");
		functionToTest.add("ShowHelp()");
		functionToTest.add("ChangeByInput()");
		functionToTest.add("ChangeHeaderDirection()");
		functionToTest.add("ResetPsycHodrama()");
		functionToTest.add("deBugify()");
		functionToTest.add("TakeEffectAll()");
		functionToTest.add("isBoxVisible()");
		functionToTest.add("isLinkVisible()");
		functionToTest.add("ReadPsycHodrama()");
		functionToTest.add("WritePsycHodrama()");
		functionToTest.add("SwitchLinkTR()");
		functionToTest.add("SetValAndDo()");
		functionToTest.add("InsertLinkToBox()");
		functionToTest.add("ShowEditPartBox()");
		functionToTest.add("HideEditPartBox()");
		functionToTest.add("CopyLink()");
		functionToTest.add("CopyBox()");
		functionToTest.add("BoxLength()");
		functionToTest.add("BoxLengthByFor()");
		functionToTest.add("LinkLengthOnBox()");
		functionToTest.add("LinkLengthOnBoxByFor()");
		functionToTest.add("ClearBox()");
		functionToTest.add("AddTitleToBox()");
	}

	private static void extraJalangi() {
		// TODO Auto-generated method stub

	}

	private static void extraManual() {
		functionToTest.add("showDarkMoon(10)");
		functionToTest.add("hideDarkMoon()");
		functionToTest.add("isDivVisible('id')");
		functionToTest.add("HideAll(true)");
		functionToTest.add("HideAll(false)");
		functionToTest.add("preloadImgs()");
		functionToTest.add("hhh('id')");
		functionToTest.add("fixIEFields()");
		functionToTest.add("fixitnow('test','test')");
		functionToTest.add("alertPathedHide()");
		functionToTest.add("SelRadio('id',true)");
		functionToTest.add("SelRadio('id',false)");
		functionToTest.add("SwitchFloat('id',0,false,false)");
		functionToTest.add("SwitchFloat('id',0,false,true)");
		functionToTest.add("SwitchFloat('id',0,true,false)");
		functionToTest.add("SwitchFloat('id',0,true,true)");

		functionToTest.add("ToggleTextVal('value')");
		functionToTest.add("ToggleTextVal('borderBottomColor')");
		functionToTest.add("ToggleTextVal('marginTop')");
		functionToTest.add("ToggleTextVal('position')");
		functionToTest.add("ToggleTextVal('top')");

		functionToTest.add("ToggleText('id',0,true)");
		functionToTest.add("ToggleText('id',0,false)");

		functionToTest.add("SetHeaderImage('id')");

		functionToTest.add("ToggleObjectDisplay('id','test')");
		functionToTest.add("ToggleObjectDisplay('id')");

		functionToTest.add("SwitchDisplay('id','test','test')");
		functionToTest.add("SwitchDisplay('id')");

		functionToTest.add("ToggleDisplay('id','test','test','test')");


		functionToTest.add("disableEditLink('left', 'test', 0, 'test')");
		functionToTest.add("enableEditLink('left', 'test', 0)");

		functionToTest.add("TogglePsychoeds()");

		functionToTest.add("ToggleEnhanceds()");

		functionToTest.add("PushImgBut('id')");

		functionToTest.add("IPickColor('#test','backgroundColor','__DefaultDiv_0')");
		functionToTest.add("IPickColor('#test','backgroundColor','__Title_0')");
		functionToTest.add("IPickColor('#test','backgroundColor','__DefaultDiv_0')");
		functionToTest.add("IPickColor('#test','backgroundColor','__PartSepSemiDiv_1')");
		functionToTest.add("IPickColor('#test','backgroundColor','RSideColorCSS_Hover')");
		functionToTest.add("IPickColor('#test','backgroundColor','LSideColorCSS_Hover')");
		functionToTest.add("IPickColor('#test','backgroundColor','WholeColorCSS_Link')");
		functionToTest.add("IPickColor('#test','backgroundColor','WholeColorCSS_Hover')");
		functionToTest.add("IPickColor('#test','backgroundColor','WholeColorCSS_Visit')");
		functionToTest.add("IPickColor('#test','backgroundColor','SideRColumnInner')");
		functionToTest.add("IPickColor('#test','backgroundColor','body')");


		functionToTest.add("writeCurrentTime('test')");
		functionToTest.add("SwitchSelectIE('id')");
		functionToTest.add("ShowCP('test', 'test', 'test', 'test')");
		functionToTest.add("ShowPsycHokinesis('test')");
		functionToTest.add("HidePsycHokinesis()");
		functionToTest.add("ShowPsycHodrama('test')");
		functionToTest.add("HidePsycHokinesis()");
		functionToTest.add("HidePsycHodrama()");
		functionToTest.add("UpdateAddImageNow()");
		functionToTest.add("ShowAddImage('left', 'test', 0, 'test')");
		functionToTest.add("HideAddImage()");
		functionToTest.add("HideHelp()");
		functionToTest.add("ShowHelp('test','test')");
		functionToTest.add("ChangeByInput('id', 'innerHTML', 'id')");
		functionToTest.add("ChangeByInput('id', 'backgroundImage', 'id')");
		functionToTest.add("ChangeByInput('id', 'fontFamily', 'id')");
		functionToTest.add("ChangeByInput('id', 'fontSize', 'id')");
		functionToTest.add("ChangeByInput('id', 'fontWeight', 'id')");
		functionToTest.add("ChangeByInput('id', 'fontStyle', 'id')");
		functionToTest.add("ChangeByInput('id', 'textDecoration', 'id')");
		functionToTest.add("ChangeByInput('id', 'direction', 'id')");
		functionToTest.add("ChangeByInput('id', 'textAlign', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderStyle', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderWidth', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderBottomWidth', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderBottomStyle', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderRightStyle', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderBottomColor', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderRightColor', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderLeftColor', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderTopWidth', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderColor', 'id')");
		functionToTest.add("ChangeByInput('id', '   borderLeftColor   ', 'id')");
		functionToTest.add("ChangeByInput('id', 'borderColor', 'id')");
		functionToTest.add("ChangeByInput('id', 'backgroundColor', 'id')");
		functionToTest.add("ChangeByInput('id', 'color', 'id')");
		functionToTest.add("ChangeByInput('id', 'visibility', 'id')");
		functionToTest.add("ChangeByInput('id', 'paddingLeft', 'id')");
		functionToTest.add("ChangeByInput('id', 'paddingRight', 'id')");
		functionToTest.add("ChangeByInput('id', 'paddingTop', 'id')");
		functionToTest.add("ChangeByInput('id', 'paddingBottom', 'id')");
		functionToTest.add("ChangeByInput('id', 'marginLeft', 'id')");
		functionToTest.add("ChangeByInput('id', 'marginRight', 'id')");
		functionToTest.add("ChangeByInput('id', 'marginTop', 'id')");
		functionToTest.add("ChangeByInput('id', 'marginBottom', 'id')");
		functionToTest.add("ChangeByInput('id', 'backgroundRepeat', 'id')");
		functionToTest.add("ChangeByInput('id', 'backgroundAttachment', 'id')");
		functionToTest.add("ChangeByInput('id', 'backgroundPosition', 'id')");
		functionToTest.add("ChangeByInput('id', 'width', 'id')");
		functionToTest.add("ChangeByInput('id', 'top', 'id')");
		functionToTest.add("ChangeByInput('id', 'left', 'id')");
		functionToTest.add("ChangeByInput('id', 'lineHeight', 'id')");
		functionToTest.add("ChangeByInput('id', 'height', 'id')");

		functionToTest.add("ChangeHeaderDirection('test', 'rtl')");
		functionToTest.add("ResetPsycHodrama()");
		functionToTest.add("deBugify('test')");
		functionToTest.add("TakeEffectAll('test')");
		functionToTest.add("isBoxVisible('left', 'test')");
		functionToTest.add("isLinkVisible('left', 'test', 0)");
		functionToTest.add("ReadPsycHodrama('test')");
		functionToTest.add("WritePsycHodrama()");
		functionToTest.add("SwitchLinkTR('left', 'test', 0, 'test')");
		functionToTest.add("SetValAndDo('id', 'test', true)");
		functionToTest.add("SetValAndDo('id', 'test', false)");
		functionToTest.add("InsertLinkToBox(side, part, num, txt, url, ttl, swc)");
		functionToTest.add("ShowEditPartBox('test', 0, 'R')");
		functionToTest.add("ShowEditPartBox('test', 0, 'L')");
		functionToTest.add("HideEditPartBox()");
		functionToTest.add("CopyLink('side1', 'part1', 0, 'side2', 'part2', 0)");
		functionToTest.add("CopyBox(side, 'src', 'dst')");
		
		functionToTest.add("BoxLength('left')");
		functionToTest.add("BoxLengthByFor('left')");
		functionToTest.add("BoxLength(side)");
		functionToTest.add("BoxLengthByFor(side)");

		functionToTest.add("LinkLengthOnBox(side, part)");
		functionToTest.add("LinkLengthOnBoxByFor(side, part)");
		functionToTest.add("ClearBox(side, part)");
		functionToTest.add("AddTitleToBox(side, part, str)");
	}

	private static void kinesNoInp() {
		functionToTest.add("dgv()");
		functionToTest.add("dgChecked()");
		functionToTest.add("dgSelected()");
		functionToTest.add("k_getDir()");
		functionToTest.add("k_getAlign()");
		functionToTest.add("k_getAlignSide()");
		functionToTest.add("k_getFFamily()");
		functionToTest.add("k_getFontSize()");
		functionToTest.add("k_getLineHeight()");
		functionToTest.add("k_getColor()");
		functionToTest.add("k_getFontEffects()");
		functionToTest.add("k_border()");
		functionToTest.add("k_tripleBg()");
		functionToTest.add("k_tripleBgSide()");
		functionToTest.add("k_sideFeatures()");
		functionToTest.add("k__prov_blogger_date()");
		functionToTest.add("kines_alert()");
		functionToTest.add("k_prov_blogdescription()");
		functionToTest.add("k_prov_categoryId()");
		functionToTest.add("k__MainRepeating()");
		functionToTest.add("k__MainColVal()");
		functionToTest.add("k__specialdest_archive()");
		functionToTest.add("k__specialdest_rss()");
		functionToTest.add("k__specialdest_custom()");
		functionToTest.add("k__special_archive()");
		functionToTest.add("k__special_recent()");
		functionToTest.add("k__special_profile()");
		functionToTest.add("k__special_links()");
		functionToTest.add("k__special_categlist()");
		functionToTest.add("k__special_linkdump()");
		functionToTest.add("k__special_authors()");
		functionToTest.add("k__SideBox()");
		functionToTest.add("k__ColVal()");
		functionToTest.add("kinesIt()");
	}

	private static void kinesJalangi() {
		// TODO Auto-generated method stub

	}

	private static void kinesManual() {
		functionToTest.add("dgv('id')");
		functionToTest.add("dgChecked('id')");
		functionToTest.add("dgSelected('id')");
		functionToTest.add("k_getDir('id')");
		functionToTest.add("k_getAlign('id')");
		functionToTest.add("k_getAlignSide('id')");
		functionToTest.add("k_getFFamily('id')");
		functionToTest.add("k_getFontSize('id')");
		functionToTest.add("k_getLineHeight('id')");
		functionToTest.add("k_getColor('id')");
		functionToTest.add("k_getFontEffects('id')");
		functionToTest.add("k_border('id')");
		functionToTest.add("k_tripleBg('id')");
		functionToTest.add("k_tripleBgSide('id')");
		functionToTest.add("k_sideFeatures('left')");
		functionToTest.add("k__prov_blogger_date()");
		functionToTest.add("kines_alert('test')");
		functionToTest.add("global_canKinesAlert = false; kines_alert('test')");
		functionToTest.add("k_prov_blogdescription()");
		functionToTest.add("global_prov = 'blogfa'; k_prov_blogdescription()");
		functionToTest.add("global_prov = 'other'; k_prov_blogdescription()");
		functionToTest.add("global_prov = 'other'; global_lang = 'fa'; k_prov_blogdescription()");
		functionToTest.add("k_prov_categoryId()");
		functionToTest.add("global_lang = 'fa'; k_prov_categoryId()");
		functionToTest.add("global_prov = 'blogfa'; k_prov_categoryId()");
		functionToTest.add("k__MainRepeating()");
		functionToTest.add("k__MainColVal('id')");
		functionToTest.add("k__specialdest_archive()");
		functionToTest.add("global_lang = 'fa'; k__specialdest_archive()");
		functionToTest.add("global_prov = 'blogfa'; k__specialdest_archive()");
		functionToTest.add("global_prov = 'persianblog'; k__specialdest_archive()");
		functionToTest.add("k__specialdest_rss()");
		functionToTest.add("global_prov = ''; k__specialdest_rss()");
		functionToTest.add("global_prov = ''; global_lang = 'fa'; k__specialdest_rss()");
		functionToTest.add("global_prov = 'blogfa'; k__specialdest_rss()");
		functionToTest.add("k__specialdest_custom()");
		functionToTest.add("global_lang = 'fa'; k__specialdest_custom()");
		functionToTest.add("global_prov = 'blogfa'; k__specialdest_custom()");
		functionToTest.add("k__special_archive('test','test')");
		functionToTest.add("global_prov = 'blogfa'; k__special_archive('test','test')");
		functionToTest.add("k__special_recent('test','test')");
		functionToTest.add("global_prov = ''; k__special_recent('test','test')");
		functionToTest.add("k__special_profile('test','test')");
		functionToTest.add("global_prov = 'blogfa'; k__special_profile('test','test')");
		functionToTest.add("global_prov = ''; k__special_profile('test','test')");
		functionToTest.add("k__special_links('test','test')");
		functionToTest.add("global_prov = 'blogfa'; k__special_links('test','test')");
		functionToTest.add("global_prov = 'persianblog'; k__special_links('test','test')");
		functionToTest.add("k__special_categlist('test','test')");
		functionToTest.add("global_prov = 'blogfa'; k__special_categlist('test','test')");
		functionToTest.add("global_prov = ''; k__special_categlist('test','test')");
		functionToTest.add("k__special_linkdump('test','test')");
		functionToTest.add("global_prov = 'blogfa';  k__special_linkdump('test','test')");
		functionToTest.add("k__special_authors()");
		functionToTest.add("global_prov = 'blogfa';  k__special_authors()");
		functionToTest.add("k__SideBox('left','test')");
		functionToTest.add("k__ColVal('left')");
		functionToTest.add("kinesIt()");
		functionToTest.add("global_prov = 'blogfa'; kinesIt()");
	}

	private static void ecpNoInp() {
		functionToTest.add("deMoronize()");
		functionToTest.add("pickColor()");
		functionToTest.add("AnalyseColor()");
		functionToTest.add("hoverColor()");
		functionToTest.add("setECPCell()");
		functionToTest.add("getValFromInput()");
		functionToTest.add("resetByHSV()");
		functionToTest.add("resetByRGB()");
		functionToTest.add("resetByRGBS()");
		functionToTest.add("ECP_incdec()");
	}

	private static void ecpJalangi() {
		functionToTest.add("deMoronize()");
		functionToTest.add("pickColor()");
		functionToTest.add("AnalyseColor('test','test')");
		functionToTest.add("hoverColor()");
		functionToTest.add("setECPCell('test', 'test', 'test')");
		functionToTest.add("getValFromInput('test', 'test')");
		functionToTest.add("resetByHSV()");
		functionToTest.add("resetByRGB()");
		functionToTest.add("ECP_incdec('test', 'test', 'test')");
	}

	private static void ecpManual() {
		functionToTest.add("deMoronize()");
		functionToTest.add("pickColor()");
		functionToTest.add("AnalyseColor('000000',true)");
		functionToTest.add("AnalyseColor('000000',false)");
		functionToTest.add("AnalyseColor('191500',true)");
		functionToTest.add("AnalyseColor('191919',true)");
		functionToTest.add("AnalyseColor('EEFFE5',true)");
		functionToTest.add("AnalyseColor('E5F6FF',true)");
		functionToTest.add("AnalyseColor('E9E5FF',true)");
		functionToTest.add("AnalyseColor('FFE5E9',true)");
		functionToTest.add("hoverColor()");
		functionToTest.add("setECPCell('1', true, '')");
		functionToTest.add("setECPCell('1', false, '')");
		functionToTest.add("getValFromInput('id', 0)");
		functionToTest.add("resetByHSV()");
		functionToTest.add("resetByRGB()");
		functionToTest.add("resetByRGBS('#FFFFFF')");
		functionToTest.add("s = document.createElement('div'); s.id = '12345671234567'; document.body.appendChild(s); resetByRGBS(s)");
		functionToTest.add("ECP_incdec('H', 0, 1)");
		functionToTest.add("ECP_incdec('S', 0)");
		functionToTest.add("ECP_incdec('V', 0)");
	}

	private static void doDutyJalangi() {
		// TODO Auto-generated method stub
	}

	private static void doDutyNoInp() {
		functionToTest.add("foundSide()");
		functionToTest.add("foundDuty()");
		functionToTest.add("doDuty()");
		functionToTest.add("doIncDec()");
	}

	private static void doDutyManual() {
		functionToTest.add("foundSide('test_DefaultDivBackBackEr', 'test')");
		functionToTest.add("foundSide('test_DefaultDivBackIsColorEr', 'test')");
		functionToTest.add("foundSide('test_DefaultDivBackIsTextureEr', 'test')");  
		functionToTest.add("foundSide('test_DefaultDivBackIsImageEr', 'test')");  
		functionToTest.add("foundSide('test_DefaultDivBackColorEr', 'test')");  
		functionToTest.add("foundSide('test_DefaultDivBackColorErA', 'test')");  
		functionToTest.add("foundSide('test_DefaultDivBackTextureEr', 'test')");
		functionToTest.add("foundSide('test_DefaultDivBackImageEr', 'test')");
		functionToTest.add("foundSide('test_DefaultBorderStyleEr', 'test')");
		functionToTest.add("foundSide('test_DefaultBorderWidthEr', 'test')");
		functionToTest.add("foundSide('test_DefaultBorderColorEr', 'test')");
		functionToTest.add("foundSide('test_DefaultBorderColorErA', 'test')");
		functionToTest.add("foundSide('test_SepBorderStyleEr', 'test')");  
		functionToTest.add("foundSide('test_SepBorderWidthEr', 'test')");  
		functionToTest.add("foundSide('test_SepBorderColorEr', 'test')");  
		functionToTest.add("foundSide('test_SepBorderColorErA', 'test')");
		functionToTest.add("foundSide('test_PartSepDivBackBackEr', 'test')");  
		functionToTest.add("foundSide('test_PartSepDivBackIsColorEr', 'test')");  
		functionToTest.add("foundSide('test_PartSepDivBackIsTextureEr', 'test')");
		functionToTest.add("foundSide('test_PartSepDivBackIsImageEr', 'test')");
		functionToTest.add("foundSide('test_PartSepDivBackColorEr', 'test')");
		functionToTest.add("foundSide('test_PartSepDivBackColorErA', 'test')");
		functionToTest.add("foundSide('test_PartSepDivBackTextureEr', 'test')");
		functionToTest.add("foundSide('test_PartSepDivBackImageEr', 'test')");
		functionToTest.add("foundSide('test_PartSepHeight', 'test')");  
		functionToTest.add("foundSide('test_PartSepHeightInc', 'test')");
		functionToTest.add("foundSide('test_PartSepHeightDec', 'test')");
		functionToTest.add("foundSide('test_PartDivLineHeightEr', 'test')");
		functionToTest.add("foundSide('test_TitleColorEr', 'test')");
		functionToTest.add("foundSide('test_TitleColorErA', 'test')");
		functionToTest.add("foundSide('test_DefaultDivColorEr', 'test')");
		functionToTest.add("foundSide('test_DefaultDivColorErA', 'test')");
		functionToTest.add("foundSide('test_TitleUnderlineEr', 'test')");
		functionToTest.add("foundSide('test_TitleUnderlineErA', 'test')");
		functionToTest.add("foundSide('test_LinkColorEr', 'test')");
		functionToTest.add("foundSide('test_LinkColorErA', 'test')");
		functionToTest.add("foundSide('test_LinkHoverEr', 'test')");
		functionToTest.add("foundSide('test_LinkHoverErA', 'test')");
		functionToTest.add("foundSide('test_RemoveThisBox', 'test')");
		functionToTest.add("foundSide('test_AddOneBox', 'test')");
		functionToTest.add("foundSide('test_EditThisPart', 'test')");
		functionToTest.add("foundSide('test_TitleTxt', 'test')");
		functionToTest.add("foundSide('test_PreSurr', 'test')");
		functionToTest.add("foundSide('test_PstSurr', 'test')");
		functionToTest.add("foundSide('test_LinkTxt', 'test')");  
		functionToTest.add("foundSide('test_LinkUrl', 'test')");
		functionToTest.add("foundSide('test_LinkTtl', 'test')");
		functionToTest.add("foundSide('test_RemLink', 'test')");
		functionToTest.add("foundSide('test_InsLink', 'test')");
		functionToTest.add("foundSide('test_addImg', 'test')");
		
		functionToTest.add("foundSide('test_boxNumForce', 'test')");
		functionToTest.add("foundSide('test_linkNumForce', 'test')");
		functionToTest.add("foundSide('', '')");
		functionToTest.add("foundSide('')");

		functionToTest.add("foundDuty('','')");
		functionToTest.add("foundDuty('HeaderPartText','')");
		functionToTest.add("foundDuty('FontBoldEr','')");
		functionToTest.add("foundDuty('AlignErLeft','')");
		functionToTest.add("foundDuty('','')");

		functionToTest.add("doDuty('PsycHodramaSaver','')");
		functionToTest.add("doDuty('ResetPsycHodramaEr','')");
		functionToTest.add("doDuty('PsycHodramaSaver','')");
		functionToTest.add("doDuty('PsycHodramaSHer','')");
		functionToTest.add("doDuty('PsycHodramaGetButton','')");
		functionToTest.add("doDuty('PsycHodramaLoadButton','')");
		functionToTest.add("doDuty('PsycHodramaResetButton','')");
		functionToTest.add("doDuty('PsycHodramaDefaultButton','')");
		functionToTest.add("doDuty('PsycHokinesisShower','')");
		functionToTest.add("doDuty('PsycHokinesisGetButton','')");
		functionToTest.add("doDuty('WholePageTitle','')");
		functionToTest.add("doDuty('WholeProvider','')");
		functionToTest.add("doDuty('WholeURL','')");
		functionToTest.add("doDuty('WholeDescription','')");
		functionToTest.add("doDuty('WholeKeywords','')");
		functionToTest.add("doDuty('WholeAuthor','')");
		functionToTest.add("doDuty('WholeEmail','')");
		functionToTest.add("doDuty('WholeDefaultTargetSelf','')");
		functionToTest.add("doDuty('WholeDefaultTargetNew','')");
		functionToTest.add("doDuty('SHBasics','')");
		functionToTest.add("doDuty('WholeWidthUnitErPixels','')");
		functionToTest.add("doDuty('WholeWidthUnitErPercent','')");
		functionToTest.add("doDuty('WholeWidthValueErPixels','')");
		functionToTest.add("doDuty('WholeWidthValueErPercent','')");
		functionToTest.add("doDuty('ChangeViewSimpleEnhanced','')");
		functionToTest.add("doDuty('HideAllPsychoed','')");
		functionToTest.add("doDuty('WholeBackColorEr','')");
		functionToTest.add("doDuty('WholeBackColorErA','')");
		functionToTest.add("doDuty('AgreeTOSForPsycHokinesis','')");
		functionToTest.add("doDuty('PsycHokinesisPreviewButton','')");
		functionToTest.add("doDuty('WholeBackHasImage','')");
		functionToTest.add("doDuty('WholeBackTextureEr','')");
		functionToTest.add("doDuty('WholeBackPosition','')");
		functionToTest.add("doDuty('WholeBackRepeat','')");
		functionToTest.add("doDuty('WholeBackAttachment','')");
		functionToTest.add("doDuty('ColorPickerScrollIntoEr','')");
		functionToTest.add("doDuty('ColorPickerByHueEr','')");
		functionToTest.add("doDuty('ColorPickerByNamEr','')");
		functionToTest.add("doDuty('ColorPickerMakerEr','')");
		functionToTest.add("doDuty('ColorPickerMoveUp','')");
		functionToTest.add("doDuty('ColorPickerMoveDown','')");
		functionToTest.add("doDuty('SHTitle','')");
		functionToTest.add("doDuty('HeaderBackIsColorEr','')");
		functionToTest.add("doDuty('HeaderBackIsTextureEr','')");
		functionToTest.add("doDuty('HeaderBackIsImageEr','')");
		functionToTest.add("doDuty('HeaderBackColorEr','')");
		functionToTest.add("doDuty('HeaderBackColorErA','')");
		functionToTest.add("doDuty('HeaderBackTextureEr','')");
		functionToTest.add("doDuty('HeaderBackImageEr','')");
		functionToTest.add("doDuty('TitleTextTextEr','')");
		functionToTest.add("doDuty('SubTitleTextTextEr','')");
		functionToTest.add("doDuty('HeaderDirectionIsLTREr','')");
		functionToTest.add("doDuty('HeaderDirectionIsRTLEr','')");
		functionToTest.add("doDuty('TitleColorEr','')");
		functionToTest.add("doDuty('TitleColorErA','')");
		functionToTest.add("doDuty('SubTitleColorEr','')");
		functionToTest.add("doDuty('SubTitleColorErA','')");
		functionToTest.add("doDuty('HeaderBorderStyleEr','')");
		functionToTest.add("doDuty('HeaderBorderWidthEr','')");
		functionToTest.add("doDuty('HeaderBorderColorEr','')");
		functionToTest.add("doDuty('HeaderBorderColorErA','')");
		functionToTest.add("doDuty('HeaderTopMarginEr','')");
		functionToTest.add("doDuty('HeaderHorPaddingEr','')");
		functionToTest.add("doDuty('HeaderVerPaddingEr','')");
		functionToTest.add("doDuty('HeaderLineSpacingEr','')");
		functionToTest.add("doDuty('SHCols','')");
		functionToTest.add("doDuty('ColsNumberIsOne','')");
		functionToTest.add("doDuty('ColsNumberIsTwoL','')");
		functionToTest.add("doDuty('ColsNumberIsTwoR','')");
		functionToTest.add("doDuty('ColsNumberIsThree','')");
		functionToTest.add("doDuty('MainColWidthView','')");
		functionToTest.add("doDuty('MainColWidthInc','')");
		functionToTest.add("doDuty('MainColWidthDec','')");
		functionToTest.add("doDuty('MainSpcPaddingView','')");
		functionToTest.add("doDuty('MainSpcPaddingInc','')");
		functionToTest.add("doDuty('MainSpcPaddingDec','')");
		functionToTest.add("doDuty('MainColumnsBorderStyleEr','')");
		functionToTest.add("doDuty('MainColumnsBorderWidthEr','')");
		functionToTest.add("doDuty('MainColumnsBorderColorEr','')");
		functionToTest.add("doDuty('MainColumnsBorderColorErA','')");
		functionToTest.add("doDuty('MainColumnsBackIsColorEr','')");
		functionToTest.add("doDuty('MainColumnsBackIsTextureEr','')");
		functionToTest.add("doDuty('MainColumnsBackIsImageEr','')");
		functionToTest.add("doDuty('MainColumnsBackColorEr','')");
		functionToTest.add("doDuty('MainColumnsBackColorErA','')");
		functionToTest.add("doDuty('MainColumnsBackTextureEr','')");
		functionToTest.add("doDuty('MainColumnsBackImageEr','')");
		functionToTest.add("doDuty('SideSpcWidthView','')");
		functionToTest.add("doDuty('SideSpcWidthInc','')");
		functionToTest.add("doDuty('SideSpcWidthDec','')");
		functionToTest.add("doDuty('SideSpcPaddingView','')");
		functionToTest.add("doDuty('SideSpcPaddingInc','')");
		functionToTest.add("doDuty('SideSpcPaddingDec','')");
		functionToTest.add("doDuty('SideColumnsBorderStyleEr','')");
		functionToTest.add("doDuty('SideColumnsBorderWidthEr','')");
		functionToTest.add("doDuty('SideColumnsBorderColorEr','')");
		functionToTest.add("doDuty('SideColumnsBorderColorErA','')");
		functionToTest.add("doDuty('SideColumnsBackIsColorEr','')");
		functionToTest.add("doDuty('SideColumnsBackIsTextureEr','')");
		functionToTest.add("doDuty('SideColumnsBackIsImageEr','')");
		functionToTest.add("doDuty('SideColumnsBackColorEr','')");
		functionToTest.add("doDuty('SideColumnsBackColorErA','')");
		functionToTest.add("doDuty('SideColumnsBackTextureEr','')");
		functionToTest.add("doDuty('SideColumnsBackImageEr','')");
		functionToTest.add("doDuty('SHPosts','')");
		functionToTest.add("doDuty('SHPostsT','')");
		functionToTest.add("doDuty('SHSideR','')");
		functionToTest.add("doDuty('SHSideRT','')");
		functionToTest.add("doDuty('SHSideL','')");
		functionToTest.add("doDuty('SHSideLT','')");
		functionToTest.add("doDuty('OnePostBorderStyleEr','')");
		functionToTest.add("doDuty('OnePostBorderWidthEr','')");
		functionToTest.add("doDuty('OnePostBorderColorEr','')");
		functionToTest.add("doDuty('OnePostBorderColorErA','')");
		functionToTest.add("doDuty('VerPostBorderStyleEr','')");
		functionToTest.add("doDuty('VerPostBorderWidthEr','')");
		functionToTest.add("doDuty('VerPostBorderColorEr','')");
		functionToTest.add("doDuty('VerPostBorderColorErA','')");
		functionToTest.add("doDuty('PostBodyBackIsColorEr','')");
		functionToTest.add("doDuty('PostBodyBackIsTextureEr','')");
		functionToTest.add("doDuty('PostBodyBackIsImageEr','')");
		functionToTest.add("doDuty('PostBodyBackColorEr','')");
		functionToTest.add("doDuty('PostBodyBackColorErA','')");
		functionToTest.add("doDuty('PostBodyBackTextureEr','')");
		functionToTest.add("doDuty('PostBodyBackImageEr','')");
		functionToTest.add("doDuty('OnePostTopBackIsColorEr','')");
		functionToTest.add("doDuty('OnePostTopBackIsTextureEr','')");
		functionToTest.add("doDuty('OnePostTopBackIsImageEr','')");
		functionToTest.add("doDuty('OnePostTopBackColorEr','')");
		functionToTest.add("doDuty('OnePostTopBackColorErA','')");
		functionToTest.add("doDuty('OnePostTopBackTextureEr','')");
		functionToTest.add("doDuty('OnePostTopBackImageEr','')");
		functionToTest.add("doDuty('OnePostBotBackIsColorEr','')");
		functionToTest.add("doDuty('OnePostBotBackIsTextureEr','')");
		functionToTest.add("doDuty('OnePostBotBackIsImageEr','')");
		functionToTest.add("doDuty('OnePostBotBackColorEr','')");
		functionToTest.add("doDuty('OnePostBotBackColorErA','')");
		functionToTest.add("doDuty('OnePostBotBackTextureEr','')");
		functionToTest.add("doDuty('OnePostBotBackImageEr','')");
		functionToTest.add("doDuty('PostBodyVP','')");
		functionToTest.add("doDuty('PostBodyVPInc','')");
		functionToTest.add("doDuty('PostBodyVPDec','')");
		functionToTest.add("doDuty('PostHeadFootVP','')");
		functionToTest.add("doDuty('PostHeadFootVPInc','')");
		functionToTest.add("doDuty('PostHeadFootVPDec','')");
		functionToTest.add("doDuty('PostBodyHP','')");
		functionToTest.add("doDuty('PostBodyHPInc','')");
		functionToTest.add("doDuty('PostBodyHPDec','')");
		functionToTest.add("doDuty('PostHeadFootHP','')");
		functionToTest.add("doDuty('PostHeadFootHPInc','')");
		functionToTest.add("doDuty('PostHeadFootHPDec','')");
		functionToTest.add("doDuty('CellDirDirectionIsLTREr','')");
		functionToTest.add("doDuty('CellDirDirectionIsRTLEr','')");
		functionToTest.add("doDuty('DateFormatIsGregorian','')");
		functionToTest.add("doDuty('DateFormatIsHijri','')");
		functionToTest.add("doDuty('PostDateColorEr','')");
		functionToTest.add("doDuty('PostDateColorErA','')");
		functionToTest.add("doDuty('PostDateStandingIsSingle','')");
		functionToTest.add("doDuty('PostDateStandingIsAdjacent','')");
		functionToTest.add("doDuty('PostTitleColorEr','')");
		functionToTest.add("doDuty('PostTitleColorErA','')");
		functionToTest.add("doDuty('OnePostTitleDirectionIsLTREr','')");
		functionToTest.add("doDuty('OnePostTitleDirectionIsRTLEr','')");
		functionToTest.add("doDuty('PostBodyColorEr','')");
		functionToTest.add("doDuty('PostBodyColorErA','')");
		functionToTest.add("doDuty('OnePostBodyAlignIsNorm','')");
		functionToTest.add("doDuty('OnePostBodyAlignIsCenter','')");
		functionToTest.add("doDuty('OnePostBodyAlignIsJustify','')");
		functionToTest.add("doDuty('OnePostMidPartLineHeightEr','')");
		functionToTest.add("doDuty('PostCommentsColorEr','')");
		functionToTest.add("doDuty('PostCommentsColorErA','')");
		functionToTest.add("doDuty('PostCommentsHoverColorEr','')");
		functionToTest.add("doDuty('PostCommentsHoverColorErA','')");
		functionToTest.add("doDuty('PostPermLinkColorEr','')");
		functionToTest.add("doDuty('PostPermLinkColorErA','')");
		functionToTest.add("doDuty('PermLinkExp','')");
		functionToTest.add("doDuty('PostSepHeight','')");
		functionToTest.add("doDuty('PostSepHeightInc','')");
		functionToTest.add("doDuty('PostSepHeightDec','')");
		functionToTest.add("doDuty('PostSepDivBackIsColorEr','')");
		functionToTest.add("doDuty('PostSepDivBackIsTextureEr','')");
		functionToTest.add("doDuty('PostSepDivBackIsImageEr','')");
		functionToTest.add("doDuty('PostSepDivBackColorEr','')");
		functionToTest.add("doDuty('PostSepDivBackColorErA','')");
		functionToTest.add("doDuty('PostSepDivBackTextureEr','')");
		functionToTest.add("doDuty('PostSepDivBackImageEr','')");
		functionToTest.add("doDuty('CopyRightLine','')");
		functionToTest.add("doDuty('AddImageBorderStyleEr','')");
		functionToTest.add("doDuty('AddImageBorderWidthEr','')");
		functionToTest.add("doDuty('AddImageBorderColorEr','')");
		functionToTest.add("doDuty('AddImageBorderColorErA','')");
		functionToTest.add("doDuty('AddImageImageIAddress','')");
		functionToTest.add("doDuty('AddImageImageIAlt','')");
		functionToTest.add("doDuty('WholeLinkColorEr','')");
		functionToTest.add("doDuty('WholeLinkColorErA','')");
		functionToTest.add("doDuty('WholeLinkHoverEr','')");
		functionToTest.add("doDuty('WholeLinkHoverErA','')");
		functionToTest.add("doDuty('WholeLinkVisitEr','')");
		functionToTest.add("doDuty('WholeLinkVisitErA','')");

		functionToTest.add("doIncDec('id', 0, 0, 0)");
		
	}

}
