import { useEffect, useState } from "react";
import { getTaskById } from "../services/task.service";

const TaskDescription = ({ id }) => {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const task = await getTaskById(id);
        setTask(task);
      } catch (err) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (!task) return null;

  if (isLoading) return <h1>Loading task...</h1>;

  if (hasError)
    return (
      <h1 style={{ color: "red" }}>
        An error has occured, please try again later.
      </h1>
    );

  return (
    <div style={{ padding: "20px" }}>
      <p>{task.name}</p>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDescription;
