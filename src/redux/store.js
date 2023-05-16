import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './counterSlice'
import ProfileSlice from "./profileSlice";

const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        profile: ProfileSlice,
    }
})

export default Store;