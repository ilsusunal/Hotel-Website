import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='w-full p-4 md:px-12 md:py-8 bg-sunsetCoral/20'>
            <section className='flex flex-wrap gap-4 justify-around md:px-8 md:py-4'>
                {/* Hotel Name and Logo */}
                <div className='flex flex-col gap-4 items-center text-oceanBlue font-playfair'>
                    <i className="fa-solid fa-hotel" />
                    <h1 className='text-2xl font-medium '>Hotel İzmir</h1>
                </div>
                {/* About */}
                <div className='hidden md:block max-w-80'>
                    <h1 className='font-medium text-lg mb-4 font-playfair'>About</h1>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                {/* Menü */}
                <div>
                    <h1 className='font-medium text-lg mb-4 font-playfair'>Menu</h1>
                    <Link to="/" className="custom-hover block font-light my-2 text-sm">Home</Link>
                    <Link to="/about" className="custom-hover block font-light my-2 text-sm">About</Link>
                    <Link to="/rooms" className="custom-hover block font-light my-2 text-sm">Rooms</Link>
                    <Link to="/contact" className="custom-hover block font-light my-2 text-sm">Contact</Link>
                </div>
                {/* Contact and Socials */}
                <div>
                    <h1 className='font-medium text-lg mb-4 font-playfair'>Contact </h1>
                    <ul className="font-light">
                        <li className='my-2 text-sm'><a href="/">somehotel@hotel.com</a></li>
                        <li className='text-sm'><a href="/">+90 5554443322</a></li>
                    </ul>
                    <h1 className='font-medium text-lg mb-4 mt-8'>Follow Us</h1>
                    <ul className="gap-4 font-light flex text-sm">
                        <li><a href="/"><i className="fa-brands fa-instagram" /></a></li>
                        <li><a href="/"><i className="fa-brands fa-youtube" /></a></li>
                        <li><a href="/"><i className="fa-brands fa-facebook" /></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter" /></a></li>
                    </ul>
                </div>
            </section>
            <section className='mt-4'>
                <p className='text-center'>Created with love by İlsu @2024</p>
            </section>
        </footer>
    )
}
