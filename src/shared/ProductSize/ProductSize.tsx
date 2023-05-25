import { FC, useMemo } from 'react';
import { SizeType } from "types/product";
import styles from './ProductSize.module.scss';
import classNames from 'classnames';

const boxImg: string = require("assets/images/product-size/box.svg").default;
const bottleImg: string = require("assets/images/product-size/bottle.svg").default;

interface ProductSizeProps {
   sizeType: SizeType,
   sizeValue: number,
   className?: string
}

interface ProductSize {
   imgURL: string,
   units: string
}

const ProductSize: FC<ProductSizeProps> = ({ sizeType, sizeValue, className }) => {

   const productSize: ProductSize = useMemo(() => {
      switch (sizeType) {
         case SizeType.Volume:
            return { imgURL: bottleImg, units: "мл" }
         case SizeType.Weight:
            return { imgURL: boxImg, units: "г" }
      }
   }, [sizeType])

   return (
      <div className={classNames(styles.container, className)}>
         <div>
            <img src={productSize.imgURL} alt="Тип размера" />
         </div>
         <div>{sizeValue + " " + productSize.units}</div>
      </div>
   )
}

export default ProductSize;





