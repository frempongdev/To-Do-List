import addTask from './modules/add-task.js';
import displayDom from './modules/displayDom.js';
import editTask from './modules/editTask.js';
import deleteTask from './modules/deleteTask.js';
import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

displayDom(); // Displays DOM
addTask(); // Ads tasks to Local Storage
editTask(); // Edit individual task
deleteTask(); // delete individual task

export default tasks;