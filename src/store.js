import { configureStore } from '@reduxjs/toolkit'; // Import for creating a Redux store
import rootReducer from './taskReducers'; // Import your combined reducers

// Configure and create the Redux store
const store = configureStore({
  reducer: rootReducer // Pass your rootReducer to combine reducers for the store
});

export default store; // Export the store to be used throughout your application