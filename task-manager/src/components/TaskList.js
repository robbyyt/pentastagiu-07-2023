import { useState } from "react";
import { tasks as initialTasks } from "../ constants/tasks";
import Task from "./Task";
import "./TaskList.css";

/**
 * We want to map through the tasks and display them
 */

function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </ul>
  );
}

export default TaskList;
