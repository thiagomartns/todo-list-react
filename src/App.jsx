import Header from "./components/header/Header";
import Input from "./components/input/Input";
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Input />
      </div>
    </div>
  );
}

export default App;
