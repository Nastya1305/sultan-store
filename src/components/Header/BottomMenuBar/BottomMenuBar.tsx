import { FC } from 'react';
import "./BottomMenuBar.scss";
import { ReactComponent as Logo } from 'assets/images/Header/logo.svg';
import Button from 'components/UI/Button/Button';
import Search from 'components/UI/Search/Search';
import BackCall from 'components/Header/BackCall/BackCall';
import Cart from 'components/Header/Cart/Cart';
import { useResize } from 'hooks/useResize';
import { ReactComponent as CatalogIcon } from 'assets/images/Header/catalog-icon.svg';
import { ReactComponent as SearchIcon } from "assets/images/Search/search.svg";

const BottomMenuBar: FC = () => {
   const screen = useResize();

   return (
      <div className='bottom-menu-bar'>
         {!screen.isMedia2 ?
            <>
               <Logo className='bottom-menu-bar__logo' />
               <Button className='bottom-menu-bar__catalog'>
                  <span>Каталог</span>
                  <CatalogIcon />
               </Button>
               <Search onSearch={() => { }} />
               <BackCall />
               <Button className='bottom-menu-bar__price-list'>
                  <span>Прайс-лист</span>
                  <img src={require('assets/images/Header/download-icon.svg').default} alt='иконка' />
               </Button>
               <Cart />
            </>
            :
            <>
               <button className='bottom-menu-bar__btn'>
                  <CatalogIcon />
                  <span>Каталог</span>
               </button>
               <button className='bottom-menu-bar__btn'>
                  <SearchIcon />
                  <span>Поиск</span>
               </button>
            </>
         }
      </div>


   )
}

export default BottomMenuBar;





