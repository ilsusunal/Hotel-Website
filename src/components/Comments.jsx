import React, { useState } from 'react'
import mockComments from '../mockComments.js';
import CommentCard from '../cards/CommentCard.jsx';

export default function Comments() {
    const [activeComment, setActiveComment] = useState(mockComments[0]);

    const handleProfilePicClick = (comment) => {
        setActiveComment(comment);
    };
    return (
        <section className='flex flex-col gap-12 my-16 p-8'>
            <h1 className='text-lightpink font-playfair text-4xl font-semibold text-center'>We heard them say..</h1>
            {activeComment && (
                <CommentCard {...activeComment} />
            )}
            <div className='flex justify-around'>
                {mockComments.map((comment, index) => (
                    <img
                        key={index}
                        src={comment.profilePic}
                        alt={`Customer ${index + 1}`}
                        className='w-24 h-24 rounded-full bg-black cursor-pointer'
                        onClick={() => handleProfilePicClick(comment)}
                    />
                ))}
            </div>


        </section>
    )
}
