import { FC } from 'react';
import { ReactComponent as CartImg } from "assets/images/cart.svg";
import styles from './Cart.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getNumberOfProducts, getTotalCost } from 'utils/cart';

const Cart: FC = () => {
   const { products } = useTypedSelector(state => state.cart);
   return (
      <div className={styles.container}>
         <div className={styles.img}>
            <CartImg />
            <div className={styles.quantity}>{getNumberOfProducts(products)}</div>
         </div>


         <div className={styles.info}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.amount}>{getTotalCost(products)} ₽</div>
         </div>
      </div>
   );
}

export default Cart;