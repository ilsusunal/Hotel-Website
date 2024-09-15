import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import RoomCard from '../cards/RoomCard';
import 'react-datepicker/dist/react-datepicker.css';
import GuestControl from '../shared/GuestControl';
import PriceSlider from '../shared/PriceSlider';
import ServiceFilter from '../shared/ServiceFilter';
import CheckInPicker from '../shared/CheckInPicker';
import CheckOutPicker from '../shared/CheckOutPicker';

export default function RoomPage() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const dispatch = useDispatch();
  const rooms = useSelector(state => state.hotel.rooms);
  const filteredRooms = useSelector(state => state.hotel.filteredRooms);

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

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className='w-2/3  m-12 space-y-4'>
      <nav className='flex gap-2 items-center'>
        <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/rooms" className="custom-hover text-sm">Rooms</Link>
      </nav>

      {/* Title*/}
      <section>
        <h1 className='text-lightpink font-playfair text-3xl font-semibold'>Rooms & Suits</h1>
      </section>

      {/* Search*/}
      <section className='flex justify-between items-center'>
        {/* Filters*/}
        <section className='flex items-center justify-between border-2 rounded-xl p-2  w-1/4' >
          <div className="flex">
            <CheckInPicker />
            <CheckOutPicker />
          </div>
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
        </section>
        {/* Buttons*/}
        <div className='flex gap-4'>
          <button onClick={handleSearch}>
            Filter
          </button>
          <button onClick={handleSearch}>
            All
          </button>
        </div>
      </section>

      {/* Rooms*/}
      <section className='flex flex-col flex-wrap gap-4' >
        {filteredRooms.map(room => (
          <RoomCard key={room.id} roomDetails={room} />
        ))}
      </section >
    </div >
  );
}
