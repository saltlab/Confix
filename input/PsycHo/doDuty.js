// merged with extra and ecp

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
			if (global_prov == 'persianblog') kd_alert('doesn\'t support "Archive Index Listing".');
			else {
				sin = 'Oct 2005';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$RECENT')
			if (global_prov == 'blogfa' || global_prov == 'persianblog') kd_alert('doesn\'t support "Recenet entries listing".');
			else {
				sin = '[Last postTitles Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$PROFILE')
			if (global_prov == 'persianblog') kd_alert('doesn\'t support "Blogger\'s profile".');
			else {
				sin = '[Your Profile Here]';
				disableEditLink(sa[0], sa[2], sa[3], 0);
			}
		if (sin == '$LINKS')
			if (global_prov == 'blogger') kd_alert('doesn\'t support "Blog\'s links listing".');
			else {
				sin = '[Your Links Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$CATEGLIST')
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('doesn\'t support "Blog\'s category listing".');
			else {
				sin = '[Category List Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$LINKDUMP')
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('doesn\'t support "Blog\'s link dumps".');
			else {
				sin = '[Daily Links Here]';
				disableEditLink(sa[0], sa[2], sa[3], 1);
			}
		if (sin == '$AUTHORS')
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('doesn\'t support "Blog\'s author listing".');
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
			if (global_prov == 'persianblog') kd_alert('doesn\'t support "RSS Feed".');
			else dst = 'http://[YourBlogName].' + global_prov + '.com/[RSS.xml]';
		}
		if (dst == '$PSYCHO') dst = 'http://psyc.horm.org/?PsycHodrama=[YourPsycHodrama]';
		if (dst == '$CUSTOM') {
			if (global_prov == 'blogger' || global_prov == 'persianblog') kd_alert('doesn\'t support "Custom HTML codes".');
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
	if (!s.tagName) s = dg(s);
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
				if (global_prov == 'persianblog') kd_alert('Doesn\'t reserve anything DEFAULT for PageDescription.');
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
				if (global_prov == 'blogfa' || global_prov == 'persianblog') kd_alert('doesn\'t support "Post Categories".');
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

//DDF
function BoxLength(side) {
	if (dg('_'+side+'_boxNumForce'))
		return parseInt(dg('_'+side+'_boxNumForce').value);
}

//DDF
function BoxLengthByFor(side){
	var i;
	for (i=0; i<maxBoxNumOnSides; i++)
		if (!dg(side+'_PartDiv_'+i) || dg(side+'_PartDiv_'+i).style.display == 'none')
			break;
	return i;
}

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

//DDF
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
			if (s.charAt(i) == sym)
				s = s.substring(0, i)+encArr[j]+s.substring(i+1, s.length);
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
function SelRadio(wut, flip) {
	if (flip == true && dg(wut).checked == true)
		dg(wut).checked = false;
	else
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
	if (! str.innerHTML)
		str = dg(str);
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
	if (!obj.style)
		obj = dg(obj);
	if (!obj)
		return;
	if (!str)
		str = 'block';
	if (!pos)
		str = 'none';
	if (obj.style.display != str)
		obj.style.display = str;
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
		//else
		//	ret = TripleColNameToSix(dg(t).value);
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

//DDF
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

//DDF
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

//DDF
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

//DDF
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

//DDF
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

//DDF
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

//DDF
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

//DDF
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


//DDF
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
	if (uVal == '' || uVal == 'http://' || uVal == 'url(http://)') 
		uVal = '';
	if (uEval == '' || uEval == 'http://' || uEval == 'url(http://)') 
		uEval = '';
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

//DDF
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

//DDF
function ResetPsycHodrama() {
	ReadPsycHodrama(PsycHodramaDefaultString());
}

//DDF
function deBugify(s) {
	dg('jj').innerHTML = (s)+'<br />'+dg('jj').innerHTML;
}

//DDF
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

//DDF
function isBoxVisible(side, part) {
	return (dg(side+'_PartDiv_'+part).style.display != 'none');
}

//DDF
function isLinkVisible(side, part, num) {
	return (dg(side+'_LinkBodyContainer_'+part+'_'+num).style.display != 'none');
}

//DDF
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

	var waitPlz = 'Depending on your browser and PsycHodrama, this operation may take up to 2 minutes.\n\n Do you want to continue?';
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

//DDF
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

//DDF
function SwitchLinkTR(side, part, num, wut) {
	var that = dg('_'+side+'_LinkEr_'+part+'_'+num);
	if (isIE()) 
		that.style.display = wut?'block':'none';
	else
		that.setAttribute('style', wut?'':'display: none');	
	SwitchDisplay(side+'_LinkBodyContainer_'+part+'_'+num, wut);
}

//DDF
function SetValAndDo(id, val, fc) {
	var that = dg(id);
	if ((that.value == val) && (fc != true))
		return;
	that.value = val;
	doDuty(that);
}

//DDF
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

//DDF
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

//DDF
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

//DDF
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

//DDF
function CopyBox(side, src, dst) {
	if (!isBoxVisible(side, dst))
		return;
	var max = (LinkLengthOnBox(side, src) > LinkLengthOnBox(side, dst))?LinkLengthOnBox(side, src):LinkLengthOnBox(side, dst);		
	SetValAndDo('_'+side+'_TitleTxt_'+dst, dg('_'+side+'_TitleTxt_'+src).value);
	for (var i=0; i<max; i++)	
		CopyLink(side, src, i, side, dst, i);
	//dg('_'+side+'_linkNumForce_'+dst).value = dg('_'+side+'_linkNumForce_'+src).value;
}

//DDF
function BoxLength(side) {
	return parseInt(dg('_'+side+'_boxNumForce').value);
}

//DDF
function BoxLengthByFor(side){
	var i;
	for (i=0; i<maxBoxNumOnSides; i++)
		if (!dg(side+'_PartDiv_'+i) || dg(side+'_PartDiv_'+i).style.display == 'none')
			break;
	return i;
}

//DDF
function LinkLengthOnBox(side, part) {
	return parseInt(dg('_'+side+'_linkNumForce_'+part).value);
}

//DDF
function LinkLengthOnBoxByFor(side, part) {
	var i;
	for (i=0; i<maxLinkNumBoxes; i++)
		if (!dg(side+'_LinkBodyContainer_'+part+'_'+i) || dg(side+'_LinkBodyContainer_'+part+'_'+i).style.display == 'none')
			break;
	return i;
}

//DDF
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

//DDF
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
	var isIE = ((ua.indexOf('msie') != -1) && (ua.indexOf('opera') == -1) && (ua.indexOf('webtv') == -1)); 
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

	e = dg('ECP_myRGBS');
	theColour = e.value;

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

//DDF
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

//DDF
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

//DDF
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

//DDF
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

//DDF
function setECPCell(x, isfatheric, v) {
	var prefix = (isfatheric)?'F':'C';
	document.getElementById('ECP_'+prefix+'_ColDiv'+x).style.backgroundColor = v;
	document.getElementById('ECP_'+prefix+'_ColDiv'+x).setAttribute('title', v);
	document.getElementById('ECP_'+prefix+'_Sinput'+x).innerHTML = v;	
}

//DDF
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

//DDF
function resetByHSV() {
	tC_HSV = Array(getValFromInput('ECP_myH', 360), getValFromInput('ECP_myS', 100), getValFromInput('ECP_myV', 100));
	tC_RGB = hsv2rgb(tC_HSV);
    hoverColor();
    return false;
}

//DDF
function resetByRGB() {
	var theRGB = new Array();
	for (var i=0; i<3; i++) 
		theRGB[i] = getValFromInput('ECP_my'+('RGB').charAt(i), 255);
	tC_RGB = theRGB;
	tC_HSV = rgb2hsv(tC_RGB);
    hoverColor();
    return false;
}

//DDF
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

//DDF
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




// kines.js



var global_canKinesAlert = true;
var tab = new Array();
var kinesoDrama;
tab[0] = '';
tab[1] = '\t';
for (var i=2; i<20; i++)
	tab[i] = tab[1]+tab[i-1];	

//DDF
function dgv(wut) {
	if (!dg(wut))
		return false;
	else
		return dg(wut).value;
}

//DDF
function dgChecked(x) {
	return eval('document.PsycHoForm.'+x+'.checked');
}

//DDF
function dgSelected(x) {
	return eval('document.PsycHoForm.'+x+'.selected');
}

//DDF
function k_getDir(x) {
	return (dgChecked(x)?'ltr':'rtl');
}

//DDF
function k_getAlign(x) {
	return (dgChecked(x+'AlignErLeft')?'left':(dgChecked(x+'AlignErRight')?'right':'center'))
}

//DDF
function k_getAlignSide(x) {
	return k_getAlign(x);
//	return (dgSelected(x+'AlignEr[0]')?'left':(dgSelected(x+'AlignEr[2]')?'right':'center'))
}

//DDF
function k_getFFamily(x) {
	return (''+dgv(x+'FontFamily')+', sans-serif');
}

//DDF
function k_getFontSize(x) {
	return(dgv(x+'FontSizeEr'));
}

//DDF
function k_getLineHeight(x) {
	return(dgv(x+'LineHeightEr'));
}

//DDF
function k_getColor(x) {
	var ret = dgv(x);
	if (ret == '')
		ret = 'transparent';
	var tempVal = name2rgb(ret);
	if (tempVal)
		ret = tempVal;
	return ret;
}

//DDF
function k_getFontEffects(x) {
	var ret = '';
	if (dgChecked(x+'FontBoldEr'))
		ret += 'font-weight: bold; ';
	if (dgChecked(x+'FontItalicEr'))
		ret += 'font-style: italic; ';
	if (dg(x+'FontUnderlineEr') && dgChecked(x+'FontUnderlineEr'))
		ret += 'text-decoration: underline; ';
	return ret;
}

//DDF
function k_border(x) {
	if (k_getColor(x+'BorderColorEr') == 'transparent')
		return '0px '+dgv(x+'BorderStyleEr')+' '+k_getColor(x+'BorderColorEr');
	else
		return dgv(x+'BorderWidthEr')+' '+dgv(x+'BorderStyleEr')+' '+k_getColor(x+'BorderColorEr');
}

//DDF
function k_tripleBg(x) {
	var ret = '';
	ret += k_getColor(x+'BackColorEr');
	if (dgChecked(x+'BackIsTextureEr'))
		ret += ' url("'+dgv(x+'BackTextureEr')+'") repeat top center';
	else
		if (dgChecked(x+'BackIsImageEr'))
			ret += ' url("'+dgv(x+'BackImageEr')+'") no-repeat top center';	
	return ret;
}

//DDF
function k_tripleBgSide(x) {
	var ret = '';
	ret += k_getColor(x+'BackColorEr');
	if (dgSelected(x+'BackBackEr[1]'))
		ret += ' url("'+dgv(x+'BackTextureEr')+'") repeat top center';
	else
		if (dgSelected(x+'BackBackEr[2]'))
			ret += ' url("'+dgv(x+'BackImageEr')+'") no-repeatt top center';	
	return ret;
}

//DDF
function k_sideFeatures(side) {
	var t = '';

	t += tab[2]+'#Side'+side+'Col .Box '+tab[2]+'{ '
		+ 'background: '+k_tripleBgSide('_'+side+'_DefaultDiv')+'; '
		+ 'border: '+k_border('_'+side+'_Default')+'; '
		+ 'font-family: '+k_getFFamily(side+'_PartDiv_0')+'; '		
		+ '}'+'\n';

	if (!global_isMinimized) {	
		t += tab[2]+'#Side'+side+'Col a '+tab[2]+'{ '
			+ 'color: '+k_getColor('_'+side+'_LinkColorEr')+'; '
			+ '}'+'\n';
	
		t += tab[2]+'#Side'+side+'Col a:hover '+tab[1]+'{ '
			+ 'color: '+k_getColor('_'+side+'_LinkHoverEr')+'; '
			+ '}'+'\n';
	}
	
	t += tab[2]+'#Side'+side+'Col .Sep '+tab[2]+'{ '
		+ 'height: '+dgv('_'+side+'_PartSepHeight')+'px; '
		+ '}'+'\n';		
		
	var mb = ((parseInt(dgv('_'+side+'_PartSepHeight'))-parseInt(dgv('_'+side+'_SepBorderWidthEr')))/2);		
	t += tab[2]+'#Side'+side+'Col .SepS'+tab[2]+'{ '
		+ 'height: '+mb+'px; '
		+ 'margin-bottom: '+mb+'px; '
		+ 'border-bottom: '+k_border('_'+side+'_Sep')+'; '
		+ 'font-size: 1px '
		+ '}'+'\n';			
		
	t += tab[2]+'#Side'+side+'Col .Title'+tab[1]+'{ '
		+ 'font-size: '+k_getFontSize(side+'_Title_0')+'; '
		+ 'color: '+k_getColor('_'+side+'_TitleColorEr')+'; '		
		+ k_getFontEffects(side+'_Title_0')
		+ 'border-bottom: 1px solid '+k_getColor('_'+side+'_TitleUnderlineEr')+'; '
		+ 'margin-bottom: 3px; '
		+ '}'+'\n';	

	var sidePaddingBox = parseInt(dgv('SideSpcPaddingView'))+'px';
	t += tab[2]+'#Side'+side+'Col .Inner'+tab[1]+'{ '
		+ 'text-align: '+k_getAlignSide(side+'_DefaultDiv_0')+'; '
		+ 'font-size: '+k_getFontSize(side+'_DefaultDiv_0')+'; '		
		+ 'color: '+k_getColor('_'+side+'_DefaultDivColorEr')+'; '
		+ 'padding: 5px '+sidePaddingBox+' 8px '+sidePaddingBox+'; '
		+ 'line-height: '+k_getLineHeight('_'+side+'_PartDiv')+'; '		
		+ '}'+'\n';
		
	if (global_prov == 'blogger') {
		t += tab[2]+'#commentInline'+tab[2]+'{ '
			+ 'margin: 10px 20px; '
			+ 'text-align: left; '
			+ '}'+'\n';
		t += tab[2]+'.commentHead'+tab[2]+'{ '
			+ 'margin: 0px 10px 20px 10px; '
			+ 'padding-top: 5px; '
			+ 'color: #333; '
			+ '}'+'\n';
		t += tab[2]+'.comments-block'+tab[2]+'{ '
			+ 'line-height: 150%; '
			+ 'padding: 0px 30px; '
			+ '}'+'\n';			
		t += tab[2]+'.comment-poster'+tab[2]+'{ '
			+ 'padding-bottom: 10px; '
			+ '}'+'\n';
		t += tab[2]+'.comment-body'+tab[2]+'{ '
			+ 'margin: 0px; '
			+ 'padding-bottom: 10px; '
			+ 'padding-left: 20px; '
			+ '}'+'\n';
		t += tab[2]+'.innerCmntBody'+tab[2]+'{ '
			+ 'margin: 5px 0px; '
			+ '}'+'\n';
		t += tab[2]+'.comment-timestamp'+tab[1]+'{ '
			+ 'margin: 5px 0px; '
			+ 'padding: 0px 0px 8px 20px; '
			+ 'color: #999; '						
			+ '}'+'\n';
		t += tab[2]+'.comment-timestamp a '+tab[1]+'{ '
			+ 'color: #666; '						
			+ '}'+'\n';
		t += tab[2]+'.deleted-comment'+tab[1]+'{ '
			+ 'font-style: italic; '
			+ 'color: gray; '
			+ '}'+'\n';
	}		
		
	return t;
}

//DDF
function k__prov_blogger_date() {
	var t = '';
	if (dgChecked('DateFormatIsHijri'))	{
			t += '<BlogDateHeader><script type="text/javascript" language="javascript">document.write(ToHijri(\'<$BlogDateHeaderDate$>\'));</script></BlogDateHeader>';
		if (global_lang == 'fa')
			kines_alert(translateIt('kines date alert'));
		else
			kines_alert('Warning: The date format (in order to convert to Hijri) shall be MM/DD/YYYY like 10/25/2005.');
	}
	else
		t += '<BlogDateHeader><$BlogDateHeaderDate$></BlogDateHeader>';
	return t;
}

function k__prov_blogger_cmnt() {
	var t = '';
	t += 	'<BlogItemCommentsEnabled>'
		+			'<a class="PostCmnt" href="<$BlogItemCommentCreate$>"><$BlogItemCommentCount$> comments</a>'
		+	'</BlogItemCommentsEnabled>'
		+	'<BlogItemBacklinksEnabled>'
		+		'<a class="PostCmnt" href="<$BlogItemPermalinkUrl$>#links">links to this post</a>'
		+	'</BlogItemBacklinksEnabled>'+'\n';	
	return t;
}

function k__prov_blogger_inlineCmnts() {
	var t = '';
	t += 			'<ItemPage>'+'\n';
	
	t += tab[5]+		'<div id="commentInline">'+'\n';		
	t += tab[6]+			'<BlogItemCommentsEnabled>'+'\n';
	t += tab[7]+				'<div class="commentHead"><$BlogItemCommentCount$> Comments:</div>'+'\n';	
	t += tab[7]+				'<div class="comments-block">'+'\n';
	t += tab[8]+					'<BlogItemComments>'+'\n';
	t += tab[9]+						'<div class="comment-poster" id="c<$BlogCommentNumber$>">'+'\n';
	t += tab[10]+							'<a name="c<$BlogCommentNumber$>"></a>'+'\n';
	t += tab[10]+							'<$BlogCommentAuthor$> said...'+'\n';	
	t += tab[9]+						'</div>'+'\n';	
	t += tab[9]+						'<div class="comment-body">'+'\n';
	t += tab[10]+							'<div class="innerCmntBody"><$BlogCommentBody$></div>'+'\n';
	t += tab[9]+						'</div>'+'\n';	
	t += tab[9]+						'<div class="comment-timestamp">'+'\n';
	t += tab[10]+								'<a href="#c<$BlogCommentNumber$>" title="comment permalink"><$BlogCommentDateTime$></a>'+'\n';
	t += tab[10]+							'<$BlogCommentDeleteIcon$>'+'\n';	
	t += tab[9]+						'</div>'+'\n';	
	t += tab[9]+						'<hr width="75%" color="gray" size="1px" />'+'\n';	
	t += tab[8]+					'</BlogItemComments>'+'\n';			
	t += tab[7]+				'</div>'+'\n';
	t += tab[7]+				'<div class="comment-timestamp"><$BlogItemCreate$></div>'+'\n';		
	t += tab[6]+			'</BlogItemCommentsEnabled>'+'\n';				
		
	t += tab[6]+			'<BlogItemBacklinksEnabled>'+'\n';
	t += tab[7]+				'<a name="links"></a><div class="commentHead">Links to this post:</div>'+'\n';			
	t += tab[7]+				'<div class="comments-block">'+'\n';
	t += tab[8]+					'<BlogItemBacklinks>'+'\n';
	t += tab[9]+						'<div class="comment-title">'+'\n';
	t += tab[10]+							'<$BlogBacklinkControl$>'+'\n';
	t += tab[10]+							'<a href="<$BlogBacklinkURL$>" rel="nofollow"><$BlogBacklinkTitle$></a> <$BlogBacklinkDeleteIcon$>'+'\n';	
	t += tab[9]+						'</div>'+'\n';	
	t += tab[9]+						'<div class="comment-body">'+'\n';
	t += tab[10]+							'<$BlogBacklinkSnippet$>'+'\n';
	t += tab[10]+							'<br />'+'\n';
	t += tab[10]+							'<span class="comment-poster">'+'\n';	
	t += tab[11]+								'<i>posted by <$BlogBacklinkAuthor$> @ <$BlogBacklinkDateTime$></i>'+'\n';
	t += tab[10]+							'</span>'+'\n';		
	t += tab[9]+						'</div>'+'\n';	
	t += tab[8]+					'</BlogItemBacklinks>'+'\n';			
	t += tab[7]+				'</div>'+'\n';
	t += tab[7]+				'<div class="comment-timestamp"><$BlogItemBacklinkCreate$></div>'+'\n';		
	t += tab[6]+			'</BlogItemBacklinksEnabled>'+'\n';					
	t += tab[6]+			'<div class="comment-timestamp"><a href="<$BlogURL$>"> << Home</a></div>'+'\n';
	
	t += tab[5]+		'</div>'+'\n';		
	t += tab[4]+	'</ItemPage>'+'\n';	
	
	return t;
}

function k__prov_blogfa_cmnt() {
	var t = '';
	t += 			'<BlogComment>'+'\n';
	t += tab[8]+		'<script language="javascript" type="text/javascript">GetBC("<-PostId->");</script>'+'\n';		
	t += tab[7]+	'</BlogComment>'+'\n';
	return t;
}

function k__prov_persianblog_cmnt() {
	var t = '';
	t += 				'<a href="javascript:void(0)" target="_self" onclick="window.open (\'ucomments.asp?id=<#postid#>\',null,\'width=600, height=500, scrollbars=yes, resizable=yes\');">'+'\n';
	t += tab[8]+		'<script type="text/javascript" language="javascript">document.write(get_cc(<#postid#>))</script>'+'\n';		
	t += tab[7]+	'</a>'+'\n';
	return t;
}

function k__commentingHeaderScript() {
	var t = '';
	switch (global_prov) {
		case 'blogfa' :
			t += '\n';
			t += tab[1]+'<script type="text/javascript" language="javascript">'+'\n';
			t += tab[1]+'<!--'+'\n';
			t += tab[2]+	'function GetBC(lngPostid) {'+'\n';
			t += tab[3]+		'var intTimeZone="<-BlogTimeZone->", strBlogId="<-BlogId->", intCount=-1, strResult="";'+'\n';
			t += tab[3]+		'try {'+'\n';	
			t += tab[4]+			'for (i=0;i<BlogComments.length;i+=2) {'+'\n';
			t += tab[5]+				'if (BlogComments[i]==lngPostid)'+'\n';
			t += tab[6]+					'intCount=BlogComments[i+1] ;'+'\n';
			t += tab[4]+			'}'+'\n';
			t += tab[3]+		'} catch(e) {}'+'\n';
			t += tab[3]+		'if (intCount == -1) strResult="'+translateIt('archive e nazaraat')+'";'+'\n';
			t += tab[3]+		'if (intCount == 0)	strResult="'+translateIt('nazar bedahid')+'";'+'\n';
			t += tab[3]+		'if (intCount == 1)	strResult="'+translateIt('1 nazar')+'";'+'\n';
			t += tab[3]+		'if (intCount > 1)	strResult=intCount + " '+translateIt('nazar')+'";'+'\n';
			t += tab[3]+			'var strUrl = "http://www.blogfa.com/Comments.aspx?blogid=" + strBlogId + "&postid=" + lngPostid + "&timezone=" + intTimeZone;'+'\n';
			t += tab[3]+			'var strResult = "<a href=\\\"javascript:void(0)\\\" target=\\\"_self\\\" onclick=\\\"javascript:window.open(\'"+strUrl+"\',\'blogfa_comments\',\'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,width=500px,height=500px\')\\\" >"+strResult+"</a>" ;'+'\n';
			t += tab[3]+		'document.write(strResult);'+'\n';
			t += tab[2]+	'}'+'\n';		
			t += tab[2]+	'function OpenLD() {'+'\n';			
			t += tab[3]+		'window.open(\'LinkDump.aspx\',\'blogfa_ld\',\'status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=500px,height=500px\');'+'\n';	
			t += tab[3]+		'return true;';
			t += tab[2]+	'}'+'\n';	
			t += tab[1]+'// -->'+'\n';
			t += tab[1]+'</script>'+'\n';
			break;
		
		case 'persianblog' :	
			t += '\n';
				t += tab[1]+'<script type="text/javascript" language="javascript" src="http://commenting.persianblog.com/cc.asp?username=<#user#>"></script>'+'\n';
			t += tab[1]+'<script type="text/javascript" language="javascript">'+'\n';
			t += tab[1]+'<!--'+'\n';							
			t += tab[2]+	'function get_cc(postid) {'+'\n';
			t += tab[3]+		'for (var i=0; i<PB_PIPP; i++)'+'\n';
			t += tab[4]+			'if (PB_CCA[i*2] == postid)'+'\n';
			t += tab[5]+				'if (PB_CCA[i*2+1] > 0)'+'\n';
			t += tab[6]+					'return "( "+PB_CCA[i*2+1]+" '+translateIt('nazar')+' )";'+'\n';
			t += tab[5]+				'else'+'\n';
			t += tab[6]+					'if (PB_CCA[i*2+1] == 0)'+'\n';
			t += tab[7]+						'return "( '+translateIt('nazar bedin')+' )";'+'\n';
			t += tab[6]+					'else'+'\n';
			t += tab[7]+						'if (PB_CCA[i*2+1] == -1)'+'\n';
			t += tab[8]+							'return "( '+translateIt('gheyre faaal')+' )";'+'\n';			
			t += tab[3]+		'return "( '+translateIt('baygaani shode')+' )";'+'\n';
			t += tab[2]+	'}'+'\n';	
			t += tab[1]+'// -->'+'\n';				
			t += tab[1]+'</script>'+'\n';			
			break;
			
		case 'blogger' :
			t += '\n';
			t += tab[1]+'<!-- Insert your commenting javascript code here -->'+'\n';
			if (dgChecked('DateFormatIsHijri'))	{
				t += tab[1]+'<script type="text/javascript" language="javascript">'+'\n';
				t += tab[1]+'<!--'+'\n';							
				t += tab[2]+		'/* This Solar Date Utility Function is Copyrighted(C) to Mahmood Shafiee Zaragar [http://sobh.netfirms.com] and Aideen NasiriShargh [http://aideen.org] and has been prepard only for PsycHo [http://psyc.horm.org] use. */'+'\n';
				t += tab[2]+		'var DaysToMonth = [[0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 365], [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]];'+'\n';
				t += tab[2]+		'var MonthNames = new Array("&#1601;&#1585;&#1608;&#1585;&#1583;&#1740;&#1606;", "&#1575;&#1585;&#1583;&#1740;&#1576;&#1607;&#1588;&#1578;", "&#1582;&#1585;&#1583;&#1575;&#1583;", "&#1578;&#1740;&#1585;", "&#1605;&#1585;&#1583;&#1575;&#1583;", "&#1588;&#1607;&#1585;&#1740;&#1608;&#1585;", "&#1605;&#1607;&#1585;", "&#1570;&#1576;&#1575;&#1606;", "&#1570;&#1584;&#1585;", "&#1583;&#1740;", "&#1576;&#1607;&#1605;&#1606;", "&#1575;&#1587;&#1601;&#1606;&#1583;");'+'\n';
				t += tab[2]+		'var WeekDayNames = new Array("&#1740;&#1705;&#1588;&#1606;&#1576;&#1607;", "&#1583;&#1608;&#1588;&#1606;&#1576;&#1607;", "&#1587;&#1607; &#1588;&#1606;&#1576;&#1607;", "&#1670;&#1607;&#1575;&#1585; &#1588;&#1606;&#1576;&#1607;", "&#1662;&#1606;&#1580; &#1588;&#1606;&#1576;&#1607;", "&#1580;&#1605;&#1593;&#1607;", "&#1588;&#1606;&#1576;&#1607;");'+'\n';
				t += tab[2]+		'var MonthDayNames = new Array("&#1575;&#1608;&#1604;", "&#1583;&#1608;&#1605;", "&#1587;&#1608;&#1605;", "&#1670;&#1607;&#1575;&#1585;&#1605;", "&#1662;&#1606;&#1580;&#1605;", "&#1588;&#1588;&#1605;", "&#1607;&#1601;&#1578;&#1605;", "&#1607;&#1588;&#1578;&#1605;", "&#1606;&#1607;&#1605;", "&#1583;&#1607;&#1605;", "&#1740;&#1575;&#1586;&#1583;&#1607;&#1605;", "&#1583;&#1608;&#1575;&#1586;&#1583;&#1607;&#1605;", "&#1587;&#1740;&#1586;&#1583;&#1607;&#1605;", "&#1670;&#1607;&#1575;&#1585;&#1583;&#1607;&#1605;", "&#1662;&#1575;&#1606;&#1586;&#1583;&#1607;&#1605;", "&#1588;&#1575;&#1606;&#1586;&#1583;&#1607;&#1605;", "&#1607;&#1601;&#1583;&#1607;&#1605;", "&#1607;&#1580;&#1583;&#1607;&#1605;", "&#1606;&#1608;&#1586;&#1583;&#1607;&#1605;", "&#1576;&#1740;&#1587;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1740;&#1705;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1583;&#1608;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1587;&#1608;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1670;&#1607;&#1575;&#1585;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1662;&#1606;&#1580;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1588;&#1588;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1607;&#1601;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1607;&#1588;&#1578;&#1605;", "&#1576;&#1740;&#1587;&#1578; &#1608; &#1606;&#1607;&#1605;", "&#1587;&#1740; &#1575;&#1605;", "&#1587;&#1740; &#1608; &#1740;&#1705;&#1605;");'+'\n';
				t += tab[2]+		'var PersianDigits = new Array("&#1776;", "&#1777;", "&#1778;", "&#1779;", "&#1780;", "&#1781;", "&#1782;", "&#1783;", "&#1784;", "&#1785;");'+'\n';
				t += tab[2]+	'function PersianNumberString(num) {	var ret = ""; do { ret = PersianDigits[(num%10)] + ret; num = Math.floor(num/10);	} while (num > 0);	return ret; }'+'\n';
				t += tab[2]+	'function IsLeapYear(DateKind, Year) { 	return (DateKind)?((Year % 4 == 0) && ((Year % 100 != 0) || (Year % 400 == 0))):(((Year + 38) * 31 % 128) <= 30); }'+'\n';
				t += tab[2]+	'function ToHijri(DateStr) {'+'\n';
				t += tab[3]+		'	var SplDate = DateStr.split("/"); if(SplDate.length<3) return("Date ["+DateStr+"] is not in MM/DD/YYYY format."); var M = new Object, D = new Object, Y = new Object, Days, LeapDay; '+'\n';
				t += tab[3]+		'M.value = parseInt(SplDate[0]);	D.value = parseInt(SplDate[1]);	Y.value = parseInt(SplDate[2]);	LeapDay = IsLeapYear(0, Y.value-622);'+'\n';
				t += tab[3]+		'	Days = DaysToMonth[1][M.value - 1] + D.value + ((M.value > 2) && IsLeapYear(1, Y.value)) + 286 + (IsLeapYear(1, Y.value - 1) && LeapDay);'+'\n';
				t += tab[3]+		'Y.value -= 622; M.value = 0; D.value = 0;'+'\n';
				t += tab[3]+		'if (Days > (365 + LeapDay))	{ Y.value ++; Days -= (365 + LeapDay); }'+'\n';
				t += tab[3]+		'LeapDay = 0;'+'\n';
				t += tab[3]+		'for (var m = 1; m <= 12; m++) {	LeapDay |= ((m == 13) && (IsLeapYear(0, Y.value)));	if (Days <= (DaysToMonth[0][m] + LeapDay)) { M.value = m; D.value = Days - (DaysToMonth[0][M.value - 1] + LeapDay); break; }	 }'+'\n';
				t += tab[3]+			'return (MonthDayNames[D.value - 1] + " " + MonthNames[M.value - 1] + " &#1605;&#1575;&#1607; " + PersianNumberString(Y.value)); '+'\n';
				t += tab[2]+	'}'+'\n';
				t += tab[1]+'// -->'+'\n';				
				t += tab[1]+'</script>'+'\n';
			}
			break;
	}	
	return t;
}

//DDF
function kines_alert(s) {
	if (global_canKinesAlert) {
		SwitchDisplay('PsycHokinesisAlertDiv', 1);
			dg('PsycHokinesisAlertInner').innerHTML = dg('PsycHokinesisAlertInner').innerHTML+' <span class="dot">&#8226;</span> '+zwnjify(s)+'<br />';
	}
}

function k_prov_blogtitle() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :	
			t = 		'<ItemPage><a href="<$BlogURL$>" class="TitleItemLink"></ItemPage>';	
			t += tab[5]+	'<$BlogTitle$>';
			t += tab[4]+'<ItemPage></a></ItemPage>';
			break;
		case 'blogfa' :			t = '<-BlogTitle->';			break;
		case 'persianblog' :	t = '<#blogtitle#>';			break;			
	}
	return t;
}

function k_prov_blogdescription() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogDescription$>';		break;
		case 'blogfa' :			t = '<-BlogDescription->';		break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani blogdesc'));
			else
				kines_alert('Your provider doesn\'t have default value of "BlogDescription".');
	}
	return t;
}

function k_prov_pagetitle() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogPageTitle$>';		break;
		case 'blogfa' :			t = '<-BlogTitle->';			break;
		case 'persianblog' :	t = '<#blogtitle#>';			break;					
	}
	return t;
}

function k_prov_startertag() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<Blogger>';			break;
		case 'blogfa' :			t = '<BLOGFA>';				break;
		case 'persianblog' :	t = '<persianblog>';		break;		
	}
	return t;
}

function k_prov_finishertag() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '</Blogger>';			break;
		case 'blogfa' :			t = '</BLOGFA>';			break;
		case 'persianblog' :	t = '</persianblog>';		break;				
	}
	return t;
}

function k_prov_postidname() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemNumber$>';	break;
		case 'blogfa' :			t = '<-PostId->';			break;
		case 'persianblog' :	t = '<#postid#>';			break;		
		
	}
	return t;
}

function k_prov_posttitle() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		
			t = 	'<BlogItemUrl><a href="<$BlogItemUrl$>" title="external link"></BlogItemUrl>'
				+		'<BlogItemTitle><$BlogItemTitle$></BlogItemTitle>'
				+	'<BlogItemUrl></a></BlogItemUrl>';
			break;
		case 'blogfa' :			t = '<-PostTitle->';		break;
		case 'persianblog' :	t = '<#title#>';			break;					
	}
	return t;
}

function k_prov_postdate() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = k__prov_blogger_date();	break;
		case 'blogfa' :			t = '<-PostDate->';			break;
		case 'persianblog' :	t = '<#date#>';				break;
	}
	return t;
}

function k_prov_postbody() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemBody$>';		break;
		case 'blogfa' :			t = '<-PostContent-><BlogExtendedPost><br /><a href="<-PostLink->">'+translateIt('edaameye matlab')+'</a></BlogExtendedPost>';		break;
		case 'persianblog' :	t = '<#body#>';				break;
	}
	return t;
}

function k_prov_postdatetime() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemDateTime$>';	break; 
		case 'blogfa' :			t = '<-PostTime->';			break;
		case 'persianblog' :	t = '<#time#>';				break;		
	}
	return t;
}

function k_prov_authorname() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemAuthorNickname$>';						break;
		case 'blogfa' :			t = '<a href="<-PostAuthorLink->"><-BlogAuthor-></a>';	break;
		case 'persianblog' :	t = '<#author#>';										break;
	}
	return t;
}

function k_prov_categoryId() {
	var t = '';
	switch (global_prov) {
		case 'blogfa' :			t = '<a href="<-PostCategoryId->"><-PostCategory-></a>';				break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani categ id'));
			else
				kines_alert('Your provider doesn\'t have default value of "CategoryIdInFootnote".');
	}
	return t;
}

function k_prov_permlinkurl() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = '<$BlogItemPermalinkUrl$>';			break; 
		case 'blogfa' :			t = '<-PostLink->';						break; 
		case 'persianblog' :	t = '<#PostArchiveFile#>#<#postid#>';	break; 
	}
	return t;
}

function k_prov_commenting() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = k__prov_blogger_cmnt();		break;
		case 'blogfa' :			t = k__prov_blogfa_cmnt();		break;
		case 'persianblog' :	t = k__prov_persianblog_cmnt();	break;		
	}
	return t;
}

function k_prov_inlineComments() {
	var t = '';
	switch (global_prov) {
		case 'blogger' :		t = k__prov_blogger_inlineCmnts();		break;
	}
	return t;
}

//DDF
function k__MainRepeating() {
	var t = '';
	t += tab[4]+k_prov_startertag()+'\n';
	t += tab[4]+'<div class="OnePost">'+'\n';
	t += tab[5]+	'<a name="'+k_prov_postidname()+'"></a>'+'\n';			
	t += tab[5]+	'<div class="TopPost"><div class="FullWidth">'+'\n';
	t += tab[6]+		'<div class="DateHeaderPost">'+'\n';
	t += tab[7]+			k_prov_postdate()+'\n';		
	t += tab[6]+		'</div>'+'\n';
	t += tab[6]+		'<div class="TitleHeaderPost">'+'\n';
	t += tab[7]+			k_prov_posttitle()+'\n';
	t += tab[6]+		'</div>'+'\n';		
	t += tab[6]+		'<div class="Clearer"></div>'+'\n';		
	t += tab[5]+	'</div></div>'+'\n';
	t += tab[5]+	'<div class="MidPost"><div class="FullWidth">'+'\n';
	t += tab[6]+		'<div class="PostTextBody">'+'\n';
	t += tab[7]+			k_prov_postbody()+'\n';
	t += tab[6]+		'</div>'+'\n';		
	t += tab[5]+	'</div></div>'+'\n';

	var tempStr = dgv('PermLinkExp'), cur;

	cur = tempStr.indexOf(translateIt('!Zamaan'));			
	if (cur == -1)
		cur = tempStr.indexOf('$TIME');
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_postdatetime()+tempStr.substring(cur+5, tempStr.length);

	cur = tempStr.indexOf(translateIt('!Nevis'));			
	if (cur == -1)
		cur = tempStr.indexOf(translateIt('!Neviis'));
	if (cur == -1)
		cur = tempStr.indexOf('$AUTH');	
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_authorname()+tempStr.substring(cur+5, tempStr.length);
		
	var theDate = dg('OnePostDateTop').innerHTML;
	var extspc = 0;
	cur = tempStr.indexOf(translateIt('!Tarikh'));			
	if (cur == -1)
		cur = tempStr.indexOf(translateIt('!Tariikh'));
	if (cur == -1) {
		cur = tempStr.indexOf('$DATE');
		extspc = -1
	}
	global_canKinesAlert = false;
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_postdate()+tempStr.substring(cur+6+extspc, tempStr.length);					
	global_canKinesAlert = true;
						
	cur = tempStr.indexOf(translateIt('!Mabhas'));			
	if (cur == -1)
		cur = tempStr.indexOf('$CATG');			
	if (cur != -1)
		tempStr = tempStr.substring(0, cur)+k_prov_categoryId()+tempStr.substring(cur+5, tempStr.length);
	var tempStrOutSide = '';
	if (global_prov == 'blogfa') {
		tempStrOutSide = tempStr;
		tempStr = '<span style="font-style: normal;"> + </span>';
	}
	t += tab[5]+	'<div class="BotPost"><div class="FullWidth">'+'\n';
	t += tab[6]+		'<div class="PermFooterPost">'+'\n';
	t += tab[7]+			'<a href="'+k_prov_permlinkurl()+'" title="permanent link">'+tempStr+'</a>'+tempStrOutSide+'\n';
	t += tab[6]+		'</div>'+'\n';	
	t += tab[6]+		'<div class="CmntFooterPost">'+'\n';
	if (global_prov == 'blogger')
		t += tab[6]+		'<!-- Insert your external commenting service scripts here and remove the line below -->'+'\n';
	t += tab[7]+			k_prov_commenting();
	t += tab[6]+		'</div>'+'\n';	
	t += tab[6]+		'<div class="Clearer"></div>'+'\n';
	t += tab[5]+	'</div></div>'+'\n';		
	t += tab[4]+'</div>'+'\n';

	t += tab[4]+k_prov_inlineComments()+'\n';

	t += tab[4]+'<div class="PostSep"><div class="PostSepS"></div></div>'+'\n';
	t += tab[4]+k_prov_finishertag()+'\n';	
	return t;
}

function k__MainColVal() {
	var t = '';		
	t += tab[2]+'<!-- ==================== Main Column ==================== -->'+'\n';	
	t += tab[2]+'<div id="MainCol">'+'\n';
	t += tab[3]+	'<div id="MainColInner">'+'\n';
	t += k__MainRepeating();
	t += tab[3]+	'</div>'+'\n';
	t += tab[2]+'</div>'+'\n';		
	t += '\n';
	return t;
}

function k__specialdest_home() {
	var t ='';
	switch (global_prov) {
		case 'blogger' :		t += '<$BlogURL$>';					break;
		case 'blogfa' :			t += '<-BlogUrl->';					break;
		case 'persianblog' :	t += '<#user#>.persianblog.com';	break;		
	}
	return t;
}

function k__specialdest_email() {
	var t ='';
	switch (global_prov) {
		case 'blogger' :		t += '<$BlogOwnerEmail$>';			break;
		case 'blogfa' :			t += '<-BlogEmail->';				break;
		case 'persianblog' :	t += '<#email#>';					break;		
	}
	return t;
}

//DDF
function k__specialdest_archive() {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :			t += '<-BlogArchiveLink->';			break;
		case 'persianblog' :	t += '<#ArchiveIndex#>';			break;		
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani archive index link'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogArchiveIndexLink".');			
	}
	return t;
}

function k__specialdest_rss() {
	var t ='';
	switch (global_prov) {
		case 'blogger' :		t += 'atom.xml';					break;  
		case 'blogfa' :			t += '<-BlogXmlLink->';				break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani rss'));
			else
				kines_alert('Your provider doesn\'t support the feature "RSSFeeding".');			
	}
	return t;
}

function k__specialdest_custom() {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :			t += '<-BlogCustomHtml->';			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani custom html'));
			else
				kines_alert('Your provider doesn\'t support the feature "CustomHTML".');			
	}
	return t;
}

function k__special_archive(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogger' :
			t += tab[6]+'<BloggerArchives>'+'\n';
			t += tab[7]+	pre+'<a href="<$BlogArchiveURL$>"><$BlogArchiveName$></a>'+pst+'<br />'+'\n';
			t += tab[6]+'</BloggerArchives>'+'\n';	
			break;
		case 'blogfa' :
			t += tab[6]+'<BlogArchive>'+'\n';
			t += tab[7]+	pre+'<a href="<-ArchiveLink->"><-ArchiveTitle-></a>'+pst+'<br />'+'\n';
			t += tab[6]+'</BlogArchive>'+'\n';	
			break;			
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani archive index list'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogArchiveIndexListing".');	
	}
	return t;
}

function k__special_recent(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogger' :
			t += tab[6]+'<BloggerPreviousItems>'+'\n';
			t += tab[7]+	pre+'<a href="<$BlogItemPermalinkURL$>"><$BlogPreviousItemTitle$></a>'+pst+'<br />'+'\n';
			t += tab[6]+'</BloggerPreviousItems>'+'\n';	
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani recent entries'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogRecentEntries".');						
	}
	return t;
}

function k__special_profile(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogger' :
			t += tab[6]+pre+'<$BlogMemberProfile$>'+pst+'\n';
			break;
		case 'blogfa' :
			t += tab[6]+'<BlogProfile>'+'\n';
			t += tab[7]+	'<BlogPhoto>'+'\n';
			t += tab[8]+		'<div style="clear:both"><img src="<-BlogPhotoLink->" /></div>'+'\n';
			t += tab[7]+	'</BlogPhoto>'+'\n';	
			t += tab[7]+	pre+'<-BlogAbout->'+pst+'\n';	
			t += tab[6]+'</BlogProfile>'+'\n';
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani profile'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogProfile".');			
	}
	return t;
}

function k__special_links(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogLinksBlock>'+'\n';
			t += tab[7]+	'<BlogLinks>'+'\n';					
			t += tab[8]+		pre+'<a href="<-LinkUrl->"><-LinkTitle-></a>'+pst+'<br />'+'\n';	
			t += tab[7]+	'</BlogLinks>'+'\n';		
			t += tab[6]+'</BlogLinksBlock>'+'\n';
			break;
		case 'persianblog' :
			t += tab[6]+'<#links#>'+'\n';
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani blog links'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogLinks".');			
	}	
	return t;
}

function k__special_categlist(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogCategoriesBlock>'+'\n';
			t += tab[7]+	'<BlogCategories>'+'\n';					
			t += tab[8]+		pre+'<a href="<-CategoryLink->"><-CategoryName-></a>'+pst+'<br />'+'\n';	
			t += tab[7]+	'</BlogCategories>'+'\n';		
			t += tab[6]+'</BlogCategoriesBlock>'+'\n';
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani categ list'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogCategoryList".');			
	}		
	return t;
}

function k__special_linkdump(pre, pst) {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogLinkDumpBlock>'+'\n';
			t += tab[7]+	'<BlogLinkDump>'+'\n';					
			t += tab[8]+		pre+'<a href="<-LinkUrl->" title="<-LinkDescription->"><-LinkTitle-></a>'+pst+'<br />'+'\n';	
			t += tab[7]+	'</BlogLinkDump>'+'\n';	
			t += tab[7]+	'<br />'+'\n';					
			t += tab[7]+	'<a href="javascript:void(0)" onclick ="OpenLD();">'+translateIt('archive e peyvandhaaye roozane')+'</a>'+'\n';
			t += tab[6]+'</BlogLinkDumpBlock>'+'\n';
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani link dump'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogLinkDump".');			
	}		
	return t;
}

function k__special_authors() {
	var t ='';
	switch (global_prov) {
		case 'blogfa' :
			t += tab[6]+'<BlogAuthorsBlock>'+'\n';
			t += tab[7]+	'<BlogAuthors>'+'\n';					
			t += tab[8]+		'<a href="<-AuthorLink->"><-AuthorName-></a><br />'+'\n';	
			t += tab[7]+	'</BlogAuthors>'+'\n';		
			t += tab[6]+'</BlogAuthorsBlock>'+'\n';
			break;
		default :
			if (global_lang == 'fa')
				kines_alert(translateIt('poshtibani authors list'));
			else
				kines_alert('Your provider doesn\'t support the feature "BlogAuthorsList".');			
	}		
	return t;
}

//DDF
function k__SideBox(side, part) {
	var t = '';
	var ln = dgv('_'+side+'_linkNumForce_'+part);
	if (part > 0)
		t += tab[4]+'<div class="Sep"><div class="SepS"></div></div>'+'\n';
	t += tab[4]+'<div class="Box">'+'\n';
	t += tab[5]+	'<div class="Inner">'+'\n';
	if (dgv('_'+side+'_TitleTxt_'+part) != '')
		t += tab[5]+	'<div class="Title">'+dgv('_'+side+'_TitleTxt_'+part)+'</div>'+'\n';	
	for (var num=0; num<ln; num++) {
		var txt = dgv('_'+side+'_LinkTxt_'+part+'_'+num);
		var url = dgv('_'+side+'_LinkUrl_'+part+'_'+num);
		var ttl = dgv('_'+side+'_LinkTtl_'+part+'_'+num);
		var pre = dgv('_'+side+'_PreSurr_'+part);
		var pst = dgv('_'+side+'_PstSurr_'+part);
		if (pre.length && global_lang=='fa') pre = pre+'&#8206;';
		if (pst.length && global_lang=='fa') pst = '&#8206;'+pst;
		if (url == '$HOME')
			url = k__specialdest_home();
		else if (url == '$EMAIL')
			url = 'mailto:'+k__specialdest_email();
		else if (url == '$ARCHIVE')
			url = k__specialdest_archive();			
		else if (url == '$RSS')
			url = k__specialdest_rss();		
		else if (url == '$PSYCHO')
			url = 'http://psyc.horm.org/'+(global_lang=='fa'?'fa/':'')+'?PsycHodrama='+kinesoDrama;	
		else if (url == '$CUSTOM')
			url = k__specialdest_custom();
		if (txt == '$ARCHIVE')				t += k__special_archive(pre, pst);
		else 	if (txt == '$RECENT')		t += k__special_recent(pre, pst);
		else	if (txt == '$PROFILE')		t += k__special_profile(pre, pst);
		else	if (txt == '$LINKS')		t += k__special_links(pre, pst);
		else	if (txt == '$CATEGLIST')	t += k__special_categlist(pre, pst);
		else	if (txt == '$LINKDUMP')		t += k__special_linkdump(pre, pst);
		else	if (txt == '$AUTHORS')		t += k__special_authors(pre, pst);		
		else {
			if (url != '')
				t += tab[6]+pre+'<a href="'+url+'" title="'+ttl+'">'+txt+'</a>'+pst;
			else
				t += tab[6]+'<span>'+pre+txt+pst+'</span>';
			t += '<br />'+'\n';	
		}
	}
	t += tab[5]+	'</div>'+'\n';	
	t += tab[4]+'</div>'+'\n';		
	return t;
}

//DDF
function k__ColVal(side) {
	var t = '';		
	t += tab[2]+'<!-- =================== Side '+side+' Column =================== -->'+'\n';
	t += tab[2]+'<div id="Side'+side+'Col" class="SideBar">'+'\n';
	t += tab[3]+	'<div class="SideBarInner">'+'\n';
	for (var i=0; i<dgv('_'+side+'_boxNumForce'); i++)
		t += k__SideBox(side, i);	
	t += tab[4]+		'<div class="Clearer"></div>'+'\n';		
	t += tab[3]+	'</div>'+'\n';
	t += tab[2]+'</div>'+'\n';		
	t += '\n';
	return t;
}

//DDF
function kinesIt() {
	kinesoDrama = WritePsycHodrama();	
	SwitchDisplay('PsycHokinesisAlertDiv', 0);
	ChangeByInput('PsycHokinesisAlertInner', 'innerHTML', '');
	var t = new String();

	if (global_prov != 'blogfa')
			t += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+'\n';
	
	t += tab[0]+'<html>'+'\n';
	t += tab[0]+'<head>'+'\n';
	if (global_prov == 'blogger') {
		t += tab[1]+'<blogsitefeed>'+'\n';
		t += tab[2]+'<link rel="alternate" type="application/rss+xml" title="RSS" href="<$BlogSiteFeedURL$>" />'+'\n';
		t += tab[1]+'</blogsitefeed>'+'\n';
		t += tab[1]+'<$BlogMetaData$>'+'\n';	
	}
	t += tab[1]+'<meta http-equiv="content-type" content="text/html; charset=utf-8" />'+'\n';
	t += tab[1]+'<meta http-equiv="expires" content="-1" />'+'\n';
	if (dgv('WholeDescription') != '')
		t += tab[1]+'<meta name="description" content="'+dgv('WholeDescription')+'" />'+'\n';
	if (dgv('WholeKeywords').substring(0, 7) != 'keyword')
	t += tab[1]+'<meta name="keywords" content="'+dgv('WholeKeywords')+'" />'+'\n';
	var PageTitle = dgv('WholePageTitle');
	if (PageTitle == '$DEFAULT')
		PageTitle = k_prov_pagetitle();		
	t += tab[1]+'<title>'+fromUtf8ToEntity(PageTitle)+'</title>'+'\n';
	t += tab[1]+'<base target="_blank" />'+'\n';
	t += tab[1]+'<style type="text/css" media="all">'+'\n';
	t += tab[2]+'body '+tab[3]+'{ '
		+ 'margin: 0px; '
		+ 'font-family: tahoma, sans-serif; '
		+ 'padding-bottom: 20px; '
		+ 'background: '+k_getColor('WholeBackColorEr')
			+ (dgChecked('WholeBackHasImage')?' url("'+dgv('WholeBackTextureEr')+'") '+dgv('WholeBackRepeat')+' '+dgv('WholeBackAttachment')+' '+dgv('WholeBackPosition'):'')+'; '
		+ 'font-size: 12px; '  
		+ 'color: '+ComplementTheColor(k_getColor('WholeBackColorEr'))+';'
		+ '}'+'\n';
	t += tab[2]+'#Granny '+tab[2]+'{ width: '
		+ (dgChecked('WholeWidthUnitErPixels')?dgv('WholeWidthValueErPixels'):dgv('WholeWidthValueErPercent'))+'; '
		+ 'font-size: 0.88em; '		
		+ '}'+'\n';
	t += tab[2]+'a '+tab[3]+'{ '
		+ 'text-decoration: none; '
		+ 'color: '+k_getColor('WholeLinkColorEr')+'; '
		+ '}'+'\n';
	if (!global_isMinimized) {
		if (k_getColor('WholeLinkVisitEr') != 'transparent') {
			t += tab[2]+'a:visited '+tab[2]+'{ '
				+ 'color: '+k_getColor('WholeLinkVisitEr')+'; '
				+ '}'+'\n';		
		}
		t += tab[2]+'a:hover '+tab[2]+'{ '
			+ 'color: '+k_getColor('WholeLinkHoverEr')+'; '
			+ '}'+'\n';	
	}
	t += tab[2]+'a img '+tab[3]+'{ '
		+ 'border-width: 0px; '
		+ '}'+'\n';
	t += tab[2]+'#HeaderCont '+tab[2]+'{ '
		+ 'clear: both; width: 100%; margin-top: '+dgv('HeaderTopMarginEr')+'; '
		+ 'background: '+k_getColor('HeaderBackColorEr')
		+ (dgChecked('HeaderBackIsTextureEr')?' url("'+dgv('HeaderBackTextureEr')+'") repeat':'')+'; '
		+ 'border: '+k_border('Header')+'; '
		+ '}'+'\n';		
	t += tab[2]+'#HeaderInn '+tab[2]+'{ '
		+ ((dgChecked('HeaderBackIsImageEr'))?'':'margin-bottom: 4px; ')
		+ 'padding: '+dgv('HeaderVerPaddingEr')+' 0px; '	
		+ 'text-align: '+k_getAlign('HeaderPartText')+'; '
		+ (dgChecked('HeaderBackIsImageEr')?'':'font-family: '+k_getFFamily('HeaderPartText')+'; ')
		+ '}'+'\n';		
	if (dgChecked('HeaderBackIsImageEr')) {
		t += tab[2]+'#HeaderImageCont'+tab[1]+'{ '
			+ 'text-align: center; '
			+ '}'+'\n';
	}
	else {
		t += tab[2]+'#HeaderTitle '+tab[2]+'{ '
			+ 'font-size: '+k_getFontSize('TitleText')+'; '
			+ k_getFontEffects('TitleText')
			+ 'color: '+k_getColor('TitleColorEr')+'; '
			+ 'padding: 0px '+dgv('HeaderHorPaddingEr')+'; '
			+ (dgChecked('HeaderBackIsImageEr')?'':'direction: '+k_getDir('HeaderDirectionIsLTREr')+'; ')
			+ 'text-align: '+k_getAlign('HeaderPartText')+'; '			
			+ '}'+'\n';
		t += tab[2]+'.TitleItemLink '+tab[2]+'{ '
			+ 'color: '+k_getColor('TitleColorEr')+'; '
			+ '}'+'\n';
		if (dgv('SubTitleTextTextEr').length)
			t += tab[2]+'#HeaderSubTitle '+tab[1]+'{ '
				+ 'margin: 12px 0px; '
				+ 'font-size: '+k_getFontSize('SubTitleText')+'; '
				+ k_getFontEffects('SubTitleText')
				+ 'color: '+k_getColor('SubTitleColorEr')+'; '
				+ (dgChecked('HeaderBackIsImageEr')?'':'direction: '+k_getDir('HeaderDirectionIsLTREr')+'; ')
				+ 'text-align: '+k_getAlign('HeaderPartText')+'; '			
				+ 'padding: 0px '+dgv('HeaderHorPaddingEr')+'; '
				+ '}'+'\n';			
	}
	
	t += tab[2]+'#MainAndSides '+tab[2]+'{ '
		+ 'clear: both; width: 100%; margin-top: '+(parseInt(dgv('HeaderTopMarginEr'))/2)+'px; '
		+ '}'+'\n';		
	
	t += tab[2]+'#MainCol '+tab[2]+'{ '
		+ 'width: '+dgv('MainColWidthView')+'%; '
		+ 'background: '+k_tripleBg('MainColumns')+'; '
		+ 'float: '+(dgChecked('ColsNumberIsTwoR')?'right':'left')+'; '
		+ '}'+'\n';
		
	t += tab[2]+'#MainColInner '+tab[2]+'{ '
		+ 'padding: '+(parseInt(dgv('MainSpcPaddingView'))/2)+'px '+dgv('MainSpcPaddingView')+'px; '
		+ 'border: '+k_border('MainColumns')+'; '		
		+ '}'+'\n';

	var cellDir = dgChecked('CellDirDirectionIsLTREr')?'ltr':'rtl';
	var cellDirBegin = (cellDir == 'ltr')?'left':'right';
	var cellDirEnd   = (cellDir == 'ltr')?'right':'left';

	t += tab[2]+'.OnePost'+tab[2]+'{ '
		+ 'border: '+k_border('OnePost')+'; '
		+ 'font-family: '+k_getFFamily('OnePostMainDiv')+'; '
		+ 'direction: '+cellDir+'; '	
		+ 'background: '+k_tripleBg('PostBody')+'; '
		+ '}'+'\n';
		
	t += tab[2]+'.OnePost .TopPost'+tab[1]+'{ '
		+ 'border-bottom: '+k_border('VerPost')+'; '		
		+ 'padding:  0px '+dgv('PostHeadFootHP')+'px '+dgv('PostHeadFootVP')+'px '+dgv('PostHeadFootHP')+'px; '
		+ 'background: '+k_tripleBg('OnePostTop')+'; '		
		+ '}'+'\n';

	t += tab[2]+'.OnePost .MidPost'+tab[1]+'{ '
		+ 'padding: '+dgv('PostBodyVP')+'px '+dgv('PostBodyHP')+'px; '
		+ '}'+'\n';

	t += tab[2]+'.OnePost .BotPost'+tab[1]+'{ '
		+ 'border-top: '+k_border('VerPost')+'; '		
		+ 'padding: '+dgv('PostHeadFootVP')+'px '+dgv('PostHeadFootHP')+'px; '
		+ 'background: '+k_tripleBg('OnePostBot')+'; '				
		+ '}'+'\n';	

	t += tab[2]+'.OnePost .FullWidth'+tab[1]+'{ '
		+ 'width: 100%; '		
		+ '}'+'\n';	

	t += tab[2]+'.DateHeaderPost'+tab[2]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostDateTop')+'; '
		+ k_getFontEffects('OnePostDateTop')
		+ 'color: '+k_getColor('PostDateColorEr')+'; '
		+ 'padding-top: '+dgv('PostHeadFootVP')+'px; '
		+ 'text-align: '+k_getAlign('OnePostDateTop')+'; '
		+ (dgChecked('PostDateStandingIsAdjacent')?('width: 48%; float: '+cellDirEnd+'; '):'')
		+ '}'+'\n';

	t += tab[2]+'.TitleHeaderPost'+tab[1]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostTitle')+'; '
		+ k_getFontEffects('OnePostTitle')
		+ 'color: '+k_getColor('PostTitleColorEr')+'; '
		+ 'padding-top: '+dgv('PostHeadFootVP')+'px; '
		+ 'text-align: '+k_getAlign('OnePostTitle')+'; '
		+ 'direction: '+(dgChecked('OnePostTitleDirectionIsLTREr')?'ltr':'rtl')+'; '		
		+ (dgChecked('PostDateStandingIsAdjacent')?('width: 48%; float: '+cellDirBegin+'; '):'')		
		+ '}'+'\n';

	t += tab[2]+'.TitleHeaderPost a'+tab[1]+'{ '
		+ 'color: '+k_getColor('PostTitleColorEr')+'; '
		+ '}'+'\n';

	var ta = (dgChecked('OnePostBodyAlignIsNorm')?cellDirBegin:(dgChecked('OnePostBodyAlignIsCenter')?'center':'justify'));
	t += tab[2]+'.PostTextBody'+tab[2]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostMidPart')+'; '
		+ k_getFontEffects('OnePostMidPart')
		+ 'color: '+k_getColor('PostBodyColorEr')+'; '
		+ 'text-align: '+ta+'; '
		+ 'line-height: '+k_getLineHeight('OnePostMidPart')+'; '		
		+ '}'+'\n';		

	t += tab[2]+'.CmntFooterPost'+tab[2]+'{ '
		+ 'visibility: visible; '
		+ 'font-size: '+k_getFontSize('OnePostComments')+'; '
		+ k_getFontEffects('OnePostComments')
		+ 'color: '+k_getColor('PostCommentsColorEr')+'; '
		+ 'width: 48%; '
		+ 'float: '+cellDirEnd+'; '
		+ 'text-align: '+cellDirEnd+'; '
		+ '}'+'\n';	

	t += tab[2]+'.CmntFooterPost a'+tab[1]+'{ '
		+ 'color: '+k_getColor('PostCommentsColorEr')+'; '
		+ '}'+'\n';	

	if (!global_isMinimized) {	
		t += tab[2]+'.CmntFooterPost a:hover'+tab[1]+'{ '
			+ 'color: '+k_getColor('PostCommentsHoverColorEr')+'; '
			+ '}'+'\n';	
	}
		
	t += tab[2]+'.PermFooterPost'+tab[2]+'{ '
		+ 'font-size: '+k_getFontSize('OnePostPermLink')+'; '
		+ k_getFontEffects('OnePostPermLink')
		+ 'color: '+k_getColor('PostPermLinkColorEr')+'; '
		+ 'width: 48%; '
		+ 'float: '+cellDirBegin+'; '
		+ 'text-align: '+cellDirBegin+'; '		
		+ '}'+'\n';			

	t += tab[2]+'.PermFooterPost a'+tab[1]+'{ '
		+ 'color: '+k_getColor('PostPermLinkColorEr')+'; '
		+ '}'+'\n';			

	t += tab[2]+'.Clearer'+tab[2]+'{ '
		+ 'clear: both; '
		+ 'width: 100%; '
		+ 'font-size: 0px; '
		+ 'height: 0px; '		
		+ '}'+'\n';

	var isCol = dgChecked('PostSepDivBackIsColorEr');
	t += tab[2]+'.PostSep'+tab[2]+'{ '
		+ 'height: '+dgv('PostSepHeight')+'px; '
		+ ((isCol)?'':'background: '+k_tripleBg('PostSepDiv')+'; ')
		+ 'font-size: 1px '
		+ '}'+'\n';		
		
	t += tab[2]+'.PostSepS'+tab[2]+'{ '
		+ 'height: '+parseInt(dgv('PostSepHeight'))/2+'px; '
		+ 'margin-bottom: '+parseInt(dgv('PostSepHeight'))/2+'px; '
		+ ((isCol)?'border-bottom: 1px solid '+k_getColor('PostSepDivBackColorEr')+'; ':'')
		+ 'font-size: 1px '
		+ '}'+'\n';			
	
	if (! dgChecked('ColsNumberIsOne')) {
		t += tab[2]+'.SideBar'+tab[2]+'{ '
			+ 'background: '+k_tripleBg('SideColumns')+'; '
			+ '}'+'\n';
	
		t += tab[2]+'.SideBarInner'+tab[2]+'{ '
			+ 'padding: '+dgv('SideSpcPaddingView')+'px '+dgv('SideSpcPaddingView')+'px; '
			+ 'border: '+k_border('SideColumns')+'; '
			+ '}'+'\n';

		t += tab[2]+'.SideBarInner img'+tab[1]+'{ '
			+ 'margin-top: 2px; '
			+ '}'+'\n';

		if (dgChecked('ColsNumberIsTwoR') || dgChecked('ColsNumberIsThree')) {
			t += tab[2]+'#SideLCol '+tab[2]+'{ '
				+ 'width: '+dg('SideLColumn').style.width+'; '
				+ 'float: left; '
				+ 'margin-right: '+dgv('SideSpcWidthView')+'%; '
				+ '}'+'\n';
			t += k_sideFeatures('L');
		}
				
		if (dgChecked('ColsNumberIsTwoL') || dgChecked('ColsNumberIsThree')) {
			t += tab[2]+'#SideRCol '+tab[2]+'{ '
				+ 'width: '+dg('SideRColumn').style.width+'; '
				+ 'float: right; '
				+ 'margin-left: '+dgv('SideSpcWidthView')+'%; '
				+ '}'+'\n';				
			t += k_sideFeatures('R');				
		}
	}
	
	t += tab[2]+'#ColClose '+tab[2]+'{ '
		+ 'clear: both; '
		+ 'width: 100%; '	
		+ 'font-size: 1px; '
		+ 'height: 1px; '
		+ 'margin-bottom: 20px; '
		+ '}'+'\n';
	t += tab[2]+'#CopyRight '+tab[2]+'{ '
		+ 'width: 60%; '	
		+ 'border-top: 1px solid gray; '
		+ 'padding-top: 10px; '	
		+ 'line-height: 150%; '	
		+ (global_lang == 'fa'?'direction: rtl; ':'')
		+ '}'+'\n';
		
	t += tab[2]+'/* This template generated by PsycHo [http://psyc.horm.org] on '+nowTheTime()+'. */'+'\n';
						
	t += tab[1]+'</style>'+'\n';
	t += k__commentingHeaderScript();
	t += tab[0]+'</head>'+'\n';
	t += '\n';
	t += tab[0]+'<body><center>'+'\n';
	t += tab[1]+'<div id="Granny">'+'\n';
	t += tab[2]+'<div id="HeaderCont"><div id="HeaderInn">'+'\n';
	if (dgChecked('HeaderBackIsImageEr')) {
		t += tab[3]+'<div id="HeaderImageCont"><img src="'+dg('HeaderBackImageEr').value+'" /></div>'+'\n';
	}
	else {
		var TitleTxt = dgv('TitleTextTextEr');
		var SubTitleTxt = dgv('SubTitleTextTextEr');
		if (TitleTxt == '$DEFAULT')
			TitleTxt = k_prov_blogtitle();
		if (SubTitleTxt == '$DEFAULT')
			SubTitleTxt = k_prov_blogdescription();		
		t += tab[3]+'<div class="Clearer"></div>'+'\n';		
		t += tab[3]+'<div id="HeaderTitle">'+'\n';
		t += tab[4]+	TitleTxt+'\n';
		t += tab[3]+'</div>'+'\n';
		if (SubTitleTxt.length) {
			t += tab[3]+'<div id="HeaderSubTitle">'+'\n';
			t += tab[4]+	SubTitleTxt+'\n';
			t += tab[3]+'</div>'+'\n';
		}
		t += tab[3]+'<div class="Clearer"></div>'+'\n';	
	}		
	t += tab[2]+'</div></div>'+'\n';
	
	t += tab[2]+'<div id="MainAndSides">'+'\n';
	if (dgChecked('ColsNumberIsThree'))
		t += k__ColVal('L');
	
	t += k__MainColVal();
	
	if (dgChecked('ColsNumberIsTwoR'))
		t += k__ColVal('L');
	if (dgChecked('ColsNumberIsTwoL') || dgChecked('ColsNumberIsThree'))		
		t += k__ColVal('R');
	t += tab[2]+'<div class="Clearer"></div>'+'\n';		
	t += tab[2]+'<form name="MyPsycHicForm" method="post" action="http://psyc.horm.org'+((global_lang=='fa')?'/fa/':'/')+'">'+'\n';
	t += tab[3]+	'<input name="PsycHodrama" value="'+kinesoDrama+'" type="hidden">'+'\n';
	t += tab[2]+'</form>'+'\n';
		var userRights = 'Some rights of this page\'s plain text stuffs are <a href="http://creativecommons.org/licenses/by/2.5/">reserved</a> for the author. <br />' ;
		var psychoRights = 'The <a target="_self" href="javascript: void(0);" onclick="javascript:MyPsycHicForm.submit();">Template</a> is generated via <a href="http://psyc.horm.org">PsycHo</a> and is <a href="http://creativecommons.org/licenses/by-nc/2.5/">Licensed</a>. <br />';
	if (global_lang == 'fa') {
		userRights = translateIt('rights for author');
		psychoRights = translateIt('rights for psycho');		
	}
	t += tab[2]+'</div>'+'\n'+'\n';
	t += tab[2]+'<div id="ColClose"></div>'+'\n';
	t += tab[2]+'<div id="CopyRight">'+'\n';	
	t += tab[3]+	userRights+'\n';
	t += tab[3]+	psychoRights+'\n';	
	t += tab[2]+'</div>'+'\n';		
	t += tab[1]+'</div>'+'\n';
		t += tab[0]+'</center></body>'+'\n';		
	t += tab[0]+'</html>'+'\n';	
	dg('PsycHokinesisGetEr').value = t;
}
