import React, { FC, useEffect, useState, useMemo } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import styles from './FilterWidgetList.module.scss';
import classNames from 'classnames';

interface FilterWidgetListProps {
   values: Map<string, number>,
   onChangeFilterList: (selectedValues: string[]) => void,
   className?: string
}

const FilterWidgetList: FC<FilterWidgetListProps> = ({ values, onChangeFilterList, className }) => {

   const [selectedValues, setSelectedValues] = useState<string[]>([]);
   const [isFullList, setIsFullList] = useState<boolean>(false);
   const filterCategory = useTypedSelector(state => state.filter.category)

   useEffect(() => { onChangeFilterList(selectedValues); },
      [selectedValues])

   useEffect(() => { setSelectedValues([]) },
      [filterCategory])

   const valuesList = useMemo(() =>
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
         valuesList.slice(from, to).map(([valueName, num]) =>
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
      <div className={classNames(styles.filterList, className)}>
         {
            values.size ?
               <>
                  {getCheckBoxList(0, 4)}
                  {isFullList && getCheckBoxList(4, values.size)}
                  {
                     (values.size > 4) &&
                     <button
                        className={classNames(styles.openCloseBtn, { "close-state": isFullList, "open-state": !isFullList })}
                        onClick={() => setIsFullList((prevState) => !prevState)}>
                        <span className={styles.open}>Показать все ▼</span>
                        <span className={styles.close}>Скрыть ▲</span>
                     </button>
                  }
               </>
               : <div className={styles.message}>Производители не найдены</div>
         }
      </div>
   );
}

export default FilterWidgetList;