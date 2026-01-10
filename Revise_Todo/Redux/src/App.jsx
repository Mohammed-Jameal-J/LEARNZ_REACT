import { useSelector , useDispatch } from "react-redux"
import { INCREMENT , DECREMENT } from "./redux/counterReducer"

function App() {
  const counter = useSelector( (state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>redux basic</h1>
      <h2>{counter}</h2>
      <button onClick={ () => dispatch(INCREMENT(5)) }>Increament</button>
      <button onClick={ () => dispatch(DECREMENT()) }>Decreament</button>
    </>
  )
}

export default App
