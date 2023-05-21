import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './counterSlice'
import productSlice from "./productSlice";

const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        product: productSlice,
    }
})

export default Store;