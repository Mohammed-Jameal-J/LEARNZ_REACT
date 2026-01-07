import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prev=> prev + 1);
        setCount(prev=> prev + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <>
    <h1>Use State</h1>
    <h2>Count: {count}</h2>
    <button className='bg-blue-500' onClick={increment}>Increment</button>
    <button className='bg-red-600' onClick={decrement}>Decrement</button>  
    </>
  )
}

export default Count