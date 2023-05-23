import { FC, useMemo, useState } from 'react';
import styles from './FiltersContainer.module.scss';
import classNames from 'classnames';

import Categories, { CategoriesVariant } from 'screens/Catalog/Categories/Categories';
import PriceFilter from 'screens/Catalog/PriceFilter/PriceFilter';
import FilterWidget from 'screens/Catalog/FilterWidget/FilterWidget';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from "hooks/useActions";
import { useResize } from 'hooks/useResize';

import { getManufacturersFromProducts } from 'utils/manufacturers';
import { filterProducts } from 'utils/filter';
import { ManufacturersType, SortTypes } from 'types/filter';

const arrowImg: string = require("assets/images/FilterContainer/arrow-down.svg").default;


interface FiltersContainerProps {
   className?: string
}

const FiltersContainer: FC<FiltersContainerProps> = ({ className }) => {
   const filter = useTypedSelector(state => state.filter)
   const { products } = useTypedSelector(state => state.product)
   const { setProductCategory, setMinProductPrice, setMaxProductPrice, setManufacturers } = useActions();

   const screen = useResize();
   const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);

   const manufacturers: ManufacturersType = useMemo(() =>
      getManufacturersFromProducts(filterProducts(products,
         { category: filter.category, priceLimit: filter.priceLimit, manufacturers: [], sort: SortTypes.ByName })),
      [products, filter.category, filter.priceLimit])

   return (
      <div className={className}>
         <div className={styles.filters}>
            <div className={styles.header}>
               <div className={styles.text}>Подбор по параметрам</div>
               {
                  screen.isMedia2 &&
                  <button
                     className={classNames(styles.btn, { "up": isFilterListOpen, "down": !isFilterListOpen })}
                     onClick={() => setIsFilterListOpen((prevState) => !prevState)}
                  >
                     <img src={arrowImg} alt="стрелка" />
                  </button>
               }
            </div>

            <div className={classNames(styles.list, { "open": !screen.isMedia2 || isFilterListOpen, "close": screen.isMedia2 && !isFilterListOpen })}>
               <PriceFilter
                  className={styles.priceWidget}
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
            <Categories
               variant={CategoriesVariant.verticalLinkList}
               currentCategory={filter.category}
               onClickCategory={(categoryItem) =>
                  setProductCategory(categoryItem)}
            />
         }

      </div>
   );
};

export default FiltersContainer;

