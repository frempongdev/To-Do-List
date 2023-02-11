/* eslint-disable*/
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';
import status from './status.js';
import clearCompleted from './clearAll.js'; // eslint-disable-line

const moreBtn = require('../assets/more.png');
const deleteBtn = require('../assets/delete.png');


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