import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Product from '../Product/Product';
import "./ProductList.scss";


const ProductList: React.FC = () => {

   const filter = useTypedSelector(state => state.filter)
   const { products, filteredProducts } = useTypedSelector(state => state.product)
   const { getProducts, filterProducts, getManufacturers } = useActions()


   useEffect(() => {
      getProducts()
   }, [])

   useEffect(() => {
      getManufacturers(products)
   }, [products])

   useEffect(() => {
      filterProducts(filter)
   }, [filter, products])


   return (
      <div className='products'>
         {filteredProducts.map(product =>
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
