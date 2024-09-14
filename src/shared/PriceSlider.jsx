import React, { useState, useRef, useEffect } from 'react';

const PriceSlider = ({ minPrice, maxPrice, onChange }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);
    const dropdownRef = useRef(null);

    // Close dropdown if clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

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
        <div className="flex flex-col items-center relative" ref={dropdownRef}>
            <div className='flex flex-col items-center' onClick={() => setDropdownOpen(!dropdownOpen)}>
                <i className="fa-regular fa-credit-card" />
                <label className="text-sm font-semibold cursor-pointer" >
                    Price Range
                </label>
                <p>{minValue} - {maxValue}</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white rounded-lg border-2 mt-2 p-4 w-80 top-12 z-10">
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
