import React from 'react'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import Card from './components/Card'

const Pro = () => {
    const [name, setName] = useState("jameal")
    const [age, setAge] = useState(23)

    const changeName=()=>{
      setName("Mohammed")
    }
  return (
    <>
    <h3>Probs</h3>
    <UserProfile username={name} age={age} changeName={changeName} />
    <Card>
      <h2>Card comonent</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!</p>
      
      </Card>
    </>
  )
}

export default Pro