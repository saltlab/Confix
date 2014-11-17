// QUnit test cases generated @ Mon Nov 17 14:39:47 PST 2014

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



test("Testing function dg('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	dg('test');
});


test("Testing function NewSaveRating(1,3) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	NewSaveRating(1,3);
});


test("Testing function sumTotalPrice() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="items"/> ');
	sumTotalPrice();
});


test("Testing function sumTotalPrice() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="items">  <div id="ConfixGeneID1"/> </div> <div id="message"/> ');
	sumTotalPrice();
});


test("Testing function sumTotalPrice() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="total"/> <div id="items">  <input id="ConfixGeneID1" value="1"/> </div> <div id="message"/> ');
	sumTotalPrice();
});


test("Testing function sumTotalPrice() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="items">  <input id="ConfixGeneID1" value="1"/> </div> <div id="total"/> ');
	sumTotalPrice();
});


test("Testing function SaveRating(1,3) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="rateStatus"/> ');
	SaveRating(1,3);
});


test("Testing function SaveRating(1,3) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indicator"/> <div id="rateStatus"/> ');
	SaveRating(1,3);
});

