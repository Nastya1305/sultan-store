import { FC } from 'react';
import './Navigation.scss';

export enum NavigationVariant {
   horizontalLinkList = "horizontal-link-list",
   verticalLinkList = "vertical-link-list"
}

interface NavigationProps {
   variant: NavigationVariant
}


const Navigation: FC<NavigationProps> = ({ variant }) => {
   return (
      <div className={'nav nav_' + variant}>
         {
            variant == NavigationVariant.verticalLinkList &&
            <div className='nav__title'>Меню сайта:</div>
         }
         <nav>
            <ul className='nav__list'>
               <li className='nav__item'><a href='#'>О компании</a></li>
               <li className='nav__item'><a href='#'>Доставка и оплата</a></li>
               <li className='nav__item'><a href='#'>Возврат</a></li>
               <li className='nav__item'><a href='#'>Контакты</a></li>
            </ul>
         </nav>
      </div>
   );
}

export default Navigation;