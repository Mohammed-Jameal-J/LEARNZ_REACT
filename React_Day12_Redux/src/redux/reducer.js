// const counterReducer = (state = 0, action) => {
    
//     if (action.type === 'increment') {
//         return state + action.payload;
//     } else if (action.type === 'decrement') {
//         return state - action.payload;
//     }
//     return state;
// };

// export default counterReducer;

import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + action.payload;
        },
        decrement: (state, action) => {
            return state - action.payload;
        }
    }
});
export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;