import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";
import { filter } from "../../utils/filter";

const initialState: ProductState = {
   products: [],
   filteredProducts: []
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
   switch (action.type) {
      case ProductActionTypes.GET_PRODUCTS:
         return { ...state, products: action.payload, filteredProducts: action.payload }
      case ProductActionTypes.FILTER_PRODUCTS:
         return { ...state, filteredProducts: filter(state.products, action.payload) };
      default:
         return state;
   }
}
