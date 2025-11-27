import React from 'react'
import { memo } from 'react';

const TodoForm = memo(({text, handleSubmit, handleInputChange}) => {
    const onInputChange = (event) => {
        handleInputChange(event.target.value);
    }
    const formSubmit = (event) => {
        event.preventDefault();
        handleSubmit();

    }
  return (
     <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={onInputChange}
          value={text.text}
          placeholder="Add a New Task"
        />

        {text.id === 0 && <button type="submit">ADD</button>}
        {text.id !== 0 && <button type="submit">EDIT</button>}
      </form>
  )
})

export default TodoForm