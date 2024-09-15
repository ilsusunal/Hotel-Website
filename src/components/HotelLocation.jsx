import React from 'react'
import Pool from "/Pool.jpg"

export default function HotelLocation() {
  return (
    <div className='flex flex-col gap-12 my-16 p-8'>
      <section className='md:flex gap-24 justify-center'>
        <img src={Pool} alt="Map" className='w-1/2 rounded-2xl'/>
        <div className='flex md:flex-col md:space-y-24 justify-around my-4'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-medium font-playfair'>Address : </h2>
            <p className='md:text-base text-sm'>1010. Sk No:5</p>
            <p className='md:text-base text-sm'>Çeşme, İzmir</p>
            <p className='md:text-base text-sm'>Postal Code: 35930</p>
          </div>
          <div className='space-y-2'>
            <h2 className='text-2xl font-medium font-playfair'>Contact : </h2>
            <p className='md:text-base text-sm'>Phone : +90 555 444 33 22</p>
            <p className='md:text-base text-sm'>Email : hotel@hotel.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
