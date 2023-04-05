import { Dispatch } from "redux";
import { ProductTypes } from "../../types/product";
import { FilterAction, FilterActionTypes, Price } from "../../types/filter";

export function setProductCategory(categoryName: ProductTypes): FilterAction {
   return { type: FilterActionTypes.SET_CATEGORY, payload: categoryName }
}

export function setProductPrice(price: Price): FilterAction {
   return { type: FilterActionTypes.SET_PRICE, payload: price }
}