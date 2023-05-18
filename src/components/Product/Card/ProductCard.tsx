import { FC, useMemo } from 'react';
import { IProduct, SizeType } from "types/product";
import styles from './ProductCard.module.scss';
import Button from 'components/UI/Button/Button';
import { ReactComponent as BasketImg } from "assets/images/basket.svg";

import { Link } from 'react-router-dom';
import ProductSize from '../Size/ProductSize';


interface ProductCardProps {
   product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

   return (
      <div className={styles.container}>
         <div className={styles.productImg}>
            <img src={require("assets/" + product.img)} alt={product.name} />
         </div>
         <ProductSize className={styles.size} sizeType={product.sizeType} sizeValue={product.size} />
         <Link to={`product/${product.barcode}`} className={styles.title}>
            <b>{product.brand} </b>
            <span>{product.name}</span>
         </Link>
         <div className={styles.properties}>
            <div className={styles.property}>
               <span className={styles.propertyKey}>Штрихкод: </span>
               <span className={styles.propertyValue}>{product.barcode}</span>
            </div>
            <div className={styles.property}>
               <span className={styles.propertyKey}>Производитель: </span>
               <span className={styles.propertyValue}>{product.manufacturer}</span>
            </div>
            <div className={styles.property}>
               <span className={styles.propertyKey}>Бренд: </span>
               <span className={styles.propertyValue}>{product.brand}</span>
            </div>
         </div>
         <div className={styles.buy}>
            <div className={styles.price}>{product.price} ₽</div>
            <Button className={styles.btn} onClick={() => { }}>
               <span className={styles.btnText}>В корзину</span>
               <BasketImg className={styles.btnImg} />
            </Button>
         </div>
      </div >
   )
}

export default ProductCard;





