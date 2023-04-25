import { Dispatch } from "redux";
import { ProductCategory } from "../../types/product";
import { FilterAction, FilterActionTypes, SortTypes } from "../../types/filter";


export function setProductCategory(categoryName: ProductCategory): FilterAction {
   return { type: FilterActionTypes.SET_CATEGORY, payload: categoryName }
}

export function setMinProductPrice(minPrice: number): FilterAction {
   return { type: FilterActionTypes.SET_MIN_PRICE, payload: minPrice }
}

export function setMaxProductPrice(maxPrice: number): FilterAction {
   return { type: FilterActionTypes.SET_MAX_PRICE, payload: maxPrice }
}

export function setManufacturers(manufacturersNames: string[]): FilterAction {
   return { type: FilterActionTypes.SET_MANUFACTURERS, payload: manufacturersNames }
}

export function setSort(sort: SortTypes): FilterAction {
   return { type: FilterActionTypes.SET_SORT, payload: sort }
}
