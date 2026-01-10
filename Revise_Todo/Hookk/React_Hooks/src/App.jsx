import { useCallback, useState, useMemo } from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  const [ text, setText ] = useState("hello")

  console.log("App Rendering");
  

  const handleclick = useCallback( () => {
    alert("clicked")
  }, [])

  const multiplier= useMemo(() => {
    return count * 2
  }, [count])

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>

      <Child handleclick={handleclick} />

      <hr />
      <h2>Multiplied: {multiplier}</h2>

      <h2>Text: {text}</h2>
      <button onClick={() => setText("World")}>Change Text</button>
    </>
  )
}

export default App
