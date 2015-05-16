


test("Testing function deMoronize() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="CPwutProp" value="" style="display:initial"/> ');
	deMoronize();
});


test("Testing function deMoronize() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="CPwutObj"/> <div id="CPwutProp" value="" style="display:initial"/> ');
	deMoronize();
});


test("Testing function deMoronize() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="wheel"/> <div value="" style="display:initial" id="SuggestColor"/> <div value="" style="display:initial" id="CPwutObj"/> <div id="CPwutProp" value="" style="display:initial"/> ');
	deMoronize();
});


test("Testing function deMoronize() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myRGBS"/> <div value="" style="display:initial" id="wheel"/> <div value="" style="display:initial" id="SuggestColor"/> <div value="" style="display:initial" id="CPwutObj"/> <div id="CPwutProp" value="" style="display:initial"/> ');
	deMoronize();
});


test("Testing function deMoronize() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myRGBS"/> <div value="" style="display:initial" id="wheel"/> <div value="" style="display:initial" id="SuggestColor"/> <div value="" style="display:initial" id="CPwutObj"/> <div id="CPwutProp" value="" style="display:initial"/> ');
	deMoronize();
});


test("Testing function pickColor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wheel" value="" style="display:initial"/> ');
	pickColor();
});


test("Testing function pickColor() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="wheel" value="" style="display:initial"/> ');
	pickColor();
});


test("Testing function AnalyseColor('000000',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('000000',true);
});


test("Testing function AnalyseColor('000000',true) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID3"/>  <div value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="ConfixGeneID2"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('000000',true);
});


test("Testing function AnalyseColor('000000',true) for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_ColDiv2"/> <div value="" style="display:initial" id="ConfixGeneID9"/> <div value="" style="display:initial" id="ConfixGeneID8"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID9"/>  <div value="" style="display:initial" id="ConfixGeneID8"/>  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('000000',true);
});


test("Testing function AnalyseColor('000000',true) for path 4", function() {
	expect(0);
	AnalyseColor('000000',true);
});


test("Testing function AnalyseColor('000000',false) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('000000',false);
});


test("Testing function AnalyseColor('000000',false) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_C_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID3"/>  <div value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="ConfixGeneID2"/> <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('000000',false);
});


test("Testing function AnalyseColor('000000',false) for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_C_ColDiv2"/> <div value="" style="display:initial" id="ConfixGeneID9"/> <div value="" style="display:initial" id="ConfixGeneID8"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID9"/>  <div value="" style="display:initial" id="ConfixGeneID8"/>  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ECP_C_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('000000',false);
});


test("Testing function AnalyseColor('000000',false) for path 4", function() {
	expect(0);
	AnalyseColor('000000',false);
});


test("Testing function AnalyseColor('191500',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('191500',true);
});


test("Testing function AnalyseColor('191919',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('191919',true);
});


test("Testing function AnalyseColor('191919',true) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID3"/>  <div value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="ConfixGeneID2"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('191919',true);
});


test("Testing function AnalyseColor('191919',true) for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_ColDiv2"/> <div value="" style="display:initial" id="ConfixGeneID9"/> <div value="" style="display:initial" id="ConfixGeneID8"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID9"/>  <div value="" style="display:initial" id="ConfixGeneID8"/>  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('191919',true);
});


test("Testing function AnalyseColor('191919',true) for path 4", function() {
	expect(0);
	AnalyseColor('191919',true);
});


test("Testing function AnalyseColor('EEFFE5',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('EEFFE5',true);
});


test("Testing function AnalyseColor('E5F6FF',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('E5F6FF',true);
});


test("Testing function AnalyseColor('E5F6FF',true) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID3"/>  <div value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="ConfixGeneID2"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('E5F6FF',true);
});


test("Testing function AnalyseColor('E5F6FF',true) for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_ColDiv2"/> <div value="" style="display:initial" id="ConfixGeneID9"/> <div value="" style="display:initial" id="ConfixGeneID8"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID9"/>  <div value="" style="display:initial" id="ConfixGeneID8"/>  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('E5F6FF',true);
});


test("Testing function AnalyseColor('E5F6FF',true) for path 4", function() {
	expect(0);
	AnalyseColor('E5F6FF',true);
});


test("Testing function AnalyseColor('E9E5FF',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('E9E5FF',true);
});


test("Testing function AnalyseColor('FFE5E9',true) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('FFE5E9',true);
});


test("Testing function AnalyseColor('FFE5E9',true) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID3"/>  <div value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="ConfixGeneID2"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('FFE5E9',true);
});


test("Testing function AnalyseColor('FFE5E9',true) for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_F_ColDiv2"/> <div value="" style="display:initial" id="ConfixGeneID9"/> <div value="" style="display:initial" id="ConfixGeneID8"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID9"/>  <div value="" style="display:initial" id="ConfixGeneID8"/>  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ECP_F_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	AnalyseColor('FFE5E9',true);
});


test("Testing function AnalyseColor('FFE5E9',true) for path 4", function() {
	expect(0);
	AnalyseColor('FFE5E9',true);
});


test("Testing function hoverColor() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myV"/> <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myB"/> <div value="" style="display:initial" id="ECP_myV"/> <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function hoverColor() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myColorPrev"/> <div value="" style="display:initial" id="ECP_myB"/> <div value="" style="display:initial" id="ECP_myV"/> <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	hoverColor();
});


test("Testing function setECPCell('1', true, '') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_F_ColDiv1" value="" style="display:initial"/> ');
	setECPCell('1', true, '');
});


test("Testing function setECPCell('1', false, '') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	setECPCell('1', false, '');
});


test("Testing function setECPCell('1', false, '') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_C_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID3"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID3"/>  <div value="" style="display:initial" id="ConfixGeneID2"/> </div> <div value="" style="display:initial" id="ConfixGeneID2"/> <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	setECPCell('1', false, '');
});


test("Testing function setECPCell('1', false, '') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_C_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	setECPCell('1', false, '');
});


test("Testing function setECPCell('1', false, '') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_C_Sinput1"/> <div value="" style="display:initial" id="ConfixGeneID4"/> <div value="" style="display:initial" id="ConfixInputTo">  <div value="" style="display:initial" id="ConfixGeneID4"/>  <div value="" style="display:initial" id="ConfixGeneID3"/> </div> <div value="" style="display:initial" id="ConfixGeneID3"/> <div id="ECP_C_ColDiv1" value="" style="display:initial"/> ');
	setECPCell('1', false, '');
});


test("Testing function getValFromInput('id', 0) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="id" value="" style="display:initial"/> ');
	getValFromInput('id', 0);
});


test("Testing function getValFromInput('id', 0) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="id" type="text" value="ConfixGenValue" style="display:initial"/> ');
	getValFromInput('id', 0);
});


test("Testing function getValFromInput('id', 0) for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="id" type="text" value="ConfixGenValue" style="display:initial"/> ');
	getValFromInput('id', 0);
});


test("Testing function resetByHSV() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_myH" value="" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="ECP_myS" value=""/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="ECP_myV" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="indic" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="indic_gr"/> <div style="display:initial" id="indic" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByHSV() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="ECP_myR"/> <div style="display:initial" value="" id="indic_gr"/> <div style="display:initial" id="indic" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myV"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myS"/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> <div id="ECP_myH" style="display:initial" value=""/> <input id="ECP_myH" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByHSV();
});


test("Testing function resetByRGB() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="ECP_myR" value="" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="ECP_myG" value=""/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myG"/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="ECP_myB" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myG"/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myB"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myG"/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" id="indic" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myB"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myG"/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="indic_gr"/> <div style="display:initial" id="indic" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myB"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myG"/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGB() for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div style="display:initial" value="" id="ECP_myH"/> <div style="display:initial" value="" id="indic_gr"/> <div style="display:initial" id="indic" value=""/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myB"/> <input type="text" value="ConfixGenValue" style="display:initial" id="ECP_myG"/> <input id="ECP_myR" type="text" value="ConfixGenValue" style="display:initial"/> ');
	resetByRGB();
});


test("Testing function resetByRGBS('#FFFFFF') for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 3", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 4", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 5", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 6", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 7", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myV"/> <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 8", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myB"/> <div value="" style="display:initial" id="ECP_myV"/> <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function resetByRGBS('#FFFFFF') for path 9", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="ECP_myColorPrev"/> <div value="" style="display:initial" id="ECP_myB"/> <div value="" style="display:initial" id="ECP_myV"/> <div value="" style="display:initial" id="ECP_myG"/> <div value="" style="display:initial" id="ECP_myS"/> <div value="" style="display:initial" id="ECP_myR"/> <div value="" style="display:initial" id="ECP_myH"/> <div value="" style="display:initial" id="indic_gr"/> <div id="indic" value="" style="display:initial"/> ');
	resetByRGBS('#FFFFFF');
});


test("Testing function s = document.createElement('div'); s.id = '12345671234567'; document.body.appendChild(s); resetByRGBS(s) for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="123456Sinput67" value="" style="display:initial"/> ');
	s = document.createElement('div'); s.id = '12345671234567'; document.body.appendChild(s); resetByRGBS(s);
});


test("Testing function s = document.createElement('div'); s.id = '12345671234567'; document.body.appendChild(s); resetByRGBS(s) for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <div id="123456Sinput67" value="" style="display:initial"/> ');
	s = document.createElement('div'); s.id = '12345671234567'; document.body.appendChild(s); resetByRGBS(s);
});


test("Testing function ECP_incdec('H', 0, 1) for path 1", function() {
	expect(0);
	ECP_incdec('H', 0, 1);
});


test("Testing function ECP_incdec('S', 0) for path 1", function() {
	expect(0);
	ECP_incdec('S', 0);
});


test("Testing function ECP_incdec('V', 0) for path 1", function() {
	expect(0);
	ECP_incdec('V', 0);
});

