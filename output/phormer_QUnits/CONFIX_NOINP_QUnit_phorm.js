


test("Testing function dg() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	dg();
});


test("Testing function toggleInfo() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin" value="" style="display:initial"/> ');
	toggleInfo();
});


test("Testing function toggleInfo() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="photoBoxes"/> <div id="hin" value="" style="display:initial"/> <div id="hin" value="" style="display:initial"/> ');
	toggleInfo();
});


test("Testing function toggleInfo() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImage"/> <div value="" style="display:initial" id="photoBoxes"/> <div id="hin" value="" style="display:initial"/> <div id="hin" value="" style="display:initial"/> ');
	toggleInfo();
});


test("Testing function reToggleInfo() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin" value="" style="display:initial"/> ');
	reToggleInfo();
});


test("Testing function reToggleInfo() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="photoBoxes"/> <div id="hin" value="" style="display:initial"/> ');
	reToggleInfo();
});


test("Testing function reToggleInfo() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImage"/> <div value="" style="display:initial" id="photoBoxes"/> <div id="hin" value="" style="display:initial"/> ');
	reToggleInfo();
});


test("Testing function reshuffle() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="thumbscount" value="" style="display:initial"/> ');
	reshuffle();
});


test("Testing function reshuffle() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="thumbscount" type="text" value="ConfixGenValue" style="display:initial"/> ');
	reshuffle();
});


test("Testing function updateIndic() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indicator" value="" style="display:initial"/> ');
	updateIndic();
});


test("Testing function SaveRating() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="rateStatus" value="" style="display:initial"/> ');
	SaveRating();
});


test("Testing function SaveRating() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="indicator"/> <div id="rateStatus" value="" style="display:initial"/> ');
	SaveRating();
});


test("Testing function prepareBody() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="hin" value="" style="display:initial"/> ');
	prepareBody();
});


test("Testing function prepareBody() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="photoBoxes"/> <div id="hin" value="" style="display:initial"/> ');
	prepareBody();
});


test("Testing function prepareBody() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="theImage"/> <div value="" style="display:initial" id="photoBoxes"/> <div id="hin" value="" style="display:initial"/> ');
	prepareBody();
});


test("Testing function hideElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	hideElem();
});


test("Testing function showElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	showElem();
});


test("Testing function inlineElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	inlineElem();
});


test("Testing function tableRowElem() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null" value="" style="display:initial"/> ');
	tableRowElem();
});


test("Testing function checkWV() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wvinput" value="" style="display:initial"/> ');
	checkWV();
});


test("Testing function doReply() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="cmntReply" value="" style="display:initial"/> ');
	doReply();
});


test("Testing function doReply() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="viewComment"/> <div id="cmntReply" value="" style="display:initial"/> ');
	doReply();
});


test("Testing function doReply() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ComReplyTR"/> <div value="" style="display:initial" id="viewComment"/> <div id="cmntReply" value="" style="display:initial"/> ');
	doReply();
});


test("Testing function ss_next() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_next();
});


test("Testing function ss_next() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link"/> <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_next();
});


test("Testing function ss_next() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link2"/> <div value="" style="display:initial" id="ss_playpause_link"/> <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_next();
});


test("Testing function ss_prev() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_prev();
});


test("Testing function ss_prev() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link"/> <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_prev();
});


test("Testing function ss_prev() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link2"/> <div value="" style="display:initial" id="ss_playpause_link"/> <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_prev();
});


test("Testing function ss_update() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_update();
});


test("Testing function ss_update() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link"/> <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_update();
});


test("Testing function ss_update() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link2"/> <div value="" style="display:initial" id="ss_playpause_link"/> <div value="" style="display:initial" id="ss_n"/> <div value="" style="display:initial" id="ss_theend"/> <div id="ss_link2" value="" style="display:initial"/> ');
	ss_update();
});


test("Testing function ss_playpause() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_playpause_link" value="" style="display:initial"/> ');
	ss_playpause();
});


test("Testing function ss_playpause() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_playpause_link2"/> <div id="ss_playpause_link" value="" style="display:initial"/> ');
	ss_playpause();
});


test("Testing function ss_toggleSmaller() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_smaller_link" value="" style="display:initial"/> ');
	ss_toggleSmaller();
});


test("Testing function ss_toggleSmaller() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ss_photo"/> <div id="ss_smaller_link" value="" style="display:initial"/> ');
	ss_toggleSmaller();
});


test("Testing function ss_run() for path 1", function() {
	expect(0);
	ss_run();
});


test("Testing function ss_slideshow() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ss_refresh" value="" style="display:initial"/> ');
	ss_slideshow();
});


test("Testing function ss_slideshow() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> ');
	ss_slideshow();
});


test("Testing function ss_slideshow() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> <input id="ss_refresh" type="text" value="1" style="display:initial"/> ');
	ss_slideshow();
});

