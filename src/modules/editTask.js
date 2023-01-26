import { tasks } from "..";
import { displayDom } from "./displayDom";
export const editTask = () =>{
    const taskDescLines = document.querySelectorAll('.task-desc');
    
    taskDescLines.forEach((taskDesc) => {
        taskDesc.addEventListener('click', () =>{
            taskDesc.toggleAttribute('readonly');
            taskDesc.style.outline = 'auto';
            taskDesc.addEventListener('blur', () =>{
                taskDesc.style.outline = 'none';
                console.log(taskDesc.value);
                
                // const taskIndex = taskDesc.value.split(".")[0];
                // tasks[taskIndex].description = taskDesc.value.slice(1);
                // localStorage.setItem("tasks", JSON.stringify(tasks));
                // displayDom();
                
            });

            
        })
    })
}