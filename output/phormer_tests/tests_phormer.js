// QUnit test cases generated @ Fri Aug 22 13:08:05 PDT 2014

module("tests_phormer.js", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
});



test("Testing function toggleInfo for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="theImage"/> <div id="hin"/> ');
	!dg('hin').innerHTML;
	dg('hin').innerHTML = 'Show' + "NEGATE"
	toggleInfo();
});


test("Testing function toggleInfo for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="theImage"/> <div id="hin"/> ');
	!dg('hin').innerHTML;
	dg('hin').innerHTML = 'Show'
	toggleInfo();
});


test("Testing function toggleInfo for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="theImage"/> <div id="hin"/> ');
	dg('hin').innerHTML;
	dg('hin').innerHTML = 'Show' + "NEGATE"
	toggleInfo();
});


test("Testing function toggleInfo for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="theImage"/> <div id="hin"/> ');
	dg('hin').innerHTML;
	dg('hin').innerHTML = 'Show'
	toggleInfo();
});


test("Testing function updateIndic for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indicator"/> ');
	updateIndic();
});


test("Testing function dg for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="TheIDShouldBeSetFromFunctionInput"/> ');
	dg();
});


test("Testing function ss_run for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_refresh"/> ');
	ss_run();
});


test("Testing function reshuffle for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbscount"/> ');
	reshuffle();
});


test("Testing function ss_toggleSmaller for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_photo"/> <img id="ss_photo" src="ConfixGeneratedSrc"/> <div id="ss_smaller_link"/> ');
	ss_toggleSmaller();
});


test("Testing function ss_playpause for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link2"/> <div id="ss_playpause_link"/> ');
	ss_playpause();
});


test("Testing function doReply for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply();
});


test("Testing function ss_update for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <img id="ss_photo" src="ConfixGeneratedSrc"/> <div id="ss_photo"/> <div id="ss_title"/> <div id="ConfixGeneID69"/> <div id="ss_n"/> <div id="ss_desc"/> <div id="ss_link1"/> <div id="ss_date"/> <div id="ss_link2"/> ');
	ss_update();
});


test("Testing function checkWV for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cmntTextArea"/> <div id="wvinput"/> ');
	checkWV();
});


test("Testing function SaveRating for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="rateStatus"/> ');
	SaveRating();
});


test("Testing function alertContents for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wvwimg"/> <div id="sumRate"/> <div id="rateStatus"/> ');
	alertContents();
});

