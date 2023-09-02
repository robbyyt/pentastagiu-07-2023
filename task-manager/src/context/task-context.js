import { createContext, useContext, useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask, editTask as putTask, patchTask } from '../services/task.service'; 

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch(err) {
        setTasks([]);
      }
    })()
  }, []);

  const addTask = async (name, description) => {
    const addedTask = await createTask(name, description);
    setTasks([...tasks, addedTask]);
  }

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const editTask = async (id, name, description) => {
    const editedTask = await putTask(id, name, description);
    setTasks(tasks.map(currentTask => currentTask.id === id ? editedTask : currentTask));
  }

  const toggleCompleted = async (id, completed) => {
    const editedTask = await patchTask(id, { completed: !completed });
    setTasks(tasks.map(currentTask => currentTask.id === id ? editedTask : currentTask));
  }


  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleCompleted, editTask, handleDeleteTask }}>
      {children}
    </TaskContext.Provider>
  )
};

