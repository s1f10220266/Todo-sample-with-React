import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("err", error);
      });
  }, []);

  const handleAdd = (title, description) => {
    axios.post('http://localhost:3001/tasks', {
      title: title,
      isFinished: false,
      description: description
    })
      .then(response => {
        setTasks([...tasks, response.data]);
      })
      .catch(error => {
        console.error("add error", error);
      });
  }

  const handleRemove = (deleteId) => {
    axios.delete(`http://localhost:3001/tasks/${deleteId}`)
      .then(() => {
        setTasks((prev) => prev.filter((task) => task.id !== deleteId));
      })
      .catch(error => {
        console.error("delete error", error);
      });
  }

  const handleToggle = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    axios.put(`http://localhost:3001/tasks/${taskId}`, {
      ...task,
      isFinished: !task.isFinished
    })
      .then(response => {
        setTasks((prev) => prev.map((task) => task.id === taskId ? { ...task, isFinished: !task.isFinished } : task));
      })
      .catch(error => {
        console.error("toggling error", error);
      });
  }

  const handleUpdate = (taskId, newTitle, newDescription) => {
    const task = tasks.find(task => task.id === taskId);
    axios.put(`http://localhost:3001/tasks/${taskId}`, {
      ...task,
      title: newTitle,
      description: newDescription
    })
      .then(response => {
        setTasks((prev) => prev.map((task) => task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task));
      })
      .catch(error => {
        console.error("Update error", error);
      });
  }

  return (
    <div className="App">
      <div className="App-title">Todoアプリ</div>
      <div className="App-content">
        <TodoInput onAdd={handleAdd} />
        <TodoList tasks={tasks} onRemove={handleRemove} onToggle={handleToggle} onUpdate={handleUpdate} />
      </div>
      <div style={{}}>＊Todoのタイトルをクリックすると編集できます</div>
    </div>
  );
}

export default App;
