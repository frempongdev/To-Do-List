import displayDom from "./displayDom";

const status = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const chkBox = document.querySelectorAll('.checkbox');
    chkBox.forEach((box,boxIndex)=>{

        const taskLine = box.parentElement.querySelector('.task-desc')
        if (tasks[boxIndex].completed === false){
            box.checked=false; 
            taskLine.classList.remove('cross');
        }
        else {
            box.checked=true; 
                taskLine.classList.add('cross');

        }
      

        


        box.addEventListener('click', ()=>{

            if (box.checked===true){
                tasks[boxIndex].completed = true;
                taskLine.classList.add('cross')
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            else {
                
                tasks[boxIndex].completed = false;
                taskLine.classList.remove('cross') 
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }


                

            displayDom();
        })
    })
}

export default status;