import React, { FC, useEffect } from 'react';
import ProductCategories, { ProductCategoriesVariant } from '../../components/ProductCategories/ProductCategories';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import "./FiltersContainer.scss";
import PriceWidget from '../../components/PriceWidget/PriceWidget';
import FilterWidget from '../../components/FilterWidget/FilterWidget';
import { getManufacturersFromProducts } from '../../utils/manufacturers';
import { ManufacturersType } from '../../types/filter';


const FiltersContainer: FC = () => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, setMinProductPrice, setMaxProductPrice, setManufacturers } = useActions();

   let manufacturers: ManufacturersType = getManufacturersFromProducts(products);

   return (

      <div className='filters'>
         <div className='filters__title'>Подбор по параметрам</div>
         <PriceWidget
            startLimit={filter.priceLimit}
            onChangeMinLimit={(minPrice) => setMinProductPrice(minPrice)}
            onChangeMaxLimit={(maxPrice) => setMaxProductPrice(maxPrice)}
         />
         <FilterWidget
            filterTitle='Производитель'
            values={manufacturers}
            onChangeFilterList={(values) => setManufacturers(values)}
         />
         <ProductCategories
            variant={ProductCategoriesVariant.verticalLinkList}
            currentCategory={filter.category}
            onClickCategory={(categoryItem) =>
               setProductCategory(categoryItem)}
         />
      </div>
   );
};

export default FiltersContainer;

