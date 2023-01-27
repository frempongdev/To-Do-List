import editTask from './editTask.js';
import deleteTask from './deleteTask.js'; // eslint-disable-line
import status from './status.js';
import clearCompleted from './clearAll.js';
import moreBtn from '../assets/more.png';
import deleteBtn from '../assets/delete.png';

const displayDom = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const listBox = document.querySelector('.task-list');

  listBox.innerHTML = '';
  tasks.forEach((task) => {
    listBox.innerHTML += `
        <li class='task-line'>
            <input class='checkbox' type="checkbox" onchange="">
            <input class='task-desc' type="text" value="${task.description}" readonly>
            <img class='delete-btn hide' src="${deleteBtn}" alt="delete-btn">
            <img class='more-btn' src="${moreBtn}" alt="delete-btn">
        </li>`;
  });

  editTask();
  deleteTask();
  status();
  clearCompleted();


};

export default displayDom;