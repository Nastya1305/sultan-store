import { FC } from 'react';
import Product from 'components/Product/Card/ProductCard';
import { IProduct } from 'types/product';
import styles from './ProductList.module.scss';
import classNames from 'classnames';

interface ProductListProps {
   values: IProduct[],
   className?: string
}


const ProductList: FC<ProductListProps> = ({ values, className }) => {

   return (
      <div className={classNames(styles.container, className)}>
         {
            values.length ? values.map(product =>
               <div className={styles.column} key={product.barcode}>
                  <Product product={product} />
               </div>)
               :
               <div className={styles.message}>Товары не найдены</div>

         }
      </div>
   );
};

export default ProductList;
