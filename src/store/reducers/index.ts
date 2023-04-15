import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";
import { manufacturerReducer } from "./manufacturerReducer";



export const rootReducer = combineReducers({
   product: productReducer,
   filter: filterReducer,
   manufacturer: manufacturerReducer
})

export type RootState = ReturnType<typeof rootReducer>