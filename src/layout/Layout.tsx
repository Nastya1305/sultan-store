import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: FC = () => {

   return (
      <div className='wrapper'>
         <Header />

         <div className='container main'>
            <Outlet />
         </div>

         <Footer />
      </div>
   )
}

export default Layout;





