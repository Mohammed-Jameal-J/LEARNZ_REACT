import PropTypes from 'prop-types';

function TodoStats({ todos }) {
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const activeTodos = totalTodos - completedTodos;

    return (
        <div className="todo-stats">
            <div className="stats-item">
                <span>Total:</span>
                <span className="stats-number">{totalTodos}</span>
            </div>
            <div className="stats-item">
                <span>Active:</span>
                <span className="stats-number">{activeTodos}</span>
            </div>
            <div className="stats-item">
                <span>Completed:</span>
                <span className="stats-number">{completedTodos}</span>
            </div>
        </div>
    );
}

TodoStats.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default TodoStats;
