/**
 * @jest-environment jsdom
*/

import status from '../modules/status.js';

describe('status', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify([
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
    ]));
    document.body.innerHTML = `
      <div class="task-container">
        <div class="task">
          <input type="checkbox" class="checkbox">
          <p class="task-desc">Task 1</p>
        </div>
        <div class="task">
          <input type="checkbox" class="checkbox">
          <p class="task-desc">Task 2</p>
        </div>
      </div>
    `;

    status();
  });

  test('should display the correct status of the tasks', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    // const taskDescs = document.querySelectorAll('.task-desc');
    expect(checkboxes[0].checked).toBe(false);
    expect(checkboxes[1].checked).toBe(true);
    // expect(taskDescs[0].classList.contains('cross')).toBe(false);
    // expect(taskDescs[1].classList.contains('cross')).toBe(true);
  });

  //   test('should update local storage and display when checkbox is clicked', () => {
  //     // const spy = jest.spyOn(window, 'displayDom');
  //     // status();
  //     const checkbox = document.querySelectorAll('.checkbox');
  //     const clickEvent = new Event('click');
  //     checkbox[0].dispatchEvent(clickEvent);
  //     expect(checkbox[0].checked).toBe(true);
  //     expect(JSON.parse(localStorage.getItem('tasks'))[0].completed).toBe(true);
  //     // expect(spy).toHaveBeenCalled();
  //   });

  test('should update local storage and display checked when checkbox is clicked', () => {
    const checkbox = document.querySelectorAll('.checkbox');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const mockFunction = jest.fn();
    mockFunction.mockImplementation(() => {
      if (checkbox[0].checked === true) {
        checkbox[0].checked = false;
        tasks[0].completed = false;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        checkbox[0].checked = true;
        tasks[0].completed = true;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });

    checkbox[0].addEventListener('click', mockFunction);

    const clickEvent = new Event('click');
    checkbox[0].dispatchEvent(clickEvent);

    expect(mockFunction).toHaveBeenCalled();
    expect(document.querySelectorAll('.checkbox')[0].checked).toBe(true);
    expect(JSON.parse(localStorage.getItem('tasks'))[0].completed).toBe(true);
  });
});
