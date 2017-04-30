var todos = [];
var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');

var addTodo = function() {
    var todoText = todoInput.value;
    todos.push(todoText);
    todoInput.value = '';
}

var displayNewTodo = function() {
    var todoIndex = todos.length - 1;
    var todo = todos[todoIndex];
    var newTodo = document.createElement('li');
    newTodo.id = todoIndex;
    newTodo.innerHTML = todo;
    todoList.appendChild(newTodo);

    appendOptionButtons(todoIndex, newTodo);
}

var appendOptionButtons = function() {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.onclick = function() {
	removeTodo(index);
    }

    var editButton = document.createElement('');
    editButton.innerHTML = 'edit';
    editButton.onclick = function() {
	addEditField(index);
    }

    todo.appendChild(deleteButton);
    todo.appendChild(editButton);
}

var removeTodo = function(index) {
    todos.splice(index, 1);
    var toDoToRemove = document.getElementById('' + index + '');
    todoList.removeChild(toDoToRemove);
}

var addEditField(index) {
    var toDoToChange = document.getElementById('' + index + '');
    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.id = 'edit' + index;
    editInput.className = 'edit-input';
    editInput.placeholder = 'Edit the todo';

    var editButton = document.createElement('button');
    editButton.innerHTML = "Update todo";
    editButton.onclick = function() {
	updateTodo(index);
    }

    toDoToChange.appendChild(editInput);
    toDoToChange.appendChild(editButton);
}

var updateTodo(index) {
    var editInput = document.getElementById('edit' + index + '');
    var updatedTodo = editInput.value;

    todos[index] = updatedTodo;

    var todo = document.getElementById('' + index + '');
    todo.innerHTML = updatedTodo;

    appendOptionButtons(index, todo);
}
