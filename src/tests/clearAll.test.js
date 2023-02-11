/**
 * @jest-environment jsdom
*/

import clearCompleted from '../modules/clearAll.js';

describe('clearCompleted', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'tasks',
      JSON.stringify([
        { description: 'Task 1', completed: true, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
        { description: 'Task 3', completed: true, index: 3 },
      ]),
    );
    document.body.innerHTML = `
      <button class="clear-all">Clear Completed</button>
    `;
  });

  it('should clear completed tasks and keep remaining tasks in localStorage', () => {
    clearCompleted();
    const clearBtn = document.querySelector('.clear-all');
    const clickEvent = new MouseEvent('click');
    clearBtn.dispatchEvent(clickEvent);
    expect(localStorage.getItem('tasks')).toBe(
      '[{"description":"Task 2","completed":false,"index":1}]',
    );
  });
});
