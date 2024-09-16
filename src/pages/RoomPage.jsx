import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import RoomCard from '../cards/RoomCard';
import 'react-datepicker/dist/react-datepicker.css';
import GuestControl from '../ui/GuestControl';
import PriceSlider from '../ui/PriceSlider';
import ServiceFilter from '../ui/ServiceFilter';
import CheckInPicker from '../ui/CheckInPicker';
import CheckOutPicker from '../ui/CheckOutPicker';
import { setFilteredRooms, setGuests, setCheckInDate, setCheckOutDate } from '../store/hotelSlice';
import Breadcrumbs from '../ui/Breadcrumbs';
import CustomButton from '../ui/CustomButton';

const MIN_PRICE = 0;
const MAX_PRICE = 300;

const getUniqueRoomTypes = (rooms) => {
  const roomTypesMap = {};
  rooms.forEach(room => {
    if (!roomTypesMap[room.type]) {
      roomTypesMap[room.type] = room;
    }
  });
  return Object.values(roomTypesMap);
};

const breadcrumbTrail = [
  { label: 'Home', to: '/' },
  { label: 'Rooms', to: '/rooms' }
];

export default function RoomPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { rooms, adults, children, filteredRooms } = useSelector(state => state.hotel);

  const [filterCriteria, setFilterCriteria] = useState({
    minPrice: MIN_PRICE,
    maxPrice: MAX_PRICE,
    kitchen: false,
    wifi: false
  });

  const handlePriceChange = (minPrice, maxPrice) => {
    setFilterCriteria(prev => ({
      ...prev,
      minPrice,
      maxPrice,
    }));
  };

  const handleServiceChange = (name, value) => {
    setFilterCriteria(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterByPrice = (room) => room.price_per_night >= filterCriteria.minPrice && room.price_per_night <= filterCriteria.maxPrice;
  const filterByServices = (room) => (!filterCriteria.kitchen || room.kitchen) && (!filterCriteria.wifi || room.wifi);
  const filterByAvailability = (room) => room.availability === "Available";
  const filterByGuests = (room) => room.maxPersons.adults >= adults && room.maxPersons.children >= children;

  const filterRooms = (e) => {
    e.preventDefault();
    const filtered = rooms.filter(room =>
      filterByPrice(room) &&
      filterByServices(room) &&
      filterByAvailability(room) &&
      filterByGuests(room)
    );
    dispatch(setFilteredRooms(getUniqueRoomTypes(filtered)));
  };

  const handleBookNow = (room) => {
    dispatch(setFilteredRooms([room]));
    history.push(`/rooms/reservation?roomType=${room.type}`);
  };

  const roomsToDisplay = filteredRooms.length ? filteredRooms : getUniqueRoomTypes(rooms);

  const handleAllButtonClick = () => {
    setFilterCriteria({
      minPrice: MIN_PRICE,
      maxPrice: MAX_PRICE,
      kitchen: false,
      wifi: false
    });
    dispatch(setGuests({ adults: 1, children: 0 }));
    dispatch(setCheckInDate(null));
    dispatch(setCheckOutDate(null));
  };

  return (
    <div className='w-2/3 m-12 space-y-8'>
      <Breadcrumbs trail={breadcrumbTrail} />
      <section>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold mb-8'>Rooms & Suits</h1>
      </section>

      <section className='flex items-center'>
        <form onSubmit={filterRooms} className='flex flex-wrap gap-4 items-center justify-between w-full'>
          <CheckInPicker />
          <CheckOutPicker />
          <GuestControl
            adults={adults}
            children={children}
            onIncrementAdult={() => dispatch(setGuests({ adults: adults + 1, children }))}
            onDecrementAdult={() => dispatch(setGuests({ adults: adults - 1, children }))}
            onIncrementChild={() => dispatch(setGuests({ adults, children: children + 1 }))}
            onDecrementChild={() => dispatch(setGuests({ adults, children: children - 1 }))}
          />
          <PriceSlider
            minPrice={filterCriteria.minPrice}
            maxPrice={filterCriteria.maxPrice}
            onChange={handlePriceChange}
          />
          <ServiceFilter
            services={{ kitchen: filterCriteria.kitchen, wifi: filterCriteria.wifi }}
            onChange={handleServiceChange}
          />
          <div className='flex text-lg items-center'>
            <CustomButton type="submit" label="Filter" variant="text" />
            <CustomButton onClick={handleAllButtonClick} label="All" variant="text" />
          </div>
        </form>
      </section>

      <section className='flex flex-col flex-wrap gap-4'>
        {roomsToDisplay.map(room => (
          <RoomCard key={room.id} roomDetails={room} onBookNow={() => handleBookNow(room)} />
        ))}
      </section>
    </div>
  );
}
