import { FC, useMemo } from 'react';
import { IProduct, SizeType } from "types/product";
import styles from './ProductCard.module.scss';
import Button from 'components/UI/Button/Button';
import { ReactComponent as BasketImg } from "assets/images/basket.svg";

const boxImg: string = require("assets/images/Product/box.svg").default;
const bottleImg: string = require("assets/images/Product/bottle.svg").default;



interface ProductCardProps {
   product: IProduct;
}

interface ProductSize {
   imgURL: string,
   units: string
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

   const productSize: ProductSize = useMemo(() => {
      switch (product.sizeType) {
         case SizeType.Volume:
            return { imgURL: bottleImg, units: "мл" }
         case SizeType.Weight:
            return { imgURL: boxImg, units: "г" }
      }
   }, [product.sizeType])

   return (
      <div className={styles.product}>
         <div className={styles.productImg}>
            <img src={require("assets/" + product.img)} alt={product.name} />
         </div>
         <div className={styles.size}>
            <div>
               <img src={productSize.imgURL} alt="Тип размера" />
            </div>
            <div>{product.size + " " + productSize.units}</div>
         </div>
         <a href="#" className={styles.title}>
            <b>{product.brand} </b>
            <span>{product.name}</span>
         </a>
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
      </div>
   )
}

export default ProductCard;





