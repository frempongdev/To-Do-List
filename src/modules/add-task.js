import {tasks} from '../index.js'
import { displayDom } from './displayDom.js';

export const addTask = () => {
    const form = document.querySelector('.task-form');
    const taskInput = document.getElementById('task-input-field');
    
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        tasks.push({description: taskInput.value, completed: false, index: tasks.length});
        form.reset();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayDom();
    })
}