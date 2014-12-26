// QUnit test cases generated @ Thu Dec 25 22:26:28 PST 2014

module("output/phormer_QUnits", {
    setup: function() {
        // generate fixture before each test
		//$("#qunit-fixture").append('${fixture}');
    },
    teardown: function() {
        // runs after each test
		//${testTearDownCode}
    }
});



test("Testing function setExif('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	setExif('test');
});


test("Testing function writeYet('test', false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	writeYet('test', false);
});


test("Testing function writeYet('test', true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append('');
	writeYet('test', true);
});


test("Testing function uploadSubmitted('test', 'test', false, 'test')  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumb_note_test"/> <div id="PhotoTitleId"/> ');
	uploadSubmitted('test', 'test', false, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', false, 'test')  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test"/> <div id="thumb_note_test"/> <div id="PhotoTitleId"/> ');
	uploadSubmitted('test', 'test', false, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', false, 'test')  for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_test"/> <div id="upload_iframe_test"/> <div id="upload_uploading_txt_test"/> <div id="thumb_note_test"/> <div id="PhotoTitleId"/> ');
	uploadSubmitted('test', 'test', false, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', true, 'test')  for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_txt_test"/> ');
	uploadSubmitted('test', 'test', true, 'test') ;
});


test("Testing function uploadSubmitted('test', 'test', true, 'test')  for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="upload_uploading_test"/> <div id="upload_iframe_test"/> <div id="upload_uploading_txt_test"/> ');
	uploadSubmitted('test', 'test', true, 'test') ;
});
