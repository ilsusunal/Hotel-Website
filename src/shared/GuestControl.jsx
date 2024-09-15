import React, { useState, useRef, useEffect } from 'react';

const GuestControl = ({ adults, children, onIncrementAdult, onDecrementAdult, onIncrementChild, onDecrementChild }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    let totalPeople = adults + children;

    return (
        <div className="flex flex-col items-center relative" ref={dropdownRef}>
            <div className="flex flex-col text-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className='flex gap-2'>
                    <i className="fa-solid fa-user-group text-oceanBlue" />
                    <p className="text-sm font-semibold">Guests</p>
                </div>
                <p className='font-light text-sm mt-1'> ( {totalPeople} )</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white border-stone-200 border-2 rounded-2xl mt-2 p-4 w-52 top-12 z-10">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold">Adults</p>
                        <div className="flex justify-end items-center space-x-2">
                            <button
                                type="button"
                                onClick={onDecrementAdult}
                                disabled={adults === 1}
                                className="w-6 h-6 bg-oceanBlue/50 hover:bg-oceanBlue hover:text-white rounded-full text-center text-xs"
                            >
                                -
                            </button>
                            <span>{adults}</span>
                            <button
                                type="button"
                                onClick={onIncrementAdult}
                                className="w-6 h-6 bg-oceanBlue/50 hover:bg-oceanBlue hover:text-white rounded-full text-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">Children</p>
                        <div className="flex items-center space-x-2">
                            <button
                                type="button"
                                onClick={onDecrementChild}
                                disabled={children === 0}
                                className="w-6 h-6 bg-oceanBlue/50 hover:bg-oceanBlue hover:text-white rounded-full text-center"
                            >
                                -
                            </button>
                            <span>{children}</span>
                            <button
                                type="button"
                                onClick={onIncrementChild}
                                className="w-6 h-6 bg-oceanBlue/50 hover:bg-oceanBlue hover:text-white rounded-full text-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuestControl;
