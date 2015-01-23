


test("Testing function SaveRatio() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	SaveRatio();
});


test("Testing function MouseDown() for path 1", function() {
	expect(0);
	MouseDown();
});


test("Testing function MouseDownTheSkeleton() for path 1", function() {
	expect(0);
	MouseDownTheSkeleton();
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


test("Testing function MouseMoveInside() for path 1", function() {
	expect(0);
	MouseMoveInside();
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

