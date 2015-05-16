f


test("Testing function squareObjects.push('test'); shuffleBoard() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	squareObjects.push('test'); shuffleBoard();
});


test("Testing function newGame() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	newGame();
});


test("Testing function newGame() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID3"/>  <DIV value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	newGame();
});


test("Testing function newGame() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID3"/>  <DIV value="" style="display:initial" id="ConfixGeneID2" class="sudokuSquare"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	newGame();
});


test("Testing function newGame() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID2" class="sudokuSquare"> <SPAN value="" style="display:initial" id="ConfixGeneID5"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  </DIV>  <DIV value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	newGame();
});


test("Testing function showCell(null) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	showCell(null);
});


test("Testing function var inputDiv = document.createElement('div'); document.body.appendChild(inputDiv); showCell(inputDiv) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID2"/>  <SPAN value="" style="display:initial" id="ConfixGeneID1"/> </div> <SPAN value="" style="display:initial" id="ConfixGeneID1"/> <div id="hintDiv" value="" style="display:initial"/> ');
	var inputDiv = document.createElement('div'); document.body.appendChild(inputDiv); showCell(inputDiv);
});


test("Testing function var inputDiv = document.createElement('div'); document.body.appendChild(inputDiv); showCell(inputDiv) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div id="hintDiv" value="" style="display:initial"/> ');
	var inputDiv = document.createElement('div'); document.body.appendChild(inputDiv); showCell(inputDiv);
});


test("Testing function showCell('generateDOMInput') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ConfixDummyNode1"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showCell('generateDOMInput');
});


test("Testing function showCell('generateDOMInput') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ConfixDummyNode1">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	showCell('generateDOMInput');
});


test("Testing function showCell('generateDOMInput') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ConfixDummyNode1">  <SPAN value="" style="display:initial" id="ConfixGeneID5"/>  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	showCell('generateDOMInput');
});


test("Testing function showColumnsInGroup() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_4"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_6_8"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_3_1"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_4"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_3"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_4_7"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_6"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_6">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function showColumnsInGroup() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_7_5"/> <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showColumnsInGroup();
});


test("Testing function highlightSquare() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	highlightSquare();
});


test("Testing function var inputObj = document.createElement('div'); inputObj.style.backgroundColor = 'red'; document.body.appendChild(inputObj); highlightSquare(null,inputObj); for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	var inputObj = document.createElement('div'); inputObj.style.backgroundColor = 'red'; document.body.appendChild(inputObj); highlightSquare(null,inputObj);;
});


test("Testing function gameFinished = true; highlightSquare(null,null); for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	gameFinished = true; highlightSquare(null,null);;
});


test("Testing function isGameFinished() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <div id="hintDiv" value="" style="display:initial"/> ');
	isGameFinished();
});


test("Testing function isGameFinished() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID3"/>  <DIV value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	isGameFinished();
});


test("Testing function initSudoku() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_0"/> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1"/> <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1">  <SPAN value="" style="display:initial" id="ConfixGeneID7"/>  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID7"/>  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1">  <SPAN value="" style="display:initial" id="ConfixGeneID7"/>  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID7"/>  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="square_0_2"/> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	initSudoku();
});


test("Testing function initSudoku() for path 7", function() {
	expect(0);
	initSudoku();
});


test("Testing function insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID7"/>  <DIV value="" style="display:initial" id="ConfixGeneID6"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); gameFinished = true; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); gameFinished = true; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID7"/>  <DIV value="" style="display:initial" id="ConfixGeneID6"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_7"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <div value="" style="display:initial" id="square_0_7"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_7"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID9"/>  <DIV value="" style="display:initial" id="ConfixGeneID8"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 37; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID7"/>  <DIV value="" style="display:initial" id="ConfixGeneID6"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_7_0"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <div value="" style="display:initial" id="square_7_0"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_7_0"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID9"/>  <DIV value="" style="display:initial" id="ConfixGeneID8"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 38; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <div value="" style="display:initial" id="square_0_1"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID9"/>  <DIV value="" style="display:initial" id="ConfixGeneID8"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID7"/>  <DIV value="" style="display:initial" id="ConfixGeneID6"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_8'; document.body.appendChild(higlightedCell); code = 39; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_0"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <div value="" style="display:initial" id="square_1_0"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_0"/> <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div id="hintDiv" value="" style="display:initial"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID9"/>  <DIV value="" style="display:initial" id="ConfixGeneID8"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_0_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID7"/>  <DIV value="" style="display:initial" id="ConfixGeneID6"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); higlightedCell.id = 'square_8_0'; document.body.appendChild(higlightedCell); code = 40; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 8; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 46; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 50; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 100; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="sudoku"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <SPAN value="" style="display:initial" id="ConfixGeneID2"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber();
});


test("Testing function higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID4"/> <SPAN value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <SPAN value="" style="display:initial" id="ConfixGeneID4"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="sudoku">  <DIV value="" style="display:initial" id="ConfixGeneID7"/>  <DIV value="" style="display:initial" id="ConfixGeneID6"/> </div> <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	higlightedCell = document.createElement('div'); document.body.appendChild(higlightedCell); code = 110; insertNumber();
});


test("Testing function helpMe() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_3_3"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_8_2"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_5_0"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_1"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_4"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_0"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_4_4"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_1_3"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function helpMe() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_3_8"/> <div id="hintDiv" value="" style="display:initial"/> ');
	helpMe();
});


test("Testing function gameFinished = true; helpMe() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	gameFinished = true; helpMe();
});


test("Testing function isCorrect('generateDOMInput') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	isCorrect('generateDOMInput');
});


test("Testing function getPossibleNumbers('generateDOMInput') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	getPossibleNumbers('generateDOMInput');
});


test("Testing function showHint() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showHint();
});


test("Testing function showHint() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial">  <DIV value="" style="display:initial" id="ConfixGeneID3"/>  <DIV value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="square_0_0"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showHint();
});


test("Testing function showHint() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <SPAN value="" style="display:initial" id="ConfixGeneID6"/> <SPAN value="" style="display:initial" id="ConfixGeneID5"/> <div id="hintDiv" value="" style="display:initial">  <DIV value="" style="display:initial" id="ConfixGeneID3"/>  <DIV value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="square_0_0"/> <div id="hintDiv" value="" style="display:initial"/> ');
	showHint();
});


test("Testing function revealAll() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_0"/> <div id="hintDiv" value="" style="display:initial"/> ');
	revealAll();
});


test("Testing function revealAll() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	revealAll();
});


test("Testing function revealAll() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="square_0_1"/> <div id="hintDiv" value="" style="display:initial"/> ');
	revealAll();
});


test("Testing function revealAll() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1">  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID5"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID5"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div id="hintDiv" value="" style="display:initial"/> ');
	revealAll();
});


test("Testing function revealAll() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="square_0_1">  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID5"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="square_0_0">  <SPAN value="" style="display:initial" id="ConfixGeneID6"/>  <SPAN value="" style="display:initial" id="ConfixGeneID5"/>  <SPAN value="" style="display:initial" id="ConfixGeneID3"/>  <SPAN value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="square_0_2"/> <div id="hintDiv" value="" style="display:initial"/> ');
	revealAll();
});


test("Testing function revealAll() for path 6", function() {
	expect(0);
	revealAll();
});


test("Testing function switchLevel('generateDOMInput') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	switchLevel('generateDOMInput');
});


test("Testing function gameFinished=true; switchLevel('generateDOMInput') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hintDiv" value="" style="display:initial"/> ');
	gameFinished=true; switchLevel('generateDOMInput');
});

