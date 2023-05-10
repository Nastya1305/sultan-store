import { FC, useEffect, useMemo, useState } from 'react';
import styles from './CatalogPage.module.scss';
import classNames from 'classnames';

import ProductList from 'components/Product/List/ProductList';
import FiltersContainer from 'components/Filters/Container/FiltersContainer';
import CategoriesWidget, { CategoriesWidgetVariant } from 'components/Filters/Widgets/Categories/CategoriesWidget';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from "hooks/useActions";
import { useResize } from 'hooks/useResize';

import { filterProducts } from 'utils/filter';
import { IProduct } from 'types/product';
import SortWidget from 'components/Filters/Widgets/Sort/SortWidget';
import Pagination from 'components/Pagination/Pagination';



const CatalogPage: FC = () => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, getProducts } = useActions();
   const [curPage, setCurPage] = useState<number>(1);
   const screen = useResize();

   const cardsPerPage: number = 6;

   const filteredProducts: IProduct[] = useMemo(() =>
      filterProducts(products, filter), [products, filter])


   const productsOnPage: IProduct[] = useMemo(() => {
      if (filteredProducts.length > cardsPerPage) {
         return filteredProducts.slice(cardsPerPage * (curPage - 1),
            curPage * cardsPerPage || curPage * cardsPerPage - filteredProducts.length);
      }
      else return filteredProducts;
   }, [filteredProducts, curPage]);


   useEffect(() => {
      getProducts()
   }, [])



   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Косметика и гигиена</h1>
         <div className={styles.sortWidget}>
            <span className={styles.sortTitle}>Сортировка:</span>
            <SortWidget />
         </div>
         {
            (!screen.isMedia6) &&
            <CategoriesWidget
               className={styles.categories}
               variant={CategoriesWidgetVariant.horizontalButtonList}
               currentCategory={filter.category}
               onClickCategory={(categoryItem) => setProductCategory(categoryItem)}
            />
         }

         <FiltersContainer className={styles.filters} />
         <ProductList className={styles.products} values={productsOnPage} />
         {
            filteredProducts.length > cardsPerPage &&
            <Pagination
               className={styles.pagination}
               curPage={curPage}
               pageCount={Math.ceil(filteredProducts.length / cardsPerPage)}
               pageCountDisplayed={5}
               onPageChange={(page) => { setCurPage(page); window.scrollTo(0, 0) }}
            />
         }


      </div>
   );
};

export default CatalogPage;

