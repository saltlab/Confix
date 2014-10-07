function confixWrapper(statementType, statement, varList, varValueList, actualStatement) {
  trace.push({statementType: statementType, statement: statement, varList: varList, varValueList: varValueList, actualStatement: actualStatement});
  return actualStatement;
}
function getConfixTrace() {
  return trace;
}
var phorm_js_exec_counter = new Array();
for (var i = 0; i < 0; i++) 
  if (phorm_js_exec_counter[i] == undefined || phorm_js_exec_counter[i] == null) 
  phorm_js_exec_counter[i] = 0;
var AjaxVal = "";
var isAjaxing = false;
var md5 = "";
var ss_cur = 0;
var ss_play = 1;
var ss_pid = new Array();
var ss_ttl = new Array();
var ss_src = new Array();
var ss_date = new Array();
var ss_desc = new Array();
var ss_loaded = false;
var ss_smaller = false;
var ss_awaits = 1;
function dg(x) {
  return confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], document.getElementById(x));
}
function setOpac(cur, strength) {
  if (confixWrapper("condition", "cur.style.MozOpacity", [""], [], cur.style.MozOpacity)) 
  cur.style.MozOpacity = strength; else if (confixWrapper("condition", "cur.filters", [""], [], cur.filters)) 
  cur.filters.alpha.opacity = strength * 100;
}
function LightenIt(cur) {
  confixWrapper("functionCall", "setOpac(cur, 0.99)", ["cur", "0.99"], [cur, 0.99], setOpac(cur, 0.99));
}
function DarkenIt(cur, t) {
  if (confixWrapper("condition", "(!t) || (t == '')", [""], [], (!t) || (t == ''))) 
  t = DarkenVal / 100;
  confixWrapper("functionCall", "setOpac(cur, t)", ["cur", "t"], [cur, t], setOpac(cur, t));
}
function toggleInfo(wut) {
  if (confixWrapper("condition", "dg('hin').innerHTML", [""], [], confixWrapper("functionCall", "dg('hin')", ["hin"], ['hin'], dg('hin')).innerHTML)) 
  if (confixWrapper("condition", "(!wut) || (wut == '')", [""], [], (!wut) || (wut == ''))) 
  wut = confixWrapper("functionCall", "dg('hin')", ["hin"], ['hin'], dg('hin')).innerHTML;
  if (confixWrapper("condition", "wut == 'Show'", [""], [], wut == 'Show')) 
  {
    confixWrapper("functionCall", "dg('hin')", ["hin"], ['hin'], dg('hin')).innerHTML = 'Hide&nbsp;';
    confixWrapper("functionCall", "dg('photoBoxes')", ["photoBoxes"], ['photoBoxes'], dg('photoBoxes')).style.display = 'block';
    confixWrapper("functionCall", "dg('theImage')", ["theImage"], ['theImage'], dg('theImage')).style.cssFloat = 'left';
    confixWrapper("functionCall", "dg('theImage')", ["theImage"], ['theImage'], dg('theImage')).style.styleFloat = 'left';
    confixWrapper("functionCall", "dg('theImage')", ["theImage"], ['theImage'], dg('theImage')).style.marginRight = '15px';
    confixWrapper("functionCall", "setCookie('hideinfo', 'false')", ["hideinfo", "false"], ['hideinfo', 'false'], setCookie('hideinfo', 'false'));
  } else {
    confixWrapper("functionCall", "dg('hin')", ["hin"], ['hin'], dg('hin')).innerHTML = 'Show';
    confixWrapper("functionCall", "dg('photoBoxes')", ["photoBoxes"], ['photoBoxes'], dg('photoBoxes')).style.display = 'none';
    confixWrapper("functionCall", "dg('theImage')", ["theImage"], ['theImage'], dg('theImage')).style.cssFloat = 'none';
    confixWrapper("functionCall", "dg('theImage')", ["theImage"], ['theImage'], dg('theImage')).style.styleFloat = 'none';
    confixWrapper("functionCall", "dg('theImage')", ["theImage"], ['theImage'], dg('theImage')).style.marginRight = '55px';
    confixWrapper("functionCall", "setCookie('hideinfo', 'true')", ["hideinfo", "true"], ['hideinfo', 'true'], setCookie('hideinfo', 'true'));
  }
}
function cookieVal(cookname) {
  thiscook = confixWrapper("functionCall", "document.cookie.split(\"; \")", ["; "], ["; "], document.cookie.split("; "));
  for (i = 0; i < thiscook.length; i++) 
    if (confixWrapper("condition", "cookname == thiscook[i].split(\"=\")[0]", [""], [], cookname == confixWrapper("functionCall", "thiscook[i].split(\"=\")", ["="], ["="], thiscook[i].split("="))[0])) 
    return confixWrapper("functionCall", "thiscook[i].split(\"=\")", ["="], ["="], thiscook[i].split("="))[1];
  return -1;
}
function setCookie(key, val) {
  newd = new Date();
  confixWrapper("functionCall", "newd.setMonth(newd.getMonth() + 6)", ["newd.getMonth() + 6"], [confixWrapper("functionCall", "newd.getMonth()", [], [], newd.getMonth()) + 6], newd.setMonth(confixWrapper("functionCall", "newd.getMonth()", [], [], newd.getMonth()) + 6));
  document.cookie = key + "=" + val + ";expires=" + confixWrapper("functionCall", "newd.toGMTString()", [], [], newd.toGMTString());
}
function reToggleInfo() {
  confixWrapper("functionCall", "toggleInfo((cookieVal('hideinfo') != 'true') ? 'Show' : 'Hide')", ["(cookieVal(hideinfo) != true) ? Show : Hide"], [(confixWrapper("functionCall", "cookieVal('hideinfo')", ["hideinfo"], ['hideinfo'], cookieVal('hideinfo')) != 'true') ? 'Show' : 'Hide'], toggleInfo((confixWrapper("functionCall", "cookieVal('hideinfo')", ["hideinfo"], ['hideinfo'], cookieVal('hideinfo')) != 'true') ? 'Show' : 'Hide'));
}
function rand(x) {
  return confixWrapper("functionCall", "Math.round(Math.random() * x)", ["Math.random() * x"], [confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * x], Math.round(confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * x));
}
function reshuffle() {
  var maxRand = 400 - 75;
  var n = confixWrapper("functionCall", "dg('thumbscount')", ["thumbscount"], ['thumbscount'], dg('thumbscount')).value;
  for (var i = 0; i < n; i++) 
    {
      confixWrapper("functionCall", "dg('ThumbInBox' + i)", ["ThumbInBox + i"], ['ThumbInBox' + i], dg('ThumbInBox' + i)).style.top = confixWrapper("functionCall", "rand(maxRand)", ["maxRand"], [maxRand], rand(maxRand)) + 'px';
      confixWrapper("functionCall", "dg('ThumbInBox' + i)", ["ThumbInBox + i"], ['ThumbInBox' + i], dg('ThumbInBox' + i)).style.left = confixWrapper("functionCall", "rand(maxRand)", ["maxRand"], [maxRand], rand(maxRand)) + 'px';
    }
}
function updateIndic() {
  var v = confixWrapper("functionCall", "dg('indicator')", ["indicator"], ['indicator'], dg('indicator')).innerHTML;
  var l = v.length;
  var neck = 52;
  if (confixWrapper("condition", "l > neck", [""], [], l > neck)) 
  v = confixWrapper("functionCall", "v.substring(0, l - 3 * 7)", ["0", "l - 3 * 7"], [0, l - 3 * 7], v.substring(0, l - 3 * 7));
  if (confixWrapper("condition", "(l % 3) == 0", [""], [], (l % 3) == 0)) 
  confixWrapper("functionCall", "dg('indicator')", ["indicator"], ['indicator'], dg('indicator')).innerHTML = '&#149;      ' + v; else confixWrapper("functionCall", "dg('indicator')", ["indicator"], ['indicator'], dg('indicator')).innerHTML = '&nbsp; ' + v;
  if (confixWrapper("condition", "isAjaxing", [""], [], isAjaxing)) 
  confixWrapper("functionCall", "setTimeout(\"updateIndic();\", 500)", ["updateIndic();", "500"], ["updateIndic();", 500], setTimeout("updateIndic();", 500)); else confixWrapper("functionCall", "dg('indicator')", ["indicator"], ['indicator'], dg('indicator')).innerHTML = '';
}
function alertContents(http_request) {
  if (confixWrapper("condition", "http_request.readyState == 4", [""], [], http_request.readyState == 4)) 
  try {
    if (confixWrapper("condition", "http_request.status == 200", [""], [], http_request.status == 200)) 
    {
      AjaxVal = http_request.responseText;
      AjaxVal = confixWrapper("functionCall", "AjaxVal.substr(6, AjaxVal.length - 13)", ["6", "AjaxVal.length - 13"], [6, AjaxVal.length - 13], AjaxVal.substr(6, AjaxVal.length - 13));
      AjaxValRead = false;
      if (confixWrapper("condition", "AjaxVal.substr(0, 4) == 'Done'", [""], [], confixWrapper("functionCall", "AjaxVal.substr(0, 4)", ["0", "4"], [0, 4], AjaxVal.substr(0, 4)) == 'Done')) 
      {
        confixWrapper("functionCall", "dg('rateStatus')", ["rateStatus"], ['rateStatus'], dg('rateStatus')).innerHTML = 'Your rating saved!';
        confixWrapper("functionCall", "dg('sumRate')", ["sumRate"], ['sumRate'], dg('sumRate')).innerHTML = AjaxVal.substr(4, AjaxVal.length - 1);
      }
      if (confixWrapper("condition", "AjaxVal.substr(0, 6) == 'FakeWV'", [""], [], confixWrapper("functionCall", "AjaxVal.substr(0, 6)", ["0", "6"], [0, 6], AjaxVal.substr(0, 6)) == 'FakeWV')) 
      {
        confixWrapper("functionCall", "dg('wvwimg')", ["wvwimg"], ['wvwimg'], dg('wvwimg')).src = "wv.php?rand=" + confixWrapper("functionCall", "rand(10000000)", ["10000000"], [10000000], rand(10000000));
        md5 = confixWrapper("functionCall", "AjaxVal.substr(6, 27)", ["6", "27"], [6, 27], AjaxVal.substr(6, 27));
      }
      if (confixWrapper("condition", "AjaxVal.substr(0, 6) == 'TrueWV'", [""], [], confixWrapper("functionCall", "AjaxVal.substr(0, 6)", ["0", "6"], [0, 6], AjaxVal.substr(0, 6)) == 'TrueWV')) 
      {
        md5 = md5;
      }
      AjaxVal = "";
      isAjaxing = false;
    }
  }  catch (e) {
}
}
function makeRequest(url) {
  var http_request = false;
  if (confixWrapper("condition", "window.XMLHttpRequest", [""], [], window.XMLHttpRequest)) 
  {
    http_request = new XMLHttpRequest();
    if (confixWrapper("condition", "http_request.overrideMimeType", [""], [], http_request.overrideMimeType)) 
    confixWrapper("functionCall", "http_request.overrideMimeType('text/xml')", ["text/xml"], ['text/xml'], http_request.overrideMimeType('text/xml'));
  } else if (confixWrapper("condition", "window.ActiveXObject", [""], [], window.ActiveXObject)) 
  {
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }    catch (e) {
  try {
    http_request = new ActiveXObject("Microsoft.XMLHTTP");
  }  catch (e) {
}
}
  }
  if (confixWrapper("condition", "!http_request", [""], [], !http_request)) 
  {
    confixWrapper("functionCall", "alert('Giving up :( Cannot create an XMLHTTP instance')", ["Giving up :( Cannot create an XMLHTTP instance"], ['Giving up :( Cannot create an XMLHTTP instance'], alert('Giving up :( Cannot create an XMLHTTP instance'));
    return false;
  }
  http_request.onreadystatechange = function() {
  try {
    confixWrapper("functionCall", "alertContents(http_request)", ["http_request"], [http_request], alertContents(http_request));
  }  catch (e) {
}
};
  confixWrapper("functionCall", "http_request.open('GET', url, true)", ["GET", "url", "true"], ['GET', url, true], http_request.open('GET', url, true));
  confixWrapper("functionCall", "http_request.send(null)", ["null"], [null], http_request.send(null));
}
function SaveRating(pid, rate) {
  if (confixWrapper("condition", "rate == 0", [""], [], rate == 0)) 
  {
    confixWrapper("functionCall", "alert('Select your rate among the other options!')", ["Select your rate among the other options!"], ['Select your rate among the other options!'], alert('Select your rate among the other options!'));
    return;
  }
  isAjaxing = true;
  confixWrapper("functionCall", "dg('rateStatus')", ["rateStatus"], ['rateStatus'], dg('rateStatus')).innerHTML = 'Saving your rate ';
  confixWrapper("functionCall", "updateIndic()", [], [], updateIndic());
  confixWrapper("functionCall", "makeRequest(\"./?cmd=rate&p=\" + pid + \"&rate=\" + rate + \"&r=\" + Math.round(Math.random() * 100000))", ["./?cmd=rate&p= + pid + &rate= + rate + &r= + Math.round(Math.random() * 100000)"], ["./?cmd=rate&p=" + pid + "&rate=" + rate + "&r=" + confixWrapper("functionCall", "Math.round(Math.random() * 100000)", ["Math.random() * 100000"], [confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * 100000], Math.round(confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * 100000))], makeRequest("./?cmd=rate&p=" + pid + "&rate=" + rate + "&r=" + confixWrapper("functionCall", "Math.round(Math.random() * 100000)", ["Math.random() * 100000"], [confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * 100000], Math.round(confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * 100000))));
}
function prepareBody() {
  try {
    confixWrapper("functionCall", "reToggleInfo()", [], [], reToggleInfo());
  }  catch (e) {
}
  try {
    isAjaxing = true;
    confixWrapper("functionCall", "makeRequest(\"./?cmd=wvcheck&md5=\" + md5.substr(0, 20) + \"&r=\" + Math.round(Math.random() * 100000))", ["./?cmd=wvcheck&md5= + md5.substr(0, 20) + &r= + Math.round(Math.random() * 100000)"], ["./?cmd=wvcheck&md5=" + confixWrapper("functionCall", "md5.substr(0, 20)", ["0", "20"], [0, 20], md5.substr(0, 20)) + "&r=" + Math.round(confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * 100000)], makeRequest("./?cmd=wvcheck&md5=" + confixWrapper("functionCall", "md5.substr(0, 20)", ["0", "20"], [0, 20], md5.substr(0, 20)) + "&r=" + Math.round(confixWrapper("functionCall", "Math.random()", [], [], Math.random()) * 100000)));
  }  catch (e) {
}
}
function confirmDelete(x) {
  return confixWrapper("functionCall", "confirm('Are you sure you want to delete \"' + x + '\"?')", ["Are you sure you want to delete  + x + ?"], ['Are you sure you want to delete "' + x + '"?'], confirm('Are you sure you want to delete "' + x + '"?'));
}
function hideElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], dg(x)).style.display = 'none';
  }  catch (e) {
}
}
function showElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], dg(x)).style.display = 'block';
  }  catch (e) {
}
}
function inlineElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], dg(x)).style.display = 'inline';
  }  catch (e) {
}
}
function tableRowElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], dg(x)).style;
    confixWrapper("functionCall", "dg(x)", ["x"], [x], dg(x)).style.display = 'table-row';
  }  catch (e) {
  if (confixWrapper("condition", "dg(x)", [""], [], dg(x))) 
  confixWrapper("functionCall", "dg(x)", ["x"], [x], dg(x)).style.display = 'inline';
}
}
function checkWV() {
  re = /^\d{5}$/;
  if (confixWrapper("condition", "!re.test(dg('wvinput').value)", [""], [], !confixWrapper("functionCall", "re.test(dg('wvinput').value)", ["dg(wvinput).value"], [confixWrapper("functionCall", "dg('wvinput')", ["wvinput"], ['wvinput'], dg('wvinput')).value], re.test(confixWrapper("functionCall", "dg('wvinput')", ["wvinput"], ['wvinput'], dg('wvinput')).value)))) 
  {
    confixWrapper("functionCall", "alert('Word Verification box should have an string of length 5 with digits')", ["Word Verification box should have an string of length 5 with digits"], ['Word Verification box should have an string of length 5 with digits'], alert('Word Verification box should have an string of length 5 with digits'));
    return false;
  }
  if (confixWrapper("condition", "dg('cmntTextArea').value.length == 0", [""], [], confixWrapper("functionCall", "dg('cmntTextArea')", ["cmntTextArea"], ['cmntTextArea'], dg('cmntTextArea')).value.length == 0)) 
  {
    confixWrapper("functionCall", "alert('Empty comment is not allowed!')", ["Empty comment is not allowed!"], ['Empty comment is not allowed!'], alert('Empty comment is not allowed!'));
    return false;
  }
  return true;
}
function doReply(x) {
  x = confixWrapper("functionCall", "parseInt(x)", ["x"], [x], parseInt(x));
  confixWrapper("functionCall", "dg('cmntReply')", ["cmntReply"], ['cmntReply'], dg('cmntReply')).value = x;
  confixWrapper("functionCall", "dg('viewComment').setAttribute('href', '#' + x)", ["href", "# + x"], ['href', '#' + x], confixWrapper("functionCall", "dg('viewComment')", ["viewComment"], ['viewComment'], dg('viewComment')).setAttribute('href', '#' + x));
  if (confixWrapper("condition", "x == 0", [""], [], x == 0)) 
  confixWrapper("functionCall", "hideElem('ComReplyTR')", ["ComReplyTR"], ['ComReplyTR'], hideElem('ComReplyTR')); else confixWrapper("functionCall", "tableRowElem('ComReplyTR')", ["ComReplyTR"], ['ComReplyTR'], tableRowElem('ComReplyTR'));
}
function toggle(w, c, t) {
  var block = (confixWrapper("functionCall", "dg(w)", ["w"], [w], dg(w)).style.display == 'block');
  confixWrapper("functionCall", "dg(w)", ["w"], [w], dg(w)).style.display = (block) ? 'none' : 'block';
  confixWrapper("functionCall", "dg(c)", ["c"], [c], dg(c)).style.display = (!block) ? 'none' : 'block';
  t.innerHTML = (!block) ? "Hide'em again" : "Show'em All";
}
function ss_next() {
  ss_cur++;
  confixWrapper("functionCall", "ss_update()", [], [], ss_update());
}
function ss_prev() {
  ss_cur--;
  confixWrapper("functionCall", "ss_update()", [], [], ss_update());
}
function ss_update() {
  ss_cur = confixWrapper("functionCall", "Math.max(ss_cur, 0)", ["ss_cur", "0"], [ss_cur, 0], Math.max(ss_cur, 0));
  if (confixWrapper("condition", "ss_cur >= ss_date.length", [""], [], ss_cur >= ss_date.length)) 
  {
    confixWrapper("functionCall", "hideElem('ss_link2')", ["ss_link2"], ['ss_link2'], hideElem('ss_link2'));
    confixWrapper("functionCall", "showElem('ss_theend')", ["ss_theend"], ['ss_theend'], showElem('ss_theend'));
    ss_cur = ss_date.length;
    confixWrapper("functionCall", "dg('ss_n')", ["ss_n"], ['ss_n'], dg('ss_n')).innerHTML = "Final";
    if (confixWrapper("condition", "ss_play", [""], [], ss_play)) 
    confixWrapper("functionCall", "ss_playpause()", [], [], ss_playpause());
  } else {
    confixWrapper("functionCall", "hideElem('ss_theend')", ["ss_theend"], ['ss_theend'], hideElem('ss_theend'));
    confixWrapper("functionCall", "inlineElem('ss_link2')", ["ss_link2"], ['ss_link2'], inlineElem('ss_link2'));
    ss_loaded = (confixWrapper("functionCall", "dg('ss_photo')", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src == ss_src[ss_cur]);
    link = ".?p=" + ss_pid[ss_cur];
    src = ss_src[ss_cur];
    src = ss_smaller ? confixWrapper("functionCall", "src_smaller(src)", ["src"], [src], src_smaller(src)) : src;
    confixWrapper("functionCall", "dg('ss_date')", ["ss_date"], ['ss_date'], dg('ss_date')).innerHTML = ss_date[ss_cur];
    confixWrapper("functionCall", "dg('ss_title')", ["ss_title"], ['ss_title'], dg('ss_title')).innerHTML = ss_ttl[ss_cur];
    confixWrapper("functionCall", "dg('ss_desc')", ["ss_desc"], ['ss_desc'], dg('ss_desc')).innerHTML = ss_desc[ss_cur];
    confixWrapper("functionCall", "dg('ss_n')", ["ss_n"], ['ss_n'], dg('ss_n')).innerHTML = 1 + ss_cur;
    confixWrapper("functionCall", "dg('ss_link1').setAttribute('href', link)", ["href", "link"], ['href', link], confixWrapper("functionCall", "dg('ss_link1')", ["ss_link1"], ['ss_link1'], dg('ss_link1')).setAttribute('href', link));
    confixWrapper("functionCall", "dg('ss_link2').setAttribute('href', link)", ["href", "link"], ['href', link], confixWrapper("functionCall", "dg('ss_link2')", ["ss_link2"], ['ss_link2'], dg('ss_link2')).setAttribute('href', link));
    if (confixWrapper("condition", "ss_cur < ss_date.length", [""], [], ss_cur < ss_date.length)) 
    {
      preimg = new Image();
      preimg.src = ss_src[ss_cur + 1];
    }
  }
}
function ss_loaddone() {
  ss_loaded = true;
}
function ss_playpause() {
  ss_play = !ss_play;
  confixWrapper("functionCall", "dg('ss_playpause_link')", ["ss_playpause_link"], ['ss_playpause_link'], dg('ss_playpause_link')).innerHTML = (ss_play) ? 'Pause it' : 'Play it';
  confixWrapper("functionCall", "dg('ss_playpause_link2')", ["ss_playpause_link2"], ['ss_playpause_link2'], dg('ss_playpause_link2')).innerHTML = confixWrapper("functionCall", "dg('ss_playpause_link')", ["ss_playpause_link"], ['ss_playpause_link'], dg('ss_playpause_link')).innerHTML;
  confixWrapper("functionCall", "ss_run()", [], [], ss_run());
}
function src_smaller(x) {
  if (confixWrapper("condition", "x.charAt(x.length - 1) == \")\"", [""], [], confixWrapper("functionCall", "x.charAt(x.length - 1)", ["x.length - 1"], [x.length - 1], x.charAt(x.length - 1)) == ")")) 
  x = confixWrapper("functionCall", "x.substr(3, x.length - 4)", ["3", "x.length - 4"], [3, x.length - 4], x.substr(3, x.length - 4));
  return confixWrapper("functionCall", "x.substr(0, x.length - 5)", ["0", "x.length - 5"], [0, x.length - 5], x.substr(0, x.length - 5)) + "4.jpg";
}
function ss_toggleSmaller() {
  ss_smaller = !ss_smaller;
  confixWrapper("functionCall", "dg('ss_smaller_link')", ["ss_smaller_link"], ['ss_smaller_link'], dg('ss_smaller_link')).innerHTML = (ss_smaller) ? 'Larger Size' : 'Smaller Size';
  confixWrapper("functionCall", "dg('ss_photo')", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src = ss_smaller ? confixWrapper("functionCall", "src_smaller(dg('ss_photo').src)", ["dg(ss_photo).src"], [confixWrapper("functionCall", "dg('ss_photo')", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src], src_smaller(confixWrapper("functionCall", "dg('ss_photo')", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src)) : ss_src[ss_cur];
}
function ss_run() {
  if (confixWrapper("condition", "(ss_play) && (ss_awaits <= 0)", [""], [], (ss_play) && (ss_awaits <= 0))) 
  {
    ss_awaits++;
    var lookup = confixWrapper("functionCall", "parseInt(dg('ss_refresh').value)", ["dg(ss_refresh).value"], [confixWrapper("functionCall", "dg('ss_refresh')", ["ss_refresh"], ['ss_refresh'], dg('ss_refresh')).value], parseInt(confixWrapper("functionCall", "dg('ss_refresh')", ["ss_refresh"], ['ss_refresh'], dg('ss_refresh')).value));
    confixWrapper("functionCall", "setTimeout(\"ss_slideshow();\", lookup)", ["ss_slideshow();", "lookup"], ["ss_slideshow();", lookup], setTimeout("ss_slideshow();", lookup));
  }
}
function ss_slideshow() {
  ss_awaits--;
  if (confixWrapper("condition", "ss_play == 1 && ss_loaded", [""], [], ss_play == 1 && ss_loaded)) 
  {
    ss_cur++;
    confixWrapper("functionCall", "ss_update()", [], [], ss_update());
  }
  confixWrapper("functionCall", "ss_run()", [], [], ss_run());
}
