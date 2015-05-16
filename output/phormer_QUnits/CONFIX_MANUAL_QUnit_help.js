


test("Testing function HideHelp() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBox" value="" style="display:initial"/> ');
	HideHelp();
});


test("Testing function dgp('id') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="id" value="" style="display:initial"/> ');
	dgp('id');
});


test("Testing function ShowHelp('test', null, 'it') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxLegend" value="" style="display:initial"/> ');
	ShowHelp('test', null, 'it');
});


test("Testing function ShowHelp('test', null, 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxLegend" value="" style="display:initial"/> ');
	ShowHelp('test', null, 'test');
});


test("Testing function ShowHelp('test', 'test', 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxLegend" value="" style="display:initial"/> ');
	ShowHelp('test', 'test', 'test');
});


test("Testing function SwitchSelectIE() for path 1", function() {
	expect(0);
	SwitchSelectIE();
});


test("Testing function GetItHelpMsg('test') for path 1", function() {
	expect(0);
	GetItHelpMsg('test');
});

