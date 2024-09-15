import React from 'react';

export default function RoomTypeSelector({ roomTypes, selectedType, onSelectType }) {
    return (
        <nav className='flex gap-8 list-none cursor-pointer'>
            {roomTypes.length > 0 ? (
                roomTypes.map((type, index) => (
                    <li
                        key={index}
                        className={`custom-hover ${selectedType === type ? 'active' : ''}`}
                        onClick={() => onSelectType(type)}
                    >
                        {type}
                    </li>
                ))
            ) : (
                <li>No rooms available</li>
            )}
        </nav>)
};
