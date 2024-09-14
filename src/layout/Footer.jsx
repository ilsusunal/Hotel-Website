import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='w-full p-4 md:p-12 bg-darkPink/50'>
            <section className='flex flex-wrap gap-4 justify-around md:px-8'>
                {/* Hotel Name and Logo */}
                <div className='flex flex-col gap-4 items-center'>
                    <i className="fa-solid fa-hotel" />
                    <h1 className='text-2xl font-medium'>SomeHotel</h1>
                </div>
                {/* About */}
                <div className='hidden md:block max-w-80'>
                    <h1 className='font-medium text-lg mb-4'>About</h1>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                {/* Menü */}
                <div>
                    <h1 className='font-medium text-lg mb-4'>Menu</h1>
                    <Link to="/" className="custom-hover block font-light my-2">Home</Link>
                    <Link to="/about" className="custom-hover block font-light my-2">About</Link>
                    <Link to="/rooms" className="custom-hover block font-light my-2">Rooms</Link>
                    <Link to="/contact" className="custom-hover block font-light my-2">Contact</Link>
                </div>
                {/* Contact and Socials */}
                <div>
                    <h1 className='font-medium text-lg mb-4'>Contact </h1>
                    <ul className="font-light">
                        <li className='my-2'><a href="/">somehotel@hotel.com</a></li>
                        <li><a href="/">+90 5554443322</a></li>
                    </ul>
                    <h1 className='font-medium text-lg mb-4 mt-8'>Follow Us</h1>
                    <ul className="gap-4 font-light flex">
                        <li><a href="/"><i className="fa-brands fa-instagram" /></a></li>
                        <li><a href="/"><i className="fa-brands fa-youtube" /></a></li>
                        <li><a href="/"><i className="fa-brands fa-facebook" /></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter" /></a></li>
                    </ul>
                </div>
            </section>
            <section className='mt-12'>
                <p className='text-center'>Created with love by İlsu @2024</p>
            </section>
        </footer>
    )
}
