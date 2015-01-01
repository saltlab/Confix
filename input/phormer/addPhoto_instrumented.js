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
var AjaxVal = confixWrapper("initvar", "var AjaxVal = new Array()", [""], [], "", new Array());
var seedArr = confixWrapper("initvar", "var seedArr = new Array()", [""], [], "", new Array());
var ImgW = confixWrapper("initvar", "var ImgW = 0", [""], [], "", 0);
var ImgH = confixWrapper("initvar", "var ImgH = 0", [""], [], "", 0);
var ImgPath = confixWrapper("initvar", "var ImgPath = \"\"", [""], [], "", "");
var ImgPath9 = confixWrapper("initvar", "var ImgPath9 = \"\"", [""], [], "", "");
var hasgd = confixWrapper("initvar", "var hasgd = true", [""], [], "", true);
var hasexif = confixWrapper("initvar", "var hasexif = true", [""], [], "", true);
var pcupload = confixWrapper("initvar", "var pcupload = 0", [""], [], "", 0);
var AjaxDelay = confixWrapper("initvar", "var AjaxDelay = 1500", [""], [], "", 1500);
var isFakeDateTaken = confixWrapper("initvar", "var isFakeDateTaken = false", [""], [], "", false);
var FileName;
function setFakeDate(wat) {
  isFakeDateTaken = confixWrapper("infix", "isFakeDateTaken = wat", [""], [], "setFakeDate", wat);
}
function alertContents(http_request, seed) {
  if (confixWrapper("condition", "http_request.readyState == 4", [""], [], "alertContents", http_request.readyState == 4)) 
  try {
    if (confixWrapper("condition", "http_request.status == 200", [""], [], "alertContents", http_request.status == 200)) 
    {
      AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "alertContents", seedId(seed))] = confixWrapper("infix", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"alertContents\", seedId(seed))] = http_request.responseText", [""], [], "alertContents", http_request.responseText);
      AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "alertContents", seedId(seed))] = confixWrapper("infix", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"alertContents\", seedId(seed))] = AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"alertContents\", seedId(seed))].substr(6, AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"alertContents\", seedId(seed))].length - 13)", [""], [], "alertContents", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "alertContents", seedId(seed))].substr(6, AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "alertContents", seedId(seed))].length - 13));
    }
  }  catch (e) {
}
}
function makeRequest(url, seed) {
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
    return confixWrapper("return", "return false;", [""], [], "makeRequest", false);
  }
  http_request.onreadystatechange = confixWrapper("infix", "http_request.onreadystatechange = function() {  confixWrapper(\"functionCall\", \"alertContents(http_request, seed)\", [\"http_request\", \"seed\"], [http_request, seed], \"\", alertContents(http_request, seed));}", [""], [], "makeRequest", function() {
  confixWrapper("functionCall", "alertContents(http_request, seed)", ["http_request", "seed"], [http_request, seed], "", alertContents(http_request, seed));
});
  confixWrapper("functionCall", "http_request.open('GET', url, true)", ["GET", "url", "true"], ['GET', url, true], "makeRequest", http_request.open('GET', url, true));
  confixWrapper("functionCall", "http_request.send(null)", ["null"], [null], "makeRequest", http_request.send(null));
}
function setExif(seed) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"AjaxVal[seedId(seed)].charAt(0)\", [\"0\"], [0], \"setExif\", AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"setExif\", seedId(seed))].charAt(0)) != '!'", [""], [], "setExif", confixWrapper("functionCall", "AjaxVal[seedId(seed)].charAt(0)", ["0"], [0], "setExif", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "setExif", seedId(seed))].charAt(0)) != '!')) 
  confixWrapper("functionCall", "AttemptEXIF(seed, ImgPath9)", ["seed", "ImgPath9"], [seed, ImgPath9], "setExif", AttemptEXIF(seed, ImgPath9)); else {
    av = confixWrapper("infix", "av = AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"setExif\", seedId(seed))]", [""], [], "setExif", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "setExif", seedId(seed))]);
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"av.indexOf(';')\", [\";\"], [';'], \"setExif\", av.indexOf(';')) == av.length", [""], [], "setExif", confixWrapper("functionCall", "av.indexOf(';')", [";"], [';'], "setExif", av.indexOf(';')) == av.length)) 
    return;
    var exifDate = confixWrapper("initvar", "var exifDate = confixWrapper(\"functionCall\", \"av.substr(1, av.indexOf(';') - 1)\", [\"1\", \"av.indexOf(;) - 1\"], [1, confixWrapper(\"functionCall\", \"av.indexOf(';')\", [\";\"], [';'], \"setExif\", av.indexOf(';')) - 1], \"setExif\", av.substr(1, confixWrapper(\"functionCall\", \"av.indexOf(';')\", [\";\"], [';'], \"setExif\", av.indexOf(';')) - 1))", [""], [], "setExif", confixWrapper("functionCall", "av.substr(1, av.indexOf(';') - 1)", ["1", "av.indexOf(;) - 1"], [1, confixWrapper("functionCall", "av.indexOf(';')", [";"], [';'], "setExif", av.indexOf(';')) - 1], "setExif", av.substr(1, confixWrapper("functionCall", "av.indexOf(';')", [";"], [';'], "setExif", av.indexOf(';')) - 1)));
    var exifInfo = confixWrapper("initvar", "var exifInfo = confixWrapper(\"functionCall\", \"av.substr(av.indexOf(';') + 1, av.length)\", [\"av.indexOf(;) + 1\", \"av.length\"], [confixWrapper(\"functionCall\", \"av.indexOf(';')\", [\";\"], [';'], \"setExif\", av.indexOf(';')) + 1, av.length], \"setExif\", av.substr(confixWrapper(\"functionCall\", \"av.indexOf(';')\", [\";\"], [';'], \"setExif\", av.indexOf(';')) + 1, av.length))", [""], [], "setExif", confixWrapper("functionCall", "av.substr(av.indexOf(';') + 1, av.length)", ["av.indexOf(;) + 1", "av.length"], [confixWrapper("functionCall", "av.indexOf(';')", [";"], [';'], "setExif", av.indexOf(';')) + 1, av.length], "setExif", av.substr(confixWrapper("functionCall", "av.indexOf(';')", [";"], [';'], "setExif", av.indexOf(';')) + 1, av.length)));
    if (confixWrapper("condition", "exifInfo.length", [""], [], "setExif", exifInfo.length)) 
    {
      if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"dg('photoinfo')\", [\"photoinfo\"], ['photoinfo'], \"setExif\", dg('photoinfo')).value != \"\") && (confixWrapper(\"functionCall\", \"dg('photoinfo')\", [\"photoinfo\"], ['photoinfo'], \"setExif\", dg('photoinfo')).value != exifInfo)", [""], [], "setExif", (confixWrapper("functionCall", "dg('photoinfo')", ["photoinfo"], ['photoinfo'], "setExif", dg('photoinfo')).value != "") && (confixWrapper("functionCall", "dg('photoinfo')", ["photoinfo"], ['photoinfo'], "setExif", dg('photoinfo')).value != exifInfo))) 
      {
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"confirm('Replace current photo info with EXIF info?')\", [\"Replace current photo info with EXIF info?\"], ['Replace current photo info with EXIF info?'], \"setExif\", confirm('Replace current photo info with EXIF info?'))", [""], [], "setExif", confixWrapper("functionCall", "confirm('Replace current photo info with EXIF info?')", ["Replace current photo info with EXIF info?"], ['Replace current photo info with EXIF info?'], "setExif", confirm('Replace current photo info with EXIF info?')))) 
        confixWrapper("functionCall", "dg('photoinfo')", ["photoinfo"], ['photoinfo'], "setExif", dg('photoinfo')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('photoinfo')\", [\"photoinfo\"], ['photoinfo'], \"setExif\", dg('photoinfo')).value = exifInfo", [""], [], "setExif", exifInfo);
      } else confixWrapper("functionCall", "dg('photoinfo')", ["photoinfo"], ['photoinfo'], "setExif", dg('photoinfo')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('photoinfo')\", [\"photoinfo\"], ['photoinfo'], \"setExif\", dg('photoinfo')).innerHTML = exifInfo", [""], [], "setExif", exifInfo);
    }
    if (confixWrapper("condition", "exifDate.length", [""], [], "setExif", exifDate.length)) 
    if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"setExif\", dg('datetake')).value != \"\") && (confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"setExif\", dg('datetake')).value != exifDate) && !isFakeDateTaken", [""], [], "setExif", (confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "setExif", dg('datetake')).value != "") && (confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "setExif", dg('datetake')).value != exifDate) && !isFakeDateTaken)) 
    {
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"confirm('Replace current Date taken (' + dg('datetake').value + ') with EXIF date (' + exifDate + ')?')\", [\"Replace current Date taken ( + dg(datetake).value + ) with EXIF date ( + exifDate + )?\"], ['Replace current Date taken (' + confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"setExif\", dg('datetake')).value + ') with EXIF date (' + exifDate + ')?'], \"setExif\", confirm('Replace current Date taken (' + confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"setExif\", dg('datetake')).value + ') with EXIF date (' + exifDate + ')?'))", [""], [], "setExif", confixWrapper("functionCall", "confirm('Replace current Date taken (' + dg('datetake').value + ') with EXIF date (' + exifDate + ')?')", ["Replace current Date taken ( + dg(datetake).value + ) with EXIF date ( + exifDate + )?"], ['Replace current Date taken (' + confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "setExif", dg('datetake')).value + ') with EXIF date (' + exifDate + ')?'], "setExif", confirm('Replace current Date taken (' + confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "setExif", dg('datetake')).value + ') with EXIF date (' + exifDate + ')?')))) 
      confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "setExif", dg('datetake')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"setExif\", dg('datetake')).value = exifDate", [""], [], "setExif", exifDate);
    } else confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "setExif", dg('datetake')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"setExif\", dg('datetake')).value = exifDate", [""], [], "setExif", exifDate);
  }
}
function imageUploaded(indeed, seed) {
  if (confixWrapper("condition", "hasgd", [""], [], "imageUploaded", hasgd)) 
  {
    confixWrapper("functionCall", "hideElem('thumb_note_wrapper_' + seed)", ["thumb_note_wrapper_ + seed"], ['thumb_note_wrapper_' + seed], "imageUploaded", hideElem('thumb_note_wrapper_' + seed));
    confixWrapper("functionCall", "showElem('ThumbnailGenerator')", ["ThumbnailGenerator"], ['ThumbnailGenerator'], "imageUploaded", showElem('ThumbnailGenerator'));
    confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "imageUploaded", dg('thePhoto')).style.backgroundImage = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"imageUploaded\", dg('thePhoto')).style.backgroundImage = \"\"", [""], [], "imageUploaded", "");
    confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "imageUploaded", dg('thePhoto')).style.backgroundImage = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"imageUploaded\", dg('thePhoto')).style.backgroundImage = \"url('\" + ImgPath + \"')\"", [""], [], "imageUploaded", "url('" + ImgPath + "')");
    confixWrapper("functionCall", "dg('thumbPrev')", ["thumbPrev"], ['thumbPrev'], "imageUploaded", dg('thumbPrev')).src = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumbPrev')\", [\"thumbPrev\"], ['thumbPrev'], \"imageUploaded\", dg('thumbPrev')).src = ImgPath", [""], [], "imageUploaded", ImgPath);
    confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "imageUploaded", dg('thePhoto')).style.width = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"imageUploaded\", dg('thePhoto')).style.width = ImgW + 'px'", [""], [], "imageUploaded", ImgW + 'px');
    confixWrapper("functionCall", "dg('thePhoto')", ["thePhoto"], ['thePhoto'], "imageUploaded", dg('thePhoto')).style.height = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thePhoto')\", [\"thePhoto\"], ['thePhoto'], \"imageUploaded\", dg('thePhoto')).style.height = ImgH + 'px'", [""], [], "imageUploaded", ImgH + 'px');
    confixWrapper("functionCall", "dg('kines_l')", ["kines_l"], ['kines_l'], "imageUploaded", dg('kines_l')).style.height = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('kines_l')\", [\"kines_l\"], ['kines_l'], \"imageUploaded\", dg('kines_l')).style.height = ImgH + 'px'", [""], [], "imageUploaded", ImgH + 'px');
    confixWrapper("functionCall", "dg('kines_r')", ["kines_r"], ['kines_r'], "imageUploaded", dg('kines_r')).style.height = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('kines_r')\", [\"kines_r\"], ['kines_r'], \"imageUploaded\", dg('kines_r')).style.height = ImgH + 'px'", [""], [], "imageUploaded", ImgH + 'px');
    if (confixWrapper("condition", "indeed", [""], [], "imageUploaded", indeed)) 
    confixWrapper("functionCall", "AttemptEXIF(seed, ImgPath9)", ["seed", "ImgPath9"], [seed, ImgPath9], "imageUploaded", AttemptEXIF(seed, ImgPath9));
    confixWrapper("functionCall", "rethumb()", [], [], "imageUploaded", rethumb());
  } else {
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "imageUploaded", dg('thumb_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"imageUploaded\", dg('thumb_note_' + seed)).innerHTML = \"Photo catched but phpgd not found! \" + \"(<a class=\"q\" onclick=\"ShowHelp('GD Not Found', event)\"> ? </a>)\"", [""], [], "imageUploaded", "Photo catched but phpgd not found! " + "(<a class=\"q\" onclick=\"ShowHelp('GD Not Found', event)\"> ? </a>)");
  }
  confixWrapper("functionCall", "dg('theImgPath')", ["theImgPath"], ['theImgPath'], "imageUploaded", dg('theImgPath')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('theImgPath')\", [\"theImgPath\"], ['theImgPath'], \"imageUploaded\", dg('theImgPath')).value = ImgPath", [""], [], "imageUploaded", ImgPath);
  confixWrapper("functionCall", "dg('finallyAdd')", ["finallyAdd"], ['finallyAdd'], "imageUploaded", dg('finallyAdd')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('finallyAdd')\", [\"finallyAdd\"], ['finallyAdd'], \"imageUploaded\", dg('finallyAdd')).style.display = 'inline'", [""], [], "imageUploaded", 'inline');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('PhotoTitleId')\", [\"PhotoTitleId\"], ['PhotoTitleId'], \"imageUploaded\", dg('PhotoTitleId')).value.length == 0", [""], [], "imageUploaded", confixWrapper("functionCall", "dg('PhotoTitleId')", ["PhotoTitleId"], ['PhotoTitleId'], "imageUploaded", dg('PhotoTitleId')).value.length == 0)) 
  confixWrapper("functionCall", "dg('PhotoTitleId')", ["PhotoTitleId"], ['PhotoTitleId'], "imageUploaded", dg('PhotoTitleId')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PhotoTitleId')\", [\"PhotoTitleId\"], ['PhotoTitleId'], \"imageUploaded\", dg('PhotoTitleId')).value = FileName.substr(0, FileName.length - 4)", [""], [], "imageUploaded", FileName.substr(0, FileName.length - 4));
}
function AttemptEXIF(_seed, _ImgPath9) {
  seed = confixWrapper("infix", "seed = _seed", [""], [], "AttemptEXIF", _seed);
  ImgPath9 = confixWrapper("infix", "ImgPath9 = _ImgPath9", [""], [], "AttemptEXIF", _ImgPath9);
  ImgPath = confixWrapper("infix", "ImgPath = confixWrapper(\"functionCall\", \"ImgPath9.substr(0, ImgPath9.length - 5)\", [\"0\", \"ImgPath9.length - 5\"], [0, ImgPath9.length - 5], \"AttemptEXIF\", ImgPath9.substr(0, ImgPath9.length - 5)) + \"1.jpg\"", [""], [], "AttemptEXIF", confixWrapper("functionCall", "ImgPath9.substr(0, ImgPath9.length - 5)", ["0", "ImgPath9.length - 5"], [0, ImgPath9.length - 5], "AttemptEXIF", ImgPath9.substr(0, ImgPath9.length - 5)) + "1.jpg");
  if (confixWrapper("condition", "hasexif", [""], [], "AttemptEXIF", hasexif)) 
  {
    AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "AttemptEXIF", seedId(seed))] = confixWrapper("infix", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"AttemptEXIF\", seedId(seed))] = \"\"", [""], [], "AttemptEXIF", "");
    confixWrapper("functionCall", "Ajaxify(\"exif\", seed)", ["exif", "seed"], ["exif", seed], "AttemptEXIF", Ajaxify("exif", seed));
    confixWrapper("functionCall", "setTimeout(\"setExif(seed)\", AjaxDelay / 2)", ["setExif(seed)", "AjaxDelay / 2"], ["setExif(seed)", AjaxDelay / 2], "AttemptEXIF", setTimeout("setExif(seed)", AjaxDelay / 2));
  }
}
function Ajaxify(action, seed) {
  var str = confixWrapper("initvar", "var str = \"upload.php?mod=\" + action + \"&seed=\" + seed", [""], [], "Ajaxify", "upload.php?mod=" + action + "&seed=" + seed);
  if (confixWrapper("condition", "action == \"exif\"", [""], [], "Ajaxify", action == "exif")) 
  str += "&file=" + ImgPath9;
  confixWrapper("functionCall", "makeRequest(str + \"&r=\" + Math.round(Math.random() * 100000), seed)", ["str + &r= + Math.round(Math.random() * 100000)", "seed"], [str + "&r=" + confixWrapper("functionCall", "Math.round(Math.random() * 100000)", ["Math.random() * 100000"], [confixWrapper("functionCall", "Math.random()", [], [], "Ajaxify", Math.random()) * 100000], "Ajaxify", Math.round(confixWrapper("functionCall", "Math.random()", [], [], "Ajaxify", Math.random()) * 100000)), seed], "Ajaxify", makeRequest(str + "&r=" + confixWrapper("functionCall", "Math.round(Math.random() * 100000)", ["Math.random() * 100000"], [confixWrapper("functionCall", "Math.random()", [], [], "Ajaxify", Math.random()) * 100000], "Ajaxify", Math.round(confixWrapper("functionCall", "Math.random()", [], [], "Ajaxify", Math.random()) * 100000)), seed));
}
function writeYet(seed, draft) {
  confixWrapper("functionCall", "Ajaxify(\"listen\", seed)", ["listen", "seed"], ["listen", seed], "writeYet", Ajaxify("listen", seed));
  if (confixWrapper("condition", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "")) 
  {
    confixWrapper("functionCall", "setTimeout(\"writeYet('\" + seed + \"',draft)\", AjaxDelay)", ["writeYet( + seed + ,draft)", "AjaxDelay"], ["writeYet('" + seed + "',draft)", AjaxDelay], "writeYet", setTimeout("writeYet('" + seed + "',draft)", AjaxDelay));
    return;
  }
  var AjaxProp = confixWrapper("initvar", "var AjaxProp = confixWrapper(\"functionCall\", \"AjaxVal[seedId(seed)].substr(6, AjaxVal[seedId(seed)].length)\", [\"6\", \"AjaxVal[seedId(seed)].length\"], [6, AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))].length], \"writeYet\", AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))].substr(6, AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))].length))", [""], [], "writeYet", confixWrapper("functionCall", "AjaxVal[seedId(seed)].substr(6, AjaxVal[seedId(seed)].length)", ["6", "AjaxVal[seedId(seed)].length"], [6, AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))].length], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))].substr(6, AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))].length)));
  var AjaxTkn = confixWrapper("initvar", "var AjaxTkn = new Array()", [""], [], "writeYet", new Array());
  var c, i;
  AjaxProp += ";";
  for (i = confixWrapper("infix", "i = 0", [""], [], "writeYet", 0); confixWrapper("loopCondition", "(c = confixWrapper(\"functionCall\", \"AjaxProp.indexOf(';')\", [\";\"], [';'], \"writeYet\", AjaxProp.indexOf(';'))) != -1", ["c", "confixWrapper", "AjaxProp", "indexOf"], [c, confixWrapper, AjaxProp, indexOf], "writeYet", (c = confixWrapper("infix", "c = confixWrapper(\"functionCall\", \"AjaxProp.indexOf(';')\", [\";\"], [';'], \"writeYet\", AjaxProp.indexOf(';'))", [""], [], "writeYet", confixWrapper("functionCall", "AjaxProp.indexOf(';')", [";"], [';'], "writeYet", AjaxProp.indexOf(';')))) != -1); i++) 
    {
      AjaxTkn[i] = confixWrapper("infix", "AjaxTkn[i] = confixWrapper(\"functionCall\", \"AjaxProp.substr(0, c)\", [\"0\", \"c\"], [0, c], \"writeYet\", AjaxProp.substr(0, c))", [""], [], "writeYet", confixWrapper("functionCall", "AjaxProp.substr(0, c)", ["0", "c"], [0, c], "writeYet", AjaxProp.substr(0, c)));
      AjaxProp = confixWrapper("infix", "AjaxProp = confixWrapper(\"functionCall\", \"AjaxProp.substr(c + 1)\", [\"c + 1\"], [c + 1], \"writeYet\", AjaxProp.substr(c + 1))", [""], [], "writeYet", confixWrapper("functionCall", "AjaxProp.substr(c + 1)", ["c + 1"], [c + 1], "writeYet", AjaxProp.substr(c + 1)));
    }
  AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] = confixWrapper("infix", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] = AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))].substr(0, 5)", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))].substr(0, 5));
  if (confixWrapper("condition", "(AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"ERROR\") || (AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"DELED\")", [""], [], "writeYet", (AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "ERROR") || (AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "DELED"))) 
  {
    if (confixWrapper("condition", "!draft", [""], [], "writeYet", !draft)) 
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "writeYet", dg('thumb_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"writeYet\", dg('thumb_note_' + seed)).innerHTML = \"An Error occured during upload...\"", [""], [], "writeYet", "An Error occured during upload...");
    confixWrapper("functionCall", "hideElem('upload_uploading_' + seed)", ["upload_uploading_ + seed"], ['upload_uploading_' + seed], "writeYet", hideElem('upload_uploading_' + seed));
    confixWrapper("functionCall", "showElem('upload_iframe_' + seed)", ["upload_iframe_ + seed"], ['upload_iframe_' + seed], "writeYet", showElem('upload_iframe_' + seed));
    confixWrapper("functionCall", "Ajaxify(\"delphr\", seed)", ["delphr", "seed"], ["delphr", seed], "writeYet", Ajaxify("delphr", seed));
    AV = confixWrapper("infix", "AV = AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] = \"\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] = confixWrapper("infix", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] = \"\"", [""], [], "writeYet", ""));
    return;
  }
  if (confixWrapper("condition", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"EMPTY\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "EMPTY")) 
  {
    if (confixWrapper("condition", "!draft", [""], [], "writeYet", !draft)) 
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "writeYet", dg('thumb_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"writeYet\", dg('thumb_note_' + seed)).innerHTML = ((pcupload) ? \"Uploading photo\" : \"Connecting the server\") + \"... Please, wait!\"", [""], [], "writeYet", ((pcupload) ? "Uploading photo" : "Connecting the server") + "... Please, wait!");
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('upload_uploading_txt_' + seed)\", [\"upload_uploading_txt_ + seed\"], ['upload_uploading_txt_' + seed], \"writeYet\", dg('upload_uploading_txt_' + seed))", [""], [], "writeYet", confixWrapper("functionCall", "dg('upload_uploading_txt_' + seed)", ["upload_uploading_txt_ + seed"], ['upload_uploading_txt_' + seed], "writeYet", dg('upload_uploading_txt_' + seed)))) 
    confixWrapper("functionCall", "dg('upload_uploading_txt_' + seed)", ["upload_uploading_txt_ + seed"], ['upload_uploading_txt_' + seed], "writeYet", dg('upload_uploading_txt_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('upload_uploading_txt_' + seed)\", [\"upload_uploading_txt_ + seed\"], ['upload_uploading_txt_' + seed], \"writeYet\", dg('upload_uploading_txt_' + seed)).innerHTML = (pcupload) ? \"Uploading the photo...\" : \"Establishing the connection...\"", [""], [], "writeYet", (pcupload) ? "Uploading the photo..." : "Establishing the connection...");
    confixWrapper("functionCall", "setTimeout(\"writeYet('\" + seed + \"', draft)\", AjaxDelay)", ["writeYet( + seed + , draft)", "AjaxDelay"], ["writeYet('" + seed + "', draft)", AjaxDelay], "writeYet", setTimeout("writeYet('" + seed + "', draft)", AjaxDelay));
    return;
  }
  if (confixWrapper("condition", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"START\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "START")) 
  {
    if (confixWrapper("condition", "!draft", [""], [], "writeYet", !draft)) 
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "writeYet", dg('thumb_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"writeYet\", dg('thumb_note_' + seed)).innerHTML = ((pcupload) ? \"Uploading\" : \"Catching\") + \" photo... Please, wait!\"", [""], [], "writeYet", ((pcupload) ? "Uploading" : "Catching") + " photo... Please, wait!");
    confixWrapper("functionCall", "dg('upload_uploading_txt_' + seed)", ["upload_uploading_txt_ + seed"], ['upload_uploading_txt_' + seed], "writeYet", dg('upload_uploading_txt_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('upload_uploading_txt_' + seed)\", [\"upload_uploading_txt_ + seed\"], ['upload_uploading_txt_' + seed], \"writeYet\", dg('upload_uploading_txt_' + seed)).innerHTML = (pcupload ? \"Uploading\" : \"Catching\") + \" the \" + (draft ? \"file\" : \"photo\") + \"...\"", [""], [], "writeYet", (pcupload ? "Uploading" : "Catching") + " the " + (draft ? "file" : "photo") + "...");
    confixWrapper("functionCall", "setTimeout(\"writeYet('\" + seed + \"', draft)\", AjaxDelay)", ["writeYet( + seed + , draft)", "AjaxDelay"], ["writeYet('" + seed + "', draft)", AjaxDelay], "writeYet", setTimeout("writeYet('" + seed + "', draft)", AjaxDelay));
    return;
  }
  if (confixWrapper("condition", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"THUMB\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "THUMB")) 
  {
    if (confixWrapper("condition", "!draft", [""], [], "writeYet", !draft)) 
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "writeYet", dg('thumb_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"writeYet\", dg('thumb_note_' + seed)).innerHTML = \"Creating Thumbnails ... Please, wait!\"", [""], [], "writeYet", "Creating Thumbnails ... Please, wait!");
    var str = confixWrapper("initvar", "var str = \"Creating Thumbnails \"", [""], [], "writeYet", "Creating Thumbnails ");
    if (confixWrapper("condition", "draft && (i > 1) && (confixWrapper(\"functionCall\", \"parseInt(AjaxTkn[1])\", [\"AjaxTkn[1]\"], [AjaxTkn[1]], \"writeYet\", parseInt(AjaxTkn[1])) > 1)", [""], [], "writeYet", draft && (i > 1) && (confixWrapper("functionCall", "parseInt(AjaxTkn[1])", ["AjaxTkn[1]"], [AjaxTkn[1]], "writeYet", parseInt(AjaxTkn[1])) > 1))) 
    str += " of File \"" + AjaxTkn[2] + "\" (#" + AjaxTkn[0] + " of Total " + AjaxTkn[1] + " files)";
    confixWrapper("functionCall", "dg('upload_uploading_txt_' + seed)", ["upload_uploading_txt_ + seed"], ['upload_uploading_txt_' + seed], "writeYet", dg('upload_uploading_txt_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('upload_uploading_txt_' + seed)\", [\"upload_uploading_txt_ + seed\"], ['upload_uploading_txt_' + seed], \"writeYet\", dg('upload_uploading_txt_' + seed)).innerHTML = str + \"...\"", [""], [], "writeYet", str + "...");
    confixWrapper("functionCall", "setTimeout(\"writeYet('\" + seed + \"', draft)\", AjaxDelay)", ["writeYet( + seed + , draft)", "AjaxDelay"], ["writeYet('" + seed + "', draft)", AjaxDelay], "writeYet", setTimeout("writeYet('" + seed + "', draft)", AjaxDelay));
    return;
  }
  if (confixWrapper("condition", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"UNZIP\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "UNZIP")) 
  {
    if (confixWrapper("condition", "draft", [""], [], "writeYet", draft)) 
    {
      confixWrapper("functionCall", "dg('upload_uploading_txt_' + seed)", ["upload_uploading_txt_ + seed"], ['upload_uploading_txt_' + seed], "writeYet", dg('upload_uploading_txt_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('upload_uploading_txt_' + seed)\", [\"upload_uploading_txt_ + seed\"], ['upload_uploading_txt_' + seed], \"writeYet\", dg('upload_uploading_txt_' + seed)).innerHTML = \"Unzipping... Found \" + AjaxTkn[0] + \" Files...\"", [""], [], "writeYet", "Unzipping... Found " + AjaxTkn[0] + " Files...");
    }
    confixWrapper("functionCall", "setTimeout(\"writeYet('\" + seed + \"', draft)\", AjaxDelay)", ["writeYet( + seed + , draft)", "AjaxDelay"], ["writeYet('" + seed + "', draft)", AjaxDelay], "writeYet", setTimeout("writeYet('" + seed + "', draft)", AjaxDelay));
    return;
  }
  if (confixWrapper("condition", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"writeYet\", seedId(seed))] == \"ENDED\"", [""], [], "writeYet", AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "writeYet", seedId(seed))] == "ENDED")) 
  {
    ImgW = confixWrapper("infix", "ImgW = confixWrapper(\"functionCall\", \"parseInt(AjaxTkn[0])\", [\"AjaxTkn[0]\"], [AjaxTkn[0]], \"writeYet\", parseInt(AjaxTkn[0]))", [""], [], "writeYet", confixWrapper("functionCall", "parseInt(AjaxTkn[0])", ["AjaxTkn[0]"], [AjaxTkn[0]], "writeYet", parseInt(AjaxTkn[0])));
    ImgH = confixWrapper("infix", "ImgH = confixWrapper(\"functionCall\", \"parseInt(AjaxTkn[1])\", [\"AjaxTkn[1]\"], [AjaxTkn[1]], \"writeYet\", parseInt(AjaxTkn[1]))", [""], [], "writeYet", confixWrapper("functionCall", "parseInt(AjaxTkn[1])", ["AjaxTkn[1]"], [AjaxTkn[1]], "writeYet", parseInt(AjaxTkn[1])));
    FileName = confixWrapper("infix", "FileName = AjaxTkn[2]", [""], [], "writeYet", AjaxTkn[2]);
    ImgPath9 = confixWrapper("infix", "ImgPath9 = AjaxTkn[3]", [""], [], "writeYet", AjaxTkn[3]);
    ImgPath = confixWrapper("infix", "ImgPath = confixWrapper(\"functionCall\", \"ImgPath9.substr(0, ImgPath9.length - 5)\", [\"0\", \"ImgPath9.length - 5\"], [0, ImgPath9.length - 5], \"writeYet\", ImgPath9.substr(0, ImgPath9.length - 5)) + \"1.jpg\"", [""], [], "writeYet", confixWrapper("functionCall", "ImgPath9.substr(0, ImgPath9.length - 5)", ["0", "ImgPath9.length - 5"], [0, ImgPath9.length - 5], "writeYet", ImgPath9.substr(0, ImgPath9.length - 5)) + "1.jpg");
    if (confixWrapper("condition", "draft && confixWrapper(\"functionCall\", \"parseInt(AjaxTkn[4])\", [\"AjaxTkn[4]\"], [AjaxTkn[4]], \"writeYet\", parseInt(AjaxTkn[4])) > 1", [""], [], "writeYet", draft && confixWrapper("functionCall", "parseInt(AjaxTkn[4])", ["AjaxTkn[4]"], [AjaxTkn[4]], "writeYet", parseInt(AjaxTkn[4])) > 1)) 
    s = confixWrapper("infix", "s = \"\"\" + FileName + \"\" is uploaded successfully \" + \" and \" + AjaxTkn[4] + \" photos in it saved in Drafts folder!\"", [""], [], "writeYet", "\"" + FileName + "\" is uploaded successfully " + " and " + AjaxTkn[4] + " photos in it saved in Drafts folder!"); else s = confixWrapper("infix", "s = \"The photo \"\" + FileName + \"\" is uploaded successfully \" + \" and is <a href=\"\" + ImgPath9 + \"\">saved</a> in <a href=\"admin.php?page=drafts\">Drafts</a> part!\"", [""], [], "writeYet", "The photo \"" + FileName + "\" is uploaded successfully " + " and is <a href=\"" + ImgPath9 + "\">saved</a> in <a href=\"admin.php?page=drafts\">Drafts</a> part!");
    confixWrapper("functionCall", "dg('upload_note_' + seed)", ["upload_note_ + seed"], ['upload_note_' + seed], "writeYet", dg('upload_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('upload_note_' + seed)\", [\"upload_note_ + seed\"], ['upload_note_' + seed], \"writeYet\", dg('upload_note_' + seed)).innerHTML = s", [""], [], "writeYet", s);
    if (confixWrapper("condition", "!draft", [""], [], "writeYet", !draft)) 
    confixWrapper("functionCall", "imageUploaded(1, seed)", ["1", "seed"], [1, seed], "writeYet", imageUploaded(1, seed));
    confixWrapper("functionCall", "Ajaxify(\"delphr\", seed)", ["delphr", "seed"], ["delphr", seed], "writeYet", Ajaxify("delphr", seed));
    return;
  }
}
function seedId(seed) {
  var n = confixWrapper("initvar", "var n = seedArr.length", [""], [], "seedId", seedArr.length);
  var ret = confixWrapper("initvar", "var ret = -1", [""], [], "seedId", -1);
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "seedId", 0); confixWrapper("loopCondition", "i < n", ["i", "n"], [i, n], "seedId", i < n); i++) 
    if (confixWrapper("condition", "seedArr[i] == seed", [""], [], "seedId", seedArr[i] == seed)) 
    ret = confixWrapper("infix", "ret = i", [""], [], "seedId", i);
  if (confixWrapper("condition", "ret == -1", [""], [], "seedId", ret == -1)) 
  {
    ret = confixWrapper("infix", "ret = n", [""], [], "seedId", n);
    seedArr[n++] = confixWrapper("infix", "seedArr[n++] = seed", [""], [], "seedId", seed);
  }
  return confixWrapper("return", "return ret;", [""], [], "seedId", ret);
}
function uploadSubmitted(theseed, gd, tdraft, pcup) {
  hasgd = confixWrapper("infix", "hasgd = gd", [""], [], "uploadSubmitted", gd);
  seed = confixWrapper("infix", "seed = theseed", [""], [], "uploadSubmitted", theseed);
  draft = confixWrapper("infix", "draft = tdraft", [""], [], "uploadSubmitted", tdraft);
  AjaxVal[confixWrapper("functionCall", "seedId(seed)", ["seed"], [seed], "uploadSubmitted", seedId(seed))] = confixWrapper("infix", "AjaxVal[confixWrapper(\"functionCall\", \"seedId(seed)\", [\"seed\"], [seed], \"uploadSubmitted\", seedId(seed))] = \"\"", [""], [], "uploadSubmitted", "");
  pcupload = confixWrapper("infix", "pcupload = pcup", [""], [], "uploadSubmitted", pcup);
  hearUploading = confixWrapper("infix", "hearUploading = 1", [""], [], "uploadSubmitted", 1);
  try {
    if (confixWrapper("condition", "!draft && confixWrapper(\"functionCall\", \"dg('PhotoTitleId')\", [\"PhotoTitleId\"], ['PhotoTitleId'], \"uploadSubmitted\", dg('PhotoTitleId'))", [""], [], "uploadSubmitted", !draft && confixWrapper("functionCall", "dg('PhotoTitleId')", ["PhotoTitleId"], ['PhotoTitleId'], "uploadSubmitted", dg('PhotoTitleId')))) 
    confixWrapper("functionCall", "dg('PhotoTitleId').focus()", [], [], "uploadSubmitted", confixWrapper("functionCall", "dg('PhotoTitleId')", ["PhotoTitleId"], ['PhotoTitleId'], "uploadSubmitted", dg('PhotoTitleId')).focus());
  }  catch (e) {
}
  if (confixWrapper("condition", "!draft", [""], [], "uploadSubmitted", !draft)) 
  {
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "uploadSubmitted", dg('thumb_note_' + seed)).style.color = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"uploadSubmitted\", dg('thumb_note_' + seed)).style.color = \"#272\"", [""], [], "uploadSubmitted", "#272");
    confixWrapper("functionCall", "dg('thumb_note_' + seed)", ["thumb_note_ + seed"], ['thumb_note_' + seed], "uploadSubmitted", dg('thumb_note_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('thumb_note_' + seed)\", [\"thumb_note_ + seed\"], ['thumb_note_' + seed], \"uploadSubmitted\", dg('thumb_note_' + seed)).innerHTML = \"Initializing the process... Please, wait!\"", [""], [], "uploadSubmitted", "Initializing the process... Please, wait!");
  }
  confixWrapper("functionCall", "dg('upload_uploading_txt_' + seed)", ["upload_uploading_txt_ + seed"], ['upload_uploading_txt_' + seed], "uploadSubmitted", dg('upload_uploading_txt_' + seed)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('upload_uploading_txt_' + seed)\", [\"upload_uploading_txt_ + seed\"], ['upload_uploading_txt_' + seed], \"uploadSubmitted\", dg('upload_uploading_txt_' + seed)).innerHTML = \"Initializing the process...\"", [""], [], "uploadSubmitted", "Initializing the process...");
  confixWrapper("functionCall", "hideElem('upload_iframe_' + seed)", ["upload_iframe_ + seed"], ['upload_iframe_' + seed], "uploadSubmitted", hideElem('upload_iframe_' + seed));
  confixWrapper("functionCall", "showElem('upload_uploading_' + seed)", ["upload_uploading_ + seed"], ['upload_uploading_' + seed], "uploadSubmitted", showElem('upload_uploading_' + seed));
  confixWrapper("functionCall", "setTimeout(\"writeYet('\" + seed + \"', draft)\", AjaxDelay / 2)", ["writeYet( + seed + , draft)", "AjaxDelay / 2"], ["writeYet('" + seed + "', draft)", AjaxDelay / 2], "uploadSubmitted", setTimeout("writeYet('" + seed + "', draft)", AjaxDelay / 2));
}
