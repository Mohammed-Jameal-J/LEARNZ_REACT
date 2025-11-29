const initialState = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
    },
];

const userReducer = (state = initialState, action) => {
    if (action.type === "ADD_USER") {
        return [action.payload, ...state];
    }
    return state;
}
export default userReducer;