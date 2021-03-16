
import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App-header">
      <h1>Let's get some work done!</h1>
      <AddTask />
      <FilterTask />
      <ListTask />
    </div>
  );
}

export default App;