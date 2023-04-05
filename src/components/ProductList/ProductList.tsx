import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getProducts } from "../../store/action-creators/product";
import { useActions } from "../../hooks/useActions";
import Product from '../Product/Product';
import "./ProductList.scss";
import { ProductTypes } from '../../types/product';

const ProductList: React.FC = () => {

   const { category } = useTypedSelector(state => state.filter)
   const { filteredProducts } = useTypedSelector(state => state.product)
   const { getProducts, filterProductsByCategory } = useActions()


   useEffect(() => {
      getProducts()
      filterProductsByCategory(category)
   }, [])


   useEffect(() => {
      filterProductsByCategory(category)
   }, [category])


   return (
      <div className='products'>
         {filteredProducts.map(product =>
            <div className='products__item' key={product.barcode}>
               <Product product={product} />
            </div>
         )}
      </div>
   );
};

export default ProductList;
