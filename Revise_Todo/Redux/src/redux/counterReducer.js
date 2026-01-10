// import React from 'react'

// const counterReducer = (state=0, action) => {
//     if(action.type === "INCREMENT"){
//         return state + action.payload;
//     }
//     else if(action.type === "DECREMENT"){
//         return state - 1;
//     }

//   return state
// }

// export default counterReducer

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        INCREMENT: (state, action) => state + action.payload,
        DECREMENT: (state) => state - 1,
    },
});

export const { INCREMENT, DECREMENT } = counterSlice.actions;
export default counterSlice.reducer;
