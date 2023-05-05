import { FC, PropsWithChildren } from 'react';
import style from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps extends PropsWithChildren {
   className?: string,
   onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
   return (
      <button
         onClick={onClick}
         className={classNames(style.button, className)}
      >
         {children}
      </button>
   );
}

export default Button;


