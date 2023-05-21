import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "kalpesh"
    },
    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.number += action.payload
        },
        decrement: (state, action) => {
            state.number -= action.payload
        },
        changeName: (state, action) => {
            state.userName = "newname"
        }
    }
})

export const { increment, decrement, changeName } = counterSlice.actions

// always export reducers from slice
export default counterSlice.reducer;