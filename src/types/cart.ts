import { IProduct } from "./product"

export interface CartState {
   products: Map<IProduct, number>
}

export enum CartActionTypes {
   ADD_PRODUCT = 'ADD_PRODUCT',
   REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

interface AddProductAction {
   type: CartActionTypes.ADD_PRODUCT,
   payload: IProduct
}

interface RemoveProductAction {
   type: CartActionTypes.REMOVE_PRODUCT,
   payload: IProduct
}

export type CartAction = AddProductAction | RemoveProductAction