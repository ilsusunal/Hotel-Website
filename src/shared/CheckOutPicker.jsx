import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckOutDate } from '../store/hotelSlice';

const CheckOutPicker = () => {
  const dispatch = useDispatch();
  const checkOutDate = useSelector(state => state.hotel.checkOutDate);

  const handleDateChange = (date) => {
    dispatch(setCheckOutDate(date ? date.toISOString() : null));
  };

  return (
    <div className="flex flex-col items-center max-w-24">
      <i className="fa-solid fa-calendar-days" />
      <label className="text-sm font-semibold">Check Out</label>
      <DatePicker
        selected={checkOutDate}
        onChange={handleDateChange}
        placeholderText="Add Date"
        className="text-center text-sm bg-transparent focus:outline-none cursor-pointer"
      />
    </div>
  );
};

export default CheckOutPicker;
