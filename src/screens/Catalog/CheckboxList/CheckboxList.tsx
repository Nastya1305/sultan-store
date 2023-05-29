import React, { FC, useEffect, useState, useMemo } from 'react';
import styles from './CheckboxList.module.scss';
import classNames from 'classnames';

interface CheckboxListProps {
   values: Map<string, number>,
   onChangeList: (selectedValues: string[]) => void,
   className?: string
}

const CheckboxList: FC<CheckboxListProps> = ({ values, onChangeList, className }) => {
   const [selectedValues, setSelectedValues] = useState<string[]>([]);
   const [isFullList, setIsFullList] = useState<boolean>(false);

   useEffect(() => { onChangeList(selectedValues); },
      [selectedValues])

   useEffect(() => { setSelectedValues([]) },
      [values])

   const sortedList = useMemo(() =>
      Array.from(values).sort(([value1], [value2]) => {
         return Number(selectedValues.includes(value2)) - Number(selectedValues.includes(value1));
      }), [values, selectedValues])


   function handleCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked) {
         setSelectedValues((prevState) => [...prevState, e.target.value]);
      } else {
         setSelectedValues((prevState) => prevState.filter(value => value != e.target.value));
      }
   }


   function getCheckBoxList(from: number, to: number): JSX.Element[] {
      return (
         sortedList.slice(from, to).map(([valueName, num]) =>
            <div className={styles.value} key={valueName}>

               <input type="checkbox"
                  className={styles.checkbox}
                  id={valueName} value={valueName}
                  checked={selectedValues.includes(valueName)}
                  onChange={handleCheckBoxChange} />

               <label htmlFor={valueName}>
                  {`${valueName} (${num})`}
               </label>

            </div>)
      )
   }

   return (
      <div className={className}>
         {
            (values.size > 0) ?
               <>
                  {getCheckBoxList(0, 4)}
                  {isFullList && getCheckBoxList(4, values.size)}
                  {
                     (values.size > 4) &&
                     <button
                        className={classNames(styles.openCloseBtn, { "fullList": isFullList })}
                        onClick={() => setIsFullList((prevState) => !prevState)}>
                        <span className={styles.openBtn}>Показать все ▼</span>
                        <span className={styles.closeBtn}>Скрыть ▲</span>
                     </button>
                  }
               </>
               : <div className={styles.message}>Производители не найдены</div>
         }
      </div>
   );
}

export default CheckboxList;