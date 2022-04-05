import {configureStore} from "@reduxjs/toolkit";
import destinationsSlice from "./destinationsSlice/destinations.slice";
import promotionsSlice from "./promotionsSlice/promotions.slice";

export default configureStore({
        reducer: {
            promotions: promotionsSlice.reducer,
            destinations: destinationsSlice.reducer
        }
    });
