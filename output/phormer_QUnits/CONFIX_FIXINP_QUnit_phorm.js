


test("Testing function dg('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	dg('test');
});


test("Testing function toggleInfo('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin"/> ');
	toggleInfo('test');
});


test("Testing function toggleInfo('test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="photoBoxes"/> <div id="hin"/> ');
	toggleInfo('test');
});


test("Testing function toggleInfo('test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="theImage"/> <div id="photoBoxes"/> <div id="hin"/> ');
	toggleInfo('test');
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


test("Testing function SaveRating('test','test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="rateStatus"/> ');
	SaveRating('test','test');
});


test("Testing function SaveRating('test','test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indicator"/> <div id="rateStatus"/> ');
	SaveRating('test','test');
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


test("Testing function hideElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	hideElem('test');
});


test("Testing function showElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	showElem('test');
});


test("Testing function inlineElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	inlineElem('test');
});


test("Testing function tableRowElem('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="test"/> ');
	tableRowElem('test');
});


test("Testing function checkWV() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wvinput"/> ');
	checkWV();
});


test("Testing function doReply('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cmntReply"/> ');
	doReply('test');
});


test("Testing function doReply('test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply('test');
});


test("Testing function doReply('test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ComReplyTR"/> <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply('test');
});


test("Testing function doReply('test') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cmntReply"/> ');
	doReply('test');
});


test("Testing function doReply('test') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply('test');
});


test("Testing function doReply('test') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ComReplyTR"/> <div id="viewComment"/> <div id="cmntReply"/> ');
	doReply('test');
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

