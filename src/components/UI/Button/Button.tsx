import { FC, PropsWithChildren } from 'react';
import './Button.scss';

interface ButtonProps extends PropsWithChildren {
   className?: string,
   onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
   return (
      <button onClick={onClick} className={"button " + (className ? className : "")}>
         {children}
      </button>
   );
}

export default Button;


