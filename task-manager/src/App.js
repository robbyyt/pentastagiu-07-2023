import "./App.css";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
