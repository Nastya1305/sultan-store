import { FC, useState } from 'react';
import styles from './BuyBtn.module.scss';
import classNames from 'classnames';
import Button from 'shared/UI/Button/Button';
import { ReactComponent as BasketImg } from "assets/images/basket.svg";
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from "hooks/useActions";
import { IProduct } from 'types/product';
import { useResize } from 'hooks/useResize';

interface BuyBtnProps {
   className?: string,
   hasSmallForm: boolean,
   product: IProduct
}


const BuyBtn: FC<BuyBtnProps> = ({ className, hasSmallForm, product }) => {
   const { products } = useTypedSelector(state => state.cart)
   const { addProduct, removeProduct } = useActions();

   const screen = useResize();

   return (
      <>
         {
            (!products.has(product) || (hasSmallForm && screen.width < 430)) &&
            <Button className={classNames(styles.btn, className, { 'small': hasSmallForm })} onClick={() => { addProduct(product); }}>
               <span className={styles.btnText}>В корзину</span>
               <BasketImg className={styles.btnImg} />
               {
                  (products.has(product) && hasSmallForm && screen.width < 430) &&
                  <div className={styles.quantity}>{products.get(product)}</div>
               }
            </Button >
         }

         {
            (products.has(product) && (!hasSmallForm || (hasSmallForm && screen.width > 430))) &&
            <div className={styles.widget}>
               <button className={styles.miniBtn} onClick={() => { removeProduct(product); }}>-</button>
               {products.get(product)}
               <button className={styles.miniBtn} onClick={() => { addProduct(product); }}>+</button>
            </div>
         }

      </>

   )
}

export default BuyBtn;





