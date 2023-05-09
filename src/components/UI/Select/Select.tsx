import { FC, useState, useRef, useEffect } from 'react';
import './Select.scss';

interface SelectProps {
   startValue?: string,
   valueList: string[],
   onChange: (newValue: string) => void
}

const Select: FC<SelectProps> = ({ startValue, valueList, onChange }) => {
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
      <div className='select' ref={select}>
         <div
            className='select__header'
            onClick={() => setIsOpen(true)}
         >
            {curValue}
            <span className='select__arrow'>  ▼ </span>
         </div>

         {
            isOpen &&
            <ul className='select__popup'>
               {
                  valueList.map(value =>
                     <li
                        key={value}
                        className={'select__option' + (value == curValue ? ' selected' : '')}
                        onClick={() => { setIsOpen(false); setCurValue(value); onChange(value) }}
                     >
                        {value}
                     </li>)
               }
            </ul>

         }
      </div>

   );
}

export default Select;


