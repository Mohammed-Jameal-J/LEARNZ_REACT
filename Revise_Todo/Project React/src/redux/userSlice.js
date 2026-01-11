import { createSlice } from '@reduxjs/toolkit';


const initialState={
    users:[
        {id:1,name:"jam",email:"jam@mail.com"},
        {id:2,name:"sam",email:"sam@mail.com"},

    ]
}

const userSlice=createSlice({
    name:"user",
    initialState:initialState,
})

export default userSlice.reducer