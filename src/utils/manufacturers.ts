import { IProduct } from "../types/product";
import { ManufacturersType } from "../types/filter";

export function getManufacturersFromProducts(products: IProduct[]): ManufacturersType {
   return products.reduce((manufacturers, product) => {
      let numOfProducts = 0;
      if (manufacturers.has(product.manufacturer)) {
         numOfProducts = manufacturers.get(product.manufacturer);
      }
      return manufacturers.set(product.manufacturer, ++numOfProducts);
   }, new Map());
}


export function searchManufacturersByName(manufacturers: ManufacturersType, query: string): ManufacturersType {
   return new Map(Array.from(manufacturers).filter(([manufacturerName]) =>
      manufacturerName.toLowerCase().includes(query.toLowerCase())));
}