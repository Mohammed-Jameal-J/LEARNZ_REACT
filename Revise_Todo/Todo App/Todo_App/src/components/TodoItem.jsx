import React from 'react'

const TodoItem = ({ todo , handleDeleteTodo , handleToggle }) => {
  return (
    <>
    <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.text}
            
        </span>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
    </>
  )
}

export default TodoItem