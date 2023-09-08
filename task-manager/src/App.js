import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/task-context";
// import HomePage from "./pages/home";
// import TasksPage from "./pages/tasks";
// import TaskPage from "./pages/task";

const HomePage = lazy(() => import("./pages/home"));
const TasksPage = lazy(() => import("./pages/tasks"));
const TaskPage = lazy(() => import("./pages/task"));

function App() {
  return (
    <BrowserRouter>
      <TaskContextProvider>
        <div className="App">
          <Navbar />
          <main>
            <Suspense fallback={"Loading page..."}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/tasks/:id" element={<TaskPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </TaskContextProvider>
    </BrowserRouter>
  );
}

export default App;
