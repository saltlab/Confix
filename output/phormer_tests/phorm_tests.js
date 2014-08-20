test("Testing setOpac - p1", function() {
	expect(0);
     $("#qunit-fixture").append('<div style="-moz-opacity:0.6;" id="test"/>');
     setOpac(document.getElementById('test'), 0.99);
     });

test("Testing setOpac - p2", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="test"/>');
     setOpac(document.getElementById('test'), 0.99);
     });

test("Testing toggleInfo - p1", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="hin"/>');
     $("#qunit-fixture").append('<div id="photoBoxes"/>');
     $("#qunit-fixture").append('<div id="theImage"/>');
     toggleInfo('Show');
     });


test("Testing toggleInfo - p2", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="hin"/>');
     $("#qunit-fixture").append('<div id="photoBoxes"/>');
     $("#qunit-fixture").append('<div id="theImage"/>');
     toggleInfo('NOTShow');
     });

test("Testing toggleInfo - p3", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="hin"/>');
     $("#qunit-fixture").append('<div id="photoBoxes"/>');
     $("#qunit-fixture").append('<div id="theImage"/>');
     toggleInfo('');
     });

test("Testing reshuffle - p1", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="thumbscount" value="5"/>');
     $("#qunit-fixture").append('<div id="ThumbInBox"/>');
     reshuffle();
     });


test("Testing updateIndic - p1", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="indicator"/>');
     updateIndic();
     });


test("Testing ss_run - p1", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="ss_refresh" value="1000"/>');
     ss_run();
     });


test("Testing ss_toggleSmaller - p1", function() {
     expect(0);
     $("#qunit-fixture").append('<div id="ss_smaller_link"/>');
     $("#qunit-fixture").append('<img id="ss_photo" src="ConfixSrc"/>');
     ss_toggleSmaller();
     });

test("Testing ss_playpause - p1", function() {
    expect(0);
    $("#qunit-fixture").append('<div id="ss_playpause_link"/>');
    $("#qunit-fixture").append('<div id="ss_playpause_link2"/>');
    ss_playpause();
    });


test("Testing ss_update - p1", function() {
    expect(0);
    $("#qunit-fixture").append('<div id="ss_n"/>');
    ss_update();
    });




