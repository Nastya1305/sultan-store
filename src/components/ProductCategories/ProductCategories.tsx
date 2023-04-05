import React, { FC } from 'react';
import { ProductTypes } from '../../types/product';
import "./ProductCategories.scss";


interface ProductCategoriesProps {
   value: ProductTypes,
   onClickCategory: (categoryName: ProductTypes) => void,
}


const ProductCategories: FC<ProductCategoriesProps> = ({ value, onClickCategory }) => {


   const categories: Array<ProductTypes> = [
      ProductTypes.All,
      ProductTypes.BodyCare,
      ProductTypes.HandCare,
      ProductTypes.FeetCare,
      ProductTypes.FaceCare,
      ProductTypes.HairCare,
      ProductTypes.TanningProducts,
      ProductTypes.ShavingProducts,
      ProductTypes.GiftSets,
      ProductTypes.HygieneProducts,
      ProductTypes.OralHygiene,
      ProductTypes.PaperProducts,
   ];


   function getItemClassName(categoryName: ProductTypes): string {
      let className: string = "categories__item";
      if (categoryName === value)
         className += " active";
      return className;
   }

   return (
      <div className='categories'>
         <ul className='categories__list'>
            {
               categories.map((categoryName, index) =>
                  <li key={index}>
                     <button onClick={() => onClickCategory(categoryName)} className={getItemClassName(categoryName)}>
                        {categoryName}
                     </button>
                  </li>)
            }

         </ul>
      </div>
   );
}

export default ProductCategories;