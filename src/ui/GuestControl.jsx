import React, { useState, useRef, useEffect } from 'react';

const MIN_ADULTS = 1;
const MIN_CHILDREN = 0;

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
        <div className="flex flex-col items-center relative text-xs md:text-sm" ref={dropdownRef}>
            <div className="flex flex-col text-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className='flex gap-2'>
                    <i className="fa-solid fa-user-group text-oceanBlue" />
                    <p className=" font-semibold">Guests</p>
                </div>
                <p className='font-light mt-1'> ( {totalPeople} )</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white border-stone-200 border-2 rounded-2xl mt-2 p-4 w-52 top-12 z-10">
                    <GuestControlSection
                        label="Adults"
                        count={adults}
                        onIncrease={onIncrementAdult}
                        onDecrease={onDecrementAdult}
                        minCount={MIN_ADULTS}
                    />
                    <GuestControlSection
                        label="Children"
                        count={children}
                        onIncrease={onIncrementChild}
                        onDecrease={onDecrementChild}
                        minCount={MIN_CHILDREN}
                    />
                </div>
            )}
        </div>
    );
};

const GuestControlSection = ({ label, count, onIncrease, onDecrease, minCount }) => (
    <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold">{label}</p>
        <div className="flex items-center space-x-2">
            <button
                type="button"
                onClick={onDecrease}
                disabled={count === minCount}
                className="w-6 h-6 bg-oceanBlue/50 hover:bg-oceanBlue hover:text-white rounded-full text-center text-xs"
            >
                -
            </button>
            <span>{count}</span>
            <button
                type="button"
                onClick={onIncrease}
                className="w-6 h-6 bg-oceanBlue/50 hover:bg-oceanBlue hover:text-white rounded-full text-center"
            >
                +
            </button>
        </div>
    </div>
);


export default GuestControl;
