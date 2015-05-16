trace = [];
function confixWrapper(statementType, statement, varList, varValueList, enclosingFunction, actualStatement) {
  trace.push({statementType: statementType, statement: statement, varList: varList, varValueList: varValueList, enclosingFunction: enclosingFunction, actualStatement: actualStatement});
  return actualStatement;
}
function getConfixTrace() {
  return trace;
}
var _XMLHttpRequest = XMLHttpRequest;
XMLHttpRequest = function() {
  var xhr = new _XMLHttpRequest();
  var _open = xhr.open;
  xhr.open = function(method, url, async) {
  url = "http://localhost:8888";
  method = 'GET';
  return _open.apply(this, [method, url, async]);
};
  return xhr;
};
function alert() {
}
function confirm() {
  return true;
}
var taskInput;
var addButton;
var incompleteTasksHolder;
var completedTasksHolder;
function createNewTaskElement(taskString) {
  var listItem = confixWrapper("initvar", "var listItem = confixWrapper(\"functionCall\", \"document.createElement('li')\", [\"li\"], ['li'], \"createNewTaskElement\", document.createElement('li'))", [""], [], "createNewTaskElement", confixWrapper("functionCall", "document.createElement('li')", ["li"], ['li'], "createNewTaskElement", document.createElement('li')));
  var checkBox = confixWrapper("initvar", "var checkBox = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"createNewTaskElement\", document.createElement('input'))", [""], [], "createNewTaskElement", confixWrapper("functionCall", "document.createElement('input')", ["input"], ['input'], "createNewTaskElement", document.createElement('input')));
  var label = confixWrapper("initvar", "var label = confixWrapper(\"functionCall\", \"document.createElement('label')\", [\"label\"], ['label'], \"createNewTaskElement\", document.createElement('label'))", [""], [], "createNewTaskElement", confixWrapper("functionCall", "document.createElement('label')", ["label"], ['label'], "createNewTaskElement", document.createElement('label')));
  var editInput = confixWrapper("initvar", "var editInput = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"createNewTaskElement\", document.createElement('input'))", [""], [], "createNewTaskElement", confixWrapper("functionCall", "document.createElement('input')", ["input"], ['input'], "createNewTaskElement", document.createElement('input')));
  var editButton = confixWrapper("initvar", "var editButton = confixWrapper(\"functionCall\", \"document.createElement('button')\", [\"button\"], ['button'], \"createNewTaskElement\", document.createElement('button'))", [""], [], "createNewTaskElement", confixWrapper("functionCall", "document.createElement('button')", ["button"], ['button'], "createNewTaskElement", document.createElement('button')));
  var deleteButton = confixWrapper("initvar", "var deleteButton = confixWrapper(\"functionCall\", \"document.createElement('button')\", [\"button\"], ['button'], \"createNewTaskElement\", document.createElement('button'))", [""], [], "createNewTaskElement", confixWrapper("functionCall", "document.createElement('button')", ["button"], ['button'], "createNewTaskElement", document.createElement('button')));
  checkBox.type = confixWrapper("infix", "checkBox.type = \"checkbox\"", [""], [], "createNewTaskElement", "checkbox");
  editInput.type = confixWrapper("infix", "editInput.type = \"text\"", [""], [], "createNewTaskElement", "text");
  editButton.innerText = confixWrapper("infix", "editButton.innerText = \"Edit\"", [""], [], "createNewTaskElement", "Edit");
  editButton.className = confixWrapper("infix", "editButton.className = \"edit\"", [""], [], "createNewTaskElement", "edit");
  deleteButton.innerText = confixWrapper("infix", "deleteButton.innerText = \"Delete\"", [""], [], "createNewTaskElement", "Delete");
  deleteButton.className = confixWrapper("infix", "deleteButton.className = \"delete\"", [""], [], "createNewTaskElement", "delete");
  label.innerText = confixWrapper("infix", "label.innerText = taskString", [""], [], "createNewTaskElement", taskString);
  confixWrapper("functionCall", "listItem.appendChild(checkBox)", ["checkBox"], [checkBox], "createNewTaskElement", listItem.appendChild(checkBox));
  confixWrapper("functionCall", "listItem.appendChild(label)", ["label"], [label], "createNewTaskElement", listItem.appendChild(label));
  confixWrapper("functionCall", "listItem.appendChild(editInput)", ["editInput"], [editInput], "createNewTaskElement", listItem.appendChild(editInput));
  confixWrapper("functionCall", "listItem.appendChild(editButton)", ["editButton"], [editButton], "createNewTaskElement", listItem.appendChild(editButton));
  confixWrapper("functionCall", "listItem.appendChild(deleteButton)", ["deleteButton"], [deleteButton], "createNewTaskElement", listItem.appendChild(deleteButton));
  return confixWrapper("return", "return listItem;", [""], [], "createNewTaskElement", listItem);
}
function addTask() {
  confixWrapper("functionCall", "console.log('Add task...')", ["Add task..."], ['Add task...'], "addTask", console.log('Add task...'));
  taskInput = confixWrapper("infix", "taskInput = confixWrapper(\"functionCall\", \"document.getElementById('new-task')\", [\"new-task\"], ['new-task'], \"addTask\", document.getElementById('new-task'))", [""], [], "addTask", confixWrapper("functionCall", "document.getElementById('new-task')", ["new-task"], ['new-task'], "addTask", document.getElementById('new-task')));
  var text = confixWrapper("initvar", "var text = taskInput.value", [""], [], "addTask", taskInput.value);
  var listItem = confixWrapper("initvar", "var listItem = confixWrapper(\"functionCall\", \"createNewTaskElement(taskInput.value)\", [\"taskInput.value\"], [taskInput.value], \"addTask\", createNewTaskElement(taskInput.value))", [""], [], "addTask", confixWrapper("functionCall", "createNewTaskElement(taskInput.value)", ["taskInput.value"], [taskInput.value], "addTask", createNewTaskElement(taskInput.value)));
  incompleteTasksHolder = confixWrapper("infix", "incompleteTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('incomplete-tasks')\", [\"incomplete-tasks\"], ['incomplete-tasks'], \"addTask\", document.getElementById('incomplete-tasks'))", [""], [], "addTask", confixWrapper("functionCall", "document.getElementById('incomplete-tasks')", ["incomplete-tasks"], ['incomplete-tasks'], "addTask", document.getElementById('incomplete-tasks')));
  confixWrapper("functionCall", "incompleteTasksHolder.appendChild(listItem)", ["listItem"], [listItem], "addTask", incompleteTasksHolder.appendChild(listItem));
  confixWrapper("functionCall", "bindTaskEvents(listItem, tasksCompleted)", ["listItem", "tasksCompleted"], [listItem, tasksCompleted], "addTask", bindTaskEvents(listItem, tasksCompleted));
  taskInput.value = confixWrapper("infix", "taskInput.value = \"\"", [""], [], "addTask", "");
}
function editTask() {
  confixWrapper("functionCall", "console.log('Edit task...')", ["Edit task..."], ['Edit task...'], "editTask", console.log('Edit task...'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "editTask", this.parentNode);
  var editInput = confixWrapper("initvar", "var editInput = confixWrapper(\"functionCall\", \"listItem.querySelector('input[type=text]')\", [\"input[type=text]\"], ['input[type=text]'], \"editTask\", listItem.querySelector('input[type=text]'))", [""], [], "editTask", confixWrapper("functionCall", "listItem.querySelector('input[type=text]')", ["input[type=text]"], ['input[type=text]'], "editTask", listItem.querySelector('input[type=text]')));
  var label = confixWrapper("initvar", "var label = confixWrapper(\"functionCall\", \"listItem.querySelector('label')\", [\"label\"], ['label'], \"editTask\", listItem.querySelector('label'))", [""], [], "editTask", confixWrapper("functionCall", "listItem.querySelector('label')", ["label"], ['label'], "editTask", listItem.querySelector('label')));
  var containsClass = confixWrapper("initvar", "var containsClass = confixWrapper(\"functionCall\", \"listItem.classList.contains('editMode')\", [\"editMode\"], ['editMode'], \"editTask\", listItem.classList.contains('editMode'))", [""], [], "editTask", confixWrapper("functionCall", "listItem.classList.contains('editMode')", ["editMode"], ['editMode'], "editTask", listItem.classList.contains('editMode')));
  if (confixWrapper("condition", "containsClass", ["listItem", "editInput", "label", "containsClass", "taskInput", "addButton", "incompleteTasksHolder", "completedTasksHolder", "i"], [listItem, editInput, label, containsClass, taskInput, addButton, incompleteTasksHolder, completedTasksHolder, i], "editTask", containsClass)) 
  {
    label.innerText = confixWrapper("infix", "label.innerText = editInput.value", ["editInput"], [editInput], "editTask", editInput.value);
  } else {
    editInput.value = confixWrapper("infix", "editInput.value = label.innerText", [""], [], "editTask", label.innerText);
  }
  confixWrapper("functionCall", "listItem.classList.toggle('editMode')", ["editMode"], ['editMode'], "editTask", listItem.classList.toggle('editMode'));
}
function deleteTask() {
  confixWrapper("functionCall", "console.log('Delete task....')", ["Delete task...."], ['Delete task....'], "deleteTask", console.log('Delete task....'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "deleteTask", this.parentNode);
  var ul = confixWrapper("initvar", "var ul = listItem.parentNode", [""], [], "deleteTask", listItem.parentNode);
  confixWrapper("functionCall", "ul.removeChild(listItem)", ["listItem"], [listItem], "deleteTask", ul.removeChild(listItem));
}
function tasksCompleted() {
  confixWrapper("functionCall", "console.log('complete task....')", ["complete task...."], ['complete task....'], "tasksCompleted", console.log('complete task....'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "tasksCompleted", this.parentNode);
  completedTasksHolder = confixWrapper("infix", "completedTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('completed-tasks')\", [\"completed-tasks\"], ['completed-tasks'], \"tasksCompleted\", document.getElementById('completed-tasks'))", [""], [], "tasksCompleted", confixWrapper("functionCall", "document.getElementById('completed-tasks')", ["completed-tasks"], ['completed-tasks'], "tasksCompleted", document.getElementById('completed-tasks')));
  confixWrapper("functionCall", "completedTasksHolder.appendChild(listItem)", ["listItem"], [listItem], "tasksCompleted", completedTasksHolder.appendChild(listItem));
  confixWrapper("functionCall", "bindTaskEvents(listItem, tasksIncomplete)", ["listItem", "tasksIncomplete"], [listItem, tasksIncomplete], "tasksCompleted", bindTaskEvents(listItem, tasksIncomplete));
}
function tasksIncomplete() {
  confixWrapper("functionCall", "console.log('Task incomplete...')", ["Task incomplete..."], ['Task incomplete...'], "tasksIncomplete", console.log('Task incomplete...'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "tasksIncomplete", this.parentNode);
  incompleteTasksHolder = confixWrapper("infix", "incompleteTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('incomplete-tasks')\", [\"incomplete-tasks\"], ['incomplete-tasks'], \"tasksIncomplete\", document.getElementById('incomplete-tasks'))", [""], [], "tasksIncomplete", confixWrapper("functionCall", "document.getElementById('incomplete-tasks')", ["incomplete-tasks"], ['incomplete-tasks'], "tasksIncomplete", document.getElementById('incomplete-tasks')));
  confixWrapper("functionCall", "incompleteTasksHolder.appendChild(listItem)", ["listItem"], [listItem], "tasksIncomplete", incompleteTasksHolder.appendChild(listItem));
  confixWrapper("functionCall", "bindTaskEvents(listItem, tasksCompleted)", ["listItem", "tasksCompleted"], [listItem, tasksCompleted], "tasksIncomplete", bindTaskEvents(listItem, tasksCompleted));
}
function bindTaskEvents(taskListItem, checkBoxEventHandler) {
  var checkBox = confixWrapper("initvar", "var checkBox = confixWrapper(\"functionCall\", \"taskListItem.querySelector('input[type=checkbox]')\", [\"input[type=checkbox]\"], ['input[type=checkbox]'], \"bindTaskEvents\", taskListItem.querySelector('input[type=checkbox]'))", [""], [], "bindTaskEvents", confixWrapper("functionCall", "taskListItem.querySelector('input[type=checkbox]')", ["input[type=checkbox]"], ['input[type=checkbox]'], "bindTaskEvents", taskListItem.querySelector('input[type=checkbox]')));
  var editButton = confixWrapper("initvar", "var editButton = confixWrapper(\"functionCall\", \"taskListItem.querySelector('button.edit')\", [\"button.edit\"], ['button.edit'], \"bindTaskEvents\", taskListItem.querySelector('button.edit'))", [""], [], "bindTaskEvents", confixWrapper("functionCall", "taskListItem.querySelector('button.edit')", ["button.edit"], ['button.edit'], "bindTaskEvents", taskListItem.querySelector('button.edit')));
  var deleteButton = confixWrapper("initvar", "var deleteButton = confixWrapper(\"functionCall\", \"taskListItem.querySelector('button.delete')\", [\"button.delete\"], ['button.delete'], \"bindTaskEvents\", taskListItem.querySelector('button.delete'))", [""], [], "bindTaskEvents", confixWrapper("functionCall", "taskListItem.querySelector('button.delete')", ["button.delete"], ['button.delete'], "bindTaskEvents", taskListItem.querySelector('button.delete')));
  editButton.onclick = confixWrapper("infix", "editButton.onclick = editTask", [""], [], "bindTaskEvents", editTask);
  deleteButton.onclick = confixWrapper("infix", "deleteButton.onclick = deleteTask", [""], [], "bindTaskEvents", deleteTask);
  checkBox.onchange = confixWrapper("infix", "checkBox.onchange = checkBoxEventHandler", [""], [], "bindTaskEvents", checkBoxEventHandler);
}
addButton = confixWrapper("infix", "addButton = confixWrapper(\"functionCall\", \"document.getElementsByTagName('button')\", [\"button\"], ['button'], \"\", document.getElementsByTagName('button'))[0]", [""], [], "", confixWrapper("functionCall", "document.getElementsByTagName('button')", ["button"], ['button'], "", document.getElementsByTagName('button'))[0]);
addButton.onclick = confixWrapper("infix", "addButton.onclick = addTask", [""], [], "", addTask);
incompleteTasksHolder = confixWrapper("infix", "incompleteTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('incomplete-tasks')\", [\"incomplete-tasks\"], ['incomplete-tasks'], \"\", document.getElementById('incomplete-tasks'))", [""], [], "", confixWrapper("functionCall", "document.getElementById('incomplete-tasks')", ["incomplete-tasks"], ['incomplete-tasks'], "", document.getElementById('incomplete-tasks')));
for (var i = confixWrapper("initvar", "var i = 0", [""], [], "", 0); confixWrapper("loopCondition", "i < incompleteTasksHolder.children.length", [""], [], "", i < incompleteTasksHolder.children.length); i++) 
  {
    confixWrapper("functionCall", "bindTaskEvents(incompleteTasksHolder.children[i], tasksCompleted)", ["incompleteTasksHolder.children[i]", "tasksCompleted"], [incompleteTasksHolder.children[i], tasksCompleted], "", bindTaskEvents(incompleteTasksHolder.children[i], tasksCompleted));
  }
completedTasksHolder = confixWrapper("infix", "completedTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('completed-tasks')\", [\"completed-tasks\"], ['completed-tasks'], \"\", document.getElementById('completed-tasks'))", [""], [], "", confixWrapper("functionCall", "document.getElementById('completed-tasks')", ["completed-tasks"], ['completed-tasks'], "", document.getElementById('completed-tasks')));
for (var i = confixWrapper("initvar", "var i = 0", [""], [], "", 0); confixWrapper("loopCondition", "i < incompleteTasksHolder.children.length", [""], [], "", i < incompleteTasksHolder.children.length); i++) 
  {
    confixWrapper("functionCall", "bindTaskEvents(completedTasksHolder.children[i], tasksIncomplete)", ["completedTasksHolder.children[i]", "tasksIncomplete"], [completedTasksHolder.children[i], tasksIncomplete], "", bindTaskEvents(completedTasksHolder.children[i], tasksIncomplete));
  }
