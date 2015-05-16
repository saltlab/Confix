


test("Testing function SaveRatio() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton" value="" style="display:initial"/> ');
	SaveRatio();
});


test("Testing function MouseDown('test','test1') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton" value="" style="display:initial"/> ');
	MouseDown('test','test1');
});


test("Testing function MouseDownTheSkeleton('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="skeleton" value="" style="display:initial"/> ');
	MouseDownTheSkeleton('test');
});


test("Testing function ExpandSkl() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto" value="" style="display:initial"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="skeleton"/> <div id="thePhoto" value="" style="display:initial"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklW"/> <div value="" style="display:initial" id="skeleton"/> <div id="thePhoto" value="" style="display:initial"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklH"/> <div value="" style="display:initial" id="sklW"/> <div value="" style="display:initial" id="skeleton"/> <div id="thePhoto" value="" style="display:initial"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklL"/> <div value="" style="display:initial" id="sklH"/> <div value="" style="display:initial" id="sklW"/> <div value="" style="display:initial" id="skeleton"/> <div id="thePhoto" value="" style="display:initial"/> ');
	ExpandSkl();
});


test("Testing function ExpandSkl() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklT"/> <div value="" style="display:initial" id="sklL"/> <div value="" style="display:initial" id="sklH"/> <div value="" style="display:initial" id="sklW"/> <div value="" style="display:initial" id="skeleton"/> <div id="thePhoto" value="" style="display:initial"/> ');
	ExpandSkl();
});


test("Testing function MouseMoveInside('test') for path 1", function() {
	expect(0);
	MouseMoveInside('test');
});


test("Testing function UpdateThumbPrev() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="skeleton"/> <div id="sklW" value="" style="display:initial"/> ');
	UpdateThumbPrev();
});


test("Testing function UpdateThumbPrev() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklH"/> <div value="" style="display:initial" id="skeleton"/> <div id="sklW" value="" style="display:initial"/> ');
	UpdateThumbPrev();
});


test("Testing function UpdateThumbPrev() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklL"/> <div value="" style="display:initial" id="sklH"/> <div value="" style="display:initial" id="skeleton"/> <div id="sklW" value="" style="display:initial"/> ');
	UpdateThumbPrev();
});


test("Testing function UpdateThumbPrev() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sklT"/> <div value="" style="display:initial" id="sklL"/> <div value="" style="display:initial" id="sklH"/> <div value="" style="display:initial" id="skeleton"/> <div id="sklW" value="" style="display:initial"/> ');
	UpdateThumbPrev();
});

