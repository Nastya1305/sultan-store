import { FC } from 'react';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

export enum NavigationVariant {
   horizontalLinkList = "horizontalLinkList",
   verticalLinkList = "verticalLinkList"
}

interface NavigationProps {
   variant: NavigationVariant,
   className?: string
}

const Navigation: FC<NavigationProps> = ({ variant, className }) => {
   return (
      <div className={classNames(styles[variant], className)}>
         {
            variant == NavigationVariant.verticalLinkList &&
            <div className={styles.title}>Меню сайта:</div>
         }
         <nav>
            <ul className={styles.list}>
               <li className={styles.item}><a href='#'>О компании</a></li>
               <li className={styles.item}><a href='#'>Доставка и оплата</a></li>
               <li className={styles.item}><a href='#'>Возврат</a></li>
               <li className={styles.item}><a href='#'>Контакты</a></li>
            </ul>
         </nav>
      </div>
   );
}

export default Navigation;