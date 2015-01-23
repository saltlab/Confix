


test("Testing function setExif() for path 1", function() {
	expect(0);
	setExif();
});


test("Testing function imageUploaded() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImgPath"/> <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="finallyAdd"/> <div id="theImgPath"/> <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function imageUploaded() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="PhotoTitleId"/> <div id="finallyAdd"/> <div id="theImgPath"/> <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_undefined"/> ');
	imageUploaded();
});


test("Testing function writeYet() for path 1", function() {
	expect(0);
	writeYet();
});


test("Testing function uploadSubmitted()  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_undefined"/> <div id="PhotoTitleId"/> ');
	uploadSubmitted() ;
});


test("Testing function uploadSubmitted()  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_undefined"/> <div id="thumb_note_undefined"/> <div id="PhotoTitleId"/> ');
	uploadSubmitted() ;
});


test("Testing function uploadSubmitted()  for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_undefined"/> <div id="upload_iframe_undefined"/> <div id="upload_uploading_txt_undefined"/> <div id="thumb_note_undefined"/> <div id="PhotoTitleId"/> ');
	uploadSubmitted() ;
});

