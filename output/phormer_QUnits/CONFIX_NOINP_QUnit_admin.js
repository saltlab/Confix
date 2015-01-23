


test("Testing function PrepareBody() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <textarea id="ConfixGeneID5"/> <input id="ConfixGeneID4"/> <a id="ConfixGeneID3"/> <div id="loginAdminPass"/> <div id="newpasswd"/> ');
	PrepareBody();
});


test("Testing function PrepareBody() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <textarea id="ConfixGeneID4"/> <input id="ConfixGeneID3"/> <a id="ConfixGeneID2"/> <div id="loginAdminPass"/> <div id="newpasswd"/> ');
	PrepareBody();
});


test("Testing function dg() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	dg();
});


test("Testing function hideElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	hideElem();
});


test("Testing function showElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	showElem();
});


test("Testing function inlineElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	inlineElem();
});


test("Testing function tableRowElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	tableRowElem();
});


test("Testing function checkChangePass() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="newpasswd1"/> ');
	checkChangePass();
});


test("Testing function checkChangePass() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="newpasswd2"/> <input id="newpasswd1" value="ConfixGetValue"/> ');
	checkChangePass();
});


test("Testing function checkChangePass() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input value="ConfixGetValue" id="newpasswd2"/> <input id="newpasswd1" value="ConfixGetValue"/> ');
	checkChangePass();
});


test("Testing function checkInstallPass() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="newpasswd"/> ');
	checkInstallPass();
});


test("Testing function checkInstallPass() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="newpasswd" value="ConfixGetValue"/> ');
	checkInstallPass();
});


test("Testing function checkPrivacyRow() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="public"/> ');
	checkPrivacyRow();
});


test("Testing function checkPrivacyRow() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="passwordRow"/> <div id="public"/> ');
	checkPrivacyRow();
});


test("Testing function checkHasPass() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="name"/> ');
	checkHasPass();
});


test("Testing function checkHasPass() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="public"/> <div id="name"/> ');
	checkHasPass();
});


test("Testing function checkHasPass() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="password"/> <div id="public"/> <div id="name"/> ');
	checkHasPass();
});


test("Testing function checkDate() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="date"/> ');
	checkDate();
});


test("Testing function CheckAddPhotoTime() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="datetake"/> ');
	CheckAddPhotoTime();
});


test("Testing function CheckAddPhoto() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="datetake"/> ');
	CheckAddPhoto();
});


test("Testing function ConfirmDelPhoto() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="piddel"/> ');
	ConfirmDelPhoto();
});


test("Testing function showlinkline() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="linklineundefined"/> ');
	showlinkline();
});


test("Testing function hidelinkline() for path 1", function() {
	expect(0);
	hidelinkline();
});


test("Testing function linkAddBelow() for path 1", function() {
	expect(0);
	linkAddBelow();
});


test("Testing function linkDelThis() for path 1", function() {
	expect(0);
	linkDelThis();
});


test("Testing function removeThisNode() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	removeThisNode();
});


test("Testing function addMainColDiv() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="allModes"/> ');
	addMainColDiv();
});


test("Testing function updateMode() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="allModes"/> ');
	updateMode();
});


test("Testing function updateMode() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="mode"/> <div id="allModes"/> ');
	updateMode();
});


test("Testing function updateMode() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theme"/> <input id="mode" value="ConfixGetValue"/> <div id="allModes"/> ');
	updateMode();
});


test("Testing function updateMode() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="prevmode1"/> <input value="ConfixGetValue" id="theme"/> <input id="mode" value="ConfixGetValue"/> <div id="allModes"/> ');
	updateMode();
});


test("Testing function updateMode() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="prevmode2"/> <div id="prevmode1"/> <input value="ConfixGetValue" id="theme"/> <input id="mode" value="ConfixGetValue"/> <div id="allModes"/> ');
	updateMode();
});


test("Testing function fixBoldInput() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="lundefinedn"/> ');
	fixBoldInput();
});


test("Testing function changePrev() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="mode"/> ');
	changePrev();
});


test("Testing function changePrev() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theme"/> <input id="mode" value="ConfixGetValue"/> ');
	changePrev();
});


test("Testing function changePrev() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="prevmode1"/> <input value="ConfixGetValue" id="theme"/> <input id="mode" value="ConfixGetValue"/> ');
	changePrev();
});


test("Testing function changePrev() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="prevmode2"/> <div id="prevmode1"/> <input value="ConfixGetValue" id="theme"/> <input id="mode" value="ConfixGetValue"/> ');
	changePrev();
});


test("Testing function rethumb_fill() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev"/> ');
	rethumb_fill();
});


test("Testing function rethumb_fill() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto"/> <div id="thumbPrev"/> ');
	rethumb_fill();
});


test("Testing function rethumb() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev"/> ');
	rethumb();
});


test("Testing function rethumb() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto"/> <div id="thumbPrev"/> ');
	rethumb();
});


test("Testing function ToggleAdvPref() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="AdvPref"/> ');
	ToggleAdvPref();
});


test("Testing function ToggleAdvPref() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ShowHideAdvPref"/> <div id="AdvPref"/> ');
	ToggleAdvPref();
});


test("Testing function updateTimeDiffer() for path 1", function() {
	expect(0);
	updateTimeDiffer();
});


test("Testing function CheckDateDrafts() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="dateadd"/> ');
	CheckDateDrafts();
});


test("Testing function CheckActionDrafts() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount1"/> ');
	CheckActionDrafts();
});


test("Testing function CheckActionDrafts() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="groupdel"/> <div id="selCount1"/> ');
	CheckActionDrafts();
});


test("Testing function CheckActionDrafts() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="dateadd"/> <div id="groupdel"/> <div id="selCount1"/> ');
	CheckActionDrafts();
});


test("Testing function updateSelCount() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount1"/> <input id="ConfixGeneID0"/> ');
	updateSelCount();
});


test("Testing function updateSelCount() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount2"/> <div id="selCount1"/> <input id="ConfixGeneID0"/> ');
	updateSelCount();
});


test("Testing function DraftsSelectBit() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount1"/> <input id="ConfixGeneID1"/> <input id="ConfixGeneID0"/> ');
	DraftsSelectBit();
});


test("Testing function DraftsSelectBit() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount2"/> <div id="selCount1"/> <input id="ConfixGeneID1"/> <input id="ConfixGeneID0"/> ');
	DraftsSelectBit();
});


test("Testing function AddAddBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="boxv"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="seedvundefined"/> <div id="null"/> <input id="boxv" value="ConfixGetValue"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="seedvConfixGetValue"/> <div id="null"/> <input id="boxv" value="ConfixGetValue"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_iframe_undefined"/> <div id="null"/> <input value="ConfixGetValue" id="seedvConfixGetValue"/> <input id="boxv" value="ConfixGetValue"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_iframe_ConfixGetValue"/> <div id="null"/> <input value="ConfixGetValue" id="seedvConfixGetValue"/> <input id="boxv" value="ConfixGetValue"/> ');
	AddAddBox();
});


test("Testing function AddAddBox() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="AddBoxConfixGetValue"/> <div id="upload_iframe_ConfixGetValue"/> <div id="null"/> <input value="ConfixGetValue" id="seedvConfixGetValue"/> <input id="boxv" value="ConfixGetValue"/> ');
	AddAddBox();
});

