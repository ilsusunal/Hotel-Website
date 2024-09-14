import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import RoomCard from '../cards/RoomCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GuestControl from '../shared/GuestControl';
import PriceSlider from '../shared/PriceSlider';
import ServiceFilter from '../shared/ServiceFilter';

export default function RoomPage() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const dispatch = useDispatch();
  const rooms = useSelector(state => state.hotel.rooms);
  const [searchParams, setSearchParams] = useState({
    checkInDate: null,
    checkOutDate: null,
    adults: 1,
    children: 0,
    minPrice: 0,
    maxPrice: 300,
    kitchen: false,
    wifi: false,
    bedType: '',
  });
  const history = useHistory();

  const handlePriceChange = (minPrice, maxPrice) => {
    setSearchParams(prev => ({
      ...prev,
      minPrice,
      maxPrice
    }));
  };

  const handleServiceChange = (name, checked) => {
    setSearchParams(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSearch = () => {
    const filteredRooms = rooms.filter(room => {
      const withinPriceRange = room.price_per_night >= searchParams.minPrice && room.price_per_night <= searchParams.maxPrice;
      const hasKitchen = !searchParams.kitchen || room.kitchen;
      const hasWifi = !searchParams.wifi || room.wifi;
      const matchesBedType = !searchParams.bedType || room.bedType === searchParams.bedType;
      return withinPriceRange && hasKitchen && hasWifi && matchesBedType;
    });

    dispatch(setFilteredRooms(filteredRooms));
    const queryString = new URLSearchParams(searchParams).toString();
    history.push(`/rooms/reservation?${queryString}`);
  };

  return (
    <div className='w-3/5 m-12 space-y-4'>
      <nav className='flex gap-4 items-center'>
        <Link to="/" className="custom-hover text-gray-500">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/rooms" className="custom-hover">Rooms</Link>
      </nav>

      {/* Title and Search/filter parameters */}
      <section className='space-y-8'>
        <div className='flex justify-between'>
          <h1 className='text-lightpink font-playfair text-3xl font-semibold'>Rooms & Suits</h1>
          <button onClick={handleSearch} className='bg-lightpink text-white px-3 py-1 rounded-2xl'>
            Find Your Room
          </button>
        </div>

        {/* Search Filters */}
        <div className='flex items-center justify-between bg-stone-100 rounded-xl md:rounded-full p-4 space-x-4'>
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
          <GuestControl
            adults={adults}
            children={children}
            onIncrementAdult={() => setAdults(adults + 1)}
            onDecrementAdult={() => setAdults(adults - 1)}
            onIncrementChild={() => setChildren(children + 1)}
            onDecrementChild={() => setChildren(children - 1)}
          />
          <PriceSlider
            minPrice={searchParams.minPrice}
            maxPrice={searchParams.maxPrice}
            onChange={handlePriceChange}
          />
          <ServiceFilter
            services={{ kitchen: searchParams.kitchen, wifi: searchParams.wifi }}
            onChange={handleServiceChange}
          />
        </div>
      </section >

      {/* Room Cards */}
      <section className='flex flex-wrap gap-4' >
        {
          rooms.length > 0 ? rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          )) : (
            <p>No rooms available</p>
          )
        }
      </section >
    </div >
  );
}
