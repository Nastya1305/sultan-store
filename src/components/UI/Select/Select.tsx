import { FC, useState } from 'react';
import './Select.scss';

interface SelectProps {
   curValue: string,
   valueList: string[],
   onChange: (newValue: string) => void
}

const Select: FC<SelectProps> = ({ curValue, valueList, onChange }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <div className='select'>
         <div
            className='select__header'
            onClick={() => setIsOpen((prevState) => !prevState)}
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
                        onClick={() => { setIsOpen(false); onChange(value) }}
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


