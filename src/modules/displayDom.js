import { tasks } from "../index";
import moreBtn from '../assets/more.png';
import deleteBtn from '../assets/delete.png';


export const displayDom = () =>{
    const listBox = document.querySelector('.task-list');
    listBox.innerHTML = '';
    tasks.forEach((task, index) => {
        listBox.innerHTML += `
        <li class='task-line'>
            <input class='checkbox' type="checkbox" onchange="toggleCompleted()">
            <input class='task-desc' type="text" value="${task.index}.  ${task.description}" readonly>
            <img class='delete-btn' src="${deleteBtn}" alt="delete-btn">
            <img class='more-btn' src="${moreBtn}" alt="delete-btn">
        </li>`;
    })
    
}