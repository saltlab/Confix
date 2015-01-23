


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


test("Testing function showCell() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	showCell();
});


test("Testing function showColumnsInGroup() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="sudoku"/> <div id="hintDiv"/> ');
	showColumnsInGroup();
});


test("Testing function highlightSquare() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> <div id="hintDiv"/> ');
	highlightSquare();
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


test("Testing function insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> <div id="hintDiv"/> ');
	insertNumber();
});


test("Testing function helpMe() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_2_0"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_6_8"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_1_0"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_3_7"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_5_1"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function helpMe() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="square_5_5"/> <div id="hintDiv"/> ');
	helpMe();
});


test("Testing function isCorrect() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	isCorrect();
});


test("Testing function getTopPos() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	getTopPos();
});


test("Testing function getLeftPos() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	getLeftPos();
});


test("Testing function getPossibleNumbers() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	getPossibleNumbers();
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


test("Testing function switchLevel() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv"/> ');
	switchLevel();
});

