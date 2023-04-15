import { IProduct } from "./product"

export type ManufacturersType = Map<string, number>;


export interface ManufacturerState {
   manufacturers: ManufacturersType,
   filteredManufacturers: ManufacturersType,
}

export enum ManufacturerActionTypes {
   GET_MANUFACTURERS = 'GET_MANUFACTURERS',
   FILTER_MANUFACTURERS = 'FILTER_MANUFACTURERS',
}

interface GetManufacturerAction {
   type: ManufacturerActionTypes.GET_MANUFACTURERS,
   payload: IProduct[]
}

interface FilterManufacturerAction {
   type: ManufacturerActionTypes.FILTER_MANUFACTURERS,
   payload: string
}

export type ManufacturerAction = GetManufacturerAction | FilterManufacturerAction