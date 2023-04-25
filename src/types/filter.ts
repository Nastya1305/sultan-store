import { ProductCategory } from "./product";

export interface PriceLimit {
   min: number,
   max: number,
}

export const enum SortTypes {
   ByName = 'По названию',
   FirstCheap = 'Сначала дешёвые',
   FirstExpensive = 'Сначала дорогие'
}

export function stringToSortType(str: string): SortTypes {
   switch (str) {
      case SortTypes.FirstCheap:
         return SortTypes.FirstCheap;
      case SortTypes.FirstExpensive:
         return SortTypes.FirstExpensive;
      default:
         return SortTypes.ByName;
   }
}

export type ManufacturersType = Map<string, number>;

export interface FilterState {
   category: ProductCategory,
   priceLimit: PriceLimit,
   manufacturers: string[],
   sort: SortTypes
}

export enum FilterActionTypes {
   SET_CATEGORY = 'SET_CATEGORY',
   SET_MIN_PRICE = 'SET_MIN_PRICE',
   SET_MAX_PRICE = 'SET_MAX_PRICE',
   SET_MANUFACTURERS = 'SET_MANUFACTURERS',
   SET_SORT = 'SET_SORT'
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

interface SetSortAction {
   type: FilterActionTypes.SET_SORT,
   payload: SortTypes
}

export type FilterAction = SetCategoryAction | SetMinPriceAction | SetMaxPriceAction | SetManufacturersAction | SetSortAction