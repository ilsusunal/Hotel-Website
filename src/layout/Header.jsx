import React, { useState, useEffect } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import HotelLogo from "/hotel-izmir-logo.png";

export default function Header() {
    const [hamburger, setHamburger] = useState(false);
    const location = useLocation();

    const handleHamburger = () => {
        if (!hamburger) {
            setHamburger(true);
        } else {
            setHamburger(false);
        }
    }

    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/') ? 'active' : '';
    };

    useEffect(() => {
    }, [location]);

    return (
        <header className='w-full bg-stone-100 font-semibold'>
            <div className='flex justify-around items-center py-8 px-4'>
                <section className='flex gap-4 items-center text-oceanBlue'>
                    <img src={HotelLogo} alt="Hotel İzmir" className='w-12 h-auto'/>
                    <h1 className='text-2xl font-playfair '>Hotel İzmir</h1>
                </section>
                {/* Desktop Nav */}
                <nav className='hidden md:flex gap-8 items-center font-normal'>
                    <Link to="/" className={`custom-hover ${isActive('/')}`}>Home</Link>
                    <Link to="/about" className={`custom-hover ${isActive('/about')}`}>About</Link>
                    <Link to="/rooms" className={`custom-hover ${isActive('/rooms')}`}>Rooms</Link>
                    <Link to="/contact" className={`custom-hover ${isActive('/contact')}`}>Contact</Link>
                </nav>
                {/* Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center p-2"
                    onClick={handleHamburger}
                >
                    <i className={`fa-solid fa-${hamburger ? 'xmark' : 'bars'}`} />
                </button>
            </div>
            {/* Mobile Nav */}
            <nav className={`${hamburger ? 'flex' : 'hidden'} md:hidden flex-col items-center w-full bg-stone-100`}>
                <Link to="/" className={`custom-hover py-2 ${isActive('/')}`}>Home</Link>
                <Link to="/about" className={`custom-hover py-2 ${isActive('/about')}`}>About</Link>
                <Link to="/rooms" className={`custom-hover py-2 ${isActive('/rooms')}`}>Rooms</Link>
                <Link to="/contact" className={`custom-hover py-2 ${isActive('/contact')}`}>Contact</Link>
            </nav>
        </header>
    )
}
