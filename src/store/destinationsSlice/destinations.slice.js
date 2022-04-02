import {createSlice} from "@reduxjs/toolkit";
import {fetchDestinations} from "./destinations.reducers";

export default createSlice({
    name: 'destinations',
    initialState: {
        entities: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDestinations.fulfilled, (state, action) => {
            state.entities = action.payload;
        });
    }
})