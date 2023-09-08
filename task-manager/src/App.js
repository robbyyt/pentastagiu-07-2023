import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import TaskList from "./components/TaskListContext";
// import BarChart from "./components/BarChart";
import { TaskContextProvider } from "./context/task-context";

const TaskList = lazy(() => import("./components/TaskListContext"));
const BarChart = lazy(() => import("./components/BarChart"));

function App() {
  return (
    <BrowserRouter>
      <TaskContextProvider>
        <div className="App">
          <Navbar />
          <main>
            <Suspense fallback="Loading...">
              <Routes>
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/" element={<BarChart />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </TaskContextProvider>
    </BrowserRouter>
  );
}

export default App;
