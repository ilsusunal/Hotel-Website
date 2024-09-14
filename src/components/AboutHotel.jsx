import React from 'react'
import Pool from "/Pool.jpg"

export default function
    () {
    return (
        <section className='flex flex-col md:flex-row items-center gap-12 my-16 p-8'>
            <div className='md:w-1/2 space-y-8'>
                <h1 className='text-lightpink font-playfair text-4xl font-semibold'>Hotel İzmir</h1>
                <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button>About Us</button>
            </div>
            <img src={Pool} alt="Some Hotel" className='md:w-1/2 h-auto rounded-2xl'/>
        </section>
    )
}
