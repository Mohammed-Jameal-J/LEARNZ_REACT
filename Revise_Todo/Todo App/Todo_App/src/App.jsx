import { useState } from "react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Master JavaScript", completed: true },
  ])

  const[searchTerm , setSearchTerm] = useState("")

  const handleAddTodo = (text) => {
    const newTodo = {
      id: todo.length + 1,
      text: text,
      completed: false,
    }
    setTodo([...todo, newTodo])
  }
  const handleDeleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }

  const handleToggle =(id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const filteredTodos = todo.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
     <h2>Todo App </h2>
      <AddTodo handleAddTodo={handleAddTodo} />
      <input type="text" placeholder="Search Todos"
       value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <TodoList todo={filteredTodos} handleDeleteTodo={handleDeleteTodo} handleToggle={handleToggle} />
    </>
  )
}

export default App
