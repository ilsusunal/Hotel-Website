import React from 'react';

const services = [
    {
        icon: "fa-utensils",
        title: "Restaurant",
        description: "Enjoy a delightful dining experience at our on-site restaurant, offering a range of gourmet dishes and beverages."
    },
    {
        icon: "fa-swimmer",
        title: "Pool",
        description: "Relax and unwind in our luxurious swimming pool, perfect for a refreshing dip or lounging under the sun."
    },
    {
        icon: "fa-spa",
        title: "Spa",
        description: "Rejuvenate your senses with our world-class spa services, including massages, facials, and wellness treatments."
    },
    {
        icon: "fa-table-tennis-paddle-ball",
        title: "Fitness Center",
        description: "Stay active during your stay with access to our fully equipped fitness center, featuring modern workout equipment."
    }
];

const Services = () => (
    <section className="py-16">
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold text-center pb-16'>Services</h1>
        <div className='flex flex-wrap gap-2 justify-around text-stone-400 py-8'>
            {services.map((service, index) => (
                <div 
                    key={index}
                    className='flex flex-col items-center hover:text-oceanBlue border-2 rounded-xl border-stone-100 p-4 hover:border-oceanBlue/50'
                >
                    <i className={`fa-solid ${service.icon} fa-2x mb-2`} />
                    <p className='mt-2 text-center my-4 font-medium'>{service.title}</p>
                    <p className='mt-2 text-center font-light max-w-44'>{service.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services;
