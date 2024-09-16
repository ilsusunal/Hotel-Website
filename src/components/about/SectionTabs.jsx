import React from 'react';

const SectionTabs = ({ items, selectedSection, onSelect }) => (
    <div className='flex justify-between mb-8'>
        <ul className='flex gap-8 list-none cursor-pointer'>
            {items.map((item, index) => (
                <li 
                    key={index}
                    className={`custom-hover ${selectedSection === item.name ? 'active' : ''}`}
                    onClick={() => onSelect(item.name)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
);

export default SectionTabs;
