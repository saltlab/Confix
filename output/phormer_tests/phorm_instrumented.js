function confixFunCall(functionType, functionCallName, args, argsValues, actualFunCall) {
  return actualFunCall;
}
function confixCondition(conditionSource, actualCondition) {
  return actualCondition;
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
  return confixFunCall("accessingDOM", "document.getElementById", ["x"], [x], document.getElementById(x));
}
function setOpac(cur, strength) {
  if (confixCondition("cur.style.MozOpacity", cur.style.MozOpacity)) 
  cur.style.MozOpacity = strength; else if (confixCondition("cur.filters", cur.filters)) 
  cur.filters.alpha.opacity = strength * 100;
}
function LightenIt(cur) {
  confixFunCall("notAccessingDOM", "setOpac", ["cur", "0.99"], [cur, 0.99], setOpac(cur, 0.99));
}
function DarkenIt(cur, t) {
  if (confixCondition("(!t) || (t == '')", (!t) || (t == ''))) 
  t = DarkenVal / 100;
  confixFunCall("notAccessingDOM", "setOpac", ["cur", "t"], [cur, t], setOpac(cur, t));
}
function toggleInfo(wut) {
  if (confixCondition("dg('hin').innerHTML", confixFunCall("notAccessingDOM", "dg", ["hin"], ['hin'], dg('hin')).innerHTML)) 
  if (confixCondition("(!wut) || (wut == '')", (!wut) || (wut == ''))) 
  wut = confixFunCall("notAccessingDOM", "dg", ["hin"], ['hin'], dg('hin')).innerHTML;
  if (confixCondition("wut == 'Show'", wut == 'Show')) 
  {
    confixFunCall("notAccessingDOM", "dg", ["hin"], ['hin'], dg('hin')).innerHTML = 'Hide&nbsp;';
    confixFunCall("notAccessingDOM", "dg", ["photoBoxes"], ['photoBoxes'], dg('photoBoxes')).style.display = 'block';
    confixFunCall("notAccessingDOM", "dg", ["theImage"], ['theImage'], dg('theImage')).style.cssFloat = 'left';
    confixFunCall("notAccessingDOM", "dg", ["theImage"], ['theImage'], dg('theImage')).style.styleFloat = 'left';
    confixFunCall("notAccessingDOM", "dg", ["theImage"], ['theImage'], dg('theImage')).style.marginRight = '15px';
    confixFunCall("notAccessingDOM", "setCookie", ["hideinfo", "false"], ['hideinfo', 'false'], setCookie('hideinfo', 'false'));
  } else {
    confixFunCall("notAccessingDOM", "dg", ["hin"], ['hin'], dg('hin')).innerHTML = 'Show';
    confixFunCall("notAccessingDOM", "dg", ["photoBoxes"], ['photoBoxes'], dg('photoBoxes')).style.display = 'none';
    confixFunCall("notAccessingDOM", "dg", ["theImage"], ['theImage'], dg('theImage')).style.cssFloat = 'none';
    confixFunCall("notAccessingDOM", "dg", ["theImage"], ['theImage'], dg('theImage')).style.styleFloat = 'none';
    confixFunCall("notAccessingDOM", "dg", ["theImage"], ['theImage'], dg('theImage')).style.marginRight = '55px';
    confixFunCall("notAccessingDOM", "setCookie", ["hideinfo", "true"], ['hideinfo', 'true'], setCookie('hideinfo', 'true'));
  }
}
function cookieVal(cookname) {
  thiscook = confixFunCall("notAccessingDOM", "document.cookie.split", ["; "], ["; "], document.cookie.split("; "));
  for (i = 0; i < thiscook.length; i++) 
    if (confixCondition("cookname == thiscook[i].split(\"=\")[0]", cookname == confixFunCall("notAccessingDOM", "thiscook[i].split", ["="], ["="], thiscook[i].split("="))[0])) 
    return confixFunCall("notAccessingDOM", "thiscook[i].split", ["="], ["="], thiscook[i].split("="))[1];
  return -1;
}
function setCookie(key, val) {
  newd = new Date();
  confixFunCall("notAccessingDOM", "newd.setMonth", ["newd.getMonth() + 6"], [confixFunCall("notAccessingDOM", "newd.getMonth", [], [], newd.getMonth()) + 6], newd.setMonth(confixFunCall("notAccessingDOM", "newd.getMonth", [], [], newd.getMonth()) + 6));
  document.cookie = key + "=" + val + ";expires=" + confixFunCall("notAccessingDOM", "newd.toGMTString", [], [], newd.toGMTString());
}
function reToggleInfo() {
  confixFunCall("notAccessingDOM", "toggleInfo", ["(cookieVal(hideinfo) != true) ? Show : Hide"], [(confixFunCall("notAccessingDOM", "cookieVal", ["hideinfo"], ['hideinfo'], cookieVal('hideinfo')) != 'true') ? 'Show' : 'Hide'], toggleInfo((confixFunCall("notAccessingDOM", "cookieVal", ["hideinfo"], ['hideinfo'], cookieVal('hideinfo')) != 'true') ? 'Show' : 'Hide'));
}
function rand(x) {
  return confixFunCall("notAccessingDOM", "Math.round", ["Math.random() * x"], [confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * x], Math.round(confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * x));
}
function reshuffle() {
  var maxRand = 400 - 75;
  var n = confixFunCall("notAccessingDOM", "dg", ["thumbscount"], ['thumbscount'], dg('thumbscount')).value;
  for (var i = 0; i < n; i++) 
    {
      confixFunCall("notAccessingDOM", "dg", ["ThumbInBox + i"], ['ThumbInBox' + i], dg('ThumbInBox' + i)).style.top = confixFunCall("notAccessingDOM", "rand", ["maxRand"], [maxRand], rand(maxRand)) + 'px';
      confixFunCall("notAccessingDOM", "dg", ["ThumbInBox + i"], ['ThumbInBox' + i], dg('ThumbInBox' + i)).style.left = confixFunCall("notAccessingDOM", "rand", ["maxRand"], [maxRand], rand(maxRand)) + 'px';
    }
}
function updateIndic() {
  var v = confixFunCall("notAccessingDOM", "dg", ["indicator"], ['indicator'], dg('indicator')).innerHTML;
  var l = v.length;
  var neck = 52;
  if (confixCondition("l > neck", l > neck)) 
  v = confixFunCall("notAccessingDOM", "v.substring", ["0", "l - 3 * 7"], [0, l - 3 * 7], v.substring(0, l - 3 * 7));
  if (confixCondition("(l % 3) == 0", (l % 3) == 0)) 
  confixFunCall("notAccessingDOM", "dg", ["indicator"], ['indicator'], dg('indicator')).innerHTML = '&#149;      ' + v; else confixFunCall("notAccessingDOM", "dg", ["indicator"], ['indicator'], dg('indicator')).innerHTML = '&nbsp; ' + v;
  if (confixCondition("isAjaxing", isAjaxing)) 
  confixFunCall("notAccessingDOM", "setTimeout", ["updateIndic();", "500"], ["updateIndic();", 500], setTimeout("updateIndic();", 500)); else confixFunCall("notAccessingDOM", "dg", ["indicator"], ['indicator'], dg('indicator')).innerHTML = '';
}
function alertContents(http_request) {
  if (confixCondition("http_request.readyState == 4", http_request.readyState == 4)) 
  try {
    if (confixCondition("http_request.status == 200", http_request.status == 200)) 
    {
      AjaxVal = http_request.responseText;
      AjaxVal = confixFunCall("notAccessingDOM", "AjaxVal.substr", ["6", "AjaxVal.length - 13"], [6, AjaxVal.length - 13], AjaxVal.substr(6, AjaxVal.length - 13));
      AjaxValRead = false;
      if (confixCondition("AjaxVal.substr(0, 4) == 'Done'", confixFunCall("notAccessingDOM", "AjaxVal.substr", ["0", "4"], [0, 4], AjaxVal.substr(0, 4)) == 'Done')) 
      {
        confixFunCall("notAccessingDOM", "dg", ["rateStatus"], ['rateStatus'], dg('rateStatus')).innerHTML = 'Your rating saved!';
        confixFunCall("notAccessingDOM", "dg", ["sumRate"], ['sumRate'], dg('sumRate')).innerHTML = AjaxVal.substr(4, AjaxVal.length - 1);
      }
      if (confixCondition("AjaxVal.substr(0, 6) == 'FakeWV'", confixFunCall("notAccessingDOM", "AjaxVal.substr", ["0", "6"], [0, 6], AjaxVal.substr(0, 6)) == 'FakeWV')) 
      {
        confixFunCall("notAccessingDOM", "dg", ["wvwimg"], ['wvwimg'], dg('wvwimg')).src = "wv.php?rand=" + confixFunCall("notAccessingDOM", "rand", ["10000000"], [10000000], rand(10000000));
        md5 = confixFunCall("notAccessingDOM", "AjaxVal.substr", ["6", "27"], [6, 27], AjaxVal.substr(6, 27));
      }
      if (confixCondition("AjaxVal.substr(0, 6) == 'TrueWV'", confixFunCall("notAccessingDOM", "AjaxVal.substr", ["0", "6"], [0, 6], AjaxVal.substr(0, 6)) == 'TrueWV')) 
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
  if (confixCondition("window.XMLHttpRequest", window.XMLHttpRequest)) 
  {
    http_request = new XMLHttpRequest();
    if (confixCondition("http_request.overrideMimeType", http_request.overrideMimeType)) 
    confixFunCall("notAccessingDOM", "http_request.overrideMimeType", ["text/xml"], ['text/xml'], http_request.overrideMimeType('text/xml'));
  } else if (confixCondition("window.ActiveXObject", window.ActiveXObject)) 
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
  if (confixCondition("!http_request", !http_request)) 
  {
    confixFunCall("notAccessingDOM", "alert", ["Giving up :( Cannot create an XMLHTTP instance"], ['Giving up :( Cannot create an XMLHTTP instance'], alert('Giving up :( Cannot create an XMLHTTP instance'));
    return false;
  }
  http_request.onreadystatechange = function() {
  try {
    confixFunCall("notAccessingDOM", "alertContents", ["http_request"], [http_request], alertContents(http_request));
  }  catch (e) {
}
};
  confixFunCall("notAccessingDOM", "http_request.open", ["GET", "url", "true"], ['GET', url, true], http_request.open('GET', url, true));
  confixFunCall("notAccessingDOM", "http_request.send", ["null"], [null], http_request.send(null));
}
function SaveRating(pid, rate) {
  if (confixCondition("rate == 0", rate == 0)) 
  {
    confixFunCall("notAccessingDOM", "alert", ["Select your rate among the other options!"], ['Select your rate among the other options!'], alert('Select your rate among the other options!'));
    return;
  }
  isAjaxing = true;
  confixFunCall("notAccessingDOM", "dg", ["rateStatus"], ['rateStatus'], dg('rateStatus')).innerHTML = 'Saving your rate ';
  confixFunCall("notAccessingDOM", "updateIndic", [], [], updateIndic());
  confixFunCall("notAccessingDOM", "makeRequest", ["./?cmd=rate&p= + pid + &rate= + rate + &r= + Math.round(Math.random() * 100000)"], ["./?cmd=rate&p=" + pid + "&rate=" + rate + "&r=" + confixFunCall("notAccessingDOM", "Math.round", ["Math.random() * 100000"], [confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * 100000], Math.round(confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * 100000))], makeRequest("./?cmd=rate&p=" + pid + "&rate=" + rate + "&r=" + confixFunCall("notAccessingDOM", "Math.round", ["Math.random() * 100000"], [confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * 100000], Math.round(confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * 100000))));
}
function prepareBody() {
  try {
    confixFunCall("notAccessingDOM", "reToggleInfo", [], [], reToggleInfo());
  }  catch (e) {
}
  try {
    isAjaxing = true;
    confixFunCall("notAccessingDOM", "makeRequest", ["./?cmd=wvcheck&md5= + md5.substr(0, 20) + &r= + Math.round(Math.random() * 100000)"], ["./?cmd=wvcheck&md5=" + confixFunCall("notAccessingDOM", "md5.substr", ["0", "20"], [0, 20], md5.substr(0, 20)) + "&r=" + Math.round(confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * 100000)], makeRequest("./?cmd=wvcheck&md5=" + confixFunCall("notAccessingDOM", "md5.substr", ["0", "20"], [0, 20], md5.substr(0, 20)) + "&r=" + Math.round(confixFunCall("notAccessingDOM", "Math.random", [], [], Math.random()) * 100000)));
  }  catch (e) {
}
}
function confirmDelete(x) {
  return confixFunCall("notAccessingDOM", "confirm", ["Are you sure you want to delete  + x + ?"], ['Are you sure you want to delete "' + x + '"?'], confirm('Are you sure you want to delete "' + x + '"?'));
}
function hideElem(x) {
  try {
    confixFunCall("notAccessingDOM", "dg", ["x"], [x], dg(x)).style.display = 'none';
  }  catch (e) {
}
}
function showElem(x) {
  try {
    confixFunCall("notAccessingDOM", "dg", ["x"], [x], dg(x)).style.display = 'block';
  }  catch (e) {
}
}
function inlineElem(x) {
  try {
    confixFunCall("notAccessingDOM", "dg", ["x"], [x], dg(x)).style.display = 'inline';
  }  catch (e) {
}
}
function tableRowElem(x) {
  try {
    confixFunCall("notAccessingDOM", "dg", ["x"], [x], dg(x)).style;
    confixFunCall("notAccessingDOM", "dg", ["x"], [x], dg(x)).style.display = 'table-row';
  }  catch (e) {
  if (confixCondition("dg(x)", dg(x))) 
  confixFunCall("notAccessingDOM", "dg", ["x"], [x], dg(x)).style.display = 'inline';
}
}
function checkWV() {
  re = /^\d{5}$/;
  if (confixCondition("!re.test(dg('wvinput').value)", !confixFunCall("notAccessingDOM", "re.test", ["dg(wvinput).value"], [confixFunCall("notAccessingDOM", "dg", ["wvinput"], ['wvinput'], dg('wvinput')).value], re.test(confixFunCall("notAccessingDOM", "dg", ["wvinput"], ['wvinput'], dg('wvinput')).value)))) 
  {
    confixFunCall("notAccessingDOM", "alert", ["Word Verification box should have an string of length 5 with digits"], ['Word Verification box should have an string of length 5 with digits'], alert('Word Verification box should have an string of length 5 with digits'));
    return false;
  }
  if (confixCondition("dg('cmntTextArea').value.length == 0", confixFunCall("notAccessingDOM", "dg", ["cmntTextArea"], ['cmntTextArea'], dg('cmntTextArea')).value.length == 0)) 
  {
    confixFunCall("notAccessingDOM", "alert", ["Empty comment is not allowed!"], ['Empty comment is not allowed!'], alert('Empty comment is not allowed!'));
    return false;
  }
  return true;
}
function doReply(x) {
  x = confixFunCall("notAccessingDOM", "parseInt", ["x"], [x], parseInt(x));
  confixFunCall("notAccessingDOM", "dg", ["cmntReply"], ['cmntReply'], dg('cmntReply')).value = x;
  confixFunCall("notAccessingDOM", "dg('viewComment').setAttribute", ["href", "# + x"], ['href', '#' + x], confixFunCall("notAccessingDOM", "dg", ["viewComment"], ['viewComment'], dg('viewComment')).setAttribute('href', '#' + x));
  if (confixCondition("x == 0", x == 0)) 
  confixFunCall("notAccessingDOM", "hideElem", ["ComReplyTR"], ['ComReplyTR'], hideElem('ComReplyTR')); else confixFunCall("notAccessingDOM", "tableRowElem", ["ComReplyTR"], ['ComReplyTR'], tableRowElem('ComReplyTR'));
}
function toggle(w, c, t) {
  var block = (confixFunCall("notAccessingDOM", "dg", ["w"], [w], dg(w)).style.display == 'block');
  confixFunCall("notAccessingDOM", "dg", ["w"], [w], dg(w)).style.display = (block) ? 'none' : 'block';
  confixFunCall("notAccessingDOM", "dg", ["c"], [c], dg(c)).style.display = (!block) ? 'none' : 'block';
  t.innerHTML = (!block) ? "Hide'em again" : "Show'em All";
}
function ss_next() {
  ss_cur++;
  confixFunCall("notAccessingDOM", "ss_update", [], [], ss_update());
}
function ss_prev() {
  ss_cur--;
  confixFunCall("notAccessingDOM", "ss_update", [], [], ss_update());
}
function ss_update() {
  ss_cur = confixFunCall("notAccessingDOM", "Math.max", ["ss_cur", "0"], [ss_cur, 0], Math.max(ss_cur, 0));
  if (confixCondition("ss_cur >= ss_date.length", ss_cur >= ss_date.length)) 
  {
    confixFunCall("notAccessingDOM", "hideElem", ["ss_link2"], ['ss_link2'], hideElem('ss_link2'));
    confixFunCall("notAccessingDOM", "showElem", ["ss_theend"], ['ss_theend'], showElem('ss_theend'));
    ss_cur = ss_date.length;
    confixFunCall("notAccessingDOM", "dg", ["ss_n"], ['ss_n'], dg('ss_n')).innerHTML = "Final";
    if (confixCondition("ss_play", ss_play)) 
    confixFunCall("notAccessingDOM", "ss_playpause", [], [], ss_playpause());
  } else {
    confixFunCall("notAccessingDOM", "hideElem", ["ss_theend"], ['ss_theend'], hideElem('ss_theend'));
    confixFunCall("notAccessingDOM", "inlineElem", ["ss_link2"], ['ss_link2'], inlineElem('ss_link2'));
    ss_loaded = (confixFunCall("notAccessingDOM", "dg", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src == ss_src[ss_cur]);
    link = ".?p=" + ss_pid[ss_cur];
    src = ss_src[ss_cur];
    src = ss_smaller ? confixFunCall("notAccessingDOM", "src_smaller", ["src"], [src], src_smaller(src)) : src;
    confixFunCall("notAccessingDOM", "dg", ["ss_date"], ['ss_date'], dg('ss_date')).innerHTML = ss_date[ss_cur];
    confixFunCall("notAccessingDOM", "dg", ["ss_title"], ['ss_title'], dg('ss_title')).innerHTML = ss_ttl[ss_cur];
    confixFunCall("notAccessingDOM", "dg", ["ss_desc"], ['ss_desc'], dg('ss_desc')).innerHTML = ss_desc[ss_cur];
    confixFunCall("notAccessingDOM", "dg", ["ss_n"], ['ss_n'], dg('ss_n')).innerHTML = 1 + ss_cur;
    confixFunCall("notAccessingDOM", "dg('ss_link1').setAttribute", ["href", "link"], ['href', link], confixFunCall("notAccessingDOM", "dg", ["ss_link1"], ['ss_link1'], dg('ss_link1')).setAttribute('href', link));
    confixFunCall("notAccessingDOM", "dg('ss_link2').setAttribute", ["href", "link"], ['href', link], confixFunCall("notAccessingDOM", "dg", ["ss_link2"], ['ss_link2'], dg('ss_link2')).setAttribute('href', link));
    if (confixCondition("ss_cur < ss_date.length", ss_cur < ss_date.length)) 
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
  confixFunCall("notAccessingDOM", "dg", ["ss_playpause_link"], ['ss_playpause_link'], dg('ss_playpause_link')).innerHTML = (ss_play) ? 'Pause it' : 'Play it';
  confixFunCall("notAccessingDOM", "dg", ["ss_playpause_link2"], ['ss_playpause_link2'], dg('ss_playpause_link2')).innerHTML = confixFunCall("notAccessingDOM", "dg", ["ss_playpause_link"], ['ss_playpause_link'], dg('ss_playpause_link')).innerHTML;
  confixFunCall("notAccessingDOM", "ss_run", [], [], ss_run());
}
function src_smaller(x) {
  if (confixCondition("x.charAt(x.length - 1) == \")\"", confixFunCall("notAccessingDOM", "x.charAt", ["x.length - 1"], [x.length - 1], x.charAt(x.length - 1)) == ")")) 
  x = confixFunCall("notAccessingDOM", "x.substr", ["3", "x.length - 4"], [3, x.length - 4], x.substr(3, x.length - 4));
  return confixFunCall("notAccessingDOM", "x.substr", ["0", "x.length - 5"], [0, x.length - 5], x.substr(0, x.length - 5)) + "4.jpg";
}
function ss_toggleSmaller() {
  ss_smaller = !ss_smaller;
  confixFunCall("notAccessingDOM", "dg", ["ss_smaller_link"], ['ss_smaller_link'], dg('ss_smaller_link')).innerHTML = (ss_smaller) ? 'Larger Size' : 'Smaller Size';
  confixFunCall("notAccessingDOM", "dg", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src = ss_smaller ? confixFunCall("notAccessingDOM", "src_smaller", ["dg(ss_photo).src"], [confixFunCall("notAccessingDOM", "dg", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src], src_smaller(confixFunCall("notAccessingDOM", "dg", ["ss_photo"], ['ss_photo'], dg('ss_photo')).src)) : ss_src[ss_cur];
}
function ss_run() {
  if (confixCondition("(ss_play) && (ss_awaits <= 0)", (ss_play) && (ss_awaits <= 0))) 
  {
    ss_awaits++;
    var lookup = confixFunCall("notAccessingDOM", "parseInt", ["dg(ss_refresh).value"], [confixFunCall("notAccessingDOM", "dg", ["ss_refresh"], ['ss_refresh'], dg('ss_refresh')).value], parseInt(confixFunCall("notAccessingDOM", "dg", ["ss_refresh"], ['ss_refresh'], dg('ss_refresh')).value));
    confixFunCall("notAccessingDOM", "setTimeout", ["ss_slideshow();", "lookup"], ["ss_slideshow();", lookup], setTimeout("ss_slideshow();", lookup));
  }
}
function ss_slideshow() {
  ss_awaits--;
  if (confixCondition("ss_play == 1 && ss_loaded", ss_play == 1 && ss_loaded)) 
  {
    ss_cur++;
    confixFunCall("notAccessingDOM", "ss_update", [], [], ss_update());
  }
  confixFunCall("notAccessingDOM", "ss_run", [], [], ss_run());
}
