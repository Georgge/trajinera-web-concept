import {createSlice} from "@reduxjs/toolkit";
import {increment, decrement} from "./example.reducers";

export default createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment,
        decrement
    }
})
