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
function alert() {
}
var oldtop;
var oldleft;
active = confixWrapper("infix", "active = null", [""], [], "", null);
var activepiece;
zindex = confixWrapper("infix", "zindex = 1", [""], [], "", 1);
held = confixWrapper("infix", "held = false", [""], [], "", false);
var hint = confixWrapper("initvar", "var hint = confixWrapper(\"functionCall\", \"document.getElementById('hint')\", [\"hint\"], ['hint'], \"\", document.getElementById('hint'))", [""], [], "", confixWrapper("functionCall", "document.getElementById('hint')", ["hint"], ['hint'], "", document.getElementById('hint')));
function grab(id) {
  {
    hint.innerHTML = confixWrapper("infix", "hint.innerHTML = ''", [""], [], "grab", '');
    held = confixWrapper("infix", "held = true", [""], [], "grab", true);
    confixWrapper("functionCall", "document.getElementById(id)", ["id"], [id], "grab", document.getElementById(id)).style.zIndex = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(id)\", [\"id\"], [id], \"grab\", document.getElementById(id)).style.zIndex = zindex", [""], [], "grab", zindex);
    zindex++;
    document.onmousemove = confixWrapper("infix", "document.onmousemove = drag", [""], [], "grab", drag);
    activepiece = confixWrapper("infix", "activepiece = id", [""], [], "grab", id);
    oldtop = confixWrapper("infix", "oldtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"grab\", document.getElementById(activepiece)).style.pixelTop", [""], [], "grab", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "grab", document.getElementById(activepiece)).style.pixelTop);
    oldleft = confixWrapper("infix", "oldleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"grab\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "grab", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "grab", document.getElementById(activepiece)).style.pixelLeft);
    confixWrapper("functionCall", "drag()", [], [], "grab", drag());
  }
}
function drag() {
  if (confixWrapper("condition", "!held", [""], [], "drag", !held)) 
  {
    confixWrapper("functionCall", "checkmove()", [], [], "drag", checkmove());
    return confixWrapper("return", "return true;", [""], [], "drag", true);
  }
  if (confixWrapper("condition", "event.button != 1", [""], [], "drag", event.button != 1)) 
  return confixWrapper("return", "return true;", [""], [], "drag", true);
  document.onmouseup = confixWrapper("infix", "document.onmouseup = drop", [""], [], "drag", drop);
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drag", document.getElementById(activepiece)).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drag\", document.getElementById(activepiece)).style.pixelLeft = event.clientX - 30", [""], [], "drag", event.clientX - 30);
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drag", document.getElementById(activepiece)).style.pixelTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drag\", document.getElementById(activepiece)).style.pixelTop = event.clientY - 40", [""], [], "drag", event.clientY - 40);
  return confixWrapper("return", "return false;", [""], [], "drag", false);
}
function drop() {
  document.onmouseup = confixWrapper("infix", "document.onmouseup = null", [""], [], "drop", null);
  document.onmousemove = confixWrapper("infix", "document.onmousemove = null", [""], [], "drop", null);
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelLeft = confixWrapper(\"functionCall\", \"Math.round(document.getElementById(activepiece).style.pixelLeft / 60)\", [\"document.getElementById(activepiece).style.pixelLeft / 60\"], [confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelLeft / 60], \"drop\", Math.round(confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelLeft / 60)) * 60", [""], [], "drop", confixWrapper("functionCall", "Math.round(document.getElementById(activepiece).style.pixelLeft / 60)", ["document.getElementById(activepiece).style.pixelLeft / 60"], [confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelLeft / 60], "drop", Math.round(confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelLeft / 60)) * 60);
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelTop = confixWrapper(\"functionCall\", \"Math.round(document.getElementById(activepiece).style.pixelTop / 60)\", [\"document.getElementById(activepiece).style.pixelTop / 60\"], [confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelTop / 60], \"drop\", Math.round(confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelTop / 60)) * 60", [""], [], "drop", confixWrapper("functionCall", "Math.round(document.getElementById(activepiece).style.pixelTop / 60)", ["document.getElementById(activepiece).style.pixelTop / 60"], [confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelTop / 60], "drop", Math.round(confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelTop / 60)) * 60);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelLeft < 0 || confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelLeft > 420 || confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelTop < 0 || confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelTop > 420", [""], [], "drop", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelLeft < 0 || confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelLeft > 420 || confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelTop < 0 || confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelTop > 420)) 
  confixWrapper("functionCall", "takeback()", [], [], "drop", takeback()); else if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelLeft == oldleft && confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"drop\", document.getElementById(activepiece)).style.pixelTop == oldtop", [""], [], "drop", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelLeft == oldleft && confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "drop", document.getElementById(activepiece)).style.pixelTop == oldtop)) 
  confixWrapper("functionCall", "takeback()", [], [], "drop", takeback()); else confixWrapper("functionCall", "checkplayer()", [], [], "drop", checkplayer());
}
function takeback(message) {
  waitcapture = confixWrapper("infix", "waitcapture = false", [""], [], "takeback", false);
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "takeback", document.getElementById(activepiece)).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"takeback\", document.getElementById(activepiece)).style.pixelLeft = oldleft", [""], [], "takeback", oldleft);
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "takeback", document.getElementById(activepiece)).style.pixelTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"takeback\", document.getElementById(activepiece)).style.pixelTop = oldtop", [""], [], "takeback", oldtop);
  if (confixWrapper("condition", "message", [""], [], "takeback", message)) 
  hint.innerHTML = confixWrapper("infix", "hint.innerHTML = message", [""], [], "takeback", message);
}
var badmove = confixWrapper("initvar", "var badmove = false", [""], [], "", false);
var whitesmove = confixWrapper("initvar", "var whitesmove = true", [""], [], "", true);
function checkplayer() {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece).name.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"checkplayer\", confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkplayer\", document.getElementById(activepiece)).name.substring(0, 1)) == \"w\" && whitesmove == false", [""], [], "checkplayer", confixWrapper("functionCall", "document.getElementById(activepiece).name.substring(0, 1)", ["0", "1"], [0, 1], "checkplayer", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkplayer", document.getElementById(activepiece)).name.substring(0, 1)) == "w" && whitesmove == false)) 
  {
    confixWrapper("functionCall", "takeback(\"It is Black's turn to move\")", ["It is Blacks turn to move"], ["It is Black's turn to move"], "checkplayer", takeback("It is Black's turn to move"));
    badmove = confixWrapper("infix", "badmove = true", [""], [], "checkplayer", true);
  }
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece).name.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"checkplayer\", confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkplayer\", document.getElementById(activepiece)).name.substring(0, 1)) == \"b\" && whitesmove == true", [""], [], "checkplayer", confixWrapper("functionCall", "document.getElementById(activepiece).name.substring(0, 1)", ["0", "1"], [0, 1], "checkplayer", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkplayer", document.getElementById(activepiece)).name.substring(0, 1)) == "b" && whitesmove == true)) 
  {
    confixWrapper("functionCall", "takeback(\"It is White's turn to move\")", ["It is Whites turn to move"], ["It is White's turn to move"], "checkplayer", takeback("It is White's turn to move"));
    badmove = confixWrapper("infix", "badmove = true", [""], [], "checkplayer", true);
  }
  if (confixWrapper("condition", "badmove == false", [""], [], "checkplayer", badmove == false)) 
  confixWrapper("functionCall", "checkoccupant()", [], [], "checkplayer", checkoccupant());
  badmove = confixWrapper("infix", "badmove = false", [""], [], "checkplayer", false);
}
waitcapture = confixWrapper("infix", "waitcapture = false", [""], [], "", false);
function checkoccupant() {
  var movetotype = confixWrapper("initvar", "var movetotype = confixWrapper(\"functionCall\", \"eval('row' + (document.getElementById(activepiece).style.pixelTop / 60) + '[' + (document.getElementById(activepiece).style.pixelLeft / 60) + ']').substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"checkoccupant\", confixWrapper(\"functionCall\", \"eval('row' + (document.getElementById(activepiece).style.pixelTop / 60) + '[' + (document.getElementById(activepiece).style.pixelLeft / 60) + ']')\", [\"row + (document.getElementById(activepiece).style.pixelTop / 60) + [ + (document.getElementById(activepiece).style.pixelLeft / 60) + ]\"], ['row' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkoccupant\", document.getElementById(activepiece)).style.pixelTop / 60) + '[' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkoccupant\", document.getElementById(activepiece)).style.pixelLeft / 60) + ']'], \"checkoccupant\", eval('row' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkoccupant\", document.getElementById(activepiece)).style.pixelTop / 60) + '[' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkoccupant\", document.getElementById(activepiece)).style.pixelLeft / 60) + ']')).substring(0, 1))", [""], [], "checkoccupant", confixWrapper("functionCall", "eval('row' + (document.getElementById(activepiece).style.pixelTop / 60) + '[' + (document.getElementById(activepiece).style.pixelLeft / 60) + ']').substring(0, 1)", ["0", "1"], [0, 1], "checkoccupant", confixWrapper("functionCall", "eval('row' + (document.getElementById(activepiece).style.pixelTop / 60) + '[' + (document.getElementById(activepiece).style.pixelLeft / 60) + ']')", ["row + (document.getElementById(activepiece).style.pixelTop / 60) + [ + (document.getElementById(activepiece).style.pixelLeft / 60) + ]"], ['row' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkoccupant", document.getElementById(activepiece)).style.pixelTop / 60) + '[' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkoccupant", document.getElementById(activepiece)).style.pixelLeft / 60) + ']'], "checkoccupant", eval('row' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkoccupant", document.getElementById(activepiece)).style.pixelTop / 60) + '[' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkoccupant", document.getElementById(activepiece)).style.pixelLeft / 60) + ']')).substring(0, 1)));
  if (confixWrapper("condition", "(movetotype == \"w\" && whitesmove == true) || (movetotype == \"b\" && whitesmove == false)", [""], [], "checkoccupant", (movetotype == "w" && whitesmove == true) || (movetotype == "b" && whitesmove == false))) 
  {
    confixWrapper("functionCall", "takeback(\"You cannot capture your own pieces\")", ["You cannot capture your own pieces"], ["You cannot capture your own pieces"], "checkoccupant", takeback("You cannot capture your own pieces"));
    badmove = confixWrapper("infix", "badmove = true", [""], [], "checkoccupant", true);
  }
  if (confixWrapper("condition", "(movetotype == \"w\" && whitesmove == false) || (movetotype == \"b\" && whitesmove == true)", [""], [], "checkoccupant", (movetotype == "w" && whitesmove == false) || (movetotype == "b" && whitesmove == true))) 
  {
    waitcapture = confixWrapper("infix", "waitcapture = true", [""], [], "checkoccupant", true);
  }
  if (confixWrapper("condition", "badmove == false", [""], [], "checkoccupant", badmove == false)) 
  confixWrapper("functionCall", "checkpiece()", [], [], "checkoccupant", checkpiece());
  badmove = confixWrapper("infix", "badmove = false", [""], [], "checkoccupant", false);
}
function checkpiece() {
  var piecetype = confixWrapper("initvar", "var piecetype = confixWrapper(\"functionCall\", \"document.getElementById(activepiece).name.substring(1, 2)\", [\"1\", \"2\"], [1, 2], \"checkpiece\", confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"checkpiece\", document.getElementById(activepiece)).name.substring(1, 2))", [""], [], "checkpiece", confixWrapper("functionCall", "document.getElementById(activepiece).name.substring(1, 2)", ["1", "2"], [1, 2], "checkpiece", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "checkpiece", document.getElementById(activepiece)).name.substring(1, 2)));
  if (confixWrapper("condition", "piecetype == \"p\"", [""], [], "checkpiece", piecetype == "p")) 
  confixWrapper("functionCall", "pawn()", [], [], "checkpiece", pawn());
  if (confixWrapper("condition", "piecetype == \"r\"", [""], [], "checkpiece", piecetype == "r")) 
  confixWrapper("functionCall", "rook()", [], [], "checkpiece", rook());
  if (confixWrapper("condition", "piecetype == \"b\"", [""], [], "checkpiece", piecetype == "b")) 
  confixWrapper("functionCall", "bishop()", [], [], "checkpiece", bishop());
  if (confixWrapper("condition", "piecetype == \"n\"", [""], [], "checkpiece", piecetype == "n")) 
  confixWrapper("functionCall", "night()", [], [], "checkpiece", night());
  if (confixWrapper("condition", "piecetype == \"q\"", [""], [], "checkpiece", piecetype == "q")) 
  confixWrapper("functionCall", "queen()", [], [], "checkpiece", queen());
  if (confixWrapper("condition", "piecetype == \"k\"", [""], [], "checkpiece", piecetype == "k")) 
  confixWrapper("functionCall", "king()", [], [], "checkpiece", king());
}
var pawnleap;
function pawn() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"pawn\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "pawn", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "pawn", document.getElementById(activepiece)).style.pixelLeft);
  var newtop = confixWrapper("initvar", "var newtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"pawn\", document.getElementById(activepiece)).style.pixelTop", [""], [], "pawn", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "pawn", document.getElementById(activepiece)).style.pixelTop);
  if (confixWrapper("condition", "whitesmove == true", [""], [], "pawn", whitesmove == true)) 
  {
    if (confixWrapper("condition", "oldtop == 180 && newtop == 120 && confixWrapper(\"functionCall\", \"eval(\"row3[\" + (newleft / 60) + \"]\")\", [\"row3[ + (newleft / 60) + ]\"], [\"row3[\" + (newleft / 60) + \"]\"], \"pawn\", eval(\"row3[\" + (newleft / 60) + \"]\")) == \"bp\" && pawnleap == newleft / 60", [""], [], "pawn", oldtop == 180 && newtop == 120 && confixWrapper("functionCall", "eval(\"row3[\" + (newleft / 60) + \"]\")", ["row3[ + (newleft / 60) + ]"], ["row3[" + (newleft / 60) + "]"], "pawn", eval("row3[" + (newleft / 60) + "]")) == "bp" && pawnleap == newleft / 60)) 
    confixWrapper("functionCall", "enpassent()", [], [], "pawn", enpassent()); else if (confixWrapper("condition", "oldtop - newtop != 60 && oldtop - newtop != 120 && oldtop == 360", [""], [], "pawn", oldtop - newtop != 60 && oldtop - newtop != 120 && oldtop == 360)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldtop - newtop != 60 && oldtop != 360", [""], [], "pawn", oldtop - newtop != 60 && oldtop != 360)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldleft - newleft < -60 || oldleft - newleft > 60", [""], [], "pawn", oldleft - newleft < -60 || oldleft - newleft > 60)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldleft - newleft != 0 && waitcapture == false", [""], [], "pawn", oldleft - newleft != 0 && waitcapture == false)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "waitcapture == true && (oldtop - newtop != 60 || (oldleft - newleft != -60 && oldleft - newleft != 60))", [""], [], "pawn", waitcapture == true && (oldtop - newtop != 60 || (oldleft - newleft != -60 && oldleft - newleft != 60)))) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldtop == 360 && newtop == 240 && confixWrapper(\"functionCall\", \"eval(\"row5[\" + oldleft / 60 + \"]\")\", [\"row5[ + oldleft / 60 + ]\"], [\"row5[\" + oldleft / 60 + \"]\"], \"pawn\", eval(\"row5[\" + oldleft / 60 + \"]\")) != \"e\"", [""], [], "pawn", oldtop == 360 && newtop == 240 && confixWrapper("functionCall", "eval(\"row5[\" + oldleft / 60 + \"]\")", ["row5[ + oldleft / 60 + ]"], ["row5[" + oldleft / 60 + "]"], "pawn", eval("row5[" + oldleft / 60 + "]")) != "e")) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "newtop == 0 && confixWrapper(\"functionCall\", \"check()\", [], [], \"pawn\", check()) != true", [""], [], "pawn", newtop == 0 && confixWrapper("functionCall", "check()", [], [], "pawn", check()) != true)) 
    confixWrapper("functionCall", "promote()", [], [], "pawn", promote()); else {
      confixWrapper("functionCall", "makemove()", [], [], "pawn", makemove());
      if (confixWrapper("condition", "oldtop - newtop == 120", [""], [], "pawn", oldtop - newtop == 120)) 
      pawnleap = confixWrapper("infix", "pawnleap = newleft / 60", [""], [], "pawn", newleft / 60); else pawnleap = confixWrapper("infix", "pawnleap = null", [""], [], "pawn", null);
    }
  } else {
    if (confixWrapper("condition", "oldtop == 240 && newtop == 300 && confixWrapper(\"functionCall\", \"eval(\"row4[\" + (newleft / 60) + \"]\")\", [\"row4[ + (newleft / 60) + ]\"], [\"row4[\" + (newleft / 60) + \"]\"], \"pawn\", eval(\"row4[\" + (newleft / 60) + \"]\")) == \"wp\" && pawnleap == newleft / 60", [""], [], "pawn", oldtop == 240 && newtop == 300 && confixWrapper("functionCall", "eval(\"row4[\" + (newleft / 60) + \"]\")", ["row4[ + (newleft / 60) + ]"], ["row4[" + (newleft / 60) + "]"], "pawn", eval("row4[" + (newleft / 60) + "]")) == "wp" && pawnleap == newleft / 60)) 
    confixWrapper("functionCall", "enpassent()", [], [], "pawn", enpassent()); else if (confixWrapper("condition", "oldtop - newtop != -60 && oldtop - newtop != -120 && oldtop == 60", [""], [], "pawn", oldtop - newtop != -60 && oldtop - newtop != -120 && oldtop == 60)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldtop - newtop != -60 && oldtop != 60", [""], [], "pawn", oldtop - newtop != -60 && oldtop != 60)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldleft - newleft < -60 || oldleft - newleft > 60", [""], [], "pawn", oldleft - newleft < -60 || oldleft - newleft > 60)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldleft - newleft != 0 && waitcapture == false", [""], [], "pawn", oldleft - newleft != 0 && waitcapture == false)) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "waitcapture == true && (oldtop - newtop != -60 || (oldleft - newleft != -60 && oldleft - newleft != 60))", [""], [], "pawn", waitcapture == true && (oldtop - newtop != -60 || (oldleft - newleft != -60 && oldleft - newleft != 60)))) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "oldtop == 60 && newtop == 180 && confixWrapper(\"functionCall\", \"eval(\"row2[\" + oldleft / 60 + \"]\")\", [\"row2[ + oldleft / 60 + ]\"], [\"row2[\" + oldleft / 60 + \"]\"], \"pawn\", eval(\"row2[\" + oldleft / 60 + \"]\")) != \"e\"", [""], [], "pawn", oldtop == 60 && newtop == 180 && confixWrapper("functionCall", "eval(\"row2[\" + oldleft / 60 + \"]\")", ["row2[ + oldleft / 60 + ]"], ["row2[" + oldleft / 60 + "]"], "pawn", eval("row2[" + oldleft / 60 + "]")) != "e")) 
    confixWrapper("functionCall", "takeback(\"Illegal Pawn move.\")", ["Illegal Pawn move."], ["Illegal Pawn move."], "pawn", takeback("Illegal Pawn move.")); else if (confixWrapper("condition", "newtop == 420", [""], [], "pawn", newtop == 420)) 
    confixWrapper("functionCall", "promote()", [], [], "pawn", promote()); else {
      confixWrapper("functionCall", "makemove()", [], [], "pawn", makemove());
      if (confixWrapper("condition", "oldtop - newtop == -120", [""], [], "pawn", oldtop - newtop == -120)) 
      pawnleap = confixWrapper("infix", "pawnleap = newleft / 60", [""], [], "pawn", newleft / 60); else pawnleap = confixWrapper("infix", "pawnleap = null", [""], [], "pawn", null);
    }
  }
}
function rook() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"rook\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "rook", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "rook", document.getElementById(activepiece)).style.pixelLeft);
  var newtop = confixWrapper("initvar", "var newtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"rook\", document.getElementById(activepiece)).style.pixelTop", [""], [], "rook", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "rook", document.getElementById(activepiece)).style.pixelTop);
  if (confixWrapper("condition", "oldleft != newleft && oldtop != newtop", [""], [], "rook", oldleft != newleft && oldtop != newtop)) 
  {
    confixWrapper("functionCall", "takeback(\"The Rook can only move in straight lines: horizontally or vertically.\")", ["The Rook can only move in straight lines: horizontally or vertically."], ["The Rook can only move in straight lines: horizontally or vertically."], "rook", takeback("The Rook can only move in straight lines: horizontally or vertically."));
    badmove = confixWrapper("infix", "badmove = true", [""], [], "rook", true);
  } else if (confixWrapper("condition", "oldleft == newleft", [""], [], "rook", oldleft == newleft)) 
  {
    var gap = confixWrapper("initvar", "var gap = (newtop - oldtop) / 60", [""], [], "rook", (newtop - oldtop) / 60);
    if (confixWrapper("condition", "gap < 0", [""], [], "rook", gap < 0)) 
    gap++;
    if (confixWrapper("condition", "gap > 0", [""], [], "rook", gap > 0)) 
    gap--;
    while (gap != 0) 
      {
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\")\", [\"row + (oldtop / 60 + gap) + [ + oldleft / 60 + ]\"], [\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\"], \"rook\", eval(\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\")) != \"e\"", [""], [], "rook", confixWrapper("functionCall", "eval(\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\")", ["row + (oldtop / 60 + gap) + [ + oldleft / 60 + ]"], ["row" + (oldtop / 60 + gap) + "[" + oldleft / 60 + "]"], "rook", eval("row" + (oldtop / 60 + gap) + "[" + oldleft / 60 + "]")) != "e")) 
        {
          badmove = confixWrapper("infix", "badmove = true", [""], [], "rook", true);
          confixWrapper("functionCall", "takeback(\"There must be no pieces occupying the squares along the file that the Rook travels.\")", ["There must be no pieces occupying the squares along the file that the Rook travels."], ["There must be no pieces occupying the squares along the file that the Rook travels."], "rook", takeback("There must be no pieces occupying the squares along the file that the Rook travels."));
        }
        if (confixWrapper("condition", "gap < 0", [""], [], "rook", gap < 0)) 
        gap++;
        if (confixWrapper("condition", "gap > 0", [""], [], "rook", gap > 0)) 
        gap--;
      }
  } else if (confixWrapper("condition", "oldtop == newtop", [""], [], "rook", oldtop == newtop)) 
  {
    var gap = confixWrapper("initvar", "var gap = (newleft - oldleft) / 60", [""], [], "rook", (newleft - oldleft) / 60);
    if (confixWrapper("condition", "gap < 0", [""], [], "rook", gap < 0)) 
    gap++;
    if (confixWrapper("condition", "gap > 0", [""], [], "rook", gap > 0)) 
    gap--;
    while (gap != 0) 
      {
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\")\", [\"row + oldtop / 60 + [ + (oldleft / 60 + gap) + ]\"], [\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\"], \"rook\", eval(\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\")) != \"e\"", [""], [], "rook", confixWrapper("functionCall", "eval(\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\")", ["row + oldtop / 60 + [ + (oldleft / 60 + gap) + ]"], ["row" + oldtop / 60 + "[" + (oldleft / 60 + gap) + "]"], "rook", eval("row" + oldtop / 60 + "[" + (oldleft / 60 + gap) + "]")) != "e")) 
        {
          badmove = confixWrapper("infix", "badmove = true", [""], [], "rook", true);
          confixWrapper("functionCall", "takeback(\"There must be no pieces occupying the squares along the rank that the Rook travels.\")", ["There must be no pieces occupying the squares along the rank that the Rook travels."], ["There must be no pieces occupying the squares along the rank that the Rook travels."], "rook", takeback("There must be no pieces occupying the squares along the rank that the Rook travels."));
        }
        if (confixWrapper("condition", "gap < 0", [""], [], "rook", gap < 0)) 
        gap++;
        if (confixWrapper("condition", "gap > 0", [""], [], "rook", gap > 0)) 
        gap--;
      }
  }
  if (confixWrapper("condition", "badmove == false", [""], [], "rook", badmove == false)) 
  {
    confixWrapper("functionCall", "makemove()", [], [], "rook", makemove());
    if (confixWrapper("condition", "oldleft == 0 && oldtop == 0", [""], [], "rook", oldleft == 0 && oldtop == 0)) 
    bqr_idle = confixWrapper("infix", "bqr_idle = false", [""], [], "rook", false);
    if (confixWrapper("condition", "oldleft == 420 && oldtop == 0", [""], [], "rook", oldleft == 420 && oldtop == 0)) 
    bkr_idle = confixWrapper("infix", "bkr_idle = false", [""], [], "rook", false);
    if (confixWrapper("condition", "oldleft == 0 && oldtop == 420", [""], [], "rook", oldleft == 0 && oldtop == 420)) 
    wqr_idle = confixWrapper("infix", "wqr_idle = false", [""], [], "rook", false);
    if (confixWrapper("condition", "oldleft == 420 && oldtop == 420", [""], [], "rook", oldleft == 420 && oldtop == 420)) 
    wkr_idle = confixWrapper("infix", "wkr_idle = false", [""], [], "rook", false);
  }
  badmove = confixWrapper("infix", "badmove = false", [""], [], "rook", false);
}
function bishop() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"bishop\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "bishop", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "bishop", document.getElementById(activepiece)).style.pixelLeft);
  var newtop = confixWrapper("initvar", "var newtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"bishop\", document.getElementById(activepiece)).style.pixelTop", [""], [], "bishop", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "bishop", document.getElementById(activepiece)).style.pixelTop);
  if (confixWrapper("condition", "oldleft - newleft != oldtop - newtop && oldleft - newleft != (oldtop - newtop) * -1", [""], [], "bishop", oldleft - newleft != oldtop - newtop && oldleft - newleft != (oldtop - newtop) * -1)) 
  {
    confixWrapper("functionCall", "takeback(\"Bishops can only move along diagonals.\")", ["Bishops can only move along diagonals."], ["Bishops can only move along diagonals."], "bishop", takeback("Bishops can only move along diagonals."));
    badmove = confixWrapper("infix", "badmove = true", [""], [], "bishop", true);
  }
  var gapleft = confixWrapper("initvar", "var gapleft = (newleft - oldleft) / 60", [""], [], "bishop", (newleft - oldleft) / 60);
  var gaptop = confixWrapper("initvar", "var gaptop = (newtop - oldtop) / 60", [""], [], "bishop", (newtop - oldtop) / 60);
  if (confixWrapper("condition", "gapleft < 0", [""], [], "bishop", gapleft < 0)) 
  gapleft++;
  if (confixWrapper("condition", "gapleft > 0", [""], [], "bishop", gapleft > 0)) 
  gapleft--;
  if (confixWrapper("condition", "gaptop < 0", [""], [], "bishop", gaptop < 0)) 
  gaptop++;
  if (confixWrapper("condition", "gaptop > 0", [""], [], "bishop", gaptop > 0)) 
  gaptop--;
  while (gapleft != 0) 
    {
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\")\", [\"row + (oldtop / 60 + gaptop) + [ + (oldleft / 60 + gapleft) + ]\"], [\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\"], \"bishop\", eval(\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\")) != \"e\"", [""], [], "bishop", confixWrapper("functionCall", "eval(\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\")", ["row + (oldtop / 60 + gaptop) + [ + (oldleft / 60 + gapleft) + ]"], ["row" + (oldtop / 60 + gaptop) + "[" + (oldleft / 60 + gapleft) + "]"], "bishop", eval("row" + (oldtop / 60 + gaptop) + "[" + (oldleft / 60 + gapleft) + "]")) != "e")) 
      {
        badmove = confixWrapper("infix", "badmove = true", [""], [], "bishop", true);
        confixWrapper("functionCall", "takeback(\"There must be no pieces occupying the squares along the diagonal that the Bishop travels.\")", ["There must be no pieces occupying the squares along the diagonal that the Bishop travels."], ["There must be no pieces occupying the squares along the diagonal that the Bishop travels."], "bishop", takeback("There must be no pieces occupying the squares along the diagonal that the Bishop travels."));
      }
      if (confixWrapper("condition", "gapleft < 0", [""], [], "bishop", gapleft < 0)) 
      gapleft++;
      if (confixWrapper("condition", "gapleft > 0", [""], [], "bishop", gapleft > 0)) 
      gapleft--;
      if (confixWrapper("condition", "gaptop < 0", [""], [], "bishop", gaptop < 0)) 
      gaptop++;
      if (confixWrapper("condition", "gaptop > 0", [""], [], "bishop", gaptop > 0)) 
      gaptop--;
    }
  if (confixWrapper("condition", "badmove == false", [""], [], "bishop", badmove == false)) 
  confixWrapper("functionCall", "makemove()", [], [], "bishop", makemove());
  badmove = confixWrapper("infix", "badmove = false", [""], [], "bishop", false);
}
function night() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"night\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "night", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "night", document.getElementById(activepiece)).style.pixelLeft);
  var newtop = confixWrapper("initvar", "var newtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"night\", document.getElementById(activepiece)).style.pixelTop", [""], [], "night", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "night", document.getElementById(activepiece)).style.pixelTop);
  if (confixWrapper("condition", "(oldtop - newtop == -120 && oldleft - newleft == -60) || (oldtop - newtop == -120 && oldleft - newleft == 60) || (oldtop - newtop == -60 && oldleft - newleft == -120) || (oldtop - newtop == -60 && oldleft - newleft == 120) || (oldtop - newtop == 60 && oldleft - newleft == -120) || (oldtop - newtop == 60 && oldleft - newleft == 120) || (oldtop - newtop == 120 && oldleft - newleft == -60) || (oldtop - newtop == 120 && oldleft - newleft == 60)", [""], [], "night", (oldtop - newtop == -120 && oldleft - newleft == -60) || (oldtop - newtop == -120 && oldleft - newleft == 60) || (oldtop - newtop == -60 && oldleft - newleft == -120) || (oldtop - newtop == -60 && oldleft - newleft == 120) || (oldtop - newtop == 60 && oldleft - newleft == -120) || (oldtop - newtop == 60 && oldleft - newleft == 120) || (oldtop - newtop == 120 && oldleft - newleft == -60) || (oldtop - newtop == 120 && oldleft - newleft == 60))) 
  confixWrapper("functionCall", "makemove()", [], [], "night", makemove()); else confixWrapper("functionCall", "takeback(\"Nights move in an L shape.\")", ["Nights move in an L shape."], ["Nights move in an L shape."], "night", takeback("Nights move in an L shape."));
}
function queen() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"queen\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "queen", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "queen", document.getElementById(activepiece)).style.pixelLeft);
  var newtop = confixWrapper("initvar", "var newtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"queen\", document.getElementById(activepiece)).style.pixelTop", [""], [], "queen", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "queen", document.getElementById(activepiece)).style.pixelTop);
  if (confixWrapper("condition", "(oldleft != newleft && oldtop != newtop) && (oldleft - newleft != oldtop - newtop && oldleft - newleft != (oldtop - newtop) * -1)", [""], [], "queen", (oldleft != newleft && oldtop != newtop) && (oldleft - newleft != oldtop - newtop && oldleft - newleft != (oldtop - newtop) * -1))) 
  {
    confixWrapper("functionCall", "takeback(\"The Queen can only move in straight lines: vertically, horizontally or diagonally.\")", ["The Queen can only move in straight lines: vertically, horizontally or diagonally."], ["The Queen can only move in straight lines: vertically, horizontally or diagonally."], "queen", takeback("The Queen can only move in straight lines: vertically, horizontally or diagonally."));
    badmove = confixWrapper("infix", "badmove = true", [""], [], "queen", true);
  } else if (confixWrapper("condition", "oldleft == newleft", [""], [], "queen", oldleft == newleft)) 
  {
    gap = confixWrapper("infix", "gap = (newtop - oldtop) / 60", [""], [], "queen", (newtop - oldtop) / 60);
    if (confixWrapper("condition", "gap < 0", [""], [], "queen", gap < 0)) 
    gap++;
    if (confixWrapper("condition", "gap > 0", [""], [], "queen", gap > 0)) 
    gap--;
    while (gap != 0) 
      {
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\")\", [\"row + (oldtop / 60 + gap) + [ + oldleft / 60 + ]\"], [\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\"], \"queen\", eval(\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\")) != \"e\"", [""], [], "queen", confixWrapper("functionCall", "eval(\"row\" + (oldtop / 60 + gap) + \"[\" + oldleft / 60 + \"]\")", ["row + (oldtop / 60 + gap) + [ + oldleft / 60 + ]"], ["row" + (oldtop / 60 + gap) + "[" + oldleft / 60 + "]"], "queen", eval("row" + (oldtop / 60 + gap) + "[" + oldleft / 60 + "]")) != "e")) 
        {
          badmove = confixWrapper("infix", "badmove = true", [""], [], "queen", true);
          confixWrapper("functionCall", "takeback(\"There must be no pieces occupying the squares along the file that the Queen travels.\")", ["There must be no pieces occupying the squares along the file that the Queen travels."], ["There must be no pieces occupying the squares along the file that the Queen travels."], "queen", takeback("There must be no pieces occupying the squares along the file that the Queen travels."));
        }
        if (confixWrapper("condition", "gap < 0", [""], [], "queen", gap < 0)) 
        gap++;
        if (confixWrapper("condition", "gap > 0", [""], [], "queen", gap > 0)) 
        gap--;
      }
  } else if (confixWrapper("condition", "oldtop == newtop", [""], [], "queen", oldtop == newtop)) 
  {
    gap = confixWrapper("infix", "gap = (newleft - oldleft) / 60", [""], [], "queen", (newleft - oldleft) / 60);
    if (confixWrapper("condition", "gap < 0", [""], [], "queen", gap < 0)) 
    gap++;
    if (confixWrapper("condition", "gap > 0", [""], [], "queen", gap > 0)) 
    gap--;
    while (gap != 0) 
      {
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\")\", [\"row + oldtop / 60 + [ + (oldleft / 60 + gap) + ]\"], [\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\"], \"queen\", eval(\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\")) != \"e\"", [""], [], "queen", confixWrapper("functionCall", "eval(\"row\" + oldtop / 60 + \"[\" + (oldleft / 60 + gap) + \"]\")", ["row + oldtop / 60 + [ + (oldleft / 60 + gap) + ]"], ["row" + oldtop / 60 + "[" + (oldleft / 60 + gap) + "]"], "queen", eval("row" + oldtop / 60 + "[" + (oldleft / 60 + gap) + "]")) != "e")) 
        {
          badmove = confixWrapper("infix", "badmove = true", [""], [], "queen", true);
          confixWrapper("functionCall", "takeback(\"There must be no pieces occupying the squares along the rank that the Queen travels.\")", ["There must be no pieces occupying the squares along the rank that the Queen travels."], ["There must be no pieces occupying the squares along the rank that the Queen travels."], "queen", takeback("There must be no pieces occupying the squares along the rank that the Queen travels."));
        }
        if (confixWrapper("condition", "gap < 0", [""], [], "queen", gap < 0)) 
        gap++;
        if (confixWrapper("condition", "gap > 0", [""], [], "queen", gap > 0)) 
        gap--;
      }
  }
  var gapleft = confixWrapper("initvar", "var gapleft = (newleft - oldleft) / 60", [""], [], "queen", (newleft - oldleft) / 60);
  var gaptop = confixWrapper("initvar", "var gaptop = (newtop - oldtop) / 60", [""], [], "queen", (newtop - oldtop) / 60);
  if (confixWrapper("condition", "gapleft < 0", [""], [], "queen", gapleft < 0)) 
  gapleft++;
  if (confixWrapper("condition", "gapleft > 0", [""], [], "queen", gapleft > 0)) 
  gapleft--;
  if (confixWrapper("condition", "gaptop < 0", [""], [], "queen", gaptop < 0)) 
  gaptop++;
  if (confixWrapper("condition", "gaptop > 0", [""], [], "queen", gaptop > 0)) 
  gaptop--;
  while (gapleft != 0) 
    {
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\")\", [\"row + (oldtop / 60 + gaptop) + [ + (oldleft / 60 + gapleft) + ]\"], [\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\"], \"queen\", eval(\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\")) != \"e\"", [""], [], "queen", confixWrapper("functionCall", "eval(\"row\" + (oldtop / 60 + gaptop) + \"[\" + (oldleft / 60 + gapleft) + \"]\")", ["row + (oldtop / 60 + gaptop) + [ + (oldleft / 60 + gapleft) + ]"], ["row" + (oldtop / 60 + gaptop) + "[" + (oldleft / 60 + gapleft) + "]"], "queen", eval("row" + (oldtop / 60 + gaptop) + "[" + (oldleft / 60 + gapleft) + "]")) != "e")) 
      {
        badmove = confixWrapper("infix", "badmove = true", [""], [], "queen", true);
        confixWrapper("functionCall", "takeback(\"There must be no pieces occupying the squares along the diagonal that the Queen travels.\")", ["There must be no pieces occupying the squares along the diagonal that the Queen travels."], ["There must be no pieces occupying the squares along the diagonal that the Queen travels."], "queen", takeback("There must be no pieces occupying the squares along the diagonal that the Queen travels."));
      }
      if (confixWrapper("condition", "gapleft < 0", [""], [], "queen", gapleft < 0)) 
      gapleft++;
      if (confixWrapper("condition", "gapleft > 0", [""], [], "queen", gapleft > 0)) 
      gapleft--;
      if (confixWrapper("condition", "gaptop < 0", [""], [], "queen", gaptop < 0)) 
      gaptop++;
      if (confixWrapper("condition", "gaptop > 0", [""], [], "queen", gaptop > 0)) 
      gaptop--;
    }
  if (confixWrapper("condition", "badmove == false", [""], [], "queen", badmove == false)) 
  confixWrapper("functionCall", "makemove()", [], [], "queen", makemove());
  badmove = confixWrapper("infix", "badmove = false", [""], [], "queen", false);
}
function king() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"king\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "king", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "king", document.getElementById(activepiece)).style.pixelLeft);
  var newtop = confixWrapper("initvar", "var newtop = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"king\", document.getElementById(activepiece)).style.pixelTop", [""], [], "king", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "king", document.getElementById(activepiece)).style.pixelTop);
  if (confixWrapper("condition", "whitesmove == true && wqr_idle == true && newleft == 120 && newtop == 420 && row7[1] == \"e\" && row7[2] == \"e\" && row7[3] == \"e\" && confixWrapper(\"functionCall\", \"check()\", [], [], \"king\", check()) != true && confixWrapper(\"functionCall\", \"check(\"7\", \"4\")\", [\"7\", \"4\"], [\"7\", \"4\"], \"king\", check(\"7\", \"4\")) != true && confixWrapper(\"functionCall\", \"check(\"7\", \"3\")\", [\"7\", \"3\"], [\"7\", \"3\"], \"king\", check(\"7\", \"3\")) != true", [""], [], "king", whitesmove == true && wqr_idle == true && newleft == 120 && newtop == 420 && row7[1] == "e" && row7[2] == "e" && row7[3] == "e" && confixWrapper("functionCall", "check()", [], [], "king", check()) != true && confixWrapper("functionCall", "check(\"7\", \"4\")", ["7", "4"], ["7", "4"], "king", check("7", "4")) != true && confixWrapper("functionCall", "check(\"7\", \"3\")", ["7", "3"], ["7", "3"], "king", check("7", "3")) != true)) 
  confixWrapper("functionCall", "castle()", [], [], "king", castle()); else if (confixWrapper("condition", "whitesmove == true && wkr_idle == true && newleft == 360 && newtop == 420 && row7[5] == \"e\" && row7[6] == \"e\" && confixWrapper(\"functionCall\", \"check()\", [], [], \"king\", check()) != true && confixWrapper(\"functionCall\", \"check(\"7\", \"4\")\", [\"7\", \"4\"], [\"7\", \"4\"], \"king\", check(\"7\", \"4\")) != true && confixWrapper(\"functionCall\", \"check(\"7\", \"5\")\", [\"7\", \"5\"], [\"7\", \"5\"], \"king\", check(\"7\", \"5\")) != true", [""], [], "king", whitesmove == true && wkr_idle == true && newleft == 360 && newtop == 420 && row7[5] == "e" && row7[6] == "e" && confixWrapper("functionCall", "check()", [], [], "king", check()) != true && confixWrapper("functionCall", "check(\"7\", \"4\")", ["7", "4"], ["7", "4"], "king", check("7", "4")) != true && confixWrapper("functionCall", "check(\"7\", \"5\")", ["7", "5"], ["7", "5"], "king", check("7", "5")) != true)) 
  confixWrapper("functionCall", "castle()", [], [], "king", castle()); else if (confixWrapper("condition", "whitesmove == false && bqr_idle == true && newleft == 120 && newtop == 0 && row0[1] == \"e\" && row0[2] == \"e\" && row0[3] == \"e\" && confixWrapper(\"functionCall\", \"check()\", [], [], \"king\", check()) != true", [""], [], "king", whitesmove == false && bqr_idle == true && newleft == 120 && newtop == 0 && row0[1] == "e" && row0[2] == "e" && row0[3] == "e" && confixWrapper("functionCall", "check()", [], [], "king", check()) != true)) 
  confixWrapper("functionCall", "castle()", [], [], "king", castle()); else if (confixWrapper("condition", "whitesmove == false && bkr_idle == true && newleft == 360 && newtop == 0 && row0[5] == \"e\" && row0[6] == \"e\" && confixWrapper(\"functionCall\", \"check()\", [], [], \"king\", check()) != true", [""], [], "king", whitesmove == false && bkr_idle == true && newleft == 360 && newtop == 0 && row0[5] == "e" && row0[6] == "e" && confixWrapper("functionCall", "check()", [], [], "king", check()) != true)) 
  confixWrapper("functionCall", "castle()", [], [], "king", castle()); else if (confixWrapper("condition", "oldleft - newleft != 60 && oldleft - newleft != -60 && oldleft - newleft != 0", [""], [], "king", oldleft - newleft != 60 && oldleft - newleft != -60 && oldleft - newleft != 0)) 
  confixWrapper("functionCall", "takeback(\"Illegal King move.\")", ["Illegal King move."], ["Illegal King move."], "king", takeback("Illegal King move.")); else if (confixWrapper("condition", "oldtop - newtop != 60 && oldtop - newtop != -60 && oldtop - newtop != 0", [""], [], "king", oldtop - newtop != 60 && oldtop - newtop != -60 && oldtop - newtop != 0)) 
  confixWrapper("functionCall", "takeback(\"Illegal King move.\")", ["Illegal King move."], ["Illegal King move."], "king", takeback("Illegal King move.")); else if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"king\", check()) == true", [""], [], "king", confixWrapper("functionCall", "check()", [], [], "king", check()) == true)) 
  confixWrapper("functionCall", "takeback(\"That move places your king in check\")", ["That move places your king in check"], ["That move places your king in check"], "king", takeback("That move places your king in check")); else {
    if (confixWrapper("condition", "whitesmove == true", [""], [], "king", whitesmove == true)) 
    {
      wkr_idle = confixWrapper("infix", "wkr_idle = false", [""], [], "king", false);
      wqr_idle = confixWrapper("infix", "wqr_idle = false", [""], [], "king", false);
    } else {
      bkr_idle = confixWrapper("infix", "bkr_idle = false", [""], [], "king", false);
      bqr_idle = confixWrapper("infix", "bqr_idle = false", [""], [], "king", false);
    }
    confixWrapper("functionCall", "makemove()", [], [], "king", makemove());
  }
}
var wqr_idle = confixWrapper("initvar", "var wqr_idle = true", [""], [], "", true);
var wkr_idle = confixWrapper("initvar", "var wkr_idle = true", [""], [], "", true);
var bqr_idle = confixWrapper("initvar", "var bqr_idle = true", [""], [], "", true);
var bkr_idle = confixWrapper("initvar", "var bkr_idle = true", [""], [], "", true);
function castle() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"castle\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "castle", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "castle", document.getElementById(activepiece)).style.pixelLeft);
  if (confixWrapper("condition", "whitesmove == true && newleft == 120", [""], [], "castle", whitesmove == true && newleft == 120)) 
  {
    row7[0] = confixWrapper("infix", "row7[0] = \"e\"", [""], [], "castle", "e");
    row7[1] = confixWrapper("infix", "row7[1] = \"e\"", [""], [], "castle", "e");
    row7[2] = confixWrapper("infix", "row7[2] = \"wk\"", [""], [], "castle", "wk");
    row7[3] = confixWrapper("infix", "row7[3] = \"wr\"", [""], [], "castle", "wr");
    row7[4] = confixWrapper("infix", "row7[4] = \"e\"", [""], [], "castle", "e");
    confixWrapper("functionCall", "document.getElementById(\"a70\")", ["a70"], ["a70"], "castle", document.getElementById("a70")).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a70\")\", [\"a70\"], [\"a70\"], \"castle\", document.getElementById(\"a70\")).style.pixelLeft = 180", [""], [], "castle", 180);
  }
  if (confixWrapper("condition", "whitesmove == true && newleft == 360", [""], [], "castle", whitesmove == true && newleft == 360)) 
  {
    row7[4] = confixWrapper("infix", "row7[4] = \"e\"", [""], [], "castle", "e");
    row7[5] = confixWrapper("infix", "row7[5] = \"wr\"", [""], [], "castle", "wr");
    row7[6] = confixWrapper("infix", "row7[6] = \"wk\"", [""], [], "castle", "wk");
    row7[7] = confixWrapper("infix", "row7[7] = \"e\"", [""], [], "castle", "e");
    confixWrapper("functionCall", "document.getElementById(\"a77\")", ["a77"], ["a77"], "castle", document.getElementById("a77")).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a77\")\", [\"a77\"], [\"a77\"], \"castle\", document.getElementById(\"a77\")).style.pixelLeft = 300", [""], [], "castle", 300);
  }
  if (confixWrapper("condition", "whitesmove == false && newleft == 120", [""], [], "castle", whitesmove == false && newleft == 120)) 
  {
    row0[0] = confixWrapper("infix", "row0[0] = \"e\"", [""], [], "castle", "e");
    row0[1] = confixWrapper("infix", "row0[1] = \"e\"", [""], [], "castle", "e");
    row0[2] = confixWrapper("infix", "row0[2] = \"bk\"", [""], [], "castle", "bk");
    row0[3] = confixWrapper("infix", "row0[3] = \"br\"", [""], [], "castle", "br");
    row0[4] = confixWrapper("infix", "row0[4] = \"e\"", [""], [], "castle", "e");
    confixWrapper("functionCall", "document.getElementById(\"a00\")", ["a00"], ["a00"], "castle", document.getElementById("a00")).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a00\")\", [\"a00\"], [\"a00\"], \"castle\", document.getElementById(\"a00\")).style.pixelLeft = 180", [""], [], "castle", 180);
  }
  if (confixWrapper("condition", "whitesmove == false && newleft == 360", [""], [], "castle", whitesmove == false && newleft == 360)) 
  {
    row0[4] = confixWrapper("infix", "row0[4] = \"e\"", [""], [], "castle", "e");
    row0[5] = confixWrapper("infix", "row0[5] = \"br\"", [""], [], "castle", "br");
    row0[6] = confixWrapper("infix", "row0[6] = \"bk\"", [""], [], "castle", "bk");
    row0[7] = confixWrapper("infix", "row0[7] = \"e\"", [""], [], "castle", "e");
    confixWrapper("functionCall", "document.getElementById(\"a07\")", ["a07"], ["a07"], "castle", document.getElementById("a07")).style.pixelLeft = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a07\")\", [\"a07\"], [\"a07\"], \"castle\", document.getElementById(\"a07\")).style.pixelLeft = 300", [""], [], "castle", 300);
  }
  whitesmove = confixWrapper("infix", "whitesmove = !whitesmove", [""], [], "castle", !whitesmove);
}
function promote() {
  var wb = confixWrapper("initvar", "var wb = \"w\"", [""], [], "promote", "w");
  if (confixWrapper("condition", "whitesmove == false", [""], [], "promote", whitesmove == false)) 
  wb = confixWrapper("infix", "wb = \"b\"", [""], [], "promote", "b");
  if (confixWrapper("condition", "wb == \"w\"", [""], [], "promote", wb == "w")) 
  row1[oldleft / 60] = confixWrapper("infix", "row1[oldleft / 60] = \"e\"", [""], [], "promote", "e"); else row6[oldleft / 60] = confixWrapper("infix", "row6[oldleft / 60] = \"e\"", [""], [], "promote", "e");
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"promote\", check()) == true", [""], [], "promote", confixWrapper("functionCall", "check()", [], [], "promote", check()) == true)) 
  {
    if (confixWrapper("condition", "wb == \"w\"", [""], [], "promote", wb == "w")) 
    row1[oldleft / 60] = confixWrapper("infix", "row1[oldleft / 60] = \"wp\"", [""], [], "promote", "wp"); else row6[oldleft / 60] == "bp";
    confixWrapper("functionCall", "takeback(\"That move places your King in check!\")", ["That move places your King in check!"], ["That move places your King in check!"], "promote", takeback("That move places your King in check!"));
  } else {
    if (confixWrapper("condition", "waitcapture == true", [""], [], "promote", waitcapture == true)) 
    confixWrapper("functionCall", "capture()", [], [], "promote", capture());
    hint.innerHTML = confixWrapper("infix", "hint.innerHTML = \"<table style=position:absolute;top:0;left:0;z-index:9999999; width=480 height=480><tr><td align=center><table style=cursor:default;font-family:arial;font-size:12pt;font-weight:bold; border=2 cellpadding=10 cellspacing=0 bgcolor=silver><tr><td align=center><p>Pawn Promotion</p><p><img style=cursor:pointer;cursor:hand; src=\" + piecestyle + \"/\" + wb + \"q.gif width=60 height=60 border=0 onclick=promote2('q')><img style=cursor:pointer;cursor:hand; src=\" + piecestyle + \"/\" + wb + \"r.gif width=60 height=60 border=0 onclick=promote2('r')><img style=cursor:pointer;cursor:hand; src=\" + piecestyle + \"/\" + wb + \"n.gif width=60 height=60 border=0 onclick=promote2('n')><img style=cursor:pointer;cursor:hand; src=\" + piecestyle + \"/\" + wb + \"b.gif width=60 height=60 border=0 onclick=promote2('b')></p></td></tr></table></td></tr></table>\"", [""], [], "promote", "<table style=position:absolute;top:0;left:0;z-index:9999999; width=480 height=480><tr><td align=center><table style=cursor:default;font-family:arial;font-size:12pt;font-weight:bold; border=2 cellpadding=10 cellspacing=0 bgcolor=silver><tr><td align=center><p>Pawn Promotion</p><p><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "/" + wb + "q.gif width=60 height=60 border=0 onclick=promote2('q')><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "/" + wb + "r.gif width=60 height=60 border=0 onclick=promote2('r')><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "/" + wb + "n.gif width=60 height=60 border=0 onclick=promote2('n')><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "/" + wb + "b.gif width=60 height=60 border=0 onclick=promote2('b')></p></td></tr></table></td></tr></table>");
  }
}
function promote2(towhat) {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"promote2\", document.getElementById(activepiece)).style.pixelLeft", [""], [], "promote2", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "promote2", document.getElementById(activepiece)).style.pixelLeft);
  var wb = confixWrapper("initvar", "var wb = \"w\"", [""], [], "promote2", "w");
  if (confixWrapper("condition", "whitesmove == false", [""], [], "promote2", whitesmove == false)) 
  wb = confixWrapper("infix", "wb = \"b\"", [""], [], "promote2", "b");
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "promote2", document.getElementById(activepiece)).src = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"promote2\", document.getElementById(activepiece)).src = piecestyle + \"/\" + wb + towhat + \".gif\"", [""], [], "promote2", piecestyle + "/" + wb + towhat + ".gif");
  confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "promote2", document.getElementById(activepiece)).name = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"promote2\", document.getElementById(activepiece)).name = wb + towhat", [""], [], "promote2", wb + towhat);
  if (confixWrapper("condition", "wb == \"w\"", [""], [], "promote2", wb == "w")) 
  row0[newleft / 60] = confixWrapper("infix", "row0[newleft / 60] = \"w\" + towhat", [""], [], "promote2", "w" + towhat); else row7[newleft / 60] = confixWrapper("infix", "row7[newleft / 60] = \"b\" + towhat", [""], [], "promote2", "b" + towhat);
  hint.innerHTML = confixWrapper("infix", "hint.innerHTML = \"\"", [""], [], "promote2", "");
  whitesmove = confixWrapper("infix", "whitesmove = !whitesmove", [""], [], "promote2", !whitesmove);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"promote2\", check()) == true", [""], [], "promote2", confixWrapper("functionCall", "check()", [], [], "promote2", check()) == true)) 
  hint.innerHTML = confixWrapper("infix", "hint.innerHTML = \"Check!\"", [""], [], "promote2", "Check!");
}
function enpassent() {
  var newleft = confixWrapper("initvar", "var newleft = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"enpassent\", document.getElementById(activepiece)).style.pixelLeft / 60", [""], [], "enpassent", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "enpassent", document.getElementById(activepiece)).style.pixelLeft / 60);
  if (confixWrapper("condition", "whitesmove == true", [""], [], "enpassent", whitesmove == true)) 
  {
    row3[oldleft / 60] = confixWrapper("infix", "row3[oldleft / 60] = \"e\"", [""], [], "enpassent", "e");
    row3[newleft] = confixWrapper("infix", "row3[newleft] = \"e\"", [""], [], "enpassent", "e");
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"enpassent\", check()) == true", [""], [], "enpassent", confixWrapper("functionCall", "check()", [], [], "enpassent", check()) == true)) 
    {
      row3[oldleft / 60] = confixWrapper("infix", "row3[oldleft / 60] = \"wp\"", [""], [], "enpassent", "wp");
      row3[newleft] = confixWrapper("infix", "row3[newleft] = \"bp\"", [""], [], "enpassent", "bp");
      confixWrapper("functionCall", "takeback(\"That en passent move places your King in check!\")", ["That en passent move places your King in check!"], ["That en passent move places your King in check!"], "enpassent", takeback("That en passent move places your King in check!"));
    } else {
      row2[newleft] = confixWrapper("infix", "row2[newleft] = \"wp\"", [""], [], "enpassent", "wp");
      confixWrapper("functionCall", "document.getElementById(\"a1\" + (newleft))", ["a1 + (newleft)"], ["a1" + (newleft)], "enpassent", document.getElementById("a1" + (newleft))).style.visibility = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a1\" + (newleft))\", [\"a1 + (newleft)\"], [\"a1\" + (newleft)], \"enpassent\", document.getElementById(\"a1\" + (newleft))).style.visibility = \"hidden\"", [""], [], "enpassent", "hidden");
      whitesmove = confixWrapper("infix", "whitesmove = !whitesmove", [""], [], "enpassent", !whitesmove);
      hint.innerHTML = confixWrapper("infix", "hint.innerHTML = \"En passent!\"", [""], [], "enpassent", "En passent!");
    }
  } else {
    row4[oldleft / 60] = confixWrapper("infix", "row4[oldleft / 60] = \"e\"", [""], [], "enpassent", "e");
    row4[newleft] = confixWrapper("infix", "row4[newleft] = \"e\"", [""], [], "enpassent", "e");
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"enpassent\", check()) == true", [""], [], "enpassent", confixWrapper("functionCall", "check()", [], [], "enpassent", check()) == true)) 
    {
      row4[oldleft / 60] = confixWrapper("infix", "row4[oldleft / 60] = \"bp\"", [""], [], "enpassent", "bp");
      row4[newleft] = confixWrapper("infix", "row4[newleft] = \"wp\"", [""], [], "enpassent", "wp");
      confixWrapper("functionCall", "takeback(\"That en passent move places your King in check!\")", ["That en passent move places your King in check!"], ["That en passent move places your King in check!"], "enpassent", takeback("That en passent move places your King in check!"));
    } else {
      row5[newleft] = confixWrapper("infix", "row5[newleft] = \"bp\"", [""], [], "enpassent", "bp");
      confixWrapper("functionCall", "document.getElementById(\"a6\" + (newleft))", ["a6 + (newleft)"], ["a6" + (newleft)], "enpassent", document.getElementById("a6" + (newleft))).style.visibility = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a6\" + (newleft))\", [\"a6 + (newleft)\"], [\"a6\" + (newleft)], \"enpassent\", document.getElementById(\"a6\" + (newleft))).style.visibility = \"hidden\"", [""], [], "enpassent", "hidden");
      whitesmove = confixWrapper("infix", "whitesmove = !whitesmove", [""], [], "enpassent", !whitesmove);
      hint.innerHTML = confixWrapper("infix", "hint.innerHTML = \"En passent!\"", [""], [], "enpassent", "En passent!");
    }
  }
}
function check(specialtop, specialleft) {
  var enemy = confixWrapper("initvar", "var enemy = \"b\"", [""], [], "check", "b");
  var kingleft = confixWrapper("initvar", "var kingleft = confixWrapper(\"functionCall\", \"document.getElementById('a74')\", [\"a74\"], ['a74'], \"check\", document.getElementById('a74')).style.pixelLeft / 60", [""], [], "check", confixWrapper("functionCall", "document.getElementById('a74')", ["a74"], ['a74'], "check", document.getElementById('a74')).style.pixelLeft / 60);
  var kingtop = confixWrapper("initvar", "var kingtop = confixWrapper(\"functionCall\", \"document.getElementById('a74')\", [\"a74\"], ['a74'], \"check\", document.getElementById('a74')).style.pixelTop / 60", [""], [], "check", confixWrapper("functionCall", "document.getElementById('a74')", ["a74"], ['a74'], "check", document.getElementById('a74')).style.pixelTop / 60);
  if (confixWrapper("condition", "whitesmove == false", [""], [], "check", whitesmove == false)) 
  {
    enemy = confixWrapper("infix", "enemy = \"w\"", [""], [], "check", "w");
    var kingleft = confixWrapper("initvar", "var kingleft = confixWrapper(\"functionCall\", \"document.getElementById('a04')\", [\"a04\"], ['a04'], \"check\", document.getElementById('a04')).style.pixelLeft / 60", [""], [], "check", confixWrapper("functionCall", "document.getElementById('a04')", ["a04"], ['a04'], "check", document.getElementById('a04')).style.pixelLeft / 60);
    var kingtop = confixWrapper("initvar", "var kingtop = confixWrapper(\"functionCall\", \"document.getElementById('a04')\", [\"a04\"], ['a04'], \"check\", document.getElementById('a04')).style.pixelTop / 60", [""], [], "check", confixWrapper("functionCall", "document.getElementById('a04')", ["a04"], ['a04'], "check", document.getElementById('a04')).style.pixelTop / 60);
  }
  if (confixWrapper("condition", "specialleft != null", [""], [], "check", specialleft != null)) 
  {
    kingleft = confixWrapper("infix", "kingleft = specialleft", [""], [], "check", specialleft);
    kingtop = confixWrapper("infix", "kingtop = specialtop", [""], [], "check", specialtop);
  }
  if (confixWrapper("condition", "kingtop > 1", [""], [], "check", kingtop > 1)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 2) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop - 2) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop - 2) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop - 2) + \"[\" + (kingleft - 1) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 2) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop - 2) + [ + (kingleft - 1) + ]"], ["row" + (kingtop - 2) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop - 2) + "[" + (kingleft - 1) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 1", [""], [], "check", kingtop > 1)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 2) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop - 2) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop - 2) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop - 2) + \"[\" + (kingleft + 1) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 2) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop - 2) + [ + (kingleft + 1) + ]"], ["row" + (kingtop - 2) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop - 2) + "[" + (kingleft + 1) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 0", [""], [], "check", kingtop > 0)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 2) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft - 2) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft - 2) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 2) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 2) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft - 2) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft - 2) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft - 2) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 0", [""], [], "check", kingtop > 0)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 2) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft + 2) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft + 2) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 2) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 2) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft + 2) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft + 2) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft + 2) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 7", [""], [], "check", kingtop < 7)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 2) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft - 2) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft - 2) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 2) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 2) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft - 2) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft - 2) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft - 2) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 7", [""], [], "check", kingtop < 7)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 2) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft + 2) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft + 2) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 2) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 2) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft + 2) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft + 2) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft + 2) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 6", [""], [], "check", kingtop < 6)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 2) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop + 2) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop + 2) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop + 2) + \"[\" + (kingleft - 1) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 2) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop + 2) + [ + (kingleft - 1) + ]"], ["row" + (kingtop + 2) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop + 2) + "[" + (kingleft - 1) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 6", [""], [], "check", kingtop < 6)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 2) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop + 2) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop + 2) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop + 2) + \"[\" + (kingleft + 1) + \"]\")) == enemy + \"n\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 2) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop + 2) + [ + (kingleft + 1) + ]"], ["row" + (kingtop + 2) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop + 2) + "[" + (kingleft + 1) + "]")) == enemy + "n")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 1 && whitesmove == true", [""], [], "check", kingtop > 1 && whitesmove == true)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\")) == \"bp\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft - 1) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft - 1) + "]")) == "bp")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 1 && whitesmove == true", [""], [], "check", kingtop > 1 && whitesmove == true)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\")) == \"bp\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft + 1) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft + 1) + "]")) == "bp")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 6 && whitesmove == false", [""], [], "check", kingtop < 6 && whitesmove == false)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\")) == \"wp\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft - 1) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft - 1) + "]")) == "wp")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 6 && whitesmove == false", [""], [], "check", kingtop < 6 && whitesmove == false)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\")) == \"wp\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft + 1) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft + 1) + "]")) == "wp")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 0", [""], [], "check", kingtop > 0)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft - 1) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft - 1) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 0", [""], [], "check", kingtop > 0)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop > 0", [""], [], "check", kingtop > 0)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop - 1) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - 1) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop - 1) + [ + (kingleft + 1) + ]"], ["row" + (kingtop - 1) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop - 1) + "[" + (kingleft + 1) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop) + \"[\" + (kingleft - 1) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop) + [ + (kingleft - 1) + ]"], ["row" + (kingtop) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop) + "[" + (kingleft - 1) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop) + \"[\" + (kingleft) + \"]\")\", [\"row + (kingtop) + [ + (kingleft) + ]\"], [\"row\" + (kingtop) + \"[\" + (kingleft) + \"]\"], \"check\", eval(\"row\" + (kingtop) + \"[\" + (kingleft) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop) + \"[\" + (kingleft) + \"]\")", ["row + (kingtop) + [ + (kingleft) + ]"], ["row" + (kingtop) + "[" + (kingleft) + "]"], "check", eval("row" + (kingtop) + "[" + (kingleft) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop) + \"[\" + (kingleft + 1) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop) + [ + (kingleft + 1) + ]"], ["row" + (kingtop) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop) + "[" + (kingleft + 1) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 7", [""], [], "check", kingtop < 7)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft - 1) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft - 1) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft - 1) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft - 1) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft - 1) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 7", [""], [], "check", kingtop < 7)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  if (confixWrapper("condition", "kingtop < 7", [""], [], "check", kingtop < 7)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\")\", [\"row + (kingtop + 1) + [ + (kingleft + 1) + ]\"], [\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\"], \"check\", eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\")) == enemy + \"k\"", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + 1) + \"[\" + (kingleft + 1) + \"]\")", ["row + (kingtop + 1) + [ + (kingleft + 1) + ]"], ["row" + (kingtop + 1) + "[" + (kingleft + 1) + "]"], "check", eval("row" + (kingtop + 1) + "[" + (kingleft + 1) + "]")) == enemy + "k")) 
  return confixWrapper("return", "return true;", [""], [], "check", true);
  var gappiece;
  var gap;
  gap = confixWrapper("infix", "gap = 0", [""], [], "check", 0);
  while (kingtop - gap > 0) 
    {
      gap++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - gap) + \"[\" + (kingleft) + \"]\")\", [\"row + (kingtop - gap) + [ + (kingleft) + ]\"], [\"row\" + (kingtop - gap) + \"[\" + (kingleft) + \"]\"], \"check\", eval(\"row\" + (kingtop - gap) + \"[\" + (kingleft) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - gap) + \"[\" + (kingleft) + \"]\")", ["row + (kingtop - gap) + [ + (kingleft) + ]"], ["row" + (kingtop - gap) + "[" + (kingleft) + "]"], "check", eval("row" + (kingtop - gap) + "[" + (kingleft) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"r\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "r")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  gap = confixWrapper("infix", "gap = 0", [""], [], "check", 0);
  while (kingtop + gap < 7) 
    {
      gap++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + gap) + \"[\" + (kingleft) + \"]\")\", [\"row + (kingtop + gap) + [ + (kingleft) + ]\"], [\"row\" + (kingtop + gap) + \"[\" + (kingleft) + \"]\"], \"check\", eval(\"row\" + (kingtop + gap) + \"[\" + (kingleft) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + gap) + \"[\" + (kingleft) + \"]\")", ["row + (kingtop + gap) + [ + (kingleft) + ]"], ["row" + (kingtop + gap) + "[" + (kingleft) + "]"], "check", eval("row" + (kingtop + gap) + "[" + (kingleft) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"r\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "r")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  gap = confixWrapper("infix", "gap = 0", [""], [], "check", 0);
  while (kingleft - gap > 0) 
    {
      gap++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + kingtop + \"[\" + (kingleft - gap) + \"]\")\", [\"row + kingtop + [ + (kingleft - gap) + ]\"], [\"row\" + kingtop + \"[\" + (kingleft - gap) + \"]\"], \"check\", eval(\"row\" + kingtop + \"[\" + (kingleft - gap) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + kingtop + \"[\" + (kingleft - gap) + \"]\")", ["row + kingtop + [ + (kingleft - gap) + ]"], ["row" + kingtop + "[" + (kingleft - gap) + "]"], "check", eval("row" + kingtop + "[" + (kingleft - gap) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"r\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "r")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  gap = confixWrapper("infix", "gap = 0", [""], [], "check", 0);
  while (kingleft + gap < 7) 
    {
      gap++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + kingtop + \"[\" + (kingleft + gap) + \"]\")\", [\"row + kingtop + [ + (kingleft + gap) + ]\"], [\"row\" + kingtop + \"[\" + (kingleft + gap) + \"]\"], \"check\", eval(\"row\" + kingtop + \"[\" + (kingleft + gap) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + kingtop + \"[\" + (kingleft + gap) + \"]\")", ["row + kingtop + [ + (kingleft + gap) + ]"], ["row" + kingtop + "[" + (kingleft + gap) + "]"], "check", eval("row" + kingtop + "[" + (kingleft + gap) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"r\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "r")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  var gaptop = confixWrapper("initvar", "var gaptop = 0", [""], [], "check", 0);
  var gapleft = confixWrapper("initvar", "var gapleft = 0", [""], [], "check", 0);
  while (kingtop - gaptop > 0 && kingleft - gapleft > 0) 
    {
      gaptop++;
      gapleft++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - gaptop) + \"[\" + (kingleft - gapleft) + \"]\")\", [\"row + (kingtop - gaptop) + [ + (kingleft - gapleft) + ]\"], [\"row\" + (kingtop - gaptop) + \"[\" + (kingleft - gapleft) + \"]\"], \"check\", eval(\"row\" + (kingtop - gaptop) + \"[\" + (kingleft - gapleft) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - gaptop) + \"[\" + (kingleft - gapleft) + \"]\")", ["row + (kingtop - gaptop) + [ + (kingleft - gapleft) + ]"], ["row" + (kingtop - gaptop) + "[" + (kingleft - gapleft) + "]"], "check", eval("row" + (kingtop - gaptop) + "[" + (kingleft - gapleft) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"b\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "b")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  gaptop = confixWrapper("infix", "gaptop = 0", [""], [], "check", 0);
  gapleft = confixWrapper("infix", "gapleft = 0", [""], [], "check", 0);
  while (kingtop - gaptop > 0 && kingleft + gapleft < 7) 
    {
      gaptop++;
      gapleft++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop - gaptop) + \"[\" + (kingleft + gapleft) + \"]\")\", [\"row + (kingtop - gaptop) + [ + (kingleft + gapleft) + ]\"], [\"row\" + (kingtop - gaptop) + \"[\" + (kingleft + gapleft) + \"]\"], \"check\", eval(\"row\" + (kingtop - gaptop) + \"[\" + (kingleft + gapleft) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop - gaptop) + \"[\" + (kingleft + gapleft) + \"]\")", ["row + (kingtop - gaptop) + [ + (kingleft + gapleft) + ]"], ["row" + (kingtop - gaptop) + "[" + (kingleft + gapleft) + "]"], "check", eval("row" + (kingtop - gaptop) + "[" + (kingleft + gapleft) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"b\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "b")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  gaptop = confixWrapper("infix", "gaptop = 0", [""], [], "check", 0);
  gapleft = confixWrapper("infix", "gapleft = 0", [""], [], "check", 0);
  while (kingtop + gaptop < 7 && kingleft - gapleft > 0) 
    {
      gaptop++;
      gapleft++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + gaptop) + \"[\" + (kingleft - gapleft) + \"]\")\", [\"row + (kingtop + gaptop) + [ + (kingleft - gapleft) + ]\"], [\"row\" + (kingtop + gaptop) + \"[\" + (kingleft - gapleft) + \"]\"], \"check\", eval(\"row\" + (kingtop + gaptop) + \"[\" + (kingleft - gapleft) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + gaptop) + \"[\" + (kingleft - gapleft) + \"]\")", ["row + (kingtop + gaptop) + [ + (kingleft - gapleft) + ]"], ["row" + (kingtop + gaptop) + "[" + (kingleft - gapleft) + "]"], "check", eval("row" + (kingtop + gaptop) + "[" + (kingleft - gapleft) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"b\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "b")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
  gaptop = confixWrapper("infix", "gaptop = 0", [""], [], "check", 0);
  gapleft = confixWrapper("infix", "gapleft = 0", [""], [], "check", 0);
  while (kingtop + gaptop < 7 && kingleft + gapleft < 7) 
    {
      gaptop++;
      gapleft++;
      gappiece = confixWrapper("infix", "gappiece = confixWrapper(\"functionCall\", \"eval(\"row\" + (kingtop + gaptop) + \"[\" + (kingleft + gapleft) + \"]\")\", [\"row + (kingtop + gaptop) + [ + (kingleft + gapleft) + ]\"], [\"row\" + (kingtop + gaptop) + \"[\" + (kingleft + gapleft) + \"]\"], \"check\", eval(\"row\" + (kingtop + gaptop) + \"[\" + (kingleft + gapleft) + \"]\"))", [""], [], "check", confixWrapper("functionCall", "eval(\"row\" + (kingtop + gaptop) + \"[\" + (kingleft + gapleft) + \"]\")", ["row + (kingtop + gaptop) + [ + (kingleft + gapleft) + ]"], ["row" + (kingtop + gaptop) + "[" + (kingleft + gapleft) + "]"], "check", eval("row" + (kingtop + gaptop) + "[" + (kingleft + gapleft) + "]")));
      if (confixWrapper("condition", "gappiece == enemy + \"q\" || gappiece == enemy + \"b\"", [""], [], "check", gappiece == enemy + "q" || gappiece == enemy + "b")) 
      return confixWrapper("return", "return true;", [""], [], "check", true);
      if (confixWrapper("condition", "gappiece != \"e\"", [""], [], "check", gappiece != "e")) 
      break;
    }
}
function capture() {
  for (var c = confixWrapper("initvar", "var c = 0", [""], [], "capture", 0); confixWrapper("loopCondition", "c < 8", ["c"], [c], "capture", c < 8); c++) 
    {
      for (var cc = confixWrapper("initvar", "var cc = 0", [""], [], "capture", 0); confixWrapper("loopCondition", "cc < 8", ["cc"], [cc], "capture", cc < 8); cc++) 
        {
          if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById(\"a\" + c + \"\" + cc)\", [\"a + c +  + cc\"], [\"a\" + c + \"\" + cc], \"capture\", document.getElementById(\"a\" + c + \"\" + cc)) != null && activepiece != \"a\" + c + \"\" + cc", [""], [], "capture", confixWrapper("functionCall", "document.getElementById(\"a\" + c + \"\" + cc)", ["a + c +  + cc"], ["a" + c + "" + cc], "capture", document.getElementById("a" + c + "" + cc)) != null && activepiece != "a" + c + "" + cc)) 
          if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById(\"a\" + c + \"\" + cc)\", [\"a + c +  + cc\"], [\"a\" + c + \"\" + cc], \"capture\", document.getElementById(\"a\" + c + \"\" + cc)).style.pixelLeft == confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"capture\", document.getElementById(activepiece)).style.pixelLeft && confixWrapper(\"functionCall\", \"document.getElementById(\"a\" + c + \"\" + cc)\", [\"a + c +  + cc\"], [\"a\" + c + \"\" + cc], \"capture\", document.getElementById(\"a\" + c + \"\" + cc)).style.pixelTop == confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"capture\", document.getElementById(activepiece)).style.pixelTop", [""], [], "capture", confixWrapper("functionCall", "document.getElementById(\"a\" + c + \"\" + cc)", ["a + c +  + cc"], ["a" + c + "" + cc], "capture", document.getElementById("a" + c + "" + cc)).style.pixelLeft == confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "capture", document.getElementById(activepiece)).style.pixelLeft && confixWrapper("functionCall", "document.getElementById(\"a\" + c + \"\" + cc)", ["a + c +  + cc"], ["a" + c + "" + cc], "capture", document.getElementById("a" + c + "" + cc)).style.pixelTop == confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "capture", document.getElementById(activepiece)).style.pixelTop)) 
          confixWrapper("functionCall", "document.getElementById(\"a\" + c + \"\" + cc)", ["a + c +  + cc"], ["a" + c + "" + cc], "capture", document.getElementById("a" + c + "" + cc)).style.visibility = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a\" + c + \"\" + cc)\", [\"a + c +  + cc\"], [\"a\" + c + \"\" + cc], \"capture\", document.getElementById(\"a\" + c + \"\" + cc)).style.visibility = \"hidden\"", [""], [], "capture", "hidden");
        }
    }
}
var tempto;
function makemove() {
  tempto = confixWrapper("infix", "tempto = confixWrapper(\"functionCall\", \"eval(\"row\" + (document.getElementById(activepiece).style.pixelTop / 60) + \"[\" + (document.getElementById(activepiece).style.pixelLeft / 60) + \"]\")\", [\"row + (document.getElementById(activepiece).style.pixelTop / 60) + [ + (document.getElementById(activepiece).style.pixelLeft / 60) + ]\"], [\"row\" + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelTop / 60) + \"[\" + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelLeft / 60) + \"]\"], \"makemove\", eval(\"row\" + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelTop / 60) + \"[\" + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelLeft / 60) + \"]\"))", [""], [], "makemove", confixWrapper("functionCall", "eval(\"row\" + (document.getElementById(activepiece).style.pixelTop / 60) + \"[\" + (document.getElementById(activepiece).style.pixelLeft / 60) + \"]\")", ["row + (document.getElementById(activepiece).style.pixelTop / 60) + [ + (document.getElementById(activepiece).style.pixelLeft / 60) + ]"], ["row" + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelTop / 60) + "[" + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelLeft / 60) + "]"], "makemove", eval("row" + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelTop / 60) + "[" + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelLeft / 60) + "]")));
  var temprow = confixWrapper("initvar", "var temprow = confixWrapper(\"functionCall\", \"eval('row' + (oldtop / 60))\", [\"row + (oldtop / 60)\"], ['row' + (oldtop / 60)], \"makemove\", eval('row' + (oldtop / 60)))", [""], [], "makemove", confixWrapper("functionCall", "eval('row' + (oldtop / 60))", ["row + (oldtop / 60)"], ['row' + (oldtop / 60)], "makemove", eval('row' + (oldtop / 60))));
  temprow[oldleft / 60] = confixWrapper("infix", "temprow[oldleft / 60] = \"e\"", [""], [], "makemove", "e");
  var temprow = confixWrapper("initvar", "var temprow = confixWrapper(\"functionCall\", \"eval('row' + (document.getElementById(activepiece).style.pixelTop / 60))\", [\"row + (document.getElementById(activepiece).style.pixelTop / 60)\"], ['row' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelTop / 60)], \"makemove\", eval('row' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelTop / 60)))", [""], [], "makemove", confixWrapper("functionCall", "eval('row' + (document.getElementById(activepiece).style.pixelTop / 60))", ["row + (document.getElementById(activepiece).style.pixelTop / 60)"], ['row' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelTop / 60)], "makemove", eval('row' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelTop / 60))));
  temprow[confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).style.pixelLeft / 60] = confixWrapper("infix", "temprow[confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).style.pixelLeft / 60] = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"makemove\", document.getElementById(activepiece)).name", [""], [], "makemove", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "makemove", document.getElementById(activepiece)).name);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"makemove\", check()) == true", [""], [], "makemove", confixWrapper("functionCall", "check()", [], [], "makemove", check()) == true)) 
  confixWrapper("functionCall", "undomove()", [], [], "makemove", undomove()); else {
    if (confixWrapper("condition", "waitcapture == true", [""], [], "makemove", waitcapture == true)) 
    confixWrapper("functionCall", "capture()", [], [], "makemove", capture());
    whitesmove = confixWrapper("infix", "whitesmove = !whitesmove", [""], [], "makemove", !whitesmove);
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"check()\", [], [], \"makemove\", check()) == true", [""], [], "makemove", confixWrapper("functionCall", "check()", [], [], "makemove", check()) == true)) 
    hint.innerHTML = confixWrapper("infix", "hint.innerHTML = \"Check!\"", [""], [], "makemove", "Check!");
  }
}
function undomove() {
  var temprow = confixWrapper("initvar", "var temprow = confixWrapper(\"functionCall\", \"eval('row' + (document.getElementById(activepiece).style.pixelTop / 60))\", [\"row + (document.getElementById(activepiece).style.pixelTop / 60)\"], ['row' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"undomove\", document.getElementById(activepiece)).style.pixelTop / 60)], \"undomove\", eval('row' + (confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"undomove\", document.getElementById(activepiece)).style.pixelTop / 60)))", [""], [], "undomove", confixWrapper("functionCall", "eval('row' + (document.getElementById(activepiece).style.pixelTop / 60))", ["row + (document.getElementById(activepiece).style.pixelTop / 60)"], ['row' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "undomove", document.getElementById(activepiece)).style.pixelTop / 60)], "undomove", eval('row' + (confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "undomove", document.getElementById(activepiece)).style.pixelTop / 60))));
  temprow[confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "undomove", document.getElementById(activepiece)).style.pixelLeft / 60] = confixWrapper("infix", "temprow[confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"undomove\", document.getElementById(activepiece)).style.pixelLeft / 60] = tempto", [""], [], "undomove", tempto);
  var temprow = confixWrapper("initvar", "var temprow = confixWrapper(\"functionCall\", \"eval('row' + (oldtop / 60))\", [\"row + (oldtop / 60)\"], ['row' + (oldtop / 60)], \"undomove\", eval('row' + (oldtop / 60)))", [""], [], "undomove", confixWrapper("functionCall", "eval('row' + (oldtop / 60))", ["row + (oldtop / 60)"], ['row' + (oldtop / 60)], "undomove", eval('row' + (oldtop / 60))));
  temprow[oldleft / 60] = confixWrapper("infix", "temprow[oldleft / 60] = confixWrapper(\"functionCall\", \"document.getElementById(activepiece)\", [\"activepiece\"], [activepiece], \"undomove\", document.getElementById(activepiece)).name", [""], [], "undomove", confixWrapper("functionCall", "document.getElementById(activepiece)", ["activepiece"], [activepiece], "undomove", document.getElementById(activepiece)).name);
  confixWrapper("functionCall", "takeback(\"That move places your King in check!\")", ["That move places your King in check!"], ["That move places your King in check!"], "undomove", takeback("That move places your King in check!"));
}
var row0 = confixWrapper("initvar", "var row0 = new Array(\"br\", \"bn\", \"bb\", \"bq\", \"bk\", \"bb\", \"bn\", \"br\")", [""], [], "", new Array("br", "bn", "bb", "bq", "bk", "bb", "bn", "br"));
var row1 = confixWrapper("initvar", "var row1 = new Array(\"bp\", \"bp\", \"bp\", \"bp\", \"bp\", \"bp\", \"bp\", \"bp\")", [""], [], "", new Array("bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"));
var row2 = confixWrapper("initvar", "var row2 = new Array(\"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\")", [""], [], "", new Array("e", "e", "e", "e", "e", "e", "e", "e"));
var row3 = confixWrapper("initvar", "var row3 = new Array(\"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\")", [""], [], "", new Array("e", "e", "e", "e", "e", "e", "e", "e"));
var row4 = confixWrapper("initvar", "var row4 = new Array(\"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\")", [""], [], "", new Array("e", "e", "e", "e", "e", "e", "e", "e"));
var row5 = confixWrapper("initvar", "var row5 = new Array(\"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\", \"e\")", [""], [], "", new Array("e", "e", "e", "e", "e", "e", "e", "e"));
var row6 = confixWrapper("initvar", "var row6 = new Array(\"wp\", \"wp\", \"wp\", \"wp\", \"wp\", \"wp\", \"wp\", \"wp\")", [""], [], "", new Array("wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"));
var row7 = confixWrapper("initvar", "var row7 = new Array(\"wr\", \"wn\", \"wb\", \"wq\", \"wk\", \"wb\", \"wn\", \"wr\")", [""], [], "", new Array("wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"));
var piecestyle = confixWrapper("initvar", "var piecestyle = \"default\"", [""], [], "", "default");
function piecechange() {
  var piecestyle = confixWrapper("initvar", "var piecestyle = pieceslist.options[pieceslist.options.selectedIndex].value", [""], [], "piecechange", pieceslist.options[pieceslist.options.selectedIndex].value);
  hhh = confixWrapper("infix", "hhh = new Array(\"0\", \"1\", \"6\", \"7\")", [""], [], "piecechange", new Array("0", "1", "6", "7"));
  for (var h = confixWrapper("initvar", "var h = 0", [""], [], "piecechange", 0); confixWrapper("loopCondition", "h < 4", ["h"], [h], "piecechange", h < 4); h++) 
    {
      for (var hh = confixWrapper("initvar", "var hh = 0", [""], [], "piecechange", 0); confixWrapper("loopCondition", "hh < 8", ["hh"], [hh], "piecechange", hh < 8); hh++) 
        {
          confixWrapper("functionCall", "document.getElementById(\"a\" + hhh[h] + \"\" + hh)", ["a + hhh[h] +  + hh"], ["a" + hhh[h] + "" + hh], "piecechange", document.getElementById("a" + hhh[h] + "" + hh)).src = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"a\" + hhh[h] + \"\" + hh)\", [\"a + hhh[h] +  + hh\"], [\"a\" + hhh[h] + \"\" + hh], \"piecechange\", document.getElementById(\"a\" + hhh[h] + \"\" + hh)).src = piecestyle + \"/\" + confixWrapper(\"functionCall\", \"document.getElementById(\"a\" + hhh[h] + \"\" + hh)\", [\"a + hhh[h] +  + hh\"], [\"a\" + hhh[h] + \"\" + hh], \"piecechange\", document.getElementById(\"a\" + hhh[h] + \"\" + hh)).name + \".gif\"", [""], [], "piecechange", piecestyle + "/" + confixWrapper("functionCall", "document.getElementById(\"a\" + hhh[h] + \"\" + hh)", ["a + hhh[h] +  + hh"], ["a" + hhh[h] + "" + hh], "piecechange", document.getElementById("a" + hhh[h] + "" + hh)).name + ".gif");
        }
    }
}
function backchange() {
  backarea.background = confixWrapper("infix", "backarea.background = backlist.options[backlist.options.selectedIndex].value", ["backlist.options[backlist.options.selectedIndex]"], [backlist.options[backlist.options.selectedIndex]], "backchange", backlist.options[backlist.options.selectedIndex].value);
}
function showlayout() {
  confixWrapper("functionCall", "alert(row0 + \"\n\" + row1 + \"\n\" + row2 + \"\n\" + row3 + \"\n\" + row4 + \"\n\" + row5 + \"\n\" + row6 + \"\n\" + row7)", ["row0 + \n + row1 + \n + row2 + \n + row3 + \n + row4 + \n + row5 + \n + row6 + \n + row7"], [row0 + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + row6 + "\n" + row7], "showlayout", alert(row0 + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + row6 + "\n" + row7));
}
