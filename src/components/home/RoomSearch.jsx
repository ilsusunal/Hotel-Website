import React, { useState, useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, setFilteredRooms, setCheckInDate, setCheckOutDate, setGuests } from '../../store/hotelSlice';
import { useHistory } from 'react-router-dom';
import GuestControl from '../../ui/GuestControl';
import CheckInPicker from '../../ui/CheckInPicker';
import CheckOutPicker from '../../ui/CheckOutPicker';

export default function RoomSearch() {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const dispatch = useDispatch();
    const { rooms, status, checkInDate, checkOutDate } = useSelector(state => state.hotel);
    const history = useHistory();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRooms());
        }
    }, [status, dispatch]);

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(setCheckInDate(checkInDate));
        dispatch(setCheckOutDate(checkOutDate));
        dispatch(setGuests({ adults, children }));

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
        <div className="bg-white rounded-xl md:rounded-full p-4 flex flex-col md:flex-row items-center space-x-4 w-1/2">
            <form onSubmit={handleSearch} className="md:flex items-center w-full justify-around font-light">
                {/* Check-in & Check-out */}
                <CheckInPicker />
                <CheckOutPicker />
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
                <button type='submit' className="bg-oceanBlue text-white p-4 w-full md:w-16 md:h-16 rounded-full">
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </form>
        </div>
    )
}
