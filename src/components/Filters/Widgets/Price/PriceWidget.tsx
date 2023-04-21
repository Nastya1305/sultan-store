import { FC } from 'react';
import "./PriceWidget.scss";
import { PriceLimit } from 'types/filter';


interface PriceWidgetProps {
   startLimit: PriceLimit,
   onChangeMinLimit: (priceMin: number) => void,
   onChangeMaxLimit: (priceMax: number) => void,
}

const PriceWidget: FC<PriceWidgetProps> = ({ startLimit, onChangeMinLimit, onChangeMaxLimit }) => {
   return (
      <div className='price-widget'>
         <div className='price-widget__title'>Цена <span>₽</span></div>
         <div className='price-widget__values'>
            <input type="number"
               onChange={(e) => onChangeMinLimit(Number(e.target.value))}
               className='price-widget__input'
               defaultValue={startLimit.min}
            />
            <div>-</div>
            <input type="number"
               onChange={(e) => onChangeMaxLimit(Number(e.target.value))}
               className='price-widget__input'
               defaultValue={startLimit.max}
            />
         </div>
      </div>
   );
}

export default PriceWidget;