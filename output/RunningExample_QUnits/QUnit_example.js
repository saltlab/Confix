// QUnit test cases generated @ Fri Jan 16 13:04:27 PST 2015

module("output/RunningExample_QUnits", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
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

