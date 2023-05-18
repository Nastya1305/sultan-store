import { FC, PropsWithChildren, useState } from 'react';
import style from './Accordion.module.scss';
import classNames from 'classnames';

interface AccordionProps extends PropsWithChildren {
   className?: string,
   title: string
}

const Accordion: FC<AccordionProps> = ({ title, children, className }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <div>
         <button
            className={classNames(style.btn, { "open-state": isOpen }, className)}
            onClick={() => setIsOpen((prevState) => !prevState)}>
            {title}
            <span className={style.openIcon}>▼</span>
            <span className={style.closeIcon}>▲</span>
         </button>
         {isOpen && children}
      </div>


   );
}

export default Accordion;


