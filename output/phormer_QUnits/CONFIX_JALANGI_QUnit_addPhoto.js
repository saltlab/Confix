


test("Testing function setExif('test') for path 1", function() {
	expect(0);
	setExif('test');
});


test("Testing function imageUploaded('test', 'test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function imageUploaded('test', 'test') for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="PhotoTitleId"/> <div value="" style="display:initial" id="finallyAdd"/> <div value="" style="display:initial" id="theImgPath"/> <div value="" style="display:initial" id="kines_r"/> <div value="" style="display:initial" id="kines_l"/> <div value="" style="display:initial" id="thumbPrev"/> <div value="" style="display:initial" id="thePhoto"/> <div value="" style="display:initial" id="ThumbnailGenerator"/> <div id="thumb_note_wrapper_test" value="" style="display:initial"/> ');
	imageUploaded('test', 'test');
});


test("Testing function writeYet('test', 'test') for path 1", function() {
	expect(0);
	writeYet('test', 'test');
});


test("Testing function uploadSubmitted('a', 'a', 'a', '')  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_a" value="" style="display:initial"/> ');
	uploadSubmitted('a', 'a', 'a', '') ;
});


test("Testing function uploadSubmitted('a', 'a', 'a', '')  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="upload_uploading_a"/> <div value="" style="display:initial" id="upload_iframe_a"/> <div id="upload_uploading_txt_a" value="" style="display:initial"/> ');
	uploadSubmitted('a', 'a', 'a', '') ;
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

