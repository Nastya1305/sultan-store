import { FC, useEffect, useMemo } from 'react';
import "./CatalogPage.scss";

import ProductList from 'components/Product/List/ProductList';
import FiltersContainer from 'components/Filters/Container/FiltersContainer';
import ProductCategories, { ProductCategoriesVariant } from 'components/Filters/Widgets/Categories/CategoriesWidget';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from "hooks/useActions";
import { useResize } from 'hooks/useResize';

import { filterProducts } from 'utils/filter';
import { IProduct } from 'types/product';


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

export default CatalogPage;

