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
function kd_alert(s) {
  if (confixWrapper("condition", "global_last_kd_alert != s", ["s"], [s], "kd_alert", global_last_kd_alert != s)) 
  confixWrapper("functionCall", "alert('Sorry, your provider (' + global_prov + ') ' + s)", ["Sorry, your provider ( + global_prov + )  + s"], ['Sorry, your provider (' + global_prov + ') ' + s], "kd_alert", alert('Sorry, your provider (' + global_prov + ') ' + s));
  global_last_kd_alert = confixWrapper("infix", "global_last_kd_alert = s", [""], [], "kd_alert", s);
}
function foundSide(s, eve) {
  var sa = confixWrapper("initvar", "var sa = new Array()", [""], [], "foundSide", new Array());
  var t;
  var This = confixWrapper("initvar", "var This = confixWrapper(\"functionCall\", \"dg('_' + s)\", [\"_ + s\"], ['_' + s], \"foundSide\", dg('_' + s))", [""], [], "foundSide", confixWrapper("functionCall", "dg('_' + s)", ["_ + s"], ['_' + s], "foundSide", dg('_' + s)));
  while ((t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"s.indexOf('_')\", [\"_\"], ['_'], \"foundSide\", s.indexOf('_'))", [""], [], "foundSide", confixWrapper("functionCall", "s.indexOf('_')", ["_"], ['_'], "foundSide", s.indexOf('_')))) != -1) 
    {
      sa[sa.length] = confixWrapper("infix", "sa[sa.length] = confixWrapper(\"functionCall\", \"s.substring(0, t)\", [\"0\", \"t\"], [0, t], \"foundSide\", s.substring(0, t))", [""], [], "foundSide", confixWrapper("functionCall", "s.substring(0, t)", ["0", "t"], [0, t], "foundSide", s.substring(0, t)));
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(t + 1, s.length)\", [\"t + 1\", \"s.length\"], [t + 1, s.length], \"foundSide\", s.substring(t + 1, s.length))", [""], [], "foundSide", confixWrapper("functionCall", "s.substring(t + 1, s.length)", ["t + 1", "s.length"], [t + 1, s.length], "foundSide", s.substring(t + 1, s.length)));
    }
  sa[sa.length] = confixWrapper("infix", "sa[sa.length] = s", [""], [], "foundSide", s);
  sa[2] = confixWrapper("infix", "sa[2] = confixWrapper(\"functionCall\", \"parseInt(sa[2])\", [\"sa[2]\"], [sa[2]], \"foundSide\", parseInt(sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "parseInt(sa[2])", ["sa[2]"], [sa[2]], "foundSide", parseInt(sa[2])));
  sa[3] = confixWrapper("infix", "sa[3] = confixWrapper(\"functionCall\", \"parseInt(sa[3])\", [\"sa[3]\"], [sa[3]], \"foundSide\", parseInt(sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "parseInt(sa[3])", ["sa[3]"], [sa[3]], "foundSide", parseInt(sa[3])));
  var bs = confixWrapper("initvar", "var bs = confixWrapper(\"functionCall\", \"BoxLength(sa[0])\", [\"sa[0]\"], [sa[0]], \"foundSide\", BoxLength(sa[0]))", [""], [], "foundSide", confixWrapper("functionCall", "BoxLength(sa[0])", ["sa[0]"], [sa[0]], "foundSide", BoxLength(sa[0])));
  var pre = confixWrapper("initvar", "var pre = '_' + sa[0] + '_'", [""], [], "foundSide", '_' + sa[0] + '_');
  switch (sa[1]) {
    case 'DefaultDivBackBackEr':
      break;
    case 'DefaultDivBackIsColorEr':
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 0)", ["pre + DefaultDivBackgroundIsTexture", "0"], [pre + 'DefaultDivBackgroundIsTexture', 0], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 0)", ["pre + DefaultDivBackgroundIsImage", "0"], [pre + 'DefaultDivBackgroundIsImage', 0], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 1)", ["pre + DefaultDivBackgroundIsColor", "1"], [pre + 'DefaultDivBackgroundIsColor', 1], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 1));
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', '')", ["sa[0] + _DefaultDiv_ + i", "backgroundImage", ""], [sa[0] + '_DefaultDiv_' + i, 'backgroundImage', ''], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', ''));
      break;
    case 'DefaultDivBackIsTextureEr':
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 0)", ["pre + DefaultDivBackgroundIsColor", "0"], [pre + 'DefaultDivBackgroundIsColor', 0], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 0)", ["pre + DefaultDivBackgroundIsImage", "0"], [pre + 'DefaultDivBackgroundIsImage', 0], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 1, 'inline')", ["pre + DefaultDivBackgroundIsTexture", "1", "inline"], [pre + 'DefaultDivBackgroundIsTexture', 1, 'inline'], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 1, 'inline'));
      confixWrapper("functionCall", "doDuty(dg(pre + 'DefaultDivBackTextureEr'))", ["dg(pre + DefaultDivBackTextureEr)"], [confixWrapper("functionCall", "dg(pre + 'DefaultDivBackTextureEr')", ["pre + DefaultDivBackTextureEr"], [pre + 'DefaultDivBackTextureEr'], "foundSide", dg(pre + 'DefaultDivBackTextureEr'))], "foundSide", doDuty(confixWrapper("functionCall", "dg(pre + 'DefaultDivBackTextureEr')", ["pre + DefaultDivBackTextureEr"], [pre + 'DefaultDivBackTextureEr'], "foundSide", dg(pre + 'DefaultDivBackTextureEr'))));
      break;
    case 'DefaultDivBackIsImageEr':
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 0)", ["pre + DefaultDivBackgroundIsColor", "0"], [pre + 'DefaultDivBackgroundIsColor', 0], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 0)", ["pre + DefaultDivBackgroundIsTexture", "0"], [pre + 'DefaultDivBackgroundIsTexture', 0], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 1, 'inline')", ["pre + DefaultDivBackgroundIsImage", "1", "inline"], [pre + 'DefaultDivBackgroundIsImage', 1, 'inline'], "foundSide", SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 1, 'inline'));
      confixWrapper("functionCall", "doDuty(dg(pre + 'DefaultDivBackImageEr'))", ["dg(pre + DefaultDivBackImageEr)"], [confixWrapper("functionCall", "dg(pre + 'DefaultDivBackImageEr')", ["pre + DefaultDivBackImageEr"], [pre + 'DefaultDivBackImageEr'], "foundSide", dg(pre + 'DefaultDivBackImageEr'))], "foundSide", doDuty(confixWrapper("functionCall", "dg(pre + 'DefaultDivBackImageEr')", ["pre + DefaultDivBackImageEr"], [pre + 'DefaultDivBackImageEr'], "foundSide", dg(pre + 'DefaultDivBackImageEr'))));
      break;
    case 'DefaultDivBackColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', sa[0] + '_DefaultDiv_0')", ["This.value", "backgroundColor", "sa[0] + _DefaultDiv_0"], [This.value, 'backgroundColor', sa[0] + '_DefaultDiv_0'], "foundSide", IPickColor(This.value, 'backgroundColor', sa[0] + '_DefaultDiv_0'));
      break;
    case 'DefaultDivBackColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'DefaultDivBackColorEr', 'backgroundColor', sa[0] + '_DefaultDiv_0')", ["eve", "pre + DefaultDivBackColorEr", "backgroundColor", "sa[0] + _DefaultDiv_0"], [eve, pre + 'DefaultDivBackColorEr', 'backgroundColor', sa[0] + '_DefaultDiv_0'], "foundSide", ShowCP(eve, pre + 'DefaultDivBackColorEr', 'backgroundColor', sa[0] + '_DefaultDiv_0'));
      break;
    case 'DefaultDivBackTextureEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This)", ["sa[0] + _DefaultDiv_ + i", "backgroundImage", "This"], [sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat')", ["sa[0] + _DefaultDiv_ + i", "backgroundRepeat", "repeat"], [sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat'], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat'));
        }
      break;
    case 'DefaultDivBackImageEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This)", ["sa[0] + _DefaultDiv_ + i", "backgroundImage", "This"], [sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat')", ["sa[0] + _DefaultDiv_ + i", "backgroundRepeat", "no-repeat"], [sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat'], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat'));
        }
      break;
    case 'DefaultBorderStyleEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderStyle', This)", ["sa[0] + _DefaultDiv_ + i", "borderStyle", "This"], [sa[0] + '_DefaultDiv_' + i, 'borderStyle', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderStyle', This));
      break;
    case 'DefaultBorderWidthEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderWidth', This)", ["sa[0] + _DefaultDiv_ + i", "borderWidth", "This"], [sa[0] + '_DefaultDiv_' + i, 'borderWidth', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderWidth', This));
      break;
    case 'DefaultBorderColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', sa[0] + '_DefaultDiv_0')", ["This.value", "borderColor", "sa[0] + _DefaultDiv_0"], [This.value, 'borderColor', sa[0] + '_DefaultDiv_0'], "foundSide", IPickColor(This.value, 'borderColor', sa[0] + '_DefaultDiv_0'));
      break;
    case 'DefaultBorderColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'DefaultBorderColorEr', 'borderColor', sa[0] + '_DefaultDiv_0')", ["eve", "pre + DefaultBorderColorEr", "borderColor", "sa[0] + _DefaultDiv_0"], [eve, pre + 'DefaultBorderColorEr', 'borderColor', sa[0] + '_DefaultDiv_0'], "foundSide", ShowCP(eve, pre + 'DefaultBorderColorEr', 'borderColor', sa[0] + '_DefaultDiv_0'));
      break;
    case 'SepBorderStyleEr':
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This)", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomStyle", "This"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This));
      break;
    case 'SepBorderWidthEr':
      var mb = confixWrapper("initvar", "var mb = (confixWrapper(\"functionCall\", \"parseInt(dg('_' + sa[0] + '_PartSepHeight').value)\", [\"dg(_ + sa[0] + _PartSepHeight).value\"], [confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_PartSepHeight')\", [\"_ + sa[0] + _PartSepHeight\"], ['_' + sa[0] + '_PartSepHeight'], \"foundSide\", dg('_' + sa[0] + '_PartSepHeight')).value], \"foundSide\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_PartSepHeight')\", [\"_ + sa[0] + _PartSepHeight\"], ['_' + sa[0] + '_PartSepHeight'], \"foundSide\", dg('_' + sa[0] + '_PartSepHeight')).value)) - parseInt(This.value)) / 2", [""], [], "foundSide", (confixWrapper("functionCall", "parseInt(dg('_' + sa[0] + '_PartSepHeight').value)", ["dg(_ + sa[0] + _PartSepHeight).value"], [confixWrapper("functionCall", "dg('_' + sa[0] + '_PartSepHeight')", ["_ + sa[0] + _PartSepHeight"], ['_' + sa[0] + '_PartSepHeight'], "foundSide", dg('_' + sa[0] + '_PartSepHeight')).value], "foundSide", parseInt(confixWrapper("functionCall", "dg('_' + sa[0] + '_PartSepHeight')", ["_ + sa[0] + _PartSepHeight"], ['_' + sa[0] + '_PartSepHeight'], "foundSide", dg('_' + sa[0] + '_PartSepHeight')).value)) - parseInt(This.value)) / 2);
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', This)", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomWidth", "This"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', This], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px')", ["sa[0] + _PartSepSemiDiv_ + i", "height", "mb + px"], [sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px')", ["sa[0] + _PartSepSemiDiv_ + i", "marginBottom", "mb + px"], [sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px'));
        }
      break;
    case 'SepBorderColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1')", ["This.value", "borderBottomColor", "sa[0] + _PartSepSemiDiv_1"], [This.value, 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1'], "foundSide", IPickColor(This.value, 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1'));
      break;
    case 'SepBorderColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'SepBorderColorEr', 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1')", ["eve", "pre + SepBorderColorEr", "borderBottomColor", "sa[0] + _PartSepSemiDiv_1"], [eve, pre + 'SepBorderColorEr', 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1'], "foundSide", ShowCP(eve, pre + 'SepBorderColorEr', 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1'));
      break;
    case 'PartSepDivBackBackEr':
      break;
    case 'PartSepDivBackIsColorEr':
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 0)", ["pre + PartSepDivBackgroundIsTexture", "0"], [pre + 'PartSepDivBackgroundIsTexture', 0], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 0)", ["pre + PartSepDivBackgroundIsImage", "0"], [pre + 'PartSepDivBackgroundIsImage', 0], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 1)", ["pre + PartSepDivBackgroundIsColor", "1"], [pre + 'PartSepDivBackgroundIsColor', 1], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 1));
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', '')", ["sa[0] + _PartSepDiv_ + i", "backgroundImage", ""], [sa[0] + '_PartSepDiv_' + i, 'backgroundImage', ''], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', ''));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '1px')", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomWidth", "1px"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '1px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '1px'));
        }
      break;
    case 'PartSepDivBackIsTextureEr':
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 0)", ["pre + PartSepDivBackgroundIsColor", "0"], [pre + 'PartSepDivBackgroundIsColor', 0], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 0)", ["pre + PartSepDivBackgroundIsImage", "0"], [pre + 'PartSepDivBackgroundIsImage', 0], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 1, 'inline')", ["pre + PartSepDivBackgroundIsTexture", "1", "inline"], [pre + 'PartSepDivBackgroundIsTexture', 1, 'inline'], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 1, 'inline'));
      confixWrapper("functionCall", "doDuty(dg(pre + 'PartSepDivBackTextureEr'))", ["dg(pre + PartSepDivBackTextureEr)"], [confixWrapper("functionCall", "dg(pre + 'PartSepDivBackTextureEr')", ["pre + PartSepDivBackTextureEr"], [pre + 'PartSepDivBackTextureEr'], "foundSide", dg(pre + 'PartSepDivBackTextureEr'))], "foundSide", doDuty(confixWrapper("functionCall", "dg(pre + 'PartSepDivBackTextureEr')", ["pre + PartSepDivBackTextureEr"], [pre + 'PartSepDivBackTextureEr'], "foundSide", dg(pre + 'PartSepDivBackTextureEr'))));
      break;
    case 'PartSepDivBackIsImageEr':
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 0)", ["pre + PartSepDivBackgroundIsColor", "0"], [pre + 'PartSepDivBackgroundIsColor', 0], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 0)", ["pre + PartSepDivBackgroundIsTexture", "0"], [pre + 'PartSepDivBackgroundIsTexture', 0], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 0));
      confixWrapper("functionCall", "SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 1, 'inline')", ["pre + PartSepDivBackgroundIsImage", "1", "inline"], [pre + 'PartSepDivBackgroundIsImage', 1, 'inline'], "foundSide", SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 1, 'inline'));
      confixWrapper("functionCall", "doDuty(dg(pre + 'PartSepDivBackImageEr'))", ["dg(pre + PartSepDivBackImageEr)"], [confixWrapper("functionCall", "dg(pre + 'PartSepDivBackImageEr')", ["pre + PartSepDivBackImageEr"], [pre + 'PartSepDivBackImageEr'], "foundSide", dg(pre + 'PartSepDivBackImageEr'))], "foundSide", doDuty(confixWrapper("functionCall", "dg(pre + 'PartSepDivBackImageEr')", ["pre + PartSepDivBackImageEr"], [pre + 'PartSepDivBackImageEr'], "foundSide", dg(pre + 'PartSepDivBackImageEr'))));
      break;
    case 'PartSepDivBackColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', sa[0] + '_PartSepSemiDiv_1')", ["This.value", "borderColor", "sa[0] + _PartSepSemiDiv_1"], [This.value, 'borderColor', sa[0] + '_PartSepSemiDiv_1'], "foundSide", IPickColor(This.value, 'borderColor', sa[0] + '_PartSepSemiDiv_1'));
      break;
    case 'PartSepDivBackColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'PartSepDivBackColorEr', 'borderColor', sa[0] + '_PartSepSemiDiv_1')", ["eve", "pre + PartSepDivBackColorEr", "borderColor", "sa[0] + _PartSepSemiDiv_1"], [eve, pre + 'PartSepDivBackColorEr', 'borderColor', sa[0] + '_PartSepSemiDiv_1'], "foundSide", ShowCP(eve, pre + 'PartSepDivBackColorEr', 'borderColor', sa[0] + '_PartSepSemiDiv_1'));
      break;
    case 'PartSepDivBackTextureEr':
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This)", ["sa[0] + _PartSepDiv_ + i", "backgroundImage", "This"], [sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat')", ["sa[0] + _PartSepDiv_ + i", "backgroundRepeat", "repeat"], [sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat'], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px')", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomWidth", "0px"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'));
        }
      break;
    case 'PartSepDivBackImageEr':
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This)", ["sa[0] + _PartSepDiv_ + i", "backgroundImage", "This"], [sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat')", ["sa[0] + _PartSepDiv_ + i", "backgroundRepeat", "no-repeat"], [sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat'], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px')", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomWidth", "0px"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'));
        }
      break;
    case 'PartSepHeight':
      var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"foundSide\", parseFloat(This.value))", [""], [], "foundSide", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "foundSide", parseFloat(This.value)));
      var mb = confixWrapper("initvar", "var mb = (t - confixWrapper(\"functionCall\", \"parseInt(dg('_' + sa[0] + '_SepBorderWidthEr').value)\", [\"dg(_ + sa[0] + _SepBorderWidthEr).value\"], [confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_SepBorderWidthEr')\", [\"_ + sa[0] + _SepBorderWidthEr\"], ['_' + sa[0] + '_SepBorderWidthEr'], \"foundSide\", dg('_' + sa[0] + '_SepBorderWidthEr')).value], \"foundSide\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_SepBorderWidthEr')\", [\"_ + sa[0] + _SepBorderWidthEr\"], ['_' + sa[0] + '_SepBorderWidthEr'], \"foundSide\", dg('_' + sa[0] + '_SepBorderWidthEr')).value))) / 2", [""], [], "foundSide", (t - confixWrapper("functionCall", "parseInt(dg('_' + sa[0] + '_SepBorderWidthEr').value)", ["dg(_ + sa[0] + _SepBorderWidthEr).value"], [confixWrapper("functionCall", "dg('_' + sa[0] + '_SepBorderWidthEr')", ["_ + sa[0] + _SepBorderWidthEr"], ['_' + sa[0] + '_SepBorderWidthEr'], "foundSide", dg('_' + sa[0] + '_SepBorderWidthEr')).value], "foundSide", parseInt(confixWrapper("functionCall", "dg('_' + sa[0] + '_SepBorderWidthEr')", ["_ + sa[0] + _SepBorderWidthEr"], ['_' + sa[0] + '_SepBorderWidthEr'], "foundSide", dg('_' + sa[0] + '_SepBorderWidthEr')).value))) / 2);
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'height', t + 'px')", ["sa[0] + _PartSepDiv_ + i", "height", "t + px"], [sa[0] + '_PartSepDiv_' + i, 'height', t + 'px'], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'height', t + 'px'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px')", ["sa[0] + _PartSepSemiDiv_ + i", "height", "mb + px"], [sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px')", ["sa[0] + _PartSepSemiDiv_ + i", "marginBottom", "mb + px"], [sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px'));
        }
      break;
    case 'PartSepHeightInc':
      confixWrapper("functionCall", "doIncDec(pre + 'PartSepHeight', 2, 0, 200)", ["pre + PartSepHeight", "2", "0", "200"], [pre + 'PartSepHeight', 2, 0, 200], "foundSide", doIncDec(pre + 'PartSepHeight', 2, 0, 200));
      break;
    case 'PartSepHeightDec':
      confixWrapper("functionCall", "doIncDec(pre + 'PartSepHeight', -2, 0, 200)", ["pre + PartSepHeight", "-2", "0", "200"], [pre + 'PartSepHeight', -2, 0, 200], "foundSide", doIncDec(pre + 'PartSepHeight', -2, 0, 200));
      break;
    case 'PartDivLineHeightEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_Main_' + i, 'lineHeight', This)", ["sa[0] + _Main_ + i", "lineHeight", "This"], [sa[0] + '_Main_' + i, 'lineHeight', This], "foundSide", ChangeByInput(sa[0] + '_Main_' + i, 'lineHeight', This));
        }
      break;
    case 'TitleColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'color', sa[0] + '_Title_0')", ["This.value", "color", "sa[0] + _Title_0"], [This.value, 'color', sa[0] + '_Title_0'], "foundSide", IPickColor(This.value, 'color', sa[0] + '_Title_0'));
      break;
    case 'TitleColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'TitleColorEr', 'color', sa[0] + '_Title_0')", ["eve", "pre + TitleColorEr", "color", "sa[0] + _Title_0"], [eve, pre + 'TitleColorEr', 'color', sa[0] + '_Title_0'], "foundSide", ShowCP(eve, pre + 'TitleColorEr', 'color', sa[0] + '_Title_0'));
      break;
    case 'DefaultDivColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'color', sa[0] + '_DefaultDiv_0')", ["This.value", "color", "sa[0] + _DefaultDiv_0"], [This.value, 'color', sa[0] + '_DefaultDiv_0'], "foundSide", IPickColor(This.value, 'color', sa[0] + '_DefaultDiv_0'));
      break;
    case 'DefaultDivColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'DefaultDivColorEr', 'color', sa[0] + '_DefaultDiv_0')", ["eve", "pre + DefaultDivColorEr", "color", "sa[0] + _DefaultDiv_0"], [eve, pre + 'DefaultDivColorEr', 'color', sa[0] + '_DefaultDiv_0'], "foundSide", ShowCP(eve, pre + 'DefaultDivColorEr', 'color', sa[0] + '_DefaultDiv_0'));
      break;
    case 'TitleUnderlineEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', sa[0] + '_Title_0')", ["This.value", "borderColor", "sa[0] + _Title_0"], [This.value, 'borderColor', sa[0] + '_Title_0'], "foundSide", IPickColor(This.value, 'borderColor', sa[0] + '_Title_0'));
      break;
    case 'TitleUnderlineErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'TitleUnderlineEr', 'borderColor', sa[0] + '_Title_0')", ["eve", "pre + TitleUnderlineEr", "borderColor", "sa[0] + _Title_0"], [eve, pre + 'TitleUnderlineEr', 'borderColor', sa[0] + '_Title_0'], "foundSide", ShowCP(eve, pre + 'TitleUnderlineEr', 'borderColor', sa[0] + '_Title_0'));
      break;
    case 'LinkColorEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'color', sa[0] + 'SideColorCSS_Link')", ["This.value", "color", "sa[0] + SideColorCSS_Link"], [This.value, 'color', sa[0] + 'SideColorCSS_Link'], "foundSide", IPickColor(This.value, 'color', sa[0] + 'SideColorCSS_Link'));
      break;
    case 'LinkColorErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'LinkColorEr', 'color', sa[0] + 'SideColorCSS_Link')", ["eve", "pre + LinkColorEr", "color", "sa[0] + SideColorCSS_Link"], [eve, pre + 'LinkColorEr', 'color', sa[0] + 'SideColorCSS_Link'], "foundSide", ShowCP(eve, pre + 'LinkColorEr', 'color', sa[0] + 'SideColorCSS_Link'));
      break;
    case 'LinkHoverEr':
      global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "foundSide", This);
      confixWrapper("functionCall", "IPickColor(This.value, 'color', sa[0] + 'SideColorCSS_Hover')", ["This.value", "color", "sa[0] + SideColorCSS_Hover"], [This.value, 'color', sa[0] + 'SideColorCSS_Hover'], "foundSide", IPickColor(This.value, 'color', sa[0] + 'SideColorCSS_Hover'));
      break;
    case 'LinkHoverErA':
      confixWrapper("functionCall", "ShowCP(eve, pre + 'LinkHoverEr', 'color', sa[0] + 'SideColorCSS_Hover')", ["eve", "pre + LinkHoverEr", "color", "sa[0] + SideColorCSS_Hover"], [eve, pre + 'LinkHoverEr', 'color', sa[0] + 'SideColorCSS_Hover'], "foundSide", ShowCP(eve, pre + 'LinkHoverEr', 'color', sa[0] + 'SideColorCSS_Hover'));
      break;
    case 'RemoveThisBox':
      if (confixWrapper("condition", "bs == 1", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", bs == 1)) 
      confixWrapper("functionCall", "alert('At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["At least one box should be present on the  + (sa[0] == R ? right : left) +  side!"], ['At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        for (var i = confixWrapper("initvar", "var i = sa[2]", [""], [], "foundSide", sa[2]); confixWrapper("loopCondition", "i < bs - 1", [""], [], "foundSide", i < bs - 1); i++) 
          confixWrapper("functionCall", "CopyBox(sa[0], i + 1, i)", ["sa[0]", "i + 1", "i"], [sa[0], i + 1, i], "foundSide", CopyBox(sa[0], i + 1, i));
        confixWrapper("functionCall", "ClearBox(sa[0], bs - 1)", ["sa[0]", "bs - 1"], [sa[0], bs - 1], "foundSide", ClearBox(sa[0], bs - 1));
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + (bs - 1), 0)", ["sa[0] + _PartDiv_ + (bs - 1)", "0"], [sa[0] + '_PartDiv_' + (bs - 1), 0], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + (bs - 1), 0));
        confixWrapper("functionCall", "HideEditPartBox()", [], [], "foundSide", HideEditPartBox());
        confixWrapper("functionCall", "dg('_' + sa[0] + '_boxNumForce')", ["_ + sa[0] + _boxNumForce"], ['_' + sa[0] + '_boxNumForce'], "foundSide", dg('_' + sa[0] + '_boxNumForce')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_boxNumForce')\", [\"_ + sa[0] + _boxNumForce\"], ['_' + sa[0] + '_boxNumForce'], \"foundSide\", dg('_' + sa[0] + '_boxNumForce')).value = bs - 1", [""], [], "foundSide", bs - 1);
      }
      break;
    case 'AddOneBox':
      if (confixWrapper("condition", "bs == maxBoxNumOnSides", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", bs == maxBoxNumOnSides)) 
      confixWrapper("functionCall", "alert('Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["Just reached maximum box number on the  + (sa[0] == R ? right : left) +  side!"], ['Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + bs, 1)", ["sa[0] + _PartDiv_ + bs", "1"], [sa[0] + '_PartDiv_' + bs, 1], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + bs, 1));
        for (var i = confixWrapper("initvar", "var i = bs", [""], [], "foundSide", bs); confixWrapper("loopCondition", "i > sa[2] + 1", [""], [], "foundSide", i > sa[2] + 1); i--) 
          confixWrapper("functionCall", "CopyBox(sa[0], i - 1, i)", ["sa[0]", "i - 1", "i"], [sa[0], i - 1, i], "foundSide", CopyBox(sa[0], i - 1, i));
        confixWrapper("functionCall", "ClearBox(sa[0], sa[2] + 1)", ["sa[0]", "sa[2] + 1"], [sa[0], sa[2] + 1], "foundSide", ClearBox(sa[0], sa[2] + 1));
        confixWrapper("functionCall", "HideEditPartBox()", [], [], "foundSide", HideEditPartBox());
        confixWrapper("functionCall", "dg('_' + sa[0] + '_boxNumForce')", ["_ + sa[0] + _boxNumForce"], ['_' + sa[0] + '_boxNumForce'], "foundSide", dg('_' + sa[0] + '_boxNumForce')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_boxNumForce')\", [\"_ + sa[0] + _boxNumForce\"], ['_' + sa[0] + '_boxNumForce'], \"foundSide\", dg('_' + sa[0] + '_boxNumForce')).value = bs + 1", [""], [], "foundSide", bs + 1);
      }
      break;
    case 'EditThisPart':
      confixWrapper("functionCall", "ShowEditPartBox(eve, sa[2], sa[0])", ["eve", "sa[2]", "sa[0]"], [eve, sa[2], sa[0]], "foundSide", ShowEditPartBox(eve, sa[2], sa[0]));
      break;
    case 'TitleTxt':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2]))", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])))) 
      break;
      var thisId = confixWrapper("initvar", "var thisId = sa[0] + '_Title_' + sa[2]", [""], [], "foundSide", sa[0] + '_Title_' + sa[2]);
      confixWrapper("functionCall", "ChangeByInput(thisId, 'innerHTML', This)", ["thisId", "innerHTML", "This"], [thisId, 'innerHTML', This], "foundSide", ChangeByInput(thisId, 'innerHTML', This));
      if (confixWrapper("condition", "This.value.length", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", This.value.length)) 
      {
        confixWrapper("functionCall", "SwitchDisplay(thisId, 1)", ["thisId", "1"], [thisId, 1], "foundSide", SwitchDisplay(thisId, 1));
        confixWrapper("functionCall", "ChangeByInput(thisId, 'borderBottomWidth', '1px')", ["thisId", "borderBottomWidth", "1px"], [thisId, 'borderBottomWidth', '1px'], "foundSide", ChangeByInput(thisId, 'borderBottomWidth', '1px'));
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_Main_' + sa[2], 'marginTop', '0px')", ["sa[0] + _Main_ + sa[2]", "marginTop", "0px"], [sa[0] + '_Main_' + sa[2], 'marginTop', '0px'], "foundSide", ChangeByInput(sa[0] + '_Main_' + sa[2], 'marginTop', '0px'));
      } else {
        confixWrapper("functionCall", "SwitchDisplay(thisId, 0)", ["thisId", "0"], [thisId, 0], "foundSide", SwitchDisplay(thisId, 0));
        confixWrapper("functionCall", "ChangeByInput(thisId, 'borderBottomWidth', '0px')", ["thisId", "borderBottomWidth", "0px"], [thisId, 'borderBottomWidth', '0px'], "foundSide", ChangeByInput(thisId, 'borderBottomWidth', '0px'));
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_Main_' + sa[2], 'marginTop', '3px')", ["sa[0] + _Main_ + sa[2]", "marginTop", "3px"], [sa[0] + '_Main_' + sa[2], 'marginTop', '3px'], "foundSide", ChangeByInput(sa[0] + '_Main_' + sa[2], 'marginTop', '3px'));
      }
      break;
    case 'PreSurr':
      var tv = confixWrapper("initvar", "var tv = This.value", [""], [], "foundSide", This.value);
      if (confixWrapper("condition", "tv.length", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", tv.length)) 
      tv = confixWrapper("infix", "tv = tv + '&#8206;'", [""], [], "foundSide", tv + '&#8206;');
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBoxByFor(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBoxByFor(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBoxByFor(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBoxByFor(sa[0], sa[2])));
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < ls", [""], [], "foundSide", i < ls); i++) 
        confixWrapper("functionCall", "dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)", [" + sa[0] + _LinkPreSurr_ + sa[2] + _ + i"], ['' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i], "foundSide", dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)\", [\" + sa[0] + _LinkPreSurr_ + sa[2] + _ + i\"], ['' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i], \"foundSide\", dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)).innerHTML = tv", [""], [], "foundSide", tv);
      break;
    case 'PstSurr':
      var tv = confixWrapper("initvar", "var tv = This.value", [""], [], "foundSide", This.value);
      if (confixWrapper("condition", "tv.length", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", tv.length)) 
      tv = confixWrapper("infix", "tv = '&#8206;' + tv", [""], [], "foundSide", '&#8206;' + tv);
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBoxByFor(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBoxByFor(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBoxByFor(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBoxByFor(sa[0], sa[2])));
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < ls", [""], [], "foundSide", i < ls); i++) 
        confixWrapper("functionCall", "dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)", [" + sa[0] + _LinkPstSurr_ + sa[2] + _ + i"], ['' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i], "foundSide", dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)\", [\" + sa[0] + _LinkPstSurr_ + sa[2] + _ + i\"], ['' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i], \"foundSide\", dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)).innerHTML = tv", [""], [], "foundSide", tv);
      break;
    case 'LinkTxt':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2]))", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])))) 
      break;
      var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBody_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBody_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])));
      var thatText = confixWrapper("initvar", "var thatText = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBodyButText_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBodyButText_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3])));
      var thatCont = confixWrapper("initvar", "var thatCont = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBodyContainer_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBodyContainer_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3])));
      var sin = confixWrapper("initvar", "var sin = This.value", [""], [], "foundSide", This.value), tin;
      if (confixWrapper("condition", "sin == confixWrapper(\"functionCall\", \"translateIt('email')\", [\"email\"], ['email'], \"foundSide\", translateIt('email'))", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == confixWrapper("functionCall", "translateIt('email')", ["email"], ['email'], "foundSide", translateIt('email')))) 
      sin = confixWrapper("infix", "sin = confixWrapper(\"functionCall\", \"translateIt('e-mail')\", [\"e-mail\"], ['e-mail'], \"foundSide\", translateIt('e-mail'))", [""], [], "foundSide", confixWrapper("functionCall", "translateIt('e-mail')", ["e-mail"], ['e-mail'], "foundSide", translateIt('e-mail')));
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"sin.substring(0, 2)\", [\"0\", \"2\"], [0, 2], \"foundSide\", sin.substring(0, 2)) == ' $'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", confixWrapper("functionCall", "sin.substring(0, 2)", ["0", "2"], [0, 2], "foundSide", sin.substring(0, 2)) == ' $')) 
      sin = confixWrapper("infix", "sin = confixWrapper(\"functionCall\", \"sin.substring(1, sin.length)\", [\"1\", \"sin.length\"], [1, sin.length], \"foundSide\", sin.substring(1, sin.length))", [""], [], "foundSide", confixWrapper("functionCall", "sin.substring(1, sin.length)", ["1", "sin.length"], [1, sin.length], "foundSide", sin.substring(1, sin.length)));
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"sin.charAt(0)\", [\"0\"], [0], \"foundSide\", sin.charAt(0)) == ' '", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", confixWrapper("functionCall", "sin.charAt(0)", ["0"], [0], "foundSide", sin.charAt(0)) == ' ')) 
      sin = confixWrapper("infix", "sin = '&nbsp;' + confixWrapper(\"functionCall\", \"sin.substring(1, sin.length)\", [\"1\", \"sin.length\"], [1, sin.length], \"foundSide\", sin.substring(1, sin.length))", [""], [], "foundSide", '&nbsp;' + confixWrapper("functionCall", "sin.substring(1, sin.length)", ["1", "sin.length"], [1, sin.length], "foundSide", sin.substring(1, sin.length)));
      confixWrapper("functionCall", "enableEditLink(sa[0], sa[2], sa[3])", ["sa[0]", "sa[2]", "sa[3]"], [sa[0], sa[2], sa[3]], "foundSide", enableEditLink(sa[0], sa[2], sa[3]));
      if (confixWrapper("condition", "sin == '$ARCHIVE'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$ARCHIVE')) 
      if (confixWrapper("condition", "global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Archive Index Listing\".')", ["does not support Archive Index Listing."], ['does not support "Archive Index Listing".'], "foundSide", kd_alert('does not support "Archive Index Listing".')); else {
        sin = confixWrapper("infix", "sin = 'Oct 2005'", [""], [], "foundSide", 'Oct 2005');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$RECENT'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$RECENT')) 
      if (confixWrapper("condition", "global_prov == 'blogfa' || global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'blogfa' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Recenet entries listing\".')", ["does not support Recenet entries listing."], ['does not support "Recenet entries listing".'], "foundSide", kd_alert('does not support "Recenet entries listing".')); else {
        sin = confixWrapper("infix", "sin = '[Last postTitles Here]'", [""], [], "foundSide", '[Last postTitles Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$PROFILE'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$PROFILE')) 
      if (confixWrapper("condition", "global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Blogger's profile\".')", ["does not support Bloggers profile."], ['does not support "Blogger\'s profile".'], "foundSide", kd_alert('does not support "Blogger\'s profile".')); else {
        sin = confixWrapper("infix", "sin = '[Your Profile Here]'", [""], [], "foundSide", '[Your Profile Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 0)", ["sa[0]", "sa[2]", "sa[3]", "0"], [sa[0], sa[2], sa[3], 0], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 0));
      }
      if (confixWrapper("condition", "sin == '$LINKS'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$LINKS')) 
      if (confixWrapper("condition", "global_prov == 'blogger'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'blogger')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Blog's links listing\".')", ["does not support Blogs links listing."], ['does not support "Blog\'s links listing".'], "foundSide", kd_alert('does not support "Blog\'s links listing".')); else {
        sin = confixWrapper("infix", "sin = '[Your Links Here]'", [""], [], "foundSide", '[Your Links Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$CATEGLIST'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$CATEGLIST')) 
      if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Blog's category listing\".')", ["does not support Blogs category listing."], ['does not support "Blog\'s category listing".'], "foundSide", kd_alert('does not support "Blog\'s category listing".')); else {
        sin = confixWrapper("infix", "sin = '[Category List Here]'", [""], [], "foundSide", '[Category List Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$LINKDUMP'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$LINKDUMP')) 
      if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Blog's link dumps\".')", ["does not support Blogs link dumps."], ['does not support "Blog\'s link dumps".'], "foundSide", kd_alert('does not support "Blog\'s link dumps".')); else {
        sin = confixWrapper("infix", "sin = '[Daily Links Here]'", [""], [], "foundSide", '[Daily Links Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$AUTHORS'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", sin == '$AUTHORS')) 
      if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('does not support \"Blog's author listing\".')", ["does not support Blogs author listing."], ['does not support "Blog\'s author listing".'], "foundSide", kd_alert('does not support "Blog\'s author listing".')); else {
        sin = confixWrapper("infix", "sin = '[Authors List Here]'", [""], [], "foundSide", '[Authors List Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      that.innerHTML = confixWrapper("infix", "that.innerHTML = sin", [""], [], "foundSide", sin);
      thatText.innerHTML = confixWrapper("infix", "thatText.innerHTML = sin", [""], [], "foundSide", sin);
      confixWrapper("functionCall", "SwitchDisplay(thatCont, (This.value.length > 0))", ["thatCont", "(This.value.length > 0)"], [thatCont, (This.value.length > 0)], "foundSide", SwitchDisplay(thatCont, (This.value.length > 0)));
      if (confixWrapper("condition", "(thatText.style.display == 'none') != (confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])\", [\"_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]\"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], \"foundSide\", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])).value.length > 0)", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", (thatText.style.display == 'none') != (confixWrapper("functionCall", "dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])", ["_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], "foundSide", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])).value.length > 0))) 
      confixWrapper("functionCall", "doDuty(dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]), eve)", ["dg(_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3])", "eve"], [confixWrapper("functionCall", "dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])", ["_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], "foundSide", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])), eve], "foundSide", doDuty(confixWrapper("functionCall", "dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])", ["_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], "foundSide", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])), eve));
      break;
    case 'LinkUrl':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2])) || This.disabled", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])) || This.disabled)) 
      break;
      var that = confixWrapper("initvar", "var that = sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]", [""], [], "foundSide", sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]);
      var thatText = confixWrapper("initvar", "var thatText = sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]", [""], [], "foundSide", sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]);
      confixWrapper("functionCall", "SwitchDisplay((This.value == '') ? that : thatText, 0, 'inline')", ["(This.value == ) ? that : thatText", "0", "inline"], [(This.value == '') ? that : thatText, 0, 'inline'], "foundSide", SwitchDisplay((This.value == '') ? that : thatText, 0, 'inline'));
      confixWrapper("functionCall", "SwitchDisplay((This.value == '') ? thatText : that, 1, 'inline')", ["(This.value == ) ? thatText : that", "1", "inline"], [(This.value == '') ? thatText : that, 1, 'inline'], "foundSide", SwitchDisplay((This.value == '') ? thatText : that, 1, 'inline'));
      var dst = confixWrapper("initvar", "var dst = This.value", [""], [], "foundSide", This.value);
      if (confixWrapper("condition", "dst == '$HOME'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", dst == '$HOME')) 
      dst = confixWrapper("infix", "dst = 'http://[YourBlogName].' + global_prov + '.com'", [""], [], "foundSide", 'http://[YourBlogName].' + global_prov + '.com');
      if (confixWrapper("condition", "dst == '$EMAIL'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", dst == '$EMAIL')) 
      dst = confixWrapper("infix", "dst = 'mailto:[YourEmailAddress]'", [""], [], "foundSide", 'mailto:[YourEmailAddress]');
      if (confixWrapper("condition", "dst == '$ARCHIVE'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", dst == '$ARCHIVE')) 
      dst = confixWrapper("infix", "dst = 'http://[YourBlogName].' + global_prov + '.com/[ArchivePage]'", [""], [], "foundSide", 'http://[YourBlogName].' + global_prov + '.com/[ArchivePage]');
      if (confixWrapper("condition", "dst == '$RSS'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", dst == '$RSS')) 
      {
        if (confixWrapper("condition", "global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'persianblog')) 
        confixWrapper("functionCall", "kd_alert('does not support \"RSS Feed\".')", ["does not support RSS Feed."], ['does not support "RSS Feed".'], "foundSide", kd_alert('does not support "RSS Feed".')); else dst = confixWrapper("infix", "dst = 'http://[YourBlogName].' + global_prov + '.com/[RSS.xml]'", [""], [], "foundSide", 'http://[YourBlogName].' + global_prov + '.com/[RSS.xml]');
      }
      if (confixWrapper("condition", "dst == '$PSYCHO'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", dst == '$PSYCHO')) 
      dst = confixWrapper("infix", "dst = 'http://psyc.horm.org/?PsycHodrama=[YourPsycHodrama]'", [""], [], "foundSide", 'http://psyc.horm.org/?PsycHodrama=[YourPsycHodrama]');
      if (confixWrapper("condition", "dst == '$CUSTOM'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", dst == '$CUSTOM')) 
      {
        if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
        confixWrapper("functionCall", "kd_alert('does not support \"Custom HTML codes\".')", ["does not support Custom HTML codes."], ['does not support "Custom HTML codes".'], "foundSide", kd_alert('does not support "Custom HTML codes".')); else dst = confixWrapper("infix", "dst = '[Custom HTML Codes]'", [""], [], "foundSide", '[Custom HTML Codes]');
      }
      confixWrapper("functionCall", "dg(that).setAttribute('href', dst)", ["href", "dst"], ['href', dst], "foundSide", confixWrapper("functionCall", "dg(that)", ["that"], [that], "foundSide", dg(that)).setAttribute('href', dst));
      break;
    case 'LinkTtl':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2]))", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])))) 
      break;
      var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBody_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBody_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])));
      confixWrapper("functionCall", "that.setAttribute('title', This.value)", ["title", "This.value"], ['title', This.value], "foundSide", that.setAttribute('title', This.value));
      break;
    case 'RemLink':
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBox(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBox(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBox(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBox(sa[0], sa[2])));
      if (confixWrapper("condition", "ls == 1", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", ls == 1)) 
      confixWrapper("functionCall", "alert('At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["At least one box should be present on the box # + (sa[2] + 1) +  of  + (sa[0] == R ? right : left) +  side!"], ['At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        for (var i = confixWrapper("initvar", "var i = sa[3]", [""], [], "foundSide", sa[3]); confixWrapper("loopCondition", "i < ls - 1", [""], [], "foundSide", i < ls - 1); i++) 
          confixWrapper("functionCall", "CopyLink(sa[0], sa[2], i + 1, sa[0], sa[2], i)", ["sa[0]", "sa[2]", "i + 1", "sa[0]", "sa[2]", "i"], [sa[0], sa[2], i + 1, sa[0], sa[2], i], "foundSide", CopyLink(sa[0], sa[2], i + 1, sa[0], sa[2], i));
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], ls - 1, '', '', '', 0)", ["sa[0]", "sa[2]", "ls - 1", "", "", "", "0"], [sa[0], sa[2], ls - 1, '', '', '', 0], "foundSide", InsertLinkToBox(sa[0], sa[2], ls - 1, '', '', '', 0));
        confixWrapper("functionCall", "dg('_' + sa[0] + '_linkNumForce_' + sa[2])", ["_ + sa[0] + _linkNumForce_ + sa[2]"], ['_' + sa[0] + '_linkNumForce_' + sa[2]], "foundSide", dg('_' + sa[0] + '_linkNumForce_' + sa[2])).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_linkNumForce_' + sa[2])\", [\"_ + sa[0] + _linkNumForce_ + sa[2]\"], ['_' + sa[0] + '_linkNumForce_' + sa[2]], \"foundSide\", dg('_' + sa[0] + '_linkNumForce_' + sa[2])).value = ls - 1", [""], [], "foundSide", ls - 1);
      }
      break;
    case 'InsLink':
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBox(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBox(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBox(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBox(sa[0], sa[2])));
      if (confixWrapper("condition", "ls == maxLinkNumBoxes", ["s", "eve", "sa", "t", "This", "bs", "pre", "i", "mb", "thisId", "tv", "ls", "that", "thatText", "thatCont", "sin", "tin", "dst"], [s, eve, sa, t, This, bs, pre, i, mb, thisId, tv, ls, that, thatText, thatCont, sin, tin, dst], "foundSide", ls == maxLinkNumBoxes)) 
      confixWrapper("functionCall", "alert('Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["Just reached maximum link number on the box # + (sa[2] + 1) +  of  + (sa[0] == R ? right : left) +  side!"], ['Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        for (var i = confixWrapper("initvar", "var i = ls", [""], [], "foundSide", ls); confixWrapper("loopCondition", "i && i > sa[3] + 1", [""], [], "foundSide", i && i > sa[3] + 1); i--) 
          confixWrapper("functionCall", "CopyLink(sa[0], sa[2], i - 1, sa[0], sa[2], i)", ["sa[0]", "sa[2]", "i - 1", "sa[0]", "sa[2]", "i"], [sa[0], sa[2], i - 1, sa[0], sa[2], i], "foundSide", CopyLink(sa[0], sa[2], i - 1, sa[0], sa[2], i));
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], sa[3] + 1, ' ', '', '', 1)", ["sa[0]", "sa[2]", "sa[3] + 1", " ", "", "", "1"], [sa[0], sa[2], sa[3] + 1, ' ', '', '', 1], "foundSide", InsertLinkToBox(sa[0], sa[2], sa[3] + 1, ' ', '', '', 1));
        confixWrapper("functionCall", "dg('_' + sa[0] + '_linkNumForce_' + sa[2])", ["_ + sa[0] + _linkNumForce_ + sa[2]"], ['_' + sa[0] + '_linkNumForce_' + sa[2]], "foundSide", dg('_' + sa[0] + '_linkNumForce_' + sa[2])).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_linkNumForce_' + sa[2])\", [\"_ + sa[0] + _linkNumForce_ + sa[2]\"], ['_' + sa[0] + '_linkNumForce_' + sa[2]], \"foundSide\", dg('_' + sa[0] + '_linkNumForce_' + sa[2])).value = ls + 1", [""], [], "foundSide", ls + 1);
      }
      break;
    case 'addImg':
      confixWrapper("functionCall", "ShowAddImage(sa[0], sa[2], sa[3], eve)", ["sa[0]", "sa[2]", "sa[3]", "eve"], [sa[0], sa[2], sa[3], eve], "foundSide", ShowAddImage(sa[0], sa[2], sa[3], eve));
      break;
    case 'boxNumForce':
      bs = confixWrapper("infix", "bs = confixWrapper(\"functionCall\", \"BoxLengthByFor(sa[0])\", [\"sa[0]\"], [sa[0]], \"foundSide\", BoxLengthByFor(sa[0]))", [""], [], "foundSide", confixWrapper("functionCall", "BoxLengthByFor(sa[0])", ["sa[0]"], [sa[0]], "foundSide", BoxLengthByFor(sa[0])));
      for (var i = confixWrapper("initvar", "var i = This.value", [""], [], "foundSide", This.value); confixWrapper("loopCondition", "i < bs", [""], [], "foundSide", i < bs); i++) 
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + i, 0)", ["sa[0] + _PartDiv_ + i", "0"], [sa[0] + '_PartDiv_' + i, 0], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + i, 0));
      for (var i = confixWrapper("initvar", "var i = bs", [""], [], "foundSide", bs); confixWrapper("loopCondition", "i < This.value", [""], [], "foundSide", i < This.value); i++) 
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + i, 1)", ["sa[0] + _PartDiv_ + i", "1"], [sa[0] + '_PartDiv_' + i, 1], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + i, 1));
      break;
    case 'linkNumForce':
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBoxByFor(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBoxByFor(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBoxByFor(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBoxByFor(sa[0], sa[2])));
      for (var i = confixWrapper("initvar", "var i = This.value", [""], [], "foundSide", This.value); confixWrapper("loopCondition", "i < ls", [""], [], "foundSide", i < ls); i++) 
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], i, '', '', '', 0)", ["sa[0]", "sa[2]", "i", "", "", "", "0"], [sa[0], sa[2], i, '', '', '', 0], "foundSide", InsertLinkToBox(sa[0], sa[2], i, '', '', '', 0));
      for (var i = confixWrapper("initvar", "var i = ls", [""], [], "foundSide", ls); confixWrapper("loopCondition", "i < This.value", [""], [], "foundSide", i < This.value); i++) 
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], i, ' ', '', '', 1)", ["sa[0]", "sa[2]", "i", " ", "", "", "1"], [sa[0], sa[2], i, ' ', '', '', 1], "foundSide", InsertLinkToBox(sa[0], sa[2], i, ' ', '', '', 1));
      break;
    default:
      confixWrapper("functionCall", "alert(sa[1] + ' command is unknown on sidebar! call Aidin please')", ["sa[1] +  command is unknown on sidebar! call Aidin please"], [sa[1] + ' command is unknown on sidebar! call Aidin please'], "foundSide", alert(sa[1] + ' command is unknown on sidebar! call Aidin please'));
  }
}
function foundDuty(s, eve) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"foundDuty\", s.substring(0, 1)) == '_'", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", confixWrapper("functionCall", "s.substring(0, 1)", ["0", "1"], [0, 1], "foundDuty", s.substring(0, 1)) == '_')) 
  {
    confixWrapper("functionCall", "foundSide(s.substring(1, s.length), eve)", ["s.substring(1, s.length)", "eve"], [confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)), eve], "foundDuty", foundSide(confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)), eve));
    return confixWrapper("return", "return true;", [""], [], "foundDuty", true);
  }
  var This = confixWrapper("initvar", "var This = confixWrapper(\"functionCall\", \"dg(s)\", [\"s\"], [s], \"foundDuty\", dg(s))", [""], [], "foundDuty", confixWrapper("functionCall", "dg(s)", ["s"], [s], "foundDuty", dg(s))), t;
  t1 = confixWrapper("infix", "t1 = new Array('FontBoldEr', 'FontItalicEr', 'FontUnderlineEr', 'AlignErLeft', 'AlignErRight', 'AlignErCenter', 'FontFamily', 'FontSizeEr', 'AlignEr')", [""], [], "foundDuty", new Array('FontBoldEr', 'FontItalicEr', 'FontUnderlineEr', 'AlignErLeft', 'AlignErRight', 'AlignErCenter', 'FontFamily', 'FontSizeEr', 'AlignEr'));
  t2 = confixWrapper("infix", "t2 = new Array('fontWeight', 'fontStyle', 'textDecoration', 'textAlign', 'textAlign', 'textAlign', 'fontFamily', 'fontSize', 'textDecoration')", [""], [], "foundDuty", new Array('fontWeight', 'fontStyle', 'textDecoration', 'textAlign', 'textAlign', 'textAlign', 'fontFamily', 'fontSize', 'textDecoration'));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundDuty", 0); confixWrapper("loopCondition", "i < t1.length", [""], [], "foundDuty", i < t1.length); i++) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(s.length - t1[i].length, s.length)\", [\"s.length - t1[i].length\", \"s.length\"], [s.length - t1[i].length, s.length], \"foundDuty\", s.substring(s.length - t1[i].length, s.length)) == t1[i]", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", confixWrapper("functionCall", "s.substring(s.length - t1[i].length, s.length)", ["s.length - t1[i].length", "s.length"], [s.length - t1[i].length, s.length], "foundDuty", s.substring(s.length - t1[i].length, s.length)) == t1[i])) 
    {
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, s.length - t1[i].length)\", [\"0\", \"s.length - t1[i].length\"], [0, s.length - t1[i].length], \"foundDuty\", s.substring(0, s.length - t1[i].length))", [""], [], "foundDuty", confixWrapper("functionCall", "s.substring(0, s.length - t1[i].length)", ["0", "s.length - t1[i].length"], [0, s.length - t1[i].length], "foundDuty", s.substring(0, s.length - t1[i].length)));
      if (confixWrapper("condition", "i == 3 || i == 4 || i == 5", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", i == 3 || i == 4 || i == 5)) 
      {
        var d = confixWrapper("initvar", "var d = confixWrapper(\"functionCall\", \"t1[i].substring(7, t1[i].length)\", [\"7\", \"t1[i].length\"], [7, t1[i].length], \"foundDuty\", t1[i].substring(7, t1[i].length))", [""], [], "foundDuty", confixWrapper("functionCall", "t1[i].substring(7, t1[i].length)", ["7", "t1[i].length"], [7, t1[i].length], "foundDuty", t1[i].substring(7, t1[i].length)));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignErLeftImg', false)", ["s + AlignErLeftImg", "false"], [s + 'AlignErLeftImg', false], "foundDuty", PushImgBut(s + 'AlignErLeftImg', false));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignErRightImg', false)", ["s + AlignErRightImg", "false"], [s + 'AlignErRightImg', false], "foundDuty", PushImgBut(s + 'AlignErRightImg', false));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignErCenterImg', false)", ["s + AlignErCenterImg", "false"], [s + 'AlignErCenterImg', false], "foundDuty", PushImgBut(s + 'AlignErCenterImg', false));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignEr' + d + 'Img', true)", ["s + AlignEr + d + Img", "true"], [s + 'AlignEr' + d + 'Img', true], "foundDuty", PushImgBut(s + 'AlignEr' + d + 'Img', true));
      }
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"foundDuty\", s.substring(1, s.length)) == '_DefaultDiv_0' || confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"foundDuty\", s.substring(1, s.length)) == '_Title_0' || confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"foundDuty\", s.substring(1, s.length)) == '_PartDiv_0'", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)) == '_DefaultDiv_0' || confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)) == '_Title_0' || confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)) == '_PartDiv_0')) 
      for (var j = confixWrapper("initvar", "var j = 0", [""], [], "foundDuty", 0); confixWrapper("loopCondition", "j < maxBoxNumOnSides", [""], [], "foundDuty", j < maxBoxNumOnSides); j++) 
        confixWrapper("functionCall", "ChangeByInput(s.substring(0, s.length - 1) + j, t2[i], t3[i])", ["s.substring(0, s.length - 1) + j", "t2[i]", "t3[i]"], [confixWrapper("functionCall", "s.substring(0, s.length - 1)", ["0", "s.length - 1"], [0, s.length - 1], "foundDuty", s.substring(0, s.length - 1)) + j, t2[i], t3[i]], "foundDuty", ChangeByInput(confixWrapper("functionCall", "s.substring(0, s.length - 1)", ["0", "s.length - 1"], [0, s.length - 1], "foundDuty", s.substring(0, s.length - 1)) + j, t2[i], t3[i])); else {
        if (confixWrapper("condition", "s == 'HeaderPartText'", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", s == 'HeaderPartText')) 
        {
          confixWrapper("functionCall", "ChangeByInput('TitleText', t2[i], t3[i])", ["TitleText", "t2[i]", "t3[i]"], ['TitleText', t2[i], t3[i]], "foundDuty", ChangeByInput('TitleText', t2[i], t3[i]));
          confixWrapper("functionCall", "ChangeByInput('SubTitleText', t2[i], t3[i])", ["SubTitleText", "t2[i]", "t3[i]"], ['SubTitleText', t2[i], t3[i]], "foundDuty", ChangeByInput('SubTitleText', t2[i], t3[i]));
        } else confixWrapper("functionCall", "ChangeByInput(s, t2[i], t3[i])", ["s", "t2[i]", "t3[i]"], [s, t2[i], t3[i]], "foundDuty", ChangeByInput(s, t2[i], t3[i]));
      }
      if (confixWrapper("condition", "t1[i] == 'FontItalicEr'", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", t1[i] == 'FontItalicEr')) 
      {
        confixWrapper("functionCall", "PushImgBut(s + 'ItalicErImg', This.value == 'italic')", ["s + ItalicErImg", "This.value == italic"], [s + 'ItalicErImg', This.value == 'italic'], "foundDuty", PushImgBut(s + 'ItalicErImg', This.value == 'italic'));
        confixWrapper("functionCall", "ToggleTextVal(This, 'italic', 'normal', 'value')", ["This", "italic", "normal", "value"], [This, 'italic', 'normal', 'value'], "foundDuty", ToggleTextVal(This, 'italic', 'normal', 'value'));
      }
      if (confixWrapper("condition", "t1[i] == 'FontBoldEr'", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", t1[i] == 'FontBoldEr')) 
      {
        confixWrapper("functionCall", "PushImgBut(s + 'BoldErImg', This.value == 'bold')", ["s + BoldErImg", "This.value == bold"], [s + 'BoldErImg', This.value == 'bold'], "foundDuty", PushImgBut(s + 'BoldErImg', This.value == 'bold'));
        confixWrapper("functionCall", "ToggleTextVal(This, 'bold', 'normal', 'value')", ["This", "bold", "normal", "value"], [This, 'bold', 'normal', 'value'], "foundDuty", ToggleTextVal(This, 'bold', 'normal', 'value'));
      }
      if (confixWrapper("condition", "t1[i] == 'FontUnderlineEr'", ["s", "eve", "This", "t", "i", "d", "j"], [s, eve, This, t, i, d, j], "foundDuty", t1[i] == 'FontUnderlineEr')) 
      {
        confixWrapper("functionCall", "PushImgBut(s + 'UnderlineErImg', This.value == 'underline')", ["s + UnderlineErImg", "This.value == underline"], [s + 'UnderlineErImg', This.value == 'underline'], "foundDuty", PushImgBut(s + 'UnderlineErImg', This.value == 'underline'));
        confixWrapper("functionCall", "ToggleTextVal(This, 'underline', 'none', 'value')", ["This", "underline", "none", "value"], [This, 'underline', 'none', 'value'], "foundDuty", ToggleTextVal(This, 'underline', 'none', 'value'));
      }
      return confixWrapper("return", "return true;", [""], [], "foundDuty", true);
    }
  return confixWrapper("return", "return false;", [""], [], "foundDuty", false);
}
function doDuty(s, eve) {
  if (confixWrapper("condition", "s.tagName == undefined || !s.tagName", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", s.tagName == undefined || !s.tagName)) 
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"dg(s)\", [\"s\"], [s], \"doDuty\", dg(s))", [""], [], "doDuty", confixWrapper("functionCall", "dg(s)", ["s"], [s], "doDuty", dg(s)));
  if (confixWrapper("condition", "global_lastDidDuty", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", global_lastDidDuty)) 
  {
    confixWrapper("functionCall", "ChangeByInput(global_lastDidDuty, 'borderColor', '#666')", ["global_lastDidDuty", "borderColor", "#666"], [global_lastDidDuty, 'borderColor', '#666'], "doDuty", ChangeByInput(global_lastDidDuty, 'borderColor', '#666'));
    confixWrapper("functionCall", "ChangeByInput(global_lastDidDuty, 'color', '#333')", ["global_lastDidDuty", "color", "#333"], [global_lastDidDuty, 'color', '#333'], "doDuty", ChangeByInput(global_lastDidDuty, 'color', '#333'));
  }
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.tagName.toLowerCase()\", [], [], \"doDuty\", s.tagName.toLowerCase()) == 'input' && confixWrapper(\"functionCall\", \"s.getAttribute('type').toLowerCase()\", [], [], \"doDuty\", confixWrapper(\"functionCall\", \"s.getAttribute('type')\", [\"type\"], ['type'], \"doDuty\", s.getAttribute('type')).toLowerCase()) == 'text' && !s.disabled", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "s.tagName.toLowerCase()", [], [], "doDuty", s.tagName.toLowerCase()) == 'input' && confixWrapper("functionCall", "s.getAttribute('type').toLowerCase()", [], [], "doDuty", confixWrapper("functionCall", "s.getAttribute('type')", ["type"], ['type'], "doDuty", s.getAttribute('type')).toLowerCase()) == 'text' && !s.disabled)) 
  {
    confixWrapper("functionCall", "ChangeByInput(s.id, 'borderColor', '#C00')", ["s.id", "borderColor", "#C00"], [s.id, 'borderColor', '#C00'], "doDuty", ChangeByInput(s.id, 'borderColor', '#C00'));
    confixWrapper("functionCall", "ChangeByInput(s.id, 'color', '#000')", ["s.id", "color", "#000"], [s.id, 'color', '#000'], "doDuty", ChangeByInput(s.id, 'color', '#000'));
    if (confixWrapper("condition", "global_lastDidDuty != s.id && !global_isTakingEffectAll", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", global_lastDidDuty != s.id && !global_isTakingEffectAll)) 
    confixWrapper("functionCall", "s.select()", [], [], "doDuty", s.select());
    global_lastDidDuty = confixWrapper("infix", "global_lastDidDuty = s.id", [""], [], "doDuty", s.id);
  }
  var This = confixWrapper("initvar", "var This = s", [""], [], "doDuty", s);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.id.substring(0, 2)\", [\"0\", \"2\"], [0, 2], \"doDuty\", s.id.substring(0, 2)) != 'SH'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "s.id.substring(0, 2)", ["0", "2"], [0, 2], "doDuty", s.id.substring(0, 2)) != 'SH')) 
  global_didSomething = confixWrapper("infix", "global_didSomething = true", [""], [], "doDuty", true);
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"foundDuty(s.id, eve)\", [\"s.id\", \"eve\"], [s.id, eve], \"doDuty\", foundDuty(s.id, eve))", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", !confixWrapper("functionCall", "foundDuty(s.id, eve)", ["s.id", "eve"], [s.id, eve], "doDuty", foundDuty(s.id, eve)))) 
  {
    switch (s.id) {
      case 'ResetPsycHodramaEr':
        break;
      case 'PsycHodramaSaver':
        confixWrapper("functionCall", "WritePsycHodrama()", [], [], "doDuty", WritePsycHodrama());
        global_didSomething = confixWrapper("infix", "global_didSomething = false", [""], [], "doDuty", false);
        var msgStr = confixWrapper("initvar", "var msgStr = 'PsycHodrama Saved Successfully.'", [""], [], "doDuty", 'PsycHodrama Saved Successfully.');
        if (confixWrapper("condition", "global_lang == 'fa'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", global_lang == 'fa')) 
        msgStr = confixWrapper("infix", "msgStr = confixWrapper(\"functionCall\", \"translateIt('drama saved.')\", [\"drama saved.\"], ['drama saved.'], \"doDuty\", translateIt('drama saved.'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('drama saved.')", ["drama saved."], ['drama saved.'], "doDuty", translateIt('drama saved.')));
        confixWrapper("functionCall", "alert(msgStr)", ["msgStr"], [msgStr], "doDuty", alert(msgStr));
        break;
      case 'PsycHodramaSHer':
        confixWrapper("functionCall", "ShowPsycHodrama(eve)", ["eve"], [eve], "doDuty", ShowPsycHodrama(eve));
        break;
      case 'PsycHodramaGetButton':
        confixWrapper("functionCall", "WritePsycHodrama()", [], [], "doDuty", WritePsycHodrama());
        break;
      case 'PsycHodramaLoadButton':
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"ReadPsycHodrama(dg('PsycHodramaPutEr').value)\", [\"dg(PsycHodramaPutEr).value\"], [confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"doDuty\", dg('PsycHodramaPutEr')).value], \"doDuty\", ReadPsycHodrama(confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"doDuty\", dg('PsycHodramaPutEr')).value))", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "ReadPsycHodrama(dg('PsycHodramaPutEr').value)", ["dg(PsycHodramaPutEr).value"], [confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "doDuty", dg('PsycHodramaPutEr')).value], "doDuty", ReadPsycHodrama(confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "doDuty", dg('PsycHodramaPutEr')).value)))) 
        {
          confixWrapper("functionCall", "HidePsycHodrama()", [], [], "doDuty", HidePsycHodrama());
        }
        break;
      case 'PsycHodramaResetButton':
        confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "doDuty", dg('PsycHodramaPutEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"doDuty\", dg('PsycHodramaPutEr')).value = ''", [""], [], "doDuty", '');
        break;
      case 'PsycHodramaDefaultButton':
        confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "doDuty", dg('PsycHodramaPutEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"doDuty\", dg('PsycHodramaPutEr')).value = PsycHodramaDefaultString()", [""], [], "doDuty", PsycHodramaDefaultString());
        break;
      case 'PsycHokinesisShower':
        confixWrapper("functionCall", "ShowPsycHokinesis(eve)", ["eve"], [eve], "doDuty", ShowPsycHokinesis(eve));
        confixWrapper("functionCall", "SwitchDisplay('PsycHokinesisAlertDiv', 0)", ["PsycHokinesisAlertDiv", "0"], ['PsycHokinesisAlertDiv', 0], "doDuty", SwitchDisplay('PsycHokinesisAlertDiv', 0));
        confixWrapper("functionCall", "ChangeByInput('PsycHokinesisAlertInner', 'innerHTML', '')", ["PsycHokinesisAlertInner", "innerHTML", ""], ['PsycHokinesisAlertInner', 'innerHTML', ''], "doDuty", ChangeByInput('PsycHokinesisAlertInner', 'innerHTML', ''));
        confixWrapper("functionCall", "dg('PsycHokinesisPreviewButton')", ["PsycHokinesisPreviewButton"], ['PsycHokinesisPreviewButton'], "doDuty", dg('PsycHokinesisPreviewButton')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisPreviewButton')\", [\"PsycHokinesisPreviewButton\"], ['PsycHokinesisPreviewButton'], \"doDuty\", dg('PsycHokinesisPreviewButton')).disabled = true", [""], [], "doDuty", true);
        confixWrapper("functionCall", "ChangeByInput('PsycHokinesisPreviewButton', 'color', '#666')", ["PsycHokinesisPreviewButton", "color", "#666"], ['PsycHokinesisPreviewButton', 'color', '#666'], "doDuty", ChangeByInput('PsycHokinesisPreviewButton', 'color', '#666'));
        break;
      case 'PsycHokinesisGetButton':
        confixWrapper("functionCall", "kinesIt()", [], [], "doDuty", kinesIt());
        confixWrapper("functionCall", "dg('PsycHokinesisPreviewButton')", ["PsycHokinesisPreviewButton"], ['PsycHokinesisPreviewButton'], "doDuty", dg('PsycHokinesisPreviewButton')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisPreviewButton')\", [\"PsycHokinesisPreviewButton\"], ['PsycHokinesisPreviewButton'], \"doDuty\", dg('PsycHokinesisPreviewButton')).disabled = false", [""], [], "doDuty", false);
        confixWrapper("functionCall", "ChangeByInput('PsycHokinesisPreviewButton', 'color', '#000')", ["PsycHokinesisPreviewButton", "color", "#000"], ['PsycHokinesisPreviewButton', 'color', '#000'], "doDuty", ChangeByInput('PsycHokinesisPreviewButton', 'color', '#000'));
        break;
      case 'WholePageTitle':
        var dt = confixWrapper("initvar", "var dt = This.value", [""], [], "doDuty", This.value);
        if (confixWrapper("condition", "This.value == 'DEFAULT$'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", This.value == 'DEFAULT$')) 
        confixWrapper("functionCall", "alert(translateIt('not default$'))", ["translateIt(not default$)"], [confixWrapper("functionCall", "translateIt('not default$')", ["not default$"], ['not default$'], "doDuty", translateIt('not default$'))], "doDuty", alert(confixWrapper("functionCall", "translateIt('not default$')", ["not default$"], ['not default$'], "doDuty", translateIt('not default$'))));
        if (confixWrapper("condition", "This.value == '$DEFAULT'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", This.value == '$DEFAULT')) 
        dt = confixWrapper("infix", "dt = '[PsycHo] DEFAULT TITLE'", [""], [], "doDuty", '[PsycHo] DEFAULT TITLE');
        document.title = confixWrapper("infix", "document.title = '[PsycHo] ' + dt", [""], [], "doDuty", '[PsycHo] ' + dt);
        break;
      case 'WholeProvider':
        global_prov = confixWrapper("infix", "global_prov = This.value", ["This"], [This], "doDuty", This.value);
        var isBlogger = confixWrapper("initvar", "var isBlogger = (global_prov == 'blogger')", [""], [], "doDuty", (global_prov == 'blogger'));
        var isPersianBlog = confixWrapper("initvar", "var isPersianBlog = (global_prov == 'persianblog')", [""], [], "doDuty", (global_prov == 'persianblog'));
        var sides = confixWrapper("initvar", "var sides = new Array('R', 'L')", [""], [], "doDuty", new Array('R', 'L'));
        if (confixWrapper("condition", "isBlogger", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", isBlogger)) 
        {
          confixWrapper("functionCall", "dg('DateFormatIsGregorian')", ["DateFormatIsGregorian"], ['DateFormatIsGregorian'], "doDuty", dg('DateFormatIsGregorian')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('DateFormatIsGregorian')\", [\"DateFormatIsGregorian\"], ['DateFormatIsGregorian'], \"doDuty\", dg('DateFormatIsGregorian')).disabled = false", [""], [], "doDuty", false);
          confixWrapper("functionCall", "dg('DateFormatIsHijri')", ["DateFormatIsHijri"], ['DateFormatIsHijri'], "doDuty", dg('DateFormatIsHijri')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('DateFormatIsHijri')\", [\"DateFormatIsHijri\"], ['DateFormatIsHijri'], \"doDuty\", dg('DateFormatIsHijri')).disabled = false", [""], [], "doDuty", false);
          confixWrapper("functionCall", "ChangeByInput('selectorTxt_DateFormatIsHijri', 'color', 'black')", ["selectorTxt_DateFormatIsHijri", "color", "black"], ['selectorTxt_DateFormatIsHijri', 'color', 'black'], "doDuty", ChangeByInput('selectorTxt_DateFormatIsHijri', 'color', 'black'));
          confixWrapper("functionCall", "ChangeByInput('selectorTxt_DateFormatIsGregorian', 'color', 'black')", ["selectorTxt_DateFormatIsGregorian", "color", "black"], ['selectorTxt_DateFormatIsGregorian', 'color', 'black'], "doDuty", ChangeByInput('selectorTxt_DateFormatIsGregorian', 'color', 'black'));
          confixWrapper("functionCall", "ChangeByInput('DateFormatSelectorText', 'color', 'black')", ["DateFormatSelectorText", "color", "black"], ['DateFormatSelectorText', 'color', 'black'], "doDuty", ChangeByInput('DateFormatSelectorText', 'color', 'black'));
        } else {
          confixWrapper("functionCall", "dg('DateFormatIsHijri')", ["DateFormatIsHijri"], ['DateFormatIsHijri'], "doDuty", dg('DateFormatIsHijri')).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('DateFormatIsHijri')\", [\"DateFormatIsHijri\"], ['DateFormatIsHijri'], \"doDuty\", dg('DateFormatIsHijri')).checked = true", [""], [], "doDuty", true);
          confixWrapper("functionCall", "dg('DateFormatIsGregorian')", ["DateFormatIsGregorian"], ['DateFormatIsGregorian'], "doDuty", dg('DateFormatIsGregorian')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('DateFormatIsGregorian')\", [\"DateFormatIsGregorian\"], ['DateFormatIsGregorian'], \"doDuty\", dg('DateFormatIsGregorian')).disabled = true", [""], [], "doDuty", true);
          confixWrapper("functionCall", "dg('DateFormatIsHijri')", ["DateFormatIsHijri"], ['DateFormatIsHijri'], "doDuty", dg('DateFormatIsHijri')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('DateFormatIsHijri')\", [\"DateFormatIsHijri\"], ['DateFormatIsHijri'], \"doDuty\", dg('DateFormatIsHijri')).disabled = true", [""], [], "doDuty", true);
          confixWrapper("functionCall", "writeCurrentTime(1)", ["1"], [1], "doDuty", writeCurrentTime(1));
          confixWrapper("functionCall", "ChangeByInput('selectorTxt_DateFormatIsHijri', 'color', '#666')", ["selectorTxt_DateFormatIsHijri", "color", "#666"], ['selectorTxt_DateFormatIsHijri', 'color', '#666'], "doDuty", ChangeByInput('selectorTxt_DateFormatIsHijri', 'color', '#666'));
          confixWrapper("functionCall", "ChangeByInput('selectorTxt_DateFormatIsGregorian', 'color', '#666')", ["selectorTxt_DateFormatIsGregorian", "color", "#666"], ['selectorTxt_DateFormatIsGregorian', 'color', '#666'], "doDuty", ChangeByInput('selectorTxt_DateFormatIsGregorian', 'color', '#666'));
          confixWrapper("functionCall", "ChangeByInput('DateFormatSelectorText', 'color', '#666')", ["DateFormatSelectorText", "color", "#666"], ['DateFormatSelectorText', 'color', '#666'], "doDuty", ChangeByInput('DateFormatSelectorText', 'color', '#666'));
        }
        if (confixWrapper("condition", "isPersianBlog", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", isPersianBlog)) 
        {
          for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", [""], [], "doDuty", t < 2); t++) 
            {
              var archive_txt = confixWrapper("initvar", "var archive_txt = 'Archive'", [""], [], "doDuty", 'Archive');
              var archive_ttl = confixWrapper("initvar", "var archive_ttl = 'Archive Page'", [""], [], "doDuty", 'Archive Page');
              if (confixWrapper("condition", "global_lang == 'fa'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", global_lang == 'fa')) 
              {
                archive_txt = confixWrapper("infix", "archive_txt = confixWrapper(\"functionCall\", \"translateIt(archive_txt)\", [\"archive_txt\"], [archive_txt], \"doDuty\", translateIt(archive_txt))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt(archive_txt)", ["archive_txt"], [archive_txt], "doDuty", translateIt(archive_txt)));
                archive_ttl = confixWrapper("infix", "archive_ttl = confixWrapper(\"functionCall\", \"translateIt(archive_ttl)\", [\"archive_ttl\"], [archive_ttl], \"doDuty\", translateIt(archive_ttl))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt(archive_ttl)", ["archive_ttl"], [archive_ttl], "doDuty", translateIt(archive_ttl)));
              }
              if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkUrl_0_2')\", [\"_ + sides[t] + _LinkUrl_0_2\"], ['_' + sides[t] + '_LinkUrl_0_2'], \"doDuty\", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$RSS'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkUrl_0_2')", ["_ + sides[t] + _LinkUrl_0_2"], ['_' + sides[t] + '_LinkUrl_0_2'], "doDuty", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$RSS')) 
              confixWrapper("functionCall", "InsertLinkToBox(sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1)", ["sides[t]", "0", "2", "archive_txt", "$ARCHIVE", "archive_ttl", "1"], [sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1], "doDuty", InsertLinkToBox(sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1));
              if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkTxt_1_0')\", [\"_ + sides[t] + _LinkTxt_1_0\"], ['_' + sides[t] + '_LinkTxt_1_0'], \"doDuty\", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTxt_1_0')", ["_ + sides[t] + _LinkTxt_1_0"], ['_' + sides[t] + '_LinkTxt_1_0'], "doDuty", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE')) 
              confixWrapper("functionCall", "doDuty('_' + sides[t] + '_RemoveThisBox_1')", ["_ + sides[t] + _RemoveThisBox_1"], ['_' + sides[t] + '_RemoveThisBox_1'], "doDuty", doDuty('_' + sides[t] + '_RemoveThisBox_1'));
            }
        } else {
          for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", [""], [], "doDuty", t < 2); t++) 
            if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkUrl_0_2')\", [\"_ + sides[t] + _LinkUrl_0_2\"], ['_' + sides[t] + '_LinkUrl_0_2'], \"doDuty\", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$ARCHIVE'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkUrl_0_2')", ["_ + sides[t] + _LinkUrl_0_2"], ['_' + sides[t] + '_LinkUrl_0_2'], "doDuty", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$ARCHIVE')) 
            confixWrapper("functionCall", "InsertLinkToBox(sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1)", ["sides[t]", "0", "2", "RSS", "$RSS", "RSS Feed", "1"], [sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1], "doDuty", InsertLinkToBox(sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1));
          var noArch = confixWrapper("initvar", "var noArch = true", [""], [], "doDuty", true);
          for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", [""], [], "doDuty", t < 2); t++) 
            {
              var bs = confixWrapper("initvar", "var bs = confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_boxNumForce')\", [\"_ + sides[t] + _boxNumForce\"], ['_' + sides[t] + '_boxNumForce'], \"doDuty\", dg('_' + sides[t] + '_boxNumForce')).value", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_boxNumForce')", ["_ + sides[t] + _boxNumForce"], ['_' + sides[t] + '_boxNumForce'], "doDuty", dg('_' + sides[t] + '_boxNumForce')).value);
              for (var i = confixWrapper("initvar", "var i = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "i < bs", [""], [], "doDuty", i < bs); i++) 
                {
                  var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_linkNumForce_' + i)\", [\"_ + sides[t] + _linkNumForce_ + i\"], ['_' + sides[t] + '_linkNumForce_' + i], \"doDuty\", dg('_' + sides[t] + '_linkNumForce_' + i)).value", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_linkNumForce_' + i)", ["_ + sides[t] + _linkNumForce_ + i"], ['_' + sides[t] + '_linkNumForce_' + i], "doDuty", dg('_' + sides[t] + '_linkNumForce_' + i)).value);
                  for (var j = confixWrapper("initvar", "var j = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "j < ls", [""], [], "doDuty", j < ls); j++) 
                    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkTxt_1_0')\", [\"_ + sides[t] + _LinkTxt_1_0\"], ['_' + sides[t] + '_LinkTxt_1_0'], \"doDuty\", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTxt_1_0')", ["_ + sides[t] + _LinkTxt_1_0"], ['_' + sides[t] + '_LinkTxt_1_0'], "doDuty", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE')) 
                    noArch = confixWrapper("infix", "noArch = false", [""], [], "doDuty", false);
                }
            }
          if (confixWrapper("condition", "noArch", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", noArch)) 
          {
            var sides = confixWrapper("initvar", "var sides = new Array('R', 'L')", [""], [], "doDuty", new Array('R', 'L'));
            for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", [""], [], "doDuty", t < 2); t++) 
              {
                confixWrapper("functionCall", "doDuty('_' + sides[t] + '_AddOneBox_0')", ["_ + sides[t] + _AddOneBox_0"], ['_' + sides[t] + '_AddOneBox_0'], "doDuty", doDuty('_' + sides[t] + '_AddOneBox_0'));
                confixWrapper("functionCall", "AddTitleToBox(sides[t], '1', 'Archive')", ["sides[t]", "1", "Archive"], [sides[t], '1', 'Archive'], "doDuty", AddTitleToBox(sides[t], '1', 'Archive'));
                confixWrapper("functionCall", "InsertLinkToBox(sides[t], '1', '0', '$ARCHIVE', ' ', '', 1)", ["sides[t]", "1", "0", "$ARCHIVE", " ", "", "1"], [sides[t], '1', '0', '$ARCHIVE', ' ', '', 1], "doDuty", InsertLinkToBox(sides[t], '1', '0', '$ARCHIVE', ' ', '', 1));
              }
          }
        }
        break;
      case 'WholeURL':
        break;
      case 'WholeDescription':
        break;
      case 'WholeKeywords':
        break;
      case 'WholeAuthor':
        break;
      case 'WholeEmail':
        break;
      case 'WholeDefaultTargetSelf':
        break;
      case 'WholeDefaultTargetNew':
        break;
      case 'SHBasics':
        var showEn = confixWrapper("initvar", "var showEn = 'Show Basic Settings'", [""], [], "doDuty", 'Show Basic Settings');
        var hideEn = confixWrapper("initvar", "var hideEn = 'hide&nbsp; Basic Settings'", [""], [], "doDuty", 'hide&nbsp; Basic Settings');
        var showFa = confixWrapper("initvar", "var showFa = confixWrapper(\"functionCall\", \"translateIt('Namaayesh tanzimaate avvalie')\", [\"Namaayesh tanzimaate avvalie\"], ['Namaayesh tanzimaate avvalie'], \"doDuty\", translateIt('Namaayesh tanzimaate avvalie'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Namaayesh tanzimaate avvalie')", ["Namaayesh tanzimaate avvalie"], ['Namaayesh tanzimaate avvalie'], "doDuty", translateIt('Namaayesh tanzimaate avvalie')));
        var hideFa = confixWrapper("initvar", "var hideFa = confixWrapper(\"functionCall\", \"translateIt('PenhaanSaazie tanzimaate avvalie')\", [\"PenhaanSaazie tanzimaate avvalie\"], ['PenhaanSaazie tanzimaate avvalie'], \"doDuty\", translateIt('PenhaanSaazie tanzimaate avvalie'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('PenhaanSaazie tanzimaate avvalie')", ["PenhaanSaazie tanzimaate avvalie"], ['PenhaanSaazie tanzimaate avvalie'], "doDuty", translateIt('PenhaanSaazie tanzimaate avvalie')));
        confixWrapper("functionCall", "ToggleDisplay('BasicSettings', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa)", ["BasicSettings", "This", "(global_lang == en) ? showEn : showFa", "block", "(global_lang == en) ? hideEn : hideFa"], ['BasicSettings', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa], "doDuty", ToggleDisplay('BasicSettings', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        confixWrapper("functionCall", "ToggleTextVal(dg('Grannie'), '10px', '25px', 'marginTop')", ["dg(Grannie)", "10px", "25px", "marginTop"], [confixWrapper("functionCall", "dg('Grannie')", ["Grannie"], ['Grannie'], "doDuty", dg('Grannie')), '10px', '25px', 'marginTop'], "doDuty", ToggleTextVal(confixWrapper("functionCall", "dg('Grannie')", ["Grannie"], ['Grannie'], "doDuty", dg('Grannie')), '10px', '25px', 'marginTop'));
        confixWrapper("functionCall", "doDuty(dg('HeaderTopMarginEr'))", ["dg(HeaderTopMarginEr)"], [confixWrapper("functionCall", "dg('HeaderTopMarginEr')", ["HeaderTopMarginEr"], ['HeaderTopMarginEr'], "doDuty", dg('HeaderTopMarginEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('HeaderTopMarginEr')", ["HeaderTopMarginEr"], ['HeaderTopMarginEr'], "doDuty", dg('HeaderTopMarginEr'))));
        break;
      case 'WholeWidthUnitErPixels':
        confixWrapper("functionCall", "SwitchDisplay('WholeWidthValueErPercent', 0)", ["WholeWidthValueErPercent", "0"], ['WholeWidthValueErPercent', 0], "doDuty", SwitchDisplay('WholeWidthValueErPercent', 0));
        confixWrapper("functionCall", "SwitchDisplay('WholeWidthValueErPixels', 1)", ["WholeWidthValueErPixels", "1"], ['WholeWidthValueErPixels', 1], "doDuty", SwitchDisplay('WholeWidthValueErPixels', 1));
        confixWrapper("functionCall", "doDuty(dg('WholeWidthValueErPixels'))", ["dg(WholeWidthValueErPixels)"], [confixWrapper("functionCall", "dg('WholeWidthValueErPixels')", ["WholeWidthValueErPixels"], ['WholeWidthValueErPixels'], "doDuty", dg('WholeWidthValueErPixels'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('WholeWidthValueErPixels')", ["WholeWidthValueErPixels"], ['WholeWidthValueErPixels'], "doDuty", dg('WholeWidthValueErPixels'))));
        break;
      case 'WholeWidthUnitErPercent':
        confixWrapper("functionCall", "SwitchDisplay('WholeWidthValueErPercent', 1)", ["WholeWidthValueErPercent", "1"], ['WholeWidthValueErPercent', 1], "doDuty", SwitchDisplay('WholeWidthValueErPercent', 1));
        confixWrapper("functionCall", "SwitchDisplay('WholeWidthValueErPixels', 0)", ["WholeWidthValueErPixels", "0"], ['WholeWidthValueErPixels', 0], "doDuty", SwitchDisplay('WholeWidthValueErPixels', 0));
        confixWrapper("functionCall", "doDuty(dg('WholeWidthValueErPercent'))", ["dg(WholeWidthValueErPercent)"], [confixWrapper("functionCall", "dg('WholeWidthValueErPercent')", ["WholeWidthValueErPercent"], ['WholeWidthValueErPercent'], "doDuty", dg('WholeWidthValueErPercent'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('WholeWidthValueErPercent')", ["WholeWidthValueErPercent"], ['WholeWidthValueErPercent'], "doDuty", dg('WholeWidthValueErPercent'))));
        break;
      case 'WholeWidthValueErPixels':
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('WholeWidthUnitErPixels')\", [\"WholeWidthUnitErPixels\"], ['WholeWidthUnitErPixels'], \"doDuty\", dg('WholeWidthUnitErPixels')).checked", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('WholeWidthUnitErPixels')", ["WholeWidthUnitErPixels"], ['WholeWidthUnitErPixels'], "doDuty", dg('WholeWidthUnitErPixels')).checked)) 
        confixWrapper("functionCall", "ChangeByInput('Grannie', 'width', This)", ["Grannie", "width", "This"], ['Grannie', 'width', This], "doDuty", ChangeByInput('Grannie', 'width', This));
        break;
      case 'WholeWidthValueErPercent':
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('WholeWidthUnitErPercent')\", [\"WholeWidthUnitErPercent\"], ['WholeWidthUnitErPercent'], \"doDuty\", dg('WholeWidthUnitErPercent')).checked", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('WholeWidthUnitErPercent')", ["WholeWidthUnitErPercent"], ['WholeWidthUnitErPercent'], "doDuty", dg('WholeWidthUnitErPercent')).checked)) 
        confixWrapper("functionCall", "ChangeByInput('Grannie', 'width', This)", ["Grannie", "width", "This"], ['Grannie', 'width', This], "doDuty", ChangeByInput('Grannie', 'width', This));
        break;
      case 'ChangeViewSimpleEnhanced':
        confixWrapper("functionCall", "ToggleText(This, (global_lang == 'fa') ? translateIt('Afzaayeshe gozinehaa') : 'Enhance Features', (global_lang == 'fa') ? translateIt('Kaaheshe gozinehaa') : 'Minimize Features')", ["This", "(global_lang == fa) ? translateIt(Afzaayeshe gozinehaa) : Enhance Features", "(global_lang == fa) ? translateIt(Kaaheshe gozinehaa) : Minimize Features"], [This, (global_lang == 'fa') ? confixWrapper("functionCall", "translateIt('Afzaayeshe gozinehaa')", ["Afzaayeshe gozinehaa"], ['Afzaayeshe gozinehaa'], "doDuty", translateIt('Afzaayeshe gozinehaa')) : 'Enhance Features', (global_lang == 'fa') ? confixWrapper("functionCall", "translateIt('Kaaheshe gozinehaa')", ["Kaaheshe gozinehaa"], ['Kaaheshe gozinehaa'], "doDuty", translateIt('Kaaheshe gozinehaa')) : 'Minimize Features'], "doDuty", ToggleText(This, (global_lang == 'fa') ? confixWrapper("functionCall", "translateIt('Afzaayeshe gozinehaa')", ["Afzaayeshe gozinehaa"], ['Afzaayeshe gozinehaa'], "doDuty", translateIt('Afzaayeshe gozinehaa')) : 'Enhance Features', (global_lang == 'fa') ? confixWrapper("functionCall", "translateIt('Kaaheshe gozinehaa')", ["Kaaheshe gozinehaa"], ['Kaaheshe gozinehaa'], "doDuty", translateIt('Kaaheshe gozinehaa')) : 'Minimize Features'));
        confixWrapper("functionCall", "ToggleEnhanceds()", [], [], "doDuty", ToggleEnhanceds());
        break;
      case 'HideAllPsychoed':
        confixWrapper("functionCall", "TogglePsychoeds()", [], [], "doDuty", TogglePsychoeds());
        confixWrapper("functionCall", "ToggleText(This, (global_lang == 'fa') ? translateIt('Tamaame PsycHopathedhaa') : 'All PsycHopatheds')", ["This", "(global_lang == fa) ? translateIt(Tamaame PsycHopathedhaa) : All PsycHopatheds"], [This, (global_lang == 'fa') ? confixWrapper("functionCall", "translateIt('Tamaame PsycHopathedhaa')", ["Tamaame PsycHopathedhaa"], ['Tamaame PsycHopathedhaa'], "doDuty", translateIt('Tamaame PsycHopathedhaa')) : 'All PsycHopatheds'], "doDuty", ToggleText(This, (global_lang == 'fa') ? confixWrapper("functionCall", "translateIt('Tamaame PsycHopathedhaa')", ["Tamaame PsycHopathedhaa"], ['Tamaame PsycHopathedhaa'], "doDuty", translateIt('Tamaame PsycHopathedhaa')) : 'All PsycHopatheds'));
        confixWrapper("functionCall", "SwitchDisplay('BasicSettings', 1)", ["BasicSettings", "1"], ['BasicSettings', 1], "doDuty", SwitchDisplay('BasicSettings', 1));
        break;
      case 'WholeBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'body')", ["This.value", "backgroundColor", "body"], [This.value, 'backgroundColor', 'body'], "doDuty", IPickColor(This.value, 'backgroundColor', 'body'));
        break;
      case 'WholeBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'WholeBackColorEr', 'backgroundColor', 'body')", ["eve", "WholeBackColorEr", "backgroundColor", "body"], [eve, 'WholeBackColorEr', 'backgroundColor', 'body'], "doDuty", ShowCP(eve, 'WholeBackColorEr', 'backgroundColor', 'body'));
        break;
      case 'AgreeTOSForPsycHokinesis':
        var dis = confixWrapper("initvar", "var dis = (!This.checked)", [""], [], "doDuty", (!This.checked));
        confixWrapper("functionCall", "dg('PsycHokinesisGetButton')", ["PsycHokinesisGetButton"], ['PsycHokinesisGetButton'], "doDuty", dg('PsycHokinesisGetButton')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisGetButton')\", [\"PsycHokinesisGetButton\"], ['PsycHokinesisGetButton'], \"doDuty\", dg('PsycHokinesisGetButton')).disabled = dis", [""], [], "doDuty", dis);
        confixWrapper("functionCall", "dg('PsycHokinesisGetEr')", ["PsycHokinesisGetEr"], ['PsycHokinesisGetEr'], "doDuty", dg('PsycHokinesisGetEr')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisGetEr')\", [\"PsycHokinesisGetEr\"], ['PsycHokinesisGetEr'], \"doDuty\", dg('PsycHokinesisGetEr')).disabled = dis", [""], [], "doDuty", dis);
        confixWrapper("functionCall", "ChangeByInput('PsycHokinesisGetEr', 'color', (dis) ? '#666' : '#000')", ["PsycHokinesisGetEr", "color", "(dis) ? #666 : #000"], ['PsycHokinesisGetEr', 'color', (dis) ? '#666' : '#000'], "doDuty", ChangeByInput('PsycHokinesisGetEr', 'color', (dis) ? '#666' : '#000'));
        confixWrapper("functionCall", "ChangeByInput('PsycHokinesisGetButton', 'color', (dis) ? '#666' : '#000')", ["PsycHokinesisGetButton", "color", "(dis) ? #666 : #000"], ['PsycHokinesisGetButton', 'color', (dis) ? '#666' : '#000'], "doDuty", ChangeByInput('PsycHokinesisGetButton', 'color', (dis) ? '#666' : '#000'));
        break;
      case 'PsycHokinesisPreviewButton':
        KinePrev = confixWrapper("infix", "KinePrev = confixWrapper(\"functionCall\", \"window.open(\"\", \"KinePrev\", \"toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600\")\", [\"\", \"KinePrev\", \"toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600\"], [\"\", \"KinePrev\", \"toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600\"], \"doDuty\", window.open(\"\", \"KinePrev\", \"toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600\"))", [""], [], "doDuty", confixWrapper("functionCall", "window.open(\"\", \"KinePrev\", \"toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600\")", ["", "KinePrev", "toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600"], ["", "KinePrev", "toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600"], "doDuty", window.open("", "KinePrev", "toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600")));
        confixWrapper("functionCall", "KinePrev.document.write(dg('PsycHokinesisGetEr').value)", ["dg(PsycHokinesisGetEr).value"], [confixWrapper("functionCall", "dg('PsycHokinesisGetEr')", ["PsycHokinesisGetEr"], ['PsycHokinesisGetEr'], "doDuty", dg('PsycHokinesisGetEr')).value], "doDuty", KinePrev.document.write(confixWrapper("functionCall", "dg('PsycHokinesisGetEr')", ["PsycHokinesisGetEr"], ['PsycHokinesisGetEr'], "doDuty", dg('PsycHokinesisGetEr')).value));
        confixWrapper("functionCall", "KinePrev.document.close()", [], [], "doDuty", KinePrev.document.close());
        KinePrev.onload = confixWrapper("infix", "KinePrev.onload = KinePrevOn", [""], [], "doDuty", KinePrevOn);
        KinePrev.onunload = confixWrapper("infix", "KinePrev.onunload = KinePrevOff", [""], [], "doDuty", KinePrevOff);
        break;
      case 'WholeBackHasImage':
        var dis = confixWrapper("initvar", "var dis = (!This.checked)", [""], [], "doDuty", (!This.checked));
        confixWrapper("functionCall", "ChangeByInput('WholeBackTextureEr', 'color', (dis) ? '#666' : '#000')", ["WholeBackTextureEr", "color", "(dis) ? #666 : #000"], ['WholeBackTextureEr', 'color', (dis) ? '#666' : '#000'], "doDuty", ChangeByInput('WholeBackTextureEr', 'color', (dis) ? '#666' : '#000'));
        confixWrapper("functionCall", "dg('WholeBackTextureEr')", ["WholeBackTextureEr"], ['WholeBackTextureEr'], "doDuty", dg('WholeBackTextureEr')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('WholeBackTextureEr')\", [\"WholeBackTextureEr\"], ['WholeBackTextureEr'], \"doDuty\", dg('WholeBackTextureEr')).disabled = dis", [""], [], "doDuty", dis);
        confixWrapper("functionCall", "dg('WholeBackPosition')", ["WholeBackPosition"], ['WholeBackPosition'], "doDuty", dg('WholeBackPosition')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('WholeBackPosition')\", [\"WholeBackPosition\"], ['WholeBackPosition'], \"doDuty\", dg('WholeBackPosition')).disabled = dis", [""], [], "doDuty", dis);
        confixWrapper("functionCall", "dg('WholeBackRepeat')", ["WholeBackRepeat"], ['WholeBackRepeat'], "doDuty", dg('WholeBackRepeat')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('WholeBackRepeat')\", [\"WholeBackRepeat\"], ['WholeBackRepeat'], \"doDuty\", dg('WholeBackRepeat')).disabled = dis", [""], [], "doDuty", dis);
        confixWrapper("functionCall", "dg('WholeBackAttachment')", ["WholeBackAttachment"], ['WholeBackAttachment'], "doDuty", dg('WholeBackAttachment')).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('WholeBackAttachment')\", [\"WholeBackAttachment\"], ['WholeBackAttachment'], \"doDuty\", dg('WholeBackAttachment')).disabled = dis", [""], [], "doDuty", dis);
        confixWrapper("functionCall", "ChangeByInput('body', 'backgroundImage', dis ? '' : dg('WholeBackTextureEr').value)", ["body", "backgroundImage", "dis ?  : dg(WholeBackTextureEr).value"], ['body', 'backgroundImage', dis ? '' : confixWrapper("functionCall", "dg('WholeBackTextureEr')", ["WholeBackTextureEr"], ['WholeBackTextureEr'], "doDuty", dg('WholeBackTextureEr')).value], "doDuty", ChangeByInput('body', 'backgroundImage', dis ? '' : confixWrapper("functionCall", "dg('WholeBackTextureEr')", ["WholeBackTextureEr"], ['WholeBackTextureEr'], "doDuty", dg('WholeBackTextureEr')).value));
        break;
      case 'WholeBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('body', 'backgroundImage', This)", ["body", "backgroundImage", "This"], ['body', 'backgroundImage', This], "doDuty", ChangeByInput('body', 'backgroundImage', This));
        break;
      case 'WholeBackPosition':
        confixWrapper("functionCall", "ChangeByInput('body', 'backgroundPosition', This)", ["body", "backgroundPosition", "This"], ['body', 'backgroundPosition', This], "doDuty", ChangeByInput('body', 'backgroundPosition', This));
        confixWrapper("functionCall", "dg('WholeBackAttachment')", ["WholeBackAttachment"], ['WholeBackAttachment'], "doDuty", dg('WholeBackAttachment')).options[(confixWrapper("functionCall", "This.value.charAt(0)", ["0"], [0], "doDuty", This.value.charAt(0)) == 'b') ? 1 : 0].selected = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('WholeBackAttachment')\", [\"WholeBackAttachment\"], ['WholeBackAttachment'], \"doDuty\", dg('WholeBackAttachment')).options[(confixWrapper(\"functionCall\", \"This.value.charAt(0)\", [\"0\"], [0], \"doDuty\", This.value.charAt(0)) == 'b') ? 1 : 0].selected = true", [""], [], "doDuty", true);
        confixWrapper("functionCall", "doDuty(dg('WholeBackAttachment'))", ["dg(WholeBackAttachment)"], [confixWrapper("functionCall", "dg('WholeBackAttachment')", ["WholeBackAttachment"], ['WholeBackAttachment'], "doDuty", dg('WholeBackAttachment'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('WholeBackAttachment')", ["WholeBackAttachment"], ['WholeBackAttachment'], "doDuty", dg('WholeBackAttachment'))));
        break;
      case 'WholeBackRepeat':
        confixWrapper("functionCall", "ChangeByInput('body', 'backgroundRepeat', This)", ["body", "backgroundRepeat", "This"], ['body', 'backgroundRepeat', This], "doDuty", ChangeByInput('body', 'backgroundRepeat', This));
        break;
      case 'WholeBackAttachment':
        confixWrapper("functionCall", "ChangeByInput('body', 'backgroundAttachment', This)", ["body", "backgroundAttachment", "This"], ['body', 'backgroundAttachment', This], "doDuty", ChangeByInput('body', 'backgroundAttachment', This));
        break;
      case 'ColorPickerScrollIntoEr':
        confixWrapper("functionCall", "dg(dg('CPwutObj').innerHTML).scrollIntoView()", [], [], "doDuty", confixWrapper("functionCall", "dg(dg('CPwutObj').innerHTML)", ["dg(CPwutObj).innerHTML"], [confixWrapper("functionCall", "dg('CPwutObj')", ["CPwutObj"], ['CPwutObj'], "doDuty", dg('CPwutObj')).innerHTML], "doDuty", dg(confixWrapper("functionCall", "dg('CPwutObj')", ["CPwutObj"], ['CPwutObj'], "doDuty", dg('CPwutObj')).innerHTML)).scrollIntoView());
        break;
      case 'ColorPickerByHueEr':
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerHuePart', 1)", ["ColorPickerHuePart", "1"], ['ColorPickerHuePart', 1], "doDuty", SwitchDisplay('ColorPickerHuePart', 1));
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerMakePart', 0, 'inline')", ["ColorPickerMakePart", "0", "inline"], ['ColorPickerMakePart', 0, 'inline'], "doDuty", SwitchDisplay('ColorPickerMakePart', 0, 'inline'));
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerNamPart', 0)", ["ColorPickerNamPart", "0"], ['ColorPickerNamPart', 0], "doDuty", SwitchDisplay('ColorPickerNamPart', 0));
        break;
      case 'ColorPickerByNamEr':
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerHuePart', 0)", ["ColorPickerHuePart", "0"], ['ColorPickerHuePart', 0], "doDuty", SwitchDisplay('ColorPickerHuePart', 0));
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerMakePart', 0, 'inline')", ["ColorPickerMakePart", "0", "inline"], ['ColorPickerMakePart', 0, 'inline'], "doDuty", SwitchDisplay('ColorPickerMakePart', 0, 'inline'));
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerNamPart', 1)", ["ColorPickerNamPart", "1"], ['ColorPickerNamPart', 1], "doDuty", SwitchDisplay('ColorPickerNamPart', 1));
        break;
      case 'ColorPickerMakerEr':
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerHuePart', 0)", ["ColorPickerHuePart", "0"], ['ColorPickerHuePart', 0], "doDuty", SwitchDisplay('ColorPickerHuePart', 0));
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerMakePart', 1, 'inline')", ["ColorPickerMakePart", "1", "inline"], ['ColorPickerMakePart', 1, 'inline'], "doDuty", SwitchDisplay('ColorPickerMakePart', 1, 'inline'));
        confixWrapper("functionCall", "SwitchDisplay('ColorPickerNamPart', 0)", ["ColorPickerNamPart", "0"], ['ColorPickerNamPart', 0], "doDuty", SwitchDisplay('ColorPickerNamPart', 0));
        break;
      case 'ColorPickerMoveUp':
        var rate = confixWrapper("initvar", "var rate = -40 * (global_isShiftDown ? 3 : 1)", [""], [], "doDuty", -40 * (global_isShiftDown ? 3 : 1));
        confixWrapper("functionCall", "ChangeByInput('ColorPicker', 'top', (parseInt(dg('ColorPicker').style.top) + rate) + 'px')", ["ColorPicker", "top", "(parseInt(dg(ColorPicker).style.top) + rate) + px"], ['ColorPicker', 'top', (confixWrapper("functionCall", "parseInt(dg('ColorPicker').style.top)", ["dg(ColorPicker).style.top"], [confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top], "doDuty", parseInt(confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top)) + rate) + 'px'], "doDuty", ChangeByInput('ColorPicker', 'top', (confixWrapper("functionCall", "parseInt(dg('ColorPicker').style.top)", ["dg(ColorPicker).style.top"], [confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top], "doDuty", parseInt(confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top)) + rate) + 'px'));
        confixWrapper("functionCall", "window.scrollBy(0, rate)", ["0", "rate"], [0, rate], "doDuty", window.scrollBy(0, rate));
        break;
      case 'ColorPickerMoveDown':
        var rate = confixWrapper("initvar", "var rate = 40 * (global_isShiftDown ? 3 : 1)", [""], [], "doDuty", 40 * (global_isShiftDown ? 3 : 1));
        confixWrapper("functionCall", "ChangeByInput('ColorPicker', 'top', (parseInt(dg('ColorPicker').style.top) + rate) + 'px')", ["ColorPicker", "top", "(parseInt(dg(ColorPicker).style.top) + rate) + px"], ['ColorPicker', 'top', (confixWrapper("functionCall", "parseInt(dg('ColorPicker').style.top)", ["dg(ColorPicker).style.top"], [confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top], "doDuty", parseInt(confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top)) + rate) + 'px'], "doDuty", ChangeByInput('ColorPicker', 'top', (confixWrapper("functionCall", "parseInt(dg('ColorPicker').style.top)", ["dg(ColorPicker).style.top"], [confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top], "doDuty", parseInt(confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "doDuty", dg('ColorPicker')).style.top)) + rate) + 'px'));
        confixWrapper("functionCall", "window.scrollBy(0, rate)", ["0", "rate"], [0, rate], "doDuty", window.scrollBy(0, rate));
        break;
      case 'SHTitle':
        var showEn = confixWrapper("initvar", "var showEn = 'Show Title Settings'", [""], [], "doDuty", 'Show Title Settings');
        var hideEn = confixWrapper("initvar", "var hideEn = 'hide&nbsp; Title Settings'", [""], [], "doDuty", 'hide&nbsp; Title Settings');
        var showFa = confixWrapper("initvar", "var showFa = confixWrapper(\"functionCall\", \"translateIt('Namaayeshe tanzimaate onvaan')\", [\"Namaayeshe tanzimaate onvaan\"], ['Namaayeshe tanzimaate onvaan'], \"doDuty\", translateIt('Namaayeshe tanzimaate onvaan'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Namaayeshe tanzimaate onvaan')", ["Namaayeshe tanzimaate onvaan"], ['Namaayeshe tanzimaate onvaan'], "doDuty", translateIt('Namaayeshe tanzimaate onvaan')));
        var hideFa = confixWrapper("initvar", "var hideFa = confixWrapper(\"functionCall\", \"translateIt('PenhaanSaazie tanzimaate onvaan')\", [\"PenhaanSaazie tanzimaate onvaan\"], ['PenhaanSaazie tanzimaate onvaan'], \"doDuty\", translateIt('PenhaanSaazie tanzimaate onvaan'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('PenhaanSaazie tanzimaate onvaan')", ["PenhaanSaazie tanzimaate onvaan"], ['PenhaanSaazie tanzimaate onvaan'], "doDuty", translateIt('PenhaanSaazie tanzimaate onvaan')));
        confixWrapper("functionCall", "ToggleDisplay('TitleSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa)", ["TitleSetting", "This", "(global_lang == en) ? showEn : showFa", "block", "(global_lang == en) ? hideEn : hideFa"], ['TitleSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa], "doDuty", ToggleDisplay('TitleSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'HeaderBackIsColorEr':
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsTexture', 0)", ["HeaderBackgroundIsTexture", "0"], ['HeaderBackgroundIsTexture', 0], "doDuty", SwitchDisplay('HeaderBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsImage', 0)", ["HeaderBackgroundIsImage", "0"], ['HeaderBackgroundIsImage', 0], "doDuty", SwitchDisplay('HeaderBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsColor', 1)", ["HeaderBackgroundIsColor", "1"], ['HeaderBackgroundIsColor', 1], "doDuty", SwitchDisplay('HeaderBackgroundIsColor', 1));
        confixWrapper("functionCall", "SwitchDisplay('HeaderPartText', 1)", ["HeaderPartText", "1"], ['HeaderPartText', 1], "doDuty", SwitchDisplay('HeaderPartText', 1));
        confixWrapper("functionCall", "SwitchDisplay('HeaderPartImage', 0)", ["HeaderPartImage", "0"], ['HeaderPartImage', 0], "doDuty", SwitchDisplay('HeaderPartImage', 0));
        confixWrapper("functionCall", "SetHeaderImage()", [], [], "doDuty", SetHeaderImage());
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'backgroundImage', '')", ["HeaderPart", "backgroundImage", ""], ['HeaderPart', 'backgroundImage', ''], "doDuty", ChangeByInput('HeaderPart', 'backgroundImage', ''));
        break;
      case 'HeaderBackIsTextureEr':
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsColor', 0)", ["HeaderBackgroundIsColor", "0"], ['HeaderBackgroundIsColor', 0], "doDuty", SwitchDisplay('HeaderBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsImage', 0)", ["HeaderBackgroundIsImage", "0"], ['HeaderBackgroundIsImage', 0], "doDuty", SwitchDisplay('HeaderBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsTexture', 1, 'inline')", ["HeaderBackgroundIsTexture", "1", "inline"], ['HeaderBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('HeaderBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "SwitchDisplay('HeaderPartText', 1)", ["HeaderPartText", "1"], ['HeaderPartText', 1], "doDuty", SwitchDisplay('HeaderPartText', 1));
        confixWrapper("functionCall", "SwitchDisplay('HeaderPartImage', 0)", ["HeaderPartImage", "0"], ['HeaderPartImage', 0], "doDuty", SwitchDisplay('HeaderPartImage', 0));
        confixWrapper("functionCall", "SetHeaderImage()", [], [], "doDuty", SetHeaderImage());
        break;
      case 'HeaderBackIsImageEr':
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsColor', 0)", ["HeaderBackgroundIsColor", "0"], ['HeaderBackgroundIsColor', 0], "doDuty", SwitchDisplay('HeaderBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsTexture', 0)", ["HeaderBackgroundIsTexture", "0"], ['HeaderBackgroundIsTexture', 0], "doDuty", SwitchDisplay('HeaderBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderBackgroundIsImage', 1, 'inline')", ["HeaderBackgroundIsImage", "1", "inline"], ['HeaderBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('HeaderBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "SwitchDisplay('HeaderPartText', 0)", ["HeaderPartText", "0"], ['HeaderPartText', 0], "doDuty", SwitchDisplay('HeaderPartText', 0));
        confixWrapper("functionCall", "SwitchDisplay('HeaderPartImage', 1)", ["HeaderPartImage", "1"], ['HeaderPartImage', 1], "doDuty", SwitchDisplay('HeaderPartImage', 1));
        confixWrapper("functionCall", "SetHeaderImage(dg('HeaderBackImageEr').value)", ["dg(HeaderBackImageEr).value"], [confixWrapper("functionCall", "dg('HeaderBackImageEr')", ["HeaderBackImageEr"], ['HeaderBackImageEr'], "doDuty", dg('HeaderBackImageEr')).value], "doDuty", SetHeaderImage(confixWrapper("functionCall", "dg('HeaderBackImageEr')", ["HeaderBackImageEr"], ['HeaderBackImageEr'], "doDuty", dg('HeaderBackImageEr')).value));
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'backgroundImage', '')", ["HeaderPart", "backgroundImage", ""], ['HeaderPart', 'backgroundImage', ''], "doDuty", ChangeByInput('HeaderPart', 'backgroundImage', ''));
        break;
      case 'HeaderBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'HeaderPart')", ["This.value", "backgroundColor", "HeaderPart"], [This.value, 'backgroundColor', 'HeaderPart'], "doDuty", IPickColor(This.value, 'backgroundColor', 'HeaderPart'));
        break;
      case 'HeaderBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'HeaderBackColorEr', 'backgroundColor', 'HeaderPart')", ["eve", "HeaderBackColorEr", "backgroundColor", "HeaderPart"], [eve, 'HeaderBackColorEr', 'backgroundColor', 'HeaderPart'], "doDuty", ShowCP(eve, 'HeaderBackColorEr', 'backgroundColor', 'HeaderPart'));
        break;
      case 'HeaderBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'backgroundImage', This)", ["HeaderPart", "backgroundImage", "This"], ['HeaderPart', 'backgroundImage', This], "doDuty", ChangeByInput('HeaderPart', 'backgroundImage', This));
        break;
      case 'HeaderBackImageEr':
        confixWrapper("functionCall", "SetHeaderImage(This.value)", ["This.value"], [This.value], "doDuty", SetHeaderImage(This.value));
        break;
      case 'TitleTextTextEr':
        if (confixWrapper("condition", "This.value == '$DEFAULT'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", This.value == '$DEFAULT')) 
        confixWrapper("functionCall", "ChangeByInput('TitleText', 'innerHTML', '[DEFAULT TITLE]')", ["TitleText", "innerHTML", "[DEFAULT TITLE]"], ['TitleText', 'innerHTML', '[DEFAULT TITLE]'], "doDuty", ChangeByInput('TitleText', 'innerHTML', '[DEFAULT TITLE]')); else confixWrapper("functionCall", "ChangeByInput('TitleText', 'innerHTML', This)", ["TitleText", "innerHTML", "This"], ['TitleText', 'innerHTML', This], "doDuty", ChangeByInput('TitleText', 'innerHTML', This));
        if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"doDuty\", isIE())", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", !confixWrapper("functionCall", "isIE()", [], [], "doDuty", isIE()))) 
        {
          confixWrapper("functionCall", "dg('HeaderPartText')", ["HeaderPartText"], ['HeaderPartText'], "doDuty", dg('HeaderPartText')).style.marginTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('HeaderPartText')\", [\"HeaderPartText\"], ['HeaderPartText'], \"doDuty\", dg('HeaderPartText')).style.marginTop = '1px'", [""], [], "doDuty", '1px');
          confixWrapper("functionCall", "dg('HeaderPartText')", ["HeaderPartText"], ['HeaderPartText'], "doDuty", dg('HeaderPartText')).style.marginTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('HeaderPartText')\", [\"HeaderPartText\"], ['HeaderPartText'], \"doDuty\", dg('HeaderPartText')).style.marginTop = '0px'", [""], [], "doDuty", '0px');
        }
        break;
      case 'SubTitleTextTextEr':
        if (confixWrapper("condition", "This.value == '$DEFAULT'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", This.value == '$DEFAULT')) 
        if (confixWrapper("condition", "global_prov == 'persianblog'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", global_prov == 'persianblog')) 
        confixWrapper("functionCall", "kd_alert('does not reserve anything DEFAULT for PageDescription.')", ["does not reserve anything DEFAULT for PageDescription."], ['does not reserve anything DEFAULT for PageDescription.'], "doDuty", kd_alert('does not reserve anything DEFAULT for PageDescription.')); else confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]')", ["SubTitleText", "innerHTML", "[DEFAULT DESCRIPTION]"], ['SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]'], "doDuty", ChangeByInput('SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]')); else confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'innerHTML', This)", ["SubTitleText", "innerHTML", "This"], ['SubTitleText', 'innerHTML', This], "doDuty", ChangeByInput('SubTitleText', 'innerHTML', This));
        break;
      case 'HeaderDirectionIsLTREr':
        confixWrapper("functionCall", "ChangeHeaderDirection(This, 'ltr')", ["This", "ltr"], [This, 'ltr'], "doDuty", ChangeHeaderDirection(This, 'ltr'));
        confixWrapper("functionCall", "PushImgBut('HeaderDirRTLErImg', false)", ["HeaderDirRTLErImg", "false"], ['HeaderDirRTLErImg', false], "doDuty", PushImgBut('HeaderDirRTLErImg', false));
        confixWrapper("functionCall", "PushImgBut('HeaderDirLTRErImg', true)", ["HeaderDirLTRErImg", "true"], ['HeaderDirLTRErImg', true], "doDuty", PushImgBut('HeaderDirLTRErImg', true));
        break;
      case 'HeaderDirectionIsRTLEr':
        confixWrapper("functionCall", "ChangeHeaderDirection(This, 'rtl')", ["This", "rtl"], [This, 'rtl'], "doDuty", ChangeHeaderDirection(This, 'rtl'));
        confixWrapper("functionCall", "PushImgBut('HeaderDirRTLErImg', true)", ["HeaderDirRTLErImg", "true"], ['HeaderDirRTLErImg', true], "doDuty", PushImgBut('HeaderDirRTLErImg', true));
        confixWrapper("functionCall", "PushImgBut('HeaderDirLTRErImg', false)", ["HeaderDirLTRErImg", "false"], ['HeaderDirLTRErImg', false], "doDuty", PushImgBut('HeaderDirLTRErImg', false));
        break;
      case 'TitleColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'TitleText')", ["This.value", "color", "TitleText"], [This.value, 'color', 'TitleText'], "doDuty", IPickColor(This.value, 'color', 'TitleText'));
        break;
      case 'TitleColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'TitleColorEr', 'color', 'TitleText')", ["eve", "TitleColorEr", "color", "TitleText"], [eve, 'TitleColorEr', 'color', 'TitleText'], "doDuty", ShowCP(eve, 'TitleColorEr', 'color', 'TitleText'));
        break;
      case 'SubTitleColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'SubTitleText')", ["This.value", "color", "SubTitleText"], [This.value, 'color', 'SubTitleText'], "doDuty", IPickColor(This.value, 'color', 'SubTitleText'));
        break;
      case 'SubTitleColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'SubTitleColorEr', 'color', 'SubTitleText')", ["eve", "SubTitleColorEr", "color", "SubTitleText"], [eve, 'SubTitleColorEr', 'color', 'SubTitleText'], "doDuty", ShowCP(eve, 'SubTitleColorEr', 'color', 'SubTitleText'));
        break;
      case 'HeaderBorderStyleEr':
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'borderStyle', This)", ["HeaderPart", "borderStyle", "This"], ['HeaderPart', 'borderStyle', This], "doDuty", ChangeByInput('HeaderPart', 'borderStyle', This));
        break;
      case 'HeaderBorderWidthEr':
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'borderWidth', This)", ["HeaderPart", "borderWidth", "This"], ['HeaderPart', 'borderWidth', This], "doDuty", ChangeByInput('HeaderPart', 'borderWidth', This));
        break;
      case 'HeaderBorderColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'HeaderPart')", ["This.value", "borderColor", "HeaderPart"], [This.value, 'borderColor', 'HeaderPart'], "doDuty", IPickColor(This.value, 'borderColor', 'HeaderPart'));
        break;
      case 'HeaderBorderColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'HeaderBorderColorEr', 'borderColor', 'HeaderPart')", ["eve", "HeaderBorderColorEr", "borderColor", "HeaderPart"], [eve, 'HeaderBorderColorEr', 'borderColor', 'HeaderPart'], "doDuty", ShowCP(eve, 'HeaderBorderColorEr', 'borderColor', 'HeaderPart'));
        break;
      case 'HeaderTopMarginEr':
        var d = confixWrapper("initvar", "var d = confixWrapper(\"functionCall\", \"parseInt(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseInt(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseInt(This.value)", ["This.value"], [This.value], "doDuty", parseInt(This.value)));
        var dm = confixWrapper("initvar", "var dm = (d < 27) ? 2 : d - 25", [""], [], "doDuty", (d < 27) ? 2 : d - 25);
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('BasicSettings')\", [\"BasicSettings\"], ['BasicSettings'], \"doDuty\", dg('BasicSettings')).style.display == 'none'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "dg('BasicSettings')", ["BasicSettings"], ['BasicSettings'], "doDuty", dg('BasicSettings')).style.display == 'none')) 
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'marginTop', dm + 'px')", ["HeaderPart", "marginTop", "dm + px"], ['HeaderPart', 'marginTop', dm + 'px'], "doDuty", ChangeByInput('HeaderPart', 'marginTop', dm + 'px')); else confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'marginTop', d + 'px')", ["HeaderPart", "marginTop", "d + px"], ['HeaderPart', 'marginTop', d + 'px'], "doDuty", ChangeByInput('HeaderPart', 'marginTop', d + 'px'));
        var d = confixWrapper("initvar", "var d = confixWrapper(\"functionCall\", \"parseInt(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseInt(This.value)) / 2", [""], [], "doDuty", confixWrapper("functionCall", "parseInt(This.value)", ["This.value"], [This.value], "doDuty", parseInt(This.value)) / 2);
        confixWrapper("functionCall", "ChangeByInput('ColsHeaderSep', 'marginTop', d + 'px')", ["ColsHeaderSep", "marginTop", "d + px"], ['ColsHeaderSep', 'marginTop', d + 'px'], "doDuty", ChangeByInput('ColsHeaderSep', 'marginTop', d + 'px'));
        break;
      case 'HeaderHorPaddingEr':
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'paddingRight', This)", ["HeaderPart", "paddingRight", "This"], ['HeaderPart', 'paddingRight', This], "doDuty", ChangeByInput('HeaderPart', 'paddingRight', This));
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'paddingLeft', This)", ["HeaderPart", "paddingLeft", "This"], ['HeaderPart', 'paddingLeft', This], "doDuty", ChangeByInput('HeaderPart', 'paddingLeft', This));
        break;
      case 'HeaderVerPaddingEr':
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'paddingTop', This)", ["HeaderPart", "paddingTop", "This"], ['HeaderPart', 'paddingTop', This], "doDuty", ChangeByInput('HeaderPart', 'paddingTop', This));
        confixWrapper("functionCall", "ChangeByInput('HeaderPart', 'paddingBottom', This)", ["HeaderPart", "paddingBottom", "This"], ['HeaderPart', 'paddingBottom', This], "doDuty", ChangeByInput('HeaderPart', 'paddingBottom', This));
        break;
      case 'HeaderLineSpacingEr':
        confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'marginTop', This)", ["SubTitleText", "marginTop", "This"], ['SubTitleText', 'marginTop', This], "doDuty", ChangeByInput('SubTitleText', 'marginTop', This));
        break;
      case 'SHCols':
        var showEn = confixWrapper("initvar", "var showEn = 'Show Columns Settings'", [""], [], "doDuty", 'Show Columns Settings');
        var hideEn = confixWrapper("initvar", "var hideEn = 'hide&nbsp; Columns Settings'", [""], [], "doDuty", 'hide&nbsp; Columns Settings');
        var showFa = confixWrapper("initvar", "var showFa = confixWrapper(\"functionCall\", \"translateIt('Namaayeshe tanzimaate sotoonha')\", [\"Namaayeshe tanzimaate sotoonha\"], ['Namaayeshe tanzimaate sotoonha'], \"doDuty\", translateIt('Namaayeshe tanzimaate sotoonha'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Namaayeshe tanzimaate sotoonha')", ["Namaayeshe tanzimaate sotoonha"], ['Namaayeshe tanzimaate sotoonha'], "doDuty", translateIt('Namaayeshe tanzimaate sotoonha')));
        var hideFa = confixWrapper("initvar", "var hideFa = confixWrapper(\"functionCall\", \"translateIt('Penhaansaazie tanzimaate sotoonha')\", [\"Penhaansaazie tanzimaate sotoonha\"], ['Penhaansaazie tanzimaate sotoonha'], \"doDuty\", translateIt('Penhaansaazie tanzimaate sotoonha'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Penhaansaazie tanzimaate sotoonha')", ["Penhaansaazie tanzimaate sotoonha"], ['Penhaansaazie tanzimaate sotoonha'], "doDuty", translateIt('Penhaansaazie tanzimaate sotoonha')));
        confixWrapper("functionCall", "ToggleDisplay('ColsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa)", ["ColsSetting", "This", "(global_lang == en) ? showEn : showFa", "block", "(global_lang == en) ? hideEn : hideFa"], ['ColsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa], "doDuty", ToggleDisplay('ColsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'ColsNumberIsOne':
        confixWrapper("functionCall", "SwitchDisplay('SideLColumn', 0)", ["SideLColumn", "0"], ['SideLColumn', 0], "doDuty", SwitchDisplay('SideLColumn', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideRColumn', 0)", ["SideRColumn", "0"], ['SideRColumn', 0], "doDuty", SwitchDisplay('SideRColumn', 0));
        confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('MainColWidthView')\", [\"MainColWidthView\"], ['MainColWidthView'], \"doDuty\", dg('MainColWidthView')).value = 100", [""], [], "doDuty", 100);
        confixWrapper("functionCall", "doDuty(dg('MainColWidthView'))", ["dg(MainColWidthView)"], [confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnSettingDiv', 0)", ["MainColumnSettingDiv", "0"], ['MainColumnSettingDiv', 0], "doDuty", SwitchDisplay('MainColumnSettingDiv', 0));
        break;
      case 'ColsNumberIsTwoL':
        confixWrapper("functionCall", "SwitchDisplay('SideLColumn', 0)", ["SideLColumn", "0"], ['SideLColumn', 0], "doDuty", SwitchDisplay('SideLColumn', 0));
        confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('MainColWidthView')\", [\"MainColWidthView\"], ['MainColWidthView'], \"doDuty\", dg('MainColWidthView')).value = 75", [""], [], "doDuty", 75);
        confixWrapper("functionCall", "doDuty(dg('MainColWidthView'))", ["dg(MainColWidthView)"], [confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))));
        confixWrapper("functionCall", "SwitchDisplay('SideRColumn', 1)", ["SideRColumn", "1"], ['SideRColumn', 1], "doDuty", SwitchDisplay('SideRColumn', 1));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnSettingDiv', 1)", ["MainColumnSettingDiv", "1"], ['MainColumnSettingDiv', 1], "doDuty", SwitchDisplay('MainColumnSettingDiv', 1));
        break;
      case 'ColsNumberIsTwoR':
        confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('MainColWidthView')\", [\"MainColWidthView\"], ['MainColWidthView'], \"doDuty\", dg('MainColWidthView')).value = 75", [""], [], "doDuty", 75);
        confixWrapper("functionCall", "SwitchDisplay('SideLColumn', 1)", ["SideLColumn", "1"], ['SideLColumn', 1], "doDuty", SwitchDisplay('SideLColumn', 1));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnSettingDiv', 1)", ["MainColumnSettingDiv", "1"], ['MainColumnSettingDiv', 1], "doDuty", SwitchDisplay('MainColumnSettingDiv', 1));
        confixWrapper("functionCall", "SwitchDisplay('SideRColumn', 0)", ["SideRColumn", "0"], ['SideRColumn', 0], "doDuty", SwitchDisplay('SideRColumn', 0));
        confixWrapper("functionCall", "doDuty(dg('MainColWidthView'))", ["dg(MainColWidthView)"], [confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))));
        break;
      case 'ColsNumberIsThree':
        confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('MainColWidthView')\", [\"MainColWidthView\"], ['MainColWidthView'], \"doDuty\", dg('MainColWidthView')).value = 50", [""], [], "doDuty", 50);
        confixWrapper("functionCall", "doDuty(dg('MainColWidthView'))", ["dg(MainColWidthView)"], [confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))));
        confixWrapper("functionCall", "SwitchDisplay('SideLColumn', 1)", ["SideLColumn", "1"], ['SideLColumn', 1], "doDuty", SwitchDisplay('SideLColumn', 1));
        confixWrapper("functionCall", "SwitchDisplay('SideRColumn', 1)", ["SideRColumn", "1"], ['SideRColumn', 1], "doDuty", SwitchDisplay('SideRColumn', 1));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnSettingDiv', 1)", ["MainColumnSettingDiv", "1"], ['MainColumnSettingDiv', 1], "doDuty", SwitchDisplay('MainColumnSettingDiv', 1));
        break;
      case 'MainColWidthView':
        var i, t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        for (i = confixWrapper("infix", "i = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "i < document.PsycHoForm.ColsNumberRadioEr.length", [""], [], "doDuty", i < document.PsycHoForm.ColsNumberRadioEr.length); i++) 
          if (confixWrapper("condition", "document.PsycHoForm.ColsNumberRadioEr[i].checked", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", document.PsycHoForm.ColsNumberRadioEr[i].checked)) 
          break;
        confixWrapper("functionCall", "ChangeByInput('MainColumn', 'width', ((i != 0) ? t : '100') + '%')", ["MainColumn", "width", "((i != 0) ? t : 100) + %"], ['MainColumn', 'width', ((i != 0) ? t : '100') + '%'], "doDuty", ChangeByInput('MainColumn', 'width', ((i != 0) ? t : '100') + '%'));
        confixWrapper("functionCall", "ChangeByInput('ColsPart', 'width', ((i == 0) ? t : '100') + '%')", ["ColsPart", "width", "((i == 0) ? t : 100) + %"], ['ColsPart', 'width', ((i == 0) ? t : '100') + '%'], "doDuty", ChangeByInput('ColsPart', 'width', ((i == 0) ? t : '100') + '%'));
        t = confixWrapper("infix", "t = 100 - confixWrapper(\"functionCall\", \"parseFloat(dg('SideRColumn').style.marginLeft)\", [\"dg(SideRColumn).style.marginLeft\"], [confixWrapper(\"functionCall\", \"dg('SideRColumn')\", [\"SideRColumn\"], ['SideRColumn'], \"doDuty\", dg('SideRColumn')).style.marginLeft], \"doDuty\", parseFloat(confixWrapper(\"functionCall\", \"dg('SideRColumn')\", [\"SideRColumn\"], ['SideRColumn'], \"doDuty\", dg('SideRColumn')).style.marginLeft)) - t - (confixWrapper(\"functionCall\", \"isIE()\", [], [], \"doDuty\", isIE()) ? 0.2 : 0.1)", [""], [], "doDuty", 100 - confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.marginLeft)", ["dg(SideRColumn).style.marginLeft"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.marginLeft], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.marginLeft)) - t - (confixWrapper("functionCall", "isIE()", [], [], "doDuty", isIE()) ? 0.2 : 0.1));
        if (confixWrapper("condition", "i == 3", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", i == 3)) 
        t = confixWrapper("infix", "t = (t - confixWrapper(\"functionCall\", \"parseFloat(dg('SideRColumn').style.marginLeft)\", [\"dg(SideRColumn).style.marginLeft\"], [confixWrapper(\"functionCall\", \"dg('SideRColumn')\", [\"SideRColumn\"], ['SideRColumn'], \"doDuty\", dg('SideRColumn')).style.marginLeft], \"doDuty\", parseFloat(confixWrapper(\"functionCall\", \"dg('SideRColumn')\", [\"SideRColumn\"], ['SideRColumn'], \"doDuty\", dg('SideRColumn')).style.marginLeft))) / 2", [""], [], "doDuty", (t - confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.marginLeft)", ["dg(SideRColumn).style.marginLeft"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.marginLeft], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.marginLeft))) / 2);
        confixWrapper("functionCall", "ChangeByInput('SideRColumn', 'width', t + '%')", ["SideRColumn", "width", "t + %"], ['SideRColumn', 'width', t + '%'], "doDuty", ChangeByInput('SideRColumn', 'width', t + '%'));
        confixWrapper("functionCall", "ChangeByInput('SideLColumn', 'width', t + '%')", ["SideLColumn", "width", "t + %"], ['SideLColumn', 'width', t + '%'], "doDuty", ChangeByInput('SideLColumn', 'width', t + '%'));
        break;
      case 'MainColWidthInc':
        confixWrapper("functionCall", "doIncDec('MainColWidthView', 1, 2, 97)", ["MainColWidthView", "1", "2", "97"], ['MainColWidthView', 1, 2, 97], "doDuty", doIncDec('MainColWidthView', 1, 2, 97));
        break;
      case 'MainColWidthDec':
        confixWrapper("functionCall", "doIncDec('MainColWidthView', -1, 2, 97)", ["MainColWidthView", "-1", "2", "97"], ['MainColWidthView', -1, 2, 97], "doDuty", doIncDec('MainColWidthView', -1, 2, 97));
        break;
      case 'MainSpcPaddingView':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        var s = confixWrapper("initvar", "var s = t / 2", [""], [], "doDuty", t / 2);
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'paddingLeft', t + 'px')", ["MainColumnInner", "paddingLeft", "t + px"], ['MainColumnInner', 'paddingLeft', t + 'px'], "doDuty", ChangeByInput('MainColumnInner', 'paddingLeft', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'paddingRight', t + 'px')", ["MainColumnInner", "paddingRight", "t + px"], ['MainColumnInner', 'paddingRight', t + 'px'], "doDuty", ChangeByInput('MainColumnInner', 'paddingRight', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'paddingTop', (t / 2) + 'px')", ["MainColumnInner", "paddingTop", "(t / 2) + px"], ['MainColumnInner', 'paddingTop', (t / 2) + 'px'], "doDuty", ChangeByInput('MainColumnInner', 'paddingTop', (t / 2) + 'px'));
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'paddingBottom', (t / 2) + 'px')", ["MainColumnInner", "paddingBottom", "(t / 2) + px"], ['MainColumnInner', 'paddingBottom', (t / 2) + 'px'], "doDuty", ChangeByInput('MainColumnInner', 'paddingBottom', (t / 2) + 'px'));
        break;
      case 'MainSpcPaddingInc':
        confixWrapper("functionCall", "doIncDec('MainSpcPaddingView', 5, 0, 100)", ["MainSpcPaddingView", "5", "0", "100"], ['MainSpcPaddingView', 5, 0, 100], "doDuty", doIncDec('MainSpcPaddingView', 5, 0, 100));
        break;
      case 'MainSpcPaddingDec':
        confixWrapper("functionCall", "doIncDec('MainSpcPaddingView', -5, 0, 100)", ["MainSpcPaddingView", "-5", "0", "100"], ['MainSpcPaddingView', -5, 0, 100], "doDuty", doIncDec('MainSpcPaddingView', -5, 0, 100));
        break;
      case 'MainColumnsBorderStyleEr':
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'borderStyle', This)", ["MainColumnInner", "borderStyle", "This"], ['MainColumnInner', 'borderStyle', This], "doDuty", ChangeByInput('MainColumnInner', 'borderStyle', This));
        break;
      case 'MainColumnsBorderWidthEr':
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'borderWidth', This)", ["MainColumnInner", "borderWidth", "This"], ['MainColumnInner', 'borderWidth', This], "doDuty", ChangeByInput('MainColumnInner', 'borderWidth', This));
        break;
      case 'MainColumnsBorderColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'MainColumnInner')", ["This.value", "borderColor", "MainColumnInner"], [This.value, 'borderColor', 'MainColumnInner'], "doDuty", IPickColor(This.value, 'borderColor', 'MainColumnInner'));
        break;
      case 'MainColumnsBorderColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'MainColumnsBorderColorEr', 'borderColor', 'MainColumnInner')", ["eve", "MainColumnsBorderColorEr", "borderColor", "MainColumnInner"], [eve, 'MainColumnsBorderColorEr', 'borderColor', 'MainColumnInner'], "doDuty", ShowCP(eve, 'MainColumnsBorderColorEr', 'borderColor', 'MainColumnInner'));
        break;
      case 'MainColumnsBackIsColorEr':
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsTexture', 0)", ["MainColumnsBackgroundIsTexture", "0"], ['MainColumnsBackgroundIsTexture', 0], "doDuty", SwitchDisplay('MainColumnsBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsImage', 0)", ["MainColumnsBackgroundIsImage", "0"], ['MainColumnsBackgroundIsImage', 0], "doDuty", SwitchDisplay('MainColumnsBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsColor', 1)", ["MainColumnsBackgroundIsColor", "1"], ['MainColumnsBackgroundIsColor', 1], "doDuty", SwitchDisplay('MainColumnsBackgroundIsColor', 1));
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'backgroundImage', '')", ["MainColumnInner", "backgroundImage", ""], ['MainColumnInner', 'backgroundImage', ''], "doDuty", ChangeByInput('MainColumnInner', 'backgroundImage', ''));
        break;
      case 'MainColumnsBackIsTextureEr':
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsColor', 0)", ["MainColumnsBackgroundIsColor", "0"], ['MainColumnsBackgroundIsColor', 0], "doDuty", SwitchDisplay('MainColumnsBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsImage', 0)", ["MainColumnsBackgroundIsImage", "0"], ['MainColumnsBackgroundIsImage', 0], "doDuty", SwitchDisplay('MainColumnsBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsTexture', 1, 'inline')", ["MainColumnsBackgroundIsTexture", "1", "inline"], ['MainColumnsBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('MainColumnsBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('MainColumnsBackTextureEr'))", ["dg(MainColumnsBackTextureEr)"], [confixWrapper("functionCall", "dg('MainColumnsBackTextureEr')", ["MainColumnsBackTextureEr"], ['MainColumnsBackTextureEr'], "doDuty", dg('MainColumnsBackTextureEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColumnsBackTextureEr')", ["MainColumnsBackTextureEr"], ['MainColumnsBackTextureEr'], "doDuty", dg('MainColumnsBackTextureEr'))));
        break;
      case 'MainColumnsBackIsImageEr':
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsColor', 0)", ["MainColumnsBackgroundIsColor", "0"], ['MainColumnsBackgroundIsColor', 0], "doDuty", SwitchDisplay('MainColumnsBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsTexture', 0)", ["MainColumnsBackgroundIsTexture", "0"], ['MainColumnsBackgroundIsTexture', 0], "doDuty", SwitchDisplay('MainColumnsBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('MainColumnsBackgroundIsImage', 1, 'inline')", ["MainColumnsBackgroundIsImage", "1", "inline"], ['MainColumnsBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('MainColumnsBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('MainColumnsBackImageEr'))", ["dg(MainColumnsBackImageEr)"], [confixWrapper("functionCall", "dg('MainColumnsBackImageEr')", ["MainColumnsBackImageEr"], ['MainColumnsBackImageEr'], "doDuty", dg('MainColumnsBackImageEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColumnsBackImageEr')", ["MainColumnsBackImageEr"], ['MainColumnsBackImageEr'], "doDuty", dg('MainColumnsBackImageEr'))));
        break;
      case 'MainColumnsBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'MainColumnInner')", ["This.value", "backgroundColor", "MainColumnInner"], [This.value, 'backgroundColor', 'MainColumnInner'], "doDuty", IPickColor(This.value, 'backgroundColor', 'MainColumnInner'));
        break;
      case 'MainColumnsBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'MainColumnsBackColorEr', 'backgroundColor', 'MainColumnInner')", ["eve", "MainColumnsBackColorEr", "backgroundColor", "MainColumnInner"], [eve, 'MainColumnsBackColorEr', 'backgroundColor', 'MainColumnInner'], "doDuty", ShowCP(eve, 'MainColumnsBackColorEr', 'backgroundColor', 'MainColumnInner'));
        break;
      case 'MainColumnsBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'backgroundImage', This)", ["MainColumnInner", "backgroundImage", "This"], ['MainColumnInner', 'backgroundImage', This], "doDuty", ChangeByInput('MainColumnInner', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'backgroundRepeat', 'repeat')", ["MainColumnInner", "backgroundRepeat", "repeat"], ['MainColumnInner', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('MainColumnInner', 'backgroundRepeat', 'repeat'));
        break;
      case 'MainColumnsBackImageEr':
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'backgroundImage', This)", ["MainColumnInner", "backgroundImage", "This"], ['MainColumnInner', 'backgroundImage', This], "doDuty", ChangeByInput('MainColumnInner', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('MainColumnInner', 'backgroundRepeat', 'no-repeat')", ["MainColumnInner", "backgroundRepeat", "no-repeat"], ['MainColumnInner', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('MainColumnInner', 'backgroundRepeat', 'no-repeat'));
        break;
      case 'SideSpcWidthView':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('SideRColumn', 'marginLeft', t + '%')", ["SideRColumn", "marginLeft", "t + %"], ['SideRColumn', 'marginLeft', t + '%'], "doDuty", ChangeByInput('SideRColumn', 'marginLeft', t + '%'));
        confixWrapper("functionCall", "ChangeByInput('SideLColumn', 'marginRight', t + '%')", ["SideLColumn", "marginRight", "t + %"], ['SideLColumn', 'marginRight', t + '%'], "doDuty", ChangeByInput('SideLColumn', 'marginRight', t + '%'));
        confixWrapper("functionCall", "doDuty(dg('MainColWidthView'))", ["dg(MainColWidthView)"], [confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "doDuty", dg('MainColWidthView'))));
        break;
      case 'SideSpcWidthInc':
        confixWrapper("functionCall", "doIncDec('SideSpcWidthView', 0.5, 0, parseFloat(dg('SideRColumn').style.width))", ["SideSpcWidthView", "0.5", "0", "parseFloat(dg(SideRColumn).style.width)"], ['SideSpcWidthView', 0.5, 0, confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.width)", ["dg(SideRColumn).style.width"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width))], "doDuty", doIncDec('SideSpcWidthView', 0.5, 0, confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.width)", ["dg(SideRColumn).style.width"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width))));
        break;
      case 'SideSpcWidthDec':
        confixWrapper("functionCall", "doIncDec('SideSpcWidthView', -0.5, 0, parseFloat(dg('SideRColumn').style.width))", ["SideSpcWidthView", "-0.5", "0", "parseFloat(dg(SideRColumn).style.width)"], ['SideSpcWidthView', -0.5, 0, confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.width)", ["dg(SideRColumn).style.width"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width))], "doDuty", doIncDec('SideSpcWidthView', -0.5, 0, confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.width)", ["dg(SideRColumn).style.width"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.width))));
        break;
      case 'SideSpcPaddingView':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'paddingLeft', t + 'px')", ["SideRColumnInner", "paddingLeft", "t + px"], ['SideRColumnInner', 'paddingLeft', t + 'px'], "doDuty", ChangeByInput('SideRColumnInner', 'paddingLeft', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'paddingRight', t + 'px')", ["SideRColumnInner", "paddingRight", "t + px"], ['SideRColumnInner', 'paddingRight', t + 'px'], "doDuty", ChangeByInput('SideRColumnInner', 'paddingRight', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'paddingLeft', t + 'px')", ["SideLColumnInner", "paddingLeft", "t + px"], ['SideLColumnInner', 'paddingLeft', t + 'px'], "doDuty", ChangeByInput('SideLColumnInner', 'paddingLeft', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'paddingRight', t + 'px')", ["SideLColumnInner", "paddingRight", "t + px"], ['SideLColumnInner', 'paddingRight', t + 'px'], "doDuty", ChangeByInput('SideLColumnInner', 'paddingRight', t + 'px'));
        var sa = confixWrapper("initvar", "var sa = \"LR\"", [""], [], "doDuty", "LR");
        for (var j = confixWrapper("initvar", "var j = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "j < sa.length", [""], [], "doDuty", j < sa.length); j++) 
          for (var i = confixWrapper("initvar", "var i = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", [""], [], "doDuty", i < maxBoxNumOnSides); i++) 
            {
              confixWrapper("functionCall", "ChangeByInput(sa.charAt(j) + '_DefaultDiv_' + i, 'paddingLeft', t + 'px')", ["sa.charAt(j) + _DefaultDiv_ + i", "paddingLeft", "t + px"], [confixWrapper("functionCall", "sa.charAt(j)", ["j"], [j], "doDuty", sa.charAt(j)) + '_DefaultDiv_' + i, 'paddingLeft', t + 'px'], "doDuty", ChangeByInput(confixWrapper("functionCall", "sa.charAt(j)", ["j"], [j], "doDuty", sa.charAt(j)) + '_DefaultDiv_' + i, 'paddingLeft', t + 'px'));
              confixWrapper("functionCall", "ChangeByInput(sa.charAt(j) + '_DefaultDiv_' + i, 'paddingRight', t + 'px')", ["sa.charAt(j) + _DefaultDiv_ + i", "paddingRight", "t + px"], [confixWrapper("functionCall", "sa.charAt(j)", ["j"], [j], "doDuty", sa.charAt(j)) + '_DefaultDiv_' + i, 'paddingRight', t + 'px'], "doDuty", ChangeByInput(confixWrapper("functionCall", "sa.charAt(j)", ["j"], [j], "doDuty", sa.charAt(j)) + '_DefaultDiv_' + i, 'paddingRight', t + 'px'));
            }
        break;
      case 'SideSpcPaddingInc':
        confixWrapper("functionCall", "doIncDec('SideSpcPaddingView', 5, 0, 40)", ["SideSpcPaddingView", "5", "0", "40"], ['SideSpcPaddingView', 5, 0, 40], "doDuty", doIncDec('SideSpcPaddingView', 5, 0, 40));
        break;
      case 'SideSpcPaddingDec':
        confixWrapper("functionCall", "doIncDec('SideSpcPaddingView', -5, 0, 40)", ["SideSpcPaddingView", "-5", "0", "40"], ['SideSpcPaddingView', -5, 0, 40], "doDuty", doIncDec('SideSpcPaddingView', -5, 0, 40));
        break;
      case 'SideColumnsBorderStyleEr':
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'borderStyle', This)", ["SideRColumnInner", "borderStyle", "This"], ['SideRColumnInner', 'borderStyle', This], "doDuty", ChangeByInput('SideRColumnInner', 'borderStyle', This));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'borderStyle', This)", ["SideLColumnInner", "borderStyle", "This"], ['SideLColumnInner', 'borderStyle', This], "doDuty", ChangeByInput('SideLColumnInner', 'borderStyle', This));
        break;
      case 'SideColumnsBorderWidthEr':
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'borderWidth', This)", ["SideRColumnInner", "borderWidth", "This"], ['SideRColumnInner', 'borderWidth', This], "doDuty", ChangeByInput('SideRColumnInner', 'borderWidth', This));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'borderWidth', This)", ["SideLColumnInner", "borderWidth", "This"], ['SideLColumnInner', 'borderWidth', This], "doDuty", ChangeByInput('SideLColumnInner', 'borderWidth', This));
        break;
      case 'SideColumnsBorderColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'SideRColumnInner')", ["This.value", "borderColor", "SideRColumnInner"], [This.value, 'borderColor', 'SideRColumnInner'], "doDuty", IPickColor(This.value, 'borderColor', 'SideRColumnInner'));
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'SideLColumnInner')", ["This.value", "borderColor", "SideLColumnInner"], [This.value, 'borderColor', 'SideLColumnInner'], "doDuty", IPickColor(This.value, 'borderColor', 'SideLColumnInner'));
        break;
      case 'SideColumnsBorderColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'SideColumnsBorderColorEr', 'borderColor', 'SideRColumnInner')", ["eve", "SideColumnsBorderColorEr", "borderColor", "SideRColumnInner"], [eve, 'SideColumnsBorderColorEr', 'borderColor', 'SideRColumnInner'], "doDuty", ShowCP(eve, 'SideColumnsBorderColorEr', 'borderColor', 'SideRColumnInner'));
        break;
      case 'SideColumnsBackIsColorEr':
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsTexture', 0)", ["SideColumnsBackgroundIsTexture", "0"], ['SideColumnsBackgroundIsTexture', 0], "doDuty", SwitchDisplay('SideColumnsBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsImage', 0)", ["SideColumnsBackgroundIsImage", "0"], ['SideColumnsBackgroundIsImage', 0], "doDuty", SwitchDisplay('SideColumnsBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsColor', 1)", ["SideColumnsBackgroundIsColor", "1"], ['SideColumnsBackgroundIsColor', 1], "doDuty", SwitchDisplay('SideColumnsBackgroundIsColor', 1));
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'backgroundImage', '')", ["SideRColumnInner", "backgroundImage", ""], ['SideRColumnInner', 'backgroundImage', ''], "doDuty", ChangeByInput('SideRColumnInner', 'backgroundImage', ''));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'backgroundImage', '')", ["SideLColumnInner", "backgroundImage", ""], ['SideLColumnInner', 'backgroundImage', ''], "doDuty", ChangeByInput('SideLColumnInner', 'backgroundImage', ''));
        break;
      case 'SideColumnsBackIsTextureEr':
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsColor', 0)", ["SideColumnsBackgroundIsColor", "0"], ['SideColumnsBackgroundIsColor', 0], "doDuty", SwitchDisplay('SideColumnsBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsImage', 0)", ["SideColumnsBackgroundIsImage", "0"], ['SideColumnsBackgroundIsImage', 0], "doDuty", SwitchDisplay('SideColumnsBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsTexture', 1, 'inline')", ["SideColumnsBackgroundIsTexture", "1", "inline"], ['SideColumnsBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('SideColumnsBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('SideColumnsBackTextureEr'))", ["dg(SideColumnsBackTextureEr)"], [confixWrapper("functionCall", "dg('SideColumnsBackTextureEr')", ["SideColumnsBackTextureEr"], ['SideColumnsBackTextureEr'], "doDuty", dg('SideColumnsBackTextureEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('SideColumnsBackTextureEr')", ["SideColumnsBackTextureEr"], ['SideColumnsBackTextureEr'], "doDuty", dg('SideColumnsBackTextureEr'))));
        break;
      case 'SideColumnsBackIsImageEr':
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsColor', 0)", ["SideColumnsBackgroundIsColor", "0"], ['SideColumnsBackgroundIsColor', 0], "doDuty", SwitchDisplay('SideColumnsBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsTexture', 0)", ["SideColumnsBackgroundIsTexture", "0"], ['SideColumnsBackgroundIsTexture', 0], "doDuty", SwitchDisplay('SideColumnsBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('SideColumnsBackgroundIsImage', 1, 'inline')", ["SideColumnsBackgroundIsImage", "1", "inline"], ['SideColumnsBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('SideColumnsBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('SideColumnsBackImageEr'))", ["dg(SideColumnsBackImageEr)"], [confixWrapper("functionCall", "dg('SideColumnsBackImageEr')", ["SideColumnsBackImageEr"], ['SideColumnsBackImageEr'], "doDuty", dg('SideColumnsBackImageEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('SideColumnsBackImageEr')", ["SideColumnsBackImageEr"], ['SideColumnsBackImageEr'], "doDuty", dg('SideColumnsBackImageEr'))));
        break;
      case 'SideColumnsBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'SideRColumnInner')", ["This.value", "backgroundColor", "SideRColumnInner"], [This.value, 'backgroundColor', 'SideRColumnInner'], "doDuty", IPickColor(This.value, 'backgroundColor', 'SideRColumnInner'));
        break;
      case 'SideColumnsBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'SideColumnsBackColorEr', 'backgroundColor', 'SideRColumnInner')", ["eve", "SideColumnsBackColorEr", "backgroundColor", "SideRColumnInner"], [eve, 'SideColumnsBackColorEr', 'backgroundColor', 'SideRColumnInner'], "doDuty", ShowCP(eve, 'SideColumnsBackColorEr', 'backgroundColor', 'SideRColumnInner'));
        break;
      case 'SideColumnsBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'backgroundImage', This)", ["SideRColumnInner", "backgroundImage", "This"], ['SideRColumnInner', 'backgroundImage', This], "doDuty", ChangeByInput('SideRColumnInner', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'backgroundRepeat', 'repeat')", ["SideRColumnInner", "backgroundRepeat", "repeat"], ['SideRColumnInner', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('SideRColumnInner', 'backgroundRepeat', 'repeat'));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'backgroundImage', This)", ["SideLColumnInner", "backgroundImage", "This"], ['SideLColumnInner', 'backgroundImage', This], "doDuty", ChangeByInput('SideLColumnInner', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'backgroundRepeat', 'repeat')", ["SideLColumnInner", "backgroundRepeat", "repeat"], ['SideLColumnInner', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('SideLColumnInner', 'backgroundRepeat', 'repeat'));
        break;
      case 'SideColumnsBackImageEr':
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'backgroundImage', This)", ["SideRColumnInner", "backgroundImage", "This"], ['SideRColumnInner', 'backgroundImage', This], "doDuty", ChangeByInput('SideRColumnInner', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('SideRColumnInner', 'backgroundRepeat', 'no-repeat')", ["SideRColumnInner", "backgroundRepeat", "no-repeat"], ['SideRColumnInner', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('SideRColumnInner', 'backgroundRepeat', 'no-repeat'));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'backgroundImage', This)", ["SideLColumnInner", "backgroundImage", "This"], ['SideLColumnInner', 'backgroundImage', This], "doDuty", ChangeByInput('SideLColumnInner', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', 'backgroundRepeat', 'no-repeat')", ["SideLColumnInner", "backgroundRepeat", "no-repeat"], ['SideLColumnInner', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('SideLColumnInner', 'backgroundRepeat', 'no-repeat'));
        break;
      case 'SHPosts':
        var showEn = confixWrapper("initvar", "var showEn = 'Show Posts Schema Settings'", [""], [], "doDuty", 'Show Posts Schema Settings');
        var hideEn = confixWrapper("initvar", "var hideEn = 'hide&nbsp; Posts Schema Settings'", [""], [], "doDuty", 'hide&nbsp; Posts Schema Settings');
        var showFa = confixWrapper("initvar", "var showFa = confixWrapper(\"functionCall\", \"translateIt('Namaayeshe tanzimaate zaaherie postha')\", [\"Namaayeshe tanzimaate zaaherie postha\"], ['Namaayeshe tanzimaate zaaherie postha'], \"doDuty\", translateIt('Namaayeshe tanzimaate zaaherie postha'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Namaayeshe tanzimaate zaaherie postha')", ["Namaayeshe tanzimaate zaaherie postha"], ['Namaayeshe tanzimaate zaaherie postha'], "doDuty", translateIt('Namaayeshe tanzimaate zaaherie postha')));
        var hideFa = confixWrapper("initvar", "var hideFa = confixWrapper(\"functionCall\", \"translateIt('Penhaansaazie tanzimaate zaaherie postha')\", [\"Penhaansaazie tanzimaate zaaherie postha\"], ['Penhaansaazie tanzimaate zaaherie postha'], \"doDuty\", translateIt('Penhaansaazie tanzimaate zaaherie postha'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Penhaansaazie tanzimaate zaaherie postha')", ["Penhaansaazie tanzimaate zaaherie postha"], ['Penhaansaazie tanzimaate zaaherie postha'], "doDuty", translateIt('Penhaansaazie tanzimaate zaaherie postha')));
        confixWrapper("functionCall", "ToggleDisplay('PostsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa)", ["PostsSetting", "This", "(global_lang == en) ? showEn : showFa", "block", "(global_lang == en) ? hideEn : hideFa"], ['PostsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa], "doDuty", ToggleDisplay('PostsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'SHPostsT':
        var showEn = confixWrapper("initvar", "var showEn = 'Show Posts <span style=\"padding: 0px 2px 0px 3px;\">Theme</span> Settings'", [""], [], "doDuty", 'Show Posts <span style="padding: 0px 2px 0px 3px;">Theme</span> Settings');
        var hideEn = confixWrapper("initvar", "var hideEn = 'hide&nbsp; Posts <span style=\"padding: 0px 2px 0px 3px;\">Theme</span> Settings'", [""], [], "doDuty", 'hide&nbsp; Posts <span style="padding: 0px 2px 0px 3px;">Theme</span> Settings');
        var showFa = confixWrapper("initvar", "var showFa = confixWrapper(\"functionCall\", \"translateIt('Namaayeshe tanzimaate daakhelie postha')\", [\"Namaayeshe tanzimaate daakhelie postha\"], ['Namaayeshe tanzimaate daakhelie postha'], \"doDuty\", translateIt('Namaayeshe tanzimaate daakhelie postha'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Namaayeshe tanzimaate daakhelie postha')", ["Namaayeshe tanzimaate daakhelie postha"], ['Namaayeshe tanzimaate daakhelie postha'], "doDuty", translateIt('Namaayeshe tanzimaate daakhelie postha')));
        var hideFa = confixWrapper("initvar", "var hideFa = confixWrapper(\"functionCall\", \"translateIt('Penhaansaazie tanzimaate daakhelie postha')\", [\"Penhaansaazie tanzimaate daakhelie postha\"], ['Penhaansaazie tanzimaate daakhelie postha'], \"doDuty\", translateIt('Penhaansaazie tanzimaate daakhelie postha'))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt('Penhaansaazie tanzimaate daakhelie postha')", ["Penhaansaazie tanzimaate daakhelie postha"], ['Penhaansaazie tanzimaate daakhelie postha'], "doDuty", translateIt('Penhaansaazie tanzimaate daakhelie postha')));
        confixWrapper("functionCall", "ToggleDisplay('PostsThemeSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa)", ["PostsThemeSetting", "This", "(global_lang == en) ? showEn : showFa", "block", "(global_lang == en) ? hideEn : hideFa"], ['PostsThemeSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa], "doDuty", ToggleDisplay('PostsThemeSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'SHSideR':
        confixWrapper("functionCall", "ToggleDisplay('SideRSchema', This, (global_lang == 'en') ? 'R-Side Schema' : translateIt('Tanzimaate daakheli'))", ["SideRSchema", "This", "(global_lang == en) ? R-Side Schema : translateIt(Tanzimaate daakheli)"], ['SideRSchema', This, (global_lang == 'en') ? 'R-Side Schema' : confixWrapper("functionCall", "translateIt('Tanzimaate daakheli')", ["Tanzimaate daakheli"], ['Tanzimaate daakheli'], "doDuty", translateIt('Tanzimaate daakheli'))], "doDuty", ToggleDisplay('SideRSchema', This, (global_lang == 'en') ? 'R-Side Schema' : confixWrapper("functionCall", "translateIt('Tanzimaate daakheli')", ["Tanzimaate daakheli"], ['Tanzimaate daakheli'], "doDuty", translateIt('Tanzimaate daakheli'))));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'SHSideRT':
        confixWrapper("functionCall", "ToggleDisplay('SideRTheme', This, (global_lang == 'en') ? 'R-Side Theme' : translateIt('Tanzimaate zaaheri'))", ["SideRTheme", "This", "(global_lang == en) ? R-Side Theme : translateIt(Tanzimaate zaaheri)"], ['SideRTheme', This, (global_lang == 'en') ? 'R-Side Theme' : confixWrapper("functionCall", "translateIt('Tanzimaate zaaheri')", ["Tanzimaate zaaheri"], ['Tanzimaate zaaheri'], "doDuty", translateIt('Tanzimaate zaaheri'))], "doDuty", ToggleDisplay('SideRTheme', This, (global_lang == 'en') ? 'R-Side Theme' : confixWrapper("functionCall", "translateIt('Tanzimaate zaaheri')", ["Tanzimaate zaaheri"], ['Tanzimaate zaaheri'], "doDuty", translateIt('Tanzimaate zaaheri'))));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'SHSideL':
        confixWrapper("functionCall", "ToggleDisplay('SideLSchema', This, (global_lang == 'en') ? 'L-Side Schema' : translateIt('Tanzimaate daakheli'))", ["SideLSchema", "This", "(global_lang == en) ? L-Side Schema : translateIt(Tanzimaate daakheli)"], ['SideLSchema', This, (global_lang == 'en') ? 'L-Side Schema' : confixWrapper("functionCall", "translateIt('Tanzimaate daakheli')", ["Tanzimaate daakheli"], ['Tanzimaate daakheli'], "doDuty", translateIt('Tanzimaate daakheli'))], "doDuty", ToggleDisplay('SideLSchema', This, (global_lang == 'en') ? 'L-Side Schema' : confixWrapper("functionCall", "translateIt('Tanzimaate daakheli')", ["Tanzimaate daakheli"], ['Tanzimaate daakheli'], "doDuty", translateIt('Tanzimaate daakheli'))));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'SHSideLT':
        confixWrapper("functionCall", "ToggleDisplay('SideLTheme', This, (global_lang == 'en') ? 'L-Side Theme' : translateIt('Tanzimaate zaaheri'))", ["SideLTheme", "This", "(global_lang == en) ? L-Side Theme : translateIt(Tanzimaate zaaheri)"], ['SideLTheme', This, (global_lang == 'en') ? 'L-Side Theme' : confixWrapper("functionCall", "translateIt('Tanzimaate zaaheri')", ["Tanzimaate zaaheri"], ['Tanzimaate zaaheri'], "doDuty", translateIt('Tanzimaate zaaheri'))], "doDuty", ToggleDisplay('SideLTheme', This, (global_lang == 'en') ? 'L-Side Theme' : confixWrapper("functionCall", "translateIt('Tanzimaate zaaheri')", ["Tanzimaate zaaheri"], ['Tanzimaate zaaheri'], "doDuty", translateIt('Tanzimaate zaaheri'))));
        confixWrapper("functionCall", "ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor')", ["This", "#EEE", "#F93", "borderBottomColor"], [This, '#EEE', '#F93', 'borderBottomColor'], "doDuty", ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor'));
        break;
      case 'OnePostBorderStyleEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'borderStyle', This)", ["OnePostMainDiv", "borderStyle", "This"], ['OnePostMainDiv', 'borderStyle', This], "doDuty", ChangeByInput('OnePostMainDiv', 'borderStyle', This));
        break;
      case 'OnePostBorderWidthEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'borderWidth', This)", ["OnePostMainDiv", "borderWidth", "This"], ['OnePostMainDiv', 'borderWidth', This], "doDuty", ChangeByInput('OnePostMainDiv', 'borderWidth', This));
        break;
      case 'OnePostBorderColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'OnePostMainDiv')", ["This.value", "borderColor", "OnePostMainDiv"], [This.value, 'borderColor', 'OnePostMainDiv'], "doDuty", IPickColor(This.value, 'borderColor', 'OnePostMainDiv'));
        break;
      case 'OnePostBorderColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'OnePostBorderColorEr', 'borderColor', 'OnePostMainDiv')", ["eve", "OnePostBorderColorEr", "borderColor", "OnePostMainDiv"], [eve, 'OnePostBorderColorEr', 'borderColor', 'OnePostMainDiv'], "doDuty", ShowCP(eve, 'OnePostBorderColorEr', 'borderColor', 'OnePostMainDiv'));
        break;
      case 'VerPostBorderStyleEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'borderStyle', This)", ["OnePostTopPart", "borderStyle", "This"], ['OnePostTopPart', 'borderStyle', This], "doDuty", ChangeByInput('OnePostTopPart', 'borderStyle', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'borderStyle', This)", ["OnePostBotPart", "borderStyle", "This"], ['OnePostBotPart', 'borderStyle', This], "doDuty", ChangeByInput('OnePostBotPart', 'borderStyle', This));
        break;
      case 'VerPostBorderWidthEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'borderBottomWidth', This)", ["OnePostTopPart", "borderBottomWidth", "This"], ['OnePostTopPart', 'borderBottomWidth', This], "doDuty", ChangeByInput('OnePostTopPart', 'borderBottomWidth', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'borderTopWidth', This)", ["OnePostBotPart", "borderTopWidth", "This"], ['OnePostBotPart', 'borderTopWidth', This], "doDuty", ChangeByInput('OnePostBotPart', 'borderTopWidth', This));
        break;
      case 'VerPostBorderColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'OnePostTopPart')", ["This.value", "borderColor", "OnePostTopPart"], [This.value, 'borderColor', 'OnePostTopPart'], "doDuty", IPickColor(This.value, 'borderColor', 'OnePostTopPart'));
        break;
      case 'VerPostBorderColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'VerPostBorderColorEr', 'borderColor', 'OnePostTopPart')", ["eve", "VerPostBorderColorEr", "borderColor", "OnePostTopPart"], [eve, 'VerPostBorderColorEr', 'borderColor', 'OnePostTopPart'], "doDuty", ShowCP(eve, 'VerPostBorderColorEr', 'borderColor', 'OnePostTopPart'));
        break;
      case 'PostBodyBackIsColorEr':
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsTexture', 0)", ["PostBodyBackgroundIsTexture", "0"], ['PostBodyBackgroundIsTexture', 0], "doDuty", SwitchDisplay('PostBodyBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsImage', 0)", ["PostBodyBackgroundIsImage", "0"], ['PostBodyBackgroundIsImage', 0], "doDuty", SwitchDisplay('PostBodyBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsColor', 1)", ["PostBodyBackgroundIsColor", "1"], ['PostBodyBackgroundIsColor', 1], "doDuty", SwitchDisplay('PostBodyBackgroundIsColor', 1));
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'backgroundImage', '')", ["OnePostMainDiv", "backgroundImage", ""], ['OnePostMainDiv', 'backgroundImage', ''], "doDuty", ChangeByInput('OnePostMainDiv', 'backgroundImage', ''));
        break;
      case 'PostBodyBackIsTextureEr':
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsColor', 0)", ["PostBodyBackgroundIsColor", "0"], ['PostBodyBackgroundIsColor', 0], "doDuty", SwitchDisplay('PostBodyBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsImage', 0)", ["PostBodyBackgroundIsImage", "0"], ['PostBodyBackgroundIsImage', 0], "doDuty", SwitchDisplay('PostBodyBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsTexture', 1, 'inline')", ["PostBodyBackgroundIsTexture", "1", "inline"], ['PostBodyBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('PostBodyBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('PostBodyBackTextureEr'))", ["dg(PostBodyBackTextureEr)"], [confixWrapper("functionCall", "dg('PostBodyBackTextureEr')", ["PostBodyBackTextureEr"], ['PostBodyBackTextureEr'], "doDuty", dg('PostBodyBackTextureEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('PostBodyBackTextureEr')", ["PostBodyBackTextureEr"], ['PostBodyBackTextureEr'], "doDuty", dg('PostBodyBackTextureEr'))));
        break;
      case 'PostBodyBackIsImageEr':
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsColor', 0)", ["PostBodyBackgroundIsColor", "0"], ['PostBodyBackgroundIsColor', 0], "doDuty", SwitchDisplay('PostBodyBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsTexture', 0)", ["PostBodyBackgroundIsTexture", "0"], ['PostBodyBackgroundIsTexture', 0], "doDuty", SwitchDisplay('PostBodyBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostBodyBackgroundIsImage', 1, 'inline')", ["PostBodyBackgroundIsImage", "1", "inline"], ['PostBodyBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('PostBodyBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('PostBodyBackImageEr'))", ["dg(PostBodyBackImageEr)"], [confixWrapper("functionCall", "dg('PostBodyBackImageEr')", ["PostBodyBackImageEr"], ['PostBodyBackImageEr'], "doDuty", dg('PostBodyBackImageEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('PostBodyBackImageEr')", ["PostBodyBackImageEr"], ['PostBodyBackImageEr'], "doDuty", dg('PostBodyBackImageEr'))));
        break;
      case 'PostBodyBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'OnePostMainDiv')", ["This.value", "backgroundColor", "OnePostMainDiv"], [This.value, 'backgroundColor', 'OnePostMainDiv'], "doDuty", IPickColor(This.value, 'backgroundColor', 'OnePostMainDiv'));
        break;
      case 'PostBodyBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostBodyBackColorEr', 'backgroundColor', 'OnePostMainDiv')", ["eve", "PostBodyBackColorEr", "backgroundColor", "OnePostMainDiv"], [eve, 'PostBodyBackColorEr', 'backgroundColor', 'OnePostMainDiv'], "doDuty", ShowCP(eve, 'PostBodyBackColorEr', 'backgroundColor', 'OnePostMainDiv'));
        break;
      case 'PostBodyBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'backgroundImage', This)", ["OnePostMainDiv", "backgroundImage", "This"], ['OnePostMainDiv', 'backgroundImage', This], "doDuty", ChangeByInput('OnePostMainDiv', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'backgroundRepeat', 'repeat')", ["OnePostMainDiv", "backgroundRepeat", "repeat"], ['OnePostMainDiv', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('OnePostMainDiv', 'backgroundRepeat', 'repeat'));
        break;
      case 'PostBodyBackImageEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'backgroundImage', This)", ["OnePostMainDiv", "backgroundImage", "This"], ['OnePostMainDiv', 'backgroundImage', This], "doDuty", ChangeByInput('OnePostMainDiv', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'backgroundRepeat', 'no-repeat')", ["OnePostMainDiv", "backgroundRepeat", "no-repeat"], ['OnePostMainDiv', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('OnePostMainDiv', 'backgroundRepeat', 'no-repeat'));
        break;
      case 'OnePostTopBackIsColorEr':
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsTexture', 0)", ["OnePostTopBackgroundIsTexture", "0"], ['OnePostTopBackgroundIsTexture', 0], "doDuty", SwitchDisplay('OnePostTopBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsImage', 0)", ["OnePostTopBackgroundIsImage", "0"], ['OnePostTopBackgroundIsImage', 0], "doDuty", SwitchDisplay('OnePostTopBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsColor', 1)", ["OnePostTopBackgroundIsColor", "1"], ['OnePostTopBackgroundIsColor', 1], "doDuty", SwitchDisplay('OnePostTopBackgroundIsColor', 1));
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'backgroundImage', '')", ["OnePostTopPart", "backgroundImage", ""], ['OnePostTopPart', 'backgroundImage', ''], "doDuty", ChangeByInput('OnePostTopPart', 'backgroundImage', ''));
        break;
      case 'OnePostTopBackIsTextureEr':
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsColor', 0)", ["OnePostTopBackgroundIsColor", "0"], ['OnePostTopBackgroundIsColor', 0], "doDuty", SwitchDisplay('OnePostTopBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsImage', 0)", ["OnePostTopBackgroundIsImage", "0"], ['OnePostTopBackgroundIsImage', 0], "doDuty", SwitchDisplay('OnePostTopBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsTexture', 1, 'inline')", ["OnePostTopBackgroundIsTexture", "1", "inline"], ['OnePostTopBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('OnePostTopBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('OnePostTopBackTextureEr'))", ["dg(OnePostTopBackTextureEr)"], [confixWrapper("functionCall", "dg('OnePostTopBackTextureEr')", ["OnePostTopBackTextureEr"], ['OnePostTopBackTextureEr'], "doDuty", dg('OnePostTopBackTextureEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostTopBackTextureEr')", ["OnePostTopBackTextureEr"], ['OnePostTopBackTextureEr'], "doDuty", dg('OnePostTopBackTextureEr'))));
        break;
      case 'OnePostTopBackIsImageEr':
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsColor', 0)", ["OnePostTopBackgroundIsColor", "0"], ['OnePostTopBackgroundIsColor', 0], "doDuty", SwitchDisplay('OnePostTopBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsTexture', 0)", ["OnePostTopBackgroundIsTexture", "0"], ['OnePostTopBackgroundIsTexture', 0], "doDuty", SwitchDisplay('OnePostTopBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostTopBackgroundIsImage', 1, 'inline')", ["OnePostTopBackgroundIsImage", "1", "inline"], ['OnePostTopBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('OnePostTopBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('OnePostTopBackImageEr'))", ["dg(OnePostTopBackImageEr)"], [confixWrapper("functionCall", "dg('OnePostTopBackImageEr')", ["OnePostTopBackImageEr"], ['OnePostTopBackImageEr'], "doDuty", dg('OnePostTopBackImageEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostTopBackImageEr')", ["OnePostTopBackImageEr"], ['OnePostTopBackImageEr'], "doDuty", dg('OnePostTopBackImageEr'))));
        break;
      case 'OnePostTopBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'OnePostTopPart')", ["This.value", "backgroundColor", "OnePostTopPart"], [This.value, 'backgroundColor', 'OnePostTopPart'], "doDuty", IPickColor(This.value, 'backgroundColor', 'OnePostTopPart'));
        break;
      case 'OnePostTopBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'OnePostTopBackColorEr', 'backgroundColor', 'OnePostTopPart')", ["eve", "OnePostTopBackColorEr", "backgroundColor", "OnePostTopPart"], [eve, 'OnePostTopBackColorEr', 'backgroundColor', 'OnePostTopPart'], "doDuty", ShowCP(eve, 'OnePostTopBackColorEr', 'backgroundColor', 'OnePostTopPart'));
        break;
      case 'OnePostTopBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'backgroundImage', This)", ["OnePostTopPart", "backgroundImage", "This"], ['OnePostTopPart', 'backgroundImage', This], "doDuty", ChangeByInput('OnePostTopPart', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'backgroundRepeat', 'repeat')", ["OnePostTopPart", "backgroundRepeat", "repeat"], ['OnePostTopPart', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('OnePostTopPart', 'backgroundRepeat', 'repeat'));
        break;
      case 'OnePostTopBackImageEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'backgroundImage', This)", ["OnePostTopPart", "backgroundImage", "This"], ['OnePostTopPart', 'backgroundImage', This], "doDuty", ChangeByInput('OnePostTopPart', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'backgroundRepeat', 'no-repeat')", ["OnePostTopPart", "backgroundRepeat", "no-repeat"], ['OnePostTopPart', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('OnePostTopPart', 'backgroundRepeat', 'no-repeat'));
        break;
      case 'OnePostBotBackIsColorEr':
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsTexture', 0)", ["OnePostBotBackgroundIsTexture", "0"], ['OnePostBotBackgroundIsTexture', 0], "doDuty", SwitchDisplay('OnePostBotBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsImage', 0)", ["OnePostBotBackgroundIsImage", "0"], ['OnePostBotBackgroundIsImage', 0], "doDuty", SwitchDisplay('OnePostBotBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsColor', 1)", ["OnePostBotBackgroundIsColor", "1"], ['OnePostBotBackgroundIsColor', 1], "doDuty", SwitchDisplay('OnePostBotBackgroundIsColor', 1));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'backgroundImage', '')", ["OnePostBotPart", "backgroundImage", ""], ['OnePostBotPart', 'backgroundImage', ''], "doDuty", ChangeByInput('OnePostBotPart', 'backgroundImage', ''));
        break;
      case 'OnePostBotBackIsTextureEr':
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsColor', 0)", ["OnePostBotBackgroundIsColor", "0"], ['OnePostBotBackgroundIsColor', 0], "doDuty", SwitchDisplay('OnePostBotBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsImage', 0)", ["OnePostBotBackgroundIsImage", "0"], ['OnePostBotBackgroundIsImage', 0], "doDuty", SwitchDisplay('OnePostBotBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsTexture', 1, 'inline')", ["OnePostBotBackgroundIsTexture", "1", "inline"], ['OnePostBotBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('OnePostBotBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('OnePostBotBackTextureEr'))", ["dg(OnePostBotBackTextureEr)"], [confixWrapper("functionCall", "dg('OnePostBotBackTextureEr')", ["OnePostBotBackTextureEr"], ['OnePostBotBackTextureEr'], "doDuty", dg('OnePostBotBackTextureEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostBotBackTextureEr')", ["OnePostBotBackTextureEr"], ['OnePostBotBackTextureEr'], "doDuty", dg('OnePostBotBackTextureEr'))));
        break;
      case 'OnePostBotBackIsImageEr':
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsColor', 0)", ["OnePostBotBackgroundIsColor", "0"], ['OnePostBotBackgroundIsColor', 0], "doDuty", SwitchDisplay('OnePostBotBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsTexture', 0)", ["OnePostBotBackgroundIsTexture", "0"], ['OnePostBotBackgroundIsTexture', 0], "doDuty", SwitchDisplay('OnePostBotBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('OnePostBotBackgroundIsImage', 1, 'inline')", ["OnePostBotBackgroundIsImage", "1", "inline"], ['OnePostBotBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('OnePostBotBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('OnePostBotBackImageEr'))", ["dg(OnePostBotBackImageEr)"], [confixWrapper("functionCall", "dg('OnePostBotBackImageEr')", ["OnePostBotBackImageEr"], ['OnePostBotBackImageEr'], "doDuty", dg('OnePostBotBackImageEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostBotBackImageEr')", ["OnePostBotBackImageEr"], ['OnePostBotBackImageEr'], "doDuty", dg('OnePostBotBackImageEr'))));
        break;
      case 'OnePostBotBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'backgroundColor', 'OnePostBotPart')", ["This.value", "backgroundColor", "OnePostBotPart"], [This.value, 'backgroundColor', 'OnePostBotPart'], "doDuty", IPickColor(This.value, 'backgroundColor', 'OnePostBotPart'));
        break;
      case 'OnePostBotBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'OnePostBotBackColorEr', 'backgroundColor', 'OnePostBotPart')", ["eve", "OnePostBotBackColorEr", "backgroundColor", "OnePostBotPart"], [eve, 'OnePostBotBackColorEr', 'backgroundColor', 'OnePostBotPart'], "doDuty", ShowCP(eve, 'OnePostBotBackColorEr', 'backgroundColor', 'OnePostBotPart'));
        break;
      case 'OnePostBotBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'backgroundImage', This)", ["OnePostBotPart", "backgroundImage", "This"], ['OnePostBotPart', 'backgroundImage', This], "doDuty", ChangeByInput('OnePostBotPart', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'backgroundRepeat', 'repeat')", ["OnePostBotPart", "backgroundRepeat", "repeat"], ['OnePostBotPart', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('OnePostBotPart', 'backgroundRepeat', 'repeat'));
        break;
      case 'OnePostBotBackImageEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'backgroundImage', This)", ["OnePostBotPart", "backgroundImage", "This"], ['OnePostBotPart', 'backgroundImage', This], "doDuty", ChangeByInput('OnePostBotPart', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'backgroundRepeat', 'no-repeat')", ["OnePostBotPart", "backgroundRepeat", "no-repeat"], ['OnePostBotPart', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('OnePostBotPart', 'backgroundRepeat', 'no-repeat'));
        break;
      case 'PostBodyVP':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'paddingTop', t + 'px')", ["OnePostMidPart", "paddingTop", "t + px"], ['OnePostMidPart', 'paddingTop', t + 'px'], "doDuty", ChangeByInput('OnePostMidPart', 'paddingTop', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'paddingBottom', t + 'px')", ["OnePostMidPart", "paddingBottom", "t + px"], ['OnePostMidPart', 'paddingBottom', t + 'px'], "doDuty", ChangeByInput('OnePostMidPart', 'paddingBottom', t + 'px'));
        break;
      case 'PostBodyVPInc':
        confixWrapper("functionCall", "doIncDec('PostBodyVP', 2, 0, 50)", ["PostBodyVP", "2", "0", "50"], ['PostBodyVP', 2, 0, 50], "doDuty", doIncDec('PostBodyVP', 2, 0, 50));
        break;
      case 'PostBodyVPDec':
        confixWrapper("functionCall", "doIncDec('PostBodyVP', -2, 0, 50)", ["PostBodyVP", "-2", "0", "50"], ['PostBodyVP', -2, 0, 50], "doDuty", doIncDec('PostBodyVP', -2, 0, 50));
        break;
      case 'PostHeadFootVP':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('OnePostTitle', 'paddingTop', t + 'px')", ["OnePostTitle", "paddingTop", "t + px"], ['OnePostTitle', 'paddingTop', t + 'px'], "doDuty", ChangeByInput('OnePostTitle', 'paddingTop', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostDateTop', 'paddingTop', t + 'px')", ["OnePostDateTop", "paddingTop", "t + px"], ['OnePostDateTop', 'paddingTop', t + 'px'], "doDuty", ChangeByInput('OnePostDateTop', 'paddingTop', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'paddingBottom', t + 'px')", ["OnePostTopPart", "paddingBottom", "t + px"], ['OnePostTopPart', 'paddingBottom', t + 'px'], "doDuty", ChangeByInput('OnePostTopPart', 'paddingBottom', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'paddingTop', t + 'px')", ["OnePostBotPart", "paddingTop", "t + px"], ['OnePostBotPart', 'paddingTop', t + 'px'], "doDuty", ChangeByInput('OnePostBotPart', 'paddingTop', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'paddingBottom', t + 'px')", ["OnePostBotPart", "paddingBottom", "t + px"], ['OnePostBotPart', 'paddingBottom', t + 'px'], "doDuty", ChangeByInput('OnePostBotPart', 'paddingBottom', t + 'px'));
        break;
      case 'PostHeadFootVPInc':
        confixWrapper("functionCall", "doIncDec('PostHeadFootVP', 1, 0, 50)", ["PostHeadFootVP", "1", "0", "50"], ['PostHeadFootVP', 1, 0, 50], "doDuty", doIncDec('PostHeadFootVP', 1, 0, 50));
        break;
      case 'PostHeadFootVPDec':
        confixWrapper("functionCall", "doIncDec('PostHeadFootVP', -1, 0, 50)", ["PostHeadFootVP", "-1", "0", "50"], ['PostHeadFootVP', -1, 0, 50], "doDuty", doIncDec('PostHeadFootVP', -1, 0, 50));
        break;
      case 'PostBodyHP':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'paddingRight', t + 'px')", ["OnePostMidPart", "paddingRight", "t + px"], ['OnePostMidPart', 'paddingRight', t + 'px'], "doDuty", ChangeByInput('OnePostMidPart', 'paddingRight', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'paddingLeft', t + 'px')", ["OnePostMidPart", "paddingLeft", "t + px"], ['OnePostMidPart', 'paddingLeft', t + 'px'], "doDuty", ChangeByInput('OnePostMidPart', 'paddingLeft', t + 'px'));
        break;
      case 'PostBodyHPInc':
        confixWrapper("functionCall", "doIncDec('PostBodyHP', 2, 0, 50)", ["PostBodyHP", "2", "0", "50"], ['PostBodyHP', 2, 0, 50], "doDuty", doIncDec('PostBodyHP', 2, 0, 50));
        break;
      case 'PostBodyHPDec':
        confixWrapper("functionCall", "doIncDec('PostBodyHP', -2, 0, 50)", ["PostBodyHP", "-2", "0", "50"], ['PostBodyHP', -2, 0, 50], "doDuty", doIncDec('PostBodyHP', -2, 0, 50));
        break;
      case 'PostHeadFootHP':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'paddingRight', t + 'px')", ["OnePostTopPart", "paddingRight", "t + px"], ['OnePostTopPart', 'paddingRight', t + 'px'], "doDuty", ChangeByInput('OnePostTopPart', 'paddingRight', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostTopPart', 'paddingLeft', t + 'px')", ["OnePostTopPart", "paddingLeft", "t + px"], ['OnePostTopPart', 'paddingLeft', t + 'px'], "doDuty", ChangeByInput('OnePostTopPart', 'paddingLeft', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'paddingRight', t + 'px')", ["OnePostBotPart", "paddingRight", "t + px"], ['OnePostBotPart', 'paddingRight', t + 'px'], "doDuty", ChangeByInput('OnePostBotPart', 'paddingRight', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('OnePostBotPart', 'paddingLeft', t + 'px')", ["OnePostBotPart", "paddingLeft", "t + px"], ['OnePostBotPart', 'paddingLeft', t + 'px'], "doDuty", ChangeByInput('OnePostBotPart', 'paddingLeft', t + 'px'));
        break;
      case 'PostHeadFootHPInc':
        confixWrapper("functionCall", "doIncDec('PostHeadFootHP', 2, 0, 50)", ["PostHeadFootHP", "2", "0", "50"], ['PostHeadFootHP', 2, 0, 50], "doDuty", doIncDec('PostHeadFootHP', 2, 0, 50));
        break;
      case 'PostHeadFootHPDec':
        confixWrapper("functionCall", "doIncDec('PostHeadFootHP', -2, 0, 50)", ["PostHeadFootHP", "-2", "0", "50"], ['PostHeadFootHP', -2, 0, 50], "doDuty", doIncDec('PostHeadFootHP', -2, 0, 50));
        break;
      case 'CellDirDirectionIsLTREr':
        confixWrapper("functionCall", "dg('OnePostBodyAlignIsNormErImg')", ["OnePostBodyAlignIsNormErImg"], ['OnePostBodyAlignIsNormErImg'], "doDuty", dg('OnePostBodyAlignIsNormErImg')).src = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('OnePostBodyAlignIsNormErImg')\", [\"OnePostBodyAlignIsNormErImg\"], ['OnePostBodyAlignIsNormErImg'], \"doDuty\", dg('OnePostBodyAlignIsNormErImg')).src = 'barimg/i_align_left.gif'", [""], [], "doDuty", 'barimg/i_align_left.gif');
        confixWrapper("functionCall", "PushImgBut('CellDirDirRTLErImg', false)", ["CellDirDirRTLErImg", "false"], ['CellDirDirRTLErImg', false], "doDuty", PushImgBut('CellDirDirRTLErImg', false));
        confixWrapper("functionCall", "PushImgBut('CellDirDirLTRErImg', true)", ["CellDirDirLTRErImg", "true"], ['CellDirDirLTRErImg', true], "doDuty", PushImgBut('CellDirDirLTRErImg', true));
        confixWrapper("functionCall", "SwitchFloat('OnePostTitle', 0, 'left', 'LTR')", ["OnePostTitle", "0", "left", "LTR"], ['OnePostTitle', 0, 'left', 'LTR'], "doDuty", SwitchFloat('OnePostTitle', 0, 'left', 'LTR'));
        confixWrapper("functionCall", "SwitchFloat('OnePostDateTop', 0, 'right')", ["OnePostDateTop", "0", "right"], ['OnePostDateTop', 0, 'right'], "doDuty", SwitchFloat('OnePostDateTop', 0, 'right'));
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'direction', 'ltr')", ["OnePostMainDiv", "direction", "ltr"], ['OnePostMainDiv', 'direction', 'ltr'], "doDuty", ChangeByInput('OnePostMainDiv', 'direction', 'ltr'));
        confixWrapper("functionCall", "ChangeByInput('OnePostBodyAlignTripleContainer', 'direction', 'ltr')", ["OnePostBodyAlignTripleContainer", "direction", "ltr"], ['OnePostBodyAlignTripleContainer', 'direction', 'ltr'], "doDuty", ChangeByInput('OnePostBodyAlignTripleContainer', 'direction', 'ltr'));
        confixWrapper("functionCall", "doDuty(dg('OnePostBodyAlignIsNorm'))", ["dg(OnePostBodyAlignIsNorm)"], [confixWrapper("functionCall", "dg('OnePostBodyAlignIsNorm')", ["OnePostBodyAlignIsNorm"], ['OnePostBodyAlignIsNorm'], "doDuty", dg('OnePostBodyAlignIsNorm'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostBodyAlignIsNorm')", ["OnePostBodyAlignIsNorm"], ['OnePostBodyAlignIsNorm'], "doDuty", dg('OnePostBodyAlignIsNorm'))));
        confixWrapper("functionCall", "SwitchFloat('OnePostPermLinkPart', 1, 'left')", ["OnePostPermLinkPart", "1", "left"], ['OnePostPermLinkPart', 1, 'left'], "doDuty", SwitchFloat('OnePostPermLinkPart', 1, 'left'));
        confixWrapper("functionCall", "SwitchFloat('OnePostCommentsPart', 1, 'right')", ["OnePostCommentsPart", "1", "right"], ['OnePostCommentsPart', 1, 'right'], "doDuty", SwitchFloat('OnePostCommentsPart', 1, 'right'));
        confixWrapper("functionCall", "SwitchFloat('OnePostTitleSettingEr', 1)", ["OnePostTitleSettingEr", "1"], ['OnePostTitleSettingEr', 1], "doDuty", SwitchFloat('OnePostTitleSettingEr', 1));
        confixWrapper("functionCall", "SwitchFloat('OnePostDateTopSettingEr', 1)", ["OnePostDateTopSettingEr", "1"], ['OnePostDateTopSettingEr', 1], "doDuty", SwitchFloat('OnePostDateTopSettingEr', 1));
        confixWrapper("functionCall", "SwitchFloat('OnePostPostBodySettingEr', 1)", ["OnePostPostBodySettingEr", "1"], ['OnePostPostBodySettingEr', 1], "doDuty", SwitchFloat('OnePostPostBodySettingEr', 1));
        confixWrapper("functionCall", "SwitchFloat('OnePostCommentingSettingEr', 1)", ["OnePostCommentingSettingEr", "1"], ['OnePostCommentingSettingEr', 1], "doDuty", SwitchFloat('OnePostCommentingSettingEr', 1));
        confixWrapper("functionCall", "SwitchFloat('OnePostPermLinkSettingEr', 1)", ["OnePostPermLinkSettingEr", "1"], ['OnePostPermLinkSettingEr', 1], "doDuty", SwitchFloat('OnePostPermLinkSettingEr', 1));
        confixWrapper("functionCall", "SwitchFloat('OnePostPostSepSettingEr', 1)", ["OnePostPostSepSettingEr", "1"], ['OnePostPostSepSettingEr', 1], "doDuty", SwitchFloat('OnePostPostSepSettingEr', 1));
        break;
      case 'CellDirDirectionIsRTLEr':
        confixWrapper("functionCall", "dg('OnePostBodyAlignIsNormErImg')", ["OnePostBodyAlignIsNormErImg"], ['OnePostBodyAlignIsNormErImg'], "doDuty", dg('OnePostBodyAlignIsNormErImg')).src = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('OnePostBodyAlignIsNormErImg')\", [\"OnePostBodyAlignIsNormErImg\"], ['OnePostBodyAlignIsNormErImg'], \"doDuty\", dg('OnePostBodyAlignIsNormErImg')).src = 'barimg/i_align_right.gif'", [""], [], "doDuty", 'barimg/i_align_right.gif');
        confixWrapper("functionCall", "PushImgBut('CellDirDirLTRErImg', false)", ["CellDirDirLTRErImg", "false"], ['CellDirDirLTRErImg', false], "doDuty", PushImgBut('CellDirDirLTRErImg', false));
        confixWrapper("functionCall", "PushImgBut('CellDirDirRTLErImg', true)", ["CellDirDirRTLErImg", "true"], ['CellDirDirRTLErImg', true], "doDuty", PushImgBut('CellDirDirRTLErImg', true));
        confixWrapper("functionCall", "SwitchFloat('OnePostTitle', 1, 'right', 'RTL')", ["OnePostTitle", "1", "right", "RTL"], ['OnePostTitle', 1, 'right', 'RTL'], "doDuty", SwitchFloat('OnePostTitle', 1, 'right', 'RTL'));
        confixWrapper("functionCall", "SwitchFloat('OnePostDateTop', 1, 'left')", ["OnePostDateTop", "1", "left"], ['OnePostDateTop', 1, 'left'], "doDuty", SwitchFloat('OnePostDateTop', 1, 'left'));
        confixWrapper("functionCall", "ChangeByInput('OnePostMainDiv', 'direction', 'rtl')", ["OnePostMainDiv", "direction", "rtl"], ['OnePostMainDiv', 'direction', 'rtl'], "doDuty", ChangeByInput('OnePostMainDiv', 'direction', 'rtl'));
        confixWrapper("functionCall", "ChangeByInput('OnePostBodyAlignTripleContainer', 'direction', 'rtl')", ["OnePostBodyAlignTripleContainer", "direction", "rtl"], ['OnePostBodyAlignTripleContainer', 'direction', 'rtl'], "doDuty", ChangeByInput('OnePostBodyAlignTripleContainer', 'direction', 'rtl'));
        confixWrapper("functionCall", "doDuty(dg('OnePostBodyAlignIsNorm'))", ["dg(OnePostBodyAlignIsNorm)"], [confixWrapper("functionCall", "dg('OnePostBodyAlignIsNorm')", ["OnePostBodyAlignIsNorm"], ['OnePostBodyAlignIsNorm'], "doDuty", dg('OnePostBodyAlignIsNorm'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostBodyAlignIsNorm')", ["OnePostBodyAlignIsNorm"], ['OnePostBodyAlignIsNorm'], "doDuty", dg('OnePostBodyAlignIsNorm'))));
        confixWrapper("functionCall", "SwitchFloat('OnePostPermLinkPart', 0, 'right')", ["OnePostPermLinkPart", "0", "right"], ['OnePostPermLinkPart', 0, 'right'], "doDuty", SwitchFloat('OnePostPermLinkPart', 0, 'right'));
        confixWrapper("functionCall", "SwitchFloat('OnePostCommentsPart', 0, 'left')", ["OnePostCommentsPart", "0", "left"], ['OnePostCommentsPart', 0, 'left'], "doDuty", SwitchFloat('OnePostCommentsPart', 0, 'left'));
        confixWrapper("functionCall", "SwitchFloat('OnePostTitleSettingEr', 0)", ["OnePostTitleSettingEr", "0"], ['OnePostTitleSettingEr', 0], "doDuty", SwitchFloat('OnePostTitleSettingEr', 0));
        confixWrapper("functionCall", "SwitchFloat('OnePostDateTopSettingEr', 0)", ["OnePostDateTopSettingEr", "0"], ['OnePostDateTopSettingEr', 0], "doDuty", SwitchFloat('OnePostDateTopSettingEr', 0));
        confixWrapper("functionCall", "SwitchFloat('OnePostPostBodySettingEr', 0)", ["OnePostPostBodySettingEr", "0"], ['OnePostPostBodySettingEr', 0], "doDuty", SwitchFloat('OnePostPostBodySettingEr', 0));
        confixWrapper("functionCall", "SwitchFloat('OnePostCommentingSettingEr', 0)", ["OnePostCommentingSettingEr", "0"], ['OnePostCommentingSettingEr', 0], "doDuty", SwitchFloat('OnePostCommentingSettingEr', 0));
        confixWrapper("functionCall", "SwitchFloat('OnePostPermLinkSettingEr', 0)", ["OnePostPermLinkSettingEr", "0"], ['OnePostPermLinkSettingEr', 0], "doDuty", SwitchFloat('OnePostPermLinkSettingEr', 0));
        confixWrapper("functionCall", "SwitchFloat('OnePostPostSepSettingEr', 0)", ["OnePostPostSepSettingEr", "0"], ['OnePostPostSepSettingEr', 0], "doDuty", SwitchFloat('OnePostPostSepSettingEr', 0));
        break;
      case 'DateFormatIsGregorian':
        confixWrapper("functionCall", "writeCurrentTime(0)", ["0"], [0], "doDuty", writeCurrentTime(0));
        confixWrapper("functionCall", "doDuty(dg('PermLinkExp'))", ["dg(PermLinkExp)"], [confixWrapper("functionCall", "dg('PermLinkExp')", ["PermLinkExp"], ['PermLinkExp'], "doDuty", dg('PermLinkExp'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('PermLinkExp')", ["PermLinkExp"], ['PermLinkExp'], "doDuty", dg('PermLinkExp'))));
        break;
      case 'DateFormatIsHijri':
        confixWrapper("functionCall", "writeCurrentTime(1)", ["1"], [1], "doDuty", writeCurrentTime(1));
        confixWrapper("functionCall", "doDuty(dg('PermLinkExp'))", ["dg(PermLinkExp)"], [confixWrapper("functionCall", "dg('PermLinkExp')", ["PermLinkExp"], ['PermLinkExp'], "doDuty", dg('PermLinkExp'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('PermLinkExp')", ["PermLinkExp"], ['PermLinkExp'], "doDuty", dg('PermLinkExp'))));
        break;
      case 'PostDateColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'OnePostDateTop')", ["This.value", "color", "OnePostDateTop"], [This.value, 'color', 'OnePostDateTop'], "doDuty", IPickColor(This.value, 'color', 'OnePostDateTop'));
        break;
      case 'PostDateColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostDateColorEr', 'color', 'OnePostDateTop')", ["eve", "PostDateColorEr", "color", "OnePostDateTop"], [eve, 'PostDateColorEr', 'color', 'OnePostDateTop'], "doDuty", ShowCP(eve, 'PostDateColorEr', 'color', 'OnePostDateTop'));
        break;
      case 'PostDateStandingIsSingle':
        confixWrapper("functionCall", "ChangeByInput('OnePostDateTop', 'width', '100%')", ["OnePostDateTop", "width", "100%"], ['OnePostDateTop', 'width', '100%'], "doDuty", ChangeByInput('OnePostDateTop', 'width', '100%'));
        confixWrapper("functionCall", "ChangeByInput('OnePostTitle', 'width', '100%')", ["OnePostTitle", "width", "100%"], ['OnePostTitle', 'width', '100%'], "doDuty", ChangeByInput('OnePostTitle', 'width', '100%'));
        break;
      case 'PostDateStandingIsAdjacent':
        confixWrapper("functionCall", "ChangeByInput('OnePostDateTop', 'width', '50%')", ["OnePostDateTop", "width", "50%"], ['OnePostDateTop', 'width', '50%'], "doDuty", ChangeByInput('OnePostDateTop', 'width', '50%'));
        confixWrapper("functionCall", "ChangeByInput('OnePostTitle', 'width', '50%')", ["OnePostTitle", "width", "50%"], ['OnePostTitle', 'width', '50%'], "doDuty", ChangeByInput('OnePostTitle', 'width', '50%'));
        break;
      case 'PostTitleColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'OnePostTitle')", ["This.value", "color", "OnePostTitle"], [This.value, 'color', 'OnePostTitle'], "doDuty", IPickColor(This.value, 'color', 'OnePostTitle'));
        break;
      case 'PostTitleColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostTitleColorEr', 'color', 'OnePostTitle')", ["eve", "PostTitleColorEr", "color", "OnePostTitle"], [eve, 'PostTitleColorEr', 'color', 'OnePostTitle'], "doDuty", ShowCP(eve, 'PostTitleColorEr', 'color', 'OnePostTitle'));
        break;
      case 'OnePostTitleDirectionIsLTREr':
        confixWrapper("functionCall", "PushImgBut('OnePostTitleDirRTLErImg', false)", ["OnePostTitleDirRTLErImg", "false"], ['OnePostTitleDirRTLErImg', false], "doDuty", PushImgBut('OnePostTitleDirRTLErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostTitleDirLTRErImg', true)", ["OnePostTitleDirLTRErImg", "true"], ['OnePostTitleDirLTRErImg', true], "doDuty", PushImgBut('OnePostTitleDirLTRErImg', true));
        confixWrapper("functionCall", "ChangeByInput('OnePostTitle', 'direction', 'ltr')", ["OnePostTitle", "direction", "ltr"], ['OnePostTitle', 'direction', 'ltr'], "doDuty", ChangeByInput('OnePostTitle', 'direction', 'ltr'));
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"getGCW()\", [], [], \"doDuty\", getGCW())", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "getGCW()", [], [], "doDuty", getGCW()))) 
        {
          confixWrapper("functionCall", "dg('OnePostTitleAlignErLeft')", ["OnePostTitleAlignErLeft"], ['OnePostTitleAlignErLeft'], "doDuty", dg('OnePostTitleAlignErLeft')).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('OnePostTitleAlignErLeft')\", [\"OnePostTitleAlignErLeft\"], ['OnePostTitleAlignErLeft'], \"doDuty\", dg('OnePostTitleAlignErLeft')).checked = true", [""], [], "doDuty", true);
          confixWrapper("functionCall", "doDuty(dg('OnePostTitleAlignErLeft'))", ["dg(OnePostTitleAlignErLeft)"], [confixWrapper("functionCall", "dg('OnePostTitleAlignErLeft')", ["OnePostTitleAlignErLeft"], ['OnePostTitleAlignErLeft'], "doDuty", dg('OnePostTitleAlignErLeft'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostTitleAlignErLeft')", ["OnePostTitleAlignErLeft"], ['OnePostTitleAlignErLeft'], "doDuty", dg('OnePostTitleAlignErLeft'))));
        }
        break;
      case 'OnePostTitleDirectionIsRTLEr':
        confixWrapper("functionCall", "PushImgBut('OnePostTitleDirLTRErImg', false)", ["OnePostTitleDirLTRErImg", "false"], ['OnePostTitleDirLTRErImg', false], "doDuty", PushImgBut('OnePostTitleDirLTRErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostTitleDirRTLErImg', true)", ["OnePostTitleDirRTLErImg", "true"], ['OnePostTitleDirRTLErImg', true], "doDuty", PushImgBut('OnePostTitleDirRTLErImg', true));
        confixWrapper("functionCall", "ChangeByInput('OnePostTitle', 'direction', 'rtl')", ["OnePostTitle", "direction", "rtl"], ['OnePostTitle', 'direction', 'rtl'], "doDuty", ChangeByInput('OnePostTitle', 'direction', 'rtl'));
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"getGCW()\", [], [], \"doDuty\", getGCW())", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", confixWrapper("functionCall", "getGCW()", [], [], "doDuty", getGCW()))) 
        {
          confixWrapper("functionCall", "dg('OnePostTitleAlignErRight')", ["OnePostTitleAlignErRight"], ['OnePostTitleAlignErRight'], "doDuty", dg('OnePostTitleAlignErRight')).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('OnePostTitleAlignErRight')\", [\"OnePostTitleAlignErRight\"], ['OnePostTitleAlignErRight'], \"doDuty\", dg('OnePostTitleAlignErRight')).checked = true", [""], [], "doDuty", true);
          confixWrapper("functionCall", "doDuty(dg('OnePostTitleAlignErRight'))", ["dg(OnePostTitleAlignErRight)"], [confixWrapper("functionCall", "dg('OnePostTitleAlignErRight')", ["OnePostTitleAlignErRight"], ['OnePostTitleAlignErRight'], "doDuty", dg('OnePostTitleAlignErRight'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostTitleAlignErRight')", ["OnePostTitleAlignErRight"], ['OnePostTitleAlignErRight'], "doDuty", dg('OnePostTitleAlignErRight'))));
        }
        break;
      case 'PostBodyColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'OnePostMidPart')", ["This.value", "color", "OnePostMidPart"], [This.value, 'color', 'OnePostMidPart'], "doDuty", IPickColor(This.value, 'color', 'OnePostMidPart'));
        break;
      case 'PostBodyColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostBodyColorEr', 'color', 'OnePostMidPart')", ["eve", "PostBodyColorEr", "color", "OnePostMidPart"], [eve, 'PostBodyColorEr', 'color', 'OnePostMidPart'], "doDuty", ShowCP(eve, 'PostBodyColorEr', 'color', 'OnePostMidPart'));
        break;
      case 'OnePostBodyAlignIsNorm':
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsCenterErImg', false)", ["OnePostBodyAlignIsCenterErImg", "false"], ['OnePostBodyAlignIsCenterErImg', false], "doDuty", PushImgBut('OnePostBodyAlignIsCenterErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsJustifyErImg', false)", ["OnePostBodyAlignIsJustifyErImg", "false"], ['OnePostBodyAlignIsJustifyErImg', false], "doDuty", PushImgBut('OnePostBodyAlignIsJustifyErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsNormErImg', true)", ["OnePostBodyAlignIsNormErImg", "true"], ['OnePostBodyAlignIsNormErImg', true], "doDuty", PushImgBut('OnePostBodyAlignIsNormErImg', true));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'textAlign', dg('CellDirDirectionIsRTLEr').checked ? 'right' : 'left')", ["OnePostMidPart", "textAlign", "dg(CellDirDirectionIsRTLEr).checked ? right : left"], ['OnePostMidPart', 'textAlign', confixWrapper("functionCall", "dg('CellDirDirectionIsRTLEr')", ["CellDirDirectionIsRTLEr"], ['CellDirDirectionIsRTLEr'], "doDuty", dg('CellDirDirectionIsRTLEr')).checked ? 'right' : 'left'], "doDuty", ChangeByInput('OnePostMidPart', 'textAlign', confixWrapper("functionCall", "dg('CellDirDirectionIsRTLEr')", ["CellDirDirectionIsRTLEr"], ['CellDirDirectionIsRTLEr'], "doDuty", dg('CellDirDirectionIsRTLEr')).checked ? 'right' : 'left'));
        break;
      case 'OnePostBodyAlignIsCenter':
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsNormErImg', false)", ["OnePostBodyAlignIsNormErImg", "false"], ['OnePostBodyAlignIsNormErImg', false], "doDuty", PushImgBut('OnePostBodyAlignIsNormErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsJustifyErImg', false)", ["OnePostBodyAlignIsJustifyErImg", "false"], ['OnePostBodyAlignIsJustifyErImg', false], "doDuty", PushImgBut('OnePostBodyAlignIsJustifyErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsCenterErImg', true)", ["OnePostBodyAlignIsCenterErImg", "true"], ['OnePostBodyAlignIsCenterErImg', true], "doDuty", PushImgBut('OnePostBodyAlignIsCenterErImg', true));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'textAlign', 'center')", ["OnePostMidPart", "textAlign", "center"], ['OnePostMidPart', 'textAlign', 'center'], "doDuty", ChangeByInput('OnePostMidPart', 'textAlign', 'center'));
        break;
      case 'OnePostBodyAlignIsJustify':
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsNormErImg', false)", ["OnePostBodyAlignIsNormErImg", "false"], ['OnePostBodyAlignIsNormErImg', false], "doDuty", PushImgBut('OnePostBodyAlignIsNormErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsCenterErImg', false)", ["OnePostBodyAlignIsCenterErImg", "false"], ['OnePostBodyAlignIsCenterErImg', false], "doDuty", PushImgBut('OnePostBodyAlignIsCenterErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostBodyAlignIsJustifyErImg', true)", ["OnePostBodyAlignIsJustifyErImg", "true"], ['OnePostBodyAlignIsJustifyErImg', true], "doDuty", PushImgBut('OnePostBodyAlignIsJustifyErImg', true));
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'textAlign', 'justify')", ["OnePostMidPart", "textAlign", "justify"], ['OnePostMidPart', 'textAlign', 'justify'], "doDuty", ChangeByInput('OnePostMidPart', 'textAlign', 'justify'));
        break;
      case 'OnePostMidPartLineHeightEr':
        confixWrapper("functionCall", "ChangeByInput('OnePostMidPart', 'lineHeight', This)", ["OnePostMidPart", "lineHeight", "This"], ['OnePostMidPart', 'lineHeight', This], "doDuty", ChangeByInput('OnePostMidPart', 'lineHeight', This));
        break;
      case 'PostCommentsColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'OnePostComments')", ["This.value", "color", "OnePostComments"], [This.value, 'color', 'OnePostComments'], "doDuty", IPickColor(This.value, 'color', 'OnePostComments'));
        break;
      case 'PostCommentsColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostCommentsColorEr', 'color', 'OnePostComments')", ["eve", "PostCommentsColorEr", "color", "OnePostComments"], [eve, 'PostCommentsColorEr', 'color', 'OnePostComments'], "doDuty", ShowCP(eve, 'PostCommentsColorEr', 'color', 'OnePostComments'));
        break;
      case 'PostCommentsHoverColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'OnePostCommentsPart')", ["This.value", "color", "OnePostCommentsPart"], [This.value, 'color', 'OnePostCommentsPart'], "doDuty", IPickColor(This.value, 'color', 'OnePostCommentsPart'));
        break;
      case 'PostCommentsHoverColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostCommentsHoverColorEr', 'color', 'OnePostCommentsPart')", ["eve", "PostCommentsHoverColorEr", "color", "OnePostCommentsPart"], [eve, 'PostCommentsHoverColorEr', 'color', 'OnePostCommentsPart'], "doDuty", ShowCP(eve, 'PostCommentsHoverColorEr', 'color', 'OnePostCommentsPart'));
        break;
      case 'PostPermLinkColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'OnePostPermLink')", ["This.value", "color", "OnePostPermLink"], [This.value, 'color', 'OnePostPermLink'], "doDuty", IPickColor(This.value, 'color', 'OnePostPermLink'));
        break;
      case 'PostPermLinkColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostPermLinkColorEr', 'color', 'OnePostPermLink')", ["eve", "PostPermLinkColorEr", "color", "OnePostPermLink"], [eve, 'PostPermLinkColorEr', 'color', 'OnePostPermLink'], "doDuty", ShowCP(eve, 'PostPermLinkColorEr', 'color', 'OnePostPermLink'));
        break;
      case 'PermLinkExp':
        var tempStr = confixWrapper("initvar", "var tempStr = This.value", [""], [], "doDuty", This.value), cur;
        var now = confixWrapper("initvar", "var now = new Date()", [""], [], "doDuty", new Date());
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Zamaan'))\", [\"translateIt(!Zamaan)\"], [confixWrapper(\"functionCall\", \"translateIt('!Zamaan')\", [\"!Zamaan\"], ['!Zamaan'], \"doDuty\", translateIt('!Zamaan'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Zamaan')\", [\"!Zamaan\"], ['!Zamaan'], \"doDuty\", translateIt('!Zamaan'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Zamaan'))", ["translateIt(!Zamaan)"], [confixWrapper("functionCall", "translateIt('!Zamaan')", ["!Zamaan"], ['!Zamaan'], "doDuty", translateIt('!Zamaan'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Zamaan')", ["!Zamaan"], ['!Zamaan'], "doDuty", translateIt('!Zamaan')))));
        if (confixWrapper("condition", "cur == -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$TIME')\", [\"$TIME\"], ['$TIME'], \"doDuty\", tempStr.indexOf('$TIME'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$TIME')", ["$TIME"], ['$TIME'], "doDuty", tempStr.indexOf('$TIME')));
        if (confixWrapper("condition", "cur != -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur != -1)) 
        tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + '' + now.getHours() + ':' + now.getMinutes() + '' + tempStr.substring(cur + 5, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + '' + now.getHours() + ':' + now.getMinutes() + '' + tempStr.substring(cur + 5, tempStr.length));
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Nevis'))\", [\"translateIt(!Nevis)\"], [confixWrapper(\"functionCall\", \"translateIt('!Nevis')\", [\"!Nevis\"], ['!Nevis'], \"doDuty\", translateIt('!Nevis'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Nevis')\", [\"!Nevis\"], ['!Nevis'], \"doDuty\", translateIt('!Nevis'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Nevis'))", ["translateIt(!Nevis)"], [confixWrapper("functionCall", "translateIt('!Nevis')", ["!Nevis"], ['!Nevis'], "doDuty", translateIt('!Nevis'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Nevis')", ["!Nevis"], ['!Nevis'], "doDuty", translateIt('!Nevis')))));
        if (confixWrapper("condition", "cur == -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Neviis'))\", [\"translateIt(!Neviis)\"], [confixWrapper(\"functionCall\", \"translateIt('!Neviis')\", [\"!Neviis\"], ['!Neviis'], \"doDuty\", translateIt('!Neviis'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Neviis')\", [\"!Neviis\"], ['!Neviis'], \"doDuty\", translateIt('!Neviis'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Neviis'))", ["translateIt(!Neviis)"], [confixWrapper("functionCall", "translateIt('!Neviis')", ["!Neviis"], ['!Neviis'], "doDuty", translateIt('!Neviis'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Neviis')", ["!Neviis"], ['!Neviis'], "doDuty", translateIt('!Neviis')))));
        if (confixWrapper("condition", "cur == -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$AUTH')\", [\"$AUTH\"], ['$AUTH'], \"doDuty\", tempStr.indexOf('$AUTH'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$AUTH')", ["$AUTH"], ['$AUTH'], "doDuty", tempStr.indexOf('$AUTH')));
        if (confixWrapper("condition", "cur != -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur != -1)) 
        tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + (global_lang == 'fa' ? confixWrapper(\"functionCall\", \"translateIt('Aideen')\", [\"Aideen\"], ['Aideen'], \"doDuty\", translateIt('Aideen')) : 'Aideen') + tempStr.substring(cur + 5, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + (global_lang == 'fa' ? confixWrapper("functionCall", "translateIt('Aideen')", ["Aideen"], ['Aideen'], "doDuty", translateIt('Aideen')) : 'Aideen') + tempStr.substring(cur + 5, tempStr.length));
        var theDate = confixWrapper("initvar", "var theDate = confixWrapper(\"functionCall\", \"dg('OnePostDateTop')\", [\"OnePostDateTop\"], ['OnePostDateTop'], \"doDuty\", dg('OnePostDateTop')).innerHTML", [""], [], "doDuty", confixWrapper("functionCall", "dg('OnePostDateTop')", ["OnePostDateTop"], ['OnePostDateTop'], "doDuty", dg('OnePostDateTop')).innerHTML);
        var extspc = confixWrapper("initvar", "var extspc = 0", [""], [], "doDuty", 0);
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Tarikh'))\", [\"translateIt(!Tarikh)\"], [confixWrapper(\"functionCall\", \"translateIt('!Tarikh')\", [\"!Tarikh\"], ['!Tarikh'], \"doDuty\", translateIt('!Tarikh'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Tarikh')\", [\"!Tarikh\"], ['!Tarikh'], \"doDuty\", translateIt('!Tarikh'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Tarikh'))", ["translateIt(!Tarikh)"], [confixWrapper("functionCall", "translateIt('!Tarikh')", ["!Tarikh"], ['!Tarikh'], "doDuty", translateIt('!Tarikh'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Tarikh')", ["!Tarikh"], ['!Tarikh'], "doDuty", translateIt('!Tarikh')))));
        if (confixWrapper("condition", "cur == -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Tariikh'))\", [\"translateIt(!Tariikh)\"], [confixWrapper(\"functionCall\", \"translateIt('!Tariikh')\", [\"!Tariikh\"], ['!Tariikh'], \"doDuty\", translateIt('!Tariikh'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Tariikh')\", [\"!Tariikh\"], ['!Tariikh'], \"doDuty\", translateIt('!Tariikh'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Tariikh'))", ["translateIt(!Tariikh)"], [confixWrapper("functionCall", "translateIt('!Tariikh')", ["!Tariikh"], ['!Tariikh'], "doDuty", translateIt('!Tariikh'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Tariikh')", ["!Tariikh"], ['!Tariikh'], "doDuty", translateIt('!Tariikh')))));
        if (confixWrapper("condition", "cur == -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur == -1)) 
        {
          cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$DATE')\", [\"$DATE\"], ['$DATE'], \"doDuty\", tempStr.indexOf('$DATE'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$DATE')", ["$DATE"], ['$DATE'], "doDuty", tempStr.indexOf('$DATE')));
          extspc = confixWrapper("infix", "extspc = -1", [""], [], "doDuty", -1);
        }
        if (confixWrapper("condition", "cur != -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur != -1)) 
        tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + (theDate) + tempStr.substring(cur + 6 + extspc, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + (theDate) + tempStr.substring(cur + 6 + extspc, tempStr.length));
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Mabhas'))\", [\"translateIt(!Mabhas)\"], [confixWrapper(\"functionCall\", \"translateIt('!Mabhas')\", [\"!Mabhas\"], ['!Mabhas'], \"doDuty\", translateIt('!Mabhas'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Mabhas')\", [\"!Mabhas\"], ['!Mabhas'], \"doDuty\", translateIt('!Mabhas'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Mabhas'))", ["translateIt(!Mabhas)"], [confixWrapper("functionCall", "translateIt('!Mabhas')", ["!Mabhas"], ['!Mabhas'], "doDuty", translateIt('!Mabhas'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Mabhas')", ["!Mabhas"], ['!Mabhas'], "doDuty", translateIt('!Mabhas')))));
        if (confixWrapper("condition", "cur == -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$CATG')\", [\"$CATG\"], ['$CATG'], \"doDuty\", tempStr.indexOf('$CATG'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$CATG')", ["$CATG"], ['$CATG'], "doDuty", tempStr.indexOf('$CATG')));
        if (confixWrapper("condition", "cur != -1", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", cur != -1)) 
        {
          if (confixWrapper("condition", "global_prov == 'blogfa' || global_prov == 'persianblog'", ["s", "eve", "This", "msgStr", "dt", "isBlogger", "isPersianBlog", "sides", "t", "archive_txt", "archive_ttl", "noArch", "bs", "i", "ls", "j", "showEn", "hideEn", "showFa", "hideFa", "dis", "rate", "d", "dm", "sa", "tempStr", "cur", "now", "theDate", "extspc", "that"], [s, eve, This, msgStr, dt, isBlogger, isPersianBlog, sides, t, archive_txt, archive_ttl, noArch, bs, i, ls, j, showEn, hideEn, showFa, hideFa, dis, rate, d, dm, sa, tempStr, cur, now, theDate, extspc, that], "doDuty", global_prov == 'blogfa' || global_prov == 'persianblog')) 
          confixWrapper("functionCall", "kd_alert('does not support \"Post Categories\".')", ["does not support Post Categories."], ['does not support "Post Categories".'], "doDuty", kd_alert('does not support "Post Categories".'));
          tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + translateIt('omoomi') + tempStr.substring(cur + 5, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + translateIt('omoomi') + tempStr.substring(cur + 5, tempStr.length));
        }
        confixWrapper("functionCall", "ChangeByInput('OnePostPermLink', 'innerHTML', tempStr)", ["OnePostPermLink", "innerHTML", "tempStr"], ['OnePostPermLink', 'innerHTML', tempStr], "doDuty", ChangeByInput('OnePostPermLink', 'innerHTML', tempStr));
        break;
      case 'PostSepHeight':
        var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"doDuty\", parseFloat(This.value))", [""], [], "doDuty", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "doDuty", parseFloat(This.value)));
        confixWrapper("functionCall", "ChangeByInput('PostSepDiv', 'height', t + 'px')", ["PostSepDiv", "height", "t + px"], ['PostSepDiv', 'height', t + 'px'], "doDuty", ChangeByInput('PostSepDiv', 'height', t + 'px'));
        confixWrapper("functionCall", "ChangeByInput('PostSepDivInner', 'height', (t / 2) + 'px')", ["PostSepDivInner", "height", "(t / 2) + px"], ['PostSepDivInner', 'height', (t / 2) + 'px'], "doDuty", ChangeByInput('PostSepDivInner', 'height', (t / 2) + 'px'));
        confixWrapper("functionCall", "ChangeByInput('PostSepDivInner', 'marginBottom', (t / 2) + 'px')", ["PostSepDivInner", "marginBottom", "(t / 2) + px"], ['PostSepDivInner', 'marginBottom', (t / 2) + 'px'], "doDuty", ChangeByInput('PostSepDivInner', 'marginBottom', (t / 2) + 'px'));
        break;
      case 'PostSepHeightInc':
        confixWrapper("functionCall", "doIncDec('PostSepHeight', 2, 0, 50)", ["PostSepHeight", "2", "0", "50"], ['PostSepHeight', 2, 0, 50], "doDuty", doIncDec('PostSepHeight', 2, 0, 50));
        break;
      case 'PostSepHeightDec':
        confixWrapper("functionCall", "doIncDec('PostSepHeight', -2, 0, 50)", ["PostSepHeight", "-2", "0", "50"], ['PostSepHeight', -2, 0, 50], "doDuty", doIncDec('PostSepHeight', -2, 0, 50));
        break;
      case 'PostSepDivBackIsColorEr':
        confixWrapper("functionCall", "ChangeByInput('PostSepDivInner', 'borderBottomWidth', '1px')", ["PostSepDivInner", "borderBottomWidth", "1px"], ['PostSepDivInner', 'borderBottomWidth', '1px'], "doDuty", ChangeByInput('PostSepDivInner', 'borderBottomWidth', '1px'));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsTexture', 0)", ["PostSepDivBackgroundIsTexture", "0"], ['PostSepDivBackgroundIsTexture', 0], "doDuty", SwitchDisplay('PostSepDivBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsImage', 0)", ["PostSepDivBackgroundIsImage", "0"], ['PostSepDivBackgroundIsImage', 0], "doDuty", SwitchDisplay('PostSepDivBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsColor', 1)", ["PostSepDivBackgroundIsColor", "1"], ['PostSepDivBackgroundIsColor', 1], "doDuty", SwitchDisplay('PostSepDivBackgroundIsColor', 1));
        confixWrapper("functionCall", "ChangeByInput('PostSepDiv', 'backgroundImage', '')", ["PostSepDiv", "backgroundImage", ""], ['PostSepDiv', 'backgroundImage', ''], "doDuty", ChangeByInput('PostSepDiv', 'backgroundImage', ''));
        break;
      case 'PostSepDivBackIsTextureEr':
        confixWrapper("functionCall", "ChangeByInput('PostSepDivInner', 'borderBottomWidth', '0px')", ["PostSepDivInner", "borderBottomWidth", "0px"], ['PostSepDivInner', 'borderBottomWidth', '0px'], "doDuty", ChangeByInput('PostSepDivInner', 'borderBottomWidth', '0px'));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsColor', 0)", ["PostSepDivBackgroundIsColor", "0"], ['PostSepDivBackgroundIsColor', 0], "doDuty", SwitchDisplay('PostSepDivBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsImage', 0)", ["PostSepDivBackgroundIsImage", "0"], ['PostSepDivBackgroundIsImage', 0], "doDuty", SwitchDisplay('PostSepDivBackgroundIsImage', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsTexture', 1, 'inline')", ["PostSepDivBackgroundIsTexture", "1", "inline"], ['PostSepDivBackgroundIsTexture', 1, 'inline'], "doDuty", SwitchDisplay('PostSepDivBackgroundIsTexture', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('PostSepDivBackTextureEr'))", ["dg(PostSepDivBackTextureEr)"], [confixWrapper("functionCall", "dg('PostSepDivBackTextureEr')", ["PostSepDivBackTextureEr"], ['PostSepDivBackTextureEr'], "doDuty", dg('PostSepDivBackTextureEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('PostSepDivBackTextureEr')", ["PostSepDivBackTextureEr"], ['PostSepDivBackTextureEr'], "doDuty", dg('PostSepDivBackTextureEr'))));
        break;
      case 'PostSepDivBackIsImageEr':
        confixWrapper("functionCall", "ChangeByInput('PostSepDivInner', 'borderBottomWidth', '0px')", ["PostSepDivInner", "borderBottomWidth", "0px"], ['PostSepDivInner', 'borderBottomWidth', '0px'], "doDuty", ChangeByInput('PostSepDivInner', 'borderBottomWidth', '0px'));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsColor', 0)", ["PostSepDivBackgroundIsColor", "0"], ['PostSepDivBackgroundIsColor', 0], "doDuty", SwitchDisplay('PostSepDivBackgroundIsColor', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsTexture', 0)", ["PostSepDivBackgroundIsTexture", "0"], ['PostSepDivBackgroundIsTexture', 0], "doDuty", SwitchDisplay('PostSepDivBackgroundIsTexture', 0));
        confixWrapper("functionCall", "SwitchDisplay('PostSepDivBackgroundIsImage', 1, 'inline')", ["PostSepDivBackgroundIsImage", "1", "inline"], ['PostSepDivBackgroundIsImage', 1, 'inline'], "doDuty", SwitchDisplay('PostSepDivBackgroundIsImage', 1, 'inline'));
        confixWrapper("functionCall", "doDuty(dg('PostSepDivBackImageEr'))", ["dg(PostSepDivBackImageEr)"], [confixWrapper("functionCall", "dg('PostSepDivBackImageEr')", ["PostSepDivBackImageEr"], ['PostSepDivBackImageEr'], "doDuty", dg('PostSepDivBackImageEr'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('PostSepDivBackImageEr')", ["PostSepDivBackImageEr"], ['PostSepDivBackImageEr'], "doDuty", dg('PostSepDivBackImageEr'))));
        break;
      case 'PostSepDivBackColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'PostSepDivInner')", ["This.value", "borderColor", "PostSepDivInner"], [This.value, 'borderColor', 'PostSepDivInner'], "doDuty", IPickColor(This.value, 'borderColor', 'PostSepDivInner'));
        break;
      case 'PostSepDivBackColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'PostSepDivBackColorEr', 'borderColor', 'PostSepDivInner')", ["eve", "PostSepDivBackColorEr", "borderColor", "PostSepDivInner"], [eve, 'PostSepDivBackColorEr', 'borderColor', 'PostSepDivInner'], "doDuty", ShowCP(eve, 'PostSepDivBackColorEr', 'borderColor', 'PostSepDivInner'));
        break;
      case 'PostSepDivBackTextureEr':
        confixWrapper("functionCall", "ChangeByInput('PostSepDiv', 'backgroundImage', This)", ["PostSepDiv", "backgroundImage", "This"], ['PostSepDiv', 'backgroundImage', This], "doDuty", ChangeByInput('PostSepDiv', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('PostSepDiv', 'backgroundRepeat', 'repeat')", ["PostSepDiv", "backgroundRepeat", "repeat"], ['PostSepDiv', 'backgroundRepeat', 'repeat'], "doDuty", ChangeByInput('PostSepDiv', 'backgroundRepeat', 'repeat'));
        break;
      case 'PostSepDivBackImageEr':
        confixWrapper("functionCall", "ChangeByInput('PostSepDiv', 'backgroundImage', This)", ["PostSepDiv", "backgroundImage", "This"], ['PostSepDiv', 'backgroundImage', This], "doDuty", ChangeByInput('PostSepDiv', 'backgroundImage', This));
        confixWrapper("functionCall", "ChangeByInput('PostSepDiv', 'backgroundRepeat', 'no-repeat')", ["PostSepDiv", "backgroundRepeat", "no-repeat"], ['PostSepDiv', 'backgroundRepeat', 'no-repeat'], "doDuty", ChangeByInput('PostSepDiv', 'backgroundRepeat', 'no-repeat'));
        break;
      case 'CopyRightLine':
        confixWrapper("functionCall", "ChangeByInput('CopyRightDiv', 'innerHTML', This)", ["CopyRightDiv", "innerHTML", "This"], ['CopyRightDiv', 'innerHTML', This], "doDuty", ChangeByInput('CopyRightDiv', 'innerHTML', This));
        break;
      case 'AddImageBorderStyleEr':
        confixWrapper("functionCall", "ChangeByInput('AddImageImageI', 'borderStyle', This)", ["AddImageImageI", "borderStyle", "This"], ['AddImageImageI', 'borderStyle', This], "doDuty", ChangeByInput('AddImageImageI', 'borderStyle', This));
        confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "doDuty", UpdateAddImageNow());
        break;
      case 'AddImageBorderWidthEr':
        confixWrapper("functionCall", "ChangeByInput('AddImageImageI', 'borderWidth', This)", ["AddImageImageI", "borderWidth", "This"], ['AddImageImageI', 'borderWidth', This], "doDuty", ChangeByInput('AddImageImageI', 'borderWidth', This));
        confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "doDuty", UpdateAddImageNow());
        break;
      case 'AddImageBorderColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'borderColor', 'AddImageImageI')", ["This.value", "borderColor", "AddImageImageI"], [This.value, 'borderColor', 'AddImageImageI'], "doDuty", IPickColor(This.value, 'borderColor', 'AddImageImageI'));
        confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "doDuty", UpdateAddImageNow());
        break;
      case 'AddImageBorderColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'AddImageBorderColorEr', 'borderColor', 'AddImageImageI')", ["eve", "AddImageBorderColorEr", "borderColor", "AddImageImageI"], [eve, 'AddImageBorderColorEr', 'borderColor', 'AddImageImageI'], "doDuty", ShowCP(eve, 'AddImageBorderColorEr', 'borderColor', 'AddImageImageI'));
        confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "doDuty", UpdateAddImageNow());
        break;
      case 'AddImageImageIAddress':
        var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg('AddImageImageI')\", [\"AddImageImageI\"], ['AddImageImageI'], \"doDuty\", dg('AddImageImageI'))", [""], [], "doDuty", confixWrapper("functionCall", "dg('AddImageImageI')", ["AddImageImageI"], ['AddImageImageI'], "doDuty", dg('AddImageImageI')));
        confixWrapper("functionCall", "that.setAttribute('src', This.value)", ["src", "This.value"], ['src', This.value], "doDuty", that.setAttribute('src', This.value));
        confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "doDuty", UpdateAddImageNow());
        break;
      case 'AddImageImageIAlt':
        var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg('AddImageImageI')\", [\"AddImageImageI\"], ['AddImageImageI'], \"doDuty\", dg('AddImageImageI'))", [""], [], "doDuty", confixWrapper("functionCall", "dg('AddImageImageI')", ["AddImageImageI"], ['AddImageImageI'], "doDuty", dg('AddImageImageI')));
        confixWrapper("functionCall", "that.setAttribute('alt', This.value)", ["alt", "This.value"], ['alt', This.value], "doDuty", that.setAttribute('alt', This.value));
        confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "doDuty", UpdateAddImageNow());
        break;
      case 'WholeLinkColorEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'WholeColorCSS_Link')", ["This.value", "color", "WholeColorCSS_Link"], [This.value, 'color', 'WholeColorCSS_Link'], "doDuty", IPickColor(This.value, 'color', 'WholeColorCSS_Link'));
        break;
      case 'WholeLinkColorErA':
        confixWrapper("functionCall", "ShowCP(eve, 'WholeLinkColorEr', 'color', 'WholeColorCSS_Link')", ["eve", "WholeLinkColorEr", "color", "WholeColorCSS_Link"], [eve, 'WholeLinkColorEr', 'color', 'WholeColorCSS_Link'], "doDuty", ShowCP(eve, 'WholeLinkColorEr', 'color', 'WholeColorCSS_Link'));
        break;
      case 'WholeLinkHoverEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'WholeColorCSS_Hover')", ["This.value", "color", "WholeColorCSS_Hover"], [This.value, 'color', 'WholeColorCSS_Hover'], "doDuty", IPickColor(This.value, 'color', 'WholeColorCSS_Hover'));
        break;
      case 'WholeLinkHoverErA':
        confixWrapper("functionCall", "ShowCP(eve, 'WholeLinkHoverEr', 'color', 'WholeColorCSS_Hover')", ["eve", "WholeLinkHoverEr", "color", "WholeColorCSS_Hover"], [eve, 'WholeLinkHoverEr', 'color', 'WholeColorCSS_Hover'], "doDuty", ShowCP(eve, 'WholeLinkHoverEr', 'color', 'WholeColorCSS_Hover'));
        break;
      case 'WholeLinkVisitEr':
        global_colorRef = confixWrapper("infix", "global_colorRef = This", [""], [], "doDuty", This);
        confixWrapper("functionCall", "IPickColor(This.value, 'color', 'WholeColorCSS_Visit')", ["This.value", "color", "WholeColorCSS_Visit"], [This.value, 'color', 'WholeColorCSS_Visit'], "doDuty", IPickColor(This.value, 'color', 'WholeColorCSS_Visit'));
        break;
      case 'WholeLinkVisitErA':
        confixWrapper("functionCall", "ShowCP(eve, 'WholeLinkVisitEr', 'color', 'WholeColorCSS_Visit')", ["eve", "WholeLinkVisitEr", "color", "WholeColorCSS_Visit"], [eve, 'WholeLinkVisitEr', 'color', 'WholeColorCSS_Visit'], "doDuty", ShowCP(eve, 'WholeLinkVisitEr', 'color', 'WholeColorCSS_Visit'));
        break;
      default:
        confixWrapper("functionCall", "alert(s.id + ' is unknown and has no duty! call Aidin please')", ["s.id +  is unknown and has no duty! call Aidin please"], [s.id + ' is unknown and has no duty! call Aidin please'], "doDuty", alert(s.id + ' is unknown and has no duty! call Aidin please'));
    }
  }
}
function dg(s) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"document.getElementById(s)\", [\"s\"], [s], \"dg\", document.getElementById(s));", [""], [], "dg", confixWrapper("functionCall", "document.getElementById(s)", ["s"], [s], "dg", document.getElementById(s)));
}
function doIncDec(wut, rate, minv, maxv) {
  var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(dg(wut).value)\", [\"dg(wut).value\"], [confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"doIncDec\", dg(wut)).value], \"doIncDec\", parseFloat(confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"doIncDec\", dg(wut)).value))", [""], [], "doIncDec", confixWrapper("functionCall", "parseFloat(dg(wut).value)", ["dg(wut).value"], [confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut)).value], "doIncDec", parseFloat(confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut)).value)));
  if (confixWrapper("condition", "t + rate * (global_isShiftDown ? 3 : 1) <= maxv && t + rate * (global_isShiftDown ? 3 : 1) >= minv", ["wut", "rate", "minv", "maxv", "t"], [wut, rate, minv, maxv, t], "doIncDec", t + rate * (global_isShiftDown ? 3 : 1) <= maxv && t + rate * (global_isShiftDown ? 3 : 1) >= minv)) 
  t += rate * (global_isShiftDown ? 3 : 1);
  confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut)).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"doIncDec\", dg(wut)).value = t", [""], [], "doIncDec", t);
  confixWrapper("functionCall", "doDuty(dg(wut))", ["dg(wut)"], [confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut))], "doIncDec", doDuty(confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut))));
}
