// QUnit test cases generated @ Tue Nov 18 21:23:59 PST 2014

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



test("Testing function prepareBody() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin"/> ');
	prepareBody();
});


test("Testing function prepareBody() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="hin"/> ');
	prepareBody();
});


test("Testing function prepareBody() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImage"/> <div id="photoBoxes"/> <div id="hin"/> ');
	prepareBody();
});

