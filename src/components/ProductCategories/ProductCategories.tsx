import React, { FC } from 'react';
import { ProductCategory } from '../../types/product';
import "./ProductCategories.scss";


interface ProductCategoriesProps {
   currentCategory: ProductCategory,
   onClickCategory: (categoryName: ProductCategory) => void,
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

const ProductCategories: FC<ProductCategoriesProps> = ({ currentCategory, onClickCategory }) => {

   function getItemClassName(category: ProductCategory): string {
      let className: string = "categories__item";
      if (category === currentCategory)
         className += " active";
      return className;
   }

   return (
      <div className='categories'>
         <ul className='categories__list'>
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

export default ProductCategories;