import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";
import { cartReducer } from "./cartReducer";


export const rootReducer = combineReducers({
   product: productReducer,
   filter: filterReducer,
   cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>