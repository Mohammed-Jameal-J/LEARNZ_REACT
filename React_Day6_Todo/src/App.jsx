import { useCallback, useState , useMemo } from "react";
import TodoList from "./Components/TodoList";
import SearchBar from "./Components/SearchBar";
import TodoForm from "./Components/TodoForm";

function App() {
  const [text, setText] = useState({ id: 0, text: "" });
  const [Todos, setTodos] = useState([
    { id: 1, text: "learn" },
    { id: 2, text: "Progress" },
    { id: 3, text: "test" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = useCallback(() => {
    // event.preventDefault();

    if (text.id === 0) {
      setTodos([{ id: Date.now(), text: text.text }, ...Todos]);
    } else {
      setTodos(Todos.map((item) => (item.id === text.id ? text : item)));
    }
    // setTodos([...Todos,{id: Date.now(),text:text}]) // TO MAKE THE INPUT AT LAST
    // setTodos([{id: Date.now(),text:text.text},...Todos,]) //TO MAKE THE INPUT AT TOP
    setText({ id: 0, text: "" });
  },[text, Todos]);

  const handleDelete = useCallback((idDelete) => {
    setTodos(Todos.filter((item) => item.id != idDelete));
  }, [Todos]);

  const editValue = useCallback((objEdit) => {
    setText(objEdit);
  }, []);

  const handleSearchChange = useCallback((inputValue) => {
    setSearchTerm(inputValue);
  }, []);

  const handleInputChange = useCallback((inputValue) => {
    setText({...text, text: inputValue});
  }, [text]);

  const filteredTodos = useMemo(() => {
    return Todos.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  )}, [Todos, searchTerm]);

  return (
    <>
      <h3>Todos App</h3>
      {/* Add Todos  */}
     <TodoForm text={text} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      <br />
      <SearchBar handleSearchChange={handleSearchChange} />

      {/* List Todos  */}
      <TodoList
        filteredTodos={filteredTodos}
        editValue={editValue}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
