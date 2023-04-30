import { FC } from 'react';
import "./TopMenuBar.scss";
import Contact from 'components/Header/Contact/Contact';
import Navigation from 'components/Header/Navigation/Navigation';

const TopMenuBar: FC = () => {

   return (
      <div className='top-menu-bar'>
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
         <Navigation />
      </div>
   )
}

export default TopMenuBar;





