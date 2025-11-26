import React from 'react'

const NewComponent = () => {
    const name = "React"
    const user = {firstName: "Mohammed",lastName: "Jameal"}
  return (
    <>
    <h3 style={{textDecoration:"underline"}}>JSX RULE</h3>
    <h2 style={{background:"red",color:"white"}}>Skills : {name}</h2>
    <p>{user.firstName} - {user.lastName}</p>
    <label htmlFor="text">UserName</label>
    <input type="text" className='form-input' id='text' placeholder='text' />
    <button onClick={()=>alert("clicked")}>Click</button>
    </>
  )
}

export default NewComponent