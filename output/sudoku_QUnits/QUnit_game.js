// QUnit test cases generated @ Sun Dec 28 23:34:44 PST 2014

module("output/sudoku_QUnits", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
});



test("Testing function shuffleBoard() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	shuffleBoard();
});


test("Testing function newGame() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	newGame();
});


test("Testing function newGame() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <DIV id="ConfixGeneID2"/> <div id="sudoku"/> <div id="hintDiv"/> ');
	newGame();
});


test("Testing function showColumnsInGroup() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	showColumnsInGroup();
});


test("Testing function isGameFinished() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	isGameFinished();
});


test("Testing function isGameFinished() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <DIV id="ConfixGeneID2"/> <div id="sudoku"/> <div id="hintDiv"/> ');
	isGameFinished();
});


test("Testing function initSudoku() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_0_0"/> <div id="hintDiv"/> <div id="hintDiv"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN id="ConfixGeneID3"/> <div id="square_0_0"/> <div id="hintDiv"/> <div id="hintDiv"/> ');
	initSudoku();
});


test("Testing function helpMe() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_3_1"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_0_6"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_0_4"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_4"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_4_3"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_5"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_5_2"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_3"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_3_4"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 10", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_6_7"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 11", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_7"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function showHint() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> <div id="hintDiv"/> ');
	showHint();
});


test("Testing function showHint() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_0_0"/> <DIV id="ConfixGeneID2"/> <div id="hintDiv"/> <div id="hintDiv"/> ');
	showHint();
});


test("Testing function showHint() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN id="ConfixGeneID4"/> <div id="square_0_0"/> <DIV id="ConfixGeneID2"/> <div id="hintDiv"/> <div id="hintDiv"/> ');
	showHint();
});


test("Testing function revealAll() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_0_0"/> <div id="hintDiv"/> ');
	revealAll();
});


test("Testing function revealAll() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN id="ConfixGeneID2"/> <div id="square_0_0"/> <div id="hintDiv"/> ');
	revealAll();
});

