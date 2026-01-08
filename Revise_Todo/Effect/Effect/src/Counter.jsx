import React from 'react'
import { useEffect, useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Counter Mounted");
    }, [])
    return (
        <>
            <h2>Counter Component</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default Counter