import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const User = () => {
   let params = useParams()
   const [user,setUser]=useState({})

   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
     .then(response => response.json())
     .then(data=>{
        setUser(data)
     })
   },[])


  return (
    <>
    <h2>User</h2>
    <h1>Name : {user.name}</h1>
    <h1>Email : {user.email}</h1>
    </>
  )
}

export default User