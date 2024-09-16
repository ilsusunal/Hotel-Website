import React, { useEffect, useState } from 'react'
import Bar from "/Bar.jpg"
import Pool from "/Pool.jpg"
import Service from "/Service.jpg"

export default function Slider() {
    const images = [
        { id: 1, image: Pool },
        { id: 2, image: Service },
        { id: 3, image: Bar },
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className='relative w-full overflow-hidden'>
            {/* Images */}
            <div className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="w-full max-h-[calc(100vh-64px)] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex-shrink-0"
                    >
                        <img
                            src={image.image}
                            alt={`Slide ${image.id}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* Dots (at the bottom of images) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${index === activeIndex ? 'bg-white' : 'border-2 border-white'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </main>
    )
}
