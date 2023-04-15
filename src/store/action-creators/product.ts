import { FilterState } from "../../types/filter";
import { ProductAction, ProductActionTypes } from "../../types/product";
import { Dispatch } from "redux";
import goods from 'assets/local-data/goods.json';

export const getProducts = () => {
   return { type: ProductActionTypes.GET_PRODUCTS, payload: goods }
   // return async (dispatch: Dispatch<ProductAction>) => {
   //    try {
   //       const response = await fetch()
   //       if (response.ok) {
   //          const data = await response.json()
   //          dispatch({ type: ProductActionTypes.GET_PRODUCTS, payload: data })
   //       } else {
   //          console.log(response.statusText);
   //       }

   //    } catch (e) {
   //       console.log(e);
   //    }
   // }
}

export function filterProducts(filter: FilterState): ProductAction {
   return { type: ProductActionTypes.FILTER_PRODUCTS, payload: filter }
}
