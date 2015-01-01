// QUnit test cases generated @ Thu Jan 01 01:33:44 PST 2015

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



test("Testing function SaveRatio() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	SaveRatio();
});


test("Testing function MouseDown('test','test1') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	MouseDown('test','test1');
});


test("Testing function MouseDownTheSkeleton('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	MouseDownTheSkeleton('test');
});


test("Testing function ExpandSkl() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> <div id="thePhoto"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklW"/> <div id="skeleton"/> <div id="thePhoto"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklH"/> <div id="sklW"/> <div id="skeleton"/> <div id="thePhoto"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklL"/> <div id="sklH"/> <div id="sklW"/> <div id="skeleton"/> <div id="thePhoto"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklT"/> <div id="sklL"/> <div id="sklH"/> <div id="sklW"/> <div id="skeleton"/> <div id="thePhoto"/> ');
	ExpandSkl();
});


test("Testing function MouseMoveInside('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	MouseMoveInside('test');
});


test("Testing function UpdateThumbPrev() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> <div id="sklW"/> ');
	UpdateThumbPrev();
});


test("Testing function UpdateThumbPrev() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklH"/> <div id="skeleton"/> <div id="sklW"/> ');
	UpdateThumbPrev();
});


test("Testing function UpdateThumbPrev() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklL"/> <div id="sklH"/> <div id="skeleton"/> <div id="sklW"/> ');
	UpdateThumbPrev();
});


test("Testing function UpdateThumbPrev() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sklT"/> <div id="sklL"/> <div id="sklH"/> <div id="skeleton"/> <div id="sklW"/> ');
	UpdateThumbPrev();
});

