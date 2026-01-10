import React from 'react'
import { useState ,memo } from 'react'

const AddTodo = memo(({ handleAddTodo }) => {
  console.log("Add Todo Rendered");
  
    const [text , setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTodo (text);
        setText("");
    }
    
    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input value={text} type="text" placeholder='Add todo...' onChange={event => setText(event.target.value ) } />
        <button type="submit" >Add</button>
    </form>
    </>
  )
})

export default AddTodo