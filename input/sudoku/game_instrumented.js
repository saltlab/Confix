trace = [];
function confixWrapper(statementType, statement, varList, varValueList, enclosingFunction, actualStatement) {
  trace.push({statementType: statementType, statement: statement, varList: varList, varValueList: varValueList, enclosingFunction: enclosingFunction, actualStatement: actualStatement});
  return actualStatement;
}
function getConfixTrace() {
  return trace;
}
var _XMLHttpRequest = XMLHttpRequest;
XMLHttpRequest = function() {
  var xhr = new _XMLHttpRequest();
  var _open = xhr.open;
  xhr.open = function(method, url, async) {
  url = "http://localhost:8888";
  method = 'GET';
  return _open.apply(this, [method, url, async]);
};
  return xhr;
};
var squareObjects = confixWrapper("initvar", "var squareObjects = new Array()", [""], [], "", new Array());
var level = confixWrapper("initvar", "var level = 1", [""], [], "", 1);
var countSquares = confixWrapper("initvar", "var countSquares = [36, 36, 34, 32, 31, 30]", [""], [], "", [36, 36, 34, 32, 31, 30]);
var gameFinished = confixWrapper("initvar", "var gameFinished = false", [""], [], "", false);
function shuffleBoard() {
  for (var counter = confixWrapper("initvar", "var counter = 0", [""], [], "shuffleBoard", 0); confixWrapper("loopCondition", "counter < 30", ["counter"], [counter], "shuffleBoard", counter < 30); counter++) 
    {
      var number1 = confixWrapper("initvar", "var number1 = confixWrapper(\"functionCall\", \"Math.ceil(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"shuffleBoard\", Math.random()) * 9], \"shuffleBoard\", Math.ceil(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"shuffleBoard\", Math.random()) * 9))", [""], [], "shuffleBoard", confixWrapper("functionCall", "Math.ceil(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "shuffleBoard", Math.random()) * 9], "shuffleBoard", Math.ceil(confixWrapper("functionCall", "Math.random()", [], [], "shuffleBoard", Math.random()) * 9)));
      var number2 = confixWrapper("initvar", "var number2 = confixWrapper(\"functionCall\", \"Math.ceil(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"shuffleBoard\", Math.random()) * 9], \"shuffleBoard\", Math.ceil(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"shuffleBoard\", Math.random()) * 9))", [""], [], "shuffleBoard", confixWrapper("functionCall", "Math.ceil(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "shuffleBoard", Math.random()) * 9], "shuffleBoard", Math.ceil(confixWrapper("functionCall", "Math.random()", [], [], "shuffleBoard", Math.random()) * 9)));
      while (number2 == number1) 
        {
          number2 = confixWrapper("infix", "number2 = confixWrapper(\"functionCall\", \"Math.ceil(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"shuffleBoard\", Math.random()) * 9], \"shuffleBoard\", Math.ceil(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"shuffleBoard\", Math.random()) * 9))", [""], [], "shuffleBoard", confixWrapper("functionCall", "Math.ceil(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "shuffleBoard", Math.random()) * 9], "shuffleBoard", Math.ceil(confixWrapper("functionCall", "Math.random()", [], [], "shuffleBoard", Math.random()) * 9)));
        }
      var tmpObjects1 = confixWrapper("initvar", "var tmpObjects1 = new Array()", [""], [], "shuffleBoard", new Array());
      var tmpObjects2 = confixWrapper("initvar", "var tmpObjects2 = new Array()", [""], [], "shuffleBoard", new Array());
      for (var no = confixWrapper("initvar", "var no = 0", [""], [], "shuffleBoard", 0); confixWrapper("loopCondition", "no < squareObjects.length", ["no", "squareObjects"], [no, squareObjects], "shuffleBoard", no < squareObjects.length); no++) 
        {
          var txtObj = confixWrapper("initvar", "var txtObj = confixWrapper(\"functionCall\", \"squareObjects[no].getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"shuffleBoard\", squareObjects[no].getElementsByTagName('SPAN'))[0]", [""], [], "shuffleBoard", confixWrapper("functionCall", "squareObjects[no].getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "shuffleBoard", squareObjects[no].getElementsByTagName('SPAN'))[0]);
          if (confixWrapper("condition", "txtObj.innerHTML == number1", [""], [], "shuffleBoard", txtObj.innerHTML == number1)) 
          confixWrapper("functionCall", "tmpObjects1.push(txtObj)", ["txtObj"], [txtObj], "shuffleBoard", tmpObjects1.push(txtObj));
          if (confixWrapper("condition", "txtObj.innerHTML == number2", [""], [], "shuffleBoard", txtObj.innerHTML == number2)) 
          confixWrapper("functionCall", "tmpObjects2.push(txtObj)", ["txtObj"], [txtObj], "shuffleBoard", tmpObjects2.push(txtObj));
        }
      for (var no = confixWrapper("initvar", "var no = 0", [""], [], "shuffleBoard", 0); confixWrapper("loopCondition", "no < tmpObjects1.length", ["no", "tmpObjects1"], [no, tmpObjects1], "shuffleBoard", no < tmpObjects1.length); no++) 
        {
          tmpObjects1[no].innerHTML = confixWrapper("infix", "tmpObjects1[no].innerHTML = number2", [""], [], "shuffleBoard", number2);
          tmpObjects2[no].innerHTML = confixWrapper("infix", "tmpObjects2[no].innerHTML = number1", [""], [], "shuffleBoard", number1);
        }
    }
  confixWrapper("functionCall", "resetVisibleNumberArray()", [], [], "shuffleBoard", resetVisibleNumberArray());
  confixWrapper("functionCall", "showColumnsInGroup()", [], [], "shuffleBoard", showColumnsInGroup());
}
function resetVisibleNumberArray() {
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "resetVisibleNumberArray", 0); confixWrapper("loopCondition", "no <= 9", ["no"], [no], "resetVisibleNumberArray", no <= 9); no++) 
    {
      visibleNumberArray[no] = confixWrapper("infix", "visibleNumberArray[no] = 0", [""], [], "resetVisibleNumberArray", 0);
    }
}
function newGame() {
  var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('sudoku')\", [\"sudoku\"], ['sudoku'], \"newGame\", document.getElementById('sudoku'))", [""], [], "newGame", confixWrapper("functionCall", "document.getElementById('sudoku')", ["sudoku"], ['sudoku'], "newGame", document.getElementById('sudoku')));
  var subObjects = confixWrapper("initvar", "var subObjects = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('DIV')\", [\"DIV\"], ['DIV'], \"newGame\", obj.getElementsByTagName('DIV'))", [""], [], "newGame", confixWrapper("functionCall", "obj.getElementsByTagName('DIV')", ["DIV"], ['DIV'], "newGame", obj.getElementsByTagName('DIV')));
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "newGame", 0); confixWrapper("loopCondition", "no < subObjects.length", ["no", "subObjects"], [no, subObjects], "newGame", no < subObjects.length); no++) 
    {
      if (confixWrapper("condition", "subObjects[no].className == 'sudokuSquare'", [""], [], "newGame", subObjects[no].className == 'sudokuSquare')) 
      {
        subObjects[no].style.backgroundColor = confixWrapper("infix", "subObjects[no].style.backgroundColor = ''", [""], [], "newGame", '');
        var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"subObjects[no].getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"newGame\", subObjects[no].getElementsByTagName('SPAN'))", [""], [], "newGame", confixWrapper("functionCall", "subObjects[no].getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "newGame", subObjects[no].getElementsByTagName('SPAN')));
        spans[0].style.display = confixWrapper("infix", "spans[0].style.display = 'none'", [""], [], "newGame", 'none');
        spans[1].innerHTML = confixWrapper("infix", "spans[1].innerHTML = ''", [""], [], "newGame", '');
      }
    }
}
var visibleNumberArray = confixWrapper("initvar", "var visibleNumberArray = new Array()", [""], [], "", new Array());
function randomizeArray(a, b) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"randomizeArray\", Math.random()) - Math.random();", [""], [], "randomizeArray", confixWrapper("functionCall", "Math.random()", [], [], "randomizeArray", Math.random()) - Math.random());
}
function showCell(inputDiv) {
  var span = confixWrapper("initvar", "var span = confixWrapper(\"functionCall\", \"inputDiv.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"showCell\", inputDiv.getElementsByTagName('SPAN'))[0]", [""], [], "showCell", confixWrapper("functionCall", "inputDiv.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "showCell", inputDiv.getElementsByTagName('SPAN'))[0]);
  span.style.display = confixWrapper("infix", "span.style.display = ''", [""], [], "showCell", '');
  inputDiv.style.backgroundColor = confixWrapper("infix", "inputDiv.style.backgroundColor = '#DDD'", [""], [], "showCell", '#DDD');
  span.style.color = confixWrapper("infix", "span.style.color = '#317082'", [""], [], "showCell", '#317082');
  var typingSpan = confixWrapper("initvar", "var typingSpan = confixWrapper(\"functionCall\", \"inputDiv.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"showCell\", inputDiv.getElementsByTagName('SPAN'))[1]", [""], [], "showCell", confixWrapper("functionCall", "inputDiv.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "showCell", inputDiv.getElementsByTagName('SPAN'))[1]);
  typingSpan.style.display = confixWrapper("infix", "typingSpan.style.display = 'none'", [""], [], "showCell", 'none');
}
function showColumnsInGroup() {
  var object = confixWrapper("initvar", "var object = confixWrapper(\"functionCall\", \"document.getElementById('sudoku')\", [\"sudoku\"], ['sudoku'], \"showColumnsInGroup\", document.getElementById('sudoku'))", [""], [], "showColumnsInGroup", confixWrapper("functionCall", "document.getElementById('sudoku')", ["sudoku"], ['sudoku'], "showColumnsInGroup", document.getElementById('sudoku')));
  var cellsRevealed = confixWrapper("initvar", "var cellsRevealed = new Array()", [""], [], "showColumnsInGroup", new Array());
  var numberArray = confixWrapper("initvar", "var numberArray = new Array()", [""], [], "showColumnsInGroup", new Array());
  var groupCountArray = confixWrapper("initvar", "var groupCountArray = new Array()", [""], [], "showColumnsInGroup", new Array());
  var maxInGroup = confixWrapper("initvar", "var maxInGroup = 5", [""], [], "showColumnsInGroup", 5);
  if (confixWrapper("condition", "level <= 0", [""], [], "showColumnsInGroup", level <= 0)) 
  level = confixWrapper("infix", "level = 1", [""], [], "showColumnsInGroup", 1);
  if (confixWrapper("condition", "level == 1", [""], [], "showColumnsInGroup", level == 1)) 
  maxInGroup = confixWrapper("infix", "maxInGroup = 4", [""], [], "showColumnsInGroup", 4);
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "showColumnsInGroup", 0); confixWrapper("loopCondition", "no < countSquares[level]", ["no", "countSquares", "leve"], [no, countSquares, leve], "showColumnsInGroup", no < countSquares[level]); no++) 
    {
do {
        var row = confixWrapper("initvar", "var row = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"showColumnsInGroup\", Math.random()) * 9], \"showColumnsInGroup\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"showColumnsInGroup\", Math.random()) * 9))", [""], [], "showColumnsInGroup", confixWrapper("functionCall", "Math.floor(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "showColumnsInGroup", Math.random()) * 9], "showColumnsInGroup", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "showColumnsInGroup", Math.random()) * 9)));
        var col = confixWrapper("initvar", "var col = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"showColumnsInGroup\", Math.random()) * 9], \"showColumnsInGroup\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"showColumnsInGroup\", Math.random()) * 9))", [""], [], "showColumnsInGroup", confixWrapper("functionCall", "Math.floor(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "showColumnsInGroup", Math.random()) * 9], "showColumnsInGroup", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "showColumnsInGroup", Math.random()) * 9)));
        var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"showColumnsInGroup\", document.getElementById('square_' + row + '_' + col))", [""], [], "showColumnsInGroup", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "showColumnsInGroup", document.getElementById('square_' + row + '_' + col)));
        var parentID = confixWrapper("initvar", "var parentID = obj.parentNode.id", [""], [], "showColumnsInGroup", obj.parentNode.id);
        var span = confixWrapper("initvar", "var span = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"showColumnsInGroup\", obj.getElementsByTagName('SPAN'))[0]", [""], [], "showColumnsInGroup", confixWrapper("functionCall", "obj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "showColumnsInGroup", obj.getElementsByTagName('SPAN'))[0]);
        if (confixWrapper("condition", "!numberArray[span.innerHTML]", [""], [], "showColumnsInGroup", !numberArray[span.innerHTML])) 
        numberArray[span.innerHTML] = confixWrapper("infix", "numberArray[span.innerHTML] = 0", [""], [], "showColumnsInGroup", 0);
        if (confixWrapper("condition", "!groupCountArray[parentID]", [""], [], "showColumnsInGroup", !groupCountArray[parentID])) 
        groupCountArray[parentID] = confixWrapper("infix", "groupCountArray[parentID] = 0", [""], [], "showColumnsInGroup", 0);
      } while (cellsRevealed[row + '_' + col] || numberArray[span.innerHTML] > (3 + confixWrapper("functionCall", "Math.ceil(level / 2)", ["level / 2"], [level / 2], "showColumnsInGroup", Math.ceil(level / 2))) || groupCountArray[parentID] >= maxInGroup);
      cellsRevealed[row + '_' + col] = confixWrapper("infix", "cellsRevealed[row + '_' + col] = true", [""], [], "showColumnsInGroup", true);
      if (confixWrapper("condition", "!numberArray[span.innerHTML]", [""], [], "showColumnsInGroup", !numberArray[span.innerHTML])) 
      numberArray[span.innerHTML] = confixWrapper("infix", "numberArray[span.innerHTML] = 0", [""], [], "showColumnsInGroup", 0);
      numberArray[span.innerHTML]++;
      groupCountArray[parentID]++;
      confixWrapper("functionCall", "showCell(obj)", ["obj"], [obj], "showColumnsInGroup", showCell(obj));
    }
}
var higlightedCell;
function highlightSquare(e, inputObj) {
  confixWrapper("functionCall", "document.getElementById('hintDiv')", ["hintDiv"], ['hintDiv'], "highlightSquare", document.getElementById('hintDiv')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById('hintDiv')\", [\"hintDiv\"], ['hintDiv'], \"highlightSquare\", document.getElementById('hintDiv')).style.display = 'none'", [""], [], "highlightSquare", 'none');
  if (confixWrapper("condition", "!inputObj", [""], [], "highlightSquare", !inputObj)) 
  inputObj = confixWrapper("infix", "inputObj = this", [""], [], "highlightSquare", this);
  if (confixWrapper("condition", "inputObj.style.backgroundColor", [""], [], "highlightSquare", inputObj.style.backgroundColor)) 
  return;
  if (confixWrapper("condition", "gameFinished", [""], [], "highlightSquare", gameFinished)) 
  return;
  inputObj.className = confixWrapper("infix", "inputObj.className = 'sudokuSquareHighlighted'", [""], [], "highlightSquare", 'sudokuSquareHighlighted');
  if (confixWrapper("condition", "higlightedCell && higlightedCell != inputObj", [""], [], "highlightSquare", higlightedCell && higlightedCell != inputObj)) 
  higlightedCell.className = confixWrapper("infix", "higlightedCell.className = 'sudokuSquare'", [""], [], "highlightSquare", 'sudokuSquare');
  higlightedCell = confixWrapper("infix", "higlightedCell = inputObj", [""], [], "highlightSquare", inputObj);
  if (confixWrapper("condition", "document.all", [""], [], "highlightSquare", document.all)) 
  confixWrapper("functionCall", "inputObj.focus()", [], [], "highlightSquare", inputObj.focus());
}
function isGameFinished() {
  var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('sudoku')\", [\"sudoku\"], ['sudoku'], \"isGameFinished\", document.getElementById('sudoku'))", [""], [], "isGameFinished", confixWrapper("functionCall", "document.getElementById('sudoku')", ["sudoku"], ['sudoku'], "isGameFinished", document.getElementById('sudoku')));
  var subDivs = confixWrapper("initvar", "var subDivs = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('DIV')\", [\"DIV\"], ['DIV'], \"isGameFinished\", obj.getElementsByTagName('DIV'))", [""], [], "isGameFinished", confixWrapper("functionCall", "obj.getElementsByTagName('DIV')", ["DIV"], ['DIV'], "isGameFinished", obj.getElementsByTagName('DIV')));
  var allOk = confixWrapper("initvar", "var allOk = true", [""], [], "isGameFinished", true);
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "isGameFinished", 0); confixWrapper("loopCondition", "no < subDivs.length", ["no", "subDivs"], [no, subDivs], "isGameFinished", no < subDivs.length); no++) 
    {
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"subDivs[no].className.indexOf('sudokuSquare')\", [\"sudokuSquare\"], ['sudokuSquare'], \"isGameFinished\", subDivs[no].className.indexOf('sudokuSquare')) >= 0 && !subDivs[no].style.backgroundColor", [""], [], "isGameFinished", confixWrapper("functionCall", "subDivs[no].className.indexOf('sudokuSquare')", ["sudokuSquare"], ['sudokuSquare'], "isGameFinished", subDivs[no].className.indexOf('sudokuSquare')) >= 0 && !subDivs[no].style.backgroundColor)) 
      {
        var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"subDivs[no].getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"isGameFinished\", subDivs[no].getElementsByTagName('SPAN'))", [""], [], "isGameFinished", confixWrapper("functionCall", "subDivs[no].getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "isGameFinished", subDivs[no].getElementsByTagName('SPAN')));
        if (confixWrapper("condition", "spans[0].innerHTML != spans[1].innerHTML", [""], [], "isGameFinished", spans[0].innerHTML != spans[1].innerHTML)) 
        {
          allOk = confixWrapper("infix", "allOk = false", [""], [], "isGameFinished", false);
          break;
        }
      }
    }
  if (confixWrapper("condition", "allOk", [""], [], "isGameFinished", allOk)) 
  confixWrapper("functionCall", "alert('Congratulations! You did it')", ["Congratulations! You did it"], ['Congratulations! You did it'], "isGameFinished", alert('Congratulations! You did it'));
}
function initSudoku() {
  gameFinished = confixWrapper("infix", "gameFinished = false", [""], [], "initSudoku", false);
  confixWrapper("functionCall", "document.getElementById('hintDiv')", ["hintDiv"], ['hintDiv'], "initSudoku", document.getElementById('hintDiv')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById('hintDiv')\", [\"hintDiv\"], ['hintDiv'], \"initSudoku\", document.getElementById('hintDiv')).style.display = 'none'", [""], [], "initSudoku", 'none');
  var matrix = confixWrapper("initvar", "var matrix = new Array()", [""], [], "initSudoku", new Array());
  for (var rowCounter = confixWrapper("initvar", "var rowCounter = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "rowCounter < 9", ["rowCounter"], [rowCounter], "initSudoku", rowCounter < 9); rowCounter++) 
    {
      matrix[rowCounter] = confixWrapper("infix", "matrix[rowCounter] = new Array()", [""], [], "initSudoku", new Array());
      for (var colCounter = confixWrapper("initvar", "var colCounter = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "colCounter < 9", ["colCounter"], [colCounter], "initSudoku", colCounter < 9); colCounter++) 
        {
          var number = confixWrapper("initvar", "var number = colCounter / 1 + 1 + (rowCounter * 3) + confixWrapper(\"functionCall\", \"Math.floor(rowCounter / 3)\", [\"rowCounter / 3\"], [rowCounter / 3], \"initSudoku\", Math.floor(rowCounter / 3)) % 3", [""], [], "initSudoku", colCounter / 1 + 1 + (rowCounter * 3) + confixWrapper("functionCall", "Math.floor(rowCounter / 3)", ["rowCounter / 3"], [rowCounter / 3], "initSudoku", Math.floor(rowCounter / 3)) % 3);
          if (confixWrapper("condition", "number > 9", [""], [], "initSudoku", number > 9)) 
          number = confixWrapper("infix", "number = number % 9", [""], [], "initSudoku", number % 9);
          if (confixWrapper("condition", "number == 0", [""], [], "initSudoku", number == 0)) 
          number = confixWrapper("infix", "number = 9", [""], [], "initSudoku", 9);
          matrix[rowCounter][colCounter] = confixWrapper("infix", "matrix[rowCounter][colCounter] = number", [""], [], "initSudoku", number);
        }
    }
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no < 9", ["no"], [no], "initSudoku", no < 9); no += 3) 
    {
      for (var no2 = confixWrapper("initvar", "var no2 = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no2 < 3", ["no2"], [no2], "initSudoku", no2 < 3); no2++) 
        {
          row1 = confixWrapper("infix", "row1 = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 3)\", [\"Math.random() * 3\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3], \"initSudoku\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3))", [""], [], "initSudoku", confixWrapper("functionCall", "Math.floor(Math.random() * 3)", ["Math.random() * 3"], [confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3], "initSudoku", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3)));
          row2 = confixWrapper("infix", "row2 = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 3)\", [\"Math.random() * 3\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3], \"initSudoku\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3))", [""], [], "initSudoku", confixWrapper("functionCall", "Math.floor(Math.random() * 3)", ["Math.random() * 3"], [confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3], "initSudoku", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3)));
          while (row2 == row1) 
            {
              row2 = confixWrapper("infix", "row2 = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 3)\", [\"Math.random() * 3\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3], \"initSudoku\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3))", [""], [], "initSudoku", confixWrapper("functionCall", "Math.floor(Math.random() * 3)", ["Math.random() * 3"], [confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3], "initSudoku", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3)));
            }
          row1 = confixWrapper("infix", "row1 = row1 + no", [""], [], "initSudoku", row1 + no);
          row2 = confixWrapper("infix", "row2 = row2 + no", [""], [], "initSudoku", row2 + no);
          var tmpMatrix = confixWrapper("initvar", "var tmpMatrix = new Array()", [""], [], "initSudoku", new Array());
          tmpMatrix = confixWrapper("infix", "tmpMatrix = matrix[row1]", [""], [], "initSudoku", matrix[row1]);
          matrix[row1] = confixWrapper("infix", "matrix[row1] = matrix[row2]", [""], [], "initSudoku", matrix[row2]);
          matrix[row2] = confixWrapper("infix", "matrix[row2] = tmpMatrix", [""], [], "initSudoku", tmpMatrix);
        }
    }
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no < 9", ["no"], [no], "initSudoku", no < 9); no += 3) 
    {
      for (var no2 = confixWrapper("initvar", "var no2 = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no2 < 3", ["no2"], [no2], "initSudoku", no2 < 3); no2++) 
        {
          col1 = confixWrapper("infix", "col1 = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 3)\", [\"Math.random() * 3\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3], \"initSudoku\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3))", [""], [], "initSudoku", confixWrapper("functionCall", "Math.floor(Math.random() * 3)", ["Math.random() * 3"], [confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3], "initSudoku", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3)));
          col2 = confixWrapper("infix", "col2 = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 3)\", [\"Math.random() * 3\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3], \"initSudoku\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3))", [""], [], "initSudoku", confixWrapper("functionCall", "Math.floor(Math.random() * 3)", ["Math.random() * 3"], [confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3], "initSudoku", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3)));
          while (col2 == col1) 
            {
              col2 = confixWrapper("infix", "col2 = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 3)\", [\"Math.random() * 3\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3], \"initSudoku\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"initSudoku\", Math.random()) * 3))", [""], [], "initSudoku", confixWrapper("functionCall", "Math.floor(Math.random() * 3)", ["Math.random() * 3"], [confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3], "initSudoku", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "initSudoku", Math.random()) * 3)));
            }
          col1 = confixWrapper("infix", "col1 = col1 + no", [""], [], "initSudoku", col1 + no);
          col2 = confixWrapper("infix", "col2 = col2 + no", [""], [], "initSudoku", col2 + no);
          var tmpMatrix = confixWrapper("initvar", "var tmpMatrix = new Array()", [""], [], "initSudoku", new Array());
          for (var no3 = confixWrapper("initvar", "var no3 = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no3 < matrix.length", ["no3", "matrix"], [no3, matrix], "initSudoku", no3 < matrix.length); no3++) 
            {
              tmpMatrixValue = confixWrapper("infix", "tmpMatrixValue = matrix[no3][col1]", [""], [], "initSudoku", matrix[no3][col1]);
              matrix[no3][col1] = confixWrapper("infix", "matrix[no3][col1] = matrix[no3][col2]", [""], [], "initSudoku", matrix[no3][col2]);
              matrix[no3][col2] = confixWrapper("infix", "matrix[no3][col2] = tmpMatrixValue", [""], [], "initSudoku", tmpMatrixValue);
            }
        }
    }
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no < matrix.length", ["no", "matrix"], [no, matrix], "initSudoku", no < matrix.length); no++) 
    {
      for (var no2 = confixWrapper("initvar", "var no2 = 0", [""], [], "initSudoku", 0); confixWrapper("loopCondition", "no2 < matrix[no].length", ["no2", "matrix", "no"], [no2, matrix, no], "initSudoku", no2 < matrix[no].length); no2++) 
        {
          var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('square_' + no + '_' + no2)\", [\"square_ + no + _ + no2\"], ['square_' + no + '_' + no2], \"initSudoku\", document.getElementById('square_' + no + '_' + no2))", [""], [], "initSudoku", confixWrapper("functionCall", "document.getElementById('square_' + no + '_' + no2)", ["square_ + no + _ + no2"], ['square_' + no + '_' + no2], "initSudoku", document.getElementById('square_' + no + '_' + no2)));
          var spanObjects = confixWrapper("initvar", "var spanObjects = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"initSudoku\", obj.getElementsByTagName('SPAN'))", [""], [], "initSudoku", confixWrapper("functionCall", "obj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "initSudoku", obj.getElementsByTagName('SPAN')));
          var span = confixWrapper("initvar", "var span = spanObjects[0]", [""], [], "initSudoku", spanObjects[0]);
          span.innerHTML = confixWrapper("infix", "span.innerHTML = matrix[no][no2]", [""], [], "initSudoku", matrix[no][no2]);
          span.style.display = confixWrapper("infix", "span.style.display = 'none'", [""], [], "initSudoku", 'none');
          spanObjects[1].innerHTML = confixWrapper("infix", "spanObjects[1].innerHTML = ''", [""], [], "initSudoku", '');
          spanObjects[1].style.display = confixWrapper("infix", "spanObjects[1].style.display = ''", [""], [], "initSudoku", '');
          spanObjects[1].style.color = confixWrapper("infix", "spanObjects[1].style.color = '#000'", [""], [], "initSudoku", '#000');
          obj.onclick = confixWrapper("infix", "obj.onclick = highlightSquare", [""], [], "initSudoku", highlightSquare);
          confixWrapper("functionCall", "squareObjects.push(obj)", ["obj"], [obj], "initSudoku", squareObjects.push(obj));
        }
    }
  if (confixWrapper("condition", "document.all", [""], [], "initSudoku", document.all)) 
  {
    document.body.onkeydown = confixWrapper("infix", "document.body.onkeydown = insertNumber", [""], [], "initSudoku", insertNumber);
  } else {
    document.documentElement.onkeydown = confixWrapper("infix", "document.documentElement.onkeydown = insertNumber", [""], [], "initSudoku", insertNumber);
  }
  confixWrapper("functionCall", "newGame()", [], [], "initSudoku", newGame());
  confixWrapper("functionCall", "shuffleBoard()", [], [], "initSudoku", shuffleBoard());
}
function insertNumber(e) {
  confixWrapper("functionCall", "document.getElementById('hintDiv')", ["hintDiv"], ['hintDiv'], "insertNumber", document.getElementById('hintDiv')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById('hintDiv')\", [\"hintDiv\"], ['hintDiv'], \"insertNumber\", document.getElementById('hintDiv')).style.display = 'none'", [""], [], "insertNumber", 'none');
  if (confixWrapper("condition", "document.all", [""], [], "insertNumber", document.all)) 
  e = confixWrapper("infix", "e = event", [""], [], "insertNumber", event);
  if (confixWrapper("condition", "!higlightedCell", [""], [], "insertNumber", !higlightedCell)) 
  return;
  if (confixWrapper("condition", "gameFinished", [""], [], "insertNumber", gameFinished)) 
  return;
  if (confixWrapper("condition", "e.keyCode", [""], [], "insertNumber", e.keyCode)) 
  code = confixWrapper("infix", "code = e.keyCode", [""], [], "insertNumber", e.keyCode); else if (confixWrapper("condition", "e.which", [""], [], "insertNumber", e.which)) 
  code = confixWrapper("infix", "code = e.which", [""], [], "insertNumber", e.which);
  var span = confixWrapper("initvar", "var span = confixWrapper(\"functionCall\", \"higlightedCell.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"insertNumber\", higlightedCell.getElementsByTagName('SPAN'))[1]", [""], [], "insertNumber", confixWrapper("functionCall", "higlightedCell.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "insertNumber", higlightedCell.getElementsByTagName('SPAN'))[1]);
  var numbers = confixWrapper("initvar", "var numbers = confixWrapper(\"functionCall\", \"higlightedCell.id.split('_')\", [\"_\"], ['_'], \"insertNumber\", higlightedCell.id.split('_'))", [""], [], "insertNumber", confixWrapper("functionCall", "higlightedCell.id.split('_')", ["_"], ['_'], "insertNumber", higlightedCell.id.split('_')));
  var row = confixWrapper("initvar", "var row = numbers[1] / 1", [""], [], "insertNumber", numbers[1] / 1);
  var col = confixWrapper("initvar", "var col = numbers[2] / 1", [""], [], "insertNumber", numbers[2] / 1);
  var nextObject = confixWrapper("initvar", "var nextObject = false", [""], [], "insertNumber", false);
  if (confixWrapper("condition", "code == 39", [""], [], "insertNumber", code == 39)) 
  {
    if (confixWrapper("condition", "col < 8", [""], [], "insertNumber", col < 8)) 
    {
      nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + (col / 1 + 1))\", [\"square_ + row + _ + (col / 1 + 1)\"], ['square_' + row + '_' + (col / 1 + 1)], \"insertNumber\", document.getElementById('square_' + row + '_' + (col / 1 + 1)))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + (col / 1 + 1))", ["square_ + row + _ + (col / 1 + 1)"], ['square_' + row + '_' + (col / 1 + 1)], "insertNumber", document.getElementById('square_' + row + '_' + (col / 1 + 1))));
      if (confixWrapper("condition", "nextObject.style.backgroundColor", [""], [], "insertNumber", nextObject.style.backgroundColor)) 
      {
        while (col < 8 && nextObject.style.backgroundColor) 
          {
            col = confixWrapper("infix", "col = col + 1", [""], [], "insertNumber", col + 1);
            nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"insertNumber\", document.getElementById('square_' + row + '_' + col))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "insertNumber", document.getElementById('square_' + row + '_' + col)));
          }
      }
    }
  }
  if (confixWrapper("condition", "code == 37", [""], [], "insertNumber", code == 37)) 
  {
    if (confixWrapper("condition", "col > 0", [""], [], "insertNumber", col > 0)) 
    {
      nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + (col / 1 - 1))\", [\"square_ + row + _ + (col / 1 - 1)\"], ['square_' + row + '_' + (col / 1 - 1)], \"insertNumber\", document.getElementById('square_' + row + '_' + (col / 1 - 1)))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + (col / 1 - 1))", ["square_ + row + _ + (col / 1 - 1)"], ['square_' + row + '_' + (col / 1 - 1)], "insertNumber", document.getElementById('square_' + row + '_' + (col / 1 - 1))));
      if (confixWrapper("condition", "nextObject.style.backgroundColor", [""], [], "insertNumber", nextObject.style.backgroundColor)) 
      {
        while (col > 0 && nextObject.style.backgroundColor) 
          {
            col = confixWrapper("infix", "col = col - 1", [""], [], "insertNumber", col - 1);
            nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"insertNumber\", document.getElementById('square_' + row + '_' + col))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "insertNumber", document.getElementById('square_' + row + '_' + col)));
          }
      }
      if (confixWrapper("condition", "nextObject.style.backgroundColor", [""], [], "insertNumber", nextObject.style.backgroundColor)) 
      nextObject = confixWrapper("infix", "nextObject = false", [""], [], "insertNumber", false);
    }
  }
  if (confixWrapper("condition", "code == 38", [""], [], "insertNumber", code == 38)) 
  {
    if (confixWrapper("condition", "row > 0", [""], [], "insertNumber", row > 0)) 
    {
      nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + (row - 1) + '_' + col)\", [\"square_ + (row - 1) + _ + col\"], ['square_' + (row - 1) + '_' + col], \"insertNumber\", document.getElementById('square_' + (row - 1) + '_' + col))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + (row - 1) + '_' + col)", ["square_ + (row - 1) + _ + col"], ['square_' + (row - 1) + '_' + col], "insertNumber", document.getElementById('square_' + (row - 1) + '_' + col)));
      if (confixWrapper("condition", "nextObject.style.backgroundColor", [""], [], "insertNumber", nextObject.style.backgroundColor)) 
      {
        while (row > 0 && nextObject.style.backgroundColor) 
          {
            row = confixWrapper("infix", "row = row - 1", [""], [], "insertNumber", row - 1);
            nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"insertNumber\", document.getElementById('square_' + row + '_' + col))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "insertNumber", document.getElementById('square_' + row + '_' + col)));
          }
      }
    }
  }
  if (confixWrapper("condition", "code == 40", [""], [], "insertNumber", code == 40)) 
  {
    if (confixWrapper("condition", "row < 8", [""], [], "insertNumber", row < 8)) 
    {
      nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + (row + 1) + '_' + col)\", [\"square_ + (row + 1) + _ + col\"], ['square_' + (row + 1) + '_' + col], \"insertNumber\", document.getElementById('square_' + (row + 1) + '_' + col))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + (row + 1) + '_' + col)", ["square_ + (row + 1) + _ + col"], ['square_' + (row + 1) + '_' + col], "insertNumber", document.getElementById('square_' + (row + 1) + '_' + col)));
      if (confixWrapper("condition", "nextObject.style.backgroundColor", [""], [], "insertNumber", nextObject.style.backgroundColor)) 
      {
        while (row < 8 && nextObject.style.backgroundColor) 
          {
            row = confixWrapper("infix", "row = row + 1", [""], [], "insertNumber", row + 1);
            nextObject = confixWrapper("infix", "nextObject = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"insertNumber\", document.getElementById('square_' + row + '_' + col))", [""], [], "insertNumber", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "insertNumber", document.getElementById('square_' + row + '_' + col)));
          }
      }
    }
  }
  if (confixWrapper("condition", "nextObject", [""], [], "insertNumber", nextObject)) 
  {
    confixWrapper("functionCall", "highlightSquare(false, nextObject)", ["false", "nextObject"], [false, nextObject], "insertNumber", highlightSquare(false, nextObject));
  }
  if (confixWrapper("condition", "code == 46 || code == 8", [""], [], "insertNumber", code == 46 || code == 8)) 
  {
    span.innerHTML = confixWrapper("infix", "span.innerHTML = ''", [""], [], "insertNumber", '');
    if (confixWrapper("condition", "code == 8", [""], [], "insertNumber", code == 8)) 
    return confixWrapper("return", "return false;", [""], [], "insertNumber", false);
  }
  if (confixWrapper("condition", "code > 96 && code <= 105", [""], [], "insertNumber", code > 96 && code <= 105)) 
  code -= 48;
  if (confixWrapper("condition", "code > 48 && code <= 57", [""], [], "insertNumber", code > 48 && code <= 57)) 
  {
    var theChar = confixWrapper("initvar", "var theChar = confixWrapper(\"functionCall\", \"String.fromCharCode(code)\", [\"code\"], [code], \"insertNumber\", String.fromCharCode(code))", [""], [], "insertNumber", confixWrapper("functionCall", "String.fromCharCode(code)", ["code"], [code], "insertNumber", String.fromCharCode(code)));
    span.innerHTML = confixWrapper("infix", "span.innerHTML = theChar", [""], [], "insertNumber", theChar);
  }
  confixWrapper("functionCall", "isGameFinished()", [], [], "insertNumber", isGameFinished());
}
function helpMe() {
  if (confixWrapper("condition", "gameFinished", [""], [], "helpMe", gameFinished)) 
  return confixWrapper("return", "return false;", [""], [], "helpMe", false);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"confirm('Do you want me to reveal a number for you?')\", [\"Do you want me to reveal a number for you?\"], ['Do you want me to reveal a number for you?'], \"helpMe\", confirm('Do you want me to reveal a number for you?'))", [""], [], "helpMe", confixWrapper("functionCall", "confirm('Do you want me to reveal a number for you?')", ["Do you want me to reveal a number for you?"], ['Do you want me to reveal a number for you?'], "helpMe", confirm('Do you want me to reveal a number for you?')))) 
  {
    var allreadyRevealed = confixWrapper("initvar", "var allreadyRevealed = true", [""], [], "helpMe", true);
    var counter = confixWrapper("initvar", "var counter = 0", [""], [], "helpMe", 0);
do {
      var row = confixWrapper("initvar", "var row = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"helpMe\", Math.random()) * 9], \"helpMe\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"helpMe\", Math.random()) * 9))", [""], [], "helpMe", confixWrapper("functionCall", "Math.floor(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "helpMe", Math.random()) * 9], "helpMe", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "helpMe", Math.random()) * 9)));
      var col = confixWrapper("initvar", "var col = confixWrapper(\"functionCall\", \"Math.floor(Math.random() * 9)\", [\"Math.random() * 9\"], [confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"helpMe\", Math.random()) * 9], \"helpMe\", Math.floor(confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"helpMe\", Math.random()) * 9))", [""], [], "helpMe", confixWrapper("functionCall", "Math.floor(Math.random() * 9)", ["Math.random() * 9"], [confixWrapper("functionCall", "Math.random()", [], [], "helpMe", Math.random()) * 9], "helpMe", Math.floor(confixWrapper("functionCall", "Math.random()", [], [], "helpMe", Math.random()) * 9)));
      var el = confixWrapper("initvar", "var el = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"helpMe\", document.getElementById('square_' + row + '_' + col))", [""], [], "helpMe", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "helpMe", document.getElementById('square_' + row + '_' + col)));
      var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"el.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"helpMe\", el.getElementsByTagName('SPAN'))", [""], [], "helpMe", confixWrapper("functionCall", "el.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "helpMe", el.getElementsByTagName('SPAN')));
      if (confixWrapper("condition", "spans[1].innerHTML.length == 0", [""], [], "helpMe", spans[1].innerHTML.length == 0)) 
      {
        spans[1].innerHTML = confixWrapper("infix", "spans[1].innerHTML = spans[0].innerHTML", ["spans[0]"], [spans[0]], "helpMe", spans[0].innerHTML);
        spans[1].style.color = confixWrapper("infix", "spans[1].style.color = '#FF0000'", [""], [], "helpMe", '#FF0000');
        allreadyRevealed = confixWrapper("infix", "allreadyRevealed = false", [""], [], "helpMe", false);
      }
      if (confixWrapper("condition", "el.style.backgroundColor", [""], [], "helpMe", el.style.backgroundColor)) 
      allreadyRevealed = confixWrapper("infix", "allreadyRevealed = true", [""], [], "helpMe", true);
      counter++;
    } while (allreadyRevealed && counter < 500);
  }
  confixWrapper("functionCall", "isGameFinished()", [], [], "helpMe", isGameFinished());
}
function isCorrect(divObj) {
  var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"divObj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"isCorrect\", divObj.getElementsByTagName('SPAN'))", [""], [], "isCorrect", confixWrapper("functionCall", "divObj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "isCorrect", divObj.getElementsByTagName('SPAN')));
  if (confixWrapper("condition", "spans[0].innerHTML == spans[1].innerHTML || spans[1].innerHTML.length == 0", [""], [], "isCorrect", spans[0].innerHTML == spans[1].innerHTML || spans[1].innerHTML.length == 0)) 
  return confixWrapper("return", "return true;", [""], [], "isCorrect", true);
  return confixWrapper("return", "return false;", [""], [], "isCorrect", false);
}
function getTopPos(inputObj) {
  var returnValue = confixWrapper("initvar", "var returnValue = inputObj.offsetTop", [""], [], "getTopPos", inputObj.offsetTop);
  while ((inputObj = confixWrapper("infix", "inputObj = inputObj.offsetParent", [""], [], "getTopPos", inputObj.offsetParent)) != null) 
    {
      returnValue += inputObj.offsetTop;
    }
  return confixWrapper("return", "return returnValue;", [""], [], "getTopPos", returnValue);
}
function getLeftPos(inputObj) {
  var returnValue = confixWrapper("initvar", "var returnValue = inputObj.offsetLeft", [""], [], "getLeftPos", inputObj.offsetLeft);
  while ((inputObj = confixWrapper("infix", "inputObj = inputObj.offsetParent", [""], [], "getLeftPos", inputObj.offsetParent)) != null) 
    returnValue += inputObj.offsetLeft;
  return confixWrapper("return", "return returnValue;", [""], [], "getLeftPos", returnValue);
}
function getPossibleNumbers(inputObj) {
  var noArray = confixWrapper("initvar", "var noArray = new Array()", [""], [], "getPossibleNumbers", new Array());
  var countNumbers = confixWrapper("initvar", "var countNumbers = 0", [""], [], "getPossibleNumbers", 0);
  var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"inputObj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"getPossibleNumbers\", inputObj.getElementsByTagName('SPAN'))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "inputObj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "getPossibleNumbers", inputObj.getElementsByTagName('SPAN')));
  if (confixWrapper("condition", "spans[0].innerHTML == spans[1].innerHTML", [""], [], "getPossibleNumbers", spans[0].innerHTML == spans[1].innerHTML)) 
  return confixWrapper("return", "return 0;", [""], [], "getPossibleNumbers", 0);
  var parentDiv = confixWrapper("initvar", "var parentDiv = inputObj.parentNode", [""], [], "getPossibleNumbers", inputObj.parentNode);
  var subDivs = confixWrapper("initvar", "var subDivs = confixWrapper(\"functionCall\", \"parentDiv.getElementsByTagName('DIV')\", [\"DIV\"], ['DIV'], \"getPossibleNumbers\", parentDiv.getElementsByTagName('DIV'))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "parentDiv.getElementsByTagName('DIV')", ["DIV"], ['DIV'], "getPossibleNumbers", parentDiv.getElementsByTagName('DIV')));
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "getPossibleNumbers", 0); confixWrapper("loopCondition", "no < subDivs.length", ["no", "subDivs"], [no, subDivs], "getPossibleNumbers", no < subDivs.length); no++) 
    {
      if (confixWrapper("condition", "subDivs[no] != inputObj", [""], [], "getPossibleNumbers", subDivs[no] != inputObj)) 
      {
        var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"subDivs[no].getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"getPossibleNumbers\", subDivs[no].getElementsByTagName('SPAN'))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "subDivs[no].getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "getPossibleNumbers", subDivs[no].getElementsByTagName('SPAN')));
        if (confixWrapper("condition", "spans[0].innerHTML == spans[1].innerHTML || subDivs[no].style.backgroundColor.length > 1", [""], [], "getPossibleNumbers", spans[0].innerHTML == spans[1].innerHTML || subDivs[no].style.backgroundColor.length > 1)) 
        {
          if (confixWrapper("condition", "!noArray[spans[0].innerHTML]", [""], [], "getPossibleNumbers", !noArray[spans[0].innerHTML])) 
          {
            noArray[spans[0].innerHTML] = confixWrapper("infix", "noArray[spans[0].innerHTML] = true", [""], [], "getPossibleNumbers", true);
            countNumbers++;
          }
        }
      }
    }
  var numbers = confixWrapper("initvar", "var numbers = confixWrapper(\"functionCall\", \"inputObj.id.split('_')\", [\"_\"], ['_'], \"getPossibleNumbers\", inputObj.id.split('_'))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "inputObj.id.split('_')", ["_"], ['_'], "getPossibleNumbers", inputObj.id.split('_')));
  var row = confixWrapper("initvar", "var row = numbers[1]", [""], [], "getPossibleNumbers", numbers[1]);
  var col = confixWrapper("initvar", "var col = numbers[2]", [""], [], "getPossibleNumbers", numbers[2]);
  for (var no = confixWrapper("initvar", "var no = 0", [""], [], "getPossibleNumbers", 0); confixWrapper("loopCondition", "no < 9", ["no"], [no], "getPossibleNumbers", no < 9); no++) 
    {
      var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + no)\", [\"square_ + row + _ + no\"], ['square_' + row + '_' + no], \"getPossibleNumbers\", document.getElementById('square_' + row + '_' + no))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + no)", ["square_ + row + _ + no"], ['square_' + row + '_' + no], "getPossibleNumbers", document.getElementById('square_' + row + '_' + no)));
      if (confixWrapper("condition", "obj != inputObj", [""], [], "getPossibleNumbers", obj != inputObj)) 
      {
        var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"getPossibleNumbers\", obj.getElementsByTagName('SPAN'))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "obj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "getPossibleNumbers", obj.getElementsByTagName('SPAN')));
        if (confixWrapper("condition", "spans[0].innerHTML == spans[1].innerHTML || !spans[0].style.display", [""], [], "getPossibleNumbers", spans[0].innerHTML == spans[1].innerHTML || !spans[0].style.display)) 
        {
          if (confixWrapper("condition", "!noArray[spans[0].innerHTML]", [""], [], "getPossibleNumbers", !noArray[spans[0].innerHTML])) 
          {
            noArray[spans[0].innerHTML] = confixWrapper("infix", "noArray[spans[0].innerHTML] = true", [""], [], "getPossibleNumbers", true);
            countNumbers++;
          }
        }
      }
      var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('square_' + no + '_' + col)\", [\"square_ + no + _ + col\"], ['square_' + no + '_' + col], \"getPossibleNumbers\", document.getElementById('square_' + no + '_' + col))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "document.getElementById('square_' + no + '_' + col)", ["square_ + no + _ + col"], ['square_' + no + '_' + col], "getPossibleNumbers", document.getElementById('square_' + no + '_' + col)));
      if (confixWrapper("condition", "obj != inputObj", [""], [], "getPossibleNumbers", obj != inputObj)) 
      {
        var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"getPossibleNumbers\", obj.getElementsByTagName('SPAN'))", [""], [], "getPossibleNumbers", confixWrapper("functionCall", "obj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "getPossibleNumbers", obj.getElementsByTagName('SPAN')));
        if (confixWrapper("condition", "spans[0].innerHTML == spans[1].innerHTML || !spans[0].style.display", [""], [], "getPossibleNumbers", spans[0].innerHTML == spans[1].innerHTML || !spans[0].style.display)) 
        {
          if (confixWrapper("condition", "!noArray[spans[0].innerHTML]", [""], [], "getPossibleNumbers", !noArray[spans[0].innerHTML])) 
          {
            noArray[spans[0].innerHTML] = confixWrapper("infix", "noArray[spans[0].innerHTML] = true", [""], [], "getPossibleNumbers", true);
            countNumbers++;
          }
        }
      }
    }
  return confixWrapper("return", "return countNumbers;", [""], [], "getPossibleNumbers", countNumbers);
}
function showHint() {
  var hintDiv = confixWrapper("initvar", "var hintDiv = confixWrapper(\"functionCall\", \"document.getElementById('hintDiv')\", [\"hintDiv\"], ['hintDiv'], \"showHint\", document.getElementById('hintDiv'))", [""], [], "showHint", confixWrapper("functionCall", "document.getElementById('hintDiv')", ["hintDiv"], ['hintDiv'], "showHint", document.getElementById('hintDiv')));
  var hintDivInner = confixWrapper("initvar", "var hintDivInner = confixWrapper(\"functionCall\", \"hintDiv.getElementsByTagName('DIV')\", [\"DIV\"], ['DIV'], \"showHint\", hintDiv.getElementsByTagName('DIV'))[0]", [""], [], "showHint", confixWrapper("functionCall", "hintDiv.getElementsByTagName('DIV')", ["DIV"], ['DIV'], "showHint", hintDiv.getElementsByTagName('DIV'))[0]);
  var maxExistingNo = confixWrapper("initvar", "var maxExistingNo = 0", [""], [], "showHint", 0);
  var objectToTry = confixWrapper("initvar", "var objectToTry = false", [""], [], "showHint", false);
  for (var row = confixWrapper("initvar", "var row = 0", [""], [], "showHint", 0); confixWrapper("loopCondition", "row < 9", ["row"], [row], "showHint", row < 9); row++) 
    {
      for (var col = confixWrapper("initvar", "var col = 0", [""], [], "showHint", 0); confixWrapper("loopCondition", "col < 9", ["col"], [col], "showHint", col < 9); col++) 
        {
          var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"showHint\", document.getElementById('square_' + row + '_' + col))", [""], [], "showHint", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "showHint", document.getElementById('square_' + row + '_' + col)));
          if (confixWrapper("condition", "obj.style.backgroundColor", [""], [], "showHint", obj.style.backgroundColor)) 
          continue;
          if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isCorrect(obj)\", [\"obj\"], [obj], \"showHint\", isCorrect(obj))", [""], [], "showHint", !confixWrapper("functionCall", "isCorrect(obj)", ["obj"], [obj], "showHint", isCorrect(obj)))) 
          {
            hintDivInner.innerHTML = confixWrapper("infix", "hintDivInner.innerHTML = 'This one is wrong'", [""], [], "showHint", 'This one is wrong');
            hintDiv.style.left = confixWrapper("infix", "hintDiv.style.left = confixWrapper(\"functionCall\", \"getLeftPos(obj)\", [\"obj\"], [obj], \"showHint\", getLeftPos(obj)) + 'px'", [""], [], "showHint", confixWrapper("functionCall", "getLeftPos(obj)", ["obj"], [obj], "showHint", getLeftPos(obj)) + 'px');
            hintDiv.style.top = confixWrapper("infix", "hintDiv.style.top = confixWrapper(\"functionCall\", \"getTopPos(obj)\", [\"obj\"], [obj], \"showHint\", getTopPos(obj)) - 50 + 'px'", [""], [], "showHint", confixWrapper("functionCall", "getTopPos(obj)", ["obj"], [obj], "showHint", getTopPos(obj)) - 50 + 'px');
            hintDiv.style.display = confixWrapper("infix", "hintDiv.style.display = 'block'", [""], [], "showHint", 'block');
            return;
          }
          var existingNumbers = confixWrapper("initvar", "var existingNumbers = confixWrapper(\"functionCall\", \"getPossibleNumbers(obj)\", [\"obj\"], [obj], \"showHint\", getPossibleNumbers(obj))", [""], [], "showHint", confixWrapper("functionCall", "getPossibleNumbers(obj)", ["obj"], [obj], "showHint", getPossibleNumbers(obj)));
          if (confixWrapper("condition", "existingNumbers > maxExistingNo", [""], [], "showHint", existingNumbers > maxExistingNo)) 
          {
            maxExistingNo = confixWrapper("infix", "maxExistingNo = existingNumbers", [""], [], "showHint", existingNumbers);
            objectToTry = confixWrapper("infix", "objectToTry = obj", [""], [], "showHint", obj);
          }
        }
    }
  if (confixWrapper("condition", "objectToTry", [""], [], "showHint", objectToTry)) 
  {
    hintDivInner.innerHTML = confixWrapper("infix", "hintDivInner.innerHTML = 'Try this one '", [""], [], "showHint", 'Try this one ');
    hintDiv.style.left = confixWrapper("infix", "hintDiv.style.left = confixWrapper(\"functionCall\", \"getLeftPos(objectToTry)\", [\"objectToTry\"], [objectToTry], \"showHint\", getLeftPos(objectToTry)) + 'px'", [""], [], "showHint", confixWrapper("functionCall", "getLeftPos(objectToTry)", ["objectToTry"], [objectToTry], "showHint", getLeftPos(objectToTry)) + 'px');
    hintDiv.style.top = confixWrapper("infix", "hintDiv.style.top = confixWrapper(\"functionCall\", \"getTopPos(objectToTry)\", [\"objectToTry\"], [objectToTry], \"showHint\", getTopPos(objectToTry)) - 50 + 'px'", [""], [], "showHint", confixWrapper("functionCall", "getTopPos(objectToTry)", ["objectToTry"], [objectToTry], "showHint", getTopPos(objectToTry)) - 50 + 'px');
    hintDiv.style.display = confixWrapper("infix", "hintDiv.style.display = 'block'", [""], [], "showHint", 'block');
  }
}
function revealAll() {
  for (var row = confixWrapper("initvar", "var row = 0", [""], [], "revealAll", 0); confixWrapper("loopCondition", "row < 9", ["row"], [row], "revealAll", row < 9); row++) 
    {
      for (var col = confixWrapper("initvar", "var col = 0", [""], [], "revealAll", 0); confixWrapper("loopCondition", "col < 9", ["col"], [col], "revealAll", col < 9); col++) 
        {
          var obj = confixWrapper("initvar", "var obj = confixWrapper(\"functionCall\", \"document.getElementById('square_' + row + '_' + col)\", [\"square_ + row + _ + col\"], ['square_' + row + '_' + col], \"revealAll\", document.getElementById('square_' + row + '_' + col))", [""], [], "revealAll", confixWrapper("functionCall", "document.getElementById('square_' + row + '_' + col)", ["square_ + row + _ + col"], ['square_' + row + '_' + col], "revealAll", document.getElementById('square_' + row + '_' + col)));
          var spans = confixWrapper("initvar", "var spans = confixWrapper(\"functionCall\", \"obj.getElementsByTagName('SPAN')\", [\"SPAN\"], ['SPAN'], \"revealAll\", obj.getElementsByTagName('SPAN'))", [""], [], "revealAll", confixWrapper("functionCall", "obj.getElementsByTagName('SPAN')", ["SPAN"], ['SPAN'], "revealAll", obj.getElementsByTagName('SPAN')));
          spans[0].style.display = confixWrapper("infix", "spans[0].style.display = ''", [""], [], "revealAll", '');
          spans[1].style.display = confixWrapper("infix", "spans[1].style.display = 'none'", [""], [], "revealAll", 'none');
          spans[1].style.color = confixWrapper("infix", "spans[1].style.color = '#000000'", [""], [], "revealAll", '#000000');
        }
    }
  gameFinished = confixWrapper("infix", "gameFinished = true", [""], [], "revealAll", true);
}
function switchLevel(initLevel, linkObj) {
  var confirmSwitch = confixWrapper("initvar", "var confirmSwitch = gameFinished", [""], [], "switchLevel", gameFinished);
  if (confixWrapper("condition", "!confirmSwitch", [""], [], "switchLevel", !confirmSwitch)) 
  confirmSwitch = confixWrapper("infix", "confirmSwitch = confixWrapper(\"functionCall\", \"confirm('Click OK to finish the current game')\", [\"Click OK to finish the current game\"], ['Click OK to finish the current game'], \"switchLevel\", confirm('Click OK to finish the current game'))", [""], [], "switchLevel", confixWrapper("functionCall", "confirm('Click OK to finish the current game')", ["Click OK to finish the current game"], ['Click OK to finish the current game'], "switchLevel", confirm('Click OK to finish the current game')));
  if (confixWrapper("condition", "confirmSwitch", [""], [], "switchLevel", confirmSwitch)) 
  {
    var parentObj = confixWrapper("initvar", "var parentObj = linkObj.parentNode.parentNode", [""], [], "switchLevel", linkObj.parentNode.parentNode);
    var links = confixWrapper("initvar", "var links = confixWrapper(\"functionCall\", \"parentObj.getElementsByTagName('A')\", [\"A\"], ['A'], \"switchLevel\", parentObj.getElementsByTagName('A'))", [""], [], "switchLevel", confixWrapper("functionCall", "parentObj.getElementsByTagName('A')", ["A"], ['A'], "switchLevel", parentObj.getElementsByTagName('A')));
    for (var no = confixWrapper("initvar", "var no = 0", [""], [], "switchLevel", 0); confixWrapper("loopCondition", "no < links.length", ["no", "links"], [no, links], "switchLevel", no < links.length); no++) 
      {
        links[no].style.fontWeight = confixWrapper("infix", "links[no].style.fontWeight = 'normal'", [""], [], "switchLevel", 'normal');
      }
    linkObj.style.fontWeight = confixWrapper("infix", "linkObj.style.fontWeight = 'bold'", [""], [], "switchLevel", 'bold');
    level = confixWrapper("infix", "level = initLevel", [""], [], "switchLevel", initLevel);
    confixWrapper("functionCall", "setTimeout('initSudoku()', 20)", ["initSudoku()", "20"], ['initSudoku()', 20], "switchLevel", setTimeout('initSudoku()', 20));
  }
}
window.onload = confixWrapper("infix", "window.onload = initSudoku", [""], [], "", initSudoku);
