import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todo , handleDeleteTodo , handleToggle }) => {
  console.log("Todo List Rendered");
  return (
    <>
    <ul>
        {todo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggle={handleToggle} />
        ))}
      </ul>
    </>
  )
}

export default TodoList