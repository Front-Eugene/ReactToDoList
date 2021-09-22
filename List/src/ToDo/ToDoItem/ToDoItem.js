import React from "react";

function ToDoItem({ todo, index }) {
  return (
    <li>
      <strong>{index + 1}</strong>
      {todo.title}
    </li>
  );
}

export default ToDoItem;
