


test("Testing function checkPassConfirm() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="pass" value="" style="display:initial"/> ');
	checkPassConfirm();
});


test("Testing function checkPassConfirm() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="c_pass" value=""/> <input id="pass" type="text" value="ConfixGenValue" style="display:initial"/> ');
	checkPassConfirm();
});


test("Testing function checkPassConfirm() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="error_Password"/> <div style="display:initial" id="c_pass" value=""/> <input type="text" style="display:initial" id="c_pass" value="ConfixGenValue"/> <input id="pass" type="text" value="c_pass1" style="display:initial"/> <div id="pass" style="display:initial" value=""/> ');
	checkPassConfirm();
});


test("Testing function checkValid() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="c1"/> <input name="cardno" style="display:initial" id="ConfixGeneID1" type="text" value="ConfixGenValue"/> <div id="ConfixGeneID0" name="cardno" value="" style="display:initial"/> ');
	checkValid();
});


test("Testing function checkValid() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="c2"/> <input value="" style="display:initial" id="c1" type="checkbox" checked="true"/> <input name="cardno" style="display:initial" id="ConfixGeneID1" type="text" value="ConfixGenValue"/> <div id="ConfixGeneID0" name="cardno" value="" style="display:initial"/> ');
	checkValid();
});


test("Testing function checkValid() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input value="" style="display:initial" id="c1" type="checkbox" checked="true"/> <input name="cardno" style="display:initial" id="ConfixGeneID1" type="text" value="ConfixGenValue"/> <div id="ConfixGeneID0" name="cardno" value="" style="display:initial"/> ');
	checkValid();
});


test("Testing function RequiredField(null) for path 1", function() {
	expect(0);
	RequiredField(null);
});


test("Testing function validateEmail() for path 1", function() {
	expect(0);
	validateEmail();
});


test("Testing function validateNumber(null) for path 1", function() {
	expect(0);
	validateNumber(null);
});


test("Testing function var f = document.createElement('form'); f.name = 'frm'; document.body.appendChild(f);var phone = document.createElement('input'); phone.name = 'phnum';  f.appendChild(phone); validateNumber(f) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="error_phnum" value="" style="display:initial"/> ');
	var f = document.createElement('form'); f.name = 'frm'; document.body.appendChild(f);var phone = document.createElement('input'); phone.name = 'phnum';  f.appendChild(phone); validateNumber(f);
});


test("Testing function var f = document.createElement('form'); f.name = 'frm'; document.body.appendChild(f);var phone = document.createElement('input'); phone.name = 'phnum';  f.appendChild(phone); RequiredField(f) for path 1", function() {
	expect(0);
	var f = document.createElement('form'); f.name = 'frm'; document.body.appendChild(f);var phone = document.createElement('input'); phone.name = 'phnum';  f.appendChild(phone); RequiredField(f);
});

