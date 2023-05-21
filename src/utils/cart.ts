import { IProduct } from "types/product";

export function getNumberOfProducts(products: Map<IProduct, number>): number {
   let total: number = 0;
   products.forEach((num) => total += num);
   return total;
}

export function getTotalCost(products: Map<IProduct, number>): number {
   let total: number = 0;
   products.forEach((num, product) => total += num * product.price);
   return total;
}