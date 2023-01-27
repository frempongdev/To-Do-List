import displayDom from './displayDom.js';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const addTask = () => {
  const form = document.querySelector('.task-form');
  const taskInput = document.getElementById('task-input-field');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    tasks.push({ description: taskInput.value, completed: false, index: tasks.length });
    form.reset();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayDom();
  });
};

export default addTask;