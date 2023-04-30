import { FC } from 'react';
import './Navigation.scss';

const Navigation: FC = () => {
   return (
      <div className='navigation'>
         <nav>
            <ul className='nav-list'>
               <li className='nav-list__item'><a href='#'>О компании</a></li>
               <li className='nav-list__item'><a href='#'>Доставка и оплата</a></li>
               <li className='nav-list__item'><a href='#'>Возврат</a></li>
               <li className='nav-list__item'><a href='#'>Контакты</a></li>
            </ul>
         </nav>
      </div>
   );
}

export default Navigation;