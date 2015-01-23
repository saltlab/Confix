


test("Testing function dg() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	dg();
});


test("Testing function toggleInfo() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin"/> ');
	toggleInfo();
});


test("Testing function toggleInfo() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="hin"/> <div id="hin"/> ');
	toggleInfo();
});


test("Testing function toggleInfo() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImage"/> <div id="photoBoxes"/> <div id="hin"/> <div id="hin"/> ');
	toggleInfo();
});


test("Testing function reToggleInfo() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin"/> ');
	reToggleInfo();
});


test("Testing function reToggleInfo() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="hin"/> ');
	reToggleInfo();
});


test("Testing function reToggleInfo() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImage"/> <div id="photoBoxes"/> <div id="hin"/> ');
	reToggleInfo();
});


test("Testing function reshuffle() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbscount"/> ');
	reshuffle();
});


test("Testing function reshuffle() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="thumbscount" value="ConfixGetValue"/> ');
	reshuffle();
});


test("Testing function updateIndic() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indicator"/> ');
	updateIndic();
});


test("Testing function SaveRating() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="rateStatus"/> ');
	SaveRating();
});


test("Testing function SaveRating() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indicator"/> <div id="rateStatus"/> ');
	SaveRating();
});


test("Testing function prepareBody() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin"/> ');
	prepareBody();
});


test("Testing function prepareBody() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="hin"/> ');
	prepareBody();
});


test("Testing function prepareBody() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImage"/> <div id="photoBoxes"/> <div id="hin"/> ');
	prepareBody();
});


test("Testing function hideElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	hideElem();
});


test("Testing function showElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	showElem();
});


test("Testing function inlineElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	inlineElem();
});


test("Testing function tableRowElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> ');
	tableRowElem();
});


test("Testing function checkWV() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wvinput"/> ');
	checkWV();
});


test("Testing function doReply() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cmntReply"/> ');
	doReply();
});


test("Testing function doReply() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply();
});


test("Testing function doReply() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ComReplyTR"/> <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply();
});


test("Testing function ss_next() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_next();
});


test("Testing function ss_next() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link"/> <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_next();
});


test("Testing function ss_next() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link2"/> <div id="ss_playpause_link"/> <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_next();
});


test("Testing function ss_prev() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_prev();
});


test("Testing function ss_prev() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link"/> <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_prev();
});


test("Testing function ss_prev() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link2"/> <div id="ss_playpause_link"/> <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_prev();
});


test("Testing function ss_update() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_update();
});


test("Testing function ss_update() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link"/> <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_update();
});


test("Testing function ss_update() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link2"/> <div id="ss_playpause_link"/> <div id="ss_n"/> <div id="ss_theend"/> <div id="ss_link2"/> ');
	ss_update();
});


test("Testing function ss_playpause() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link"/> ');
	ss_playpause();
});


test("Testing function ss_playpause() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link2"/> <div id="ss_playpause_link"/> ');
	ss_playpause();
});


test("Testing function ss_toggleSmaller() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_smaller_link"/> ');
	ss_toggleSmaller();
});


test("Testing function ss_toggleSmaller() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_photo"/> <div id="ss_smaller_link"/> ');
	ss_toggleSmaller();
});


test("Testing function ss_run() for path 1", function() {
	expect(0);
	ss_run();
});


test("Testing function ss_slideshow() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_refresh"/> ');
	ss_slideshow();
});


test("Testing function ss_slideshow() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="ss_refresh" value="ConfixGetValue"/> <input id="ss_refresh" value="ConfixGetValue"/> <input id="ss_refresh" value="ConfixGetValue"/> <input id="ss_refresh" value="ConfixGetValue"/> ');
	ss_slideshow();
});

