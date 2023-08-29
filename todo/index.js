const todoContainer = document.querySelector(".todolistcontainer");
const todoInput = document.querySelector('#createtodoinput');
const addTodo = document.querySelector('#createtodobutton');
const todoForm = document.querySelector('#createtodoform')


function addTodos(e) {
e.preventDefault();

const taskText = todoInput.value
if (!taskText) return; 

const todoItem = document.createElement("div");

const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox")
checkbox.className = "todocheckbox"

checkbox.addEventListener("change", () => {
    todoItem.remove();
}  )



todoItem.className = "todoitem";

const taskTextNode = document.createElement("span");
taskTextNode.textContent = taskText;

todoItem.appendChild(checkbox);
todoItem.appendChild(taskTextNode);

todoContainer.appendChild(todoItem);

todoInput = ''

}

todoForm.addEventListener("submit", addTodos);



