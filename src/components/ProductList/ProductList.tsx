import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Product from '../Product/Product';
import "./ProductList.scss";
import { IProduct } from '../../types/product';


interface ProductListProps {
   values: IProduct[],
}


const ProductList: React.FC<ProductListProps> = ({ values }) => {
   const { filteredProducts } = useTypedSelector(state => state.product)

   return (
      <div className='products'>
         {values.map(product =>
            <div className='products__row' key={product.barcode}>
               <div className='products__item' >
                  <Product product={product} />
               </div>
            </div>
         )}
      </div>
   );
};

export default ProductList;
