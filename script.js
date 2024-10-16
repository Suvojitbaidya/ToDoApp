// Access input field
const input = document.querySelector('#todo-input');

// Listening to click event from "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
  // Value of the input field
  const inputData = input.value;
  input.value = "";

  // Creating todo item element
  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_content_el = document.createElement('div');
  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.type = 'text';
  todo_input_el.value = inputData;
  todo_input_el.setAttribute('readonly', 'readonly');

  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  const todo_done_el = document.createElement('i');
  todo_done_el.classList.add('fa-solid', 'fa-check');

  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa-solid', 'fa-trash');

  todo_actions_el.appendChild(todo_done_el);
  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);
  console.log(todo_el);
  // Add the todo-item to lists
  document.querySelector('.todo-lists').appendChild(todo_el);

  // Done functionality
  todo_done_el.addEventListener('click', () => {
    todo_input_el.classList.add('done');
    todo_el.removeChild(todo_actions_el);
  });

  // Edit functionality
  todo_edit_el.addEventListener('click', () => {
    if (todo_edit_el.classList.contains("edit")) {
      todo_edit_el.classList.remove("edit");
      todo_edit_el.classList.remove("fa-pen-to-square");
      todo_edit_el.classList.add("fa-x", "save");
      todo_input_el.removeAttribute("readonly");
      todo_input_el.focus();
    } else {
      todo_edit_el.classList.remove("save");
      todo_edit_el.classList.remove("fa-x");
      todo_edit_el.classList.add("fa-pen-to-square", "edit");
      todo_input_el.setAttribute("readonly", "readonly");
    }
  });

  // Delete functionality
  todo_delete_el.addEventListener('click', () => {
    console.log(todo_el);
    document.querySelector('.todo-lists').removeChild(todo_el);
  });
});

// Generate falling balls
function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');

  // Random size
  const sizeClass = `size-${Math.floor(Math.random() * 5) + 1}`;
  ball.classList.add(sizeClass);

  // Random position
  ball.style.left = `${Math.random() * 100}vw`;

  // Random colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F933FF', '#FFC300'];
  ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(ball);

  // Remove the ball after it falls
  ball.addEventListener('animationend', () => {
    ball.remove();
  });
}

// Create a ball every 300 milliseconds
setInterval(createBall, 300);
