import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Product from '../Product/Product';
import "./ProductList.scss";
import { IProduct } from '../../types/product';


interface ProductListProps {
   values: IProduct[],
}


const ProductList: React.FC<ProductListProps> = ({ values }) => {

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
