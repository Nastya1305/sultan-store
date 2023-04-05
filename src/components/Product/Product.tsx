import React, { FC } from 'react';
import { IProduct, SizeTypes } from "../../types/product";
import "./Product.scss";
import Button from '../UI/Button/Button';

const boxImg: string = require("../../assets/images/Product/box.svg");
const bottleImg: string = require("../../assets/images/Product/bottle.svg");
const basketImg: string = require('../../assets/images/Product/basket.svg');


interface ProductItemProps {
   product: IProduct;
}

const Product: FC<ProductItemProps> = ({ product }) => {

   let imgURL: string = "";
   let units: string = "";
   switch (product.sizeType) {
      case SizeTypes.Volume:
         imgURL = bottleImg;
         units = "мл";
         break;
      case SizeTypes.Weight:
         imgURL = boxImg;
         units = "г"
         break;
   }


   return (
      <div className='product-card'>
         <div className='product-card__img'>
            <img src={product.img} alt={product.name} />
         </div>
         <div className='product-card__size product-size'>
            <div className='product-size__img'><img src={imgURL} alt="Тип размера" /></div>
            <div className='product-size__value'>{product.size + " " + units}</div>
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
            <Button className='product-card__btn'>
               <span>В корзину</span>
               <img src={basketImg}></img>
            </Button>
         </div>
      </div>
   )
}

export default Product;





