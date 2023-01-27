import displayDom from "./displayDom";

const clearBtn = document.querySelector('.clear-all');

const clearCompleted = () => {
  const grab = JSON.parse(localStorage.getItem('tasks')) || [];

  
  clearBtn.addEventListener('click', () => {

       let tasks = grab.filter(tsk => tsk.completed === false);

       tasks.forEach((task, index) => {
         task.index = index + 1;
       });

       localStorage.setItem('tasks', JSON.stringify(tasks));
        location.reload();


        console.log(tasks)
        

      });
}

export default clearCompleted;