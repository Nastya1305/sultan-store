import { FC } from 'react';
import "./Header.scss";
import TopMenuBar from 'components/Header/TopMenuBar/TopMenuBar';
import BottomMenuBar from './BottomMenuBar/BottomMenuBar';


const Header: FC = () => {

   return (
      <>
         <div className='header'>
            <div className='container'>
               <TopMenuBar />
               <BottomMenuBar />
            </div>
         </div>
         <div className='space'></div>
      </>

   )
}

export default Header;





