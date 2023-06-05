const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
let state = [];

function saveLocalStorage() {
  let tasks = JSON.stringify(state);
  localStorage.setItem('data', tasks);
}

function initStore() {
    let localState = JSON.parse(localStorage.getItem('data'));
    if(localState) {
      state = localState;
      for(i = 0; i < state.length; i++) {
        addTask(state[i]);
      }
    }
  }

function addTask(value) {
  const task = document.createElement('div');
  task.classList.add('task');

  const title = document.createElement('div');
  title.classList.add('task__title');
  title.innerText = value;

  const removeBtn = document.createElement('a');
  removeBtn.classList.add('task__remove');
  removeBtn.href = '#';
  removeBtn.innerText = 'x'
  removeBtn.addEventListener('click', (event) => {
    deleteTask(event.currentTarget.closest('.task'));
  });

  task.appendChild(title);
  task.appendChild(removeBtn);

  tasksList.appendChild(task);
}

function deleteTask(elem) {
  let elemTitle = elem.querySelector('.task__title').innerText; 
  state = state.filter((e) => e !== elemTitle);
  saveLocalStorage();
  elem.remove();
}

window.addEventListener('keydown', (event)=> {
  if(input.value && event.key === 'Enter') {
    addTask(input.value);
    state.push(input.value);
    input.value = '';
    saveLocalStorage();
  }
});

button.addEventListener('click', (event) => {
  if(input.value) {
    addTask(input.value);  
    state.push(input.value);
    input.value = '';
    saveLocalStorage();
  }
});

document.addEventListener('DOMContentLoaded', initStore()) ;