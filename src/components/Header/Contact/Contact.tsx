import { FC } from 'react'
import styles from './Contact.module.scss';
import classNames from 'classnames';

interface ContactProps {
   img: string,
   info: string,
   secondary: string,
   className?: string
}

const Contact: FC<ContactProps> = ({ img, info, secondary, className }) => {
   return (
      <div className={classNames(styles.contact, className)}>
         <div className={styles.img}>
            <img src={img} alt='иконка' />
         </div>
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