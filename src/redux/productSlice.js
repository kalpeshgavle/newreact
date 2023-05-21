import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct = createAsyncThunk('api/getProduct', async () => {
    try {
        const resp = await axios.get(`https://fakestoreapi.com/products`);
        return resp.data;
    } catch (e) {
        console.log("error found!!!!", e)
    }
})
const initialState = {
    loading: true,
    product: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [getProduct.rejected]: (state, action) => {
            state.loading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        }

    }
})

export default productSlice.reducer;