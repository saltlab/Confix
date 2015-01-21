var oldtop;
var oldleft;
active = null;
var activepiece;
zindex = 1;
held = false;
var hint = document.getElementById('hint');

function grab(id) {
    {
        hint.innerHTML = '';
        held = true;
        document.getElementById(id).style.zIndex = zindex;
        zindex++;
        document.onmousemove = drag;
        activepiece = id;
        oldtop = document.getElementById(activepiece).style.pixelTop;
        oldleft = document.getElementById(activepiece).style.pixelLeft;
        drag();
    }
}

function drag() {
    if (!held) {
        checkmove();
        return true;
    }
    if (event.button != 1) return true;
    document.onmouseup = drop;
    document.getElementById(activepiece).style.pixelLeft = event.clientX - 30;
    document.getElementById(activepiece).style.pixelTop = event.clientY - 40;
    return false;
}

function drop() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.getElementById(activepiece).style.pixelLeft = Math.round(document.getElementById(activepiece).style.pixelLeft / 60) * 60;
    document.getElementById(activepiece).style.pixelTop = Math.round(document.getElementById(activepiece).style.pixelTop / 60) * 60;
    if (document.getElementById(activepiece).style.pixelLeft < 0 || document.getElementById(activepiece).style.pixelLeft > 420 || document.getElementById(activepiece).style.pixelTop < 0 || document.getElementById(activepiece).style.pixelTop > 420) takeback();
    else if (document.getElementById(activepiece).style.pixelLeft == oldleft && document.getElementById(activepiece).style.pixelTop == oldtop) takeback();
    else checkplayer();
}

function takeback(message) {
    waitcapture = false;
    document.getElementById(activepiece).style.pixelLeft = oldleft;
    document.getElementById(activepiece).style.pixelTop = oldtop;
    if (message) hint.innerHTML = message;
}
var badmove = false;
var whitesmove = true;

function checkplayer() {
    if (document.getElementById(activepiece).name.substring(0, 1) == "w" && whitesmove == false) {
        takeback("It is Black's turn to move");
        badmove = true
    }
    if (document.getElementById(activepiece).name.substring(0, 1) == "b" && whitesmove == true) {
        takeback("It is White's turn to move");
        badmove = true
    }
    if (badmove == false) checkoccupant();
    badmove = false;
}
waitcapture = false;

function checkoccupant() {
    var movetotype = eval('row' + (document.getElementById(activepiece).style.pixelTop / 60) + '[' + (document.getElementById(activepiece).style.pixelLeft / 60) + ']').substring(0, 1);
    if ((movetotype == "w" && whitesmove == true) || (movetotype == "b" && whitesmove == false)) {
        takeback("You cannot capture your own pieces");
        badmove = true;
    }
    if ((movetotype == "w" && whitesmove == false) || (movetotype == "b" && whitesmove == true)) {
        waitcapture = true;
    }
    if (badmove == false) checkpiece();
    badmove = false;
}

function checkpiece() {
    var piecetype = document.getElementById(activepiece).name.substring(1, 2);
    if (piecetype == "p") pawn();
    if (piecetype == "r") rook();
    if (piecetype == "b") bishop();
    if (piecetype == "n") night();
    if (piecetype == "q") queen();
    if (piecetype == "k") king();
}
var pawnleap;

function pawn() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var newtop = document.getElementById(activepiece).style.pixelTop;
    if (whitesmove == true) {
        if (oldtop == 180 && newtop == 120 && eval("row3[" + (newleft / 60) + "]") == "bp" && pawnleap == newleft / 60) enpassent();
        else if (oldtop - newtop != 60 && oldtop - newtop != 120 && oldtop == 360) takeback("Illegal Pawn move.");
        else if (oldtop - newtop != 60 && oldtop != 360) takeback("Illegal Pawn move.");
        else if (oldleft - newleft < -60 || oldleft - newleft > 60) takeback("Illegal Pawn move.");
        else if (oldleft - newleft != 0 && waitcapture == false) takeback("Illegal Pawn move.");
        else if (waitcapture == true && (oldtop - newtop != 60 || (oldleft - newleft != -60 && oldleft - newleft != 60))) takeback("Illegal Pawn move.");
        else if (oldtop == 360 && newtop == 240 && eval("row5[" + oldleft / 60 + "]") != "e") takeback("Illegal Pawn move.");
        else if (newtop == 0 && check() != true) promote();
        else {
            makemove();
            if (oldtop - newtop == 120) pawnleap = newleft / 60;
            else pawnleap = null
                }
    } else {
        if (oldtop == 240 && newtop == 300 && eval("row4[" + (newleft / 60) + "]") == "wp" && pawnleap == newleft / 60) enpassent();
        else if (oldtop - newtop != -60 && oldtop - newtop != -120 && oldtop == 60) takeback("Illegal Pawn move.");
        else if (oldtop - newtop != -60 && oldtop != 60) takeback("Illegal Pawn move.");
        else if (oldleft - newleft < -60 || oldleft - newleft > 60) takeback("Illegal Pawn move.");
        else if (oldleft - newleft != 0 && waitcapture == false) takeback("Illegal Pawn move.");
        else if (waitcapture == true && (oldtop - newtop != -60 || (oldleft - newleft != -60 && oldleft - newleft != 60))) takeback("Illegal Pawn move.");
        else if (oldtop == 60 && newtop == 180 && eval("row2[" + oldleft / 60 + "]") != "e") takeback("Illegal Pawn move.");
        else if (newtop == 420) promote();
        else {
            makemove();
            if (oldtop - newtop == -120) pawnleap = newleft / 60;
            else pawnleap = null
                }
    }
}

function rook() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var newtop = document.getElementById(activepiece).style.pixelTop;
    if (oldleft != newleft && oldtop != newtop) {
        takeback("The Rook can only move in straight lines: horizontally or vertically.");
        badmove = true;
    } else if (oldleft == newleft) {
        var gap = (newtop - oldtop) / 60;
        if (gap < 0) gap++;
        if (gap > 0) gap--;
        while (gap != 0) {
            if (eval("row" + (oldtop / 60 + gap) + "[" + oldleft / 60 + "]") != "e") {
                badmove = true;
                takeback("There must be no pieces occupying the squares along the file that the Rook travels.");
            }
            if (gap < 0) gap++;
            if (gap > 0) gap--;
        }
    } else if (oldtop == newtop) {
        var gap = (newleft - oldleft) / 60;
        if (gap < 0) gap++;
        if (gap > 0) gap--;
        while (gap != 0) {
            if (eval("row" + oldtop / 60 + "[" + (oldleft / 60 + gap) + "]") != "e") {
                badmove = true;
                takeback("There must be no pieces occupying the squares along the rank that the Rook travels.");
            }
            if (gap < 0) gap++;
            if (gap > 0) gap--;
        }
    }
    if (badmove == false) {
        makemove();
        if (oldleft == 0 && oldtop == 0) bqr_idle = false;
        if (oldleft == 420 && oldtop == 0) bkr_idle = false;
        if (oldleft == 0 && oldtop == 420) wqr_idle = false;
        if (oldleft == 420 && oldtop == 420) wkr_idle = false;
    }
    badmove = false;
}

function bishop() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var newtop = document.getElementById(activepiece).style.pixelTop;
    if (oldleft - newleft != oldtop - newtop && oldleft - newleft != (oldtop - newtop) * -1) {
        takeback("Bishops can only move along diagonals.");
        badmove = true
    }
    var gapleft = (newleft - oldleft) / 60;
    var gaptop = (newtop - oldtop) / 60;
    if (gapleft < 0) gapleft++;
    if (gapleft > 0) gapleft--;
    if (gaptop < 0) gaptop++;
    if (gaptop > 0) gaptop--;
    while (gapleft != 0) {
        if (eval("row" + (oldtop / 60 + gaptop) + "[" + (oldleft / 60 + gapleft) + "]") != "e") {
            badmove = true;
            takeback("There must be no pieces occupying the squares along the diagonal that the Bishop travels.")
        }
        if (gapleft < 0) gapleft++;
        if (gapleft > 0) gapleft--;
        if (gaptop < 0) gaptop++;
        if (gaptop > 0) gaptop--;
    }
    if (badmove == false) makemove();
    badmove = false;
}

function night() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var newtop = document.getElementById(activepiece).style.pixelTop;
    if ((oldtop - newtop == -120 && oldleft - newleft == -60) || (oldtop - newtop == -120 && oldleft - newleft == 60) || (oldtop - newtop == -60 && oldleft - newleft == -120) || (oldtop - newtop == -60 && oldleft - newleft == 120) || (oldtop - newtop == 60 && oldleft - newleft == -120) || (oldtop - newtop == 60 && oldleft - newleft == 120) || (oldtop - newtop == 120 && oldleft - newleft == -60) || (oldtop - newtop == 120 && oldleft - newleft == 60)) makemove();
    else takeback("Nights move in an L shape.");
}

function queen() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var newtop = document.getElementById(activepiece).style.pixelTop;
    if ((oldleft != newleft && oldtop != newtop) && (oldleft - newleft != oldtop - newtop && oldleft - newleft != (oldtop - newtop) * -1)) {
        takeback("The Queen can only move in straight lines: vertically, horizontally or diagonally.");
        badmove = true;
    } else if (oldleft == newleft) {
        gap = (newtop - oldtop) / 60;
        if (gap < 0) gap++;
        if (gap > 0) gap--;
        while (gap != 0) {
            if (eval("row" + (oldtop / 60 + gap) + "[" + oldleft / 60 + "]") != "e") {
                badmove = true;
                takeback("There must be no pieces occupying the squares along the file that the Queen travels.");
            }
            if (gap < 0) gap++;
            if (gap > 0) gap--;
        }
    } else if (oldtop == newtop) {
        gap = (newleft - oldleft) / 60;
        if (gap < 0) gap++;
        if (gap > 0) gap--;
        while (gap != 0) {
            if (eval("row" + oldtop / 60 + "[" + (oldleft / 60 + gap) + "]") != "e") {
                badmove = true;
                takeback("There must be no pieces occupying the squares along the rank that the Queen travels.");
            }
            if (gap < 0) gap++;
            if (gap > 0) gap--;
        }
    }
    var gapleft = (newleft - oldleft) / 60;
    var gaptop = (newtop - oldtop) / 60;
    if (gapleft < 0) gapleft++;
    if (gapleft > 0) gapleft--;
    if (gaptop < 0) gaptop++;
    if (gaptop > 0) gaptop--;
    while (gapleft != 0) {
        if (eval("row" + (oldtop / 60 + gaptop) + "[" + (oldleft / 60 + gapleft) + "]") != "e") {
            badmove = true;
            takeback("There must be no pieces occupying the squares along the diagonal that the Queen travels.")
        }
        if (gapleft < 0) gapleft++;
        if (gapleft > 0) gapleft--;
        if (gaptop < 0) gaptop++;
        if (gaptop > 0) gaptop--;
    }
    if (badmove == false) makemove();
    badmove = false;
}

function king() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var newtop = document.getElementById(activepiece).style.pixelTop;
    if (whitesmove == true && wqr_idle == true && newleft == 120 && newtop == 420 && row7[1] == "e" && row7[2] == "e" && row7[3] == "e" && check() != true && check("7", "4") != true && check("7", "3") != true) castle();
    else if (whitesmove == true && wkr_idle == true && newleft == 360 && newtop == 420 && row7[5] == "e" && row7[6] == "e" && check() != true && check("7", "4") != true && check("7", "5") != true) castle();
    else if (whitesmove == false && bqr_idle == true && newleft == 120 && newtop == 0 && row0[1] == "e" && row0[2] == "e" && row0[3] == "e" && check() != true) castle();
    else if (whitesmove == false && bkr_idle == true && newleft == 360 && newtop == 0 && row0[5] == "e" && row0[6] == "e" && check() != true) castle();
    else if (oldleft - newleft != 60 && oldleft - newleft != -60 && oldleft - newleft != 0) takeback("Illegal King move.");
    else if (oldtop - newtop != 60 && oldtop - newtop != -60 && oldtop - newtop != 0) takeback("Illegal King move.");
    else if (check() == true) takeback("That move places your king in check");
    else {
        if (whitesmove == true) {
            wkr_idle = false;
            wqr_idle = false;
        } else {
            bkr_idle = false;
            bqr_idle = false;
        }
        makemove();
    }
}
var wqr_idle = true;
var wkr_idle = true;
var bqr_idle = true;
var bkr_idle = true;

function castle() {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    if (whitesmove == true && newleft == 120) {
        row7[0] = "e";
        row7[1] = "e";
        row7[2] = "wk";
        row7[3] = "wr";
        row7[4] = "e";
        document.getElementById("a70").style.pixelLeft = 180
    }
    if (whitesmove == true && newleft == 360) {
        row7[4] = "e";
        row7[5] = "wr";
        row7[6] = "wk";
        row7[7] = "e";
        document.getElementById("a77").style.pixelLeft = 300
    }
    if (whitesmove == false && newleft == 120) {
        row0[0] = "e";
        row0[1] = "e";
        row0[2] = "bk";
        row0[3] = "br";
        row0[4] = "e";
        document.getElementById("a00").style.pixelLeft = 180
    }
    if (whitesmove == false && newleft == 360) {
        row0[4] = "e";
        row0[5] = "br";
        row0[6] = "bk";
        row0[7] = "e";
        document.getElementById("a07").style.pixelLeft = 300
    }
    whitesmove = !whitesmove;
}

function promote() {
    var wb = "w";
    if (whitesmove == false) wb = "b";
    if (wb == "w") row1[oldleft / 60] = "e";
    else row6[oldleft / 60] = "e";
    if (check() == true) {
        if (wb == "w") row1[oldleft / 60] = "wp";
        else row6[oldleft / 60] == "bp";
        takeback("That move places your King in check!")
    }
    else {
        if (waitcapture == true) capture();
        hint.innerHTML = "<table style=position:absolute;top:0;left:0;z-index:9999999; width=480 height=480><tr><td align=center><table style=cursor:default;font-family:arial;font-size:12pt;font-weight:bold; border=2 cellpadding=10 cellspacing=0 bgcolor=silver><tr><td align=center><p>Pawn Promotion</p><p><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "\/" + wb + "q.gif width=60 height=60 border=0 onclick=promote2(\'q\')><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "\/" + wb + "r.gif width=60 height=60 border=0 onclick=promote2(\'r\')><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "\/" + wb + "n.gif width=60 height=60 border=0 onclick=promote2(\'n\')><img style=cursor:pointer;cursor:hand; src=" + piecestyle + "\/" + wb + "b.gif width=60 height=60 border=0 onclick=promote2(\'b\')></p></td></tr></table></td></tr></table>";
    }
}

function promote2(towhat) {
    var newleft = document.getElementById(activepiece).style.pixelLeft;
    var wb = "w";
    if (whitesmove == false) wb = "b";
    document.getElementById(activepiece).src = piecestyle + "\/" + wb + towhat + ".gif";
    document.getElementById(activepiece).name = wb + towhat;
    if (wb == "w") row0[newleft / 60] = "w" + towhat;
    else row7[newleft / 60] = "b" + towhat;
    hint.innerHTML = "";
    whitesmove = !whitesmove;
    if (check() == true) hint.innerHTML = "Check!";
}

function enpassent() {
    var newleft = document.getElementById(activepiece).style.pixelLeft / 60;
    if (whitesmove == true) {
        row3[oldleft / 60] = "e";
        row3[newleft] = "e";
        if (check() == true) {
            row3[oldleft / 60] = "wp";
            row3[newleft] = "bp";
            takeback("That en passent move places your King in check!")
        } else {
            row2[newleft] = "wp";
            document.getElementById("a1" + (newleft)).style.visibility = "hidden";
            whitesmove = !whitesmove;
            hint.innerHTML = "En passent!";
        }
    } else {
        row4[oldleft / 60] = "e";
        row4[newleft] = "e";
        if (check() == true) {
            row4[oldleft / 60] = "bp";
            row4[newleft] = "wp";
            takeback("That en passent move places your King in check!")
        } else {
            row5[newleft] = "bp";
            document.getElementById("a6" + (newleft)).style.visibility = "hidden";
            whitesmove = !whitesmove;
            hint.innerHTML = "En passent!";
        }
    }
}

function check(specialtop, specialleft) {
    var enemy = "b";
    var kingleft = document.getElementById('a74').style.pixelLeft / 60;
    var kingtop = document.getElementById('a74').style.pixelTop / 60;
    if (whitesmove == false) {
        enemy = "w";
        var kingleft = document.getElementById('a04').style.pixelLeft / 60;
        var kingtop = document.getElementById('a04').style.pixelTop / 60;
    }
    if (specialleft != null) {
        kingleft = specialleft;
        kingtop = specialtop;
    }
    if (kingtop > 1)
        if (eval("row" + (kingtop - 2) + "[" + (kingleft - 1) + "]") == enemy + "n") return true;
    if (kingtop > 1)
        if (eval("row" + (kingtop - 2) + "[" + (kingleft + 1) + "]") == enemy + "n") return true;
    if (kingtop > 0)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft - 2) + "]") == enemy + "n") return true;
    if (kingtop > 0)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft + 2) + "]") == enemy + "n") return true;
    if (kingtop < 7)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft - 2) + "]") == enemy + "n") return true;
    if (kingtop < 7)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft + 2) + "]") == enemy + "n") return true;
    if (kingtop < 6)
        if (eval("row" + (kingtop + 2) + "[" + (kingleft - 1) + "]") == enemy + "n") return true;
    if (kingtop < 6)
        if (eval("row" + (kingtop + 2) + "[" + (kingleft + 1) + "]") == enemy + "n") return true;
    if (kingtop > 1 && whitesmove == true)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft - 1) + "]") == "bp") return true;
    if (kingtop > 1 && whitesmove == true)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft + 1) + "]") == "bp") return true;
    if (kingtop < 6 && whitesmove == false)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft - 1) + "]") == "wp") return true;
    if (kingtop < 6 && whitesmove == false)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft + 1) + "]") == "wp") return true;
    if (kingtop > 0)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft - 1) + "]") == enemy + "k") return true;
    if (kingtop > 0)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft) + "]") == enemy + "k") return true;
    if (kingtop > 0)
        if (eval("row" + (kingtop - 1) + "[" + (kingleft + 1) + "]") == enemy + "k") return true;
    if (eval("row" + (kingtop) + "[" + (kingleft - 1) + "]") == enemy + "k") return true;
    if (eval("row" + (kingtop) + "[" + (kingleft) + "]") == enemy + "k") return true;
    if (eval("row" + (kingtop) + "[" + (kingleft + 1) + "]") == enemy + "k") return true;
    if (kingtop < 7)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft - 1) + "]") == enemy + "k") return true;
    if (kingtop < 7)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft) + "]") == enemy + "k") return true;
    if (kingtop < 7)
        if (eval("row" + (kingtop + 1) + "[" + (kingleft + 1) + "]") == enemy + "k") return true;
    var gappiece;
    var gap;
    gap = 0;
    while (kingtop - gap > 0) {
        gap++;
        gappiece = eval("row" + (kingtop - gap) + "[" + (kingleft) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "r") return true;
        if (gappiece != "e") break;
    }
    gap = 0;
    while (kingtop + gap < 7) {
        gap++;
        gappiece = eval("row" + (kingtop + gap) + "[" + (kingleft) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "r") return true;
        if (gappiece != "e") break;
    }
    gap = 0;
    while (kingleft - gap > 0) {
        gap++;
        gappiece = eval("row" + kingtop + "[" + (kingleft - gap) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "r") return true;
        if (gappiece != "e") break;
    }
    gap = 0;
    while (kingleft + gap < 7) {
        gap++;
        gappiece = eval("row" + kingtop + "[" + (kingleft + gap) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "r") return true;
        if (gappiece != "e") break;
    }
    var gaptop = 0;
    var gapleft = 0;
    while (kingtop - gaptop > 0 && kingleft - gapleft > 0) {
        gaptop++;
        gapleft++;
        gappiece = eval("row" + (kingtop - gaptop) + "[" + (kingleft - gapleft) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "b") return true;
        if (gappiece != "e") break;
    }
    gaptop = 0;
    gapleft = 0;
    while (kingtop - gaptop > 0 && kingleft + gapleft < 7) {
        gaptop++;
        gapleft++;
        gappiece = eval("row" + (kingtop - gaptop) + "[" + (kingleft + gapleft) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "b") return true;
        if (gappiece != "e") break;
    }
    gaptop = 0;
    gapleft = 0;
    while (kingtop + gaptop < 7 && kingleft - gapleft > 0) {
        gaptop++;
        gapleft++;
        gappiece = eval("row" + (kingtop + gaptop) + "[" + (kingleft - gapleft) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "b") return true;
        if (gappiece != "e") break;
    }
    gaptop = 0;
    gapleft = 0;
    while (kingtop + gaptop < 7 && kingleft + gapleft < 7) {
        gaptop++;
        gapleft++;
        gappiece = eval("row" + (kingtop + gaptop) + "[" + (kingleft + gapleft) + "]");
        if (gappiece == enemy + "q" || gappiece == enemy + "b") return true;
        if (gappiece != "e") break;
    }
}

function capture() {
    for (var c = 0; c < 8; c++) {
        for (var cc = 0; cc < 8; cc++) {
            if (document.getElementById("a" + c + "" + cc) != null && activepiece != "a" + c + "" + cc)
                if (document.getElementById("a" + c + "" + cc).style.pixelLeft == document.getElementById(activepiece).style.pixelLeft && document.getElementById("a" + c + "" + cc).style.pixelTop == document.getElementById(activepiece).style.pixelTop) document.getElementById("a" + c + "" + cc).style.visibility = "hidden";
        }
    }
}
var tempto;

function makemove() {
    tempto = eval("row" + (document.getElementById(activepiece).style.pixelTop / 60) + "[" + (document.getElementById(activepiece).style.pixelLeft / 60) + "]");
    var temprow = eval('row' + (oldtop / 60));
    temprow[oldleft / 60] = "e";
    var temprow = eval('row' + (document.getElementById(activepiece).style.pixelTop / 60));
    temprow[document.getElementById(activepiece).style.pixelLeft / 60] = document.getElementById(activepiece).name;
    if (check() == true) undomove();
    else {
        if (waitcapture == true) capture();
        whitesmove = !whitesmove;
        if (check() == true) hint.innerHTML = "Check!";
    }
}

function undomove() {
    var temprow = eval('row' + (document.getElementById(activepiece).style.pixelTop / 60));
    temprow[document.getElementById(activepiece).style.pixelLeft / 60] = tempto;
    var temprow = eval('row' + (oldtop / 60));
    temprow[oldleft / 60] = document.getElementById(activepiece).name;
    takeback("That move places your King in check!");
}
var row0 = new Array("br", "bn", "bb", "bq", "bk", "bb", "bn", "br");
var row1 = new Array("bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp");
var row2 = new Array("e", "e", "e", "e", "e", "e", "e", "e");
var row3 = new Array("e", "e", "e", "e", "e", "e", "e", "e");
var row4 = new Array("e", "e", "e", "e", "e", "e", "e", "e");
var row5 = new Array("e", "e", "e", "e", "e", "e", "e", "e");
var row6 = new Array("wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp");
var row7 = new Array("wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr");
var piecestyle = "default";

function piecechange() {
    var piecestyle = pieceslist.options[pieceslist.options.selectedIndex].value;
    hhh = new Array("0", "1", "6", "7");
    for (var h = 0; h < 4; h++) {
        for (var hh = 0; hh < 8; hh++) {
            document.getElementById("a" + hhh[h] + "" + hh).src = piecestyle + "/" + document.getElementById("a" + hhh[h] + "" + hh).name + ".gif";
        }
    }
}

function backchange() {
    backarea.background = backlist.options[backlist.options.selectedIndex].value;
}
/*for (var i = 0; i < 8; i++) {
    for (var ii = 0; ii < 8; ii++) {
        if (eval('row' + i + '[ii]') != "e") document.write("<img id=a" + i + "" + ii + " name=" + eval('row' + i + '[ii]') + " class=dragme style=position:absolute;left:" + ii * 60 + ";top:" + i * 60 + ";cursor:pointer;cursor:hand border=0 width=60 height=60 onmousedown='grab(this.id);' src=\'" + piecestyle + "/" + eval('row' + i + '[ii]') + ".gif\'>");
    }
}*/

function showlayout() {
    alert(row0 + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + row6 + "\n" + row7)
}