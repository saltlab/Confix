function getHelpNow(s) {
	var t;
	var _tab = '&nbsp;&nbsp;&nbsp;';
	var _note = _tab+'<span class="note">NOTE</span>: ';
	var _hint = _tab+'<span class="hint">HINT</span>: ';	
	var _dot = '<span class="dot">&#8226;</span>';
	var _me = '<a href="mailto:he@horm.org">me</a>';
	var s2 = '';

	switch (s) {
		case 'background type' :
			s = 'background';
			break;
			
		case 'font color' :
			s = 'color';
			s2 = 'font\'s ';
			break;
		
		case 'whole links' :
			s = 'links color';
			break;
			
		case 'texture url' :
		case 'image url' :
		case 'background image url' :
			s = 'image address';
			break;
			
		case 'title direction' :
		case 'text direction' :
			s = 'direction';
			break;		
	}	
	
	switch (s) {
		case 'psycho' :
			t  = _tab+'... is the name this (web) application!<br />' +
			'';
 			break;

		case 'help' :
			t  = _tab+'<a href="#PscyHo!" class="helpA">?</a> always indicates a help box like this.<br />' +
				 _tab+'Click on it to view such a help/info dialogue. <br />' +
 				 _tab+'To close the box, eithor Click Dismiss or double click somewhere on it or even click somewhere else on the page!';
 			break;
 			
 		case 'psychodrama' :
 			t = _tab+'... is a coded string that contains all the input values you\'ve given to PsycHo. <br />'+
 				_tab+'Here, You can save your work for future modification (of yours or your mates), '+
 				'load a template (obviously generated previously by PsycHo) or reset all changes. <br />'+
 				_note+'PsycHokinesis (The output template\'s HTML) can be extracted from '+
 				'PsycHodrama (the coded string) but not inverse! PsycHo can write HTML texts in ouput but can\'t '+
 				'read it, unless via its PsycHodrama!<br />'+
 				_note+'These operations (because involves all of the input fields) take long times, especially on Internet '+
 				'Explorer! Save often takes up to 20 seconds and Load takes up to 2 minutes.'+
 				'';
 			break;

 		case 'psychokinesis' :
 			t = _tab+'... is the final part of PsycHo; the output. when you filled all the fields and got your '+
 				'own template, just click on Get Code to get PsycHokinesis (the HTML output). Afterward, just copy '+
 				'that and paste it in your blog\'s template part. <br />'+
 				'';
 			break;

 		case 'psychopatheds' :
 			t = _tab+'... is the name of all the variable input fields of PsycHo; what won\'t appear in the output '+
 				'template. You can either hide them altogether or minimize amount of them in case you feel are too much! <br />'+
 				'';
 			break;

 		case 'minimize features' :
 			t = _tab+'... is the option gives you the ability of dismissing unnecessary fields of PsycHo and puts '+
 				'a default value instead of them. <br />'+
 				_tab+'The operation can be inversed by reclicking on the part; which has become Enhance Features afterward.<br />'+
 				'';
 			break;

 		case 'hide all psychopatheds' :
 			t = _tab+'... is the option gives you the ability of hiding all PsycHo relevant boxes (adjustments) to have a '+
 				'preview of your template. <br />'+
 				_hint+'to hide these (top) options, and have a real preview, you can click on Hide Basic Setting button on top!'+
 				'';
 			break;

 		case 'your blog informations' :
 			t = _tab+'... is the first stuffs about your blog. fill them carefully! <br />'+
 				'';
 			break;

 		case 'blog provider' :
 			t = _tab+'... is the name of your blogging service. contact me if your service provider is not in the list.<br />'+
 				'';
 			break;

 		case 'site description' :
 			t = _tab+'... is a brief description about your weblog\'s content. Uses for search engines\' bots.<br />'+
 				'';
 			break;
 			
 		case 'site keywords' :
 			t = _tab+'... is the keywords of your blog; the words you feel that your page has reasonable contents about them.<br />'+
 				_note+'Separate the words using comma (,) sign. Don\'t put many words here!'+
 				'';
 			break; 			
 			
 		case 'whole the page' :
 			t = _tab+'... is the informations about the width and title of the page.<br />'+
 				'';
 			break; 			
 			
 		case 'page title' :
 			t = _tab+'... is the title of your blog which appears next to browser\'s name in window\'s title bar. '+
 				'Pick it carefully!<br />'+
				_hint+'You may put \'<b>$DEFAULT</b>\' in this field, if you mind it to have its default value, '+
				'entered in your provider\'s settings.<br />'+
 				'';
 			break; 			
 			
 		case 'width unit' :
 			t = _tab+'... is the way you fix the width of the page. '+
 				'You know, different PCs, has different resolutions; which means that the amount of pixels '+
 				'in all of the monitors is not a constant value. '+
 				_tab+'Hence, you have two ways to show your page on your visitors\' monitors:<br />'+
 				_dot+'<b>Pixels</b>: Which mean that your page shall allocate a constant width regardless to visitor\'s '+
 				'resolution. This case is suitable, if you are using many fixes size images and don\'t want them to be '+
 				'broken under different resolutions. Though, in this case visitor with higher resolutions will see empty '+
 				'spaces in both sides of your page. <br />'+
 				_dot+'<b>Percent</b>: Which is actually resolution-dependent width. The page won\'t have a fixed treatment '+
				'for all of the visitors but the page\'s width would always be optimized!';			
 			break; 			
 			 					
 		case 'width value' :
 			t = _tab+'... is the value of page width. Depend on your width unit, it may be Pixels of Percent.<br />'+
 				_note+'Always remember that not all the visitors see exactly what you see! Respecting visitors with lower '+
 				'resolutions, you\'d better avoid keeping the page\'s width, as large as possible! Always assume that '+
 				'about 30% of visitors\' screen width is 800px (ans so 720px-750px is a good value, counting scrollbar and etc) '+
 				'and about 15% of visitors\' screen width is 1280px or larger! (ans so sometimes it\'s better to work on 80%-90%).'+
 				'';
 			break; 			
 			 				
		case 'body background' :
			t = _tab+'... is actually the background of whole the page.<br />'+
				_tab+'As it appears first and forever, you\'d be very careful and precise about it.'+
				'';
			break;	
			
		case 'body background image' :
			t = _tab+'... is the option that give you the ability of using image as your blog\'s background.<br />'+
				_tab+'Remember that it\'s strongly recommended that the background image be light and desaturated (unsharp).'+
				'';
			break;				

		case 'body background image box' :
			t = _tab+'... contains the options for whole page\'s background image.'+
				'';
			break;				

		case 'image repeat' :
			t = _tab+'... is the repeat of background image. Repeat-Y is one time in a horizontal line, Repeat-X is '+
				'in a vertical line and no-repeat is suitable for single images. <br />'+
				_hint+'Using proper color is suggested while repeat is not full (e.g. -X, -Y or No-repeat).'+
				'';
			break;				

		case 'image position' :
			t = _tab+'... is the position of image in background. useful for single images (no-repeat) or single '+
				'dimension repeats. (-X or -Y)'+
				'';
			break;				

		case 'image attachment' :
			t = _tab+'... is whether the page background shall stick to the text and scroll by text (Scroll) or stick '+
				'to the browser\'s floor and don\'t scroll (Fixed).<br />'+
				_tab+'Fixed is strongly recommended for single (no-repeat) images.'+
				'';
			break;				
			 			 					
		case 'color' :
			t  = _tab+'... is the '+s2+'color! you can use either<br />' +
			     _dot+'<b>Colors List <img src="images/picker_0.gif" /></b>: which ' +
			     'by clicking on it, the table of colors comes and let you select your color.<br /> ' +
			     _dot+'<b>3-letters color</b>: just three hexadecimal values ' +
			     'after a numbersign (#) indicating values of Red, Green and Blue (abbreviated RGB) respectively.<br /> ' +
			     _dot+'<b>6-letters color</b>: same as 3-letters but instead of one character ' +
			     'for each basic element (RGB), it uses two character. Hence, you can use both #FFF and #FFFFFF for white. <br />' +
			     _note+'Never Forget # sign before 3-letters and 6-letters colors! <br />' +
			     _dot+'<b>Names</b>: A few names like black, silver, white, blue, red, green' +
			     ', fuchsia and etc are known in HTML 4.0. You can use them also. <br />' +
			     _dot+'<b>Transparency</b>: just the name \'transparent\' (without quotes) provide ' +
			     'a glassine (transparent) background. <br />'+
			     _note+'Never Use # sign before names or \'transparent\'! <br />' +			
			     _hint+'<b>New feature!</b> After attempts, Now PsycHo has a powerful colorpicker which helps you to I) pick the '+
			     'exact color in your mind from the color wheel, II) adjust that color either by RGB values or HSV '+
			     '(Hue/Saturation/Value) values, III) and most important one, suggested colors , which suggests you 24 colours '+
			     'for each part depending on thats previously set adjacent part! <br />'+
			     '';
			break;
			
		case 'direction' :			
			t  = _tab+'... is inner the direction of text. Options are<br />' +
			     _dot+'<img width="18" height="18" src="barimg/i_ltr.gif" alt="L" style="position: relative; top: 4px;" /> <b>LTR</b>: '+
			     'Indicates Left-To-Right direction which uses for English and other LTR texts like French. <br />' +
			     _dot+'<img width="18" height="18" src="barimg/i_rtl.gif" alt="R" style="position: relative; top: 4px;" /> <b>RTL</b>: '+
			     'Indicates Right-To-Left direction which uses for Persian and other RTL texts like Arabic. <br />' +
			     _note+'Remember that Direction is not the Alignment of Text. It affects ' +
			     'the appearance of punctuation and inner text at all. <br />';
			break;
			
		case 'font family' :			
			t = _tab+'... is the font style of text.<br /> Options are:<br />' +
				_dot+'<b>Tahoma</b>: <font style="font-family:tahoma"> A Sample Text</font><br />' +
				_dot+'<b>Arial</b>: <font style="font-family:arial"> A Sample Text</font><br />' +
				_dot+'<b>Times</b>: <font style="font-family:\'time new romans\'"> A Sample Text</font><br />' +
				_dot+'<b>Georgia</b>: <font style="font-family:georgia"> A Sample Text</font><br />' +
				_dot+'<b>Courier</b>: <font style="font-family:\'courier new\'"> A Sample Text</font><br />' +				
				'';
			break;

		case 'font effect' :			
			t = _tab+'... is the effects of text. <b>Bold</b> makes the text stronger than normal; <i>Italic</i> '+
				'is a oblique text and <u>Underline</u> draws a thin line below the text.<br />' +
				'';
			break;
			
		case 'header top margin' :
			t = _tab+'... is the space between page\'s top line and header box measured in Pixels unit.<br />'+
				'';
				break;			

		case 'header horizontal padding' :
			t = _tab+'... is the inner space between header\'s text and header\'s left and right borders.<br />'+
				'';
				break;			

		case 'header vertical padding' :
			t = _tab+'... is the inner space between header\'s text and header\'s top and bottom borders.<br />'+
				'';
				break;			
				
		case 'columns style' :
			t = _tab+'... is actually number of columns your blog\'s will have. No side bar (One column) is '+
				'suitable for very private blogs (link-less and simple ones). Two columns is the most common '+
				'style and Three columns is for hashed blogs! <br />'+
				'';
				break;		
				
		case 'main col width percentage' :
			t = _tab+'... is the width of main column in percentage. Note that if your page\'s width unit is Pixel '+
				' (e.g. a constant value) then this one is too; so you can use proper fixed-size images for its background.<br />'+
				'';
				break;		

		case 'main col padding pixels' :
			t = _tab+'... is the space between main column\'s border and a post\'s border. <br />'+
				_hint+'You can put it 0 if you want '+
				'the posts to touch the main area. Also in that case you can omit the background (by putting the word '+
				'"transparent" in it) and also dismiss the border (by putting its size: 0px).<br />'+
				'';
				break;		

		case 'columns distance percentage' :
			t = _tab+'... is the actual space between columns (sidebar and main).<br />'+
				_hint+'Use real (float) numbers for precise values!'+
				'';
				break;		
			
		case 'columns padding pixels' :
			t = _tab+'... is the space between border and contents in sidebar(s). <br />'+
				_hint+'Again, you can put it 0, change background '+
				' color to "transparent" and omit the border (by putting it 0, too) in case you mind '+
				'the contents to touch the base area.<br />'+
				'';
				break;					

		case 'cell direction' :
			t = _tab+'... is the posts direction; which affects inner parts of the text like its text direction, '+
				' post\'s title and it\'s footnote. Options are:<br />'+
				_dot+'<img width="18" height="18" src="barimg/i_ltr.gif" alt="L" style="position: relative; top: 4px;" /> <b>LTR</b>: '+
				'LeftToRight is suggested for English, French and other LTR languages.<br />'+
				_dot+'<img width="18" height="18" src="barimg/i_rtl.gif" alt="R" style="position: relative; top: 4px;" /> <b>RTL</b>: '+
				'RighToLeft is suggested for Persian, Arabic and other RTL languages.'+				
				'';
				break;	
				
		case 'post body v-padding' :
			t = _tab+'... is the vertical padding (inner space) between post\'s text and border.<br />'+
				'';
				break;		

		case 'post headfoot v-padding' :
			t = _tab+'... is the vertical padding (inner space) between post\'s header/footer and border.<br />'+
				'';
				break;		

		case 'post body h-padding' :
			t = _tab+'... is the horizontal padding (inner space) between post\'s text and border.<br />'+
				'';
				break;		

		case 'post headfoot h-padding' :
			t = _tab+'... is the horizontal padding (inner space) between post\'s header/footer and border.<br />'+
				'';
				break;		
			
		case 'link text' :
			t = _tab+'... in fact is the link\'s appearing text. However if you leave '+
				'Destination Part empty, it will treats as a normal text. Though, if you want the link '+
				'to be assumed as an empty line, just type a simple space.<br />' +
				_tab+'As said, you can paste your scripts or any other HTML tags/codes here, too. Also, by '+
				'clicking on the mountain image, next to each link, you can add an image (a logo or thumbnail) easily.<br />' +
				_tab+'On the other hand, You can use some keywords to handle your provider\'s features; here is the list of them:<br /> '+
				_dot+'<b>$ARCHIVE</b>: Your blog\'s archive.<br />'+
				_dot+'<b>$RECENT</b>: Your blog\'s recent posts.<br />'+
				_dot+'<b>$PROFILE</b>: About you and your blog.<br />'+
				_dot+'<b>$LINKS</b>: Your providers added links.<br />'+
				_dot+'<b>$CATEGLIST</b>: Your posts\' category list.<br />'+
				_dot+'<b>$LINKDUMP</b>: Your daily posted links.<br />'+
				_dot+'<b>$AUTHORS</b>: List of your blog\'s authors.<br />'+
				_tab+'Note that not all of them are supported by all providers!<br />'+
				_note+'The default value of these fields are not empty! it\'s a single SPACE which is required for an empty line. '+
				'Remove that if you want to use noted special keywords and links.<br />'+
				'';
			break;
			
		case 'link destination' :
			t = _tab+'... is the supposed destination for the link.<br />'+
				_tab+'If you leave this part empty, the whole link would be assumed as plain text; which is so proper '+
				'for self notes, special words (e.g. $ARCHIVE) and scripts.<br />'+	
				_tab+'Also, you can use some keywords to handle the default values of destinations saved in your'+
				'provider\'s database; here is the list of them: <br /> '+
				_dot+'<b>$HOME</b>: Your blog\'s URL.<br />'+
				_dot+'<b>$EMAIL</b>: Your blog\'s Email address.<br />'+		
				_dot+'<b>$ARCHIVE</b>: Your blog\'s archive page.<br />'+
				_dot+'<b>$RSS</b>: Your blog\'s RSS feed.<br />'+
				_dot+'<b>$CUSTOM</b>: Custom HTML codes, stored in your provider.<br />'+				
				_dot+'<b>$PSYCHO</b>: PsycHo\'s link, including your PsycHodrama, which gives the ability of '+
					'future modifications to you and your visitors.<br />'+
				_note+'Remember that you must write protocol\'s name (e.g. http:// or ftp://) in case the link '+
				'is neither local nor special (listed above).<br />'+
				'';
			break;
			
		case 'link title' :
			t = _tab+'... is a hint for the visitors, about the content of destination.<br />'+
				_tab+'Visitors can view this text by holding their mouse\'s cursor just above the link.'+
				'';
				break;
				
		case 'title text on sidebar' :
			t = _tab+'... is actually the name of the box, appearing just above the links. <br />'+
				'HTML tags are allowed'+
				'';
			break;

		case 'image address' :
			t = _tab+'... is the address of the image you want to use. <br />'+
				_tab+'If the image is on your own PC, you must first upload it somewhere on the web. '+
				'<a href="http://www.sharemation.com">sharemation</a> and <a href="http://ripway.com">ripway</a> '+
				'are good offers. <br />'+
				_note+'Don\'t forget to type protocol\'s name (e.g. http:// or ftp://) in case the image\'s link '+
				'is not local.<br />'+
				'';
			break;

		case 'image alternative text' :
			t = _tab+'... is the text that would be displayed when the image is not loaded. <br />'+
				_tab+'You know, sometimes for some reasons (like low connection speed, browser\'s '+
				'insupportation or user\'s cancelation) the image can not be loaded. On those situtations '+
				'the alternative text would be displayed instead of the image.'+
				'';
			break;			

		case 'border' :
			t = _tab+'... is the line around the part.<br />'+
				_tab+'Particular help for style and size is noted on wider fields!'+
				'';
			break;

		case 'border style' :
			t = _tab+'... is the style of Border. Options are:<br />'+
				_dot+'<b>None</b>: No border. But the size space would be allocated.<br />'+
				_dot+'<b>Solid</b>: Simple line style. Most common and simple one.<br />'+
				_dot+'<b>Dashed</b>: Cutted style using separated lines. Suggested for separated parts.<br />'+
				_dot+'<b>Dotted</b>: Same as Dashed, but using separated points instead of lines. Some browsers '+
				'(like IE), are using dashed style for small sizes.<br />'+
				_dot+'<b>Double</b>: Two parallel solid lines. Obviously, the size must be 3px or higher to view both lines.<br />'+
				_hint+'Put the border size equal to 0px, in case you mind to omit it, indeed!<br />'+
				'';
			break;

		case 'border size' :
			t = _tab+'... is the width of border, measured in Pixels unit. '+
					'You may can change the color, also, in this part.<br />'+
				_hint+'Put it 0px in case you mind to delete it!<br />'+
				'';
			break;						

		case 'parts separator' :
			t = _tab+'... is the separator object between the boxes of the sidebar. <br />'+
				_hint+'You can choose "transparent" as the color to have just a free space!'+
				'';
			break;
			
		case 'separator line' :
			t = _tab+'... is the format of separator line between the boxes. <br />'+
				'';
			break;			
			
		case 'separator height' :
			t = _tab+'... is the vertical space among the boxes measured in Pixels unit. <br/>'+
				'';
			break;			

		case 'post separator height' :
			t = _tab+'... is the vertical space among the posts measured in Pixels unit. <br/>'+
				_hint+'You can use the word "transparent" as the color to dismiss its actual appearance!'+
				'';
			break;			

		case 'separator type' :
			t = _tab+'... is the type of the separator objects. Option are: <br />'+
				_dot+'<b>Color</b>: A Simple line. ["transparent" can omit the color of the line!]<br />'+
				_dot+'<b>Tile</b>: A repeating image to fill the space. <br />'+
				_dot+'<b>Image</b>: A single image; which can be an artistic drawing or picture. <br />'+				
				'';
			break;								
			
		case 'background' :
				t = _tab+'... is the stuffs behind the text. Options are:<br/>'+
					_dot+'<b>Color</b>: Simple colored surface. light (desaturated) ones are suggested.<br />'+
					_dot+'<b>Tile</b>: A repeating image which fills whole the part. a kinda artistic one! <br />'+
					_dot+'<b>Image</b>: A single image. Note that if the image\'s size is smaller than '+
					'the part, You should also choose a background color (for the parts out of image). Right '+
					'After you selected the color, come back to the "Image" option.<br />'+
					_note+'Use global address (note protocol\'s name) for the external images.<br />'+
					_hint+'You\'d better avoid using sharp or "text\'s base color"-like backgrounds.<br />'+
				'';
			break;						

		case 'parts title' :
			t = _tab+'... is actually the name of the boxes, appearing just above the links of each box. <br />'+
				'';
			break;
			
		case 'font' :
			t = _tab+'... is the text\'s abstracted style. <br />'+
				'';
			break;			

		case 'separator line color':
			t = _tab+'... is the title\'s underscore color. <br />'+
				_hint+'Using "transparent" word, can omit it at all!<br />'+
				'';
			break;

		case 'parts text' :
			t = _tab+'... is the style of the texts in the boxes, apply to altogether. <br />'+
				'';
			break;			
			
		case 'text align' :
			t = _tab+'... is the text\'s align! The side that text shall begin. Note that it\'s defferent '+
				' from Direction and don\'t perform any action on the text\'s core. <br />'+
				_hint+'Center (Mid) option is suggested for thin and (vertically) long texts and artistical stuffs.'+
				'';
			break;						

		case 'post body text align' :
			t = _tab+'... is the post body \'s text align! The way the text appears in the box. Options are:<br />'+
				_dot+'<img width="18" height="18" src="barimg/i_align_left.gif" alt="L" style="position: relative; '+
				'top: 4px;" /> <b>Normal</b>: Normal align. Inherited from direction can be right or left.<br />'+
				_dot+'<img width="18" height="18" src="barimg/i_align_center.gif" alt="C" style="position: relative; '+
				'top: 4px;" /> <b>Center</b>: Center align. Suitable for poems and long artistical articles.<br />'+
				_dot+'<img width="18" height="18" src="barimg/i_align_justify.gif" alt="J" style="position: relative; '+
				'top: 4px;" /> <b>Justify</b>: Stretched text which fills out the available width; just like newspapers.<br />'+
				'';
			break;				
						
		case 'font size' :
			t = _tab+'... is the size of text, measured in Points unit. 8pt, 9pt and 10pt are common sizes for '+
				'normal texts.<br />'+
				'';
			break;

		case 'line height' :
			t = _tab+'... is the space between the lines. 140%-160% are strongly recommended.<br />'+
				'';
			break;

		case 'parts appearance' :
			t = _tab+'... is the options to adjust the way links and titles appear; their font-family and line-height.<br />'+
				'';
			break;			

		case 'date format' :
			t = _tab+'... is the format of date\'s appearance in top of the posts. <br />'+
				_tab+'This option is available only for blogger, others shall be set in provider\'s settings. <br />'+
				_tab+'However, Options are:<br />'+
				_dot+'<b>Gregorian</b>: Suggested for most of English blogs. Default of most of the intl. providers.<br />'+
				_dot+'<b>Hijri</b>: Iranian\'s official calender. Suggested for Persian blogs.<br />'+
				_note+'If you want to use Hijri option, you must set the default output of your date to MM/DD/YYYY format. <br />'+
				'';
			break;

		case 'date standing format' :
			t = _tab+'... is the format of date\'s appearance. Options are:<br />'+
				_dot+'<b>Single</b>: If you want the date to be placed in a single line.<br />'+
				_dot+'<b>Adjacent</b>: If you want the date to be placed next to the title and share the line.<br />'+
				'';
			break;

		case 'permanent link expression' :
			t = _tab+'... is the footer text beyond each post which is actually the exact link to the post. <br />'+
				_tab+'You can use <b>$TIME</b> as posting time, <b>$AUTH</b> as the author of the post, <b>$DATE</b> as the '+
				'date of the post and (in blogfa only) <b>$CATG</b> as post\'s category list.<br />'+
				'';
			break;

		case 'font color' :
			t = _tab+'... is the size of text, measured in Pixels unit. 8px, 9px and 10px are common sizes for'+
				' normal texts.<br />'+
				'';
			break;

		case 'links color' :
			t = _tab+'... is the painting box of the links! Base is the default color of them and Hover is their color '+ 
			'when visitor puts the mouse\'s cursor above the link.<br />'+
				'';
			break;			

		case 'hyperlink color' :
			t = _tab+'... is the default color of the link. Suggested to be not so sharp not so blund. On the other '+
				'word, the links shall be recognized from plain text while reading and shall not be independent '+
				'spots in a glance. Also, this color must be familiar with whole template\'s color and also '+
				'readable on the background.<br />'+
				'';
			break;
			
		case 'rollover color' :
			t = _tab+'... is the mouse-over color of the links. Suggested to be harmonic with hyperlink color; may '+
				'a little ligher, may a little darker.<br />'+
				'';
			break;			

		case 'visiteds color' :
			t = _tab+'... is the color of the links which are previously visited by user. having different values than '+
				'default hyperlink color will help visitor to avoid revisiting pages. also helps him to realize how similar '+
				'your page is to his visited-before pages.<br />'+
				_hint+'To ignore this feature, you can simply delete the content of the field and leave it empty.<br />'+
				'';
			break;	

		case 'term of service' :
			t = _tab+'Before getting the PsycHokinesis (output HTML) you must agree that: <br />'+
				_dot+'Your given template is licensed under '+
				'<a href="http://creativecommons.org/licenses/by-nc-nd/2.0/">CreativeCommons</a> '+
				'and some rights are reserved. <br />'+
				_dot+'You won\'t sell this template to anyone else and you won\'t use it in any commercial manner. <br />'+
				_dot+'You won\'t omit the PsycHo\'s link which gives the ability of future modification of this template '+
				'to everyone else. <br />'+
				_dot+'You use this template at your own risk, knowing that PsycHo holds no responsibility/warranty for it.<br />'+
				_tab+'<br />Special cases can be discussed by contacting '+_me+'.'+
				'';
			break;			

		case 'colors list by hue/saturation' :
			t = _tab+'... is list of all the 3-letters colors using [0369CF] values sorted by their Hue/Saturation! <br />'+
				'The first set is sorted by Hue, which means that cells on one box '+
				'have similar R (Red) values; on one line have simliar G (Green) values and on one column have simliar '+
				'B (Blue) values.<br />'+
				'But in the second set you see the cells are sorted by Saturation which means that the cells on the '+
				'left are more desturated, and suggested for backgrounds, than right ones. <br />'+
				'';
			break;			

		case 'color maker' :
			t = _tab+'... is a very useful semi-application which helps you to choose the best colour!<br /> '+
				'Check it now! <br />'+
				'';
			break;			

		case 'colors list by standard names' :
			t = _tab+'... is list of all Standard Colors supported by CSS2-compatible browsers. As they are all '+
				'extracted from real colors, most of them look pretty fine for artistical simple colored design.<br />'+
				_note+'They are not sorted indeed! I\'d wasted 3 hours to complete their puzzle and here is the '+
				'result! Corporation on sorting them is welcomed; just contact '+_me+'<br />'+
				_hint+'"Transparent", the last color, is actually no color! you can use it to remove the color and treat'+
				'the background as a transparency paper! also, you can use it to remove a border or a line!'+
				'';
			break;
			
		case 'title text input' :			
			t = _tab+'... is the input text box to edit Title of the blog. Actually Title is the first meet of user'+
				'with your blog, which usually contains the name of your blog. <br />'+
				_hint+'You can put the word \'<b>$DEFAULT</b>\' in this field, if you mind it to have its default value, '+
				'entered in your provider\'s settings.<br />'+
				'';
			break;

		case 'description text input' :			
			t = _tab+'... is the input text box to edit description of the blog. <br />'+
				_hint+'You may put \'<b>$DEFAULT</b>\' in this field, if you mind it to have its default value, '+
				'entered in your provider\'s settings.<br />'+
				'';
			break;
		
		case 'post title' :
			t = _tab+'... is actually the label of your posts, which appears in top of the post. '+
				'<br />'+
				'';
			break;

		case 'post date' :
			t = _tab+'... is the date of the post -- when it\'d sent.<br />The format can be either '+
				'Hijri (Iranian Official Calender) or Gregorian.<br />'+
				_tab+'The place also, can be either Adjacent '+
				' (next to the title) or single (in one a single line).<br />'+
				'';
			break;
			
		case 'post body' :
			t = _tab+'... is the main part of your post -- the text which should be as clean and readable as possible! <br />'+
				'';
			break;		
			
		case 'post comments' :
			t = _tab+'... is the link to the commenting page which can be either a pop-up window or somewhere at '+
				'the self page (often can be set in provider\'s setting).<br />'+
				'';
			break;	
			
		case 'post permanent link' :
			t = _tab+'... is a precise permanent link to the post. The text can easily be modified.<br />'+
				'';
			break;			
			
		case 'post separator' :
			t = _tab+'... is the space between the posts which can be either a single line or a wide image '+
				'or even an empty space!'+
				'';
			break;			

		case 'posttop\'s background' :
			t = _tab+'... is the background of Date and Title part. Can be either a simple color or horizontal '+
				'repeating texture or even an image of top part of the box!<br />'+
				'';
			break;			

		case 'postbody\'s background' :
			t = _tab+'... is the background of Post Body. It\'s strongly recommended that this background be a '+
				'bright unsharp color which the text could be read easily on it. Also can be a texture or the middle part '+
				'of a box image. <br />'+
				'';
			break;
			
		case 'postbottom\'s background' :
			t = _tab+'... is the background of Comments and PermanentLink part. Can be either a simple color or horizontal '+
				'repeating texture or even an image of top part of the box!<br />'+
				'';
			break;			
			
		case 'post\'s global settings' :
			t = _tab+'... is the global setting of the posts; the font family and cell direction.<br />'+
				'';
			break;			
			
		case 'one post\'s border' :
			t = _tab+'... is the border of each post. Can be ommited by putting the width zero, in case that you '+
				'wish the posts to be borderless.<br />'+
				'';
			break;			
			
		case 'post vertical borders' :
			t = _tab+'... is the top and bottom border of the Post body which separates the post body from top part '+
				'(date and title) and bottom part (commenting and permanent link).'+
				'';
			break;			
			
		case 'post vertical paddings' :
			t = _tab+'... is the vertical (top and bottom) space of post-top and post-bottom parts and also post body part.<br />'+
				'';
			break;			
			
		case 'post horizontal paddings' :
			t = _tab+'... is the horizontal (left and right) space of post-top and post-bottom parts and also post body part.<br />'+
				'';
			break;			

		case 'parts schema' :
			t = _tab+'... is the place for schema setting of the parts; including background, border, separator and appearance.<br />'+
				'';
			break;			

		case 'parts schema' :
			t = _tab+'... is the place for schema setting of the parts; including background, border, separator and appearance.<br />'+
				'';
			break;	

		case 'link surrounders' :
			t = _tab+'... are actually and Prefix and a Postfix text that will appear before and after each link of the box.<br />'+
				_hint+'HTML tags and special characters same as &amp;#8226; (&#8226;) are allowed!<br />'+
				'';
			break;	

		case 'links overall' :
			t = _tab+'Actually a links is a piece of text that the visitors can navigate to another page by clicking on it. '+
				'For example, <a href="http://p.horm.org" title="Aideen\'s Photography page">Phorm</a> is a link which '+
				'by clicking on it, you will be '+
				'navigated to Aideen\'s photography album at http://p.horm.org .<br />'+
				_tab+'Here, we call "Phorm" (the word), Text of the link and http://p.horm.org (the address), Destination of '+
				'the link.<br />'+
				_tab+'You may notice that if you move the mouse cursor above the link and hold it for a few seconds '+
				'the text "Aideen\'s Photography page" will be displayed as a hint. We call it Title of the link which is very '+
				'helpful for visitors to find out a little information about the destination page.<br />'+
				_tab+'In this part, you can manange your links easily. also you can use some of your provider\'s features, noted in '+
				' "Text" and "Destination"\'s help. Check them out!'+
				'';
			break;	

		case 'suggested colours' :
			t = _tab+'... are the list of 24 colours suggested by PsycHo for the part you are trying to pick a color for.<br />'+
					_tab+'In fact, these 24 colours are 4 sets of 6 colours: hue variation, matchs, saturation variation and value '+
					'variation. <br />'+
				'';
			break;

		case 'preview ecp color' :
			t = _tab+'... is the color you have already selected from the wheel and gradient!<br />'+
				'';
			break;

		case 'ecp rgb value' :
			t = _tab+'... is the name of the color you have already selected. actually this is the value which will be '+
				'used in PsycHo!<br />'+
				'';
			break;
			
		case 'hsv adjustment' :
			t = _tab+'... are the fields which let you pick your wished color easier. <br />'+
				_tab+'Hue is degree of the color which varies from red to green to blue which shall be in range [0..360]. <br />'+
				_tab+'Saturation is the power of the color; the more saturation, the more sharpness. note that all GrayScale '+
				'colors\' saturation equals to zero. This value is measured as percentage.<br />'+
				_tab+'Value is the amount of brightness of the color which is in percent, again. <br />'+
				_hint+'You can increase/decrease these values easily by clicking (or even holding) the cursor on the up and down images.'+
				'';
			break;
			
		case 'rgb adjustment' :
			t = _tab+'... another adjustment for the colors, which is actually by Red, Green and Blue fields. <br />'+
				_hint+'You can place a sharp sign (#) before the value if you want it to be measured as a hexadecimal value.'+
				'';
			break;

		default:
			t = 'No Help! <br /> Please Call Aideen.';
	}
	return t;
}