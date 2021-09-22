import React from "react";
import './ToDoItems.css'
import PropTypes from "prop-types";

function ToDoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox" />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
        <button>&times;</button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default ToDoItem;
