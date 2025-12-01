import React, { useState } from 'react'
import { useGetUserQuery } from '../redux/apiSlice'

const UserShow = () => {
    const [userId,setUserId]=useState(1)
    const {data,error,isLoading}= useGetUserQuery(userId)
    if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error occurred</div>
  }
  return (
    <>
    <h2>View a User</h2>
    <h3>Name :{data?.name} </h3>
    <h3>Username :{data?.username} </h3>
    <h3>Email :{data?.email} </h3>
    <button onClick={()=>setUserId(userId - 1)} disabled={userId === 1}>Prev</button>
    <button onClick={()=>setUserId(userId + 1)} disabled={userId === 10}>Next</button>
    </>
  )
}

export default UserShow