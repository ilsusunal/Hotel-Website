import React from 'react'
import quotationMark from "/quotation-mark.png"

const CommentCard = ({ platform, star, totalComments, comment }) => (
    <div className='relative bg-sandyBeige/10 rounded-2xl p-8 md:p-20 gap-16'>
        {/* Left Quotation Mark */}
        <img
            src={quotationMark}
            alt='Left Quotation Mark'
            className='absolute -left-2 -top-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 '
        />

        <section className='md:flex md:items-center gap-8'>
            {/* Platform, Star, and Comment Info */}
            <div className='md:w-1/2 flex md:flex-col gap-6 mb-8'>
                <div className='flex justify-start gap-8 text-oceanBlue font-semibold text-sm sm:text-2xl'>
                    <p>{platform}</p>
                    <p><i className="fa-regular fa-star" /> {star}</p>
                </div>
                <div className='flex justify-start gap-2 text-xs md:text-sm'>
                    <p className='font-light '>Based on</p>
                    <p className='underline italic'>{totalComments} reviews</p>
                </div>
            </div>

            {/* The Main Comment */}
            <p className='italic text-base md:text-xl mb-8'>{comment}</p>
        </section>
        {/* Right Quotation Mark */}
        <img
            src={quotationMark}
            alt='Right Quotation Mark'
            className='absolute -right-2 -bottom-6 sm:-right-6 w-12 h-12 sm:w-20 sm:h-20 rotate-180'
        />
    </div>
);
export default CommentCard;
