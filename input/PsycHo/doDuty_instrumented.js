trace = [];
function confixWrapper(statementType, statement, varList, varValueList, enclosingFunction, actualStatement) {
  trace.push({statementType: statementType, statement: statement, varList: varList, varValueList: varValueList, enclosingFunction: enclosingFunction, actualStatement: actualStatement});
  return actualStatement;
}
function getConfixTrace() {
  return trace;
}
function alert() {
}
function confirm() {
  return true;
}
function kd_alert(s) {
  if (confixWrapper("condition", "global_last_kd_alert != s", [""], [], "kd_alert", global_last_kd_alert != s)) 
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
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
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
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This)", ["sa[0] + _DefaultDiv_ + i", "backgroundImage", "This"], [sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat')", ["sa[0] + _DefaultDiv_ + i", "backgroundRepeat", "repeat"], [sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat'], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat'));
        }
      break;
    case 'DefaultDivBackImageEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This)", ["sa[0] + _DefaultDiv_ + i", "backgroundImage", "This"], [sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat')", ["sa[0] + _DefaultDiv_ + i", "backgroundRepeat", "no-repeat"], [sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat'], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat'));
        }
      break;
    case 'DefaultBorderStyleEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderStyle', This)", ["sa[0] + _DefaultDiv_ + i", "borderStyle", "This"], [sa[0] + '_DefaultDiv_' + i, 'borderStyle', This], "foundSide", ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderStyle', This));
      break;
    case 'DefaultBorderWidthEr':
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
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
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
        confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This)", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomStyle", "This"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This));
      break;
    case 'SepBorderWidthEr':
      var mb = confixWrapper("initvar", "var mb = (confixWrapper(\"functionCall\", \"parseInt(dg('_' + sa[0] + '_PartSepHeight').value)\", [\"dg(_ + sa[0] + _PartSepHeight).value\"], [confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_PartSepHeight')\", [\"_ + sa[0] + _PartSepHeight\"], ['_' + sa[0] + '_PartSepHeight'], \"foundSide\", dg('_' + sa[0] + '_PartSepHeight')).value], \"foundSide\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_PartSepHeight')\", [\"_ + sa[0] + _PartSepHeight\"], ['_' + sa[0] + '_PartSepHeight'], \"foundSide\", dg('_' + sa[0] + '_PartSepHeight')).value)) - parseInt(This.value)) / 2", [""], [], "foundSide", (confixWrapper("functionCall", "parseInt(dg('_' + sa[0] + '_PartSepHeight').value)", ["dg(_ + sa[0] + _PartSepHeight).value"], [confixWrapper("functionCall", "dg('_' + sa[0] + '_PartSepHeight')", ["_ + sa[0] + _PartSepHeight"], ['_' + sa[0] + '_PartSepHeight'], "foundSide", dg('_' + sa[0] + '_PartSepHeight')).value], "foundSide", parseInt(confixWrapper("functionCall", "dg('_' + sa[0] + '_PartSepHeight')", ["_ + sa[0] + _PartSepHeight"], ['_' + sa[0] + '_PartSepHeight'], "foundSide", dg('_' + sa[0] + '_PartSepHeight')).value)) - parseInt(This.value)) / 2);
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
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
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
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
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This)", ["sa[0] + _PartSepDiv_ + i", "backgroundImage", "This"], [sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat')", ["sa[0] + _PartSepDiv_ + i", "backgroundRepeat", "repeat"], [sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat'], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px')", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomWidth", "0px"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'));
        }
      break;
    case 'PartSepDivBackImageEr':
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
        {
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This)", ["sa[0] + _PartSepDiv_ + i", "backgroundImage", "This"], [sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat')", ["sa[0] + _PartSepDiv_ + i", "backgroundRepeat", "no-repeat"], [sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat'], "foundSide", ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat'));
          confixWrapper("functionCall", "ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px')", ["sa[0] + _PartSepSemiDiv_ + i", "borderBottomWidth", "0px"], [sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'], "foundSide", ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px'));
        }
      break;
    case 'PartSepHeight':
      var t = confixWrapper("initvar", "var t = confixWrapper(\"functionCall\", \"parseFloat(This.value)\", [\"This.value\"], [This.value], \"foundSide\", parseFloat(This.value))", [""], [], "foundSide", confixWrapper("functionCall", "parseFloat(This.value)", ["This.value"], [This.value], "foundSide", parseFloat(This.value)));
      var mb = confixWrapper("initvar", "var mb = (t - confixWrapper(\"functionCall\", \"parseInt(dg('_' + sa[0] + '_SepBorderWidthEr').value)\", [\"dg(_ + sa[0] + _SepBorderWidthEr).value\"], [confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_SepBorderWidthEr')\", [\"_ + sa[0] + _SepBorderWidthEr\"], ['_' + sa[0] + '_SepBorderWidthEr'], \"foundSide\", dg('_' + sa[0] + '_SepBorderWidthEr')).value], \"foundSide\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_SepBorderWidthEr')\", [\"_ + sa[0] + _SepBorderWidthEr\"], ['_' + sa[0] + '_SepBorderWidthEr'], \"foundSide\", dg('_' + sa[0] + '_SepBorderWidthEr')).value))) / 2", [""], [], "foundSide", (t - confixWrapper("functionCall", "parseInt(dg('_' + sa[0] + '_SepBorderWidthEr').value)", ["dg(_ + sa[0] + _SepBorderWidthEr).value"], [confixWrapper("functionCall", "dg('_' + sa[0] + '_SepBorderWidthEr')", ["_ + sa[0] + _SepBorderWidthEr"], ['_' + sa[0] + '_SepBorderWidthEr'], "foundSide", dg('_' + sa[0] + '_SepBorderWidthEr')).value], "foundSide", parseInt(confixWrapper("functionCall", "dg('_' + sa[0] + '_SepBorderWidthEr')", ["_ + sa[0] + _SepBorderWidthEr"], ['_' + sa[0] + '_SepBorderWidthEr'], "foundSide", dg('_' + sa[0] + '_SepBorderWidthEr')).value))) / 2);
      for (var i = confixWrapper("initvar", "var i = 1", [""], [], "foundSide", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
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
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "foundSide", i < maxBoxNumOnSides); i++) 
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
      if (confixWrapper("condition", "bs == 1", [""], [], "foundSide", bs == 1)) 
      confixWrapper("functionCall", "alert('At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["At least one box should be present on the  + (sa[0] == R ? right : left) +  side!"], ['At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        for (var i = confixWrapper("initvar", "var i = sa[2]", [""], [], "foundSide", sa[2]); confixWrapper("loopCondition", "i < bs - 1", ["i", "bs"], [i, bs], "foundSide", i < bs - 1); i++) 
          confixWrapper("functionCall", "CopyBox(sa[0], i + 1, i)", ["sa[0]", "i + 1", "i"], [sa[0], i + 1, i], "foundSide", CopyBox(sa[0], i + 1, i));
        confixWrapper("functionCall", "ClearBox(sa[0], bs - 1)", ["sa[0]", "bs - 1"], [sa[0], bs - 1], "foundSide", ClearBox(sa[0], bs - 1));
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + (bs - 1), 0)", ["sa[0] + _PartDiv_ + (bs - 1)", "0"], [sa[0] + '_PartDiv_' + (bs - 1), 0], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + (bs - 1), 0));
        confixWrapper("functionCall", "HideEditPartBox()", [], [], "foundSide", HideEditPartBox());
        confixWrapper("functionCall", "dg('_' + sa[0] + '_boxNumForce')", ["_ + sa[0] + _boxNumForce"], ['_' + sa[0] + '_boxNumForce'], "foundSide", dg('_' + sa[0] + '_boxNumForce')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_boxNumForce')\", [\"_ + sa[0] + _boxNumForce\"], ['_' + sa[0] + '_boxNumForce'], \"foundSide\", dg('_' + sa[0] + '_boxNumForce')).value = bs - 1", [""], [], "foundSide", bs - 1);
      }
      break;
    case 'AddOneBox':
      if (confixWrapper("condition", "bs == maxBoxNumOnSides", [""], [], "foundSide", bs == maxBoxNumOnSides)) 
      confixWrapper("functionCall", "alert('Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["Just reached maximum box number on the  + (sa[0] == R ? right : left) +  side!"], ['Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + bs, 1)", ["sa[0] + _PartDiv_ + bs", "1"], [sa[0] + '_PartDiv_' + bs, 1], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + bs, 1));
        for (var i = confixWrapper("initvar", "var i = bs", [""], [], "foundSide", bs); confixWrapper("loopCondition", "i > sa[2] + 1", ["i", "sa"], [i, sa], "foundSide", i > sa[2] + 1); i--) 
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
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2]))", [""], [], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])))) 
      break;
      var thisId = confixWrapper("initvar", "var thisId = sa[0] + '_Title_' + sa[2]", [""], [], "foundSide", sa[0] + '_Title_' + sa[2]);
      confixWrapper("functionCall", "ChangeByInput(thisId, 'innerHTML', This)", ["thisId", "innerHTML", "This"], [thisId, 'innerHTML', This], "foundSide", ChangeByInput(thisId, 'innerHTML', This));
      if (confixWrapper("condition", "This.value.length", [""], [], "foundSide", This.value.length)) 
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
      if (confixWrapper("condition", "tv.length", [""], [], "foundSide", tv.length)) 
      tv = confixWrapper("infix", "tv = tv + '&#8206;'", [""], [], "foundSide", tv + '&#8206;');
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBoxByFor(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBoxByFor(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBoxByFor(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBoxByFor(sa[0], sa[2])));
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < ls", ["i", "ls"], [i, ls], "foundSide", i < ls); i++) 
        confixWrapper("functionCall", "dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)", [" + sa[0] + _LinkPreSurr_ + sa[2] + _ + i"], ['' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i], "foundSide", dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)\", [\" + sa[0] + _LinkPreSurr_ + sa[2] + _ + i\"], ['' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i], \"foundSide\", dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i)).innerHTML = tv", [""], [], "foundSide", tv);
      break;
    case 'PstSurr':
      var tv = confixWrapper("initvar", "var tv = This.value", [""], [], "foundSide", This.value);
      if (confixWrapper("condition", "tv.length", [""], [], "foundSide", tv.length)) 
      tv = confixWrapper("infix", "tv = '&#8206;' + tv", [""], [], "foundSide", '&#8206;' + tv);
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBoxByFor(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBoxByFor(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBoxByFor(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBoxByFor(sa[0], sa[2])));
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundSide", 0); confixWrapper("loopCondition", "i < ls", ["i", "ls"], [i, ls], "foundSide", i < ls); i++) 
        confixWrapper("functionCall", "dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)", [" + sa[0] + _LinkPstSurr_ + sa[2] + _ + i"], ['' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i], "foundSide", dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)\", [\" + sa[0] + _LinkPstSurr_ + sa[2] + _ + i\"], ['' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i], \"foundSide\", dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i)).innerHTML = tv", [""], [], "foundSide", tv);
      break;
    case 'LinkTxt':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2]))", [""], [], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])))) 
      break;
      var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBody_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBody_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])));
      var thatText = confixWrapper("initvar", "var thatText = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBodyButText_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBodyButText_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3])));
      var thatCont = confixWrapper("initvar", "var thatCont = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBodyContainer_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBodyContainer_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3])));
      var sin = confixWrapper("initvar", "var sin = This.value", [""], [], "foundSide", This.value), tin;
      if (confixWrapper("condition", "sin == confixWrapper(\"functionCall\", \"translateIt('email')\", [\"email\"], ['email'], \"foundSide\", translateIt('email'))", [""], [], "foundSide", sin == confixWrapper("functionCall", "translateIt('email')", ["email"], ['email'], "foundSide", translateIt('email')))) 
      sin = confixWrapper("infix", "sin = confixWrapper(\"functionCall\", \"translateIt('e-mail')\", [\"e-mail\"], ['e-mail'], \"foundSide\", translateIt('e-mail'))", [""], [], "foundSide", confixWrapper("functionCall", "translateIt('e-mail')", ["e-mail"], ['e-mail'], "foundSide", translateIt('e-mail')));
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"sin.substring(0, 2)\", [\"0\", \"2\"], [0, 2], \"foundSide\", sin.substring(0, 2)) == ' $'", [""], [], "foundSide", confixWrapper("functionCall", "sin.substring(0, 2)", ["0", "2"], [0, 2], "foundSide", sin.substring(0, 2)) == ' $')) 
      sin = confixWrapper("infix", "sin = confixWrapper(\"functionCall\", \"sin.substring(1, sin.length)\", [\"1\", \"sin.length\"], [1, sin.length], \"foundSide\", sin.substring(1, sin.length))", [""], [], "foundSide", confixWrapper("functionCall", "sin.substring(1, sin.length)", ["1", "sin.length"], [1, sin.length], "foundSide", sin.substring(1, sin.length)));
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"sin.charAt(0)\", [\"0\"], [0], \"foundSide\", sin.charAt(0)) == ' '", [""], [], "foundSide", confixWrapper("functionCall", "sin.charAt(0)", ["0"], [0], "foundSide", sin.charAt(0)) == ' ')) 
      sin = confixWrapper("infix", "sin = '&nbsp;' + confixWrapper(\"functionCall\", \"sin.substring(1, sin.length)\", [\"1\", \"sin.length\"], [1, sin.length], \"foundSide\", sin.substring(1, sin.length))", [""], [], "foundSide", '&nbsp;' + confixWrapper("functionCall", "sin.substring(1, sin.length)", ["1", "sin.length"], [1, sin.length], "foundSide", sin.substring(1, sin.length)));
      confixWrapper("functionCall", "enableEditLink(sa[0], sa[2], sa[3])", ["sa[0]", "sa[2]", "sa[3]"], [sa[0], sa[2], sa[3]], "foundSide", enableEditLink(sa[0], sa[2], sa[3]));
      if (confixWrapper("condition", "sin == '$ARCHIVE'", [""], [], "foundSide", sin == '$ARCHIVE')) 
      if (confixWrapper("condition", "global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Archive Index Listing\".')", ["doesn\t support Archive Index Listing."], ['doesn\'t support "Archive Index Listing".'], "foundSide", kd_alert('doesn\'t support "Archive Index Listing".')); else {
        sin = confixWrapper("infix", "sin = 'Oct 2005'", [""], [], "foundSide", 'Oct 2005');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$RECENT'", [""], [], "foundSide", sin == '$RECENT')) 
      if (confixWrapper("condition", "global_prov == 'blogfa' || global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'blogfa' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Recenet entries listing\".')", ["doesn\t support Recenet entries listing."], ['doesn\'t support "Recenet entries listing".'], "foundSide", kd_alert('doesn\'t support "Recenet entries listing".')); else {
        sin = confixWrapper("infix", "sin = '[Last postTitles Here]'", [""], [], "foundSide", '[Last postTitles Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$PROFILE'", [""], [], "foundSide", sin == '$PROFILE')) 
      if (confixWrapper("condition", "global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Blogger's profile\".')", ["doesn\t support Bloggers profile."], ['doesn\'t support "Blogger\'s profile".'], "foundSide", kd_alert('doesn\'t support "Blogger\'s profile".')); else {
        sin = confixWrapper("infix", "sin = '[Your Profile Here]'", [""], [], "foundSide", '[Your Profile Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 0)", ["sa[0]", "sa[2]", "sa[3]", "0"], [sa[0], sa[2], sa[3], 0], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 0));
      }
      if (confixWrapper("condition", "sin == '$LINKS'", [""], [], "foundSide", sin == '$LINKS')) 
      if (confixWrapper("condition", "global_prov == 'blogger'", [""], [], "foundSide", global_prov == 'blogger')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Blog's links listing\".')", ["doesn\t support Blogs links listing."], ['doesn\'t support "Blog\'s links listing".'], "foundSide", kd_alert('doesn\'t support "Blog\'s links listing".')); else {
        sin = confixWrapper("infix", "sin = '[Your Links Here]'", [""], [], "foundSide", '[Your Links Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$CATEGLIST'", [""], [], "foundSide", sin == '$CATEGLIST')) 
      if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Blog's category listing\".')", ["doesn\t support Blogs category listing."], ['doesn\'t support "Blog\'s category listing".'], "foundSide", kd_alert('doesn\'t support "Blog\'s category listing".')); else {
        sin = confixWrapper("infix", "sin = '[Category List Here]'", [""], [], "foundSide", '[Category List Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$LINKDUMP'", [""], [], "foundSide", sin == '$LINKDUMP')) 
      if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Blog's link dumps\".')", ["doesn\t support Blogs link dumps."], ['doesn\'t support "Blog\'s link dumps".'], "foundSide", kd_alert('doesn\'t support "Blog\'s link dumps".')); else {
        sin = confixWrapper("infix", "sin = '[Daily Links Here]'", [""], [], "foundSide", '[Daily Links Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      if (confixWrapper("condition", "sin == '$AUTHORS'", [""], [], "foundSide", sin == '$AUTHORS')) 
      if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
      confixWrapper("functionCall", "kd_alert('doesn't support \"Blog's author listing\".')", ["doesn\t support Blogs author listing."], ['doesn\'t support "Blog\'s author listing".'], "foundSide", kd_alert('doesn\'t support "Blog\'s author listing".')); else {
        sin = confixWrapper("infix", "sin = '[Authors List Here]'", [""], [], "foundSide", '[Authors List Here]');
        confixWrapper("functionCall", "disableEditLink(sa[0], sa[2], sa[3], 1)", ["sa[0]", "sa[2]", "sa[3]", "1"], [sa[0], sa[2], sa[3], 1], "foundSide", disableEditLink(sa[0], sa[2], sa[3], 1));
      }
      that.innerHTML = confixWrapper("infix", "that.innerHTML = sin", [""], [], "foundSide", sin);
      thatText.innerHTML = confixWrapper("infix", "thatText.innerHTML = sin", [""], [], "foundSide", sin);
      confixWrapper("functionCall", "SwitchDisplay(thatCont, (This.value.length > 0))", ["thatCont", "(This.value.length > 0)"], [thatCont, (This.value.length > 0)], "foundSide", SwitchDisplay(thatCont, (This.value.length > 0)));
      if (confixWrapper("condition", "(thatText.style.display == 'none') != (confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])\", [\"_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]\"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], \"foundSide\", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])).value.length > 0)", [""], [], "foundSide", (thatText.style.display == 'none') != (confixWrapper("functionCall", "dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])", ["_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], "foundSide", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])).value.length > 0))) 
      confixWrapper("functionCall", "doDuty(dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]), eve)", ["dg(_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3])", "eve"], [confixWrapper("functionCall", "dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])", ["_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], "foundSide", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])), eve], "foundSide", doDuty(confixWrapper("functionCall", "dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])", ["_ + sa[0] + _LinkUrl_ + sa[2] + _ + sa[3]"], ['_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]], "foundSide", dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3])), eve));
      break;
    case 'LinkUrl':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2])) || This.disabled", [""], [], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])) || This.disabled)) 
      break;
      var that = confixWrapper("initvar", "var that = sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]", [""], [], "foundSide", sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]);
      var thatText = confixWrapper("initvar", "var thatText = sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]", [""], [], "foundSide", sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]);
      confixWrapper("functionCall", "SwitchDisplay((This.value == '') ? that : thatText, 0, 'inline')", ["(This.value == ) ? that : thatText", "0", "inline"], [(This.value == '') ? that : thatText, 0, 'inline'], "foundSide", SwitchDisplay((This.value == '') ? that : thatText, 0, 'inline'));
      confixWrapper("functionCall", "SwitchDisplay((This.value == '') ? thatText : that, 1, 'inline')", ["(This.value == ) ? thatText : that", "1", "inline"], [(This.value == '') ? thatText : that, 1, 'inline'], "foundSide", SwitchDisplay((This.value == '') ? thatText : that, 1, 'inline'));
      var dst = confixWrapper("initvar", "var dst = This.value", [""], [], "foundSide", This.value);
      if (confixWrapper("condition", "dst == '$HOME'", [""], [], "foundSide", dst == '$HOME')) 
      dst = confixWrapper("infix", "dst = 'http://[YourBlogName].' + global_prov + '.com'", [""], [], "foundSide", 'http://[YourBlogName].' + global_prov + '.com');
      if (confixWrapper("condition", "dst == '$EMAIL'", [""], [], "foundSide", dst == '$EMAIL')) 
      dst = confixWrapper("infix", "dst = 'mailto:[YourEmailAddress]'", [""], [], "foundSide", 'mailto:[YourEmailAddress]');
      if (confixWrapper("condition", "dst == '$ARCHIVE'", [""], [], "foundSide", dst == '$ARCHIVE')) 
      dst = confixWrapper("infix", "dst = 'http://[YourBlogName].' + global_prov + '.com/[ArchivePage]'", [""], [], "foundSide", 'http://[YourBlogName].' + global_prov + '.com/[ArchivePage]');
      if (confixWrapper("condition", "dst == '$RSS'", [""], [], "foundSide", dst == '$RSS')) 
      {
        if (confixWrapper("condition", "global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'persianblog')) 
        confixWrapper("functionCall", "kd_alert('doesn't support \"RSS Feed\".')", ["doesn\t support RSS Feed."], ['doesn\'t support "RSS Feed".'], "foundSide", kd_alert('doesn\'t support "RSS Feed".')); else dst = confixWrapper("infix", "dst = 'http://[YourBlogName].' + global_prov + '.com/[RSS.xml]'", [""], [], "foundSide", 'http://[YourBlogName].' + global_prov + '.com/[RSS.xml]');
      }
      if (confixWrapper("condition", "dst == '$PSYCHO'", [""], [], "foundSide", dst == '$PSYCHO')) 
      dst = confixWrapper("infix", "dst = 'http://psyc.horm.org/?PsycHodrama=[YourPsycHodrama]'", [""], [], "foundSide", 'http://psyc.horm.org/?PsycHodrama=[YourPsycHodrama]');
      if (confixWrapper("condition", "dst == '$CUSTOM'", [""], [], "foundSide", dst == '$CUSTOM')) 
      {
        if (confixWrapper("condition", "global_prov == 'blogger' || global_prov == 'persianblog'", [""], [], "foundSide", global_prov == 'blogger' || global_prov == 'persianblog')) 
        confixWrapper("functionCall", "kd_alert('doesn't support \"Custom HTML codes\".')", ["doesn\t support Custom HTML codes."], ['doesn\'t support "Custom HTML codes".'], "foundSide", kd_alert('doesn\'t support "Custom HTML codes".')); else dst = confixWrapper("infix", "dst = '[Custom HTML Codes]'", [""], [], "foundSide", '[Custom HTML Codes]');
      }
      confixWrapper("functionCall", "dg(that).setAttribute('href', dst)", ["href", "dst"], ['href', dst], "foundSide", confixWrapper("functionCall", "dg(that)", ["that"], [that], "foundSide", dg(that)).setAttribute('href', dst));
      break;
    case 'LinkTtl':
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", isBoxVisible(sa[0], sa[2]))", [""], [], "foundSide", !confixWrapper("functionCall", "isBoxVisible(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", isBoxVisible(sa[0], sa[2])))) 
      break;
      var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])\", [\"sa[0] + _LinkBody_ + sa[2] + _ + sa[3]\"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], \"foundSide\", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]))", [""], [], "foundSide", confixWrapper("functionCall", "dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])", ["sa[0] + _LinkBody_ + sa[2] + _ + sa[3]"], [sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]], "foundSide", dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3])));
      confixWrapper("functionCall", "that.setAttribute('title', This.value)", ["title", "This.value"], ['title', This.value], "foundSide", that.setAttribute('title', This.value));
      break;
    case 'RemLink':
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBox(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBox(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBox(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBox(sa[0], sa[2])));
      if (confixWrapper("condition", "ls == 1", [""], [], "foundSide", ls == 1)) 
      confixWrapper("functionCall", "alert('At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["At least one box should be present on the box # + (sa[2] + 1) +  of  + (sa[0] == R ? right : left) +  side!"], ['At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        for (var i = confixWrapper("initvar", "var i = sa[3]", [""], [], "foundSide", sa[3]); confixWrapper("loopCondition", "i < ls - 1", ["i", "ls"], [i, ls], "foundSide", i < ls - 1); i++) 
          confixWrapper("functionCall", "CopyLink(sa[0], sa[2], i + 1, sa[0], sa[2], i)", ["sa[0]", "sa[2]", "i + 1", "sa[0]", "sa[2]", "i"], [sa[0], sa[2], i + 1, sa[0], sa[2], i], "foundSide", CopyLink(sa[0], sa[2], i + 1, sa[0], sa[2], i));
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], ls - 1, '', '', '', 0)", ["sa[0]", "sa[2]", "ls - 1", "", "", "", "0"], [sa[0], sa[2], ls - 1, '', '', '', 0], "foundSide", InsertLinkToBox(sa[0], sa[2], ls - 1, '', '', '', 0));
        confixWrapper("functionCall", "dg('_' + sa[0] + '_linkNumForce_' + sa[2])", ["_ + sa[0] + _linkNumForce_ + sa[2]"], ['_' + sa[0] + '_linkNumForce_' + sa[2]], "foundSide", dg('_' + sa[0] + '_linkNumForce_' + sa[2])).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + sa[0] + '_linkNumForce_' + sa[2])\", [\"_ + sa[0] + _linkNumForce_ + sa[2]\"], ['_' + sa[0] + '_linkNumForce_' + sa[2]], \"foundSide\", dg('_' + sa[0] + '_linkNumForce_' + sa[2])).value = ls - 1", [""], [], "foundSide", ls - 1);
      }
      break;
    case 'InsLink':
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBox(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBox(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBox(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBox(sa[0], sa[2])));
      if (confixWrapper("condition", "ls == maxLinkNumBoxes", [""], [], "foundSide", ls == maxLinkNumBoxes)) 
      confixWrapper("functionCall", "alert('Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')", ["Just reached maximum link number on the box # + (sa[2] + 1) +  of  + (sa[0] == R ? right : left) +  side!"], ['Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!'], "foundSide", alert('Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!')); else {
        for (var i = confixWrapper("initvar", "var i = ls", [""], [], "foundSide", ls); confixWrapper("loopCondition", "i && i > sa[3] + 1", ["i", "i", "sa"], [i, i, sa], "foundSide", i && i > sa[3] + 1); i--) 
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
      for (var i = confixWrapper("initvar", "var i = This.value", [""], [], "foundSide", This.value); confixWrapper("loopCondition", "i < bs", ["i", "bs"], [i, bs], "foundSide", i < bs); i++) 
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + i, 0)", ["sa[0] + _PartDiv_ + i", "0"], [sa[0] + '_PartDiv_' + i, 0], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + i, 0));
      for (var i = confixWrapper("initvar", "var i = bs", [""], [], "foundSide", bs); confixWrapper("loopCondition", "i < This.value", ["i", "This", "valu"], [i, This, valu], "foundSide", i < This.value); i++) 
        confixWrapper("functionCall", "SwitchDisplay(sa[0] + '_PartDiv_' + i, 1)", ["sa[0] + _PartDiv_ + i", "1"], [sa[0] + '_PartDiv_' + i, 1], "foundSide", SwitchDisplay(sa[0] + '_PartDiv_' + i, 1));
      break;
    case 'linkNumForce':
      var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"LinkLengthOnBoxByFor(sa[0], sa[2])\", [\"sa[0]\", \"sa[2]\"], [sa[0], sa[2]], \"foundSide\", LinkLengthOnBoxByFor(sa[0], sa[2]))", [""], [], "foundSide", confixWrapper("functionCall", "LinkLengthOnBoxByFor(sa[0], sa[2])", ["sa[0]", "sa[2]"], [sa[0], sa[2]], "foundSide", LinkLengthOnBoxByFor(sa[0], sa[2])));
      for (var i = confixWrapper("initvar", "var i = This.value", [""], [], "foundSide", This.value); confixWrapper("loopCondition", "i < ls", ["i", "ls"], [i, ls], "foundSide", i < ls); i++) 
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], i, '', '', '', 0)", ["sa[0]", "sa[2]", "i", "", "", "", "0"], [sa[0], sa[2], i, '', '', '', 0], "foundSide", InsertLinkToBox(sa[0], sa[2], i, '', '', '', 0));
      for (var i = confixWrapper("initvar", "var i = ls", [""], [], "foundSide", ls); confixWrapper("loopCondition", "i < This.value", ["i", "This", "valu"], [i, This, valu], "foundSide", i < This.value); i++) 
        confixWrapper("functionCall", "InsertLinkToBox(sa[0], sa[2], i, ' ', '', '', 1)", ["sa[0]", "sa[2]", "i", " ", "", "", "1"], [sa[0], sa[2], i, ' ', '', '', 1], "foundSide", InsertLinkToBox(sa[0], sa[2], i, ' ', '', '', 1));
      break;
    default:
      confixWrapper("functionCall", "alert(sa[1] + ' command is unknown on sidebar! call Aidin please')", ["sa[1] +  command is unknown on sidebar! call Aidin please"], [sa[1] + ' command is unknown on sidebar! call Aidin please'], "foundSide", alert(sa[1] + ' command is unknown on sidebar! call Aidin please'));
  }
}
function foundDuty(s, eve) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"foundDuty\", s.substring(0, 1)) == '_'", [""], [], "foundDuty", confixWrapper("functionCall", "s.substring(0, 1)", ["0", "1"], [0, 1], "foundDuty", s.substring(0, 1)) == '_')) 
  {
    confixWrapper("functionCall", "foundSide(s.substring(1, s.length), eve)", ["s.substring(1, s.length)", "eve"], [confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)), eve], "foundDuty", foundSide(confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)), eve));
    return confixWrapper("return", "return true;", [""], [], "foundDuty", true);
  }
  var This = confixWrapper("initvar", "var This = confixWrapper(\"functionCall\", \"dg(s)\", [\"s\"], [s], \"foundDuty\", dg(s))", [""], [], "foundDuty", confixWrapper("functionCall", "dg(s)", ["s"], [s], "foundDuty", dg(s))), t;
  t1 = confixWrapper("infix", "t1 = new Array('FontBoldEr', 'FontItalicEr', 'FontUnderlineEr', 'AlignErLeft', 'AlignErRight', 'AlignErCenter', 'FontFamily', 'FontSizeEr', 'AlignEr')", [""], [], "foundDuty", new Array('FontBoldEr', 'FontItalicEr', 'FontUnderlineEr', 'AlignErLeft', 'AlignErRight', 'AlignErCenter', 'FontFamily', 'FontSizeEr', 'AlignEr'));
  t2 = confixWrapper("infix", "t2 = new Array('fontWeight', 'fontStyle', 'textDecoration', 'textAlign', 'textAlign', 'textAlign', 'fontFamily', 'fontSize', 'textDecoration')", [""], [], "foundDuty", new Array('fontWeight', 'fontStyle', 'textDecoration', 'textAlign', 'textAlign', 'textAlign', 'fontFamily', 'fontSize', 'textDecoration'));
  t3 = confixWrapper("infix", "t3 = new Array(This, This, This, 'left', 'right', 'center', This, This, 'none')", [""], [], "foundDuty", new Array(This, This, This, 'left', 'right', 'center', This, This, 'none'));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "foundDuty", 0); confixWrapper("loopCondition", "i < t1.length", ["i", "t1"], [i, t1], "foundDuty", i < t1.length); i++) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(s.length - t1[i].length, s.length)\", [\"s.length - t1[i].length\", \"s.length\"], [s.length - t1[i].length, s.length], \"foundDuty\", s.substring(s.length - t1[i].length, s.length)) == t1[i]", [""], [], "foundDuty", confixWrapper("functionCall", "s.substring(s.length - t1[i].length, s.length)", ["s.length - t1[i].length", "s.length"], [s.length - t1[i].length, s.length], "foundDuty", s.substring(s.length - t1[i].length, s.length)) == t1[i])) 
    {
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, s.length - t1[i].length)\", [\"0\", \"s.length - t1[i].length\"], [0, s.length - t1[i].length], \"foundDuty\", s.substring(0, s.length - t1[i].length))", [""], [], "foundDuty", confixWrapper("functionCall", "s.substring(0, s.length - t1[i].length)", ["0", "s.length - t1[i].length"], [0, s.length - t1[i].length], "foundDuty", s.substring(0, s.length - t1[i].length)));
      if (confixWrapper("condition", "i == 3 || i == 4 || i == 5", [""], [], "foundDuty", i == 3 || i == 4 || i == 5)) 
      {
        var d = confixWrapper("initvar", "var d = confixWrapper(\"functionCall\", \"t1[i].substring(7, t1[i].length)\", [\"7\", \"t1[i].length\"], [7, t1[i].length], \"foundDuty\", t1[i].substring(7, t1[i].length))", [""], [], "foundDuty", confixWrapper("functionCall", "t1[i].substring(7, t1[i].length)", ["7", "t1[i].length"], [7, t1[i].length], "foundDuty", t1[i].substring(7, t1[i].length)));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignErLeftImg', false)", ["s + AlignErLeftImg", "false"], [s + 'AlignErLeftImg', false], "foundDuty", PushImgBut(s + 'AlignErLeftImg', false));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignErRightImg', false)", ["s + AlignErRightImg", "false"], [s + 'AlignErRightImg', false], "foundDuty", PushImgBut(s + 'AlignErRightImg', false));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignErCenterImg', false)", ["s + AlignErCenterImg", "false"], [s + 'AlignErCenterImg', false], "foundDuty", PushImgBut(s + 'AlignErCenterImg', false));
        confixWrapper("functionCall", "PushImgBut(s + 'AlignEr' + d + 'Img', true)", ["s + AlignEr + d + Img", "true"], [s + 'AlignEr' + d + 'Img', true], "foundDuty", PushImgBut(s + 'AlignEr' + d + 'Img', true));
      }
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"foundDuty\", s.substring(1, s.length)) == '_DefaultDiv_0' || confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"foundDuty\", s.substring(1, s.length)) == '_Title_0' || confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"foundDuty\", s.substring(1, s.length)) == '_PartDiv_0'", [""], [], "foundDuty", confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)) == '_DefaultDiv_0' || confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)) == '_Title_0' || confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "foundDuty", s.substring(1, s.length)) == '_PartDiv_0')) 
      for (var j = confixWrapper("initvar", "var j = 0", [""], [], "foundDuty", 0); confixWrapper("loopCondition", "j < maxBoxNumOnSides", ["j", "maxBoxNumOnSides"], [j, maxBoxNumOnSides], "foundDuty", j < maxBoxNumOnSides); j++) 
        confixWrapper("functionCall", "ChangeByInput(s.substring(0, s.length - 1) + j, t2[i], t3[i])", ["s.substring(0, s.length - 1) + j", "t2[i]", "t3[i]"], [confixWrapper("functionCall", "s.substring(0, s.length - 1)", ["0", "s.length - 1"], [0, s.length - 1], "foundDuty", s.substring(0, s.length - 1)) + j, t2[i], t3[i]], "foundDuty", ChangeByInput(confixWrapper("functionCall", "s.substring(0, s.length - 1)", ["0", "s.length - 1"], [0, s.length - 1], "foundDuty", s.substring(0, s.length - 1)) + j, t2[i], t3[i])); else {
        if (confixWrapper("condition", "s == 'HeaderPartText'", [""], [], "foundDuty", s == 'HeaderPartText')) 
        {
          confixWrapper("functionCall", "ChangeByInput('TitleText', t2[i], t3[i])", ["TitleText", "t2[i]", "t3[i]"], ['TitleText', t2[i], t3[i]], "foundDuty", ChangeByInput('TitleText', t2[i], t3[i]));
          confixWrapper("functionCall", "ChangeByInput('SubTitleText', t2[i], t3[i])", ["SubTitleText", "t2[i]", "t3[i]"], ['SubTitleText', t2[i], t3[i]], "foundDuty", ChangeByInput('SubTitleText', t2[i], t3[i]));
        } else confixWrapper("functionCall", "ChangeByInput(s, t2[i], t3[i])", ["s", "t2[i]", "t3[i]"], [s, t2[i], t3[i]], "foundDuty", ChangeByInput(s, t2[i], t3[i]));
      }
      if (confixWrapper("condition", "t1[i] == 'FontItalicEr'", [""], [], "foundDuty", t1[i] == 'FontItalicEr')) 
      {
        confixWrapper("functionCall", "PushImgBut(s + 'ItalicErImg', This.value == 'italic')", ["s + ItalicErImg", "This.value == italic"], [s + 'ItalicErImg', This.value == 'italic'], "foundDuty", PushImgBut(s + 'ItalicErImg', This.value == 'italic'));
        confixWrapper("functionCall", "ToggleTextVal(This, 'italic', 'normal', 'value')", ["This", "italic", "normal", "value"], [This, 'italic', 'normal', 'value'], "foundDuty", ToggleTextVal(This, 'italic', 'normal', 'value'));
      }
      if (confixWrapper("condition", "t1[i] == 'FontBoldEr'", [""], [], "foundDuty", t1[i] == 'FontBoldEr')) 
      {
        confixWrapper("functionCall", "PushImgBut(s + 'BoldErImg', This.value == 'bold')", ["s + BoldErImg", "This.value == bold"], [s + 'BoldErImg', This.value == 'bold'], "foundDuty", PushImgBut(s + 'BoldErImg', This.value == 'bold'));
        confixWrapper("functionCall", "ToggleTextVal(This, 'bold', 'normal', 'value')", ["This", "bold", "normal", "value"], [This, 'bold', 'normal', 'value'], "foundDuty", ToggleTextVal(This, 'bold', 'normal', 'value'));
      }
      if (confixWrapper("condition", "t1[i] == 'FontUnderlineEr'", [""], [], "foundDuty", t1[i] == 'FontUnderlineEr')) 
      {
        confixWrapper("functionCall", "PushImgBut(s + 'UnderlineErImg', This.value == 'underline')", ["s + UnderlineErImg", "This.value == underline"], [s + 'UnderlineErImg', This.value == 'underline'], "foundDuty", PushImgBut(s + 'UnderlineErImg', This.value == 'underline'));
        confixWrapper("functionCall", "ToggleTextVal(This, 'underline', 'none', 'value')", ["This", "underline", "none", "value"], [This, 'underline', 'none', 'value'], "foundDuty", ToggleTextVal(This, 'underline', 'none', 'value'));
      }
      return confixWrapper("return", "return true;", [""], [], "foundDuty", true);
    }
  return confixWrapper("return", "return false;", [""], [], "foundDuty", false);
}
function doDuty(s, eve) {
  if (confixWrapper("condition", "!s.tagName", [""], [], "doDuty", !s.tagName)) 
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"dg(s)\", [\"s\"], [s], \"doDuty\", dg(s))", [""], [], "doDuty", confixWrapper("functionCall", "dg(s)", ["s"], [s], "doDuty", dg(s)));
  if (confixWrapper("condition", "global_lastDidDuty", [""], [], "doDuty", global_lastDidDuty)) 
  {
    confixWrapper("functionCall", "ChangeByInput(global_lastDidDuty, 'borderColor', '#666')", ["global_lastDidDuty", "borderColor", "#666"], [global_lastDidDuty, 'borderColor', '#666'], "doDuty", ChangeByInput(global_lastDidDuty, 'borderColor', '#666'));
    confixWrapper("functionCall", "ChangeByInput(global_lastDidDuty, 'color', '#333')", ["global_lastDidDuty", "color", "#333"], [global_lastDidDuty, 'color', '#333'], "doDuty", ChangeByInput(global_lastDidDuty, 'color', '#333'));
  }
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.tagName.toLowerCase()\", [], [], \"doDuty\", s.tagName.toLowerCase()) == 'input' && confixWrapper(\"functionCall\", \"s.getAttribute('type').toLowerCase()\", [], [], \"doDuty\", confixWrapper(\"functionCall\", \"s.getAttribute('type')\", [\"type\"], ['type'], \"doDuty\", s.getAttribute('type')).toLowerCase()) == 'text' && !s.disabled", [""], [], "doDuty", confixWrapper("functionCall", "s.tagName.toLowerCase()", [], [], "doDuty", s.tagName.toLowerCase()) == 'input' && confixWrapper("functionCall", "s.getAttribute('type').toLowerCase()", [], [], "doDuty", confixWrapper("functionCall", "s.getAttribute('type')", ["type"], ['type'], "doDuty", s.getAttribute('type')).toLowerCase()) == 'text' && !s.disabled)) 
  {
    confixWrapper("functionCall", "ChangeByInput(s.id, 'borderColor', '#C00')", ["s.id", "borderColor", "#C00"], [s.id, 'borderColor', '#C00'], "doDuty", ChangeByInput(s.id, 'borderColor', '#C00'));
    confixWrapper("functionCall", "ChangeByInput(s.id, 'color', '#000')", ["s.id", "color", "#000"], [s.id, 'color', '#000'], "doDuty", ChangeByInput(s.id, 'color', '#000'));
    if (confixWrapper("condition", "global_lastDidDuty != s.id && !global_isTakingEffectAll", [""], [], "doDuty", global_lastDidDuty != s.id && !global_isTakingEffectAll)) 
    confixWrapper("functionCall", "s.select()", [], [], "doDuty", s.select());
    global_lastDidDuty = confixWrapper("infix", "global_lastDidDuty = s.id", [""], [], "doDuty", s.id);
  }
  var This = confixWrapper("initvar", "var This = s", [""], [], "doDuty", s);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.id.substring(0, 2)\", [\"0\", \"2\"], [0, 2], \"doDuty\", s.id.substring(0, 2)) != 'SH'", [""], [], "doDuty", confixWrapper("functionCall", "s.id.substring(0, 2)", ["0", "2"], [0, 2], "doDuty", s.id.substring(0, 2)) != 'SH')) 
  global_didSomething = confixWrapper("infix", "global_didSomething = true", [""], [], "doDuty", true);
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"foundDuty(s.id, eve)\", [\"s.id\", \"eve\"], [s.id, eve], \"doDuty\", foundDuty(s.id, eve))", [""], [], "doDuty", !confixWrapper("functionCall", "foundDuty(s.id, eve)", ["s.id", "eve"], [s.id, eve], "doDuty", foundDuty(s.id, eve)))) 
  {
    switch (s.id) {
      case 'ResetPsycHodramaEr':
        break;
      case 'PsycHodramaSaver':
        confixWrapper("functionCall", "WritePsycHodrama()", [], [], "doDuty", WritePsycHodrama());
        global_didSomething = confixWrapper("infix", "global_didSomething = false", [""], [], "doDuty", false);
        var msgStr = confixWrapper("initvar", "var msgStr = 'PsycHodrama Saved Successfully.'", [""], [], "doDuty", 'PsycHodrama Saved Successfully.');
        if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "doDuty", global_lang == 'fa')) 
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
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"ReadPsycHodrama(dg('PsycHodramaPutEr').value)\", [\"dg(PsycHodramaPutEr).value\"], [confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"doDuty\", dg('PsycHodramaPutEr')).value], \"doDuty\", ReadPsycHodrama(confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"doDuty\", dg('PsycHodramaPutEr')).value))", [""], [], "doDuty", confixWrapper("functionCall", "ReadPsycHodrama(dg('PsycHodramaPutEr').value)", ["dg(PsycHodramaPutEr).value"], [confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "doDuty", dg('PsycHodramaPutEr')).value], "doDuty", ReadPsycHodrama(confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "doDuty", dg('PsycHodramaPutEr')).value)))) 
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
        if (confixWrapper("condition", "This.value == 'DEFAULT$'", [""], [], "doDuty", This.value == 'DEFAULT$')) 
        confixWrapper("functionCall", "alert(translateIt('not default$'))", ["translateIt(not default$)"], [confixWrapper("functionCall", "translateIt('not default$')", ["not default$"], ['not default$'], "doDuty", translateIt('not default$'))], "doDuty", alert(confixWrapper("functionCall", "translateIt('not default$')", ["not default$"], ['not default$'], "doDuty", translateIt('not default$'))));
        if (confixWrapper("condition", "This.value == '$DEFAULT'", [""], [], "doDuty", This.value == '$DEFAULT')) 
        dt = confixWrapper("infix", "dt = '[PsycHo] DEFAULT TITLE'", [""], [], "doDuty", '[PsycHo] DEFAULT TITLE');
        document.title = confixWrapper("infix", "document.title = '[PsycHo] ' + dt", [""], [], "doDuty", '[PsycHo] ' + dt);
        break;
      case 'WholeProvider':
        global_prov = confixWrapper("infix", "global_prov = This.value", ["This"], [This], "doDuty", This.value);
        var isBlogger = confixWrapper("initvar", "var isBlogger = (global_prov == 'blogger')", [""], [], "doDuty", (global_prov == 'blogger'));
        var isPersianBlog = confixWrapper("initvar", "var isPersianBlog = (global_prov == 'persianblog')", [""], [], "doDuty", (global_prov == 'persianblog'));
        var sides = confixWrapper("initvar", "var sides = new Array('R', 'L')", [""], [], "doDuty", new Array('R', 'L'));
        if (confixWrapper("condition", "isBlogger", [""], [], "doDuty", isBlogger)) 
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
        if (confixWrapper("condition", "isPersianBlog", [""], [], "doDuty", isPersianBlog)) 
        {
          for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", ["t"], [t], "doDuty", t < 2); t++) 
            {
              var archive_txt = confixWrapper("initvar", "var archive_txt = 'Archive'", [""], [], "doDuty", 'Archive');
              var archive_ttl = confixWrapper("initvar", "var archive_ttl = 'Archive Page'", [""], [], "doDuty", 'Archive Page');
              if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "doDuty", global_lang == 'fa')) 
              {
                archive_txt = confixWrapper("infix", "archive_txt = confixWrapper(\"functionCall\", \"translateIt(archive_txt)\", [\"archive_txt\"], [archive_txt], \"doDuty\", translateIt(archive_txt))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt(archive_txt)", ["archive_txt"], [archive_txt], "doDuty", translateIt(archive_txt)));
                archive_ttl = confixWrapper("infix", "archive_ttl = confixWrapper(\"functionCall\", \"translateIt(archive_ttl)\", [\"archive_ttl\"], [archive_ttl], \"doDuty\", translateIt(archive_ttl))", [""], [], "doDuty", confixWrapper("functionCall", "translateIt(archive_ttl)", ["archive_ttl"], [archive_ttl], "doDuty", translateIt(archive_ttl)));
              }
              if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkUrl_0_2')\", [\"_ + sides[t] + _LinkUrl_0_2\"], ['_' + sides[t] + '_LinkUrl_0_2'], \"doDuty\", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$RSS'", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkUrl_0_2')", ["_ + sides[t] + _LinkUrl_0_2"], ['_' + sides[t] + '_LinkUrl_0_2'], "doDuty", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$RSS')) 
              confixWrapper("functionCall", "InsertLinkToBox(sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1)", ["sides[t]", "0", "2", "archive_txt", "$ARCHIVE", "archive_ttl", "1"], [sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1], "doDuty", InsertLinkToBox(sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1));
              if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkTxt_1_0')\", [\"_ + sides[t] + _LinkTxt_1_0\"], ['_' + sides[t] + '_LinkTxt_1_0'], \"doDuty\", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE'", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTxt_1_0')", ["_ + sides[t] + _LinkTxt_1_0"], ['_' + sides[t] + '_LinkTxt_1_0'], "doDuty", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE')) 
              confixWrapper("functionCall", "doDuty('_' + sides[t] + '_RemoveThisBox_1')", ["_ + sides[t] + _RemoveThisBox_1"], ['_' + sides[t] + '_RemoveThisBox_1'], "doDuty", doDuty('_' + sides[t] + '_RemoveThisBox_1'));
            }
        } else {
          for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", ["t"], [t], "doDuty", t < 2); t++) 
            if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkUrl_0_2')\", [\"_ + sides[t] + _LinkUrl_0_2\"], ['_' + sides[t] + '_LinkUrl_0_2'], \"doDuty\", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$ARCHIVE'", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkUrl_0_2')", ["_ + sides[t] + _LinkUrl_0_2"], ['_' + sides[t] + '_LinkUrl_0_2'], "doDuty", dg('_' + sides[t] + '_LinkUrl_0_2')).value == '$ARCHIVE')) 
            confixWrapper("functionCall", "InsertLinkToBox(sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1)", ["sides[t]", "0", "2", "RSS", "$RSS", "RSS Feed", "1"], [sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1], "doDuty", InsertLinkToBox(sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1));
          var noArch = confixWrapper("initvar", "var noArch = true", [""], [], "doDuty", true);
          for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", ["t"], [t], "doDuty", t < 2); t++) 
            {
              var bs = confixWrapper("initvar", "var bs = confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_boxNumForce')\", [\"_ + sides[t] + _boxNumForce\"], ['_' + sides[t] + '_boxNumForce'], \"doDuty\", dg('_' + sides[t] + '_boxNumForce')).value", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_boxNumForce')", ["_ + sides[t] + _boxNumForce"], ['_' + sides[t] + '_boxNumForce'], "doDuty", dg('_' + sides[t] + '_boxNumForce')).value);
              for (var i = confixWrapper("initvar", "var i = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "i < bs", ["i", "bs"], [i, bs], "doDuty", i < bs); i++) 
                {
                  var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_linkNumForce_' + i)\", [\"_ + sides[t] + _linkNumForce_ + i\"], ['_' + sides[t] + '_linkNumForce_' + i], \"doDuty\", dg('_' + sides[t] + '_linkNumForce_' + i)).value", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_linkNumForce_' + i)", ["_ + sides[t] + _linkNumForce_ + i"], ['_' + sides[t] + '_linkNumForce_' + i], "doDuty", dg('_' + sides[t] + '_linkNumForce_' + i)).value);
                  for (var j = confixWrapper("initvar", "var j = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "j < ls", ["j", "ls"], [j, ls], "doDuty", j < ls); j++) 
                    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_LinkTxt_1_0')\", [\"_ + sides[t] + _LinkTxt_1_0\"], ['_' + sides[t] + '_LinkTxt_1_0'], \"doDuty\", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE'", [""], [], "doDuty", confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTxt_1_0')", ["_ + sides[t] + _LinkTxt_1_0"], ['_' + sides[t] + '_LinkTxt_1_0'], "doDuty", dg('_' + sides[t] + '_LinkTxt_1_0')).value == '$ARCHIVE')) 
                    noArch = confixWrapper("infix", "noArch = false", [""], [], "doDuty", false);
                }
            }
          if (confixWrapper("condition", "noArch", [""], [], "doDuty", noArch)) 
          {
            var sides = confixWrapper("initvar", "var sides = new Array('R', 'L')", [""], [], "doDuty", new Array('R', 'L'));
            for (var t = confixWrapper("initvar", "var t = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "t < 2", ["t"], [t], "doDuty", t < 2); t++) 
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
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('WholeWidthUnitErPixels')\", [\"WholeWidthUnitErPixels\"], ['WholeWidthUnitErPixels'], \"doDuty\", dg('WholeWidthUnitErPixels')).checked", [""], [], "doDuty", confixWrapper("functionCall", "dg('WholeWidthUnitErPixels')", ["WholeWidthUnitErPixels"], ['WholeWidthUnitErPixels'], "doDuty", dg('WholeWidthUnitErPixels')).checked)) 
        confixWrapper("functionCall", "ChangeByInput('Grannie', 'width', This)", ["Grannie", "width", "This"], ['Grannie', 'width', This], "doDuty", ChangeByInput('Grannie', 'width', This));
        break;
      case 'WholeWidthValueErPercent':
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('WholeWidthUnitErPercent')\", [\"WholeWidthUnitErPercent\"], ['WholeWidthUnitErPercent'], \"doDuty\", dg('WholeWidthUnitErPercent')).checked", [""], [], "doDuty", confixWrapper("functionCall", "dg('WholeWidthUnitErPercent')", ["WholeWidthUnitErPercent"], ['WholeWidthUnitErPercent'], "doDuty", dg('WholeWidthUnitErPercent')).checked)) 
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
        if (confixWrapper("condition", "This.value == '$DEFAULT'", [""], [], "doDuty", This.value == '$DEFAULT')) 
        confixWrapper("functionCall", "ChangeByInput('TitleText', 'innerHTML', '[DEFAULT TITLE]')", ["TitleText", "innerHTML", "[DEFAULT TITLE]"], ['TitleText', 'innerHTML', '[DEFAULT TITLE]'], "doDuty", ChangeByInput('TitleText', 'innerHTML', '[DEFAULT TITLE]')); else confixWrapper("functionCall", "ChangeByInput('TitleText', 'innerHTML', This)", ["TitleText", "innerHTML", "This"], ['TitleText', 'innerHTML', This], "doDuty", ChangeByInput('TitleText', 'innerHTML', This));
        if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"doDuty\", isIE())", [""], [], "doDuty", !confixWrapper("functionCall", "isIE()", [], [], "doDuty", isIE()))) 
        {
          confixWrapper("functionCall", "dg('HeaderPartText')", ["HeaderPartText"], ['HeaderPartText'], "doDuty", dg('HeaderPartText')).style.marginTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('HeaderPartText')\", [\"HeaderPartText\"], ['HeaderPartText'], \"doDuty\", dg('HeaderPartText')).style.marginTop = '1px'", [""], [], "doDuty", '1px');
          confixWrapper("functionCall", "dg('HeaderPartText')", ["HeaderPartText"], ['HeaderPartText'], "doDuty", dg('HeaderPartText')).style.marginTop = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('HeaderPartText')\", [\"HeaderPartText\"], ['HeaderPartText'], \"doDuty\", dg('HeaderPartText')).style.marginTop = '0px'", [""], [], "doDuty", '0px');
        }
        break;
      case 'SubTitleTextTextEr':
        if (confixWrapper("condition", "This.value == '$DEFAULT'", [""], [], "doDuty", This.value == '$DEFAULT')) 
        if (confixWrapper("condition", "global_prov == 'persianblog'", [""], [], "doDuty", global_prov == 'persianblog')) 
        confixWrapper("functionCall", "kd_alert('Doesn't reserve anything DEFAULT for PageDescription.')", ["Doesn\t reserve anything DEFAULT for PageDescription."], ['Doesn\'t reserve anything DEFAULT for PageDescription.'], "doDuty", kd_alert('Doesn\'t reserve anything DEFAULT for PageDescription.')); else confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]')", ["SubTitleText", "innerHTML", "[DEFAULT DESCRIPTION]"], ['SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]'], "doDuty", ChangeByInput('SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]')); else confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'innerHTML', This)", ["SubTitleText", "innerHTML", "This"], ['SubTitleText', 'innerHTML', This], "doDuty", ChangeByInput('SubTitleText', 'innerHTML', This));
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
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('BasicSettings')\", [\"BasicSettings\"], ['BasicSettings'], \"doDuty\", dg('BasicSettings')).style.display == 'none'", [""], [], "doDuty", confixWrapper("functionCall", "dg('BasicSettings')", ["BasicSettings"], ['BasicSettings'], "doDuty", dg('BasicSettings')).style.display == 'none')) 
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
        for (i = confixWrapper("infix", "i = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "i < document.PsycHoForm.ColsNumberRadioEr.length", ["i", "document", "PsycHoForm", "ColsNumberRadioEr", "len"], [i, document, PsycHoForm, ColsNumberRadioEr, len], "doDuty", i < document.PsycHoForm.ColsNumberRadioEr.length); i++) 
          if (confixWrapper("condition", "document.PsycHoForm.ColsNumberRadioEr[i].checked", [""], [], "doDuty", document.PsycHoForm.ColsNumberRadioEr[i].checked)) 
          break;
        confixWrapper("functionCall", "ChangeByInput('MainColumn', 'width', ((i != 0) ? t : '100') + '%')", ["MainColumn", "width", "((i != 0) ? t : 100) + %"], ['MainColumn', 'width', ((i != 0) ? t : '100') + '%'], "doDuty", ChangeByInput('MainColumn', 'width', ((i != 0) ? t : '100') + '%'));
        confixWrapper("functionCall", "ChangeByInput('ColsPart', 'width', ((i == 0) ? t : '100') + '%')", ["ColsPart", "width", "((i == 0) ? t : 100) + %"], ['ColsPart', 'width', ((i == 0) ? t : '100') + '%'], "doDuty", ChangeByInput('ColsPart', 'width', ((i == 0) ? t : '100') + '%'));
        t = confixWrapper("infix", "t = 100 - confixWrapper(\"functionCall\", \"parseFloat(dg('SideRColumn').style.marginLeft)\", [\"dg(SideRColumn).style.marginLeft\"], [confixWrapper(\"functionCall\", \"dg('SideRColumn')\", [\"SideRColumn\"], ['SideRColumn'], \"doDuty\", dg('SideRColumn')).style.marginLeft], \"doDuty\", parseFloat(confixWrapper(\"functionCall\", \"dg('SideRColumn')\", [\"SideRColumn\"], ['SideRColumn'], \"doDuty\", dg('SideRColumn')).style.marginLeft)) - t - (confixWrapper(\"functionCall\", \"isIE()\", [], [], \"doDuty\", isIE()) ? 0.2 : 0.1)", [""], [], "doDuty", 100 - confixWrapper("functionCall", "parseFloat(dg('SideRColumn').style.marginLeft)", ["dg(SideRColumn).style.marginLeft"], [confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.marginLeft], "doDuty", parseFloat(confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "doDuty", dg('SideRColumn')).style.marginLeft)) - t - (confixWrapper("functionCall", "isIE()", [], [], "doDuty", isIE()) ? 0.2 : 0.1));
        if (confixWrapper("condition", "i == 3", [""], [], "doDuty", i == 3)) 
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
        for (var j = confixWrapper("initvar", "var j = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "j < sa.length", ["j", "sa"], [j, sa], "doDuty", j < sa.length); j++) 
          for (var i = confixWrapper("initvar", "var i = 0", [""], [], "doDuty", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "doDuty", i < maxBoxNumOnSides); i++) 
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
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"getGCW()\", [], [], \"doDuty\", getGCW())", [""], [], "doDuty", confixWrapper("functionCall", "getGCW()", [], [], "doDuty", getGCW()))) 
        {
          confixWrapper("functionCall", "dg('OnePostTitleAlignErLeft')", ["OnePostTitleAlignErLeft"], ['OnePostTitleAlignErLeft'], "doDuty", dg('OnePostTitleAlignErLeft')).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('OnePostTitleAlignErLeft')\", [\"OnePostTitleAlignErLeft\"], ['OnePostTitleAlignErLeft'], \"doDuty\", dg('OnePostTitleAlignErLeft')).checked = true", [""], [], "doDuty", true);
          confixWrapper("functionCall", "doDuty(dg('OnePostTitleAlignErLeft'))", ["dg(OnePostTitleAlignErLeft)"], [confixWrapper("functionCall", "dg('OnePostTitleAlignErLeft')", ["OnePostTitleAlignErLeft"], ['OnePostTitleAlignErLeft'], "doDuty", dg('OnePostTitleAlignErLeft'))], "doDuty", doDuty(confixWrapper("functionCall", "dg('OnePostTitleAlignErLeft')", ["OnePostTitleAlignErLeft"], ['OnePostTitleAlignErLeft'], "doDuty", dg('OnePostTitleAlignErLeft'))));
        }
        break;
      case 'OnePostTitleDirectionIsRTLEr':
        confixWrapper("functionCall", "PushImgBut('OnePostTitleDirLTRErImg', false)", ["OnePostTitleDirLTRErImg", "false"], ['OnePostTitleDirLTRErImg', false], "doDuty", PushImgBut('OnePostTitleDirLTRErImg', false));
        confixWrapper("functionCall", "PushImgBut('OnePostTitleDirRTLErImg', true)", ["OnePostTitleDirRTLErImg", "true"], ['OnePostTitleDirRTLErImg', true], "doDuty", PushImgBut('OnePostTitleDirRTLErImg', true));
        confixWrapper("functionCall", "ChangeByInput('OnePostTitle', 'direction', 'rtl')", ["OnePostTitle", "direction", "rtl"], ['OnePostTitle', 'direction', 'rtl'], "doDuty", ChangeByInput('OnePostTitle', 'direction', 'rtl'));
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"getGCW()\", [], [], \"doDuty\", getGCW())", [""], [], "doDuty", confixWrapper("functionCall", "getGCW()", [], [], "doDuty", getGCW()))) 
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
        if (confixWrapper("condition", "cur == -1", [""], [], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$TIME')\", [\"$TIME\"], ['$TIME'], \"doDuty\", tempStr.indexOf('$TIME'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$TIME')", ["$TIME"], ['$TIME'], "doDuty", tempStr.indexOf('$TIME')));
        if (confixWrapper("condition", "cur != -1", [""], [], "doDuty", cur != -1)) 
        tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + '' + now.getHours() + ':' + now.getMinutes() + '' + tempStr.substring(cur + 5, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + '' + now.getHours() + ':' + now.getMinutes() + '' + tempStr.substring(cur + 5, tempStr.length));
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Nevis'))\", [\"translateIt(!Nevis)\"], [confixWrapper(\"functionCall\", \"translateIt('!Nevis')\", [\"!Nevis\"], ['!Nevis'], \"doDuty\", translateIt('!Nevis'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Nevis')\", [\"!Nevis\"], ['!Nevis'], \"doDuty\", translateIt('!Nevis'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Nevis'))", ["translateIt(!Nevis)"], [confixWrapper("functionCall", "translateIt('!Nevis')", ["!Nevis"], ['!Nevis'], "doDuty", translateIt('!Nevis'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Nevis')", ["!Nevis"], ['!Nevis'], "doDuty", translateIt('!Nevis')))));
        if (confixWrapper("condition", "cur == -1", [""], [], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Neviis'))\", [\"translateIt(!Neviis)\"], [confixWrapper(\"functionCall\", \"translateIt('!Neviis')\", [\"!Neviis\"], ['!Neviis'], \"doDuty\", translateIt('!Neviis'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Neviis')\", [\"!Neviis\"], ['!Neviis'], \"doDuty\", translateIt('!Neviis'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Neviis'))", ["translateIt(!Neviis)"], [confixWrapper("functionCall", "translateIt('!Neviis')", ["!Neviis"], ['!Neviis'], "doDuty", translateIt('!Neviis'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Neviis')", ["!Neviis"], ['!Neviis'], "doDuty", translateIt('!Neviis')))));
        if (confixWrapper("condition", "cur == -1", [""], [], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$AUTH')\", [\"$AUTH\"], ['$AUTH'], \"doDuty\", tempStr.indexOf('$AUTH'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$AUTH')", ["$AUTH"], ['$AUTH'], "doDuty", tempStr.indexOf('$AUTH')));
        if (confixWrapper("condition", "cur != -1", [""], [], "doDuty", cur != -1)) 
        tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + (global_lang == 'fa' ? confixWrapper(\"functionCall\", \"translateIt('Aideen')\", [\"Aideen\"], ['Aideen'], \"doDuty\", translateIt('Aideen')) : 'Aideen') + tempStr.substring(cur + 5, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + (global_lang == 'fa' ? confixWrapper("functionCall", "translateIt('Aideen')", ["Aideen"], ['Aideen'], "doDuty", translateIt('Aideen')) : 'Aideen') + tempStr.substring(cur + 5, tempStr.length));
        var theDate = confixWrapper("initvar", "var theDate = confixWrapper(\"functionCall\", \"dg('OnePostDateTop')\", [\"OnePostDateTop\"], ['OnePostDateTop'], \"doDuty\", dg('OnePostDateTop')).innerHTML", [""], [], "doDuty", confixWrapper("functionCall", "dg('OnePostDateTop')", ["OnePostDateTop"], ['OnePostDateTop'], "doDuty", dg('OnePostDateTop')).innerHTML);
        var extspc = confixWrapper("initvar", "var extspc = 0", [""], [], "doDuty", 0);
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Tarikh'))\", [\"translateIt(!Tarikh)\"], [confixWrapper(\"functionCall\", \"translateIt('!Tarikh')\", [\"!Tarikh\"], ['!Tarikh'], \"doDuty\", translateIt('!Tarikh'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Tarikh')\", [\"!Tarikh\"], ['!Tarikh'], \"doDuty\", translateIt('!Tarikh'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Tarikh'))", ["translateIt(!Tarikh)"], [confixWrapper("functionCall", "translateIt('!Tarikh')", ["!Tarikh"], ['!Tarikh'], "doDuty", translateIt('!Tarikh'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Tarikh')", ["!Tarikh"], ['!Tarikh'], "doDuty", translateIt('!Tarikh')))));
        if (confixWrapper("condition", "cur == -1", [""], [], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Tariikh'))\", [\"translateIt(!Tariikh)\"], [confixWrapper(\"functionCall\", \"translateIt('!Tariikh')\", [\"!Tariikh\"], ['!Tariikh'], \"doDuty\", translateIt('!Tariikh'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Tariikh')\", [\"!Tariikh\"], ['!Tariikh'], \"doDuty\", translateIt('!Tariikh'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Tariikh'))", ["translateIt(!Tariikh)"], [confixWrapper("functionCall", "translateIt('!Tariikh')", ["!Tariikh"], ['!Tariikh'], "doDuty", translateIt('!Tariikh'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Tariikh')", ["!Tariikh"], ['!Tariikh'], "doDuty", translateIt('!Tariikh')))));
        if (confixWrapper("condition", "cur == -1", [""], [], "doDuty", cur == -1)) 
        {
          cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$DATE')\", [\"$DATE\"], ['$DATE'], \"doDuty\", tempStr.indexOf('$DATE'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$DATE')", ["$DATE"], ['$DATE'], "doDuty", tempStr.indexOf('$DATE')));
          extspc = confixWrapper("infix", "extspc = -1", [""], [], "doDuty", -1);
        }
        if (confixWrapper("condition", "cur != -1", [""], [], "doDuty", cur != -1)) 
        tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"doDuty\", tempStr.substring(0, cur)) + (theDate) + tempStr.substring(cur + 6 + extspc, tempStr.length)", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "doDuty", tempStr.substring(0, cur)) + (theDate) + tempStr.substring(cur + 6 + extspc, tempStr.length));
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Mabhas'))\", [\"translateIt(!Mabhas)\"], [confixWrapper(\"functionCall\", \"translateIt('!Mabhas')\", [\"!Mabhas\"], ['!Mabhas'], \"doDuty\", translateIt('!Mabhas'))], \"doDuty\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Mabhas')\", [\"!Mabhas\"], ['!Mabhas'], \"doDuty\", translateIt('!Mabhas'))))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Mabhas'))", ["translateIt(!Mabhas)"], [confixWrapper("functionCall", "translateIt('!Mabhas')", ["!Mabhas"], ['!Mabhas'], "doDuty", translateIt('!Mabhas'))], "doDuty", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Mabhas')", ["!Mabhas"], ['!Mabhas'], "doDuty", translateIt('!Mabhas')))));
        if (confixWrapper("condition", "cur == -1", [""], [], "doDuty", cur == -1)) 
        cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$CATG')\", [\"$CATG\"], ['$CATG'], \"doDuty\", tempStr.indexOf('$CATG'))", [""], [], "doDuty", confixWrapper("functionCall", "tempStr.indexOf('$CATG')", ["$CATG"], ['$CATG'], "doDuty", tempStr.indexOf('$CATG')));
        if (confixWrapper("condition", "cur != -1", [""], [], "doDuty", cur != -1)) 
        {
          if (confixWrapper("condition", "global_prov == 'blogfa' || global_prov == 'persianblog'", [""], [], "doDuty", global_prov == 'blogfa' || global_prov == 'persianblog')) 
          confixWrapper("functionCall", "kd_alert('doesn't support \"Post Categories\".')", ["doesn\t support Post Categories."], ['doesn\'t support "Post Categories".'], "doDuty", kd_alert('doesn\'t support "Post Categories".'));
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
  if (confixWrapper("condition", "t + rate * (global_isShiftDown ? 3 : 1) <= maxv && t + rate * (global_isShiftDown ? 3 : 1) >= minv", [""], [], "doIncDec", t + rate * (global_isShiftDown ? 3 : 1) <= maxv && t + rate * (global_isShiftDown ? 3 : 1) >= minv)) 
  t += rate * (global_isShiftDown ? 3 : 1);
  confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut)).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"doIncDec\", dg(wut)).value = t", [""], [], "doIncDec", t);
  confixWrapper("functionCall", "doDuty(dg(wut))", ["dg(wut)"], [confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut))], "doIncDec", doDuty(confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "doIncDec", dg(wut))));
}
function BoxLength(side) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('_' + side + '_boxNumForce')\", [\"_ + side + _boxNumForce\"], ['_' + side + '_boxNumForce'], \"BoxLength\", dg('_' + side + '_boxNumForce'))", [""], [], "BoxLength", confixWrapper("functionCall", "dg('_' + side + '_boxNumForce')", ["_ + side + _boxNumForce"], ['_' + side + '_boxNumForce'], "BoxLength", dg('_' + side + '_boxNumForce')))) 
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"parseInt(dg('_' + side + '_boxNumForce').value)\", [\"dg(_ + side + _boxNumForce).value\"], [confixWrapper(\"functionCall\", \"dg('_' + side + '_boxNumForce')\", [\"_ + side + _boxNumForce\"], ['_' + side + '_boxNumForce'], \"BoxLength\", dg('_' + side + '_boxNumForce')).value], \"BoxLength\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + side + '_boxNumForce')\", [\"_ + side + _boxNumForce\"], ['_' + side + '_boxNumForce'], \"BoxLength\", dg('_' + side + '_boxNumForce')).value));", [""], [], "BoxLength", confixWrapper("functionCall", "parseInt(dg('_' + side + '_boxNumForce').value)", ["dg(_ + side + _boxNumForce).value"], [confixWrapper("functionCall", "dg('_' + side + '_boxNumForce')", ["_ + side + _boxNumForce"], ['_' + side + '_boxNumForce'], "BoxLength", dg('_' + side + '_boxNumForce')).value], "BoxLength", parseInt(confixWrapper("functionCall", "dg('_' + side + '_boxNumForce')", ["_ + side + _boxNumForce"], ['_' + side + '_boxNumForce'], "BoxLength", dg('_' + side + '_boxNumForce')).value)));
}
function BoxLengthByFor(side) {
  var i;
  for (i = confixWrapper("infix", "i = 0", [""], [], "BoxLengthByFor", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "BoxLengthByFor", i < maxBoxNumOnSides); i++) 
    if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"dg(side + '_PartDiv_' + i)\", [\"side + _PartDiv_ + i\"], [side + '_PartDiv_' + i], \"BoxLengthByFor\", dg(side + '_PartDiv_' + i)) || confixWrapper(\"functionCall\", \"dg(side + '_PartDiv_' + i)\", [\"side + _PartDiv_ + i\"], [side + '_PartDiv_' + i], \"BoxLengthByFor\", dg(side + '_PartDiv_' + i)).style.display == 'none'", [""], [], "BoxLengthByFor", !confixWrapper("functionCall", "dg(side + '_PartDiv_' + i)", ["side + _PartDiv_ + i"], [side + '_PartDiv_' + i], "BoxLengthByFor", dg(side + '_PartDiv_' + i)) || confixWrapper("functionCall", "dg(side + '_PartDiv_' + i)", ["side + _PartDiv_ + i"], [side + '_PartDiv_' + i], "BoxLengthByFor", dg(side + '_PartDiv_' + i)).style.display == 'none')) 
    break;
  return confixWrapper("return", "return i;", [""], [], "BoxLengthByFor", i);
}
var PsycHo_CurrentVersion = confixWrapper("initvar", "var PsycHo_CurrentVersion = '100'", [""], [], "", '100');
var global_lang = confixWrapper("initvar", "var global_lang = 'en'", [""], [], "", 'en');
var global_colorRef;
var global_lastColor;
var global_yetMove;
var global_canWrite;
var global_didSomething = confixWrapper("initvar", "var global_didSomething = false", [""], [], "", false);
var global_gotResult = confixWrapper("initvar", "var global_gotResult = false", [""], [], "", false);
var global_lastDidDuty;
var global_isMinimized = confixWrapper("initvar", "var global_isMinimized = false", [""], [], "", false);
var global_isPathedHide = confixWrapper("initvar", "var global_isPathedHide = false", [""], [], "", false);
var global_isTakingEffectAll = confixWrapper("initvar", "var global_isTakingEffectAll = false", [""], [], "", false);
var global_prov = confixWrapper("initvar", "var global_prov = 'blogger'", [""], [], "", 'blogger');
var maxBoxNumOnSides = confixWrapper("initvar", "var maxBoxNumOnSides = 6", [""], [], "", 6);
var maxLinkNumBoxes = confixWrapper("initvar", "var maxLinkNumBoxes = 20", [""], [], "", 20);
var global_AINode;
var encN = confixWrapper("initvar", "var encN = 1", [""], [], "", 1);
var encArr = confixWrapper("initvar", "var encArr = new Array('%26%2361470%3B', 'http%3A//', ']]]]]]]]]]', 'false', 'true', '%u', '%')", [""], [], "", new Array('%26%2361470%3B', 'http%3A//', ']]]]]]]]]]', 'false', 'true', '%u', '%'));
var encSym = confixWrapper("initvar", "var encSym = new Array(']', ')', '[', '(', ',', '!', '^')", [""], [], "", new Array(']', ')', '[', '(', ',', '!', '^'));
var drama_splitter = confixWrapper("initvar", "var drama_splitter = '&#61470;'", [""], [], "", '&#61470;');
var dont_help;
var dont_cp;
var dont_addimg;
var dont_drama;
var dont_kines;
var dont_editpart;
var global_last_kd_alert;
var dont_page_focus = confixWrapper("initvar", "var dont_page_focus = false", [""], [], "", false);
var isKinePrev = confixWrapper("initvar", "var isKinePrev = false", [""], [], "", false);
var global_isShiftDown = confixWrapper("initvar", "var global_isShiftDown = false", [""], [], "", false);
document.onmouseup = confixWrapper("infix", "document.onmouseup = captureMousedown", [""], [], "", captureMousedown);
document.onkeydown = confixWrapper("infix", "document.onkeydown = captureKeydown", [""], [], "", captureKeydown);
document.onkeyup = confixWrapper("infix", "document.onkeyup = captureKeyup", [""], [], "", captureKeyup);
window.onbeforeunload = confixWrapper("infix", "window.onbeforeunload = sayGoodbyeToItAll", [""], [], "", sayGoodbyeToItAll);
function KinePrevOn() {
  isKinePrev = confixWrapper("infix", "isKinePrev = true", [""], [], "KinePrevOn", true);
}
function KinePrevOff() {
  isKinePrev = confixWrapper("infix", "isKinePrev = false", [""], [], "KinePrevOff", false);
}
function docFocus() {
  return;
}
function captureMousedown(e) {
  var mc = confixWrapper("initvar", "var mc = e ? e.which : window.event.button", [""], [], "captureMousedown", e ? e.which : window.event.button);
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(e, 0)\", [\"e\", \"0\"], [e, 0], \"captureMousedown\", getMyXY(e, 0))", [""], [], "captureMousedown", confixWrapper("functionCall", "getMyXY(e, 0)", ["e", "0"], [e, 0], "captureMousedown", getMyXY(e, 0)));
  if (confixWrapper("condition", "mc == 1 && (window.screen.width - myX > 20)", [""], [], "captureMousedown", mc == 1 && (window.screen.width - myX > 20))) 
  confixWrapper("functionCall", "HideAll()", [], [], "captureMousedown", HideAll());
}
function captureKeydown(e) {
  var k = confixWrapper("initvar", "var k = e ? e.which : window.event.keyCode", [""], [], "captureKeydown", e ? e.which : window.event.keyCode);
  if (confixWrapper("condition", "k == 27", [""], [], "captureKeydown", k == 27)) 
  confixWrapper("functionCall", "HideAll()", [], [], "captureKeydown", HideAll());
}
function captureKeyup(e) {
  var k = confixWrapper("initvar", "var k = e ? e.which : window.event.keyCode", [""], [], "captureKeyup", e ? e.which : window.event.keyCode);
  if (confixWrapper("condition", "k == 17", [""], [], "captureKeyup", k == 17)) 
  global_isShiftDown = confixWrapper("infix", "global_isShiftDown = false", [""], [], "captureKeyup", false);
}
function showDarkMoon(x) {
  var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg('darkMoon')\", [\"darkMoon\"], ['darkMoon'], \"showDarkMoon\", dg('darkMoon'))", [""], [], "showDarkMoon", confixWrapper("functionCall", "dg('darkMoon')", ["darkMoon"], ['darkMoon'], "showDarkMoon", dg('darkMoon'))), dY = confixWrapper("initvar", "var dY = 0", [""], [], "showDarkMoon", 0);
  if (confixWrapper("condition", "document.body.scrollTop", [""], [], "showDarkMoon", document.body.scrollTop)) 
  dY = confixWrapper("infix", "dY = document.body.scrollTop", [""], [], "showDarkMoon", document.body.scrollTop); else dY = confixWrapper("infix", "dY = document.documentElement.scrollTop", [""], [], "showDarkMoon", document.documentElement.scrollTop);
  that.style.height = confixWrapper("infix", "that.style.height = (document.documentElement.scrollTop + 2 * window.screen.height) + 'px'", [""], [], "showDarkMoon", (document.documentElement.scrollTop + 2 * window.screen.height) + 'px');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"isIE()\", [], [], \"showDarkMoon\", isIE())", [""], [], "showDarkMoon", confixWrapper("functionCall", "isIE()", [], [], "showDarkMoon", isIE()))) 
  {
    that.style.filter = confixWrapper("infix", "that.style.filter = 'alpha(opacity=' + x + ')'", [""], [], "showDarkMoon", 'alpha(opacity=' + x + ')');
  } else try {
    that.style.MozOpacity = confixWrapper("infix", "that.style.MozOpacity = (confixWrapper(\"functionCall\", \"parseFloat(x)\", [\"x\"], [x], \"showDarkMoon\", parseFloat(x)) / 100)", [""], [], "showDarkMoon", (confixWrapper("functionCall", "parseFloat(x)", ["x"], [x], "showDarkMoon", parseFloat(x)) / 100));
  }  catch (e) {
  return;
}
  that.style.display = confixWrapper("infix", "that.style.display = 'block'", [""], [], "showDarkMoon", 'block');
}
function hideDarkMoon() {
  confixWrapper("functionCall", "dg('darkMoon')", ["darkMoon"], ['darkMoon'], "hideDarkMoon", dg('darkMoon')).style.display = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('darkMoon')\", [\"darkMoon\"], ['darkMoon'], \"hideDarkMoon\", dg('darkMoon')).style.display = 'none'", [""], [], "hideDarkMoon", 'none');
}
function isDivVisible(x) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dg(x)\", [\"x\"], [x], \"isDivVisible\", dg(x)).style.display != 'none');", [""], [], "isDivVisible", (confixWrapper("functionCall", "dg(x)", ["x"], [x], "isDivVisible", dg(x)).style.display != 'none'));
}
function DontHideHelp() {
  dont_help = confixWrapper("infix", "dont_help = 1", [""], [], "DontHideHelp", 1);
  dont_cp = confixWrapper("infix", "dont_cp = 1", [""], [], "DontHideHelp", 1);
}
function DontHideCP() {
  dont_cp = confixWrapper("infix", "dont_cp = 1", [""], [], "DontHideCP", 1);
}
function DontHideAddImg() {
  dont_addimg = confixWrapper("infix", "dont_addimg = 1", [""], [], "DontHideAddImg", 1);
  dont_editpart = confixWrapper("infix", "dont_editpart = 1", [""], [], "DontHideAddImg", 1);
}
function DontHideDrama() {
  dont_drama = confixWrapper("infix", "dont_drama = 1", [""], [], "DontHideDrama", 1);
}
function DontHideKines() {
  dont_kines = confixWrapper("infix", "dont_kines = 1", [""], [], "DontHideKines", 1);
}
function DontHideEditPart() {
  dont_editpart = confixWrapper("infix", "dont_editpart = 1", [""], [], "DontHideEditPart", 1);
}
function HideAll(force) {
  if (confixWrapper("condition", "!force || force == ''", [""], [], "HideAll", !force || force == '')) 
  force = confixWrapper("infix", "force = false", [""], [], "HideAll", false);
  if (confixWrapper("condition", "force || !dont_help", [""], [], "HideAll", force || !dont_help)) 
  confixWrapper("functionCall", "HideHelp()", [], [], "HideAll", HideHelp());
  if (confixWrapper("condition", "force || !dont_cp", [""], [], "HideAll", force || !dont_cp)) 
  confixWrapper("functionCall", "HideCP()", [], [], "HideAll", HideCP());
  if (confixWrapper("condition", "force", [""], [], "HideAll", force)) 
  {
    confixWrapper("functionCall", "HideAddImage()", [], [], "HideAll", HideAddImage());
    confixWrapper("functionCall", "HidePsycHodrama()", [], [], "HideAll", HidePsycHodrama());
    confixWrapper("functionCall", "HideEditPartBox()", [], [], "HideAll", HideEditPartBox());
    confixWrapper("functionCall", "HidePsycHokinesis()", [], [], "HideAll", HidePsycHokinesis());
  }
  dont_help = confixWrapper("infix", "dont_help = 0", [""], [], "HideAll", 0);
  dont_cp = confixWrapper("infix", "dont_cp = 0", [""], [], "HideAll", 0);
  dont_addimg = confixWrapper("infix", "dont_addimg = 0", [""], [], "HideAll", 0);
  dont_drama = confixWrapper("infix", "dont_drama = 0", [""], [], "HideAll", 0);
  dont_kines = confixWrapper("infix", "dont_kines = 0", [""], [], "HideAll", 0);
  dont_editpart = confixWrapper("infix", "dont_editpart = 0", [""], [], "HideAll", 0);
}
function preloadImgs() {
  var d = confixWrapper("initvar", "var d = document", [""], [], "preloadImgs", document), a = confixWrapper("initvar", "var a = arguments", [""], [], "preloadImgs", arguments);
  if (confixWrapper("condition", "!d.pld_imgs", [""], [], "preloadImgs", !d.pld_imgs)) 
  d.pld_imgs = confixWrapper("infix", "d.pld_imgs = new Array()", [""], [], "preloadImgs", new Array());
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "preloadImgs", 0); confixWrapper("loopCondition", "i < a.length", ["i", "a"], [i, a], "preloadImgs", i < a.length); i++) 
    {
      d.pld_imgs[i] = confixWrapper("infix", "d.pld_imgs[i] = new Image()", [""], [], "preloadImgs", new Image());
      d.pld_imgs[i].src = confixWrapper("infix", "d.pld_imgs[i].src = a[i]", [""], [], "preloadImgs", a[i]);
    }
}
function hhh(x) {
  confixWrapper("functionCall", "deBugify(x.id)", ["x.id"], [x.id], "hhh", deBugify(x.id));
}
function DPFocusOn() {
  dont_page_focus = confixWrapper("infix", "dont_page_focus = true", [""], [], "DPFocusOn", true);
}
function DPFocusOff() {
  dont_page_focus = confixWrapper("infix", "dont_page_focus = false", [""], [], "DPFocusOff", false);
  confixWrapper("functionCall", "docFocus()", [], [], "DPFocusOff", docFocus());
}
function fixIEFields() {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"fixIEFields\", isIE())", [""], [], "fixIEFields", !confixWrapper("functionCall", "isIE()", [], [], "fixIEFields", isIE()))) 
  return;
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "fixIEFields", global_lang == 'fa')) 
  {
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_PostBodyBg', 'paddingBottom', '9px')", ["IE_Spec_F_PostBodyBg", "paddingBottom", "9px"], ['IE_Spec_F_PostBodyBg', 'paddingBottom', '9px'], "fixIEFields", ChangeByInput('IE_Spec_F_PostBodyBg', 'paddingBottom', '9px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_PostBotBg', 'paddingBottom', '11px')", ["IE_Spec_F_PostBotBg", "paddingBottom", "11px"], ['IE_Spec_F_PostBotBg', 'paddingBottom', '11px'], "fixIEFields", ChangeByInput('IE_Spec_F_PostBotBg', 'paddingBottom', '11px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_PostGlobalSettings', 'paddingBottom', '11px')", ["IE_Spec_F_PostGlobalSettings", "paddingBottom", "11px"], ['IE_Spec_F_PostGlobalSettings', 'paddingBottom', '11px'], "fixIEFields", ChangeByInput('IE_Spec_F_PostGlobalSettings', 'paddingBottom', '11px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_MainColSpacing', 'paddingBottom', '4px')", ["IE_Spec_F_MainColSpacing", "paddingBottom", "4px"], ['IE_Spec_F_MainColSpacing', 'paddingBottom', '4px'], "fixIEFields", ChangeByInput('IE_Spec_F_MainColSpacing', 'paddingBottom', '4px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_SideColSpacing', 'paddingBottom', '4px')", ["IE_Spec_F_SideColSpacing", "paddingBottom", "4px"], ['IE_Spec_F_SideColSpacing', 'paddingBottom', '4px'], "fixIEFields", ChangeByInput('IE_Spec_F_SideColSpacing', 'paddingBottom', '4px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_PostPermLink', 'paddingBottom', '8px')", ["IE_Spec_F_PostPermLink", "paddingBottom", "8px"], ['IE_Spec_F_PostPermLink', 'paddingBottom', '8px'], "fixIEFields", ChangeByInput('IE_Spec_F_PostPermLink', 'paddingBottom', '8px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_PostBody', 'paddingBottom', '4px')", ["IE_Spec_F_PostBody", "paddingBottom", "4px"], ['IE_Spec_F_PostBody', 'paddingBottom', '4px'], "fixIEFields", ChangeByInput('IE_Spec_F_PostBody', 'paddingBottom', '4px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_PostTitle', 'paddingBottom', '4px')", ["IE_Spec_F_PostTitle", "paddingBottom", "4px"], ['IE_Spec_F_PostTitle', 'paddingBottom', '4px'], "fixIEFields", ChangeByInput('IE_Spec_F_PostTitle', 'paddingBottom', '4px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_F_HeaderFont', 'paddingBottom', '8px')", ["IE_Spec_F_HeaderFont", "paddingBottom", "8px"], ['IE_Spec_F_HeaderFont', 'paddingBottom', '8px'], "fixIEFields", ChangeByInput('IE_Spec_F_HeaderFont', 'paddingBottom', '8px'));
    confixWrapper("functionCall", "ChangeByInput('IE_spec_titleText', 'paddingBottom', '6px')", ["IE_spec_titleText", "paddingBottom", "6px"], ['IE_spec_titleText', 'paddingBottom', '6px'], "fixIEFields", ChangeByInput('IE_spec_titleText', 'paddingBottom', '6px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_drama', 'marginTop', '5px')", ["IE_Spec_drama", "marginTop", "5px"], ['IE_Spec_drama', 'marginTop', '5px'], "fixIEFields", ChangeByInput('IE_Spec_drama', 'marginTop', '5px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_kines', 'marginTop', '5px')", ["IE_Spec_kines", "marginTop", "5px"], ['IE_Spec_kines', 'marginTop', '5px'], "fixIEFields", ChangeByInput('IE_Spec_kines', 'marginTop', '5px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_kines', 'paddingBottom', '9px')", ["IE_Spec_kines", "paddingBottom", "9px"], ['IE_Spec_kines', 'paddingBottom', '9px'], "fixIEFields", ChangeByInput('IE_Spec_kines', 'paddingBottom', '9px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_drama', 'paddingBottom', '10px')", ["IE_Spec_drama", "paddingBottom", "10px"], ['IE_Spec_drama', 'paddingBottom', '10px'], "fixIEFields", ChangeByInput('IE_Spec_drama', 'paddingBottom', '10px'));
  } else {
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_drama', 'lineHeight', '160%')", ["IE_Spec_drama", "lineHeight", "160%"], ['IE_Spec_drama', 'lineHeight', '160%'], "fixIEFields", ChangeByInput('IE_Spec_drama', 'lineHeight', '160%'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_kines', 'lineHeight', '160%')", ["IE_Spec_kines", "lineHeight", "160%"], ['IE_Spec_kines', 'lineHeight', '160%'], "fixIEFields", ChangeByInput('IE_Spec_kines', 'lineHeight', '160%'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_drama', 'marginTop', '5px')", ["IE_Spec_drama", "marginTop", "5px"], ['IE_Spec_drama', 'marginTop', '5px'], "fixIEFields", ChangeByInput('IE_Spec_drama', 'marginTop', '5px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_kines', 'marginTop', '6px')", ["IE_Spec_kines", "marginTop", "6px"], ['IE_Spec_kines', 'marginTop', '6px'], "fixIEFields", ChangeByInput('IE_Spec_kines', 'marginTop', '6px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_drama', 'paddingBottom', '7px')", ["IE_Spec_drama", "paddingBottom", "7px"], ['IE_Spec_drama', 'paddingBottom', '7px'], "fixIEFields", ChangeByInput('IE_Spec_drama', 'paddingBottom', '7px'));
    confixWrapper("functionCall", "ChangeByInput('IE_spec_titleText', 'paddingBottom', '5px')", ["IE_spec_titleText", "paddingBottom", "5px"], ['IE_spec_titleText', 'paddingBottom', '5px'], "fixIEFields", ChangeByInput('IE_spec_titleText', 'paddingBottom', '5px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_PostVP', 'marginTop', '0px')", ["IE_Spec_PostVP", "marginTop", "0px"], ['IE_Spec_PostVP', 'marginTop', '0px'], "fixIEFields", ChangeByInput('IE_Spec_PostVP', 'marginTop', '0px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_PostVP', 'paddingBottom', '5px')", ["IE_Spec_PostVP", "paddingBottom", "5px"], ['IE_Spec_PostVP', 'paddingBottom', '5px'], "fixIEFields", ChangeByInput('IE_Spec_PostVP', 'paddingBottom', '5px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_PostHP', 'marginTop', '0px')", ["IE_Spec_PostHP", "marginTop", "0px"], ['IE_Spec_PostHP', 'marginTop', '0px'], "fixIEFields", ChangeByInput('IE_Spec_PostHP', 'marginTop', '0px'));
    confixWrapper("functionCall", "ChangeByInput('IE_Spec_PostVP', 'paddingTop', '0px')", ["IE_Spec_PostVP", "paddingTop", "0px"], ['IE_Spec_PostVP', 'paddingTop', '0px'], "fixIEFields", ChangeByInput('IE_Spec_PostVP', 'paddingTop', '0px'));
  }
}
function EXT_encodeTxt(s) {
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"escape(s)\", [\"s\"], [s], \"EXT_encodeTxt\", escape(s))", [""], [], "EXT_encodeTxt", confixWrapper("functionCall", "escape(s)", ["s"], [s], "EXT_encodeTxt", escape(s)));
  var j, i, k, l, t;
  for (j = confixWrapper("infix", "j = 0", [""], [], "EXT_encodeTxt", 0); confixWrapper("loopCondition", "j < encArr.length", ["j", "encArr"], [j, encArr], "EXT_encodeTxt", j < encArr.length); j++) 
    {
      k = confixWrapper("infix", "k = encArr[j].length", [""], [], "EXT_encodeTxt", encArr[j].length);
      l = confixWrapper("infix", "l = encArr[j]", [""], [], "EXT_encodeTxt", encArr[j]);
      sym = confixWrapper("infix", "sym = encSym[j]", [""], [], "EXT_encodeTxt", encSym[j]);
      t = confixWrapper("infix", "t = ''", [""], [], "EXT_encodeTxt", '');
      for (i = confixWrapper("infix", "i = 0", [""], [], "EXT_encodeTxt", 0); confixWrapper("loopCondition", "i < s.length - k", ["i", "s", "1"], [i, s, 1], "EXT_encodeTxt", i < s.length - k); i++) 
        {
          if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(i, i + k)\", [\"i\", \"i + k\"], [i, i + k], \"EXT_encodeTxt\", s.substring(i, i + k)) == l", [""], [], "EXT_encodeTxt", confixWrapper("functionCall", "s.substring(i, i + k)", ["i", "i + k"], [i, i + k], "EXT_encodeTxt", s.substring(i, i + k)) == l)) 
          s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"EXT_encodeTxt\", s.substring(0, i)) + sym + s.substring(i + k, s.length)", [""], [], "EXT_encodeTxt", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "EXT_encodeTxt", s.substring(0, i)) + sym + s.substring(i + k, s.length));
        }
    }
  return confixWrapper("return", "return s;", [""], [], "EXT_encodeTxt", s);
}
function EXT_decodeTxt(s) {
  var d1 = confixWrapper("initvar", "var d1 = new Date()", [""], [], "EXT_decodeTxt", new Date());
  var sym = confixWrapper("initvar", "var sym = ''", [""], [], "EXT_decodeTxt", '');
  for (var j = confixWrapper("initvar", "var j = encArr.length - 1", [""], [], "EXT_decodeTxt", encArr.length - 1); confixWrapper("loopCondition", "j >= 0", ["j"], [j], "EXT_decodeTxt", j >= 0); j--) 
    {
      sym = confixWrapper("infix", "sym = encSym[j]", [""], [], "EXT_decodeTxt", encSym[j]);
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "EXT_decodeTxt", 0); confixWrapper("loopCondition", "i < s.length - 1", ["i", "s"], [i, s], "EXT_decodeTxt", i < s.length - 1); i++) 
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(i)\", [\"i\"], [i], \"EXT_decodeTxt\", s.charAt(i)) == sym", [""], [], "EXT_decodeTxt", confixWrapper("functionCall", "s.charAt(i)", ["i"], [i], "EXT_decodeTxt", s.charAt(i)) == sym)) 
        s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"EXT_decodeTxt\", s.substring(0, i)) + encArr[j] + s.substring(i + 1, s.length)", [""], [], "EXT_decodeTxt", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "EXT_decodeTxt", s.substring(0, i)) + encArr[j] + s.substring(i + 1, s.length));
    }
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"unescape(s)\", [\"s\"], [s], \"EXT_decodeTxt\", unescape(s));", [""], [], "EXT_decodeTxt", confixWrapper("functionCall", "unescape(s)", ["s"], [s], "EXT_decodeTxt", unescape(s)));
}
function fixitnow(ss, ss2) {
  if (confixWrapper("condition", "ss2 && (!ss || !ss.length)", [""], [], "fixitnow", ss2 && (!ss || !ss.length))) 
  ss = confixWrapper("infix", "ss = ss2", [""], [], "fixitnow", ss2);
  confixWrapper("functionCall", "preloadImgs('images/upsingle_.gif', 'images/upsingle.gif', 'images/uparrow_.gif', 'images/uparrow.gif', 'images/downsingle_.gif', 'images/downsingle.gif', 'images/downarrow_.gif', 'images/downarrow.gif', 'images/ins.gif', 'images/ins_.gif', 'images/del.gif', 'images/del_.gif', 'images/edt.gif', 'images/edt_.gif', 'images/indic.gif', 'images/indic_.gif', 'images/dotbg.gif', 'images/picker_0.gif', 'images/hsvwheel.png', 'images/img.gif', 'barimg/i_align_center.gif', 'barimg/i_align_justify.gif', 'barimg/i_align_left.gif', 'barimg/i_align_right.gif', 'barimg/i_bold.gif', 'barimg/i_italic.gif', 'barimg/i_ltr.gif', 'barimg/i_rtl.gif', 'barimg/i_underline.gif', 'images/fa_ins_.gif', 'images/fa_ins.gif')", ["images/upsingle_.gif", "images/upsingle.gif", "images/uparrow_.gif", "images/uparrow.gif", "images/downsingle_.gif", "images/downsingle.gif", "images/downarrow_.gif", "images/downarrow.gif", "images/ins.gif", "images/ins_.gif", "images/del.gif", "images/del_.gif", "images/edt.gif", "images/edt_.gif", "images/indic.gif", "images/indic_.gif", "images/dotbg.gif", "images/picker_0.gif", "images/hsvwheel.png", "images/img.gif", "barimg/i_align_center.gif", "barimg/i_align_justify.gif", "barimg/i_align_left.gif", "barimg/i_align_right.gif", "barimg/i_bold.gif", "barimg/i_italic.gif", "barimg/i_ltr.gif", "barimg/i_rtl.gif", "barimg/i_underline.gif", "images/fa_ins_.gif", "images/fa_ins.gif"], ['images/upsingle_.gif', 'images/upsingle.gif', 'images/uparrow_.gif', 'images/uparrow.gif', 'images/downsingle_.gif', 'images/downsingle.gif', 'images/downarrow_.gif', 'images/downarrow.gif', 'images/ins.gif', 'images/ins_.gif', 'images/del.gif', 'images/del_.gif', 'images/edt.gif', 'images/edt_.gif', 'images/indic.gif', 'images/indic_.gif', 'images/dotbg.gif', 'images/picker_0.gif', 'images/hsvwheel.png', 'images/img.gif', 'barimg/i_align_center.gif', 'barimg/i_align_justify.gif', 'barimg/i_align_left.gif', 'barimg/i_align_right.gif', 'barimg/i_bold.gif', 'barimg/i_italic.gif', 'barimg/i_ltr.gif', 'barimg/i_rtl.gif', 'barimg/i_underline.gif', 'images/fa_ins_.gif', 'images/fa_ins.gif'], "fixitnow", preloadImgs('images/upsingle_.gif', 'images/upsingle.gif', 'images/uparrow_.gif', 'images/uparrow.gif', 'images/downsingle_.gif', 'images/downsingle.gif', 'images/downarrow_.gif', 'images/downarrow.gif', 'images/ins.gif', 'images/ins_.gif', 'images/del.gif', 'images/del_.gif', 'images/edt.gif', 'images/edt_.gif', 'images/indic.gif', 'images/indic_.gif', 'images/dotbg.gif', 'images/picker_0.gif', 'images/hsvwheel.png', 'images/img.gif', 'barimg/i_align_center.gif', 'barimg/i_align_justify.gif', 'barimg/i_align_left.gif', 'barimg/i_align_right.gif', 'barimg/i_bold.gif', 'barimg/i_italic.gif', 'barimg/i_ltr.gif', 'barimg/i_rtl.gif', 'barimg/i_underline.gif', 'images/fa_ins_.gif', 'images/fa_ins.gif'));
  global_canWrite = confixWrapper("infix", "global_canWrite = false", [""], [], "fixitnow", false);
  confixWrapper("functionCall", "writeCurrentTime(global_lang == 'fa')", ["global_lang == fa"], [global_lang == 'fa'], "fixitnow", writeCurrentTime(global_lang == 'fa'));
  global_canWrite = confixWrapper("infix", "global_canWrite = true", [""], [], "fixitnow", true);
  global_gotResult = confixWrapper("infix", "global_gotResult = false", [""], [], "fixitnow", false);
  confixWrapper("functionCall", "doDuty(dg('ChangeViewSimpleEnhanced'))", ["dg(ChangeViewSimpleEnhanced)"], [confixWrapper("functionCall", "dg('ChangeViewSimpleEnhanced')", ["ChangeViewSimpleEnhanced"], ['ChangeViewSimpleEnhanced'], "fixitnow", dg('ChangeViewSimpleEnhanced'))], "fixitnow", doDuty(confixWrapper("functionCall", "dg('ChangeViewSimpleEnhanced')", ["ChangeViewSimpleEnhanced"], ['ChangeViewSimpleEnhanced'], "fixitnow", dg('ChangeViewSimpleEnhanced'))));
  var cook = confixWrapper("initvar", "var cook = confixWrapper(\"functionCall\", \"ReadCookie('PsycHodrama')\", [\"PsycHodrama\"], ['PsycHodrama'], \"fixitnow\", ReadCookie('PsycHodrama'))", [""], [], "fixitnow", confixWrapper("functionCall", "ReadCookie('PsycHodrama')", ["PsycHodrama"], ['PsycHodrama'], "fixitnow", ReadCookie('PsycHodrama')));
  var restoreStr = confixWrapper("initvar", "var restoreStr = 'You have a saved work in the cookies.\n\n Do you want to restore it?\n\nPress OK to restore or Cancel to Dismiss it.'", [""], [], "fixitnow", 'You have a saved work in the cookies.\n\n Do you want to restore it?\n\nPress OK to restore or Cancel to Dismiss it.');
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "fixitnow", global_lang == 'fa')) 
  restoreStr = confixWrapper("infix", "restoreStr = confixWrapper(\"functionCall\", \"translateIt('wanna restore?')\", [\"wanna restore?\"], ['wanna restore?'], \"fixitnow\", translateIt('wanna restore?'))", [""], [], "fixitnow", confixWrapper("functionCall", "translateIt('wanna restore?')", ["wanna restore?"], ['wanna restore?'], "fixitnow", translateIt('wanna restore?')));
  if (confixWrapper("condition", "ss && ss.length", [""], [], "fixitnow", ss && ss.length)) 
  confixWrapper("functionCall", "ReadPsycHodrama(ss)", ["ss"], [ss], "fixitnow", ReadPsycHodrama(ss)); else if (confixWrapper("condition", "cook && confixWrapper(\"functionCall\", \"confirm(restoreStr)\", [\"restoreStr\"], [restoreStr], \"fixitnow\", confirm(restoreStr))", [""], [], "fixitnow", cook && confixWrapper("functionCall", "confirm(restoreStr)", ["restoreStr"], [restoreStr], "fixitnow", confirm(restoreStr)))) 
  {
    if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"ReadPsycHodrama(cook)\", [\"cook\"], [cook], \"fixitnow\", ReadPsycHodrama(cook))", [""], [], "fixitnow", !confixWrapper("functionCall", "ReadPsycHodrama(cook)", ["cook"], [cook], "fixitnow", ReadPsycHodrama(cook)))) 
    {
      confixWrapper("functionCall", "ExpirePsycHodramaCookie()", [], [], "fixitnow", ExpirePsycHodramaCookie());
      confixWrapper("functionCall", "TakeEffectAll()", [], [], "fixitnow", TakeEffectAll());
    }
  } else confixWrapper("functionCall", "TakeEffectAll()", [], [], "fixitnow", TakeEffectAll());
  global_didSomething = confixWrapper("infix", "global_didSomething = false", [""], [], "fixitnow", false);
  confixWrapper("functionCall", "fixIEFields()", [], [], "fixitnow", fixIEFields());
  var objs = confixWrapper("initvar", "var objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('select')\", [\"select\"], ['select'], \"fixitnow\", document.getElementsByTagName('select'))", [""], [], "fixitnow", confixWrapper("functionCall", "document.getElementsByTagName('select')", ["select"], ['select'], "fixitnow", document.getElementsByTagName('select')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "fixitnow", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "fixitnow", i < objs.length); i++) 
    {
      objs[i].onfocus = confixWrapper("infix", "objs[i].onfocus = DPFocusOn", [""], [], "fixitnow", DPFocusOn);
      objs[i].onblur = confixWrapper("infix", "objs[i].onblur = DPFocusOff", [""], [], "fixitnow", DPFocusOff);
    }
}
function alertPathedHide() {
  confixWrapper("functionCall", "TogglePsychoeds()", [], [], "alertPathedHide", TogglePsychoeds());
}
function getGCW() {
  return confixWrapper("return", "return global_canWrite;", [""], [], "getGCW", global_canWrite);
}
function dg(s) {
  if (confixWrapper("condition", "s == 'body'", [""], [], "dg", s == 'body')) 
  return confixWrapper("return", "return document.body;", [""], [], "dg", document.body);
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"document.getElementById(s)\", [\"s\"], [s], \"dg\", document.getElementById(s));", [""], [], "dg", confixWrapper("functionCall", "document.getElementById(s)", ["s"], [s], "dg", document.getElementById(s)));
}
function SelRadio(wut, flip) {
  if (confixWrapper("condition", "flip == true && confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"SelRadio\", dg(wut)).checked == true", [""], [], "SelRadio", flip == true && confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "SelRadio", dg(wut)).checked == true)) 
  confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "SelRadio", dg(wut)).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"SelRadio\", dg(wut)).checked = false", [""], [], "SelRadio", false); else confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "SelRadio", dg(wut)).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"SelRadio\", dg(wut)).checked = true", [""], [], "SelRadio", true);
  confixWrapper("functionCall", "doDuty(dg(wut))", ["dg(wut)"], [confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "SelRadio", dg(wut))], "SelRadio", doDuty(confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "SelRadio", dg(wut))));
}
function SwitchFloat(s, w, e, d) {
  var theStyle = confixWrapper("initvar", "var theStyle = confixWrapper(\"functionCall\", \"dg(s)\", [\"s\"], [s], \"SwitchFloat\", dg(s)).style", [""], [], "SwitchFloat", confixWrapper("functionCall", "dg(s)", ["s"], [s], "SwitchFloat", dg(s)).style), temp;
  if (confixWrapper("condition", "theStyle.cssFloat", [""], [], "SwitchFloat", theStyle.cssFloat)) 
  theStyle.cssFloat = confixWrapper("infix", "theStyle.cssFloat = (w) ? 'left' : 'right'", [""], [], "SwitchFloat", (w) ? 'left' : 'right'); else theStyle.styleFloat = confixWrapper("infix", "theStyle.styleFloat = (w) ? 'left' : 'right'", [""], [], "SwitchFloat", (w) ? 'left' : 'right');
  if (confixWrapper("condition", "e", [""], [], "SwitchFloat", e)) 
  {
    theStyle.textAlign = confixWrapper("infix", "theStyle.textAlign = e", [""], [], "SwitchFloat", e);
    temp = confixWrapper("infix", "temp = s + 'AlignEr' + confixWrapper(\"functionCall\", \"e.substring(0, 1).toUpperCase()\", [], [], \"SwitchFloat\", confixWrapper(\"functionCall\", \"e.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"SwitchFloat\", e.substring(0, 1)).toUpperCase()) + e.substring(1, e.length)", [""], [], "SwitchFloat", s + 'AlignEr' + confixWrapper("functionCall", "e.substring(0, 1).toUpperCase()", [], [], "SwitchFloat", confixWrapper("functionCall", "e.substring(0, 1)", ["0", "1"], [0, 1], "SwitchFloat", e.substring(0, 1)).toUpperCase()) + e.substring(1, e.length));
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg(temp)\", [\"temp\"], [temp], \"SwitchFloat\", dg(temp))", [""], [], "SwitchFloat", confixWrapper("functionCall", "dg(temp)", ["temp"], [temp], "SwitchFloat", dg(temp)))) 
    {
      confixWrapper("functionCall", "dg(temp)", ["temp"], [temp], "SwitchFloat", dg(temp)).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(temp)\", [\"temp\"], [temp], \"SwitchFloat\", dg(temp)).checked = true", [""], [], "SwitchFloat", true);
      confixWrapper("functionCall", "doDuty(temp)", ["temp"], [temp], "SwitchFloat", doDuty(temp));
    }
  }
  if (confixWrapper("condition", "d", [""], [], "SwitchFloat", d)) 
  {
    theStyle.direction = confixWrapper("infix", "theStyle.direction = d", [""], [], "SwitchFloat", d);
    temp = confixWrapper("infix", "temp = s + 'DirectionIs' + confixWrapper(\"functionCall\", \"d.toUpperCase()\", [], [], \"SwitchFloat\", d.toUpperCase()) + 'Er'", [""], [], "SwitchFloat", s + 'DirectionIs' + confixWrapper("functionCall", "d.toUpperCase()", [], [], "SwitchFloat", d.toUpperCase()) + 'Er');
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg(temp)\", [\"temp\"], [temp], \"SwitchFloat\", dg(temp))", [""], [], "SwitchFloat", confixWrapper("functionCall", "dg(temp)", ["temp"], [temp], "SwitchFloat", dg(temp)))) 
    {
      confixWrapper("functionCall", "dg(temp)", ["temp"], [temp], "SwitchFloat", dg(temp)).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(temp)\", [\"temp\"], [temp], \"SwitchFloat\", dg(temp)).checked = true", [""], [], "SwitchFloat", true);
      confixWrapper("functionCall", "doDuty(temp)", ["temp"], [temp], "SwitchFloat", doDuty(temp));
    }
  }
  var temp = confixWrapper("initvar", "var temp = theStyle.marginRight", [""], [], "SwitchFloat", theStyle.marginRight);
  theStyle.marginRight = confixWrapper("infix", "theStyle.marginRight = theStyle.marginLeft", [""], [], "SwitchFloat", theStyle.marginLeft);
  theStyle.marginLeft = confixWrapper("infix", "theStyle.marginLeft = temp", [""], [], "SwitchFloat", temp);
  var temp = confixWrapper("initvar", "var temp = theStyle.paddingRight", [""], [], "SwitchFloat", theStyle.paddingRight);
  theStyle.paddingRight = confixWrapper("infix", "theStyle.paddingRight = theStyle.paddingLeft", [""], [], "SwitchFloat", theStyle.paddingLeft);
  theStyle.paddingLeft = confixWrapper("infix", "theStyle.paddingLeft = temp", [""], [], "SwitchFloat", temp);
}
function ToggleTextVal(t, v1, v2, wut) {
  if (confixWrapper("condition", "wut == 'value'", [""], [], "ToggleTextVal", wut == 'value')) 
  t.value = confixWrapper("infix", "t.value = (t.value == v1) ? v2 : v1", ["(t == v1) ? v2 : v1"], [(t == v1) ? v2 : v1], "ToggleTextVal", (t.value == v1) ? v2 : v1);
  if (confixWrapper("condition", "wut == 'borderBottomColor'", [""], [], "ToggleTextVal", wut == 'borderBottomColor')) 
  t.parentNode.style.borderBottomColor = confixWrapper("infix", "t.parentNode.style.borderBottomColor = (confixWrapper(\"functionCall\", \"t.innerHTML.charAt(0)\", [\"0\"], [0], \"ToggleTextVal\", t.innerHTML.charAt(0)) == 'S' || confixWrapper(\"functionCall\", \"t.innerHTML.charAt(0)\", [\"0\"], [0], \"ToggleTextVal\", t.innerHTML.charAt(0)) == translateIt('noon')) ? v2 : v1", ["(confixWrapper(\"functionCall\", \"t.charAt(0)\", [\"0\"], [0], \"ToggleTextVal\", t.charAt(0)) == 'S' || confixWrapper(\"functionCall\", \"t.charAt(0)\", [\"0\"], [0], \"ToggleTextVal\", t.charAt(0)) == translateIt('noon')) ? v2 : v1"], [(confixWrapper("functionCall", "t.charAt(0)", ["0"], [0], "ToggleTextVal", t.charAt(0)) == 'S' || confixWrapper("functionCall", "t.charAt(0)", ["0"], [0], "ToggleTextVal", t.charAt(0)) == translateIt('noon')) ? v2 : v1], "ToggleTextVal", (confixWrapper("functionCall", "t.innerHTML.charAt(0)", ["0"], [0], "ToggleTextVal", t.innerHTML.charAt(0)) == 'S' || confixWrapper("functionCall", "t.innerHTML.charAt(0)", ["0"], [0], "ToggleTextVal", t.innerHTML.charAt(0)) == translateIt('noon')) ? v2 : v1);
  if (confixWrapper("condition", "wut == 'marginTop'", [""], [], "ToggleTextVal", wut == 'marginTop')) 
  t.style.marginTop = confixWrapper("infix", "t.style.marginTop = (t.style.marginTop == v1) ? v2 : v1", [""], [], "ToggleTextVal", (t.style.marginTop == v1) ? v2 : v1);
  if (confixWrapper("condition", "wut == 'position'", [""], [], "ToggleTextVal", wut == 'position')) 
  t.style.position = confixWrapper("infix", "t.style.position = (t.style.position == v1) ? v2 : v1", [""], [], "ToggleTextVal", (t.style.position == v1) ? v2 : v1);
  if (confixWrapper("condition", "wut == 'top'", [""], [], "ToggleTextVal", wut == 'top')) 
  t.style.top = confixWrapper("infix", "t.style.top = (t.style.top == v1) ? v2 : v1", [""], [], "ToggleTextVal", (t.style.top == v1) ? v2 : v1);
}
function ToggleText(str, v1, v2) {
  if (confixWrapper("condition", "!v2", [""], [], "ToggleText", !v2)) 
  {
    if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ToggleText", global_lang == 'fa')) 
    {
      v2 = confixWrapper("infix", "v2 = confixWrapper(\"functionCall\", \"translateIt('PenhaanSaazi')\", [\"PenhaanSaazi\"], ['PenhaanSaazi'], \"ToggleText\", translateIt('PenhaanSaazi')) + v1", [""], [], "ToggleText", confixWrapper("functionCall", "translateIt('PenhaanSaazi')", ["PenhaanSaazi"], ['PenhaanSaazi'], "ToggleText", translateIt('PenhaanSaazi')) + v1);
      v1 = confixWrapper("infix", "v1 = confixWrapper(\"functionCall\", \"translateIt('Namaayesh')\", [\"Namaayesh\"], ['Namaayesh'], \"ToggleText\", translateIt('Namaayesh')) + v1", [""], [], "ToggleText", confixWrapper("functionCall", "translateIt('Namaayesh')", ["Namaayesh"], ['Namaayesh'], "ToggleText", translateIt('Namaayesh')) + v1);
    } else {
      v2 = confixWrapper("infix", "v2 = 'Hide&nbsp; ' + v1", [""], [], "ToggleText", 'Hide&nbsp; ' + v1);
      v1 = confixWrapper("infix", "v1 = 'Show ' + v1", [""], [], "ToggleText", 'Show ' + v1);
    }
  }
  if (confixWrapper("condition", "!str.innerHTML", [""], [], "ToggleText", !str.innerHTML)) 
  str = confixWrapper("infix", "str = confixWrapper(\"functionCall\", \"dg(str)\", [\"str\"], [str], \"ToggleText\", dg(str))", [""], [], "ToggleText", confixWrapper("functionCall", "dg(str)", ["str"], [str], "ToggleText", dg(str)));
  str.innerHTML = confixWrapper("infix", "str.innerHTML = (confixWrapper(\"functionCall\", \"str.innerHTML.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"ToggleText\", str.innerHTML.substring(0, 1)) == v1.substring(0, 1)) ? v2 : v1", ["(confixWrapper(\"functionCall\", \"str.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"ToggleText\", str.substring(0, 1)) == v1.substring(0, 1)) ? v2 : v1"], [(confixWrapper("functionCall", "str.substring(0, 1)", ["0", "1"], [0, 1], "ToggleText", str.substring(0, 1)) == v1.substring(0, 1)) ? v2 : v1], "ToggleText", (confixWrapper("functionCall", "str.innerHTML.substring(0, 1)", ["0", "1"], [0, 1], "ToggleText", str.innerHTML.substring(0, 1)) == v1.substring(0, 1)) ? v2 : v1);
}
function SetText(str, v1) {
  if (confixWrapper("condition", "!str.style", [""], [], "SetText", !str.style)) 
  str = confixWrapper("infix", "str = confixWrapper(\"functionCall\", \"dg(str)\", [\"str\"], [str], \"SetText\", dg(str))", [""], [], "SetText", confixWrapper("functionCall", "dg(str)", ["str"], [str], "SetText", dg(str)));
  if (confixWrapper("condition", "v1 && v1.length", [""], [], "SetText", v1 && v1.length)) 
  str.innerHTML = confixWrapper("infix", "str.innerHTML = v1", [""], [], "SetText", v1); else str.innerHTML = confixWrapper("infix", "str.innerHTML = ' '", [""], [], "SetText", ' ');
}
function SetHeaderImage(wut) {
  if (confixWrapper("condition", "wut && wut.length", [""], [], "SetHeaderImage", wut && wut.length)) 
  confixWrapper("functionCall", "SetText('HeaderPartImage', '<img src=\"' + wut + '\" />')", ["HeaderPartImage", "<img src= + wut +  />"], ['HeaderPartImage', '<img src="' + wut + '" />'], "SetHeaderImage", SetText('HeaderPartImage', '<img src="' + wut + '" />')); else confixWrapper("functionCall", "SetText('HeaderPartImage')", ["HeaderPartImage"], ['HeaderPartImage'], "SetHeaderImage", SetText('HeaderPartImage'));
}
function ToggleObjectDisplay(obj, str) {
  if (confixWrapper("condition", "obj.display == null", [""], [], "ToggleObjectDisplay", obj.display == null)) 
  obj = confixWrapper("infix", "obj = confixWrapper(\"functionCall\", \"dg(obj)\", [\"obj\"], [obj], \"ToggleObjectDisplay\", dg(obj)).style", [""], [], "ToggleObjectDisplay", confixWrapper("functionCall", "dg(obj)", ["obj"], [obj], "ToggleObjectDisplay", dg(obj)).style);
  if (confixWrapper("condition", "!str", [""], [], "ToggleObjectDisplay", !str)) 
  str = confixWrapper("infix", "str = 'block'", [""], [], "ToggleObjectDisplay", 'block');
  if (confixWrapper("condition", "obj.display == 'none'", [""], [], "ToggleObjectDisplay", obj.display == 'none')) 
  obj.display = confixWrapper("infix", "obj.display = str", [""], [], "ToggleObjectDisplay", str); else obj.display = confixWrapper("infix", "obj.display = 'none'", [""], [], "ToggleObjectDisplay", 'none');
}
function SwitchDisplay(obj, pos, str) {
  if (confixWrapper("condition", "!obj.style", [""], [], "SwitchDisplay", !obj.style)) 
  obj = confixWrapper("infix", "obj = confixWrapper(\"functionCall\", \"dg(obj)\", [\"obj\"], [obj], \"SwitchDisplay\", dg(obj))", [""], [], "SwitchDisplay", confixWrapper("functionCall", "dg(obj)", ["obj"], [obj], "SwitchDisplay", dg(obj)));
  if (confixWrapper("condition", "!obj", [""], [], "SwitchDisplay", !obj)) 
  return;
  if (confixWrapper("condition", "!str", [""], [], "SwitchDisplay", !str)) 
  str = confixWrapper("infix", "str = 'block'", [""], [], "SwitchDisplay", 'block');
  if (confixWrapper("condition", "!pos", [""], [], "SwitchDisplay", !pos)) 
  str = confixWrapper("infix", "str = 'none'", [""], [], "SwitchDisplay", 'none');
  if (confixWrapper("condition", "obj.style.display != str", [""], [], "SwitchDisplay", obj.style.display != str)) 
  obj.style.display = confixWrapper("infix", "obj.style.display = str", [""], [], "SwitchDisplay", str);
}
function ToggleDisplay(obj, ref, str, wut, str2) {
  if (confixWrapper("condition", "!obj.style", [""], [], "ToggleDisplay", !obj.style)) 
  obj = confixWrapper("infix", "obj = confixWrapper(\"functionCall\", \"dg(obj)\", [\"obj\"], [obj], \"ToggleDisplay\", dg(obj))", [""], [], "ToggleDisplay", confixWrapper("functionCall", "dg(obj)", ["obj"], [obj], "ToggleDisplay", dg(obj)));
  confixWrapper("functionCall", "ToggleObjectDisplay(obj.style, wut)", ["obj.style", "wut"], [obj.style, wut], "ToggleDisplay", ToggleObjectDisplay(obj.style, wut));
  if (confixWrapper("condition", "ref", [""], [], "ToggleDisplay", ref)) 
  confixWrapper("functionCall", "ToggleText(ref, str, str2)", ["ref", "str", "str2"], [ref, str, str2], "ToggleDisplay", ToggleText(ref, str, str2));
}
function disableEditLink(side, part, num, linkie) {
  confixWrapper("functionCall", "dg('_' + side + '_LinkUrl_' + part + '_' + num)", ["_ + side + _LinkUrl_ + part + _ + num"], ['_' + side + '_LinkUrl_' + part + '_' + num], "disableEditLink", dg('_' + side + '_LinkUrl_' + part + '_' + num)).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + side + '_LinkUrl_' + part + '_' + num)\", [\"_ + side + _LinkUrl_ + part + _ + num\"], ['_' + side + '_LinkUrl_' + part + '_' + num], \"disableEditLink\", dg('_' + side + '_LinkUrl_' + part + '_' + num)).disabled = true", [""], [], "disableEditLink", true);
  confixWrapper("functionCall", "dg('_' + side + '_LinkTtl_' + part + '_' + num)", ["_ + side + _LinkTtl_ + part + _ + num"], ['_' + side + '_LinkTtl_' + part + '_' + num], "disableEditLink", dg('_' + side + '_LinkTtl_' + part + '_' + num)).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + side + '_LinkTtl_' + part + '_' + num)\", [\"_ + side + _LinkTtl_ + part + _ + num\"], ['_' + side + '_LinkTtl_' + part + '_' + num], \"disableEditLink\", dg('_' + side + '_LinkTtl_' + part + '_' + num)).disabled = true", [""], [], "disableEditLink", true);
  confixWrapper("functionCall", "SetValAndDo('_' + side + '_LinkUrl_' + part + '_' + num, linkie ? ' ' : '', true)", ["_ + side + _LinkUrl_ + part + _ + num", "linkie ?   : ", "true"], ['_' + side + '_LinkUrl_' + part + '_' + num, linkie ? ' ' : '', true], "disableEditLink", SetValAndDo('_' + side + '_LinkUrl_' + part + '_' + num, linkie ? ' ' : '', true));
  confixWrapper("functionCall", "SetValAndDo('_' + side + '_LinkTtl_' + part + '_' + num, '', true)", ["_ + side + _LinkTtl_ + part + _ + num", "", "true"], ['_' + side + '_LinkTtl_' + part + '_' + num, '', true], "disableEditLink", SetValAndDo('_' + side + '_LinkTtl_' + part + '_' + num, '', true));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'backgroundColor', '#EEE')", ["_ + side + _LinkUrl_ + part + _ + num", "backgroundColor", "#EEE"], ['_' + side + '_LinkUrl_' + part + '_' + num, 'backgroundColor', '#EEE'], "disableEditLink", ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'backgroundColor', '#EEE'));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'borderColor', '#E0E0E0')", ["_ + side + _LinkUrl_ + part + _ + num", "borderColor", "#E0E0E0"], ['_' + side + '_LinkUrl_' + part + '_' + num, 'borderColor', '#E0E0E0'], "disableEditLink", ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'borderColor', '#E0E0E0'));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'backgroundColor', '#EEE')", ["_ + side + _LinkTtl_ + part + _ + num", "backgroundColor", "#EEE"], ['_' + side + '_LinkTtl_' + part + '_' + num, 'backgroundColor', '#EEE'], "disableEditLink", ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'backgroundColor', '#EEE'));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'borderColor', '#E0E0E0')", ["_ + side + _LinkTtl_ + part + _ + num", "borderColor", "#E0E0E0"], ['_' + side + '_LinkTtl_' + part + '_' + num, 'borderColor', '#E0E0E0'], "disableEditLink", ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'borderColor', '#E0E0E0'));
}
function enableEditLink(side, part, num) {
  confixWrapper("functionCall", "dg('_' + side + '_LinkUrl_' + part + '_' + num)", ["_ + side + _LinkUrl_ + part + _ + num"], ['_' + side + '_LinkUrl_' + part + '_' + num], "enableEditLink", dg('_' + side + '_LinkUrl_' + part + '_' + num)).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + side + '_LinkUrl_' + part + '_' + num)\", [\"_ + side + _LinkUrl_ + part + _ + num\"], ['_' + side + '_LinkUrl_' + part + '_' + num], \"enableEditLink\", dg('_' + side + '_LinkUrl_' + part + '_' + num)).disabled = false", [""], [], "enableEditLink", false);
  confixWrapper("functionCall", "dg('_' + side + '_LinkTtl_' + part + '_' + num)", ["_ + side + _LinkTtl_ + part + _ + num"], ['_' + side + '_LinkTtl_' + part + '_' + num], "enableEditLink", dg('_' + side + '_LinkTtl_' + part + '_' + num)).disabled = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + side + '_LinkTtl_' + part + '_' + num)\", [\"_ + side + _LinkTtl_ + part + _ + num\"], ['_' + side + '_LinkTtl_' + part + '_' + num], \"enableEditLink\", dg('_' + side + '_LinkTtl_' + part + '_' + num)).disabled = false", [""], [], "enableEditLink", false);
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'backgroundColor', '#ECEAE0')", ["_ + side + _LinkUrl_ + part + _ + num", "backgroundColor", "#ECEAE0"], ['_' + side + '_LinkUrl_' + part + '_' + num, 'backgroundColor', '#ECEAE0'], "enableEditLink", ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'backgroundColor', '#ECEAE0'));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'borderColor', '#666')", ["_ + side + _LinkUrl_ + part + _ + num", "borderColor", "#666"], ['_' + side + '_LinkUrl_' + part + '_' + num, 'borderColor', '#666'], "enableEditLink", ChangeByInput('_' + side + '_LinkUrl_' + part + '_' + num, 'borderColor', '#666'));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'backgroundColor', '#ECEAE0')", ["_ + side + _LinkTtl_ + part + _ + num", "backgroundColor", "#ECEAE0"], ['_' + side + '_LinkTtl_' + part + '_' + num, 'backgroundColor', '#ECEAE0'], "enableEditLink", ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'backgroundColor', '#ECEAE0'));
  confixWrapper("functionCall", "ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'borderColor', '#666')", ["_ + side + _LinkTtl_ + part + _ + num", "borderColor", "#666"], ['_' + side + '_LinkTtl_' + part + '_' + num, 'borderColor', '#666'], "enableEditLink", ChangeByInput('_' + side + '_LinkTtl_' + part + '_' + num, 'borderColor', '#666'));
}
function TogglePsychoeds() {
  global_isPathedHide = confixWrapper("infix", "global_isPathedHide = !global_isPathedHide", [""], [], "TogglePsychoeds", !global_isPathedHide);
  var d = confixWrapper("initvar", "var d = (confixWrapper(\"functionCall\", \"dg('ContainerTitleSettings')\", [\"ContainerTitleSettings\"], ['ContainerTitleSettings'], \"TogglePsychoeds\", dg('ContainerTitleSettings')).style.display == 'none')", [""], [], "TogglePsychoeds", (confixWrapper("functionCall", "dg('ContainerTitleSettings')", ["ContainerTitleSettings"], ['ContainerTitleSettings'], "TogglePsychoeds", dg('ContainerTitleSettings')).style.display == 'none'));
  var objs = confixWrapper("initvar", "var objs = new Array()", [""], [], "TogglePsychoeds", new Array());
  objs = confixWrapper("infix", "objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('div')\", [\"div\"], ['div'], \"TogglePsychoeds\", document.getElementsByTagName('div'))", [""], [], "TogglePsychoeds", confixWrapper("functionCall", "document.getElementsByTagName('div')", ["div"], ['div'], "TogglePsychoeds", document.getElementsByTagName('div')));
  for (i = confixWrapper("infix", "i = 0", [""], [], "TogglePsychoeds", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "TogglePsychoeds", i < objs.length); i++) 
    if (confixWrapper("condition", "objs[i].className == 'psychoedContainer' && objs[i].id != 'ContainerBasicSettings' && objs[i].id != 'helpBoxContainer'", [""], [], "TogglePsychoeds", objs[i].className == 'psychoedContainer' && objs[i].id != 'ContainerBasicSettings' && objs[i].id != 'helpBoxContainer')) 
    confixWrapper("functionCall", "ToggleDisplay(objs[i])", ["objs[i]"], [objs[i]], "TogglePsychoeds", ToggleDisplay(objs[i]));
}
function ToggleEnhanceds() {
  global_isMinimized = confixWrapper("infix", "global_isMinimized = !global_isMinimized", [""], [], "ToggleEnhanceds", !global_isMinimized);
  var objs = confixWrapper("initvar", "var objs = new Array()", [""], [], "ToggleEnhanceds", new Array());
  objs = confixWrapper("infix", "objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('div')\", [\"div\"], ['div'], \"ToggleEnhanceds\", document.getElementsByTagName('div'))", [""], [], "ToggleEnhanceds", confixWrapper("functionCall", "document.getElementsByTagName('div')", ["div"], ['div'], "ToggleEnhanceds", document.getElementsByTagName('div')));
  for (i = confixWrapper("infix", "i = 0", [""], [], "ToggleEnhanceds", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "ToggleEnhanceds", i < objs.length); i++) 
    if (confixWrapper("condition", "objs[i].className == 'Enhanced'", [""], [], "ToggleEnhanceds", objs[i].className == 'Enhanced')) 
    confixWrapper("functionCall", "ToggleObjectDisplay(objs[i].style)", ["objs[i].style"], [objs[i].style], "ToggleEnhanceds", ToggleObjectDisplay(objs[i].style));
  objs = confixWrapper("infix", "objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('tr')\", [\"tr\"], ['tr'], \"ToggleEnhanceds\", document.getElementsByTagName('tr'))", [""], [], "ToggleEnhanceds", confixWrapper("functionCall", "document.getElementsByTagName('tr')", ["tr"], ['tr'], "ToggleEnhanceds", document.getElementsByTagName('tr')));
  for (i = confixWrapper("infix", "i = 0", [""], [], "ToggleEnhanceds", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "ToggleEnhanceds", i < objs.length); i++) 
    if (confixWrapper("condition", "objs[i].className == 'Enhanced'", [""], [], "ToggleEnhanceds", objs[i].className == 'Enhanced')) 
    confixWrapper("functionCall", "ToggleObjectDisplay(objs[i].style, (isIE() ? 'inline' : 'table-row'))", ["objs[i].style", "(isIE() ? inline : table-row)"], [objs[i].style, (confixWrapper("functionCall", "isIE()", [], [], "ToggleEnhanceds", isIE()) ? 'inline' : 'table-row')], "ToggleEnhanceds", ToggleObjectDisplay(objs[i].style, (confixWrapper("functionCall", "isIE()", [], [], "ToggleEnhanceds", isIE()) ? 'inline' : 'table-row')));
}
function PushImgBut(wut, how) {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"PushImgBut\", dg(wut))", [""], [], "PushImgBut", !confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "PushImgBut", dg(wut)))) 
  return;
  confixWrapper("functionCall", "ChangeByInput(wut, 'borderColor', how ? 'navy' : '#EEE')", ["wut", "borderColor", "how ? navy : #EEE"], [wut, 'borderColor', how ? 'navy' : '#EEE'], "PushImgBut", ChangeByInput(wut, 'borderColor', how ? 'navy' : '#EEE'));
  confixWrapper("functionCall", "ChangeByInput(wut, 'backgroundColor', how ? '#E6ECF3' : 'transparent')", ["wut", "backgroundColor", "how ? #E6ECF3 : transparent"], [wut, 'backgroundColor', how ? '#E6ECF3' : 'transparent'], "PushImgBut", ChangeByInput(wut, 'backgroundColor', how ? '#E6ECF3' : 'transparent'));
}
function persianify(s) {
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "persianify", 0); confixWrapper("loopCondition", "i < s.length", ["i", "s"], [i, s], "persianify", i < s.length); i++) 
    {
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(i)\", [\"i\"], [i], \"persianify\", s.charAt(i)) == translateIt('Ye arabi')", [""], [], "persianify", confixWrapper("functionCall", "s.charAt(i)", ["i"], [i], "persianify", s.charAt(i)) == translateIt('Ye arabi'))) 
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"persianify\", s.substring(0, i)) + translateIt('Ye farsi') + s.substring(i + 1, s.length)", [""], [], "persianify", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "persianify", s.substring(0, i)) + translateIt('Ye farsi') + s.substring(i + 1, s.length)); else if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(i)\", [\"i\"], [i], \"persianify\", s.charAt(i)) == translateIt('Ke arabi')", [""], [], "persianify", confixWrapper("functionCall", "s.charAt(i)", ["i"], [i], "persianify", s.charAt(i)) == translateIt('Ke arabi'))) 
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"persianify\", s.substring(0, i)) + translateIt('Ke farsi') + s.substring(i + 1, s.length)", [""], [], "persianify", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "persianify", s.substring(0, i)) + translateIt('Ke farsi') + s.substring(i + 1, s.length)); else if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(i)\", [\"i\"], [i], \"persianify\", s.charAt(i)) == translateIt('non joiner')", [""], [], "persianify", confixWrapper("functionCall", "s.charAt(i)", ["i"], [i], "persianify", s.charAt(i)) == translateIt('non joiner'))) 
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"persianify\", s.substring(0, i)) + (' ') + s.substring(i + 1, s.length)", [""], [], "persianify", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "persianify", s.substring(0, i)) + (' ') + s.substring(i + 1, s.length));
    }
  return confixWrapper("return", "return s;", [""], [], "persianify", s);
}
function name2rgb(s) {
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.toLowerCase()\", [], [], \"name2rgb\", s.toLowerCase())", [""], [], "name2rgb", confixWrapper("functionCall", "s.toLowerCase()", [], [], "name2rgb", s.toLowerCase()));
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"persianify(s)\", [\"s\"], [s], \"name2rgb\", persianify(s))", [""], [], "name2rgb", confixWrapper("functionCall", "persianify(s)", ["s"], [s], "name2rgb", persianify(s)));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "name2rgb", 0); confixWrapper("loopCondition", "i < name2rgbArr.length", ["i", "name2rgbArr"], [i, name2rgbArr], "name2rgb", i < name2rgbArr.length); i += 2) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"name2rgbArr[i].toLowerCase()\", [], [], \"name2rgb\", name2rgbArr[i].toLowerCase()) == s", [""], [], "name2rgb", confixWrapper("functionCall", "name2rgbArr[i].toLowerCase()", [], [], "name2rgb", name2rgbArr[i].toLowerCase()) == s)) 
    return confixWrapper("return", "return name2rgbArr[i + 1];", [""], [], "name2rgb", name2rgbArr[i + 1]);
  return confixWrapper("return", "return null;", [""], [], "name2rgb", null);
}
function isColor(s) {
  var re = confixWrapper("initvar", "var re = /^([da-f]{3}|[da-f]{6})$/i", [""], [], "isColor", /^([\da-f]{3}|[\da-f]{6})$/i);
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"re.test(s)\", [\"s\"], [s], \"isColor\", re.test(s)));", [""], [], "isColor", (confixWrapper("functionCall", "re.test(s)", ["s"], [s], "isColor", re.test(s))));
}
function getFatherForECP(prop, obj) {
  if (confixWrapper("condition", "obj == 'body'", [""], [], "getFatherForECP", obj == 'body')) 
  return confixWrapper("return", "return '';", [""], [], "getFatherForECP", '');
  var s = confixWrapper("initvar", "var s = prop + ' of ' + obj", [""], [], "getFatherForECP", prop + ' of ' + obj);
  var t = confixWrapper("initvar", "var t = ''", [""], [], "getFatherForECP", '');
  switch (s) {
    case 'backgroundColor of HeaderPart':
    case 'backgroundColor of MainColumnInner':
    case 'backgroundColor of SideRColumnInner':
      t = confixWrapper("infix", "t = 'WholeBackColorEr'", [""], [], "getFatherForECP", 'WholeBackColorEr');
      break;
    case 'borderColor of HeaderPart':
    case 'color of TitleText':
    case 'color of SubTitleText':
      t = confixWrapper("infix", "t = 'HeaderBackColorEr'", [""], [], "getFatherForECP", 'HeaderBackColorEr');
      break;
    case 'borderColor of MainColumnInner':
    case 'backgroundColor of OnePostTopPart':
    case 'backgroundColor of OnePostMainDiv':
    case 'backgroundColor of OnePostBotPart':
    case 'borderColor of OnePostMainDiv':
    case 'borderColor of PostSepDivInner':
      t = confixWrapper("infix", "t = 'MainColumnsBackColorEr'", [""], [], "getFatherForECP", 'MainColumnsBackColorEr');
      break;
    case 'borderColor of SideRColumnInner':
      t = confixWrapper("infix", "t = 'SideColumnsBackColorEr'", [""], [], "getFatherForECP", 'SideColumnsBackColorEr');
      break;
    case 'borderColor of OnePostTopPart':
    case 'color of OnePostMidPart':
      t = confixWrapper("infix", "t = 'PostBodyBackColorEr'", [""], [], "getFatherForECP", 'PostBodyBackColorEr');
      break;
    case 'color of OnePostTitle':
    case 'color of OnePostDateTop':
      t = confixWrapper("infix", "t = 'OnePostTopBackColorEr'", [""], [], "getFatherForECP", 'OnePostTopBackColorEr');
      break;
    case 'color of OnePostComments':
    case 'color of OnePostPermLink':
      t = confixWrapper("infix", "t = 'OnePostBotBackColorEr'", [""], [], "getFatherForECP", 'OnePostBotBackColorEr');
      break;
    case 'backgroundColor of R_DefaultDiv_0':
    case 'borderColor of R_DefaultDiv_0':
    case 'borderBottomColor of R_PartSepSemiDiv_1':
    case 'backgroundColor of L_DefaultDiv_0':
    case 'borderColor of L_DefaultDiv_0':
    case 'borderBottomColor of L_PartSepSemiDiv_1':
      t = confixWrapper("infix", "t = 'SideColumnsBackColorEr'", [""], [], "getFatherForECP", 'SideColumnsBackColorEr');
      break;
    case 'color of R_Title_0':
    case 'color of R_DefaultDiv_0':
      t = confixWrapper("infix", "t = '_R_DefaultDivBackColorEr'", [""], [], "getFatherForECP", '_R_DefaultDivBackColorEr');
      break;
    case 'color of RSideColorCSS_Link':
      t = confixWrapper("infix", "t = '_R_DefaultDivColorEr'", [""], [], "getFatherForECP", '_R_DefaultDivColorEr');
      break;
    case 'borderColor of R_Title_0':
      t = confixWrapper("infix", "t = '_R_TitleColorEr'", [""], [], "getFatherForECP", '_R_TitleColorEr');
      break;
    case 'color of RSideColorCSS_Hover':
      t = confixWrapper("infix", "t = '_R_LinkColorEr'", [""], [], "getFatherForECP", '_R_LinkColorEr');
      break;
    case 'color of L_Title_0':
    case 'color of L_DefaultDiv_0':
      t = confixWrapper("infix", "t = '_L_DefaultDivBackColorEr'", [""], [], "getFatherForECP", '_L_DefaultDivBackColorEr');
      break;
    case 'color of LSideColorCSS_Link':
      t = confixWrapper("infix", "t = '_L_DefaultDivColorEr'", [""], [], "getFatherForECP", '_L_DefaultDivColorEr');
      break;
    case 'borderColor of L_Title_0':
      t = confixWrapper("infix", "t = '_L_TitleColorEr'", [""], [], "getFatherForECP", '_L_TitleColorEr');
      break;
    case 'color of LSideColorCSS_Hover':
      t = confixWrapper("infix", "t = '_L_LinkColorEr'", [""], [], "getFatherForECP", '_L_LinkColorEr');
      break;
  }
  var ret = confixWrapper("initvar", "var ret = ''", [""], [], "getFatherForECP", '');
  if (confixWrapper("condition", "t", [""], [], "getFatherForECP", t)) 
  {
    var n2r;
    if (confixWrapper("condition", "n2r = confixWrapper(\"functionCall\", \"name2rgb(t)\", [\"t\"], [t], \"getFatherForECP\", name2rgb(t))", [""], [], "getFatherForECP", n2r = confixWrapper("infix", "n2r = confixWrapper(\"functionCall\", \"name2rgb(t)\", [\"t\"], [t], \"getFatherForECP\", name2rgb(t))", [""], [], "getFatherForECP", confixWrapper("functionCall", "name2rgb(t)", ["t"], [t], "getFatherForECP", name2rgb(t))))) 
    ret = confixWrapper("infix", "ret = n2r", [""], [], "getFatherForECP", n2r);
  }
  if (confixWrapper("condition", "ret == 'transparent'", [""], [], "getFatherForECP", ret == 'transparent')) 
  {
    ret = confixWrapper("infix", "ret = confixWrapper(\"functionCall\", \"getFatherForECP('backgroundColor', 'body')\", [\"backgroundColor\", \"body\"], ['backgroundColor', 'body'], \"getFatherForECP\", getFatherForECP('backgroundColor', 'body'))", [""], [], "getFatherForECP", confixWrapper("functionCall", "getFatherForECP('backgroundColor', 'body')", ["backgroundColor", "body"], ['backgroundColor', 'body'], "getFatherForECP", getFatherForECP('backgroundColor', 'body')));
  }
  return confixWrapper("return", "return ret;", [""], [], "getFatherForECP", ret);
}
function TripleColNameToSix(sname) {
  var ret = confixWrapper("initvar", "var ret = sname", [""], [], "TripleColNameToSix", sname);
  if (confixWrapper("condition", "sname.length == 4 && confixWrapper(\"functionCall\", \"sname.charAt(0)\", [\"0\"], [0], \"TripleColNameToSix\", sname.charAt(0)) == '#'", [""], [], "TripleColNameToSix", sname.length == 4 && confixWrapper("functionCall", "sname.charAt(0)", ["0"], [0], "TripleColNameToSix", sname.charAt(0)) == '#')) 
  sname = confixWrapper("infix", "sname = confixWrapper(\"functionCall\", \"sname.substring(1, sname.length)\", [\"1\", \"sname.length\"], [1, sname.length], \"TripleColNameToSix\", sname.substring(1, sname.length))", [""], [], "TripleColNameToSix", confixWrapper("functionCall", "sname.substring(1, sname.length)", ["1", "sname.length"], [1, sname.length], "TripleColNameToSix", sname.substring(1, sname.length)));
  if (confixWrapper("condition", "sname.length == 3 && confixWrapper(\"functionCall\", \"isColor(sname)\", [\"sname\"], [sname], \"TripleColNameToSix\", isColor(sname))", [""], [], "TripleColNameToSix", sname.length == 3 && confixWrapper("functionCall", "isColor(sname)", ["sname"], [sname], "TripleColNameToSix", isColor(sname)))) 
  ret = confixWrapper("infix", "ret = '#' + confixWrapper(\"functionCall\", \"sname.charAt(0)\", [\"0\"], [0], \"TripleColNameToSix\", sname.charAt(0)) + sname.charAt(0) + sname.charAt(1) + sname.charAt(1) + sname.charAt(2) + sname.charAt(2)", [""], [], "TripleColNameToSix", '#' + confixWrapper("functionCall", "sname.charAt(0)", ["0"], [0], "TripleColNameToSix", sname.charAt(0)) + sname.charAt(0) + sname.charAt(1) + sname.charAt(1) + sname.charAt(2) + sname.charAt(2));
  return confixWrapper("return", "return ret;", [""], [], "TripleColNameToSix", ret);
}
function IPickColor(s, colorProp, colorObj) {
  var sname;
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"IPickColor\", s.substring(0, 1)) == '#'", [""], [], "IPickColor", confixWrapper("functionCall", "s.substring(0, 1)", ["0", "1"], [0, 1], "IPickColor", s.substring(0, 1)) == '#')) 
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(1, s.length)\", [\"1\", \"s.length\"], [1, s.length], \"IPickColor\", s.substring(1, s.length))", [""], [], "IPickColor", confixWrapper("functionCall", "s.substring(1, s.length)", ["1", "s.length"], [1, s.length], "IPickColor", s.substring(1, s.length)));
  if (confixWrapper("condition", "!colorProp", [""], [], "IPickColor", !colorProp)) 
  colorProp = confixWrapper("infix", "colorProp = confixWrapper(\"functionCall\", \"dg('CPwutProp')\", [\"CPwutProp\"], ['CPwutProp'], \"IPickColor\", dg('CPwutProp')).innerHTML", ["confixWrapper(\"functionCall\", \"dg('CPwutProp')\", [\"CPwutProp\"], ['CPwutProp'], \"IPickColor\", dg('CPwutProp'))"], [confixWrapper("functionCall", "dg('CPwutProp')", ["CPwutProp"], ['CPwutProp'], "IPickColor", dg('CPwutProp'))], "IPickColor", confixWrapper("functionCall", "dg('CPwutProp')", ["CPwutProp"], ['CPwutProp'], "IPickColor", dg('CPwutProp')).innerHTML);
  if (confixWrapper("condition", "!colorObj", [""], [], "IPickColor", !colorObj)) 
  colorObj = confixWrapper("infix", "colorObj = confixWrapper(\"functionCall\", \"dg('CPwutObj')\", [\"CPwutObj\"], ['CPwutObj'], \"IPickColor\", dg('CPwutObj')).innerHTML", ["confixWrapper(\"functionCall\", \"dg('CPwutObj')\", [\"CPwutObj\"], ['CPwutObj'], \"IPickColor\", dg('CPwutObj'))"], [confixWrapper("functionCall", "dg('CPwutObj')", ["CPwutObj"], ['CPwutObj'], "IPickColor", dg('CPwutObj'))], "IPickColor", confixWrapper("functionCall", "dg('CPwutObj')", ["CPwutObj"], ['CPwutObj'], "IPickColor", dg('CPwutObj')).innerHTML);
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.toLowerCase()\", [], [], \"IPickColor\", s.toLowerCase())", [""], [], "IPickColor", confixWrapper("functionCall", "s.toLowerCase()", [], [], "IPickColor", s.toLowerCase()));
  var n2r = confixWrapper("initvar", "var n2r = null", [""], [], "IPickColor", null);
  if (confixWrapper("condition", "!s.length", [""], [], "IPickColor", !s.length)) 
  {
    sname = confixWrapper("infix", "sname = 'transparent'", [""], [], "IPickColor", 'transparent');
  } else if (confixWrapper("condition", "n2r = confixWrapper(\"functionCall\", \"name2rgb(s)\", [\"s\"], [s], \"IPickColor\", name2rgb(s))", [""], [], "IPickColor", n2r = confixWrapper("infix", "n2r = confixWrapper(\"functionCall\", \"name2rgb(s)\", [\"s\"], [s], \"IPickColor\", name2rgb(s))", [""], [], "IPickColor", confixWrapper("functionCall", "name2rgb(s)", ["s"], [s], "IPickColor", name2rgb(s))))) 
  sname = confixWrapper("infix", "sname = n2r", [""], [], "IPickColor", n2r); else {
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"isColor(s)\", [\"s\"], [s], \"IPickColor\", isColor(s))", [""], [], "IPickColor", confixWrapper("functionCall", "isColor(s)", ["s"], [s], "IPickColor", isColor(s)))) 
    {
      s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.toUpperCase()\", [], [], \"IPickColor\", s.toUpperCase())", [""], [], "IPickColor", confixWrapper("functionCall", "s.toUpperCase()", [], [], "IPickColor", s.toUpperCase()));
      sname = confixWrapper("infix", "sname = '#' + s", [""], [], "IPickColor", '#' + s);
    } else return;
  }
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"colorObj.substring(1, colorObj.length)\", [\"1\", \"colorObj.length\"], [1, colorObj.length], \"IPickColor\", colorObj.substring(1, colorObj.length)) == '_DefaultDiv_0'", [""], [], "IPickColor", confixWrapper("functionCall", "colorObj.substring(1, colorObj.length)", ["1", "colorObj.length"], [1, colorObj.length], "IPickColor", colorObj.substring(1, colorObj.length)) == '_DefaultDiv_0')) 
  for (var i = confixWrapper("initvar", "var i = 1", [""], [], "IPickColor", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "IPickColor", i < maxBoxNumOnSides); i++) 
    confixWrapper("functionCall", "ChangeByInput(colorObj.substring(0, colorObj.length - 1) + i, colorProp, sname)", ["colorObj.substring(0, colorObj.length - 1) + i", "colorProp", "sname"], [confixWrapper("functionCall", "colorObj.substring(0, colorObj.length - 1)", ["0", "colorObj.length - 1"], [0, colorObj.length - 1], "IPickColor", colorObj.substring(0, colorObj.length - 1)) + i, colorProp, sname], "IPickColor", ChangeByInput(confixWrapper("functionCall", "colorObj.substring(0, colorObj.length - 1)", ["0", "colorObj.length - 1"], [0, colorObj.length - 1], "IPickColor", colorObj.substring(0, colorObj.length - 1)) + i, colorProp, sname));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"colorObj.substring(1, colorObj.length)\", [\"1\", \"colorObj.length\"], [1, colorObj.length], \"IPickColor\", colorObj.substring(1, colorObj.length)) == '_Title_0'", [""], [], "IPickColor", confixWrapper("functionCall", "colorObj.substring(1, colorObj.length)", ["1", "colorObj.length"], [1, colorObj.length], "IPickColor", colorObj.substring(1, colorObj.length)) == '_Title_0')) 
  for (var i = confixWrapper("initvar", "var i = 1", [""], [], "IPickColor", 1); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "IPickColor", i < maxBoxNumOnSides); i++) 
    confixWrapper("functionCall", "ChangeByInput(colorObj.substring(0, colorObj.length - 1) + i, colorProp, sname)", ["colorObj.substring(0, colorObj.length - 1) + i", "colorProp", "sname"], [confixWrapper("functionCall", "colorObj.substring(0, colorObj.length - 1)", ["0", "colorObj.length - 1"], [0, colorObj.length - 1], "IPickColor", colorObj.substring(0, colorObj.length - 1)) + i, colorProp, sname], "IPickColor", ChangeByInput(confixWrapper("functionCall", "colorObj.substring(0, colorObj.length - 1)", ["0", "colorObj.length - 1"], [0, colorObj.length - 1], "IPickColor", colorObj.substring(0, colorObj.length - 1)) + i, colorProp, sname));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"colorObj.substring(1, colorObj.length)\", [\"1\", \"colorObj.length\"], [1, colorObj.length], \"IPickColor\", colorObj.substring(1, colorObj.length)) == '_PartSepSemiDiv_1'", [""], [], "IPickColor", confixWrapper("functionCall", "colorObj.substring(1, colorObj.length)", ["1", "colorObj.length"], [1, colorObj.length], "IPickColor", colorObj.substring(1, colorObj.length)) == '_PartSepSemiDiv_1')) 
  for (var i = confixWrapper("initvar", "var i = 2", [""], [], "IPickColor", 2); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "IPickColor", i < maxBoxNumOnSides); i++) 
    confixWrapper("functionCall", "ChangeByInput(colorObj.substring(0, colorObj.length - 1) + i, colorProp, sname)", ["colorObj.substring(0, colorObj.length - 1) + i", "colorProp", "sname"], [confixWrapper("functionCall", "colorObj.substring(0, colorObj.length - 1)", ["0", "colorObj.length - 1"], [0, colorObj.length - 1], "IPickColor", colorObj.substring(0, colorObj.length - 1)) + i, colorProp, sname], "IPickColor", ChangeByInput(confixWrapper("functionCall", "colorObj.substring(0, colorObj.length - 1)", ["0", "colorObj.length - 1"], [0, colorObj.length - 1], "IPickColor", colorObj.substring(0, colorObj.length - 1)) + i, colorProp, sname));
  if (confixWrapper("condition", "colorObj == 'RSideColorCSS_Hover' || colorObj == 'RSideColorCSS_Link'", [""], [], "IPickColor", colorObj == 'RSideColorCSS_Hover' || colorObj == 'RSideColorCSS_Link')) 
  confixWrapper("functionCall", "TheColorCSS(sname, 6 + (colorObj == 'RSideColorCSS_Hover'))", ["sname", "6 + (colorObj == RSideColorCSS_Hover)"], [sname, 6 + (colorObj == 'RSideColorCSS_Hover')], "IPickColor", TheColorCSS(sname, 6 + (colorObj == 'RSideColorCSS_Hover')));
  if (confixWrapper("condition", "colorObj == 'LSideColorCSS_Hover' || colorObj == 'LSideColorCSS_Link'", [""], [], "IPickColor", colorObj == 'LSideColorCSS_Hover' || colorObj == 'LSideColorCSS_Link')) 
  confixWrapper("functionCall", "TheColorCSS(sname, 11 + (colorObj == 'LSideColorCSS_Hover'))", ["sname", "11 + (colorObj == LSideColorCSS_Hover)"], [sname, 11 + (colorObj == 'LSideColorCSS_Hover')], "IPickColor", TheColorCSS(sname, 11 + (colorObj == 'LSideColorCSS_Hover')));
  if (confixWrapper("condition", "colorObj == 'WholeColorCSS_Link'", [""], [], "IPickColor", colorObj == 'WholeColorCSS_Link')) 
  confixWrapper("functionCall", "TheColorCSS(sname, 8)", ["sname", "8"], [sname, 8], "IPickColor", TheColorCSS(sname, 8));
  if (confixWrapper("condition", "colorObj == 'WholeColorCSS_Hover'", [""], [], "IPickColor", colorObj == 'WholeColorCSS_Hover')) 
  confixWrapper("functionCall", "TheColorCSS(sname, 10)", ["sname", "10"], [sname, 10], "IPickColor", TheColorCSS(sname, 10));
  if (confixWrapper("condition", "colorObj == 'WholeColorCSS_Visit'", [""], [], "IPickColor", colorObj == 'WholeColorCSS_Visit')) 
  confixWrapper("functionCall", "TheColorCSS(sname, 9, sname == 'transparent')", ["sname", "9", "sname == transparent"], [sname, 9, sname == 'transparent'], "IPickColor", TheColorCSS(sname, 9, sname == 'transparent'));
  if (confixWrapper("condition", "colorObj == 'SideRColumnInner'", [""], [], "IPickColor", colorObj == 'SideRColumnInner')) 
  confixWrapper("functionCall", "ChangeByInput('SideLColumnInner', colorProp, sname)", ["SideLColumnInner", "colorProp", "sname"], ['SideLColumnInner', colorProp, sname], "IPickColor", ChangeByInput('SideLColumnInner', colorProp, sname));
  confixWrapper("functionCall", "ChangeByInput(colorObj, colorProp, sname)", ["colorObj", "colorProp", "sname"], [colorObj, colorProp, sname], "IPickColor", ChangeByInput(colorObj, colorProp, sname));
  var ecpsname = confixWrapper("initvar", "var ecpsname = sname", [""], [], "IPickColor", sname);
  if (confixWrapper("condition", "ecpsname == 'transparent'", [""], [], "IPickColor", ecpsname == 'transparent')) 
  ecpsname = confixWrapper("infix", "ecpsname = '#FFFFFF'", [""], [], "IPickColor", '#FFFFFF');
  if (confixWrapper("condition", "ecpsname.length < 7", [""], [], "IPickColor", ecpsname.length < 7)) 
  ecpsname = confixWrapper("infix", "ecpsname = confixWrapper(\"functionCall\", \"TripleColNameToSix(sname)\", [\"sname\"], [sname], \"IPickColor\", TripleColNameToSix(sname))", [""], [], "IPickColor", confixWrapper("functionCall", "TripleColNameToSix(sname)", ["sname"], [sname], "IPickColor", TripleColNameToSix(sname)));
  if (confixWrapper("condition", "colorObj == 'body' && colorProp == 'backgroundColor'", [""], [], "IPickColor", colorObj == 'body' && colorProp == 'backgroundColor')) 
  confixWrapper("functionCall", "ChangeByInput('body', 'color', ComplementTheColor(sname))", ["body", "color", "ComplementTheColor(sname)"], ['body', 'color', confixWrapper("functionCall", "ComplementTheColor(sname)", ["sname"], [sname], "IPickColor", ComplementTheColor(sname))], "IPickColor", ChangeByInput('body', 'color', confixWrapper("functionCall", "ComplementTheColor(sname)", ["sname"], [sname], "IPickColor", ComplementTheColor(sname))));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('ECP_myRGBS')\", [\"ECP_myRGBS\"], ['ECP_myRGBS'], \"IPickColor\", dg('ECP_myRGBS')).value != ecpsname", [""], [], "IPickColor", confixWrapper("functionCall", "dg('ECP_myRGBS')", ["ECP_myRGBS"], ['ECP_myRGBS'], "IPickColor", dg('ECP_myRGBS')).value != ecpsname)) 
  {
    confixWrapper("functionCall", "dg('ECP_myRGBS')", ["ECP_myRGBS"], ['ECP_myRGBS'], "IPickColor", dg('ECP_myRGBS')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('ECP_myRGBS')\", [\"ECP_myRGBS\"], ['ECP_myRGBS'], \"IPickColor\", dg('ECP_myRGBS')).value = ecpsname", [""], [], "IPickColor", ecpsname);
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('ColorPicker')\", [\"ColorPicker\"], ['ColorPicker'], \"IPickColor\", dg('ColorPicker')).style.display == 'block'", [""], [], "IPickColor", confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "IPickColor", dg('ColorPicker')).style.display == 'block')) 
    confixWrapper("functionCall", "resetByRGBS(ecpsname)", ["ecpsname"], [ecpsname], "IPickColor", resetByRGBS(ecpsname));
  }
  if (confixWrapper("condition", "sname == n2r", [""], [], "IPickColor", sname == n2r)) 
  sname = confixWrapper("infix", "sname = s", [""], [], "IPickColor", s);
  if (confixWrapper("condition", "global_colorRef", [""], [], "IPickColor", global_colorRef)) 
  if (confixWrapper("condition", "global_colorRef.value != sname && s != ''", [""], [], "IPickColor", global_colorRef.value != sname && s != '')) 
  global_colorRef.value = confixWrapper("infix", "global_colorRef.value = sname", [""], [], "IPickColor", sname);
  if (confixWrapper("condition", "colorObj != confixWrapper(\"functionCall\", \"dg('CPwutObj')\", [\"CPwutObj\"], ['CPwutObj'], \"IPickColor\", dg('CPwutObj')).innerHTML || colorProp != confixWrapper(\"functionCall\", \"dg('CPwutProp')\", [\"CPwutProp\"], ['CPwutProp'], \"IPickColor\", dg('CPwutProp')).innerHTML", [""], [], "IPickColor", colorObj != confixWrapper("functionCall", "dg('CPwutObj')", ["CPwutObj"], ['CPwutObj'], "IPickColor", dg('CPwutObj')).innerHTML || colorProp != confixWrapper("functionCall", "dg('CPwutProp')", ["CPwutProp"], ['CPwutProp'], "IPickColor", dg('CPwutProp')).innerHTML)) 
  return;
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('AColor_S_' + s)\", [\"AColor_S_ + s\"], ['AColor_S_' + s], \"IPickColor\", dg('AColor_S_' + s))", [""], [], "IPickColor", confixWrapper("functionCall", "dg('AColor_S_' + s)", ["AColor_S_ + s"], ['AColor_S_' + s], "IPickColor", dg('AColor_S_' + s)))) 
  confixWrapper("functionCall", "dg('AColor_S_' + s)", ["AColor_S_ + s"], ['AColor_S_' + s], "IPickColor", dg('AColor_S_' + s)).style.borderWidth = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AColor_S_' + s)\", [\"AColor_S_ + s\"], ['AColor_S_' + s], \"IPickColor\", dg('AColor_S_' + s)).style.borderWidth = '1px'", [""], [], "IPickColor", '1px');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('AColor_H_' + s)\", [\"AColor_H_ + s\"], ['AColor_H_' + s], \"IPickColor\", dg('AColor_H_' + s))", [""], [], "IPickColor", confixWrapper("functionCall", "dg('AColor_H_' + s)", ["AColor_H_ + s"], ['AColor_H_' + s], "IPickColor", dg('AColor_H_' + s)))) 
  confixWrapper("functionCall", "dg('AColor_H_' + s)", ["AColor_H_ + s"], ['AColor_H_' + s], "IPickColor", dg('AColor_H_' + s)).style.borderWidth = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AColor_H_' + s)\", [\"AColor_H_ + s\"], ['AColor_H_' + s], \"IPickColor\", dg('AColor_H_' + s)).style.borderWidth = '1px'", [""], [], "IPickColor", '1px');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('AColor_N_' + s)\", [\"AColor_N_ + s\"], ['AColor_N_' + s], \"IPickColor\", dg('AColor_N_' + s))", [""], [], "IPickColor", confixWrapper("functionCall", "dg('AColor_N_' + s)", ["AColor_N_ + s"], ['AColor_N_' + s], "IPickColor", dg('AColor_N_' + s)))) 
  confixWrapper("functionCall", "dg('AColor_N_' + s)", ["AColor_N_ + s"], ['AColor_N_' + s], "IPickColor", dg('AColor_N_' + s)).style.borderWidth = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AColor_N_' + s)\", [\"AColor_N_ + s\"], ['AColor_N_' + s], \"IPickColor\", dg('AColor_N_' + s)).style.borderWidth = '1px'", [""], [], "IPickColor", '1px');
  var c = confixWrapper("initvar", "var c = global_lastColor", [""], [], "IPickColor", global_lastColor);
  if (confixWrapper("condition", "c && confixWrapper(\"functionCall\", \"c.substring(0, 1)\", [\"0\", \"1\"], [0, 1], \"IPickColor\", c.substring(0, 1)) == '#'", [""], [], "IPickColor", c && confixWrapper("functionCall", "c.substring(0, 1)", ["0", "1"], [0, 1], "IPickColor", c.substring(0, 1)) == '#')) 
  c = confixWrapper("infix", "c = confixWrapper(\"functionCall\", \"c.substring(1, c.length)\", [\"1\", \"c.length\"], [1, c.length], \"IPickColor\", c.substring(1, c.length))", [""], [], "IPickColor", confixWrapper("functionCall", "c.substring(1, c.length)", ["1", "c.length"], [1, c.length], "IPickColor", c.substring(1, c.length)));
  if (confixWrapper("condition", "c && c != s", [""], [], "IPickColor", c && c != s)) 
  {
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('AColor_S_' + c)\", [\"AColor_S_ + c\"], ['AColor_S_' + c], \"IPickColor\", dg('AColor_S_' + c))", [""], [], "IPickColor", confixWrapper("functionCall", "dg('AColor_S_' + c)", ["AColor_S_ + c"], ['AColor_S_' + c], "IPickColor", dg('AColor_S_' + c)))) 
    confixWrapper("functionCall", "dg('AColor_S_' + c)", ["AColor_S_ + c"], ['AColor_S_' + c], "IPickColor", dg('AColor_S_' + c)).style.borderWidth = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AColor_S_' + c)\", [\"AColor_S_ + c\"], ['AColor_S_' + c], \"IPickColor\", dg('AColor_S_' + c)).style.borderWidth = '0px'", [""], [], "IPickColor", '0px');
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('AColor_H_' + c)\", [\"AColor_H_ + c\"], ['AColor_H_' + c], \"IPickColor\", dg('AColor_H_' + c))", [""], [], "IPickColor", confixWrapper("functionCall", "dg('AColor_H_' + c)", ["AColor_H_ + c"], ['AColor_H_' + c], "IPickColor", dg('AColor_H_' + c)))) 
    confixWrapper("functionCall", "dg('AColor_H_' + c)", ["AColor_H_ + c"], ['AColor_H_' + c], "IPickColor", dg('AColor_H_' + c)).style.borderWidth = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AColor_H_' + c)\", [\"AColor_H_ + c\"], ['AColor_H_' + c], \"IPickColor\", dg('AColor_H_' + c)).style.borderWidth = '0px'", [""], [], "IPickColor", '0px');
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('AColor_N_' + c)\", [\"AColor_N_ + c\"], ['AColor_N_' + c], \"IPickColor\", dg('AColor_N_' + c))", [""], [], "IPickColor", confixWrapper("functionCall", "dg('AColor_N_' + c)", ["AColor_N_ + c"], ['AColor_N_' + c], "IPickColor", dg('AColor_N_' + c)))) 
    confixWrapper("functionCall", "dg('AColor_N_' + c)", ["AColor_N_ + c"], ['AColor_N_' + c], "IPickColor", dg('AColor_N_' + c)).style.borderWidth = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AColor_N_' + c)\", [\"AColor_N_ + c\"], ['AColor_N_' + c], \"IPickColor\", dg('AColor_N_' + c)).style.borderWidth = '0px'", [""], [], "IPickColor", '0px');
  }
  if (confixWrapper("condition", "colorObj == 'AddImageImageI'", [""], [], "IPickColor", colorObj == 'AddImageImageI')) 
  confixWrapper("functionCall", "UpdateAddImageNow()", [], [], "IPickColor", UpdateAddImageNow());
  global_lastColor = confixWrapper("infix", "global_lastColor = sname", [""], [], "IPickColor", sname);
}
function setYetMove(wut) {
  global_yetMove = confixWrapper("infix", "global_yetMove = wut", [""], [], "setYetMove", wut);
}
function MoveUp(obj, y) {
  return;
}
function nowTheTime() {
  now = confixWrapper("infix", "now = new Date()", [""], [], "nowTheTime", new Date());
  theYear = confixWrapper("infix", "theYear = confixWrapper(\"functionCall\", \"now.getYear()\", [], [], \"nowTheTime\", now.getYear()) + 1900 * (confixWrapper(\"functionCall\", \"now.getYear()\", [], [], \"nowTheTime\", now.getYear()) < 1000)", [""], [], "nowTheTime", confixWrapper("functionCall", "now.getYear()", [], [], "nowTheTime", now.getYear()) + 1900 * (confixWrapper("functionCall", "now.getYear()", [], [], "nowTheTime", now.getYear()) < 1000));
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"now.getMonth()\", [], [], \"nowTheTime\", now.getMonth()) + 1) + \"/\" + now.getDate() + \"/\" + theYear;", [""], [], "nowTheTime", (confixWrapper("functionCall", "now.getMonth()", [], [], "nowTheTime", now.getMonth()) + 1) + "/" + now.getDate() + "/" + theYear);
}
function writeCurrentTime(wut) {
  var t2 = confixWrapper("initvar", "var t2 = confixWrapper(\"functionCall\", \"nowTheTime()\", [], [], \"writeCurrentTime\", nowTheTime())", [""], [], "writeCurrentTime", confixWrapper("functionCall", "nowTheTime()", [], [], "writeCurrentTime", nowTheTime()));
  if (confixWrapper("condition", "wut", [""], [], "writeCurrentTime", wut)) 
  var s = confixWrapper("initvar", "var s = confixWrapper(\"functionCall\", \"ToHijri(t2)\", [\"t2\"], [t2], \"writeCurrentTime\", ToHijri(t2)) + ' '", [""], [], "writeCurrentTime", confixWrapper("functionCall", "ToHijri(t2)", ["t2"], [t2], "writeCurrentTime", ToHijri(t2)) + ' '); else var s = confixWrapper("initvar", "var s = (t2) + ' '", [""], [], "writeCurrentTime", (t2) + ' ');
  confixWrapper("functionCall", "ChangeByInput('OnePostDateTop', 'innerHTML', s)", ["OnePostDateTop", "innerHTML", "s"], ['OnePostDateTop', 'innerHTML', s], "writeCurrentTime", ChangeByInput('OnePostDateTop', 'innerHTML', s));
}
function isIE() {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"navigator.appName.indexOf('Microsoft')\", [\"Microsoft\"], ['Microsoft'], \"isIE\", navigator.appName.indexOf('Microsoft')) != -1) && !window.opera;", [""], [], "isIE", (confixWrapper("functionCall", "navigator.appName.indexOf('Microsoft')", ["Microsoft"], ['Microsoft'], "isIE", navigator.appName.indexOf('Microsoft')) != -1) && !window.opera);
}
function TheColorCSS(col, num, remove) {
  var SS = confixWrapper("initvar", "var SS = document.styleSheets[0]", [""], [], "TheColorCSS", document.styleSheets[0]);
  if (confixWrapper("condition", "SS.cssRules", [""], [], "TheColorCSS", SS.cssRules)) 
  inRule = confixWrapper("infix", "inRule = SS.cssRules", [""], [], "TheColorCSS", SS.cssRules); else if (confixWrapper("condition", "SS.rules", [""], [], "TheColorCSS", SS.rules)) 
  inRule = confixWrapper("infix", "inRule = SS.rules", [""], [], "TheColorCSS", SS.rules);
  if (confixWrapper("condition", "remove", [""], [], "TheColorCSS", remove)) 
  inRule[num].style.color = confixWrapper("infix", "inRule[num].style.color = ''", [""], [], "TheColorCSS", ''); else inRule[num].style.color = confixWrapper("infix", "inRule[num].style.color = col", [""], [], "TheColorCSS", col);
}
function SwitchSelectIE(t) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"isIE()\", [], [], \"SwitchSelectIE\", isIE())", [""], [], "SwitchSelectIE", confixWrapper("functionCall", "isIE()", [], [], "SwitchSelectIE", isIE()))) 
  {
    var SS = confixWrapper("initvar", "var SS = document.styleSheets[0]", [""], [], "SwitchSelectIE", document.styleSheets[0]);
    if (confixWrapper("condition", "SS.cssRules", [""], [], "SwitchSelectIE", SS.cssRules)) 
    inRule = confixWrapper("infix", "inRule = SS.cssRules", [""], [], "SwitchSelectIE", SS.cssRules); else if (confixWrapper("condition", "SS.rules", [""], [], "SwitchSelectIE", SS.rules)) 
    inRule = confixWrapper("infix", "inRule = SS.rules", [""], [], "SwitchSelectIE", SS.rules);
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('ColorPicker')\", [\"ColorPicker\"], ['ColorPicker'], \"SwitchSelectIE\", dg('ColorPicker')).style.display != 'none' || confixWrapper(\"functionCall\", \"dg('PsycHodramaBox')\", [\"PsycHodramaBox\"], ['PsycHodramaBox'], \"SwitchSelectIE\", dg('PsycHodramaBox')).style.display != 'none' || confixWrapper(\"functionCall\", \"dg('helpBox')\", [\"helpBox\"], ['helpBox'], \"SwitchSelectIE\", dg('helpBox')).style.display != 'none' || confixWrapper(\"functionCall\", \"dg('EditPartBox')\", [\"EditPartBox\"], ['EditPartBox'], \"SwitchSelectIE\", dg('EditPartBox')).style.display != 'none' || confixWrapper(\"functionCall\", \"dg('addImage')\", [\"addImage\"], ['addImage'], \"SwitchSelectIE\", dg('addImage')).style.display != 'none' || confixWrapper(\"functionCall\", \"dg('PsycHokinesisBox')\", [\"PsycHokinesisBox\"], ['PsycHokinesisBox'], \"SwitchSelectIE\", dg('PsycHokinesisBox')).style.display != 'none'", [""], [], "SwitchSelectIE", confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "SwitchSelectIE", dg('ColorPicker')).style.display != 'none' || confixWrapper("functionCall", "dg('PsycHodramaBox')", ["PsycHodramaBox"], ['PsycHodramaBox'], "SwitchSelectIE", dg('PsycHodramaBox')).style.display != 'none' || confixWrapper("functionCall", "dg('helpBox')", ["helpBox"], ['helpBox'], "SwitchSelectIE", dg('helpBox')).style.display != 'none' || confixWrapper("functionCall", "dg('EditPartBox')", ["EditPartBox"], ['EditPartBox'], "SwitchSelectIE", dg('EditPartBox')).style.display != 'none' || confixWrapper("functionCall", "dg('addImage')", ["addImage"], ['addImage'], "SwitchSelectIE", dg('addImage')).style.display != 'none' || confixWrapper("functionCall", "dg('PsycHokinesisBox')", ["PsycHokinesisBox"], ['PsycHokinesisBox'], "SwitchSelectIE", dg('PsycHokinesisBox')).style.display != 'none')) 
    t = confixWrapper("infix", "t = 0", [""], [], "SwitchSelectIE", 0);
    inRule[4].style.visibility = confixWrapper("infix", "inRule[4].style.visibility = (t) ? 'visible' : 'hidden'", [""], [], "SwitchSelectIE", (t) ? 'visible' : 'hidden');
    t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"dg('addImage')\", [\"addImage\"], ['addImage'], \"SwitchSelectIE\", dg('addImage')).style.display != 'none'", [""], [], "SwitchSelectIE", confixWrapper("functionCall", "dg('addImage')", ["addImage"], ['addImage'], "SwitchSelectIE", dg('addImage')).style.display != 'none');
    inRule[5].style.visibility = confixWrapper("infix", "inRule[5].style.visibility = (t) ? 'visible' : 'hidden'", [""], [], "SwitchSelectIE", (t) ? 'visible' : 'hidden');
  }
}
function HideCP() {
  confixWrapper("functionCall", "SetText('CPwutObj', 'NaN')", ["CPwutObj", "NaN"], ['CPwutObj', 'NaN'], "HideCP", SetText('CPwutObj', 'NaN'));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDivVisible('ColorPicker')\", [\"ColorPicker\"], ['ColorPicker'], \"HideCP\", isDivVisible('ColorPicker'))", [""], [], "HideCP", !confixWrapper("functionCall", "isDivVisible('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "HideCP", isDivVisible('ColorPicker')))) 
  return;
  confixWrapper("functionCall", "SwitchDisplay('ColorPicker', 0)", ["ColorPicker", "0"], ['ColorPicker', 0], "HideCP", SwitchDisplay('ColorPicker', 0));
  confixWrapper("functionCall", "SwitchSelectIE(1)", ["1"], [1], "HideCP", SwitchSelectIE(1));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"HideCP\", isIE())", [""], [], "HideCP", !confixWrapper("functionCall", "isIE()", [], [], "HideCP", isIE()))) 
  {
    confixWrapper("functionCall", "window.blur()", [], [], "HideCP", window.blur());
    confixWrapper("functionCall", "window.focus()", [], [], "HideCP", window.focus());
  }
}
function getMyXY(eve, t) {
  var myY, myX;
  if (confixWrapper("condition", "!eve", [""], [], "getMyXY", !eve)) 
  var eve = confixWrapper("initvar", "var eve = window.event", [""], [], "getMyXY", window.event);
  if (confixWrapper("condition", "document.all", [""], [], "getMyXY", document.all)) 
  {
    myX = confixWrapper("infix", "myX = eve.clientX", [""], [], "getMyXY", eve.clientX);
    var dY = confixWrapper("initvar", "var dY = 0", [""], [], "getMyXY", 0);
    if (confixWrapper("condition", "document.body.scrollTop", [""], [], "getMyXY", document.body.scrollTop)) 
    dY = confixWrapper("infix", "dY = document.body.scrollTop", [""], [], "getMyXY", document.body.scrollTop); else dY = confixWrapper("infix", "dY = document.documentElement.scrollTop", [""], [], "getMyXY", document.documentElement.scrollTop);
    myY = confixWrapper("infix", "myY = eve.clientY + dY", [""], [], "getMyXY", eve.clientY + dY);
  } else {
    myX = confixWrapper("infix", "myX = eve.pageX", [""], [], "getMyXY", eve.pageX);
    myY = confixWrapper("infix", "myY = eve.pageY", [""], [], "getMyXY", eve.pageY);
  }
  return confixWrapper("return", "return ((t) ? myY : myX);", [""], [], "getMyXY", ((t) ? myY : myX));
}
function ShowCP(eve, ref, CPProp, CPObj) {
  try {
    if (confixWrapper("condition", "(global_colorRef.id == confixWrapper(\"functionCall\", \"dg(ref)\", [\"ref\"], [ref], \"ShowCP\", dg(ref)).id) && (confixWrapper(\"functionCall\", \"dg('CPwutObj')\", [\"CPwutObj\"], ['CPwutObj'], \"ShowCP\", dg('CPwutObj')).innerHTML == CPObj)", [""], [], "ShowCP", (global_colorRef.id == confixWrapper("functionCall", "dg(ref)", ["ref"], [ref], "ShowCP", dg(ref)).id) && (confixWrapper("functionCall", "dg('CPwutObj')", ["CPwutObj"], ['CPwutObj'], "ShowCP", dg('CPwutObj')).innerHTML == CPObj))) 
    {
      confixWrapper("functionCall", "HideCP()", [], [], "ShowCP", HideCP());
      return;
    }
  }  catch (e) {
}
  if (confixWrapper("condition", "global_isPathedHide", [""], [], "ShowCP", global_isPathedHide)) 
  confixWrapper("functionCall", "alertPathedHide()", [], [], "ShowCP", alertPathedHide());
  confixWrapper("functionCall", "SetText('CPwutProp', CPProp)", ["CPwutProp", "CPProp"], ['CPwutProp', CPProp], "ShowCP", SetText('CPwutProp', CPProp));
  confixWrapper("functionCall", "SetText('CPwutObj', CPObj)", ["CPwutObj", "CPObj"], ['CPwutObj', CPObj], "ShowCP", SetText('CPwutObj', CPObj));
  global_colorRef = confixWrapper("infix", "global_colorRef = confixWrapper(\"functionCall\", \"dg(ref)\", [\"ref\"], [ref], \"ShowCP\", dg(ref))", [""], [], "ShowCP", confixWrapper("functionCall", "dg(ref)", ["ref"], [ref], "ShowCP", dg(ref)));
  confixWrapper("functionCall", "IPickColor(global_colorRef.value)", ["global_colorRef.value"], [global_colorRef.value], "ShowCP", IPickColor(global_colorRef.value));
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"ShowCP\", getMyXY(eve, 0))", [""], [], "ShowCP", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "ShowCP", getMyXY(eve, 0)));
  var myY = confixWrapper("initvar", "var myY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"ShowCP\", getMyXY(eve, 1))", [""], [], "ShowCP", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "ShowCP", getMyXY(eve, 1)));
  confixWrapper("functionCall", "SwitchDisplay('ColorPicker', 1)", ["ColorPicker", "1"], ['ColorPicker', 1], "ShowCP", SwitchDisplay('ColorPicker', 1));
  confixWrapper("functionCall", "dg('ColorPicker')", ["ColorPicker"], ['ColorPicker'], "ShowCP", dg('ColorPicker')).style.top = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('ColorPicker')\", [\"ColorPicker\"], ['ColorPicker'], \"ShowCP\", dg('ColorPicker')).style.top = (myY + 10) + 'px'", [""], [], "ShowCP", (myY + 10) + 'px');
  confixWrapper("functionCall", "SwitchSelectIE(0)", ["0"], [0], "ShowCP", SwitchSelectIE(0));
  confixWrapper("functionCall", "deMoronize()", [], [], "ShowCP", deMoronize());
}
function ShowPsycHokinesis(eve) {
  confixWrapper("functionCall", "HideAll(true)", ["true"], [true], "ShowPsycHokinesis", HideAll(true));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisBox')\", [\"PsycHokinesisBox\"], ['PsycHokinesisBox'], \"ShowPsycHokinesis\", dg('PsycHokinesisBox')).style.display != 'none'", [""], [], "ShowPsycHokinesis", confixWrapper("functionCall", "dg('PsycHokinesisBox')", ["PsycHokinesisBox"], ['PsycHokinesisBox'], "ShowPsycHokinesis", dg('PsycHokinesisBox')).style.display != 'none')) 
  {
    confixWrapper("functionCall", "HidePsycHokinesis()", [], [], "ShowPsycHokinesis", HidePsycHokinesis());
    return;
  }
  confixWrapper("functionCall", "showDarkMoon(\"70\")", ["70"], ["70"], "ShowPsycHokinesis", showDarkMoon("70"));
  if (confixWrapper("condition", "global_isPathedHide", [""], [], "ShowPsycHokinesis", global_isPathedHide)) 
  confixWrapper("functionCall", "alertPathedHide()", [], [], "ShowPsycHokinesis", alertPathedHide());
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"ShowPsycHokinesis\", getMyXY(eve, 0))", [""], [], "ShowPsycHokinesis", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "ShowPsycHokinesis", getMyXY(eve, 0)));
  var myY = confixWrapper("initvar", "var myY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"ShowPsycHokinesis\", getMyXY(eve, 1))", [""], [], "ShowPsycHokinesis", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "ShowPsycHokinesis", getMyXY(eve, 1)));
  confixWrapper("functionCall", "ChangeByInput('PsycHokinesisBox', 'top', (myY + 10) + 'px')", ["PsycHokinesisBox", "top", "(myY + 10) + px"], ['PsycHokinesisBox', 'top', (myY + 10) + 'px'], "ShowPsycHokinesis", ChangeByInput('PsycHokinesisBox', 'top', (myY + 10) + 'px'));
  confixWrapper("functionCall", "dg('PsycHokinesisGetEr')", ["PsycHokinesisGetEr"], ['PsycHokinesisGetEr'], "ShowPsycHokinesis", dg('PsycHokinesisGetEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisGetEr')\", [\"PsycHokinesisGetEr\"], ['PsycHokinesisGetEr'], \"ShowPsycHokinesis\", dg('PsycHokinesisGetEr')).value = '[Out Of Date! Click on \"Get PsycHokinesis\" to update.]'", [""], [], "ShowPsycHokinesis", '[Out Of Date! Click on "Get PsycHokinesis" to update.]');
  confixWrapper("functionCall", "SwitchDisplay('PsycHokinesisBox', 1)", ["PsycHokinesisBox", "1"], ['PsycHokinesisBox', 1], "ShowPsycHokinesis", SwitchDisplay('PsycHokinesisBox', 1));
  confixWrapper("functionCall", "SwitchSelectIE(0)", ["0"], [0], "ShowPsycHokinesis", SwitchSelectIE(0));
}
function zwnjify(s) {
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "zwnjify", 0); confixWrapper("loopCondition", "i < s.length", ["i", "s"], [i, s], "zwnjify", i < s.length); i++) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(i)\", [\"i\"], [i], \"zwnjify\", s.charAt(i)) == translateIt('Shift 2: zwnj')", [""], [], "zwnjify", confixWrapper("functionCall", "s.charAt(i)", ["i"], [i], "zwnjify", s.charAt(i)) == translateIt('Shift 2: zwnj'))) 
    s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"zwnjify\", s.substring(0, i)) + '&zwnj;' + s.substring(i + 1, s.length)", [""], [], "zwnjify", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "zwnjify", s.substring(0, i)) + '&zwnj;' + s.substring(i + 1, s.length));
  return confixWrapper("return", "return s;", [""], [], "zwnjify", s);
}
function HidePsycHokinesis() {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDivVisible('PsycHokinesisBox')\", [\"PsycHokinesisBox\"], ['PsycHokinesisBox'], \"HidePsycHokinesis\", isDivVisible('PsycHokinesisBox'))", [""], [], "HidePsycHokinesis", !confixWrapper("functionCall", "isDivVisible('PsycHokinesisBox')", ["PsycHokinesisBox"], ['PsycHokinesisBox'], "HidePsycHokinesis", isDivVisible('PsycHokinesisBox')))) 
  return;
  confixWrapper("functionCall", "hideDarkMoon()", [], [], "HidePsycHokinesis", hideDarkMoon());
  confixWrapper("functionCall", "SwitchDisplay('PsycHokinesisBox', 0)", ["PsycHokinesisBox", "0"], ['PsycHokinesisBox', 0], "HidePsycHokinesis", SwitchDisplay('PsycHokinesisBox', 0));
  confixWrapper("functionCall", "SwitchSelectIE(1)", ["1"], [1], "HidePsycHokinesis", SwitchSelectIE(1));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"HidePsycHokinesis\", isIE())", [""], [], "HidePsycHokinesis", !confixWrapper("functionCall", "isIE()", [], [], "HidePsycHokinesis", isIE()))) 
  {
    confixWrapper("functionCall", "window.blur()", [], [], "HidePsycHokinesis", window.blur());
    confixWrapper("functionCall", "window.focus()", [], [], "HidePsycHokinesis", window.focus());
  }
}
function ShowPsycHodrama(eve) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('PsycHodramaBox')\", [\"PsycHodramaBox\"], ['PsycHodramaBox'], \"ShowPsycHodrama\", dg('PsycHodramaBox')).style.display != 'none'", [""], [], "ShowPsycHodrama", confixWrapper("functionCall", "dg('PsycHodramaBox')", ["PsycHodramaBox"], ['PsycHodramaBox'], "ShowPsycHodrama", dg('PsycHodramaBox')).style.display != 'none')) 
  {
    confixWrapper("functionCall", "HidePsycHodrama()", [], [], "ShowPsycHodrama", HidePsycHodrama());
    return;
  }
  confixWrapper("functionCall", "HideAll(true)", ["true"], [true], "ShowPsycHodrama", HideAll(true));
  confixWrapper("functionCall", "showDarkMoon(\"50\")", ["50"], ["50"], "ShowPsycHodrama", showDarkMoon("50"));
  if (confixWrapper("condition", "global_isPathedHide", [""], [], "ShowPsycHodrama", global_isPathedHide)) 
  confixWrapper("functionCall", "alertPathedHide()", [], [], "ShowPsycHodrama", alertPathedHide());
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"ShowPsycHodrama\", getMyXY(eve, 0))", [""], [], "ShowPsycHodrama", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "ShowPsycHodrama", getMyXY(eve, 0)));
  var myY = confixWrapper("initvar", "var myY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"ShowPsycHodrama\", getMyXY(eve, 1))", [""], [], "ShowPsycHodrama", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "ShowPsycHodrama", getMyXY(eve, 1)));
  confixWrapper("functionCall", "ChangeByInput('PsycHodramaBox', 'top', (myY + 10) + 'px')", ["PsycHodramaBox", "top", "(myY + 10) + px"], ['PsycHodramaBox', 'top', (myY + 10) + 'px'], "ShowPsycHodrama", ChangeByInput('PsycHodramaBox', 'top', (myY + 10) + 'px'));
  confixWrapper("functionCall", "dg('PsycHodramaGetEr')", ["PsycHodramaGetEr"], ['PsycHodramaGetEr'], "ShowPsycHodrama", dg('PsycHodramaGetEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHodramaGetEr')\", [\"PsycHodramaGetEr\"], ['PsycHodramaGetEr'], \"ShowPsycHodrama\", dg('PsycHodramaGetEr')).value = '[Out Of Date! Click on \"Get PsycHodrama\" to update.]'", [""], [], "ShowPsycHodrama", '[Out Of Date! Click on "Get PsycHodrama" to update.]');
  confixWrapper("functionCall", "dg('PsycHodramaPutEr')", ["PsycHodramaPutEr"], ['PsycHodramaPutEr'], "ShowPsycHodrama", dg('PsycHodramaPutEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHodramaPutEr')\", [\"PsycHodramaPutEr\"], ['PsycHodramaPutEr'], \"ShowPsycHodrama\", dg('PsycHodramaPutEr')).value = '[Paste your PsycHodrama here and press \"Apply\".]'", [""], [], "ShowPsycHodrama", '[Paste your PsycHodrama here and press "Apply".]');
  confixWrapper("functionCall", "SwitchDisplay('PsycHodramaBox', 1)", ["PsycHodramaBox", "1"], ['PsycHodramaBox', 1], "ShowPsycHodrama", SwitchDisplay('PsycHodramaBox', 1));
  confixWrapper("functionCall", "SwitchSelectIE(0)", ["0"], [0], "ShowPsycHodrama", SwitchSelectIE(0));
}
function HidePsycHodrama() {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDivVisible('PsycHodramaBox')\", [\"PsycHodramaBox\"], ['PsycHodramaBox'], \"HidePsycHodrama\", isDivVisible('PsycHodramaBox'))", [""], [], "HidePsycHodrama", !confixWrapper("functionCall", "isDivVisible('PsycHodramaBox')", ["PsycHodramaBox"], ['PsycHodramaBox'], "HidePsycHodrama", isDivVisible('PsycHodramaBox')))) 
  return;
  confixWrapper("functionCall", "hideDarkMoon()", [], [], "HidePsycHodrama", hideDarkMoon());
  confixWrapper("functionCall", "SwitchDisplay('PsycHodramaBox', 0)", ["PsycHodramaBox", "0"], ['PsycHodramaBox', 0], "HidePsycHodrama", SwitchDisplay('PsycHodramaBox', 0));
  confixWrapper("functionCall", "SwitchSelectIE(1)", ["1"], [1], "HidePsycHodrama", SwitchSelectIE(1));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"HidePsycHodrama\", isIE())", [""], [], "HidePsycHodrama", !confixWrapper("functionCall", "isIE()", [], [], "HidePsycHodrama", isIE()))) 
  {
    confixWrapper("functionCall", "window.blur()", [], [], "HidePsycHodrama", window.blur());
    confixWrapper("functionCall", "window.focus()", [], [], "HidePsycHodrama", window.focus());
  }
}
function UpdateAddImageNow() {
  var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg('AddImageImageI')\", [\"AddImageImageI\"], ['AddImageImageI'], \"UpdateAddImageNow\", dg('AddImageImageI'))", [""], [], "UpdateAddImageNow", confixWrapper("functionCall", "dg('AddImageImageI')", ["AddImageImageI"], ['AddImageImageI'], "UpdateAddImageNow", dg('AddImageImageI')));
  if (confixWrapper("condition", "global_AINode", [""], [], "UpdateAddImageNow", global_AINode)) 
  confixWrapper("functionCall", "SetValAndDo(global_AINode, '<img src=\"' + that.getAttribute('src') + '\" alt=\"' + that.getAttribute('alt') + '\" style=\"border: ' + dg('AddImageBorderWidthEr').value + ' ' + dg('AddImageBorderStyleEr').value + ' ' + dg('AddImageBorderColorEr').value + ';\" />')", ["global_AINode", "<img src= + that.getAttribute(src) +  alt= + that.getAttribute(alt) +  style=border:  + dg(AddImageBorderWidthEr).value +   + dg(AddImageBorderStyleEr).value +   + dg(AddImageBorderColorEr).value + ; />"], [global_AINode, '<img src="' + confixWrapper("functionCall", "that.getAttribute('src')", ["src"], ['src'], "UpdateAddImageNow", that.getAttribute('src')) + '" alt="' + that.getAttribute('alt') + '" style="border: ' + confixWrapper("functionCall", "dg('AddImageBorderWidthEr')", ["AddImageBorderWidthEr"], ['AddImageBorderWidthEr'], "UpdateAddImageNow", dg('AddImageBorderWidthEr')).value + ' ' + confixWrapper("functionCall", "dg('AddImageBorderStyleEr')", ["AddImageBorderStyleEr"], ['AddImageBorderStyleEr'], "UpdateAddImageNow", dg('AddImageBorderStyleEr')).value + ' ' + confixWrapper("functionCall", "dg('AddImageBorderColorEr')", ["AddImageBorderColorEr"], ['AddImageBorderColorEr'], "UpdateAddImageNow", dg('AddImageBorderColorEr')).value + ';" />'], "UpdateAddImageNow", SetValAndDo(global_AINode, '<img src="' + confixWrapper("functionCall", "that.getAttribute('src')", ["src"], ['src'], "UpdateAddImageNow", that.getAttribute('src')) + '" alt="' + that.getAttribute('alt') + '" style="border: ' + confixWrapper("functionCall", "dg('AddImageBorderWidthEr')", ["AddImageBorderWidthEr"], ['AddImageBorderWidthEr'], "UpdateAddImageNow", dg('AddImageBorderWidthEr')).value + ' ' + confixWrapper("functionCall", "dg('AddImageBorderStyleEr')", ["AddImageBorderStyleEr"], ['AddImageBorderStyleEr'], "UpdateAddImageNow", dg('AddImageBorderStyleEr')).value + ' ' + confixWrapper("functionCall", "dg('AddImageBorderColorEr')", ["AddImageBorderColorEr"], ['AddImageBorderColorEr'], "UpdateAddImageNow", dg('AddImageBorderColorEr')).value + ';" />'));
}
function getPersianDigit(num) {
  var PD = confixWrapper("initvar", "var PD = new Array(\"&#1776;\", \"&#1777;\", \"&#1778;\", \"&#1779;\", \"&#1780;\", \"&#1781;\", \"&#1782;\", \"&#1783;\", \"&#1784;\", \"&#1785;\")", [""], [], "getPersianDigit", new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;"));
  var ret = confixWrapper("initvar", "var ret = \"\"", [""], [], "getPersianDigit", "");
do {
    ret = confixWrapper("infix", "ret = PD[(num % 10)] + ret", [""], [], "getPersianDigit", PD[(num % 10)] + ret);
    num = confixWrapper("infix", "num = confixWrapper(\"functionCall\", \"Math.floor(num / 10)\", [\"num / 10\"], [num / 10], \"getPersianDigit\", Math.floor(num / 10))", [""], [], "getPersianDigit", confixWrapper("functionCall", "Math.floor(num / 10)", ["num / 10"], [num / 10], "getPersianDigit", Math.floor(num / 10)));
  } while (num > 0);
  return confixWrapper("return", "return ret;", [""], [], "getPersianDigit", ret);
}
function convertPersianDigit(str) {
  var PD = confixWrapper("initvar", "var PD = new Array(\"&#1776;\", \"&#1777;\", \"&#1778;\", \"&#1779;\", \"&#1780;\", \"&#1781;\", \"&#1782;\", \"&#1783;\", \"&#1784;\", \"&#1785;\")", [""], [], "convertPersianDigit", new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;"));
  var ret = confixWrapper("initvar", "var ret = 0", [""], [], "convertPersianDigit", 0), pwr = confixWrapper("initvar", "var pwr = 1", [""], [], "convertPersianDigit", 1);
  for (var i = confixWrapper("initvar", "var i = str.length - 1", [""], [], "convertPersianDigit", str.length - 1); confixWrapper("loopCondition", "i >= 0", ["i"], [i], "convertPersianDigit", i >= 0); i--) 
    {
      var t = confixWrapper("initvar", "var t = 0", [""], [], "convertPersianDigit", 0);
      for (var j = confixWrapper("initvar", "var j = 0", [""], [], "convertPersianDigit", 0); confixWrapper("loopCondition", "j < 10", ["j"], [j], "convertPersianDigit", j < 10); j++) 
        if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"str.charCodeAt(i)\", [\"i\"], [i], \"convertPersianDigit\", str.charCodeAt(i)) == PD[j].substring(2, 6)", [""], [], "convertPersianDigit", confixWrapper("functionCall", "str.charCodeAt(i)", ["i"], [i], "convertPersianDigit", str.charCodeAt(i)) == PD[j].substring(2, 6))) 
        t = confixWrapper("infix", "t = j", [""], [], "convertPersianDigit", j);
      ret += t * pwr;
      pwr *= 10;
    }
  return confixWrapper("return", "return ret;", [""], [], "convertPersianDigit", ret);
}
function ShowAddImage(side, part, num, eve) {
  var LegendText;
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ShowAddImage", global_lang == 'fa')) 
  LegendText = confixWrapper("infix", "LegendText = confixWrapper(\"functionCall\", \"translateIt('Afzoodane Tasvir Be Peyvande Shomareye')\", [\"Afzoodane Tasvir Be Peyvande Shomareye\"], ['Afzoodane Tasvir Be Peyvande Shomareye'], \"ShowAddImage\", translateIt('Afzoodane Tasvir Be Peyvande Shomareye')) + ' <b>' + getPersianDigit(num + 1) + '</b> ' + translateIt('Az Jabeye Shomareye') + ' <b>' + getPersianDigit(part + 1) + '</b> ' + translateIt('Az Sotoone Samte') + ' <b>' + (side == 'R' ? confixWrapper(\"functionCall\", \"translateIt('Raast')\", [\"Raast\"], ['Raast'], \"ShowAddImage\", translateIt('Raast')) : translateIt('Chap')) + '</b>'", [""], [], "ShowAddImage", confixWrapper("functionCall", "translateIt('Afzoodane Tasvir Be Peyvande Shomareye')", ["Afzoodane Tasvir Be Peyvande Shomareye"], ['Afzoodane Tasvir Be Peyvande Shomareye'], "ShowAddImage", translateIt('Afzoodane Tasvir Be Peyvande Shomareye')) + ' <b>' + getPersianDigit(num + 1) + '</b> ' + translateIt('Az Jabeye Shomareye') + ' <b>' + getPersianDigit(part + 1) + '</b> ' + translateIt('Az Sotoone Samte') + ' <b>' + (side == 'R' ? confixWrapper("functionCall", "translateIt('Raast')", ["Raast"], ['Raast'], "ShowAddImage", translateIt('Raast')) : translateIt('Chap')) + '</b>'); else LegendText = confixWrapper("infix", "LegendText = 'Add Image to Link <b>#' + (num + 1) + '</b> of Box <b>#' + (part + 1) + '</b> of Side <b>' + (side == 'R' ? 'Right' : 'Left') + '</b>'", [""], [], "ShowAddImage", 'Add Image to Link <b>#' + (num + 1) + '</b> of Box <b>#' + (part + 1) + '</b> of Side <b>' + (side == 'R' ? 'Right' : 'Left') + '</b>');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('addImageLegend')\", [\"addImageLegend\"], ['addImageLegend'], \"ShowAddImage\", dg('addImageLegend')).innerHTML == LegendText", [""], [], "ShowAddImage", confixWrapper("functionCall", "dg('addImageLegend')", ["addImageLegend"], ['addImageLegend'], "ShowAddImage", dg('addImageLegend')).innerHTML == LegendText)) 
  {
    confixWrapper("functionCall", "HideAddImage()", [], [], "ShowAddImage", HideAddImage());
    return;
  }
  if (confixWrapper("condition", "global_isPathedHide", [""], [], "ShowAddImage", global_isPathedHide)) 
  confixWrapper("functionCall", "alertPathedHide()", [], [], "ShowAddImage", alertPathedHide());
  global_AINode = confixWrapper("infix", "global_AINode = '_' + side + '_LinkTxt_' + part + '_' + num", [""], [], "ShowAddImage", '_' + side + '_LinkTxt_' + part + '_' + num);
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"ShowAddImage\", getMyXY(eve, 0))", [""], [], "ShowAddImage", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "ShowAddImage", getMyXY(eve, 0)));
  var myY = confixWrapper("initvar", "var myY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"ShowAddImage\", getMyXY(eve, 1))", [""], [], "ShowAddImage", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "ShowAddImage", getMyXY(eve, 1)));
  confixWrapper("functionCall", "dg('addImageLegend')", ["addImageLegend"], ['addImageLegend'], "ShowAddImage", dg('addImageLegend')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('addImageLegend')\", [\"addImageLegend\"], ['addImageLegend'], \"ShowAddImage\", dg('addImageLegend')).innerHTML = LegendText", [""], [], "ShowAddImage", LegendText);
  confixWrapper("functionCall", "dg('AddImageImageIAddress')", ["AddImageImageIAddress"], ['AddImageImageIAddress'], "ShowAddImage", dg('AddImageImageIAddress')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AddImageImageIAddress')\", [\"AddImageImageIAddress\"], ['AddImageImageIAddress'], \"ShowAddImage\", dg('AddImageImageIAddress')).value = ''", [""], [], "ShowAddImage", '');
  confixWrapper("functionCall", "dg('AddImageImageIAlt')", ["AddImageImageIAlt"], ['AddImageImageIAlt'], "ShowAddImage", dg('AddImageImageIAlt')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('AddImageImageIAlt')\", [\"AddImageImageIAlt\"], ['AddImageImageIAlt'], \"ShowAddImage\", dg('AddImageImageIAlt')).value = ''", [""], [], "ShowAddImage", '');
  confixWrapper("functionCall", "ChangeByInput('addImage', 'top', (myY + 10) + 'px')", ["addImage", "top", "(myY + 10) + px"], ['addImage', 'top', (myY + 10) + 'px'], "ShowAddImage", ChangeByInput('addImage', 'top', (myY + 10) + 'px'));
  confixWrapper("functionCall", "SwitchDisplay('addImage', 1)", ["addImage", "1"], ['addImage', 1], "ShowAddImage", SwitchDisplay('addImage', 1));
  confixWrapper("functionCall", "SwitchSelectIE(0)", ["0"], [0], "ShowAddImage", SwitchSelectIE(0));
}
function HideAddImage() {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDivVisible('addImage')\", [\"addImage\"], ['addImage'], \"HideAddImage\", isDivVisible('addImage'))", [""], [], "HideAddImage", !confixWrapper("functionCall", "isDivVisible('addImage')", ["addImage"], ['addImage'], "HideAddImage", isDivVisible('addImage')))) 
  return;
  confixWrapper("functionCall", "SwitchDisplay('addImage', 0)", ["addImage", "0"], ['addImage', 0], "HideAddImage", SwitchDisplay('addImage', 0));
  confixWrapper("functionCall", "dg('addImageLegend')", ["addImageLegend"], ['addImageLegend'], "HideAddImage", dg('addImageLegend')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('addImageLegend')\", [\"addImageLegend\"], ['addImageLegend'], \"HideAddImage\", dg('addImageLegend')).innerHTML = ''", [""], [], "HideAddImage", '');
  confixWrapper("functionCall", "SwitchSelectIE(1)", ["1"], [1], "HideAddImage", SwitchSelectIE(1));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"HideAddImage\", isIE())", [""], [], "HideAddImage", !confixWrapper("functionCall", "isIE()", [], [], "HideAddImage", isIE()))) 
  {
    confixWrapper("functionCall", "window.blur()", [], [], "HideAddImage", window.blur());
    confixWrapper("functionCall", "window.focus()", [], [], "HideAddImage", window.focus());
  }
}
function HideHelp() {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDivVisible('helpBox')\", [\"helpBox\"], ['helpBox'], \"HideHelp\", isDivVisible('helpBox'))", [""], [], "HideHelp", !confixWrapper("functionCall", "isDivVisible('helpBox')", ["helpBox"], ['helpBox'], "HideHelp", isDivVisible('helpBox')))) 
  return;
  confixWrapper("functionCall", "SwitchDisplay('helpBox', 0)", ["helpBox", "0"], ['helpBox', 0], "HideHelp", SwitchDisplay('helpBox', 0));
  confixWrapper("functionCall", "dg('helpBoxLegend')", ["helpBoxLegend"], ['helpBoxLegend'], "HideHelp", dg('helpBoxLegend')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('helpBoxLegend')\", [\"helpBoxLegend\"], ['helpBoxLegend'], \"HideHelp\", dg('helpBoxLegend')).innerHTML = ''", [""], [], "HideHelp", '');
  confixWrapper("functionCall", "SwitchSelectIE(1)", ["1"], [1], "HideHelp", SwitchSelectIE(1));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"HideHelp\", isIE())", [""], [], "HideHelp", !confixWrapper("functionCall", "isIE()", [], [], "HideHelp", isIE()))) 
  {
    confixWrapper("functionCall", "window.blur()", [], [], "HideHelp", window.blur());
    confixWrapper("functionCall", "window.focus()", [], [], "HideHelp", window.focus());
  }
}
function ShowHelp(s, eve) {
  if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"dg('helpBoxLegend')\", [\"helpBoxLegend\"], ['helpBoxLegend'], \"ShowHelp\", dg('helpBoxLegend')).innerHTML == s)", [""], [], "ShowHelp", (confixWrapper("functionCall", "dg('helpBoxLegend')", ["helpBoxLegend"], ['helpBoxLegend'], "ShowHelp", dg('helpBoxLegend')).innerHTML == s))) 
  {
    confixWrapper("functionCall", "HideHelp()", [], [], "ShowHelp", HideHelp());
    return;
  }
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"ShowHelp\", getMyXY(eve, 0))", [""], [], "ShowHelp", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "ShowHelp", getMyXY(eve, 0)));
  var myY = confixWrapper("initvar", "var myY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"ShowHelp\", getMyXY(eve, 1))", [""], [], "ShowHelp", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "ShowHelp", getMyXY(eve, 1)));
  if (confixWrapper("condition", "myX < 100", [""], [], "ShowHelp", myX < 100)) 
  myX = confixWrapper("infix", "myX = 100", [""], [], "ShowHelp", 100);
  if (confixWrapper("condition", "myX + 250 > window.screen.width - 50", [""], [], "ShowHelp", myX + 250 > window.screen.width - 50)) 
  myX = confixWrapper("infix", "myX = window.screen.width - 300", [""], [], "ShowHelp", window.screen.width - 300);
  confixWrapper("functionCall", "ChangeByInput('helpBox', 'top', (myY + 10) + 'px')", ["helpBox", "top", "(myY + 10) + px"], ['helpBox', 'top', (myY + 10) + 'px'], "ShowHelp", ChangeByInput('helpBox', 'top', (myY + 10) + 'px'));
  confixWrapper("functionCall", "ChangeByInput('helpBox', 'left', (myX - 100) + 'px')", ["helpBox", "left", "(myX - 100) + px"], ['helpBox', 'left', (myX - 100) + 'px'], "ShowHelp", ChangeByInput('helpBox', 'left', (myX - 100) + 'px'));
  confixWrapper("functionCall", "SwitchDisplay('helpBox', 1)", ["helpBox", "1"], ['helpBox', 1], "ShowHelp", SwitchDisplay('helpBox', 1));
  confixWrapper("functionCall", "dg('helpBoxLegend')", ["helpBoxLegend"], ['helpBoxLegend'], "ShowHelp", dg('helpBoxLegend')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('helpBoxLegend')\", [\"helpBoxLegend\"], ['helpBoxLegend'], \"ShowHelp\", dg('helpBoxLegend')).innerHTML = s", [""], [], "ShowHelp", s);
  confixWrapper("functionCall", "dg('helpBoxLegend')", ["helpBoxLegend"], ['helpBoxLegend'], "ShowHelp", dg('helpBoxLegend')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('helpBoxLegend')\", [\"helpBoxLegend\"], ['helpBoxLegend'], \"ShowHelp\", dg('helpBoxLegend')).innerHTML = s", [""], [], "ShowHelp", s);
  confixWrapper("functionCall", "dg('helpBoxInner')", ["helpBoxInner"], ['helpBoxInner'], "ShowHelp", dg('helpBoxInner')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('helpBoxInner')\", [\"helpBoxInner\"], ['helpBoxInner'], \"ShowHelp\", dg('helpBoxInner')).innerHTML = getHelpNow(confixWrapper(\"functionCall\", \"s.toLowerCase()\", [], [], \"ShowHelp\", s.toLowerCase()))", [""], [], "ShowHelp", getHelpNow(confixWrapper("functionCall", "s.toLowerCase()", [], [], "ShowHelp", s.toLowerCase())));
  confixWrapper("functionCall", "SwitchSelectIE(0)", ["0"], [0], "ShowHelp", SwitchSelectIE(0));
}
function ChangeByInput(str, wut, inp) {
  var dest = confixWrapper("initvar", "var dest = (str.style) ? str : confixWrapper(\"functionCall\", \"dg(str)\", [\"str\"], [str], \"ChangeByInput\", dg(str))", [""], [], "ChangeByInput", (str.style) ? str : confixWrapper("functionCall", "dg(str)", ["str"], [str], "ChangeByInput", dg(str)));
  var val, uVal, uEval;
  if (confixWrapper("condition", "inp.value", [""], [], "ChangeByInput", inp.value)) 
  val = confixWrapper("infix", "val = inp.value", ["inp"], [inp], "ChangeByInput", inp.value); else val = confixWrapper("infix", "val = inp", [""], [], "ChangeByInput", inp);
  if (confixWrapper("condition", "wut == 'innerHTML'", [""], [], "ChangeByInput", wut == 'innerHTML')) 
  {
    dest.innerHTML = confixWrapper("infix", "dest.innerHTML = (val.length) ? val : ''", [""], [], "ChangeByInput", (val.length) ? val : '');
    return;
  }
  try {
    uEval = confixWrapper("infix", "uEval = confixWrapper(\"functionCall\", \"eval('dest.style.' + wut)\", [\"dest.style. + wut\"], ['dest.style.' + wut], \"ChangeByInput\", eval('dest.style.' + wut))", [""], [], "ChangeByInput", confixWrapper("functionCall", "eval('dest.style.' + wut)", ["dest.style. + wut"], ['dest.style.' + wut], "ChangeByInput", eval('dest.style.' + wut)));
  }  catch (e) {
  confixWrapper("functionCall", "alert('A Bug! Call Aideen!')", ["A Bug! Call Aideen!"], ['A Bug! Call Aideen!'], "ChangeByInput", alert('A Bug! Call Aideen!'));
}
  uVal = confixWrapper("infix", "uVal = confixWrapper(\"functionCall\", \"String(val + '').toLowerCase()\", [], [], \"ChangeByInput\", confixWrapper(\"functionCall\", \"String(val + '')\", [\"val + \"], [val + ''], \"ChangeByInput\", String(val + '')).toLowerCase())", [""], [], "ChangeByInput", confixWrapper("functionCall", "String(val + '').toLowerCase()", [], [], "ChangeByInput", confixWrapper("functionCall", "String(val + '')", ["val + "], [val + ''], "ChangeByInput", String(val + '')).toLowerCase()));
  uEval = confixWrapper("infix", "uEval = confixWrapper(\"functionCall\", \"String(uEval + '').toLowerCase()\", [], [], \"ChangeByInput\", confixWrapper(\"functionCall\", \"String(uEval + '')\", [\"uEval + \"], [uEval + ''], \"ChangeByInput\", String(uEval + '')).toLowerCase())", [""], [], "ChangeByInput", confixWrapper("functionCall", "String(uEval + '').toLowerCase()", [], [], "ChangeByInput", confixWrapper("functionCall", "String(uEval + '')", ["uEval + "], [uEval + ''], "ChangeByInput", String(uEval + '')).toLowerCase()));
  if (confixWrapper("condition", "uVal == '' || uVal == 'http://' || uVal == 'url(http://)'", [""], [], "ChangeByInput", uVal == '' || uVal == 'http://' || uVal == 'url(http://)')) 
  uVal = confixWrapper("infix", "uVal = ''", [""], [], "ChangeByInput", '');
  if (confixWrapper("condition", "uEval == '' || uEval == 'http://' || uEval == 'url(http://)'", [""], [], "ChangeByInput", uEval == '' || uEval == 'http://' || uEval == 'url(http://)')) 
  uEval = confixWrapper("infix", "uEval = ''", [""], [], "ChangeByInput", '');
  if (confixWrapper("condition", "uVal == uEval", [""], [], "ChangeByInput", uVal == uEval)) 
  return;
  switch (wut) {
    case 'backgroundImage':
      dest.style.backgroundImage = confixWrapper("infix", "dest.style.backgroundImage = 'url('' + val + '')'", [""], [], "ChangeByInput", 'url(\'' + val + '\')');
      break;
    case 'fontFamily':
      dest.style.fontFamily = confixWrapper("infix", "dest.style.fontFamily = val", [""], [], "ChangeByInput", val);
      break;
    case 'fontSize':
      dest.style.fontSize = confixWrapper("infix", "dest.style.fontSize = val", [""], [], "ChangeByInput", val);
      break;
    case 'fontWeight':
      dest.style.fontWeight = confixWrapper("infix", "dest.style.fontWeight = val", [""], [], "ChangeByInput", val);
      break;
    case 'fontStyle':
      dest.style.fontStyle = confixWrapper("infix", "dest.style.fontStyle = val", [""], [], "ChangeByInput", val);
      break;
    case 'textDecoration':
      dest.style.textDecoration = confixWrapper("infix", "dest.style.textDecoration = val", [""], [], "ChangeByInput", val);
      break;
    case 'direction':
      dest.style.direction = confixWrapper("infix", "dest.style.direction = val", [""], [], "ChangeByInput", val);
      break;
    case 'textAlign':
      dest.style.textAlign = confixWrapper("infix", "dest.style.textAlign = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderStyle':
      dest.style.borderStyle = confixWrapper("infix", "dest.style.borderStyle = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderWidth':
      dest.style.borderWidth = confixWrapper("infix", "dest.style.borderWidth = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderBottomWidth':
      dest.style.borderBottomWidth = confixWrapper("infix", "dest.style.borderBottomWidth = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderBottomStyle':
      dest.style.borderBottomStyle = confixWrapper("infix", "dest.style.borderBottomStyle = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderRightStyle':
      dest.style.borderRightStyle = confixWrapper("infix", "dest.style.borderRightStyle = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderBottomColor':
      dest.style.borderBottomColor = confixWrapper("infix", "dest.style.borderBottomColor = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderRightColor':
      dest.style.borderRightColor = confixWrapper("infix", "dest.style.borderRightColor = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderLeftColor':
      dest.style.borderLeftColor = confixWrapper("infix", "dest.style.borderLeftColor = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderTopWidth':
      dest.style.borderTopWidth = confixWrapper("infix", "dest.style.borderTopWidth = val", [""], [], "ChangeByInput", val);
      break;
    case 'borderColor':
      dest.style.borderColor = confixWrapper("infix", "dest.style.borderColor = val", [""], [], "ChangeByInput", val);
      break;
    case 'backgroundColor':
      dest.style.backgroundColor = confixWrapper("infix", "dest.style.backgroundColor = val", [""], [], "ChangeByInput", val);
      break;
    case 'color':
      dest.style.color = confixWrapper("infix", "dest.style.color = val", [""], [], "ChangeByInput", val);
      break;
    case 'visibility':
      dest.style.visibility = confixWrapper("infix", "dest.style.visibility = val", [""], [], "ChangeByInput", val);
      break;
    case 'paddingLeft':
      try {
        dest.style.paddingLeft = confixWrapper("infix", "dest.style.paddingLeft = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'paddingRight':
      try {
        dest.style.paddingRight = confixWrapper("infix", "dest.style.paddingRight = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'paddingTop':
      try {
        dest.style.paddingTop = confixWrapper("infix", "dest.style.paddingTop = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'paddingBottom':
      try {
        dest.style.paddingBottom = confixWrapper("infix", "dest.style.paddingBottom = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'marginLeft':
      try {
        dest.style.marginLeft = confixWrapper("infix", "dest.style.marginLeft = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'marginRight':
      try {
        dest.style.marginRight = confixWrapper("infix", "dest.style.marginRight = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'marginTop':
      dest.style.marginTop = confixWrapper("infix", "dest.style.marginTop = val", [""], [], "ChangeByInput", val);
      break;
    case 'marginBottom':
      dest.style.marginBottom = confixWrapper("infix", "dest.style.marginBottom = val", [""], [], "ChangeByInput", val);
      break;
    case 'backgroundRepeat':
      dest.style.backgroundRepeat = confixWrapper("infix", "dest.style.backgroundRepeat = val", [""], [], "ChangeByInput", val);
      break;
    case 'backgroundAttachment':
      dest.style.backgroundAttachment = confixWrapper("infix", "dest.style.backgroundAttachment = val", [""], [], "ChangeByInput", val);
      break;
    case 'backgroundPosition':
      dest.style.backgroundPosition = confixWrapper("infix", "dest.style.backgroundPosition = val", [""], [], "ChangeByInput", val);
      break;
    case 'width':
      try {
        dest.style.width = confixWrapper("infix", "dest.style.width = val", [""], [], "ChangeByInput", val);
      }      catch (e) {
}
      break;
    case 'top':
      dest.style.top = confixWrapper("infix", "dest.style.top = val", [""], [], "ChangeByInput", val);
      break;
    case 'left':
      dest.style.left = confixWrapper("infix", "dest.style.left = val", [""], [], "ChangeByInput", val);
      break;
    case 'lineHeight':
      dest.style.lineHeight = confixWrapper("infix", "dest.style.lineHeight = val", [""], [], "ChangeByInput", val);
      break;
    case 'height':
      try {
        dest.style.height = confixWrapper("infix", "dest.style.height = val", [""], [], "ChangeByInput", val);
        break;
      }      catch (e) {
}
      break;
  }
}
function ChangeHeaderDirection(who, wut) {
  confixWrapper("functionCall", "ChangeByInput('HeaderPartText', 'direction', wut)", ["HeaderPartText", "direction", "wut"], ['HeaderPartText', 'direction', wut], "ChangeHeaderDirection", ChangeByInput('HeaderPartText', 'direction', wut));
  confixWrapper("functionCall", "ChangeByInput('TitleTextTextEr', 'direction', wut)", ["TitleTextTextEr", "direction", "wut"], ['TitleTextTextEr', 'direction', wut], "ChangeHeaderDirection", ChangeByInput('TitleTextTextEr', 'direction', wut));
  confixWrapper("functionCall", "ChangeByInput('SubTitleTextTextEr', 'direction', wut)", ["SubTitleTextTextEr", "direction", "wut"], ['SubTitleTextTextEr', 'direction', wut], "ChangeHeaderDirection", ChangeByInput('SubTitleTextTextEr', 'direction', wut));
  confixWrapper("functionCall", "ChangeByInput('TitleText', 'direction', wut)", ["TitleText", "direction", "wut"], ['TitleText', 'direction', wut], "ChangeHeaderDirection", ChangeByInput('TitleText', 'direction', wut));
  confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'direction', wut)", ["SubTitleText", "direction", "wut"], ['SubTitleText', 'direction', wut], "ChangeHeaderDirection", ChangeByInput('SubTitleText', 'direction', wut));
  if (confixWrapper("condition", "global_canWrite", [""], [], "ChangeHeaderDirection", global_canWrite)) 
  {
    var dir = confixWrapper("initvar", "var dir = (wut == 'rtl') ? 'right' : 'left'", [""], [], "ChangeHeaderDirection", (wut == 'rtl') ? 'right' : 'left');
    var who = confixWrapper("initvar", "var who = (wut == 'rtl') ? 'HeaderPartTextAlignErRight' : 'HeaderPartTextAlignErLeft'", [""], [], "ChangeHeaderDirection", (wut == 'rtl') ? 'HeaderPartTextAlignErRight' : 'HeaderPartTextAlignErLeft');
    confixWrapper("functionCall", "dg(who)", ["who"], [who], "ChangeHeaderDirection", dg(who)).checked = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg(who)\", [\"who\"], [who], \"ChangeHeaderDirection\", dg(who)).checked = true", [""], [], "ChangeHeaderDirection", true);
    confixWrapper("functionCall", "doDuty(who)", ["who"], [who], "ChangeHeaderDirection", doDuty(who));
    confixWrapper("functionCall", "ChangeByInput('TitleText', 'textAlign', dir)", ["TitleText", "textAlign", "dir"], ['TitleText', 'textAlign', dir], "ChangeHeaderDirection", ChangeByInput('TitleText', 'textAlign', dir));
    confixWrapper("functionCall", "ChangeByInput('SubTitleText', 'textAlign', dir)", ["SubTitleText", "textAlign", "dir"], ['SubTitleText', 'textAlign', dir], "ChangeHeaderDirection", ChangeByInput('SubTitleText', 'textAlign', dir));
  }
}
function ReadCookie(name) {
  var nameEQ = confixWrapper("initvar", "var nameEQ = name + \"=\"", [""], [], "ReadCookie", name + "=");
  var ca = confixWrapper("initvar", "var ca = confixWrapper(\"functionCall\", \"document.cookie.split(';')\", [\";\"], [';'], \"ReadCookie\", document.cookie.split(';'))", [""], [], "ReadCookie", confixWrapper("functionCall", "document.cookie.split(';')", [";"], [';'], "ReadCookie", document.cookie.split(';')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "ReadCookie", 0); confixWrapper("loopCondition", "i < ca.length", ["i", "ca"], [i, ca], "ReadCookie", i < ca.length); i++) 
    {
      var c = confixWrapper("initvar", "var c = ca[i]", [""], [], "ReadCookie", ca[i]);
      while (confixWrapper("functionCall", "c.charAt(0)", ["0"], [0], "ReadCookie", c.charAt(0)) == ' ') 
        c = confixWrapper("infix", "c = confixWrapper(\"functionCall\", \"c.substring(1, c.length)\", [\"1\", \"c.length\"], [1, c.length], \"ReadCookie\", c.substring(1, c.length))", [""], [], "ReadCookie", confixWrapper("functionCall", "c.substring(1, c.length)", ["1", "c.length"], [1, c.length], "ReadCookie", c.substring(1, c.length)));
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"c.indexOf(nameEQ)\", [\"nameEQ\"], [nameEQ], \"ReadCookie\", c.indexOf(nameEQ)) == 0", [""], [], "ReadCookie", confixWrapper("functionCall", "c.indexOf(nameEQ)", ["nameEQ"], [nameEQ], "ReadCookie", c.indexOf(nameEQ)) == 0)) 
      return confixWrapper("return", "return confixWrapper(\"functionCall\", \"c.substring(nameEQ.length, c.length)\", [\"nameEQ.length\", \"c.length\"], [nameEQ.length, c.length], \"ReadCookie\", c.substring(nameEQ.length, c.length));", [""], [], "ReadCookie", confixWrapper("functionCall", "c.substring(nameEQ.length, c.length)", ["nameEQ.length", "c.length"], [nameEQ.length, c.length], "ReadCookie", c.substring(nameEQ.length, c.length)));
    }
  return confixWrapper("return", "return null;", [""], [], "ReadCookie", null);
}
function PsycHodramaDefaultString() {
  var s;
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "PsycHodramaDefaultString", global_lang == 'fa')) 
  s = confixWrapper("infix", "s = '{100blogger]720px]90^25]repeat]scroll]top^20center]solid]1px]Tahoma^2C^20sans-serif]5em]1.75em]solid]1px]30px]40px]5px]solid]1px]solid]1px]_L_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]Tahoma^2C^20sans-serif]solid]1px]solid]1px]Tahoma^2C^20sans-serif]1em]1em]1em]150^25]1em]1em]_R_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]4]4]!0648!0628!0644!0627!06AF^20!0645!0646]!06A9!0644!0645!0647!200C!06CC^20!06A9!0644!06CC!062F!06CC!06F1^2C^20!06A9!0644!0645!0647!200C!06CC^20!06A9!0644!06CC!062F!06CC!06F2]!0633!0627!06CC!06A9!0648^3A^20!0642!0627!0644!0628!200C!0633!0627!0632^20!0622!0632!0627!062F],](]!0633!0641!06CC!062F](])]!0622!0628!06CC]!0646!0627!0631!0646!062C!06CC]!0622!0628!06CC^20!062A!06CC!0631!0647],](](]]]black](]3]1]2]3]1]1]3]1]2]3]1]1],](](]^23CCC])])]!0633!0627!06CC!06A9!0648]!0642!0627!0644!0628!200C^20!0648!0628!0644!0627!06AF!200C!062A!0627!0646^20!0631!0627!060C^20!062E!0648!062F!062A!0627!0646^20!0628!0633!0627!0632!06CC!062F^21],](],](](]!0633!06CC!0627!0647](](](]^23666](](](]^23333](],](](]75]20],](](]^23F6F6F6])])]black]1.5]15],](](]^23999])])]black]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C],](](]^23CCC])])],](](]^23EEE])])],](](]^23CCC])])],](]black]^23666]15]3]25]20]black],](](],](],](](](],]black](](](],](](](],]black](](](](](],]^23333](](](](](],]^2336F]^23333](],](]!0646!0648!0634!062A!0647^20!0634!062F!0647^20!062F!0631^20^21!0632!0645!0627!0646^20!062A!0648!0633!0637^20^21!0646!0648!06CC!0633.]20],](](]black])])]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C]]]]!062E!0627!0646!0647]^24HOME]!0635!0641!062D!0647^20!0627!0635!0644!06CC]!0627!06CC!0645!06CC!0644]^24EMAIL]!062A!0645!0627!0633^20!0628!0627^20!0645!0646]RSS]^24RSS]RSS^20Feed]!0622!0631!0634!06CC!0648]]]^24ARCHIVE]^20]]!062F!0648!0633!062A!0627!0646]]]Horm])blog.horm.org]Hallucinations^20Of^20Reabsorbed^20Mind]Phorm])p.horm.org]Another^20Phormation]!063A!06CC!0631!0647]]]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_psycho.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E]^24PSYCHO]!0633!0627!06CC!06A9!0648^3A^20!0642!0627!0644!0628^20!0633!0627!0632^20!0622!0632!0627!062F]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_firefox.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])www.mozilla.org/products/firefox/]Get^20Firefox^21]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_xhtml.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])validator.w3.org/check/referer]XHTML^20Validator^26^2361470^3BPsycHo}'", [""], [], "PsycHodramaDefaultString", '{100blogger]720px]90^25]repeat]scroll]top^20center]solid]1px]Tahoma^2C^20sans-serif]5em]1.75em]solid]1px]30px]40px]5px]solid]1px]solid]1px]_L_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]Tahoma^2C^20sans-serif]solid]1px]solid]1px]Tahoma^2C^20sans-serif]1em]1em]1em]150^25]1em]1em]_R_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]4]4]!0648!0628!0644!0627!06AF^20!0645!0646]!06A9!0644!0645!0647!200C!06CC^20!06A9!0644!06CC!062F!06CC!06F1^2C^20!06A9!0644!0645!0647!200C!06CC^20!06A9!0644!06CC!062F!06CC!06F2]!0633!0627!06CC!06A9!0648^3A^20!0642!0627!0644!0628!200C!0633!0627!0632^20!0622!0632!0627!062F],](]!0633!0641!06CC!062F](])]!0622!0628!06CC]!0646!0627!0631!0646!062C!06CC]!0622!0628!06CC^20!062A!06CC!0631!0647],](](]]]black](]3]1]2]3]1]1]3]1]2]3]1]1],](](]^23CCC])])]!0633!0627!06CC!06A9!0648]!0642!0627!0644!0628!200C^20!0648!0628!0644!0627!06AF!200C!062A!0627!0646^20!0631!0627!060C^20!062E!0648!062F!062A!0627!0646^20!0628!0633!0627!0632!06CC!062F^21],](],](](]!0633!06CC!0627!0647](](](]^23666](](](]^23333](],](](]75]20],](](]^23F6F6F6])])]black]1.5]15],](](]^23999])])]black]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C],](](]^23CCC])])],](](]^23EEE])])],](](]^23CCC])])],](]black]^23666]15]3]25]20]black],](](],](],](](](],]black](](](],](](](],]black](](](](](],]^23333](](](](](],]^2336F]^23333](],](]!0646!0648!0634!062A!0647^20!0634!062F!0647^20!062F!0631^20^21!0632!0645!0627!0646^20!062A!0648!0633!0637^20^21!0646!0648!06CC!0633.]20],](](]black])])]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C]]]]!062E!0627!0646!0647]^24HOME]!0635!0641!062D!0647^20!0627!0635!0644!06CC]!0627!06CC!0645!06CC!0644]^24EMAIL]!062A!0645!0627!0633^20!0628!0627^20!0645!0646]RSS]^24RSS]RSS^20Feed]!0622!0631!0634!06CC!0648]]]^24ARCHIVE]^20]]!062F!0648!0633!062A!0627!0646]]]Horm])blog.horm.org]Hallucinations^20Of^20Reabsorbed^20Mind]Phorm])p.horm.org]Another^20Phormation]!063A!06CC!0631!0647]]]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_psycho.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E]^24PSYCHO]!0633!0627!06CC!06A9!0648^3A^20!0642!0627!0644!0628^20!0633!0627!0632^20!0622!0632!0627!062F]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_firefox.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])www.mozilla.org/products/firefox/]Get^20Firefox^21]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_xhtml.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])validator.w3.org/check/referer]XHTML^20Validator^26^2361470^3BPsycHo}'); else s = confixWrapper("infix", "s = '{100blogger]720px]90^25]repeat]scroll]top^20center]solid]1px]Tahoma^2C^20sans-serif]5em]1.75em]solid]1px]30px]40px]5px]solid]1px]solid]1px]_L_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]Tahoma^2C^20sans-serif]solid]1px]solid]1px]Tahoma^2C^20sans-serif]1em]1em]1em]150^25]1em]1em]_R_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]4]4]]keyword1^2C^20keyword2^2C^20keyword3]PsycHo^3A^20Free^20Template^20Generator],](]white](])]blue]coral]navy],](](]]]black](]3]1]2]3]1]1]3]1]2]3]1]1],](](]^23CCC])])]PsycHo]Your^20own^20psychogenesis^2C^20Your^20own^20template^21],](],](](]black](](](]^23666](](](]^23333](](],](]75]20],](](]^23F6F6F6])])]black]1.5]15],](](]^23999])])]black]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C],](](]^23CCC])])],](](]^23EEE])])],](](]^23CCC])])],](]black]^23666]15]3]25]20]black],](](],](],](](],](]black](](](],](](](],]black](](](],](](]^23333](](](](](],]^2336F]^23333](],](]Written^20at^20^24TIME^20by^20^24AUTH.]20],](](]black])])]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C]]]]Home]^24HOME]First^20Page]Email]^24EMAIL]Mail^20me^21]RSS]^24RSS]RSS^20Feed]Archive]]]^24ARCHIVE]^20]]Friends]]]Horm])blog.horm.org]Hallucinations^20Of^20Reabsorbed^20Mind]Phorm])p.horm.org]Another^20Phormation]Etc]]]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_psycho.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E]^24PSYCHO]PsycHo^3A^20Free^20Template^20Generator]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_firefox.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])www.mozilla.org/products/firefox/]Get^20Firefox^21]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_xhtml.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])validator.w3.org/check/referer]XHTML^20Validator^26^2361470^3BPsycHo}'", [""], [], "PsycHodramaDefaultString", '{100blogger]720px]90^25]repeat]scroll]top^20center]solid]1px]Tahoma^2C^20sans-serif]5em]1.75em]solid]1px]30px]40px]5px]solid]1px]solid]1px]_L_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]Tahoma^2C^20sans-serif]solid]1px]solid]1px]Tahoma^2C^20sans-serif]1em]1em]1em]150^25]1em]1em]_R_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]4]4]]keyword1^2C^20keyword2^2C^20keyword3]PsycHo^3A^20Free^20Template^20Generator],](]white](])]blue]coral]navy],](](]]]black](]3]1]2]3]1]1]3]1]2]3]1]1],](](]^23CCC])])]PsycHo]Your^20own^20psychogenesis^2C^20Your^20own^20template^21],](],](](]black](](](]^23666](](](]^23333](](],](]75]20],](](]^23F6F6F6])])]black]1.5]15],](](]^23999])])]black]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C],](](]^23CCC])])],](](]^23EEE])])],](](]^23CCC])])],](]black]^23666]15]3]25]20]black],](](],](],](](],](]black](](](],](](](],]black](](](],](](]^23333](](](](](],]^2336F]^23333](],](]Written^20at^20^24TIME^20by^20^24AUTH.]20],](](]black])])]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C]]]]Home]^24HOME]First^20Page]Email]^24EMAIL]Mail^20me^21]RSS]^24RSS]RSS^20Feed]Archive]]]^24ARCHIVE]^20]]Friends]]]Horm])blog.horm.org]Hallucinations^20Of^20Reabsorbed^20Mind]Phorm])p.horm.org]Another^20Phormation]Etc]]]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_psycho.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E]^24PSYCHO]PsycHo^3A^20Free^20Template^20Generator]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_firefox.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])www.mozilla.org/products/firefox/]Get^20Firefox^21]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_xhtml.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])validator.w3.org/check/referer]XHTML^20Validator^26^2361470^3BPsycHo}');
  return confixWrapper("return", "return s;", [""], [], "PsycHodramaDefaultString", s);
}
function ResetPsycHodrama() {
  confixWrapper("functionCall", "ReadPsycHodrama(PsycHodramaDefaultString())", ["PsycHodramaDefaultString()"], [confixWrapper("functionCall", "PsycHodramaDefaultString()", [], [], "ResetPsycHodrama", PsycHodramaDefaultString())], "ResetPsycHodrama", ReadPsycHodrama(confixWrapper("functionCall", "PsycHodramaDefaultString()", [], [], "ResetPsycHodrama", PsycHodramaDefaultString())));
}
function deBugify(s) {
  confixWrapper("functionCall", "dg('jj')", ["jj"], ['jj'], "deBugify", dg('jj')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('jj')\", [\"jj\"], ['jj'], \"deBugify\", dg('jj')).innerHTML = (s) + '<br />' + confixWrapper(\"functionCall\", \"dg('jj')\", [\"jj\"], ['jj'], \"deBugify\", dg('jj')).innerHTML", ["(s) + '<br />' + confixWrapper(\"functionCall\", \"dg('jj')\", [\"jj\"], ['jj'], \"deBugify\", dg('jj'))"], [(s) + '<br />' + confixWrapper("functionCall", "dg('jj')", ["jj"], ['jj'], "deBugify", dg('jj'))], "deBugify", (s) + '<br />' + confixWrapper("functionCall", "dg('jj')", ["jj"], ['jj'], "deBugify", dg('jj')).innerHTML);
}
function TakeEffectAll(s) {
  global_isTakingEffectAll = confixWrapper("infix", "global_isTakingEffectAll = true", [""], [], "TakeEffectAll", true);
  var d1 = confixWrapper("initvar", "var d1 = new Date()", [""], [], "TakeEffectAll", new Date());
  var v1 = confixWrapper("initvar", "var v1 = (confixWrapper(\"functionCall\", \"d1.getMinutes()\", [], [], \"TakeEffectAll\", d1.getMinutes()) * 60 * 1000 + confixWrapper(\"functionCall\", \"d1.getSeconds()\", [], [], \"TakeEffectAll\", d1.getSeconds()) * 1000 + d1.getMilliseconds())", [""], [], "TakeEffectAll", (confixWrapper("functionCall", "d1.getMinutes()", [], [], "TakeEffectAll", d1.getMinutes()) * 60 * 1000 + confixWrapper("functionCall", "d1.getSeconds()", [], [], "TakeEffectAll", d1.getSeconds()) * 1000 + d1.getMilliseconds()));
  if (confixWrapper("condition", "s", [""], [], "TakeEffectAll", s)) 
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.split(drama_splitter)\", [\"drama_splitter\"], [drama_splitter], \"TakeEffectAll\", s.split(drama_splitter))", [""], [], "TakeEffectAll", confixWrapper("functionCall", "s.split(drama_splitter)", ["drama_splitter"], [drama_splitter], "TakeEffectAll", s.split(drama_splitter)));
  var sc = confixWrapper("initvar", "var sc = 0", [""], [], "TakeEffectAll", 0);
  var objs = confixWrapper("initvar", "var objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('select')\", [\"select\"], ['select'], \"TakeEffectAll\", document.getElementsByTagName('select'))", [""], [], "TakeEffectAll", confixWrapper("functionCall", "document.getElementsByTagName('select')", ["select"], ['select'], "TakeEffectAll", document.getElementsByTagName('select')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "TakeEffectAll", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "TakeEffectAll", i < objs.length); i++) 
    {
      if (confixWrapper("condition", "s", [""], [], "TakeEffectAll", s)) 
      objs[i].value = confixWrapper("infix", "objs[i].value = s[sc++]", [""], [], "TakeEffectAll", s[sc++]);
      confixWrapper("functionCall", "doDuty(objs[i])", ["objs[i]"], [objs[i]], "TakeEffectAll", doDuty(objs[i]));
    }
  objs = confixWrapper("infix", "objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('input')\", [\"input\"], ['input'], \"TakeEffectAll\", document.getElementsByTagName('input'))", [""], [], "TakeEffectAll", confixWrapper("functionCall", "document.getElementsByTagName('input')", ["input"], ['input'], "TakeEffectAll", document.getElementsByTagName('input')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "TakeEffectAll", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "TakeEffectAll", i < objs.length); i++) 
    {
      if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"TakeEffectAll\", objs[i].getAttribute('type')) == 'radio') || (confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"TakeEffectAll\", objs[i].getAttribute('type')) == 'checkbox')", [""], [], "TakeEffectAll", (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "TakeEffectAll", objs[i].getAttribute('type')) == 'radio') || (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "TakeEffectAll", objs[i].getAttribute('type')) == 'checkbox'))) 
      {
        if (confixWrapper("condition", "s", [""], [], "TakeEffectAll", s)) 
        objs[i].checked = confixWrapper("infix", "objs[i].checked = (s[sc++] == 'true')", [""], [], "TakeEffectAll", (s[sc++] == 'true'));
        if (confixWrapper("condition", "objs[i].checked && confixWrapper(\"functionCall\", \"objs[i].id.substring(0, 12)\", [\"0\", \"12\"], [0, 12], \"TakeEffectAll\", objs[i].id.substring(0, 12)) == 'ColsNumberIs'", [""], [], "TakeEffectAll", objs[i].checked && confixWrapper("functionCall", "objs[i].id.substring(0, 12)", ["0", "12"], [0, 12], "TakeEffectAll", objs[i].id.substring(0, 12)) == 'ColsNumberIs')) 
        confixWrapper("functionCall", "doDuty(objs[i])", ["objs[i]"], [objs[i]], "TakeEffectAll", doDuty(objs[i]));
      } else {
        if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDumpLinky(objs[i].id)\", [\"objs[i].id\"], [objs[i].id], \"TakeEffectAll\", isDumpLinky(objs[i].id))", [""], [], "TakeEffectAll", !confixWrapper("functionCall", "isDumpLinky(objs[i].id)", ["objs[i].id"], [objs[i].id], "TakeEffectAll", isDumpLinky(objs[i].id)))) 
        {
          if (confixWrapper("condition", "s", [""], [], "TakeEffectAll", s)) 
          objs[i].value = confixWrapper("infix", "objs[i].value = s[sc++]", [""], [], "TakeEffectAll", s[sc++]);
          confixWrapper("functionCall", "doDuty(objs[i])", ["objs[i]"], [objs[i]], "TakeEffectAll", doDuty(objs[i]));
        }
      }
    }
  objs = confixWrapper("infix", "objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('input')\", [\"input\"], ['input'], \"TakeEffectAll\", document.getElementsByTagName('input'))", [""], [], "TakeEffectAll", confixWrapper("functionCall", "document.getElementsByTagName('input')", ["input"], ['input'], "TakeEffectAll", document.getElementsByTagName('input')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "TakeEffectAll", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "TakeEffectAll", i < objs.length); i++) 
    {
      if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"TakeEffectAll\", objs[i].getAttribute('type')) == 'radio') || (confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"TakeEffectAll\", objs[i].getAttribute('type')) == 'checkbox')", [""], [], "TakeEffectAll", (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "TakeEffectAll", objs[i].getAttribute('type')) == 'radio') || (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "TakeEffectAll", objs[i].getAttribute('type')) == 'checkbox'))) 
      {
        if (confixWrapper("condition", "objs[i].checked && confixWrapper(\"functionCall\", \"objs[i].id.substring(0, 12)\", [\"0\", \"12\"], [0, 12], \"TakeEffectAll\", objs[i].id.substring(0, 12)) != 'ColsNumberIs'", [""], [], "TakeEffectAll", objs[i].checked && confixWrapper("functionCall", "objs[i].id.substring(0, 12)", ["0", "12"], [0, 12], "TakeEffectAll", objs[i].id.substring(0, 12)) != 'ColsNumberIs')) 
        confixWrapper("functionCall", "doDuty(objs[i])", ["objs[i]"], [objs[i]], "TakeEffectAll", doDuty(objs[i]));
      }
    }
  var d3 = confixWrapper("initvar", "var d3 = new Date()", [""], [], "TakeEffectAll", new Date());
  var v3 = confixWrapper("initvar", "var v3 = (confixWrapper(\"functionCall\", \"d3.getMinutes()\", [], [], \"TakeEffectAll\", d3.getMinutes()) * 60 * 1000 + confixWrapper(\"functionCall\", \"d3.getSeconds()\", [], [], \"TakeEffectAll\", d3.getSeconds()) * 1000 + d3.getMilliseconds())", [""], [], "TakeEffectAll", (confixWrapper("functionCall", "d3.getMinutes()", [], [], "TakeEffectAll", d3.getMinutes()) * 60 * 1000 + confixWrapper("functionCall", "d3.getSeconds()", [], [], "TakeEffectAll", d3.getSeconds()) * 1000 + d3.getMilliseconds()));
  var sides = confixWrapper("initvar", "var sides = new Array('R', 'L')", [""], [], "TakeEffectAll", new Array('R', 'L'));
  for (var t = confixWrapper("initvar", "var t = 0", [""], [], "TakeEffectAll", 0); confixWrapper("loopCondition", "t < 2", ["t"], [t], "TakeEffectAll", t < 2); t++) 
    {
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('Side' + sides[t] + 'Column')\", [\"Side + sides[t] + Column\"], ['Side' + sides[t] + 'Column'], \"TakeEffectAll\", dg('Side' + sides[t] + 'Column')).style.display == 'none'", [""], [], "TakeEffectAll", confixWrapper("functionCall", "dg('Side' + sides[t] + 'Column')", ["Side + sides[t] + Column"], ['Side' + sides[t] + 'Column'], "TakeEffectAll", dg('Side' + sides[t] + 'Column')).style.display == 'none')) 
      continue;
      var bs = confixWrapper("initvar", "var bs = confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_boxNumForce')\", [\"_ + sides[t] + _boxNumForce\"], ['_' + sides[t] + '_boxNumForce'], \"TakeEffectAll\", dg('_' + sides[t] + '_boxNumForce')).value", [""], [], "TakeEffectAll", confixWrapper("functionCall", "dg('_' + sides[t] + '_boxNumForce')", ["_ + sides[t] + _boxNumForce"], ['_' + sides[t] + '_boxNumForce'], "TakeEffectAll", dg('_' + sides[t] + '_boxNumForce')).value);
      for (var i = confixWrapper("initvar", "var i = 0", [""], [], "TakeEffectAll", 0); confixWrapper("loopCondition", "i < bs", ["i", "bs"], [i, bs], "TakeEffectAll", i < bs); i++) 
        {
          if (confixWrapper("condition", "s", [""], [], "TakeEffectAll", s)) 
          {
            confixWrapper("functionCall", "SetValAndDo('_' + sides[t] + '_TitleTxt_' + i, s[sc++], true)", ["_ + sides[t] + _TitleTxt_ + i", "s[sc++]", "true"], ['_' + sides[t] + '_TitleTxt_' + i, s[sc++], true], "TakeEffectAll", SetValAndDo('_' + sides[t] + '_TitleTxt_' + i, s[sc++], true));
            confixWrapper("functionCall", "SetValAndDo('_' + sides[t] + '_PreSurr_' + i, s[sc++], true)", ["_ + sides[t] + _PreSurr_ + i", "s[sc++]", "true"], ['_' + sides[t] + '_PreSurr_' + i, s[sc++], true], "TakeEffectAll", SetValAndDo('_' + sides[t] + '_PreSurr_' + i, s[sc++], true));
            confixWrapper("functionCall", "SetValAndDo('_' + sides[t] + '_PstSurr_' + i, s[sc++], true)", ["_ + sides[t] + _PstSurr_ + i", "s[sc++]", "true"], ['_' + sides[t] + '_PstSurr_' + i, s[sc++], true], "TakeEffectAll", SetValAndDo('_' + sides[t] + '_PstSurr_' + i, s[sc++], true));
          } else {
            confixWrapper("functionCall", "doDuty(dg('_' + sides[t] + '_TitleTxt_' + i))", ["dg(_ + sides[t] + _TitleTxt_ + i)"], [confixWrapper("functionCall", "dg('_' + sides[t] + '_TitleTxt_' + i)", ["_ + sides[t] + _TitleTxt_ + i"], ['_' + sides[t] + '_TitleTxt_' + i], "TakeEffectAll", dg('_' + sides[t] + '_TitleTxt_' + i))], "TakeEffectAll", doDuty(confixWrapper("functionCall", "dg('_' + sides[t] + '_TitleTxt_' + i)", ["_ + sides[t] + _TitleTxt_ + i"], ['_' + sides[t] + '_TitleTxt_' + i], "TakeEffectAll", dg('_' + sides[t] + '_TitleTxt_' + i))));
            confixWrapper("functionCall", "doDuty(dg('_' + sides[t] + '_PreSurr_' + i))", ["dg(_ + sides[t] + _PreSurr_ + i)"], [confixWrapper("functionCall", "dg('_' + sides[t] + '_PreSurr_' + i)", ["_ + sides[t] + _PreSurr_ + i"], ['_' + sides[t] + '_PreSurr_' + i], "TakeEffectAll", dg('_' + sides[t] + '_PreSurr_' + i))], "TakeEffectAll", doDuty(confixWrapper("functionCall", "dg('_' + sides[t] + '_PreSurr_' + i)", ["_ + sides[t] + _PreSurr_ + i"], ['_' + sides[t] + '_PreSurr_' + i], "TakeEffectAll", dg('_' + sides[t] + '_PreSurr_' + i))));
            confixWrapper("functionCall", "doDuty(dg('_' + sides[t] + '_PstSurr_' + i))", ["dg(_ + sides[t] + _PstSurr_ + i)"], [confixWrapper("functionCall", "dg('_' + sides[t] + '_PstSurr_' + i)", ["_ + sides[t] + _PstSurr_ + i"], ['_' + sides[t] + '_PstSurr_' + i], "TakeEffectAll", dg('_' + sides[t] + '_PstSurr_' + i))], "TakeEffectAll", doDuty(confixWrapper("functionCall", "dg('_' + sides[t] + '_PstSurr_' + i)", ["_ + sides[t] + _PstSurr_ + i"], ['_' + sides[t] + '_PstSurr_' + i], "TakeEffectAll", dg('_' + sides[t] + '_PstSurr_' + i))));
          }
          var ls = confixWrapper("initvar", "var ls = confixWrapper(\"functionCall\", \"dg('_' + sides[t] + '_linkNumForce_' + i)\", [\"_ + sides[t] + _linkNumForce_ + i\"], ['_' + sides[t] + '_linkNumForce_' + i], \"TakeEffectAll\", dg('_' + sides[t] + '_linkNumForce_' + i)).value", [""], [], "TakeEffectAll", confixWrapper("functionCall", "dg('_' + sides[t] + '_linkNumForce_' + i)", ["_ + sides[t] + _linkNumForce_ + i"], ['_' + sides[t] + '_linkNumForce_' + i], "TakeEffectAll", dg('_' + sides[t] + '_linkNumForce_' + i)).value);
          for (var j = confixWrapper("initvar", "var j = 0", [""], [], "TakeEffectAll", 0); confixWrapper("loopCondition", "j < ls", ["j", "ls"], [j, ls], "TakeEffectAll", j < ls); j++) 
            {
              if (confixWrapper("condition", "s", [""], [], "TakeEffectAll", s)) 
              {
                confixWrapper("functionCall", "SetValAndDo('_' + sides[t] + '_LinkTxt_' + i + '_' + j, s[sc++], true)", ["_ + sides[t] + _LinkTxt_ + i + _ + j", "s[sc++]", "true"], ['_' + sides[t] + '_LinkTxt_' + i + '_' + j, s[sc++], true], "TakeEffectAll", SetValAndDo('_' + sides[t] + '_LinkTxt_' + i + '_' + j, s[sc++], true));
                confixWrapper("functionCall", "SetValAndDo('_' + sides[t] + '_LinkUrl_' + i + '_' + j, s[sc++], true)", ["_ + sides[t] + _LinkUrl_ + i + _ + j", "s[sc++]", "true"], ['_' + sides[t] + '_LinkUrl_' + i + '_' + j, s[sc++], true], "TakeEffectAll", SetValAndDo('_' + sides[t] + '_LinkUrl_' + i + '_' + j, s[sc++], true));
                confixWrapper("functionCall", "SetValAndDo('_' + sides[t] + '_LinkTtl_' + i + '_' + j, s[sc++], true)", ["_ + sides[t] + _LinkTtl_ + i + _ + j", "s[sc++]", "true"], ['_' + sides[t] + '_LinkTtl_' + i + '_' + j, s[sc++], true], "TakeEffectAll", SetValAndDo('_' + sides[t] + '_LinkTtl_' + i + '_' + j, s[sc++], true));
              } else {
                confixWrapper("functionCall", "doDuty(dg('_' + sides[t] + '_LinkTxt_' + i + '_' + j))", ["dg(_ + sides[t] + _LinkTxt_ + i + _ + j)"], [confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTxt_' + i + '_' + j)", ["_ + sides[t] + _LinkTxt_ + i + _ + j"], ['_' + sides[t] + '_LinkTxt_' + i + '_' + j], "TakeEffectAll", dg('_' + sides[t] + '_LinkTxt_' + i + '_' + j))], "TakeEffectAll", doDuty(confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTxt_' + i + '_' + j)", ["_ + sides[t] + _LinkTxt_ + i + _ + j"], ['_' + sides[t] + '_LinkTxt_' + i + '_' + j], "TakeEffectAll", dg('_' + sides[t] + '_LinkTxt_' + i + '_' + j))));
                confixWrapper("functionCall", "doDuty(dg('_' + sides[t] + '_LinkUrl_' + i + '_' + j))", ["dg(_ + sides[t] + _LinkUrl_ + i + _ + j)"], [confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkUrl_' + i + '_' + j)", ["_ + sides[t] + _LinkUrl_ + i + _ + j"], ['_' + sides[t] + '_LinkUrl_' + i + '_' + j], "TakeEffectAll", dg('_' + sides[t] + '_LinkUrl_' + i + '_' + j))], "TakeEffectAll", doDuty(confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkUrl_' + i + '_' + j)", ["_ + sides[t] + _LinkUrl_ + i + _ + j"], ['_' + sides[t] + '_LinkUrl_' + i + '_' + j], "TakeEffectAll", dg('_' + sides[t] + '_LinkUrl_' + i + '_' + j))));
                confixWrapper("functionCall", "doDuty(dg('_' + sides[t] + '_LinkTtl_' + i + '_' + j))", ["dg(_ + sides[t] + _LinkTtl_ + i + _ + j)"], [confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTtl_' + i + '_' + j)", ["_ + sides[t] + _LinkTtl_ + i + _ + j"], ['_' + sides[t] + '_LinkTtl_' + i + '_' + j], "TakeEffectAll", dg('_' + sides[t] + '_LinkTtl_' + i + '_' + j))], "TakeEffectAll", doDuty(confixWrapper("functionCall", "dg('_' + sides[t] + '_LinkTtl_' + i + '_' + j)", ["_ + sides[t] + _LinkTtl_ + i + _ + j"], ['_' + sides[t] + '_LinkTtl_' + i + '_' + j], "TakeEffectAll", dg('_' + sides[t] + '_LinkTtl_' + i + '_' + j))));
              }
            }
        }
    }
  var d2 = confixWrapper("initvar", "var d2 = new Date()", [""], [], "TakeEffectAll", new Date());
  var v2 = confixWrapper("initvar", "var v2 = (confixWrapper(\"functionCall\", \"d2.getMinutes()\", [], [], \"TakeEffectAll\", d2.getMinutes()) * 60 * 1000 + confixWrapper(\"functionCall\", \"d2.getSeconds()\", [], [], \"TakeEffectAll\", d2.getSeconds()) * 1000 + d2.getMilliseconds())", [""], [], "TakeEffectAll", (confixWrapper("functionCall", "d2.getMinutes()", [], [], "TakeEffectAll", d2.getMinutes()) * 60 * 1000 + confixWrapper("functionCall", "d2.getSeconds()", [], [], "TakeEffectAll", d2.getSeconds()) * 1000 + d2.getMilliseconds()));
  global_isTakingEffectAll = confixWrapper("infix", "global_isTakingEffectAll = false", [""], [], "TakeEffectAll", false);
  global_didSomething = confixWrapper("infix", "global_didSomething = false", [""], [], "TakeEffectAll", false);
  return confixWrapper("return", "return true;", [""], [], "TakeEffectAll", true);
}
function isBoxVisible(side, part) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dg(side + '_PartDiv_' + part)\", [\"side + _PartDiv_ + part\"], [side + '_PartDiv_' + part], \"isBoxVisible\", dg(side + '_PartDiv_' + part)).style.display != 'none');", [""], [], "isBoxVisible", (confixWrapper("functionCall", "dg(side + '_PartDiv_' + part)", ["side + _PartDiv_ + part"], [side + '_PartDiv_' + part], "isBoxVisible", dg(side + '_PartDiv_' + part)).style.display != 'none'));
}
function isLinkVisible(side, part, num) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dg(side + '_LinkBodyContainer_' + part + '_' + num)\", [\"side + _LinkBodyContainer_ + part + _ + num\"], [side + '_LinkBodyContainer_' + part + '_' + num], \"isLinkVisible\", dg(side + '_LinkBodyContainer_' + part + '_' + num)).style.display != 'none');", [""], [], "isLinkVisible", (confixWrapper("functionCall", "dg(side + '_LinkBodyContainer_' + part + '_' + num)", ["side + _LinkBodyContainer_ + part + _ + num"], [side + '_LinkBodyContainer_' + part + '_' + num], "isLinkVisible", dg(side + '_LinkBodyContainer_' + part + '_' + num)).style.display != 'none'));
}
function ReadPsycHodrama(wut) {
  global_canWrite = confixWrapper("infix", "global_canWrite = true", [""], [], "ReadPsycHodrama", true);
  if (confixWrapper("condition", "!wut", [""], [], "ReadPsycHodrama", !wut)) 
  return confixWrapper("return", "return false;", [""], [], "ReadPsycHodrama", false);
  global_canWrite = confixWrapper("infix", "global_canWrite = false", [""], [], "ReadPsycHodrama", false);
  var invalidStr = confixWrapper("initvar", "var invalidStr = 'Invalid PsycHodrama. do you want to Reset PsycHodrama?'", [""], [], "ReadPsycHodrama", 'Invalid PsycHodrama. do you want to Reset PsycHodrama?');
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ReadPsycHodrama", global_lang == 'fa')) 
  invalidStr = confixWrapper("infix", "invalidStr = confixWrapper(\"functionCall\", \"translateIt('invalid drama')\", [\"invalid drama\"], ['invalid drama'], \"ReadPsycHodrama\", translateIt('invalid drama'))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "translateIt('invalid drama')", ["invalid drama"], ['invalid drama'], "ReadPsycHodrama", translateIt('invalid drama')));
  var tio = confixWrapper("initvar", "var tio = confixWrapper(\"functionCall\", \"wut.indexOf('PsycHodrama=')\", [\"PsycHodrama=\"], ['PsycHodrama='], \"ReadPsycHodrama\", wut.indexOf('PsycHodrama='))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "wut.indexOf('PsycHodrama=')", ["PsycHodrama="], ['PsycHodrama='], "ReadPsycHodrama", wut.indexOf('PsycHodrama=')));
  if (confixWrapper("condition", "tio != -1", [""], [], "ReadPsycHodrama", tio != -1)) 
  wut = confixWrapper("infix", "wut = confixWrapper(\"functionCall\", \"wut.substr(tio + 12, wut.length)\", [\"tio + 12\", \"wut.length\"], [tio + 12, wut.length], \"ReadPsycHodrama\", wut.substr(tio + 12, wut.length))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "wut.substr(tio + 12, wut.length)", ["tio + 12", "wut.length"], [tio + 12, wut.length], "ReadPsycHodrama", wut.substr(tio + 12, wut.length)));
  var s = confixWrapper("initvar", "var s = wut", [""], [], "ReadPsycHodrama", wut);
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(0)\", [\"0\"], [0], \"ReadPsycHodrama\", s.charAt(0)) != '{' || confixWrapper(\"functionCall\", \"s.substring(s.length - 7, s.length)\", [\"s.length - 7\", \"s.length\"], [s.length - 7, s.length], \"ReadPsycHodrama\", s.substring(s.length - 7, s.length)) != 'PsycHo}'", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "s.charAt(0)", ["0"], [0], "ReadPsycHodrama", s.charAt(0)) != '{' || confixWrapper("functionCall", "s.substring(s.length - 7, s.length)", ["s.length - 7", "s.length"], [s.length - 7, s.length], "ReadPsycHodrama", s.substring(s.length - 7, s.length)) != 'PsycHo}')) 
  {
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"confirm(invalidStr)\", [\"invalidStr\"], [invalidStr], \"ReadPsycHodrama\", confirm(invalidStr))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "confirm(invalidStr)", ["invalidStr"], [invalidStr], "ReadPsycHodrama", confirm(invalidStr)))) 
    {
      confixWrapper("functionCall", "ResetPsycHodrama()", [], [], "ReadPsycHodrama", ResetPsycHodrama());
      return confixWrapper("return", "return true;", [""], [], "ReadPsycHodrama", true);
    } else return confixWrapper("return", "return false;", [""], [], "ReadPsycHodrama", false);
  }
  var waitPlz = confixWrapper("initvar", "var waitPlz = 'Depending on your browser and PsycHodrama, this operation may take up to 2 minutes.\n\n Do you want to continue?'", [""], [], "ReadPsycHodrama", 'Depending on your browser and PsycHodrama, this operation may take up to 2 minutes.\n\n Do you want to continue?');
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ReadPsycHodrama", global_lang == 'fa')) 
  waitPlz = confixWrapper("infix", "waitPlz = confixWrapper(\"functionCall\", \"translateIt('wait 2 minutes')\", [\"wait 2 minutes\"], ['wait 2 minutes'], \"ReadPsycHodrama\", translateIt('wait 2 minutes'))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "translateIt('wait 2 minutes')", ["wait 2 minutes"], ['wait 2 minutes'], "ReadPsycHodrama", translateIt('wait 2 minutes')));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"confirm(waitPlz)\", [\"waitPlz\"], [waitPlz], \"ReadPsycHodrama\", confirm(waitPlz))", [""], [], "ReadPsycHodrama", !confixWrapper("functionCall", "confirm(waitPlz)", ["waitPlz"], [waitPlz], "ReadPsycHodrama", confirm(waitPlz)))) 
  {
    global_canWrite = confixWrapper("infix", "global_canWrite = true", [""], [], "ReadPsycHodrama", true);
    return confixWrapper("return", "return false;", [""], [], "ReadPsycHodrama", false);
  }
  s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"EXT_decodeTxt(s.substring(4, s.length - 7))\", [\"s.substring(4, s.length - 7)\"], [confixWrapper(\"functionCall\", \"s.substring(4, s.length - 7)\", [\"4\", \"s.length - 7\"], [4, s.length - 7], \"ReadPsycHodrama\", s.substring(4, s.length - 7))], \"ReadPsycHodrama\", EXT_decodeTxt(confixWrapper(\"functionCall\", \"s.substring(4, s.length - 7)\", [\"4\", \"s.length - 7\"], [4, s.length - 7], \"ReadPsycHodrama\", s.substring(4, s.length - 7))))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "EXT_decodeTxt(s.substring(4, s.length - 7))", ["s.substring(4, s.length - 7)"], [confixWrapper("functionCall", "s.substring(4, s.length - 7)", ["4", "s.length - 7"], [4, s.length - 7], "ReadPsycHodrama", s.substring(4, s.length - 7))], "ReadPsycHodrama", EXT_decodeTxt(confixWrapper("functionCall", "s.substring(4, s.length - 7)", ["4", "s.length - 7"], [4, s.length - 7], "ReadPsycHodrama", s.substring(4, s.length - 7)))));
  confixWrapper("functionCall", "TakeEffectAll(s)", ["s"], [s], "ReadPsycHodrama", TakeEffectAll(s));
  var loadedSucc = confixWrapper("initvar", "var loadedSucc = 'PsycHodrama Loaded Successfully.'", [""], [], "ReadPsycHodrama", 'PsycHodrama Loaded Successfully.');
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ReadPsycHodrama", global_lang == 'fa')) 
  loadedSucc = confixWrapper("infix", "loadedSucc = confixWrapper(\"functionCall\", \"translateIt('drama loaded')\", [\"drama loaded\"], ['drama loaded'], \"ReadPsycHodrama\", translateIt('drama loaded'))", [""], [], "ReadPsycHodrama", confixWrapper("functionCall", "translateIt('drama loaded')", ["drama loaded"], ['drama loaded'], "ReadPsycHodrama", translateIt('drama loaded')));
  confixWrapper("functionCall", "alert(loadedSucc)", ["loadedSucc"], [loadedSucc], "ReadPsycHodrama", alert(loadedSucc));
  var date = confixWrapper("initvar", "var date = new Date()", [""], [], "ReadPsycHodrama", new Date());
  confixWrapper("functionCall", "date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))", ["date.getTime() + (365 * 24 * 60 * 60 * 1000)"], [confixWrapper("functionCall", "date.getTime()", [], [], "ReadPsycHodrama", date.getTime()) + (365 * 24 * 60 * 60 * 1000)], "ReadPsycHodrama", date.setTime(confixWrapper("functionCall", "date.getTime()", [], [], "ReadPsycHodrama", date.getTime()) + (365 * 24 * 60 * 60 * 1000)));
  document.cookie = confixWrapper("infix", "document.cookie = \"PsycHodrama=\" + wut + \"; expires=\" + confixWrapper(\"functionCall\", \"date.toGMTString()\", [], [], \"ReadPsycHodrama\", date.toGMTString()) + \"; path=/\"", [""], [], "ReadPsycHodrama", "PsycHodrama=" + wut + "; expires=" + confixWrapper("functionCall", "date.toGMTString()", [], [], "ReadPsycHodrama", date.toGMTString()) + "; path=/");
  global_canWrite = confixWrapper("infix", "global_canWrite = true", [""], [], "ReadPsycHodrama", true);
  return confixWrapper("return", "return true;", [""], [], "ReadPsycHodrama", true);
  global_didSomething = confixWrapper("infix", "global_didSomething = false", [""], [], "ReadPsycHodrama", false);
}
function HighLight(s) {
  try {
    confixWrapper("functionCall", "s.focus()", [], [], "HighLight", s.focus());
    confixWrapper("functionCall", "s.select()", [], [], "HighLight", s.select());
  }  catch (e) {
}
}
function isDumpLinky(s) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"s.substring(2, 11)\", [\"2\", \"11\"], [2, 11], \"isDumpLinky\", s.substring(2, 11)) == '_TitleTxt') || (confixWrapper(\"functionCall\", \"s.substring(2, 10)\", [\"2\", \"10\"], [2, 10], \"isDumpLinky\", s.substring(2, 10)) == '_LinkTxt') || (confixWrapper(\"functionCall\", \"s.substring(2, 10)\", [\"2\", \"10\"], [2, 10], \"isDumpLinky\", s.substring(2, 10)) == '_LinkUrl') || (confixWrapper(\"functionCall\", \"s.substring(2, 10)\", [\"2\", \"10\"], [2, 10], \"isDumpLinky\", s.substring(2, 10)) == '_LinkTtl') || (confixWrapper(\"functionCall\", \"s.substring(2, 10)\", [\"2\", \"10\"], [2, 10], \"isDumpLinky\", s.substring(2, 10)) == '_PreSurr') || (confixWrapper(\"functionCall\", \"s.substring(2, 10)\", [\"2\", \"10\"], [2, 10], \"isDumpLinky\", s.substring(2, 10)) == '_PstSurr') || (confixWrapper(\"functionCall\", \"s.substring(0, 4)\", [\"0\", \"4\"], [0, 4], \"isDumpLinky\", s.substring(0, 4)) == 'ECP_');", [""], [], "isDumpLinky", (confixWrapper("functionCall", "s.substring(2, 11)", ["2", "11"], [2, 11], "isDumpLinky", s.substring(2, 11)) == '_TitleTxt') || (confixWrapper("functionCall", "s.substring(2, 10)", ["2", "10"], [2, 10], "isDumpLinky", s.substring(2, 10)) == '_LinkTxt') || (confixWrapper("functionCall", "s.substring(2, 10)", ["2", "10"], [2, 10], "isDumpLinky", s.substring(2, 10)) == '_LinkUrl') || (confixWrapper("functionCall", "s.substring(2, 10)", ["2", "10"], [2, 10], "isDumpLinky", s.substring(2, 10)) == '_LinkTtl') || (confixWrapper("functionCall", "s.substring(2, 10)", ["2", "10"], [2, 10], "isDumpLinky", s.substring(2, 10)) == '_PreSurr') || (confixWrapper("functionCall", "s.substring(2, 10)", ["2", "10"], [2, 10], "isDumpLinky", s.substring(2, 10)) == '_PstSurr') || (confixWrapper("functionCall", "s.substring(0, 4)", ["0", "4"], [0, 4], "isDumpLinky", s.substring(0, 4)) == 'ECP_'));
}
function WritePsycHodrama() {
  var d1 = confixWrapper("initvar", "var d1 = new Date()", [""], [], "WritePsycHodrama", new Date());
  var s = confixWrapper("initvar", "var s = ''", [""], [], "WritePsycHodrama", ''), sep = confixWrapper("initvar", "var sep = drama_splitter", [""], [], "WritePsycHodrama", drama_splitter), i;
  var objs = confixWrapper("initvar", "var objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('select')\", [\"select\"], ['select'], \"WritePsycHodrama\", document.getElementsByTagName('select'))", [""], [], "WritePsycHodrama", confixWrapper("functionCall", "document.getElementsByTagName('select')", ["select"], ['select'], "WritePsycHodrama", document.getElementsByTagName('select')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "WritePsycHodrama", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "WritePsycHodrama", i < objs.length); i++) 
    if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"WritePsycHodrama\", objs[i].getAttribute('type')) == 'radio') || (confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"WritePsycHodrama\", objs[i].getAttribute('type')) == 'checkbox')", [""], [], "WritePsycHodrama", (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "WritePsycHodrama", objs[i].getAttribute('type')) == 'radio') || (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "WritePsycHodrama", objs[i].getAttribute('type')) == 'checkbox'))) 
    s += objs[i].checked + sep; else s += objs[i].value + sep;
  objs = confixWrapper("infix", "objs = confixWrapper(\"functionCall\", \"document.getElementsByTagName('input')\", [\"input\"], ['input'], \"WritePsycHodrama\", document.getElementsByTagName('input'))", [""], [], "WritePsycHodrama", confixWrapper("functionCall", "document.getElementsByTagName('input')", ["input"], ['input'], "WritePsycHodrama", document.getElementsByTagName('input')));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "WritePsycHodrama", 0); confixWrapper("loopCondition", "i < objs.length", ["i", "objs"], [i, objs], "WritePsycHodrama", i < objs.length); i++) 
    if (confixWrapper("condition", "((confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"WritePsycHodrama\", objs[i].getAttribute('type')) == 'radio') || (confixWrapper(\"functionCall\", \"objs[i].getAttribute('type')\", [\"type\"], ['type'], \"WritePsycHodrama\", objs[i].getAttribute('type')) == 'checkbox'))", [""], [], "WritePsycHodrama", ((confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "WritePsycHodrama", objs[i].getAttribute('type')) == 'radio') || (confixWrapper("functionCall", "objs[i].getAttribute('type')", ["type"], ['type'], "WritePsycHodrama", objs[i].getAttribute('type')) == 'checkbox')))) 
    s += objs[i].checked + sep; else {
      if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDumpLinky(objs[i].id)\", [\"objs[i].id\"], [objs[i].id], \"WritePsycHodrama\", isDumpLinky(objs[i].id))", [""], [], "WritePsycHodrama", !confixWrapper("functionCall", "isDumpLinky(objs[i].id)", ["objs[i].id"], [objs[i].id], "WritePsycHodrama", isDumpLinky(objs[i].id)))) 
      s += objs[i].value + sep;
    }
  var side = confixWrapper("initvar", "var side = new Array('R', 'L')", [""], [], "WritePsycHodrama", new Array('R', 'L'));
  for (var sn = confixWrapper("initvar", "var sn = 0", [""], [], "WritePsycHodrama", 0); confixWrapper("loopCondition", "sn < 2", ["sn"], [sn], "WritePsycHodrama", sn < 2); sn++) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg('Side' + side[sn] + 'Column')\", [\"Side + side[sn] + Column\"], ['Side' + side[sn] + 'Column'], \"WritePsycHodrama\", dg('Side' + side[sn] + 'Column')).style.display != 'none'", [""], [], "WritePsycHodrama", confixWrapper("functionCall", "dg('Side' + side[sn] + 'Column')", ["Side + side[sn] + Column"], ['Side' + side[sn] + 'Column'], "WritePsycHodrama", dg('Side' + side[sn] + 'Column')).style.display != 'none')) 
    {
      var pn = confixWrapper("initvar", "var pn = confixWrapper(\"functionCall\", \"dg('_' + side[sn] + '_boxNumForce')\", [\"_ + side[sn] + _boxNumForce\"], ['_' + side[sn] + '_boxNumForce'], \"WritePsycHodrama\", dg('_' + side[sn] + '_boxNumForce')).value", [""], [], "WritePsycHodrama", confixWrapper("functionCall", "dg('_' + side[sn] + '_boxNumForce')", ["_ + side[sn] + _boxNumForce"], ['_' + side[sn] + '_boxNumForce'], "WritePsycHodrama", dg('_' + side[sn] + '_boxNumForce')).value);
      for (var part = confixWrapper("initvar", "var part = 0", [""], [], "WritePsycHodrama", 0); confixWrapper("loopCondition", "part < pn", ["part", "pn"], [part, pn], "WritePsycHodrama", part < pn); part++) 
        {
          var ln = confixWrapper("initvar", "var ln = confixWrapper(\"functionCall\", \"dg('_' + side[sn] + '_linkNumForce_' + part)\", [\"_ + side[sn] + _linkNumForce_ + part\"], ['_' + side[sn] + '_linkNumForce_' + part], \"WritePsycHodrama\", dg('_' + side[sn] + '_linkNumForce_' + part)).value", [""], [], "WritePsycHodrama", confixWrapper("functionCall", "dg('_' + side[sn] + '_linkNumForce_' + part)", ["_ + side[sn] + _linkNumForce_ + part"], ['_' + side[sn] + '_linkNumForce_' + part], "WritePsycHodrama", dg('_' + side[sn] + '_linkNumForce_' + part)).value);
          s += confixWrapper("functionCall", "dg('_' + side[sn] + '_TitleTxt_' + part)", ["_ + side[sn] + _TitleTxt_ + part"], ['_' + side[sn] + '_TitleTxt_' + part], "WritePsycHodrama", dg('_' + side[sn] + '_TitleTxt_' + part)).value + sep;
          s += confixWrapper("functionCall", "dg('_' + side[sn] + '_PreSurr_' + part)", ["_ + side[sn] + _PreSurr_ + part"], ['_' + side[sn] + '_PreSurr_' + part], "WritePsycHodrama", dg('_' + side[sn] + '_PreSurr_' + part)).value + sep;
          s += confixWrapper("functionCall", "dg('_' + side[sn] + '_PstSurr_' + part)", ["_ + side[sn] + _PstSurr_ + part"], ['_' + side[sn] + '_PstSurr_' + part], "WritePsycHodrama", dg('_' + side[sn] + '_PstSurr_' + part)).value + sep;
          for (var num = confixWrapper("initvar", "var num = 0", [""], [], "WritePsycHodrama", 0); confixWrapper("loopCondition", "num < ln", ["num", "ln"], [num, ln], "WritePsycHodrama", num < ln); num++) 
            {
              s += confixWrapper("functionCall", "dg('_' + side[sn] + '_LinkTxt_' + part + '_' + num)", ["_ + side[sn] + _LinkTxt_ + part + _ + num"], ['_' + side[sn] + '_LinkTxt_' + part + '_' + num], "WritePsycHodrama", dg('_' + side[sn] + '_LinkTxt_' + part + '_' + num)).value + sep;
              s += confixWrapper("functionCall", "dg('_' + side[sn] + '_LinkUrl_' + part + '_' + num)", ["_ + side[sn] + _LinkUrl_ + part + _ + num"], ['_' + side[sn] + '_LinkUrl_' + part + '_' + num], "WritePsycHodrama", dg('_' + side[sn] + '_LinkUrl_' + part + '_' + num)).value + sep;
              s += confixWrapper("functionCall", "dg('_' + side[sn] + '_LinkTtl_' + part + '_' + num)", ["_ + side[sn] + _LinkTtl_ + part + _ + num"], ['_' + side[sn] + '_LinkTtl_' + part + '_' + num], "WritePsycHodrama", dg('_' + side[sn] + '_LinkTtl_' + part + '_' + num)).value + sep;
            }
        }
    }
  s = confixWrapper("infix", "s = '{' + PsycHo_CurrentVersion + confixWrapper(\"functionCall\", \"EXT_encodeTxt(s)\", [\"s\"], [s], \"WritePsycHodrama\", EXT_encodeTxt(s)) + 'PsycHo}'", [""], [], "WritePsycHodrama", '{' + PsycHo_CurrentVersion + confixWrapper("functionCall", "EXT_encodeTxt(s)", ["s"], [s], "WritePsycHodrama", EXT_encodeTxt(s)) + 'PsycHo}');
  confixWrapper("functionCall", "dg('PsycHodramaGetEr')", ["PsycHodramaGetEr"], ['PsycHodramaGetEr'], "WritePsycHodrama", dg('PsycHodramaGetEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHodramaGetEr')\", [\"PsycHodramaGetEr\"], ['PsycHodramaGetEr'], \"WritePsycHodrama\", dg('PsycHodramaGetEr')).value = s", [""], [], "WritePsycHodrama", s);
  confixWrapper("functionCall", "HighLight(document.PsycHoForm.PsycHodramaGetEr)", ["document.PsycHoForm.PsycHodramaGetEr"], [document.PsycHoForm.PsycHodramaGetEr], "WritePsycHodrama", HighLight(document.PsycHoForm.PsycHodramaGetEr));
  var date = confixWrapper("initvar", "var date = new Date()", [""], [], "WritePsycHodrama", new Date());
  confixWrapper("functionCall", "date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))", ["date.getTime() + (365 * 24 * 60 * 60 * 1000)"], [confixWrapper("functionCall", "date.getTime()", [], [], "WritePsycHodrama", date.getTime()) + (365 * 24 * 60 * 60 * 1000)], "WritePsycHodrama", date.setTime(confixWrapper("functionCall", "date.getTime()", [], [], "WritePsycHodrama", date.getTime()) + (365 * 24 * 60 * 60 * 1000)));
  document.cookie = confixWrapper("infix", "document.cookie = \"PsycHodrama=\" + s + \"; expires=\" + confixWrapper(\"functionCall\", \"date.toGMTString()\", [], [], \"WritePsycHodrama\", date.toGMTString()) + \"; path=/\"", [""], [], "WritePsycHodrama", "PsycHodrama=" + s + "; expires=" + confixWrapper("functionCall", "date.toGMTString()", [], [], "WritePsycHodrama", date.toGMTString()) + "; path=/");
  var d2 = confixWrapper("initvar", "var d2 = new Date()", [""], [], "WritePsycHodrama", new Date());
  var v1 = confixWrapper("initvar", "var v1 = (confixWrapper(\"functionCall\", \"d1.getMinutes()\", [], [], \"WritePsycHodrama\", d1.getMinutes()) * 60 * 1000 + confixWrapper(\"functionCall\", \"d1.getSeconds()\", [], [], \"WritePsycHodrama\", d1.getSeconds()) * 1000 + d1.getMilliseconds())", [""], [], "WritePsycHodrama", (confixWrapper("functionCall", "d1.getMinutes()", [], [], "WritePsycHodrama", d1.getMinutes()) * 60 * 1000 + confixWrapper("functionCall", "d1.getSeconds()", [], [], "WritePsycHodrama", d1.getSeconds()) * 1000 + d1.getMilliseconds()));
  var v2 = confixWrapper("initvar", "var v2 = (confixWrapper(\"functionCall\", \"d2.getMinutes()\", [], [], \"WritePsycHodrama\", d2.getMinutes()) * 60 * 1000 + confixWrapper(\"functionCall\", \"d2.getSeconds()\", [], [], \"WritePsycHodrama\", d2.getSeconds()) * 1000 + d2.getMilliseconds())", [""], [], "WritePsycHodrama", (confixWrapper("functionCall", "d2.getMinutes()", [], [], "WritePsycHodrama", d2.getMinutes()) * 60 * 1000 + confixWrapper("functionCall", "d2.getSeconds()", [], [], "WritePsycHodrama", d2.getSeconds()) * 1000 + d2.getMilliseconds()));
  global_didSomething = confixWrapper("infix", "global_didSomething = false", [""], [], "WritePsycHodrama", false);
  return confixWrapper("return", "return s;", [""], [], "WritePsycHodrama", s);
}
function getSideRBoxesNum() {
  return confixWrapper("return", "return SideRBoxesNum;", [""], [], "getSideRBoxesNum", SideRBoxesNum);
}
function SwitchLinkTR(side, part, num, wut) {
  var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg('_' + side + '_LinkEr_' + part + '_' + num)\", [\"_ + side + _LinkEr_ + part + _ + num\"], ['_' + side + '_LinkEr_' + part + '_' + num], \"SwitchLinkTR\", dg('_' + side + '_LinkEr_' + part + '_' + num))", [""], [], "SwitchLinkTR", confixWrapper("functionCall", "dg('_' + side + '_LinkEr_' + part + '_' + num)", ["_ + side + _LinkEr_ + part + _ + num"], ['_' + side + '_LinkEr_' + part + '_' + num], "SwitchLinkTR", dg('_' + side + '_LinkEr_' + part + '_' + num)));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"isIE()\", [], [], \"SwitchLinkTR\", isIE())", [""], [], "SwitchLinkTR", confixWrapper("functionCall", "isIE()", [], [], "SwitchLinkTR", isIE()))) 
  that.style.display = confixWrapper("infix", "that.style.display = wut ? 'block' : 'none'", [""], [], "SwitchLinkTR", wut ? 'block' : 'none'); else confixWrapper("functionCall", "that.setAttribute('style', wut ? '' : 'display: none')", ["style", "wut ?  : display: none"], ['style', wut ? '' : 'display: none'], "SwitchLinkTR", that.setAttribute('style', wut ? '' : 'display: none'));
  confixWrapper("functionCall", "SwitchDisplay(side + '_LinkBodyContainer_' + part + '_' + num, wut)", ["side + _LinkBodyContainer_ + part + _ + num", "wut"], [side + '_LinkBodyContainer_' + part + '_' + num, wut], "SwitchLinkTR", SwitchDisplay(side + '_LinkBodyContainer_' + part + '_' + num, wut));
}
function SetValAndDo(id, val, fc) {
  var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg(id)\", [\"id\"], [id], \"SetValAndDo\", dg(id))", [""], [], "SetValAndDo", confixWrapper("functionCall", "dg(id)", ["id"], [id], "SetValAndDo", dg(id)));
  if (confixWrapper("condition", "(that.value == val) && (fc != true)", [""], [], "SetValAndDo", (that.value == val) && (fc != true))) 
  return;
  that.value = confixWrapper("infix", "that.value = val", [""], [], "SetValAndDo", val);
  confixWrapper("functionCall", "doDuty(that)", ["that"], [that], "SetValAndDo", doDuty(that));
}
function InsertLinkToBox(side, part, num, txt, url, ttl, swc) {
  confixWrapper("functionCall", "SetValAndDo('_' + side + '_LinkTxt_' + part + '_' + num, txt)", ["_ + side + _LinkTxt_ + part + _ + num", "txt"], ['_' + side + '_LinkTxt_' + part + '_' + num, txt], "InsertLinkToBox", SetValAndDo('_' + side + '_LinkTxt_' + part + '_' + num, txt));
  confixWrapper("functionCall", "SetValAndDo('_' + side + '_LinkUrl_' + part + '_' + num, url)", ["_ + side + _LinkUrl_ + part + _ + num", "url"], ['_' + side + '_LinkUrl_' + part + '_' + num, url], "InsertLinkToBox", SetValAndDo('_' + side + '_LinkUrl_' + part + '_' + num, url));
  confixWrapper("functionCall", "dg('_' + side + '_LinkTtl_' + part + '_' + num)", ["_ + side + _LinkTtl_ + part + _ + num"], ['_' + side + '_LinkTtl_' + part + '_' + num], "InsertLinkToBox", dg('_' + side + '_LinkTtl_' + part + '_' + num)).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + side + '_LinkTtl_' + part + '_' + num)\", [\"_ + side + _LinkTtl_ + part + _ + num\"], ['_' + side + '_LinkTtl_' + part + '_' + num], \"InsertLinkToBox\", dg('_' + side + '_LinkTtl_' + part + '_' + num)).value = ttl", [""], [], "InsertLinkToBox", ttl);
  confixWrapper("functionCall", "dg(side + '_LinkBody_' + part + '_' + num).setAttribute('title', ttl)", ["title", "ttl"], ['title', ttl], "InsertLinkToBox", confixWrapper("functionCall", "dg(side + '_LinkBody_' + part + '_' + num)", ["side + _LinkBody_ + part + _ + num"], [side + '_LinkBody_' + part + '_' + num], "InsertLinkToBox", dg(side + '_LinkBody_' + part + '_' + num)).setAttribute('title', ttl));
  confixWrapper("functionCall", "doDuty(dg('_' + side + '_PreSurr_' + part))", ["dg(_ + side + _PreSurr_ + part)"], [confixWrapper("functionCall", "dg('_' + side + '_PreSurr_' + part)", ["_ + side + _PreSurr_ + part"], ['_' + side + '_PreSurr_' + part], "InsertLinkToBox", dg('_' + side + '_PreSurr_' + part))], "InsertLinkToBox", doDuty(confixWrapper("functionCall", "dg('_' + side + '_PreSurr_' + part)", ["_ + side + _PreSurr_ + part"], ['_' + side + '_PreSurr_' + part], "InsertLinkToBox", dg('_' + side + '_PreSurr_' + part))));
  confixWrapper("functionCall", "doDuty(dg('_' + side + '_PstSurr_' + part))", ["dg(_ + side + _PstSurr_ + part)"], [confixWrapper("functionCall", "dg('_' + side + '_PstSurr_' + part)", ["_ + side + _PstSurr_ + part"], ['_' + side + '_PstSurr_' + part], "InsertLinkToBox", dg('_' + side + '_PstSurr_' + part))], "InsertLinkToBox", doDuty(confixWrapper("functionCall", "dg('_' + side + '_PstSurr_' + part)", ["_ + side + _PstSurr_ + part"], ['_' + side + '_PstSurr_' + part], "InsertLinkToBox", dg('_' + side + '_PstSurr_' + part))));
  if (confixWrapper("condition", "swc != null", [""], [], "InsertLinkToBox", swc != null)) 
  confixWrapper("functionCall", "SwitchLinkTR(side, part, num, swc)", ["side", "part", "num", "swc"], [side, part, num, swc], "InsertLinkToBox", SwitchLinkTR(side, part, num, swc));
}
function ShowEditPartBox(eve, n, s) {
  var sf = confixWrapper("initvar", "var sf = s", [""], [], "ShowEditPartBox", s);
  if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ShowEditPartBox", global_lang == 'fa')) 
  s = confixWrapper("infix", "s = (s == 'R') ? confixWrapper(\"functionCall\", \"translateIt('Raast')\", [\"Raast\"], ['Raast'], \"ShowEditPartBox\", translateIt('Raast')) : translateIt('Chap')", [""], [], "ShowEditPartBox", (s == 'R') ? confixWrapper("functionCall", "translateIt('Raast')", ["Raast"], ['Raast'], "ShowEditPartBox", translateIt('Raast')) : translateIt('Chap')); else s = confixWrapper("infix", "s = (s == 'R') ? 'Right' : 'Left'", [""], [], "ShowEditPartBox", (s == 'R') ? 'Right' : 'Left');
  n = confixWrapper("infix", "n = (confixWrapper(\"functionCall\", \"parseInt(n)\", [\"n\"], [n], \"ShowEditPartBox\", parseInt(n)) + 1) + ''", [""], [], "ShowEditPartBox", (confixWrapper("functionCall", "parseInt(n)", ["n"], [n], "ShowEditPartBox", parseInt(n)) + 1) + '');
  try {
    if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ShowEditPartBox", global_lang == 'fa')) 
    {
      if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"dg('EditPartLegendN')\", [\"EditPartLegendN\"], ['EditPartLegendN'], \"ShowEditPartBox\", dg('EditPartLegendN')).innerHTML == getPersianDigit(n)) && (confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"ShowEditPartBox\", dg('EditPartLegendS')).innerHTML == s)", [""], [], "ShowEditPartBox", (confixWrapper("functionCall", "dg('EditPartLegendN')", ["EditPartLegendN"], ['EditPartLegendN'], "ShowEditPartBox", dg('EditPartLegendN')).innerHTML == getPersianDigit(n)) && (confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "ShowEditPartBox", dg('EditPartLegendS')).innerHTML == s))) 
      {
        confixWrapper("functionCall", "HideEditPartBox()", [], [], "ShowEditPartBox", HideEditPartBox());
        return;
      }
    } else if (confixWrapper("condition", "(confixWrapper(\"functionCall\", \"dg('EditPartLegendN')\", [\"EditPartLegendN\"], ['EditPartLegendN'], \"ShowEditPartBox\", dg('EditPartLegendN')).innerHTML == n) && (confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"ShowEditPartBox\", dg('EditPartLegendS')).innerHTML == s)", [""], [], "ShowEditPartBox", (confixWrapper("functionCall", "dg('EditPartLegendN')", ["EditPartLegendN"], ['EditPartLegendN'], "ShowEditPartBox", dg('EditPartLegendN')).innerHTML == n) && (confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "ShowEditPartBox", dg('EditPartLegendS')).innerHTML == s))) 
    {
      confixWrapper("functionCall", "HideEditPartBox()", [], [], "ShowEditPartBox", HideEditPartBox());
      return;
    }
  }  catch (e) {
}
  if (confixWrapper("condition", "global_isPathedHide", [""], [], "ShowEditPartBox", global_isPathedHide)) 
  confixWrapper("functionCall", "alertPathedHide()", [], [], "ShowEditPartBox", alertPathedHide());
  var side, part;
  try {
    side = confixWrapper("infix", "side = confixWrapper(\"functionCall\", \"dg('EditPartLegendS').innerHTML.charAt(0)\", [\"0\"], [0], \"ShowEditPartBox\", confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"ShowEditPartBox\", dg('EditPartLegendS')).innerHTML.charAt(0))", ["confixWrapper(\"functionCall\", \"dg('EditPartLegendS').charAt(0)\", [\"0\"], [0], \"ShowEditPartBox\", confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"ShowEditPartBox\", dg('EditPartLegendS')).charAt(0))"], [confixWrapper("functionCall", "dg('EditPartLegendS').charAt(0)", ["0"], [0], "ShowEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "ShowEditPartBox", dg('EditPartLegendS')).charAt(0))], "ShowEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendS').innerHTML.charAt(0)", ["0"], [0], "ShowEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "ShowEditPartBox", dg('EditPartLegendS')).innerHTML.charAt(0)));
    part = confixWrapper("infix", "part = confixWrapper(\"functionCall\", \"dg('EditPartLegendN')\", [\"EditPartLegendN\"], ['EditPartLegendN'], \"ShowEditPartBox\", dg('EditPartLegendN')).innerHTML", ["confixWrapper(\"functionCall\", \"dg('EditPartLegendN')\", [\"EditPartLegendN\"], ['EditPartLegendN'], \"ShowEditPartBox\", dg('EditPartLegendN'))"], [confixWrapper("functionCall", "dg('EditPartLegendN')", ["EditPartLegendN"], ['EditPartLegendN'], "ShowEditPartBox", dg('EditPartLegendN'))], "ShowEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendN')", ["EditPartLegendN"], ['EditPartLegendN'], "ShowEditPartBox", dg('EditPartLegendN')).innerHTML);
    if (confixWrapper("condition", "global_lang == 'fa'", [""], [], "ShowEditPartBox", global_lang == 'fa')) 
    {
      side = confixWrapper("infix", "side = (side == confixWrapper(\"functionCall\", \"translateIt('Re')\", [\"Re\"], ['Re'], \"ShowEditPartBox\", translateIt('Re')) ? 'R' : 'L')", [""], [], "ShowEditPartBox", (side == confixWrapper("functionCall", "translateIt('Re')", ["Re"], ['Re'], "ShowEditPartBox", translateIt('Re')) ? 'R' : 'L'));
      part = confixWrapper("infix", "part = confixWrapper(\"functionCall\", \"convertPersianDigit(part)\", [\"part\"], [part], \"ShowEditPartBox\", convertPersianDigit(part))", [""], [], "ShowEditPartBox", confixWrapper("functionCall", "convertPersianDigit(part)", ["part"], [part], "ShowEditPartBox", convertPersianDigit(part)));
    }
    confixWrapper("functionCall", "SwitchDisplay(side + '_EditPartBosTheDiv_' + part, 0)", ["side + _EditPartBosTheDiv_ + part", "0"], [side + '_EditPartBosTheDiv_' + part, 0], "ShowEditPartBox", SwitchDisplay(side + '_EditPartBosTheDiv_' + part, 0));
  }  catch (e) {
}
  side = confixWrapper("infix", "side = sf", [""], [], "ShowEditPartBox", sf);
  part = confixWrapper("infix", "part = confixWrapper(\"functionCall\", \"parseInt(n)\", [\"n\"], [n], \"ShowEditPartBox\", parseInt(n))", [""], [], "ShowEditPartBox", confixWrapper("functionCall", "parseInt(n)", ["n"], [n], "ShowEditPartBox", parseInt(n)));
  confixWrapper("functionCall", "SwitchDisplay(side + '_EditPartBosTheDiv_' + part, 1)", ["side + _EditPartBosTheDiv_ + part", "1"], [side + '_EditPartBosTheDiv_' + part, 1], "ShowEditPartBox", SwitchDisplay(side + '_EditPartBosTheDiv_' + part, 1));
  confixWrapper("functionCall", "ChangeByInput('EditPartLegendN', 'innerHTML', (global_lang == 'fa') ? getPersianDigit(n) : n)", ["EditPartLegendN", "innerHTML", "(global_lang == fa) ? getPersianDigit(n) : n"], ['EditPartLegendN', 'innerHTML', (global_lang == 'fa') ? confixWrapper("functionCall", "getPersianDigit(n)", ["n"], [n], "ShowEditPartBox", getPersianDigit(n)) : n], "ShowEditPartBox", ChangeByInput('EditPartLegendN', 'innerHTML', (global_lang == 'fa') ? confixWrapper("functionCall", "getPersianDigit(n)", ["n"], [n], "ShowEditPartBox", getPersianDigit(n)) : n));
  confixWrapper("functionCall", "ChangeByInput('EditPartLegendS', 'innerHTML', s)", ["EditPartLegendS", "innerHTML", "s"], ['EditPartLegendS', 'innerHTML', s], "ShowEditPartBox", ChangeByInput('EditPartLegendS', 'innerHTML', s));
  var myX = confixWrapper("initvar", "var myX = confixWrapper(\"functionCall\", \"getMyXY(eve, 0)\", [\"eve\", \"0\"], [eve, 0], \"ShowEditPartBox\", getMyXY(eve, 0))", [""], [], "ShowEditPartBox", confixWrapper("functionCall", "getMyXY(eve, 0)", ["eve", "0"], [eve, 0], "ShowEditPartBox", getMyXY(eve, 0)));
  var myY = confixWrapper("initvar", "var myY = confixWrapper(\"functionCall\", \"getMyXY(eve, 1)\", [\"eve\", \"1\"], [eve, 1], \"ShowEditPartBox\", getMyXY(eve, 1))", [""], [], "ShowEditPartBox", confixWrapper("functionCall", "getMyXY(eve, 1)", ["eve", "1"], [eve, 1], "ShowEditPartBox", getMyXY(eve, 1)));
  myX += (side == 'L') ? 30 : -670;
  if (confixWrapper("condition", "myX < 0", [""], [], "ShowEditPartBox", myX < 0)) 
  myX = confixWrapper("infix", "myX = 0", [""], [], "ShowEditPartBox", 0);
  if (confixWrapper("condition", "myX + 600 > window.screen.width - 50", [""], [], "ShowEditPartBox", myX + 600 > window.screen.width - 50)) 
  myX = confixWrapper("infix", "myX = window.screen.width - 650", [""], [], "ShowEditPartBox", window.screen.width - 650);
  confixWrapper("functionCall", "ChangeByInput('EditPartBox', 'top', (myY - 10) + 'px')", ["EditPartBox", "top", "(myY - 10) + px"], ['EditPartBox', 'top', (myY - 10) + 'px'], "ShowEditPartBox", ChangeByInput('EditPartBox', 'top', (myY - 10) + 'px'));
  confixWrapper("functionCall", "ChangeByInput('EditPartBox', 'left', (myX) + 'px')", ["EditPartBox", "left", "(myX) + px"], ['EditPartBox', 'left', (myX) + 'px'], "ShowEditPartBox", ChangeByInput('EditPartBox', 'left', (myX) + 'px'));
  confixWrapper("functionCall", "SwitchDisplay('EditPartBox', 1)", ["EditPartBox", "1"], ['EditPartBox', 1], "ShowEditPartBox", SwitchDisplay('EditPartBox', 1));
  confixWrapper("functionCall", "SwitchSelectIE(0)", ["0"], [0], "ShowEditPartBox", SwitchSelectIE(0));
}
function HideEditPartBox() {
  confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "HideEditPartBox", dg('EditPartLegendS')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"HideEditPartBox\", dg('EditPartLegendS')).innerHTML = confixWrapper(\"functionCall\", \"dg('EditPartLegendS').innerHTML.charAt(0)\", [\"0\"], [0], \"HideEditPartBox\", confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"HideEditPartBox\", dg('EditPartLegendS')).innerHTML.charAt(0)) + '!'", ["confixWrapper(\"functionCall\", \"dg('EditPartLegendS').charAt(0)\", [\"0\"], [0], \"HideEditPartBox\", confixWrapper(\"functionCall\", \"dg('EditPartLegendS')\", [\"EditPartLegendS\"], ['EditPartLegendS'], \"HideEditPartBox\", dg('EditPartLegendS')).charAt(0)) + '!'"], [confixWrapper("functionCall", "dg('EditPartLegendS').charAt(0)", ["0"], [0], "HideEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "HideEditPartBox", dg('EditPartLegendS')).charAt(0)) + '!'], "HideEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendS').innerHTML.charAt(0)", ["0"], [0], "HideEditPartBox", confixWrapper("functionCall", "dg('EditPartLegendS')", ["EditPartLegendS"], ['EditPartLegendS'], "HideEditPartBox", dg('EditPartLegendS')).innerHTML.charAt(0)) + '!');
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isDivVisible('EditPartBox')\", [\"EditPartBox\"], ['EditPartBox'], \"HideEditPartBox\", isDivVisible('EditPartBox'))", [""], [], "HideEditPartBox", !confixWrapper("functionCall", "isDivVisible('EditPartBox')", ["EditPartBox"], ['EditPartBox'], "HideEditPartBox", isDivVisible('EditPartBox')))) 
  return;
  confixWrapper("functionCall", "SwitchDisplay('EditPartBox', 0)", ["EditPartBox", "0"], ['EditPartBox', 0], "HideEditPartBox", SwitchDisplay('EditPartBox', 0));
  confixWrapper("functionCall", "SwitchSelectIE(1)", ["1"], [1], "HideEditPartBox", SwitchSelectIE(1));
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isIE()\", [], [], \"HideEditPartBox\", isIE())", [""], [], "HideEditPartBox", !confixWrapper("functionCall", "isIE()", [], [], "HideEditPartBox", isIE()))) 
  {
    confixWrapper("functionCall", "window.blur()", [], [], "HideEditPartBox", window.blur());
    confixWrapper("functionCall", "window.focus()", [], [], "HideEditPartBox", window.focus());
  }
}
function CopyLink(side1, part1, num1, side2, part2, num2) {
  confixWrapper("functionCall", "SetValAndDo('_' + side2 + '_LinkTxt_' + part2 + '_' + num2, dg('_' + side1 + '_LinkTxt_' + part1 + '_' + num1).value)", ["_ + side2 + _LinkTxt_ + part2 + _ + num2", "dg(_ + side1 + _LinkTxt_ + part1 + _ + num1).value"], ['_' + side2 + '_LinkTxt_' + part2 + '_' + num2, confixWrapper("functionCall", "dg('_' + side1 + '_LinkTxt_' + part1 + '_' + num1)", ["_ + side1 + _LinkTxt_ + part1 + _ + num1"], ['_' + side1 + '_LinkTxt_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkTxt_' + part1 + '_' + num1)).value], "CopyLink", SetValAndDo('_' + side2 + '_LinkTxt_' + part2 + '_' + num2, confixWrapper("functionCall", "dg('_' + side1 + '_LinkTxt_' + part1 + '_' + num1)", ["_ + side1 + _LinkTxt_ + part1 + _ + num1"], ['_' + side1 + '_LinkTxt_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkTxt_' + part1 + '_' + num1)).value));
  confixWrapper("functionCall", "SetValAndDo('_' + side2 + '_LinkUrl_' + part2 + '_' + num2, dg('_' + side1 + '_LinkUrl_' + part1 + '_' + num1).value)", ["_ + side2 + _LinkUrl_ + part2 + _ + num2", "dg(_ + side1 + _LinkUrl_ + part1 + _ + num1).value"], ['_' + side2 + '_LinkUrl_' + part2 + '_' + num2, confixWrapper("functionCall", "dg('_' + side1 + '_LinkUrl_' + part1 + '_' + num1)", ["_ + side1 + _LinkUrl_ + part1 + _ + num1"], ['_' + side1 + '_LinkUrl_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkUrl_' + part1 + '_' + num1)).value], "CopyLink", SetValAndDo('_' + side2 + '_LinkUrl_' + part2 + '_' + num2, confixWrapper("functionCall", "dg('_' + side1 + '_LinkUrl_' + part1 + '_' + num1)", ["_ + side1 + _LinkUrl_ + part1 + _ + num1"], ['_' + side1 + '_LinkUrl_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkUrl_' + part1 + '_' + num1)).value));
  confixWrapper("functionCall", "SetValAndDo('_' + side2 + '_LinkTtl_' + part2 + '_' + num2, dg('_' + side1 + '_LinkTtl_' + part1 + '_' + num1).value)", ["_ + side2 + _LinkTtl_ + part2 + _ + num2", "dg(_ + side1 + _LinkTtl_ + part1 + _ + num1).value"], ['_' + side2 + '_LinkTtl_' + part2 + '_' + num2, confixWrapper("functionCall", "dg('_' + side1 + '_LinkTtl_' + part1 + '_' + num1)", ["_ + side1 + _LinkTtl_ + part1 + _ + num1"], ['_' + side1 + '_LinkTtl_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkTtl_' + part1 + '_' + num1)).value], "CopyLink", SetValAndDo('_' + side2 + '_LinkTtl_' + part2 + '_' + num2, confixWrapper("functionCall", "dg('_' + side1 + '_LinkTtl_' + part1 + '_' + num1)", ["_ + side1 + _LinkTtl_ + part1 + _ + num1"], ['_' + side1 + '_LinkTtl_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkTtl_' + part1 + '_' + num1)).value));
  var that = confixWrapper("initvar", "var that = confixWrapper(\"functionCall\", \"dg('_' + side1 + '_LinkEr_' + part1 + '_' + num1)\", [\"_ + side1 + _LinkEr_ + part1 + _ + num1\"], ['_' + side1 + '_LinkEr_' + part1 + '_' + num1], \"CopyLink\", dg('_' + side1 + '_LinkEr_' + part1 + '_' + num1))", [""], [], "CopyLink", confixWrapper("functionCall", "dg('_' + side1 + '_LinkEr_' + part1 + '_' + num1)", ["_ + side1 + _LinkEr_ + part1 + _ + num1"], ['_' + side1 + '_LinkEr_' + part1 + '_' + num1], "CopyLink", dg('_' + side1 + '_LinkEr_' + part1 + '_' + num1))), wut;
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"isIE()\", [], [], \"CopyLink\", isIE())", [""], [], "CopyLink", confixWrapper("functionCall", "isIE()", [], [], "CopyLink", isIE()))) 
  wut = confixWrapper("infix", "wut = (that.style.display == 'block')", [""], [], "CopyLink", (that.style.display == 'block')); else wut = confixWrapper("infix", "wut = (confixWrapper(\"functionCall\", \"that.getAttribute('style')\", [\"style\"], ['style'], \"CopyLink\", that.getAttribute('style')) == '')", [""], [], "CopyLink", (confixWrapper("functionCall", "that.getAttribute('style')", ["style"], ['style'], "CopyLink", that.getAttribute('style')) == ''));
  confixWrapper("functionCall", "SwitchLinkTR(side2, part2, num2, wut)", ["side2", "part2", "num2", "wut"], [side2, part2, num2, wut], "CopyLink", SwitchLinkTR(side2, part2, num2, wut));
}
function CopyBox(side, src, dst) {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"isBoxVisible(side, dst)\", [\"side\", \"dst\"], [side, dst], \"CopyBox\", isBoxVisible(side, dst))", [""], [], "CopyBox", !confixWrapper("functionCall", "isBoxVisible(side, dst)", ["side", "dst"], [side, dst], "CopyBox", isBoxVisible(side, dst)))) 
  return;
  var max = confixWrapper("initvar", "var max = (confixWrapper(\"functionCall\", \"LinkLengthOnBox(side, src)\", [\"side\", \"src\"], [side, src], \"CopyBox\", LinkLengthOnBox(side, src)) > LinkLengthOnBox(side, dst)) ? LinkLengthOnBox(side, src) : LinkLengthOnBox(side, dst)", [""], [], "CopyBox", (confixWrapper("functionCall", "LinkLengthOnBox(side, src)", ["side", "src"], [side, src], "CopyBox", LinkLengthOnBox(side, src)) > LinkLengthOnBox(side, dst)) ? LinkLengthOnBox(side, src) : LinkLengthOnBox(side, dst));
  confixWrapper("functionCall", "SetValAndDo('_' + side + '_TitleTxt_' + dst, dg('_' + side + '_TitleTxt_' + src).value)", ["_ + side + _TitleTxt_ + dst", "dg(_ + side + _TitleTxt_ + src).value"], ['_' + side + '_TitleTxt_' + dst, confixWrapper("functionCall", "dg('_' + side + '_TitleTxt_' + src)", ["_ + side + _TitleTxt_ + src"], ['_' + side + '_TitleTxt_' + src], "CopyBox", dg('_' + side + '_TitleTxt_' + src)).value], "CopyBox", SetValAndDo('_' + side + '_TitleTxt_' + dst, confixWrapper("functionCall", "dg('_' + side + '_TitleTxt_' + src)", ["_ + side + _TitleTxt_ + src"], ['_' + side + '_TitleTxt_' + src], "CopyBox", dg('_' + side + '_TitleTxt_' + src)).value));
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "CopyBox", 0); confixWrapper("loopCondition", "i < max", ["i", "max"], [i, max], "CopyBox", i < max); i++) 
    confixWrapper("functionCall", "CopyLink(side, src, i, side, dst, i)", ["side", "src", "i", "side", "dst", "i"], [side, src, i, side, dst, i], "CopyBox", CopyLink(side, src, i, side, dst, i));
}
function BoxLength(side) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"parseInt(dg('_' + side + '_boxNumForce').value)\", [\"dg(_ + side + _boxNumForce).value\"], [confixWrapper(\"functionCall\", \"dg('_' + side + '_boxNumForce')\", [\"_ + side + _boxNumForce\"], ['_' + side + '_boxNumForce'], \"BoxLength\", dg('_' + side + '_boxNumForce')).value], \"BoxLength\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + side + '_boxNumForce')\", [\"_ + side + _boxNumForce\"], ['_' + side + '_boxNumForce'], \"BoxLength\", dg('_' + side + '_boxNumForce')).value));", [""], [], "BoxLength", confixWrapper("functionCall", "parseInt(dg('_' + side + '_boxNumForce').value)", ["dg(_ + side + _boxNumForce).value"], [confixWrapper("functionCall", "dg('_' + side + '_boxNumForce')", ["_ + side + _boxNumForce"], ['_' + side + '_boxNumForce'], "BoxLength", dg('_' + side + '_boxNumForce')).value], "BoxLength", parseInt(confixWrapper("functionCall", "dg('_' + side + '_boxNumForce')", ["_ + side + _boxNumForce"], ['_' + side + '_boxNumForce'], "BoxLength", dg('_' + side + '_boxNumForce')).value)));
}
function BoxLengthByFor(side) {
  var i;
  for (i = confixWrapper("infix", "i = 0", [""], [], "BoxLengthByFor", 0); confixWrapper("loopCondition", "i < maxBoxNumOnSides", ["i", "maxBoxNumOnSides"], [i, maxBoxNumOnSides], "BoxLengthByFor", i < maxBoxNumOnSides); i++) 
    if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"dg(side + '_PartDiv_' + i)\", [\"side + _PartDiv_ + i\"], [side + '_PartDiv_' + i], \"BoxLengthByFor\", dg(side + '_PartDiv_' + i)) || confixWrapper(\"functionCall\", \"dg(side + '_PartDiv_' + i)\", [\"side + _PartDiv_ + i\"], [side + '_PartDiv_' + i], \"BoxLengthByFor\", dg(side + '_PartDiv_' + i)).style.display == 'none'", [""], [], "BoxLengthByFor", !confixWrapper("functionCall", "dg(side + '_PartDiv_' + i)", ["side + _PartDiv_ + i"], [side + '_PartDiv_' + i], "BoxLengthByFor", dg(side + '_PartDiv_' + i)) || confixWrapper("functionCall", "dg(side + '_PartDiv_' + i)", ["side + _PartDiv_ + i"], [side + '_PartDiv_' + i], "BoxLengthByFor", dg(side + '_PartDiv_' + i)).style.display == 'none')) 
    break;
  return confixWrapper("return", "return i;", [""], [], "BoxLengthByFor", i);
}
function LinkLengthOnBox(side, part) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"parseInt(dg('_' + side + '_linkNumForce_' + part).value)\", [\"dg(_ + side + _linkNumForce_ + part).value\"], [confixWrapper(\"functionCall\", \"dg('_' + side + '_linkNumForce_' + part)\", [\"_ + side + _linkNumForce_ + part\"], ['_' + side + '_linkNumForce_' + part], \"LinkLengthOnBox\", dg('_' + side + '_linkNumForce_' + part)).value], \"LinkLengthOnBox\", parseInt(confixWrapper(\"functionCall\", \"dg('_' + side + '_linkNumForce_' + part)\", [\"_ + side + _linkNumForce_ + part\"], ['_' + side + '_linkNumForce_' + part], \"LinkLengthOnBox\", dg('_' + side + '_linkNumForce_' + part)).value));", [""], [], "LinkLengthOnBox", confixWrapper("functionCall", "parseInt(dg('_' + side + '_linkNumForce_' + part).value)", ["dg(_ + side + _linkNumForce_ + part).value"], [confixWrapper("functionCall", "dg('_' + side + '_linkNumForce_' + part)", ["_ + side + _linkNumForce_ + part"], ['_' + side + '_linkNumForce_' + part], "LinkLengthOnBox", dg('_' + side + '_linkNumForce_' + part)).value], "LinkLengthOnBox", parseInt(confixWrapper("functionCall", "dg('_' + side + '_linkNumForce_' + part)", ["_ + side + _linkNumForce_ + part"], ['_' + side + '_linkNumForce_' + part], "LinkLengthOnBox", dg('_' + side + '_linkNumForce_' + part)).value)));
}
function LinkLengthOnBoxByFor(side, part) {
  var i;
  for (i = confixWrapper("infix", "i = 0", [""], [], "LinkLengthOnBoxByFor", 0); confixWrapper("loopCondition", "i < maxLinkNumBoxes", ["i", "maxLinkNumBoxes"], [i, maxLinkNumBoxes], "LinkLengthOnBoxByFor", i < maxLinkNumBoxes); i++) 
    if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"dg(side + '_LinkBodyContainer_' + part + '_' + i)\", [\"side + _LinkBodyContainer_ + part + _ + i\"], [side + '_LinkBodyContainer_' + part + '_' + i], \"LinkLengthOnBoxByFor\", dg(side + '_LinkBodyContainer_' + part + '_' + i)) || confixWrapper(\"functionCall\", \"dg(side + '_LinkBodyContainer_' + part + '_' + i)\", [\"side + _LinkBodyContainer_ + part + _ + i\"], [side + '_LinkBodyContainer_' + part + '_' + i], \"LinkLengthOnBoxByFor\", dg(side + '_LinkBodyContainer_' + part + '_' + i)).style.display == 'none'", [""], [], "LinkLengthOnBoxByFor", !confixWrapper("functionCall", "dg(side + '_LinkBodyContainer_' + part + '_' + i)", ["side + _LinkBodyContainer_ + part + _ + i"], [side + '_LinkBodyContainer_' + part + '_' + i], "LinkLengthOnBoxByFor", dg(side + '_LinkBodyContainer_' + part + '_' + i)) || confixWrapper("functionCall", "dg(side + '_LinkBodyContainer_' + part + '_' + i)", ["side + _LinkBodyContainer_ + part + _ + i"], [side + '_LinkBodyContainer_' + part + '_' + i], "LinkLengthOnBoxByFor", dg(side + '_LinkBodyContainer_' + part + '_' + i)).style.display == 'none')) 
    break;
  return confixWrapper("return", "return i;", [""], [], "LinkLengthOnBoxByFor", i);
}
function ClearBox(side, part) {
  confixWrapper("functionCall", "AddTitleToBox(side, part, '')", ["side", "part", ""], [side, part, ''], "ClearBox", AddTitleToBox(side, part, ''));
  confixWrapper("functionCall", "InsertLinkToBox(side, part, 0, 'Sample Link', 'http://psyc.horm.org', 'Good Link!', 1)", ["side", "part", "0", "Sample Link", "http://psyc.horm.org", "Good Link!", "1"], [side, part, 0, 'Sample Link', 'http://psyc.horm.org', 'Good Link!', 1], "ClearBox", InsertLinkToBox(side, part, 0, 'Sample Link', 'http://psyc.horm.org', 'Good Link!', 1));
  var max = confixWrapper("initvar", "var max = confixWrapper(\"functionCall\", \"LinkLengthOnBox(side, part)\", [\"side\", \"part\"], [side, part], \"ClearBox\", LinkLengthOnBox(side, part))", [""], [], "ClearBox", confixWrapper("functionCall", "LinkLengthOnBox(side, part)", ["side", "part"], [side, part], "ClearBox", LinkLengthOnBox(side, part)));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg(side + '_PartDiv_' + (part + 1))\", [\"side + _PartDiv_ + (part + 1)\"], [side + '_PartDiv_' + (part + 1)], \"ClearBox\", dg(side + '_PartDiv_' + (part + 1)))", [""], [], "ClearBox", confixWrapper("functionCall", "dg(side + '_PartDiv_' + (part + 1))", ["side + _PartDiv_ + (part + 1)"], [side + '_PartDiv_' + (part + 1)], "ClearBox", dg(side + '_PartDiv_' + (part + 1))))) 
  var tmax = confixWrapper("initvar", "var tmax = confixWrapper(\"functionCall\", \"LinkLengthOnBox(side, part + 1)\", [\"side\", \"part + 1\"], [side, part + 1], \"ClearBox\", LinkLengthOnBox(side, part + 1))", [""], [], "ClearBox", confixWrapper("functionCall", "LinkLengthOnBox(side, part + 1)", ["side", "part + 1"], [side, part + 1], "ClearBox", LinkLengthOnBox(side, part + 1)));
  if (confixWrapper("condition", "max < tmax", [""], [], "ClearBox", max < tmax)) 
  max = confixWrapper("infix", "max = tmax", [""], [], "ClearBox", tmax);
  for (var i = confixWrapper("initvar", "var i = 1", [""], [], "ClearBox", 1); confixWrapper("loopCondition", "i < max", ["i", "max"], [i, max], "ClearBox", i < max); i++) 
    confixWrapper("functionCall", "InsertLinkToBox(side, part, i, '', '', '', 0)", ["side", "part", "i", "", "", "", "0"], [side, part, i, '', '', '', 0], "ClearBox", InsertLinkToBox(side, part, i, '', '', '', 0));
  confixWrapper("functionCall", "dg('_' + side + '_linkNumForce_' + part)", ["_ + side + _linkNumForce_ + part"], ['_' + side + '_linkNumForce_' + part], "ClearBox", dg('_' + side + '_linkNumForce_' + part)).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('_' + side + '_linkNumForce_' + part)\", [\"_ + side + _linkNumForce_ + part\"], ['_' + side + '_linkNumForce_' + part], \"ClearBox\", dg('_' + side + '_linkNumForce_' + part)).value = 1", [""], [], "ClearBox", 1);
}
function AddTitleToBox(side, part, str) {
  confixWrapper("functionCall", "SetValAndDo('_' + side + '_TitleTxt_' + part, str)", ["_ + side + _TitleTxt_ + part", "str"], ['_' + side + '_TitleTxt_' + part, str], "AddTitleToBox", SetValAndDo('_' + side + '_TitleTxt_' + part, str));
}
function ExpirePsycHodramaCookie() {
  var date = confixWrapper("initvar", "var date = new Date()", [""], [], "ExpirePsycHodramaCookie", new Date());
  confixWrapper("functionCall", "date.setTime(date.getTime() - (24 * 60 * 60 * 1000))", ["date.getTime() - (24 * 60 * 60 * 1000)"], [confixWrapper("functionCall", "date.getTime()", [], [], "ExpirePsycHodramaCookie", date.getTime()) - (24 * 60 * 60 * 1000)], "ExpirePsycHodramaCookie", date.setTime(confixWrapper("functionCall", "date.getTime()", [], [], "ExpirePsycHodramaCookie", date.getTime()) - (24 * 60 * 60 * 1000)));
  document.cookie = confixWrapper("infix", "document.cookie = \"PsycHodrama=PsycHo!; expires=\" + confixWrapper(\"functionCall\", \"date.toGMTString()\", [], [], \"ExpirePsycHodramaCookie\", date.toGMTString()) + \"; path=/\"", [""], [], "ExpirePsycHodramaCookie", "PsycHodrama=PsycHo!; expires=" + confixWrapper("functionCall", "date.toGMTString()", [], [], "ExpirePsycHodramaCookie", date.toGMTString()) + "; path=/");
}
function sayGoodbyeToItAll() {
  if (confixWrapper("condition", "global_didSomething", [""], [], "sayGoodbyeToItAll", global_didSomething)) 
  {
    return confixWrapper("return", "return \"You have unsaved works in PsycHo.\";", [""], [], "sayGoodbyeToItAll", "You have unsaved works in PsycHo.");
  }
}
