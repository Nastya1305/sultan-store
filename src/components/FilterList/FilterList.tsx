import React, { FC, useEffect, useState, useMemo } from 'react';
import "./FilterList.scss";
import { useTypedSelector } from '../../hooks/useTypedSelector';


interface FilterListProps {
   values: Map<string, number>,
   onChangeFilterList: (selectedValues: string[]) => void
}

const FilterList: FC<FilterListProps> = ({ values, onChangeFilterList }) => {

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
            <div className='filter-list__value' key={valueName}>

               <input type="checkbox"
                  className='filter-list__checkbox'
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
      <div className='filter-list'>
         {getCheckBoxList(0, 4)}
         {isFullList && getCheckBoxList(4, values.size)}
         {
            (values.size > 4) &&
            <button
               className={'filter-list__open-close ' + (isFullList ? "close-state" : "open-state")}
               onClick={() => setIsFullList((prevState) => !prevState)}>
               <span className='open'>Показать все ▼</span>
               <span className='close'>Скрыть ▲</span>
            </button>
         }

      </div>
   );
}

export default FilterList;