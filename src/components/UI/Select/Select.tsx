import { FC, useState, useRef, useEffect } from 'react';
import styles from './Select.module.scss';
import classNames from 'classnames';


interface SelectProps {
   className?: string,
   startValue?: string,
   valueList: string[],
   onChange: (newValue: string) => void
}

const Select: FC<SelectProps> = ({ startValue, valueList, onChange, className }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [curValue, setCurValue] = useState<string>(startValue || valueList[0] || '')
   const select = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!isOpen) return;

      const closePopup = ({ target }: MouseEvent): void => {
         if (!select.current) return;
         if (!select.current.contains(target as Node)) {
            setIsOpen(false)
         }
      };

      document.addEventListener('click', closePopup);
      return () => document.removeEventListener('click', closePopup);
   }, [isOpen]);


   return (
      <div className={styles.container} ref={select}>
         <div
            className={styles.header}
            onClick={() => setIsOpen(true)}
         >
            {curValue}
            <span className={styles.arrow}>  ▼ </span>
         </div>

         {
            isOpen &&
            <ul className={styles.popup}>
               {
                  valueList.map(value =>
                     <li
                        key={value}
                        className={classNames(styles.option, className, { 'selected': value == curValue })}
                        onClick={() => { setIsOpen(false); setCurValue(value); onChange(value) }}
                     >
                        {value}
                     </li>)
               }
            </ul>

         }
      </div >

   );
}

export default Select;


