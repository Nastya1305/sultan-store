import { FilterState, FilterAction, FilterActionTypes } from "../../types/filter";
import { ProductCategory } from "../../types/product";

const initialState: FilterState = {
   category: ProductCategory.All,
   priceLimit: { min: 0, max: 1000 },
   manufacturers: []
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
   switch (action.type) {
      case FilterActionTypes.SET_CATEGORY:
         return { ...state, category: action.payload }
      case FilterActionTypes.SET_MIN_PRICE:
         return { ...state, priceLimit: { max: state.priceLimit.max, min: action.payload } }
      case FilterActionTypes.SET_MAX_PRICE:
         return { ...state, priceLimit: { min: state.priceLimit.min, max: action.payload } }
      case FilterActionTypes.SET_MANUFACTURERS:
         return { ...state, manufacturers: action.payload }
      default:
         return state
   }
}


