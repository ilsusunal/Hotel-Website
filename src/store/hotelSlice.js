import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState = {
    rooms: [],
    filteredRooms: [],
    selectedRoomType: "Classic Room",
    checkInDate: null,
    checkOutDate: null,
    adults: 1,
    children: 0,
    status: "idle",
    error: null
}

export const fetchRooms = createAsyncThunk("hotel/fetchRooms", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/hotelData`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        setFilteredRooms: (state, action) => {
            state.filteredRooms = action.payload;
        },
        clearFilteredRooms: (state) => {
            state.filteredRooms = [...state.rooms];
        },
        setCheckInDate: (state, action) => {
            state.checkInDate = action.payload;
        },
        setCheckOutDate: (state, action) => {
            state.checkOutDate = action.payload;
        },
        setGuests: (state, action) => {
            state.adults = action.payload.adults;
            state.children = action.payload.children;
        },
        setSelectedRoomType: (state, action) => {
            state.selectedRoomType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = "Success";
                state.rooms = action.payload;
                state.filteredRooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = "Failed";
                state.error = action.error.message;
            });
    }
});

export const { setFilteredRooms, clearFilteredRooms, setCheckInDate, setCheckOutDate, setGuests, setSelectedRoomType } = hotelSlice.actions;
export default hotelSlice.reducer;


