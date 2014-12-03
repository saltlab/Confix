var Jigsaw = function () {

  var constructor = function Jigsaw(canvasID, rows, columns, mode) {
    var jigsaw = this;

    jigsaw.MODE = mode;
    jigsaw.TOTAL_ROWS = rows;
    jigsaw.TOTAL_COLUMNS = columns;

    jigsaw.background_image = document.getElementById("background");

    jigsaw.canvas = document.getElementById(canvasID);
    jigsaw.ctx = jigsaw.canvas.getContext('2d');
    jigsaw.ctx.canvas.width = window.innerWidth;
    jigsaw.ctx.canvas.height = window.innerHeight;

    jigsaw.selectedPiece = null;

    jigsaw.PUZZLE_BOARD_WIDTH = jigsaw.ctx.canvas.width / 2; // 50% of the screen
    jigsaw.PUZZLE_BOARD_HEIGHT = jigsaw.ctx.canvas.height / 2;

    // Set jigsaw to middle
    jigsaw.PUZZLE_PADDING_TOP = jigsaw.PUZZLE_BOARD_HEIGHT / 2; //50% of the board = 25% of the screen
    jigsaw.PUZZLE_PADDING_LEFT = jigsaw.PUZZLE_BOARD_WIDTH / 2;

    jigsaw.PUZZLE_PIECE_WIDTH = Math.round(jigsaw.PUZZLE_BOARD_WIDTH / jigsaw.TOTAL_COLUMNS);
    jigsaw.PUZZLE_PIECE_HEIGHT = Math.round(jigsaw.PUZZLE_BOARD_HEIGHT / jigsaw.TOTAL_ROWS);

    jigsaw.flag = 0;

    jigsaw.loadGame = function () {
      jigsaw.drawBackGround();
      jigsaw.showIndex();

      jigsaw.registerTouchEvents();
    };

    jigsaw.registerTouchEvents = function () {

      var arrow = document.getElementById("backArrow");
      arrow.onclick = function () {
        jigsaw.showIndex();
      };

      var pig = document.getElementById("indexPig");
      jigsaw.addEventsToIndexSelector(pig);

      var sheep = document.getElementById("indexSheep");
      jigsaw.addEventsToIndexSelector(sheep);

      var duck = document.getElementById("indexDuck");
      jigsaw.addEventsToIndexSelector(duck);

      var donkey = document.getElementById("indexDonkey");
      jigsaw.addEventsToIndexSelector(donkey);

      jigsaw.canvas.onmousedown = jigsaw.handleOnMouseDown;
      jigsaw.canvas.onmouseup = jigsaw.handleOnMouseUp;
      jigsaw.canvas.onmousemove = jigsaw.handleOnMouseMove;

      jigsaw.canvas.addEventListener("touchstart", jigsaw.handleOnMouseDown, false);
      jigsaw.canvas.addEventListener("touchend", jigsaw.handleOnMouseUp, false);
      jigsaw.canvas.addEventListener("touchmove", jigsaw.handleOnMouseMove, false);
    };

    // Used to set events on index animals
    jigsaw.addEventsToIndexSelector = function (obj) {
      obj.onmousedown = jigsaw.moveIn;
      obj.onmouseup = jigsaw.moveOut;
      obj.addEventListener("touchstart", jigsaw.moveIn, false);
      obj.addEventListener("touchmove", jigsaw.drag, false)
      obj.addEventListener("touchend", jigsaw.moveOut, false);
    };

    jigsaw.moveIn = function (e) {
      e.preventDefault();//Stops the default behavior
      jigsaw.flag = 0;
      this.style.top = jigsaw.move(this.style.top, 5);
      this.style.left = jigsaw.move(this.style.left, 5);
      this.style.width = jigsaw.move(this.style.width, -20);
    };

    jigsaw.drag = function (e) {
      e.preventDefault();
      jigsaw.flag = 1;
    };


    jigsaw.moveOut = function (e) {
      e.preventDefault();//Stops the default behavior
      if (jigsaw.flag === 0) {
        jigsaw.puzzlePicture = this;
        jigsaw.startPuzzle();
      } else{
        //detect if touch drag is outside animal, if reset to index
      }
    };

    jigsaw.move = function (sizeInPx, step) {
      var size = parseInt(sizeInPx);
      size += step;
      return size + 'px';
    };

    jigsaw.numberOfPieces = function () {
      return jigsaw.TOTAL_ROWS * jigsaw.TOTAL_COLUMNS;
    };

    jigsaw.showIndex = function () {
      jigsaw.arr = jigsaw.findPossibleStartSlots();

      jigsaw.clearCanvas();
      jigsaw.drawBackGround();

      var arrow = document.getElementById("backArrow");
      arrow.style.top = jigsaw.calcHeightFromReference(10);
      arrow.style.left = jigsaw.calcWidthFromReference(10);
      arrow.style.width = jigsaw.calcWidthFromReference(60);

      // Scale and place index animals
      var pig = document.getElementById("indexPig");
      pig.style.top = jigsaw.calcHeightFromReference(300);
      pig.style.left = jigsaw.calcWidthFromReference(20);
      pig.style.width = jigsaw.calcWidthFromReference(170);

      var sheep = document.getElementById("indexSheep");
      sheep.style.top = jigsaw.calcHeightFromReference(300);
      sheep.style.left = jigsaw.calcWidthFromReference(250);
      sheep.style.width = jigsaw.calcWidthFromReference(170);

      var duck = document.getElementById("indexDuck");
      duck.style.top = jigsaw.calcHeightFromReference(410);
      duck.style.left = jigsaw.calcWidthFromReference(690);
      duck.style.width = jigsaw.calcWidthFromReference(70);

      var donkey = document.getElementById("indexDonkey");
      donkey.style.top = jigsaw.calcHeightFromReference(300);
      donkey.style.left = jigsaw.calcWidthFromReference(430);
      donkey.style.width = jigsaw.calcWidthFromReference(170);

      // Show index
      document.getElementById("backArrow").style.display = 'none';
      document.getElementById("indexScreen").style.visibility = 'visible';
    }

    jigsaw.calcHeightFromReference = function (p) {
      var refHeight = 577;
      return Math.round(p / refHeight * jigsaw.ctx.canvas.height) + "px";
    };
    jigsaw.calcWidthFromReference = function (p) {
      var refWidth = 962;
      return Math.round(p / refWidth * jigsaw.ctx.canvas.width) + "px";
    };

    jigsaw.startPuzzle = function () {
      // Hide index and show arrow
      document.getElementById("indexScreen").style.visibility = 'hidden';
      document.getElementById("backArrow").style.display = 'block';

      // Clear old pieces
      jigsaw.pieceList = [];
      jigsaw.slotList = [];

      jigsaw.makeBoardSlotsAndPieces();
      jigsaw.updateScreen();
    };

    jigsaw.makeBoardSlotsAndPieces = function () {
      for (var i = 0; i < jigsaw.numberOfPieces(); i++) {
        var piece = jigsaw.makePuzzlePiece(i);
        jigsaw.pieceList.push(piece);

        var slot = jigsaw.makeBoardSlot(i);
        jigsaw.slotList.push(slot);
      }
    };

    // Game is redrawn on every movement
    // If we could XOR the moved piece that would be faster.
    jigsaw.updateScreen = function () {
      jigsaw.clearCanvas();
      jigsaw.makeBoard();
      jigsaw.updateAllNonSelectedPieces();

      if (jigsaw.selectedPiece) {
        // Draw selected block while it is moving
        jigsaw.drawSection(jigsaw.selectedPiece);
      }
    };

    jigsaw.makeBoard = function () {
      jigsaw.drawBackGround();
      jigsaw.drawPreviewPicture();
      jigsaw.drawGridLines();
    };

    // Draw all pieces thats not selected
    jigsaw.updateAllNonSelectedPieces = function () {
      for (var i = 0; i < jigsaw.pieceList.length; i++) {
        var piece = jigsaw.pieceList[i];
        if (piece.isSelected === false) {
          jigsaw.drawSection(piece);
        }
      }
    };

    jigsaw.finishGame = function () {
      intel.xdk.player.startAudio("Audio/finish.mp3", false);

      jigsaw.remove_width = jigsaw.PUZZLE_PIECE_WIDTH;
      jigsaw.remove_height = jigsaw.PUZZLE_PIECE_HEIGHT;
      jigsaw.interval = setInterval(function () {
        jigsaw.endGame();
      }, 100);
    };

    jigsaw.endGame = function () {
      jigsaw.remove_width -= jigsaw.PUZZLE_BOARD_WIDTH / 20;
      jigsaw.remove_height -= jigsaw.PUZZLE_BOARD_HEIGHT / 20;

      if (jigsaw.remove_width >= 0 && jigsaw.remove_height >= 0) {
        jigsaw.clearCanvas();
        jigsaw.drawBackGround();

        // Redraw all pieces
        for (var i = 0; i < jigsaw.pieceList.length; i++) {
          var imgBlock = jigsaw.pieceList[i];
          imgBlock.x += jigsaw.PUZZLE_BOARD_WIDTH / 40;
          imgBlock.y += jigsaw.PUZZLE_BOARD_HEIGHT / 40;
          jigsaw.drawSection(imgBlock, jigsaw.remove_width, jigsaw.remove_height);
        }
      } else {
        clearInterval(jigsaw.interval);
        // Game and anim has ended. Go to index
        jigsaw.showIndex();
      }
    };

    jigsaw.handleOnMouseDown = function (e) {
      e.preventDefault();//Stops the default behavior
      // remove old selected
      if (jigsaw.selectedPiece !== null) {
        jigsaw.pieceList[jigsaw.selectedPiece.no].isSelected = false;
      }

      jigsaw.selectedPiece = jigsaw.findSelectedPuzzlePiece(e.pageX, e.pageY);

      if (jigsaw.selectedPiece) {
        jigsaw.pieceList[jigsaw.selectedPiece.no].isSelected = true;
        jigsaw.offsetX = e.pageX - jigsaw.selectedPiece.x;
        jigsaw.offsetY = e.pageY - jigsaw.selectedPiece.y;
      }
    };

    jigsaw.handleOnMouseUp = function (e) {
      //In hard mode blocks will snapp to any slot, in easy they will not
      if (jigsaw.selectedPiece) {
        var index = jigsaw.selectedPiece.no;
        if (jigsaw.MODE == "HARD") {

          var hoverSlot = jigsaw.checkIfWeHoverRightSlot();
          if (hoverSlot) {
            // Snap
            jigsaw.pieceList[index].x = hoverSlot.x;
            jigsaw.pieceList[index].y = hoverSlot.y;
          } else {
            // Save position on drop
            jigsaw.pieceList[index].x = jigsaw.selectedPiece.x;
            jigsaw.pieceList[index].y = jigsaw.selectedPiece.y;
          }
        } else {
          // save position on drop
          jigsaw.pieceList[index].x = jigsaw.selectedPiece.x;
          jigsaw.pieceList[index].y = jigsaw.selectedPiece.y;
        }

        // Unselect piece
        jigsaw.pieceList[index].isSelected = false;
        jigsaw.selectedPiece = null;
        jigsaw.updateScreen();

        if (jigsaw.isFinished()) {
          jigsaw.finishGame();
        }
      }
    };

    jigsaw.handleOnMouseMove = function (e) {
      e.preventDefault();//Stops the default behavior

      if (jigsaw.selectedPiece) {
        var hoverSlot = jigsaw.checkIfWeHoverRightSlot();
        if (hoverSlot) {
          if (jigsaw.MODE == "EASY") {
            // Easy mode and we hover the right slot.. lets snap
            var i = jigsaw.selectedPiece.no;
            jigsaw.pieceList[i].x = hoverSlot.x;
            jigsaw.pieceList[i].y = hoverSlot.y;

            // Unselect piece
            jigsaw.pieceList[i].isSelected = false;
            jigsaw.selectedPiece = null;

            jigsaw.updateScreen();

            // Player can be finnished as he does not need to let go of piece
            if (jigsaw.isFinished()) {
              jigsaw.finishGame();
            }
          } else {
            // Dont snap automatic in HARD mode
            //Move
            jigsaw.selectedPiece.x = e.pageX - jigsaw.offsetX;
            jigsaw.selectedPiece.y = e.pageY - jigsaw.offsetY;

            jigsaw.updateScreen();
          }
        } else {
          // Not hovering the right slot
          //Move
          jigsaw.selectedPiece.x = e.pageX - jigsaw.offsetX;
          jigsaw.selectedPiece.y = e.pageY - jigsaw.offsetY;

          jigsaw.updateScreen();
        }
      }
    };

    // Check if selected piece is close to correct slot
    jigsaw.checkIfWeHoverRightSlot = function () {
      var correctSlot = jigsaw.slotList[jigsaw.selectedPiece.no];

      var offsetX = Math.abs(jigsaw.selectedPiece.x - correctSlot.x);
      var offsetY = Math.abs(jigsaw.selectedPiece.y - correctSlot.y);

      var errorMarginX = jigsaw.PUZZLE_BOARD_WIDTH / 20;
      var errorMarginY = jigsaw.PUZZLE_BOARD_HEIGHT / 20;

      if (offsetX < errorMarginX && offsetY < errorMarginY) {
        return correctSlot;
      }
      return null;
    };

    // todo: her kan vi velge noen "gode" plasser utenfor brettet og sette brikkene der før spillet (random)
    // Give pieces a random x and y start position (by index)
    jigsaw.makePuzzlePiece = function (index) {

      var tt = jigsaw.arr[index];

      var randValX = tt[0];
      var randValY = tt[1];


      return new puzzlePiece(index, randValX, randValY);
    };

    jigsaw.shuffle = function (array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    jigsaw.findPossibleStartSlots = function () {
      var arr = [];

      var marginY = jigsaw.PUZZLE_PADDING_TOP / 4; // Margin for random movement 25% of the outside
      var marginX = jigsaw.PUZZLE_PADDING_LEFT / 4;

      var slotsX = jigsaw.TOTAL_COLUMNS + 2; // +2  for each side
      var slotsY = jigsaw.TOTAL_ROWS;

      var slotWidth = jigsaw.ctx.canvas.width / slotsX;

      for (var i = 0; i < slotsX; i++) {
        var x1 = i * slotWidth + Math.random() * marginX;
        var y1 = Math.round(Math.random() * marginY);
        arr.push([x1, y1]);

        var x2 = i * slotWidth + Math.random() * marginX;
        var y2 = Math.round(jigsaw.PUZZLE_BOARD_HEIGHT + jigsaw.PUZZLE_PADDING_TOP + (Math.random() * marginY));
        arr.push([x1, y2]);
      }

      for (var j = 0; j < slotsY; j++) {
        var x1 = Math.random() * marginX;
        var y1 = jigsaw.PUZZLE_PADDING_TOP + (j * jigsaw.PUZZLE_PIECE_HEIGHT);
        arr.push([x1, y1]);

        var x2 = jigsaw.PUZZLE_BOARD_WIDTH + jigsaw.PUZZLE_PADDING_LEFT + Math.random() * marginX;
        var y2 = jigsaw.PUZZLE_PADDING_TOP + (j * jigsaw.PUZZLE_PIECE_HEIGHT);
        arr.push([x2, y2]);
      }

      arr = jigsaw.shuffle(arr);

      var numberOfPieces = jigsaw.numberOfPieces();
      var numberOfStartSlots = arr.length;
      var numberToRemove = numberOfStartSlots - numberOfPieces;
      arr.splice(numberOfPieces, numberToRemove);

      return arr;
    };


    // Make a given slot (by its index)
    jigsaw.makeBoardSlot = function (index) {
      var x = jigsaw.PUZZLE_PADDING_LEFT + (index % jigsaw.TOTAL_COLUMNS) * jigsaw.PUZZLE_PIECE_WIDTH;
      var y = jigsaw.PUZZLE_PADDING_TOP + Math.floor(index / jigsaw.TOTAL_COLUMNS) * jigsaw.PUZZLE_PIECE_HEIGHT;

      return new puzzleSlot(index, x, y);
    };

    // Get the piece given x and y
    jigsaw.findSelectedPuzzlePiece = function (x, y) {
      for (var i = jigsaw.pieceList.length - 1; i >= 0; i--) {
        var piece = jigsaw.pieceList[i];

        var x1 = piece.x;
        var x2 = x1 + jigsaw.PUZZLE_PIECE_WIDTH;

        var y1 = piece.y;
        var y2 = y1 + jigsaw.PUZZLE_PIECE_HEIGHT;

        if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
          return piece;
        }
      }
      return null;
    };

    // Check if all pieces are in the right slot
    jigsaw.isFinished = function () {
      for (var i = 0; i < jigsaw.numberOfPieces(); i++) {
        var piece = jigsaw.pieceList[i];
        var slot = jigsaw.slotList[i];

        if ((piece.x != slot.x) || (piece.y != slot.y)) {
          // If one img is not onits slot you are not finished
          return false;
        }
      }
      return true;
    };

    // Clear all of the canvas
    jigsaw.clearCanvas = function () {
      jigsaw.ctx.clearRect(0, 0, jigsaw.canvas.width, jigsaw.canvas.height);
    };

    jigsaw.drawGridLines = function () {
      jigsaw.ctx.strokeStyle = "#000000";
      jigsaw.ctx.lineWidth = 1;
      jigsaw.ctx.beginPath();

      // draw verticle lines
      for (var i = 0; i <= jigsaw.TOTAL_COLUMNS; i++) {
        var x = jigsaw.PUZZLE_PADDING_LEFT + (jigsaw.PUZZLE_PIECE_WIDTH * i);
        jigsaw.ctx.moveTo(x, jigsaw.PUZZLE_PADDING_TOP);
        jigsaw.ctx.lineTo(x, jigsaw.PUZZLE_BOARD_HEIGHT + jigsaw.PUZZLE_PADDING_TOP);
      }

      // draw horizontal lines
      for (i = 0; i <= jigsaw.TOTAL_ROWS; i++) {
        var y = jigsaw.PUZZLE_PADDING_TOP + (jigsaw.PUZZLE_PIECE_HEIGHT * i);
        jigsaw.ctx.moveTo(jigsaw.PUZZLE_PADDING_LEFT, y);
        jigsaw.ctx.lineTo(jigsaw.PUZZLE_BOARD_WIDTH + jigsaw.PUZZLE_PADDING_LEFT, y);
      }

      jigsaw.ctx.closePath();
      jigsaw.ctx.stroke();
    };

    jigsaw.drawSection = function (piece, pieceWidthOnScreen, pieceHeightOnScreen) {
      jigsaw.ctx.save();

      // If width is not sendt we calulate.. we only send with and height on end-anim
      if (pieceWidthOnScreen == undefined) pieceWidthOnScreen = jigsaw.PUZZLE_PIECE_WIDTH;
      if (pieceHeightOnScreen == undefined) pieceHeightOnScreen = jigsaw.PUZZLE_PIECE_HEIGHT;

      var pieceWidthOnPicture = Math.round(jigsaw.puzzlePicture.naturalWidth / jigsaw.TOTAL_COLUMNS);
      var pieceHeightOnPicture = Math.round(jigsaw.puzzlePicture.naturalHeight / jigsaw.TOTAL_ROWS);

      var srcX = (piece.no % jigsaw.TOTAL_COLUMNS) * pieceWidthOnPicture;
      var srcY = Math.floor(piece.no / jigsaw.TOTAL_COLUMNS) * pieceHeightOnPicture;

      jigsaw.ctx.drawImage(jigsaw.puzzlePicture, srcX, srcY, pieceWidthOnPicture, pieceHeightOnPicture, piece.x, piece.y, pieceWidthOnScreen, pieceHeightOnScreen);

      jigsaw.ctx.restore();
    };

    jigsaw.drawPreviewPicture = function () {
      jigsaw.ctx.save();
      // Kan lage et pixel filter som gjør bilde B&W
      jigsaw.ctx.globalAlpha = 0.5;
      jigsaw.ctx.drawImage(jigsaw.puzzlePicture, jigsaw.PUZZLE_PADDING_LEFT, jigsaw.PUZZLE_PADDING_TOP, jigsaw.PUZZLE_BOARD_WIDTH, jigsaw.PUZZLE_BOARD_HEIGHT);
      jigsaw.ctx.restore();
    };

    jigsaw.drawBackGround = function () {
      jigsaw.ctx.drawImage(jigsaw.background_image, 0, 0, jigsaw.ctx.canvas.width, jigsaw.ctx.canvas.height)
    };

  };

  return constructor;
}();
