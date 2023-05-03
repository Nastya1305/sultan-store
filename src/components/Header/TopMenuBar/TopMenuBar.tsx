import { FC } from 'react';
import "./TopMenuBar.scss";
import Contact from 'components/Header/Contact/Contact';
import Navigation, { NavigationVariant } from 'components/Header/Navigation/Navigation';
import { useResize } from 'hooks/useResize';
import { ReactComponent as Logo } from 'assets/images/Header/logo.svg';
import Cart from '../Cart/Cart';
import Button from 'components/UI/Button/Button';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const TopMenuBar: FC = () => {
   const screen = useResize();
   return (
      <div className='top-menu-bar'>
         {!screen.isMedia2 ?
            (<>
               <div className='top-menu-bar__contacts'>
                  <Contact
                     img={require('assets/images/Header/contacts/location.svg').default}
                     info='г. Кокчетав, ул. Ж. Ташенова 129Б'
                     secondary='(Рынок Восточный)'
                  />
                  <Contact
                     img={require('assets/images/Header/contacts/mail.svg').default}
                     info='opt.sultan@mail.ru '
                     secondary='На связи в любое время'
                  />
               </div>
               <Navigation variant={NavigationVariant.horizontalLinkList} />
            </>)
            :
            (<>
               <BurgerMenu />
               <Logo className='top-menu-bar__logo' />
               <Cart />
            </>)
         }
      </div>

   )
}

export default TopMenuBar;





