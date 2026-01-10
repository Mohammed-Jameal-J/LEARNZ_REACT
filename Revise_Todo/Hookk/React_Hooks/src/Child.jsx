import React from 'react'
import { memo } from 'react'

console.log("Child Rendering");
const Child = memo( ({ handleclick }) => {
  return (
    <>

     <h2>Child</h2>
    <button onClick={handleclick}>Click Me</button>
    </>
   
  )
})

export default Child