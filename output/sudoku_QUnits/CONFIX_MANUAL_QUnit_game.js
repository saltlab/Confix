


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
	$("#qunit-fixture").append(' <div id="square_0_2"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_5"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_7"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_7_0"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_6_2"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_6_4"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_8_4"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_0_6"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_1_3"/> <div id="hintDiv"/> ');
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

