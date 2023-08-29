const todoContainer = document.querySelector(".todolistcontainer");
const todoInput = document.querySelector('#createtodoinput');
const addTodo = document.querySelector('#createtodobutton');
const todoForm = document.querySelector('#createtodoform')





function addTodos(e) {
e.preventDefault();
const taskText = todoInput.value
const listItem = document.createElement("li");
listItem.className = "todoitem"
listItem.innerHTML = `
<input type="checkbox" class="todocheckbox">
                <p class="todo">
                ${taskText}
                </p>
`

todoContainer.appendChild(listItem);

}

todoForm.addEventListener("submit", addTodos);


console.log(addTodo);


