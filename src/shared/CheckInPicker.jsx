import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInDate } from '../store/hotelSlice';

const CheckInPicker = () => {
  const dispatch = useDispatch();
  const checkInDate = useSelector(state => state.hotel.checkInDate);

  const handleDateChange = (date) => {
    dispatch(setCheckInDate(date));
  };

  return (
    <div className="flex flex-col items-center">
      <i className="fa-solid fa-calendar-days" />
      <label className="text-sm font-semibold">Check In</label>
      <DatePicker
        selected={checkInDate}
        onChange={handleDateChange}
        placeholderText="Add Date"
        className="text-center bg-transparent focus:outline-none cursor-pointer"
      />
    </div>
  );
};

export default CheckInPicker;
