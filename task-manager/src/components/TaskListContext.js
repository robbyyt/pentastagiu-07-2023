import { useState } from "react";
import Task from "./Task";
import "./TaskList.css";
import TaskDialogUncontrolled from "./TaskDialogUncontrolled";
import { useTasks } from "../context/task-context";

/**
 * We want to map through the tasks and display them
 */

function TaskList() {
  const { tasks, addTask, editTask, handleDeleteTask, toggleCompleted } = useTasks();
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [currentlyEditedTask, setCurrentlyEditedTask] = useState(null);

  

  const handleEditClick = (id) => {
    const currentItem = tasks.find(item => item.id === id);
    if(!currentItem) return;

    setCurrentlyEditedTask(currentItem);
    setIsTaskDialogOpen(true);
  }

  const handleEdit = (name, description) => {
   return editTask(currentlyEditedTask.id, name, description) 
  }

  const handleClose = () => {
    setCurrentlyEditedTask(null);
    setIsTaskDialogOpen(false);
  }

  return (
    <>
    <div className="task-btn-container">
      <button onClick={() => setIsTaskDialogOpen(true)}>Create task</button>
    </div>
      <TaskDialogUncontrolled 
      open={isTaskDialogOpen} 
      onSubmitSuccess={ currentlyEditedTask ? handleEdit : addTask } 
      handleClose={handleClose} 
      defaultValues = {{...currentlyEditedTask}}
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
