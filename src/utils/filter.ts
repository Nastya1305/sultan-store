import { SortTypes } from "../types/filter";
import { IProduct, ProductCategory } from "../types/product";

export function filterProducts(products: IProduct[],
   {
      category = ProductCategory.All,
      priceLimit = { min: 0, max: 10000 },
      manufacturers = [''],
      sort = SortTypes.ByName
   }): IProduct[] {

   let results: IProduct[] = products.filter((product) => {
      return (category === ProductCategory.All || product.categories.includes(category)) &&
         product.price <= priceLimit.max && product.price >= priceLimit.min &&
         (!manufacturers.length || manufacturers.includes(product.manufacturer))
   })

   return sortProducts(results, sort);
}

function sortProducts(products: IProduct[], sortType: SortTypes): IProduct[] {
   switch (sortType) {
      case SortTypes.ByName:
         return [...products.sort((product1, product2) => (product1.name < product2.name) ? -1 : (product1.name > product2.name) ? 1 : 0)];
      case SortTypes.FirstCheap:
         return [...products.sort((product1, product2) => product1.price - product2.price)];
      case SortTypes.FirstExpensive:
         return [...products.sort((product1, product2) => product2.price - product1.price)]
   }
}

export function getProductByBarcode(products: IProduct[], barcode: number): IProduct | undefined {
   return products.find((product) => { return product.barcode === barcode });
}