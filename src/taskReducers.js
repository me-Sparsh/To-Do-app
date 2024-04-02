import { ADD_TASK, DELETE_TASK, MARK_TASK_AS_COMPLETED, LOAD_TASKS } from './taskActions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [] // Load from localStorage
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTasksAdd = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasksAdd)); // Save after adding
            return {
                ...state,
                tasks: newTasksAdd
            };
        case DELETE_TASK:
            const newTaskDelete = state.tasks.filter(task => task.id !== action.payload.id);
            localStorage.setItem('tasks', JSON.stringify(newTaskDelete)); // Save after deleting
            return {
                ...state,
                tasks: newTaskDelete
            };
        case MARK_TASK_AS_COMPLETED:
            const newTasksCompleted = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, completed: true } : task
            );
            localStorage.setItem('tasks', JSON.stringify(newTasksCompleted)); // Save after marking
            return {
                ...state,
                tasks: newTasksCompleted
            };
        case LOAD_TASKS:
            return { ...state, tasks: action.payload };  // Update state from localStorage
        default:
            return state;
    }
};

export default rootReducer;