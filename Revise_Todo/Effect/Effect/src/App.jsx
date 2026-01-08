import './App.css'
import Counter from './Counter'
import { useState } from 'react'
import Clock from './Clock'

function App() {
 const [hide, setHide] = useState(false)


  return (
    <>
      <h1>Use Effort Into</h1>
      {/* {!hide && <Counter />} */}
      {!hide && <Clock />}
      <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"} Counter</button>
    </>
  )
}

export default App
