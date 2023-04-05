import React from 'react';
import './Button.css';

interface ButtonProps {
   children: React.ReactChild | React.ReactNode;
   className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
   return (
      <button className={"button " + (className ? className : "")}>
         {children}
      </button>
   );
}

export default Button;


