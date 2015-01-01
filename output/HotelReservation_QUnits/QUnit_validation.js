// QUnit test cases generated @ Thu Jan 01 15:40:41 PST 2015

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
	$("#qunit-fixture").append(' <div id="c_pass"/> <input id="pass" value="ConfixGetValue"/> ');
	checkPassConfirm();
});


test("Testing function checkPassConfirm() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="error_Password"/> <div id="c_pass"/> <input value="ConfixGetValue" id="c_pass"/> <input id="pass" value="ConfixGetValue"/> <div id="pass"/> ');
	checkPassConfirm();
});


test("Testing function checkValid() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="c1"/> <input id="ConfixGeneID0" name="cardno" value="ConfixGetValue"/> ');
	checkValid();
});


test("Testing function checkValid() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="c2"/> <input id="c1" checked="true"/> <input id="ConfixGeneID0" name="cardno" value="ConfixGetValue"/> ');
	checkValid();
});


test("Testing function checkValid() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="c1" checked="true"/> <input id="ConfixGeneID0" name="cardno" value="ConfixGetValue"/> ');
	checkValid();
});


test("Testing function RequiredField(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	RequiredField(null);
});


test("Testing function validateEmail() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	validateEmail();
});


test("Testing function validateNumber(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	validateNumber(null);
});

