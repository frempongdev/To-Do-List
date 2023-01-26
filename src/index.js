import { addTask } from './modules/add-task';
import { displayDom } from './modules/displayDom';
import { clearBtn } from './modules/clearAll';
import './style.css';
import moreBtn from './assets/more.png';

export const tasks = [];

displayDom();
addTask(); // Ads tasks to Local Storage

