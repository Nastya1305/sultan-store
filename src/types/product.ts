import { FilterState } from "./filter";

export const enum SizeType {
   Volume = "volume",
   Weight = "weight",
}

export const enum ProductCategory {
   All = "Все",
   BodyCare = "Уход за телом",
   HandCare = "Уход за руками",
   FeetCare = "Уход за ногами",
   FaceCare = "Уход за лицом",
   HairCare = "Уход за волосами",
   TanningProducts = "Средства для загара",
   ShavingProducts = "Средства для бритья",
   GiftSets = "Подарочные наборы",
   HygieneProducts = "Гигиеническая продукция",
   OralHygiene = "Гигиена полости рта",
   PaperProducts = "Бумажная продукция"
}

export interface IProduct {
   img: string;
   name: string;
   sizeType: SizeType;
   size: number;
   barcode: number;
   manufacturer: string;
   brand: string;
   description: string;
   price: number;
   categories: ProductCategory[];
}


export interface ProductState {
   products: IProduct[]
}

export enum ProductActionTypes {
   GET_PRODUCTS = 'GET_PRODUCTS',
   FILTER_PRODUCTS = 'FILTER_PRODUCTS'
}


interface GetProductAction {
   type: ProductActionTypes.GET_PRODUCTS;
   payload: IProduct[];
}

interface FilterProductsAction {
   type: ProductActionTypes.FILTER_PRODUCTS;
   payload: FilterState;
}


export type ProductAction = GetProductAction | FilterProductsAction

