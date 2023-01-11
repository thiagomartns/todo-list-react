import Header from "./components/header/Header";
import Input from "./components/input/Input";
import './App.scss';
import Tasks from "./components/tasks/Tasks";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Input />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
