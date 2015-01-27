


test("Testing function HideHelp() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBox"/> ');
	HideHelp();
});


test("Testing function dgp('id') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="id"/> ');
	dgp('id');
});


test("Testing function ShowHelp('test', null, 'it') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxLegend"/> ');
	ShowHelp('test', null, 'it');
});


test("Testing function ShowHelp('test', null, 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxLegend"/> ');
	ShowHelp('test', null, 'test');
});


test("Testing function ShowHelp('test', 'test', 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxLegend"/> ');
	ShowHelp('test', 'test', 'test');
});


test("Testing function ShowHelp('test', 'test', 'test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBox"/> <div id="helpBoxLegend"/> ');
	ShowHelp('test', 'test', 'test');
});


test("Testing function ShowHelp('test', 'test', 'test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBoxInner"/> <div id="helpBox"/> <div id="helpBoxLegend"/> ');
	ShowHelp('test', 'test', 'test');
});


test("Testing function SwitchSelectIE() for path 1", function() {
	expect(0);
	SwitchSelectIE();
});

