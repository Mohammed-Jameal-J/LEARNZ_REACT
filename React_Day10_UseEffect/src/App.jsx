import { useState } from 'react'
import Counter from './Components/Counter'
import Post from './Components/Post'
import Clock from './Components/Clock'

function App() {
  const [visible,setVisible]=useState(true)
  return (
    <>
    {/* <button onClick={()=>setVisible(!visible)}>{visible ? "Hide Counter" : "Show Counter"}</button> */}
      <h2>Use Effect</h2>
      {/* {visible && <Counter />} */}
      <Post />
      <Clock />
    </>
  )
}

export default App
