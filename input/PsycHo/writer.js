var yetETCChg = false;

function w_help(txt, dest, radioChk) {
	if (dest == '' || !dest)
		dest = txt;
	if (radioChk == '' || !radioChk)
		document.write(txt);
	else
		w_selRadio(radioChk, txt);
	document.write('<a href="#PsycHo!" class="helpA" tabindex="1" title="What is \''+dest+'\'?" ');
	document.write('onclick="ShowHelp(\''+dest+'\', event)">?</a>');
}

function w_colorInp(txt, def, size) {
	if (def == '' || !def)
		def = 'black';
	if (size == '' || !size)
		size = '4';
	document.write('<input id="'+txt+'" type="text" class="inputText" size="'+size+'" value="'+def+'" 	onkeyup="doDuty(this);" onclick="doDuty(this);"></input>');
	document.write('&nbsp;<a tabindex="200" id="'+txt+'A" href="#PsycHo!" onclick="doDuty(this, event);">');
		document.writeln('&nbsp;<img alt="CP" width="16" height="16" src="images/picker_0.gif" style="border: 0px solid black" title="Colors List" /></a>');
}

function w_selRadio(wut, txt, ttl, flip) {
		document.write('<a href="#PsycHo!" id="selectorTxt_'+wut+'" style="color: black" tabindex="200" '+((ttl && ttl.length)?'title="'+ttl+'" ':' ')+'onclick="SelRadio(\''+wut+(flip==true?'\', true':'\'')+');">'+txt+'</a>');
}

function w_tripleBg(txt) {
	document.write('<input id="'+txt+'BackIsColorEr" name="'+txt+'BackgroundColorTextureImage" class="checkBox" ');
	document.write('type="radio" onclick="doDuty(this);" checked="checked">');
	w_selRadio(txt+'BackIsColorEr', 'Color');
	document.writeln('</input>');
	document.write('<input id="'+txt+'BackIsTextureEr" name="'+txt+'BackgroundColorTextureImage" class="checkBox" ');
	document.writeln('type="radio" onclick="doDuty(this);">');
	w_selRadio(txt+'BackIsTextureEr', 'Tile');
	document.writeln('</input>');
	document.write('<input id="'+txt+'BackIsImageEr" name="'+txt+'BackgroundColorTextureImage" class="checkBox" ');
	document.writeln('type="radio" onclick="doDuty(this);">');
	w_selRadio(txt+'BackIsImageEr', 'Image');
	document.writeln('</input>');
}

function w_tripleBgInner(txt, def, pad) {
	if (pad == '' || !pad)
		pad = 5;
	else
		pad = parseInt(pad);
	document.writeln('<div id="'+txt+'BackgroundIsColor" style="display: block;"><table cellpadding="0" cellspacing="0"><tr><td>');
	w_help('Color');
	document.write(':</td><td><span style="padding-left: '+pad+'px"></span>');
	w_colorInp(txt+'BackColorEr', def, 7);
	document.writeln('</td></tr></table></div>');
	
	document.writeln('<div id="'+txt+'BackgroundIsTexture" style="display: none;"><table cellpadding="0" cellspacing="0"><tr><td>');
	w_help('URL', 'Texture URL');
	document.write(':&nbsp;&nbsp;</td><td>');
	document.write('<span style="padding-left: '+(pad+8)+'px"></span>');
	document.writeln('<input id="'+txt+'BackTextureEr" size="15" type="text" class="inputText" value="http://" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>	');
	document.writeln('</td></tr></table></div>');
	
	document.writeln('<div id="'+txt+'BackgroundIsImage" style="display: none;"><table cellpadding="0" cellspacing="0"><tr><td>');
	w_help('URL', 'Background Image URL');
	document.write(':&nbsp;&nbsp;</td><td><span style="padding-left: '+(pad+8)+'px"></span>');
	document.writeln('<input id="'+txt+'BackImageEr" size="15" type="text" class="inputText" value="http://" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>	');
	document.writeln('</td></tr></table></div>');
}

function w_fontFamily(txt) {
	document.writeln('<span style="padding-left: 5px"></span><select id="'+txt+'FontFamily" onchange="doDuty(this);">');
		document.writeln('<option value="Tahoma, sans-serif" selected="selected">Tahoma</option><option value="Arial, Helvetica">Arial</option>');
	document.writeln('<option value="Times new roman, courier, serif">Times</option><option value="Georgia, fantasy">Georgia</option>');
	document.writeln('<option value="Courier new, monospace">Courier</option>');
	document.writeln('</select>');
}

function w_fontSize(txt, start, finish, def) {
	document.writeln('<span style="padding-left: 5px"></span><select id="'+txt+'FontSizeEr" onchange="doDuty(this);">');
	var valz = new Array(0, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 64, 72, 96);
	for (i=0; i<valz.length; i++)
		if (valz[i]>=start && valz[i]<=finish) {
			var tv = (Math.floor((valz[i]*100)/8)/100);
			document.writeln('<option value="'+tv+'em"'+(valz[i]==def?' selected="selected"':'')+'>'+(valz[i])+' pt</option>');
		}
	document.writeln('</select>');
}

function w_fontBIU(txt, sep, def, wut) {
	if (!sep || sep == '')
		sep = '&nbsp;';
	sep = sep+sep+sep;
	if (!def || def == '')
		def = '   ';

	document.write(sep+'<input id="'+txt+'FontBoldEr" '+((def.charAt(0)==' ')?'':'checked="checked"'));
		document.write(' class="checkBox" type="checkbox" style="display: none" value="'+('bold')+'" onclick="doDuty(this);"></input>');
		w_selRadio(txt+'FontBoldEr', '<img width="17" height="17" src="barimg/i_bold.gif" alt="B" id="'+txt+'BoldErImg" style="border: 1px solid #EEE;" />', 'Bold', true);
	document.write(sep+'<input id="'+txt+'FontItalicEr" '+((def.charAt(1)==' ')?'':'checked="checked"'));
		document.write(' class="checkBox" type="checkbox" style="display: none" value="'+('italic')+'" onclick="doDuty(this);"></input>');
		w_selRadio(txt+'FontItalicEr', '<img width="17" height="17" src="barimg/i_italic.gif" alt="I" id="'+txt+'ItalicErImg" style="border: 1px solid #EEE;" />', 'Italic', true);
	if (wut != 'BI') {
			document.write(sep+'<input id="'+txt+'FontUnderlineEr" '+((def.charAt(2)==' ')?'':'checked="checked"')+' class="checkBox" type="checkbox" ');
		document.write('style="display: none" value="'+('underline')+'" onclick="doDuty(this);"></input>');
		w_selRadio(txt+'FontUnderlineEr', '<img width="17" height="17" src="barimg/i_underline.gif" alt="U" id="'+txt+'UnderlineErImg" style="border: 1px solid #EEE;" />', 'Underline', true);		
	}
PushImgBut(txt+'BoldErImg', 		def.charAt(0)=='B');
PushImgBut(txt+'ItalicErImg', 		def.charAt(1)=='I');
PushImgBut(txt+'UnderlineErImg', 	def.charAt(2)=='U');
}

function w_border(txt, def, pad, className) {
	if (!pad)
		pad = 0;
	else
		pad = parseInt(pad);
	document.writeln('<table><tr class="'+className+'"><td>');
	w_help('Style', 'Border Style');
	document.writeln(':</td><td colspan="2"><span style="padding-left: '+pad+'px"></span>');
	document.writeln('<select id="'+txt+'BorderStyleEr" onchange="doDuty(this);"><option value="none">None&nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</option>');
	document.write('<option value="solid" selected="selected">Solid&nbsp; [-----]</option>	<option value="dashed">Dashed [- - -]</option>');
	document.writeln('<option value="dotted">Dotted [. . .]</option><option value="double">Double [=====]</option>');
	document.writeln('</select>');
	document.writeln('</td></tr><tr><td>');
	w_help('Size', 'Border Size');
	document.writeln(':</td><td><span style="padding-left: '+(pad*1.1)+'px">');
	document.writeln('<select id="'+txt+'BorderWidthEr" onchange="doDuty(this);">');
	var valz = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
	for (i=0; i<valz.length; i++)
		document.writeln('<option value="'+valz[i]+'px"'+(valz[i]==1?' selected="selected"':'')+'>'+valz[i]+' px</option>');
	document.writeln('</select>');
	document.writeln('</td><td valign="bottom">');
	w_colorInp(txt+'BorderColorEr', def);
	document.writeln('</td></tr></table>');
}

function w_optionInc(txt, start, finish, rate, def) {
	document.writeln('<select id="'+txt+'" onchange="doDuty(this);">');
	for (i=start; i<finish; i+=rate)
		document.writeln('<option value="'+i+'px"'+(i==def?' selected="selected"':'')+'>'+i+' px</option>');
	document.writeln('</select>');
}

function w_incDec(txt) {
	document.write('<a href="#PsycHo!" tabindex="200" id="'+txt+'Dec" onclick="doDuty(this);">');
		document.write('<img alt="&#8595;" width="9" height="8" onmouseover="this.src=\'images/downarrow_.gif\'" onmouseout="this.src=\'images/downarrow.gif\'" src="images/downarrow.gif"></a>');
	document.write('&nbsp;|&nbsp;');
	document.write('<a href="#PsycHo!" tabindex="200" id="'+txt+'Inc" onclick="doDuty(this);">');
		document.writeln('<img alt="&#8593;" width="9" height="8" onmouseover="this.src=\'images/uparrow_.gif\'" onmouseout="this.src=\'images/uparrow.gif\'" src="images/uparrow.gif"></a>');
}

function w_textAlignTriple(txt, def, sep) {
	if (!def || def == '')
		def = 'L';
	if (!sep || sep == '')
		sep = '&nbsp;&nbsp;';
	document.write('&nbsp;<input name="'+txt+'AlignEr" id="'+txt+'AlignErLeft" ');
		document.write('class="checkBox" style="display: none;" type="radio" '+((def == 'L')?'checked="checked"':'')+' onclick="doDuty(this);"></input>');
		w_selRadio(txt+'AlignErLeft', '<img width="18" height="18" src="barimg/i_align_left.gif" alt="L" id="'+txt+'AlignErLeftImg" style="border: 1px solid #EEE;" />', 'Left');
	document.write(sep+'<input name="'+txt+'AlignEr" id="'+txt+'AlignErCenter" ');
		document.write('class="checkBox" style="display: none;" type="radio" '+((def == 'C')?'checked="checked"':'')+' onclick="doDuty(this);"></input>');
		w_selRadio(txt+'AlignErCenter', '<img width="18" height="18" src="barimg/i_align_center.gif" alt="C" id="'+txt+'AlignErCenterImg" style="border: 1px solid #EEE;" />', 'Center');
	document.write(sep+'<input name="'+txt+'AlignEr" id="'+txt+'AlignErRight" ');
		document.write('class="checkBox" style="display: none;" type="radio" '+((def == 'R')?'checked="checked"':'')+' onclick="doDuty(this);"></input>');
		w_selRadio(txt+'AlignErRight', '<img width="18" height="18" src="barimg/i_align_right.gif" alt="R" id="'+txt+'AlignErRightImg" style="border: 1px solid #EEE;" />', 'Right');
}

function w_doubleDirection(txt) {
	document.write('&nbsp;<input id="'+txt+'DirectionIsLTREr" name="'+txt+'DirectionEr"');
	document.writeln('class="checkBox" style="display: none;" type="radio" checked="checked" onclick="doDuty(this);"></input>');
		w_selRadio(txt+'DirectionIsLTREr', '<img width="18" height="18" src="barimg/i_ltr.gif" alt="L" id="'+txt+'DirLTRErImg" style="border: 1px solid #EEE; " />', 'Left-to-Right');
	document.writeln('&nbsp;');
	document.write('<input id="'+txt+'DirectionIsRTLEr" name="'+txt+'DirectionEr"');
	document.writeln('class="checkBox" style="display: none;" type="radio" onclick="doDuty(this);"></input>');
		w_selRadio(txt+'DirectionIsRTLEr', '<img width="18" height="18" src="barimg/i_rtl.gif" alt="R" id="'+txt+'DirRTLErImg" style="border: 1px solid #EEE; " />', 'Right-to-Left');
}

function w_lineHeight(txt) {
	document.writeln('<span style="padding-left: 5px"></span><select id="'+txt+'LineHeightEr" onchange="doDuty(this);">');
	document.writeln('<option value="80%">80%</option><option value="100%">100%</option>');
		document.writeln('<option value="120%">120%</option><option value="140%">140%</option><option selected="selected" value="150%">150%</option>');
	document.writeln('<option value="160%">160%</option><option value="180%">180%</option><option value="200%">200%</option>');
	document.writeln('<option value="220%">220%</option><option value="240%">240%</option>');	
	document.writeln('</select>');
}

function w_sideBorder(txt, def) {
	document.writeln('<table><tr class="Enhanced"><td>');							
	document.writeln('<select id="'+txt+'BorderStyleEr" onchange="doDuty(this);"><option value="none">None&nbsp;&nbsp;</option>');
	document.write('<option value="solid" selected="selected">Solid&nbsp;</option>	<option value="dashed">Dashed</option>');
	document.writeln('<option value="dotted">Dotted</option><option value="double">Double</option>');
	document.writeln('</select>');	
	document.writeln('</td></tr><tr><td>');
	
	document.writeln('<select id="'+txt+'BorderWidthEr" onchange="doDuty(this);">');
	var valz = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
	for (i=0; i<valz.length; i++)
		document.writeln('<option value="'+valz[i]+'px"'+(valz[i]==1?' selected="selected"':'')+'>'+valz[i]+' px&nbsp;&nbsp;</option>');
	document.writeln('</select>');
	
	document.writeln('</td></tr><tr><td>');	
	w_colorInp(txt+'BorderColorEr', def, 6);	
	document.writeln('</td></tr></table>');		
}

function w_sideTripleBg(txt) {
	document.writeln('<select id="'+txt+'BackBackEr" onchange="doDuty(dg(this.value));">');
		document.write('<option value="'+txt+'BackIsColorEr" id="'+txt+'BackIsColorEr" class="checkBox" selected="selected">Color&nbsp;</option>');
	document.write('<option value="'+txt+'BackIsTextureEr" id="'+txt+'BackIsTextureEr" class="checkBox">Tile</option>');
	document.write('<option value="'+txt+'BackIsImageEr" id="'+txt+'BackIsImageEr" class="checkBox">Image</option>');
	document.writeln('</select>');
}

function w_sideTripleBgInner(txt, def) {
	document.writeln('<div id="'+txt+'BackgroundIsColor" style="display: block;">');
	w_colorInp(txt+'BackColorEr', def, 6);
	document.writeln('</div>');
	
	document.writeln('<div id="'+txt+'BackgroundIsTexture" style="display: none;">');
	document.writeln('<input id="'+txt+'BackTextureEr" size="9" type="text" class="inputText" value="http://" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>	');
	document.writeln('</div>');
	
	document.writeln('<div id="'+txt+'BackgroundIsImage" style="display: none;">');
	document.writeln('<input id="'+txt+'BackImageEr" size="9" type="text" class="inputText" value="http://" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>	');
	document.writeln('</div>');
}

function w_sideTextAlignTriple(txt) {
	document.write('&nbsp;');
	w_textAlignTriple(txt, 'C', '&nbsp;');
	return;
	document.writeln('<select id="'+txt+'AlignEr" onchange="doDuty(dg(this.value));">');
	document.write('<option value="'+txt+'AlignErLeft" id="'+txt+'AlignErLeft" class="checkBox"');
	document.writeln('>Left</option>');
	document.write('<option value="'+txt+'AlignErCenter" id="'+txt+'AlignErCenter" class="checkBox"');
	document.writeln(' selected="selected">Center</option>');
	document.write('<option value="'+txt+'AlignErRight" id="'+txt+'AlignErRight" class="checkBox"');
	document.writeln('>Right</option>');
	document.writeln('</select>');
}

function w__linkerSideTR(side, part, num, deftxt, defurl, defttl) {
	if (!deftxt) deftxt = '';
	if (!defurl) defurl = '';
	if (!defttl) defttl = '';		
	document.writeln('<tr id="_'+side+'_LinkEr_'+part+'_'+num+'" style="'+((num==0)?'':'display: none;')+'" >');
	document.writeln('<td>Link '+(num+1)+':</td>');
		document.writeln('<td><input id="_'+side+'_LinkTxt_'+part+'_'+num+'" type="text" class="inputText" size="20" value="'+deftxt+'" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>');
		document.writeln('<a title="Add Image" href="#PsycHo!" onclick="doDuty(this, event);" id="_'+side+'_addImg_'+part+'_'+num+'"><img width="16" height="16" alt="IMG" style="border: 0px solid red; position: relative; top: 2px;" src="images/img.gif" /></a></td>');
		document.writeln('<td><input id="_'+side+'_LinkUrl_'+part+'_'+num+'" type="text" class="inputText" size="15" value="'+defurl+'" onkeyup="doDuty(this);" onclick="doDuty(this);"></input></td>');
		document.writeln('<td><input id="_'+side+'_LinkTtl_'+part+'_'+num+'" type="text" class="inputText" size="15" value="'+defttl+'" onkeyup="doDuty(this);" onclick="doDuty(this);"></input></td>');
		document.writeln('<td valign="top">&nbsp;<a title="Insert one link below" href="#PsycHo!" onclick="doDuty(this, event);" id="_'+side+'_InsLink_'+part+'_'+num+'">');
		document.writeln('<img width="16" height="16" alt="INS" onmouseover="this.src=\'images/ins_.gif\'" onmouseout="this.src=\'images/ins.gif\'" style="margin-top: 1px;" src="images/ins.gif" /></a></td>');
		document.writeln('<td valign="top">&nbsp;<a title="Remove this link" href="#PsycHo!" onclick="doDuty(this, event);" id="_'+side+'_RemLink_'+part+'_'+num+'">');
		document.writeln('<img width="16" height="16" alt="DEL" onmouseover="this.src=\'images/del_.gif\'" onmouseout="this.src=\'images/del.gif\'" style="margin-top: 1px;" src="images/del.gif" /></a></td>');
	document.writeln('</tr>');
}

function w__BoxControlPanel(side, num) {
	document.writeln('<div class="psychoedContainer">');
	document.writeln('<div class="PsycHoCommander" style="margin-bottom: 1px">');
	document.writeln('<table width="100%" cellpadding="0" cellspacing="0"><tr>');
	document.writeln('<td style="text-align: center;" width="50%">');
	document.writeln('<b>Part #'+(num+1)+'</b>');
	document.writeln('</td><td style="text-align: right;">');
	document.writeln('<a href="#PsycHo!" id="_'+side+'_EditThisPart_'+num+'" onclick="doDuty(this, event);" title="Edit this part">');
		document.writeln('<img width="16" height="16" alt="EDT" onmouseover="this.src=\'images/edt_.gif\'" style="background-color: #F0F4F8" onmouseout="this.src=\'images/edt.gif\'" style="margin-top: 1px;" src="images/edt.gif" /></a>');
	document.writeln('</a>');
	document.writeln('</td><td style="text-align: right;">');
	document.writeln('<a href="#PsycHo!" id="_'+side+'_AddOneBox_'+num+'" onclick="doDuty(this);" title="Insert one part below">');
		document.writeln('<img width="16" height="16" alt="INS" onmouseover="this.src=\'images/ins_.gif\'" style="background-color: #F0F4F8" onmouseout="this.src=\'images/ins.gif\'" style="margin-top: 1px;" src="images/ins.gif" /></a>');
	document.writeln('</a>');
	document.writeln('</td><td style="text-align: right;">');
	document.writeln('<a href="#PsycHo!" id="_'+side+'_RemoveThisBox_'+num+'" onclick="doDuty(this);" title="Remove this part">');
		document.writeln('<img width="16" height="16" alt="DEL" onmouseover="this.src=\'images/del_.gif\'" style="background-color: #F0F4F8" onmouseout="this.src=\'images/del.gif\'" style="margin-top: 1px;" src="images/del.gif" /></a>');
	document.writeln('</a>');
	document.writeln('</td></tr></table></div></div>');
}

function w__PartSep(side, num) {
	document.writeln('<div id="'+side+'_PartSepDiv_'+num+'" style="height: 30px;">');
		document.writeln('<div id="'+side+'_PartSepSemiDiv_'+num+'" style="margin-bottom: 15px; height: 15px; border-bottom: 1px solid black; font-size: 1pt;"></div>');
	document.writeln('</div>');
}

function w__oneLinkBody(side, part, num, deftxt, defurl, defttl) {
	document.write('<div style="display: '+((num==0)?'block':'none')+'; " id="'+side+'_LinkBodyContainer_'+part+'_'+num+'">');
	document.write('<span id="'+side+'_LinkPreSurr_'+part+'_'+num+'">'+'</span>');
		document.write('<span style="display: '+((deftxt == '')?'inline':'none')+';" id="'+side+'_LinkBodyButText_'+part+'_'+num+'">'+deftxt+'</span>');
		document.write('<a style="display: '+((deftxt == '')?'none':'inline')+';" id="'+side+'_LinkBody_'+part+'_'+num+'" title="'+defurl+'" href="'+defttl+'">'+deftxt+'</a>');
	document.write('<span id="'+side+'_LinkPstSurr_'+part+'_'+num+'">'+'</span>');
	document.write('</div>');
}

function w__partDiv(side, part, disp) {
	if (!disp)
		disp = 0;
	document.writeln('<div id="'+side+'_PartDiv_'+part+'" style="display: '+((disp)?'block':'none')+';">');
	if (part > 0)
		w__PartSep(side, part);
	w__BoxControlPanel(side, part);
	document.writeln('<div id="'+side+'_DefaultDiv_'+part+'" class="SideDefaultDivClass">');
	document.writeln('<div id="'+side+'_Title_'+part+'" class="SideTitleClass"></div>');
	document.writeln('<div id="'+side+'_Main_'+part+'" style="margin-top: 0px">');
	w__oneLinkBody(side, part, 0, 'Sample Link', 'http://psyc.horm.org', 'Good Link!');
	for (var i=1; i<maxLinkNumBoxes; i++)
		w__oneLinkBody(side, part, i);
	document.writeln('</div></div></div>');
}

function w__EditPartTheDiv(side, part) {
	document.writeln('<div id="'+side+'_EditPartBosTheDiv_'+(part+1)+'" style="display: none;">');
	document.writeln('<table width="100%" cellspacing="0" cellpadding="0"><tr><td width="50%">');
	document.writeln('<fieldset><legend>');
	w_help('Title', 'Title Text on SideBar');
	document.writeln('</legend><table width="100%"><tr><td>Text');
	document.write(':</td><td>&nbsp;&nbsp;&nbsp;<input id="_'+side+'_TitleTxt_'+part+'" ');
	document.writeln('type="text" class="inputText" size="20" value="" onkeyup="doDuty(this);" onclick="doDuty(this);"></input></td>');
	document.writeln('</tr></table></fieldset></td><td>');

	document.writeln('<fieldset><legend>');
	w_help('Surrounders', 'Link surrounders');
	document.writeln('</legend><table width="100%"><tr><td>');
		document.writeln('Prefix:&nbsp;<input id="_'+side+'_PreSurr_'+part+'" type="text" class="inputText" size="8" value="" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>');
	document.writeln('</td><td>');
		document.writeln('Postfix:&nbsp;<input id="_'+side+'_PstSurr_'+part+'" type="text" class="inputText" size="8" value="" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>');
	document.writeln('</td></tr></table></fieldset>');

	document.writeln('</td></tr></table>');
	
		document.writeln('<input style="display: none" id="_'+side+'_linkNumForce_'+part+'" type="text" value="1" onkeyup="doDuty(this);" onclick="doDuty(this);"></input>');
	
	document.writeln('<fieldset style="padding: 0px 10px 10px 15px"><legend>');
	w_help('Links', 'Links overall');
	document.writeln('</legend><table cellpadding="0" cellspacing="0" width="100%" style="text-align: center">');
	document.writeln('<tr><td>&nbsp;</td><td>');
	w_help('Text', 'Link Text');
	document.writeln('</td><td>');
	w_help('Destination', 'Link Destination');
	document.writeln('</td><td>');
	w_help('Title', 'Link Title');
	document.writeln('</td><td>&nbsp;</td><td>&nbsp;</td></tr>');
	document.writeln('<tr><td colspan="6"><div class="BRdiv"></div></td></tr>');
	w__linkerSideTR(side, part, 0, 'Sample Link', 'http://psyc.horm.org', 'Good Link!');
	for (var i=1; i<maxLinkNumBoxes; i++)	
		w__linkerSideTR(side, part, i);
	document.writeln('</table></fieldset></div>');
}

function GiveColor(R, G, B) {
	hx = '0369CF';
	return (hx.charAt(R)+hx.charAt(G)+hx.charAt(B));
}

function WriteACellOfCP(tempStr, wut) {
	atempStr = '<tt>&nbsp;</tt>';
		document.writeln('<td onclick="IPickColor(\''+tempStr+'\');" style="cursor: hand; border: 0px solid #333; width: 8em; background-color:#'+tempStr+';" id="AColor_'+wut+'_'+tempStr+'">');
	document.writeln('<div style="width: 100%; cursor: pointer; " onclick="IPickColor(\''+tempStr+'\');">');
	document.writeln('<a title="[#'+tempStr+']" href="#PsycHo!" ');
	document.writeln('onclick="IPickColor(\''+tempStr+'\');">'+atempStr+'</a>');
	document.writeln('</div>');
	document.writeln('</td>');
}

function WriteColorsByHue() {
	var i, j, k, tempStr;
	
	document.writeln('<table><tr><td>');
	for (i=0; i<6; i++) {
		document.writeln('<table cellspacing="0" cellpadding="0" style="margin-bottom: 5px;"><tr>');
		for (j=0; j<6; j++) {
			for (k=0; k<6; k++)
				WriteACellOfCP(GiveColor(i, j, k), 'H'); 	
			document.writeln('</tr><tr>');
		}
		document.writeln('</tr></table></td><td>');
	}
	document.writeln('</td></tr></table>');	
}

function WriteColorsBySat() {
	var arr2w = new Array();
									
	function fixRGB(c1, c2, c3) {
		var tmp = new Array();
		var i, j, flag;				

		tmp[tmp.length] = GiveColor(c3, c2, c1);
		tmp[tmp.length] = GiveColor(c1, c3, c2);
		tmp[tmp.length] = GiveColor(c2, c1, c3);
		tmp[tmp.length] = GiveColor(c3, c1, c2);
		tmp[tmp.length] = GiveColor(c2, c3, c1);
		tmp[tmp.length] = GiveColor(c1, c2, c3);
		for (i=0; i<6; i++) {
			flag = true;
			for (j=0; j<i; j++)
				flag &= (tmp[i] != tmp[j]);
			if (flag)
				arr2w[arr2w.length++] = tmp[i];
		}
	}

	for (i=0; i<6; i++)
		for (j=0; j+i<6; j++)
			for (k=j; k<=j+i; k++)
				fixRGB(j, k, j+i);

	var nArr = arr2w.length;
	var ln = 0, thisSession = 0;
	var sessions = new Array('1', '5', '8', '9', '8', '5');
	var map	= new Array(2, 5, 0, 3, 1, 4, 2, 5);

	document.writeln('<table cellpadding="1"><tr><td>');

	for (j=0; j<nArr; j++) {
		if (j%6==0 && ln == 0)
			document.writeln('<table style="margin-bottom: 0px; border: 0px solid black;" cellspacing="0" cellpadding="0"><tr>');
		var k = j;
		tempStr = arr2w[6*(Math.floor(k/6))+map[k%6]];
		if (j<6) tempStr = GiveColor(j, j, j);
		WriteACellOfCP(tempStr, 'S');
		if (j%6 == 5) {
			ln++;
			if (ln == sessions[thisSession]) {
				thisSession++;
				ln = 0;
				document.writeln('</tr></table>');
				if (thisSession == 3 || 1)
					document.writeln('</td><td>');
			}
			else
				document.writeln('</tr><tr>');
		}						
	}
	document.writeln('</td></tr></table>');	
}

function WriteACellOfCPNamed(title) {
	if (title == '') {
		document.writeln('<td>&nbsp;</td>');
		return;
	}
	var atempStr = '&nbsp;'+title;
	if (atempStr.length>17)
		atempStr = atempStr.substring(0, 15)+'...';
		
	var linkttl = title;
	var tempVal = name2rgb(linkttl);
	if (tempVal)
		linkttl = linkttl+' ['+tempVal+']';

	document.writeln('<td style="border: 0px solid #333; width: 8em; background-color:'+title+';" id="AColor_N_'+title+'">');
	document.writeln('<div style="width: 100%; cursor: pointer; overflow: hidden;" onclick="IPickColor(\''+title+'\');">');
	document.writeln('<a style="width: 8em;" class="ColByNames" href="#PsycHo!" ');
	if (title)
		document.write('title="'+linkttl+'" ');
	document.writeln('onclick="IPickColor(\''+title+'\');">'+atempStr+'</a>');
	document.writeln('</div>');
	document.writeln('</td>');
}

function WriteColorsByNam() {
	var i, j, k, tempStr;
	var ColNameList = new Array('transparent', 'white', 'whitesmoke', 'gainsboro', 'lightgrey', 'silver', 'darkgray', 'gray', 'dimgray', 'black', 'snow', 'floralwhite', 'seashell', 'oldlace', 'linen', 'antiquewhite', 'papayawhip', 'blanchedalmond', 'bisque', 'wheat', 'moccasin', 'navajowhite', 'peachpuff',
								'azure', 'mintcream', 'honeydew', 'palegreen', 'lightgreen', 'mediumaquamarine', 'mediumspringgreen', 'springgreen', 'chartreuse', 'lawngreen', 'lime', 'limegreen', 'yellowgreen', 'olivedrab', 'olive', 'darkolivegreen', 'darkkhaki', 'darkseagreen', 'mediumseagreen', 'seagreen', 'forestgreen', 'green', 'darkgreen',
								'aliceblue', 'aquamarine', 'aqua', 'turquoise', 'mediumturquoise', 'darkturquoise', 'lightseagreen', 'cadetblue', 'darkcyan', 'teal', 'steelblue', 'darkgoldenrod', 'peru', 'goldenrod', 'sandybrown', 'lightsalmon', 'darksalmon', 'salmon', 'coral', 'tomato', 'orangered', 'red', 'crimson',
								'ghostwhite', 'lavender', 'deepskyblue', 'cornflowerblue', 'mediumslateblue', 'royalblue', 'lightslategray', 'slategray', 'rosybrown', 'palevioletred', 'hotpink', 'fuchsia', 'deeppink', 'mediumvioletred', 'darkmagenta', 'purple', 'yellow', 'gold', 'orange', 'darkorange', 'chocolate', 'sienna', 'saddlebrown',
								'lightcyan', 'paleturquoise', 'powderblue', 'lightblue', 'skyblue', 'lightskyblue', 'dodgerblue', 'mediumblue', 'darkblue', 'navy', 'midnightblue', 'thistle', 'plum', 'violet', 'orchid', 'mediumorchid', 'darkorchid', 'darkviolet', 'blueviolet', 'mediumpurple', 'slateblue', 'darkslateblue', 'indigo',
							'lavenderblush', 'mistyrose', 'pink', 'lightpink', 'lightcoral', 'indianred', 'firebrick', 'brown', 'darkred', 'maroon', 'ivory', 'lightyellow', 'lightgoldenrodyellow', 'cornsilk', 'beige', 'lemonchiffon', 'palegoldenrod', 'khaki', 'burlywood', 'tan', '', '', ''	);
	document.writeln('<table width="100%"><tr><td>');
	var tdpercol = 23;
	for (i=0; i<6; i++) {
		document.writeln('<table cellspacing="0" cellpadding="0" style="margin-bottom: 5px;"><tr>');
		for (j=0; j<tdpercol; j++) {
			WriteACellOfCPNamed(ColNameList[i*tdpercol+j]); 	
			document.writeln('</tr><tr>');
		}
		document.writeln('</tr></table></td><td>');
	}
	document.writeln('</td></tr></table>');	
}

function w_ECPCellDiv(isfatheric, x, title) {
	var prefix = (isfatheric)?'F':'C';
	if (!title)
		title = 'Color';
	document.write('<div class="AnECPCell" '+((x%6 != 1 || x == 1)?'':'style="padding-left: 15px; "')+'>');
	document.write('<div title="" id="ECP_'+prefix+'_ColDiv'+x+'" class="ECPCellcell" onclick="javascript: resetByRGBS(this);">');
	document.write('</div>');
		document.write('<a class="inputAVal" id="ECP_'+prefix+'_Sinput'+x+'" href="#PsycHo!" onclick="javascript: resetByRGBS(this.innerHTML);"></a>');
	document.write('</div>');
}

function w_ECP_element(wut, txt) {
	if (!txt)
		txt = wut;
	var whichone, method = (wut =='H' || wut == 'S' || wut == 'V')?'HSV':'RGB', wholes = 'HSVRGB';
	for (var i=0; i<6; i++)
		if (wut == wholes.charAt(i))
			whichone = i;
	var rate = (wut =='H')?'10':'1';
	document.write('<tr><td style="width: 80px">'+txt+':</td><td><input size="5" class="ECP_inp" id="ECP_my'+wut+'" ');
		document.write('onkeyup="javascript: resetBy'+method+'();" onclick="javascript: resetBy'+method+'();"></input></td><td>&nbsp;&nbsp;');
		document.write('&nbsp;&nbsp;<a title="decrease" href="#PsycHo!" tabindex="200" onmousedown="yetETCChg = true; ECP_incdec(\''+wut+'\', -'+rate+');" onmouseup="yetETCChg = false;" onmouseover="yetETCChg = false;">');
		document.write('<img alt="&#8595;" width="9" height="8" onmouseover="this.src=\'images/downarrow_.gif\'" onmouseout="this.src=\'images/downarrow.gif\'" src="images/downarrow.gif"></a>');
	document.write('&nbsp;|&nbsp;');
		document.write('<a title="increase" href="#PsycHo!" tabindex="200" onmousedown="yetETCChg = true; ECP_incdec(\''+wut+'\', +'+rate+');" onmouseup="yetETCChg = false;" onmouseover="yetETCChg = false;">');
		document.writeln('<img alt="&#8593;" width="9" height="8" onmouseover="this.src=\'images/uparrow_.gif\'" onmouseout="this.src=\'images/uparrow.gif\'" src="images/uparrow.gif"></a>');
	document.write('</td></tr>');
}