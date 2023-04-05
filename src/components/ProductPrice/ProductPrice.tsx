import React, { FC } from 'react';
import "./ProductPrice.scss";


const ProductPrice: FC = () => {
   return (
      <div className='price-widget'>
         <div className='price-widget__title'>Цена <span>₽</span></div>
         <div className='price-widget__values'>
            <input className='price-widget__input' type="number" defaultValue={0} />
            <div>-</div>
            <input className='price-widget__input' type="number" defaultValue={100} />
         </div>
      </div>
   );
}

export default ProductPrice;