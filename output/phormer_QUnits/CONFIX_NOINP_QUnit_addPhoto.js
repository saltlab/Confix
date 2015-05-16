


test("Testing function setExif() for path 1", function() {
	expect(0);
	setExif();
});


test("Testing function imageUploaded() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="PhotoTitleId"/> <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined" value="" style="display:initial"/> ');
	imageUploaded();
});


test("Testing function writeYet() for path 1", function() {
	expect(0);
	writeYet();
});


test("Testing function uploadSubmitted()  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thumb_note_undefined"/> <div id="PhotoTitleId" value="" style="display:initial"/> ');
	uploadSubmitted() ;
});


test("Testing function uploadSubmitted()  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_txt_undefined"/> <div value="" style="display:initial" id="thumb_note_undefined"/> <div id="PhotoTitleId" value="" style="display:initial"/> ');
	uploadSubmitted() ;
});


test("Testing function uploadSubmitted()  for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_undefined"/> <div value="" style="display:initial" id="upload_iframe_undefined"/> <div value="" style="display:initial" id="upload_uploading_txt_undefined"/> <div value="" style="display:initial" id="thumb_note_undefined"/> <div id="PhotoTitleId" value="" style="display:initial"/> ');
	uploadSubmitted() ;
});


test("Testing function rethumb_fill() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev" value="" style="display:initial"/> ');
	rethumb_fill();
});


test("Testing function rethumb_fill() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div id="thumbPrev" value="" style="display:initial"/> ');
	rethumb_fill();
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

