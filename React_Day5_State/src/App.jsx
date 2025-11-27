import { useState } from "react"
import User from "./User.jsx"
import ProjectOne from "./ProjectOne.jsx"
import TaskList from "./List.jsx"

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prev => prev + 1)
     setCount(prev => prev + 1)
  }
  const decrement = () => {
    setCount(prev => prev - 1)
  }
  return (
    <>
      <h2>USE STATE</h2>
      <h5>Count : {count}</h5>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <User />
      <ProjectOne />
      <TaskList />
    </>
  )
}

export default App
