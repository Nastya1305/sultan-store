import { FC } from 'react';
import { ReactComponent as CartImg } from "assets/images/cart.svg";
import styles from './Cart.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getNumberOfProducts, getTotalCost } from 'utils/cart';
import { Link } from 'react-router-dom';

const Cart: FC = () => {
   const { products } = useTypedSelector(state => state.cart);
   return (
      <Link to='cart' className={styles.container}>
         <div className={styles.img}>
            <CartImg />
            <div className={styles.quantity}>{getNumberOfProducts(products)}</div>
         </div>


         <div className={styles.info}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.amount}>{getTotalCost(products).toLocaleString('ru-RU')} ₽</div>
         </div>
      </Link>
   );
}

export default Cart;