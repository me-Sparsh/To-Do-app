import React, { useState } from 'react'; // Import React and useState hook
import { useDispatch } from 'react-redux'; // Import for using Redux dispatch
import { addTask } from '../taskActions'; // Import the addTask action creator

function TaskInput() {
  const [task, setTask] = useState(''); // State to manage the current task input
  const [message, setMessage] = useState(''); // State to manage success messages
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') { // Check for empty input
      dispatch(addTask(task));
      setTask(''); // Reset the input field
      setMessage('Task added successfully!');
      setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="mt-3 text-center"> {/* Centering the input field */}
      <input 
        type="text" 
        className="form-control mb-2 d-inline-block" // Styling with Bootstrap
        placeholder="Add a new task..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        onKeyPress={handleKeyPress} 
      />
      <button className="btn btn-primary d-inline-block" onClick={handleAddTask}>Add Task</button> {/* Centering the button */}
      {message && <p className="text-success mt-2 font-weight-bold">{message}</p>} {/* Display message if it's not empty */}
    </div>
  );
}

export default TaskInput;