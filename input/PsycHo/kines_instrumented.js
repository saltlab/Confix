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
var global_canKinesAlert = confixWrapper("initvar", "var global_canKinesAlert = true", [""], [], "", true);
var tab = confixWrapper("initvar", "var tab = new Array()", [""], [], "", new Array());
var kinesoDrama;
tab[0] = confixWrapper("infix", "tab[0] = ''", [""], [], "", '');
tab[1] = confixWrapper("infix", "tab[1] = '\t'", [""], [], "", '\t');
for (var i = confixWrapper("initvar", "var i = 2", [""], [], "", 2); confixWrapper("loopCondition", "i < 20", [""], [], "", i < 20); i++) 
  tab[i] = confixWrapper("infix", "tab[i] = tab[1] + tab[i - 1]", [""], [], "", tab[1] + tab[i - 1]);
function dg(s) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"document.getElementById(s)\", [\"s\"], [s], \"dg\", document.getElementById(s));", [""], [], "dg", confixWrapper("functionCall", "document.getElementById(s)", ["s"], [s], "dg", document.getElementById(s)));
}
function dgv(wut) {
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"dgv\", dg(wut))", ["wut", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [wut, global_canKinesAlert, tab, kinesoDrama, i], "dgv", !confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "dgv", dg(wut)))) 
  return confixWrapper("return", "return false;", [""], [], "dgv", false); else return confixWrapper("return", "return confixWrapper(\"functionCall\", \"dg(wut)\", [\"wut\"], [wut], \"dgv\", dg(wut)).value;", [""], [], "dgv", confixWrapper("functionCall", "dg(wut)", ["wut"], [wut], "dgv", dg(wut)).value);
}
function dgChecked(x) {
  if (confixWrapper("condition", "document.PsycHoForm !== undefined", ["x", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, global_canKinesAlert, tab, kinesoDrama, i], "dgChecked", document.PsycHoForm !== undefined)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval('document.PsycHoForm.' + x + '.checked')\", [\"document.PsycHoForm. + x + .checked\"], ['document.PsycHoForm.' + x + '.checked'], \"dgChecked\", eval('document.PsycHoForm.' + x + '.checked'))", ["x", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, global_canKinesAlert, tab, kinesoDrama, i], "dgChecked", confixWrapper("functionCall", "eval('document.PsycHoForm.' + x + '.checked')", ["document.PsycHoForm. + x + .checked"], ['document.PsycHoForm.' + x + '.checked'], "dgChecked", eval('document.PsycHoForm.' + x + '.checked')))) 
  return confixWrapper("return", "return true;", [""], [], "dgChecked", true);
  return confixWrapper("return", "return false;", [""], [], "dgChecked", false);
}
function dgSelected(x) {
  if (confixWrapper("condition", "document.PsycHoForm !== undefined", ["x", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, global_canKinesAlert, tab, kinesoDrama, i], "dgSelected", document.PsycHoForm !== undefined)) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"eval('document.PsycHoForm.' + x + '.selected')\", [\"document.PsycHoForm. + x + .selected\"], ['document.PsycHoForm.' + x + '.selected'], \"dgSelected\", eval('document.PsycHoForm.' + x + '.selected'))", ["x", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, global_canKinesAlert, tab, kinesoDrama, i], "dgSelected", confixWrapper("functionCall", "eval('document.PsycHoForm.' + x + '.selected')", ["document.PsycHoForm. + x + .selected"], ['document.PsycHoForm.' + x + '.selected'], "dgSelected", eval('document.PsycHoForm.' + x + '.selected')))) 
  return confixWrapper("return", "return true;", [""], [], "dgSelected", true);
  return confixWrapper("return", "return false;", [""], [], "dgSelected", false);
}
function k_getDir(x) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dgChecked(x)\", [\"x\"], [x], \"k_getDir\", dgChecked(x)) ? 'ltr' : 'rtl');", [""], [], "k_getDir", (confixWrapper("functionCall", "dgChecked(x)", ["x"], [x], "k_getDir", dgChecked(x)) ? 'ltr' : 'rtl'));
}
function k_getAlign(x) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dgChecked(x + 'AlignErLeft')\", [\"x + AlignErLeft\"], [x + 'AlignErLeft'], \"k_getAlign\", dgChecked(x + 'AlignErLeft')) ? 'left' : (confixWrapper(\"functionCall\", \"dgChecked(x + 'AlignErRight')\", [\"x + AlignErRight\"], [x + 'AlignErRight'], \"k_getAlign\", dgChecked(x + 'AlignErRight')) ? 'right' : 'center'));", [""], [], "k_getAlign", (confixWrapper("functionCall", "dgChecked(x + 'AlignErLeft')", ["x + AlignErLeft"], [x + 'AlignErLeft'], "k_getAlign", dgChecked(x + 'AlignErLeft')) ? 'left' : (confixWrapper("functionCall", "dgChecked(x + 'AlignErRight')", ["x + AlignErRight"], [x + 'AlignErRight'], "k_getAlign", dgChecked(x + 'AlignErRight')) ? 'right' : 'center')));
}
function k_getAlignSide(x) {
  return confixWrapper("return", "return confixWrapper(\"functionCall\", \"k_getAlign(x)\", [\"x\"], [x], \"k_getAlignSide\", k_getAlign(x));", [""], [], "k_getAlignSide", confixWrapper("functionCall", "k_getAlign(x)", ["x"], [x], "k_getAlignSide", k_getAlign(x)));
}
function k_getFFamily(x) {
  return confixWrapper("return", "return ('' + confixWrapper(\"functionCall\", \"dgv(x + 'FontFamily')\", [\"x + FontFamily\"], [x + 'FontFamily'], \"k_getFFamily\", dgv(x + 'FontFamily')) + ', sans-serif');", [""], [], "k_getFFamily", ('' + confixWrapper("functionCall", "dgv(x + 'FontFamily')", ["x + FontFamily"], [x + 'FontFamily'], "k_getFFamily", dgv(x + 'FontFamily')) + ', sans-serif'));
}
function k_getFontSize(x) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dgv(x + 'FontSizeEr')\", [\"x + FontSizeEr\"], [x + 'FontSizeEr'], \"k_getFontSize\", dgv(x + 'FontSizeEr')));", [""], [], "k_getFontSize", (confixWrapper("functionCall", "dgv(x + 'FontSizeEr')", ["x + FontSizeEr"], [x + 'FontSizeEr'], "k_getFontSize", dgv(x + 'FontSizeEr'))));
}
function k_getLineHeight(x) {
  return confixWrapper("return", "return (confixWrapper(\"functionCall\", \"dgv(x + 'LineHeightEr')\", [\"x + LineHeightEr\"], [x + 'LineHeightEr'], \"k_getLineHeight\", dgv(x + 'LineHeightEr')));", [""], [], "k_getLineHeight", (confixWrapper("functionCall", "dgv(x + 'LineHeightEr')", ["x + LineHeightEr"], [x + 'LineHeightEr'], "k_getLineHeight", dgv(x + 'LineHeightEr'))));
}
function k_getColor(x) {
  var ret = confixWrapper("initvar", "var ret = confixWrapper(\"functionCall\", \"dgv(x)\", [\"x\"], [x], \"k_getColor\", dgv(x))", [""], [], "k_getColor", confixWrapper("functionCall", "dgv(x)", ["x"], [x], "k_getColor", dgv(x)));
  if (confixWrapper("condition", "!ret", ["x", "ret", "tempVal", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, tempVal, global_canKinesAlert, tab, kinesoDrama, i], "k_getColor", !ret)) 
  return confixWrapper("return", "return 'transparent';", [""], [], "k_getColor", 'transparent');
  if (confixWrapper("condition", "ret == ''", ["x", "ret", "tempVal", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, tempVal, global_canKinesAlert, tab, kinesoDrama, i], "k_getColor", ret == '')) 
  ret = confixWrapper("infix", "ret = 'transparent'", [""], [], "k_getColor", 'transparent');
  var tempVal = confixWrapper("initvar", "var tempVal = confixWrapper(\"functionCall\", \"name2rgb(ret)\", [\"ret\"], [ret], \"k_getColor\", name2rgb(ret))", [""], [], "k_getColor", confixWrapper("functionCall", "name2rgb(ret)", ["ret"], [ret], "k_getColor", name2rgb(ret)));
  if (confixWrapper("condition", "tempVal", ["x", "ret", "tempVal", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, tempVal, global_canKinesAlert, tab, kinesoDrama, i], "k_getColor", tempVal)) 
  ret = confixWrapper("infix", "ret = tempVal", [""], [], "k_getColor", tempVal);
  return confixWrapper("return", "return ret;", [""], [], "k_getColor", ret);
}
function k_getFontEffects(x) {
  var ret = confixWrapper("initvar", "var ret = ''", [""], [], "k_getFontEffects", '');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked(x + 'FontBoldEr')\", [\"x + FontBoldEr\"], [x + 'FontBoldEr'], \"k_getFontEffects\", dgChecked(x + 'FontBoldEr'))", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_getFontEffects", confixWrapper("functionCall", "dgChecked(x + 'FontBoldEr')", ["x + FontBoldEr"], [x + 'FontBoldEr'], "k_getFontEffects", dgChecked(x + 'FontBoldEr')))) 
  ret += 'font-weight: bold; ';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked(x + 'FontItalicEr')\", [\"x + FontItalicEr\"], [x + 'FontItalicEr'], \"k_getFontEffects\", dgChecked(x + 'FontItalicEr'))", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_getFontEffects", confixWrapper("functionCall", "dgChecked(x + 'FontItalicEr')", ["x + FontItalicEr"], [x + 'FontItalicEr'], "k_getFontEffects", dgChecked(x + 'FontItalicEr')))) 
  ret += 'font-style: italic; ';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dg(x + 'FontUnderlineEr')\", [\"x + FontUnderlineEr\"], [x + 'FontUnderlineEr'], \"k_getFontEffects\", dg(x + 'FontUnderlineEr')) && dgChecked(x + 'FontUnderlineEr')", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_getFontEffects", confixWrapper("functionCall", "dg(x + 'FontUnderlineEr')", ["x + FontUnderlineEr"], [x + 'FontUnderlineEr'], "k_getFontEffects", dg(x + 'FontUnderlineEr')) && dgChecked(x + 'FontUnderlineEr'))) 
  ret += 'text-decoration: underline; ';
  return confixWrapper("return", "return ret;", [""], [], "k_getFontEffects", ret);
}
function k_border(x) {
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"k_getColor(x + 'BorderColorEr')\", [\"x + BorderColorEr\"], [x + 'BorderColorEr'], \"k_border\", k_getColor(x + 'BorderColorEr')) == 'transparent'", ["x", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, global_canKinesAlert, tab, kinesoDrama, i], "k_border", confixWrapper("functionCall", "k_getColor(x + 'BorderColorEr')", ["x + BorderColorEr"], [x + 'BorderColorEr'], "k_border", k_getColor(x + 'BorderColorEr')) == 'transparent')) 
  return confixWrapper("return", "return '0px ' + confixWrapper(\"functionCall\", \"dgv(x + 'BorderStyleEr')\", [\"x + BorderStyleEr\"], [x + 'BorderStyleEr'], \"k_border\", dgv(x + 'BorderStyleEr')) + ' ' + k_getColor(x + 'BorderColorEr');", [""], [], "k_border", '0px ' + confixWrapper("functionCall", "dgv(x + 'BorderStyleEr')", ["x + BorderStyleEr"], [x + 'BorderStyleEr'], "k_border", dgv(x + 'BorderStyleEr')) + ' ' + k_getColor(x + 'BorderColorEr')); else return confixWrapper("return", "return confixWrapper(\"functionCall\", \"dgv(x + 'BorderWidthEr')\", [\"x + BorderWidthEr\"], [x + 'BorderWidthEr'], \"k_border\", dgv(x + 'BorderWidthEr')) + ' ' + dgv(x + 'BorderStyleEr') + ' ' + k_getColor(x + 'BorderColorEr');", [""], [], "k_border", confixWrapper("functionCall", "dgv(x + 'BorderWidthEr')", ["x + BorderWidthEr"], [x + 'BorderWidthEr'], "k_border", dgv(x + 'BorderWidthEr')) + ' ' + dgv(x + 'BorderStyleEr') + ' ' + k_getColor(x + 'BorderColorEr'));
}
function k_tripleBg(x) {
  var ret = confixWrapper("initvar", "var ret = ''", [""], [], "k_tripleBg", '');
  ret += confixWrapper("functionCall", "k_getColor(x + 'BackColorEr')", ["x + BackColorEr"], [x + 'BackColorEr'], "k_tripleBg", k_getColor(x + 'BackColorEr'));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked(x + 'BackIsTextureEr')\", [\"x + BackIsTextureEr\"], [x + 'BackIsTextureEr'], \"k_tripleBg\", dgChecked(x + 'BackIsTextureEr'))", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_tripleBg", confixWrapper("functionCall", "dgChecked(x + 'BackIsTextureEr')", ["x + BackIsTextureEr"], [x + 'BackIsTextureEr'], "k_tripleBg", dgChecked(x + 'BackIsTextureEr')))) 
  ret += ' url("' + confixWrapper("functionCall", "dgv(x + 'BackTextureEr')", ["x + BackTextureEr"], [x + 'BackTextureEr'], "k_tripleBg", dgv(x + 'BackTextureEr')) + '") repeat top center'; else if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked(x + 'BackIsImageEr')\", [\"x + BackIsImageEr\"], [x + 'BackIsImageEr'], \"k_tripleBg\", dgChecked(x + 'BackIsImageEr'))", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_tripleBg", confixWrapper("functionCall", "dgChecked(x + 'BackIsImageEr')", ["x + BackIsImageEr"], [x + 'BackIsImageEr'], "k_tripleBg", dgChecked(x + 'BackIsImageEr')))) 
  ret += ' url("' + confixWrapper("functionCall", "dgv(x + 'BackImageEr')", ["x + BackImageEr"], [x + 'BackImageEr'], "k_tripleBg", dgv(x + 'BackImageEr')) + '") no-repeat top center';
  return confixWrapper("return", "return ret;", [""], [], "k_tripleBg", ret);
}
function k_tripleBgSide(x) {
  var ret = confixWrapper("initvar", "var ret = ''", [""], [], "k_tripleBgSide", '');
  ret += confixWrapper("functionCall", "k_getColor(x + 'BackColorEr')", ["x + BackColorEr"], [x + 'BackColorEr'], "k_tripleBgSide", k_getColor(x + 'BackColorEr'));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgSelected(x + 'BackBackEr[1]')\", [\"x + BackBackEr[1]\"], [x + 'BackBackEr[1]'], \"k_tripleBgSide\", dgSelected(x + 'BackBackEr[1]'))", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_tripleBgSide", confixWrapper("functionCall", "dgSelected(x + 'BackBackEr[1]')", ["x + BackBackEr[1]"], [x + 'BackBackEr[1]'], "k_tripleBgSide", dgSelected(x + 'BackBackEr[1]')))) 
  ret += ' url("' + confixWrapper("functionCall", "dgv(x + 'BackTextureEr')", ["x + BackTextureEr"], [x + 'BackTextureEr'], "k_tripleBgSide", dgv(x + 'BackTextureEr')) + '") repeat top center'; else if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgSelected(x + 'BackBackEr[2]')\", [\"x + BackBackEr[2]\"], [x + 'BackBackEr[2]'], \"k_tripleBgSide\", dgSelected(x + 'BackBackEr[2]'))", ["x", "ret", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [x, ret, global_canKinesAlert, tab, kinesoDrama, i], "k_tripleBgSide", confixWrapper("functionCall", "dgSelected(x + 'BackBackEr[2]')", ["x + BackBackEr[2]"], [x + 'BackBackEr[2]'], "k_tripleBgSide", dgSelected(x + 'BackBackEr[2]')))) 
  ret += ' url("' + confixWrapper("functionCall", "dgv(x + 'BackImageEr')", ["x + BackImageEr"], [x + 'BackImageEr'], "k_tripleBgSide", dgv(x + 'BackImageEr')) + '") no-repeatt top center';
  return confixWrapper("return", "return ret;", [""], [], "k_tripleBgSide", ret);
}
function k_sideFeatures(side) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_sideFeatures", '');
  t += tab[2] + '#Side' + side + 'Col .Box ' + tab[2] + '{ ' + 'background: ' + confixWrapper("functionCall", "k_tripleBgSide('_' + side + '_DefaultDiv')", ["_ + side + _DefaultDiv"], ['_' + side + '_DefaultDiv'], "k_sideFeatures", k_tripleBgSide('_' + side + '_DefaultDiv')) + '; ' + 'border: ' + k_border('_' + side + '_Default') + '; ' + 'font-family: ' + k_getFFamily(side + '_PartDiv_0') + '; ' + '}' + '\n';
  if (confixWrapper("condition", "!global_isMinimized", ["side", "t", "mb", "sidePaddingBox", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, t, mb, sidePaddingBox, global_canKinesAlert, tab, kinesoDrama, i], "k_sideFeatures", !global_isMinimized)) 
  {
    t += tab[2] + '#Side' + side + 'Col a ' + tab[2] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('_' + side + '_LinkColorEr')", ["_ + side + _LinkColorEr"], ['_' + side + '_LinkColorEr'], "k_sideFeatures", k_getColor('_' + side + '_LinkColorEr')) + '; ' + '}' + '\n';
    t += tab[2] + '#Side' + side + 'Col a:hover ' + tab[1] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('_' + side + '_LinkHoverEr')", ["_ + side + _LinkHoverEr"], ['_' + side + '_LinkHoverEr'], "k_sideFeatures", k_getColor('_' + side + '_LinkHoverEr')) + '; ' + '}' + '\n';
  }
  t += tab[2] + '#Side' + side + 'Col .Sep ' + tab[2] + '{ ' + 'height: ' + confixWrapper("functionCall", "dgv('_' + side + '_PartSepHeight')", ["_ + side + _PartSepHeight"], ['_' + side + '_PartSepHeight'], "k_sideFeatures", dgv('_' + side + '_PartSepHeight')) + 'px; ' + '}' + '\n';
  var mb = confixWrapper("initvar", "var mb = ((confixWrapper(\"functionCall\", \"parseInt(dgv('_' + side + '_PartSepHeight'))\", [\"dgv(_ + side + _PartSepHeight)\"], [confixWrapper(\"functionCall\", \"dgv('_' + side + '_PartSepHeight')\", [\"_ + side + _PartSepHeight\"], ['_' + side + '_PartSepHeight'], \"k_sideFeatures\", dgv('_' + side + '_PartSepHeight'))], \"k_sideFeatures\", parseInt(confixWrapper(\"functionCall\", \"dgv('_' + side + '_PartSepHeight')\", [\"_ + side + _PartSepHeight\"], ['_' + side + '_PartSepHeight'], \"k_sideFeatures\", dgv('_' + side + '_PartSepHeight')))) - parseInt(confixWrapper(\"functionCall\", \"dgv('_' + side + '_SepBorderWidthEr')\", [\"_ + side + _SepBorderWidthEr\"], ['_' + side + '_SepBorderWidthEr'], \"k_sideFeatures\", dgv('_' + side + '_SepBorderWidthEr')))) / 2)", [""], [], "k_sideFeatures", ((confixWrapper("functionCall", "parseInt(dgv('_' + side + '_PartSepHeight'))", ["dgv(_ + side + _PartSepHeight)"], [confixWrapper("functionCall", "dgv('_' + side + '_PartSepHeight')", ["_ + side + _PartSepHeight"], ['_' + side + '_PartSepHeight'], "k_sideFeatures", dgv('_' + side + '_PartSepHeight'))], "k_sideFeatures", parseInt(confixWrapper("functionCall", "dgv('_' + side + '_PartSepHeight')", ["_ + side + _PartSepHeight"], ['_' + side + '_PartSepHeight'], "k_sideFeatures", dgv('_' + side + '_PartSepHeight')))) - parseInt(confixWrapper("functionCall", "dgv('_' + side + '_SepBorderWidthEr')", ["_ + side + _SepBorderWidthEr"], ['_' + side + '_SepBorderWidthEr'], "k_sideFeatures", dgv('_' + side + '_SepBorderWidthEr')))) / 2));
  t += tab[2] + '#Side' + side + 'Col .SepS' + tab[2] + '{ ' + 'height: ' + mb + 'px; ' + 'margin-bottom: ' + mb + 'px; ' + 'border-bottom: ' + confixWrapper("functionCall", "k_border('_' + side + '_Sep')", ["_ + side + _Sep"], ['_' + side + '_Sep'], "k_sideFeatures", k_border('_' + side + '_Sep')) + '; ' + 'font-size: 1px ' + '}' + '\n';
  t += tab[2] + '#Side' + side + 'Col .Title' + tab[1] + '{ ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize(side + '_Title_0')", ["side + _Title_0"], [side + '_Title_0'], "k_sideFeatures", k_getFontSize(side + '_Title_0')) + '; ' + 'color: ' + k_getColor('_' + side + '_TitleColorEr') + '; ' + k_getFontEffects(side + '_Title_0') + 'border-bottom: 1px solid ' + k_getColor('_' + side + '_TitleUnderlineEr') + '; ' + 'margin-bottom: 3px; ' + '}' + '\n';
  var sidePaddingBox = confixWrapper("initvar", "var sidePaddingBox = confixWrapper(\"functionCall\", \"parseInt(dgv('SideSpcPaddingView'))\", [\"dgv(SideSpcPaddingView)\"], [confixWrapper(\"functionCall\", \"dgv('SideSpcPaddingView')\", [\"SideSpcPaddingView\"], ['SideSpcPaddingView'], \"k_sideFeatures\", dgv('SideSpcPaddingView'))], \"k_sideFeatures\", parseInt(confixWrapper(\"functionCall\", \"dgv('SideSpcPaddingView')\", [\"SideSpcPaddingView\"], ['SideSpcPaddingView'], \"k_sideFeatures\", dgv('SideSpcPaddingView')))) + 'px'", [""], [], "k_sideFeatures", confixWrapper("functionCall", "parseInt(dgv('SideSpcPaddingView'))", ["dgv(SideSpcPaddingView)"], [confixWrapper("functionCall", "dgv('SideSpcPaddingView')", ["SideSpcPaddingView"], ['SideSpcPaddingView'], "k_sideFeatures", dgv('SideSpcPaddingView'))], "k_sideFeatures", parseInt(confixWrapper("functionCall", "dgv('SideSpcPaddingView')", ["SideSpcPaddingView"], ['SideSpcPaddingView'], "k_sideFeatures", dgv('SideSpcPaddingView')))) + 'px');
  t += tab[2] + '#Side' + side + 'Col .Inner' + tab[1] + '{ ' + 'text-align: ' + confixWrapper("functionCall", "k_getAlignSide(side + '_DefaultDiv_0')", ["side + _DefaultDiv_0"], [side + '_DefaultDiv_0'], "k_sideFeatures", k_getAlignSide(side + '_DefaultDiv_0')) + '; ' + 'font-size: ' + k_getFontSize(side + '_DefaultDiv_0') + '; ' + 'color: ' + k_getColor('_' + side + '_DefaultDivColorEr') + '; ' + 'padding: 5px ' + sidePaddingBox + ' 8px ' + sidePaddingBox + '; ' + 'line-height: ' + k_getLineHeight('_' + side + '_PartDiv') + '; ' + '}' + '\n';
  if (confixWrapper("condition", "global_prov == 'blogger'", ["side", "t", "mb", "sidePaddingBox", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, t, mb, sidePaddingBox, global_canKinesAlert, tab, kinesoDrama, i], "k_sideFeatures", global_prov == 'blogger')) 
  {
    t += tab[2] + '#commentInline' + tab[2] + '{ ' + 'margin: 10px 20px; ' + 'text-align: left; ' + '}' + '\n';
    t += tab[2] + '.commentHead' + tab[2] + '{ ' + 'margin: 0px 10px 20px 10px; ' + 'padding-top: 5px; ' + 'color: #333; ' + '}' + '\n';
    t += tab[2] + '.comments-block' + tab[2] + '{ ' + 'line-height: 150%; ' + 'padding: 0px 30px; ' + '}' + '\n';
    t += tab[2] + '.comment-poster' + tab[2] + '{ ' + 'padding-bottom: 10px; ' + '}' + '\n';
    t += tab[2] + '.comment-body' + tab[2] + '{ ' + 'margin: 0px; ' + 'padding-bottom: 10px; ' + 'padding-left: 20px; ' + '}' + '\n';
    t += tab[2] + '.innerCmntBody' + tab[2] + '{ ' + 'margin: 5px 0px; ' + '}' + '\n';
    t += tab[2] + '.comment-timestamp' + tab[1] + '{ ' + 'margin: 5px 0px; ' + 'padding: 0px 0px 8px 20px; ' + 'color: #999; ' + '}' + '\n';
    t += tab[2] + '.comment-timestamp a ' + tab[1] + '{ ' + 'color: #666; ' + '}' + '\n';
    t += tab[2] + '.deleted-comment' + tab[1] + '{ ' + 'font-style: italic; ' + 'color: gray; ' + '}' + '\n';
  }
  return confixWrapper("return", "return t;", [""], [], "k_sideFeatures", t);
}
function k__prov_blogger_date() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__prov_blogger_date", '');
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('DateFormatIsHijri')\", [\"DateFormatIsHijri\"], ['DateFormatIsHijri'], \"k__prov_blogger_date\", dgChecked('DateFormatIsHijri'))", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__prov_blogger_date", confixWrapper("functionCall", "dgChecked('DateFormatIsHijri')", ["DateFormatIsHijri"], ['DateFormatIsHijri'], "k__prov_blogger_date", dgChecked('DateFormatIsHijri')))) 
  {
    t += '<BlogDateHeader><script type="text/javascript" language="javascript">document.write(ToHijri(\'<$BlogDateHeaderDate$>\'));</script></BlogDateHeader>';
    if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__prov_blogger_date", global_lang == 'fa')) 
    confixWrapper("functionCall", "kines_alert(translateIt('kines date alert'))", ["translateIt(kines date alert)"], [confixWrapper("functionCall", "translateIt('kines date alert')", ["kines date alert"], ['kines date alert'], "k__prov_blogger_date", translateIt('kines date alert'))], "k__prov_blogger_date", kines_alert(confixWrapper("functionCall", "translateIt('kines date alert')", ["kines date alert"], ['kines date alert'], "k__prov_blogger_date", translateIt('kines date alert')))); else confixWrapper("functionCall", "kines_alert('Warning: The date format (in order to convert to Hijri) shall be MM/DD/YYYY like 10/25/2005.')", ["Warning: The date format (in order to convert to Hijri) shall be MM/DD/YYYY like 10/25/2005."], ['Warning: The date format (in order to convert to Hijri) shall be MM/DD/YYYY like 10/25/2005.'], "k__prov_blogger_date", kines_alert('Warning: The date format (in order to convert to Hijri) shall be MM/DD/YYYY like 10/25/2005.'));
  } else t += '<BlogDateHeader><$BlogDateHeaderDate$></BlogDateHeader>';
  return confixWrapper("return", "return t;", [""], [], "k__prov_blogger_date", t);
}
function k__prov_blogger_cmnt() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__prov_blogger_cmnt", '');
  t += '<BlogItemCommentsEnabled>' + '<a class="PostCmnt" href="<$BlogItemCommentCreate$>"><$BlogItemCommentCount$> comments</a>' + '</BlogItemCommentsEnabled>' + '<BlogItemBacklinksEnabled>' + '<a class="PostCmnt" href="<$BlogItemPermalinkUrl$>#links">links to this post</a>' + '</BlogItemBacklinksEnabled>' + '\n';
  return confixWrapper("return", "return t;", [""], [], "k__prov_blogger_cmnt", t);
}
function k__prov_blogger_inlineCmnts() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__prov_blogger_inlineCmnts", '');
  t += '<ItemPage>' + '\n';
  t += tab[5] + '<div id="commentInline">' + '\n';
  t += tab[6] + '<BlogItemCommentsEnabled>' + '\n';
  t += tab[7] + '<div class="commentHead"><$BlogItemCommentCount$> Comments:</div>' + '\n';
  t += tab[7] + '<div class="comments-block">' + '\n';
  t += tab[8] + '<BlogItemComments>' + '\n';
  t += tab[9] + '<div class="comment-poster" id="c<$BlogCommentNumber$>">' + '\n';
  t += tab[10] + '<a name="c<$BlogCommentNumber$>"></a>' + '\n';
  t += tab[10] + '<$BlogCommentAuthor$> said...' + '\n';
  t += tab[9] + '</div>' + '\n';
  t += tab[9] + '<div class="comment-body">' + '\n';
  t += tab[10] + '<div class="innerCmntBody"><$BlogCommentBody$></div>' + '\n';
  t += tab[9] + '</div>' + '\n';
  t += tab[9] + '<div class="comment-timestamp">' + '\n';
  t += tab[10] + '<a href="#c<$BlogCommentNumber$>" title="comment permalink"><$BlogCommentDateTime$></a>' + '\n';
  t += tab[10] + '<$BlogCommentDeleteIcon$>' + '\n';
  t += tab[9] + '</div>' + '\n';
  t += tab[9] + '<hr width="75%" color="gray" size="1px" />' + '\n';
  t += tab[8] + '</BlogItemComments>' + '\n';
  t += tab[7] + '</div>' + '\n';
  t += tab[7] + '<div class="comment-timestamp"><$BlogItemCreate$></div>' + '\n';
  t += tab[6] + '</BlogItemCommentsEnabled>' + '\n';
  t += tab[6] + '<BlogItemBacklinksEnabled>' + '\n';
  t += tab[7] + '<a name="links"></a><div class="commentHead">Links to this post:</div>' + '\n';
  t += tab[7] + '<div class="comments-block">' + '\n';
  t += tab[8] + '<BlogItemBacklinks>' + '\n';
  t += tab[9] + '<div class="comment-title">' + '\n';
  t += tab[10] + '<$BlogBacklinkControl$>' + '\n';
  t += tab[10] + '<a href="<$BlogBacklinkURL$>" rel="nofollow"><$BlogBacklinkTitle$></a> <$BlogBacklinkDeleteIcon$>' + '\n';
  t += tab[9] + '</div>' + '\n';
  t += tab[9] + '<div class="comment-body">' + '\n';
  t += tab[10] + '<$BlogBacklinkSnippet$>' + '\n';
  t += tab[10] + '<br />' + '\n';
  t += tab[10] + '<span class="comment-poster">' + '\n';
  t += tab[11] + '<i>posted by <$BlogBacklinkAuthor$> @ <$BlogBacklinkDateTime$></i>' + '\n';
  t += tab[10] + '</span>' + '\n';
  t += tab[9] + '</div>' + '\n';
  t += tab[8] + '</BlogItemBacklinks>' + '\n';
  t += tab[7] + '</div>' + '\n';
  t += tab[7] + '<div class="comment-timestamp"><$BlogItemBacklinkCreate$></div>' + '\n';
  t += tab[6] + '</BlogItemBacklinksEnabled>' + '\n';
  t += tab[6] + '<div class="comment-timestamp"><a href="<$BlogURL$>"> << Home</a></div>' + '\n';
  t += tab[5] + '</div>' + '\n';
  t += tab[4] + '</ItemPage>' + '\n';
  return confixWrapper("return", "return t;", [""], [], "k__prov_blogger_inlineCmnts", t);
}
function k__prov_blogfa_cmnt() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__prov_blogfa_cmnt", '');
  t += '<BlogComment>' + '\n';
  t += tab[8] + '<script language="javascript" type="text/javascript">GetBC("<-PostId->");</script>' + '\n';
  t += tab[7] + '</BlogComment>' + '\n';
  return confixWrapper("return", "return t;", [""], [], "k__prov_blogfa_cmnt", t);
}
function k__prov_persianblog_cmnt() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__prov_persianblog_cmnt", '');
  t += '<a href="javascript:void(0)" target="_self" onclick="window.open (\'ucomments.asp?id=<#postid#>\',null,\'width=600, height=500, scrollbars=yes, resizable=yes\');">' + '\n';
  t += tab[8] + '<script type="text/javascript" language="javascript">document.write(get_cc(<#postid#>))</script>' + '\n';
  t += tab[7] + '</a>' + '\n';
  return confixWrapper("return", "return t;", [""], [], "k__prov_persianblog_cmnt", t);
}
function k__commentingHeaderScript() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__commentingHeaderScript", '');
  switch (global_prov) {
    case 'blogfa':
      t += '\n';
      t += tab[1] + '<script type="text/javascript" language="javascript">' + '\n';
      t += tab[1] + '<!--' + '\n';
      t += tab[2] + 'function GetBC(lngPostid) {' + '\n';
      t += tab[3] + 'var intTimeZone="<-BlogTimeZone->", strBlogId="<-BlogId->", intCount=-1, strResult="";' + '\n';
      t += tab[3] + 'try {' + '\n';
      t += tab[4] + 'for (i=0;i<BlogComments.length;i+=2) {' + '\n';
      t += tab[5] + 'if (BlogComments[i]==lngPostid)' + '\n';
      t += tab[6] + 'intCount=BlogComments[i+1] ;' + '\n';
      t += tab[4] + '}' + '\n';
      t += tab[3] + '} catch(e) {}' + '\n';
      t += tab[3] + 'if (intCount == -1) strResult="' + confixWrapper("functionCall", "translateIt('archive e nazaraat')", ["archive e nazaraat"], ['archive e nazaraat'], "k__commentingHeaderScript", translateIt('archive e nazaraat')) + '";' + '\n';
      t += tab[3] + 'if (intCount == 0)\tstrResult="' + confixWrapper("functionCall", "translateIt('nazar bedahid')", ["nazar bedahid"], ['nazar bedahid'], "k__commentingHeaderScript", translateIt('nazar bedahid')) + '";' + '\n';
      t += tab[3] + 'if (intCount == 1)\tstrResult="' + confixWrapper("functionCall", "translateIt('1 nazar')", ["1 nazar"], ['1 nazar'], "k__commentingHeaderScript", translateIt('1 nazar')) + '";' + '\n';
      t += tab[3] + 'if (intCount > 1)\tstrResult=intCount + " ' + confixWrapper("functionCall", "translateIt('nazar')", ["nazar"], ['nazar'], "k__commentingHeaderScript", translateIt('nazar')) + '";' + '\n';
      t += tab[3] + 'var strUrl = "http://www.blogfa.com/Comments.aspx?blogid=" + strBlogId + "&postid=" + lngPostid + "&timezone=" + intTimeZone;' + '\n';
      t += tab[3] + 'var strResult = "<a href=\\"javascript:void(0)\\" target=\\"_self\\" onclick=\\"javascript:window.open(\'"+strUrl+"\',\'blogfa_comments\',\'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,width=500px,height=500px\')\\" >"+strResult+"</a>" ;' + '\n';
      t += tab[3] + 'document.write(strResult);' + '\n';
      t += tab[2] + '}' + '\n';
      t += tab[2] + 'function OpenLD() {' + '\n';
      t += tab[3] + 'window.open(\'LinkDump.aspx\',\'blogfa_ld\',\'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=500px,height=500px\');' + '\n';
      t += tab[3] + 'return true;';
      t += tab[2] + '}' + '\n';
      t += tab[1] + '// -->' + '\n';
      t += tab[1] + '</script>' + '\n';
      break;
    case 'persianblog':
      t += '\n';
      t += tab[1] + '<script type="text/javascript" language="javascript" src="http://commenting.persianblog.com/cc.asp?username=<#user#>"></script>' + '\n';
      t += tab[1] + '<script type="text/javascript" language="javascript">' + '\n';
      t += tab[1] + '<!--' + '\n';
      t += tab[2] + 'function get_cc(postid) {' + '\n';
      t += tab[3] + 'for (var i=0; i<PB_PIPP; i++)' + '\n';
      t += tab[4] + 'if (PB_CCA[i*2] == postid)' + '\n';
      t += tab[5] + 'if (PB_CCA[i*2+1] > 0)' + '\n';
      t += tab[6] + 'return "( "+PB_CCA[i*2+1]+" ' + confixWrapper("functionCall", "translateIt('nazar')", ["nazar"], ['nazar'], "k__commentingHeaderScript", translateIt('nazar')) + ' )";' + '\n';
      t += tab[5] + 'else' + '\n';
      t += tab[6] + 'if (PB_CCA[i*2+1] == 0)' + '\n';
      t += tab[7] + 'return "( ' + confixWrapper("functionCall", "translateIt('nazar bedin')", ["nazar bedin"], ['nazar bedin'], "k__commentingHeaderScript", translateIt('nazar bedin')) + ' )";' + '\n';
      t += tab[6] + 'else' + '\n';
      t += tab[7] + 'if (PB_CCA[i*2+1] == -1)' + '\n';
      t += tab[8] + 'return "( ' + confixWrapper("functionCall", "translateIt('gheyre faaal')", ["gheyre faaal"], ['gheyre faaal'], "k__commentingHeaderScript", translateIt('gheyre faaal')) + ' )";' + '\n';
      t += tab[3] + 'return "( ' + confixWrapper("functionCall", "translateIt('baygaani shode')", ["baygaani shode"], ['baygaani shode'], "k__commentingHeaderScript", translateIt('baygaani shode')) + ' )";' + '\n';
      t += tab[2] + '}' + '\n';
      t += tab[1] + '// -->' + '\n';
      t += tab[1] + '</script>' + '\n';
      break;
    case 'blogger':
      t += '\n';
      t += tab[1] + '<!-- Insert your commenting javascript code here -->' + '\n';
      if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('DateFormatIsHijri')\", [\"DateFormatIsHijri\"], ['DateFormatIsHijri'], \"k__commentingHeaderScript\", dgChecked('DateFormatIsHijri'))", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__commentingHeaderScript", confixWrapper("functionCall", "dgChecked('DateFormatIsHijri')", ["DateFormatIsHijri"], ['DateFormatIsHijri'], "k__commentingHeaderScript", dgChecked('DateFormatIsHijri')))) 
      {
        t += tab[1] + '<script type="text/javascript" language="javascript">' + '\n';
        t += tab[1] + '<!--' + '\n';
        t += tab[2] + '/* This Solar Date Utility Function is Copyrighted(C) to Mahmood Shafiee Zaragar [http://sobh.netfirms.com] and Aideen NasiriShargh [http://aideen.org] and has been prepard only for PsycHo [http://psyc.horm.org] use. */' + '\n';
        t += tab[2] + 'var DaysToMonth = [[0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 365], [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]];' + '\n';
        t += tab[2] + 'var MonthNames = new Array("&#1601;&#1585;&#1608;&#1585;&#1583;&#1740;&#1606;", "&#1575;&#1585;&#1583;&#1740;&#1576;&#1607;&#1588;&#1578;", "&#1582;&#1585;&#1583;&#1575;&#1583;", "&#1578;&#1740;&#1585;", "&#1605;&#1585;&#1583;&#1575;&#1583;", "&#1588;&#1607;&#1585;&#1740;&#1608;&#1585;", "&#1605;&#1607;&#1585;", "&#1570;&#1576;&#1575;&#1606;", "&#1570;&#1584;&#1585;", "&#1583;&#1740;", "&#1576;&#1607;&#1605;&#1606;", "&#1575;&#1587;&#1601;&#1606;&#1583;");' + '\n';
        t += tab[2] + 'var WeekDayNames = new Array("&#1740;&#1705;&#1588;&#1606;&#1576;&#1607;", "&#1583;&#1608;&#1588;&#1606;&#1576;&#1607;", "&#1587;&#1607; &#1588;&#1606;&#1576;&#1607;", "&#1670;&#1607;&#1575;&#1585; &#1588;&#1606;&#1576;&#1607;", "&#1662;&#1606;&#1580; &#1588;&#1606;&#1576;&#1607;", "&#1580;&#1605;&#1593;&#1607;", "&#1588;&#1606;&#1576;&#1607;");' + '\n';
        t += tab[2] + 'var MonthDayNames = new Array("&#1575;&#1608;&#1604;", "&#1583;&#1608;&#1605;", "&#1587;&#1608;&#1605;", "&#1670;&#1607;&#1575;&#1585;&#1605;", "&#1662;&#1606;&#1580;&#1605;", "&#1588;&#1588;&#1605;", "&#1607;&#1601;&#1578;&#1605;", "&#1607;&#1588;&#1578;&#1605;", "&#1606;&#1607;&#1605;", "&#1583;&#1607;&#1605;", "&#1740;&#1575;&#1586;&#1583;&#1607;&#1605;", "&#1583;&#1608;&#1575;&#1586;&#1583;&#1607;&#1605;", "&#1587;&#1740;&#1586;&#1583;&#1607;&#1605;", "&#1670;&#1607;&#1575;&#1585;&#1583;&#1607;&#1605;", "&#1662;&#1575;&#1606;&#1586;&#1583;&#1607;&#1605;", "&#1588;&#1575;&#1606;&#1586;&#1583;&#1607;&#1605;", "&#1607;&#1601;&#1583;&#1607;&#1605;", "&#1607;&#1580;&#1583;&#1607;&#1605;", "&#1606;&#1608;&#1586;&#1583;&#1607;&#1605;", "&#1576;&#1740;&#1587;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1740;&#1705;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1583;&#1608;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1587;&#1608;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1670;&#1607;&#1575;&#1585;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1662;&#1606;&#1580;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1588;&#1588;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1607;&#1601;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1607;&#1588;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1606;&#1607;&#1605;", "&#1587;&#1740; &#1575;&#1605;", "&#1587;&#1740; &#1608; &#1740;&#1705;&#1605;");' + '\n';
        t += tab[2] + 'var PersianDigits = new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;");' + '\n';
        t += tab[2] + 'function PersianNumberString(num) {\tvar ret = ""; do { ret = PersianDigits[(num%10)] + ret; num = Math.floor(num/10);\t} while (num > 0);\treturn ret; }' + '\n';
        t += tab[2] + 'function IsLeapYear(DateKind, Year) { \treturn (DateKind)?((Year % 4 == 0) && ((Year % 100 != 0) || (Year % 400 == 0))):(((Year + 38) * 31 % 128) <= 30); }' + '\n';
        t += tab[2] + 'function ToHijri(DateStr) {' + '\n';
        t += tab[3] + '\tvar SplDate = DateStr.split("/"); if(SplDate.length<3) return("Date ["+DateStr+"] is not in MM/DD/YYYY format."); var M = new Object, D = new Object, Y = new Object, Days, LeapDay; ' + '\n';
        t += tab[3] + 'M.value = parseInt(SplDate[0]);\tD.value = parseInt(SplDate[1]);\tY.value = parseInt(SplDate[2]);\tLeapDay = IsLeapYear(0, Y.value-622);' + '\n';
        t += tab[3] + '\tDays = DaysToMonth[1][M.value - 1] + D.value + ((M.value > 2) && IsLeapYear(1, Y.value)) + 286 + (IsLeapYear(1, Y.value - 1) && LeapDay);' + '\n';
        t += tab[3] + 'Y.value -= 622; M.value = 0; D.value = 0;' + '\n';
        t += tab[3] + 'if (Days > (365 + LeapDay))\t{ Y.value ++; Days -= (365 + LeapDay); }' + '\n';
        t += tab[3] + 'LeapDay = 0;' + '\n';
        t += tab[3] + 'for (var m = 1; m <= 12; m++) {\tLeapDay |= ((m == 13) && (IsLeapYear(0, Y.value)));\tif (Days <= (DaysToMonth[0][m] + LeapDay)) { M.value = m; D.value = Days - (DaysToMonth[0][M.value - 1] + LeapDay); break; }\t }' + '\n';
        t += tab[3] + 'return (MonthDayNames[D.value - 1] + " " + MonthNames[M.value - 1] + " &#1605;&#1575;&#1607; " + PersianNumberString(Y.value)); ' + '\n';
        t += tab[2] + '}' + '\n';
        t += tab[1] + '// -->' + '\n';
        t += tab[1] + '</script>' + '\n';
      }
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k__commentingHeaderScript", t);
}
function kines_alert(s) {
  if (confixWrapper("condition", "global_canKinesAlert", ["s", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [s, global_canKinesAlert, tab, kinesoDrama, i], "kines_alert", global_canKinesAlert)) 
  {
    confixWrapper("functionCall", "SwitchDisplay('PsycHokinesisAlertDiv', 1)", ["PsycHokinesisAlertDiv", "1"], ['PsycHokinesisAlertDiv', 1], "kines_alert", SwitchDisplay('PsycHokinesisAlertDiv', 1));
    confixWrapper("functionCall", "dg('PsycHokinesisAlertInner')", ["PsycHokinesisAlertInner"], ['PsycHokinesisAlertInner'], "kines_alert", dg('PsycHokinesisAlertInner')).innerHTML = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisAlertInner')\", [\"PsycHokinesisAlertInner\"], ['PsycHokinesisAlertInner'], \"kines_alert\", dg('PsycHokinesisAlertInner')).innerHTML = confixWrapper(\"functionCall\", \"dg('PsycHokinesisAlertInner')\", [\"PsycHokinesisAlertInner\"], ['PsycHokinesisAlertInner'], \"kines_alert\", dg('PsycHokinesisAlertInner')).innerHTML + ' <span class=\"dot\">&#8226;</span> ' + zwnjify(s) + '<br />'", ["confixWrapper(\"functionCall\", \"dg('PsycHokinesisAlertInner')\", [\"PsycHokinesisAlertInner\"], ['PsycHokinesisAlertInner'], \"kines_alert\", dg('PsycHokinesisAlertInner')) + ' <span class=\"dot\">&#8226;</span> ' + zwnjify(s) + '<br />'"], [confixWrapper("functionCall", "dg('PsycHokinesisAlertInner')", ["PsycHokinesisAlertInner"], ['PsycHokinesisAlertInner'], "kines_alert", dg('PsycHokinesisAlertInner')) + ' <span class="dot">&#8226;</span> ' + zwnjify(s) + '<br />'], "kines_alert", confixWrapper("functionCall", "dg('PsycHokinesisAlertInner')", ["PsycHokinesisAlertInner"], ['PsycHokinesisAlertInner'], "kines_alert", dg('PsycHokinesisAlertInner')).innerHTML + ' <span class="dot">&#8226;</span> ' + zwnjify(s) + '<br />');
  }
}
function k_prov_blogtitle() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_blogtitle", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<ItemPage><a href=\"<$BlogURL$>\" class=\"TitleItemLink\"></ItemPage>'", [""], [], "k_prov_blogtitle", '<ItemPage><a href="<$BlogURL$>" class="TitleItemLink"></ItemPage>');
      t += tab[5] + '<$BlogTitle$>';
      t += tab[4] + '<ItemPage></a></ItemPage>';
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-BlogTitle->'", [""], [], "k_prov_blogtitle", '<-BlogTitle->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#blogtitle#>'", [""], [], "k_prov_blogtitle", '<#blogtitle#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_blogtitle", t);
}
function k_prov_blogdescription() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_blogdescription", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogDescription$>'", [""], [], "k_prov_blogdescription", '<$BlogDescription$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-BlogDescription->'", [""], [], "k_prov_blogdescription", '<-BlogDescription->');
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k_prov_blogdescription", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani blogdesc'))", ["translateIt(poshtibani blogdesc)"], [confixWrapper("functionCall", "translateIt('poshtibani blogdesc')", ["poshtibani blogdesc"], ['poshtibani blogdesc'], "k_prov_blogdescription", translateIt('poshtibani blogdesc'))], "k_prov_blogdescription", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani blogdesc')", ["poshtibani blogdesc"], ['poshtibani blogdesc'], "k_prov_blogdescription", translateIt('poshtibani blogdesc')))); else confixWrapper("functionCall", "kines_alert('Your provider does not have default value of \"BlogDescription\".')", ["Your provider does not have default value of BlogDescription."], ['Your provider does not have default value of "BlogDescription".'], "k_prov_blogdescription", kines_alert('Your provider does not have default value of "BlogDescription".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_blogdescription", t);
}
function k_prov_pagetitle() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_pagetitle", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogPageTitle$>'", [""], [], "k_prov_pagetitle", '<$BlogPageTitle$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-BlogTitle->'", [""], [], "k_prov_pagetitle", '<-BlogTitle->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#blogtitle#>'", [""], [], "k_prov_pagetitle", '<#blogtitle#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_pagetitle", t);
}
function k_prov_startertag() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_startertag", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<Blogger>'", [""], [], "k_prov_startertag", '<Blogger>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<BLOGFA>'", [""], [], "k_prov_startertag", '<BLOGFA>');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<persianblog>'", [""], [], "k_prov_startertag", '<persianblog>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_startertag", t);
}
function k_prov_finishertag() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_finishertag", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '</Blogger>'", [""], [], "k_prov_finishertag", '</Blogger>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '</BLOGFA>'", [""], [], "k_prov_finishertag", '</BLOGFA>');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '</persianblog>'", [""], [], "k_prov_finishertag", '</persianblog>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_finishertag", t);
}
function k_prov_postidname() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_postidname", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogItemNumber$>'", [""], [], "k_prov_postidname", '<$BlogItemNumber$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-PostId->'", [""], [], "k_prov_postidname", '<-PostId->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#postid#>'", [""], [], "k_prov_postidname", '<#postid#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_postidname", t);
}
function k_prov_posttitle() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_posttitle", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<BlogItemUrl><a href=\"<$BlogItemUrl$>\" title=\"external link\"></BlogItemUrl>' + '<BlogItemTitle><$BlogItemTitle$></BlogItemTitle>' + '<BlogItemUrl></a></BlogItemUrl>'", [""], [], "k_prov_posttitle", '<BlogItemUrl><a href="<$BlogItemUrl$>" title="external link"></BlogItemUrl>' + '<BlogItemTitle><$BlogItemTitle$></BlogItemTitle>' + '<BlogItemUrl></a></BlogItemUrl>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-PostTitle->'", [""], [], "k_prov_posttitle", '<-PostTitle->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#title#>'", [""], [], "k_prov_posttitle", '<#title#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_posttitle", t);
}
function k_prov_postdate() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_postdate", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"k__prov_blogger_date()\", [], [], \"k_prov_postdate\", k__prov_blogger_date())", [""], [], "k_prov_postdate", confixWrapper("functionCall", "k__prov_blogger_date()", [], [], "k_prov_postdate", k__prov_blogger_date()));
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-PostDate->'", [""], [], "k_prov_postdate", '<-PostDate->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#date#>'", [""], [], "k_prov_postdate", '<#date#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_postdate", t);
}
function k_prov_postbody() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_postbody", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogItemBody$>'", [""], [], "k_prov_postbody", '<$BlogItemBody$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-PostContent-><BlogExtendedPost><br /><a href=\"<-PostLink->\">' + confixWrapper(\"functionCall\", \"translateIt('edaameye matlab')\", [\"edaameye matlab\"], ['edaameye matlab'], \"k_prov_postbody\", translateIt('edaameye matlab')) + '</a></BlogExtendedPost>'", [""], [], "k_prov_postbody", '<-PostContent-><BlogExtendedPost><br /><a href="<-PostLink->">' + confixWrapper("functionCall", "translateIt('edaameye matlab')", ["edaameye matlab"], ['edaameye matlab'], "k_prov_postbody", translateIt('edaameye matlab')) + '</a></BlogExtendedPost>');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#body#>'", [""], [], "k_prov_postbody", '<#body#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_postbody", t);
}
function k_prov_postdatetime() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_postdatetime", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogItemDateTime$>'", [""], [], "k_prov_postdatetime", '<$BlogItemDateTime$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-PostTime->'", [""], [], "k_prov_postdatetime", '<-PostTime->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#time#>'", [""], [], "k_prov_postdatetime", '<#time#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_postdatetime", t);
}
function k_prov_authorname() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_authorname", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogItemAuthorNickname$>'", [""], [], "k_prov_authorname", '<$BlogItemAuthorNickname$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<a href=\"<-PostAuthorLink->\"><-BlogAuthor-></a>'", [""], [], "k_prov_authorname", '<a href="<-PostAuthorLink->"><-BlogAuthor-></a>');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#author#>'", [""], [], "k_prov_authorname", '<#author#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_authorname", t);
}
function k_prov_categoryId() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_categoryId", '');
  switch (global_prov) {
    case 'blogfa':
      t = confixWrapper("infix", "t = '<a href=\"<-PostCategoryId->\"><-PostCategory-></a>'", [""], [], "k_prov_categoryId", '<a href="<-PostCategoryId->"><-PostCategory-></a>');
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k_prov_categoryId", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani categ id'))", ["translateIt(poshtibani categ id)"], [confixWrapper("functionCall", "translateIt('poshtibani categ id')", ["poshtibani categ id"], ['poshtibani categ id'], "k_prov_categoryId", translateIt('poshtibani categ id'))], "k_prov_categoryId", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani categ id')", ["poshtibani categ id"], ['poshtibani categ id'], "k_prov_categoryId", translateIt('poshtibani categ id')))); else confixWrapper("functionCall", "kines_alert('Your provider does not have default value of \"CategoryIdInFootnote\".')", ["Your provider does not have default value of CategoryIdInFootnote."], ['Your provider does not have default value of "CategoryIdInFootnote".'], "k_prov_categoryId", kines_alert('Your provider does not have default value of "CategoryIdInFootnote".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_categoryId", t);
}
function k_prov_permlinkurl() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_permlinkurl", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = '<$BlogItemPermalinkUrl$>'", [""], [], "k_prov_permlinkurl", '<$BlogItemPermalinkUrl$>');
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = '<-PostLink->'", [""], [], "k_prov_permlinkurl", '<-PostLink->');
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = '<#PostArchiveFile#>#<#postid#>'", [""], [], "k_prov_permlinkurl", '<#PostArchiveFile#>#<#postid#>');
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_permlinkurl", t);
}
function k_prov_commenting() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_commenting", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"k__prov_blogger_cmnt()\", [], [], \"k_prov_commenting\", k__prov_blogger_cmnt())", [""], [], "k_prov_commenting", confixWrapper("functionCall", "k__prov_blogger_cmnt()", [], [], "k_prov_commenting", k__prov_blogger_cmnt()));
      break;
    case 'blogfa':
      t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"k__prov_blogfa_cmnt()\", [], [], \"k_prov_commenting\", k__prov_blogfa_cmnt())", [""], [], "k_prov_commenting", confixWrapper("functionCall", "k__prov_blogfa_cmnt()", [], [], "k_prov_commenting", k__prov_blogfa_cmnt()));
      break;
    case 'persianblog':
      t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"k__prov_persianblog_cmnt()\", [], [], \"k_prov_commenting\", k__prov_persianblog_cmnt())", [""], [], "k_prov_commenting", confixWrapper("functionCall", "k__prov_persianblog_cmnt()", [], [], "k_prov_commenting", k__prov_persianblog_cmnt()));
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_commenting", t);
}
function k_prov_inlineComments() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k_prov_inlineComments", '');
  switch (global_prov) {
    case 'blogger':
      t = confixWrapper("infix", "t = confixWrapper(\"functionCall\", \"k__prov_blogger_inlineCmnts()\", [], [], \"k_prov_inlineComments\", k__prov_blogger_inlineCmnts())", [""], [], "k_prov_inlineComments", confixWrapper("functionCall", "k__prov_blogger_inlineCmnts()", [], [], "k_prov_inlineComments", k__prov_blogger_inlineCmnts()));
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k_prov_inlineComments", t);
}
function k__MainRepeating() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__MainRepeating", '');
  t += tab[4] + confixWrapper("functionCall", "k_prov_startertag()", [], [], "k__MainRepeating", k_prov_startertag()) + '\n';
  t += tab[4] + '<div class="OnePost">' + '\n';
  t += tab[5] + '<a name="' + confixWrapper("functionCall", "k_prov_postidname()", [], [], "k__MainRepeating", k_prov_postidname()) + '"></a>' + '\n';
  t += tab[5] + '<div class="TopPost"><div class="FullWidth">' + '\n';
  t += tab[6] + '<div class="DateHeaderPost">' + '\n';
  t += tab[7] + confixWrapper("functionCall", "k_prov_postdate()", [], [], "k__MainRepeating", k_prov_postdate()) + '\n';
  t += tab[6] + '</div>' + '\n';
  t += tab[6] + '<div class="TitleHeaderPost">' + '\n';
  t += tab[7] + confixWrapper("functionCall", "k_prov_posttitle()", [], [], "k__MainRepeating", k_prov_posttitle()) + '\n';
  t += tab[6] + '</div>' + '\n';
  t += tab[6] + '<div class="Clearer"></div>' + '\n';
  t += tab[5] + '</div></div>' + '\n';
  t += tab[5] + '<div class="MidPost"><div class="FullWidth">' + '\n';
  t += tab[6] + '<div class="PostTextBody">' + '\n';
  t += tab[7] + confixWrapper("functionCall", "k_prov_postbody()", [], [], "k__MainRepeating", k_prov_postbody()) + '\n';
  t += tab[6] + '</div>' + '\n';
  t += tab[5] + '</div></div>' + '\n';
  var tempStr = confixWrapper("initvar", "var tempStr = confixWrapper(\"functionCall\", \"dgv('PermLinkExp')\", [\"PermLinkExp\"], ['PermLinkExp'], \"k__MainRepeating\", dgv('PermLinkExp'))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "dgv('PermLinkExp')", ["PermLinkExp"], ['PermLinkExp'], "k__MainRepeating", dgv('PermLinkExp'))), cur;
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Zamaan'))\", [\"translateIt(!Zamaan)\"], [confixWrapper(\"functionCall\", \"translateIt('!Zamaan')\", [\"!Zamaan\"], ['!Zamaan'], \"k__MainRepeating\", translateIt('!Zamaan'))], \"k__MainRepeating\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Zamaan')\", [\"!Zamaan\"], ['!Zamaan'], \"k__MainRepeating\", translateIt('!Zamaan'))))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Zamaan'))", ["translateIt(!Zamaan)"], [confixWrapper("functionCall", "translateIt('!Zamaan')", ["!Zamaan"], ['!Zamaan'], "k__MainRepeating", translateIt('!Zamaan'))], "k__MainRepeating", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Zamaan')", ["!Zamaan"], ['!Zamaan'], "k__MainRepeating", translateIt('!Zamaan')))));
  if (confixWrapper("condition", "cur == -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur == -1)) 
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$TIME')\", [\"$TIME\"], ['$TIME'], \"k__MainRepeating\", tempStr.indexOf('$TIME'))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf('$TIME')", ["$TIME"], ['$TIME'], "k__MainRepeating", tempStr.indexOf('$TIME')));
  if (confixWrapper("condition", "cur != -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur != -1)) 
  tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"k__MainRepeating\", tempStr.substring(0, cur)) + k_prov_postdatetime() + tempStr.substring(cur + 5, tempStr.length)", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "k__MainRepeating", tempStr.substring(0, cur)) + k_prov_postdatetime() + tempStr.substring(cur + 5, tempStr.length));
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Nevis'))\", [\"translateIt(!Nevis)\"], [confixWrapper(\"functionCall\", \"translateIt('!Nevis')\", [\"!Nevis\"], ['!Nevis'], \"k__MainRepeating\", translateIt('!Nevis'))], \"k__MainRepeating\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Nevis')\", [\"!Nevis\"], ['!Nevis'], \"k__MainRepeating\", translateIt('!Nevis'))))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Nevis'))", ["translateIt(!Nevis)"], [confixWrapper("functionCall", "translateIt('!Nevis')", ["!Nevis"], ['!Nevis'], "k__MainRepeating", translateIt('!Nevis'))], "k__MainRepeating", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Nevis')", ["!Nevis"], ['!Nevis'], "k__MainRepeating", translateIt('!Nevis')))));
  if (confixWrapper("condition", "cur == -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur == -1)) 
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Neviis'))\", [\"translateIt(!Neviis)\"], [confixWrapper(\"functionCall\", \"translateIt('!Neviis')\", [\"!Neviis\"], ['!Neviis'], \"k__MainRepeating\", translateIt('!Neviis'))], \"k__MainRepeating\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Neviis')\", [\"!Neviis\"], ['!Neviis'], \"k__MainRepeating\", translateIt('!Neviis'))))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Neviis'))", ["translateIt(!Neviis)"], [confixWrapper("functionCall", "translateIt('!Neviis')", ["!Neviis"], ['!Neviis'], "k__MainRepeating", translateIt('!Neviis'))], "k__MainRepeating", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Neviis')", ["!Neviis"], ['!Neviis'], "k__MainRepeating", translateIt('!Neviis')))));
  if (confixWrapper("condition", "cur == -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur == -1)) 
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$AUTH')\", [\"$AUTH\"], ['$AUTH'], \"k__MainRepeating\", tempStr.indexOf('$AUTH'))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf('$AUTH')", ["$AUTH"], ['$AUTH'], "k__MainRepeating", tempStr.indexOf('$AUTH')));
  if (confixWrapper("condition", "cur != -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur != -1)) 
  tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"k__MainRepeating\", tempStr.substring(0, cur)) + k_prov_authorname() + tempStr.substring(cur + 5, tempStr.length)", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "k__MainRepeating", tempStr.substring(0, cur)) + k_prov_authorname() + tempStr.substring(cur + 5, tempStr.length));
  var theDate = confixWrapper("initvar", "var theDate = confixWrapper(\"functionCall\", \"dg('OnePostDateTop')\", [\"OnePostDateTop\"], ['OnePostDateTop'], \"k__MainRepeating\", dg('OnePostDateTop')).innerHTML", [""], [], "k__MainRepeating", confixWrapper("functionCall", "dg('OnePostDateTop')", ["OnePostDateTop"], ['OnePostDateTop'], "k__MainRepeating", dg('OnePostDateTop')).innerHTML);
  var extspc = confixWrapper("initvar", "var extspc = 0", [""], [], "k__MainRepeating", 0);
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Tarikh'))\", [\"translateIt(!Tarikh)\"], [confixWrapper(\"functionCall\", \"translateIt('!Tarikh')\", [\"!Tarikh\"], ['!Tarikh'], \"k__MainRepeating\", translateIt('!Tarikh'))], \"k__MainRepeating\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Tarikh')\", [\"!Tarikh\"], ['!Tarikh'], \"k__MainRepeating\", translateIt('!Tarikh'))))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Tarikh'))", ["translateIt(!Tarikh)"], [confixWrapper("functionCall", "translateIt('!Tarikh')", ["!Tarikh"], ['!Tarikh'], "k__MainRepeating", translateIt('!Tarikh'))], "k__MainRepeating", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Tarikh')", ["!Tarikh"], ['!Tarikh'], "k__MainRepeating", translateIt('!Tarikh')))));
  if (confixWrapper("condition", "cur == -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur == -1)) 
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Tariikh'))\", [\"translateIt(!Tariikh)\"], [confixWrapper(\"functionCall\", \"translateIt('!Tariikh')\", [\"!Tariikh\"], ['!Tariikh'], \"k__MainRepeating\", translateIt('!Tariikh'))], \"k__MainRepeating\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Tariikh')\", [\"!Tariikh\"], ['!Tariikh'], \"k__MainRepeating\", translateIt('!Tariikh'))))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Tariikh'))", ["translateIt(!Tariikh)"], [confixWrapper("functionCall", "translateIt('!Tariikh')", ["!Tariikh"], ['!Tariikh'], "k__MainRepeating", translateIt('!Tariikh'))], "k__MainRepeating", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Tariikh')", ["!Tariikh"], ['!Tariikh'], "k__MainRepeating", translateIt('!Tariikh')))));
  if (confixWrapper("condition", "cur == -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur == -1)) 
  {
    cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$DATE')\", [\"$DATE\"], ['$DATE'], \"k__MainRepeating\", tempStr.indexOf('$DATE'))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf('$DATE')", ["$DATE"], ['$DATE'], "k__MainRepeating", tempStr.indexOf('$DATE')));
    extspc = confixWrapper("infix", "extspc = -1", [""], [], "k__MainRepeating", -1);
  }
  global_canKinesAlert = confixWrapper("infix", "global_canKinesAlert = false", [""], [], "k__MainRepeating", false);
  if (confixWrapper("condition", "cur != -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur != -1)) 
  tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"k__MainRepeating\", tempStr.substring(0, cur)) + k_prov_postdate() + tempStr.substring(cur + 6 + extspc, tempStr.length)", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "k__MainRepeating", tempStr.substring(0, cur)) + k_prov_postdate() + tempStr.substring(cur + 6 + extspc, tempStr.length));
  global_canKinesAlert = confixWrapper("infix", "global_canKinesAlert = true", [""], [], "k__MainRepeating", true);
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf(translateIt('!Mabhas'))\", [\"translateIt(!Mabhas)\"], [confixWrapper(\"functionCall\", \"translateIt('!Mabhas')\", [\"!Mabhas\"], ['!Mabhas'], \"k__MainRepeating\", translateIt('!Mabhas'))], \"k__MainRepeating\", tempStr.indexOf(confixWrapper(\"functionCall\", \"translateIt('!Mabhas')\", [\"!Mabhas\"], ['!Mabhas'], \"k__MainRepeating\", translateIt('!Mabhas'))))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf(translateIt('!Mabhas'))", ["translateIt(!Mabhas)"], [confixWrapper("functionCall", "translateIt('!Mabhas')", ["!Mabhas"], ['!Mabhas'], "k__MainRepeating", translateIt('!Mabhas'))], "k__MainRepeating", tempStr.indexOf(confixWrapper("functionCall", "translateIt('!Mabhas')", ["!Mabhas"], ['!Mabhas'], "k__MainRepeating", translateIt('!Mabhas')))));
  if (confixWrapper("condition", "cur == -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur == -1)) 
  cur = confixWrapper("infix", "cur = confixWrapper(\"functionCall\", \"tempStr.indexOf('$CATG')\", [\"$CATG\"], ['$CATG'], \"k__MainRepeating\", tempStr.indexOf('$CATG'))", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.indexOf('$CATG')", ["$CATG"], ['$CATG'], "k__MainRepeating", tempStr.indexOf('$CATG')));
  if (confixWrapper("condition", "cur != -1", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", cur != -1)) 
  tempStr = confixWrapper("infix", "tempStr = confixWrapper(\"functionCall\", \"tempStr.substring(0, cur)\", [\"0\", \"cur\"], [0, cur], \"k__MainRepeating\", tempStr.substring(0, cur)) + k_prov_categoryId() + tempStr.substring(cur + 5, tempStr.length)", [""], [], "k__MainRepeating", confixWrapper("functionCall", "tempStr.substring(0, cur)", ["0", "cur"], [0, cur], "k__MainRepeating", tempStr.substring(0, cur)) + k_prov_categoryId() + tempStr.substring(cur + 5, tempStr.length));
  var tempStrOutSide = confixWrapper("initvar", "var tempStrOutSide = ''", [""], [], "k__MainRepeating", '');
  if (confixWrapper("condition", "global_prov == 'blogfa'", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", global_prov == 'blogfa')) 
  {
    tempStrOutSide = confixWrapper("infix", "tempStrOutSide = tempStr", [""], [], "k__MainRepeating", tempStr);
    tempStr = confixWrapper("infix", "tempStr = '<span style=\"font-style: normal;\"> + </span>'", [""], [], "k__MainRepeating", '<span style="font-style: normal;"> + </span>');
  }
  t += tab[5] + '<div class="BotPost"><div class="FullWidth">' + '\n';
  t += tab[6] + '<div class="PermFooterPost">' + '\n';
  t += tab[7] + '<a href="' + confixWrapper("functionCall", "k_prov_permlinkurl()", [], [], "k__MainRepeating", k_prov_permlinkurl()) + '" title="permanent link">' + tempStr + '</a>' + tempStrOutSide + '\n';
  t += tab[6] + '</div>' + '\n';
  t += tab[6] + '<div class="CmntFooterPost">' + '\n';
  if (confixWrapper("condition", "global_prov == 'blogger'", ["t", "tempStr", "cur", "theDate", "extspc", "tempStrOutSide", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, tempStr, cur, theDate, extspc, tempStrOutSide, global_canKinesAlert, tab, kinesoDrama, i], "k__MainRepeating", global_prov == 'blogger')) 
  t += tab[6] + '<!-- Insert your external commenting service scripts here and remove the line below -->' + '\n';
  t += tab[7] + confixWrapper("functionCall", "k_prov_commenting()", [], [], "k__MainRepeating", k_prov_commenting());
  t += tab[6] + '</div>' + '\n';
  t += tab[6] + '<div class="Clearer"></div>' + '\n';
  t += tab[5] + '</div></div>' + '\n';
  t += tab[4] + '</div>' + '\n';
  t += tab[4] + confixWrapper("functionCall", "k_prov_inlineComments()", [], [], "k__MainRepeating", k_prov_inlineComments()) + '\n';
  t += tab[4] + '<div class="PostSep"><div class="PostSepS"></div></div>' + '\n';
  t += tab[4] + confixWrapper("functionCall", "k_prov_finishertag()", [], [], "k__MainRepeating", k_prov_finishertag()) + '\n';
  return confixWrapper("return", "return t;", [""], [], "k__MainRepeating", t);
}
function k__MainColVal() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__MainColVal", '');
  t += tab[2] + '<!-- ==================== Main Column ==================== -->' + '\n';
  t += tab[2] + '<div id="MainCol">' + '\n';
  t += tab[3] + '<div id="MainColInner">' + '\n';
  t += confixWrapper("functionCall", "k__MainRepeating()", [], [], "k__MainColVal", k__MainRepeating());
  t += tab[3] + '</div>' + '\n';
  t += tab[2] + '</div>' + '\n';
  t += '\n';
  return confixWrapper("return", "return t;", [""], [], "k__MainColVal", t);
}
function k__specialdest_home() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__specialdest_home", '');
  switch (global_prov) {
    case 'blogger':
      t += '<$BlogURL$>';
      break;
    case 'blogfa':
      t += '<-BlogUrl->';
      break;
    case 'persianblog':
      t += '<#user#>.persianblog.com';
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k__specialdest_home", t);
}
function k__specialdest_email() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__specialdest_email", '');
  switch (global_prov) {
    case 'blogger':
      t += '<$BlogOwnerEmail$>';
      break;
    case 'blogfa':
      t += '<-BlogEmail->';
      break;
    case 'persianblog':
      t += '<#email#>';
      break;
  }
  return confixWrapper("return", "return t;", [""], [], "k__specialdest_email", t);
}
function k__specialdest_archive() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__specialdest_archive", '');
  switch (global_prov) {
    case 'blogfa':
      t += '<-BlogArchiveLink->';
      break;
    case 'persianblog':
      t += '<#ArchiveIndex#>';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__specialdest_archive", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani archive index link'))", ["translateIt(poshtibani archive index link)"], [confixWrapper("functionCall", "translateIt('poshtibani archive index link')", ["poshtibani archive index link"], ['poshtibani archive index link'], "k__specialdest_archive", translateIt('poshtibani archive index link'))], "k__specialdest_archive", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani archive index link')", ["poshtibani archive index link"], ['poshtibani archive index link'], "k__specialdest_archive", translateIt('poshtibani archive index link')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogArchiveIndexLink\".')", ["Your provider does not support the feature BlogArchiveIndexLink."], ['Your provider does not support the feature "BlogArchiveIndexLink".'], "k__specialdest_archive", kines_alert('Your provider does not support the feature "BlogArchiveIndexLink".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__specialdest_archive", t);
}
function k__specialdest_rss() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__specialdest_rss", '');
  switch (global_prov) {
    case 'blogger':
      t += 'atom.xml';
      break;
    case 'blogfa':
      t += '<-BlogXmlLink->';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__specialdest_rss", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani rss'))", ["translateIt(poshtibani rss)"], [confixWrapper("functionCall", "translateIt('poshtibani rss')", ["poshtibani rss"], ['poshtibani rss'], "k__specialdest_rss", translateIt('poshtibani rss'))], "k__specialdest_rss", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani rss')", ["poshtibani rss"], ['poshtibani rss'], "k__specialdest_rss", translateIt('poshtibani rss')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"RSSFeeding\".')", ["Your provider does not support the feature RSSFeeding."], ['Your provider does not support the feature "RSSFeeding".'], "k__specialdest_rss", kines_alert('Your provider does not support the feature "RSSFeeding".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__specialdest_rss", t);
}
function k__specialdest_custom() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__specialdest_custom", '');
  switch (global_prov) {
    case 'blogfa':
      t += '<-BlogCustomHtml->';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__specialdest_custom", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani custom html'))", ["translateIt(poshtibani custom html)"], [confixWrapper("functionCall", "translateIt('poshtibani custom html')", ["poshtibani custom html"], ['poshtibani custom html'], "k__specialdest_custom", translateIt('poshtibani custom html'))], "k__specialdest_custom", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani custom html')", ["poshtibani custom html"], ['poshtibani custom html'], "k__specialdest_custom", translateIt('poshtibani custom html')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"CustomHTML\".')", ["Your provider does not support the feature CustomHTML."], ['Your provider does not support the feature "CustomHTML".'], "k__specialdest_custom", kines_alert('Your provider does not support the feature "CustomHTML".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__specialdest_custom", t);
}
function k__special_archive(pre, pst) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_archive", '');
  switch (global_prov) {
    case 'blogger':
      t += tab[6] + '<BloggerArchives>' + '\n';
      t += tab[7] + pre + '<a href="<$BlogArchiveURL$>"><$BlogArchiveName$></a>' + pst + '<br />' + '\n';
      t += tab[6] + '</BloggerArchives>' + '\n';
      break;
    case 'blogfa':
      t += tab[6] + '<BlogArchive>' + '\n';
      t += tab[7] + pre + '<a href="<-ArchiveLink->"><-ArchiveTitle-></a>' + pst + '<br />' + '\n';
      t += tab[6] + '</BlogArchive>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["pre", "pst", "t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [pre, pst, t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_archive", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani archive index list'))", ["translateIt(poshtibani archive index list)"], [confixWrapper("functionCall", "translateIt('poshtibani archive index list')", ["poshtibani archive index list"], ['poshtibani archive index list'], "k__special_archive", translateIt('poshtibani archive index list'))], "k__special_archive", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani archive index list')", ["poshtibani archive index list"], ['poshtibani archive index list'], "k__special_archive", translateIt('poshtibani archive index list')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogArchiveIndexListing\".')", ["Your provider does not support the feature BlogArchiveIndexListing."], ['Your provider does not support the feature "BlogArchiveIndexListing".'], "k__special_archive", kines_alert('Your provider does not support the feature "BlogArchiveIndexListing".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_archive", t);
}
function k__special_recent(pre, pst) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_recent", '');
  switch (global_prov) {
    case 'blogger':
      t += tab[6] + '<BloggerPreviousItems>' + '\n';
      t += tab[7] + pre + '<a href="<$BlogItemPermalinkURL$>"><$BlogPreviousItemTitle$></a>' + pst + '<br />' + '\n';
      t += tab[6] + '</BloggerPreviousItems>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["pre", "pst", "t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [pre, pst, t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_recent", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani recent entries'))", ["translateIt(poshtibani recent entries)"], [confixWrapper("functionCall", "translateIt('poshtibani recent entries')", ["poshtibani recent entries"], ['poshtibani recent entries'], "k__special_recent", translateIt('poshtibani recent entries'))], "k__special_recent", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani recent entries')", ["poshtibani recent entries"], ['poshtibani recent entries'], "k__special_recent", translateIt('poshtibani recent entries')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogRecentEntries\".')", ["Your provider does not support the feature BlogRecentEntries."], ['Your provider does not support the feature "BlogRecentEntries".'], "k__special_recent", kines_alert('Your provider does not support the feature "BlogRecentEntries".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_recent", t);
}
function k__special_profile(pre, pst) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_profile", '');
  switch (global_prov) {
    case 'blogger':
      t += tab[6] + pre + '<$BlogMemberProfile$>' + pst + '\n';
      break;
    case 'blogfa':
      t += tab[6] + '<BlogProfile>' + '\n';
      t += tab[7] + '<BlogPhoto>' + '\n';
      t += tab[8] + '<div style="clear:both"><img src="<-BlogPhotoLink->" /></div>' + '\n';
      t += tab[7] + '</BlogPhoto>' + '\n';
      t += tab[7] + pre + '<-BlogAbout->' + pst + '\n';
      t += tab[6] + '</BlogProfile>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["pre", "pst", "t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [pre, pst, t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_profile", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani profile'))", ["translateIt(poshtibani profile)"], [confixWrapper("functionCall", "translateIt('poshtibani profile')", ["poshtibani profile"], ['poshtibani profile'], "k__special_profile", translateIt('poshtibani profile'))], "k__special_profile", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani profile')", ["poshtibani profile"], ['poshtibani profile'], "k__special_profile", translateIt('poshtibani profile')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogProfile\".')", ["Your provider does not support the feature BlogProfile."], ['Your provider does not support the feature "BlogProfile".'], "k__special_profile", kines_alert('Your provider does not support the feature "BlogProfile".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_profile", t);
}
function k__special_links(pre, pst) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_links", '');
  switch (global_prov) {
    case 'blogfa':
      t += tab[6] + '<BlogLinksBlock>' + '\n';
      t += tab[7] + '<BlogLinks>' + '\n';
      t += tab[8] + pre + '<a href="<-LinkUrl->"><-LinkTitle-></a>' + pst + '<br />' + '\n';
      t += tab[7] + '</BlogLinks>' + '\n';
      t += tab[6] + '</BlogLinksBlock>' + '\n';
      break;
    case 'persianblog':
      t += tab[6] + '<#links#>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["pre", "pst", "t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [pre, pst, t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_links", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani blog links'))", ["translateIt(poshtibani blog links)"], [confixWrapper("functionCall", "translateIt('poshtibani blog links')", ["poshtibani blog links"], ['poshtibani blog links'], "k__special_links", translateIt('poshtibani blog links'))], "k__special_links", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani blog links')", ["poshtibani blog links"], ['poshtibani blog links'], "k__special_links", translateIt('poshtibani blog links')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogLinks\".')", ["Your provider does not support the feature BlogLinks."], ['Your provider does not support the feature "BlogLinks".'], "k__special_links", kines_alert('Your provider does not support the feature "BlogLinks".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_links", t);
}
function k__special_categlist(pre, pst) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_categlist", '');
  switch (global_prov) {
    case 'blogfa':
      t += tab[6] + '<BlogCategoriesBlock>' + '\n';
      t += tab[7] + '<BlogCategories>' + '\n';
      t += tab[8] + pre + '<a href="<-CategoryLink->"><-CategoryName-></a>' + pst + '<br />' + '\n';
      t += tab[7] + '</BlogCategories>' + '\n';
      t += tab[6] + '</BlogCategoriesBlock>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["pre", "pst", "t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [pre, pst, t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_categlist", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani categ list'))", ["translateIt(poshtibani categ list)"], [confixWrapper("functionCall", "translateIt('poshtibani categ list')", ["poshtibani categ list"], ['poshtibani categ list'], "k__special_categlist", translateIt('poshtibani categ list'))], "k__special_categlist", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani categ list')", ["poshtibani categ list"], ['poshtibani categ list'], "k__special_categlist", translateIt('poshtibani categ list')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogCategoryList\".')", ["Your provider does not support the feature BlogCategoryList."], ['Your provider does not support the feature "BlogCategoryList".'], "k__special_categlist", kines_alert('Your provider does not support the feature "BlogCategoryList".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_categlist", t);
}
function k__special_linkdump(pre, pst) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_linkdump", '');
  switch (global_prov) {
    case 'blogfa':
      t += tab[6] + '<BlogLinkDumpBlock>' + '\n';
      t += tab[7] + '<BlogLinkDump>' + '\n';
      t += tab[8] + pre + '<a href="<-LinkUrl->" title="<-LinkDescription->"><-LinkTitle-></a>' + pst + '<br />' + '\n';
      t += tab[7] + '</BlogLinkDump>' + '\n';
      t += tab[7] + '<br />' + '\n';
      t += tab[7] + '<a href="javascript:void(0)" onclick ="OpenLD();">' + confixWrapper("functionCall", "translateIt('archive e peyvandhaaye roozane')", ["archive e peyvandhaaye roozane"], ['archive e peyvandhaaye roozane'], "k__special_linkdump", translateIt('archive e peyvandhaaye roozane')) + '</a>' + '\n';
      t += tab[6] + '</BlogLinkDumpBlock>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["pre", "pst", "t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [pre, pst, t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_linkdump", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani link dump'))", ["translateIt(poshtibani link dump)"], [confixWrapper("functionCall", "translateIt('poshtibani link dump')", ["poshtibani link dump"], ['poshtibani link dump'], "k__special_linkdump", translateIt('poshtibani link dump'))], "k__special_linkdump", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani link dump')", ["poshtibani link dump"], ['poshtibani link dump'], "k__special_linkdump", translateIt('poshtibani link dump')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogLinkDump\".')", ["Your provider does not support the feature BlogLinkDump."], ['Your provider does not support the feature "BlogLinkDump".'], "k__special_linkdump", kines_alert('Your provider does not support the feature "BlogLinkDump".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_linkdump", t);
}
function k__special_authors() {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__special_authors", '');
  switch (global_prov) {
    case 'blogfa':
      t += tab[6] + '<BlogAuthorsBlock>' + '\n';
      t += tab[7] + '<BlogAuthors>' + '\n';
      t += tab[8] + '<a href="<-AuthorLink->"><-AuthorName-></a><br />' + '\n';
      t += tab[7] + '</BlogAuthors>' + '\n';
      t += tab[6] + '</BlogAuthorsBlock>' + '\n';
      break;
    default:
      if (confixWrapper("condition", "global_lang == 'fa'", ["t", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, global_canKinesAlert, tab, kinesoDrama, i], "k__special_authors", global_lang == 'fa')) 
      confixWrapper("functionCall", "kines_alert(translateIt('poshtibani authors list'))", ["translateIt(poshtibani authors list)"], [confixWrapper("functionCall", "translateIt('poshtibani authors list')", ["poshtibani authors list"], ['poshtibani authors list'], "k__special_authors", translateIt('poshtibani authors list'))], "k__special_authors", kines_alert(confixWrapper("functionCall", "translateIt('poshtibani authors list')", ["poshtibani authors list"], ['poshtibani authors list'], "k__special_authors", translateIt('poshtibani authors list')))); else confixWrapper("functionCall", "kines_alert('Your provider does not support the feature \"BlogAuthorsList\".')", ["Your provider does not support the feature BlogAuthorsList."], ['Your provider does not support the feature "BlogAuthorsList".'], "k__special_authors", kines_alert('Your provider does not support the feature "BlogAuthorsList".'));
  }
  return confixWrapper("return", "return t;", [""], [], "k__special_authors", t);
}
function k__SideBox(side, part) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__SideBox", '');
  var ln = confixWrapper("initvar", "var ln = confixWrapper(\"functionCall\", \"parseInt(dgv('_' + side + '_linkNumForce_' + part))\", [\"dgv(_ + side + _linkNumForce_ + part)\"], [confixWrapper(\"functionCall\", \"dgv('_' + side + '_linkNumForce_' + part)\", [\"_ + side + _linkNumForce_ + part\"], ['_' + side + '_linkNumForce_' + part], \"k__SideBox\", dgv('_' + side + '_linkNumForce_' + part))], \"k__SideBox\", parseInt(confixWrapper(\"functionCall\", \"dgv('_' + side + '_linkNumForce_' + part)\", [\"_ + side + _linkNumForce_ + part\"], ['_' + side + '_linkNumForce_' + part], \"k__SideBox\", dgv('_' + side + '_linkNumForce_' + part))))", [""], [], "k__SideBox", confixWrapper("functionCall", "parseInt(dgv('_' + side + '_linkNumForce_' + part))", ["dgv(_ + side + _linkNumForce_ + part)"], [confixWrapper("functionCall", "dgv('_' + side + '_linkNumForce_' + part)", ["_ + side + _linkNumForce_ + part"], ['_' + side + '_linkNumForce_' + part], "k__SideBox", dgv('_' + side + '_linkNumForce_' + part))], "k__SideBox", parseInt(confixWrapper("functionCall", "dgv('_' + side + '_linkNumForce_' + part)", ["_ + side + _linkNumForce_ + part"], ['_' + side + '_linkNumForce_' + part], "k__SideBox", dgv('_' + side + '_linkNumForce_' + part)))));
  if (confixWrapper("condition", "part > 0", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", part > 0)) 
  t += tab[4] + '<div class="Sep"><div class="SepS"></div></div>' + '\n';
  t += tab[4] + '<div class="Box">' + '\n';
  t += tab[5] + '<div class="Inner">' + '\n';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgv('_' + side + '_TitleTxt_' + part)\", [\"_ + side + _TitleTxt_ + part\"], ['_' + side + '_TitleTxt_' + part], \"k__SideBox\", dgv('_' + side + '_TitleTxt_' + part)) != ''", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", confixWrapper("functionCall", "dgv('_' + side + '_TitleTxt_' + part)", ["_ + side + _TitleTxt_ + part"], ['_' + side + '_TitleTxt_' + part], "k__SideBox", dgv('_' + side + '_TitleTxt_' + part)) != '')) 
  t += tab[5] + '<div class="Title">' + confixWrapper("functionCall", "dgv('_' + side + '_TitleTxt_' + part)", ["_ + side + _TitleTxt_ + part"], ['_' + side + '_TitleTxt_' + part], "k__SideBox", dgv('_' + side + '_TitleTxt_' + part)) + '</div>' + '\n';
  for (var num = confixWrapper("initvar", "var num = 0", [""], [], "k__SideBox", 0); confixWrapper("loopCondition", "num < ln", [""], [], "k__SideBox", num < ln); num++) 
    {
      var txt = confixWrapper("initvar", "var txt = confixWrapper(\"functionCall\", \"dgv('_' + side + '_LinkTxt_' + part + '_' + num)\", [\"_ + side + _LinkTxt_ + part + _ + num\"], ['_' + side + '_LinkTxt_' + part + '_' + num], \"k__SideBox\", dgv('_' + side + '_LinkTxt_' + part + '_' + num))", [""], [], "k__SideBox", confixWrapper("functionCall", "dgv('_' + side + '_LinkTxt_' + part + '_' + num)", ["_ + side + _LinkTxt_ + part + _ + num"], ['_' + side + '_LinkTxt_' + part + '_' + num], "k__SideBox", dgv('_' + side + '_LinkTxt_' + part + '_' + num)));
      var url = confixWrapper("initvar", "var url = confixWrapper(\"functionCall\", \"dgv('_' + side + '_LinkUrl_' + part + '_' + num)\", [\"_ + side + _LinkUrl_ + part + _ + num\"], ['_' + side + '_LinkUrl_' + part + '_' + num], \"k__SideBox\", dgv('_' + side + '_LinkUrl_' + part + '_' + num))", [""], [], "k__SideBox", confixWrapper("functionCall", "dgv('_' + side + '_LinkUrl_' + part + '_' + num)", ["_ + side + _LinkUrl_ + part + _ + num"], ['_' + side + '_LinkUrl_' + part + '_' + num], "k__SideBox", dgv('_' + side + '_LinkUrl_' + part + '_' + num)));
      var ttl = confixWrapper("initvar", "var ttl = confixWrapper(\"functionCall\", \"dgv('_' + side + '_LinkTtl_' + part + '_' + num)\", [\"_ + side + _LinkTtl_ + part + _ + num\"], ['_' + side + '_LinkTtl_' + part + '_' + num], \"k__SideBox\", dgv('_' + side + '_LinkTtl_' + part + '_' + num))", [""], [], "k__SideBox", confixWrapper("functionCall", "dgv('_' + side + '_LinkTtl_' + part + '_' + num)", ["_ + side + _LinkTtl_ + part + _ + num"], ['_' + side + '_LinkTtl_' + part + '_' + num], "k__SideBox", dgv('_' + side + '_LinkTtl_' + part + '_' + num)));
      var pre = confixWrapper("initvar", "var pre = confixWrapper(\"functionCall\", \"dgv('_' + side + '_PreSurr_' + part)\", [\"_ + side + _PreSurr_ + part\"], ['_' + side + '_PreSurr_' + part], \"k__SideBox\", dgv('_' + side + '_PreSurr_' + part))", [""], [], "k__SideBox", confixWrapper("functionCall", "dgv('_' + side + '_PreSurr_' + part)", ["_ + side + _PreSurr_ + part"], ['_' + side + '_PreSurr_' + part], "k__SideBox", dgv('_' + side + '_PreSurr_' + part)));
      var pst = confixWrapper("initvar", "var pst = confixWrapper(\"functionCall\", \"dgv('_' + side + '_PstSurr_' + part)\", [\"_ + side + _PstSurr_ + part\"], ['_' + side + '_PstSurr_' + part], \"k__SideBox\", dgv('_' + side + '_PstSurr_' + part))", [""], [], "k__SideBox", confixWrapper("functionCall", "dgv('_' + side + '_PstSurr_' + part)", ["_ + side + _PstSurr_ + part"], ['_' + side + '_PstSurr_' + part], "k__SideBox", dgv('_' + side + '_PstSurr_' + part)));
      if (confixWrapper("condition", "pre.length && global_lang == 'fa'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", pre.length && global_lang == 'fa')) 
      pre = confixWrapper("infix", "pre = pre + '&#8206;'", [""], [], "k__SideBox", pre + '&#8206;');
      if (confixWrapper("condition", "pst.length && global_lang == 'fa'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", pst.length && global_lang == 'fa')) 
      pst = confixWrapper("infix", "pst = '&#8206;' + pst", [""], [], "k__SideBox", '&#8206;' + pst);
      if (confixWrapper("condition", "url == '$HOME'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url == '$HOME')) 
      url = confixWrapper("infix", "url = confixWrapper(\"functionCall\", \"k__specialdest_home()\", [], [], \"k__SideBox\", k__specialdest_home())", [""], [], "k__SideBox", confixWrapper("functionCall", "k__specialdest_home()", [], [], "k__SideBox", k__specialdest_home())); else if (confixWrapper("condition", "url == '$EMAIL'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url == '$EMAIL')) 
      url = confixWrapper("infix", "url = 'mailto:' + confixWrapper(\"functionCall\", \"k__specialdest_email()\", [], [], \"k__SideBox\", k__specialdest_email())", [""], [], "k__SideBox", 'mailto:' + confixWrapper("functionCall", "k__specialdest_email()", [], [], "k__SideBox", k__specialdest_email())); else if (confixWrapper("condition", "url == '$ARCHIVE'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url == '$ARCHIVE')) 
      url = confixWrapper("infix", "url = confixWrapper(\"functionCall\", \"k__specialdest_archive()\", [], [], \"k__SideBox\", k__specialdest_archive())", [""], [], "k__SideBox", confixWrapper("functionCall", "k__specialdest_archive()", [], [], "k__SideBox", k__specialdest_archive())); else if (confixWrapper("condition", "url == '$RSS'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url == '$RSS')) 
      url = confixWrapper("infix", "url = confixWrapper(\"functionCall\", \"k__specialdest_rss()\", [], [], \"k__SideBox\", k__specialdest_rss())", [""], [], "k__SideBox", confixWrapper("functionCall", "k__specialdest_rss()", [], [], "k__SideBox", k__specialdest_rss())); else if (confixWrapper("condition", "url == '$PSYCHO'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url == '$PSYCHO')) 
      url = confixWrapper("infix", "url = 'http://psyc.horm.org/' + (global_lang == 'fa' ? 'fa/' : '') + '?PsycHodrama=' + kinesoDrama", [""], [], "k__SideBox", 'http://psyc.horm.org/' + (global_lang == 'fa' ? 'fa/' : '') + '?PsycHodrama=' + kinesoDrama); else if (confixWrapper("condition", "url == '$CUSTOM'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url == '$CUSTOM')) 
      url = confixWrapper("infix", "url = confixWrapper(\"functionCall\", \"k__specialdest_custom()\", [], [], \"k__SideBox\", k__specialdest_custom())", [""], [], "k__SideBox", confixWrapper("functionCall", "k__specialdest_custom()", [], [], "k__SideBox", k__specialdest_custom()));
      if (confixWrapper("condition", "txt == '$ARCHIVE'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$ARCHIVE')) 
      t += confixWrapper("functionCall", "k__special_archive(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_archive(pre, pst)); else if (confixWrapper("condition", "txt == '$RECENT'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$RECENT')) 
      t += confixWrapper("functionCall", "k__special_recent(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_recent(pre, pst)); else if (confixWrapper("condition", "txt == '$PROFILE'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$PROFILE')) 
      t += confixWrapper("functionCall", "k__special_profile(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_profile(pre, pst)); else if (confixWrapper("condition", "txt == '$LINKS'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$LINKS')) 
      t += confixWrapper("functionCall", "k__special_links(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_links(pre, pst)); else if (confixWrapper("condition", "txt == '$CATEGLIST'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$CATEGLIST')) 
      t += confixWrapper("functionCall", "k__special_categlist(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_categlist(pre, pst)); else if (confixWrapper("condition", "txt == '$LINKDUMP'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$LINKDUMP')) 
      t += confixWrapper("functionCall", "k__special_linkdump(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_linkdump(pre, pst)); else if (confixWrapper("condition", "txt == '$AUTHORS'", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", txt == '$AUTHORS')) 
      t += confixWrapper("functionCall", "k__special_authors(pre, pst)", ["pre", "pst"], [pre, pst], "k__SideBox", k__special_authors(pre, pst)); else {
        if (confixWrapper("condition", "url != ''", ["side", "part", "t", "ln", "num", "txt", "url", "ttl", "pre", "pst", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [side, part, t, ln, num, txt, url, ttl, pre, pst, global_canKinesAlert, tab, kinesoDrama, i], "k__SideBox", url != '')) 
        t += tab[6] + pre + '<a href="' + url + '" title="' + ttl + '">' + txt + '</a>' + pst; else t += tab[6] + '<span>' + pre + txt + pst + '</span>';
        t += '<br />' + '\n';
      }
    }
  t += tab[5] + '</div>' + '\n';
  t += tab[4] + '</div>' + '\n';
  return confixWrapper("return", "return t;", [""], [], "k__SideBox", t);
}
function k__ColVal(side) {
  var t = confixWrapper("initvar", "var t = ''", [""], [], "k__ColVal", '');
  t += tab[2] + '<!-- =================== Side ' + side + ' Column =================== -->' + '\n';
  t += tab[2] + '<div id="Side' + side + 'Col" class="SideBar">' + '\n';
  t += tab[3] + '<div class="SideBarInner">' + '\n';
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "k__ColVal", 0); confixWrapper("loopCondition", "i < confixWrapper(\"functionCall\", \"dgv('_' + side + '_boxNumForce')\", [\"_ + side + _boxNumForce\"], ['_' + side + '_boxNumForce'], \"k__ColVal\", dgv('_' + side + '_boxNumForce'))", [""], [], "k__ColVal", i < confixWrapper("functionCall", "dgv('_' + side + '_boxNumForce')", ["_ + side + _boxNumForce"], ['_' + side + '_boxNumForce'], "k__ColVal", dgv('_' + side + '_boxNumForce'))); i++) 
    t += confixWrapper("functionCall", "k__SideBox(side, i)", ["side", "i"], [side, i], "k__ColVal", k__SideBox(side, i));
  t += tab[4] + '<div class="Clearer"></div>' + '\n';
  t += tab[3] + '</div>' + '\n';
  t += tab[2] + '</div>' + '\n';
  t += '\n';
  return confixWrapper("return", "return t;", [""], [], "k__ColVal", t);
}
function kinesIt() {
  confixWrapper("functionCall", "SwitchDisplay('PsycHokinesisAlertDiv', 0)", ["PsycHokinesisAlertDiv", "0"], ['PsycHokinesisAlertDiv', 0], "kinesIt", SwitchDisplay('PsycHokinesisAlertDiv', 0));
  var t = confixWrapper("initvar", "var t = new String()", [""], [], "kinesIt", new String());
  if (confixWrapper("condition", "global_prov != 'blogfa'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", global_prov != 'blogfa')) 
  t += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' + '\n';
  t += tab[0] + '<html>' + '\n';
  t += tab[0] + '<head>' + '\n';
  if (confixWrapper("condition", "global_prov == 'blogger'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", global_prov == 'blogger')) 
  {
    t += tab[1] + '<blogsitefeed>' + '\n';
    t += tab[2] + '<link rel="alternate" type="application/rss+xml" title="RSS" href="<$BlogSiteFeedURL$>" />' + '\n';
    t += tab[1] + '</blogsitefeed>' + '\n';
    t += tab[1] + '<$BlogMetaData$>' + '\n';
  }
  t += tab[1] + '<meta http-equiv="content-type" content="text/html; charset=utf-8" />' + '\n';
  t += tab[1] + '<meta http-equiv="expires" content="-1" />' + '\n';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgv('WholeDescription')\", [\"WholeDescription\"], ['WholeDescription'], \"kinesIt\", dgv('WholeDescription')) != ''", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgv('WholeDescription')", ["WholeDescription"], ['WholeDescription'], "kinesIt", dgv('WholeDescription')) != '')) 
  t += tab[1] + '<meta name="description" content="' + confixWrapper("functionCall", "dgv('WholeDescription')", ["WholeDescription"], ['WholeDescription'], "kinesIt", dgv('WholeDescription')) + '" />' + '\n';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgv('WholeKeywords')\", [\"WholeKeywords\"], ['WholeKeywords'], \"kinesIt\", dgv('WholeKeywords'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgv('WholeKeywords')", ["WholeKeywords"], ['WholeKeywords'], "kinesIt", dgv('WholeKeywords')))) 
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgv('WholeKeywords').substring(0, 7)\", [\"0\", \"7\"], [0, 7], \"kinesIt\", confixWrapper(\"functionCall\", \"dgv('WholeKeywords')\", [\"WholeKeywords\"], ['WholeKeywords'], \"kinesIt\", dgv('WholeKeywords')).substring(0, 7)) != 'keyword'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgv('WholeKeywords').substring(0, 7)", ["0", "7"], [0, 7], "kinesIt", confixWrapper("functionCall", "dgv('WholeKeywords')", ["WholeKeywords"], ['WholeKeywords'], "kinesIt", dgv('WholeKeywords')).substring(0, 7)) != 'keyword')) 
  t += tab[1] + '<meta name="keywords" content="' + confixWrapper("functionCall", "dgv('WholeKeywords')", ["WholeKeywords"], ['WholeKeywords'], "kinesIt", dgv('WholeKeywords')) + '" />' + '\n';
  var PageTitle = confixWrapper("initvar", "var PageTitle = confixWrapper(\"functionCall\", \"dgv('WholePageTitle')\", [\"WholePageTitle\"], ['WholePageTitle'], \"kinesIt\", dgv('WholePageTitle'))", [""], [], "kinesIt", confixWrapper("functionCall", "dgv('WholePageTitle')", ["WholePageTitle"], ['WholePageTitle'], "kinesIt", dgv('WholePageTitle')));
  if (confixWrapper("condition", "PageTitle == '$DEFAULT'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", PageTitle == '$DEFAULT')) 
  PageTitle = confixWrapper("infix", "PageTitle = confixWrapper(\"functionCall\", \"k_prov_pagetitle()\", [], [], \"kinesIt\", k_prov_pagetitle())", [""], [], "kinesIt", confixWrapper("functionCall", "k_prov_pagetitle()", [], [], "kinesIt", k_prov_pagetitle()));
  t += tab[1] + '<title>' + confixWrapper("functionCall", "fromUtf8ToEntity(PageTitle)", ["PageTitle"], [PageTitle], "kinesIt", fromUtf8ToEntity(PageTitle)) + '</title>' + '\n';
  t += tab[1] + '<base target="_blank" />' + '\n';
  t += tab[1] + '<style type="text/css" media="all">' + '\n';
  t += tab[2] + 'body ' + tab[3] + '{ ' + 'margin: 0px; ' + 'font-family: tahoma, sans-serif; ' + 'padding-bottom: 20px; ' + 'background: ' + confixWrapper("functionCall", "k_getColor('WholeBackColorEr')", ["WholeBackColorEr"], ['WholeBackColorEr'], "kinesIt", k_getColor('WholeBackColorEr')) + (confixWrapper("functionCall", "dgChecked('WholeBackHasImage')", ["WholeBackHasImage"], ['WholeBackHasImage'], "kinesIt", dgChecked('WholeBackHasImage')) ? ' url("' + confixWrapper("functionCall", "dgv('WholeBackTextureEr')", ["WholeBackTextureEr"], ['WholeBackTextureEr'], "kinesIt", dgv('WholeBackTextureEr')) + '") ' + dgv('WholeBackRepeat') + ' ' + dgv('WholeBackAttachment') + ' ' + dgv('WholeBackPosition') : '') + '; ' + 'font-size: 12px; ' + 'color: ' + ComplementTheColor(confixWrapper("functionCall", "k_getColor('WholeBackColorEr')", ["WholeBackColorEr"], ['WholeBackColorEr'], "kinesIt", k_getColor('WholeBackColorEr'))) + ';' + '}' + '\n';
  t += tab[2] + '#Granny ' + tab[2] + '{ width: ' + (confixWrapper("functionCall", "dgChecked('WholeWidthUnitErPixels')", ["WholeWidthUnitErPixels"], ['WholeWidthUnitErPixels'], "kinesIt", dgChecked('WholeWidthUnitErPixels')) ? dgv('WholeWidthValueErPixels') : dgv('WholeWidthValueErPercent')) + '; ' + 'font-size: 0.88em; ' + '}' + '\n';
  t += tab[2] + 'a ' + tab[3] + '{ ' + 'text-decoration: none; ' + 'color: ' + confixWrapper("functionCall", "k_getColor('WholeLinkColorEr')", ["WholeLinkColorEr"], ['WholeLinkColorEr'], "kinesIt", k_getColor('WholeLinkColorEr')) + '; ' + '}' + '\n';
  if (confixWrapper("condition", "!global_isMinimized", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", !global_isMinimized)) 
  {
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"k_getColor('WholeLinkVisitEr')\", [\"WholeLinkVisitEr\"], ['WholeLinkVisitEr'], \"kinesIt\", k_getColor('WholeLinkVisitEr')) != 'transparent'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "k_getColor('WholeLinkVisitEr')", ["WholeLinkVisitEr"], ['WholeLinkVisitEr'], "kinesIt", k_getColor('WholeLinkVisitEr')) != 'transparent')) 
    {
      t += tab[2] + 'a:visited ' + tab[2] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('WholeLinkVisitEr')", ["WholeLinkVisitEr"], ['WholeLinkVisitEr'], "kinesIt", k_getColor('WholeLinkVisitEr')) + '; ' + '}' + '\n';
    }
    t += tab[2] + 'a:hover ' + tab[2] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('WholeLinkHoverEr')", ["WholeLinkHoverEr"], ['WholeLinkHoverEr'], "kinesIt", k_getColor('WholeLinkHoverEr')) + '; ' + '}' + '\n';
  }
  t += tab[2] + 'a img ' + tab[3] + '{ ' + 'border-width: 0px; ' + '}' + '\n';
  t += tab[2] + '#HeaderCont ' + tab[2] + '{ ' + 'clear: both; width: 100%; margin-top: ' + confixWrapper("functionCall", "dgv('HeaderTopMarginEr')", ["HeaderTopMarginEr"], ['HeaderTopMarginEr'], "kinesIt", dgv('HeaderTopMarginEr')) + '; ' + 'background: ' + k_getColor('HeaderBackColorEr') + (confixWrapper("functionCall", "dgChecked('HeaderBackIsTextureEr')", ["HeaderBackIsTextureEr"], ['HeaderBackIsTextureEr'], "kinesIt", dgChecked('HeaderBackIsTextureEr')) ? ' url("' + confixWrapper("functionCall", "dgv('HeaderBackTextureEr')", ["HeaderBackTextureEr"], ['HeaderBackTextureEr'], "kinesIt", dgv('HeaderBackTextureEr')) + '") repeat' : '') + '; ' + 'border: ' + k_border('Header') + '; ' + '}' + '\n';
  t += tab[2] + '#HeaderInn ' + tab[2] + '{ ' + ((confixWrapper("functionCall", "dgChecked('HeaderBackIsImageEr')", ["HeaderBackIsImageEr"], ['HeaderBackIsImageEr'], "kinesIt", dgChecked('HeaderBackIsImageEr'))) ? '' : 'margin-bottom: 4px; ') + 'padding: ' + dgv('HeaderVerPaddingEr') + ' 0px; ' + 'text-align: ' + k_getAlign('HeaderPartText') + '; ' + (confixWrapper("functionCall", "dgChecked('HeaderBackIsImageEr')", ["HeaderBackIsImageEr"], ['HeaderBackIsImageEr'], "kinesIt", dgChecked('HeaderBackIsImageEr')) ? '' : 'font-family: ' + confixWrapper("functionCall", "k_getFFamily('HeaderPartText')", ["HeaderPartText"], ['HeaderPartText'], "kinesIt", k_getFFamily('HeaderPartText')) + '; ') + '}' + '\n';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('HeaderBackIsImageEr')\", [\"HeaderBackIsImageEr\"], ['HeaderBackIsImageEr'], \"kinesIt\", dgChecked('HeaderBackIsImageEr'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('HeaderBackIsImageEr')", ["HeaderBackIsImageEr"], ['HeaderBackIsImageEr'], "kinesIt", dgChecked('HeaderBackIsImageEr')))) 
  {
    t += tab[2] + '#HeaderImageCont' + tab[1] + '{ ' + 'text-align: center; ' + '}' + '\n';
  } else {
    t += tab[2] + '#HeaderTitle ' + tab[2] + '{ ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('TitleText')", ["TitleText"], ['TitleText'], "kinesIt", k_getFontSize('TitleText')) + '; ' + k_getFontEffects('TitleText') + 'color: ' + k_getColor('TitleColorEr') + '; ' + 'padding: 0px ' + dgv('HeaderHorPaddingEr') + '; ' + (confixWrapper("functionCall", "dgChecked('HeaderBackIsImageEr')", ["HeaderBackIsImageEr"], ['HeaderBackIsImageEr'], "kinesIt", dgChecked('HeaderBackIsImageEr')) ? '' : 'direction: ' + confixWrapper("functionCall", "k_getDir('HeaderDirectionIsLTREr')", ["HeaderDirectionIsLTREr"], ['HeaderDirectionIsLTREr'], "kinesIt", k_getDir('HeaderDirectionIsLTREr')) + '; ') + 'text-align: ' + k_getAlign('HeaderPartText') + '; ' + '}' + '\n';
    t += tab[2] + '.TitleItemLink ' + tab[2] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('TitleColorEr')", ["TitleColorEr"], ['TitleColorEr'], "kinesIt", k_getColor('TitleColorEr')) + '; ' + '}' + '\n';
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgv('SubTitleTextTextEr')\", [\"SubTitleTextTextEr\"], ['SubTitleTextTextEr'], \"kinesIt\", dgv('SubTitleTextTextEr'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgv('SubTitleTextTextEr')", ["SubTitleTextTextEr"], ['SubTitleTextTextEr'], "kinesIt", dgv('SubTitleTextTextEr')))) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgv('SubTitleTextTextEr')\", [\"SubTitleTextTextEr\"], ['SubTitleTextTextEr'], \"kinesIt\", dgv('SubTitleTextTextEr')).length", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgv('SubTitleTextTextEr')", ["SubTitleTextTextEr"], ['SubTitleTextTextEr'], "kinesIt", dgv('SubTitleTextTextEr')).length)) 
    t += tab[2] + '#HeaderSubTitle ' + tab[1] + '{ ' + 'margin: 12px 0px; ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('SubTitleText')", ["SubTitleText"], ['SubTitleText'], "kinesIt", k_getFontSize('SubTitleText')) + '; ' + k_getFontEffects('SubTitleText') + 'color: ' + k_getColor('SubTitleColorEr') + '; ' + (confixWrapper("functionCall", "dgChecked('HeaderBackIsImageEr')", ["HeaderBackIsImageEr"], ['HeaderBackIsImageEr'], "kinesIt", dgChecked('HeaderBackIsImageEr')) ? '' : 'direction: ' + confixWrapper("functionCall", "k_getDir('HeaderDirectionIsLTREr')", ["HeaderDirectionIsLTREr"], ['HeaderDirectionIsLTREr'], "kinesIt", k_getDir('HeaderDirectionIsLTREr')) + '; ') + 'text-align: ' + k_getAlign('HeaderPartText') + '; ' + 'padding: 0px ' + dgv('HeaderHorPaddingEr') + '; ' + '}' + '\n';
  }
  t += tab[2] + '#MainAndSides ' + tab[2] + '{ ' + 'clear: both; width: 100%; margin-top: ' + (confixWrapper("functionCall", "parseInt(dgv('HeaderTopMarginEr'))", ["dgv(HeaderTopMarginEr)"], [confixWrapper("functionCall", "dgv('HeaderTopMarginEr')", ["HeaderTopMarginEr"], ['HeaderTopMarginEr'], "kinesIt", dgv('HeaderTopMarginEr'))], "kinesIt", parseInt(confixWrapper("functionCall", "dgv('HeaderTopMarginEr')", ["HeaderTopMarginEr"], ['HeaderTopMarginEr'], "kinesIt", dgv('HeaderTopMarginEr')))) / 2) + 'px; ' + '}' + '\n';
  t += tab[2] + '#MainCol ' + tab[2] + '{ ' + 'width: ' + confixWrapper("functionCall", "dgv('MainColWidthView')", ["MainColWidthView"], ['MainColWidthView'], "kinesIt", dgv('MainColWidthView')) + '%; ' + 'background: ' + k_tripleBg('MainColumns') + '; ' + 'float: ' + (confixWrapper("functionCall", "dgChecked('ColsNumberIsTwoR')", ["ColsNumberIsTwoR"], ['ColsNumberIsTwoR'], "kinesIt", dgChecked('ColsNumberIsTwoR')) ? 'right' : 'left') + '; ' + '}' + '\n';
  t += tab[2] + '#MainColInner ' + tab[2] + '{ ' + 'padding: ' + (confixWrapper("functionCall", "parseInt(dgv('MainSpcPaddingView'))", ["dgv(MainSpcPaddingView)"], [confixWrapper("functionCall", "dgv('MainSpcPaddingView')", ["MainSpcPaddingView"], ['MainSpcPaddingView'], "kinesIt", dgv('MainSpcPaddingView'))], "kinesIt", parseInt(confixWrapper("functionCall", "dgv('MainSpcPaddingView')", ["MainSpcPaddingView"], ['MainSpcPaddingView'], "kinesIt", dgv('MainSpcPaddingView')))) / 2) + 'px ' + dgv('MainSpcPaddingView') + 'px; ' + 'border: ' + k_border('MainColumns') + '; ' + '}' + '\n';
  var cellDir = confixWrapper("initvar", "var cellDir = confixWrapper(\"functionCall\", \"dgChecked('CellDirDirectionIsLTREr')\", [\"CellDirDirectionIsLTREr\"], ['CellDirDirectionIsLTREr'], \"kinesIt\", dgChecked('CellDirDirectionIsLTREr')) ? 'ltr' : 'rtl'", [""], [], "kinesIt", confixWrapper("functionCall", "dgChecked('CellDirDirectionIsLTREr')", ["CellDirDirectionIsLTREr"], ['CellDirDirectionIsLTREr'], "kinesIt", dgChecked('CellDirDirectionIsLTREr')) ? 'ltr' : 'rtl');
  var cellDirBegin = confixWrapper("initvar", "var cellDirBegin = (cellDir == 'ltr') ? 'left' : 'right'", [""], [], "kinesIt", (cellDir == 'ltr') ? 'left' : 'right');
  var cellDirEnd = confixWrapper("initvar", "var cellDirEnd = (cellDir == 'ltr') ? 'right' : 'left'", [""], [], "kinesIt", (cellDir == 'ltr') ? 'right' : 'left');
  t += tab[2] + '.OnePost' + tab[2] + '{ ' + 'border: ' + confixWrapper("functionCall", "k_border('OnePost')", ["OnePost"], ['OnePost'], "kinesIt", k_border('OnePost')) + '; ' + 'font-family: ' + k_getFFamily('OnePostMainDiv') + '; ' + 'direction: ' + cellDir + '; ' + 'background: ' + k_tripleBg('PostBody') + '; ' + '}' + '\n';
  t += tab[2] + '.OnePost .TopPost' + tab[1] + '{ ' + 'border-bottom: ' + confixWrapper("functionCall", "k_border('VerPost')", ["VerPost"], ['VerPost'], "kinesIt", k_border('VerPost')) + '; ' + 'padding:  0px ' + dgv('PostHeadFootHP') + 'px ' + dgv('PostHeadFootVP') + 'px ' + dgv('PostHeadFootHP') + 'px; ' + 'background: ' + k_tripleBg('OnePostTop') + '; ' + '}' + '\n';
  t += tab[2] + '.OnePost .MidPost' + tab[1] + '{ ' + 'padding: ' + confixWrapper("functionCall", "dgv('PostBodyVP')", ["PostBodyVP"], ['PostBodyVP'], "kinesIt", dgv('PostBodyVP')) + 'px ' + dgv('PostBodyHP') + 'px; ' + '}' + '\n';
  t += tab[2] + '.OnePost .BotPost' + tab[1] + '{ ' + 'border-top: ' + confixWrapper("functionCall", "k_border('VerPost')", ["VerPost"], ['VerPost'], "kinesIt", k_border('VerPost')) + '; ' + 'padding: ' + dgv('PostHeadFootVP') + 'px ' + dgv('PostHeadFootHP') + 'px; ' + 'background: ' + k_tripleBg('OnePostBot') + '; ' + '}' + '\n';
  t += tab[2] + '.OnePost .FullWidth' + tab[1] + '{ ' + 'width: 100%; ' + '}' + '\n';
  t += tab[2] + '.DateHeaderPost' + tab[2] + '{ ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('OnePostDateTop')", ["OnePostDateTop"], ['OnePostDateTop'], "kinesIt", k_getFontSize('OnePostDateTop')) + '; ' + k_getFontEffects('OnePostDateTop') + 'color: ' + k_getColor('PostDateColorEr') + '; ' + 'padding-top: ' + dgv('PostHeadFootVP') + 'px; ' + 'text-align: ' + k_getAlign('OnePostDateTop') + '; ' + (confixWrapper("functionCall", "dgChecked('PostDateStandingIsAdjacent')", ["PostDateStandingIsAdjacent"], ['PostDateStandingIsAdjacent'], "kinesIt", dgChecked('PostDateStandingIsAdjacent')) ? ('width: 48%; float: ' + cellDirEnd + '; ') : '') + '}' + '\n';
  t += tab[2] + '.TitleHeaderPost' + tab[1] + '{ ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('OnePostTitle')", ["OnePostTitle"], ['OnePostTitle'], "kinesIt", k_getFontSize('OnePostTitle')) + '; ' + k_getFontEffects('OnePostTitle') + 'color: ' + k_getColor('PostTitleColorEr') + '; ' + 'padding-top: ' + dgv('PostHeadFootVP') + 'px; ' + 'text-align: ' + k_getAlign('OnePostTitle') + '; ' + 'direction: ' + (confixWrapper("functionCall", "dgChecked('OnePostTitleDirectionIsLTREr')", ["OnePostTitleDirectionIsLTREr"], ['OnePostTitleDirectionIsLTREr'], "kinesIt", dgChecked('OnePostTitleDirectionIsLTREr')) ? 'ltr' : 'rtl') + '; ' + (confixWrapper("functionCall", "dgChecked('PostDateStandingIsAdjacent')", ["PostDateStandingIsAdjacent"], ['PostDateStandingIsAdjacent'], "kinesIt", dgChecked('PostDateStandingIsAdjacent')) ? ('width: 48%; float: ' + cellDirBegin + '; ') : '') + '}' + '\n';
  t += tab[2] + '.TitleHeaderPost a' + tab[1] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('PostTitleColorEr')", ["PostTitleColorEr"], ['PostTitleColorEr'], "kinesIt", k_getColor('PostTitleColorEr')) + '; ' + '}' + '\n';
  var ta = confixWrapper("initvar", "var ta = (confixWrapper(\"functionCall\", \"dgChecked('OnePostBodyAlignIsNorm')\", [\"OnePostBodyAlignIsNorm\"], ['OnePostBodyAlignIsNorm'], \"kinesIt\", dgChecked('OnePostBodyAlignIsNorm')) ? cellDirBegin : (confixWrapper(\"functionCall\", \"dgChecked('OnePostBodyAlignIsCenter')\", [\"OnePostBodyAlignIsCenter\"], ['OnePostBodyAlignIsCenter'], \"kinesIt\", dgChecked('OnePostBodyAlignIsCenter')) ? 'center' : 'justify'))", [""], [], "kinesIt", (confixWrapper("functionCall", "dgChecked('OnePostBodyAlignIsNorm')", ["OnePostBodyAlignIsNorm"], ['OnePostBodyAlignIsNorm'], "kinesIt", dgChecked('OnePostBodyAlignIsNorm')) ? cellDirBegin : (confixWrapper("functionCall", "dgChecked('OnePostBodyAlignIsCenter')", ["OnePostBodyAlignIsCenter"], ['OnePostBodyAlignIsCenter'], "kinesIt", dgChecked('OnePostBodyAlignIsCenter')) ? 'center' : 'justify')));
  t += tab[2] + '.PostTextBody' + tab[2] + '{ ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('OnePostMidPart')", ["OnePostMidPart"], ['OnePostMidPart'], "kinesIt", k_getFontSize('OnePostMidPart')) + '; ' + k_getFontEffects('OnePostMidPart') + 'color: ' + k_getColor('PostBodyColorEr') + '; ' + 'text-align: ' + ta + '; ' + 'line-height: ' + k_getLineHeight('OnePostMidPart') + '; ' + '}' + '\n';
  t += tab[2] + '.CmntFooterPost' + tab[2] + '{ ' + 'visibility: visible; ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('OnePostComments')", ["OnePostComments"], ['OnePostComments'], "kinesIt", k_getFontSize('OnePostComments')) + '; ' + k_getFontEffects('OnePostComments') + 'color: ' + k_getColor('PostCommentsColorEr') + '; ' + 'width: 48%; ' + 'float: ' + cellDirEnd + '; ' + 'text-align: ' + cellDirEnd + '; ' + '}' + '\n';
  t += tab[2] + '.CmntFooterPost a' + tab[1] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('PostCommentsColorEr')", ["PostCommentsColorEr"], ['PostCommentsColorEr'], "kinesIt", k_getColor('PostCommentsColorEr')) + '; ' + '}' + '\n';
  if (confixWrapper("condition", "!global_isMinimized", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", !global_isMinimized)) 
  {
    t += tab[2] + '.CmntFooterPost a:hover' + tab[1] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('PostCommentsHoverColorEr')", ["PostCommentsHoverColorEr"], ['PostCommentsHoverColorEr'], "kinesIt", k_getColor('PostCommentsHoverColorEr')) + '; ' + '}' + '\n';
  }
  t += tab[2] + '.PermFooterPost' + tab[2] + '{ ' + 'font-size: ' + confixWrapper("functionCall", "k_getFontSize('OnePostPermLink')", ["OnePostPermLink"], ['OnePostPermLink'], "kinesIt", k_getFontSize('OnePostPermLink')) + '; ' + k_getFontEffects('OnePostPermLink') + 'color: ' + k_getColor('PostPermLinkColorEr') + '; ' + 'width: 48%; ' + 'float: ' + cellDirBegin + '; ' + 'text-align: ' + cellDirBegin + '; ' + '}' + '\n';
  t += tab[2] + '.PermFooterPost a' + tab[1] + '{ ' + 'color: ' + confixWrapper("functionCall", "k_getColor('PostPermLinkColorEr')", ["PostPermLinkColorEr"], ['PostPermLinkColorEr'], "kinesIt", k_getColor('PostPermLinkColorEr')) + '; ' + '}' + '\n';
  t += tab[2] + '.Clearer' + tab[2] + '{ ' + 'clear: both; ' + 'width: 100%; ' + 'font-size: 0px; ' + 'height: 0px; ' + '}' + '\n';
  var isCol = confixWrapper("initvar", "var isCol = confixWrapper(\"functionCall\", \"dgChecked('PostSepDivBackIsColorEr')\", [\"PostSepDivBackIsColorEr\"], ['PostSepDivBackIsColorEr'], \"kinesIt\", dgChecked('PostSepDivBackIsColorEr'))", [""], [], "kinesIt", confixWrapper("functionCall", "dgChecked('PostSepDivBackIsColorEr')", ["PostSepDivBackIsColorEr"], ['PostSepDivBackIsColorEr'], "kinesIt", dgChecked('PostSepDivBackIsColorEr')));
  t += tab[2] + '.PostSep' + tab[2] + '{ ' + 'height: ' + confixWrapper("functionCall", "dgv('PostSepHeight')", ["PostSepHeight"], ['PostSepHeight'], "kinesIt", dgv('PostSepHeight')) + 'px; ' + ((isCol) ? '' : 'background: ' + confixWrapper("functionCall", "k_tripleBg('PostSepDiv')", ["PostSepDiv"], ['PostSepDiv'], "kinesIt", k_tripleBg('PostSepDiv')) + '; ') + 'font-size: 1px ' + '}' + '\n';
  t += tab[2] + '.PostSepS' + tab[2] + '{ ' + 'height: ' + confixWrapper("functionCall", "parseInt(dgv('PostSepHeight'))", ["dgv(PostSepHeight)"], [confixWrapper("functionCall", "dgv('PostSepHeight')", ["PostSepHeight"], ['PostSepHeight'], "kinesIt", dgv('PostSepHeight'))], "kinesIt", parseInt(confixWrapper("functionCall", "dgv('PostSepHeight')", ["PostSepHeight"], ['PostSepHeight'], "kinesIt", dgv('PostSepHeight')))) / 2 + 'px; ' + 'margin-bottom: ' + confixWrapper("functionCall", "parseInt(dgv('PostSepHeight'))", ["dgv(PostSepHeight)"], [confixWrapper("functionCall", "dgv('PostSepHeight')", ["PostSepHeight"], ['PostSepHeight'], "kinesIt", dgv('PostSepHeight'))], "kinesIt", parseInt(confixWrapper("functionCall", "dgv('PostSepHeight')", ["PostSepHeight"], ['PostSepHeight'], "kinesIt", dgv('PostSepHeight')))) / 2 + 'px; ' + ((isCol) ? 'border-bottom: 1px solid ' + confixWrapper("functionCall", "k_getColor('PostSepDivBackColorEr')", ["PostSepDivBackColorEr"], ['PostSepDivBackColorEr'], "kinesIt", k_getColor('PostSepDivBackColorEr')) + '; ' : '') + 'font-size: 1px ' + '}' + '\n';
  if (confixWrapper("condition", "!confixWrapper(\"functionCall\", \"dgChecked('ColsNumberIsOne')\", [\"ColsNumberIsOne\"], ['ColsNumberIsOne'], \"kinesIt\", dgChecked('ColsNumberIsOne'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", !confixWrapper("functionCall", "dgChecked('ColsNumberIsOne')", ["ColsNumberIsOne"], ['ColsNumberIsOne'], "kinesIt", dgChecked('ColsNumberIsOne')))) 
  {
    t += tab[2] + '.SideBar' + tab[2] + '{ ' + 'background: ' + confixWrapper("functionCall", "k_tripleBg('SideColumns')", ["SideColumns"], ['SideColumns'], "kinesIt", k_tripleBg('SideColumns')) + '; ' + '}' + '\n';
    t += tab[2] + '.SideBarInner' + tab[2] + '{ ' + 'padding: ' + confixWrapper("functionCall", "dgv('SideSpcPaddingView')", ["SideSpcPaddingView"], ['SideSpcPaddingView'], "kinesIt", dgv('SideSpcPaddingView')) + 'px ' + dgv('SideSpcPaddingView') + 'px; ' + 'border: ' + k_border('SideColumns') + '; ' + '}' + '\n';
    t += tab[2] + '.SideBarInner img' + tab[1] + '{ ' + 'margin-top: 2px; ' + '}' + '\n';
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('ColsNumberIsTwoR')\", [\"ColsNumberIsTwoR\"], ['ColsNumberIsTwoR'], \"kinesIt\", dgChecked('ColsNumberIsTwoR')) || dgChecked('ColsNumberIsThree')", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('ColsNumberIsTwoR')", ["ColsNumberIsTwoR"], ['ColsNumberIsTwoR'], "kinesIt", dgChecked('ColsNumberIsTwoR')) || dgChecked('ColsNumberIsThree'))) 
    {
      t += tab[2] + '#SideLCol ' + tab[2] + '{ ' + 'width: ' + confixWrapper("functionCall", "dg('SideLColumn')", ["SideLColumn"], ['SideLColumn'], "kinesIt", dg('SideLColumn')).style.width + '; ' + 'float: left; ' + 'margin-right: ' + dgv('SideSpcWidthView') + '%; ' + '}' + '\n';
      t += confixWrapper("functionCall", "k_sideFeatures('L')", ["L"], ['L'], "kinesIt", k_sideFeatures('L'));
    }
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('ColsNumberIsTwoL')\", [\"ColsNumberIsTwoL\"], ['ColsNumberIsTwoL'], \"kinesIt\", dgChecked('ColsNumberIsTwoL')) || dgChecked('ColsNumberIsThree')", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('ColsNumberIsTwoL')", ["ColsNumberIsTwoL"], ['ColsNumberIsTwoL'], "kinesIt", dgChecked('ColsNumberIsTwoL')) || dgChecked('ColsNumberIsThree'))) 
    {
      t += tab[2] + '#SideRCol ' + tab[2] + '{ ' + 'width: ' + confixWrapper("functionCall", "dg('SideRColumn')", ["SideRColumn"], ['SideRColumn'], "kinesIt", dg('SideRColumn')).style.width + '; ' + 'float: right; ' + 'margin-left: ' + dgv('SideSpcWidthView') + '%; ' + '}' + '\n';
      t += confixWrapper("functionCall", "k_sideFeatures('R')", ["R"], ['R'], "kinesIt", k_sideFeatures('R'));
    }
  }
  t += tab[2] + '#ColClose ' + tab[2] + '{ ' + 'clear: both; ' + 'width: 100%; ' + 'font-size: 1px; ' + 'height: 1px; ' + 'margin-bottom: 20px; ' + '}' + '\n';
  t += tab[2] + '#CopyRight ' + tab[2] + '{ ' + 'width: 60%; ' + 'border-top: 1px solid gray; ' + 'padding-top: 10px; ' + 'line-height: 150%; ' + (global_lang == 'fa' ? 'direction: rtl; ' : '') + '}' + '\n';
  t += tab[2] + '/* This template generated by PsycHo [http://psyc.horm.org] on ' + confixWrapper("functionCall", "nowTheTime()", [], [], "kinesIt", nowTheTime()) + '. */' + '\n';
  t += tab[1] + '</style>' + '\n';
  t += confixWrapper("functionCall", "k__commentingHeaderScript()", [], [], "kinesIt", k__commentingHeaderScript());
  t += tab[0] + '</head>' + '\n';
  t += '\n';
  t += tab[0] + '<body><center>' + '\n';
  t += tab[1] + '<div id="Granny">' + '\n';
  t += tab[2] + '<div id="HeaderCont"><div id="HeaderInn">' + '\n';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('HeaderBackIsImageEr')\", [\"HeaderBackIsImageEr\"], ['HeaderBackIsImageEr'], \"kinesIt\", dgChecked('HeaderBackIsImageEr'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('HeaderBackIsImageEr')", ["HeaderBackIsImageEr"], ['HeaderBackIsImageEr'], "kinesIt", dgChecked('HeaderBackIsImageEr')))) 
  {
    t += tab[3] + '<div id="HeaderImageCont"><img src="' + confixWrapper("functionCall", "dg('HeaderBackImageEr')", ["HeaderBackImageEr"], ['HeaderBackImageEr'], "kinesIt", dg('HeaderBackImageEr')).value + '" /></div>' + '\n';
  } else {
    var TitleTxt = confixWrapper("initvar", "var TitleTxt = confixWrapper(\"functionCall\", \"dgv('TitleTextTextEr')\", [\"TitleTextTextEr\"], ['TitleTextTextEr'], \"kinesIt\", dgv('TitleTextTextEr'))", [""], [], "kinesIt", confixWrapper("functionCall", "dgv('TitleTextTextEr')", ["TitleTextTextEr"], ['TitleTextTextEr'], "kinesIt", dgv('TitleTextTextEr')));
    var SubTitleTxt = confixWrapper("initvar", "var SubTitleTxt = confixWrapper(\"functionCall\", \"dgv('SubTitleTextTextEr')\", [\"SubTitleTextTextEr\"], ['SubTitleTextTextEr'], \"kinesIt\", dgv('SubTitleTextTextEr'))", [""], [], "kinesIt", confixWrapper("functionCall", "dgv('SubTitleTextTextEr')", ["SubTitleTextTextEr"], ['SubTitleTextTextEr'], "kinesIt", dgv('SubTitleTextTextEr')));
    if (confixWrapper("condition", "TitleTxt == '$DEFAULT'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", TitleTxt == '$DEFAULT')) 
    TitleTxt = confixWrapper("infix", "TitleTxt = confixWrapper(\"functionCall\", \"k_prov_blogtitle()\", [], [], \"kinesIt\", k_prov_blogtitle())", [""], [], "kinesIt", confixWrapper("functionCall", "k_prov_blogtitle()", [], [], "kinesIt", k_prov_blogtitle()));
    if (confixWrapper("condition", "SubTitleTxt == '$DEFAULT'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", SubTitleTxt == '$DEFAULT')) 
    SubTitleTxt = confixWrapper("infix", "SubTitleTxt = confixWrapper(\"functionCall\", \"k_prov_blogdescription()\", [], [], \"kinesIt\", k_prov_blogdescription())", [""], [], "kinesIt", confixWrapper("functionCall", "k_prov_blogdescription()", [], [], "kinesIt", k_prov_blogdescription()));
    t += tab[3] + '<div class="Clearer"></div>' + '\n';
    t += tab[3] + '<div id="HeaderTitle">' + '\n';
    t += tab[4] + TitleTxt + '\n';
    t += tab[3] + '</div>' + '\n';
    if (confixWrapper("condition", "SubTitleTxt.length", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", SubTitleTxt.length)) 
    {
      t += tab[3] + '<div id="HeaderSubTitle">' + '\n';
      t += tab[4] + SubTitleTxt + '\n';
      t += tab[3] + '</div>' + '\n';
    }
    t += tab[3] + '<div class="Clearer"></div>' + '\n';
  }
  t += tab[2] + '</div></div>' + '\n';
  t += tab[2] + '<div id="MainAndSides">' + '\n';
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('ColsNumberIsThree')\", [\"ColsNumberIsThree\"], ['ColsNumberIsThree'], \"kinesIt\", dgChecked('ColsNumberIsThree'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('ColsNumberIsThree')", ["ColsNumberIsThree"], ['ColsNumberIsThree'], "kinesIt", dgChecked('ColsNumberIsThree')))) 
  t += confixWrapper("functionCall", "k__ColVal('L')", ["L"], ['L'], "kinesIt", k__ColVal('L'));
  t += confixWrapper("functionCall", "k__MainColVal()", [], [], "kinesIt", k__MainColVal());
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('ColsNumberIsTwoR')\", [\"ColsNumberIsTwoR\"], ['ColsNumberIsTwoR'], \"kinesIt\", dgChecked('ColsNumberIsTwoR'))", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('ColsNumberIsTwoR')", ["ColsNumberIsTwoR"], ['ColsNumberIsTwoR'], "kinesIt", dgChecked('ColsNumberIsTwoR')))) 
  t += confixWrapper("functionCall", "k__ColVal('L')", ["L"], ['L'], "kinesIt", k__ColVal('L'));
  if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"dgChecked('ColsNumberIsTwoL')\", [\"ColsNumberIsTwoL\"], ['ColsNumberIsTwoL'], \"kinesIt\", dgChecked('ColsNumberIsTwoL')) || dgChecked('ColsNumberIsThree')", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", confixWrapper("functionCall", "dgChecked('ColsNumberIsTwoL')", ["ColsNumberIsTwoL"], ['ColsNumberIsTwoL'], "kinesIt", dgChecked('ColsNumberIsTwoL')) || dgChecked('ColsNumberIsThree'))) 
  t += confixWrapper("functionCall", "k__ColVal('R')", ["R"], ['R'], "kinesIt", k__ColVal('R'));
  t += tab[2] + '<div class="Clearer"></div>' + '\n';
  t += tab[2] + '<form name="MyPsycHicForm" method="post" action="http://psyc.horm.org' + ((global_lang == 'fa') ? '/fa/' : '/') + '">' + '\n';
  t += tab[3] + '<input name="PsycHodrama" value="' + kinesoDrama + '" type="hidden">' + '\n';
  t += tab[2] + '</form>' + '\n';
  var userRights = confixWrapper("initvar", "var userRights = 'Some rights of this page's plain text stuffs are <a href=\"http://creativecommons.org/licenses/by/2.5/\">reserved</a> for the author. <br />'", [""], [], "kinesIt", 'Some rights of this page\'s plain text stuffs are <a href="http://creativecommons.org/licenses/by/2.5/">reserved</a> for the author. <br />');
  var psychoRights = confixWrapper("initvar", "var psychoRights = 'The <a target=\"_self\" href=\"javascript: void(0);\" onclick=\"javascript:MyPsycHicForm.submit();\">Template</a> is generated via <a href=\"http://psyc.horm.org\">PsycHo</a> and is <a href=\"http://creativecommons.org/licenses/by-nc/2.5/\">Licensed</a>. <br />'", [""], [], "kinesIt", 'The <a target="_self" href="javascript: void(0);" onclick="javascript:MyPsycHicForm.submit();">Template</a> is generated via <a href="http://psyc.horm.org">PsycHo</a> and is <a href="http://creativecommons.org/licenses/by-nc/2.5/">Licensed</a>. <br />');
  if (confixWrapper("condition", "global_lang == 'fa'", ["t", "PageTitle", "cellDir", "cellDirBegin", "cellDirEnd", "ta", "isCol", "TitleTxt", "SubTitleTxt", "userRights", "psychoRights", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [t, PageTitle, cellDir, cellDirBegin, cellDirEnd, ta, isCol, TitleTxt, SubTitleTxt, userRights, psychoRights, global_canKinesAlert, tab, kinesoDrama, i], "kinesIt", global_lang == 'fa')) 
  {
    userRights = confixWrapper("infix", "userRights = confixWrapper(\"functionCall\", \"translateIt('rights for author')\", [\"rights for author\"], ['rights for author'], \"kinesIt\", translateIt('rights for author'))", [""], [], "kinesIt", confixWrapper("functionCall", "translateIt('rights for author')", ["rights for author"], ['rights for author'], "kinesIt", translateIt('rights for author')));
    psychoRights = confixWrapper("infix", "psychoRights = confixWrapper(\"functionCall\", \"translateIt('rights for psycho')\", [\"rights for psycho\"], ['rights for psycho'], \"kinesIt\", translateIt('rights for psycho'))", [""], [], "kinesIt", confixWrapper("functionCall", "translateIt('rights for psycho')", ["rights for psycho"], ['rights for psycho'], "kinesIt", translateIt('rights for psycho')));
  }
  t += tab[2] + '</div>' + '\n' + '\n';
  t += tab[2] + '<div id="ColClose"></div>' + '\n';
  t += tab[2] + '<div id="CopyRight">' + '\n';
  t += tab[3] + userRights + '\n';
  t += tab[3] + psychoRights + '\n';
  t += tab[2] + '</div>' + '\n';
  t += tab[1] + '</div>' + '\n';
  t += tab[0] + '</center></body>' + '\n';
  t += tab[0] + '</html>' + '\n';
  confixWrapper("functionCall", "dg('PsycHokinesisGetEr')", ["PsycHokinesisGetEr"], ['PsycHokinesisGetEr'], "kinesIt", dg('PsycHokinesisGetEr')).value = confixWrapper("infix", "confixWrapper(\"functionCall\", \"dg('PsycHokinesisGetEr')\", [\"PsycHokinesisGetEr\"], ['PsycHokinesisGetEr'], \"kinesIt\", dg('PsycHokinesisGetEr')).value = t", [""], [], "kinesIt", t);
}
function zwnjify(s) {
  for (var i = confixWrapper("initvar", "var i = 0", [""], [], "zwnjify", 0); confixWrapper("loopCondition", "i < s.length", [""], [], "zwnjify", i < s.length); i++) 
    if (confixWrapper("condition", "confixWrapper(\"functionCall\", \"s.charAt(i)\", [\"i\"], [i], \"zwnjify\", s.charAt(i)) == translateIt('Shift 2: zwnj')", ["s", "i", "global_canKinesAlert", "tab", "kinesoDrama", "i"], [s, i, global_canKinesAlert, tab, kinesoDrama, i], "zwnjify", confixWrapper("functionCall", "s.charAt(i)", ["i"], [i], "zwnjify", s.charAt(i)) == translateIt('Shift 2: zwnj'))) 
    s = confixWrapper("infix", "s = confixWrapper(\"functionCall\", \"s.substring(0, i)\", [\"0\", \"i\"], [0, i], \"zwnjify\", s.substring(0, i)) + '&zwnj;' + s.substring(i + 1, s.length)", [""], [], "zwnjify", confixWrapper("functionCall", "s.substring(0, i)", ["0", "i"], [0, i], "zwnjify", s.substring(0, i)) + '&zwnj;' + s.substring(i + 1, s.length));
  return confixWrapper("return", "return s;", [""], [], "zwnjify", s);
}
