import { useState, useCallback, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoStats from './components/TodoStats';
import './index.css';

const STORAGE_KEY = 'reactvibe-todos';

function App() {
  // Initialize state from localStorage or empty array
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Error loading todos from localStorage:', error);
      return [];
    }
  });

  const [filter, setFilter] = useState('all');

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  }, [todos]);

  // useCallback to memoize handlers for performance
  const handleAddTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const handleToggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">✨ ReactVibe Todo</h1>
        <p className="app-subtitle">Organize your tasks with style</p>
      </header>

      <TodoInput onAddTodo={handleAddTodo} />

      <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />

      <TodoList
        todos={todos}
        filter={filter}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />

      {todos.length > 0 && <TodoStats todos={todos} />}
    </div>
  );
}

export default App;
