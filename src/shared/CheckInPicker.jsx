import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInDate } from '../store/hotelSlice';

const CheckInPicker = () => {
  const dispatch = useDispatch();
  const checkInDate = useSelector(state => state.hotel.checkInDate);
  const checkOutDate = useSelector(state => state.hotel.checkOutDate);

  const handleDateChange = (date) => {
    console.log("Dispatching date:", date ? date.toISOString() : null);
    dispatch(setCheckInDate(date ? date.toISOString() : null));
  };

  return (
    <div className="flex flex-col items-center max-w-28">
      <div className='flex gap-2'>
        <i className="fa-solid fa-calendar-days text-oceanBlue" />
        <p className="text-sm font-semibold">Check In</p>
      </div>
      <DatePicker
        selected={checkInDate}
        onChange={handleDateChange}
        placeholderText="Add Date"
        minDate={new Date()}
        maxDate={checkOutDate ? new Date(checkOutDate).setDate(new Date(checkOutDate).getDate() - 1) : undefined}
        className="text-center font-light mt-1  text-sm bg-transparent focus:outline-none cursor-pointer"
      />
    </div>
  );
};

export default CheckInPicker;
