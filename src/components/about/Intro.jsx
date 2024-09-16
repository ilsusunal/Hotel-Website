import React from 'react';

const Intro = ({ text, image }) => (
    <section className="flex flex-col md:flex-row items-center gap-12 my-20 md:p-8">
        <p className='font-light p-4 md:px-18 md:w-1/2'>{text}</p>
        <div className="relative p-2 md:w-1/2 h-auto">
            <div className="absolute w-full h-full bg-sandyBeige/20 rounded-2xl rotate-6 top-2 left-1"></div>
            <img src={image} alt="Hotel İzmir" className="w-full h-full rounded-2xl shadow-lg relative z-10" />
        </div>
    </section>
);

export default Intro;
