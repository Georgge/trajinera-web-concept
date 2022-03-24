import {createSlice} from "@reduxjs/toolkit";
import {fetchPromotions} from "./promotions.reducers";

export default createSlice({
    name: 'promotions',
    initialState: {
        entities: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPromotions.fulfilled, (state, action) => {
            state.entities = action.payload;
        });
    }
})
