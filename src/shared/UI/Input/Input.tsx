import { FC, useState, ReactElement, SVGProps } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import Button from 'shared/UI/Button/Button';


interface InputProps {
   className?: string,
   placeholder: string,
   btnIcon: ReactElement<SVGProps<SVGElement>>,
   onInput: (inputValue: string) => void,
}

const Input: FC<InputProps> = ({ className, placeholder, btnIcon, onInput }) => {
   const [inputValue, setInputValue] = useState<string>("");
   return (
      <form className={classNames(styles.form, className)}
         onSubmit={
            (e) => {
               e.preventDefault();
               onInput(inputValue)
            }
         } >
         <input type='search'
            className={styles.input}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <Button className={styles.button}>
            {btnIcon}
         </Button>
      </form >
   );
}

export default Input;


