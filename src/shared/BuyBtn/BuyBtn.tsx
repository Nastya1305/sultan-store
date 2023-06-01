import { FC, useState } from 'react';
import styles from './BuyBtn.module.scss';
import classNames from 'classnames';
import Button from 'shared/UI/Button/Button';
import { ReactComponent as CartImg } from "assets/images/cart.svg";
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from "hooks/useActions";
import { IProduct } from 'types/product';
import { useResize } from 'hooks/useResize';

interface BuyBtnProps {
   btnClassName?: string,
   widgetClassName?: string,
   hasSmallForm: boolean,
   product: IProduct
}


const BuyBtn: FC<BuyBtnProps> = ({ btnClassName, widgetClassName, hasSmallForm, product }) => {
   const { products } = useTypedSelector(state => state.cart)
   const { addProduct, removeProduct } = useActions();

   const screen = useResize();

   return (
      <>
         {
            (!products.has(product) || (hasSmallForm && screen.width < 430)) &&
            <Button className={classNames(styles.btn, { 'small': hasSmallForm }, btnClassName)} onClick={() => { addProduct(product); }}>
               <span className={styles.btnText}>В корзину</span>
               <CartImg className={styles.btnImg} />
               {
                  (products.has(product) && hasSmallForm && screen.width < 430) &&
                  <div className={styles.quantity}>{products.get(product)}</div>
               }
            </Button >
         }

         {
            (products.has(product) && (!hasSmallForm || (hasSmallForm && screen.width > 430))) &&
            <div className={classNames(styles.widget, widgetClassName)}>
               <button className={styles.miniBtn} onClick={() => { removeProduct(product); }}>-</button>
               {products.get(product)}
               <button className={styles.miniBtn} onClick={() => { addProduct(product); }}>+</button>
            </div>
         }

      </>

   )
}

export default BuyBtn;





