import { FC } from 'react';
import { ProductCategory } from 'types/product';
import "./CategoriesWidget.scss";

export enum CategoriesWidgetVariant {
   horizontalButtonList = "horizontal-button-list",
   verticalLinkList = "vertical-link-list"
}

interface CategoriesWidgetProps {
   currentCategory: ProductCategory,
   onClickCategory: (categoryName: ProductCategory) => void,
   variant: CategoriesWidgetVariant
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

const CategoriesWidget: FC<CategoriesWidgetProps> = ({ currentCategory, onClickCategory, variant }) => {

   function getItemClassName(category: ProductCategory): string {
      let className: string = variant + '__item';
      if (category === currentCategory)
         className += " active";
      return className;
   }

   return (
      <div className={variant}>
         {
            variant == CategoriesWidgetVariant.verticalLinkList &&
            <h2 className={variant + '__title'}>Тип ухода</h2>
         }
         <ul className={variant + '__list'}>
            {
               categories.map((category, index) =>
                  <li key={index}>
                     <button onClick={() => onClickCategory(category)} className={getItemClassName(category)}>
                        {category}
                     </button>
                  </li>)
            }

         </ul>
      </div>
   );
}

export default CategoriesWidget;