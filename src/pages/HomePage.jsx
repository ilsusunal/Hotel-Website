import React from 'react'
import Slider from '../components/Slider'
import AboutHotel from '../components/AboutHotel'
import Comments from '../components/Comments'
import RoomTypes from '../components/RoomTypes'
import HotelLocation from '../components/HotelLocation'
import RoomSearch from '../components/RoomSearch'

export default function
    () {
    return (
        <main className='flex flex-col items-center'>
            <Slider />
            <RoomSearch/>
            <section className='max-w-6xl'>
                <AboutHotel/>
                <Comments/>
                <RoomTypes/>
                <HotelLocation/>
            </section>
        </main>
    )
}
