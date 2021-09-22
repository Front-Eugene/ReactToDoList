import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import PropTypes from "prop-types";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <ToDoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;
