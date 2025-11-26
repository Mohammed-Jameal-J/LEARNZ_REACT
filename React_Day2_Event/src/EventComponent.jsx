import React from 'react'

const EventComponent = () => {
  const handleClick = (name) => {
    alert(`Button Clicked: ${name}`)
  }
  const handleChange = (event) => {
    console.log("Input Changed:", event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <>
     <h3 style={{textDecoration:"underline"}}>Event Handling</h3>
      {/* <button onClick={handleClick}>Click Me</button>
      <br />
      <button onMouseEnter={() => alert("Mouse Entered")}>Mouse Enter</button> */}
      <button onClick={()=>handleClick("Welcome")} onMouseEnter={() => console.log("Mouse Entered")}>Click me</button>

      <input type="text" onChange={handleChange} placeholder='Type any word' />

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default EventComponent