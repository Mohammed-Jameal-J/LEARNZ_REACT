import React from 'react'
import { useState , useEffect } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    },[])
  return (
    <>
    <h4>Current Time : {time} </h4>
    </>
  )
}

export default Clock