import { ManufacturerAction, ManufacturerActionTypes, ManufacturerState, ManufacturersType } from "../../types/manufacturer";
import { searchManufacturersByName, manufacturersFromProducts } from "../../utils/manufacturers";

const initialState: ManufacturerState = {
   manufacturers: new Map(),
   filteredManufacturers: new Map(),
}

export const manufacturerReducer = (state = initialState, action: ManufacturerAction): ManufacturerState => {
   switch (action.type) {
      case ManufacturerActionTypes.GET_MANUFACTURERS:
         let value: ManufacturersType = manufacturersFromProducts(action.payload);
         return { ...state, manufacturers: value, filteredManufacturers: value }
      case ManufacturerActionTypes.FILTER_MANUFACTURERS:
         return { ...state, filteredManufacturers: searchManufacturersByName(state.manufacturers, action.payload) }
      default:
         return state;
   }
}