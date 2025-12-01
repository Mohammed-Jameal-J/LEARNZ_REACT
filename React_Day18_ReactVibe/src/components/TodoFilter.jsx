import PropTypes from 'prop-types';

const filters = [
    { value: 'all', label: 'All', icon: '📋' },
    { value: 'active', label: 'Active', icon: '⚡' },
    { value: 'completed', label: 'Completed', icon: '✅' },
];

function TodoFilter({ currentFilter, onFilterChange }) {
    return (
        <div className="todo-filter">
            {filters.map(({ value, label, icon }) => (
                <button
                    key={value}
                    className={`filter-btn ${currentFilter === value ? 'active' : ''}`}
                    onClick={() => onFilterChange(value)}
                >
                    {icon} {label}
                </button>
            ))}
        </div>
    );
}

TodoFilter.propTypes = {
    currentFilter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default TodoFilter;
