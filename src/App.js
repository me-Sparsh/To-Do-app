import React,{useState} from 'react';
import { Provider } from 'react-redux';             // Import for using Redux
import store from './store';                        // Import your Redux store
import TaskInput from './components/taskInput';     // Import your task input component
import TaskList from './components/taskList';       // Import your task list component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap CSS and JavaScript
import './App.css';

function App() {
  const [showTasks, setShowTasks] = useState(false); // State to control if tasks should be shown

  const handleViewTasksClick = () => {
    setShowTasks(true);                             // Set showTasks to true to display the task list
  };

  const handleHomeClick = () => {
    setShowTasks(false);                           // Set showTasks to false to display the input
  };

  return (
    <Provider store={store}>
      <div> 
        <div className="container mt-3">
          {/* ... Heading & Navbar ... */}
          <h1 className="text-center">To-Do List</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link home-link" href="/" onClick={handleHomeClick}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link view-tasks-link" href="#view-tasks" onClick={handleViewTasksClick}>View Tasks</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              {showTasks ? <TaskList /> : <TaskInput />}  {/* Conditional rendering of components */}
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;