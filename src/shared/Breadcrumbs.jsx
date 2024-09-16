import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ trail }) {
    return (
        <nav className='flex gap-2 items-center'>
            {trail.map((crumb, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <i className="fa-solid fa-chevron-right" />}
                    <Link
                        to={crumb.to}
                        className={`custom-hover text-sm ${index === trail.length - 1 ? 'text-oceanBlue' : 'text-gray-500'}`}
                    >
                        {crumb.label}
                    </Link>
                </React.Fragment>
            ))}
        </nav>
    );
}
