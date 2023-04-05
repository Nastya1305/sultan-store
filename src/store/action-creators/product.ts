import { Price } from "../../types/filter";
import { ProductAction, ProductActionTypes, ProductTypes } from "../../types/product";
import { Dispatch } from "redux";

export const getProducts = () => {
   return async (dispatch: Dispatch<ProductAction>) => {
      try {
         const response = await fetch(`https://642b3799208dfe25471497d5.mockapi.io/products`)
         if (response.ok) {
            const data = await response.json()
            dispatch({ type: ProductActionTypes.GET_PRODUCTS, payload: data })
         } else {
            console.log(response.statusText);
         }

      } catch (e) {
         console.log(e);
      }
   }
}

export function filterProductsByCategory(categoryName: ProductTypes): ProductAction {
   return { type: ProductActionTypes.FILTER_BY_CATEGORY, payload: categoryName }
}
