import "./App.css";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskListContext";
import { TaskContextProvider } from "./context/task-context";

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
          <Navbar />
          <main>
            <TaskList />
          </main>
      </div>
    </TaskContextProvider>
  );
}

export default App;
