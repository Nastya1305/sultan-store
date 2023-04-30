import { FC } from 'react';
import './Cart.scss';
import { ReactComponent as BasketImg } from "assets/images/basket.svg";

const Cart: FC = () => {
   return (
      <div className='cart'>
         <div className='cart__img'>
            <BasketImg />
            <div className='cart__quantity'>3</div>
         </div>


         <div className='cart__info'>
            <div className='cart__title'>Корзина</div>
            <div className='cart__amount'>12 478 ₽</div>
         </div>
      </div>
   );
}

export default Cart;