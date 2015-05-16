


test("Testing function setExif('test') for path 1", function() {
	expect(0);
	setExif('test');
});


test("Testing function AjaxVal[0] = '!test'; setExif('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoinfo" value="" style="display:initial"/> ');
	AjaxVal[0] = '!test'; setExif('test');
});


test("Testing function AjaxVal[0] = 'test;'; setExif('test') for path 1", function() {
	expect(0);
	AjaxVal[0] = 'test;'; setExif('test');
});


test("Testing function AjaxVal[0] = null; setExif('test') for path 1", function() {
	expect(0);
	AjaxVal[0] = null; setExif('test');
});


test("Testing function imageUploaded(false, 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(false, 'test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(false, 'test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(false, 'test') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(false, 'test') for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(false, 'test') for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(false, 'test') for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="PhotoTitleId"/> <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(false, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function imageUploaded(true, 'test') for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="PhotoTitleId"/> <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded(true, 'test');
});


test("Testing function hasgd = false; imageUploaded(true, 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	hasgd = false; imageUploaded(true, 'test');
});


test("Testing function hasgd = false; imageUploaded(true, 'test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImgPath"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	hasgd = false; imageUploaded(true, 'test');
});


test("Testing function hasgd = false; imageUploaded(true, 'test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	hasgd = false; imageUploaded(true, 'test');
});


test("Testing function hasgd = false; imageUploaded(true, 'test') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="PhotoTitleId"/> <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	hasgd = false; imageUploaded(true, 'test');
});


test("Testing function AjaxVal[0] = ''; writeYet('test', false) for path 1", function() {
	expect(0);
	AjaxVal[0] = ''; writeYet('test', false);
});


test("Testing function AjaxVal[0] = ''; writeYet('test', true) for path 1", function() {
	expect(0);
	AjaxVal[0] = ''; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'ERRORtest'; writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'ERRORtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'ERRORtest'; writeYet('test', false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_iframe_test"/> <div value="" style="display:initial" id="upload_uploading_test"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'ERRORtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'ERRORtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_iframe_test"/> <div id="upload_uploading_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'ERRORtest'; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'DELEDtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_iframe_test"/> <div id="upload_uploading_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'DELEDtest'; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'EMPTYtest'; writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'EMPTYtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'EMPTYtest'; writeYet('test', false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'EMPTYtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'EMPTYtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'EMPTYtest'; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'EMPTYtest'; pcupload = true; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'STARTtest'; writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'STARTtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'STARTtest'; writeYet('test', false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'STARTtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'STARTtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'STARTtest'; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'STARTtest'; pcupload = true;  writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'THUMBtest'; writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'THUMBtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'THUMBtest'; writeYet('test', false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div id="thumb_note_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'THUMBtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'THUMBtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'THUMBtest'; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'UNZIPtest'; writeYet('test', false) for path 1", function() {
	expect(0);
	AjaxVal[0] = 'UNZIPtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'UNZIPtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	AjaxVal[0] = 'UNZIPtest'; writeYet('test', true);
});


test("Testing function AjaxVal[0] = 'ENDEDtest'; writeYet('test', false) for path 1", function() {
	expect(0);
	AjaxVal[0] = 'ENDEDtest'; writeYet('test', false);
});


test("Testing function AjaxVal[0] = 'ENDEDtest'; writeYet('test', true) for path 1", function() {
	expect(0);
	AjaxVal[0] = 'ENDEDtest'; writeYet('test', true);
});


test("Testing function uploadSubmitted('test', 'test', false, 'test')  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thumb_note_test"/> <div id="PhotoTitleId" value="" style="display:initial"/> ');
	uploadSubmitted('test', 'test', false, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', false, 'test')  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div value="" style="display:initial" id="thumb_note_test"/> <div id="PhotoTitleId" value="" style="display:initial"/> ');
	uploadSubmitted('test', 'test', false, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', false, 'test')  for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_test"/> <div value="" style="display:initial" id="upload_iframe_test"/> <div value="" style="display:initial" id="upload_uploading_txt_test"/> <div value="" style="display:initial" id="thumb_note_test"/> <div id="PhotoTitleId" value="" style="display:initial"/> ');
	uploadSubmitted('test', 'test', false, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', true, 'test')  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	uploadSubmitted('test', 'test', true, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', true, 'test')  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_test"/> <div value="" style="display:initial" id="upload_iframe_test"/> <div id="upload_uploading_txt_test" value="" style="display:initial"/> ');
	uploadSubmitted('test', 'test', true, 'test') ;
});


test("Testing function rethumb_fill('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev" value="" style="display:initial"/> ');
	rethumb_fill('test');
});


test("Testing function rethumb_fill('test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div id="thumbPrev" value="" style="display:initial"/> ');
	rethumb_fill('test');
});


test("Testing function rethumb() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev" value="" style="display:initial"/> ');
	rethumb();
});


test("Testing function rethumb() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div id="thumbPrev" value="" style="display:initial"/> ');
	rethumb();
});

