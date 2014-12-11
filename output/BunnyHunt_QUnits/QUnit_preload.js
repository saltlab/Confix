// QUnit test cases generated @ Wed Dec 10 14:44:28 PST 2014

module("output/BunnyHunt_QUnits", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
});



test("Testing function preloadImages() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="loadingMessage"/> ');
	preloadImages();
});


test("Testing function preloadImages() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <p id="ConfixGeneID1"/> <div id="loadingMessage"/> ');
	preloadImages();
});


test("Testing function ready() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="stage"/> ');
	ready();
});


test("Testing function ready() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="splash"/> <div id="stage"/> ');
	ready();
});

