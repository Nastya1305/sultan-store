import { ProductCategory } from "./product";

export interface PriceLimit {
   min: number,
   max: number,
}


export interface FilterState {
   category: ProductCategory,
   priceLimit: PriceLimit,
   manufacturers: string[]
}

export enum FilterActionTypes {
   SET_CATEGORY = 'SET_CATEGORY',
   SET_MIN_PRICE = 'SET_MIN_PRICE',
   SET_MAX_PRICE = 'SET_MAX_PRICE',
   SET_MANUFACTURERS = 'SET_MANUFACTURERS'
}

interface SetCategoryAction {
   type: FilterActionTypes.SET_CATEGORY,
   payload: ProductCategory
}

interface SetMinPriceAction {
   type: FilterActionTypes.SET_MIN_PRICE,
   payload: number
}

interface SetMaxPriceAction {
   type: FilterActionTypes.SET_MAX_PRICE,
   payload: number
}

interface SetManufacturersAction {
   type: FilterActionTypes.SET_MANUFACTURERS,
   payload: string[]
}

export type FilterAction = SetCategoryAction | SetMinPriceAction | SetMaxPriceAction | SetManufacturersAction