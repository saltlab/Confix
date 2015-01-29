


test("Testing function SaveRatio() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	SaveRatio();
});


test("Testing function MouseDown('a','a') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	MouseDown('a','a');
});


test("Testing function MouseDownTheSkeleton('a') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton"/> ');
	MouseDownTheSkeleton('a');
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

