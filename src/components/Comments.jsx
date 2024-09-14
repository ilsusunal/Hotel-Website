import React from 'react'

export default function Comments() {
    return (
        <section className='flex flex-col gap-12 my-16 p-8'>
            <h1 className='text-lightpink text-3xl font-semibold text-center'>We heard them say..</h1>
            <div className='bg-darkPink/10 rounded-2xl flex items-center p-12 gap-16'>
                <div className='flex-grow'>
                    <p>
                        <img src="" alt="" />4,7
                    </p>
                    <p className='font-light text-sm'>Based on 
                        <a href="" className='underline italic'>502 reviews</a>
                    </p>
                </div>
                <p className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='flex justify-around'>
                <img src="" alt="Customer" className='w-24 h-24 rounded-full bg-black' />
                <img src="" alt="Customer" className='w-24 h-24 rounded-full bg-black' />
                <img src="" alt="Customer" className='w-24 h-24 rounded-full bg-black' />
                <img src="" alt="Customer" className='w-24 h-24 rounded-full bg-black' />
            </div>
        </section>
    )
}
