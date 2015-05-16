


test("Testing function PrepareBody() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <textarea value="" style="display:initial" id="ConfixGeneID8"/> <textarea value="" style="display:initial" id="ConfixGeneID7"/> <input value="" style="display:initial" id="ConfixGeneID6"/> <input value="" style="display:initial" id="ConfixGeneID5"/> <a value="" style="display:initial" id="ConfixGeneID4"/> <a value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="loginAdminPass"/> <div id="newpasswd" value="" style="display:initial"/> ');
	PrepareBody();
});


test("Testing function PrepareBody() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <textarea value="" style="display:initial" id="ConfixGeneID7"/> <textarea value="" style="display:initial" id="ConfixGeneID6"/> <input value="" style="display:initial" id="ConfixGeneID5"/> <input value="" style="display:initial" id="ConfixGeneID4" class="submit"/> <a value="" style="display:initial" id="ConfixGeneID3"/> <a value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="loginAdminPass"/> <div id="newpasswd" value="" style="display:initial"/> ');
	PrepareBody();
});


test("Testing function dg() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	dg();
});


test("Testing function hideElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	hideElem();
});


test("Testing function showElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	showElem();
});


test("Testing function inlineElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	inlineElem();
});


test("Testing function tableRowElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	tableRowElem();
});


test("Testing function checkChangePass() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="newpasswd1" value="" style="display:initial"/> ');
	checkChangePass();
});


test("Testing function checkChangePass() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="newpasswd2" value=""/> <input id="newpasswd1" type="text" value="ConfixGenValue" style="display:initial"/> ');
	checkChangePass();
});


test("Testing function checkChangePass() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input type="text" style="display:initial" id="newpasswd2" value="ConfixGenValue1"/> <input id="newpasswd1" type="text" value="AAA" style="display:initial"/> ');
	checkChangePass();
});


test("Testing function checkChangePass() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input type="text" style="display:initial" id="newpasswd2" value="ConfixGenValue"/> <input id="newpasswd1" type="text" value="AAA" style="display:initial"/> ');
	checkChangePass();
});


test("Testing function checkInstallPass() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="newpasswd" value="" style="display:initial"/> ');
	checkInstallPass();
});


test("Testing function checkInstallPass() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="newpasswd" type="text" value="ConfixGenValue" style="display:initial"/> ');
	checkInstallPass();
});


test("Testing function checkInstallPass() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="newpasswd" type="text" value="AAA" style="display:initial"/> ');
	checkInstallPass();
});


test("Testing function checkPrivacyRow() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="public" value="" style="display:initial"/> ');
	checkPrivacyRow();
});


test("Testing function checkPrivacyRow() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="passwordRow"/> <input id="public" type="checkbox" value="" checked="true" style="display:initial"/> ');
	checkPrivacyRow();
});


test("Testing function checkPrivacyRow() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="password"/> <input id="public" type="checkbox" value="" checked="true" style="display:initial"/> ');
	checkPrivacyRow();
});


test("Testing function checkPrivacyRow() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="passwordRow"/> <div value="" style="display:initial" id="password"/> <input id="public" type="checkbox" value="" checked="true" style="display:initial"/> ');
	checkPrivacyRow();
});


test("Testing function checkHasPass() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="name" value="" style="display:initial"/> ');
	checkHasPass();
});


test("Testing function checkHasPass() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="password" value=""/> <input id="name" type="text" value="ConfixGenValue" style="display:initial"/> ');
	checkHasPass();
});


test("Testing function checkHasPass() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="public" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="password"/> <input id="name" type="text" value="ConfixGenValue" style="display:initial"/> ');
	checkHasPass();
});


test("Testing function checkHasPass() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input value="" style="display:initial" id="public" type="checkbox" checked="true"/> <input type="text" value="" style="display:initial" id="password"/> <input id="name" type="text" value="" style="display:initial"/> ');
	checkHasPass();
});


test("Testing function checkHasPass() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <input value="" style="display:initial" id="public" type="checkbox" checked="true"/> <input type="text" style="display:initial" id="password" value="ConfixGenValue"/> <input id="name" type="text" value="" style="display:initial"/> ');
	checkHasPass();
});


test("Testing function checkDate() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="date" value="" style="display:initial"/> ');
	checkDate();
});


test("Testing function checkDate() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="date" type="text" value="ConfixGenValue" style="display:initial"/> ');
	checkDate();
});


test("Testing function checkDate() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="date" type="text" value="" style="display:initial"/> <div id="date" value="" style="display:initial"/> ');
	checkDate();
});


test("Testing function checkDate() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="date" type="text" value="" style="display:initial"/> ');
	checkDate();
});


test("Testing function CheckAddPhotoTime() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="datetake" value="" style="display:initial"/> ');
	CheckAddPhotoTime();
});


test("Testing function CheckAddPhoto() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImgPath" value="" style="display:initial"/> ');
	CheckAddPhoto();
});


test("Testing function CheckAddPhoto() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="datetake" value=""/> <input id="theImgPath" type="text" value="ConfixGenValue" style="display:initial"/> ');
	CheckAddPhoto();
});


test("Testing function confirmDelete() for path 1", function() {
	expect(0);
	confirmDelete();
});


test("Testing function ConfirmDelPhotoID() for path 1", function() {
	expect(0);
	ConfirmDelPhotoID();
});


test("Testing function ConfirmDelPhoto() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="piddel" value="" style="display:initial"/> ');
	ConfirmDelPhoto();
});


test("Testing function ConfirmRestore() for path 1", function() {
	expect(0);
	ConfirmRestore();
});


test("Testing function ConfirmSave() for path 1", function() {
	expect(0);
	ConfirmSave();
});


test("Testing function showlinkline() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="linklineundefined" value="" style="display:initial"/> ');
	showlinkline();
});


test("Testing function hidelinkline() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="linklineundefined" value="" style="display:initial"/> ');
	hidelinkline();
});


test("Testing function linkAddBelow() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="nLink" value="" style="display:initial"/> ');
	linkAddBelow();
});


test("Testing function linkAddBelow() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="allLinkLines"/> <input id="nLink" type="text" value="1" style="display:initial"/> <div id="nLink" style="display:initial" value=""/> ');
	linkAddBelow();
});


test("Testing function linkAddBelow() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="nLink" type="text" value="1" style="display:initial"/> <div style="display:initial" value="" id="allLinkLines">  <div style="display:initial" value="" id="ConfixGeneID4"/> </div> <div id="nLink" style="display:initial" value=""/> ');
	linkAddBelow();
});


test("Testing function linkAddBelow() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="ConfixGeneID7"/> <div style="display:initial" value="" id="ConfixGeneID6"/> <div style="display:initial" value="" id="allLinkLines">  <div style="display:initial" value="" id="ConfixGeneID4"> <div style="display:initial" value="" id="ConfixGeneID5"/>  </div> </div> <input id="nLink" type="text" value="1" style="display:initial"/> <div id="nLink" style="display:initial" value=""/> ');
	linkAddBelow();
});


test("Testing function linkDelThis() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="nLink" value="" style="display:initial"/> ');
	linkDelThis();
});


test("Testing function linkDelThis() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="linklineNaN"/> <input id="nLink" type="text" value="1" style="display:initial"/> <div id="nLink" style="display:initial" value=""/> ');
	linkDelThis();
});


test("Testing function linkDelThis() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="nLink" type="text" value="1" style="display:initial"/> ');
	linkDelThis();
});


test("Testing function removeThisNode() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	removeThisNode();
});


test("Testing function addMainColDiv() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="allModes" value="" style="display:initial"/> ');
	addMainColDiv();
});


test("Testing function updateMode() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="allModes" value="" style="display:initial"/> ');
	updateMode();
});


test("Testing function updateMode() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="mode"/> <div id="allModes" value="" style="display:initial"/> ');
	updateMode();
});


test("Testing function updateMode() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input style="display:initial" id="mode" type="text" value="ConfixGenValue"/> <div value="" style="display:initial" id="theme"/> <div id="allModes" value="" style="display:initial"/> ');
	updateMode();
});


test("Testing function updateMode() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input style="display:initial" type="text" value="ConfixGenValue" id="theme"/> <input style="display:initial" id="mode" type="text" value="ConfixGenValue"/> <div value="" style="display:initial" id="prevmode1"/> <div id="allModes" value="" style="display:initial"/> ');
	updateMode();
});


test("Testing function updateMode() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <input style="display:initial" type="text" value="ConfixGenValue" id="theme"/> <input style="display:initial" id="mode" type="text" value="ConfixGenValue"/> <div value="" style="display:initial" id="prevmode2"/> <div value="" style="display:initial" id="prevmode1"/> <div id="allModes" value="" style="display:initial"/> ');
	updateMode();
});


test("Testing function fixBoldInput() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="lundefinedn" value="" style="display:initial"/> ');
	fixBoldInput();
});


test("Testing function changePrev() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="mode" value="" style="display:initial"/> ');
	changePrev();
});


test("Testing function changePrev() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="theme" value=""/> <input id="mode" type="text" value="ConfixGenValue" style="display:initial"/> ');
	changePrev();
});


test("Testing function changePrev() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="prevmode1" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="theme"/> <input id="mode" type="text" value="ConfixGenValue" style="display:initial"/> ');
	changePrev();
});


test("Testing function changePrev() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="prevmode2"/> <div style="display:initial" id="prevmode1" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="theme"/> <input id="mode" type="text" value="ConfixGenValue" style="display:initial"/> ');
	changePrev();
});


test("Testing function ToggleAdvPref() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="AdvPref" value="" style="display:initial"/> ');
	ToggleAdvPref();
});


test("Testing function ToggleAdvPref() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ShowHideAdvPref"/> <div id="AdvPref" value="" style="display:initial"/> ');
	ToggleAdvPref();
});


test("Testing function updateTimeDiffer() for path 1", function() {
	expect(0);
	updateTimeDiffer();
});


test("Testing function CheckDateDrafts() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="dateadd" value="" style="display:initial"/> ');
	CheckDateDrafts();
});


test("Testing function CheckDateDrafts() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="dateadd" type="text" value="ConfixGenValue" style="display:initial"/> ');
	CheckDateDrafts();
});


test("Testing function CheckDateDrafts() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="dateadd" type="text" value="" style="display:initial"/> <div id="dateadd" value="" style="display:initial"/> ');
	CheckDateDrafts();
});


test("Testing function CheckDateDrafts() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="dateadd" type="text" value="" style="display:initial"/> ');
	CheckDateDrafts();
});


test("Testing function CheckActionDrafts() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="groupdel" value="" style="display:initial"/> ');
	CheckActionDrafts();
});


test("Testing function CheckActionDrafts() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount1"/> <input id="groupdel" type="checkbox" value="" checked="true" style="display:initial"/> ');
	CheckActionDrafts();
});


test("Testing function updateSelCount() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount1"/> <input value="" style="display:initial" id="ConfixGeneID1"/> <input id="ConfixGeneID0" value="" style="display:initial"/> ');
	updateSelCount();
});


test("Testing function updateSelCount() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount2"/> <div value="" style="display:initial" id="selCount1"/> <input value="" style="display:initial" id="ConfixGeneID1"/> <input id="ConfixGeneID0" class="checkbox" value="" style="display:initial"/> ');
	updateSelCount();
});


test("Testing function updateSelCount() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount2"/> <div value="" style="display:initial" id="selCount1"/> <input value="" style="display:initial" id="ConfixGeneID1" type="checkbox" checked="true"/> <input id="ConfixGeneID0" class="checkbox" value="" style="display:initial"/> ');
	updateSelCount();
});


test("Testing function DraftsSelectBit() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount1"/> <input value="" style="display:initial" id="ConfixGeneID3"/> <input value="" style="display:initial" id="ConfixGeneID2"/> <input value="" style="display:initial" id="ConfixGeneID1"/> <input id="ConfixGeneID0" value="" style="display:initial"/> ');
	DraftsSelectBit();
});


test("Testing function DraftsSelectBit() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount2"/> <div value="" style="display:initial" id="selCount1"/> <input value="" style="display:initial" id="ConfixGeneID3"/> <input value="" style="display:initial" id="ConfixGeneID2"/> <input value="" style="display:initial" id="ConfixGeneID1"/> <input id="ConfixGeneID0" class="checkbox" value="" style="display:initial"/> ');
	DraftsSelectBit();
});


test("Testing function DraftsSelectBit() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="selCount2"/> <div value="" style="display:initial" id="selCount1"/> <input value="" style="display:initial" id="ConfixGeneID3" type="checkbox" checked="true"/> <input value="" style="display:initial" id="ConfixGeneID2"/> <input value="" style="display:initial" id="ConfixGeneID1"/> <input id="ConfixGeneID0" class="checkbox" value="" style="display:initial"/> ');
	DraftsSelectBit();
});


test("Testing function CheckDeleteThisDrafts() for path 1", function() {
	expect(0);
	CheckDeleteThisDrafts();
});


test("Testing function AddAddBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="boxv" value="" style="display:initial"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="seedvundefined"/> <div style="display:initial" id="null" value=""/> <input id="boxv" type="text" value="21" style="display:initial"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="boxv" type="text" value="21" style="display:initial"/> ');
	AddAddBox();
});

