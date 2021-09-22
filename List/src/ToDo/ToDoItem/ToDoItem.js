import React from "react";
import "./ToDoItems.css";
import PropTypes from "prop-types";

function ToDoItem({ todo, index, onChange }) {
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li>
      <span className={classes.join(" ")}>
        <input type="checkbox" 
        checked={todo.completed} 
        onChange={() => onChange(todo.id)} />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default ToDoItem;
