import { NavLink } from "react-router-dom";
import { useTasks } from "../context/task-context";
import "./Navbar.css";

function Navbar() {
  const { tasks } = useTasks();
  const ongoingTasks = tasks.filter((task) => !task.completed);

  return (
    <header>
      <nav>
        <li>
          <ul>
            <NavLink to="/">Home</NavLink>
          </ul>
          <ul>
            <NavLink to="/tasks">Tasks</NavLink>{" "}
            {Boolean(ongoingTasks.length) && <span>{ongoingTasks.length}</span>}
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
