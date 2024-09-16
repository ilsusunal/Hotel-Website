import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import RoomDetails from '../components/reservation/RoomDetails';
import Button from '../shared/button';
import ReservationBox from '../components/reservation/ReservationBox';
import Breadcrumbs from '../shared/Breadcrumbs';
import AvailableRoomsHeader from '../components/reservation/AvailableRoomsHeader';
import RoomImageGallery from '../components/reservation/RoomImageGallery';
import RoomTypeSelector from '../components/reservation/RoomTypeSelector';

const calculateNights = (checkInDate, checkOutDate) => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    return Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
};

const breadcrumbTrail = [
    { label: 'Home', to: '/' },
    { label: 'Rooms', to: '/rooms' },
    { label: 'Reservation', to: '/rooms/reservation' }
];

export default function RoomReservationPage() {
    const history = useHistory();
    const { filteredRooms, checkInDate, checkOutDate, adults, children } = useSelector(state => state.hotel);

    const roomTypes = [...new Set(filteredRooms.map(room => room.type))];
    const [selectedType, setSelectedType] = useState(roomTypes[0] || '');
    const roomsByType = filteredRooms.filter(room => room.type === selectedType);
    const roomDetails = roomsByType.length > 0 ? roomsByType[0] : null;
    const [addBreakfast, setAddBreakfast] = useState(false);

    useEffect(() => {
        if (!filteredRooms || filteredRooms.length === 0) {
            history.push('/rooms');
        }
    }, [filteredRooms, history]);

    useEffect(() => {
        if (filteredRooms.length > 0) {
            setSelectedType(filteredRooms[0].type);
        }
    }, [filteredRooms]);

    if (!filteredRooms || filteredRooms.length === 0) {
        return "Loading...";
    }

    const nights = calculateNights(checkInDate, checkOutDate);

    return (
        <div className='w-2/3 m-12 space-y-8'>
            <Breadcrumbs trail={breadcrumbTrail} />
            <AvailableRoomsHeader roomDetails={roomDetails} />
            <div className='flex justify-between mb-8'>
                <RoomTypeSelector
                    roomTypes={roomTypes}
                    selectedType={selectedType}
                    onSelectType={setSelectedType}
                />
                <Button to="/payment" label="Book Now" variant="filled" />
            </div>
            <RoomImageGallery images={roomDetails.images} />
            <section className='flex flex-col md:flex-row gap-6'>
                <RoomDetails roomDetails={roomDetails} />
                <ReservationBox
                    roomDetails={roomDetails}
                    nights={nights}
                    addBreakfast={addBreakfast}
                    setAddBreakfast={setAddBreakfast}
                    adults={adults}
                    children={children}
                />
            </section>
        </div>
    )
}
