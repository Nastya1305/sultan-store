import { FC, useState } from 'react';
import Contact from 'shared/Contact/Contact';
import Navigation, { NavigationVariant } from 'shared/Navigation/Navigation';
import { useResize } from 'hooks/useResize';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Cart from '../Cart/Cart';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './TopMenuBar.module.scss';
import classNames from 'classnames';
import Button from 'shared/UI/Button/Button';
import { ReactComponent as LocationIcon } from 'assets/images/contacts/location.svg';
import { ReactComponent as MailIcon } from 'assets/images/contacts/mail.svg';

interface TopMenuBarProps {
   className?: string
}

const TopMenuBar: FC<TopMenuBarProps> = ({ className }) => {
   const screen = useResize();
   const [burgerMenuActive, setBurgerMenuActive] = useState<boolean>(false);

   return (
      <>
         <div className={classNames(styles.container, className, 'container')}>
            {!screen.isMedia2 ?
               (<>
                  <div className={styles.contacts}>
                     <Contact
                        className={styles.contact}
                        icon={<LocationIcon />}
                        info='г. Кокчетав, ул. Ж. Ташенова 129Б'
                        secondary='(Рынок Восточный)'
                        color='dark'
                     />
                     <Contact
                        className={styles.contact}
                        icon={<MailIcon />}
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
                  <Button className={styles.burgerBtn} onClick={() => setBurgerMenuActive(prevState => !prevState)}>
                     <div className={classNames(styles.burger, { 'close': burgerMenuActive })}>
                        <span />
                     </div>
                  </Button>
                  <Logo className={styles.logo} />
                  <Cart />
               </>)
            }
         </div>
         {screen.isMedia2 && <BurgerMenu menuOpen={burgerMenuActive} />}
      </>

   )
}

export default TopMenuBar;





