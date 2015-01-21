/*********************************************************
 * Enhanced Color Picker for PsycHo [http://psyc.horm.org]
 * By Aideen NasiriShargh [http://i.horm.org]
 *
 * Based on:
 * + 4096 Color Wheel Version 2.1 by Jemima Pereira [http://jemimap.ficml.org/style/color/wheel.html]
 * + EasyRGB Conversion algorithms [http://www.easyrgb.com/math.php?MATH=M20#text20]
 * + ColorMatch 5K [http://colormatch.dk/cm5k.html]
 *********************************************************/

var ECP_mouseisDown = false; 
var theColour = "#FF0000", tC_RGB = new Array(255, 0, 0), tC_HSV = new Array(0, 100, 100); 

function deMoronize() {
	theColour = getFatherForECP(dg('CPwutProp').innerHTML, dg('CPwutObj').innerHTML);
	SwitchDisplay('SuggestColor', (theColour != ''));
	if (theColour != '') {
		var n2r;
		if (n2r = name2rgb(theColour)) 
			theColour = n2r;
		AnalyseColor(theColour, false);
	}

	var ua = navigator.userAgent.toLowerCase(); 
	var isIE = ((ua.indexOf("msie") != -1) && (ua.indexOf("opera") == -1) && (ua.indexOf("webtv") == -1)); 
	var versionMinor = parseFloat(navigator.appVersion); 
	if (isIE && versionMinor >= 4)
		versionMinor = parseFloat(ua.substring(ua.indexOf('msie ') + 5 ) );
		var isWin32 = ((ua.indexOf('win') != -1) && ( ua.indexOf('95') != -1 || ua.indexOf('98') != -1 || ua.indexOf('nt') != -1 || ua.indexOf('win32') != -1 || ua.indexOf('32bit') != -1) );
	if (!(isIE && (versionMinor == 5.5 || parseInt(versionMinor) >= 6) && isWin32))
		document.getElementById("wheel").innerHTML = '<a href="#PsycHo!" onmousemove="javascript:pickColor(); return false;" ' +
			'onmousedown="javascript: ECP_mouseisDown = true;" onmouseup="javascript: ECP_mouseisDown = false;"><img id="indic" ' +
				'src="images/indic.gif" style="position: absolute; zindex: 2; border-width: 0px;" /><img id="indic_gr" src="images/indic.gif" ' +
			'style="position: absolute; zindex: 2; border-width: 0px;" /><img id="wheelImg" src="images/hsvwheel.png" ' +
			'width="533" height="257" border="0"></a>';

	theColour = dg('ECP_myRGBS').value;
	tC_HSV = rgbs2hsv(theColour);
	tC_RGB = hsv2rgb(tC_HSV);
	hoverColor();
	window.document.getElementById("wheel").onmousemove = mouseMoved;
	window.document.getElementById("wheel").onmousedown = mouseMoved;
}

function hsv2rgb(Hdeg, S, V) {
	if (Hdeg.length && Hdeg.length == 3) {
		V = Hdeg[2]; S = Hdeg[1]; Hdeg = Hdeg[0]; 	
	}
	var H = Hdeg/360;     							
	S /= 100;
	V /= 100;
	if (S==0)        								
		return new Array(V*255, V*255, V*255);     	
	else {
		var var_h = H*6;
		var var_i = Math.floor(var_h);     		
		var var_1 = V*(1-S);
		var var_2 = V*(1-S*(var_h-var_i));
		var var_3 = V*(1-S*(1-(var_h-var_i)));
		var var_r, var_g, var_b;
		switch (var_i) {
			case 0: var_r=V ;		var_g=var_3; 	var_b=var_1; 	break;
			case 1: var_r=var_2; 	var_g=V;     	var_b=var_1;	break;
			case 2:	var_r=var_1; 	var_g=V;     	var_b=var_3;	break;
			case 3:	var_r=var_1; 	var_g=var_2; 	var_b=V;		break;
			case 4: var_r=var_3; 	var_g=var_1; 	var_b=V;		break;
			case 5:	var_r=V;     	var_g=var_1; 	var_b=var_2;	break;
		}
	}
	return new Array(Math.round(var_r*255), Math.round(var_g*255), Math.round(var_b*255));
}

function min(a, b, c) {
	return a<b?(a<c?a:c):(b<c?b:c);
}

function max(a, b, c) {
	return a>b?(a>c?a:c):(b>c?b:c);
}

function rgbs2hsv(s) {
	return rgb2hsv(parseInt(s.substring(1, 3), 16), parseInt(s.substring(3, 5), 16), parseInt(s.substring(5, 7), 16));
}

function rgb2hsv(R, G, B) { 
	var R, G, B, H, S, V;
	if (R.length && R.length == 3) {
		B = R[2]; G = R[1]; R = R[0]; 						
	}
	
	var var_R = (R/255), var_G = (G/255), var_B=(B/255);	
	var var_Min = min(var_R, var_G, var_B);					
	var var_Max = max(var_R, var_G, var_B);					
	var del_Max = var_Max - var_Min;						
	V = var_Max;
	if (del_Max == 0) {										
	   H = tC_HSV[0]/360;									
	   S = 0;
	}
	else {													
		S = del_Max/var_Max;
		var del_R = (((var_Max-var_R)/6) + (del_Max/2)) / del_Max;
		var del_G = (((var_Max-var_G)/6) + (del_Max/2)) / del_Max;
		var del_B = (((var_Max-var_B)/6) + (del_Max/2)) / del_Max;
		if (var_R == var_Max) 
			H = del_B - del_G;
		else if (var_G == var_Max) 
			H = (1/3)+del_R-del_B;
		else if (var_B == var_Max) 
			H = (2/3)+del_G-del_R;
		while (H<0) 
			H += 1;
		while (H>1)
			H -= 1;
	}
	H *= 360;
	S *= 100;
	V *= 100;
	return new Array(Math.round(H), Math.round(S), Math.round(V));
}

function rgb2hex(rgbary) {
	var temp, ret = "#";
	for (i=0; i<3; i++) {
		temp = parseInt(rgbary[i]).toString(16).toUpperCase();
		if (temp.length < 2) 
			temp = "0" + temp;
		ret += temp;
	}
  return ret;
}

function greyMoved(x, y) {
    var xside = (x<=533) ? x - 276 : 256;
    var yside = (y<=256) ? y : 256;
    var sat = (xside/256)*100;
    var val = (1 - (yside/256))*100;
    var hue = tC_HSV[0];
    tC_HSV = new Array(hue, sat, val);
    tC_RGB = hsv2rgb(tC_HSV);
    hoverColor();
    return false;
}

function xy2rgb(x, y) {
	var rgb = new Array(0, 0, 0);
	var cartx = x - 128;
	var carty = 128 - y;
	var rraw = Math.sqrt(cartx * cartx + carty * carty);   
	var rnorm = rraw/128;                       		   
	if (rraw != 0)
		if (rnorm > 1)			   						   
			rgb = new Array(255, 255, 255);
		else {
			var arad = Math.acos(cartx/rraw);           	
			var aradc = (carty>=0)?arad:2*Math.PI- arad;  	
			var adeg = 360*aradc/(2*Math.PI);  				
			var sat = 100, val = 100;
			if (rnorm >= .5)
				sat = (1 - ((rnorm - .5) *2))*100;
			else
				val = rnorm * 2 * 100;
			rgb = hsv2rgb(adeg, sat, val);			
		}
	return rgb;
}

function mouseMoved(e) {
	var mouseClick = (e)?(typeof e.button == "undefined" ? e.which : e.button):window.event.button;
	if ((mouseClick != 1 || (!e && window.event.srcElement.id != 'wheelImg')) && !ECP_mouseisDown)		
		return;
	var x, y;
	if (document.all) {
		x = event.offsetX;
		y = event.offsetY;
	}
	else 
		if (document.getElementById) {
			x = (e.pageX - document.getElementById("wheel").offsetLeft - document.getElementById("ColorPicker").offsetLeft);
			y = (e.pageY - document.getElementById("wheel").offsetTop - document.getElementById("ColorPicker").offsetTop);

		}
	if (x >= 276) {
		greyMoved(x, y);
		return false;
	}
	if (y > 256 || x < 0)
		return false;
	var thergb = xy2rgb(x, y);
	tC_RGB = thergb;
	tC_HSV = rgb2hsv(thergb);
	hoverColor();
	return false;
}

function pickColor() {
	var hue = tC_HSV[0];
	document.getElementById("wheel").style.backgroundColor = rgb2hex(hsv2rgb(hue, 100, 100));
}

function reHSV(thehsv, dh, ds, dv) {
	var ret = new Array(thehsv[0], thehsv[1], thehsv[2]);
	if (!ds) ds = 0;
	if (!dv) dv = 0;
	ret[0] = (ret[0] + dh) % 360;
	ret[1] += ds;
	while (ret[1] < 0) 		ret[1] += 100;
	while (ret[1] > 100) 	ret[1] -= 100;
	ret[2] += dv;
	while (ret[2] < 0) 		ret[2] += 100;
	while (ret[2] > 100) 	ret[2] -= 100;
	return ret;
}

function ComplementTheColor(theColour) {
	var tcc = rgbs2hsv(theColour);
	return (tcc[2] < 33)?"#999999":((tcc[2]<66)?"#CCCCCC":"#333333");
}

function AnalyseColor(theColour, plc) {
	tC_HSV = rgbs2hsv(theColour);
	var dH = tC_HSV[0], dS = tC_HSV[1], dV = tC_HSV[2];
	var dset1 = new Array(0, 0, 0), dset2 = new Array(0, 0, 0);

	if ((dH>=0)&&(dH<30)) {
		dset1[0] = dset2[0] = 20;
		dset2[2] = dV>70?-30:30;
	}
	if ((dH>=30)&&(dH<60)) {
		dset1[0] = dset2[0] = 150;
		dset1[1] = -30;
		dset1[2] = -20;
		dset2[1] = -70;
		dset2[2] = 20;	
	}
	if ((dH>=60)&&(dH<180)) {
		dset1[0] = dset2[0] = -40;
		dset2[2] = dV>70?-30:30;
	}
	if ((dH>=180)&&(dH<220)) {
		dset1[0] = -170;
		dset2[0] = -160;
		dset2[2] = dV>70?-30:30;
	}
	if ((dH>=220)&&(dH<300)) {
		dset1[1] = dset2[1] = -60;
		dset2[2] = dV>70?-30:30;
	}
	if (dH>=300){
		dset1[0] = dset2[0] = 20;
		dset1[1] = dset2[1] = dS>50?-40:40;
		dset2[2] = dV>70?-30:30;
	}
	setECPCell('1', plc, theColour);
	for (var i=0; i<6; i++)
		setECPCell((i+1)+'', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 60*i, (dS<10)?10-dS:0, (dV<15)?15-dV:0))));
	setECPCell('7', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 180, dV-dS, dS-dV))));
	setECPCell('8', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 0, 0, (tC_HSV[2]>70)?-30:30))));
	setECPCell('9', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, dset1[0], dset1[1], dset1[2]))));
	setECPCell('10', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, dset2[0], dset2[1], dset2[2]))));
	setECPCell('11', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, -dH, -dS, 0))));
	setECPCell('12', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, -dH, -dS, 100-2*dV))));

	for (var i=0; i<6; i++)
		setECPCell((i+13)+'', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 0, -dS+(i+1)*100/6, (dV<15)?15-dV:0))));
	for (var i=0; i<6; i++)
		setECPCell((i+19)+'', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 0, 0, -dV+100-i*100/6))));

	if (dS == 0) {
		setECPCell('10', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV,   0, -dS+20, -dV+15))));
		setECPCell('11', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 120, -dS+20, -dV+15))));
		setECPCell('12', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 240, -dS+20, -dV+15))));	
		for (var i=0; i<12; i++)
			setECPCell((i+13)+'', plc, rgb2hex(hsv2rgb(reHSV(tC_HSV, 0, 0, -dV+100-i*100/15))));
	}		
	
	tC_HSV = rgb2hsv(tC_RGB);
}

function hoverColor() {
	var theColour = rgb2hex(tC_RGB), thatColour;
	var dH = tC_HSV[0], dS = tC_HSV[1], dV = tC_HSV[2];
	var len = 0, rad = 128, myVal;
	if (dS != 0 || dV != 0)
		len = (dS>=dV)?(dV/dS):(2-dS/dV);
	
	var degrad = (dH*Math.PI/180);
	var centx = Math.round(128-Math.sin(degrad)*(64*len))-3;
	var centy = Math.round(128+Math.cos(degrad)*(64*len))-3;

	var gry = 256 * (1 - dV/100)-3;
	var grx = 276 + (dS*256/100)-3;

	document.getElementById('indic').style.top = (centx)+'px';
	document.getElementById('indic').style.left = (centy)+'px';
	document.getElementById('indic').src = (len>1)?'images/indic.gif':'images/indic_.gif';
	document.getElementById('indic_gr').style.top = (gry)+'px';
	document.getElementById('indic_gr').style.left = (grx)+'px';
	document.getElementById('indic_gr').src = (grx-276>gry)?'images/indic.gif':'images/indic_.gif';

	for (var i=0; i<3; i++) {
		document.getElementById('ECP_my'+('HSV'.charAt(i))).value = Math.round(tC_HSV[i]);
		myVal = Math.round(tC_RGB[i]);
			if (document.getElementById('ECP_my'+('RGB'.charAt(i))).value && document.getElementById('ECP_my'+('RGB'.charAt(i))).value.charAt(0) == '#') {
			myVal = myVal.toString(16).toUpperCase();
			if (myVal.length < 2)	myVal = '0'+myVal;
			myVal = '#' + myVal;
		}
		document.getElementById('ECP_my'+('RGB'.charAt(i))).value = myVal;
	}

	document.getElementById('ECP_myColorPrev').style.backgroundColor = theColour;
	document.getElementById('ECP_myRGBS').value = theColour;	

	IPickColor(theColour);
	pickColor();
	return false;
}

function setECPCell(x, isfatheric, v) {
	var prefix = (isfatheric)?'F':'C';
	document.getElementById('ECP_'+prefix+'_ColDiv'+x).style.backgroundColor = v;
	document.getElementById('ECP_'+prefix+'_ColDiv'+x).setAttribute('title', v);
	document.getElementById('ECP_'+prefix+'_Sinput'+x).innerHTML = v;	
}

function getValFromInput(s, maxv) {
	var ret = 0;
	var val = document.getElementById(s).value;
	var base = 10;
	if (val.charAt(0) == '#') {
		base = 16;
		val = val.substring(1, val.length);
	}
	if (val && parseInt(val, base))
		ret = parseInt(val, base);
	if (maxv && ret > maxv)
		ret = maxv;
	return ret;
}

function resetByHSV() {
	tC_HSV = Array(getValFromInput('ECP_myH', 360), getValFromInput('ECP_myS', 100), getValFromInput('ECP_myV', 100));
	tC_RGB = hsv2rgb(tC_HSV);
    hoverColor();
    return false;
}

function resetByRGB() {
	var theRGB = new Array();
	for (var i=0; i<3; i++) 
		theRGB[i] = getValFromInput('ECP_my'+('RGB').charAt(i), 255);
	tC_RGB = theRGB;
	tC_HSV = rgb2hsv(tC_RGB);
    hoverColor();
    return false;
}

function resetByRGBS(s) {
	if (s.tagName && s.tagName.toLowerCase() == 'div') 
		s = document.getElementById(s.id.substring(0, 6)+'Sinput'+s.id.substring(12, s.id.length)).innerHTML;
	if (s.charAt(0) == '#')
		s = s.substring(1, s.length);
	var re = /^([\da-f]{6})$/i;
	if (re.test(s)) {
		tC_RGB = new Array(parseInt(s.substring(0, 2), 16), parseInt(s.substring(2, 4), 16), parseInt(s.substring(4, 6), 16));
		tC_HSV = rgb2hsv(tC_RGB);
	    hoverColor();
	}
    return false;
}

function ECP_incdec(wut, how, stt) {
	if (!stt)
		stt = 250;
	if (! yetETCChg)
		return;
	var method = (wut =='H' || wut == 'S' || wut == 'V')?'HSV':'RGB';
	var num = 0, wholes = 'HSVRGB';
	for (var i=0; i<6; i++)
		if (wut == wholes.charAt(i))
			num = i%3;
	if (method == 'RGB') {
		if (tC_RGB[num]+how <= 255 && tC_RGB[num]+how >= 0) {
			tC_RGB[num] += how;
			tC_HSV = rgb2hsv(tC_RGB);
			hoverColor();
		}
	}
	else 
		if (wut == 'H') {
			tC_HSV[0] = (tC_HSV[0]+how+360)%360;
			tC_RGB = hsv2rgb(tC_HSV);
			hoverColor();
		}
		else {
			var maxv = new Array(360, 100, 100);
			if (tC_HSV[num]+how <= maxv[num] && tC_HSV[num]+how >= 0) {
				tC_HSV[num] += how;
				tC_RGB = hsv2rgb(tC_HSV);
				hoverColor();
			}
	}

	if (yetETCChg)
		setTimeout('ECP_incdec(\''+wut+'\', '+how+', 50)', stt*(1+isIE()));
}