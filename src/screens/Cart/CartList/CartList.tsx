import { FC } from 'react';
import { IProduct } from 'types/product';
import styles from './CartList.module.scss';
import classNames from 'classnames';
import CartProduct from '../CartProduct/CartProduct';

interface CartListProps {
   products: Map<IProduct, number>,
   className?: string
}


const CartList: FC<CartListProps> = ({ products, className }) => {

   return (
      <div className={classNames(styles.container, className)}>
         {
            Array.from(products).map(([product, quantity]) =>
               <CartProduct
                  className={styles.row}
                  key={product.barcode}
                  product={product}
                  quantity={quantity}
               />
            )
         }
      </div>
   );
};

export default CartList;
