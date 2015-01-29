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
function isValidCard(cardNumber) {
  var ccard = confixWrapper("initvar", "var ccard = new Array(cardNumber.length)", [""], [], "isValidCard", new Array(cardNumber.length));
  var i = confixWrapper("initvar", "var i = 0", [""], [], "isValidCard", 0);
  var sum = confixWrapper("initvar", "var sum = 0", [""], [], "isValidCard", 0);
  if (confixWrapper("condition", "cardNumber.length < 11", [""], [], "isValidCard", cardNumber.length < 11)) 
  {
    return confixWrapper("return", "return false;", [""], [], "isValidCard", false);
  }
  for (i = confixWrapper("infix", "i = 0", [""], [], "isValidCard", 0); confixWrapper("loopCondition", "i < cardNumber.length", ["i", "cardNumber"], [i, cardNumber], "isValidCard", i < cardNumber.length); i++) 
    {
      ccard[i] = confixWrapper("infix", "ccard[i] = confixWrapper(\"functionCall\", \"parseInt(cardNumber.charAt(i))\", [\"cardNumber.charAt(i)\"], [confixWrapper(\"functionCall\", \"cardNumber.charAt(i)\", [\"i\"], [i], \"isValidCard\", cardNumber.charAt(i))], \"isValidCard\", parseInt(confixWrapper(\"functionCall\", \"cardNumber.charAt(i)\", [\"i\"], [i], \"isValidCard\", cardNumber.charAt(i))))", [""], [], "isValidCard", confixWrapper("functionCall", "parseInt(cardNumber.charAt(i))", ["cardNumber.charAt(i)"], [confixWrapper("functionCall", "cardNumber.charAt(i)", ["i"], [i], "isValidCard", cardNumber.charAt(i))], "isValidCard", parseInt(confixWrapper("functionCall", "cardNumber.charAt(i)", ["i"], [i], "isValidCard", cardNumber.charAt(i)))));
    }
  for (i = confixWrapper("infix", "i = 0", [""], [], "isValidCard", 0); confixWrapper("loopCondition", "i < cardNumber.length", ["i", "cardNumber"], [i, cardNumber], "isValidCard", i < cardNumber.length); i = confixWrapper("infix", "i = i + 2", [""], [], "isValidCard", i + 2)) 
    {
      ccard[i] = confixWrapper("infix", "ccard[i] = ccard[i] * 2", [""], [], "isValidCard", ccard[i] * 2);
      if (confixWrapper("condition", "ccard[i] > 9", [""], [], "isValidCard", ccard[i] > 9)) 
      {
        ccard[i] = confixWrapper("infix", "ccard[i] = ccard[i] - 9", [""], [], "isValidCard", ccard[i] - 9);
      }
    }
  for (i = confixWrapper("infix", "i = 0", [""], [], "isValidCard", 0); confixWrapper("loopCondition", "i < cardNumber.length", ["i", "cardNumber"], [i, cardNumber], "isValidCard", i < cardNumber.length); i++) 
    {
      sum = confixWrapper("infix", "sum = sum + ccard[i]", [""], [], "isValidCard", sum + ccard[i]);
    }
  return confixWrapper("return", "return ((sum % 10) == 0);", [""], [], "isValidCard", ((sum % 10) == 0));
}
function isValidVISA(cardNumber) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"cardNumber.charAt(0)\", [\"0\"], [0], \"isValidVISA\", cardNumber.charAt(0)) == '4' && (cardNumber.length == 13 || cardNumber.length == 16)", [""], [], "isValidVISA", confixWrapper("functionCall", "cardNumber.charAt(0)", ["0"], [0], "isValidVISA", cardNumber.charAt(0)) == '4' && (cardNumber.length == 13 || cardNumber.length == 16))) 
  {
    return confixWrapper("return", "return confixWrapper(\"functionCall\", \"isValidCard(cardNumber)\", [\"cardNumber\"], [cardNumber], \"isValidVISA\", isValidCard(cardNumber));", [""], [], "isValidVISA", confixWrapper("functionCall", "isValidCard(cardNumber)", ["cardNumber"], [cardNumber], "isValidVISA", isValidCard(cardNumber)));
  }
  return confixWrapper("return", "return false;", [""], [], "isValidVISA", false);
}
function checkPassConfirm() {
  var pass = confixWrapper("initvar", "var pass = confixWrapper(\"functionCall\", \"document.getElementById('pass')\", [\"pass\"], ['pass'], \"checkPassConfirm\", document.getElementById('pass')).value", [""], [], "checkPassConfirm", confixWrapper("functionCall", "document.getElementById('pass')", ["pass"], ['pass'], "checkPassConfirm", document.getElementById('pass')).value);
  var c_pass = confixWrapper("initvar", "var c_pass = confixWrapper(\"functionCall\", \"document.getElementById('c_pass')\", [\"c_pass\"], ['c_pass'], \"checkPassConfirm\", document.getElementById('c_pass')).value", [""], [], "checkPassConfirm", confixWrapper("functionCall", "document.getElementById('c_pass')", ["c_pass"], ['c_pass'], "checkPassConfirm", document.getElementById('c_pass')).value);
  if (confixWrapper("condition", "pass != c_pass", [""], [], "checkPassConfirm", pass != c_pass)) 
  {
    confixWrapper("functionCall", "document.getElementById('pass')", ["pass"], ['pass'], "checkPassConfirm", document.getElementById('pass')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById('pass')\", [\"pass\"], ['pass'], \"checkPassConfirm\", document.getElementById('pass')).value = \"\"", [""], [], "checkPassConfirm", "");
    confixWrapper("functionCall", "document.getElementById('c_pass')", ["c_pass"], ['c_pass'], "checkPassConfirm", document.getElementById('c_pass')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById('c_pass')\", [\"c_pass\"], ['c_pass'], \"checkPassConfirm\", document.getElementById('c_pass')).value = \"\"", [""], [], "checkPassConfirm", "");
    confixWrapper("functionCall", "document.getElementById('error_Password')", ["error_Password"], ['error_Password'], "checkPassConfirm", document.getElementById('error_Password')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById('error_Password')\", [\"error_Password\"], ['error_Password'], \"checkPassConfirm\", document.getElementById('error_Password')).innerHTML = \"Passwords do not match\"", [""], [], "checkPassConfirm", "Passwords do not match");
    return confixWrapper("return", "return false;", [""], [], "checkPassConfirm", false);
  }
  return confixWrapper("return", "return true;", [""], [], "checkPassConfirm", true);
}
function isValidMasterCard(cardNumber) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"cardNumber.charAt(0)\", [\"0\"], [0], \"isValidMasterCard\", cardNumber.charAt(0)) == '5' && (confixWrapper(\"functionCall\", \"cardNumber.charAt(1)\", [\"1\"], [1], \"isValidMasterCard\", cardNumber.charAt(1)) == '1' || confixWrapper(\"functionCall\", \"cardNumber.charAt(1)\", [\"1\"], [1], \"isValidMasterCard\", cardNumber.charAt(1)) == '5') && cardNumber.length == 16", [""], [], "isValidMasterCard", confixWrapper("functionCall", "cardNumber.charAt(0)", ["0"], [0], "isValidMasterCard", cardNumber.charAt(0)) == '5' && (confixWrapper("functionCall", "cardNumber.charAt(1)", ["1"], [1], "isValidMasterCard", cardNumber.charAt(1)) == '1' || confixWrapper("functionCall", "cardNumber.charAt(1)", ["1"], [1], "isValidMasterCard", cardNumber.charAt(1)) == '5') && cardNumber.length == 16)) 
  {
    return confixWrapper("return", "return confixWrapper(\"functionCall\", \"isValidCard(cardNumber)\", [\"cardNumber\"], [cardNumber], \"isValidMasterCard\", isValidCard(cardNumber));", [""], [], "isValidMasterCard", confixWrapper("functionCall", "isValidCard(cardNumber)", ["cardNumber"], [cardNumber], "isValidMasterCard", isValidCard(cardNumber)));
  }
  return confixWrapper("return", "return false;", [""], [], "isValidMasterCard", false);
}
function trim(s) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"s.replace(/^s*/, \"\").replace(/s*$/, \"\")\", [\"/s*$/\", \"\"], [/s*$/, \"\"], \"trim\", confixWrapper(\"functionCall\", \"s.replace(/^s*/, \"\")\", [\"/^s*/\", \"\"], [/^s*/, \"\"], \"trim\", s.replace(/^s*/, \"\")).replace(/s*$/, \"\"));", [""], [], "trim", confixWrapper("functionCall", "s.replace(/^s*/, \"\").replace(/s*$/, \"\")", ["/s*$/", ""], [/\s*$/, ""], "trim", confixWrapper("functionCall", "s.replace(/^s*/, \"\")", ["/^s*/", ""], [/^\s*/, ""], "trim", s.replace(/^\s*/, "")).replace(/\s*$/, "")));
}
function checkValid() {
  var cardNumber = confixWrapper("initvar", "var cardNumber = confixWrapper(\"functionCall\", \"document.getElementsByName('cardno')\", [\"cardno\"], ['cardno'], \"checkValid\", document.getElementsByName('cardno')).value", [""], [], "checkValid", confixWrapper("functionCall", "document.getElementsByName('cardno')", ["cardno"], ['cardno'], "checkValid", document.getElementsByName('cardno')).value);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById('c1')\", [\"c1\"], ['c1'], \"checkValid\", document.getElementById('c1')).checked", [""], [], "checkValid", confixWrapper("functionCall", "document.getElementById('c1')", ["c1"], ['c1'], "checkValid", document.getElementById('c1')).checked)) 
  {
    if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isValidVISA(cardNumber)\", [\"cardNumber\"], [cardNumber], \"checkValid\", isValidVISA(cardNumber))", [""], [], "checkValid", !confixWrapper("functionCall", "isValidVISA(cardNumber)", ["cardNumber"], [cardNumber], "checkValid", isValidVISA(cardNumber)))) 
    {
      confixWrapper("functionCall", "document.getElementById(\"error_cardno\")", ["error_cardno"], ["error_cardno"], "checkValid", document.getElementById("error_cardno")).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"error_cardno\")\", [\"error_cardno\"], [\"error_cardno\"], \"checkValid\", document.getElementById(\"error_cardno\")).innerHTML = \"Invalid VISA Card No\"", [""], [], "checkValid", "Invalid VISA Card No");
      return confixWrapper("return", "return false;", [""], [], "checkValid", false);
    }
  }
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"document.getElementById('c2')\", [\"c2\"], ['c2'], \"checkValid\", document.getElementById('c2')).checked", [""], [], "checkValid", confixWrapper("functionCall", "document.getElementById('c2')", ["c2"], ['c2'], "checkValid", document.getElementById('c2')).checked)) 
  {
    if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isValidMasterCard(cardNumber)\", [\"cardNumber\"], [cardNumber], \"checkValid\", isValidMasterCard(cardNumber))", [""], [], "checkValid", !confixWrapper("functionCall", "isValidMasterCard(cardNumber)", ["cardNumber"], [cardNumber], "checkValid", isValidMasterCard(cardNumber)))) 
    {
      confixWrapper("functionCall", "document.getElementById(\"error_cardno\")", ["error_cardno"], ["error_cardno"], "checkValid", document.getElementById("error_cardno")).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"error_cardno\")\", [\"error_cardno\"], [\"error_cardno\"], \"checkValid\", document.getElementById(\"error_cardno\")).innerHTML = \"Invalid MasterCard No\"", [""], [], "checkValid", "Invalid MasterCard No");
      return confixWrapper("return", "return false;", [""], [], "checkValid", false);
    }
  }
  return confixWrapper("return", "return true;", [""], [], "checkValid", true);
}
function RequiredField(f) {
  var i, field;
  for (i = confixWrapper("infix", "i = 0", [""], [], "RequiredField", 0); confixWrapper("loopCondition", "i < f.elements.length", ["i", "f", "elements"], [i, f, elements], "RequiredField", i < f.elements.length); i++) 
    {
      field = confixWrapper("infix", "field = f.elements[i].name", [""], [], "RequiredField", f.elements[i].name);
      value = confixWrapper("infix", "value = f.elements[i].value", ["f.elements[i]"], [f.elements[i]], "RequiredField", f.elements[i].value);
      if (confixWrapper("condition", "value == \"\" || value == null", [""], [], "RequiredField", value == "" || value == null)) 
      {
        confixWrapper("functionCall", "document.getElementById(\"error_\" + field)", ["error_ + field"], ["error_" + field], "RequiredField", document.getElementById("error_" + field)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"error_\" + field)\", [\"error_ + field\"], [\"error_\" + field], \"RequiredField\", document.getElementById(\"error_\" + field)).innerHTML = \"* \" + field + \" Required\"", [""], [], "RequiredField", "* " + field + " Required");
        confixWrapper("functionCall", "f.elements[i].focus()", [], [], "RequiredField", f.elements[i].focus());
        return confixWrapper("return", "return false;", [""], [], "RequiredField", false);
      }
    }
  return confixWrapper("return", "return true;", [""], [], "RequiredField", true);
}
function validateEmail() {
  var x = confixWrapper("initvar", "var x = document.forms[\"frm\"][\"email\"].value", [""], [], "validateEmail", document.forms["frm"]["email"].value);
  var atpos = confixWrapper("initvar", "var atpos = confixWrapper(\"functionCall\", \"x.indexOf('@')\", [\"@\"], ['@'], \"validateEmail\", x.indexOf('@'))", [""], [], "validateEmail", confixWrapper("functionCall", "x.indexOf('@')", ["@"], ['@'], "validateEmail", x.indexOf('@')));
  var dotpos = confixWrapper("initvar", "var dotpos = confixWrapper(\"functionCall\", \"x.lastIndexOf('.')\", [\".\"], ['.'], \"validateEmail\", x.lastIndexOf('.'))", [""], [], "validateEmail", confixWrapper("functionCall", "x.lastIndexOf('.')", ["."], ['.'], "validateEmail", x.lastIndexOf('.')));
  if (confixWrapper("condition", "atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length", [""], [], "validateEmail", atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)) 
  {
    confixWrapper("functionCall", "document.getElementById(\"error_email\")", ["error_email"], ["error_email"], "validateEmail", document.getElementById("error_email")).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"error_email\")\", [\"error_email\"], [\"error_email\"], \"validateEmail\", document.getElementById(\"error_email\")).innerHTML = \"* Invalid email id\"", [""], [], "validateEmail", "* Invalid email id");
    return confixWrapper("return", "return false;", [""], [], "validateEmail", false);
  }
  return confixWrapper("return", "return true;", [""], [], "validateEmail", true);
}
function validateNumber(f) {
  var number = confixWrapper("initvar", "var number = /^[0-9]+$/", [""], [], "validateNumber", /^[0-9]+$/);
  input = confixWrapper("infix", "input = f.phnum.value", ["f.phnum"], [f.phnum], "validateNumber", f.phnum.value);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"input.match(number)\", [\"number\"], [number], \"validateNumber\", input.match(number))", [""], [], "validateNumber", confixWrapper("functionCall", "input.match(number)", ["number"], [number], "validateNumber", input.match(number)))) 
  {
    return confixWrapper("return", "return true;", [""], [], "validateNumber", true);
  } else {
    confixWrapper("functionCall", "document.getElementById(\"error_phnum\")", ["error_phnum"], ["error_phnum"], "validateNumber", document.getElementById("error_phnum")).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"document.getElementById(\"error_phnum\")\", [\"error_phnum\"], [\"error_phnum\"], \"validateNumber\", document.getElementById(\"error_phnum\")).innerHTML = \"* \" + field + \" Enter Numbers Only\"", [""], [], "validateNumber", "* " + field + " Enter Numbers Only");
    return confixWrapper("return", "return false;", [""], [], "validateNumber", false);
  }
}
