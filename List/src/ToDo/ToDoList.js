import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import PropTypes from "prop-types";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ToDoList;
