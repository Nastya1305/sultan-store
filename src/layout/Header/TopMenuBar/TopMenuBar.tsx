import { FC } from 'react';
import Contact from 'components/Contact/Contact';
import Navigation, { NavigationVariant } from 'components/Navigation/Navigation';
import { useResize } from 'hooks/useResize';
import { ReactComponent as Logo } from 'assets/images/Header/logo.svg';
import Cart from '../Cart/Cart';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './TopMenuBar.module.scss';
import classNames from 'classnames';

interface TopMenuBarProps {
   className?: string
}

const TopMenuBar: FC<TopMenuBarProps> = ({ className }) => {
   const screen = useResize();
   return (
      <div className={classNames(styles.container, className)}>
         {!screen.isMedia2 ?
            (<>
               <div className={styles.contacts}>
                  <Contact
                     className={styles.contact}
                     img={require('assets/images/Header/contacts/location.svg').default}
                     info='г. Кокчетав, ул. Ж. Ташенова 129Б'
                     secondary='(Рынок Восточный)'
                     color='dark'
                  />
                  <Contact
                     className={styles.contact}
                     img={require('assets/images/Header/contacts/mail.svg').default}
                     info='opt.sultan@mail.ru '
                     secondary='На связи в любое время'
                     color='dark'
                  />
               </div>
               <Navigation
                  variant={NavigationVariant.horizontalLinkList}
                  color='dark'
                  items={['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']}
               />
            </>)
            :
            (<>
               <BurgerMenu className={styles.burgerBtn} />
               <Logo className={styles.logo} />
               <Cart />
            </>)
         }
      </div>

   )
}

export default TopMenuBar;





