import React from 'react';
import CheckInPicker from '../../shared/CheckInPicker';
import CheckOutPicker from '../../shared/CheckOutPicker';
import GuestControl from '../../shared/GuestControl';
import Button from '../../shared/CustomButton';

const BREAKFAST_COST = 200;
const TAX_RATE = 0.2;

export default function ReservationBox ({ roomDetails, nights, addBreakfast, setAddBreakfast, adults, children }){
    const roomPrice = roomDetails ? roomDetails.price_per_night : 0;
    const totalRoomCost = roomPrice * nights;
    const breakfastCost = addBreakfast ? BREAKFAST_COST * nights : 0;
    const taxes = totalRoomCost * TAX_RATE;
    const finalTotal = totalRoomCost + breakfastCost + taxes;

    return (
        <div className='md:w-2/5 border-2 rounded-2xl p-8 h-full'>
            <p className='font-semibold text-xl font-playfair'>${roomPrice} per night</p>
            <div className='border-y-2 p-4 h-auto m-4 flex flex-col items-center'>
                <div className='flex items-center border-b pb-4 mb-4'>
                    <CheckInPicker />
                    <CheckOutPicker />
                </div>
                <GuestControl
                    adults={adults}
                    children={children}
                    onIncrementAdult={() => setAdults(adults + 1)}
                    onDecrementAdult={() => setAdults(adults - 1)}
                    onIncrementChild={() => setChildren(children + 1)}
                    onDecrementChild={() => setChildren(children - 1)}
                />
            </div>
            <div className='flex flex-col gap-4 text-sm'>
                <Button to="/payment" label="Book Now" variant="filled" />
                <div className='flex justify-between'>
                    <p>${roomPrice} x {nights} nights</p>
                    <p>${totalRoomCost}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Taxes</p>
                    <p>${taxes}</p>
                </div>
                <div className='flex justify-between border-b pb-4'>
                    <label>
                        <input
                            type="checkbox"
                            className='custom-checkbox'
                            checked={addBreakfast}
                            onChange={() => setAddBreakfast(!addBreakfast)}
                        />
                        <span className="ml-2">Add Breakfast</span>
                        <p className='mt-1 text-xs font-light'>( $200 x {nights} nights )</p>
                    </label>
                    <p>${breakfastCost}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-medium text-lg'>Total</p>
                    <p className='font-medium text-lg'>${finalTotal}</p>
                </div>
            </div>
        </div>
    );
};

