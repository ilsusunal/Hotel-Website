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
            <section className="relative w-full">
                <Slider />
                <div className="absolute top-2 md:top-1/4 left-0 w-full flex justify-center">
                    <RoomSearch />
                </div>
            </section>
            <section className='max-w-6xl'>
                <AboutHotel/>
                <Comments/>
                <RoomTypes/>
                <HotelLocation/>
            </section>
        </main>
    )
}
