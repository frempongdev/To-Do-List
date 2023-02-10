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

describe('deleteTask', () => {
  it('deletes a task from local storage', () => {
    const tasks = [{ description: 'Test Task 1', completed: false, index: 1 }, { description: 'Test Task 2', completed: false, index: 2 }];
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const deleteBtn1 = document.createElement('button');
    deleteBtn1.classList.add('delete-btn');
    document.body.appendChild(deleteBtn1);

    const deleteBtn2 = document.createElement('button');
    deleteBtn2.classList.add('delete-btn');
    document.body.appendChild(deleteBtn2);

    deleteTask();

    const clickEvent1 = new Event('click');
    deleteBtn1.dispatchEvent(clickEvent1);

    const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedTasks).toHaveLength(1);
  });
});
