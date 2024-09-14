import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState = {
    rooms : [],
    status : "idle",
    error: null
}

export const fetchRooms = createAsyncThunk("", async () => {
    const response = await axios.get(`${BASE_URL}/hotelData`);
    return response.data;
});

const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchRooms.fulfilled, (state) => {
                state.status = "Success";
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state) => {
                state.status = "Failed";
                state.error = action.error.message; 
            });
    }
});

export default hotelSlice.reducer;


