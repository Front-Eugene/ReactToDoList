import React from "react";
import ToDoList from "./ToDo/ToDoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить колбасу" },
    { id: 4, completed: false, title: "Купить сыр" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <ToDoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
