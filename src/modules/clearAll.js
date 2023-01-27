/* eslint-disable no-restricted-globals */

const clearBtn = document.querySelector('.clear-all');

const clearCompleted = () => {
  const grab = JSON.parse(localStorage.getItem('tasks')) || [];

  clearBtn.addEventListener('click', () => {
    const tasks = grab.filter((tsk) => tsk.completed === false);

    tasks.forEach((task, index) => {
      task.index = index + 1;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    location.reload();
  });
};

export default clearCompleted;