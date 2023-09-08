import { useEffect, useState } from "react";
import Task from "./Task";
import "./TaskList.css";
import TaskDialogUncontrolled from "./TaskDialogUncontrolled";
import {
  getTasks,
  createTask,
  editTask as putTask,
  patchTask,
  deleteTask,
} from "../services/task.service";

/**
 * We want to map through the tasks and display them
 */

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [currentlyEditedTask, setCurrentlyEditedTask] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (err) {
        setTasks([]);
      }
    })();
  }, []);

  const addTask = async (name, description) => {
    const addedTask = await createTask(name, description);
    setTasks([...tasks, addedTask]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const elementIndex = tasks.findIndex((el) => el.id === id);
    if (elementIndex === -1) return;
    setTasks(tasks.slice(elementIndex + 1));
  };

  const editTask = async (name, description) => {
    const editedTask = await putTask(currentlyEditedTask.id, name, description);
    setTasks(
      tasks.map((currentTask) =>
        currentTask.id === currentlyEditedTask.id ? editedTask : currentTask
      )
    );
  };

  const handleEditClick = (id) => {
    const currentItem = tasks.find((item) => item.id === id);
    if (!currentItem) return;

    setCurrentlyEditedTask(currentItem);
    setIsTaskDialogOpen(true);
  };

  const toggleCompleted = async (id, completed) => {
    const editedTask = await patchTask(id, { completed: !completed });
    setTasks(
      tasks.map((currentTask) =>
        currentTask.id === id ? editedTask : currentTask
      )
    );
  };

  const handleClose = () => {
    setCurrentlyEditedTask(null);
    setIsTaskDialogOpen(false);
  };

  return (
    <>
      <div className="task-btn-container">
        <button onClick={() => setIsTaskDialogOpen(true)}>Create task</button>
      </div>
      <TaskDialogUncontrolled
        open={isTaskDialogOpen}
        onSubmitSuccess={currentlyEditedTask ? editTask : addTask}
        handleClose={handleClose}
        defaultValues={{ ...currentlyEditedTask }}
      />
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            {...task}
            key={task.id}
            deleteTask={handleDeleteTask}
            toggleCompleted={toggleCompleted}
            handleEditClick={handleEditClick}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
