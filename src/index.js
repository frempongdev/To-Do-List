import './style.css';
import moreBtn from './assets/more.png';

const tasks = [
  {
    description: 'Read a Book',
    completed: false,
    index: 0,
  },
  {
    description: 'Cook',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash Dishes',
    completed: false,
    index: 2,
  },
];

const listBox = document.querySelector('.task-list');
tasks.forEach((task, index) => {
  listBox.innerHTML += `
                    <li id='task-line'>
                      <input id='checkbox' type="checkbox" onchange="toggleCompleted()">
                      <span id='task-desk'>${index + 1}.  ${task.description}</span>
                      <img id='more-btn' src="${moreBtn}" alt="more-btn">
                    </li>`;
});
