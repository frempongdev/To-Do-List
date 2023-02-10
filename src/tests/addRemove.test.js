/**
 * @jest-environment jsdom
*/

import addTask from '../modules/add-task.js';
import displayDom from '../modules/displayDom.js';
import deleteTask from '../modules/deleteTask.js';

jest.mock('../modules/displayDom.js', () => jest.fn());

describe('addTask', () => {
  test('adds a task to local storage', () => {
    const form = document.createElement('form');
    form.classList.add('task-form');
    document.body.appendChild(form);

    const taskInput = document.createElement('input');
    taskInput.id = 'task-input-field';
    taskInput.value = 'Test Task';
    form.appendChild(taskInput);

    addTask();

    const submitEvent = new Event('submit');
    form.dispatchEvent(submitEvent);

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toHaveLength(1);
    expect(displayDom).toHaveBeenCalled();
  });
});