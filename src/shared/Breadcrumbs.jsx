import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs() {
    return (
        <nav className='flex gap-2 items-center'>
            <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <Link to="/rooms" className="custom-hover text-gray-500 text-sm">Rooms</Link>
            <i className="fa-solid fa-chevron-right" />
            <Link to="/rooms/id" className="custom-hover text-sm text-oceanBlue">Reservation</Link>
        </nav>
    );
}

