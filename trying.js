const todoList = [];

function clickEnter(event) {
  if (event.key === 'Enter') {
    addTodoList()
  }
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, data } = todoObject;

    const html = `<div class="name-container">
    <div class="todo-name">${name}</div>
    <div class="todo-data">${data}</div>
    <button onclick="todoList.splice(${i}, 1);
    renderTodoList();" 
    
    
    class="delete-button">Delete</button>
    </div>`

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputNameElement = document.querySelector('.js-input-name');
  const name = inputNameElement.value;

  const inputDataElement = document.querySelector('.js-input-data');
  const data = inputDataElement.value;

  todoList.push(
    {
      name,
      data
    }
  );

  inputNameElement.value = '';

  renderTodoList()
}

