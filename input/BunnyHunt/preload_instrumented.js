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
confixWrapper("functionCall", "schedule(\"window\", preloadImages)", ["window", "preloadImages"], ["window", preloadImages], "", schedule("window", preloadImages));
var imageArray = confixWrapper("initvar", "var imageArray = [\"images/bomb.png\", \"images/bunny.png\", \"images/bunny1.png\", \"images/bunny2.png\", \"images/bunny3.png\", \"images/bunny4.png\", \"images/bunny5.png\", \"images/button_reload.gif\", \"images/button_stop.gif\", \"images/cloud.png\", \"images/cloud2.png\", \"images/hill.png\", \"images/hill2.png\", \"images/hills.png\", \"images/lives.gif\", \"images/stage.jpg\"]", [""], [], "", ["images/bomb.png", "images/bunny.png", "images/bunny1.png", "images/bunny2.png", "images/bunny3.png", "images/bunny4.png", "images/bunny5.png", "images/button_reload.gif", "images/button_stop.gif", "images/cloud.png", "images/cloud2.png", "images/hill.png", "images/hill2.png", "images/hills.png", "images/lives.gif", "images/stage.jpg"]);
var imageObjects = confixWrapper("initvar", "var imageObjects = []", [""], [], "", []);
var currImage = confixWrapper("initvar", "var currImage = 0", [""], [], "", 0);
function preloadImages() {
  var loadingMessage = confixWrapper("initvar", "var loadingMessage = confixWrapper(\"functionCall\", \"document.getElementById('loadingMessage')\", [\"loadingMessage\"], ['loadingMessage'], \"preloadImages\", document.getElementById('loadingMessage'))", [""], [], "preloadImages", confixWrapper("functionCall", "document.getElementById('loadingMessage')", ["loadingMessage"], ['loadingMessage'], "preloadImages", document.getElementById('loadingMessage')));
  var loadingMessageP = confixWrapper("initvar", "var loadingMessageP = confixWrapper(\"functionCall\", \"loadingMessage.getElementsByTagName('p')\", [\"p\"], ['p'], \"preloadImages\", loadingMessage.getElementsByTagName('p'))[0]", [""], [], "preloadImages", confixWrapper("functionCall", "loadingMessage.getElementsByTagName('p')", ["p"], ['p'], "preloadImages", loadingMessage.getElementsByTagName('p'))[0]);
  if (confixWrapper("condition", "currImage >= imageArray.length", [""], [], "preloadImages", currImage >= imageArray.length)) 
  {
    loadingMessageP.innerHTML = confixWrapper("infix", "loadingMessageP.innerHTML = \"<strong>DONE!</strong>\"", [""], [], "preloadImages", "<strong>DONE!</strong>");
    var buttonStart = confixWrapper("initvar", "var buttonStart = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"preloadImages\", document.createElement('input'))", [""], [], "preloadImages", confixWrapper("functionCall", "document.createElement('input')", ["input"], ['input'], "preloadImages", document.createElement('input')));
    buttonStart.type = confixWrapper("infix", "buttonStart.type = \"image\"", [""], [], "preloadImages", "image");
    buttonStart.src = confixWrapper("infix", "buttonStart.src = \"images/button_start.gif\"", [""], [], "preloadImages", "images/button_start.gif");
    buttonStart.onclick = confixWrapper("infix", "buttonStart.onclick = ready", [""], [], "preloadImages", ready);
    confixWrapper("functionCall", "loadingMessage.appendChild(buttonStart)", ["buttonStart"], [buttonStart], "preloadImages", loadingMessage.appendChild(buttonStart));
  } else {
    imageObjects[currImage] = confixWrapper("infix", "imageObjects[currImage] = new Image()", [""], [], "preloadImages", new Image());
    imageObjects[currImage].onload = confixWrapper("infix", "imageObjects[currImage].onload = preloadImages", [""], [], "preloadImages", preloadImages);
    imageObjects[currImage].src = confixWrapper("infix", "imageObjects[currImage].src = imageArray[currImage] + \"?\" + confixWrapper(\"functionCall\", \"Math.random()\", [], [], \"preloadImages\", Math.random())", [""], [], "preloadImages", imageArray[currImage] + "?" + confixWrapper("functionCall", "Math.random()", [], [], "preloadImages", Math.random()));
    loadingMessageP.innerHTML = confixWrapper("infix", "loadingMessageP.innerHTML = \"Loading image <strong>\" + (currImage + 1) + \"</strong> of <strong>\" + imageArray.length + \"</strong>\"", [""], [], "preloadImages", "Loading image <strong>" + (currImage + 1) + "</strong> of <strong>" + imageArray.length + "</strong>");
    var loadingBar = confixWrapper("initvar", "var loadingBar = confixWrapper(\"functionCall\", \"loadingMessage.getElementsByTagName('div')\", [\"div\"], ['div'], \"preloadImages\", loadingMessage.getElementsByTagName('div'))[1]", [""], [], "preloadImages", confixWrapper("functionCall", "loadingMessage.getElementsByTagName('div')", ["div"], ['div'], "preloadImages", loadingMessage.getElementsByTagName('div'))[1]);
    loadingBar.style.width = confixWrapper("infix", "loadingBar.style.width = confixWrapper(\"functionCall\", \"Math.ceil((currImage + 1) / imageArray.length * 100)\", [\"(currImage + 1) / imageArray.length * 100\"], [(currImage + 1) / imageArray.length * 100], \"preloadImages\", Math.ceil((currImage + 1) / imageArray.length * 100)) + \"%\"", [""], [], "preloadImages", confixWrapper("functionCall", "Math.ceil((currImage + 1) / imageArray.length * 100)", ["(currImage + 1) / imageArray.length * 100"], [(currImage + 1) / imageArray.length * 100], "preloadImages", Math.ceil((currImage + 1) / imageArray.length * 100)) + "%");
    currImage++;
  }
  return confixWrapper("return", "return true;", [""], [], "preloadImages", true);
}
function ready() {
  var stage = confixWrapper("initvar", "var stage = confixWrapper(\"functionCall\", \"document.getElementById('stage')\", [\"stage\"], ['stage'], \"ready\", document.getElementById('stage'))", [""], [], "ready", confixWrapper("functionCall", "document.getElementById('stage')", ["stage"], ['stage'], "ready", document.getElementById('stage')));
  stage.className = confixWrapper("infix", "stage.className = \"ready\"", [""], [], "ready", "ready");
  var splash = confixWrapper("initvar", "var splash = confixWrapper(\"functionCall\", \"document.getElementById('splash')\", [\"splash\"], ['splash'], \"ready\", document.getElementById('splash'))", [""], [], "ready", confixWrapper("functionCall", "document.getElementById('splash')", ["splash"], ['splash'], "ready", document.getElementById('splash')));
  splash.className = confixWrapper("infix", "splash.className = \"ready\"", [""], [], "ready", "ready");
  confixWrapper("functionCall", "initBunnies()", [], [], "ready", initBunnies());
  return confixWrapper("return", "return true;", [""], [], "ready", true);
}
