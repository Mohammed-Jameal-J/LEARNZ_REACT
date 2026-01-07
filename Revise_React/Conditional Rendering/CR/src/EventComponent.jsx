import React from 'react'

const EventComponent = () => {
  function handleClick(){
    alert("Button clicked!")
  }
  function handleChange(event){
    console.log("Input changed:", event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    alert("Form submitted!")
  }
  return (
    <>
    <h3>EventComponent</h3>
    <input type="text" onChange={handleChange}/>
    <button onClick={handleClick}>Click Me</button>

    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default EventComponent