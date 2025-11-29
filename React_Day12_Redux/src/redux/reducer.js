const counterReducer = (state = 0, action) => {
    
    if (action.type === 'increment') {
        return state + action.payload;
    } else if (action.type === 'decrement') {
        return state - action.payload;
    }
    return state;
};

export default counterReducer;