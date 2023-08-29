import "./Task.css";

function Task({ id, name, completed }) {
  return (
    <li className={`task ${completed ? "completed" : ""}`}>
      <p className="task-details">
        ID: {id}, Name: {name}
      </p>
    </li>
  );
}

export default Task;