import { FC } from 'react';
import "./BottomMenuBar.scss";
import { ReactComponent as Logo } from 'assets/images/Header/logo.svg';
import Button from 'components/UI/Button/Button';
import Search from 'components/UI/Search/Search';
import BackCall from 'components/Header/BackCall/BackCall';
import Cart from 'components/Header/Cart/Cart';


const BottomMenuBar: FC = () => {

   return (
      <div className='bottom-menu-bar'>
         <Logo className='bottom-menu-bar__logo' />
         <Button className='bottom-menu-bar__catalog'>
            <span>Каталог</span>
            <img src={require('assets/images/Header/catalog-icon.svg').default} alt='иконка' />
         </Button>
         <Search onSearch={() => { }} />
         <BackCall />
         <Button className='bottom-menu-bar__price-list'>
            <span>Прайс-лист</span>
            <img src={require('assets/images/Header/download-icon.svg').default} alt='иконка' />
         </Button>
         <Cart />
      </div>
   )
}

export default BottomMenuBar;





