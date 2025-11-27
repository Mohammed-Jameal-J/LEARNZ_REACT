import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({filteredTodos, editValue, handleDelete}) => {
  return (
    <ul>
      {filteredTodos.map((item) => (
        <li key={item.id}>
          <TodoItem key={item.id} item={item} editValue={editValue} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
