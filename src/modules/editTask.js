const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const editTask = () => {
  const taskDescLines = document.querySelectorAll('.task-desc');

  taskDescLines.forEach((taskDesc, index) => {
    const moreBtn = taskDesc.parentElement.querySelector('.more-btn');
    const deleteBtn = taskDesc.parentElement.querySelector('.delete-btn');
    taskDesc.addEventListener('click', () => {
      taskDesc.toggleAttribute('readonly');

      moreBtn.classList.add('hide');
      deleteBtn.classList.remove('hide');

      taskDesc.addEventListener('blur', () => {
        taskDesc.style.outline = 'none';
        tasks[index].description = taskDesc.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTimeout(() => {
          moreBtn.classList.remove('hide');
        }, 500);
        setTimeout(() => {
          deleteBtn.classList.add('hide');
        }, 500);
      });

      taskDesc.addEventListener('input', () => {
        taskDesc.style.outline = 'none';
        tasks[index].description = taskDesc.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTimeout(() => {
          moreBtn.classList.remove('hide');
        }, 500);
        setTimeout(() => {
          deleteBtn.classList.add('hide');
        }, 500);
      });

      taskDesc.addEventListener('keyup', (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          taskDesc.toggleAttribute('readonly');
        }
      });
    });
  });
};

export default editTask;