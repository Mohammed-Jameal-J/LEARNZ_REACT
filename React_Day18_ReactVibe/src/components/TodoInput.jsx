import { useState } from 'react';
import PropTypes from 'prop-types';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    
    if (trimmedValue) {
      onAddTodo(trimmedValue);
      setInputValue('');
    }
  };

  return (
    <div className="todo-input-container">
      <form onSubmit={handleSubmit} className="todo-input-wrapper">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!inputValue.trim()}
        >
          ✨ Add
        </button>
      </form>
    </div>
  );
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoInput;
