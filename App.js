import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import the CSS file

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
 
  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskEdit = (index) => {
    const editedTask = prompt('Edit the task', tasks[index]);
    if (editedTask !== null && editedTask !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <h3>
        Welcome to my TodoList, where you can effortlessly organize your tasks and stay productive!
      </h3>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          placeholder="Your task"
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                {/* Delete Task */}
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleTaskDelete(index)}
                />
                {/* Edit Task */}
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleTaskEdit(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
