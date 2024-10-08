import React, { useState, useRef, useEffect } from 'react';

const DEFAULT_MIN_PRICE = 100;
const DEFAULT_MAX_PRICE = 300;

const useClickOutside = (handler) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handler]);

    return ref;
};

const PriceSlider = ({ minPrice = DEFAULT_MIN_PRICE, maxPrice = DEFAULT_MAX_PRICE, onChange }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);
    const dropdownRef = useClickOutside(() => setDropdownOpen(false));

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
        onChange(value, maxValue);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
        onChange(minValue, value);
    };

    return (
        <div className="flex flex-col items-center relative text-xs md:text-sm" ref={dropdownRef}>
            <div className='flex flex-col items-center' onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className='flex gap-2'>
                    <i className="fa-regular fa-credit-card text-oceanBlue" />
                    <p className=" font-semibold cursor-pointer" >
                        Price Range
                    </p>
                </div>
                <p className='font-light mt-1'>( {minValue} - {maxValue} )</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white border-stone-200 border-2 rounded-2xl mt-2 p-4 w-80 top-12 z-10">
                    <div >
                        <span>${minValue}</span>
                        <input
                            type="range"
                            min="100"
                            max="300"
                            value={minValue}
                            onChange={handleMinChange}
                            className="slider"
                        />
                        <input
                            type="range"
                            min="100"
                            max="300"
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="slider"
                        /><span>${maxValue}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriceSlider;
