import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import RoomCard from '../cards/RoomCard';
import 'react-datepicker/dist/react-datepicker.css';
import GuestControl from '../shared/GuestControl';
import PriceSlider from '../shared/PriceSlider';
import ServiceFilter from '../shared/ServiceFilter';
import CheckInPicker from '../shared/CheckInPicker';
import CheckOutPicker from '../shared/CheckOutPicker';
import { setFilteredRooms } from '../store/hotelSlice';

export default function RoomPage() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [filteredRooms, setFilteredRoomsUI] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.hotel.rooms);
  const uniqueRoomTypes = Array.from(new Set(rooms.map(room => room.type)));

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

  const getUniqueRoomTypes = (rooms) => {
    const roomTypesMap = {};
    rooms.forEach(room => {
      if (!roomTypesMap[room.type]) {
        roomTypesMap[room.type] = room;
      }
    });
    return Object.values(roomTypesMap); 
  };

  useEffect(() => {
    const uniqueRooms = getUniqueRoomTypes(rooms);
    setFilteredRoomsUI(uniqueRooms);
  }, [rooms]);

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
    const filtered = rooms.filter(room => {
      const withinPriceRange = room.price_per_night >= searchParams.minPrice && room.price_per_night <= searchParams.maxPrice;
      const hasKitchen = !searchParams.kitchen || room.kitchen;
      const hasWifi = !searchParams.wifi || room.wifi;
      const matchesBedType = !searchParams.bedType || room.bedType === searchParams.bedType;
      return withinPriceRange && hasKitchen && hasWifi && matchesBedType;
    });
    const uniqueFilteredRooms = getUniqueRoomTypes(filtered);
    setFilteredRoomsUI(uniqueFilteredRooms);
  };

  const handleBookNow = (room) => {
    dispatch(setFilteredRooms([room]));
    history.push(`/rooms/reservation?roomType=${room.type}`);
  };

  const roomsToDisplay = filteredRooms || getUniqueRoomTypes(rooms);

  return (
    <div className='w-2/3 m-12 space-y-8'>
      <nav className='flex gap-2 items-center'>
        <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/rooms" className="custom-hover text-sm">Rooms</Link>
      </nav>

      {/* Title*/}
      <section>
        <h1 className='text-lightpink font-playfair text-3xl font-semibold mb-8'>Rooms & Suits</h1>
      </section>

      {/* Search*/}
      <section className='flex justify-between items-center'>
        {/* Filters*/}
        <section className='flex items-center justify-between w-3/4' >
          <CheckInPicker />
          <CheckOutPicker />
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
          <button onClick={() => setFilteredRoomsUI(null)}>
            All
          </button>
        </div>
      </section>

      {/* Rooms*/}
      <section className='flex flex-col flex-wrap gap-4' >
        {roomsToDisplay.map(room => (
          <RoomCard key={room.id} roomDetails={room} onBookNow={() => handleBookNow(room)} />
        ))}
      </section >
    </div >
  );
}
