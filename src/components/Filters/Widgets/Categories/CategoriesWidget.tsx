import { FC } from 'react';
import { ProductCategory } from 'types/product';
import styles from './CategoriesWidget.module.scss';
import classNames from 'classnames';

export enum CategoriesWidgetVariant {
   horizontalButtonList = "horizontalButtonList",
   verticalLinkList = "verticalLinkList"
}

interface CategoriesWidgetProps {
   currentCategory: ProductCategory,
   onClickCategory: (categoryName: ProductCategory) => void,
   variant: CategoriesWidgetVariant,
   className?: string
}

const categories: Array<ProductCategory> = [
   ProductCategory.All,
   ProductCategory.BodyCare,
   ProductCategory.HandCare,
   ProductCategory.FeetCare,
   ProductCategory.FaceCare,
   ProductCategory.HairCare,
   ProductCategory.TanningProducts,
   ProductCategory.ShavingProducts,
   ProductCategory.GiftSets,
   ProductCategory.HygieneProducts,
   ProductCategory.OralHygiene,
   ProductCategory.PaperProducts,
];

const CategoriesWidget: FC<CategoriesWidgetProps> = ({ currentCategory, onClickCategory, variant, className }) => {

   return (
      <div className={classNames(styles[variant], className)}>
         {
            variant == CategoriesWidgetVariant.verticalLinkList &&
            <h2 className={styles.title}>Тип ухода</h2>
         }
         <ul className={styles.list}>
            {
               categories.map((category, index) =>
                  <li key={index}>
                     <button
                        onClick={() => onClickCategory(category)}
                        className={classNames(styles.item, { "active": category === currentCategory })}
                     >
                        {category}
                     </button>
                  </li>)
            }

         </ul>
      </div>
   );
}

export default CategoriesWidget;