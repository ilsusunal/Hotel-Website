import React, { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, setFilteredRooms } from '../store/hotelSlice';
import { useHistory } from 'react-router-dom';
import GuestControl from '../shared/GuestControl';

export default function RoomSearch() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    //Filtering rooms according to fetched data 
    const dispatch = useDispatch();
    const { rooms, status } = useSelector(state => state.hotel);
    const history = useHistory();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRooms());
        }
    }, [status, dispatch]);

    const handleSearch = () => {
        const filtered = rooms.filter(room => {
            return (
                room.availability === 'Available' &&
                room.maxPersons.adults >= adults &&
                room.maxPersons.children >= children)
        });
        const roomsToDisplay = filtered.length > 0 ? filtered : rooms;
        dispatch(setFilteredRooms(roomsToDisplay));
        history.push('/rooms/reservation');
    }

    return (
        <div className="bg-white rounded-xl md:rounded-full p-4 md:flex items-center space-x-4 w-1/2">
            <form action="" className="md:flex items-center w-full justify-around">
                {/* Check-in & Check-out */}
                {['Check In', 'Check Out'].map((label, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <i className="fa-solid fa-calendar-days" />
                        <label className="text-sm font-semibold">{label}</label>
                        <DatePicker
                            selected={index === 0 ? checkInDate : checkOutDate}
                            onChange={date => index === 0 ? setCheckInDate(date) : setCheckOutDate(date)}
                            placeholderText="Add Date"
                            className="text-center bg-transparent focus:outline-none cursor-pointer"
                        />
                    </div>
                ))}
                {/* Guests */}
                <GuestControl
                    adults={adults}
                    children={children}
                    onIncrementAdult={() => setAdults(adults + 1)}
                    onDecrementAdult={() => setAdults(adults - 1)}
                    onIncrementChild={() => setChildren(children + 1)}
                    onDecrementChild={() => setChildren(children - 1)}
                />
                {/* Search Results */}
                <button onClick={handleSearch} className="bg-lightpink text-white p-4 w-full md:w-16 md:h-16 rounded-full">
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </form>

        </div>
    )
}
