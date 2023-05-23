import { FC } from 'react';
import { PriceLimit } from 'types/filter';
import styles from './PriceFilter.module.scss';


interface PriceFilterProps {
   startLimit: PriceLimit,
   onChangeMinLimit: (priceMin: number) => void,
   onChangeMaxLimit: (priceMax: number) => void,
   className?: string
}

const PriceFilter: FC<PriceFilterProps> = ({ startLimit, onChangeMinLimit, onChangeMaxLimit, className }) => {
   return (
      <div className={className}>
         <div className={styles.title}>Цена <span>₽</span></div>
         <div className={styles.values}>
            <input type="number"
               onChange={(e) => onChangeMinLimit(Number(e.target.value))}
               className={styles.input}
               defaultValue={startLimit.min}
            />
            <div>-</div>
            <input type="number"
               onChange={(e) => onChangeMaxLimit(Number(e.target.value))}
               className={styles.input}
               defaultValue={startLimit.max}
            />
         </div>
      </div>
   );
}

export default PriceFilter;