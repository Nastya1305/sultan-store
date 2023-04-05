import { ProductAction, ProductActionTypes, ProductState, ProductTypes } from "../../types/product";

const initialState: ProductState = {
   products: [],
   filteredProducts: []
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
   switch (action.type) {
      case ProductActionTypes.GET_PRODUCTS:
         return { ...state, products: action.payload }
      case ProductActionTypes.FILTER_BY_CATEGORY:
         if (action.payload === ProductTypes.All)
            return { ...state, filteredProducts: state.products };
         return { ...state, filteredProducts: state.products.filter((product) => product.types.includes(action.payload)) };
      default:
         return state;
   }
}
