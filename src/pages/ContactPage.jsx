import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import HotelLocation from '../components/common/HotelLocation'
import Breadcrumbs from "../shared/Breadcrumbs"

const breadcrumbTrail = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' }
];

export default function ContactPage() {
  return (
    <div className='w-2/3 m-12 space-y-8'>
      <Breadcrumbs trail={breadcrumbTrail} />
      <section>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold mb-8'>Get In Touch</h1>
      </section>
      <section className='flex flex-col md:flex-row items-center gap-12 my-20 md:p-8 p-2'>
        <p className='font-light md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <ContactForm />
      </section>
      <section className='py-16'>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold mb-8 text-center'>Location</h1>
        <HotelLocation />
      </section>

    </div>
  )
}
