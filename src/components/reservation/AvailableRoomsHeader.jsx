import React from 'react';

export default function AvailableRoomsHeader({ roomDetails }){
    return(
    <section className='space-y-4'>
        <div className='flex justify-between mb-8'>
            <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold'>Available Rooms</h1>
            <div className='flex gap-4 items-end'>
                <p className='font-playfair text-3xl font-semibold'>${roomDetails.price_per_night}</p>
                <p>per night</p>
            </div>
        </div>
    </section>
    );
};

