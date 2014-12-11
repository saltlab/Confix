// QUnit test cases generated @ Wed Dec 10 14:53:07 PST 2014

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



test("Testing function cloudsInit() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cloud1"/> ');
	cloudsInit();
});


test("Testing function cloudsInit() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cloud2"/> <div id="cloud1"/> ');
	cloudsInit();
});


test("Testing function moveCloud1() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cloud1"/> ');
	moveCloud1();
});


test("Testing function moveCloud2() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cloud2"/> ');
	moveCloud2();
});

