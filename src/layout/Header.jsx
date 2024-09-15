import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [hamburger, setHamburger] = useState(false);
    const [shopDropdown, setShopDropdown] = useState(false);

    const handleHamburger = () => {
        if (!hamburger) {
            setHamburger(true);
        } else {
            setHamburger(false);
        }
    }
    const toggleShopDropdown = () => {
        setShopDropdown(!shopDropdown);
    };

    return (
        <header className='w-full bg-stone-50 font-semibold'>
            <div className='flex justify-around items-center py-8 px-4'>
                <section className='flex gap-4 items-center'>
                    <i className="fa-solid fa-hotel" />
                    <h1 className='text-2xl'>Hotel İzmir</h1>
                </section>
                {/* Desktop Nav */}
                <nav className='hidden md:flex gap-8 items-center'>
                    <Link to="/" className="custom-hover">Home</Link>
                    <Link to="/about" className="custom-hover">About</Link>
                    <Link to="/rooms" className="custom-hover">Rooms</Link>
                    <Link to="/contact" className="custom-hover">Contact</Link>
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
            <nav className={`${hamburger ? 'flex' : 'hidden'} md:hidden flex-col items-center w-full bg-stone-50`}>
                <Link to="/" className="custom-hover py-2">Home</Link>
                <Link to="/about" className="custom-hover py-2">About</Link>
                <Link to="/rooms" className="custom-hover py-2">Rooms</Link>
                <Link to="/contact" className="custom-hover py-2">Contact</Link>
            </nav>
        </header>
    )
}
