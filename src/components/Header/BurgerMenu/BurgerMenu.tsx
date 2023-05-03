import Button from 'components/UI/Button/Button';
import { FC, useState, useEffect } from 'react';
import './BurgerMenu.scss';
import Contact from '../Contact/Contact';
import Navigation, { NavigationVariant } from '../Navigation/Navigation';

const BurgerMenu: FC = () => {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
         <Button onClick={() => setMenuOpen(prevState => !prevState)}>
            <div className={'burger' + (menuOpen ? ' close' : '')}>
               <span />
            </div>
         </Button>

         {
            menuOpen &&
            <div className='dropdown'>
               <div className='dropdown__menu'>
                  <div className='menu container'>
                     <div className="menu__contacts">
                        <Contact
                           img={require('assets/images/Header/contacts/location.svg').default}
                           info='г. Кокчетав, ул. Ж. Ташенова 129Б'
                           secondary='(Рынок Восточный)'
                        />
                        <Contact
                           img={require('assets/images/Header/contacts/mail.svg').default}
                           info='opt.sultan@mail.ru'
                           secondary='На связи в любое время'
                        />
                        <div className='sales-team-contact'>
                           <Contact
                              img={require('assets/images/Header/contacts/phone.svg').default}
                              info='Отдел продаж'
                              secondary='+7 (777) 490-00-91'
                           />
                           <div className='sales-team-contact__info'>время работы: 9:00-20:00</div>
                           <a className='back-call__link' href='#'>Заказать звонок</a>
                        </div>
                     </div>

                     <div className="menu__nav">
                        <Navigation variant={NavigationVariant.verticalLinkList} />
                        <Button className=''>
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