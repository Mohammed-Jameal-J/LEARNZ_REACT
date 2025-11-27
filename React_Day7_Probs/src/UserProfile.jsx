import React from 'react'

const UserProfile = ({name:n,age:a}) => {
  return (
    <>
    <h2>User Profile</h2>
    <h3>Name: {n}</h3>
    <h3>Age:{a} </h3>
    </>
  )
}

export default UserProfile