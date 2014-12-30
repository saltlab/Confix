//
// Game
//
function Game() {
  this.board = new Board();

  this.run = function() {
    this.board.start();
  }
}

//
// Board
//
function Board() {
  var self  = this;
  this.grid = new Grid();
  
  this.start = function() {
    self.grid.createCells();
    self.registerMouse();
  }

  this.registerMouse = function() {
    document.getElementById("div-selector").onclick = self.onClick;
  }

  this.onClick = function(e) {
    var column = self.grid.getCellCol( getMouseX(e) );
    var row    = self.grid.getCellRow( getMouseY(e) );
    var color  = self.grid.getCellColor(column, row);

    if ( self.isBusy(column, row, color) ) {
	  self.removeNeighbours(column, row, color);
	  self.dropNeighbours();
    }
    
    if (self.grid.busy == 0)
      alert("Congratulations!!! You have removed all colors from the board.\r\nClose this message and press F5 to play a new game.");
  }

  this.isBusy = function(column, row, color) {
    return( self.isColoured(color) && self.haveNeighbours(column, row, color) );
  }
  
  this.isColoured = function(color) {
    return(color != self.grid.noColor);
  }

  this.haveNeighbours = function(column, row, color) {
    return(
      ( (column > 0                    ) && (self.grid.getCellColor(column - 1, row) == color) ) ||
      ( (column < self.grid.columns - 1) && (self.grid.getCellColor(column + 1, row) == color) ) ||
      ( (row    > 0                    ) && (self.grid.getCellColor(column, row - 1) == color) ) ||
      ( (row    < self.grid.rows - 1   ) && (self.grid.getCellColor(column, row + 1) == color) ) );
  }

  this.removeNeighbours = function(column, row, color) {
    var y0 = row;
    while( (y0 > 0) && (self.grid.getCellColor(column, y0 - 1) == color) )
      self.grid.removeCell(column, -- y0);

    self.grid.removeCell(column, row);
    
    var y1 = row;
    while( (y1 < self.grid.rows - 1) && (self.grid.getCellColor(column, y1 + 1) == color) )
      self.grid.removeCell(column, ++ y1);
  
    for (var y = y0; y <= y1; ++ y) {
      if ( (column > 0) && (self.grid.getCellColor(column - 1, y) == color) )
        self.removeNeighbours(column - 1, y, color);
      if ( (column < self.grid.columns - 1) && (self.grid.getCellColor(column + 1, y) == color) )
        self.removeNeighbours(column + 1, y, color);
    }
  }

  this.dropNeighbours = function() {
    for (var column = 0; column < self.grid.columns; ++ column)
      for (var row = self.grid.rows - 1; row > 0; -- row)
        if (self.grid.getCellColor(column, row) == self.grid.noColor)
          for (var y = row - 1; y >= 0; -- y)
            if (self.grid.getCellColor(column, y) != self.grid.noColor) {
              self.grid.moveCell(column, y, row);
              break;
            }
  }
}

//
// Grid
//
function Grid() {
  this.rows         = 40;
  this.columns      = 25;
  this.cellWidth    = 8;
  this.cellHeight   = 8;
  this.maxRunLength = 5;
  this.colors       = new Array("#FFFF00", "#FF7F00", "#CF0000");
  this.noColor      = -1;
  
  this.div   = document.getElementById("div-board");
  this.cells = new Array();
  this.busy  = this.rows * this.columns;
  
  this.createCells = function() {
    var run   = 1;
    var color = 0;

    for (var column = 0; column < this.columns; ++ column) {

      this.cells[column] = new Array();

      for (var row = 0; row < this.rows; ++ row) {

        if (-- run == 0){
          run   = Math.floor( Math.random() * this.maxRunLength) + 1;
          color = Math.floor( Math.random() * this.colors.length);
        }

        this.createCell(column, row, color);
      }
    }
  }

  this.createCell = function(column, row, color) {
    var div = document.createElement('div');

    div.id               = this.getCellId(column, row);
    div.className        = "cell";
    div.style.left       = String( this.getCellLeft(column) ) + "px";
    div.style.top        = String( this.getCellTop(row) ) + "px";
    div.style.width      = String(this.cellWidth ) + "px";
    div.style.height     = String(this.cellHeight) + "px";
    div.style.background = this.colors[color];

    this.div.appendChild(div);
    
    this.setCellColor(column, row, color);
  }

  this.removeCell = function(column, row) {
    this.div.removeChild( document.getElementById( this.getCellId(column, row) ) );

    this.setCellColor(column, row, this.noColor);
    
    -- this.busy;
  }

  this.moveCell = function(column, oldRow, newRow) {
    var div = document.getElementById( this.getCellId(column, oldRow) );
    div.style.top = String( this.getCellTop(newRow) ) + "px";
    div.id = this.getCellId(column, newRow);

    var color = this.getCellColor(column, oldRow);
    this.setCellColor(column, newRow, color);
    this.setCellColor(column, oldRow, this.noColor);
  }

  this.getCellId = function(column, row) {
    return( "cell" + String( column + (row * this.rows) ) );
  }

  this.getCellLeft = function(column) {
    return( column * (this.cellWidth + 1) + 1 );
  }
  
  this.getCellTop = function(row) {
    return( row * (this.cellHeight + 1) + 1 );
  }

  this.getCellCol = function(mouseX) {
    return( Math.floor(mouseX / (this.cellWidth + 1) ) );
  }

  this.getCellRow = function(mouseY) {
    return( Math.floor(mouseY / (this.cellHeight + 1) ) );
  }
  
  this.getCellColor = function(column, row) {
    return( this.cells[column][row] );
  }
  
  this.setCellColor = function(column, row, color) {
    this.cells[column][row] = color;
  }
}

//
// Utils
//
function getMouseX(e) {
  return(e? e.layerX : window.event.offsetX);
}
  
function getMouseY(e) {
  return(e? e.layerY: window.event.offsetY);
}

//
// Instance and start Game
//
var game = new Game;
game.run();

