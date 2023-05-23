import Button from 'shared/UI/Button/Button';
import { FC, useState, useEffect } from 'react';
import Contact from 'shared/Contact/Contact';
import Navigation, { NavigationVariant } from 'shared/Navigation/Navigation';
import styles from './BurgerMenu.module.scss';
import classNames from 'classnames';

interface BurgerMenuProps {
   className?: string,
   menuOpen: boolean,
   setMenuOpen(open: boolean): void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ className, menuOpen, setMenuOpen }) => {

   useEffect(() => {
      if (menuOpen)
         document.body.classList.add('lock');
      else return;

      return () => {
         document.body.classList.remove('lock');
      };
   }, [menuOpen]);

   return (
      <>
         {
            menuOpen &&
            <div className={classNames(styles.container, className)}>
               <div className={styles.menu}>
                  <div className='container'>
                     <div className={styles.contacts}>
                        <Contact
                           img={require('assets/images/Header/contacts/location.svg').default}
                           info='г. Кокчетав, ул. Ж. Ташенова 129Б'
                           secondary='(Рынок Восточный)'
                           color='dark'
                        />
                        <Contact
                           img={require('assets/images/Header/contacts/mail.svg').default}
                           info='opt.sultan@mail.ru'
                           secondary='На связи в любое время'
                           color='dark'
                        />
                        <div className={styles.salesTeamContact}>
                           <Contact
                              img={require('assets/images/Header/contacts/phone.svg').default}
                              info='Отдел продаж'
                              secondary='+7 (777) 490-00-91'
                              color='dark'
                           />
                           <div className={styles.salesTeamContactInfo}>время работы: 9:00-20:00</div>
                           <a className={styles.backCallLink} href='#'>Заказать звонок</a>
                        </div>
                     </div>

                     <div className={styles.navBlock}>
                        <Navigation className={styles.nav}
                           variant={NavigationVariant.verticalLinkList}
                           color='dark'
                           title='Меню сайта:'
                           items={['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']}
                        />
                        <Button className={styles.priceListBtn}>
                           <span>Прайс-лист</span>
                           <img src={require('assets/images/Header/download-icon.svg').default} alt='иконка' />
                        </Button>
                     </div>

                  </div>
               </div>
            </div>
         }
      </>
   );
}

export default BurgerMenu;