import displayDom from './displayDom.js';

const addTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const form = document.querySelector('.task-form');
  const taskInput = document.getElementById('task-input-field');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    tasks.push({ description: taskInput.value, completed: false, index: tasks.length + 1 });
    form.reset();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayDom();
  });
};

export default addTask;