// QUnit test cases generated @ Tue Dec 09 15:39:42 PST 2014

module("output/HotelReservation_QUnits", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
});



test("Testing function checkPassConfirm() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="pass"/> ');
	checkPassConfirm();
});


test("Testing function checkPassConfirm() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="c_pass"/> <div id="pass"/> ');
	checkPassConfirm();
});


test("Testing function checkValid() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="c1"/> <div id="ConfixGeneID0" name="cardno"/> ');
	checkValid();
});


test("Testing function checkValid() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="c2"/> <div id="c1"/> <div id="ConfixGeneID0" name="cardno"/> ');
	checkValid();
});


test("Testing function validateEmail() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	validateEmail();
});

