import React from 'react'
import quotationMark from "/quotation-mark.png"

const CommentCard = ({ platform, star, totalComments, comment }) => (
    <div className='relative bg-sandyBeige/10 rounded-2xl p-20 gap-16'>
        {/* Left Quotation Mark */}
        <img
            src={quotationMark}
            alt='Left Quotation Mark'
            className='absolute -top-6 -left-6 w-20 h-20 text-sandyBeige'
        />

        <section className='md:flex items-center gap-8'>
            {/* Platform, Star, and Comment Info */}
            <div className='w-1/2 flex md:flex-col gap-4 mb-8'>
                <div className='flex justify-start gap-8 text-oceanBlue font-semibold text-2xl'>
                    <p>{platform}</p>
                    <p><i className="fa-regular fa-star" /> {star}</p>
                </div>
                <div className='flex justify-start gap-8'>
                    <p className='font-light text-sm'>Based on</p>
                    <p className='underline italic text-sm'>{totalComments} reviews</p>
                </div>
            </div>

            {/* The Main Comment */}
            <p className='italic text-xl mb-8'>{comment}</p>
        </section>
        {/* Right Quotation Mark */}
        <img
            src={quotationMark}
            alt='Right Quotation Mark'
            className='absolute -bottom-6 -right-6 w-20 h-20 rotate-180'
        />
    </div>
);
export default CommentCard;
