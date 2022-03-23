import {configureStore} from "@reduxjs/toolkit";
import exampleSlice from "./exampleSlice/example.slice";

export default configureStore({
        reducer: exampleSlice.reducer
    });
