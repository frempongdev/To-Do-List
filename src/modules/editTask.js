/* eslint-disable no-restricted-globals */
const editTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskDescLines = document.querySelectorAll('.task-desc');

  taskDescLines.forEach((taskDesc, index) => {
    const moreBtn = taskDesc.parentElement.querySelector('.more-btn');
    const deleteBtn = taskDesc.parentElement.querySelector('.delete-btn');

    taskDesc.addEventListener('click', () => {
      taskDesc.removeAttribute('readonly');

      moreBtn.classList.add('hide');
      deleteBtn.classList.remove('hide');

      taskDesc.addEventListener('blur', () => {
        tasks[index].description = taskDesc.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTimeout(() => {
          moreBtn.classList.remove('hide');
        }, 500);
        setTimeout(() => {
          deleteBtn.classList.add('hide');
          location.reload();
        }, 500);
      });

      taskDesc.addEventListener('input', () => {
        tasks[index].description = taskDesc.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });

      taskDesc.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          taskDesc.setAttribute('readonly', 'true');
          location.reload();
        }
      });
    });
  });
};

export default editTask;