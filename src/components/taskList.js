import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, markTaskAsCompleted, loadTasks } from '../taskActions';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import Bootstrap CSS

function TaskList() {
    const tasks = useSelector((state) => state.tasks); // Retrieve tasks from Redux state
    const dispatch = useDispatch();                    // Get the Redux dispatch function

    useEffect(() => {
        dispatch(loadTasks()); // Dispatch the loadTasks action on component mount
    }, [dispatch]);
  
    const handleDeleteTask = (id) => {
      dispatch(deleteTask(id));
    };
  
    const handleCompleteTask = (id) => {
      dispatch(markTaskAsCompleted(id));
    };
  
    return (
      <div className="mt-3">    {/* ... Heading and Table Header ... */}
        <h2 className="text-center mb-3" id="view-tasks">View Tasks</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center">Task</th>
              <th scope="col" className="text-center">Status</th>
              <th scope="col" className="text-center">Operations</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>   {/* ... Columns to display task data ... */}
                <td className="px-3 py-2">{task.text}</td>
                <td className="px-3 py-2">{task.completed ? 'Completed' : 'Pending'}</td>
                <td className="px-3 py-2">
                  {!task.completed && (
                    <button className="btn btn-success btn-sm mr-5" onClick={() => handleCompleteTask(task.id)}>Done</button>
                  )}
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default TaskList;