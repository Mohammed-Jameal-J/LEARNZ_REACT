import React from 'react'

const UserProfile = ({ username, age, changeName }) => {
  return (
    <>
    <h3>User Profile</h3>
    <p>Name: {username}</p>
    <p>Age: {age}</p>
    <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default UserProfile