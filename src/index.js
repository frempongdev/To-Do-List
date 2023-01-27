import addTask from './modules/add-task.js';
import displayDom from './modules/displayDom.js';
import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

displayDom(); // Displays DOM
addTask(); // Ads tasks to Local Storage

export default tasks;