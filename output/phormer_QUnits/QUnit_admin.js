// QUnit test cases generated @ Thu Jan 01 15:42:09 PST 2015

module("output/phormer_QUnits", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
});



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


test("Testing function dg('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	dg('test');
});


test("Testing function hideElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	hideElem('test');
});


test("Testing function showElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	showElem('test');
});


test("Testing function inlineElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	inlineElem('test');
});


test("Testing function tableRowElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	tableRowElem('test');
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


test("Testing function showlinkline('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="linklinetest"/> ');
	showlinkline('test');
});


test("Testing function hidelinkline('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	hidelinkline('test');
});


test("Testing function linkAddBelow('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	linkAddBelow('test');
});


test("Testing function linkDelThis('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	linkDelThis('test');
});


test("Testing function removeThisNode('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	removeThisNode('test');
});


test("Testing function removeThisNode('test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="allModes"/> <div id="test"/> ');
	removeThisNode('test');
});


test("Testing function removeThisNode('test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="mode"/> <div id="allModes"/> <div id="test"/> ');
	removeThisNode('test');
});


test("Testing function removeThisNode('test') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theme"/> <input id="mode" value="ConfixGetValue"/> <div id="allModes"/> <div id="test"/> ');
	removeThisNode('test');
});


test("Testing function removeThisNode('test') for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="prevmode1"/> <input value="ConfixGetValue" id="theme"/> <input id="mode" value="ConfixGetValue"/> <div id="allModes"/> <div id="test"/> ');
	removeThisNode('test');
});


test("Testing function removeThisNode('test') for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="prevmode2"/> <div id="prevmode1"/> <input value="ConfixGetValue" id="theme"/> <input id="mode" value="ConfixGetValue"/> <div id="allModes"/> <div id="test"/> ');
	removeThisNode('test');
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


test("Testing function fixBoldInput('test','test1') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ltestn"/> ');
	fixBoldInput('test','test1');
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


test("Testing function rethumb_fill('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev"/> ');
	rethumb_fill('test');
});


test("Testing function rethumb_fill('test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto"/> <div id="thumbPrev"/> ');
	rethumb_fill('test');
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


test("Testing function updateTimeDiffer('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	updateTimeDiffer('test');
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


test("Testing function DraftsSelectBit('test','test1') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount1"/> <input id="ConfixGeneID1"/> <input id="ConfixGeneID0"/> ');
	DraftsSelectBit('test','test1');
});


test("Testing function DraftsSelectBit('test','test1') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="selCount2"/> <div id="selCount1"/> <input id="ConfixGeneID1"/> <input id="ConfixGeneID0"/> ');
	DraftsSelectBit('test','test1');
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

