import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckOutDate } from '../store/hotelSlice';

const CheckOutPicker = () => {
  const dispatch = useDispatch();
  const checkInDate = useSelector(state => state.hotel.checkInDate);
  const checkOutDate = useSelector(state => state.hotel.checkOutDate);

  const handleDateChange = (date) => {
    dispatch(setCheckOutDate(date ? date.toISOString() : null));
  };

  return (
    <div className="flex flex-col items-center max-w-28">
      <div className='flex gap-2'>
        <i className="fa-solid fa-calendar-days text-oceanBlue" />
        <p className="text-sm font-semibold">Check Out</p>
      </div>
      <DatePicker
        selected={checkOutDate}
        onChange={handleDateChange}
        placeholderText="Add Date"
        minDate={checkInDate ? new Date(checkInDate).setDate(new Date(checkInDate).getDate() + 1) : new Date()}
        className="text-center font-light mt-1 text-sm bg-transparent focus:outline-none cursor-pointer"
      />
    </div>
  );
};

export default CheckOutPicker;
