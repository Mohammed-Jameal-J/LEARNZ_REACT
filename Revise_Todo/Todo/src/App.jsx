import { useState } from 'react'
import Task from './Task'
import Pro from './Pro'

function App() {
  const [task, setTask] = useState([
    {id:1 ,value: 'learn React'}, 
    {id:2, value: 'learn Redux'}, 
    {id:3, value: 'learn Node'}]
  )

  const removetask=(idforDelete)=>{
    setTask(task.filter((item)=>item.id !== idforDelete))
  }

  return (
    <>
     <Task />
     {task.map((item)=>(   
      <div key={item.id}>
      {/* <h4>{item}</h4> */}
      <input type="text" value={item.value } />
      <button onClick={()=>removetask(item.id)}>Delete</button>
      </div>
      
     ))}
     <Pro />
    </>
  )
}

export default App
