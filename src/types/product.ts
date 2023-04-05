export const enum SizeTypes {
   Volume = "volume",
   Weight = "weight",
}

export const enum ProductTypes {
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
   sizeType: SizeTypes;
   size: number;
   barcode: number;
   manufacturer: string;
   brand: string;
   description: string;
   price: number;
   types: ProductTypes[];
}


export interface ProductState {
   products: IProduct[],
   filteredProducts: IProduct[]
}

export enum ProductActionTypes {
   GET_PRODUCTS = 'GET_PRODUCTS',
   FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
}


interface GetProductAction {
   type: ProductActionTypes.GET_PRODUCTS;
   payload: IProduct[];
}

interface FilterByCategoryAction {
   type: ProductActionTypes.FILTER_BY_CATEGORY;
   payload: ProductTypes;
}

export type ProductAction = GetProductAction | FilterByCategoryAction






export type QueryAction = FilterByCategoryAction