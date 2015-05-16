


test("Testing function createNewTaskElement() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <button value="" style="display:initial" id="ConfixGeneID2"/> <button id="ConfixGeneID1" value="" style="display:initial"/> ');
	createNewTaskElement();
});


test("Testing function createNewTaskElement() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	createNewTaskElement();
});


test("Testing function addTask() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="new-task"/> <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	addTask();
});


test("Testing function addTask() for path 2", function() {
	expect(0);
	$("#qunit-fixture").append(' <input style="display:initial" id="new-task" type="text" value="ConfixGenValue"/> <div value="" style="display:initial" id="incomplete-tasks"/> <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	addTask();
});


test("Testing function editTask() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	editTask();
});


test("Testing function deleteTask() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	deleteTask();
});


test("Testing function tasksCompleted() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="completed-tasks"/> <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	tasksCompleted();
});


test("Testing function tasksIncomplete() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <div value="" style="display:initial" id="incomplete-tasks"/> <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	tasksIncomplete();
});


test("Testing function bindTaskEvents() for path 1", function() {
	expect(0);
	$("#qunit-fixture").append(' <button value="" style="display:initial" id="ConfixGeneID1"/> <button id="ConfixGeneID0" value="" style="display:initial"/> ');
	bindTaskEvents();
});

