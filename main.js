const todoList = JSON.parse(localStorage.getItem('todoList')) || []

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="name-container">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-button" data-index="${index}">Delete</button> </div>
      `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton) => {
      deleteButton.addEventListener('click', () => {
        const index = parseInt(deleteButton.getAttribute('data-index'));
        todoList.splice(index, 1);
        renderTodoList();
        saveToStorage();
      })
    })
}

function clickEnter(event) {
  if (event.key === 'Enter') {
    addTodo()
  }
}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo()
  })

function addTodo() {
  const inputElement = document.querySelector('.js-input')
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate })

  inputElement.value = '';

  renderTodoList();
  saveToStorage()

}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}