import './App.css';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <div className="App-title">Todoアプリ</div>
      <div className="App-content">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
