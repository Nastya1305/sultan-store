import { FC } from 'react';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

export enum NavigationVariant {
   horizontalLinkList = "horizontalLinkList",
   verticalLinkList = "verticalLinkList"
}

interface NavigationProps {
   variant: NavigationVariant,
   color: 'light' | 'dark',
   title?: string,
   items: string[],
   className?: string
}

const Navigation: FC<NavigationProps> = ({ variant, className, color, items, title }) => {
   return (
      <div className={classNames(styles[variant], styles[color], className)}>
         {
            variant == NavigationVariant.verticalLinkList && title &&
            <div className={styles.title}>{title}</div>
         }
         <nav>
            <ul className={styles.list}>
               {
                  items.map((item) =>
                     <li className={styles.item} key={item}><a href='#'>{item}</a></li>
                  )
               }
            </ul>
         </nav>
      </div>
   );
}

export default Navigation;