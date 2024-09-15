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
import { setFilteredRooms, setGuests  } from '../store/hotelSlice';
import Button from '../shared/button';

export default function RoomPage() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [filteredRooms, setFilteredRoomsUI] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.hotel.rooms);
  const checkInDate = useSelector(state => state.hotel.checkInDate);
  const checkOutDate = useSelector(state => state.hotel.checkOutDate);

  const [searchParams, setSearchParams] = useState({
    checkInDate: null,
    checkOutDate: null,
    adults: 1,
    children: 0,
    minPrice: 0,
    maxPrice: 300,
    kitchen: false,
    wifi: false,
  });

  useEffect(() => {
    setSearchParams(prev => ({
      ...prev,
      checkInDate,
      checkOutDate
    }));
  }, [checkInDate, checkOutDate]);

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
    console.log("Rooms:", rooms);
    const uniqueRooms = getUniqueRoomTypes(rooms);
    setFilteredRoomsUI(uniqueRooms);
  }, [rooms]);

  useEffect(() => {
    console.log("Updated Search Params:", searchParams);
  }, [searchParams]);

  const handlePriceChange = (minPrice, maxPrice) => {
    setSearchParams(prev => ({
      ...prev,
      minPrice,
      maxPrice
    }));
  };

  const handleServiceChange = (name, checked) => {
    console.log("Service Change:", name, checked);
    setSearchParams(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleGuestChange = (newAdults, newChildren) => {
    setAdults(newAdults);
    setChildren(newChildren);
    setSearchParams(prev => ({
      ...prev,
      adults: newAdults,
      children: newChildren
    }));
    dispatch(setGuests({ adults: newAdults, children: newChildren }));
  };

  const handleCheckInChange = (date) => {
    setSearchParams(prev => ({
      ...prev,
      checkInDate: date
    }));
  };

  const handleCheckOutChange = (date) => {
    setSearchParams(prev => ({
      ...prev,
      checkOutDate: date
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Search Params:", searchParams);  
    console.log("Rooms:", rooms);

    dispatch(setGuests({ adults, children }));

    const filtered = rooms.filter(room => {
      const withinPriceRange = room.price_per_night >= searchParams.minPrice && room.price_per_night <= searchParams.maxPrice;
      const hasKitchen = !searchParams.kitchen || room.kitchen;
      const hasWifi = !searchParams.wifi || room.wifi;
      const meetsGuestRequirements = room.maxPersons.adults >= searchParams.adults &&
                                   room.maxPersons.children >= searchParams.children;
      return withinPriceRange && hasKitchen && hasWifi && meetsGuestRequirements;
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
        <Link to="/rooms" className="custom-hover text-sm text-oceanBlue">Rooms</Link>
      </nav>

      {/* Title*/}
      <section>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold mb-8'>Rooms & Suits</h1>
      </section>

      {/* Search*/}
      <section className='flex items-center'>
        <form onSubmit={handleSearch} className='flex flex-wrap gap-4 items-center justify-between w-full' >
          {/* Filters*/}
          <CheckInPicker />
          <CheckOutPicker />
          <GuestControl
            adults={adults}
            children={children}
            onIncrementAdult={() => handleGuestChange(adults + 1, children)}
            onDecrementAdult={() => handleGuestChange(adults - 1, children)}
            onIncrementChild={() => handleGuestChange(adults, children + 1)}
            onDecrementChild={() => handleGuestChange(adults, children - 1)}
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
          {/* Buttons*/}
          <div className='flex'>
            <Button type="submit" label="Filter" variant="text" />
            <Button onClick={() => setFilteredRoomsUI(null)} label="All" variant="text" />
          </div>
        </form>

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
