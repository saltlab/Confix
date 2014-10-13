trace = [];
function confixWrapper(statementType, statement, varList, varValueList, enclosingFunction, actualStatement) {
  trace.push({statementType: statementType, statement: statement, varList: varList, varValueList: varValueList, enclosingFunction: enclosingFunction, actualStatement: actualStatement});
  return actualStatement;
}
function getConfixTrace() {
  return trace;
}
var phorm_js_exec_counter = new Array();
for (var i = 0; i < 0; i++) 
  if (phorm_js_exec_counter[i] == undefined || phorm_js_exec_counter[i] == null) 
  phorm_js_exec_counter[i] = 0;
var AjaxVal = confixWrapper("initvar", "var AjaxVal = \"\"", [""], [], "", "");
var isAjaxing = confixWrapper("initvar", "var isAjaxing = false", [""], [], "", false);
var md5 = confixWrapper("initvar", "var md5 = \"\"", [""], [], "", "");
var ss_cur = confixWrapper("initvar", "var ss_cur = 0", [""], [], "", 0);
var ss_play = confixWrapper("initvar", "var ss_play = 1", [""], [], "", 1);
var ss_pid = confixWrapper("initvar", "var ss_pid = new Array()", [""], [], "", new Array());
var ss_ttl = confixWrapper("initvar", "var ss_ttl = new Array()", [""], [], "", new Array());
var ss_src = confixWrapper("initvar", "var ss_src = new Array()", [""], [], "", new Array());
var ss_date = confixWrapper("initvar", "var ss_date = new Array()", [""], [], "", new Array());
var ss_desc = confixWrapper("initvar", "var ss_desc = new Array()", [""], [], "", new Array());
var ss_loaded = confixWrapper("initvar", "var ss_loaded = false", [""], [], "", false);
var ss_smaller = confixWrapper("initvar", "var ss_smaller = false", [""], [], "", false);
var ss_awaits = confixWrapper("initvar", "var ss_awaits = 1", [""], [], "", 1);
function setOpac(cur, strength) {
  if (confixWrapper("condition", "cur.style.MozOpacity", [""], [], "setOpac", cur.style.MozOpacity)) 
  cur.style.MozOpacity = confixWrapper("infix", "cur.style.MozOpacity = strength", [""], [], "setOpac", strength); else if (confixWrapper("condition", "cur.filters", [""], [], "setOpac", cur.filters)) 
  cur.filters.alpha.opacity = confixWrapper("infix", "cur.filters.alpha.opacity = strength * 100", [""], [], "setOpac", strength * 100);
}
function LightenIt(cur) {
  confixWrapper("functionCall", "setOpac(cur, 0.99)", ["cur", "0.99"], [cur, 0.99], "LightenIt", setOpac(cur, 0.99));
}
function DarkenIt(cur, t) {
  if (confixWrapper("condition", "(!t) || (t == '')", [""], [], "DarkenIt", (!t) || (t == ''))) 
  t = confixWrapper("infix", "t = DarkenVal / 100", [""], [], "DarkenIt", DarkenVal / 100);
  confixWrapper("functionCall", "setOpac(cur, t)", ["cur", "t"], [cur, t], "DarkenIt", setOpac(cur, t));
}
function toggleInfo(wut) {
  if (confixWrapper("condition", "document.getElementById('hin').innerHTML", [""], [], "toggleInfo", confixWrapper("functionCall", "document.getElementById('hin')", ["hin"], ['hin'], "toggleInfo", document.getElementById('hin')).innerHTML)) 
  if (confixWrapper("condition", "(!wut) || (wut == '')", [""], [], "toggleInfo", (!wut) || (wut == ''))) 
  wut = confixWrapper("infix", "wut = document.getElementById('hin').innerHTML", [""], [], "toggleInfo", confixWrapper("functionCall", "document.getElementById('hin')", ["hin"], ['hin'], "toggleInfo", document.getElementById('hin')).innerHTML);
  if (confixWrapper("condition", "wut == 'Show'", [""], [], "toggleInfo", wut == 'Show')) 
  {
    confixWrapper("functionCall", "document.getElementById('hin')", ["hin"], ['hin'], "toggleInfo", document.getElementById('hin')).innerHTML = confixWrapper("infix", "document.getElementById('hin').innerHTML = 'Hide&nbsp;'", [""], [], "toggleInfo", 'Hide&nbsp;');
    confixWrapper("functionCall", "document.getElementById('photoBoxes')", ["photoBoxes"], ['photoBoxes'], "toggleInfo", document.getElementById('photoBoxes')).style.display = confixWrapper("infix", "document.getElementById('photoBoxes').style.display = 'block'", [""], [], "toggleInfo", 'block');
    confixWrapper("functionCall", "document.getElementById('theImage')", ["theImage"], ['theImage'], "toggleInfo", document.getElementById('theImage')).style.cssFloat = confixWrapper("infix", "document.getElementById('theImage').style.cssFloat = 'left'", [""], [], "toggleInfo", 'left');
    confixWrapper("functionCall", "document.getElementById('theImage')", ["theImage"], ['theImage'], "toggleInfo", document.getElementById('theImage')).style.styleFloat = confixWrapper("infix", "document.getElementById('theImage').style.styleFloat = 'left'", [""], [], "toggleInfo", 'left');
    confixWrapper("functionCall", "document.getElementById('theImage')", ["theImage"], ['theImage'], "toggleInfo", document.getElementById('theImage')).style.marginRight = confixWrapper("infix", "document.getElementById('theImage').style.marginRight = '15px'", [""], [], "toggleInfo", '15px');
    confixWrapper("functionCall", "setCookie('hideinfo', 'false')", ["hideinfo", "false"], ['hideinfo', 'false'], "toggleInfo", setCookie('hideinfo', 'false'));
  } else {
    confixWrapper("functionCall", "document.getElementById('hin')", ["hin"], ['hin'], "toggleInfo", document.getElementById('hin')).innerHTML = confixWrapper("infix", "document.getElementById('hin').innerHTML = 'Show'", [""], [], "toggleInfo", 'Show');
    confixWrapper("functionCall", "document.getElementById('photoBoxes')", ["photoBoxes"], ['photoBoxes'], "toggleInfo", document.getElementById('photoBoxes')).style.display = confixWrapper("infix", "document.getElementById('photoBoxes').style.display = 'none'", [""], [], "toggleInfo", 'none');
    confixWrapper("functionCall", "document.getElementById('theImage')", ["theImage"], ['theImage'], "toggleInfo", document.getElementById('theImage')).style.cssFloat = confixWrapper("infix", "document.getElementById('theImage').style.cssFloat = 'none'", [""], [], "toggleInfo", 'none');
    confixWrapper("functionCall", "document.getElementById('theImage')", ["theImage"], ['theImage'], "toggleInfo", document.getElementById('theImage')).style.styleFloat = confixWrapper("infix", "document.getElementById('theImage').style.styleFloat = 'none'", [""], [], "toggleInfo", 'none');
    confixWrapper("functionCall", "document.getElementById('theImage')", ["theImage"], ['theImage'], "toggleInfo", document.getElementById('theImage')).style.marginRight = confixWrapper("infix", "document.getElementById('theImage').style.marginRight = '55px'", [""], [], "toggleInfo", '55px');
    confixWrapper("functionCall", "setCookie('hideinfo', 'true')", ["hideinfo", "true"], ['hideinfo', 'true'], "toggleInfo", setCookie('hideinfo', 'true'));
  }
}
function cookieVal(cookname) {
  thiscook = confixWrapper("infix", "thiscook = document.cookie.split(\"; \")", [""], [], "cookieVal", document.cookie.split("; "));
  for (i = confixWrapper("infix", "i = 0", [""], [], "cookieVal", 0); i < thiscook.length; i++) 
    if (confixWrapper("condition", "cookname == thiscook[i].split(\"=\")[0]", [""], [], "cookieVal", cookname == confixWrapper("functionCall", "thiscook[i].split(\"=\")", ["="], ["="], "cookieVal", thiscook[i].split("="))[0])) 
    return confixWrapper("functionCall", "thiscook[i].split(\"=\")", ["="], ["="], "cookieVal", thiscook[i].split("="))[1];
  return -1;
}
function setCookie(key, val) {
  newd = confixWrapper("infix", "newd = new Date()", [""], [], "setCookie", new Date());
  confixWrapper("functionCall", "newd.setMonth(newd.getMonth() + 6)", ["newd.getMonth() + 6"], [confixWrapper("functionCall", "newd.getMonth()", [], [], "setCookie", newd.getMonth()) + 6], "setCookie", newd.setMonth(confixWrapper("functionCall", "newd.getMonth()", [], [], "setCookie", newd.getMonth()) + 6));
  document.cookie = confixWrapper("infix", "document.cookie = key + \"=\" + val + \";expires=\" + newd.toGMTString()", [""], [], "setCookie", key + "=" + val + ";expires=" + confixWrapper("functionCall", "newd.toGMTString()", [], [], "setCookie", newd.toGMTString()));
}
function reToggleInfo() {
  confixWrapper("functionCall", "toggleInfo((cookieVal('hideinfo') != 'true') ? 'Show' : 'Hide')", ["(cookieVal(hideinfo) != true) ? Show : Hide"], [(confixWrapper("functionCall", "cookieVal('hideinfo')", ["hideinfo"], ['hideinfo'], "reToggleInfo", cookieVal('hideinfo')) != 'true') ? 'Show' : 'Hide'], "reToggleInfo", toggleInfo((confixWrapper("functionCall", "cookieVal('hideinfo')", ["hideinfo"], ['hideinfo'], "reToggleInfo", cookieVal('hideinfo')) != 'true') ? 'Show' : 'Hide'));
}
function rand(x) {
  return confixWrapper("functionCall", "Math.round(Math.random() * x)", ["Math.random() * x"], [confixWrapper("functionCall", "Math.random()", [], [], "rand", Math.random()) * x], "rand", Math.round(confixWrapper("functionCall", "Math.random()", [], [], "rand", Math.random()) * x));
}
function reshuffle() {
  var maxRand = confixWrapper("initvar", "var maxRand = 400 - 75", [""], [], "reshuffle", 400 - 75);
  var n = confixWrapper("initvar", "var n = document.getElementById('thumbscount').value", [""], [], "reshuffle", confixWrapper("functionCall", "document.getElementById('thumbscount')", ["thumbscount"], ['thumbscount'], "reshuffle", document.getElementById('thumbscount')).value);
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "reshuffle", 0); i < n; i++) 
    {
      confixWrapper("functionCall", "document.getElementById('ThumbInBox' + i)", ["ThumbInBox + i"], ['ThumbInBox' + i], "reshuffle", document.getElementById('ThumbInBox' + i)).style.top = confixWrapper("infix", "document.getElementById('ThumbInBox' + i).style.top = rand(maxRand) + 'px'", [""], [], "reshuffle", confixWrapper("functionCall", "rand(maxRand)", ["maxRand"], [maxRand], "reshuffle", rand(maxRand)) + 'px');
      confixWrapper("functionCall", "document.getElementById('ThumbInBox' + i)", ["ThumbInBox + i"], ['ThumbInBox' + i], "reshuffle", document.getElementById('ThumbInBox' + i)).style.left = confixWrapper("infix", "document.getElementById('ThumbInBox' + i).style.left = rand(maxRand) + 'px'", [""], [], "reshuffle", confixWrapper("functionCall", "rand(maxRand)", ["maxRand"], [maxRand], "reshuffle", rand(maxRand)) + 'px');
    }
}
function updateIndic() {
  var v = confixWrapper("initvar", "var v = document.getElementById('indicator').innerHTML", [""], [], "updateIndic", confixWrapper("functionCall", "document.getElementById('indicator')", ["indicator"], ['indicator'], "updateIndic", document.getElementById('indicator')).innerHTML);
  var l = confixWrapper("initvar", "var l = v.length", [""], [], "updateIndic", v.length);
  var neck = confixWrapper("initvar", "var neck = 52", [""], [], "updateIndic", 52);
  if (confixWrapper("condition", "l > neck", [""], [], "updateIndic", l > neck)) 
  v = confixWrapper("infix", "v = v.substring(0, l - 3 * 7)", [""], [], "updateIndic", v.substring(0, l - 3 * 7));
  if (confixWrapper("condition", "(l % 3) == 0", [""], [], "updateIndic", (l % 3) == 0)) 
  confixWrapper("functionCall", "document.getElementById('indicator')", ["indicator"], ['indicator'], "updateIndic", document.getElementById('indicator')).innerHTML = confixWrapper("infix", "document.getElementById('indicator').innerHTML = '&#149;      ' + v", [""], [], "updateIndic", '&#149;      ' + v); else confixWrapper("functionCall", "document.getElementById('indicator')", ["indicator"], ['indicator'], "updateIndic", document.getElementById('indicator')).innerHTML = confixWrapper("infix", "document.getElementById('indicator').innerHTML = '&nbsp; ' + v", [""], [], "updateIndic", '&nbsp; ' + v);
  if (confixWrapper("condition", "isAjaxing", [""], [], "updateIndic", isAjaxing)) 
  confixWrapper("functionCall", "setTimeout(\"updateIndic();\", 500)", ["updateIndic();", "500"], ["updateIndic();", 500], "updateIndic", setTimeout("updateIndic();", 500)); else confixWrapper("functionCall", "document.getElementById('indicator')", ["indicator"], ['indicator'], "updateIndic", document.getElementById('indicator')).innerHTML = confixWrapper("infix", "document.getElementById('indicator').innerHTML = ''", [""], [], "updateIndic", '');
}
function alertContents(http_request) {
  if (confixWrapper("condition", "http_request.readyState == 4", [""], [], "alertContents", http_request.readyState == 4)) 
  try {
    if (confixWrapper("condition", "http_request.status == 200", [""], [], "alertContents", http_request.status == 200)) 
    {
      AjaxVal = confixWrapper("infix", "AjaxVal = http_request.responseText", [""], [], "alertContents", http_request.responseText);
      AjaxVal = confixWrapper("infix", "AjaxVal = AjaxVal.substr(6, AjaxVal.length - 13)", [""], [], "alertContents", AjaxVal.substr(6, AjaxVal.length - 13));
      AjaxValRead = confixWrapper("infix", "AjaxValRead = false", [""], [], "alertContents", false);
      if (confixWrapper("condition", "AjaxVal.substr(0, 4) == 'Done'", [""], [], "alertContents", confixWrapper("functionCall", "AjaxVal.substr(0, 4)", ["0", "4"], [0, 4], "alertContents", AjaxVal.substr(0, 4)) == 'Done')) 
      {
        confixWrapper("functionCall", "document.getElementById('rateStatus')", ["rateStatus"], ['rateStatus'], "alertContents", document.getElementById('rateStatus')).innerHTML = confixWrapper("infix", "document.getElementById('rateStatus').innerHTML = 'Your rating saved!'", [""], [], "alertContents", 'Your rating saved!');
        confixWrapper("functionCall", "document.getElementById('sumRate')", ["sumRate"], ['sumRate'], "alertContents", document.getElementById('sumRate')).innerHTML = confixWrapper("infix", "document.getElementById('sumRate').innerHTML = AjaxVal.substr(4, AjaxVal.length - 1)", [""], [], "alertContents", AjaxVal.substr(4, AjaxVal.length - 1));
      }
      if (confixWrapper("condition", "AjaxVal.substr(0, 6) == 'FakeWV'", [""], [], "alertContents", confixWrapper("functionCall", "AjaxVal.substr(0, 6)", ["0", "6"], [0, 6], "alertContents", AjaxVal.substr(0, 6)) == 'FakeWV')) 
      {
        confixWrapper("functionCall", "document.getElementById('wvwimg')", ["wvwimg"], ['wvwimg'], "alertContents", document.getElementById('wvwimg')).src = confixWrapper("infix", "document.getElementById('wvwimg').src = \"wv.php?rand=\" + rand(10000000)", [""], [], "alertContents", "wv.php?rand=" + confixWrapper("functionCall", "rand(10000000)", ["10000000"], [10000000], "alertContents", rand(10000000)));
        md5 = confixWrapper("infix", "md5 = AjaxVal.substr(6, 27)", [""], [], "alertContents", AjaxVal.substr(6, 27));
      }
      if (confixWrapper("condition", "AjaxVal.substr(0, 6) == 'TrueWV'", [""], [], "alertContents", confixWrapper("functionCall", "AjaxVal.substr(0, 6)", ["0", "6"], [0, 6], "alertContents", AjaxVal.substr(0, 6)) == 'TrueWV')) 
      {
        md5 = confixWrapper("infix", "md5 = md5", [""], [], "alertContents", md5);
      }
      AjaxVal = confixWrapper("infix", "AjaxVal = \"\"", [""], [], "alertContents", "");
      isAjaxing = confixWrapper("infix", "isAjaxing = false", [""], [], "alertContents", false);
    }
  }  catch (e) {
}
}
function makeRequest(url) {
  var http_request = confixWrapper("initvar", "var http_request = false", [""], [], "makeRequest", false);
  if (confixWrapper("condition", "window.XMLHttpRequest", [""], [], "makeRequest", window.XMLHttpRequest)) 
  {
    http_request = confixWrapper("infix", "http_request = new XMLHttpRequest()", [""], [], "makeRequest", new XMLHttpRequest());
    if (confixWrapper("condition", "http_request.overrideMimeType", [""], [], "makeRequest", http_request.overrideMimeType)) 
    confixWrapper("functionCall", "http_request.overrideMimeType('text/xml')", ["text/xml"], ['text/xml'], "makeRequest", http_request.overrideMimeType('text/xml'));
  } else if (confixWrapper("condition", "window.ActiveXObject", [""], [], "makeRequest", window.ActiveXObject)) 
  {
    try {
      http_request = confixWrapper("infix", "http_request = new ActiveXObject(\"Msxml2.XMLHTTP\")", [""], [], "makeRequest", new ActiveXObject("Msxml2.XMLHTTP"));
    }    catch (e) {
  try {
    http_request = confixWrapper("infix", "http_request = new ActiveXObject(\"Microsoft.XMLHTTP\")", [""], [], "makeRequest", new ActiveXObject("Microsoft.XMLHTTP"));
  }  catch (e) {
}
}
  }
  if (confixWrapper("condition", "!http_request", [""], [], "makeRequest", !http_request)) 
  {
    confixWrapper("functionCall", "alert('Giving up :( Cannot create an XMLHTTP instance')", ["Giving up :( Cannot create an XMLHTTP instance"], ['Giving up :( Cannot create an XMLHTTP instance'], "makeRequest", alert('Giving up :( Cannot create an XMLHTTP instance'));
    return false;
  }
  http_request.onreadystatechange = confixWrapper("infix", "http_request.onreadystatechange = function() {  try {    alertContents(http_request);  }  catch (e) {}}", [""], [], "makeRequest", function() {
  try {
    confixWrapper("functionCall", "alertContents(http_request)", ["http_request"], [http_request], "", alertContents(http_request));
  }  catch (e) {
}
});
  confixWrapper("functionCall", "http_request.open('GET', url, true)", ["GET", "url", "true"], ['GET', url, true], "makeRequest", http_request.open('GET', url, true));
  confixWrapper("functionCall", "http_request.send(null)", ["null"], [null], "makeRequest", http_request.send(null));
}
function SaveRating(pid, rate) {
  t = confixWrapper("infix", "t = document.getElementById('rateStatus')", [""], [], "SaveRating", document.getElementById('rateStatus'));
  if (confixWrapper("condition", "t.children.length > 0", [""], [], "SaveRating", t.children.length > 0)) 
  {
  } else {
  }
  if (confixWrapper("condition", "rate == 0", [""], [], "SaveRating", rate == 0)) 
  {
    confixWrapper("functionCall", "alert('Select your rate among the other options!')", ["Select your rate among the other options!"], ['Select your rate among the other options!'], "SaveRating", alert('Select your rate among the other options!'));
    return;
  }
  isAjaxing = confixWrapper("infix", "isAjaxing = true", [""], [], "SaveRating", true);
  confixWrapper("functionCall", "document.getElementById('rateStatus')", ["rateStatus"], ['rateStatus'], "SaveRating", document.getElementById('rateStatus')).innerHTML = confixWrapper("infix", "document.getElementById('rateStatus').innerHTML = 'Saving your rate '", [""], [], "SaveRating", 'Saving your rate ');
}
function prepareBody() {
  try {
    confixWrapper("functionCall", "reToggleInfo()", [], [], "prepareBody", reToggleInfo());
  }  catch (e) {
}
  try {
    isAjaxing = confixWrapper("infix", "isAjaxing = true", [""], [], "prepareBody", true);
    confixWrapper("functionCall", "makeRequest(\"./?cmd=wvcheck&md5=\" + md5.substr(0, 20) + \"&r=\" + Math.round(Math.random() * 100000))", ["./?cmd=wvcheck&md5= + md5.substr(0, 20) + &r= + Math.round(Math.random() * 100000)"], ["./?cmd=wvcheck&md5=" + confixWrapper("functionCall", "md5.substr(0, 20)", ["0", "20"], [0, 20], "prepareBody", md5.substr(0, 20)) + "&r=" + Math.round(confixWrapper("functionCall", "Math.random()", [], [], "prepareBody", Math.random()) * 100000)], "prepareBody", makeRequest("./?cmd=wvcheck&md5=" + confixWrapper("functionCall", "md5.substr(0, 20)", ["0", "20"], [0, 20], "prepareBody", md5.substr(0, 20)) + "&r=" + Math.round(confixWrapper("functionCall", "Math.random()", [], [], "prepareBody", Math.random()) * 100000)));
  }  catch (e) {
}
}
function confirmDelete(x) {
  return confixWrapper("functionCall", "confirm('Are you sure you want to delete \"' + x + '\"?')", ["Are you sure you want to delete  + x + ?"], ['Are you sure you want to delete "' + x + '"?'], "confirmDelete", confirm('Are you sure you want to delete "' + x + '"?'));
}
function hideElem(x) {
  try {
    confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "hideElem", document.getElementById(x)).style.display = confixWrapper("infix", "document.getElementById(x).style.display = 'none'", [""], [], "hideElem", 'none');
  }  catch (e) {
}
}
function showElem(x) {
  try {
    confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "showElem", document.getElementById(x)).style.display = confixWrapper("infix", "document.getElementById(x).style.display = 'block'", [""], [], "showElem", 'block');
  }  catch (e) {
}
}
function inlineElem(x) {
  try {
    confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "inlineElem", document.getElementById(x)).style.display = confixWrapper("infix", "document.getElementById(x).style.display = 'inline'", [""], [], "inlineElem", 'inline');
  }  catch (e) {
}
}
function tableRowElem(x) {
  try {
    confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "tableRowElem", document.getElementById(x)).style;
    confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "tableRowElem", document.getElementById(x)).style.display = confixWrapper("infix", "document.getElementById(x).style.display = 'table-row'", [""], [], "tableRowElem", 'table-row');
  }  catch (e) {
  if (confixWrapper("condition", "document.getElementById(x)", [""], [], "tableRowElem", document.getElementById(x))) 
  confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "tableRowElem", document.getElementById(x)).style.display = confixWrapper("infix", "document.getElementById(x).style.display = 'inline'", [""], [], "tableRowElem", 'inline');
}
}
function checkWV() {
  re = confixWrapper("infix", "re = /^d{5}$/", [""], [], "checkWV", /^\d{5}$/);
  if (confixWrapper("condition", "!re.test(document.getElementById('wvinput').value)", [""], [], "checkWV", !confixWrapper("functionCall", "re.test(document.getElementById('wvinput').value)", ["document.getElementById(wvinput).value"], [confixWrapper("functionCall", "document.getElementById('wvinput')", ["wvinput"], ['wvinput'], "checkWV", document.getElementById('wvinput')).value], "checkWV", re.test(confixWrapper("functionCall", "document.getElementById('wvinput')", ["wvinput"], ['wvinput'], "checkWV", document.getElementById('wvinput')).value)))) 
  {
    confixWrapper("functionCall", "alert('Word Verification box should have an string of length 5 with digits')", ["Word Verification box should have an string of length 5 with digits"], ['Word Verification box should have an string of length 5 with digits'], "checkWV", alert('Word Verification box should have an string of length 5 with digits'));
    return false;
  }
  if (confixWrapper("condition", "document.getElementById('cmntTextArea').value.length == 0", [""], [], "checkWV", confixWrapper("functionCall", "document.getElementById('cmntTextArea')", ["cmntTextArea"], ['cmntTextArea'], "checkWV", document.getElementById('cmntTextArea')).value.length == 0)) 
  {
    confixWrapper("functionCall", "alert('Empty comment is not allowed!')", ["Empty comment is not allowed!"], ['Empty comment is not allowed!'], "checkWV", alert('Empty comment is not allowed!'));
    return false;
  }
  return true;
}
function doReply(x) {
  x = confixWrapper("infix", "x = parseInt(x)", [""], [], "doReply", parseInt(x));
  confixWrapper("functionCall", "document.getElementById('cmntReply')", ["cmntReply"], ['cmntReply'], "doReply", document.getElementById('cmntReply')).value = confixWrapper("infix", "document.getElementById('cmntReply').value = x", [""], [], "doReply", x);
  confixWrapper("functionCall", "document.getElementById('viewComment').setAttribute('href', '#' + x)", ["href", "# + x"], ['href', '#' + x], "doReply", confixWrapper("functionCall", "document.getElementById('viewComment')", ["viewComment"], ['viewComment'], "doReply", document.getElementById('viewComment')).setAttribute('href', '#' + x));
  if (confixWrapper("condition", "x == 0", [""], [], "doReply", x == 0)) 
  confixWrapper("functionCall", "hideElem('ComReplyTR')", ["ComReplyTR"], ['ComReplyTR'], "doReply", hideElem('ComReplyTR')); else confixWrapper("functionCall", "tableRowElem('ComReplyTR')", ["ComReplyTR"], ['ComReplyTR'], "doReply", tableRowElem('ComReplyTR'));
}
function toggle(w, c, t) {
  var block = confixWrapper("initvar", "var block = (document.getElementById(w).style.display == 'block')", [""], [], "toggle", (confixWrapper("functionCall", "document.getElementById(w)", ["w"], [w], "toggle", document.getElementById(w)).style.display == 'block'));
  confixWrapper("functionCall", "document.getElementById(w)", ["w"], [w], "toggle", document.getElementById(w)).style.display = confixWrapper("infix", "document.getElementById(w).style.display = (block) ? 'none' : 'block'", [""], [], "toggle", (block) ? 'none' : 'block');
  confixWrapper("functionCall", "document.getElementById(c)", ["c"], [c], "toggle", document.getElementById(c)).style.display = confixWrapper("infix", "document.getElementById(c).style.display = (!block) ? 'none' : 'block'", [""], [], "toggle", (!block) ? 'none' : 'block');
  t.innerHTML = confixWrapper("infix", "t.innerHTML = (!block) ? \"Hide'em again\" : \"Show'em All\"", [""], [], "toggle", (!block) ? "Hide'em again" : "Show'em All");
}
function ss_next() {
  ss_cur++;
  confixWrapper("functionCall", "ss_update()", [], [], "ss_next", ss_update());
}
function ss_prev() {
  ss_cur--;
  confixWrapper("functionCall", "ss_update()", [], [], "ss_prev", ss_update());
}
function ss_update() {
  ss_cur = confixWrapper("infix", "ss_cur = Math.max(ss_cur, 0)", [""], [], "ss_update", Math.max(ss_cur, 0));
  if (confixWrapper("condition", "ss_cur >= ss_date.length", [""], [], "ss_update", ss_cur >= ss_date.length)) 
  {
    confixWrapper("functionCall", "hideElem('ss_link2')", ["ss_link2"], ['ss_link2'], "ss_update", hideElem('ss_link2'));
    confixWrapper("functionCall", "showElem('ss_theend')", ["ss_theend"], ['ss_theend'], "ss_update", showElem('ss_theend'));
    ss_cur = confixWrapper("infix", "ss_cur = ss_date.length", [""], [], "ss_update", ss_date.length);
    confixWrapper("functionCall", "document.getElementById('ss_n')", ["ss_n"], ['ss_n'], "ss_update", document.getElementById('ss_n')).innerHTML = confixWrapper("infix", "document.getElementById('ss_n').innerHTML = \"Final\"", [""], [], "ss_update", "Final");
    if (confixWrapper("condition", "ss_play", [""], [], "ss_update", ss_play)) 
    confixWrapper("functionCall", "ss_playpause()", [], [], "ss_update", ss_playpause());
  } else {
    confixWrapper("functionCall", "hideElem('ss_theend')", ["ss_theend"], ['ss_theend'], "ss_update", hideElem('ss_theend'));
    confixWrapper("functionCall", "inlineElem('ss_link2')", ["ss_link2"], ['ss_link2'], "ss_update", inlineElem('ss_link2'));
    ss_loaded = confixWrapper("infix", "ss_loaded = (document.getElementById('ss_photo').src == ss_src[ss_cur])", [""], [], "ss_update", (confixWrapper("functionCall", "document.getElementById('ss_photo')", ["ss_photo"], ['ss_photo'], "ss_update", document.getElementById('ss_photo')).src == ss_src[ss_cur]));
    link = confixWrapper("infix", "link = \".?p=\" + ss_pid[ss_cur]", [""], [], "ss_update", ".?p=" + ss_pid[ss_cur]);
    src = confixWrapper("infix", "src = ss_src[ss_cur]", [""], [], "ss_update", ss_src[ss_cur]);
    src = confixWrapper("infix", "src = ss_smaller ? src_smaller(src) : src", [""], [], "ss_update", ss_smaller ? confixWrapper("functionCall", "src_smaller(src)", ["src"], [src], "ss_update", src_smaller(src)) : src);
    confixWrapper("functionCall", "document.getElementById('ss_date')", ["ss_date"], ['ss_date'], "ss_update", document.getElementById('ss_date')).innerHTML = confixWrapper("infix", "document.getElementById('ss_date').innerHTML = ss_date[ss_cur]", [""], [], "ss_update", ss_date[ss_cur]);
    confixWrapper("functionCall", "document.getElementById('ss_title')", ["ss_title"], ['ss_title'], "ss_update", document.getElementById('ss_title')).innerHTML = confixWrapper("infix", "document.getElementById('ss_title').innerHTML = ss_ttl[ss_cur]", [""], [], "ss_update", ss_ttl[ss_cur]);
    confixWrapper("functionCall", "document.getElementById('ss_desc')", ["ss_desc"], ['ss_desc'], "ss_update", document.getElementById('ss_desc')).innerHTML = confixWrapper("infix", "document.getElementById('ss_desc').innerHTML = ss_desc[ss_cur]", [""], [], "ss_update", ss_desc[ss_cur]);
    confixWrapper("functionCall", "document.getElementById('ss_n')", ["ss_n"], ['ss_n'], "ss_update", document.getElementById('ss_n')).innerHTML = confixWrapper("infix", "document.getElementById('ss_n').innerHTML = 1 + ss_cur", [""], [], "ss_update", 1 + ss_cur);
    confixWrapper("functionCall", "document.getElementById('ss_link1').setAttribute('href', link)", ["href", "link"], ['href', link], "ss_update", confixWrapper("functionCall", "document.getElementById('ss_link1')", ["ss_link1"], ['ss_link1'], "ss_update", document.getElementById('ss_link1')).setAttribute('href', link));
    confixWrapper("functionCall", "document.getElementById('ss_link2').setAttribute('href', link)", ["href", "link"], ['href', link], "ss_update", confixWrapper("functionCall", "document.getElementById('ss_link2')", ["ss_link2"], ['ss_link2'], "ss_update", document.getElementById('ss_link2')).setAttribute('href', link));
    if (confixWrapper("condition", "ss_cur < ss_date.length", [""], [], "ss_update", ss_cur < ss_date.length)) 
    {
      preimg = confixWrapper("infix", "preimg = new Image()", [""], [], "ss_update", new Image());
      preimg.src = confixWrapper("infix", "preimg.src = ss_src[ss_cur + 1]", [""], [], "ss_update", ss_src[ss_cur + 1]);
    }
  }
}
function ss_loaddone() {
  ss_loaded = confixWrapper("infix", "ss_loaded = true", [""], [], "ss_loaddone", true);
}
function ss_playpause() {
  ss_play = confixWrapper("infix", "ss_play = !ss_play", [""], [], "ss_playpause", !ss_play);
  confixWrapper("functionCall", "document.getElementById('ss_playpause_link')", ["ss_playpause_link"], ['ss_playpause_link'], "ss_playpause", document.getElementById('ss_playpause_link')).innerHTML = confixWrapper("infix", "document.getElementById('ss_playpause_link').innerHTML = (ss_play) ? 'Pause it' : 'Play it'", [""], [], "ss_playpause", (ss_play) ? 'Pause it' : 'Play it');
  confixWrapper("functionCall", "document.getElementById('ss_playpause_link2')", ["ss_playpause_link2"], ['ss_playpause_link2'], "ss_playpause", document.getElementById('ss_playpause_link2')).innerHTML = confixWrapper("infix", "document.getElementById('ss_playpause_link2').innerHTML = document.getElementById('ss_playpause_link').innerHTML", [""], [], "ss_playpause", confixWrapper("functionCall", "document.getElementById('ss_playpause_link')", ["ss_playpause_link"], ['ss_playpause_link'], "ss_playpause", document.getElementById('ss_playpause_link')).innerHTML);
  confixWrapper("functionCall", "ss_run()", [], [], "ss_playpause", ss_run());
}
function src_smaller(x) {
  if (confixWrapper("condition", "x.charAt(x.length - 1) == \")\"", [""], [], "src_smaller", confixWrapper("functionCall", "x.charAt(x.length - 1)", ["x.length - 1"], [x.length - 1], "src_smaller", x.charAt(x.length - 1)) == ")")) 
  x = confixWrapper("infix", "x = x.substr(3, x.length - 4)", [""], [], "src_smaller", x.substr(3, x.length - 4));
  return confixWrapper("functionCall", "x.substr(0, x.length - 5)", ["0", "x.length - 5"], [0, x.length - 5], "src_smaller", x.substr(0, x.length - 5)) + "4.jpg";
}
function ss_toggleSmaller() {
  ss_smaller = confixWrapper("infix", "ss_smaller = !ss_smaller", [""], [], "ss_toggleSmaller", !ss_smaller);
  confixWrapper("functionCall", "document.getElementById('ss_smaller_link')", ["ss_smaller_link"], ['ss_smaller_link'], "ss_toggleSmaller", document.getElementById('ss_smaller_link')).innerHTML = confixWrapper("infix", "document.getElementById('ss_smaller_link').innerHTML = (ss_smaller) ? 'Larger Size' : 'Smaller Size'", [""], [], "ss_toggleSmaller", (ss_smaller) ? 'Larger Size' : 'Smaller Size');
  confixWrapper("functionCall", "document.getElementById('ss_photo')", ["ss_photo"], ['ss_photo'], "ss_toggleSmaller", document.getElementById('ss_photo')).src = confixWrapper("infix", "document.getElementById('ss_photo').src = ss_smaller ? src_smaller(document.getElementById('ss_photo').src) : ss_src[ss_cur]", [""], [], "ss_toggleSmaller", ss_smaller ? confixWrapper("functionCall", "src_smaller(document.getElementById('ss_photo').src)", ["document.getElementById(ss_photo).src"], [confixWrapper("functionCall", "document.getElementById('ss_photo')", ["ss_photo"], ['ss_photo'], "ss_toggleSmaller", document.getElementById('ss_photo')).src], "ss_toggleSmaller", src_smaller(confixWrapper("functionCall", "document.getElementById('ss_photo')", ["ss_photo"], ['ss_photo'], "ss_toggleSmaller", document.getElementById('ss_photo')).src)) : ss_src[ss_cur]);
}
function ss_run() {
  if (confixWrapper("condition", "(ss_play) && (ss_awaits <= 0)", [""], [], "ss_run", (ss_play) && (ss_awaits <= 0))) 
  {
    ss_awaits++;
    var lookup = confixWrapper("initvar", "var lookup = parseInt(document.getElementById('ss_refresh').value)", [""], [], "ss_run", parseInt(confixWrapper("functionCall", "document.getElementById('ss_refresh')", ["ss_refresh"], ['ss_refresh'], "ss_run", document.getElementById('ss_refresh')).value));
    confixWrapper("functionCall", "setTimeout(\"ss_slideshow();\", lookup)", ["ss_slideshow();", "lookup"], ["ss_slideshow();", lookup], "ss_run", setTimeout("ss_slideshow();", lookup));
  }
}
function ss_slideshow() {
  ss_awaits--;
  if (confixWrapper("condition", "ss_play == 1 && ss_loaded", [""], [], "ss_slideshow", ss_play == 1 && ss_loaded)) 
  {
    ss_cur++;
    confixWrapper("functionCall", "ss_update()", [], [], "ss_slideshow", ss_update());
  }
  confixWrapper("functionCall", "ss_run()", [], [], "ss_slideshow", ss_run());
}
