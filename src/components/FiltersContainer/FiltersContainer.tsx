import React, { FC, useEffect, useMemo, useState } from 'react';
import ProductCategories, { ProductCategoriesVariant } from '../../components/ProductCategories/ProductCategories';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import "./FiltersContainer.scss";
import PriceWidget from '../../components/PriceWidget/PriceWidget';
import FilterWidget from '../../components/FilterWidget/FilterWidget';
import { getManufacturersFromProducts } from '../../utils/manufacturers';
import { ManufacturersType } from '../../types/filter';
import { filterProducts } from '../../utils/filter';
import { useResize } from '../../hooks/useResize';

const arrowImg: string = require("../../assets/images/FilterContainer/arrow-down.svg").default;


const FiltersContainer: FC = () => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, setMinProductPrice, setMaxProductPrice, setManufacturers } = useActions();

   const screen = useResize();
   const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);

   const manufacturers: ManufacturersType = useMemo(() =>
      getManufacturersFromProducts(filterProducts(products,
         { category: filter.category, priceLimit: filter.priceLimit, manufacturers: [] })),
      [products, filter.category, filter.priceLimit])

   return (
      <div className='filters-container'>
         <div className='filters'>
            <div className='filters__header filters-header'>
               <div className='filters-header__text'>Подбор по параметрам</div>
               {
                  screen.isMedia2 &&
                  <button
                     className={'filters-header__btn ' + (isFilterListOpen ? "up" : "down")}
                     onClick={() => setIsFilterListOpen((prevState) => !prevState)}
                  >
                     <img src={arrowImg} alt="стрелка" />
                  </button>
               }
            </div>

            <div className={'filters__list ' + (!screen.isMedia2 || isFilterListOpen ? "open" : "close")}>
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
            </div>
         </div>

         {
            (!screen.isMedia2 || screen.isMedia6) &&
            <ProductCategories
               variant={ProductCategoriesVariant.verticalLinkList}
               currentCategory={filter.category}
               onClickCategory={(categoryItem) =>
                  setProductCategory(categoryItem)}
            />
         }

      </div>
   );
};

export default FiltersContainer;

