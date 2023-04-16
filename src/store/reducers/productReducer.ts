import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
   products: [],
   filteredProducts: []
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
   switch (action.type) {
      case ProductActionTypes.GET_PRODUCTS:
         return { ...state, products: action.payload, filteredProducts: action.payload }
      default:
         return state;
   }
}
