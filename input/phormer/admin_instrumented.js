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
  return true;
}
var blured = confixWrapper("initvar", "var blured = false", [""], [], "", false);
var MAX_ADD_BOX = confixWrapper("initvar", "var MAX_ADD_BOX = 20", [""], [], "", 20);
var nowTime;
function PrepareBody() {
  try {
    confixWrapper("functionCall", "dg('newpasswd').focus()", [], [], "PrepareBody", confixWrapper("functionCall", "dg('newpasswd')", ["newpasswd"], ['newpasswd'], "PrepareBody", dg('newpasswd')).focus());
  }  catch (e) {
}
  try {
    confixWrapper("functionCall", "dg('loginAdminPass').focus()", [], [], "PrepareBody", confixWrapper("functionCall", "dg('loginAdminPass')", ["loginAdminPass"], ['loginAdminPass'], "PrepareBody", dg('loginAdminPass')).focus());
  }  catch (e) {
}
  var alla = confixWrapper("initvar", "var alla = confixWrapper(\"functionCall\", \"document.getElementsByTagName('a')\", [\"a\"], ['a'], \"PrepareBody\", document.getElementsByTagName('a'))", [""], [], "PrepareBody", confixWrapper("functionCall", "document.getElementsByTagName('a')", ["a"], ['a'], "PrepareBody", document.getElementsByTagName('a')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "PrepareBody", 0); confixWrapper("loopCondition", "i < alla.length", [""], [], "PrepareBody", i < alla.length); i++) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"alla[i].getAttribute('class')\", [\"class\"], ['class'], \"PrepareBody\", alla[i].getAttribute('class')) == 'q'", ["alla", "i", "where", "alli", "blured", "MAX_ADD_BOX", "nowTime"], [alla, i, where, alli, blured, MAX_ADD_BOX, nowTime], "PrepareBody", confixWrapper("functionCall", "alla[i].getAttribute('class')", ["class"], ['class'], "PrepareBody", alla[i].getAttribute('class')) == 'q')) 
    {
      var where = confixWrapper("initvar", "var where = confixWrapper(\"functionCall\", \"alla[i].getAttribute('onclick')\", [\"onclick\"], ['onclick'], \"PrepareBody\", alla[i].getAttribute('onclick'))", [""], [], "PrepareBody", confixWrapper("functionCall", "alla[i].getAttribute('onclick')", ["onclick"], ['onclick'], "PrepareBody", alla[i].getAttribute('onclick')));
      where = confixWrapper("infix", "where = confixWrapper(\"functionCall\", \"where.substring(10, where.length - 10)\", [\"10\", \"where.length - 10\"], [10, where.length - 10], \"PrepareBody\", where.substring(10, where.length - 10))", [""], [], "PrepareBody", confixWrapper("functionCall", "where.substring(10, where.length - 10)", ["10", "where.length - 10"], [10, where.length - 10], "PrepareBody", where.substring(10, where.length - 10)));
      confixWrapper("functionCall", "alla[i].setAttribute('title', 'Help on \"' + where + '\"')", ["title", "Help on  + where + "], ['title', 'Help on "' + where + '"'], "PrepareBody", alla[i].setAttribute('title', 'Help on "' + where + '"'));
    }
  var alli = confixWrapper("initvar", "var alli = confixWrapper(\"functionCall\", \"document.getElementsByTagName('input')\", [\"input\"], ['input'], \"PrepareBody\", document.getElementsByTagName('input'))", [""], [], "PrepareBody", confixWrapper("functionCall", "document.getElementsByTagName('input')", ["input"], ['input'], "PrepareBody", document.getElementsByTagName('input')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "PrepareBody", 0); confixWrapper("loopCondition", "i < alli.length", [""], [], "PrepareBody", i < alli.length); i++) 
    if (confixWrapper("condition", "alli[i].className != \"submit\"", ["alla", "i", "where", "alli", "blured", "MAX_ADD_BOX", "nowTime"], [alla, i, where, alli, blured, MAX_ADD_BOX, nowTime], "PrepareBody", alli[i].className != "submit")) 
    try {
      alli[i].onfocus = confixWrapper("infix", "alli[i].onfocus = alli[i].select", [""], [], "PrepareBody", alli[i].select);
    }    catch (e) {
}
  var alli = confixWrapper("initvar", "var alli = confixWrapper(\"functionCall\", \"document.getElementsByTagName('textarea')\", [\"textarea\"], ['textarea'], \"PrepareBody\", document.getElementsByTagName('textarea'))", [""], [], "PrepareBody", confixWrapper("functionCall", "document.getElementsByTagName('textarea')", ["textarea"], ['textarea'], "PrepareBody", document.getElementsByTagName('textarea')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "PrepareBody", 0); confixWrapper("loopCondition", "i < alli.length", [""], [], "PrepareBody", i < alli.length); i++) 
    try {
      alli[i].onfocus = confixWrapper("infix", "alli[i].onfocus = alli[i].select", [""], [], "PrepareBody", alli[i].select);
    }    catch (e) {
}
}
function wordize(s) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"s[0].toUpperCase()\", [], [], \"wordize\", s[0].toUpperCase()) + s.substring(1);", [""], [], "wordize", confixWrapper("functionCall", "s[0].toUpperCase()", [], [], "wordize", s[0].toUpperCase()) + s.substring(1));
}
function dg(x) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"document.getElementById(x)\", [\"x\"], [x], \"dg\", document.getElementById(x));", [""], [], "dg", confixWrapper("functionCall", "document.getElementById(x)", ["x"], [x], "dg", document.getElementById(x)));
}
function hideElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], "hideElem", dg(x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"hideElem\", dg(x)).style.display = 'none'", [""], [], "hideElem", 'none');
  }  catch (e) {
}
}
function showElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], "showElem", dg(x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"showElem\", dg(x)).style.display = 'block'", [""], [], "showElem", 'block');
  }  catch (e) {
}
}
function inlineElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], "inlineElem", dg(x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"inlineElem\", dg(x)).style.display = 'inline'", [""], [], "inlineElem", 'inline');
  }  catch (e) {
}
}
function tableRowElem(x) {
  try {
    confixWrapper("functionCall", "dg(x)", ["x"], [x], "tableRowElem", dg(x)).style;
    confixWrapper("functionCall", "dg(x)", ["x"], [x], "tableRowElem", dg(x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"tableRowElem\", dg(x)).style.display = 'table-row'", [""], [], "tableRowElem", 'table-row');
  }  catch (e) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"tableRowElem\", dg(x))", ["x", "blured", "MAX_ADD_BOX", "nowTime"], [x, blured, MAX_ADD_BOX, nowTime], "tableRowElem", confixWrapper("functionCall", "dg(x)", ["x"], [x], "tableRowElem", dg(x)))) 
  confixWrapper("functionCall", "dg(x)", ["x"], [x], "tableRowElem", dg(x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"tableRowElem\", dg(x)).style.display = 'inline'", [""], [], "tableRowElem", 'inline');
}
}
function checkChangePass() {
  var np1 = confixWrapper("initvar", "var np1 = confixWrapper(\"functionCall\", \"dg('newpasswd1')\", [\"newpasswd1\"], ['newpasswd1'], \"checkChangePass\", dg('newpasswd1')).value", [""], [], "checkChangePass", confixWrapper("functionCall", "dg('newpasswd1')", ["newpasswd1"], ['newpasswd1'], "checkChangePass", dg('newpasswd1')).value);
  var np2 = confixWrapper("initvar", "var np2 = confixWrapper(\"functionCall\", \"dg('newpasswd2')\", [\"newpasswd2\"], ['newpasswd2'], \"checkChangePass\", dg('newpasswd2')).value", [""], [], "checkChangePass", confixWrapper("functionCall", "dg('newpasswd2')", ["newpasswd2"], ['newpasswd2'], "checkChangePass", dg('newpasswd2')).value);
  if (confixWrapper("condition", "np1.length < 4", ["np1", "np2", "blured", "MAX_ADD_BOX", "nowTime"], [np1, np2, blured, MAX_ADD_BOX, nowTime], "checkChangePass", np1.length < 4)) 
  {
    confixWrapper("functionCall", "alert('New password is too short! (less than 4 character)')", ["New password is too short! (less than 4 character)"], ['New password is too short! (less than 4 character)'], "checkChangePass", alert('New password is too short! (less than 4 character)'));
    return confixWrapper("return", "return false;", [""], [], "checkChangePass", false);
  }
  if (confixWrapper("condition", "np2 != np1", ["np1", "np2", "blured", "MAX_ADD_BOX", "nowTime"], [np1, np2, blured, MAX_ADD_BOX, nowTime], "checkChangePass", np2 != np1)) 
  {
    confixWrapper("functionCall", "alert('New passwords are not identic!')", ["New passwords are not identic!"], ['New passwords are not identic!'], "checkChangePass", alert('New passwords are not identic!'));
    return confixWrapper("return", "return false;", [""], [], "checkChangePass", false);
  }
  return confixWrapper("return", "return true;", [""], [], "checkChangePass", true);
}
function checkInstallPass() {
  var np = confixWrapper("initvar", "var np = confixWrapper(\"functionCall\", \"dg('newpasswd')\", [\"newpasswd\"], ['newpasswd'], \"checkInstallPass\", dg('newpasswd')).value", [""], [], "checkInstallPass", confixWrapper("functionCall", "dg('newpasswd')", ["newpasswd"], ['newpasswd'], "checkInstallPass", dg('newpasswd')).value);
  if (confixWrapper("condition", "np.length < 4", ["np", "blured", "MAX_ADD_BOX", "nowTime"], [np, blured, MAX_ADD_BOX, nowTime], "checkInstallPass", np.length < 4)) 
  {
    confixWrapper("functionCall", "alert('New password is too short! (less than 4 character)')", ["New password is too short! (less than 4 character)"], ['New password is too short! (less than 4 character)'], "checkInstallPass", alert('New password is too short! (less than 4 character)'));
    return confixWrapper("return", "return false;", [""], [], "checkInstallPass", false);
  }
  return confixWrapper("return", "return true;", [""], [], "checkInstallPass", true);
}
function checkPrivacyRow() {
  var p = confixWrapper("initvar", "var p = confixWrapper(\"functionCall\", \"dg('public')\", [\"public\"], ['public'], \"checkPrivacyRow\", dg('public')).checked", [""], [], "checkPrivacyRow", confixWrapper("functionCall", "dg('public')", ["public"], ['public'], "checkPrivacyRow", dg('public')).checked);
  if (confixWrapper("condition", "p", ["p", "blured", "MAX_ADD_BOX", "nowTime"], [p, blured, MAX_ADD_BOX, nowTime], "checkPrivacyRow", p)) 
  {
    confixWrapper("functionCall", "dg('password')", ["password"], ['password'], "checkPrivacyRow", dg('password')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('password')\", [\"password\"], ['password'], \"checkPrivacyRow\", dg('password')).value = ''", [""], [], "checkPrivacyRow", '');
    confixWrapper("functionCall", "dg('passwordRow')", ["passwordRow"], ['passwordRow'], "checkPrivacyRow", dg('passwordRow')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('passwordRow')\", [\"passwordRow\"], ['passwordRow'], \"checkPrivacyRow\", dg('passwordRow')).style.display = 'none'", [""], [], "checkPrivacyRow", 'none');
  } else {
    confixWrapper("functionCall", "dg('passwordRow')", ["passwordRow"], ['passwordRow'], "checkPrivacyRow", dg('passwordRow')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('passwordRow')\", [\"passwordRow\"], ['passwordRow'], \"checkPrivacyRow\", dg('passwordRow')).style.display = 'block'", [""], [], "checkPrivacyRow", 'block');
    try {
      confixWrapper("functionCall", "dg('passwordRow')", ["passwordRow"], ['passwordRow'], "checkPrivacyRow", dg('passwordRow')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('passwordRow')\", [\"passwordRow\"], ['passwordRow'], \"checkPrivacyRow\", dg('passwordRow')).style.display = 'table-row'", [""], [], "checkPrivacyRow", 'table-row');
    }    catch (e) {
}
  }
}
function checkHasPass() {
  var name = confixWrapper("initvar", "var name = confixWrapper(\"functionCall\", \"dg('name')\", [\"name\"], ['name'], \"checkHasPass\", dg('name')).value", [""], [], "checkHasPass", confixWrapper("functionCall", "dg('name')", ["name"], ['name'], "checkHasPass", dg('name')).value);
  var password = confixWrapper("initvar", "var password = confixWrapper(\"functionCall\", \"dg('password')\", [\"password\"], ['password'], \"checkHasPass\", dg('password')).value", [""], [], "checkHasPass", confixWrapper("functionCall", "dg('password')", ["password"], ['password'], "checkHasPass", dg('password')).value);
  var checked = confixWrapper("initvar", "var checked = confixWrapper(\"functionCall\", \"dg('public')\", [\"public\"], ['public'], \"checkHasPass\", dg('public')).checked", [""], [], "checkHasPass", confixWrapper("functionCall", "dg('public')", ["public"], ['public'], "checkHasPass", dg('public')).checked);
  if (confixWrapper("condition", "name == \"\"", ["name", "password", "checked", "blured", "MAX_ADD_BOX", "nowTime"], [name, password, checked, blured, MAX_ADD_BOX, nowTime], "checkHasPass", name == "")) 
  {
    confixWrapper("functionCall", "alert('\"Name\" field can not be left blank!')", ["Name field can not be left blank!"], ['"Name" field can not be left blank!'], "checkHasPass", alert('"Name" field can not be left blank!'));
    return confixWrapper("return", "return false;", [""], [], "checkHasPass", false);
  }
  if (confixWrapper("condition", "(!checked) && (password == \"\")", ["name", "password", "checked", "blured", "MAX_ADD_BOX", "nowTime"], [name, password, checked, blured, MAX_ADD_BOX, nowTime], "checkHasPass", (!checked) && (password == ""))) 
  {
    confixWrapper("functionCall", "alert('Either assign a password or make it public!')", ["Either assign a password or make it public!"], ['Either assign a password or make it public!'], "checkHasPass", alert('Either assign a password or make it public!'));
    return confixWrapper("return", "return false;", [""], [], "checkHasPass", false);
  }
  return confixWrapper("return", "return true;", [""], [], "checkHasPass", true);
}
function confirmDelete(x) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"confirm('Are you sure you want to delete \"' + x + '\"?')\", [\"Are you sure you want to delete  + x + ?\"], ['Are you sure you want to delete \"' + x + '\"?'], \"confirmDelete\", confirm('Are you sure you want to delete \"' + x + '\"?'));", [""], [], "confirmDelete", confixWrapper("functionCall", "confirm('Are you sure you want to delete \"' + x + '\"?')", ["Are you sure you want to delete  + x + ?"], ['Are you sure you want to delete "' + x + '"?'], "confirmDelete", confirm('Are you sure you want to delete "' + x + '"?')));
}
function checkDate() {
  var date = confixWrapper("initvar", "var date = confixWrapper(\"functionCall\", \"dg('date')\", [\"date\"], ['date'], \"checkDate\", dg('date')).value", [""], [], "checkDate", confixWrapper("functionCall", "dg('date')", ["date"], ['date'], "checkDate", dg('date')).value);
  if (confixWrapper("condition", "date.length == 0", ["date", "blured", "MAX_ADD_BOX", "nowTime"], [date, blured, MAX_ADD_BOX, nowTime], "checkDate", date.length == 0)) 
  {
    confixWrapper("functionCall", "alert('Date is required')", ["Date is required"], ['Date is required'], "checkDate", alert('Date is required'));
    return confixWrapper("return", "return false;", [""], [], "checkDate", false);
  }
  re = confixWrapper("infix", "re = /^\\d{4}\\/\\d{2}\\/\\d{2}$/", [""], [], "checkDate", /^\d{4}\/\d{2}\/\d{2}$/);
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"re.test(dg('date').value)\", [\"dg(date).value\"], [confixWrapper(\"functionCall\", \"dg('date')\", [\"date\"], ['date'], \"checkDate\", dg('date')).value], \"checkDate\", re.test(confixWrapper(\"functionCall\", \"dg('date')\", [\"date\"], ['date'], \"checkDate\", dg('date')).value))", ["date", "blured", "MAX_ADD_BOX", "nowTime"], [date, blured, MAX_ADD_BOX, nowTime], "checkDate", !confixWrapper("functionCall", "re.test(dg('date').value)", ["dg(date).value"], [confixWrapper("functionCall", "dg('date')", ["date"], ['date'], "checkDate", dg('date')).value], "checkDate", re.test(confixWrapper("functionCall", "dg('date')", ["date"], ['date'], "checkDate", dg('date')).value)))) 
  {
    confixWrapper("functionCall", "alert('Date must be in YYYY/MM/DD format')", ["Date must be in YYYY/MM/DD format"], ['Date must be in YYYY/MM/DD format'], "checkDate", alert('Date must be in YYYY/MM/DD format'));
    return confixWrapper("return", "return false;", [""], [], "checkDate", false);
  }
  return confixWrapper("return", "return true;", [""], [], "checkDate", true);
}
function CheckAddPhotoTime() {
  retime = confixWrapper("infix", "retime = /^\\d{4}\\/\\d{2}\\/\\d{2}[ ]\\d{2}[:]\\d{2}$/", [""], [], "CheckAddPhotoTime", /^\d{4}\/\d{2}\/\d{2}[ ]\d{2}[:]\d{2}$/);
  re = confixWrapper("infix", "re = /^\\d{4}\\/\\d{2}\\/\\d{2}$/", [""], [], "CheckAddPhotoTime", /^\d{4}\/\d{2}\/\d{2}$/);
  rehit = confixWrapper("infix", "rehit = /^\\d+ \\d+\\/\\d+$/", [""], [], "CheckAddPhotoTime", /^\d+ \d+\/\d+$/);
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"re.test(dg('datetake').value)\", [\"dg(datetake).value\"], [confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"CheckAddPhotoTime\", dg('datetake')).value], \"CheckAddPhotoTime\", re.test(confixWrapper(\"functionCall\", \"dg('datetake')\", [\"datetake\"], ['datetake'], \"CheckAddPhotoTime\", dg('datetake')).value))", ["blured", "MAX_ADD_BOX", "nowTime"], [blured, MAX_ADD_BOX, nowTime], "CheckAddPhotoTime", !confixWrapper("functionCall", "re.test(dg('datetake').value)", ["dg(datetake).value"], [confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "CheckAddPhotoTime", dg('datetake')).value], "CheckAddPhotoTime", re.test(confixWrapper("functionCall", "dg('datetake')", ["datetake"], ['datetake'], "CheckAddPhotoTime", dg('datetake')).value)))) 
  {
    confixWrapper("functionCall", "alert('Date Taken must be in YYYY/MM/DD HH:mm format')", ["Date Taken must be in YYYY/MM/DD HH:mm format"], ['Date Taken must be in YYYY/MM/DD HH:mm format'], "CheckAddPhotoTime", alert('Date Taken must be in YYYY/MM/DD HH:mm format'));
    return confixWrapper("return", "return false;", [""], [], "CheckAddPhotoTime", false);
  }
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"retime.test(dg('dateadd').value)\", [\"dg(dateadd).value\"], [confixWrapper(\"functionCall\", \"dg('dateadd')\", [\"dateadd\"], ['dateadd'], \"CheckAddPhotoTime\", dg('dateadd')).value], \"CheckAddPhotoTime\", retime.test(confixWrapper(\"functionCall\", \"dg('dateadd')\", [\"dateadd\"], ['dateadd'], \"CheckAddPhotoTime\", dg('dateadd')).value))", ["blured", "MAX_ADD_BOX", "nowTime"], [blured, MAX_ADD_BOX, nowTime], "CheckAddPhotoTime", !confixWrapper("functionCall", "retime.test(dg('dateadd').value)", ["dg(dateadd).value"], [confixWrapper("functionCall", "dg('dateadd')", ["dateadd"], ['dateadd'], "CheckAddPhotoTime", dg('dateadd')).value], "CheckAddPhotoTime", retime.test(confixWrapper("functionCall", "dg('dateadd')", ["dateadd"], ['dateadd'], "CheckAddPhotoTime", dg('dateadd')).value)))) 
  {
    confixWrapper("functionCall", "alert('Date Added must be in YYYY/MM/DD HH:mm format')", ["Date Added must be in YYYY/MM/DD HH:mm format"], ['Date Added must be in YYYY/MM/DD HH:mm format'], "CheckAddPhotoTime", alert('Date Added must be in YYYY/MM/DD HH:mm format'));
    return confixWrapper("return", "return false;", [""], [], "CheckAddPhotoTime", false);
  }
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"rehit.test(dg('hits').value)\", [\"dg(hits).value\"], [confixWrapper(\"functionCall\", \"dg('hits')\", [\"hits\"], ['hits'], \"CheckAddPhotoTime\", dg('hits')).value], \"CheckAddPhotoTime\", rehit.test(confixWrapper(\"functionCall\", \"dg('hits')\", [\"hits\"], ['hits'], \"CheckAddPhotoTime\", dg('hits')).value))", ["blured", "MAX_ADD_BOX", "nowTime"], [blured, MAX_ADD_BOX, nowTime], "CheckAddPhotoTime", !confixWrapper("functionCall", "rehit.test(dg('hits').value)", ["dg(hits).value"], [confixWrapper("functionCall", "dg('hits')", ["hits"], ['hits'], "CheckAddPhotoTime", dg('hits')).value], "CheckAddPhotoTime", rehit.test(confixWrapper("functionCall", "dg('hits')", ["hits"], ['hits'], "CheckAddPhotoTime", dg('hits')).value)))) 
  {
    confixWrapper("functionCall", "alert('Hits must be in HITS RATE_SUM/RATE_COUNT format like 288 12/7')", ["Hits must be in HITS RATE_SUM/RATE_COUNT format like 288 12/7"], ['Hits must be in HITS RATE_SUM/RATE_COUNT format like 288 12/7'], "CheckAddPhotoTime", alert('Hits must be in HITS RATE_SUM/RATE_COUNT format like 288 12/7'));
    return confixWrapper("return", "return false;", [""], [], "CheckAddPhotoTime", false);
  }
  return confixWrapper("return", "return true;", [""], [], "CheckAddPhotoTime", true);
}
function CheckAddPhoto() {
  var path = confixWrapper("initvar", "var path = confixWrapper(\"functionCall\", \"dg('theImgPath')\", [\"theImgPath\"], ['theImgPath'], \"CheckAddPhoto\", dg('theImgPath')).value", [""], [], "CheckAddPhoto", confixWrapper("functionCall", "dg('theImgPath')", ["theImgPath"], ['theImgPath'], "CheckAddPhoto", dg('theImgPath')).value);
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"CheckAddPhotoTime()\", [], [], \"CheckAddPhoto\", CheckAddPhotoTime())", ["path", "blured", "MAX_ADD_BOX", "nowTime"], [path, blured, MAX_ADD_BOX, nowTime], "CheckAddPhoto", !confixWrapper("functionCall", "CheckAddPhotoTime()", [], [], "CheckAddPhoto", CheckAddPhotoTime()))) 
  return confixWrapper("return", "return false;", [""], [], "CheckAddPhoto", false);
  if (confixWrapper("condition", "path == \"\"", ["path", "blured", "MAX_ADD_BOX", "nowTime"], [path, blured, MAX_ADD_BOX, nowTime], "CheckAddPhoto", path == "")) 
  {
    confixWrapper("functionCall", "alert('You must acquire a photo first!')", ["You must acquire a photo first!"], ['You must acquire a photo first!'], "CheckAddPhoto", alert('You must acquire a photo first!'));
    return confixWrapper("return", "return false;", [""], [], "CheckAddPhoto", false);
  }
  return confixWrapper("return", "return true;", [""], [], "CheckAddPhoto", true);
}
function ConfirmDelPhotoID(x) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"confirm('Are you sure you want to delete photo number \"' + x + '\"?')\", [\"Are you sure you want to delete photo number  + x + ?\"], ['Are you sure you want to delete photo number \"' + x + '\"?'], \"ConfirmDelPhotoID\", confirm('Are you sure you want to delete photo number \"' + x + '\"?'));", [""], [], "ConfirmDelPhotoID", confixWrapper("functionCall", "confirm('Are you sure you want to delete photo number \"' + x + '\"?')", ["Are you sure you want to delete photo number  + x + ?"], ['Are you sure you want to delete photo number "' + x + '"?'], "ConfirmDelPhotoID", confirm('Are you sure you want to delete photo number "' + x + '"?')));
}
function ConfirmDelPhoto() {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"ConfirmDelPhotoID(dg('piddel').value)\", [\"dg(piddel).value\"], [confixWrapper(\"functionCall\", \"dg('piddel')\", [\"piddel\"], ['piddel'], \"ConfirmDelPhoto\", dg('piddel')).value], \"ConfirmDelPhoto\", ConfirmDelPhotoID(confixWrapper(\"functionCall\", \"dg('piddel')\", [\"piddel\"], ['piddel'], \"ConfirmDelPhoto\", dg('piddel')).value));", [""], [], "ConfirmDelPhoto", confixWrapper("functionCall", "ConfirmDelPhotoID(dg('piddel').value)", ["dg(piddel).value"], [confixWrapper("functionCall", "dg('piddel')", ["piddel"], ['piddel'], "ConfirmDelPhoto", dg('piddel')).value], "ConfirmDelPhoto", ConfirmDelPhotoID(confixWrapper("functionCall", "dg('piddel')", ["piddel"], ['piddel'], "ConfirmDelPhoto", dg('piddel')).value)));
}
function ConfirmRestore() {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"confirm('Are you sure you want to restore the backup file?')\", [\"Are you sure you want to restore the backup file?\"], ['Are you sure you want to restore the backup file?'], \"ConfirmRestore\", confirm('Are you sure you want to restore the backup file?'));", [""], [], "ConfirmRestore", confixWrapper("functionCall", "confirm('Are you sure you want to restore the backup file?')", ["Are you sure you want to restore the backup file?"], ['Are you sure you want to restore the backup file?'], "ConfirmRestore", confirm('Are you sure you want to restore the backup file?')));
}
function ConfirmSave() {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"confirm('Are you sure you want to save your modification?')\", [\"Are you sure you want to save your modification?\"], ['Are you sure you want to save your modification?'], \"ConfirmSave\", confirm('Are you sure you want to save your modification?'));", [""], [], "ConfirmSave", confixWrapper("functionCall", "confirm('Are you sure you want to save your modification?')", ["Are you sure you want to save your modification?"], ['Are you sure you want to save your modification?'], "ConfirmSave", confirm('Are you sure you want to save your modification?')));
}
function showlinkline(x) {
  confixWrapper("functionCall", "dg('linkline' + x)", ["linkline + x"], ['linkline' + x], "showlinkline", dg('linkline' + x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('linkline' + x)\", [\"linkline + x\"], ['linkline' + x], \"showlinkline\", dg('linkline' + x)).style.display = 'table-row'", [""], [], "showlinkline", 'table-row');
}
function hidelinkline(x) {
  confixWrapper("functionCall", "dg('linkline' + x)", ["linkline + x"], ['linkline' + x], "hidelinkline", dg('linkline' + x)).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('linkline' + x)\", [\"linkline + x\"], ['linkline' + x], \"hidelinkline\", dg('linkline' + x)).style.display = 'none'", [""], [], "hidelinkline", 'none');
}
function linkAddBelow(x) {
  var lets = confixWrapper("initvar", "var lets = new Array('n', 'h', 't')", [""], [], "linkAddBelow", new Array('n', 'h', 't'));
  var def = confixWrapper("initvar", "var def = new Array('', 'http://', '')", [""], [], "linkAddBelow", new Array('', 'http://', ''));
  var n = confixWrapper("initvar", "var n = confixWrapper(\"functionCall\", \"parseInt(dg('nLink').value)\", [\"dg(nLink).value\"], [confixWrapper(\"functionCall\", \"dg('nLink')\", [\"nLink\"], ['nLink'], \"linkAddBelow\", dg('nLink')).value], \"linkAddBelow\", parseInt(confixWrapper(\"functionCall\", \"dg('nLink')\", [\"nLink\"], ['nLink'], \"linkAddBelow\", dg('nLink')).value))", [""], [], "linkAddBelow", confixWrapper("functionCall", "parseInt(dg('nLink').value)", ["dg(nLink).value"], [confixWrapper("functionCall", "dg('nLink')", ["nLink"], ['nLink'], "linkAddBelow", dg('nLink')).value], "linkAddBelow", parseInt(confixWrapper("functionCall", "dg('nLink')", ["nLink"], ['nLink'], "linkAddBelow", dg('nLink')).value)));
  x++;
  confixWrapper("functionCall", "dg('nLink')", ["nLink"], ['nLink'], "linkAddBelow", dg('nLink')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('nLink')\", [\"nLink\"], ['nLink'], \"linkAddBelow\", dg('nLink')).value = ++n", [""], [], "linkAddBelow", ++n);
  var allTable = confixWrapper("initvar", "var allTable = confixWrapper(\"functionCall\", \"dg('allLinkLines')\", [\"allLinkLines\"], ['allLinkLines'], \"linkAddBelow\", dg('allLinkLines'))", [""], [], "linkAddBelow", confixWrapper("functionCall", "dg('allLinkLines')", ["allLinkLines"], ['allLinkLines'], "linkAddBelow", dg('allLinkLines')));
  var m = confixWrapper("initvar", "var m = allTable.childNodes.length", [""], [], "linkAddBelow", allTable.childNodes.length);
  for (m--; confixWrapper("loopCondition", "allTable.childNodes[m].tagName != \"TR\"", [""], [], "linkAddBelow", allTable.childNodes[m].tagName != "TR"); m--) 
      var lastTr = confixWrapper("initvar", "var lastTr = allTable.childNodes[m]", [""], [], "linkAddBelow", allTable.childNodes[m]);
  var thisTr = confixWrapper("initvar", "var thisTr = confixWrapper(\"functionCall\", \"lastTr.cloneNode('tr')\", [\"tr\"], ['tr'], \"linkAddBelow\", lastTr.cloneNode('tr'))", [""], [], "linkAddBelow", confixWrapper("functionCall", "lastTr.cloneNode('tr')", ["tr"], ['tr'], "linkAddBelow", lastTr.cloneNode('tr')));
  thisTr.id = confixWrapper("infix", "thisTr.id = 'linkline' + (n - 1)", [""], [], "linkAddBelow", 'linkline' + (n - 1));
  m = confixWrapper("infix", "m = thisTr.childNodes.length", [""], [], "linkAddBelow", thisTr.childNodes.length);
  for (i = confixWrapper("infix", "i = 0", [""], [], "linkAddBelow", 0); confixWrapper("loopCondition", "thisTr.childNodes[i].tagName != \"TD\"", [""], [], "linkAddBelow", thisTr.childNodes[i].tagName != "TD"); i++) 
      thisTr.childNodes[i].innerHTML = confixWrapper("infix", "thisTr.childNodes[i].innerHTML = (n)", [""], [], "linkAddBelow", (n));
  for (i++; confixWrapper("loopCondition", "i < m", [""], [], "linkAddBelow", i < m); i++) 
    if (confixWrapper("condition", "thisTr.childNodes[i].tagName == \"TD\"", ["x", "lets", "def", "n", "allTable", "m", "lastTr", "thisTr", "s", "i", "l", "j", "blured", "MAX_ADD_BOX", "nowTime"], [x, lets, def, n, allTable, m, lastTr, thisTr, s, i, l, j, blured, MAX_ADD_BOX, nowTime], "linkAddBelow", thisTr.childNodes[i].tagName == "TD")) 
    if (confixWrapper("condition", "thisTr.childNodes[i].childNodes[0].tagName == \"INPUT\"", ["x", "lets", "def", "n", "allTable", "m", "lastTr", "thisTr", "s", "i", "l", "j", "blured", "MAX_ADD_BOX", "nowTime"], [x, lets, def, n, allTable, m, lastTr, thisTr, s, i, l, j, blured, MAX_ADD_BOX, nowTime], "linkAddBelow", thisTr.childNodes[i].childNodes[0].tagName == "INPUT")) 
    {
      var s = confixWrapper("initvar", "var s = thisTr.childNodes[i].childNodes[0].id", [""], [], "linkAddBelow", thisTr.childNodes[i].childNodes[0].id);
      s = confixWrapper("infix", "s = \"l\" + (n - 1) + (confixWrapper(\"functionCall\", \"s.charAt(s.length - 1)\", [\"s.length - 1\"], [s.length - 1], \"linkAddBelow\", s.charAt(s.length - 1)))", [""], [], "linkAddBelow", "l" + (n - 1) + (confixWrapper("functionCall", "s.charAt(s.length - 1)", ["s.length - 1"], [s.length - 1], "linkAddBelow", s.charAt(s.length - 1))));
      thisTr.childNodes[i].childNodes[0].name = confixWrapper("infix", "thisTr.childNodes[i].childNodes[0].name = s", [""], [], "linkAddBelow", s);
      thisTr.childNodes[i].childNodes[0].id = confixWrapper("infix", "thisTr.childNodes[i].childNodes[0].id = s", [""], [], "linkAddBelow", s);
    }
  confixWrapper("functionCall", "allTable.appendChild(thisTr)", ["thisTr"], [thisTr], "linkAddBelow", allTable.appendChild(thisTr));
  for (var i = confixWrapper("initvar", "var i = n - 1", [""], [], "linkAddBelow", n - 1); confixWrapper("loopCondition", "i > x", [""], [], "linkAddBelow", i > x); i--) 
    for (var l = confixWrapper("initvar", "var l = 0", [""], [], "linkAddBelow", 0); confixWrapper("loopCondition", "l < 3", [""], [], "linkAddBelow", l < 3); l++) 
      {
        var j = confixWrapper("initvar", "var j = i - 1", [""], [], "linkAddBelow", i - 1);
        confixWrapper("functionCall", "dg('l' + i + lets[l])", ["l + i + lets[l]"], ['l' + i + lets[l]], "linkAddBelow", dg('l' + i + lets[l])).style.fontWeight = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('l' + i + lets[l])\", [\"l + i + lets[l]\"], ['l' + i + lets[l]], \"linkAddBelow\", dg('l' + i + lets[l])).style.fontWeight = confixWrapper(\"functionCall\", \"dg('l' + j + lets[l])\", [\"l + j + lets[l]\"], ['l' + j + lets[l]], \"linkAddBelow\", dg('l' + j + lets[l])).style.fontWeight", [""], [], "linkAddBelow", confixWrapper("functionCall", "dg('l' + j + lets[l])", ["l + j + lets[l]"], ['l' + j + lets[l]], "linkAddBelow", dg('l' + j + lets[l])).style.fontWeight);
      }
  for (var l = confixWrapper("initvar", "var l = 0", [""], [], "linkAddBelow", 0); confixWrapper("loopCondition", "l < 3", [""], [], "linkAddBelow", l < 3); l++) 
    confixWrapper("functionCall", "dg('l' + x + lets[l])", ["l + x + lets[l]"], ['l' + x + lets[l]], "linkAddBelow", dg('l' + x + lets[l])).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('l' + x + lets[l])\", [\"l + x + lets[l]\"], ['l' + x + lets[l]], \"linkAddBelow\", dg('l' + x + lets[l])).value = def[l]", [""], [], "linkAddBelow", def[l]);
  confixWrapper("functionCall", "dg('l' + x + 'n')", ["l + x + n"], ['l' + x + 'n'], "linkAddBelow", dg('l' + x + 'n')).style.fontWeight = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('l' + x + 'n')\", [\"l + x + n\"], ['l' + x + 'n'], \"linkAddBelow\", dg('l' + x + 'n')).style.fontWeight = 'normal'", [""], [], "linkAddBelow", 'normal');
}
function linkDelThis() {
  var n = confixWrapper("initvar", "var n = confixWrapper(\"functionCall\", \"parseInt(dg('nLink').value)\", [\"dg(nLink).value\"], [confixWrapper(\"functionCall\", \"dg('nLink')\", [\"nLink\"], ['nLink'], \"linkDelThis\", dg('nLink')).value], \"linkDelThis\", parseInt(confixWrapper(\"functionCall\", \"dg('nLink')\", [\"nLink\"], ['nLink'], \"linkDelThis\", dg('nLink')).value))", [""], [], "linkDelThis", confixWrapper("functionCall", "parseInt(dg('nLink').value)", ["dg(nLink).value"], [confixWrapper("functionCall", "dg('nLink')", ["nLink"], ['nLink'], "linkDelThis", dg('nLink')).value], "linkDelThis", parseInt(confixWrapper("functionCall", "dg('nLink')", ["nLink"], ['nLink'], "linkDelThis", dg('nLink')).value)));
  if (confixWrapper("condition", "n == 1", ["n", "lets", "i", "l", "j", "blured", "MAX_ADD_BOX", "nowTime"], [n, lets, i, l, j, blured, MAX_ADD_BOX, nowTime], "linkDelThis", n == 1)) 
  {
    confixWrapper("functionCall", "alert(\"You can't omit all the links! One must survive.\")", ["You cant omit all the links! One must survive."], ["You can't omit all the links! One must survive."], "linkDelThis", alert("You can't omit all the links! One must survive."));
    return;
  }
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"confirm('Are you sure you want to delete the link ?')\", [\"Are you sure you want to delete the link ?\"], ['Are you sure you want to delete the link ?'], \"linkDelThis\", confirm('Are you sure you want to delete the link ?'))", ["n", "lets", "i", "l", "j", "blured", "MAX_ADD_BOX", "nowTime"], [n, lets, i, l, j, blured, MAX_ADD_BOX, nowTime], "linkDelThis", !confixWrapper("functionCall", "confirm('Are you sure you want to delete the link ?')", ["Are you sure you want to delete the link ?"], ['Are you sure you want to delete the link ?'], "linkDelThis", confirm('Are you sure you want to delete the link ?')))) 
  return;
  var lets = confixWrapper("initvar", "var lets = new Array('n', 'h', 't')", [""], [], "linkDelThis", new Array('n', 'h', 't'));
  confixWrapper("functionCall", "dg('nLink')", ["nLink"], ['nLink'], "linkDelThis", dg('nLink')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('nLink')\", [\"nLink\"], ['nLink'], \"linkDelThis\", dg('nLink')).value = --n", [""], [], "linkDelThis", --n);
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "linkDelThis", 0); confixWrapper("loopCondition", "i < n", [""], [], "linkDelThis", i < n); i++) 
    for (var l = confixWrapper("initvar", "var l = 0", [""], [], "linkDelThis", 0); confixWrapper("loopCondition", "l < 3", [""], [], "linkDelThis", l < 3); l++) 
      {
        var j = confixWrapper("initvar", "var j = i + 1", [""], [], "linkDelThis", i + 1);
        confixWrapper("functionCall", "dg('l' + i + lets[l])", ["l + i + lets[l]"], ['l' + i + lets[l]], "linkDelThis", dg('l' + i + lets[l])).style.fontWeight = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('l' + i + lets[l])\", [\"l + i + lets[l]\"], ['l' + i + lets[l]], \"linkDelThis\", dg('l' + i + lets[l])).style.fontWeight = confixWrapper(\"functionCall\", \"dg('l' + j + lets[l])\", [\"l + j + lets[l]\"], ['l' + j + lets[l]], \"linkDelThis\", dg('l' + j + lets[l])).style.fontWeight", [""], [], "linkDelThis", confixWrapper("functionCall", "dg('l' + j + lets[l])", ["l + j + lets[l]"], ['l' + j + lets[l]], "linkDelThis", dg('l' + j + lets[l])).style.fontWeight);
      }
  confixWrapper("functionCall", "removeThisNode('linkline' + n)", ["linkline + n"], ['linkline' + n], "linkDelThis", removeThisNode('linkline' + n));
}
function removeThisNode(node) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg(node)\", [\"node\"], [node], \"removeThisNode\", dg(node))", ["node", "blured", "MAX_ADD_BOX", "nowTime"], [node, blured, MAX_ADD_BOX, nowTime], "removeThisNode", confixWrapper("functionCall", "dg(node)", ["node"], [node], "removeThisNode", dg(node)))) 
  node = confixWrapper("infix", "node = confixWrapper(\"functionCall\", \"dg(node)\", [\"node\"], [node], \"removeThisNode\", dg(node))", [""], [], "removeThisNode", confixWrapper("functionCall", "dg(node)", ["node"], [node], "removeThisNode", dg(node)));
  confixWrapper("functionCall", "node.parentNode.removeChild(node)", ["node"], [node], "removeThisNode", node.parentNode.removeChild(node));
  confixWrapper("functionCall", "updateMode()", [], [], "removeThisNode", updateMode());
}
function addMainColDiv() {
  var allModes = confixWrapper("initvar", "var allModes = confixWrapper(\"functionCall\", \"dg('allModes')\", [\"allModes\"], ['allModes'], \"addMainColDiv\", dg('allModes'))", [""], [], "addMainColDiv", confixWrapper("functionCall", "dg('allModes')", ["allModes"], ['allModes'], "addMainColDiv", dg('allModes')));
  m = confixWrapper("infix", "m = 0", [""], [], "addMainColDiv", 0);
  for (; confixWrapper("loopCondition", "allModes.childNodes[m].tagName != \"DIV\"", [""], [], "addMainColDiv", allModes.childNodes[m].tagName != "DIV"); m++) 
      var firstDiv = confixWrapper("initvar", "var firstDiv = allModes.childNodes[m]", [""], [], "addMainColDiv", allModes.childNodes[m]);
  var thisDiv = confixWrapper("initvar", "var thisDiv = confixWrapper(\"functionCall\", \"firstDiv.cloneNode('DIV')\", [\"DIV\"], ['DIV'], \"addMainColDiv\", firstDiv.cloneNode('DIV'))", [""], [], "addMainColDiv", confixWrapper("functionCall", "firstDiv.cloneNode('DIV')", ["DIV"], ['DIV'], "addMainColDiv", firstDiv.cloneNode('DIV')));
  thisDiv.innerHTML = confixWrapper("infix", "thisDiv.innerHTML = \"Then<br /><br />\" + thisDiv.innerHTML", ["\"Then<br /><br />\" + thisDiv"], ["Then<br /><br />" + thisDiv], "addMainColDiv", "Then<br /><br />" + thisDiv.innerHTML);
  m = confixWrapper("infix", "m = allModes.childNodes.length", [""], [], "addMainColDiv", allModes.childNodes.length);
  for (m--; confixWrapper("loopCondition", "allModes.childNodes[m].tagName != \"A\"", [""], [], "addMainColDiv", allModes.childNodes[m].tagName != "A"); m--) 
      var aDiv = confixWrapper("initvar", "var aDiv = allModes.childNodes[m]", [""], [], "addMainColDiv", allModes.childNodes[m]);
  confixWrapper("functionCall", "allModes.insertBefore(thisDiv, aDiv)", ["thisDiv", "aDiv"], [thisDiv, aDiv], "addMainColDiv", allModes.insertBefore(thisDiv, aDiv));
  confixWrapper("functionCall", "updateMode()", [], [], "addMainColDiv", updateMode());
}
function updateMode() {
  var allModes = confixWrapper("initvar", "var allModes = confixWrapper(\"functionCall\", \"dg('allModes')\", [\"allModes\"], ['allModes'], \"updateMode\", dg('allModes'))", [""], [], "updateMode", confixWrapper("functionCall", "dg('allModes')", ["allModes"], ['allModes'], "updateMode", dg('allModes')));
  m = confixWrapper("infix", "m = allModes.childNodes.length", [""], [], "updateMode", allModes.childNodes.length);
  r = confixWrapper("infix", "r = \"\"", [""], [], "updateMode", "");
  for (i = confixWrapper("infix", "i = 0", [""], [], "updateMode", 0); confixWrapper("loopCondition", "i < m", [""], [], "updateMode", i < m); i++) 
    if (confixWrapper("condition", "allModes.childNodes[i].tagName == \"DIV\"", ["allModes", "blured", "MAX_ADD_BOX", "nowTime"], [allModes, blured, MAX_ADD_BOX, nowTime], "updateMode", allModes.childNodes[i].tagName == "DIV")) 
    {
      k = confixWrapper("infix", "k = 0", [""], [], "updateMode", 0);
      for (; confixWrapper("loopCondition", "allModes.childNodes[i].childNodes[k].tagName != \"SELECT\"", [""], [], "updateMode", allModes.childNodes[i].childNodes[k].tagName != "SELECT"); k++) 
              r = confixWrapper("infix", "r = r + '-' + allModes.childNodes[i].childNodes[k].value", ["r + '-' + allModes.childNodes[i].childNodes[k]"], [r + '-' + allModes.childNodes[i].childNodes[k]], "updateMode", r + '-' + allModes.childNodes[i].childNodes[k].value);
    }
  r = confixWrapper("infix", "r = confixWrapper(\"functionCall\", \"r.substr(1, r.length)\", [\"1\", \"r.length\"], [1, r.length], \"updateMode\", r.substr(1, r.length))", [""], [], "updateMode", confixWrapper("functionCall", "r.substr(1, r.length)", ["1", "r.length"], [1, r.length], "updateMode", r.substr(1, r.length)));
  confixWrapper("functionCall", "dg('mode')", ["mode"], ['mode'], "updateMode", dg('mode')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('mode')\", [\"mode\"], ['mode'], \"updateMode\", dg('mode')).value = r", [""], [], "updateMode", r);
  confixWrapper("functionCall", "changePrev(dg('mode').value, '')", ["dg(mode).value", ""], [confixWrapper("functionCall", "dg('mode')", ["mode"], ['mode'], "updateMode", dg('mode')).value, ''], "updateMode", changePrev(confixWrapper("functionCall", "dg('mode')", ["mode"], ['mode'], "updateMode", dg('mode')).value, ''));
}
function fixBoldInput(x, val) {
  confixWrapper("functionCall", "dg('l' + x + 'n')", ["l + x + n"], ['l' + x + 'n'], "fixBoldInput", dg('l' + x + 'n')).style.fontWeight = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('l' + x + 'n')\", [\"l + x + n\"], ['l' + x + 'n'], \"fixBoldInput\", dg('l' + x + 'n')).style.fontWeight = (val.length > 0) ? 'normal' : 'bold'", [""], [], "fixBoldInput", (val.length > 0) ? 'normal' : 'bold');
}
function changePrev() {
  var mode = confixWrapper("initvar", "var mode = confixWrapper(\"functionCall\", \"dg('mode')\", [\"mode\"], ['mode'], \"changePrev\", dg('mode')).value", [""], [], "changePrev", confixWrapper("functionCall", "dg('mode')", ["mode"], ['mode'], "changePrev", dg('mode')).value);
  var theme = confixWrapper("initvar", "var theme = confixWrapper(\"functionCall\", \"dg('theme')\", [\"theme\"], ['theme'], \"changePrev\", dg('theme')).value", [""], [], "changePrev", confixWrapper("functionCall", "dg('theme')", ["theme"], ['theme'], "changePrev", dg('theme')).value);
  confixWrapper("functionCall", "dg('prevmode1').setAttribute(\"href\", './?mode=' + mode + '&theme=' + theme)", ["href", "./?mode= + mode + &theme= + theme"], ["href", './?mode=' + mode + '&theme=' + theme], "changePrev", confixWrapper("functionCall", "dg('prevmode1')", ["prevmode1"], ['prevmode1'], "changePrev", dg('prevmode1')).setAttribute("href", './?mode=' + mode + '&theme=' + theme));
  confixWrapper("functionCall", "dg('prevmode2').setAttribute(\"href\", './?mode=' + mode + '&theme=' + theme)", ["href", "./?mode= + mode + &theme= + theme"], ["href", './?mode=' + mode + '&theme=' + theme], "changePrev", confixWrapper("functionCall", "dg('prevmode2')", ["prevmode2"], ['prevmode2'], "changePrev", dg('prevmode2')).setAttribute("href", './?mode=' + mode + '&theme=' + theme));
}
function ToggleAdvPref() {
  var pref = confixWrapper("initvar", "var pref = confixWrapper(\"functionCall\", \"dg('AdvPref')\", [\"AdvPref\"], ['AdvPref'], \"ToggleAdvPref\", dg('AdvPref'))", [""], [], "ToggleAdvPref", confixWrapper("functionCall", "dg('AdvPref')", ["AdvPref"], ['AdvPref'], "ToggleAdvPref", dg('AdvPref')));
  if (confixWrapper("condition", "pref.style.display == 'block'", ["pref", "blured", "MAX_ADD_BOX", "nowTime"], [pref, blured, MAX_ADD_BOX, nowTime], "ToggleAdvPref", pref.style.display == 'block')) 
  {
    pref.style.display = confixWrapper("infix", "pref.style.display = 'none'", [""], [], "ToggleAdvPref", 'none');
    confixWrapper("functionCall", "dg('ShowHideAdvPref')", ["ShowHideAdvPref"], ['ShowHideAdvPref'], "ToggleAdvPref", dg('ShowHideAdvPref')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('ShowHideAdvPref')\", [\"ShowHideAdvPref\"], ['ShowHideAdvPref'], \"ToggleAdvPref\", dg('ShowHideAdvPref')).innerHTML = 'Show'", [""], [], "ToggleAdvPref", 'Show');
  } else {
    pref.style.display = confixWrapper("infix", "pref.style.display = 'block'", [""], [], "ToggleAdvPref", 'block');
    confixWrapper("functionCall", "dg('ShowHideAdvPref')", ["ShowHideAdvPref"], ['ShowHideAdvPref'], "ToggleAdvPref", dg('ShowHideAdvPref')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('ShowHideAdvPref')\", [\"ShowHideAdvPref\"], ['ShowHideAdvPref'], \"ToggleAdvPref\", dg('ShowHideAdvPref')).innerHTML = 'Hide'", [""], [], "ToggleAdvPref", 'Hide');
  }
}
function updateTimeDiffer(x) {
  try {
    x = confixWrapper("infix", "x = confixWrapper(\"functionCall\", \"eval(x)\", [\"x\"], [x], \"updateTimeDiffer\", eval(x))", [""], [], "updateTimeDiffer", confixWrapper("functionCall", "eval(x)", ["x"], [x], "updateTimeDiffer", eval(x)));
  }  catch (e) {
  x = confixWrapper("infix", "x = 0", [""], [], "updateTimeDiffer", 0);
}
  var wantTime = confixWrapper("initvar", "var wantTime = new Date()", [""], [], "updateTimeDiffer", new Date());
  confixWrapper("functionCall", "wantTime.setTime(nowTime.getTime() + x * 1000 * 60)", ["nowTime.getTime() + x * 1000 * 60"], [confixWrapper("functionCall", "nowTime.getTime()", [], [], "updateTimeDiffer", nowTime.getTime()) + x * 1000 * 60], "updateTimeDiffer", wantTime.setTime(confixWrapper("functionCall", "nowTime.getTime()", [], [], "updateTimeDiffer", nowTime.getTime()) + x * 1000 * 60));
  var hours, minutes;
  for (hours = confixWrapper("infix", "hours = confixWrapper(\"functionCall\", \"wantTime.getHours()\", [], [], \"updateTimeDiffer\", wantTime.getHours()) + \"\"", [""], [], "updateTimeDiffer", confixWrapper("functionCall", "wantTime.getHours()", [], [], "updateTimeDiffer", wantTime.getHours()) + ""); confixWrapper("loopCondition", "hours.length < 2", [""], [], "updateTimeDiffer", hours.length < 2); hours = confixWrapper("infix", "hours = \"0\" + hours", [""], [], "updateTimeDiffer", "0" + hours)) 
      for (minutes = confixWrapper("infix", "minutes = confixWrapper(\"functionCall\", \"wantTime.getMinutes()\", [], [], \"updateTimeDiffer\", wantTime.getMinutes()) + \"\"", [""], [], "updateTimeDiffer", confixWrapper("functionCall", "wantTime.getMinutes()", [], [], "updateTimeDiffer", wantTime.getMinutes()) + ""); confixWrapper("loopCondition", "minutes.length < 2", [""], [], "updateTimeDiffer", minutes.length < 2); minutes = confixWrapper("infix", "minutes = \"0\" + minutes", [""], [], "updateTimeDiffer", "0" + minutes)) 
      confixWrapper("functionCall", "dg('timeDiffShow')", ["timeDiffShow"], ['timeDiffShow'], "updateTimeDiffer", dg('timeDiffShow')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('timeDiffShow')\", [\"timeDiffShow\"], ['timeDiffShow'], \"updateTimeDiffer\", dg('timeDiffShow')).innerHTML = hours + \":\" + minutes", [""], [], "updateTimeDiffer", hours + ":" + minutes);
}
function CheckDateDrafts() {
  retime = confixWrapper("infix", "retime = /^\\d{4}\\/\\d{2}\\/\\d{2}[ ]\\d{2}[:]\\d{2}$/", [""], [], "CheckDateDrafts", /^\d{4}\/\d{2}\/\d{2}[ ]\d{2}[:]\d{2}$/);
  var date = confixWrapper("initvar", "var date = confixWrapper(\"functionCall\", \"dg('dateadd')\", [\"dateadd\"], ['dateadd'], \"CheckDateDrafts\", dg('dateadd')).value", [""], [], "CheckDateDrafts", confixWrapper("functionCall", "dg('dateadd')", ["dateadd"], ['dateadd'], "CheckDateDrafts", dg('dateadd')).value);
  if (confixWrapper("condition", "date.length == 0", ["date", "blured", "MAX_ADD_BOX", "nowTime"], [date, blured, MAX_ADD_BOX, nowTime], "CheckDateDrafts", date.length == 0)) 
  {
    confixWrapper("functionCall", "alert('Date is required')", ["Date is required"], ['Date is required'], "CheckDateDrafts", alert('Date is required'));
    return confixWrapper("return", "return false;", [""], [], "CheckDateDrafts", false);
  }
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"retime.test(dg('dateadd').value)\", [\"dg(dateadd).value\"], [confixWrapper(\"functionCall\", \"dg('dateadd')\", [\"dateadd\"], ['dateadd'], \"CheckDateDrafts\", dg('dateadd')).value], \"CheckDateDrafts\", retime.test(confixWrapper(\"functionCall\", \"dg('dateadd')\", [\"dateadd\"], ['dateadd'], \"CheckDateDrafts\", dg('dateadd')).value))", ["date", "blured", "MAX_ADD_BOX", "nowTime"], [date, blured, MAX_ADD_BOX, nowTime], "CheckDateDrafts", !confixWrapper("functionCall", "retime.test(dg('dateadd').value)", ["dg(dateadd).value"], [confixWrapper("functionCall", "dg('dateadd')", ["dateadd"], ['dateadd'], "CheckDateDrafts", dg('dateadd')).value], "CheckDateDrafts", retime.test(confixWrapper("functionCall", "dg('dateadd')", ["dateadd"], ['dateadd'], "CheckDateDrafts", dg('dateadd')).value)))) 
  {
    confixWrapper("functionCall", "alert('Date Added must be in YYYY/MM/DD HH:mm format')", ["Date Added must be in YYYY/MM/DD HH:mm format"], ['Date Added must be in YYYY/MM/DD HH:mm format'], "CheckDateDrafts", alert('Date Added must be in YYYY/MM/DD HH:mm format'));
    return confixWrapper("return", "return false;", [""], [], "CheckDateDrafts", false);
  }
  return confixWrapper("return", "return true;", [""], [], "CheckDateDrafts", true);
}
function CheckActionDrafts() {
  var gdel = confixWrapper("initvar", "var gdel = confixWrapper(\"functionCall\", \"dg('groupdel')\", [\"groupdel\"], ['groupdel'], \"CheckActionDrafts\", dg('groupdel')).checked", [""], [], "CheckActionDrafts", confixWrapper("functionCall", "dg('groupdel')", ["groupdel"], ['groupdel'], "CheckActionDrafts", dg('groupdel')).checked);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"parseInt(dg('selCount1').innerHTML)\", [\"dg(selCount1).innerHTML\"], [confixWrapper(\"functionCall\", \"dg('selCount1')\", [\"selCount1\"], ['selCount1'], \"CheckActionDrafts\", dg('selCount1')).innerHTML], \"CheckActionDrafts\", parseInt(confixWrapper(\"functionCall\", \"dg('selCount1')\", [\"selCount1\"], ['selCount1'], \"CheckActionDrafts\", dg('selCount1')).innerHTML)) == 0", ["gdel", "blured", "MAX_ADD_BOX", "nowTime"], [gdel, blured, MAX_ADD_BOX, nowTime], "CheckActionDrafts", confixWrapper("functionCall", "parseInt(dg('selCount1').innerHTML)", ["dg(selCount1).innerHTML"], [confixWrapper("functionCall", "dg('selCount1')", ["selCount1"], ['selCount1'], "CheckActionDrafts", dg('selCount1')).innerHTML], "CheckActionDrafts", parseInt(confixWrapper("functionCall", "dg('selCount1')", ["selCount1"], ['selCount1'], "CheckActionDrafts", dg('selCount1')).innerHTML)) == 0)) 
  {
    confixWrapper("functionCall", "alert(\"At least one file should be selected!\")", ["At least one file should be selected!"], ["At least one file should be selected!"], "CheckActionDrafts", alert("At least one file should be selected!"));
    return confixWrapper("return", "return false;", [""], [], "CheckActionDrafts", false);
  }
  if (confixWrapper("condition", "gdel", ["gdel", "blured", "MAX_ADD_BOX", "nowTime"], [gdel, blured, MAX_ADD_BOX, nowTime], "CheckActionDrafts", gdel)) 
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"confirm(\"Are you sure you want to delete these \" + dg('selCount1').innerHTML + \" file(s)?\")\", [\"Are you sure you want to delete these  + dg(selCount1).innerHTML +  file(s)?\"], [\"Are you sure you want to delete these \" + confixWrapper(\"functionCall\", \"dg('selCount1')\", [\"selCount1\"], ['selCount1'], \"CheckActionDrafts\", dg('selCount1')).innerHTML + \" file(s)?\"], \"CheckActionDrafts\", confirm(\"Are you sure you want to delete these \" + confixWrapper(\"functionCall\", \"dg('selCount1')\", [\"selCount1\"], ['selCount1'], \"CheckActionDrafts\", dg('selCount1')).innerHTML + \" file(s)?\"));", [""], [], "CheckActionDrafts", confixWrapper("functionCall", "confirm(\"Are you sure you want to delete these \" + dg('selCount1').innerHTML + \" file(s)?\")", ["Are you sure you want to delete these  + dg(selCount1).innerHTML +  file(s)?"], ["Are you sure you want to delete these " + confixWrapper("functionCall", "dg('selCount1')", ["selCount1"], ['selCount1'], "CheckActionDrafts", dg('selCount1')).innerHTML + " file(s)?"], "CheckActionDrafts", confirm("Are you sure you want to delete these " + confixWrapper("functionCall", "dg('selCount1')", ["selCount1"], ['selCount1'], "CheckActionDrafts", dg('selCount1')).innerHTML + " file(s)?"))); else return confixWrapper("return", "return confixWrapper(\"functionCall\", \"CheckDateDrafts()\", [], [], \"CheckActionDrafts\", CheckDateDrafts());", [""], [], "CheckActionDrafts", confixWrapper("functionCall", "CheckDateDrafts()", [], [], "CheckActionDrafts", CheckDateDrafts()));
  return confixWrapper("return", "return true;", [""], [], "CheckActionDrafts", true);
}
function CheckDeleteThisDrafts(which) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"confirm(\"Are you sure you want to delete file \" + which + \"?\")\", [\"Are you sure you want to delete file  + which + ?\"], [\"Are you sure you want to delete file \" + which + \"?\"], \"CheckDeleteThisDrafts\", confirm(\"Are you sure you want to delete file \" + which + \"?\"));", [""], [], "CheckDeleteThisDrafts", confixWrapper("functionCall", "confirm(\"Are you sure you want to delete file \" + which + \"?\")", ["Are you sure you want to delete file  + which + ?"], ["Are you sure you want to delete file " + which + "?"], "CheckDeleteThisDrafts", confirm("Are you sure you want to delete file " + which + "?")));
}
function updateSelCount() {
  var r = confixWrapper("initvar", "var r = 0", [""], [], "updateSelCount", 0);
  var alli = confixWrapper("initvar", "var alli = confixWrapper(\"functionCall\", \"document.getElementsByTagName('input')\", [\"input\"], ['input'], \"updateSelCount\", document.getElementsByTagName('input'))", [""], [], "updateSelCount", confixWrapper("functionCall", "document.getElementsByTagName('input')", ["input"], ['input'], "updateSelCount", document.getElementsByTagName('input')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "updateSelCount", 0); confixWrapper("loopCondition", "i < alli.length", [""], [], "updateSelCount", i < alli.length); i++) 
    if (confixWrapper("condition", "alli[i].className == \"checkbox\"", ["r", "alli", "i", "blured", "MAX_ADD_BOX", "nowTime"], [r, alli, i, blured, MAX_ADD_BOX, nowTime], "updateSelCount", alli[i].className == "checkbox")) 
    {
      if (confixWrapper("condition", "alli[i].checked == true", ["r", "alli", "i", "blured", "MAX_ADD_BOX", "nowTime"], [r, alli, i, blured, MAX_ADD_BOX, nowTime], "updateSelCount", alli[i].checked == true)) 
      r++;
    }
  confixWrapper("functionCall", "dg('selCount1')", ["selCount1"], ['selCount1'], "updateSelCount", dg('selCount1')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('selCount1')\", [\"selCount1\"], ['selCount1'], \"updateSelCount\", dg('selCount1')).innerHTML = r", [""], [], "updateSelCount", r);
  confixWrapper("functionCall", "dg('selCount2')", ["selCount2"], ['selCount2'], "updateSelCount", dg('selCount2')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('selCount2')\", [\"selCount2\"], ['selCount2'], \"updateSelCount\", dg('selCount2')).innerHTML = r", [""], [], "updateSelCount", r);
}
function DraftsSelectBit(_and, _xor) {
  var alli = confixWrapper("initvar", "var alli = confixWrapper(\"functionCall\", \"document.getElementsByTagName('input')\", [\"input\"], ['input'], \"DraftsSelectBit\", document.getElementsByTagName('input'))", [""], [], "DraftsSelectBit", confixWrapper("functionCall", "document.getElementsByTagName('input')", ["input"], ['input'], "DraftsSelectBit", document.getElementsByTagName('input')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "DraftsSelectBit", 0); confixWrapper("loopCondition", "i < alli.length", [""], [], "DraftsSelectBit", i < alli.length); i++) 
    if (confixWrapper("condition", "alli[i].className == \"checkbox\"", ["_and", "_xor", "alli", "i", "blured", "MAX_ADD_BOX", "nowTime"], [_and, _xor, alli, i, blured, MAX_ADD_BOX, nowTime], "DraftsSelectBit", alli[i].className == "checkbox")) 
    {
      v = confixWrapper("infix", "v = alli[i].checked", [""], [], "DraftsSelectBit", alli[i].checked);
      v = confixWrapper("infix", "v = v & _and", [""], [], "DraftsSelectBit", v & _and);
      v = confixWrapper("infix", "v = v ^ _xor", [""], [], "DraftsSelectBit", v ^ _xor);
      alli[i].checked = confixWrapper("infix", "alli[i].checked = v", [""], [], "DraftsSelectBit", v);
    }
  confixWrapper("functionCall", "updateSelCount()", [], [], "DraftsSelectBit", updateSelCount());
}
function AddAddBox() {
  var boxvVal = confixWrapper("initvar", "var boxvVal = confixWrapper(\"functionCall\", \"dg('boxv')\", [\"boxv\"], ['boxv'], \"AddAddBox\", dg('boxv')).value", [""], [], "AddAddBox", confixWrapper("functionCall", "dg('boxv')", ["boxv"], ['boxv'], "AddAddBox", dg('boxv')).value);
  if (confixWrapper("condition", "boxvVal >= MAX_ADD_BOX", ["boxvVal", "that", "seed", "blured", "MAX_ADD_BOX", "nowTime"], [boxvVal, that, seed, blured, MAX_ADD_BOX, nowTime], "AddAddBox", boxvVal >= MAX_ADD_BOX)) 
  confixWrapper("functionCall", "alert(\"Maximum adding boxed reached, refresh page!\")", ["Maximum adding boxed reached, refresh page!"], ["Maximum adding boxed reached, refresh page!"], "AddAddBox", alert("Maximum adding boxed reached, refresh page!")); else {
    var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg()\", [], [], \"AddAddBox\", dg())", [""], [], "AddAddBox", confixWrapper("functionCall", "dg()", [], [], "AddAddBox", dg()));
    var seed = confixWrapper("initvar", "var seed = confixWrapper(\"functionCall\", \"dg('seedv' + boxvVal)\", [\"seedv + boxvVal\"], ['seedv' + boxvVal], \"AddAddBox\", dg('seedv' + boxvVal)).value", [""], [], "AddAddBox", confixWrapper("functionCall", "dg('seedv' + boxvVal)", ["seedv + boxvVal"], ['seedv' + boxvVal], "AddAddBox", dg('seedv' + boxvVal)).value);
    confixWrapper("functionCall", "dg('upload_iframe_' + seed).setAttribute('src', 'upload.php?draft=yes&seed=' + seed)", ["src", "upload.php?draft=yes&seed= + seed"], ['src', 'upload.php?draft=yes&seed=' + seed], "AddAddBox", confixWrapper("functionCall", "dg('upload_iframe_' + seed)", ["upload_iframe_ + seed"], ['upload_iframe_' + seed], "AddAddBox", dg('upload_iframe_' + seed)).setAttribute('src', 'upload.php?draft=yes&seed=' + seed));
    confixWrapper("functionCall", "showElem('AddBox' + boxvVal)", ["AddBox + boxvVal"], ['AddBox' + boxvVal], "AddAddBox", showElem('AddBox' + boxvVal));
  }
}
