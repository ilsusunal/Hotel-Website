import React from 'react';

export default function RoomImageGallery({ images }) {
    return (
        <section className='grid grid-cols-2 gap-2 grid-rows-3 h-80 md:grid-cols-5 md:grid-rows-2'>
            <img
                src={images[0]}
                alt="Room Image 1"
                className='col-span-2 row-span-1 object-cover w-full h-full rounded md:col-span-3 md:row-span-2'
            />
            {images.slice(1, 3).map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Room Image ${index + 2}`}
                    className='hidden md:block object-cover w-full h-full rounded'
                />
            ))}
            {images.slice(3, 5).map((image, index) => (
                <img
                    key={index + 2}
                    src={image}
                    alt={`Room Image ${index + 4}`}
                    className='hidden md:block object-cover w-full h-full rounded'
                />
            ))}
            {images.slice(1, 3).map((image, index) => (
                <img
                    key={index + 4}
                    src={image}
                    alt={`Room Image ${index + 2}`}
                    className='block md:hidden col-span-1 row-span-1 object-cover w-full h-full rounded'
                />
            ))}
            {images.slice(3, 5).map((image, index) => (
                <img
                    key={index + 6}
                    src={image}
                    alt={`Room Image ${index + 4}`}
                    className='block md:hidden col-span-1 row-span-1 object-cover w-full h-full rounded'
                />
            ))}
        </section>
    );
}
