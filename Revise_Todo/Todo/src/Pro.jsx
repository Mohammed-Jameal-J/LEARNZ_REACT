import React from 'react'
import UserProfile from './components/UserProfile'
import { useState } from 'react'

const Pro = () => {
    const [name, setName] = useState("jameal")
    const [age, setAge] = useState(23)
  return (
    <>
    <h3>Probs</h3>
    <UserProfile name={name} age={age} />
    </>
  )
}

export default Pro