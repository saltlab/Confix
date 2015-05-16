// NonDDF
function kd_alert(s) {
	if (global_last_kd_alert != s) alert('Sorry, your provider (' + global_prov + ') ' + s);
	global_last_kd_alert = s;
}

//DDF
function foundSide(s, eve) {
	var sa = new Array();
	var t;
	var This = dg('_' + s);
	while ((t = s.indexOf('_')) != -1) {
		sa[sa.length] = s.substring(0, t);
		s = s.substring(t + 1, s.length);
	}
	sa[sa.length] = s;
	sa[2] = parseInt(sa[2]);
	sa[3] = parseInt(sa[3]);
	var bs = BoxLength(sa[0]);
	var pre = '_' + sa[0] + '_';
	switch (sa[1]) {
	case 'DefaultDivBackBackEr':
		break;
	case 'DefaultDivBackIsColorEr':
		SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 0);
		SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 0);
		SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 1);
		for (var i = 0; i < maxBoxNumOnSides; i++) ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', '');
		break;
	case 'DefaultDivBackIsTextureEr':
		SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 0);
		SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 0);
		SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 1, 'inline');
		doDuty(dg(pre + 'DefaultDivBackTextureEr'));
		break;
	case 'DefaultDivBackIsImageEr':
		SwitchDisplay(pre + 'DefaultDivBackgroundIsColor', 0);
		SwitchDisplay(pre + 'DefaultDivBackgroundIsTexture', 0);
		SwitchDisplay(pre + 'DefaultDivBackgroundIsImage', 1, 'inline');
		doDuty(dg(pre + 'DefaultDivBackImageEr'));
		break;
	case 'DefaultDivBackColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'backgroundColor', sa[0] + '_DefaultDiv_0');
		break;
	case 'DefaultDivBackColorErA':
		ShowCP(eve, pre + 'DefaultDivBackColorEr', 'backgroundColor', sa[0] + '_DefaultDiv_0');
		break;
	case 'DefaultDivBackTextureEr':
		for (var i = 0; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This);
			ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'repeat');
		}
		break;
	case 'DefaultDivBackImageEr':
		for (var i = 0; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundImage', This);
			ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'backgroundRepeat', 'no-repeat');
		}
		break;
	case 'DefaultBorderStyleEr':
		for (var i = 0; i < maxBoxNumOnSides; i++) ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderStyle', This);
		break;
	case 'DefaultBorderWidthEr':
		for (var i = 0; i < maxBoxNumOnSides; i++) ChangeByInput(sa[0] + '_DefaultDiv_' + i, 'borderWidth', This);
		break;
	case 'DefaultBorderColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'borderColor', sa[0] + '_DefaultDiv_0');
		break;
	case 'DefaultBorderColorErA':
		ShowCP(eve, pre + 'DefaultBorderColorEr', 'borderColor', sa[0] + '_DefaultDiv_0');
		break;
	case 'SepBorderStyleEr':
		for (var i = 1; i < maxBoxNumOnSides; i++) ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomStyle', This);
		break;
	case 'SepBorderWidthEr':
		var mb = (parseInt(dg('_' + sa[0] + '_PartSepHeight').value) - parseInt(This.value)) / 2;
		for (var i = 1; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', This);
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px');
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px');
		}
		break;
	case 'SepBorderColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1');
		break;
	case 'SepBorderColorErA':
		ShowCP(eve, pre + 'SepBorderColorEr', 'borderBottomColor', sa[0] + '_PartSepSemiDiv_1');
		break;
	case 'PartSepDivBackBackEr':
		break;
	case 'PartSepDivBackIsColorEr':
		SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 0);
		SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 0);
		SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 1);
		for (var i = 1; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', '');
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '1px');
		}
		break;
	case 'PartSepDivBackIsTextureEr':
		SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 0);
		SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 0);
		SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 1, 'inline');
		doDuty(dg(pre + 'PartSepDivBackTextureEr'));
		break;
	case 'PartSepDivBackIsImageEr':
		SwitchDisplay(pre + 'PartSepDivBackgroundIsColor', 0);
		SwitchDisplay(pre + 'PartSepDivBackgroundIsTexture', 0);
		SwitchDisplay(pre + 'PartSepDivBackgroundIsImage', 1, 'inline');
		doDuty(dg(pre + 'PartSepDivBackImageEr'));
		break;
	case 'PartSepDivBackColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'borderColor', sa[0] + '_PartSepSemiDiv_1');
		break;
	case 'PartSepDivBackColorErA':
		ShowCP(eve, pre + 'PartSepDivBackColorEr', 'borderColor', sa[0] + '_PartSepSemiDiv_1');
		break;
	case 'PartSepDivBackTextureEr':
		for (var i = 1; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This);
			ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'repeat');
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px');
		}
		break;
	case 'PartSepDivBackImageEr':
		for (var i = 1; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundImage', This);
			ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'backgroundRepeat', 'no-repeat');
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'borderBottomWidth', '0px');
		}
		break;
	case 'PartSepHeight':
		var t = parseFloat(This.value);
		var mb = (t - parseInt(dg('_' + sa[0] + '_SepBorderWidthEr').value)) / 2;
		for (var i = 1; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_PartSepDiv_' + i, 'height', t + 'px');
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'height', mb + 'px');
			ChangeByInput(sa[0] + '_PartSepSemiDiv_' + i, 'marginBottom', mb + 'px');
		}
		break;
	case 'PartSepHeightInc':
		doIncDec(pre + 'PartSepHeight', 2, 0, 200);
		break;
	case 'PartSepHeightDec':
		doIncDec(pre + 'PartSepHeight', -2, 0, 200);
		break;
	case 'PartDivLineHeightEr':
		for (var i = 0; i < maxBoxNumOnSides; i++) {
			ChangeByInput(sa[0] + '_Main_' + i, 'lineHeight', This);
		}
		break;
	case 'TitleColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'color', sa[0] + '_Title_0');
		break;
	case 'TitleColorErA':
		ShowCP(eve, pre + 'TitleColorEr', 'color', sa[0] + '_Title_0');
		break;
	case 'DefaultDivColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'color', sa[0] + '_DefaultDiv_0');
		break;
	case 'DefaultDivColorErA':
		ShowCP(eve, pre + 'DefaultDivColorEr', 'color', sa[0] + '_DefaultDiv_0');
		break;
	case 'TitleUnderlineEr':
		global_colorRef = This;
		IPickColor(This.value, 'borderColor', sa[0] + '_Title_0');
		break;
	case 'TitleUnderlineErA':
		ShowCP(eve, pre + 'TitleUnderlineEr', 'borderColor', sa[0] + '_Title_0');
		break;
	case 'LinkColorEr':
		global_colorRef = This;
		IPickColor(This.value, 'color', sa[0] + 'SideColorCSS_Link');
		break;
	case 'LinkColorErA':
		ShowCP(eve, pre + 'LinkColorEr', 'color', sa[0] + 'SideColorCSS_Link');
		break;
	case 'LinkHoverEr':
		global_colorRef = This;
		IPickColor(This.value, 'color', sa[0] + 'SideColorCSS_Hover');
		break;
	case 'LinkHoverErA':
		ShowCP(eve, pre + 'LinkHoverEr', 'color', sa[0] + 'SideColorCSS_Hover');
		break;
	case 'RemoveThisBox':
		if (bs == 1) alert('At least one box should be present on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!');
		else {
			for (var i = sa[2]; i < bs - 1; i++) CopyBox(sa[0], i + 1, i);
			ClearBox(sa[0], bs - 1);
			SwitchDisplay(sa[0] + '_PartDiv_' + (bs - 1), 0);
			HideEditPartBox();
			dg('_' + sa[0] + '_boxNumForce').value = bs - 1;
		}
		break;
	case 'AddOneBox':
		if (bs == maxBoxNumOnSides) alert('Just reached maximum box number on the ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!');
		else {
			SwitchDisplay(sa[0] + '_PartDiv_' + bs, 1);
			for (var i = bs; i > sa[2] + 1; i--) CopyBox(sa[0], i - 1, i);
			ClearBox(sa[0], sa[2] + 1);
			HideEditPartBox();
			dg('_' + sa[0] + '_boxNumForce').value = bs + 1;
		}
		break;
	case 'EditThisPart':
		ShowEditPartBox(eve, sa[2], sa[0]);
		break;
	case 'TitleTxt':
		if (!isBoxVisible(sa[0], sa[2])) break;
		var thisId = sa[0] + '_Title_' + sa[2];
		ChangeByInput(thisId, 'innerHTML', This);
		if (This.value.length) {
			SwitchDisplay(thisId, 1);
			ChangeByInput(thisId, 'borderBottomWidth', '1px');
			ChangeByInput(sa[0] + '_Main_' + sa[2], 'marginTop', '0px');
		} else {
			SwitchDisplay(thisId, 0);
			ChangeByInput(thisId, 'borderBottomWidth', '0px');
			ChangeByInput(sa[0] + '_Main_' + sa[2], 'marginTop', '3px');
		}
		break;
	case 'PreSurr':
		var tv = This.value;
		if (tv.length) tv = tv + '&#8206;';
		var ls = LinkLengthOnBoxByFor(sa[0], sa[2]);
		for (var i = 0; i < ls; i++) dg('' + sa[0] + '_LinkPreSurr_' + sa[2] + '_' + i).innerHTML = tv;
		break;
	case 'PstSurr':
		var tv = This.value;
		if (tv.length) tv = '&#8206;' + tv;
		var ls = LinkLengthOnBoxByFor(sa[0], sa[2]);
		for (var i = 0; i < ls; i++) dg('' + sa[0] + '_LinkPstSurr_' + sa[2] + '_' + i).innerHTML = tv;
		break;
	case 'LinkTxt':
		if (!isBoxVisible(sa[0], sa[2])) break;
		var that = dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]);
		var thatText = dg(sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3]);
		var thatCont = dg(sa[0] + '_LinkBodyContainer_' + sa[2] + '_' + sa[3]);
		var sin = This.value,
		tin;
		if (sin == translateIt('email')) sin = translateIt('e-mail');
		if (sin.substring(0, 2) == ' $') sin = sin.substring(1, sin.length);
		if (sin.charAt(0) == ' ') sin = '&nbsp;' + sin.substring(1, sin.length);
		enableEditLink(sa[0], sa[2], sa[3]);
		if (sin == '$ARCHIVE')
			if (global_prov == 'persianblog') kd_alert('does not support "Archive Index Listing".');
			else {
				sin = 'Oct 2005';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$RECENT')
			if (global_prov == 'blogfa' || global_prov == 'persianblog') kd_alert('does not support "Recenet entries listing".');
			else {
				sin = '[Last postTitles Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$PROFILE')
			if (global_prov == 'persianblog') kd_alert('does not support "Blogger\'s profile".');
			else {
				sin = '[Your Profile Here]';
				disableEditLink(sa[0], sa[2], sa[3], 0);
			}
		if (sin == '$LINKS')
			if (global_prov == 'blogger') kd_alert('does not support "Blog\'s links listing".');
			else {
				sin = '[Your Links Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$CATEGLIST')
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('does not support "Blog\'s category listing".');
			else {
				sin = '[Category List Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$LINKDUMP')
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('does not support "Blog\'s link dumps".');
			else {
				sin = '[Daily Links Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$AUTHORS')
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('does not support "Blog\'s author listing".');
			else {
				sin = '[Authors List Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		that.innerHTML = sin;
		thatText.innerHTML = sin;
		SwitchDisplay(thatCont, (This.value.length > 0));
		if ((thatText.style.display == 'none') != (dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]).value.length > 0)) doDuty(dg('_' + sa[0] + '_LinkUrl_' + sa[2] + '_' + sa[3]), eve);
		break;
	case 'LinkUrl':
		if (!isBoxVisible(sa[0], sa[2]) || This.disabled) break;
		var that = sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3];
		var thatText = sa[0] + '_LinkBodyButText_' + sa[2] + '_' + sa[3];
		SwitchDisplay((This.value == '') ? that : thatText, 0, 'inline');
		SwitchDisplay((This.value == '') ? thatText : that, 1, 'inline');
		var dst = This.value;
		if (dst == '$HOME') dst = 'http://[YourBlogName].' + global_prov + '.com';
		if (dst == '$EMAIL') dst = 'mailto:[YourEmailAddress]';
		if (dst == '$ARCHIVE') dst = 'http://[YourBlogName].' + global_prov + '.com/[ArchivePage]';
		if (dst == '$RSS') {
			if (global_prov == 'persianblog') kd_alert('does not support "RSS Feed".');
			else dst = 'http://[YourBlogName].' + global_prov + '.com/[RSS.xml]';
		}
		if (dst == '$PSYCHO') dst = 'http://psyc.horm.org/?PsycHodrama=[YourPsycHodrama]';
		if (dst == '$CUSTOM') {
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('does not support "Custom HTML codes".');
			else dst = '[Custom HTML Codes]';
		}
		dg(that).setAttribute('href', dst);
		break;
	case 'LinkTtl':
		if (!isBoxVisible(sa[0], sa[2])) break;
		var that = dg(sa[0] + '_LinkBody_' + sa[2] + '_' + sa[3]);
		that.setAttribute('title', This.value);
		break;
	case 'RemLink':
		var ls = LinkLengthOnBox(sa[0], sa[2]);
		if (ls == 1) alert('At least one box should be present on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!');
		else {
			for (var i = sa[3]; i < ls - 1; i++) CopyLink(sa[0], sa[2], i + 1, sa[0], sa[2], i);
			InsertLinkToBox(sa[0], sa[2], ls - 1, '', '', '', 0);
			dg('_' + sa[0] + '_linkNumForce_' + sa[2]).value = ls - 1;
		}
		break;
	case 'InsLink':
		var ls = LinkLengthOnBox(sa[0], sa[2]);
		if (ls == maxLinkNumBoxes) alert('Just reached maximum link number on the box #' + (sa[2] + 1) + ' of ' + (sa[0] == 'R' ? 'right' : 'left') + ' side!');
		else {
			for (var i = ls; i && i > sa[3] + 1; i--) CopyLink(sa[0], sa[2], i - 1, sa[0], sa[2], i);
			InsertLinkToBox(sa[0], sa[2], sa[3] + 1, ' ', '', '', 1);
			dg('_' + sa[0] + '_linkNumForce_' + sa[2]).value = ls + 1;
		}
		break;
	case 'addImg':
		ShowAddImage(sa[0], sa[2], sa[3], eve);
		break;
	case 'boxNumForce':
		bs = BoxLengthByFor(sa[0]);
		for (var i = This.value; i < bs; i++) SwitchDisplay(sa[0] + '_PartDiv_' + i, 0);
		for (var i = bs; i < This.value; i++) SwitchDisplay(sa[0] + '_PartDiv_' + i, 1);
		break;
	case 'linkNumForce':
		var ls = LinkLengthOnBoxByFor(sa[0], sa[2]);
		for (var i = This.value; i < ls; i++) InsertLinkToBox(sa[0], sa[2], i, '', '', '', 0);
		for (var i = ls; i < This.value; i++) InsertLinkToBox(sa[0], sa[2], i, ' ', '', '', 1);
		break;
	default:
		alert(sa[1] + ' command is unknown on sidebar! call Aidin please');
	}
}

//DDF
function foundDuty(s, eve) {
	if (s.substring(0, 1) == '_') {
		foundSide(s.substring(1, s.length), eve);
		return true;
	}
	var This = dg(s),
	t;
	t1 = new Array('FontBoldEr', 'FontItalicEr', 'FontUnderlineEr', 'AlignErLeft', 'AlignErRight', 'AlignErCenter', 'FontFamily', 'FontSizeEr', 'AlignEr');
	t2 = new Array('fontWeight', 'fontStyle', 'textDecoration', 'textAlign', 'textAlign', 'textAlign', 'fontFamily', 'fontSize', 'textDecoration');
	//t3 = new Array(This, This, This, 'left', 'right', 'center', This, This, 'none');
	for (var i = 0; i < t1.length; i++)
		if (s.substring(s.length - t1[i].length, s.length) == t1[i]) {
			s = s.substring(0, s.length - t1[i].length);
			if (i == 3 || i == 4 || i == 5) {
				var d = t1[i].substring(7, t1[i].length);
				PushImgBut(s + 'AlignErLeftImg', false);
				PushImgBut(s + 'AlignErRightImg', false);
				PushImgBut(s + 'AlignErCenterImg', false);
				PushImgBut(s + 'AlignEr' + d + 'Img', true);
			}
			if (s.substring(1, s.length) == '_DefaultDiv_0' || s.substring(1, s.length) == '_Title_0' || s.substring(1, s.length) == '_PartDiv_0')
				for (var j = 0; j < maxBoxNumOnSides; j++) ChangeByInput(s.substring(0, s.length - 1) + j, t2[i], t3[i]);
			else {
				if (s == 'HeaderPartText') {
					ChangeByInput('TitleText', t2[i], t3[i]);
					ChangeByInput('SubTitleText', t2[i], t3[i]);
				} else ChangeByInput(s, t2[i], t3[i]);
			}
			if (t1[i] == 'FontItalicEr') {
				PushImgBut(s + 'ItalicErImg', This.value == 'italic');
				ToggleTextVal(This, 'italic', 'normal', 'value');
			}
			if (t1[i] == 'FontBoldEr') {
				PushImgBut(s + 'BoldErImg', This.value == 'bold');
				ToggleTextVal(This, 'bold', 'normal', 'value');
			}
			if (t1[i] == 'FontUnderlineEr') {
				PushImgBut(s + 'UnderlineErImg', This.value == 'underline');
				ToggleTextVal(This, 'underline', 'none', 'value');
			}
			return true;
		}
	return false;
}

//DDF
function doDuty(s, eve) {
	if (s.tagName == undefined || !s.tagName) s = dg(s);
	if (global_lastDidDuty) {
		ChangeByInput(global_lastDidDuty, 'borderColor', '#666');
		ChangeByInput(global_lastDidDuty, 'color', '#333');
	}
	if (s.tagName.toLowerCase() == 'input' && s.getAttribute('type').toLowerCase() == 'text' && !s.disabled) {
		ChangeByInput(s.id, 'borderColor', '#C00');
		ChangeByInput(s.id, 'color', '#000');
		if (global_lastDidDuty != s.id && !global_isTakingEffectAll) s.select();
		global_lastDidDuty = s.id;
	}
	var This = s;
	if (s.id.substring(0, 2) != 'SH') global_didSomething = true;
	if (!foundDuty(s.id, eve)) {
		switch (s.id) {
		case 'ResetPsycHodramaEr':
			break;
		case 'PsycHodramaSaver':
			WritePsycHodrama();
			global_didSomething = false;
			var msgStr = 'PsycHodrama Saved Successfully.';
			if (global_lang == 'fa') msgStr = translateIt('drama saved.');
			alert(msgStr);
			break;
		case 'PsycHodramaSHer':
			ShowPsycHodrama(eve);
			break;
		case 'PsycHodramaGetButton':
			WritePsycHodrama();
			break;
		case 'PsycHodramaLoadButton':
			if (ReadPsycHodrama(dg('PsycHodramaPutEr').value)) {
				HidePsycHodrama();
			}
			break;
		case 'PsycHodramaResetButton':
			dg('PsycHodramaPutEr').value = '';
			break;
		case 'PsycHodramaDefaultButton':
			dg('PsycHodramaPutEr').value = PsycHodramaDefaultString();
			break;
		case 'PsycHokinesisShower':
			ShowPsycHokinesis(eve);
			SwitchDisplay('PsycHokinesisAlertDiv', 0);
			ChangeByInput('PsycHokinesisAlertInner', 'innerHTML', '');
			dg('PsycHokinesisPreviewButton').disabled = true;
			ChangeByInput('PsycHokinesisPreviewButton', 'color', '#666');
			break;
		case 'PsycHokinesisGetButton':
			kinesIt();
			dg('PsycHokinesisPreviewButton').disabled = false;
			ChangeByInput('PsycHokinesisPreviewButton', 'color', '#000');
			break;
		case 'WholePageTitle':
			var dt = This.value;
			if (This.value == 'DEFAULT$') alert(translateIt('not default$'));
			if (This.value == '$DEFAULT') dt = '[PsycHo] DEFAULT TITLE';
			document.title = '[PsycHo] ' + dt;
			break;
		case 'WholeProvider':
			global_prov = This.value;
			var isBlogger = (global_prov == 'blogger');
			var isPersianBlog = (global_prov == 'persianblog');
			var sides = new Array('R', 'L');
			if (isBlogger) {
				dg('DateFormatIsGregorian').disabled = false;
				dg('DateFormatIsHijri').disabled = false;
				ChangeByInput('selectorTxt_DateFormatIsHijri', 'color', 'black');
				ChangeByInput('selectorTxt_DateFormatIsGregorian', 'color', 'black');
				ChangeByInput('DateFormatSelectorText', 'color', 'black');
			} else {
				dg('DateFormatIsHijri').checked = true;
				dg('DateFormatIsGregorian').disabled = true;
				dg('DateFormatIsHijri').disabled = true;
				writeCurrentTime(1);
				ChangeByInput('selectorTxt_DateFormatIsHijri', 'color', '#666');
				ChangeByInput('selectorTxt_DateFormatIsGregorian', 'color', '#666');
				ChangeByInput('DateFormatSelectorText', 'color', '#666');
			}
			if (isPersianBlog) {
				for (var t = 0; t < 2; t++) {
					var archive_txt = 'Archive';
					var archive_ttl = 'Archive Page';
					if (global_lang == 'fa') {
						archive_txt = translateIt(archive_txt);
						archive_ttl = translateIt(archive_ttl);
					}
					if (dg('_' + sides[t] + '_LinkUrl_0_2').value == '$RSS') InsertLinkToBox(sides[t], '0', '2', archive_txt, '$ARCHIVE', archive_ttl, 1);
					if (dg('_' + sides[t] + '_LinkTxt_1_0').value == '$ARCHIVE') doDuty('_' + sides[t] + '_RemoveThisBox_1');
				}
			} else {
				for (var t = 0; t < 2; t++)
					if (dg('_' + sides[t] + '_LinkUrl_0_2').value == '$ARCHIVE') InsertLinkToBox(sides[t], '0', '2', 'RSS', '$RSS', 'RSS Feed', 1);
				var noArch = true;
				for (var t = 0; t < 2; t++) {
					var bs = dg('_' + sides[t] + '_boxNumForce').value;
					for (var i = 0; i < bs; i++) {
						var ls = dg('_' + sides[t] + '_linkNumForce_' + i).value;
						for (var j = 0; j < ls; j++)
							if (dg('_' + sides[t] + '_LinkTxt_1_0').value == '$ARCHIVE') noArch = false;
					}
				}
				if (noArch) {
					var sides = new Array('R', 'L');
					for (var t = 0; t < 2; t++) {
						doDuty('_' + sides[t] + '_AddOneBox_0');
						AddTitleToBox(sides[t], '1', 'Archive');
						InsertLinkToBox(sides[t], '1', '0', '$ARCHIVE', ' ', '', 1);
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
			var showEn = 'Show Basic Settings';
			var hideEn = 'hide&nbsp; Basic Settings';
			var showFa = translateIt('Namaayesh tanzimaate avvalie');
			var hideFa = translateIt('PenhaanSaazie tanzimaate avvalie');
			ToggleDisplay('BasicSettings', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa);
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			ToggleTextVal(dg('Grannie'), '10px', '25px', 'marginTop');
			doDuty(dg('HeaderTopMarginEr'));
			break;
		case 'WholeWidthUnitErPixels':
			SwitchDisplay('WholeWidthValueErPercent', 0);
			SwitchDisplay('WholeWidthValueErPixels', 1);
			doDuty(dg('WholeWidthValueErPixels'));
			break;
		case 'WholeWidthUnitErPercent':
			SwitchDisplay('WholeWidthValueErPercent', 1);
			SwitchDisplay('WholeWidthValueErPixels', 0);
			doDuty(dg('WholeWidthValueErPercent'));
			break;
		case 'WholeWidthValueErPixels':
			if (dg('WholeWidthUnitErPixels').checked) ChangeByInput('Grannie', 'width', This);
			break;
		case 'WholeWidthValueErPercent':
			if (dg('WholeWidthUnitErPercent').checked) ChangeByInput('Grannie', 'width', This);
			break;
		case 'ChangeViewSimpleEnhanced':
			ToggleText(This, (global_lang == 'fa') ? translateIt('Afzaayeshe gozinehaa') : 'Enhance Features', (global_lang == 'fa') ? translateIt('Kaaheshe gozinehaa') : 'Minimize Features');
			ToggleEnhanceds();
			break;
		case 'HideAllPsychoed':
			TogglePsychoeds();
			ToggleText(This, (global_lang == 'fa') ? translateIt('Tamaame PsycHopathedhaa') : 'All PsycHopatheds');
			SwitchDisplay('BasicSettings', 1);
			break;
		case 'WholeBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'body');
			break;
		case 'WholeBackColorErA':
			ShowCP(eve, 'WholeBackColorEr', 'backgroundColor', 'body');
			break;
		case 'AgreeTOSForPsycHokinesis':
			var dis = (!This.checked);
			dg('PsycHokinesisGetButton').disabled = dis;
			dg('PsycHokinesisGetEr').disabled = dis;
			ChangeByInput('PsycHokinesisGetEr', 'color', (dis) ? '#666' : '#000');
			ChangeByInput('PsycHokinesisGetButton', 'color', (dis) ? '#666' : '#000');
			break;
		case 'PsycHokinesisPreviewButton':
			KinePrev = window.open("", "KinePrev", "toolbar=no,location=no,status=yes,scrollbars=yes,resizable=yes,width=800,height=600");
			KinePrev.document.write(dg('PsycHokinesisGetEr').value);
			KinePrev.document.close();
			KinePrev.onload = KinePrevOn;
			KinePrev.onunload = KinePrevOff;
			break;
		case 'WholeBackHasImage':
			var dis = (!This.checked);
			ChangeByInput('WholeBackTextureEr', 'color', (dis) ? '#666' : '#000');
			dg('WholeBackTextureEr').disabled = dis;
			dg('WholeBackPosition').disabled = dis;
			dg('WholeBackRepeat').disabled = dis;
			dg('WholeBackAttachment').disabled = dis;
			ChangeByInput('body', 'backgroundImage', dis ? '' : dg('WholeBackTextureEr').value);
			break;
		case 'WholeBackTextureEr':
			ChangeByInput('body', 'backgroundImage', This);
			break;
		case 'WholeBackPosition':
			ChangeByInput('body', 'backgroundPosition', This);
			dg('WholeBackAttachment').options[(This.value.charAt(0) == 'b') ? 1 : 0].selected = true;
			doDuty(dg('WholeBackAttachment'));
			break;
		case 'WholeBackRepeat':
			ChangeByInput('body', 'backgroundRepeat', This);
			break;
		case 'WholeBackAttachment':
			ChangeByInput('body', 'backgroundAttachment', This);
			break;
		case 'ColorPickerScrollIntoEr':
			dg(dg('CPwutObj').innerHTML).scrollIntoView();
			break;
		case 'ColorPickerByHueEr':
			SwitchDisplay('ColorPickerHuePart', 1);
			SwitchDisplay('ColorPickerMakePart', 0, 'inline');
			SwitchDisplay('ColorPickerNamPart', 0);
			break;
		case 'ColorPickerByNamEr':
			SwitchDisplay('ColorPickerHuePart', 0);
			SwitchDisplay('ColorPickerMakePart', 0, 'inline');
			SwitchDisplay('ColorPickerNamPart', 1);
			break;
		case 'ColorPickerMakerEr':
			SwitchDisplay('ColorPickerHuePart', 0);
			SwitchDisplay('ColorPickerMakePart', 1, 'inline');
			SwitchDisplay('ColorPickerNamPart', 0);
			break;
		case 'ColorPickerMoveUp':
			var rate = -40 * (global_isShiftDown ? 3 : 1);
			ChangeByInput('ColorPicker', 'top', (parseInt(dg('ColorPicker').style.top) + rate) + 'px');
			window.scrollBy(0, rate);
			break;
		case 'ColorPickerMoveDown':
			var rate = 40 * (global_isShiftDown ? 3 : 1);
			ChangeByInput('ColorPicker', 'top', (parseInt(dg('ColorPicker').style.top) + rate) + 'px');
			window.scrollBy(0, rate);
			break;
		case 'SHTitle':
			var showEn = 'Show Title Settings';
			var hideEn = 'hide&nbsp; Title Settings';
			var showFa = translateIt('Namaayeshe tanzimaate onvaan');
			var hideFa = translateIt('PenhaanSaazie tanzimaate onvaan');
			ToggleDisplay('TitleSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa);
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'HeaderBackIsColorEr':
			SwitchDisplay('HeaderBackgroundIsTexture', 0);
			SwitchDisplay('HeaderBackgroundIsImage', 0);
			SwitchDisplay('HeaderBackgroundIsColor', 1);
			SwitchDisplay('HeaderPartText', 1);
			SwitchDisplay('HeaderPartImage', 0);
			SetHeaderImage();
			ChangeByInput('HeaderPart', 'backgroundImage', '');
			break;
		case 'HeaderBackIsTextureEr':
			SwitchDisplay('HeaderBackgroundIsColor', 0);
			SwitchDisplay('HeaderBackgroundIsImage', 0);
			SwitchDisplay('HeaderBackgroundIsTexture', 1, 'inline');
			SwitchDisplay('HeaderPartText', 1);
			SwitchDisplay('HeaderPartImage', 0);
			SetHeaderImage();
			break;
		case 'HeaderBackIsImageEr':
			SwitchDisplay('HeaderBackgroundIsColor', 0);
			SwitchDisplay('HeaderBackgroundIsTexture', 0);
			SwitchDisplay('HeaderBackgroundIsImage', 1, 'inline');
			SwitchDisplay('HeaderPartText', 0);
			SwitchDisplay('HeaderPartImage', 1);
			SetHeaderImage(dg('HeaderBackImageEr').value);
			ChangeByInput('HeaderPart', 'backgroundImage', '');
			break;
		case 'HeaderBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'HeaderPart');
			break;
		case 'HeaderBackColorErA':
			ShowCP(eve, 'HeaderBackColorEr', 'backgroundColor', 'HeaderPart');
			break;
		case 'HeaderBackTextureEr':
			ChangeByInput('HeaderPart', 'backgroundImage', This);
			break;
		case 'HeaderBackImageEr':
			SetHeaderImage(This.value);
			break;
		case 'TitleTextTextEr':
			if (This.value == '$DEFAULT') ChangeByInput('TitleText', 'innerHTML', '[DEFAULT TITLE]');
			else ChangeByInput('TitleText', 'innerHTML', This);
			if (!isIE()) {
				dg('HeaderPartText').style.marginTop = '1px';
				dg('HeaderPartText').style.marginTop = '0px';
			}
			break;
		case 'SubTitleTextTextEr':
			if (This.value == '$DEFAULT')
				if (global_prov == 'persianblog') kd_alert('does not reserve anything DEFAULT for PageDescription.');
				else ChangeByInput('SubTitleText', 'innerHTML', '[DEFAULT DESCRIPTION]');
			else ChangeByInput('SubTitleText', 'innerHTML', This);
			break;
		case 'HeaderDirectionIsLTREr':
			ChangeHeaderDirection(This, 'ltr');
			PushImgBut('HeaderDirRTLErImg', false);
			PushImgBut('HeaderDirLTRErImg', true);
			break;
		case 'HeaderDirectionIsRTLEr':
			ChangeHeaderDirection(This, 'rtl');
			PushImgBut('HeaderDirRTLErImg', true);
			PushImgBut('HeaderDirLTRErImg', false);
			break;
		case 'TitleColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'TitleText');
			break;
		case 'TitleColorErA':
			ShowCP(eve, 'TitleColorEr', 'color', 'TitleText');
			break;
		case 'SubTitleColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'SubTitleText');
			break;
		case 'SubTitleColorErA':
			ShowCP(eve, 'SubTitleColorEr', 'color', 'SubTitleText');
			break;
		case 'HeaderBorderStyleEr':
			ChangeByInput('HeaderPart', 'borderStyle', This);
			break;
		case 'HeaderBorderWidthEr':
			ChangeByInput('HeaderPart', 'borderWidth', This);
			break;
		case 'HeaderBorderColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'HeaderPart');
			break;
		case 'HeaderBorderColorErA':
			ShowCP(eve, 'HeaderBorderColorEr', 'borderColor', 'HeaderPart');
			break;
		case 'HeaderTopMarginEr':
			var d = parseInt(This.value);
			var dm = (d < 27) ? 2 : d - 25;
			if (dg('BasicSettings').style.display == 'none') ChangeByInput('HeaderPart', 'marginTop', dm + 'px');
			else ChangeByInput('HeaderPart', 'marginTop', d + 'px');
			var d = parseInt(This.value) / 2;
			ChangeByInput('ColsHeaderSep', 'marginTop', d + 'px');
			break;
		case 'HeaderHorPaddingEr':
			ChangeByInput('HeaderPart', 'paddingRight', This);
			ChangeByInput('HeaderPart', 'paddingLeft', This);
			break;
		case 'HeaderVerPaddingEr':
			ChangeByInput('HeaderPart', 'paddingTop', This);
			ChangeByInput('HeaderPart', 'paddingBottom', This);
			break;
		case 'HeaderLineSpacingEr':
			ChangeByInput('SubTitleText', 'marginTop', This);
			break;
		case 'SHCols':
			var showEn = 'Show Columns Settings';
			var hideEn = 'hide&nbsp; Columns Settings';
			var showFa = translateIt('Namaayeshe tanzimaate sotoonha');
			var hideFa = translateIt('Penhaansaazie tanzimaate sotoonha');
			ToggleDisplay('ColsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa);
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'ColsNumberIsOne':
			SwitchDisplay('SideLColumn', 0);
			SwitchDisplay('SideRColumn', 0);
			dg('MainColWidthView').value = 100;
			doDuty(dg('MainColWidthView'));
			SwitchDisplay('MainColumnSettingDiv', 0);
			break;
		case 'ColsNumberIsTwoL':
			SwitchDisplay('SideLColumn', 0);
			dg('MainColWidthView').value = 75;
			doDuty(dg('MainColWidthView'));
			SwitchDisplay('SideRColumn', 1);
			SwitchDisplay('MainColumnSettingDiv', 1);
			break;
		case 'ColsNumberIsTwoR':
			dg('MainColWidthView').value = 75;
			SwitchDisplay('SideLColumn', 1);
			SwitchDisplay('MainColumnSettingDiv', 1);
			SwitchDisplay('SideRColumn', 0);
			doDuty(dg('MainColWidthView'));
			break;
		case 'ColsNumberIsThree':
			dg('MainColWidthView').value = 50;
			doDuty(dg('MainColWidthView'));
			SwitchDisplay('SideLColumn', 1);
			SwitchDisplay('SideRColumn', 1);
			SwitchDisplay('MainColumnSettingDiv', 1);
			break;
		case 'MainColWidthView':
			var i, t = parseFloat(This.value);
			for (i = 0; i < document.PsycHoForm.ColsNumberRadioEr.length; i++)
				if (document.PsycHoForm.ColsNumberRadioEr[i].checked) break;
			ChangeByInput('MainColumn', 'width', ((i != 0) ? t : '100') + '%');
			ChangeByInput('ColsPart', 'width', ((i == 0) ? t : '100') + '%');
			t = 100 - parseFloat(dg('SideRColumn').style.marginLeft) - t - (isIE() ? 0.2 : 0.1); /*				var faLang = (global_lang == 'fa');alert(i+":"+faLang); */
			if (i == 3) t = (t - parseFloat(dg('SideRColumn').style.marginLeft)) / 2; /* 				if (((!faLang) && (i==1)) || ((faLang) && (i==2)) || i==3) */
			ChangeByInput('SideRColumn', 'width', t + '%'); /*				if (((!faLang) && (i==2)) || ((faLang) && (i==1)) || i==3) */
			ChangeByInput('SideLColumn', 'width', t + '%');
			break;
		case 'MainColWidthInc':
			doIncDec('MainColWidthView', 1, 2, 97);
			break;
		case 'MainColWidthDec':
			doIncDec('MainColWidthView', -1, 2, 97);
			break;
		case 'MainSpcPaddingView':
			var t = parseFloat(This.value);
			var s = t / 2;
			ChangeByInput('MainColumnInner', 'paddingLeft', t + 'px');
			ChangeByInput('MainColumnInner', 'paddingRight', t + 'px');
			ChangeByInput('MainColumnInner', 'paddingTop', (t / 2) + 'px');
			ChangeByInput('MainColumnInner', 'paddingBottom', (t / 2) + 'px');
			break;
		case 'MainSpcPaddingInc':
			doIncDec('MainSpcPaddingView', 5, 0, 100);
			break;
		case 'MainSpcPaddingDec':
			doIncDec('MainSpcPaddingView', -5, 0, 100);
			break;
		case 'MainColumnsBorderStyleEr':
			ChangeByInput('MainColumnInner', 'borderStyle', This);
			break;
		case 'MainColumnsBorderWidthEr':
			ChangeByInput('MainColumnInner', 'borderWidth', This);
			break;
		case 'MainColumnsBorderColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'MainColumnInner');
			break;
		case 'MainColumnsBorderColorErA':
			ShowCP(eve, 'MainColumnsBorderColorEr', 'borderColor', 'MainColumnInner');
			break;
		case 'MainColumnsBackIsColorEr':
			SwitchDisplay('MainColumnsBackgroundIsTexture', 0);
			SwitchDisplay('MainColumnsBackgroundIsImage', 0);
			SwitchDisplay('MainColumnsBackgroundIsColor', 1);
			ChangeByInput('MainColumnInner', 'backgroundImage', '');
			break;
		case 'MainColumnsBackIsTextureEr':
			SwitchDisplay('MainColumnsBackgroundIsColor', 0);
			SwitchDisplay('MainColumnsBackgroundIsImage', 0);
			SwitchDisplay('MainColumnsBackgroundIsTexture', 1, 'inline');
			doDuty(dg('MainColumnsBackTextureEr'));
			break;
		case 'MainColumnsBackIsImageEr':
			SwitchDisplay('MainColumnsBackgroundIsColor', 0);
			SwitchDisplay('MainColumnsBackgroundIsTexture', 0);
			SwitchDisplay('MainColumnsBackgroundIsImage', 1, 'inline');
			doDuty(dg('MainColumnsBackImageEr'));
			break;
		case 'MainColumnsBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'MainColumnInner');
			break;
		case 'MainColumnsBackColorErA':
			ShowCP(eve, 'MainColumnsBackColorEr', 'backgroundColor', 'MainColumnInner');
			break;
		case 'MainColumnsBackTextureEr':
			ChangeByInput('MainColumnInner', 'backgroundImage', This);
			ChangeByInput('MainColumnInner', 'backgroundRepeat', 'repeat');
			break;
		case 'MainColumnsBackImageEr':
			ChangeByInput('MainColumnInner', 'backgroundImage', This);
			ChangeByInput('MainColumnInner', 'backgroundRepeat', 'no-repeat');
			break;
		case 'SideSpcWidthView':
			var t = parseFloat(This.value);
			ChangeByInput('SideRColumn', 'marginLeft', t + '%');
			ChangeByInput('SideLColumn', 'marginRight', t + '%');
			doDuty(dg('MainColWidthView'));
			break;
		case 'SideSpcWidthInc':
			doIncDec('SideSpcWidthView', 0.5, 0, parseFloat(dg('SideRColumn').style.width));
			break;
		case 'SideSpcWidthDec':
			doIncDec('SideSpcWidthView', -0.5, 0, parseFloat(dg('SideRColumn').style.width));
			break;
		case 'SideSpcPaddingView':
			var t = parseFloat(This.value);
			ChangeByInput('SideRColumnInner', 'paddingLeft', t + 'px');
			ChangeByInput('SideRColumnInner', 'paddingRight', t + 'px');
			ChangeByInput('SideLColumnInner', 'paddingLeft', t + 'px');
			ChangeByInput('SideLColumnInner', 'paddingRight', t + 'px');
			var sa = "LR";
			for (var j = 0; j < sa.length; j++)
				for (var i = 0; i < maxBoxNumOnSides; i++) {
					ChangeByInput(sa.charAt(j) + '_DefaultDiv_' + i, 'paddingLeft', t + 'px');
					ChangeByInput(sa.charAt(j) + '_DefaultDiv_' + i, 'paddingRight', t + 'px');
				}
			break;
		case 'SideSpcPaddingInc':
			doIncDec('SideSpcPaddingView', 5, 0, 40);
			break;
		case 'SideSpcPaddingDec':
			doIncDec('SideSpcPaddingView', -5, 0, 40);
			break;
		case 'SideColumnsBorderStyleEr':
			ChangeByInput('SideRColumnInner', 'borderStyle', This);
			ChangeByInput('SideLColumnInner', 'borderStyle', This);
			break;
		case 'SideColumnsBorderWidthEr':
			ChangeByInput('SideRColumnInner', 'borderWidth', This);
			ChangeByInput('SideLColumnInner', 'borderWidth', This);
			break;
		case 'SideColumnsBorderColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'SideRColumnInner');
			IPickColor(This.value, 'borderColor', 'SideLColumnInner');
			break;
		case 'SideColumnsBorderColorErA':
			ShowCP(eve, 'SideColumnsBorderColorEr', 'borderColor', 'SideRColumnInner');
			break;
		case 'SideColumnsBackIsColorEr':
			SwitchDisplay('SideColumnsBackgroundIsTexture', 0);
			SwitchDisplay('SideColumnsBackgroundIsImage', 0);
			SwitchDisplay('SideColumnsBackgroundIsColor', 1);
			ChangeByInput('SideRColumnInner', 'backgroundImage', '');
			ChangeByInput('SideLColumnInner', 'backgroundImage', '');
			break;
		case 'SideColumnsBackIsTextureEr':
			SwitchDisplay('SideColumnsBackgroundIsColor', 0);
			SwitchDisplay('SideColumnsBackgroundIsImage', 0);
			SwitchDisplay('SideColumnsBackgroundIsTexture', 1, 'inline');
			doDuty(dg('SideColumnsBackTextureEr'));
			break;
		case 'SideColumnsBackIsImageEr':
			SwitchDisplay('SideColumnsBackgroundIsColor', 0);
			SwitchDisplay('SideColumnsBackgroundIsTexture', 0);
			SwitchDisplay('SideColumnsBackgroundIsImage', 1, 'inline');
			doDuty(dg('SideColumnsBackImageEr'));
			break;
		case 'SideColumnsBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'SideRColumnInner');
			break;
		case 'SideColumnsBackColorErA':
			ShowCP(eve, 'SideColumnsBackColorEr', 'backgroundColor', 'SideRColumnInner');
			break;
		case 'SideColumnsBackTextureEr':
			ChangeByInput('SideRColumnInner', 'backgroundImage', This);
			ChangeByInput('SideRColumnInner', 'backgroundRepeat', 'repeat');
			ChangeByInput('SideLColumnInner', 'backgroundImage', This);
			ChangeByInput('SideLColumnInner', 'backgroundRepeat', 'repeat');
			break;
		case 'SideColumnsBackImageEr':
			ChangeByInput('SideRColumnInner', 'backgroundImage', This);
			ChangeByInput('SideRColumnInner', 'backgroundRepeat', 'no-repeat');
			ChangeByInput('SideLColumnInner', 'backgroundImage', This);
			ChangeByInput('SideLColumnInner', 'backgroundRepeat', 'no-repeat');
			break;
		case 'SHPosts':
			var showEn = 'Show Posts Schema Settings';
			var hideEn = 'hide&nbsp; Posts Schema Settings';
			var showFa = translateIt('Namaayeshe tanzimaate zaaherie postha');
			var hideFa = translateIt('Penhaansaazie tanzimaate zaaherie postha');
			ToggleDisplay('PostsSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa);
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'SHPostsT':
			var showEn = 'Show Posts <span style="padding: 0px 2px 0px 3px;">Theme</span> Settings';
			var hideEn = 'hide&nbsp; Posts <span style="padding: 0px 2px 0px 3px;">Theme</span> Settings';
			var showFa = translateIt('Namaayeshe tanzimaate daakhelie postha');
			var hideFa = translateIt('Penhaansaazie tanzimaate daakhelie postha');
			ToggleDisplay('PostsThemeSetting', This, (global_lang == 'en') ? showEn : showFa, 'block', (global_lang == 'en') ? hideEn : hideFa);
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'SHSideR':
			ToggleDisplay('SideRSchema', This, (global_lang == 'en') ? 'R-Side Schema' : translateIt('Tanzimaate daakheli'));
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'SHSideRT':
			ToggleDisplay('SideRTheme', This, (global_lang == 'en') ? 'R-Side Theme' : translateIt('Tanzimaate zaaheri'));
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'SHSideL':
			ToggleDisplay('SideLSchema', This, (global_lang == 'en') ? 'L-Side Schema' : translateIt('Tanzimaate daakheli'));
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'SHSideLT':
			ToggleDisplay('SideLTheme', This, (global_lang == 'en') ? 'L-Side Theme' : translateIt('Tanzimaate zaaheri'));
			ToggleTextVal(This, '#EEE', '#F93', 'borderBottomColor');
			break;
		case 'OnePostBorderStyleEr':
			ChangeByInput('OnePostMainDiv', 'borderStyle', This);
			break;
		case 'OnePostBorderWidthEr':
			ChangeByInput('OnePostMainDiv', 'borderWidth', This);
			break;
		case 'OnePostBorderColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'OnePostMainDiv');
			break;
		case 'OnePostBorderColorErA':
			ShowCP(eve, 'OnePostBorderColorEr', 'borderColor', 'OnePostMainDiv');
			break;
		case 'VerPostBorderStyleEr':
			ChangeByInput('OnePostTopPart', 'borderStyle', This);
			ChangeByInput('OnePostBotPart', 'borderStyle', This);
			break;
		case 'VerPostBorderWidthEr':
			ChangeByInput('OnePostTopPart', 'borderBottomWidth', This);
			ChangeByInput('OnePostBotPart', 'borderTopWidth', This);
			break;
		case 'VerPostBorderColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'OnePostTopPart');
			break;
		case 'VerPostBorderColorErA':
			ShowCP(eve, 'VerPostBorderColorEr', 'borderColor', 'OnePostTopPart');
			break;
		case 'PostBodyBackIsColorEr':
			SwitchDisplay('PostBodyBackgroundIsTexture', 0);
			SwitchDisplay('PostBodyBackgroundIsImage', 0);
			SwitchDisplay('PostBodyBackgroundIsColor', 1);
			ChangeByInput('OnePostMainDiv', 'backgroundImage', '');
			break;
		case 'PostBodyBackIsTextureEr':
			SwitchDisplay('PostBodyBackgroundIsColor', 0);
			SwitchDisplay('PostBodyBackgroundIsImage', 0);
			SwitchDisplay('PostBodyBackgroundIsTexture', 1, 'inline');
			doDuty(dg('PostBodyBackTextureEr'));
			break;
		case 'PostBodyBackIsImageEr':
			SwitchDisplay('PostBodyBackgroundIsColor', 0);
			SwitchDisplay('PostBodyBackgroundIsTexture', 0);
			SwitchDisplay('PostBodyBackgroundIsImage', 1, 'inline');
			doDuty(dg('PostBodyBackImageEr'));
			break;
		case 'PostBodyBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'OnePostMainDiv');
			break;
		case 'PostBodyBackColorErA':
			ShowCP(eve, 'PostBodyBackColorEr', 'backgroundColor', 'OnePostMainDiv');
			break;
		case 'PostBodyBackTextureEr':
			ChangeByInput('OnePostMainDiv', 'backgroundImage', This);
			ChangeByInput('OnePostMainDiv', 'backgroundRepeat', 'repeat');
			break;
		case 'PostBodyBackImageEr':
			ChangeByInput('OnePostMainDiv', 'backgroundImage', This);
			ChangeByInput('OnePostMainDiv', 'backgroundRepeat', 'no-repeat');
			break;
		case 'OnePostTopBackIsColorEr':
			SwitchDisplay('OnePostTopBackgroundIsTexture', 0);
			SwitchDisplay('OnePostTopBackgroundIsImage', 0);
			SwitchDisplay('OnePostTopBackgroundIsColor', 1);
			ChangeByInput('OnePostTopPart', 'backgroundImage', '');
			break;
		case 'OnePostTopBackIsTextureEr':
			SwitchDisplay('OnePostTopBackgroundIsColor', 0);
			SwitchDisplay('OnePostTopBackgroundIsImage', 0);
			SwitchDisplay('OnePostTopBackgroundIsTexture', 1, 'inline');
			doDuty(dg('OnePostTopBackTextureEr'));
			break;
		case 'OnePostTopBackIsImageEr':
			SwitchDisplay('OnePostTopBackgroundIsColor', 0);
			SwitchDisplay('OnePostTopBackgroundIsTexture', 0);
			SwitchDisplay('OnePostTopBackgroundIsImage', 1, 'inline');
			doDuty(dg('OnePostTopBackImageEr'));
			break;
		case 'OnePostTopBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'OnePostTopPart');
			break;
		case 'OnePostTopBackColorErA':
			ShowCP(eve, 'OnePostTopBackColorEr', 'backgroundColor', 'OnePostTopPart');
			break;
		case 'OnePostTopBackTextureEr':
			ChangeByInput('OnePostTopPart', 'backgroundImage', This);
			ChangeByInput('OnePostTopPart', 'backgroundRepeat', 'repeat');
			break;
		case 'OnePostTopBackImageEr':
			ChangeByInput('OnePostTopPart', 'backgroundImage', This);
			ChangeByInput('OnePostTopPart', 'backgroundRepeat', 'no-repeat');
			break;
		case 'OnePostBotBackIsColorEr':
			SwitchDisplay('OnePostBotBackgroundIsTexture', 0);
			SwitchDisplay('OnePostBotBackgroundIsImage', 0);
			SwitchDisplay('OnePostBotBackgroundIsColor', 1);
			ChangeByInput('OnePostBotPart', 'backgroundImage', '');
			break;
		case 'OnePostBotBackIsTextureEr':
			SwitchDisplay('OnePostBotBackgroundIsColor', 0);
			SwitchDisplay('OnePostBotBackgroundIsImage', 0);
			SwitchDisplay('OnePostBotBackgroundIsTexture', 1, 'inline');
			doDuty(dg('OnePostBotBackTextureEr'));
			break;
		case 'OnePostBotBackIsImageEr':
			SwitchDisplay('OnePostBotBackgroundIsColor', 0);
			SwitchDisplay('OnePostBotBackgroundIsTexture', 0);
			SwitchDisplay('OnePostBotBackgroundIsImage', 1, 'inline');
			doDuty(dg('OnePostBotBackImageEr'));
			break;
		case 'OnePostBotBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'backgroundColor', 'OnePostBotPart');
			break;
		case 'OnePostBotBackColorErA':
			ShowCP(eve, 'OnePostBotBackColorEr', 'backgroundColor', 'OnePostBotPart');
			break;
		case 'OnePostBotBackTextureEr':
			ChangeByInput('OnePostBotPart', 'backgroundImage', This);
			ChangeByInput('OnePostBotPart', 'backgroundRepeat', 'repeat');
			break;
		case 'OnePostBotBackImageEr':
			ChangeByInput('OnePostBotPart', 'backgroundImage', This);
			ChangeByInput('OnePostBotPart', 'backgroundRepeat', 'no-repeat');
			break;
		case 'PostBodyVP':
			var t = parseFloat(This.value);
			ChangeByInput('OnePostMidPart', 'paddingTop', t + 'px');
			ChangeByInput('OnePostMidPart', 'paddingBottom', t + 'px');
			break;
		case 'PostBodyVPInc':
			doIncDec('PostBodyVP', 2, 0, 50);
			break;
		case 'PostBodyVPDec':
			doIncDec('PostBodyVP', -2, 0, 50);
			break;
		case 'PostHeadFootVP':
			var t = parseFloat(This.value);
			ChangeByInput('OnePostTitle', 'paddingTop', t + 'px');
			ChangeByInput('OnePostDateTop', 'paddingTop', t + 'px');
			ChangeByInput('OnePostTopPart', 'paddingBottom', t + 'px');
			ChangeByInput('OnePostBotPart', 'paddingTop', t + 'px');
			ChangeByInput('OnePostBotPart', 'paddingBottom', t + 'px');
			break;
		case 'PostHeadFootVPInc':
			doIncDec('PostHeadFootVP', 1, 0, 50);
			break;
		case 'PostHeadFootVPDec':
			doIncDec('PostHeadFootVP', -1, 0, 50);
			break;
		case 'PostBodyHP':
			var t = parseFloat(This.value);
			ChangeByInput('OnePostMidPart', 'paddingRight', t + 'px');
			ChangeByInput('OnePostMidPart', 'paddingLeft', t + 'px');
			break;
		case 'PostBodyHPInc':
			doIncDec('PostBodyHP', 2, 0, 50);
			break;
		case 'PostBodyHPDec':
			doIncDec('PostBodyHP', -2, 0, 50);
			break;
		case 'PostHeadFootHP':
			var t = parseFloat(This.value);
			ChangeByInput('OnePostTopPart', 'paddingRight', t + 'px');
			ChangeByInput('OnePostTopPart', 'paddingLeft', t + 'px');
			ChangeByInput('OnePostBotPart', 'paddingRight', t + 'px');
			ChangeByInput('OnePostBotPart', 'paddingLeft', t + 'px');
			break;
		case 'PostHeadFootHPInc':
			doIncDec('PostHeadFootHP', 2, 0, 50);
			break;
		case 'PostHeadFootHPDec':
			doIncDec('PostHeadFootHP', -2, 0, 50);
			break;
		case 'CellDirDirectionIsLTREr':
			dg('OnePostBodyAlignIsNormErImg').src = 'barimg/i_align_left.gif';
			PushImgBut('CellDirDirRTLErImg', false);
			PushImgBut('CellDirDirLTRErImg', true);
			SwitchFloat('OnePostTitle', 0, 'left', 'LTR');
			SwitchFloat('OnePostDateTop', 0, 'right');
			ChangeByInput('OnePostMainDiv', 'direction', 'ltr');
			ChangeByInput('OnePostBodyAlignTripleContainer', 'direction', 'ltr');
			doDuty(dg('OnePostBodyAlignIsNorm'));
			SwitchFloat('OnePostPermLinkPart', 1, 'left');
			SwitchFloat('OnePostCommentsPart', 1, 'right');
			SwitchFloat('OnePostTitleSettingEr', 1);
			SwitchFloat('OnePostDateTopSettingEr', 1);
			SwitchFloat('OnePostPostBodySettingEr', 1);
			SwitchFloat('OnePostCommentingSettingEr', 1);
			SwitchFloat('OnePostPermLinkSettingEr', 1);
			SwitchFloat('OnePostPostSepSettingEr', 1);
			break;
		case 'CellDirDirectionIsRTLEr':
			dg('OnePostBodyAlignIsNormErImg').src = 'barimg/i_align_right.gif';
			PushImgBut('CellDirDirLTRErImg', false);
			PushImgBut('CellDirDirRTLErImg', true);
			SwitchFloat('OnePostTitle', 1, 'right', 'RTL');
			SwitchFloat('OnePostDateTop', 1, 'left');
			ChangeByInput('OnePostMainDiv', 'direction', 'rtl');
			ChangeByInput('OnePostBodyAlignTripleContainer', 'direction', 'rtl');
			doDuty(dg('OnePostBodyAlignIsNorm'));
			SwitchFloat('OnePostPermLinkPart', 0, 'right');
			SwitchFloat('OnePostCommentsPart', 0, 'left');
			SwitchFloat('OnePostTitleSettingEr', 0);
			SwitchFloat('OnePostDateTopSettingEr', 0);
			SwitchFloat('OnePostPostBodySettingEr', 0);
			SwitchFloat('OnePostCommentingSettingEr', 0);
			SwitchFloat('OnePostPermLinkSettingEr', 0);
			SwitchFloat('OnePostPostSepSettingEr', 0);
			break;
		case 'DateFormatIsGregorian':
			writeCurrentTime(0);
			doDuty(dg('PermLinkExp'));
			break;
		case 'DateFormatIsHijri':
			writeCurrentTime(1);
			doDuty(dg('PermLinkExp'));
			break;
		case 'PostDateColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'OnePostDateTop');
			break;
		case 'PostDateColorErA':
			ShowCP(eve, 'PostDateColorEr', 'color', 'OnePostDateTop');
			break;
		case 'PostDateStandingIsSingle':
			ChangeByInput('OnePostDateTop', 'width', '100%');
			ChangeByInput('OnePostTitle', 'width', '100%');
			break;
		case 'PostDateStandingIsAdjacent':
			ChangeByInput('OnePostDateTop', 'width', '50%');
			ChangeByInput('OnePostTitle', 'width', '50%');
			break;
		case 'PostTitleColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'OnePostTitle');
			break;
		case 'PostTitleColorErA':
			ShowCP(eve, 'PostTitleColorEr', 'color', 'OnePostTitle');
			break;
		case 'OnePostTitleDirectionIsLTREr':
			PushImgBut('OnePostTitleDirRTLErImg', false);
			PushImgBut('OnePostTitleDirLTRErImg', true);
			ChangeByInput('OnePostTitle', 'direction', 'ltr');
			if (getGCW()) {
				dg('OnePostTitleAlignErLeft').checked = true;
				doDuty(dg('OnePostTitleAlignErLeft'));
			}
			break;
		case 'OnePostTitleDirectionIsRTLEr':
			PushImgBut('OnePostTitleDirLTRErImg', false);
			PushImgBut('OnePostTitleDirRTLErImg', true);
			ChangeByInput('OnePostTitle', 'direction', 'rtl');
			if (getGCW()) {
				dg('OnePostTitleAlignErRight').checked = true;
				doDuty(dg('OnePostTitleAlignErRight'));
			}
			break;
		case 'PostBodyColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'OnePostMidPart');
			break;
		case 'PostBodyColorErA':
			ShowCP(eve, 'PostBodyColorEr', 'color', 'OnePostMidPart');
			break;
		case 'OnePostBodyAlignIsNorm':
			PushImgBut('OnePostBodyAlignIsCenterErImg', false);
			PushImgBut('OnePostBodyAlignIsJustifyErImg', false);
			PushImgBut('OnePostBodyAlignIsNormErImg', true);
			ChangeByInput('OnePostMidPart', 'textAlign', dg('CellDirDirectionIsRTLEr').checked ? 'right' : 'left');
			break;
		case 'OnePostBodyAlignIsCenter':
			PushImgBut('OnePostBodyAlignIsNormErImg', false);
			PushImgBut('OnePostBodyAlignIsJustifyErImg', false);
			PushImgBut('OnePostBodyAlignIsCenterErImg', true);
			ChangeByInput('OnePostMidPart', 'textAlign', 'center');
			break;
		case 'OnePostBodyAlignIsJustify':
			PushImgBut('OnePostBodyAlignIsNormErImg', false);
			PushImgBut('OnePostBodyAlignIsCenterErImg', false);
			PushImgBut('OnePostBodyAlignIsJustifyErImg', true);
			ChangeByInput('OnePostMidPart', 'textAlign', 'justify');
			break;
		case 'OnePostMidPartLineHeightEr':
			ChangeByInput('OnePostMidPart', 'lineHeight', This);
			break;
		case 'PostCommentsColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'OnePostComments');
			break;
		case 'PostCommentsColorErA':
			ShowCP(eve, 'PostCommentsColorEr', 'color', 'OnePostComments');
			break;
		case 'PostCommentsHoverColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'OnePostCommentsPart');
			break;
		case 'PostCommentsHoverColorErA':
			ShowCP(eve, 'PostCommentsHoverColorEr', 'color', 'OnePostCommentsPart');
			break;
		case 'PostPermLinkColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'OnePostPermLink');
			break;
		case 'PostPermLinkColorErA':
			ShowCP(eve, 'PostPermLinkColorEr', 'color', 'OnePostPermLink');
			break;
		case 'PermLinkExp':
			var tempStr = This.value,
			cur;
			var now = new Date;
			cur = tempStr.indexOf(translateIt('!Zamaan'));
			if (cur == -1) cur = tempStr.indexOf('$TIME');
			if (cur != -1) tempStr = tempStr.substring(0, cur) + '' + now.getHours() + ':' + now.getMinutes() + '' + tempStr.substring(cur + 5, tempStr.length);
			cur = tempStr.indexOf(translateIt('!Nevis'));
			if (cur == -1) cur = tempStr.indexOf(translateIt('!Neviis'));
			if (cur == -1) cur = tempStr.indexOf('$AUTH');
			if (cur != -1) tempStr = tempStr.substring(0, cur) + (global_lang == 'fa' ? translateIt('Aideen') : 'Aideen') + tempStr.substring(cur + 5, tempStr.length);
			var theDate = dg('OnePostDateTop').innerHTML;
			var extspc = 0;
			cur = tempStr.indexOf(translateIt('!Tarikh'));
			if (cur == -1) cur = tempStr.indexOf(translateIt('!Tariikh'));
			if (cur == -1) {
				cur = tempStr.indexOf('$DATE');
				extspc = -1
			}
			if (cur != -1) tempStr = tempStr.substring(0, cur) + (theDate) + tempStr.substring(cur + 6 + extspc, tempStr.length);
			cur = tempStr.indexOf(translateIt('!Mabhas'));
			if (cur == -1) cur = tempStr.indexOf('$CATG');
			if (cur != -1) {
				if (global_prov == 'blogfa' || global_prov == 'persianblog') kd_alert('does not support "Post Categories".');
				tempStr = tempStr.substring(0, cur) + translateIt('omoomi') + tempStr.substring(cur + 5, tempStr.length);
			}
			ChangeByInput('OnePostPermLink', 'innerHTML', tempStr);
			break;
		case 'PostSepHeight':
			var t = parseFloat(This.value);
			ChangeByInput('PostSepDiv', 'height', t + 'px');
			ChangeByInput('PostSepDivInner', 'height', (t / 2) + 'px');
			ChangeByInput('PostSepDivInner', 'marginBottom', (t / 2) + 'px');
			break;
		case 'PostSepHeightInc':
			doIncDec('PostSepHeight', 2, 0, 50);
			break;
		case 'PostSepHeightDec':
			doIncDec('PostSepHeight', -2, 0, 50);
			break;
		case 'PostSepDivBackIsColorEr':
			ChangeByInput('PostSepDivInner', 'borderBottomWidth', '1px');
			SwitchDisplay('PostSepDivBackgroundIsTexture', 0);
			SwitchDisplay('PostSepDivBackgroundIsImage', 0);
			SwitchDisplay('PostSepDivBackgroundIsColor', 1);
			ChangeByInput('PostSepDiv', 'backgroundImage', '');
			break;
		case 'PostSepDivBackIsTextureEr':
			ChangeByInput('PostSepDivInner', 'borderBottomWidth', '0px');
			SwitchDisplay('PostSepDivBackgroundIsColor', 0);
			SwitchDisplay('PostSepDivBackgroundIsImage', 0);
			SwitchDisplay('PostSepDivBackgroundIsTexture', 1, 'inline');
			doDuty(dg('PostSepDivBackTextureEr'));
			break;
		case 'PostSepDivBackIsImageEr':
			ChangeByInput('PostSepDivInner', 'borderBottomWidth', '0px');
			SwitchDisplay('PostSepDivBackgroundIsColor', 0);
			SwitchDisplay('PostSepDivBackgroundIsTexture', 0);
			SwitchDisplay('PostSepDivBackgroundIsImage', 1, 'inline');
			doDuty(dg('PostSepDivBackImageEr'));
			break;
		case 'PostSepDivBackColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'PostSepDivInner');
			break;
		case 'PostSepDivBackColorErA':
			ShowCP(eve, 'PostSepDivBackColorEr', 'borderColor', 'PostSepDivInner');
			break;
		case 'PostSepDivBackTextureEr':
			ChangeByInput('PostSepDiv', 'backgroundImage', This);
			ChangeByInput('PostSepDiv', 'backgroundRepeat', 'repeat');
			break;
		case 'PostSepDivBackImageEr':
			ChangeByInput('PostSepDiv', 'backgroundImage', This);
			ChangeByInput('PostSepDiv', 'backgroundRepeat', 'no-repeat');
			break;
		case 'CopyRightLine':
			ChangeByInput('CopyRightDiv', 'innerHTML', This);
			break;
		case 'AddImageBorderStyleEr':
			ChangeByInput('AddImageImageI', 'borderStyle', This);
			UpdateAddImageNow();
			break;
		case 'AddImageBorderWidthEr':
			ChangeByInput('AddImageImageI', 'borderWidth', This);
			UpdateAddImageNow();
			break;
		case 'AddImageBorderColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'borderColor', 'AddImageImageI');
			UpdateAddImageNow();
			break;
		case 'AddImageBorderColorErA':
			ShowCP(eve, 'AddImageBorderColorEr', 'borderColor', 'AddImageImageI');
			UpdateAddImageNow();
			break;
		case 'AddImageImageIAddress':
			var that = dg('AddImageImageI');
			that.setAttribute('src', This.value);
			UpdateAddImageNow();
			break;
		case 'AddImageImageIAlt':
			var that = dg('AddImageImageI');
			that.setAttribute('alt', This.value);
			UpdateAddImageNow();
			break;
		case 'WholeLinkColorEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'WholeColorCSS_Link');
			break;
		case 'WholeLinkColorErA':
			ShowCP(eve, 'WholeLinkColorEr', 'color', 'WholeColorCSS_Link');
			break;
		case 'WholeLinkHoverEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'WholeColorCSS_Hover');
			break;
		case 'WholeLinkHoverErA':
			ShowCP(eve, 'WholeLinkHoverEr', 'color', 'WholeColorCSS_Hover');
			break;
		case 'WholeLinkVisitEr':
			global_colorRef = This;
			IPickColor(This.value, 'color', 'WholeColorCSS_Visit');
			break;
		case 'WholeLinkVisitErA':
			ShowCP(eve, 'WholeLinkVisitEr', 'color', 'WholeColorCSS_Visit');
			break;
		default:
			alert(s.id + ' is unknown and has no duty! call Aidin please');
		}
	}
}

//DDF
function dg(s) {
	return document.getElementById(s);
}

//DDF
function doIncDec(wut, rate, minv, maxv) {
	var t = parseFloat(dg(wut).value);
	if (t + rate * (global_isShiftDown ? 3 : 1) <= maxv && t + rate * (global_isShiftDown ? 3 : 1) >= minv) t += rate * (global_isShiftDown ? 3 : 1);
	dg(wut).value = t;
	doDuty(dg(wut));
}