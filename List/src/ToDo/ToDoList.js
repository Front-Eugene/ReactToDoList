import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import './ToDoList.css';

function ToDoList(props) {
  return (
    <ul>
        {props.todos.map((todo, index) => {
            return <ToDoItem todo={todo} key={todo.id} index={index} />
        })}
    </ul>
  );
}

export default ToDoList;
