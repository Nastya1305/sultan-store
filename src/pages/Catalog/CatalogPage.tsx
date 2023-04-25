import { FC, useEffect, useMemo } from 'react';
import "./CatalogPage.scss";

import ProductList from 'components/Product/List/ProductList';
import FiltersContainer from 'components/Filters/Container/FiltersContainer';
import CategoriesWidget, { CategoriesWidgetVariant } from 'components/Filters/Widgets/Categories/CategoriesWidget';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from "hooks/useActions";
import { useResize } from 'hooks/useResize';

import { filterProducts } from 'utils/filter';
import { IProduct } from 'types/product';
import SortWidget from 'components/Filters/Widgets/Sort/SortWidget';



const CatalogPage: FC = () => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, getProducts } = useActions();
   const screen = useResize();

   const filteredProducts: IProduct[] = useMemo(() =>
      filterProducts(products, filter), [products, filter])

   useEffect(() => {
      getProducts()
   }, [])

   return (
      <div className='catalog-container'>
         <h1 className='catalog-container__title'>Косметика и гигиена</h1>
         <div className='catalog-container__sort-widget sort-widget'>
            <span className='sort-widget__title'>Сортировка:</span>
            <SortWidget />
         </div>
         {
            (!screen.isMedia6) &&
            <CategoriesWidget
               variant={CategoriesWidgetVariant.horizontalButtonList}
               currentCategory={filter.category}
               onClickCategory={(categoryItem) => setProductCategory(categoryItem)}
            />
         }

         <FiltersContainer />
         <ProductList values={filteredProducts} />
      </div>
   );
};

export default CatalogPage;

