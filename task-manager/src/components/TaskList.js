import { useEffect, useState } from "react";
import Task from "./Task";
import "./TaskList.css";
import TaskDialogUncontrolled from "./TaskDialogUncontrolled";
import { safeParse } from "../utils/storage";

/**
 * We want to map through the tasks and display them
 */

function TaskList() {
  const [tasks, setTasks] = useState(safeParse(localStorage.getItem('tasks'), []));
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [currentlyEditedTask, setCurrentlyEditedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    setTasks((oldTasks) => [...oldTasks, { id: Math.random(), name, description }])
  }

  const deleteTask = (id) => {
    const elementIndex = tasks.findIndex((el) => el.id === id);

    if(elementIndex === -1) return;

    setTasks(tasks.slice(elementIndex + 1));
  }

  const editTask = (name, description) => {
    setTasks(tasks.map(currentTask => currentTask.id === currentlyEditedTask.id ? {...currentTask, name, description} : currentTask));
  }

  const handleEditClick = (id) => {
    const currentItem = tasks.find(item => item.id === id);
    if(!currentItem) return;

    setCurrentlyEditedTask(currentItem);
    setIsTaskDialogOpen(true);
  }

  const toggleCompleted = (id) => {
    setTasks(tasks.map(currentTask => currentTask.id === id ? {...currentTask, completed: !currentTask.completed} : currentTask));
  }

  return (
    <>
      <button onClick={() => setIsTaskDialogOpen(true)}>Create task</button>
      <TaskDialogUncontrolled 
      open={isTaskDialogOpen} 
      onSubmitSuccess={ currentlyEditedTask ? editTask : addTask } 
      handleClose={() => setIsTaskDialogOpen(false)} 
      defaultValues = {{...currentlyEditedTask}}
      />
      <ul className="task-list">
        {tasks.map((task) => (
          <Task 
          {...task} 
          key={task.id} 
          deleteTask={deleteTask} 
          toggleCompleted={toggleCompleted}
          handleEditClick={handleEditClick}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
