
import { CartAction, CartActionTypes } from "types/cart";
import { IProduct } from "../../types/product";


export function addProduct(product: IProduct): CartAction {
   return { type: CartActionTypes.ADD_PRODUCT, payload: product }
}

export function removeProduct(product: IProduct): CartAction {
   return { type: CartActionTypes.REMOVE_PRODUCT, payload: product }
}