import React from 'react'
import { useState } from 'react'

const TaskList = () => {
    const [tasks,setTasks] = useState([
      {
        id:1, value:"learn"
      },
      {
        id:2, value:"Build"
      },
      {
        id:3, value:"Test"
      }
    ])

    const removeTask=(id)=>{
        setTasks(tasks.filter((item)=>item.id != id))
    }
  return (
    <>
    <h3>Array of Values</h3>

    <h1>Task</h1>
    {tasks.map((item) =>(
        <div key={item.id}>
        {/* <h5>{item}</h5> */}
        <input type="text" defaultValue={item.value} />
        <button onClick={()=>removeTask(item.id)}>Delete</button> 
        </div>
        
    ))}
    </>
  )
}

export default TaskList

// we use key for array of values ⚠️⚠️⚠️⚠️