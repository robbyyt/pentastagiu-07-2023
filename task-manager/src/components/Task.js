import { Link, useNavigate } from "react-router-dom";
import "./Task.css";

function Task({
  id,
  name,
  completed,
  deleteTask,
  handleEditClick,
  toggleCompleted,
}) {
  const navigate = useNavigate();
  return (
    <li className={`task ${completed ? "completed" : ""}`}>
      <p className="task-details">
        ID: {id}, Name: {name}
      </p>
      <div className="btn-container">
        <button onClick={() => handleEditClick(id)}>Edit</button>
        <button onClick={() => deleteTask(id)}>Delete</button>
        <button onClick={() => toggleCompleted(id, completed)}>
          Toggle completed
        </button>
        <button>
          <Link to="/tasks/1">See details</Link>
        </button>
      </div>
    </li>
  );
}

export default Task;
