import { CartAction, CartActionTypes, CartState } from "types/cart";
import { IProduct } from "types/product";

const initialState: CartState = {
   products: new Map()
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
   switch (action.type) {
      case CartActionTypes.ADD_PRODUCT:
         return { ...state, products: addProduct(action.payload, state.products) }
      case CartActionTypes.REMOVE_PRODUCT:
         return { ...state, products: removeProduct(action.payload, state.products) }
      default:
         return state
   }
}

function addProduct(product: IProduct, products: Map<IProduct, number>): Map<IProduct, number> {
   let value: number | undefined = products.get(product);
   if (value) {
      return new Map(products).set(product, value + 1);
   }
   return new Map(products).set(product, 1);
}

function removeProduct(product: IProduct, products: Map<IProduct, number>): Map<IProduct, number> {
   let value: number | undefined = products.get(product);
   if (value) {
      if (value === 1) {
         let newMap = new Map(products);
         newMap.delete(product);
         return newMap;
      }
      return new Map(products).set(product, value - 1);
   } else
      return new Map(products);
}