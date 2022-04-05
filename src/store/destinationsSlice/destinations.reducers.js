import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchDestinations = createAsyncThunk (
    'destinations/fetchDestinations',
    async () => {
        return axios.get("https://trajinera-api-qa.herokuapp.com/trip").then(({data}) => {
            return data.data
        });
    }
)