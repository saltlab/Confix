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
function cloudsInit() {
  confixWrapper("functionCall", "moveCloud1()", [], [], "cloudsInit", moveCloud1());
  confixWrapper("functionCall", "moveCloud2()", [], [], "cloudsInit", moveCloud2());
  return confixWrapper("return", "return true;", [""], [], "cloudsInit", true);
}
function moveCloud1() {
  var increment = confixWrapper("initvar", "var increment = 1", [""], [], "moveCloud1", 1);
  var cloud1 = confixWrapper("initvar", "var cloud1 = confixWrapper(\"functionCall\", \"document.getElementById('cloud1')\", [\"cloud1\"], ['cloud1'], \"moveCloud1\", document.getElementById('cloud1'))", [""], [], "moveCloud1", confixWrapper("functionCall", "document.getElementById('cloud1')", ["cloud1"], ['cloud1'], "moveCloud1", document.getElementById('cloud1')));
  if (confixWrapper("condition", "cloud1.style.left == null || cloud1.style.left == \"\" || confixWrapper(\"functionCall\", \"parseInt(cloud1.style.left)\", [\"cloud1.style.left\"], [cloud1.style.left], \"moveCloud1\", parseInt(cloud1.style.left)) + cloud1.offsetWidth < 0", [""], [], "moveCloud1", cloud1.style.left == null || cloud1.style.left == "" || confixWrapper("functionCall", "parseInt(cloud1.style.left)", ["cloud1.style.left"], [cloud1.style.left], "moveCloud1", parseInt(cloud1.style.left)) + cloud1.offsetWidth < 0)) 
  {
    cloud1.style.left = confixWrapper("infix", "cloud1.style.left = 800 + increment + \"px\"", [""], [], "moveCloud1", 800 + increment + "px");
  }
  cloud1.style.left = confixWrapper("infix", "cloud1.style.left = confixWrapper(\"functionCall\", \"parseInt(cloud1.style.left)\", [\"cloud1.style.left\"], [cloud1.style.left], \"moveCloud1\", parseInt(cloud1.style.left)) - increment + \"px\"", [""], [], "moveCloud1", confixWrapper("functionCall", "parseInt(cloud1.style.left)", ["cloud1.style.left"], [cloud1.style.left], "moveCloud1", parseInt(cloud1.style.left)) - increment + "px");
  confixWrapper("functionCall", "setTimeout(\"moveCloud1()\", 100)", ["moveCloud1()", "100"], ["moveCloud1()", 100], "moveCloud1", setTimeout("moveCloud1()", 100));
  return confixWrapper("return", "return true;", [""], [], "moveCloud1", true);
}
function moveCloud2() {
  var increment = confixWrapper("initvar", "var increment = 1", [""], [], "moveCloud2", 1);
  var cloud2 = confixWrapper("initvar", "var cloud2 = confixWrapper(\"functionCall\", \"document.getElementById('cloud2')\", [\"cloud2\"], ['cloud2'], \"moveCloud2\", document.getElementById('cloud2'))", [""], [], "moveCloud2", confixWrapper("functionCall", "document.getElementById('cloud2')", ["cloud2"], ['cloud2'], "moveCloud2", document.getElementById('cloud2')));
  if (confixWrapper("condition", "cloud2.style.left == null || cloud2.style.left == \"\" || confixWrapper(\"functionCall\", \"parseInt(cloud2.style.left)\", [\"cloud2.style.left\"], [cloud2.style.left], \"moveCloud2\", parseInt(cloud2.style.left)) + cloud2.offsetWidth < 0", [""], [], "moveCloud2", cloud2.style.left == null || cloud2.style.left == "" || confixWrapper("functionCall", "parseInt(cloud2.style.left)", ["cloud2.style.left"], [cloud2.style.left], "moveCloud2", parseInt(cloud2.style.left)) + cloud2.offsetWidth < 0)) 
  {
    cloud2.style.left = confixWrapper("infix", "cloud2.style.left = 800 + increment + \"px\"", [""], [], "moveCloud2", 800 + increment + "px");
  }
  cloud2.style.left = confixWrapper("infix", "cloud2.style.left = confixWrapper(\"functionCall\", \"parseInt(cloud2.style.left)\", [\"cloud2.style.left\"], [cloud2.style.left], \"moveCloud2\", parseInt(cloud2.style.left)) - increment + \"px\"", [""], [], "moveCloud2", confixWrapper("functionCall", "parseInt(cloud2.style.left)", ["cloud2.style.left"], [cloud2.style.left], "moveCloud2", parseInt(cloud2.style.left)) - increment + "px");
  confixWrapper("functionCall", "setTimeout(\"moveCloud2()\", 60)", ["moveCloud2()", "60"], ["moveCloud2()", 60], "moveCloud2", setTimeout("moveCloud2()", 60));
  return confixWrapper("return", "return true;", [""], [], "moveCloud2", true);
}
