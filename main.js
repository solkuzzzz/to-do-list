const todoList = []

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const { name, dueDate } = todoObject;

    const html = `
      <div class="name-container">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-button">Delete</button> </div>
      `;
        todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function clickEnter(event) {
  if (event.key === 'Enter') {
    addTodo()
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-input')
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate })

  inputElement.value = '';

  renderTodoList();

}