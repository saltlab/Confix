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
function confirm() {
}
var stickToMouse = confixWrapper("initvar", "var stickToMouse = -1", [""], [], "", -1);
var wasX, wasY, wasSklW, wasSklH, wasSklT, wasSklL;
var theRatio = confixWrapper("initvar", "var theRatio = 1", [""], [], "", 1);
var dBord = confixWrapper("initvar", "var dBord = 0", [""], [], "", 0);
var shiftDown = confixWrapper("initvar", "var shiftDown = false", [""], [], "", false);
function SaveRatio() {
  theRatio = confixWrapper("infix", "theRatio = confixWrapper(\"functionCall\", \"parseFloat(dg('skeleton').style.width)\", [\"dg(skeleton).style.width\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"SaveRatio\", dg('skeleton')).style.width], \"SaveRatio\", parseFloat(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"SaveRatio\", dg('skeleton')).style.width)) / parseFloat(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"SaveRatio\", dg('skeleton')).style.height)", [""], [], "SaveRatio", confixWrapper("functionCall", "parseFloat(dg('skeleton').style.width)", ["dg(skeleton).style.width"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "SaveRatio", dg('skeleton')).style.width], "SaveRatio", parseFloat(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "SaveRatio", dg('skeleton')).style.width)) / parseFloat(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "SaveRatio", dg('skeleton')).style.height));
}
function MouseDown(x, eve) {
  stickToMouse = confixWrapper("infix", "stickToMouse = x", [""], [], "MouseDown", x);
  wasX = confixWrapper("infix", "wasX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"MouseDown\", getMyXY(eve, 0))", [""], [], "MouseDown", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "MouseDown", getMyXY(eve, 0)));
  wasY = confixWrapper("infix", "wasY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"MouseDown\", getMyXY(eve, 1))", [""], [], "MouseDown", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "MouseDown", getMyXY(eve, 1)));
  wasSklW = confixWrapper("infix", "wasSklW = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.width)\", [\"dg(skeleton).style.width\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.width], \"MouseDown\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.width))", [""], [], "MouseDown", confixWrapper("functionCall", "parseInt(dg('skeleton').style.width)", ["dg(skeleton).style.width"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.width], "MouseDown", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.width)));
  wasSklH = confixWrapper("infix", "wasSklH = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.height)\", [\"dg(skeleton).style.height\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.height], \"MouseDown\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.height))", [""], [], "MouseDown", confixWrapper("functionCall", "parseInt(dg('skeleton').style.height)", ["dg(skeleton).style.height"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.height], "MouseDown", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.height)));
  wasSklT = confixWrapper("infix", "wasSklT = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.top)\", [\"dg(skeleton).style.top\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.top], \"MouseDown\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.top))", [""], [], "MouseDown", confixWrapper("functionCall", "parseInt(dg('skeleton').style.top)", ["dg(skeleton).style.top"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.top], "MouseDown", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.top)));
  wasSklL = confixWrapper("infix", "wasSklL = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.left)\", [\"dg(skeleton).style.left\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.left], \"MouseDown\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseDown\", dg('skeleton')).style.left))", [""], [], "MouseDown", confixWrapper("functionCall", "parseInt(dg('skeleton').style.left)", ["dg(skeleton).style.left"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.left], "MouseDown", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseDown", dg('skeleton')).style.left)));
}
function MouseDownTheSkeleton(eve) {
  if (confixWrapper("condition", "stickToMouse == -1", [""], [], "MouseDownTheSkeleton", stickToMouse == -1)) 
  confixWrapper("functionCall", "MouseDown(5, eve)", ["5", "eve"], [5, eve], "MouseDownTheSkeleton", MouseDown(5, eve));
}
function ReleaseMouse() {
  stickToMouse = confixWrapper("infix", "stickToMouse = -1", [""], [], "ReleaseMouse", -1);
}
function ExpandSkl() {
  var ImgW = confixWrapper("initvar", "var ImgW = confixWrapper(\"functionCall\", \"parseInt(dg('thePhoto').style.width)\", [\"dg(thePhoto).style.width\"], [confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"ExpandSkl\", dg('thePhoto')).style.width], \"ExpandSkl\", parseInt(confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"ExpandSkl\", dg('thePhoto')).style.width))", [""], [], "ExpandSkl", confixWrapper("functionCall", "parseInt(dg('thePhoto').style.width)", ["dg(thePhoto).style.width"], [confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "ExpandSkl", dg('thePhoto')).style.width], "ExpandSkl", parseInt(confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "ExpandSkl", dg('thePhoto')).style.width)));
  var ImgH = confixWrapper("initvar", "var ImgH = confixWrapper(\"functionCall\", \"parseInt(dg('thePhoto').style.height)\", [\"dg(thePhoto).style.height\"], [confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"ExpandSkl\", dg('thePhoto')).style.height], \"ExpandSkl\", parseInt(confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"ExpandSkl\", dg('thePhoto')).style.height))", [""], [], "ExpandSkl", confixWrapper("functionCall", "parseInt(dg('thePhoto').style.height)", ["dg(thePhoto).style.height"], [confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "ExpandSkl", dg('thePhoto')).style.height], "ExpandSkl", parseInt(confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "ExpandSkl", dg('thePhoto')).style.height)));
  var ImgWH = confixWrapper("initvar", "var ImgWH = confixWrapper(\"functionCall\", \"Math.min(ImgW, ImgH)\", [\"ImgW\", \"ImgH\"], [ImgW, ImgH], \"ExpandSkl\", Math.min(ImgW, ImgH))", [""], [], "ExpandSkl", confixWrapper("functionCall", "Math.min(ImgW, ImgH)", ["ImgW", "ImgH"], [ImgW, ImgH], "ExpandSkl", Math.min(ImgW, ImgH)));
  confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.top = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.top = confixWrapper(\"functionCall\", \"Math.round((ImgH - ImgWH) / 2)\", [\"(ImgH - ImgWH) / 2\"], [(ImgH - ImgWH) / 2], \"ExpandSkl\", Math.round((ImgH - ImgWH) / 2)) + 'px'", [""], [], "ExpandSkl", confixWrapper("functionCall", "Math.round((ImgH - ImgWH) / 2)", ["(ImgH - ImgWH) / 2"], [(ImgH - ImgWH) / 2], "ExpandSkl", Math.round((ImgH - ImgWH) / 2)) + 'px');
  confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.left = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.left = confixWrapper(\"functionCall\", \"Math.round((ImgW - ImgWH) / 2)\", [\"(ImgW - ImgWH) / 2\"], [(ImgW - ImgWH) / 2], \"ExpandSkl\", Math.round((ImgW - ImgWH) / 2)) + 'px'", [""], [], "ExpandSkl", confixWrapper("functionCall", "Math.round((ImgW - ImgWH) / 2)", ["(ImgW - ImgWH) / 2"], [(ImgW - ImgWH) / 2], "ExpandSkl", Math.round((ImgW - ImgWH) / 2)) + 'px');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.height)\", [\"dg(skeleton).style.height\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.height], \"ExpandSkl\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.height)) != ImgWH", [""], [], "ExpandSkl", confixWrapper("functionCall", "parseInt(dg('skeleton').style.height)", ["dg(skeleton).style.height"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.height], "ExpandSkl", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.height)) != ImgWH)) 
  {
    confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.height = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.height = ImgWH + 'px'", [""], [], "ExpandSkl", ImgWH + 'px');
    confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.width = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.width = ImgWH + 'px'", [""], [], "ExpandSkl", ImgWH + 'px');
  } else {
    confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.height = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.height = confixWrapper(\"functionCall\", \"dg('thumbPrevCont')\", [\"thumbPrevCont\"], ['thumbPrevCont'], \"ExpandSkl\", dg('thumbPrevCont')).style.height", [""], [], "ExpandSkl", confixWrapper("functionCall", "dg('thumbPrevCont')", ["thumbPrevCont"], ['thumbPrevCont'], "ExpandSkl", dg('thumbPrevCont')).style.height);
    confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "ExpandSkl", dg('skeleton')).style.width = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"ExpandSkl\", dg('skeleton')).style.width = confixWrapper(\"functionCall\", \"dg('thumbPrevCont')\", [\"thumbPrevCont\"], ['thumbPrevCont'], \"ExpandSkl\", dg('thumbPrevCont')).style.width", [""], [], "ExpandSkl", confixWrapper("functionCall", "dg('thumbPrevCont')", ["thumbPrevCont"], ['thumbPrevCont'], "ExpandSkl", dg('thumbPrevCont')).style.width);
  }
  confixWrapper("functionCall", "UpdateThumbPrev()", [], [], "ExpandSkl", UpdateThumbPrev());
}
function MouseMoveInside(eve) {
  if (confixWrapper("condition", "stickToMouse == -1", [""], [], "MouseMoveInside", stickToMouse == -1)) 
  return;
  var ImgW = confixWrapper("initvar", "var ImgW = confixWrapper(\"functionCall\", \"parseInt(dg('thePhoto').style.width)\", [\"dg(thePhoto).style.width\"], [confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"MouseMoveInside\", dg('thePhoto')).style.width], \"MouseMoveInside\", parseInt(confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"MouseMoveInside\", dg('thePhoto')).style.width))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "parseInt(dg('thePhoto').style.width)", ["dg(thePhoto).style.width"], [confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "MouseMoveInside", dg('thePhoto')).style.width], "MouseMoveInside", parseInt(confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "MouseMoveInside", dg('thePhoto')).style.width)));
  var ImgH = confixWrapper("initvar", "var ImgH = confixWrapper(\"functionCall\", \"parseInt(dg('thePhoto').style.height)\", [\"dg(thePhoto).style.height\"], [confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"MouseMoveInside\", dg('thePhoto')).style.height], \"MouseMoveInside\", parseInt(confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"MouseMoveInside\", dg('thePhoto')).style.height))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "parseInt(dg('thePhoto').style.height)", ["dg(thePhoto).style.height"], [confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "MouseMoveInside", dg('thePhoto')).style.height], "MouseMoveInside", parseInt(confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "MouseMoveInside", dg('thePhoto')).style.height)));
  var SklW = confixWrapper("initvar", "var SklW = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.width)\", [\"dg(skeleton).style.width\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.width], \"MouseMoveInside\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.width))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "parseInt(dg('skeleton').style.width)", ["dg(skeleton).style.width"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.width], "MouseMoveInside", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.width)));
  var SklH = confixWrapper("initvar", "var SklH = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.height)\", [\"dg(skeleton).style.height\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.height], \"MouseMoveInside\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.height))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "parseInt(dg('skeleton').style.height)", ["dg(skeleton).style.height"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.height], "MouseMoveInside", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.height)));
  var SklT = confixWrapper("initvar", "var SklT = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.top)\", [\"dg(skeleton).style.top\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.top], \"MouseMoveInside\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.top))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "parseInt(dg('skeleton').style.top)", ["dg(skeleton).style.top"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.top], "MouseMoveInside", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.top)));
  var SklL = confixWrapper("initvar", "var SklL = confixWrapper(\"functionCall\", \"parseInt(dg('skeleton').style.left)\", [\"dg(skeleton).style.left\"], [confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.left], \"MouseMoveInside\", parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.left))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "parseInt(dg('skeleton').style.left)", ["dg(skeleton).style.left"], [confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.left], "MouseMoveInside", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.left)));
  var dX = confixWrapper("initvar", "var dX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"MouseMoveInside\", getMyXY(eve, 0)) - wasX", [""], [], "MouseMoveInside", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "MouseMoveInside", getMyXY(eve, 0)) - wasX);
  var dY = confixWrapper("initvar", "var dY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"MouseMoveInside\", getMyXY(eve, 1)) - wasY", [""], [], "MouseMoveInside", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "MouseMoveInside", getMyXY(eve, 1)) - wasY);
  var thereY = confixWrapper("initvar", "var thereY = confixWrapper(\"functionCall\", \"Math.max(0, Math.min(ImgH - SklH - dBord, wasSklT + dY))\", [\"0\", \"Math.min(ImgH - SklH - dBord, wasSklT + dY)\"], [0, confixWrapper(\"functionCall\", \"Math.min(ImgH - SklH - dBord, wasSklT + dY)\", [\"ImgH - SklH - dBord\", \"wasSklT + dY\"], [ImgH - SklH - dBord, wasSklT + dY], \"MouseMoveInside\", Math.min(ImgH - SklH - dBord, wasSklT + dY))], \"MouseMoveInside\", Math.max(0, confixWrapper(\"functionCall\", \"Math.min(ImgH - SklH - dBord, wasSklT + dY)\", [\"ImgH - SklH - dBord\", \"wasSklT + dY\"], [ImgH - SklH - dBord, wasSklT + dY], \"MouseMoveInside\", Math.min(ImgH - SklH - dBord, wasSklT + dY))))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.max(0, Math.min(ImgH - SklH - dBord, wasSklT + dY))", ["0", "Math.min(ImgH - SklH - dBord, wasSklT + dY)"], [0, confixWrapper("functionCall", "Math.min(ImgH - SklH - dBord, wasSklT + dY)", ["ImgH - SklH - dBord", "wasSklT + dY"], [ImgH - SklH - dBord, wasSklT + dY], "MouseMoveInside", Math.min(ImgH - SklH - dBord, wasSklT + dY))], "MouseMoveInside", Math.max(0, confixWrapper("functionCall", "Math.min(ImgH - SklH - dBord, wasSklT + dY)", ["ImgH - SklH - dBord", "wasSklT + dY"], [ImgH - SklH - dBord, wasSklT + dY], "MouseMoveInside", Math.min(ImgH - SklH - dBord, wasSklT + dY)))));
  var thereX = confixWrapper("initvar", "var thereX = confixWrapper(\"functionCall\", \"Math.max(0, Math.min(ImgW - SklW - dBord, wasSklL + dX))\", [\"0\", \"Math.min(ImgW - SklW - dBord, wasSklL + dX)\"], [0, confixWrapper(\"functionCall\", \"Math.min(ImgW - SklW - dBord, wasSklL + dX)\", [\"ImgW - SklW - dBord\", \"wasSklL + dX\"], [ImgW - SklW - dBord, wasSklL + dX], \"MouseMoveInside\", Math.min(ImgW - SklW - dBord, wasSklL + dX))], \"MouseMoveInside\", Math.max(0, confixWrapper(\"functionCall\", \"Math.min(ImgW - SklW - dBord, wasSklL + dX)\", [\"ImgW - SklW - dBord\", \"wasSklL + dX\"], [ImgW - SklW - dBord, wasSklL + dX], \"MouseMoveInside\", Math.min(ImgW - SklW - dBord, wasSklL + dX))))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.max(0, Math.min(ImgW - SklW - dBord, wasSklL + dX))", ["0", "Math.min(ImgW - SklW - dBord, wasSklL + dX)"], [0, confixWrapper("functionCall", "Math.min(ImgW - SklW - dBord, wasSklL + dX)", ["ImgW - SklW - dBord", "wasSklL + dX"], [ImgW - SklW - dBord, wasSklL + dX], "MouseMoveInside", Math.min(ImgW - SklW - dBord, wasSklL + dX))], "MouseMoveInside", Math.max(0, confixWrapper("functionCall", "Math.min(ImgW - SklW - dBord, wasSklL + dX)", ["ImgW - SklW - dBord", "wasSklL + dX"], [ImgW - SklW - dBord, wasSklL + dX], "MouseMoveInside", Math.min(ImgW - SklW - dBord, wasSklL + dX)))));
  if (confixWrapper("condition", "stickToMouse == 5", [""], [], "MouseMoveInside", stickToMouse == 5)) 
  {
    confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.top = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.top = thereY + 'px'", [""], [], "MouseMoveInside", thereY + 'px');
    confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.left = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.left = thereX + 'px'", [""], [], "MouseMoveInside", thereX + 'px');
  } else {
    var SignH = confixWrapper("initvar", "var SignH = (stickToMouse >= 2) ? -1 : 1", [""], [], "MouseMoveInside", (stickToMouse >= 2) ? -1 : 1);
    var SignW = confixWrapper("initvar", "var SignW = (stickToMouse % 2) ? -1 : 1", [""], [], "MouseMoveInside", (stickToMouse % 2) ? -1 : 1);
    var sd = confixWrapper("initvar", "var sd = (shiftDown) ? 2 : 1", [""], [], "MouseMoveInside", (shiftDown) ? 2 : 1);
    var ValH = confixWrapper("initvar", "var ValH = confixWrapper(\"functionCall\", \"Math.min(ImgH - dBord, wasSklH + sd * SignH * (-dY))\", [\"ImgH - dBord\", \"wasSklH + sd * SignH * (-dY)\"], [ImgH - dBord, wasSklH + sd * SignH * (-dY)], \"MouseMoveInside\", Math.min(ImgH - dBord, wasSklH + sd * SignH * (-dY)))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.min(ImgH - dBord, wasSklH + sd * SignH * (-dY))", ["ImgH - dBord", "wasSklH + sd * SignH * (-dY)"], [ImgH - dBord, wasSklH + sd * SignH * (-dY)], "MouseMoveInside", Math.min(ImgH - dBord, wasSklH + sd * SignH * (-dY))));
    var ValW = confixWrapper("initvar", "var ValW = confixWrapper(\"functionCall\", \"Math.min(ImgW - dBord, wasSklW + sd * SignW * (-dX))\", [\"ImgW - dBord\", \"wasSklW + sd * SignW * (-dX)\"], [ImgW - dBord, wasSklW + sd * SignW * (-dX)], \"MouseMoveInside\", Math.min(ImgW - dBord, wasSklW + sd * SignW * (-dX)))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.min(ImgW - dBord, wasSklW + sd * SignW * (-dX))", ["ImgW - dBord", "wasSklW + sd * SignW * (-dX)"], [ImgW - dBord, wasSklW + sd * SignW * (-dX)], "MouseMoveInside", Math.min(ImgW - dBord, wasSklW + sd * SignW * (-dX))));
    ValH = confixWrapper("infix", "ValH = confixWrapper(\"functionCall\", \"Math.min(ImgH - dBord, Math.min(ValH, ValW))\", [\"ImgH - dBord\", \"Math.min(ValH, ValW)\"], [ImgH - dBord, confixWrapper(\"functionCall\", \"Math.min(ValH, ValW)\", [\"ValH\", \"ValW\"], [ValH, ValW], \"MouseMoveInside\", Math.min(ValH, ValW))], \"MouseMoveInside\", Math.min(ImgH - dBord, confixWrapper(\"functionCall\", \"Math.min(ValH, ValW)\", [\"ValH\", \"ValW\"], [ValH, ValW], \"MouseMoveInside\", Math.min(ValH, ValW))))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.min(ImgH - dBord, Math.min(ValH, ValW))", ["ImgH - dBord", "Math.min(ValH, ValW)"], [ImgH - dBord, confixWrapper("functionCall", "Math.min(ValH, ValW)", ["ValH", "ValW"], [ValH, ValW], "MouseMoveInside", Math.min(ValH, ValW))], "MouseMoveInside", Math.min(ImgH - dBord, confixWrapper("functionCall", "Math.min(ValH, ValW)", ["ValH", "ValW"], [ValH, ValW], "MouseMoveInside", Math.min(ValH, ValW)))));
    ValW = confixWrapper("infix", "ValW = confixWrapper(\"functionCall\", \"Math.min(ImgW - dBord, ValH * theRatio)\", [\"ImgW - dBord\", \"ValH * theRatio\"], [ImgW - dBord, ValH * theRatio], \"MouseMoveInside\", Math.min(ImgW - dBord, ValH * theRatio))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.min(ImgW - dBord, ValH * theRatio)", ["ImgW - dBord", "ValH * theRatio"], [ImgW - dBord, ValH * theRatio], "MouseMoveInside", Math.min(ImgW - dBord, ValH * theRatio)));
    if (confixWrapper("condition", "shiftDown", [""], [], "MouseMoveInside", shiftDown)) 
    SignH = confixWrapper("infix", "SignH = SignW = 1", [""], [], "MouseMoveInside", SignW = confixWrapper("infix", "SignW = 1", [""], [], "MouseMoveInside", 1));
    thereY = confixWrapper("infix", "thereY = confixWrapper(\"functionCall\", \"Math.max(0, Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT))\", [\"0\", \"Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT)\"], [0, confixWrapper(\"functionCall\", \"Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT)\", [\"ImgH - SklH - dBord\", \"Math.round((wasSklH - ValH) * SignH / sd) + wasSklT\"], [ImgH - SklH - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklH - ValH) * SignH / sd)\", [\"(wasSklH - ValH) * SignH / sd\"], [(wasSklH - ValH) * SignH / sd], \"MouseMoveInside\", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT], \"MouseMoveInside\", Math.min(ImgH - SklH - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklH - ValH) * SignH / sd)\", [\"(wasSklH - ValH) * SignH / sd\"], [(wasSklH - ValH) * SignH / sd], \"MouseMoveInside\", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT))], \"MouseMoveInside\", Math.max(0, confixWrapper(\"functionCall\", \"Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT)\", [\"ImgH - SklH - dBord\", \"Math.round((wasSklH - ValH) * SignH / sd) + wasSklT\"], [ImgH - SklH - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklH - ValH) * SignH / sd)\", [\"(wasSklH - ValH) * SignH / sd\"], [(wasSklH - ValH) * SignH / sd], \"MouseMoveInside\", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT], \"MouseMoveInside\", Math.min(ImgH - SklH - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklH - ValH) * SignH / sd)\", [\"(wasSklH - ValH) * SignH / sd\"], [(wasSklH - ValH) * SignH / sd], \"MouseMoveInside\", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT))))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.max(0, Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT))", ["0", "Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT)"], [0, confixWrapper("functionCall", "Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT)", ["ImgH - SklH - dBord", "Math.round((wasSklH - ValH) * SignH / sd) + wasSklT"], [ImgH - SklH - dBord, confixWrapper("functionCall", "Math.round((wasSklH - ValH) * SignH / sd)", ["(wasSklH - ValH) * SignH / sd"], [(wasSklH - ValH) * SignH / sd], "MouseMoveInside", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT], "MouseMoveInside", Math.min(ImgH - SklH - dBord, confixWrapper("functionCall", "Math.round((wasSklH - ValH) * SignH / sd)", ["(wasSklH - ValH) * SignH / sd"], [(wasSklH - ValH) * SignH / sd], "MouseMoveInside", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT))], "MouseMoveInside", Math.max(0, confixWrapper("functionCall", "Math.min(ImgH - SklH - dBord, Math.round((wasSklH - ValH) * SignH / sd) + wasSklT)", ["ImgH - SklH - dBord", "Math.round((wasSklH - ValH) * SignH / sd) + wasSklT"], [ImgH - SklH - dBord, confixWrapper("functionCall", "Math.round((wasSklH - ValH) * SignH / sd)", ["(wasSklH - ValH) * SignH / sd"], [(wasSklH - ValH) * SignH / sd], "MouseMoveInside", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT], "MouseMoveInside", Math.min(ImgH - SklH - dBord, confixWrapper("functionCall", "Math.round((wasSklH - ValH) * SignH / sd)", ["(wasSklH - ValH) * SignH / sd"], [(wasSklH - ValH) * SignH / sd], "MouseMoveInside", Math.round((wasSklH - ValH) * SignH / sd)) + wasSklT)))));
    thereX = confixWrapper("infix", "thereX = confixWrapper(\"functionCall\", \"Math.max(0, Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL))\", [\"0\", \"Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL)\"], [0, confixWrapper(\"functionCall\", \"Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL)\", [\"ImgW - SklW - dBord\", \"Math.round((wasSklW - ValW) * SignW / sd) + wasSklL\"], [ImgW - SklW - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklW - ValW) * SignW / sd)\", [\"(wasSklW - ValW) * SignW / sd\"], [(wasSklW - ValW) * SignW / sd], \"MouseMoveInside\", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL], \"MouseMoveInside\", Math.min(ImgW - SklW - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklW - ValW) * SignW / sd)\", [\"(wasSklW - ValW) * SignW / sd\"], [(wasSklW - ValW) * SignW / sd], \"MouseMoveInside\", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL))], \"MouseMoveInside\", Math.max(0, confixWrapper(\"functionCall\", \"Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL)\", [\"ImgW - SklW - dBord\", \"Math.round((wasSklW - ValW) * SignW / sd) + wasSklL\"], [ImgW - SklW - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklW - ValW) * SignW / sd)\", [\"(wasSklW - ValW) * SignW / sd\"], [(wasSklW - ValW) * SignW / sd], \"MouseMoveInside\", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL], \"MouseMoveInside\", Math.min(ImgW - SklW - dBord, confixWrapper(\"functionCall\", \"Math.round((wasSklW - ValW) * SignW / sd)\", [\"(wasSklW - ValW) * SignW / sd\"], [(wasSklW - ValW) * SignW / sd], \"MouseMoveInside\", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL))))", [""], [], "MouseMoveInside", confixWrapper("functionCall", "Math.max(0, Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL))", ["0", "Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL)"], [0, confixWrapper("functionCall", "Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL)", ["ImgW - SklW - dBord", "Math.round((wasSklW - ValW) * SignW / sd) + wasSklL"], [ImgW - SklW - dBord, confixWrapper("functionCall", "Math.round((wasSklW - ValW) * SignW / sd)", ["(wasSklW - ValW) * SignW / sd"], [(wasSklW - ValW) * SignW / sd], "MouseMoveInside", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL], "MouseMoveInside", Math.min(ImgW - SklW - dBord, confixWrapper("functionCall", "Math.round((wasSklW - ValW) * SignW / sd)", ["(wasSklW - ValW) * SignW / sd"], [(wasSklW - ValW) * SignW / sd], "MouseMoveInside", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL))], "MouseMoveInside", Math.max(0, confixWrapper("functionCall", "Math.min(ImgW - SklW - dBord, Math.round((wasSklW - ValW) * SignW / sd) + wasSklL)", ["ImgW - SklW - dBord", "Math.round((wasSklW - ValW) * SignW / sd) + wasSklL"], [ImgW - SklW - dBord, confixWrapper("functionCall", "Math.round((wasSklW - ValW) * SignW / sd)", ["(wasSklW - ValW) * SignW / sd"], [(wasSklW - ValW) * SignW / sd], "MouseMoveInside", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL], "MouseMoveInside", Math.min(ImgW - SklW - dBord, confixWrapper("functionCall", "Math.round((wasSklW - ValW) * SignW / sd)", ["(wasSklW - ValW) * SignW / sd"], [(wasSklW - ValW) * SignW / sd], "MouseMoveInside", Math.round((wasSklW - ValW) * SignW / sd)) + wasSklL)))));
    if (confixWrapper("condition", "ValH > 0", [""], [], "MouseMoveInside", ValH > 0)) 
    {
      if (confixWrapper("condition", "SignH == 1", [""], [], "MouseMoveInside", SignH == 1)) 
      confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.top = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.top = thereY + 'px'", [""], [], "MouseMoveInside", thereY + 'px');
      confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.height = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.height = ValH + 'px'", [""], [], "MouseMoveInside", ValH + 'px');
    }
    if (confixWrapper("condition", "ValW > 0", [""], [], "MouseMoveInside", ValW > 0)) 
    {
      if (confixWrapper("condition", "SignW == 1", [""], [], "MouseMoveInside", SignW == 1)) 
      confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.left = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.left = thereX + 'px'", [""], [], "MouseMoveInside", thereX + 'px');
      confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "MouseMoveInside", dg('skeleton')).style.width = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"MouseMoveInside\", dg('skeleton')).style.width = ValW + 'px'", [""], [], "MouseMoveInside", ValW + 'px');
    }
  }
  confixWrapper("functionCall", "UpdateThumbPrev()", [], [], "MouseMoveInside", UpdateThumbPrev());
}
function UpdateThumbPrev() {
  confixWrapper("functionCall", "dg('sklW')", ["sklW"], ['sklW'], "UpdateThumbPrev", dg('sklW')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('sklW')\", [\"sklW\"], ['sklW'], \"UpdateThumbPrev\", dg('sklW')).value = parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"UpdateThumbPrev\", dg('skeleton')).style.width)", [""], [], "UpdateThumbPrev", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "UpdateThumbPrev", dg('skeleton')).style.width));
  confixWrapper("functionCall", "dg('sklH')", ["sklH"], ['sklH'], "UpdateThumbPrev", dg('sklH')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('sklH')\", [\"sklH\"], ['sklH'], \"UpdateThumbPrev\", dg('sklH')).value = parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"UpdateThumbPrev\", dg('skeleton')).style.height)", [""], [], "UpdateThumbPrev", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "UpdateThumbPrev", dg('skeleton')).style.height));
  confixWrapper("functionCall", "dg('sklL')", ["sklL"], ['sklL'], "UpdateThumbPrev", dg('sklL')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('sklL')\", [\"sklL\"], ['sklL'], \"UpdateThumbPrev\", dg('sklL')).value = parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"UpdateThumbPrev\", dg('skeleton')).style.left)", [""], [], "UpdateThumbPrev", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "UpdateThumbPrev", dg('skeleton')).style.left));
  confixWrapper("functionCall", "dg('sklT')", ["sklT"], ['sklT'], "UpdateThumbPrev", dg('sklT')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('sklT')\", [\"sklT\"], ['sklT'], \"UpdateThumbPrev\", dg('sklT')).value = parseInt(confixWrapper(\"functionCall\", \"dg('skeleton')\", [\"skeleton\"], ['skeleton'], \"UpdateThumbPrev\", dg('skeleton')).style.top)", [""], [], "UpdateThumbPrev", parseInt(confixWrapper("functionCall", "dg('skeleton')", ["skeleton"], ['skeleton'], "UpdateThumbPrev", dg('skeleton')).style.top));
}
function getMyXY(eve, t) {
  var tt;
  if (confixWrapper("condition", "!eve", [""], [], "getMyXY", !eve)) 
  var eve = confixWrapper("initvar", "var eve = window.event", [""], [], "getMyXY", window.event);
  if (confixWrapper("condition", "document.all", [""], [], "getMyXY", document.all)) 
  tt = confixWrapper("infix", "tt = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop", [""], [], "getMyXY", document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop);
  return confixWrapper("return", "return t ? document.all ? eve.clientY + tt : eve.pageY : document.all ? eve.clientX : eve.pageX;", [""], [], "getMyXY", t ? document.all ? eve.clientY + tt : eve.pageY : document.all ? eve.clientX : eve.pageX);
}
function dg(x) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"document.getElementById(x)\", [\"x\"], [x], \"dg\", document.getElementById(x));", [""], [], "dg", confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "dg", document.getElementById(x)));
}
