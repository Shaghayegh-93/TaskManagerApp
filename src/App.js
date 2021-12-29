import "./App.css";
import TaskManagerApp from "./components/TaskManagerApp";
import TaskListProvider from "./context/TaskListProvider";

function App() {
  return (
    <TaskListProvider>
      <div className="App container">
        <TaskManagerApp />
      </div>
    </TaskListProvider>
  );
}

export default App;
