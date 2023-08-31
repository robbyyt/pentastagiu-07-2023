import "./App.css";
import Navbar from "./components/Navbar";
import TaskDialogControlled from "./components/TaskDialogControlled";
import TaskDialogUncontrolled from "./components/TaskDialogUncontrolled";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <TaskDialogControlled />
        <TaskDialogUncontrolled />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
