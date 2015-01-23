


test("Testing function ShowEditPartBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_EditPartBosTheDiv_NaN"/> <div id="EditPartLegendS"/> <div id="EditPartLegendN"/> ');
	ShowEditPartBox();
});


test("Testing function HideEditPartBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="EditPartLegendS"/> ');
	HideEditPartBox();
});


test("Testing function CopyLink() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_LinkTxt_undefined_undefined"/> ');
	CopyLink();
});


test("Testing function CopyLink() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_LinkUrl_undefined_undefined"/> <div id="_undefined_LinkTxt_undefined_undefined"/> ');
	CopyLink();
});


test("Testing function CopyLink() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_LinkTtl_undefined_undefined"/> <div id="_undefined_LinkUrl_undefined_undefined"/> <div id="_undefined_LinkTxt_undefined_undefined"/> ');
	CopyLink();
});


test("Testing function CopyLink() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_LinkEr_undefined_undefined"/> <div id="_undefined_LinkTtl_undefined_undefined"/> <div id="_undefined_LinkUrl_undefined_undefined"/> <div id="_undefined_LinkTxt_undefined_undefined"/> ');
	CopyLink();
});


test("Testing function CopyLink() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_undefined"/> <div id="_undefined_LinkEr_undefined_undefined"/> <div id="_undefined_LinkTtl_undefined_undefined"/> <div id="_undefined_LinkUrl_undefined_undefined"/> <div id="_undefined_LinkTxt_undefined_undefined"/> ');
	CopyLink();
});


test("Testing function CopyBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_undefined"/> ');
	CopyBox();
});


test("Testing function CopyBox() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_linkNumForce_undefined"/> <div id="undefined_PartDiv_undefined"/> ');
	CopyBox();
});


test("Testing function CopyBox() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_TitleTxt_undefined"/> <div id="_undefined_linkNumForce_undefined"/> <div id="undefined_PartDiv_undefined"/> ');
	CopyBox();
});


test("Testing function BoxLength() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_boxNumForce"/> ');
	BoxLength();
});


test("Testing function BoxLengthByFor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_0"/> ');
	BoxLengthByFor();
});


test("Testing function BoxLengthByFor() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_1"/> <div id="undefined_PartDiv_0"/> ');
	BoxLengthByFor();
});


test("Testing function BoxLengthByFor() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_2"/> <div id="undefined_PartDiv_1"/> <div id="undefined_PartDiv_0"/> ');
	BoxLengthByFor();
});


test("Testing function BoxLengthByFor() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_3"/> <div id="undefined_PartDiv_2"/> <div id="undefined_PartDiv_1"/> <div id="undefined_PartDiv_0"/> ');
	BoxLengthByFor();
});


test("Testing function BoxLengthByFor() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_4"/> <div id="undefined_PartDiv_3"/> <div id="undefined_PartDiv_2"/> <div id="undefined_PartDiv_1"/> <div id="undefined_PartDiv_0"/> ');
	BoxLengthByFor();
});


test("Testing function BoxLengthByFor() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_PartDiv_5"/> <div id="undefined_PartDiv_4"/> <div id="undefined_PartDiv_3"/> <div id="undefined_PartDiv_2"/> <div id="undefined_PartDiv_1"/> <div id="undefined_PartDiv_0"/> ');
	BoxLengthByFor();
});


test("Testing function LinkLengthOnBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_linkNumForce_undefined"/> ');
	LinkLengthOnBox();
});


test("Testing function LinkLengthOnBoxByFor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_3"/> <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_4"/> <div id="undefined_LinkBodyContainer_undefined_3"/> <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_5"/> <div id="undefined_LinkBodyContainer_undefined_4"/> <div id="undefined_LinkBodyContainer_undefined_3"/> <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_6"/> <div id="undefined_LinkBodyContainer_undefined_5"/> <div id="undefined_LinkBodyContainer_undefined_4"/> <div id="undefined_LinkBodyContainer_undefined_3"/> <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_7"/> <div id="undefined_LinkBodyContainer_undefined_6"/> <div id="undefined_LinkBodyContainer_undefined_5"/> <div id="undefined_LinkBodyContainer_undefined_4"/> <div id="undefined_LinkBodyContainer_undefined_3"/> <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function LinkLengthOnBoxByFor() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="undefined_LinkBodyContainer_undefined_8"/> <div id="undefined_LinkBodyContainer_undefined_7"/> <div id="undefined_LinkBodyContainer_undefined_6"/> <div id="undefined_LinkBodyContainer_undefined_5"/> <div id="undefined_LinkBodyContainer_undefined_4"/> <div id="undefined_LinkBodyContainer_undefined_3"/> <div id="undefined_LinkBodyContainer_undefined_2"/> <div id="undefined_LinkBodyContainer_undefined_1"/> <div id="undefined_LinkBodyContainer_undefined_0"/> ');
	LinkLengthOnBoxByFor();
});


test("Testing function ClearBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_TitleTxt_undefined"/> ');
	ClearBox();
});


test("Testing function ClearBox() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	ClearBox();
});


test("Testing function ClearBox() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	ClearBox();
});


test("Testing function AddTitleToBox() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	AddTitleToBox();
});


test("Testing function deMoronize() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	deMoronize();
});


test("Testing function mouseMoved() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	mouseMoved();
});


test("Testing function pickColor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	pickColor();
});


test("Testing function AnalyseColor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	AnalyseColor();
});


test("Testing function hoverColor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	hoverColor();
});


test("Testing function setECPCell() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_C_ColDivundefined"/> <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	setECPCell();
});


test("Testing function getValFromInput() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="null"/> <div id="ECP_C_ColDivundefined"/> <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	getValFromInput();
});


test("Testing function resetByHSV() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_myH"/> <div id="null"/> <div id="ECP_C_ColDivundefined"/> <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	resetByHSV();
});


test("Testing function resetByRGB() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_myR"/> <div id="ECP_myH"/> <div id="null"/> <div id="ECP_C_ColDivundefined"/> <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	resetByRGB();
});


test("Testing function ECP_incdec() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_myR"/> <div id="ECP_myH"/> <div id="null"/> <div id="ECP_C_ColDivundefined"/> <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	ECP_incdec();
});


test("Testing function dgv() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_myR"/> <div id="ECP_myH"/> <div id="null"/> <div id="null"/> <div id="ECP_C_ColDivundefined"/> <div id="indic"/> <div id="wheel"/> <div id="CPwutObj"/> <div id="CPwutProp"/> <div id="_undefined_LinkTxt_undefined_0"/> <div id="_undefined_boxNumForce"/> <div id="_undefined_TitleTxt_undefined"/> ');
	dgv();
});

