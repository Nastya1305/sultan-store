import React, { FC, useEffect, useMemo } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductCategories, { ProductCategoriesVariant } from '../../components/ProductCategories/ProductCategories';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import "./ProductsPage.scss";
import { filterProducts } from '../../utils/filter';
import { IProduct } from '../../types/product';
import FiltersContainer from '../../components/FiltersContainer/FiltersContainer';
import { useResize } from '../../hooks/useResize';

const ProductsPage: FC = () => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, getProducts } = useActions();
   const screen = useResize();

   const filteredProducts: IProduct[] = useMemo(() => filterProducts(products, filter), [products, filter])

   useEffect(() => {
      getProducts()
   }, [])

   return (
      <div>
         {
            (!screen.isMedia6) &&
            <ProductCategories
               variant={ProductCategoriesVariant.horizontalButtonList}
               currentCategory={filter.category}
               onClickCategory={(categoryItem) =>
                  setProductCategory(categoryItem)}
            />
         }


         <div className='page-columns'>
            <FiltersContainer />
            <ProductList values={filteredProducts} />
         </div>

      </div>
   );
};

export default ProductsPage;

