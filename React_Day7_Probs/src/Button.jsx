import React from 'react'

const Button = ({hc}) => {
    console.log("child rendering");
    
  return (
    <button onClick={hc}>Click Me</button>
  )
}

export default Button