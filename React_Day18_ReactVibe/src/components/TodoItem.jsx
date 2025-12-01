import { memo } from 'react';
import PropTypes from 'prop-types';

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
            />
            <span className="todo-text">{todo.text}</span>
            <button
                className="todo-delete"
                onClick={() => onDelete(todo.id)}
                aria-label={`Delete "${todo.text}"`}
            >
                🗑️
            </button>
        </li>
    );
});

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
