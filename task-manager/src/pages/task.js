import { useParams } from "react-router-dom";
import TaskDescription from "../components/TaskDescription";

const TaskPage = () => {
  const params = useParams();
  const id = params.id;

  if (!id) return "Not found";

  return <TaskDescription id={id} />;
};

export default TaskPage;
