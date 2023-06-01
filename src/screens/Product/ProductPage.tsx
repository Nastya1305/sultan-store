import { FC, useMemo } from 'react';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getProductByBarcode } from 'utils/filter';
import { IProduct, SizeType } from 'types/product';
import ProductSize from 'shared/ProductSize/ProductSize';
import Accordion from 'shared/UI/Accordion/Accordion';
import BuyBtn from 'shared/BuyBtn/BuyBtn';


const ProductPage: FC = () => {
   let { barcode } = useParams();
   const { products } = useTypedSelector(state => state.product);

   const product: IProduct | undefined = useMemo(() => {
      window.scrollTo(0, 0);
      return getProductByBarcode(products, Number(barcode));
   }, [products, barcode]);

   return (
      <>
         {
            product ?

               <div className={styles.container}>
                  <div className={styles.img}>
                     <img src={require("assets/" + product.img)} alt={product.name} />
                  </div>
                  <div className={styles.info}>

                     <h1 className={styles.title}>
                        <b>{product.brand} </b>
                        <span>{product.name}</span>
                     </h1>

                     <ProductSize className={styles.size} sizeType={product.sizeType} sizeValue={product.size} />

                     <div className={styles.buy}>
                        <div className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</div>
                        <BuyBtn btnClassName={styles.btn} product={product} hasSmallForm={false} />
                     </div>

                     <div className={styles.properties}>
                        <div className={styles.property}>
                           <span className={styles.propertyKey}>Производитель: </span>
                           <span className={styles.propertyValue}>{product.manufacturer}</span>
                        </div>
                        <div className={styles.property}>
                           <span className={styles.propertyKey}>Бренд: </span>
                           <span className={styles.propertyValue}>{product.brand}</span>
                        </div>
                        <div className={styles.property}>
                           <span className={styles.propertyKey}>Штрихкод: </span>
                           <span className={styles.propertyValue}>{product.barcode}</span>
                        </div>
                     </div>
                     <Accordion title='Описание'>
                        <p className={styles.description}>{product.description}</p>
                     </Accordion>


                  </div>
               </div>

               : 'Такого продукта нет' + barcode
         }
      </>

   );
};

export default ProductPage;

