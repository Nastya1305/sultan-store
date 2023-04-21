import { FC } from 'react';

import Product from 'components/Product/Card/ProductCard';
import "./ProductList.scss";
import { IProduct } from 'types/product';


interface ProductListProps {
   values: IProduct[],
}


const ProductList: FC<ProductListProps> = ({ values }) => {

   return (
      <div className='products'>
         {values.map(product =>
            <div className='products__column' key={product.barcode}>
               <Product product={product} />
            </div>
         )}
      </div>
   );
};

export default ProductList;
