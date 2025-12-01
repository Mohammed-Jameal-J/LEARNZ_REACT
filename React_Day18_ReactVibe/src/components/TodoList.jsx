import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, filter, onToggle, onDelete }) {
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true; // 'all'
    });

    if (filteredTodos.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-state-icon">📝</div>
                <p className="empty-state-text">
                    {filter === 'completed'
                        ? 'No completed tasks yet!'
                        : filter === 'active'
                            ? 'No active tasks. Time to add some!'
                            : 'Your todo list is empty. Start adding tasks!'}
                </p>
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;
