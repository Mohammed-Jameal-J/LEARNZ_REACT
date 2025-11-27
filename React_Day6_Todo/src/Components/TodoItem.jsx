import React from 'react'

const TodoItem = ({item, editValue, handleDelete}) => {
  return (
    <li>
        {item.text}
          <button onClick={() => editValue(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  )
}

export default TodoItem