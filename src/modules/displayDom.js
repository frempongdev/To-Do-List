import { tasks } from "../index";
import moreBtn from '../assets/more.png';
const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const displayDom = () =>{

    const listBox = document.querySelector('.task-list');
    allTasks.forEach((task, index) => {
        listBox.innerHTML += `
        <li id='task-line'>
        <input id='checkbox' type="checkbox" onchange="toggleCompleted()">
        <input id='task-desk' type="text" value="${task.index}.  ${task.description}" readonly>
        <img id='more-btn' src="${moreBtn}" alt="more-btn">
        </li>`;
    })
    
}