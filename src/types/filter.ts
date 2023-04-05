import { ProductTypes } from "./product";

export interface Price {
   min?: number,
   max?: number,
}

export interface FilterState {
   category: ProductTypes,
   price: Price,
}

export enum FilterActionTypes {
   SET_CATEGORY = 'SET_CATEGORY',
   SET_PRICE = 'SET_PRICE',
}

interface SetCategoryAction {
   type: FilterActionTypes.SET_CATEGORY,
   payload: ProductTypes
}

interface SetPriceAction {
   type: FilterActionTypes.SET_PRICE,
   payload: Price
}

export type FilterAction = SetCategoryAction | SetPriceAction