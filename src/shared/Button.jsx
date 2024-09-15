import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Button({ onClick, label, to, variant = "filled" }){
    const history = useHistory();

  const handleClick = () => {
    if (to) {
      history.push(to);
    } 
    if (onClick) {
      onClick();
    }
  };

  const buttonClass = (() => {
    switch (variant) {
      case 'outlined':
        return 'border border-lightpink text-lightpink bg-transparent hover:bg-lightpink hover:text-white transition-all duration-300';
      case 'text':
        return 'text-lightpink underline hover:text-darkPink transition-all duration-300';
      default: 
        return 'bg-lightpink text-white hover:bg-darkPink transition-all duration-300';
    }
  })();
  return (
    <button className={`px-6 py-2 rounded ${buttonClass}`} onClick={handleClick} >
      {label}
    </button>
  );
};
