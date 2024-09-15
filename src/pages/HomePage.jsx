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
            <section className='max-w-6xl flex flex-col gap-18'>
                <AboutHotel />
                <div>
                    <h1 className='text-lightpink font-playfair text-4xl font-semibold text-center'>We heard them say..</h1>
                    <Comments />
                </div>
                <RoomTypes />
                <div>
                    <h1 className='text-lightpink font-playfair text-4xl font-semibold text-center'>Location</h1>
                    <HotelLocation /></div>
            </section>
        </main>
    )
}
