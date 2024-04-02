// Action type constants - These represent unique names for different actions
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';
export const LOAD_TASKS = 'LOAD_TASKS';

//Creates an action to add a new task.
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random(),
    text,
  },
});

//Creates an action to delete a task.
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

//Creates an action to mark a task as completed.
export const markTaskAsCompleted = (id) => ({
    type: MARK_TASK_AS_COMPLETED,
    payload: {
      id,
    },
});

//Creates an action to load tasks from local storage.
export const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return {
        type: LOAD_TASKS,
        payload: tasks 
    };
};