import React, { FC } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import "./ProductsPage.scss";
import PriceWidget from '../../components/PriceWidget/PriceWidget';
import FilterWidget from '../../components/FilterWidget/FilterWidget';

const ProductsPage: FC = () => {
   const { category, priceLimit } = useTypedSelector(state => state.filter);
   const { manufacturers, filteredManufacturers } = useTypedSelector(state => state.manufacturer);
   const { setProductCategory, setMinProductPrice, setMaxProductPrice, setManufacturers } = useActions();

   return (
      <div>
         <ProductCategories
            currentCategory={category}
            onClickCategory={(categoryItem) =>
               setProductCategory(categoryItem)}
         />

         <div className='page-columns'>
            <div className='filters'>
               <div className='filters__title'>Подбор по параметрам</div>
               <PriceWidget
                  startLimit={priceLimit}
                  onChangeMinLimit={(minPrice) => setMinProductPrice(minPrice)}
                  onChangeMaxLimit={(maxPrice) => setMaxProductPrice(maxPrice)}
               />
               <FilterWidget
                  filterTitle='Производитель'
                  values={filteredManufacturers}
                  onChangeFilterList={(values) => setManufacturers(values)}
               />
            </div>

            <ProductList />
         </div>

      </div>
   );
};

export default ProductsPage;

