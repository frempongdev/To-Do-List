import displayDom from './displayDom.js';  // eslint-disable-line

const deleteTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const deleteBtn = document.querySelectorAll('.delete-btn');

  deleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tasks.splice(index, 1);

      tasks.forEach((task, index) => {
        task.index = index;
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayDom();
    });
  });
};

export default deleteTask;