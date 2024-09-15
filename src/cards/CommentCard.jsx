import React from 'react'

const CommentCard = ({ commenter, profilePic, platform, star, totalComments, comment }) => (
<div className='bg-darkPink/10 rounded-2xl flex items-center p-12 gap-16'>
    <div className='w-1/3 flex flex-col gap-8'>
        <div className='flex justify-start gap-8'>
            <p className='text-xl'>{platform}</p>
            <p><i className="fa-regular fa-star"/> {star}</p>
        </div>
        <div className='flex justify-start gap-8'>
            <p className='font-light text-sm'>Based on</p>
            <p className='underline italic text-sm'>{totalComments} reviews</p>
        </div>
    </div>
    <p className='italic'>{comment}</p>
</div>
);
export default CommentCard;
