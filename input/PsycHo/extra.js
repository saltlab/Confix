var PsycHo_CurrentVersion = '100';
var global_lang = 'en';
var global_colorRef;
var global_lastColor;
var global_yetMove;
var global_canWrite;
var global_didSomething = false;
var global_gotResult = false;
var global_lastDidDuty;
var global_isMinimized = false;
var global_isPathedHide = false;
var global_isTakingEffectAll = false;
var global_prov = 'blogger';
var maxBoxNumOnSides = 6;
var maxLinkNumBoxes = 20;
var global_AINode;
var encN = 1;
var encArr = new Array('%26%2361470%3B', 'http%3A//', ']]]]]]]]]]', 'false', 'true', '%u', '%');
var encSym = new Array(']', ')', '[', '(', ',', '!', '^');
var drama_splitter = '&#61470;';
var dont_help;
var dont_cp;
var dont_addimg;
var dont_drama;
var dont_kines;
var dont_editpart;
var global_last_kd_alert;
var dont_page_focus = false;
var isKinePrev = false;
var global_isShiftDown = false;

document.onmouseup = captureMousedown;
document.onkeydown = captureKeydown;
document.onkeyup = captureKeyup;
window.onbeforeunload = sayGoodbyeToItAll;

function KinePrevOn() { isKinePrev = true; }
function KinePrevOff() { isKinePrev = false; }
function docFocus() {	return;}

function captureMousedown(e) {
	var mc = e?e.which:window.event.button;
	var myX = getMyXY(e, 0);
	if (mc == 1 && (window.screen.width - myX > 20))
		HideAll();	
}

function captureKeydown(e) {
	var k = e?e.which:window.event.keyCode;
	if (k == 27)
		HideAll();
	/*	if (k == 17)	global_isShiftDown = true; */
}

function captureKeyup(e) {
	var k = e?e.which:window.event.keyCode;
	if (k == 17)
		global_isShiftDown = false;
}

// DDF
function showDarkMoon(x) {
	var that = dg('darkMoon'), dY = 0;
	if (document.body.scrollTop)
		dY=document.body.scrollTop;
	else
		dY=document.documentElement.scrollTop;
	that.style.height = (document.documentElement.scrollTop+2*window.screen.height)+'px';
	if (isIE()) {
		that.style.filter = 'alpha(opacity='+x+')';
	}
	else try {
		that.style.MozOpacity = (parseFloat(x)/100);
	} catch(e) {
		return;
	}
	that.style.display = 'block';	
}

//DDF
function hideDarkMoon() {
	dg('darkMoon').style.display = 'none';
}

//DDF
function isDivVisible(x) {
	return (dg(x).style.display != 'none');
}

function DontHideHelp() {
	dont_help = 1;
	dont_cp = 1; 
}

function DontHideCP() {
	dont_cp = 1;
}

function DontHideAddImg() {
	dont_addimg = 1;
	dont_editpart = 1;
}

function DontHideDrama() {
	dont_drama = 1;
}

function DontHideKines() {
	dont_kines = 1;
}

function DontHideEditPart() {
	dont_editpart = 1;
}

//DDF
function HideAll(force) {
	if (!force || force == '')
		force = false;
	if (force || !dont_help)		HideHelp();
	if (force ||!dont_cp)			HideCP();		
	if (force)	{
		HideAddImage();	
		HidePsycHodrama();
		HideEditPartBox();		
		HidePsycHokinesis();
	}
	dont_help = 0;
	dont_cp = 0;
	dont_addimg = 0;
	dont_drama = 0;
	dont_kines = 0;
	dont_editpart = 0;	
}

//DDF
function preloadImgs() {
	var d=document, a=arguments; 
	if(!d.pld_imgs) 
		d.pld_imgs=new Array();
	for(var i=0; i<a.length; i++) {
		d.pld_imgs[i]=new Image; 
		d.pld_imgs[i].src=a[i];
	}
}

//DDF
function hhh(x) { deBugify(x.id); }

function DPFocusOn() {
	dont_page_focus = true;
}

function DPFocusOff() {
	dont_page_focus = false;
	docFocus();
}

//DDF
function fixIEFields() {
	if (!isIE())
		return;
	if (global_lang == 'fa') {
		ChangeByInput('IE_Spec_F_PostBodyBg', 'paddingBottom', '9px');	
		ChangeByInput('IE_Spec_F_PostBotBg', 'paddingBottom', '11px');	
		ChangeByInput('IE_Spec_F_PostGlobalSettings', 'paddingBottom', '11px');
		ChangeByInput('IE_Spec_F_MainColSpacing', 'paddingBottom', '4px');
		ChangeByInput('IE_Spec_F_SideColSpacing', 'paddingBottom', '4px');	
		ChangeByInput('IE_Spec_F_PostPermLink', 'paddingBottom', '8px');
		ChangeByInput('IE_Spec_F_PostBody', 'paddingBottom', '4px');	
		ChangeByInput('IE_Spec_F_PostTitle', 'paddingBottom', '4px');
		ChangeByInput('IE_Spec_F_HeaderFont', 'paddingBottom', '8px');
		ChangeByInput('IE_spec_titleText', 'paddingBottom', '6px');
		ChangeByInput('IE_Spec_drama', 'marginTop', '5px');		
		ChangeByInput('IE_Spec_kines', 'marginTop', '5px');		
		ChangeByInput('IE_Spec_kines', 'paddingBottom', '9px');	
		ChangeByInput('IE_Spec_drama', 'paddingBottom', '10px');	
	}
	else {
		ChangeByInput('IE_Spec_drama', 'lineHeight', '160%');
		ChangeByInput('IE_Spec_kines', 'lineHeight', '160%');	
		ChangeByInput('IE_Spec_drama', 'marginTop', '5px');		
		ChangeByInput('IE_Spec_kines', 'marginTop', '6px');		
		ChangeByInput('IE_Spec_drama', 'paddingBottom', '7px');	
		ChangeByInput('IE_spec_titleText', 'paddingBottom', '5px');		
		ChangeByInput('IE_Spec_PostVP', 'marginTop', '0px');
		ChangeByInput('IE_Spec_PostVP', 'paddingBottom', '5px');	
		ChangeByInput('IE_Spec_PostHP', 'marginTop', '0px');
		ChangeByInput('IE_Spec_PostVP', 'paddingTop', '0px');
	}
}

function EXT_encodeTxt(s){ 
	s = escape(s);
	var j, i, k, l, t;
	for (j=0; j<encArr.length; j++) {
		k = encArr[j].length;
		l = encArr[j];
		sym = encSym[j];
		t = '';
		for (i=0; i<s.length-k; i++) {
			if (s.substring(i, i+k) == l)
				s = s.substring(0, i)+sym+s.substring(i+k, s.length);
		}
	}
	return s;	
}

function EXT_decodeTxt(s){
	var d1 = new Date();			
	var sym = '';
	for (var j=encArr.length-1; j>=0; j--) {
		sym = encSym[j];
		for (var i=0; i<s.length-1; i++)
			if (s.charAt(i) == sym){
				s = s.substring(0, i)+encArr[j]+s.substring(i+1, s.length);
				return unescape(s);
			}
	}
	return unescape(s);
}

//DDF
function fixitnow(ss, ss2) {
	if (ss2 && (!ss || !ss.length))
		ss = ss2;
	preloadImgs('images/upsingle_.gif', 'images/upsingle.gif', 'images/uparrow_.gif', 'images/uparrow.gif', 
			'images/downsingle_.gif', 'images/downsingle.gif', 'images/downarrow_.gif', 'images/downarrow.gif', 
			'images/ins.gif', 'images/ins_.gif', 'images/del.gif', 'images/del_.gif', 'images/edt.gif', 'images/edt_.gif', 
			'images/indic.gif', 'images/indic_.gif', 'images/dotbg.gif', 'images/picker_0.gif', 'images/hsvwheel.png', 
			'images/img.gif',
			'barimg/i_align_center.gif', 'barimg/i_align_justify.gif', 'barimg/i_align_left.gif', 'barimg/i_align_right.gif',
			'barimg/i_bold.gif', 'barimg/i_italic.gif', 'barimg/i_ltr.gif', 'barimg/i_rtl.gif', 'barimg/i_underline.gif',
			'images/fa_ins_.gif', 'images/fa_ins.gif');
	global_canWrite = false;
	writeCurrentTime(global_lang == 'fa');
	global_canWrite = true;
	global_gotResult = false;
	doDuty(dg('ChangeViewSimpleEnhanced'));
	var cook = ReadCookie('PsycHodrama');
	var restoreStr = 'You have a saved work in the cookies.\n\n Do you want to restore it?\n\nPress OK to restore or Cancel to Dismiss it.';
	if (global_lang == 'fa') restoreStr = translateIt('wanna restore?');
	if (ss && ss.length)	
		ReadPsycHodrama(ss);
	else
		if (cook && confirm(restoreStr)) {
			if (! ReadPsycHodrama(cook)) {
				ExpirePsycHodramaCookie();
				TakeEffectAll();
			}
		}
		else
			TakeEffectAll();				 
	global_didSomething	= false;

	fixIEFields();
	var objs = document.getElementsByTagName('select');
	for (var i=0; i<objs.length; i++) { 
		objs[i].onfocus = DPFocusOn;
		objs[i].onblur = DPFocusOff;	
	}
}

//DDF
function alertPathedHide() {
	TogglePsychoeds();
}

function getGCW() {
	return global_canWrite;
}

//DDF
function dg(s) {
	if (s == 'body')
		return document.body;
	return document.getElementById(s);
}

//DDF
function SelRadio(wut, flip) {
	if (flip == true){
		if (dg(wut).checked == true)
			dg(wut).checked = false;
	}else
		dg(wut).checked = true;
	doDuty(dg(wut));
}

//DDF
function SwitchFloat(s, w, e, d) {
	var theStyle = dg(s).style, temp;
	if (theStyle.cssFloat) 
		theStyle.cssFloat = (w)?'left':'right';
	else
		theStyle.styleFloat = (w)?'left':'right';
	if (e) {
		theStyle.textAlign = e;
		temp = s+'AlignEr'+e.substring(0, 1).toUpperCase()+e.substring(1, e.length);
		if (dg(temp)) {
			dg(temp).checked = true;
			doDuty(temp);
		}
	}
	if (d) {
		theStyle.direction = d;
		temp = s+'DirectionIs'+d.toUpperCase()+'Er';
		if (dg(temp)) {
			dg(temp).checked = true;
			doDuty(temp);
		}			
	}	
	var temp = theStyle.marginRight;
	theStyle.marginRight = theStyle.marginLeft;
	theStyle.marginLeft = temp;
	var temp = theStyle.paddingRight;
	theStyle.paddingRight = theStyle.paddingLeft;
	theStyle.paddingLeft = temp;	
}

//DDF
function ToggleTextVal(t, v1, v2, wut) {
	if (wut == 'value')
		t.value = (t.value == v1)?v2:v1;
	if (wut == 'borderBottomColor')
		t.parentNode.style.borderBottomColor = (t.innerHTML.charAt(0) == 'S' || t.innerHTML.charAt(0) == translateIt('noon'))?v2:v1;
	if (wut == 'marginTop')
		t.style.marginTop = (t.style.marginTop == v1)?v2:v1;
	if (wut == 'position')
		t.style.position = (t.style.position == v1)?v2:v1;				
	if (wut == 'top')
		t.style.top = (t.style.top == v1)?v2:v1;						
}

//DDF
function ToggleText(str, v1, v2) {
	if (!v2) {
		if (global_lang == 'fa') {
			v2 = translateIt('PenhaanSaazi')+v1;
			v1 = translateIt('Namaayesh')+v1;
		}
		else {
			v2 = 'Hide&nbsp; '+v1;
			v1 = 'Show '+v1;
		}
	}
	//if (! str.innerHTML)
	//	str = dg(str);
	str.innerHTML = (str.innerHTML.substring(0, 1) == v1.substring(0, 1))?v2:v1;
}

//DDF
function SetText(str, v1) {
	if (! str.style)
		str = dg(str);
	if (v1 && v1.length)
		str.innerHTML = v1;	
	else
		str.innerHTML = ' ';	
}

//DDF
function SetHeaderImage(wut) {
	if (wut && wut.length)
		SetText('HeaderPartImage', '<img src=\"'+wut+'\" />'); 
	else 
		SetText('HeaderPartImage'); 
}

//DDF
function ToggleObjectDisplay(obj, str) {
	if (obj.display == null)
		obj = dg(obj).style;
	if (!str)
		str = 'block';
	if (obj.display == 'none')
		obj.display = str;
	else
		obj.display = 'none';
}

//DDF
function SwitchDisplay(obj, pos, str) {
	//if (!obj.style)
	obj = dg(obj);
	if (!obj)
		return;
	if (!str)
		str = 'block';
	if (!pos)
		str = 'none';
	//if (obj.style.display != str)
	//		obj.style.display = str;
}

//DDF
function ToggleDisplay(obj, ref, str, wut, str2) {
	if (!obj.style)
		obj = dg(obj);
	ToggleObjectDisplay(obj.style, wut);
	if (ref)
		ToggleText(ref, str, str2);
}

//DDF
function disableEditLink(side, part, num, linkie) {
	dg('_'+side+'_LinkUrl_'+part+'_'+num).disabled = true;
	dg('_'+side+'_LinkTtl_'+part+'_'+num).disabled = true;
	SetValAndDo('_'+side+'_LinkUrl_'+part+'_'+num, linkie?' ':'', true);
	SetValAndDo('_'+side+'_LinkTtl_'+part+'_'+num, '', true);
	ChangeByInput('_'+side+'_LinkUrl_'+part+'_'+num, 'backgroundColor', '#EEE');
	ChangeByInput('_'+side+'_LinkUrl_'+part+'_'+num, 'borderColor', '#E0E0E0');
	ChangeByInput('_'+side+'_LinkTtl_'+part+'_'+num, 'backgroundColor', '#EEE');
	ChangeByInput('_'+side+'_LinkTtl_'+part+'_'+num, 'borderColor', '#E0E0E0');
}

//DDF
function enableEditLink(side, part, num) {
	dg('_'+side+'_LinkUrl_'+part+'_'+num).disabled = false;
	dg('_'+side+'_LinkTtl_'+part+'_'+num).disabled = false;
	ChangeByInput('_'+side+'_LinkUrl_'+part+'_'+num, 'backgroundColor', '#ECEAE0');
	ChangeByInput('_'+side+'_LinkUrl_'+part+'_'+num, 'borderColor', '#666');
	ChangeByInput('_'+side+'_LinkTtl_'+part+'_'+num, 'backgroundColor', '#ECEAE0');
	ChangeByInput('_'+side+'_LinkTtl_'+part+'_'+num, 'borderColor', '#666');
}

//DDF
function TogglePsychoeds() {
	global_isPathedHide = !global_isPathedHide;
	var d = (dg('ContainerTitleSettings').style.display == 'none');
	var objs = new Array();
	objs = document.getElementsByTagName('div');
	for (i=0; i<objs.length; i++)
		if (objs[i].className == 'psychoedContainer' && objs[i].id != 'ContainerBasicSettings' && objs[i].id != 'helpBoxContainer')
			ToggleDisplay(objs[i]);			
}

//DDF
function ToggleEnhanceds() {
	global_isMinimized = !global_isMinimized;
	var objs = new Array();
	objs = document.getElementsByTagName('div');
	for (i=0; i<objs.length; i++)
		if (objs[i].className == 'Enhanced')
			ToggleObjectDisplay(objs[i].style);

	objs = document.getElementsByTagName('tr');
	for (i=0; i<objs.length; i++)
		if (objs[i].className == 'Enhanced')
			ToggleObjectDisplay(objs[i].style, (isIE()?'inline':'table-row'));			
}

//DDF
function PushImgBut(wut, how) {
	if (!dg(wut)) return;
	ChangeByInput(wut, 'borderColor', how?'navy':'#EEE');
	ChangeByInput(wut, 'backgroundColor', how?'#E6ECF3':'transparent');
}

function persianify(s) {
	for (var i=0; i<s.length; i++) {
		if (s.charAt(i) == translateIt('Ye arabi'))
			s = s.substring(0, i)+translateIt('Ye farsi')+s.substring(i+1, s.length);
		else
			if (s.charAt(i) == translateIt('Ke arabi'))
				s = s.substring(0, i)+translateIt('Ke farsi')+s.substring(i+1, s.length);
			else
				if (s.charAt(i) == translateIt('non joiner'))
					s = s.substring(0, i)+(' ')+s.substring(i+1, s.length);
	}
	return s;
}

function name2rgb(s) {
	s = s.toLowerCase();
	s = persianify(s);
	for (var i=0; i<name2rgbArr.length; i+=2)
		if (name2rgbArr[i].toLowerCase() == s)
			return name2rgbArr[i+1];
	return null;
}

function isColor(s) {
	var re = /^([\da-f]{3}|[\da-f]{6})$/i;
	return (re.test(s));
}

function getFatherForECP(prop, obj) {
	if (obj == 'body')
		return '';
	var s = prop+' of '+obj;
	var t = '';
	switch (s) {
	case 'backgroundColor of HeaderPart':
	case 'backgroundColor of MainColumnInner':
	case 'backgroundColor of SideRColumnInner':
		t = 'WholeBackColorEr';
		break;
	case 'borderColor of HeaderPart':
	case 'color of TitleText':
	case 'color of SubTitleText':
		t = 'HeaderBackColorEr';
		break;
	case 'borderColor of MainColumnInner':
	case 'backgroundColor of OnePostTopPart':
	case 'backgroundColor of OnePostMainDiv':
	case 'backgroundColor of OnePostBotPart':
	case 'borderColor of OnePostMainDiv':
	case 'borderColor of PostSepDivInner':
		t = 'MainColumnsBackColorEr';
		break;
	case 'borderColor of SideRColumnInner':
		t = 'SideColumnsBackColorEr';
		break;
	case 'borderColor of OnePostTopPart':
	case 'color of OnePostMidPart':
		t = 'PostBodyBackColorEr';
		break;
	case 'color of OnePostTitle':
	case 'color of OnePostDateTop':
		t = 'OnePostTopBackColorEr';
		break;

	case 'color of OnePostComments':
	case 'color of OnePostPermLink':
		t = 'OnePostBotBackColorEr';
		break;
	case 'backgroundColor of R_DefaultDiv_0':
	case 'borderColor of R_DefaultDiv_0':
	case 'borderBottomColor of R_PartSepSemiDiv_1':
	case 'backgroundColor of L_DefaultDiv_0':
	case 'borderColor of L_DefaultDiv_0':
	case 'borderBottomColor of L_PartSepSemiDiv_1':
		t = 'SideColumnsBackColorEr';
		break;
	case 'color of R_Title_0':
	case 'color of R_DefaultDiv_0':
		t = '_R_DefaultDivBackColorEr';
		break;
	case 'color of RSideColorCSS_Link':
		t = '_R_DefaultDivColorEr';
		break;
	case 'borderColor of R_Title_0':
		t = '_R_TitleColorEr';
		break;
	case 'color of RSideColorCSS_Hover':
		t = '_R_LinkColorEr';
		break;
	case 'color of L_Title_0':
	case 'color of L_DefaultDiv_0':
		t = '_L_DefaultDivBackColorEr';
		break;
	case 'color of LSideColorCSS_Link':
		t = '_L_DefaultDivColorEr';
		break;
	case 'borderColor of L_Title_0':
		t = '_L_TitleColorEr';
		break;
	case 'color of LSideColorCSS_Hover':
		t = '_L_LinkColorEr';
		break;
	}
	var ret = '';
	if (t) {
		var n2r;
		if (n2r = name2rgb(t)) 
			ret = n2r;
		else{
			var value = dg(t).value;
			ret = TripleColNameToSix(value);
		}
	}
	if (ret == 'transparent') {
		ret = getFatherForECP('backgroundColor', 'body');
	}
	return ret;
}

function TripleColNameToSix(sname) {
	var ret = sname;
	if (sname.length == 4 && sname.charAt(0) == '#')
		sname = sname.substring(1, sname.length);
	if (sname.length == 3 && isColor(sname))
		ret = '#'+sname.charAt(0)+sname.charAt(0)+sname.charAt(1)+sname.charAt(1)+sname.charAt(2)+sname.charAt(2);
	return ret;
}

//DDF
function IPickColor(s, colorProp, colorObj) {
	var sname;
	if (s.substring(0, 1) == '#')
		s = s.substring(1, s.length);
	if (!colorProp)
		colorProp = dg('CPwutProp').innerHTML;
	if (!colorObj)
		colorObj = dg('CPwutObj').innerHTML;
	s = s.toLowerCase();

	var n2r = null;
	if (!s.length) {
		sname = 'transparent';
		/*
		if (colorObj == 'WholeColorCSS_Visit') {
			sname = name2rgb(dg('WholeLinkColorEr').value);	
			if (!sname) sname = dg('WholeLinkColorEr').value;	
		}
		 */
	}
	else
		if (n2r = name2rgb(s)) 
			sname = n2r;
		else {
			if (isColor(s)) {
				s = s.toUpperCase();
				sname = '#'+s;
			}
			else	
				return;
		}

	if (colorObj.substring(1, colorObj.length) == '_DefaultDiv_0')
		for (var i=1; i<maxBoxNumOnSides; i++)
			ChangeByInput(colorObj.substring(0, colorObj.length-1)+i, colorProp, sname);

	if (colorObj.substring(1, colorObj.length) == '_Title_0')
		for (var i=1; i<maxBoxNumOnSides; i++)		
			ChangeByInput(colorObj.substring(0, colorObj.length-1)+i, colorProp, sname);

	if (colorObj.substring(1, colorObj.length) == '_PartSepSemiDiv_1')
		for (var i=2; i<maxBoxNumOnSides; i++)		
			ChangeByInput(colorObj.substring(0, colorObj.length-1)+i, colorProp, sname);			

	if (colorObj == 'RSideColorCSS_Hover' || colorObj == 'RSideColorCSS_Link')
		TheColorCSS(sname, 6+(colorObj == 'RSideColorCSS_Hover'));		
	if (colorObj == 'LSideColorCSS_Hover' || colorObj == 'LSideColorCSS_Link')
		TheColorCSS(sname, 11+(colorObj == 'LSideColorCSS_Hover'));
	if (colorObj == 'WholeColorCSS_Link')
		TheColorCSS(sname, 8);
	if (colorObj == 'WholeColorCSS_Hover')
		TheColorCSS(sname, 10);	
	if (colorObj == 'WholeColorCSS_Visit')
		TheColorCSS(sname, 9, sname == 'transparent');
	if (colorObj == 'SideRColumnInner')
		ChangeByInput('SideLColumnInner', colorProp, sname);
	/*	if (colorObj == 'OnePostTopPart') ChangeByInput('OnePostBotPart', colorProp, sname); */

	ChangeByInput(colorObj, colorProp, sname);
	var ecpsname = sname;
	if (ecpsname == 'transparent') ecpsname = '#FFFFFF';
	if (ecpsname.length < 7)
		ecpsname = TripleColNameToSix(sname);
	if (colorObj == 'body' && colorProp == 'backgroundColor')
		ChangeByInput('body', 'color', ComplementTheColor(sname));
	if (dg('ECP_myRGBS').value != ecpsname) {
		dg('ECP_myRGBS').value = ecpsname;
		if (dg('ColorPicker').style.display == 'block')
			resetByRGBS(ecpsname);
	}

	if (sname == n2r) 
		sname = s;
	if (global_colorRef)
		if (global_colorRef.value != sname && s != '')
			global_colorRef.value = sname;
	if (colorObj != dg('CPwutObj').innerHTML ||	colorProp != dg('CPwutProp').innerHTML)	
		return;

	if (dg('AColor_S_'+s))		
		dg('AColor_S_'+s).style.borderWidth = '1px';
	if (dg('AColor_H_'+s))
		dg('AColor_H_'+s).style.borderWidth = '1px';		
	if (dg('AColor_N_'+s))
		dg('AColor_N_'+s).style.borderWidth = '1px';	

	var c = global_lastColor;
	if (c && c.substring(0, 1) == '#')
		c = c.substring(1, c.length);
	if (c && c != s) {
		if (dg('AColor_S_'+c))
			dg('AColor_S_'+c).style.borderWidth = '0px';
		if (dg('AColor_H_'+c))
			dg('AColor_H_'+c).style.borderWidth = '0px';
		if (dg('AColor_N_'+c))					
			dg('AColor_N_'+c).style.borderWidth = '0px';			
	}
	if (colorObj == 'AddImageImageI')
		UpdateAddImageNow();				
	global_lastColor = sname;	
}

function setYetMove(wut) {
	global_yetMove = wut;
}

function MoveUp(obj, y) {
	return;
}

function nowTheTime() {
	now = new Date;
	theYear = now.getYear()+1900*(now.getYear() < 1000);
	return (now.getMonth()+1)+"/"+now.getDate()+"/"+theYear;
}

//DDF
function writeCurrentTime(wut) {
	var t2 = nowTheTime();
	if (wut)
		var s = ToHijri(t2)+' ';
	else
		var s = (t2)+' ';
	ChangeByInput('OnePostDateTop', 'innerHTML', s);
}

function isIE() {
	return (navigator.appName.indexOf('Microsoft') != -1) && !window.opera;
}

function TheColorCSS(col, num, remove) {
	var SS = document.styleSheets[0];
	if (SS.cssRules)
		inRule = SS.cssRules;
	else if (SS.rules)
		inRule = SS.rules;
	if (remove)
		inRule[num].style.color = '';
	else
		inRule[num].style.color = col;
}

//DDF
function SwitchSelectIE(t) {
	if (isIE()) {
		var SS = document.styleSheets[0];
		if (SS.cssRules)
			inRule = SS.cssRules;
		else if (SS.rules)
			inRule = SS.rules;
		if (dg('ColorPicker').style.display != 'none' 	|| 	dg('PsycHodramaBox').style.display != 'none' 	|| 
				dg('helpBox').style.display != 'none' 		|| 	dg('EditPartBox').style.display != 'none' 		|| 
				dg('addImage').style.display != 'none' 		|| 	dg('PsycHokinesisBox').style.display != 'none')
			t = 0;
		inRule[4].style.visibility = (t)?'visible':'hidden';
		t = dg('addImage').style.display != 'none';
		inRule[5].style.visibility = (t)?'visible':'hidden';
	}
}

//DDF
function HideCP() {
	SetText('CPwutObj', 'NaN');	
	if (! isDivVisible('ColorPicker'))
		return;
	SwitchDisplay('ColorPicker', 0);	
	SwitchSelectIE(1);	
	if (! isIE()) {
		window.blur();
		window.focus();
	}
}

function getMyXY(eve, t) {
	var myY, myX;
	if(!eve) 
		var eve=window.event;
	if (document.all){ 
		myX=eve.clientX; 
		var dY = 0;
		if (document.body.scrollTop)
			dY=document.body.scrollTop;
		else
			dY=document.documentElement.scrollTop;
		myY=eve.clientY+dY; 
	}
	else { 
		myX=eve.pageX; 
		myY=eve.pageY; 
	}
	return ((t)?myY:myX);
}

//DDF
function ShowCP(eve, ref, CPProp, CPObj) {
	try {
		if ((global_colorRef.id == dg(ref).id) && (dg('CPwutObj').innerHTML == CPObj)) {
			HideCP();
			return;
		}		
	} catch(e) {}

	if (global_isPathedHide) 
		alertPathedHide();	
	SetText('CPwutProp', CPProp);
	SetText('CPwutObj', CPObj);
	global_colorRef = dg(ref);
	IPickColor(global_colorRef.value);
	var myX = getMyXY(eve, 0);
	var myY = getMyXY(eve, 1);
	SwitchDisplay('ColorPicker', 1);
	dg('ColorPicker').style.top = (myY+10)+'px';
	SwitchSelectIE(0);
	deMoronize();
}

//DDF
function ShowPsycHokinesis(eve) {
	HideAll(true);
	if (dg('PsycHokinesisBox').style.display != 'none') {
		HidePsycHokinesis();
		return;
	}
	showDarkMoon("70");	
	if (global_isPathedHide) 
		alertPathedHide();	
	var myX = getMyXY(eve, 0);
	var myY = getMyXY(eve, 1);
	ChangeByInput('PsycHokinesisBox', 'top', (myY+10)+'px');
	dg('PsycHokinesisGetEr').value = '[Out Of Date! Click on "Get PsycHokinesis" to update.]';
	SwitchDisplay('PsycHokinesisBox', 1);
	SwitchSelectIE(0);
}

function zwnjify(s) {
	for (var i=0; i<s.length; i++)
		if (s.charAt(i) == translateIt('Shift 2: zwnj'))
			s = s.substring(0, i)+'&zwnj;'+s.substring(i+1, s.length);	
	return s;
}

function HidePsycHokinesis() {
	if (! isDivVisible('PsycHokinesisBox'))
		return;
	hideDarkMoon();
	SwitchDisplay('PsycHokinesisBox', 0);
	SwitchSelectIE(1);
	if (!isIE()) {
		window.blur();
		window.focus();	
	}
}

function ShowPsycHodrama(eve) {
	if (dg('PsycHodramaBox').style.display != 'none') {
		HidePsycHodrama();
		return;
	}
	HideAll(true);
	showDarkMoon("50");
	if (global_isPathedHide) 
		alertPathedHide();	
	var myX = getMyXY(eve, 0);
	var myY = getMyXY(eve, 1);
	ChangeByInput('PsycHodramaBox', 'top', (myY+10)+'px');
	dg('PsycHodramaGetEr').value = '[Out Of Date! Click on "Get PsycHodrama" to update.]';
	dg('PsycHodramaPutEr').value = '[Paste your PsycHodrama here and press "Apply".]';
	SwitchDisplay('PsycHodramaBox', 1);
	SwitchSelectIE(0);
}

function HidePsycHodrama() {
	if (! isDivVisible('PsycHodramaBox'))
		return;
	hideDarkMoon();
	SwitchDisplay('PsycHodramaBox', 0);
	SwitchSelectIE(1);
	if (!isIE()) {
		window.blur();
		window.focus();	
	}
}

function UpdateAddImageNow() {
	var that = dg('AddImageImageI');
	if (global_AINode)
		SetValAndDo(global_AINode, '<img src="'+that.getAttribute('src')+'" alt="'+that.getAttribute('alt')+'" style="border: '+dg('AddImageBorderWidthEr').value+' '+dg('AddImageBorderStyleEr').value+' '+dg('AddImageBorderColorEr').value+';" />');
}

function getPersianDigit(num) {
	var PD = new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;");
	var ret = ""; 
	do { 
		ret = PD[(num%10)] + ret; 
		num = Math.floor(num/10);	
	} while (num > 0);	
	return ret; 
}

function convertPersianDigit(str) {
	var PD = new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;");
	var ret = 0, pwr = 1; 
	for (var i=str.length-1; i>=0; i--) {
		var t = 0;
		for (var j=0; j<10; j++)
			if (str.charCodeAt(i) == PD[j].substring(2, 6))
				t = j;
		ret += t*pwr;
		pwr *= 10;
	}	
	return ret; 
}

function ShowAddImage(side, part, num, eve) {
	var LegendText;
	if (global_lang == 'fa')
		LegendText = translateIt('Afzoodane Tasvir Be Peyvande Shomareye')+' <b>'+getPersianDigit(num+1)+'</b> '+translateIt('Az Jabeye Shomareye')+' <b>'+getPersianDigit(part+1)+'</b> '+translateIt('Az Sotoone Samte')+' <b>'+(side=='R'?translateIt('Raast'):translateIt('Chap'))+'</b>';
	else
		LegendText = 'Add Image to Link <b>#'+(num+1)+'</b> of Box <b>#'+(part+1)+'</b> of Side <b>'+(side=='R'?'Right':'Left')+'</b>';
	if (dg('addImageLegend').innerHTML == LegendText) {
		HideAddImage();
		return;
	}
	if (global_isPathedHide) 
		alertPathedHide();	
	global_AINode = '_'+side+'_LinkTxt_'+part+'_'+num;
	var myX = getMyXY(eve, 0);
	var myY = getMyXY(eve, 1);
	dg('addImageLegend').innerHTML = LegendText;
	dg('AddImageImageIAddress').value = '';
	dg('AddImageImageIAlt').value = '';
	ChangeByInput('addImage', 'top', (myY+10)+'px');
	SwitchDisplay('addImage', 1);
	SwitchSelectIE(0);
}

function HideAddImage() {
	if (! isDivVisible('addImage'))
		return;
	SwitchDisplay('addImage', 0);
	dg('addImageLegend').innerHTML = '';
	SwitchSelectIE(1);
	if (!isIE()) {
		window.blur();
		window.focus();	
	}
}

function HideHelp() {
	if (! isDivVisible('helpBox'))
		return;
	SwitchDisplay('helpBox', 0);
	dg('helpBoxLegend').innerHTML = '';
	SwitchSelectIE(1);
	if (!isIE()) {
		window.blur();
		window.focus();	
	}
}

function ShowHelp(s, eve) {
	if ((dg('helpBoxLegend').innerHTML == s)) {
		HideHelp();
		return;
	}
	var myX = getMyXY(eve, 0);
	var myY = getMyXY(eve, 1);
	if (myX < 100)
		myX = 100;
	if (myX + 250 > window.screen.width-50)
		myX = window.screen.width-300;
	ChangeByInput('helpBox', 'top', (myY+10)+'px');
	ChangeByInput('helpBox', 'left', (myX-100)+'px');	
	SwitchDisplay('helpBox', 1);
	dg('helpBoxLegend').innerHTML = s;	
	dg('helpBoxLegend').innerHTML = s;
	dg('helpBoxInner').innerHTML = getHelpNow(s.toLowerCase());
	SwitchSelectIE(0);
}


function ChangeByInput(str, wut, inp) {
	var dest = (str.style)?str:dg(str);
	var val, uVal, uEval;
	if (inp.value)
		val = inp.value;
	else
		val = inp;

	if (wut == 'innerHTML') {
		dest.innerHTML = (val.length)?val:''; 
		return;			
	}
	try {
		uEval = eval('dest.style.'+wut);
	} catch(e) { alert('A Bug! Call Aideen!'); }
	uVal = String(val+'').toLowerCase();
	uEval = String(uEval+'').toLowerCase();
	if (uVal == "" || uVal == "http://" || uVal == "url(\'http://\')" || uVal == "url(http://)") 
		uVal = "";
	if (uEval == "" || uEval == "http://" || uEval == "url(\'http://\')" || uEval == "url(http://)") 
		uEval = "";
	if (uVal == uEval)
		return;
	switch (wut) {
	case 'backgroundImage':
		dest.style.backgroundImage = 'url(\''+val+'\')'; break;		
	case 'fontFamily':
		dest.style.fontFamily = val; break;
	case 'fontSize':
		dest.style.fontSize = val;	break;
	case 'fontWeight':
		dest.style.fontWeight = val; break;
	case 'fontStyle':
		dest.style.fontStyle = val; break;
	case 'textDecoration':
		dest.style.textDecoration = val; break;					
	case 'direction':
		dest.style.direction = val; break;
	case 'textAlign':
		dest.style.textAlign = val; break;			
	case 'borderStyle':
		dest.style.borderStyle = val; break;
	case 'borderWidth':
		dest.style.borderWidth = val; break;
	case 'borderBottomWidth':
		dest.style.borderBottomWidth = val; break;
	case 'borderBottomStyle':
		dest.style.borderBottomStyle = val; break;
	case 'borderRightStyle':
		dest.style.borderRightStyle = val; break;
	case 'borderBottomColor':
		dest.style.borderBottomColor = val; break;
	case 'borderRightColor':
		dest.style.borderRightColor = val; break;				
	case 'borderLeftColor':
		dest.style.borderLeftColor = val; break;				
	case 'borderTopWidth':
		dest.style.borderTopWidth = val; break;
	case 'borderColor':
		dest.style.borderColor = val; break;
	case 'backgroundColor':
		dest.style.backgroundColor = val; break;
	case 'color':
		dest.style.color = val; break;		
	case 'visibility':
		dest.style.visibility = val; break;	
	case 'paddingLeft':
		try { dest.style.paddingLeft = val; 	} catch(e) {} break;
	case 'paddingRight':
		try { dest.style.paddingRight = val; 	} catch(e) {} break;
	case 'paddingTop':
		try { dest.style.paddingTop = val; 		} catch(e) {} break;
	case 'paddingBottom':
		try { dest.style.paddingBottom = val; 	} catch(e) {} break;
	case 'marginLeft':
		try { dest.style.marginLeft = val; 		} catch(e) {} break;
	case 'marginRight':
		try { dest.style.marginRight = val; 	} catch(e) {} break;
	case 'marginTop':
		dest.style.marginTop = val;	break;
	case 'marginBottom':
		dest.style.marginBottom = val; break;						
	case 'backgroundRepeat':
		dest.style.backgroundRepeat = val; break;
	case 'backgroundAttachment':
		dest.style.backgroundAttachment = val; break;
	case 'backgroundPosition':
		dest.style.backgroundPosition = val; break;
	case 'width':
		try {dest.style.width = val; 			} catch(e) {}	break;
	case 'top':
		dest.style.top = val; break;		
	case 'left':
		dest.style.left = val; break;			
	case 'lineHeight':
		dest.style.lineHeight = val; break;			
	case 'height':
		try { dest.style.height = val; break;	} catch(e) {} break;
	}			
}

function ChangeHeaderDirection(who, wut) {
	ChangeByInput('HeaderPartText', 'direction', wut);
	ChangeByInput('TitleTextTextEr', 'direction', wut);
	ChangeByInput('SubTitleTextTextEr', 'direction', wut);
	ChangeByInput('TitleText', 'direction', wut);
	ChangeByInput('SubTitleText', 'direction', wut);
	if (global_canWrite) {
		var dir = (wut=='rtl')?'right':'left';
		var who = (wut == 'rtl')?'HeaderPartTextAlignErRight':'HeaderPartTextAlignErLeft';
		dg(who).checked = true;
		doDuty(who);
		ChangeByInput('TitleText', 'textAlign', dir);
		ChangeByInput('SubTitleText', 'textAlign', dir);
	}
}

function fromUtf8ToEntity(s) {
	/* Modified under terms of LGPL from http://behdad.org/js/tools.js
	 * Copyright (C) 2003  Behdad Esfahbod <js@behdad.org>
	 */
	//return s.replace(/([^\x00-\x7f])/g, function(s, c, ofs, all) {	c = String(c);	return "&#"+c.charCodeAt(0)+";"; });
}

function ReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) 
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function PsycHodramaDefaultString() {
	var s;
	if (global_lang == 'fa')
		s = '{100blogger]720px]90^25]repeat]scroll]top^20center]solid]1px]Tahoma^2C^20sans-serif]5em]1.75em]solid]1px]30px]40px]5px]solid]1px]solid]1px]_L_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]Tahoma^2C^20sans-serif]solid]1px]solid]1px]Tahoma^2C^20sans-serif]1em]1em]1em]150^25]1em]1em]_R_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]4]4]!0648!0628!0644!0627!06AF^20!0645!0646]!06A9!0644!0645!0647!200C!06CC^20!06A9!0644!06CC!062F!06CC!06F1^2C^20!06A9!0644!0645!0647!200C!06CC^20!06A9!0644!06CC!062F!06CC!06F2]!0633!0627!06CC!06A9!0648^3A^20!0642!0627!0644!0628!200C!0633!0627!0632^20!0622!0632!0627!062F],](]!0633!0641!06CC!062F](])]!0622!0628!06CC]!0646!0627!0631!0646!062C!06CC]!0622!0628!06CC^20!062A!06CC!0631!0647],](](]]]black](]3]1]2]3]1]1]3]1]2]3]1]1],](](]^23CCC])])]!0633!0627!06CC!06A9!0648]!0642!0627!0644!0628!200C^20!0648!0628!0644!0627!06AF!200C!062A!0627!0646^20!0631!0627!060C^20!062E!0648!062F!062A!0627!0646^20!0628!0633!0627!0632!06CC!062F^21],](],](](]!0633!06CC!0627!0647](](](]^23666](](](]^23333](],](](]75]20],](](]^23F6F6F6])])]black]1.5]15],](](]^23999])])]black]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C],](](]^23CCC])])],](](]^23EEE])])],](](]^23CCC])])],](]black]^23666]15]3]25]20]black],](](],](],](](](],]black](](](],](](](],]black](](](](](],]^23333](](](](](],]^2336F]^23333](],](]!0646!0648!0634!062A!0647^20!0634!062F!0647^20!062F!0631^20^21!0632!0645!0627!0646^20!062A!0648!0633!0637^20^21!0646!0648!06CC!0633.]20],](](]black])])]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C]]]]!062E!0627!0646!0647]^24HOME]!0635!0641!062D!0647^20!0627!0635!0644!06CC]!0627!06CC!0645!06CC!0644]^24EMAIL]!062A!0645!0627!0633^20!0628!0627^20!0645!0646]RSS]^24RSS]RSS^20Feed]!0622!0631!0634!06CC!0648]]]^24ARCHIVE]^20]]!062F!0648!0633!062A!0627!0646]]]Horm])blog.horm.org]Hallucinations^20Of^20Reabsorbed^20Mind]Phorm])p.horm.org]Another^20Phormation]!063A!06CC!0631!0647]]]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_psycho.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E]^24PSYCHO]!0633!0627!06CC!06A9!0648^3A^20!0642!0627!0644!0628^20!0633!0627!0632^20!0622!0632!0627!062F]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_firefox.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])www.mozilla.org/products/firefox/]Get^20Firefox^21]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_xhtml.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])validator.w3.org/check/referer]XHTML^20Validator^26^2361470^3BPsycHo}';
	else
		s = '{100blogger]720px]90^25]repeat]scroll]top^20center]solid]1px]Tahoma^2C^20sans-serif]5em]1.75em]solid]1px]30px]40px]5px]solid]1px]solid]1px]_L_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]Tahoma^2C^20sans-serif]solid]1px]solid]1px]Tahoma^2C^20sans-serif]1em]1em]1em]150^25]1em]1em]_R_DefaultDivBackIsColorEr]solid]1px]solid]1px]Tahoma^2C^20sans-serif]150^25]1em]1em]4]4]]keyword1^2C^20keyword2^2C^20keyword3]PsycHo^3A^20Free^20Template^20Generator],](]white](])]blue]coral]navy],](](]]]black](]3]1]2]3]1]1]3]1]2]3]1]1],](](]^23CCC])])]PsycHo]Your^20own^20psychogenesis^2C^20Your^20own^20template^21],](],](](]black](](](]^23666](](](]^23333](](],](]75]20],](](]^23F6F6F6])])]black]1.5]15],](](]^23999])])]black]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C],](](]^23CCC])])],](](]^23EEE])])],](](]^23CCC])])],](]black]^23666]15]3]25]20]black],](](],](],](](],](]black](](](],](](](],]black](](](],](](]^23333](](](](](],]^2336F]^23333](],](]Written^20at^20^24TIME^20by^20^24AUTH.]20],](](]black])])]^23CCC])])]^23666]30]black]black],](](]^23333](],](]^23333]^23039]^2306C]]]]Home]^24HOME]First^20Page]Email]^24EMAIL]Mail^20me^21]RSS]^24RSS]RSS^20Feed]Archive]]]^24ARCHIVE]^20]]Friends]]]Horm])blog.horm.org]Hallucinations^20Of^20Reabsorbed^20Mind]Phorm])p.horm.org]Another^20Phormation]Etc]]]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_psycho.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E]^24PSYCHO]PsycHo^3A^20Free^20Template^20Generator]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_firefox.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])www.mozilla.org/products/firefox/]Get^20Firefox^21]^3Cimg^20src^3D^22)psyc.horm.org/barimg/bar_xhtml.png^22^20width^3D^2280^22^20height^3D^2215^22^20style^3D^22border^3A^200px^20solid^20black^22^20/^3E])validator.w3.org/check/referer]XHTML^20Validator^26^2361470^3BPsycHo}';
	return s;
}

function ResetPsycHodrama() {
	ReadPsycHodrama(PsycHodramaDefaultString());
}

function deBugify(s) {
	dg('jj').innerHTML = (s)+'<br />'+dg('jj').innerHTML;
}

function TakeEffectAll(s) {
	global_isTakingEffectAll = true;
	var d1 = new Date();
	var v1 = (d1.getMinutes()*60*1000+d1.getSeconds()*1000+d1.getMilliseconds());	
	if (s)
		s = s.split(drama_splitter);
	var sc = 0;
	var objs = document.getElementsByTagName('select');
	for (var i=0; i<objs.length; i++) { 
		if (s) objs[i].value = s[sc++]; 
		doDuty(objs[i]); 	
	}
	objs = document.getElementsByTagName('input');
	for (var i=0; i<objs.length; i++) {
		if ((objs[i].getAttribute('type') == 'radio') || (objs[i].getAttribute('type') == 'checkbox')) {
			if (s) 
				objs[i].checked = (s[sc++]=='true'); 
			if (objs[i].checked && objs[i].id.substring(0, 12) == 'ColsNumberIs')
				doDuty(objs[i]);
		}
		else { 
			if (! isDumpLinky(objs[i].id)) {
				if (s)
					objs[i].value = s[sc++];			
				doDuty(objs[i]); 			
			}
		}
	}
	objs = document.getElementsByTagName('input');			
	for (var i=0; i<objs.length; i++) {
		if ((objs[i].getAttribute('type') == 'radio') || (objs[i].getAttribute('type') == 'checkbox')) {
			if (objs[i].checked && objs[i].id.substring(0, 12) != 'ColsNumberIs') 
				doDuty(objs[i]);
		}
	}	

	var d3 = new Date();
	var v3 = (d3.getMinutes()*60*1000+d3.getSeconds()*1000+d3.getMilliseconds());				
	var sides = new Array('R', 'L');
	for (var t=0; t<2; t++) {
		if (dg('Side'+sides[t]+'Column').style.display == 'none')
			continue;
		var bs = dg('_'+sides[t]+'_boxNumForce').value;
		for (var i=0; i<bs; i++) {
			if (s) {
				SetValAndDo('_'+sides[t]+'_TitleTxt_'+i, s[sc++], true);
				SetValAndDo('_'+sides[t]+'_PreSurr_'+i, s[sc++], true);
				SetValAndDo('_'+sides[t]+'_PstSurr_'+i, s[sc++], true);
			}
			else {
				doDuty(dg('_'+sides[t]+'_TitleTxt_'+i));
				doDuty(dg('_'+sides[t]+'_PreSurr_'+i));
				doDuty(dg('_'+sides[t]+'_PstSurr_'+i));
			}
			var ls = dg('_'+sides[t]+'_linkNumForce_'+i).value;
			for (var j=0; j<ls; j++) {
				if (s) {
					SetValAndDo('_'+sides[t]+'_LinkTxt_'+i+'_'+j, s[sc++], true);
					SetValAndDo('_'+sides[t]+'_LinkUrl_'+i+'_'+j, s[sc++], true);
					SetValAndDo('_'+sides[t]+'_LinkTtl_'+i+'_'+j, s[sc++], true);
				}
				else {
					doDuty(dg('_'+sides[t]+'_LinkTxt_'+i+'_'+j));
					doDuty(dg('_'+sides[t]+'_LinkUrl_'+i+'_'+j));
					doDuty(dg('_'+sides[t]+'_LinkTtl_'+i+'_'+j));
				}	
			}
		}
	}
	var d2 = new Date();
	var v2 = (d2.getMinutes()*60*1000+d2.getSeconds()*1000+d2.getMilliseconds());
	global_isTakingEffectAll = false;
	global_didSomething = false;
	return true;
}

function isBoxVisible(side, part) {
	return (dg(side+'_PartDiv_'+part).style.display != 'none');
}

function isLinkVisible(side, part, num) {
	return (dg(side+'_LinkBodyContainer_'+part+'_'+num).style.display != 'none');
}

function ReadPsycHodrama(wut) {
	global_canWrite = true;
	if (!wut)
		return false;
	global_canWrite = false;
	var invalidStr = 'Invalid PsycHodrama. do you want to Reset PsycHodrama?';
	if (global_lang == 'fa') invalidStr = translateIt('invalid drama');
	var tio = wut.indexOf('PsycHodrama=');
	if (tio != -1)
		wut = wut.substr(tio+12, wut.length);
	var s = wut;

	if (s.charAt(0) != '{' || s.substring(s.length-7, s.length) != 'PsycHo}') {
		if (confirm(invalidStr)) {
			ResetPsycHodrama();
			return true;
		}
		else
			return false;
	}

	var waitPlz = 'Depending on your browser and PsycHodrama, this operation may take up to 2 minutes. Do you want to continue?';
	if (global_lang == 'fa') waitPlz = translateIt('wait 2 minutes');
	if (! confirm(waitPlz)) {
		global_canWrite = true;
		return false;
	}
	s = EXT_decodeTxt(s.substring(4, s.length-7));

	TakeEffectAll(s);
	var loadedSucc = 'PsycHodrama Loaded Successfully.';
	if (global_lang == 'fa') loadedSucc = translateIt('drama loaded');	
	alert(loadedSucc);
	var date = new Date();
	date.setTime(date.getTime()+(365*24*60*60*1000));
	document.cookie = "PsycHodrama="+wut+"; expires="+date.toGMTString()+"; path=/";
	global_canWrite = true;
	return true;
	global_didSomething = false;
}

function HighLight(s) {
	try {
		s.focus();
		s.select();
	} catch(e) {}
}

function isDumpLinky(s) {
	return (s.substring(2, 11) == '_TitleTxt') || (s.substring(2, 10) == '_LinkTxt') ||
	(s.substring(2, 10) == '_LinkUrl') || (s.substring(2, 10) == '_LinkTtl') ||
	(s.substring(2, 10) == '_PreSurr') || (s.substring(2, 10) == '_PstSurr') ||
	(s.substring(0, 4) == 'ECP_');
}

function WritePsycHodrama() {
	var d1 = new Date();			
	var s = '', sep = drama_splitter, i;

	var objs = document.getElementsByTagName('select');
	for (var i=0; i<objs.length; i++)
		if ((objs[i].getAttribute('type') == 'radio') || (objs[i].getAttribute('type') == 'checkbox'))
			s += objs[i].checked+sep;
		else
			s += objs[i].value+sep;		

	objs = document.getElementsByTagName('input');
	for (var i=0; i<objs.length; i++)
		if (((objs[i].getAttribute('type') == 'radio') || (objs[i].getAttribute('type') == 'checkbox')))
			s += objs[i].checked+sep;
		else {
			if (! isDumpLinky(objs[i].id))
				s += objs[i].value+sep;
		}

	var side = new Array('R', 'L');
	for (var sn=0; sn<2; sn++) 
		if (dg('Side'+side[sn]+'Column').style.display != 'none') {
			var pn = dg('_'+side[sn]+'_boxNumForce').value;
			for (var part=0; part<pn; part++) {
				var ln = dg('_'+side[sn]+'_linkNumForce_'+part).value;
				s += dg('_'+side[sn]+'_TitleTxt_'+part).value+sep;			
				s += dg('_'+side[sn]+'_PreSurr_'+part).value+sep;
				s += dg('_'+side[sn]+'_PstSurr_'+part).value+sep;
				for (var num=0; num<ln; num++) {
					s += dg('_'+side[sn]+'_LinkTxt_'+part+'_'+num).value+sep;
					s += dg('_'+side[sn]+'_LinkUrl_'+part+'_'+num).value+sep;
					s += dg('_'+side[sn]+'_LinkTtl_'+part+'_'+num).value+sep;
				}
			}
		}
	s = '{'+PsycHo_CurrentVersion+EXT_encodeTxt(s)+'PsycHo}';
	dg('PsycHodramaGetEr').value = s;
	HighLight(document.PsycHoForm.PsycHodramaGetEr);
	var date = new Date();
	date.setTime(date.getTime()+(365*24*60*60*1000));
	document.cookie = "PsycHodrama="+s+"; expires="+date.toGMTString()+"; path=/";
	var d2 = new Date();			
	var v1 = (d1.getMinutes()*60*1000+d1.getSeconds()*1000+d1.getMilliseconds());
	var v2 = (d2.getMinutes()*60*1000+d2.getSeconds()*1000+d2.getMilliseconds());	
	global_didSomething = false;
	return s;
}

function getSideRBoxesNum() {
	return SideRBoxesNum;
}

function SwitchLinkTR(side, part, num, wut) {
	var that = dg('_'+side+'_LinkEr_'+part+'_'+num);
	if (isIE()) 
		that.style.display = wut?'block':'none';
	else
		that.setAttribute('style', wut?'':'display: none');	
	SwitchDisplay(side+'_LinkBodyContainer_'+part+'_'+num, wut);
}

function SetValAndDo(id, val, fc) {
	var that = dg(id);
	if ((that.value == val) && (fc != true))
		return;
	that.value = val;
	doDuty(that);
}

function InsertLinkToBox(side, part, num, txt, url, ttl, swc) {
	SetValAndDo('_'+side+'_LinkTxt_'+part+'_'+num, txt);
	SetValAndDo('_'+side+'_LinkUrl_'+part+'_'+num, url);
	dg('_'+side+'_LinkTtl_'+part+'_'+num).value = ttl;
	dg(side+'_LinkBody_'+part+'_'+num).setAttribute('title', ttl);	
	doDuty(dg('_'+side+'_PreSurr_'+part));
	doDuty(dg('_'+side+'_PstSurr_'+part));
	if (swc != null)
		SwitchLinkTR(side, part, num, swc);	
}

function ShowEditPartBox(eve, n, s) {
	var sf = s;
	if (global_lang == 'fa')
		s = (s=='R')?translateIt('Raast'):translateIt('Chap');
		else
			s = (s=='R')?'Right':'Left';
	n = (parseInt(n)+1)+'';
	try {
		if (global_lang == 'fa') {
			if ((dg('EditPartLegendN').innerHTML == getPersianDigit(n)) && (dg('EditPartLegendS').innerHTML == s)) {
				HideEditPartBox();
				return;
			}
		}
		else
			if ((dg('EditPartLegendN').innerHTML == n) && (dg('EditPartLegendS').innerHTML == s)) {
				HideEditPartBox();
				return;
			}
	} catch(e) {}
	if (global_isPathedHide) 
		alertPathedHide();	
	var side, part;
	try {
		side = dg('EditPartLegendS').innerHTML.charAt(0);
		part = dg('EditPartLegendN').innerHTML;
		if (global_lang == 'fa') {
			side = (side==translateIt('Re')?'R':'L');
			part = convertPersianDigit(part);
		}
		SwitchDisplay(side+'_EditPartBosTheDiv_'+part, 0);
	} catch(e) {}
	side = sf;
	part = parseInt(n);
	SwitchDisplay(side+'_EditPartBosTheDiv_'+part, 1);


	ChangeByInput('EditPartLegendN', 'innerHTML', (global_lang == 'fa')?getPersianDigit(n):n);
	ChangeByInput('EditPartLegendS', 'innerHTML', s);	
	var myX = getMyXY(eve, 0);
	var myY = getMyXY(eve, 1);
	myX += (side == 'L')?30:-670;
	if (myX < 0) 
		myX = 0;
	if (myX + 600 > window.screen.width-50)
		myX = window.screen.width-650;
	ChangeByInput('EditPartBox', 'top', (myY-10)+'px');
	ChangeByInput('EditPartBox', 'left', (myX)+'px');
	SwitchDisplay('EditPartBox', 1);
	SwitchSelectIE(0);	
}

function HideEditPartBox() {
	dg('EditPartLegendS').innerHTML = dg('EditPartLegendS').innerHTML.charAt(0)+'!';
	if (! isDivVisible('EditPartBox'))
		return;		
	SwitchDisplay('EditPartBox', 0);
	SwitchSelectIE(1);
	if (!isIE()) {
		window.blur();
		window.focus();	
	}
}

function CopyLink(side1, part1, num1, side2, part2, num2) {
	SetValAndDo('_'+side2+'_LinkTxt_'+part2+'_'+num2, dg('_'+side1+'_LinkTxt_'+part1+'_'+num1).value);
	SetValAndDo('_'+side2+'_LinkUrl_'+part2+'_'+num2, dg('_'+side1+'_LinkUrl_'+part1+'_'+num1).value);
	SetValAndDo('_'+side2+'_LinkTtl_'+part2+'_'+num2, dg('_'+side1+'_LinkTtl_'+part1+'_'+num1).value);
	var that = dg('_'+side1+'_LinkEr_'+part1+'_'+num1), wut;
	if (isIE())
		wut = (that.style.display == 'block');
	else
		wut = (that.getAttribute('style') == '');
	SwitchLinkTR(side2, part2, num2, wut);
}

function CopyBox(side, src, dst) {
	if (!isBoxVisible(side, dst))
		return;
	var max = (LinkLengthOnBox(side, src) > LinkLengthOnBox(side, dst))?LinkLengthOnBox(side, src):LinkLengthOnBox(side, dst);		
	SetValAndDo('_'+side+'_TitleTxt_'+dst, dg('_'+side+'_TitleTxt_'+src).value);
	for (var i=0; i<max; i++)	
		CopyLink(side, src, i, side, dst, i);
	var srcVal = dg('_'+side+'_linkNumForce_'+src).value;
	dg('_'+side+'_linkNumForce_'+dst).value = srcVal;
}

function BoxLength(side) {
	return parseInt(dg('_'+side+'_boxNumForce').value);
}

function BoxLengthByFor(side){
	var i;
	for (i=0; i<maxBoxNumOnSides; i++)
		if (!dg(side+'_PartDiv_'+i) || dg(side+'_PartDiv_'+i).style.display == 'none')
			break;
	return i;
}

function LinkLengthOnBox(side, part) {
	return parseInt(dg('_'+side+'_linkNumForce_'+part).value);
}

function LinkLengthOnBoxByFor(side, part) {
	var i;
	for (i=0; i<maxLinkNumBoxes; i++)
		if (!dg(side+'_LinkBodyContainer_'+part+'_'+i) || dg(side+'_LinkBodyContainer_'+part+'_'+i).style.display == 'none')
			break;
	return i;
}

function ClearBox(side, part) {
	AddTitleToBox(side, part, '');	

	InsertLinkToBox(side, part, 0, 'Sample Link', 'http://psyc.horm.org', 'Good Link!', 1);

	var max = LinkLengthOnBox(side, part);
	if (dg(side+'_PartDiv_'+(part+1)))
		var tmax = LinkLengthOnBox(side, part+1); 
	if (max < tmax)
		max = tmax;
	for (var i=1; i<max; i++)	
		InsertLinkToBox(side, part, i, '', '', '', 0);
	dg('_'+side+'_linkNumForce_'+part).value = 1;
}

//DDF
function AddTitleToBox(side, part, str) {
	SetValAndDo('_'+side+'_TitleTxt_'+part, str);
}

function ExpirePsycHodramaCookie() {
	var date = new Date();
	date.setTime(date.getTime()-(24*60*60*1000));
	document.cookie = "PsycHodrama=PsycHo!; expires="+date.toGMTString()+"; path=/";	
}

function sayGoodbyeToItAll() {
	if (global_didSomething) {
		return "You have unsaved works in PsycHo.";
	}
	/*
	if (! global_didSomething)
		return true;
	if (isIE()) {
		var saveStr;
		if (global_lang == 'fa')
			saveStr = translateIt('wanna save?');
		if (confirm('Do you want to save your work before leaving PsycHo?\n\n Press OK to save or Cancel to leave without saving'))
			WritePsycHodrama();
		else
			ExpirePsycHodramaCookie();	
	}
	else
	WritePsycHodrama();
	 */
}