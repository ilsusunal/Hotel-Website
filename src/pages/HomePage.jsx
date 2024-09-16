import React from 'react'
import Slider from '../components/home/Slider'
import AboutHotel from '../components/home/AboutHotel'
import Comments from '../components/common/Comments'
import RoomTypes from '../components/home/RoomTypes'
import HotelLocation from '../components/common/HotelLocation'
import RoomSearch from '../components/home/RoomSearch'

export default function
    () {
    return (
        <main className='flex flex-col items-center'>
            <section className="relative w-full">
                <Slider />
                <div className="md:absolute top-2 md:top-1/4 left-0 w-full flex justify-center">
                    <RoomSearch />
                </div>
            </section>
            <section className='max-w-6xl flex flex-col gap-4 md:gap-18'>
                <AboutHotel />
                <div>
                    <h1 className='text-sunsetCoral font-playfair text-4xl font-semibold text-center'>We heard them say..</h1>
                    <Comments />
                </div>
                <RoomTypes />
                <div>
                    <h1 className='text-sunsetCoral font-playfair text-4xl font-semibold text-center'>Location</h1>
                    <HotelLocation /></div>
            </section>
        </main>
    )
}
