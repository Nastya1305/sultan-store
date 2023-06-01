import { IProduct } from "./product"

export interface CartState {
   products: Map<IProduct, number>
}

export enum CartActionTypes {
   ADD_PRODUCT = 'ADD_PRODUCT',
   REMOVE_PRODUCT = 'REMOVE_PRODUCT',
   REMOVE_PRODUCTS = 'REMOVE_PRODUCTS',
   EMPTY_CART = 'EMPTY_CART'
}

interface AddProductAction {
   type: CartActionTypes.ADD_PRODUCT,
   payload: IProduct
}

interface RemoveProductAction {
   type: CartActionTypes.REMOVE_PRODUCT,
   payload: IProduct
}

interface RemoveProductsAction {
   type: CartActionTypes.REMOVE_PRODUCTS,
   payload: IProduct
}

interface EmptyCartAction {
   type: CartActionTypes.EMPTY_CART,
}

export type CartAction = AddProductAction | RemoveProductAction | RemoveProductsAction | EmptyCartAction