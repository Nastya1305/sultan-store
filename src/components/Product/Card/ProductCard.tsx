import { FC, useEffect, useRef } from 'react';
import { IProduct, SizeType } from "types/product";
import "./ProductCard.scss";
import Button from 'components/UI/Button/Button';

const boxImg: string = require("assets/images/Product/box.svg").default;
const bottleImg: string = require("assets/images/Product/bottle.svg").default;
const basketImg: string = require('assets/images/Product/basket.svg').default;


interface ProductCardProps {
   product: IProduct;
}

interface ProductSize {
   imgURL: string,
   units: string
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

   const productSize = useRef<ProductSize>({ imgURL: "", units: "" });

   useEffect(() => {
      switch (product.sizeType) {
         case SizeType.Volume:
            productSize.current.imgURL = bottleImg;
            productSize.current.units = "мл";
            break;
         case SizeType.Weight:
            productSize.current.imgURL = boxImg;
            productSize.current.units = "г"
            break;
      }
   }, [])



   return (
      <div className='product-card'>
         <div className='product-card__img'>
            <img src={require("assets/" + product.img)} alt={product.name} />
         </div>
         <div className='product-card__size product-size'>
            <div className='product-size__img'><img src={productSize.current.imgURL} alt="Тип размера" /></div>
            <div className='product-size__value'>{product.size + " " + productSize.current.units}</div>
         </div>
         <a href="#" className='product-card__title'>
            <b>{product.brand} </b>
            <span>{product.name}</span>
         </a>
         <div className='product-card__properties'>
            <div className="product-property">
               <span className="product-property__key">Штрихкод: </span>
               <span className="product-property__value">{product.barcode}</span>
            </div>
            <div className="product-property">
               <span className="product-property__key">Производитель: </span>
               <span className="product-property__value">{product.manufacturer}</span>
            </div>
            <div className="product-property">
               <span className="product-property__key">Бренд: </span>
               <span className="product-property__value">{product.brand}</span>
            </div>
         </div>
         <div className='product-card__buy'>
            <div className='product-card__price'>{product.price} ₽</div>
            <Button className='product-card__btn' onClick={() => { }}>
               <span>В корзину</span>
               <img src={basketImg}></img>
            </Button>
         </div>
      </div>
   )
}

export default ProductCard;





