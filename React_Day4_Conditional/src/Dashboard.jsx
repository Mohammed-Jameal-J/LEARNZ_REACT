import React from 'react'

const Dashboard = () => {
    const isLoggedIn = true
    const isWorking = true
    const error = false
  return (
    <>
    <h3>Condition Rendering Day-5</h3>
    {isLoggedIn ? "welcome user , " : "Please login in , "}
    {isWorking && !error && "Complete todays task"}
    {!isWorking &&  "Take rest"}
    </>
  )
}

export default Dashboard