import { FC, ReactElement, SVGProps } from 'react'
import styles from './Contact.module.scss';
import classNames from 'classnames';

interface ContactProps {
   icon?: ReactElement<SVGProps<SVGElement>>,
   info: string,
   secondary: string,
   color: 'light' | 'dark',
   className?: string
}

const Contact: FC<ContactProps> = ({ icon, info, secondary, color, className }) => {
   return (
      <div className={classNames(styles.container, styles[color], className)}>
         {
            icon &&
            <div className={styles.img}>
               {icon}
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