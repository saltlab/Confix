


test("Testing function setExif('test') for path 1", function() {
	expect(0);
	setExif('test');
});


test("Testing function imageUploaded('test', 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImgPath"/> <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="finallyAdd"/> <div id="theImgPath"/> <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="PhotoTitleId"/> <div id="finallyAdd"/> <div id="theImgPath"/> <div id="kines_r"/> <div id="kines_l"/> <div id="thumbPrev"/> <div id="thePhoto"/> <div id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test"/> ');
	imageUploaded('test', 'test');
});


test("Testing function writeYet('test', 'test') for path 1", function() {
	expect(0);
	writeYet('test', 'test');
});


test("Testing function uploadSubmitted('a', 'a', 'a', '')  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_a"/> ');
	uploadSubmitted('a', 'a', 'a', '') ;
});


test("Testing function uploadSubmitted('a', 'a', 'a', '')  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_a"/> <div id="upload_iframe_a"/> <div id="upload_uploading_txt_a"/> ');
	uploadSubmitted('a', 'a', 'a', '') ;
});

