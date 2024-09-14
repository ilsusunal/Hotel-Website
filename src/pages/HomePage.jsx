import React from 'react'
import Slider from '../components/Slider'
import AboutHotel from '../components/AboutHotel'
import Comments from '../components/Comments'

export default function
    () {
    return (
        <main className='flex flex-col items-center'>
            <Slider />
            {/* RoomSearch */}
            <section className='max-w-6xl'>
                <AboutHotel/>
                <Comments/>
                {/* Rooms (RoomCard) */}
                {/* Location */}
            </section>
        </main>
    )
}
