import { useState } from "react"
import UserList from "./Component/UserList"
import UserForm from "./Component/UserForm"

function App() {
  const [users,setUsers]=useState([
    {
      id:1, name:"Alice", email:"alice@example.com"
    },
    {
      id:2, name:"Bob", email:"bob@example.com"
    },
    {
      id:3, name:"Charlie", email:"charlie@example.com"
    }
  ])
  
  const addUser=(formData)=>{
    const userObj={id: Date.now(),...formData}
    setUsers([userObj, ...users])
  }

  const deleteUser=(idForDelete)=>{
    setUsers(users.filter((user)=> user.id != idForDelete))
  }

  return (
    <>
     <h2>User Crud</h2>
    <UserForm addUser={addUser}/>
     <UserList usersList={users} deleteUser={deleteUser}/>
    </>
  )
}

export default App
