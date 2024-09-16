import React, { useState } from 'react'
import CommentCard from '../../cards/CommentCard.jsx';
import mockComments from "../../mock/mockComments.js";

export default function Comments() {
    const [activeComment, setActiveComment] = useState(mockComments[0]);

    const handleProfilePicClick = (comment) => {
        setActiveComment(comment);
    };

    return (
        <section className='flex flex-col gap-12 mt-12 p-8'>
            {activeComment && (
                <CommentCard {...activeComment} />
            )}
            <div className='flex justify-around mt-8'>
                {mockComments.map((comment, index) => (
                    <img
                        key={index}
                        src={comment.profilePic}
                        alt={`Customer ${index + 1}`}
                        className='w-16 h-16 md:w-24 md:h-24 rounded-full bg-black cursor-pointer'
                        onClick={() => handleProfilePicClick(comment)}
                    />
                ))}
            </div>
        </section>
    )
}
