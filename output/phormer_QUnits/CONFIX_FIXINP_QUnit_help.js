


test("Testing function HideHelp() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="helpBox"/> ');
	HideHelp();
});


test("Testing function dgp('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	dgp('test');
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

