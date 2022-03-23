import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async () => {
        return axios.get("https://trajinera-api-qa.herokuapp.com/promotion").then(({data}) => {
           return data.data
        });
    }
)
