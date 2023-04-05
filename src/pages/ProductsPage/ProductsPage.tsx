import React, { FC } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import "./ProductsPage.scss";
import ProductPrice from '../../components/ProductPrice/ProductPrice';

const ProductsPage: FC = () => {
   const { category } = useTypedSelector(state => state.filter);
   const { setProductCategory } = useActions();

   return (
      <div>
         <ProductCategories value={category} onClickCategory={(name) => setProductCategory(name)} />
         <div className='page-columns'>
            <div className='filters'>
               <div className='filters__title'>Подбор по параметрам</div>
               <ProductPrice />
            </div>
            <ProductList />
         </div>

      </div>
   );
};

export default ProductsPage;
