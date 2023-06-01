import { FC, useEffect, useState } from 'react';
import styles from './CartPage.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import CartList from './CartList/CartList';
import Button from 'shared/UI/Button/Button';
import { getTotalCost } from 'utils/cart';
import Modal from 'shared/UI/Modal/Modal';
import Ordering from './Ordering/Ordering';
import { useActions } from 'hooks/useActions';


const CartPage: FC = () => {
   const { products } = useTypedSelector(state => state.cart)
   const [orderProcessed, setOrderProcessed] = useState<boolean>(false);
   const { emptyCart } = useActions();

   useEffect(() => { window.scrollTo(0, 0) }, []);

   return (
      <div className={styles.container}>
         <h1 className='title'>Корзина</h1>

         {
            products.size > 0 ?
               <>
                  <CartList className={styles.products} products={products} />
                  <div className={styles.row}>
                     <Button
                        className={styles.buyBtn}
                        onClick={() => { setOrderProcessed(true) }}
                     >
                        Оформить заказ
                     </Button>
                     <div className={styles.totalPrice}>{getTotalCost(products).toLocaleString('ru-RU')} ₽</div>
                  </div>
               </>
               :
               <div className='message'>Ваша корзина пуста</div>
         }

         {
            orderProcessed && <Ordering onClose={() => { setOrderProcessed(false); emptyCart() }} />
         }
      </div>
   );
};

export default CartPage;

