import { addTask } from './modules/add-task';
import { displayDom } from './modules/displayDom';
import { clearBtn } from './modules/clearAll';
import { editTask } from './modules/editTask';
import { deleteTask } from './modules/deleteTask';
import './style.css';
// import moreBtn from './assets/more.png';

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

displayDom(); // Displays DOM
addTask(); // Ads tasks to Local Storage
editTask(); // Edit individual task
deleteTask(); // delete individual task
// clearAll()


// console.log(editTask)
