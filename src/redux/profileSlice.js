import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProduct = createAsyncThunk('getProduct', () => {

})
const initialState = {
    product: []
}

const profileSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }
})

export default profileSlice.reducer;