/**
 * @jest-environment jsdom
*/

import editTask from '../modules/editTask.js';

describe('editTask', () => {
  const tasks = [{ description: 'Task 1', completed: false, index: 1 }];
  localStorage.setItem('tasks', JSON.stringify(tasks));

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="task-container">
        <div class="task">
          <p class="task-desc" contenteditable="true">Task 1</p>
          <button class="delete-btn">Delete</button>
          <button class="more-btn">More</button>
        </div>
      </div>
    `;
  });

  test('should edit task description and keep it in localStorage', () => {
    editTask();
    tasks[0].description = 'Hello World';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    expect(tasks[0].description).toEqual('Hello World');

    const taskDesc = document.querySelector('.task-desc');
    const moreBtn = document.querySelector('.more-btn');

    const event = new Event('click');

    taskDesc.dispatchEvent(event);

    expect(moreBtn.classList.contains('hide')).toBe(true);

    taskDesc.innerHTML = 'Task 1 updated';

    const blurEvent = new Event('blur');
    taskDesc.dispatchEvent(blurEvent);
  });
});