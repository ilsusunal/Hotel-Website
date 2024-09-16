import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Button({ onClick, label, to, variant = "filled", type = "button" }) {
  const history = useHistory();

  const handleClick = () => {
    if (type === "submit") {
      return;
    }
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
        return 'border border-sunsetCoral text-sunsetCoral bg-transparent hover:bg-sunsetCoral hover:text-white transition-all duration-300';
      case 'text':
        return 'text-black font-medium underline hover:text-sunsetCoral transition-all duration-300';
      case 'accent':
        return 'bg-sunsetCoral/50 text-white hover:bg-sandyBeige/50 transition-all duration-300';
      default:
        return 'bg-oceanBlue text-white hover:bg-sandyBeige/50 transition-all duration-300';
    }
  })();
  return (
    <button className={`px-6 py-2 rounded ${buttonClass}`} onClick={handleClick} >
      {label}
    </button>
  );
};
