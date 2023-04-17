import { FilterState } from "../types/filter";
import { IProduct, ProductCategory } from "../types/product";

export function filterProducts(products: IProduct[],
   {
      category = ProductCategory.All,
      priceLimit = { min: 0, max: 10000 },
      manufacturers = []
   }: FilterState): IProduct[] {

   let results: IProduct[] = products.filter((product) => {
      return (category === ProductCategory.All || product.categories.includes(category)) &&
         product.price <= priceLimit.max && product.price >= priceLimit.min &&
         (!manufacturers.length || manufacturers.includes(product.manufacturer))
   })

   return results;
}