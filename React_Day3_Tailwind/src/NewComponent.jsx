import React from 'react'

const NewComponent = () => {
    const name = "Jameal"
    const user={name:"jameal",email:"mohammedjameal031@gmail.com"}

  return (
    <>
        <h3>NewComponent Created DAY-3</h3>
    <h5 style={{backgroundColor:"blue" , color:"white"}}>{name}</h5>
    <h5>{user.name} - {user.email}</h5>


    <label htmlFor="username">User Name</label>
    <input className='form-input' id='username' type="text" />
    </>
  )
}

export default NewComponent

// class and for is a reserved word we cant use in react 