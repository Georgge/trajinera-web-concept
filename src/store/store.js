import {configureStore} from "@reduxjs/toolkit";
import promotionsSlice from "./promotionsSlice/promotions.slice";

export default configureStore({
        reducer: {
            promotions: promotionsSlice.reducer
        }
    });
