import React from 'react'
import Pool from "/Pool.jpg"
import CustomButton from '../../ui/CustomButton'

export default function AboutHotel() {
    return (
        <section className='flex flex-col md:flex-row items-center gap-12 my-20 p-8'>
            <div className='md:w-1/2 space-y-8'>
                <h1 className='text-sunsetCoral font-playfair text-4xl font-semibold'>Hotel İzmir</h1>
                <p className='font-light max-w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <CustomButton to="/about" label="About Us" variant="accent" />
            </div>
            <div className="relative p-4 md:w-1/2 h-auto">
                <div className="absolute w-full h-full bg-sandyBeige/20 rounded-2xl rotate-6 top-2 left-4"></div>
                <img src={Pool} alt="Some Hotel" className="w-full h-auto rounded-2xl shadow-lg relative z-10" />
            </div>
        </section>
    )
}
