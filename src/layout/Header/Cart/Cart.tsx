import { FC } from 'react';
import { ReactComponent as BasketImg } from "assets/images/basket.svg";
import styles from './Cart.module.scss';

const Cart: FC = () => {
   return (
      <div className={styles.container}>
         <div className={styles.img}>
            <BasketImg />
            <div className={styles.quantity}>3</div>
         </div>


         <div className={styles.info}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.amount}>12 478 ₽</div>
         </div>
      </div>
   );
}

export default Cart;