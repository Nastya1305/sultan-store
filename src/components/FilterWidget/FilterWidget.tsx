import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import "./FilterWidget.scss";
import Search from '../UI/Search/Search';
import { useActions } from '../../hooks/useActions';


interface FilterWidgetProps {
   filterTitle: string,
   values: Map<string, number>,
   onChangeFilterList: (selectedValues: string[]) => void
}

const FilterWidget: FC<FilterWidgetProps> = ({ filterTitle, values, onChangeFilterList }) => {
   const { filterManufacturers } = useActions()
   const [selectedValues, setSelectedValues] = useState<string[]>([]);
   const [isFullList, setIsFullList] = useState<boolean>(false);

   useEffect(() => { onChangeFilterList(selectedValues); },
      [selectedValues])

   function handleCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked) {
         setSelectedValues((prevState) => [...prevState, e.target.value]);
      } else {
         setSelectedValues((prevState) => prevState.filter(value => value != e.target.value));
      }
   }

   function getCheckBoxList(values: Map<string, number>, from: number, to: number): JSX.Element[] {
      return (
         Array.from(values).slice(from, to).map(([valueName, num]) =>
            <div className='filter__value' key={valueName}>

               <input type="checkbox"
                  className='filter__checkbox'
                  id={valueName} value={valueName}
                  checked={selectedValues.includes(valueName)}
                  onChange={handleCheckBoxChange} />

               <label htmlFor={valueName}>
                  {`${valueName} (${num})`}
               </label>

            </div>))
   }

   return (
      <div className='filter'>
         <div className='filter__name'>{filterTitle}</div>
         <Search className='filter__search' onSearch={(searchValue) => filterManufacturers(searchValue)} />
         <div className='filter__value-list'>
            {getCheckBoxList(values, 0, 4)}
            {isFullList && getCheckBoxList(values, 4, values.size)}
            {
               (values.size > 4) &&
               <button
                  className={'filter__open-close ' + (isFullList ? "close-state" : "open-state")}
                  onClick={() => setIsFullList((prevState) => !prevState)}>
                  <span className='open'>Показать все ▼</span>
                  <span className='close'>Скрыть ▲</span>
               </button>
            }

         </div>


      </div>
   );
}

export default FilterWidget;