import { ManufacturerAction, ManufacturerActionTypes } from "../../types/manufacturer"
import { IProduct } from "../../types/product"


export function getManufacturers(products: IProduct[]): ManufacturerAction {
   return { type: ManufacturerActionTypes.GET_MANUFACTURERS, payload: products }
}

export function filterManufacturers(query: string): ManufacturerAction {
   return { type: ManufacturerActionTypes.FILTER_MANUFACTURERS, payload: query }
}