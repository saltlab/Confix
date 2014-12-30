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
}
var taskInput = confixWrapper("initvar", "var taskInput = confixWrapper(\"functionCall\", \"document.getElementById('new-task')\", [\"new-task\"], ['new-task'], \"\", document.getElementById('new-task'))", [""], [], "", confixWrapper("functionCall", "document.getElementById('new-task')", ["new-task"], ['new-task'], "", document.getElementById('new-task')));
var addButton = confixWrapper("initvar", "var addButton = confixWrapper(\"functionCall\", \"document.getElementsByTagName('button')\", [\"button\"], ['button'], \"\", document.getElementsByTagName('button'))[0]", [""], [], "", confixWrapper("functionCall", "document.getElementsByTagName('button')", ["button"], ['button'], "", document.getElementsByTagName('button'))[0]);
var incompleteTasksHolder = confixWrapper("initvar", "var incompleteTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('incomplete-tasks')\", [\"incomplete-tasks\"], ['incomplete-tasks'], \"\", document.getElementById('incomplete-tasks'))", [""], [], "", confixWrapper("functionCall", "document.getElementById('incomplete-tasks')", ["incomplete-tasks"], ['incomplete-tasks'], "", document.getElementById('incomplete-tasks')));
var completedTasksHolder = confixWrapper("initvar", "var completedTasksHolder = confixWrapper(\"functionCall\", \"document.getElementById('completed-tasks')\", [\"completed-tasks\"], ['completed-tasks'], \"\", document.getElementById('completed-tasks'))", [""], [], "", confixWrapper("functionCall", "document.getElementById('completed-tasks')", ["completed-tasks"], ['completed-tasks'], "", document.getElementById('completed-tasks')));
function test() {
}
var createNewTaskElement = confixWrapper("initvar", "var createNewTaskElement = function(taskString) {  var listItem = confixWrapper(\"functionCall\", \"document.createElement('li')\", [\"li\"], ['li'], \"\", document.createElement('li'));  var checkBox = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"\", document.createElement('input'));  var label = confixWrapper(\"functionCall\", \"document.createElement('label')\", [\"label\"], ['label'], \"\", document.createElement('label'));  var editInput = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"\", document.createElement('input'));  var editButton = confixWrapper(\"functionCall\", \"document.createElement('button')\", [\"button\"], ['button'], \"\", document.createElement('button'));  var deleteButton = confixWrapper(\"functionCall\", \"document.createElement('button')\", [\"button\"], ['button'], \"\", document.createElement('button'));  checkBox.type = \"checkbox\";  editInput.type = \"text\";  editButton.innerText = \"Edit\";  editButton.className = \"edit\";  deleteButton.innerText = \"Delete\";  deleteButton.className = \"delete\";  label.innerText = taskString;  confixWrapper(\"functionCall\", \"listItem.appendChild(checkBox)\", [\"checkBox\"], [checkBox], \"\", listItem.appendChild(checkBox));  confixWrapper(\"functionCall\", \"listItem.appendChild(label)\", [\"label\"], [label], \"\", listItem.appendChild(label));  confixWrapper(\"functionCall\", \"listItem.appendChild(editInput)\", [\"editInput\"], [editInput], \"\", listItem.appendChild(editInput));  confixWrapper(\"functionCall\", \"listItem.appendChild(editButton)\", [\"editButton\"], [editButton], \"\", listItem.appendChild(editButton));  confixWrapper(\"functionCall\", \"listItem.appendChild(deleteButton)\", [\"deleteButton\"], [deleteButton], \"\", listItem.appendChild(deleteButton));  return listItem;}", [""], [], "", function(taskString) {
  var listItem = confixWrapper("initvar", "var listItem = confixWrapper(\"functionCall\", \"document.createElement('li')\", [\"li\"], ['li'], \"\", document.createElement('li'))", [""], [], "", confixWrapper("functionCall", "document.createElement('li')", ["li"], ['li'], "", document.createElement('li')));
  var checkBox = confixWrapper("initvar", "var checkBox = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"\", document.createElement('input'))", [""], [], "", confixWrapper("functionCall", "document.createElement('input')", ["input"], ['input'], "", document.createElement('input')));
  var label = confixWrapper("initvar", "var label = confixWrapper(\"functionCall\", \"document.createElement('label')\", [\"label\"], ['label'], \"\", document.createElement('label'))", [""], [], "", confixWrapper("functionCall", "document.createElement('label')", ["label"], ['label'], "", document.createElement('label')));
  var editInput = confixWrapper("initvar", "var editInput = confixWrapper(\"functionCall\", \"document.createElement('input')\", [\"input\"], ['input'], \"\", document.createElement('input'))", [""], [], "", confixWrapper("functionCall", "document.createElement('input')", ["input"], ['input'], "", document.createElement('input')));
  var editButton = confixWrapper("initvar", "var editButton = confixWrapper(\"functionCall\", \"document.createElement('button')\", [\"button\"], ['button'], \"\", document.createElement('button'))", [""], [], "", confixWrapper("functionCall", "document.createElement('button')", ["button"], ['button'], "", document.createElement('button')));
  var deleteButton = confixWrapper("initvar", "var deleteButton = confixWrapper(\"functionCall\", \"document.createElement('button')\", [\"button\"], ['button'], \"\", document.createElement('button'))", [""], [], "", confixWrapper("functionCall", "document.createElement('button')", ["button"], ['button'], "", document.createElement('button')));
  checkBox.type = confixWrapper("infix", "checkBox.type = \"checkbox\"", [""], [], "", "checkbox");
  editInput.type = confixWrapper("infix", "editInput.type = \"text\"", [""], [], "", "text");
  editButton.innerText = confixWrapper("infix", "editButton.innerText = \"Edit\"", [""], [], "", "Edit");
  editButton.className = confixWrapper("infix", "editButton.className = \"edit\"", [""], [], "", "edit");
  deleteButton.innerText = confixWrapper("infix", "deleteButton.innerText = \"Delete\"", [""], [], "", "Delete");
  deleteButton.className = confixWrapper("infix", "deleteButton.className = \"delete\"", [""], [], "", "delete");
  label.innerText = confixWrapper("infix", "label.innerText = taskString", [""], [], "", taskString);
  confixWrapper("functionCall", "listItem.appendChild(checkBox)", ["checkBox"], [checkBox], "", listItem.appendChild(checkBox));
  confixWrapper("functionCall", "listItem.appendChild(label)", ["label"], [label], "", listItem.appendChild(label));
  confixWrapper("functionCall", "listItem.appendChild(editInput)", ["editInput"], [editInput], "", listItem.appendChild(editInput));
  confixWrapper("functionCall", "listItem.appendChild(editButton)", ["editButton"], [editButton], "", listItem.appendChild(editButton));
  confixWrapper("functionCall", "listItem.appendChild(deleteButton)", ["deleteButton"], [deleteButton], "", listItem.appendChild(deleteButton));
  return confixWrapper("return", "return listItem;", [""], [], "", listItem);
});
var addTask = confixWrapper("initvar", "var addTask = function() {  confixWrapper(\"functionCall\", \"console.log('Add task...')\", [\"Add task...\"], ['Add task...'], \"\", console.log('Add task...'));  var listItem = confixWrapper(\"functionCall\", \"createNewTaskElement(taskInput.value)\", [\"taskInput.value\"], [taskInput.value], \"\", createNewTaskElement(taskInput.value));  confixWrapper(\"functionCall\", \"incompleteTasksHolder.appendChild(listItem)\", [\"listItem\"], [listItem], \"\", incompleteTasksHolder.appendChild(listItem));  confixWrapper(\"functionCall\", \"bindTaskEvents(listItem, tasksCompleted)\", [\"listItem\", \"tasksCompleted\"], [listItem, tasksCompleted], \"\", bindTaskEvents(listItem, tasksCompleted));  taskInput.value = \"\";}", [""], [], "", function() {
  confixWrapper("functionCall", "console.log('Add task...')", ["Add task..."], ['Add task...'], "", console.log('Add task...'));
  var listItem = confixWrapper("initvar", "var listItem = confixWrapper(\"functionCall\", \"createNewTaskElement(taskInput.value)\", [\"taskInput.value\"], [taskInput.value], \"\", createNewTaskElement(taskInput.value))", [""], [], "", confixWrapper("functionCall", "createNewTaskElement(taskInput.value)", ["taskInput.value"], [taskInput.value], "", createNewTaskElement(taskInput.value)));
  confixWrapper("functionCall", "incompleteTasksHolder.appendChild(listItem)", ["listItem"], [listItem], "", incompleteTasksHolder.appendChild(listItem));
  confixWrapper("functionCall", "bindTaskEvents(listItem, tasksCompleted)", ["listItem", "tasksCompleted"], [listItem, tasksCompleted], "", bindTaskEvents(listItem, tasksCompleted));
  taskInput.value = confixWrapper("infix", "taskInput.value = \"\"", [""], [], "", "");
});
var editTask = confixWrapper("initvar", "var editTask = function() {  confixWrapper(\"functionCall\", \"console.log('Edit task...')\", [\"Edit task...\"], ['Edit task...'], \"\", console.log('Edit task...'));  var listItem = this.parentNode;  var editInput = confixWrapper(\"functionCall\", \"listItem.querySelector('input[type=text]')\", [\"input[type=text]\"], ['input[type=text]'], \"\", listItem.querySelector('input[type=text]'));  var label = confixWrapper(\"functionCall\", \"listItem.querySelector('label')\", [\"label\"], ['label'], \"\", listItem.querySelector('label'));  var containsClass = confixWrapper(\"functionCall\", \"listItem.classList.contains('editMode')\", [\"editMode\"], ['editMode'], \"\", listItem.classList.contains('editMode'));  if (containsClass)   {    label.innerText = editInput.value;  } else {    editInput.value = label.innerText;  }  confixWrapper(\"functionCall\", \"listItem.classList.toggle('editMode')\", [\"editMode\"], ['editMode'], \"\", listItem.classList.toggle('editMode'));}", [""], [], "", function() {
  confixWrapper("functionCall", "console.log('Edit task...')", ["Edit task..."], ['Edit task...'], "", console.log('Edit task...'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "", this.parentNode);
  var editInput = confixWrapper("initvar", "var editInput = confixWrapper(\"functionCall\", \"listItem.querySelector('input[type=text]')\", [\"input[type=text]\"], ['input[type=text]'], \"\", listItem.querySelector('input[type=text]'))", [""], [], "", confixWrapper("functionCall", "listItem.querySelector('input[type=text]')", ["input[type=text]"], ['input[type=text]'], "", listItem.querySelector('input[type=text]')));
  var label = confixWrapper("initvar", "var label = confixWrapper(\"functionCall\", \"listItem.querySelector('label')\", [\"label\"], ['label'], \"\", listItem.querySelector('label'))", [""], [], "", confixWrapper("functionCall", "listItem.querySelector('label')", ["label"], ['label'], "", listItem.querySelector('label')));
  var containsClass = confixWrapper("initvar", "var containsClass = confixWrapper(\"functionCall\", \"listItem.classList.contains('editMode')\", [\"editMode\"], ['editMode'], \"\", listItem.classList.contains('editMode'))", [""], [], "", confixWrapper("functionCall", "listItem.classList.contains('editMode')", ["editMode"], ['editMode'], "", listItem.classList.contains('editMode')));
  if (confixWrapper("condition", "containsClass", [""], [], "", containsClass)) 
  {
    label.innerText = confixWrapper("infix", "label.innerText = editInput.value", ["editInput"], [editInput], "", editInput.value);
  } else {
    editInput.value = confixWrapper("infix", "editInput.value = label.innerText", [""], [], "", label.innerText);
  }
  confixWrapper("functionCall", "listItem.classList.toggle('editMode')", ["editMode"], ['editMode'], "", listItem.classList.toggle('editMode'));
});
var deleteTask = confixWrapper("initvar", "var deleteTask = function() {  confixWrapper(\"functionCall\", \"console.log('Delete task....')\", [\"Delete task....\"], ['Delete task....'], \"\", console.log('Delete task....'));  var listItem = this.parentNode;  var ul = listItem.parentNode;  confixWrapper(\"functionCall\", \"ul.removeChild(listItem)\", [\"listItem\"], [listItem], \"\", ul.removeChild(listItem));}", [""], [], "", function() {
  confixWrapper("functionCall", "console.log('Delete task....')", ["Delete task...."], ['Delete task....'], "", console.log('Delete task....'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "", this.parentNode);
  var ul = confixWrapper("initvar", "var ul = listItem.parentNode", [""], [], "", listItem.parentNode);
  confixWrapper("functionCall", "ul.removeChild(listItem)", ["listItem"], [listItem], "", ul.removeChild(listItem));
});
var tasksCompleted = confixWrapper("initvar", "var tasksCompleted = function() {  confixWrapper(\"functionCall\", \"console.log('complete task....')\", [\"complete task....\"], ['complete task....'], \"\", console.log('complete task....'));  var listItem = this.parentNode;  confixWrapper(\"functionCall\", \"completedTasksHolder.appendChild(listItem)\", [\"listItem\"], [listItem], \"\", completedTasksHolder.appendChild(listItem));  confixWrapper(\"functionCall\", \"bindTaskEvents(listItem, tasksIncomplete)\", [\"listItem\", \"tasksIncomplete\"], [listItem, tasksIncomplete], \"\", bindTaskEvents(listItem, tasksIncomplete));}", [""], [], "", function() {
  confixWrapper("functionCall", "console.log('complete task....')", ["complete task...."], ['complete task....'], "", console.log('complete task....'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "", this.parentNode);
  confixWrapper("functionCall", "completedTasksHolder.appendChild(listItem)", ["listItem"], [listItem], "", completedTasksHolder.appendChild(listItem));
  confixWrapper("functionCall", "bindTaskEvents(listItem, tasksIncomplete)", ["listItem", "tasksIncomplete"], [listItem, tasksIncomplete], "", bindTaskEvents(listItem, tasksIncomplete));
});
var tasksIncomplete = confixWrapper("initvar", "var tasksIncomplete = function() {  confixWrapper(\"functionCall\", \"console.log('Task incomplete...')\", [\"Task incomplete...\"], ['Task incomplete...'], \"\", console.log('Task incomplete...'));  var listItem = this.parentNode;  confixWrapper(\"functionCall\", \"incompleteTasksHolder.appendChild(listItem)\", [\"listItem\"], [listItem], \"\", incompleteTasksHolder.appendChild(listItem));  confixWrapper(\"functionCall\", \"bindTaskEvents(listItem, tasksCompleted)\", [\"listItem\", \"tasksCompleted\"], [listItem, tasksCompleted], \"\", bindTaskEvents(listItem, tasksCompleted));}", [""], [], "", function() {
  confixWrapper("functionCall", "console.log('Task incomplete...')", ["Task incomplete..."], ['Task incomplete...'], "", console.log('Task incomplete...'));
  var listItem = confixWrapper("initvar", "var listItem = this.parentNode", [""], [], "", this.parentNode);
  confixWrapper("functionCall", "incompleteTasksHolder.appendChild(listItem)", ["listItem"], [listItem], "", incompleteTasksHolder.appendChild(listItem));
  confixWrapper("functionCall", "bindTaskEvents(listItem, tasksCompleted)", ["listItem", "tasksCompleted"], [listItem, tasksCompleted], "", bindTaskEvents(listItem, tasksCompleted));
});
var bindTaskEvents = confixWrapper("initvar", "var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {  var checkBox = confixWrapper(\"functionCall\", \"taskListItem.querySelector('input[type=checkbox]')\", [\"input[type=checkbox]\"], ['input[type=checkbox]'], \"\", taskListItem.querySelector('input[type=checkbox]'));  var editButton = confixWrapper(\"functionCall\", \"taskListItem.querySelector('button.edit')\", [\"button.edit\"], ['button.edit'], \"\", taskListItem.querySelector('button.edit'));  var deleteButton = confixWrapper(\"functionCall\", \"taskListItem.querySelector('button.delete')\", [\"button.delete\"], ['button.delete'], \"\", taskListItem.querySelector('button.delete'));  editButton.onclick = editTask;  deleteButton.onclick = deleteTask;  checkBox.onchange = checkBoxEventHandler;}", [""], [], "", function(taskListItem, checkBoxEventHandler) {
  var checkBox = confixWrapper("initvar", "var checkBox = confixWrapper(\"functionCall\", \"taskListItem.querySelector('input[type=checkbox]')\", [\"input[type=checkbox]\"], ['input[type=checkbox]'], \"\", taskListItem.querySelector('input[type=checkbox]'))", [""], [], "", confixWrapper("functionCall", "taskListItem.querySelector('input[type=checkbox]')", ["input[type=checkbox]"], ['input[type=checkbox]'], "", taskListItem.querySelector('input[type=checkbox]')));
  var editButton = confixWrapper("initvar", "var editButton = confixWrapper(\"functionCall\", \"taskListItem.querySelector('button.edit')\", [\"button.edit\"], ['button.edit'], \"\", taskListItem.querySelector('button.edit'))", [""], [], "", confixWrapper("functionCall", "taskListItem.querySelector('button.edit')", ["button.edit"], ['button.edit'], "", taskListItem.querySelector('button.edit')));
  var deleteButton = confixWrapper("initvar", "var deleteButton = confixWrapper(\"functionCall\", \"taskListItem.querySelector('button.delete')\", [\"button.delete\"], ['button.delete'], \"\", taskListItem.querySelector('button.delete'))", [""], [], "", confixWrapper("functionCall", "taskListItem.querySelector('button.delete')", ["button.delete"], ['button.delete'], "", taskListItem.querySelector('button.delete')));
  editButton.onclick = confixWrapper("infix", "editButton.onclick = editTask", [""], [], "", editTask);
  deleteButton.onclick = confixWrapper("infix", "deleteButton.onclick = deleteTask", [""], [], "", deleteTask);
  checkBox.onchange = confixWrapper("infix", "checkBox.onchange = checkBoxEventHandler", [""], [], "", checkBoxEventHandler);
});
addButton.onclick = confixWrapper("infix", "addButton.onclick = addTask", [""], [], "", addTask);
for (var i = confixWrapper("initvar", "var i = 0", [""], [], "", 0); confixWrapper("loopCondition", "i < incompleteTasksHolder.children.length", ["i", "incompleteTasksHolder"], [i, incompleteTasksHolder], "", i < incompleteTasksHolder.children.length); i++) 
  {
    confixWrapper("functionCall", "bindTaskEvents(incompleteTasksHolder.children[i], tasksCompleted)", ["incompleteTasksHolder.children[i]", "tasksCompleted"], [incompleteTasksHolder.children[i], tasksCompleted], "", bindTaskEvents(incompleteTasksHolder.children[i], tasksCompleted));
  }
for (var i = confixWrapper("initvar", "var i = 0", [""], [], "", 0); confixWrapper("loopCondition", "i < incompleteTasksHolder.children.length", ["i", "incompleteTasksHolder"], [i, incompleteTasksHolder], "", i < incompleteTasksHolder.children.length); i++) 
  {
    confixWrapper("functionCall", "bindTaskEvents(completedTasksHolder.children[i], tasksIncomplete)", ["completedTasksHolder.children[i]", "tasksIncomplete"], [completedTasksHolder.children[i], tasksIncomplete], "", bindTaskEvents(completedTasksHolder.children[i], tasksIncomplete));
  }
