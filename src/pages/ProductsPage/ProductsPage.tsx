import React, { FC, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductCategories, { ProductCategoriesVariant } from '../../components/ProductCategories/ProductCategories';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import "./ProductsPage.scss";
import { filterProducts } from '../../utils/filter';
import { IProduct } from '../../types/product';
import FiltersContainer from '../../components/FiltersContainer/FiltersContainer';

const ProductsPage: FC = () => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, getProducts } = useActions();

   let filteredProducts: IProduct[] = filterProducts(products, filter);

   useEffect(() => {
      getProducts()
   }, [])

   return (
      <div>
         <ProductCategories
            variant={ProductCategoriesVariant.horizontalButtonList}
            currentCategory={filter.category}
            onClickCategory={(categoryItem) =>
               setProductCategory(categoryItem)}
         />

         <div className='page-columns'>
            <FiltersContainer />
            <ProductList values={filteredProducts} />
         </div>

      </div>
   );
};

export default ProductsPage;

