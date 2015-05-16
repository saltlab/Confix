//$("#qunit-fixture").append(' <input id="completed-tasks" value="ConfixGenValue"/> <div id="incomplete-tasks"/> <button id="ConfixGeneID3"/> <button id="ConfixGeneID2"/> <div id="new-task"/> ');

var taskInput;
var addButton;
var incompleteTasksHolder;
var completedTasksHolder;

//New Task List Item
function createNewTaskElement(taskString) {
	//create list item
	var listItem = document.createElement('li');

	//input (checkbox)
	var checkBox = document.createElement('input'); //checkbox
	//label
	var label = document.createElement('label');
	//input (text)
	var editInput = document.createElement('input'); //text
	//Create button.edit
	var editButton = document.createElement('button');
	//Create button.delete
	var deleteButton = document.createElement('button');
	
	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
};

//Add a new task
function addTask() {
	console.log('Add task...')
	taskInput = document.getElementById('new-task'); //new-task
	var text = taskInput.value;
	var listItem = createNewTaskElement(taskInput.value);
	//append listItem to incompleteTasksHolder
	incompleteTasksHolder = document.getElementById('incomplete-tasks'); //ul #incomplete-tasks
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, tasksCompleted);

	//clear input value after task is added
	taskInput.value = "";
};


//Edit an existing task
function editTask() {
	console.log('Edit task...');

	var listItem = this.parentNode;

	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');
	var containsClass = listItem.classList.contains('editMode');

	if(containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}
	//Toggle .editMode on the parent li	
	listItem.classList.toggle('editMode');
};


//Delete an existing task
function deleteTask() {
	console.log('Delete task....');

	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
};



//Mark a task as complete
function tasksCompleted() {
	console.log('complete task....')
	//Append the task li to the ul #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder = document.getElementById('completed-tasks'); //ul #completed-tasks
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, tasksIncomplete);
};

//Mark a task as incomplete
function tasksIncomplete() {
	console.log('Task incomplete...')
	//Append the task li to the ul #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder = document.getElementById('incomplete-tasks'); //ul #incomplete-tasks
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, tasksCompleted);
};

function bindTaskEvents(taskListItem, checkBoxEventHandler) {
	//Select li children
	var checkBox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');

	//Bind the editTask to edit button
	editButton.onclick = editTask;
	//Bind deleteTask to delete button	
	deleteButton.onclick = deleteTask;
	//Bind checkBoxEventHandler to checkbox	
	checkBox.onchange = checkBoxEventHandler;
};

addButton = document.getElementsByTagName('button')[0]; 
addButton.onclick = addTask;

incompleteTasksHolder = document.getElementById('incomplete-tasks'); //ul #incomplete-tasks
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], tasksCompleted);
};

completedTasksHolder = document.getElementById('completed-tasks'); //ul #completed-tasks
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], tasksIncomplete);
}		



