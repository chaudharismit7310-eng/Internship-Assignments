import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {

    if(task.trim() === "") {
      return;
    }

    const updatedTasks = [...tasks, task];

    updatedTasks.sort();

    setTasks(updatedTasks);

    setTask("");
  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  }

  return (

    <div style={{ padding: "20px" }}>

      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>

        {tasks.map((item, index) => (

          <li key={index}>

            {item}

            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;