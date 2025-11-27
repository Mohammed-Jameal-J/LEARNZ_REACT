import React from 'react'
import { useState } from 'react'

const User = () => {
    const [user, setUser] = useState(
        {
            firstName: "Jameal",
            email: "jameal@gmail.com",
            age: 30
        }
    )

    const updateName = () => {
        setUser({...user, firstName: "Mohammed Jameal"})  // spread operator (...) , rest operator (...) both are same syntax wise
    }
  return (
    <>
    <h2>User Use State</h2>
    <h5>First Name : {user.firstName}</h5>
    <p>Email : {user.email}</p>
    <p>Age : {user.age}</p>

    <button onClick={updateName}>Change Name</button>
    </>
  )
}

export default User