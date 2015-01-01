// QUnit test cases generated @ Thu Jan 01 15:41:11 PST 2015

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


test("Testing function showCell(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	showCell(null);
});


test("Testing function showColumnsInGroup() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	showColumnsInGroup();
});


test("Testing function highlightSquare(null,null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> <div id="hintDiv"/> ');
	highlightSquare(null,null);
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


test("Testing function insertNumber(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> <div id="hintDiv"/> ');
	insertNumber(null);
});


test("Testing function helpMe() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <DIV id="ConfixGeneID2"/> <div id="sudoku"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function isCorrect(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	isCorrect(null);
});


test("Testing function getTopPos(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	getTopPos(null);
});


test("Testing function getLeftPos(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	getLeftPos(null);
});


test("Testing function getPossibleNumbers(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	getPossibleNumbers(null);
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


test("Testing function switchLevel(null,null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	switchLevel(null,null);
});

