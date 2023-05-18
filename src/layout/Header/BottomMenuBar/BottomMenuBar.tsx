import { FC } from 'react';
import { ReactComponent as Logo } from 'assets/images/Header/logo.svg';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import BackCall from 'components/BackCall/BackCall';
import Cart from 'layout/Header/Cart/Cart';
import { useResize } from 'hooks/useResize';
import { ReactComponent as CatalogIcon } from 'assets/images/Header/catalog-icon.svg';
import { ReactComponent as SearchIcon } from "assets/images/Search/search.svg";
import styles from './BottomMenuBar.module.scss';
import classNames from 'classnames';


interface BottomMenuBarProps {
   className?: string
}

const BottomMenuBar: FC<BottomMenuBarProps> = ({ className }) => {
   const screen = useResize();

   return (
      <div className={classNames(styles.container, className, 'container')}>
         {!screen.isMedia2 ?
            <>
               <Logo className={styles.logo} />
               <Button className={classNames(styles.btn, styles.catalogBtn)}>
                  <span>Каталог</span>
                  <CatalogIcon />
               </Button>
               <Input
                  className={styles.search}
                  onInput={() => { }}
                  placeholder='Поиск...'
                  btnIcon={require('assets/images/Search/search.svg').default}
               />
               <BackCall className={styles.backCall} textAlign='right' color='dark' withImg />
               <Button className={classNames(styles.priceListBtn, styles.btn)}>
                  <span>Прайс-лист</span>
                  <img src={require('assets/images/Header/download-icon.svg').default} alt='иконка' />
               </Button>
               <Cart />
            </>
            :
            <>
               <button className={styles.mobileBtn}>
                  <CatalogIcon />
                  <span>Каталог</span>
               </button>
               <button className={styles.mobileBtn}>
                  <SearchIcon />
                  <span>Поиск</span>
               </button>
            </>
         }
      </div>


   )
}

export default BottomMenuBar;





