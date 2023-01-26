import { tasks } from "..";
import { displayDom } from "./displayDom";
export const editTask = () =>{
    const taskDescLines = document.querySelectorAll('.task-desc');
    
    taskDescLines.forEach((taskDesc, index) => {
        taskDesc.addEventListener('click', () =>{
            alert('hi')
            taskDesc.toggleAttribute('readonly');
            // taskDesc.style.outline = 'auto';
            taskDesc.addEventListener('blur', () =>{
                taskDesc.style.outline = 'none';
                tasks[index].description = taskDesc.value;
                localStorage.setItem('tasks', JSON.stringify(tasks));


                
                // const taskIndex = taskDesc.value.split(".")[0];
                // tasks[taskIndex].description = taskDesc.value.slice(1);
                // localStorage.setItem("tasks", JSON.stringify(tasks));
                // displayDom();
                
            });

            
        })
    })
}