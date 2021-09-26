import React, { useEffect } from "react";
import ToDoList from "./ToDo/ToDoList";
import Context from "./context";
// import AddToDo from "./ToDo/AddToDo/AddToDo";
import Loader from './Loader/Loader';
import Modal from "./Modal/Modal";

const AddToDo = React.lazy(() => import('./ToDo/AddToDo/AddToDo'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

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
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddToDo onCreate={addToDo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : (
          loading ? null : <p>Nothing!</p>
        )}
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
