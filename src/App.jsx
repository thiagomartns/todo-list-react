import Header from "./components/header/Header";
import Input from "./components/input/Input";
import './App.scss';
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";

function App() {

  const [newTask, setNewTask] = useState('')
  const [tasksArray, setTasksArray] = useState([])

  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Input newTask={newTask} setNewTask={setNewTask} tasksArray={tasksArray} setTasksArray={setTasksArray} />
        <Tasks newTask={newTask} setNewTask={setNewTask} tasksArray={tasksArray} setTasksArray={setTasksArray} />
      </div>
    </div>
  );
}

export default App;
