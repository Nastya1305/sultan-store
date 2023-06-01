import { FC } from 'react';
import { IProduct, SizeType } from "types/product";
import styles from './CartProduct.module.scss';
import ProductSize from 'shared/ProductSize/ProductSize';
import BuyBtn from 'shared/BuyBtn/BuyBtn';
import Button from 'shared/UI/Button/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as TrashBinIcon } from 'assets/images/trash-bin.svg';
import classNames from 'classnames';
import { useActions } from 'hooks/useActions';

interface CartProductProps {
   product: IProduct,
   quantity: number,
   className?: string
}

const CartProduct: FC<CartProductProps> = ({ product, quantity, className }) => {
   const { removeProducts } = useActions();
   return (
      <div className={classNames(styles.container, className)}>
         <div className={styles.column}>
            <div className={styles.productImg}>
               <img src={require("assets/" + product.img)} alt={product.name} />
            </div>

            <div className={styles.info}>
               <ProductSize className={styles.size} sizeType={product.sizeType} sizeValue={product.size} />
               <Link to={`/sultan-store/product/${product.barcode}`} className={styles.title}>
                  <b>{product.brand} </b>
                  <span>{product.name}</span>
               </Link>
            </div>
         </div>


         <div className={classNames(styles.column, styles.buy)}>
            <div>
               <BuyBtn product={product} widgetClassName={styles.addBtns} hasSmallForm={false} />
            </div>
            <div>
               <div className={styles.price}>{(product.price * quantity).toLocaleString('ru-RU')} ₽</div>
            </div>

            <div>
               <Button className={styles.deleteBtn} onClick={() => { removeProducts(product) }}>
                  <TrashBinIcon fill='white' />
               </Button>
            </div>
         </div>
      </div >
   )
}

export default CartProduct;





