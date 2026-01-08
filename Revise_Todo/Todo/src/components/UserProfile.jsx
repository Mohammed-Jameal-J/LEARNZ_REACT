import React from 'react'

const UserProfile = ({ name, age }) => {
  return (
    <>
    <h3>User Profile</h3>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    </>
  )
}

export default UserProfile