import React from "react";
import ToDoList from "./ToDo/ToDoList";
import Context from "./context";
import AddToDo from "./ToDo/AddToDo/AddToDo";

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

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addToDo(title) {
    setTodos(todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        },
      ])
    ); 
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <AddToDo onCreate={addToDo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Nothing to do!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
