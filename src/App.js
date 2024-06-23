import {useState} from "react";
import './App.css';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const createId = () => Math.random().toString(36).substring(2);
  const [todos, setTodos] = useState([]);
  const handleAdd = (text) => {
    const newTodo = {
      id: createId(),
      text: text,
      isFinished: false
    };
    setTodos((todos) => [...todos, newTodo]);
  }
  const handleRemove = (deleteId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleteId));
  }
  return (
    <div className="App">
      <div className="App-title">Todoアプリ</div>
      <div className="App-content">
        <TodoInput onAdd={handleAdd}/>
        <TodoList todos={todos} onRemove={handleRemove}/>
      </div>
    </div>
  );
}

export default App;
