import { useTasks } from "../context/task-context";
import "./Navbar.css";

function Navbar() {
  const { tasks } = useTasks();
  console.log(tasks);
  const ongoingTasks = tasks.filter((task) => !task.completed);

  return (
    <header>
      <nav>
        <li>
          <ul>
            <p>Home</p>
          </ul>
          <ul>
            <p>Tasks {Boolean(ongoingTasks.length) && (<span>{ongoingTasks.length}</span>)}</p>
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
