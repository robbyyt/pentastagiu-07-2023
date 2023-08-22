import { useState } from "react";
import { tasks as initialTasks } from "../ constants/tasks";
import Task from "./Task";

/**
 * We want to map through the tasks and display them
 */

function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <li>
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </li>
  );
}

export default TaskList;
