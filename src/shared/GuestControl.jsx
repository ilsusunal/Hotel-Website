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
                <i className="fa-solid fa-user-group" />
                <label className="text-sm font-semibold">Guests</label>
                <p >{totalPeople}</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white rounded-lg border-2 mt-2 p-4 w-40 top-12 z-10">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-semibold">Adults</label>
                        <div className="flex items-center space-x-2">
                            <button
                                type="button"
                                onClick={onDecrementAdult}
                                disabled={adults === 1}
                                className="w-6 h-6 bg-gray-300 rounded-full text-center"
                            >
                                -
                            </button>
                            <span>{adults}</span>
                            <button
                                type="button"
                                onClick={onIncrementAdult}
                                className="w-6 h-6 bg-gray-300 rounded-full text-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold">Children</label>
                        <div className="flex items-center space-x-2">
                            <button
                                type="button"
                                onClick={onDecrementChild}
                                disabled={children === 0}
                                className="w-6 h-6 bg-gray-300 rounded-full text-center"
                            >
                                -
                            </button>
                            <span>{children}</span>
                            <button
                                type="button"
                                onClick={onIncrementChild}
                                className="w-6 h-6 bg-gray-300 rounded-full text-center"
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
