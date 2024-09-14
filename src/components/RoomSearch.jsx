import React, { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../store/hotelSlice';

export default function RoomSearch() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const dispatch = useDispatch();
    const {rooms, status} = useSelector(state => state.hotel);

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchRooms());
        }
    }, [status, dispatch]);

    //To open and close the guest dropdown
    const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setGuestDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    //GuestController as a reusable component
    const GuestControl = ({ label, value, onIncrement, onDecrement, min }) => (
        <div className="flex items-center justify-between">
            <label className="text-sm font-semibold">{label}</label>
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    onClick={onDecrement}
                    disabled={value === min}
                    className="w-6 h-6 bg-gray-300 rounded-full text-center"
                >-</button>
                <span>{value}</span>
                <button
                    type="button"
                    onClick={onIncrement}
                    className="w-6 h-6 bg-gray-300 rounded-full text-center"
                >+</button>
            </div>
        </div>
    );

    return (
        <div className="bg-lightBlue/50 rounded-xl md:rounded-full shadow-lg p-4 md:flex items-center space-x-4 w-1/2">
            <form action="" className="md:flex items-center w-full space-x-6">
                {/* Check-in & Check-out */}
                {['Check In', 'Check Out'].map((label, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <i className="fa-solid fa-calendar-days" />
                        <label className="text-sm font-semibold">{label}</label>
                        <DatePicker
                            selected={index === 0 ? checkInDate : checkOutDate}
                            onChange={date => index === 0 ? setCheckInDate(date) : setCheckOutDate(date)}
                            placeholderText="Add Date"
                            className="text-center bg-transparent focus:outline-none"
                        />
                    </div>
                ))}
                {/* Guests */}
                <div className="flex flex-col items-center relative" ref={dropdownRef}>
                    <i className="fa-solid fa-user-group" />
                    <label className="text-sm font-semibold">Guests</label>
                    <div className="text-center border-b cursor-pointer" onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}>
                        {adults} Adults, {children} Children
                    </div>
                    {guestDropdownOpen && (
                        <div className="absolute bg-white rounded-lg shadow-lg mt-2 p-4 w-40 top-12 z-10">
                            <GuestControl label="Adults" value={adults} onIncrement={() => setAdults(adults + 1)} onDecrement={() => setAdults(adults - 1)} min={1} />
                            <GuestControl label="Children" value={children} onIncrement={() => setChildren(children + 1)} onDecrement={() => setChildren(children - 1)} min={0} />
                        </div>
                    )}
                </div>
            </form>

            {/* Search Button */}
            <button className="bg-lightpink text-white p-4 w-full md:w-24 rounded-full">
                <i className="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    )
}
