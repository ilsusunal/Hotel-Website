import React, { useState, useRef, useEffect } from 'react';

const ServiceFilter = ({ services, onChange }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    let totalChecked = 0;

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

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        onChange(name, checked);
        if(!checked && totalChecked >= 0){
            totalChecked--;
        } else{
            totalChecked++;
        }
    };

    

    return (
        <div className="flex flex-col items-center relative" ref={dropdownRef}>
            <div className='flex flex-col items-center' onClick={() => setDropdownOpen(!dropdownOpen)}>
                <i className="fa-solid fa-bell-concierge" />
                <label className="text-sm font-semibold cursor-pointer" >
                    Services
                </label>
                <p>{totalChecked}</p>
            </div>
            {dropdownOpen && (
                <div className="absolute bg-white rounded-lg border-2 mt-2 p-4 w-40 top-12 z-10">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-semibold">Kitchen</label>
                            <input
                                type="checkbox"
                                name="kitchen"
                                checked={services.kitchen}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div className="flex justify-between">
                            <label className="text-sm font-semibold">Free WiFi</label>
                            <input
                                type="checkbox"
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
