import { FC } from 'react';
import styles from './Categories.module.scss';
import classNames from 'classnames';
import { ProductCategory } from 'types/product';

export enum CategoriesVariant {
   horizontalButtonList = "horizontalButtonList",
   verticalLinkList = "verticalLinkList"
}

interface CategoriesProps {
   currentCategory: ProductCategory,
   onClickCategory: (categoryName: ProductCategory) => void,
   variant: CategoriesVariant,
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

const Categories: FC<CategoriesProps> = ({ currentCategory, onClickCategory, variant, className }) => {

   return (
      <div className={classNames(styles[variant], className)}>
         {
            variant == CategoriesVariant.verticalLinkList &&
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

export default Categories;