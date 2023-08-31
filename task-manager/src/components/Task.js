import "./Task.css";

function Task({ id, name, completed, deleteTask, handleEditClick, toggleCompleted }) {
  return (
    <li className={`task ${completed ? "completed" : ""}`}>
      <p className="task-details">
        ID: {id}, Name: {name}
      </p>
      <div className="btn-container">
        <button onClick={() => handleEditClick(id)}>Edit</button>
        <button onClick={() => deleteTask(id) }>Delete</button>
        <button onClick={() => toggleCompleted(id) }>Toggle completed</button>
      </div>
    </li>
  );
}

export default Task;