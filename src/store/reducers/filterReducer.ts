import { FilterState, FilterAction, FilterActionTypes } from "../../types/filter";
import { ProductTypes } from "../../types/product";

const initialState: FilterState = {
   category: ProductTypes.All,
   price: { min: 0, max: 1000 }
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
   switch (action.type) {
      case FilterActionTypes.SET_CATEGORY:
         return { ...state, category: action.payload }
      case FilterActionTypes.SET_PRICE:
         return { ...state, price: action.payload }
      default:
         return state
   }
}


