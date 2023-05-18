import { FC } from 'react';
import TopMenuBar from './TopMenuBar/TopMenuBar';
import BottomMenuBar from './BottomMenuBar/BottomMenuBar';
import styles from './Header.module.scss';

const Header: FC = () => {

   return (
      <>
         <div className={styles.container}>
            <div className='container'>
               <TopMenuBar />
            </div>
            <div className='container'>
               <BottomMenuBar />
            </div>

         </div>
         <div className={styles.space}></div>
      </>

   )
}

export default Header;





