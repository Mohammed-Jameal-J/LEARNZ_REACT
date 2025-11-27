import React from 'react'
import { useState,useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [text,setText]=useState("Hello")
    useEffect(()=>{
        console.log("Component Mounted");
        document.title=`Count is ${count}`
    },[])
  return (
    <>
    <h3>Counter</h3>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount(count + 1)}>Increment</button>
    <h1>{text}</h1>
    <button onClick={()=>setText("Welcome to React Js")}>Change Text</button>
    </>
  )
}

export default Counter