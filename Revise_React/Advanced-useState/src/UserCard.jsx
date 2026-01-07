import React from 'react'
import { useState } from 'react'

const UserCard = () => {
    const updateName = () => {
        let obj = { ...user,name: 'Michael' };
        setUser(obj);
    }
    const [user, setUser] = useState({
        name: 'Jameal',
        email: 'jameal@gmail.com',
        age: 32
    });
  return (
    <>
    <h2>Name: {user.name} </h2>
    <h2>Email: {user.email}</h2>
    <h2>Age: {user.age}</h2>
    <button onClick={updateName}>Change Name</button>
    </>
  )
}

export default UserCard