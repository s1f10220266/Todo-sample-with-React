import './App.css';
import TodoInput from "./TodoInput"

function App() {
  return (
    <div className="App">
      <div className="App-title">Todoアプリ</div>
      <div className="App-content">
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
