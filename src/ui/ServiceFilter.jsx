import React, { useState, useRef, useEffect } from 'react';

const ServiceFilter = ({ services, onChange }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [totalChecked, setTotalChecked] = useState(0);
    const dropdownRef = useRef(null);

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

    useEffect(() => {
        setTotalChecked(Object.values(services).filter(service => service).length);
    }, [services]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        onChange(name, checked);
        setTotalChecked(prevTotal =>
            checked ? prevTotal + 1 : prevTotal - 1
        );
    };

    return (
        <div className="flex flex-col items-center relative text-xs md:text-sm" ref={dropdownRef}>
            <div className='flex flex-col items-center' onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className='flex gap-2'>
                    <i className="fa-solid fa-bell-concierge text-oceanBlue" />
                    <p className=" font-semibold cursor-pointer" >
                        Services
                    </p>
                </div>
                <p className='font-light mt-1'>( {totalChecked} )</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white border-stone-200 border-2 rounded-2xl mt-2 p-4 w-40 top-12 z-10">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <p className="font-semibold">Kitchen</p>
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                name="kitchen"
                                checked={services.kitchen}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Free WiFi</p>
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                name="wifi"
                                checked={services.wifi}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceFilter;
