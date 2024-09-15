import React from 'react'
import Button from '../shared/button'

export default function HotelPolicy() {
    return (
        <>
            <h3 className='text-lightpink font-playfair text-xl font-semibold'>Things To Know</h3>
            <div className='gap-8 border-b-2 px-6 pb-8'>
                <div className='flex gap-8 mb-8'>
                    <div>
                        <h3 className='font-playfair text-xl font-semibold mb-6'>House Rules</h3>
                        <ul className='font-light text-sm space-y-2'>
                            <li>Check-in : 2:00 pm - 11:00 pm</li>
                            <li>Check-out until : 12:00 pm</li>
                            <li>No pets allowed</li>
                            <Button to="/" label="Show more" variant="text"/>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-playfair text-xl font-semibold mb-6'>Safety & Property</h3>
                        <ul className='font-light text-sm space-y-2'>
                            <li>Smoke alarm installed</li>
                            <li>Pets are not allowed</li>
                            <li>No Carbon monoxide alarm</li>
                            <Button to="/" label="Show more" variant="text"/>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='font-playfair text-xl font-semibold mb-6'>Cancellation Policy</h3>
                    <ul className='font-light text-sm space-y-2'>
                        <li>Free cancellation if done 24-72 hours or more before arrival. As the arrival date approaches, the cancellation window gets smaller, and penalties apply. Cancelling within 24 hours of arrival or being a no-show often forfeits the entire stay and provides no refund. </li>
                        <Button to="/" label="Show more" variant="text"/>
                    </ul>
                </div>
            </div>
            <h3 className='text-lightpink font-playfair text-xl font-semibold'>Need Help in Booking?</h3>
            <div className='gap-2 px-6 pb-8'>
                <h3 className='font-playfair text-xl font-semibold mb-6'>Contact : </h3>
                <ul className='font-light text-sm space-y-2'>
                    <li>Phone : +90 555 444 33 22</li>
                    <li>Email : hotel@hotel.com</li>
                </ul>
            </div>
        </>
    )
}
