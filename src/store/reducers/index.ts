import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";


export const rootReducer = combineReducers({
   product: productReducer,
   filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>