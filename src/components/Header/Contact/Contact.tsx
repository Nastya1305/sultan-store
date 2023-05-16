import { FC } from 'react'
import styles from './Contact.module.scss';
import classNames from 'classnames';

interface ContactProps {
   img?: string,
   info: string,
   secondary: string,
   color: 'light' | 'dark',
   className?: string
}

const Contact: FC<ContactProps> = ({ img, info, secondary, color, className }) => {
   return (
      <div className={classNames(styles.container, styles[color], className)}>
         {
            img &&
            <div className={styles.img}>
               <img src={img} alt='иконка' />
            </div>
         }

         <div>
            <div className={styles.info}>
               {info}
            </div>
            <div className={styles.secondary}>
               {secondary}
            </div>
         </div>
      </div>
   );
}

export default Contact;