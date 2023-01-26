import { addTask } from './modules/add-task';
import { displayDom } from './modules/displayDom';
// import { clearBtn } from './modules/clearAll';
import { editTask } from './modules/editTask';
import { deleteTask } from './modules/deleteTask';
import './style.css';
// import moreBtn from './assets/more.png';

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

addTask(); // Ads tasks to Local Storage
displayDom(); // Displays DOM
editTask(); // Edit individual task
deleteTask(); // delete individual task


// console.log(editTask)
