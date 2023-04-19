import React, { FC, useMemo, useState } from 'react';
import "./FilterWidget.scss";
import Search from '../UI/Search/Search';
import { ManufacturersType } from '../../types/filter';
import { searchManufacturersByName } from '../../utils/manufacturers';
import FilterList from '../FilterList/FilterList';


interface FilterWidgetProps {
   filterTitle: string,
   values: Map<string, number>,
   onChangeFilterList: (selectedValues: string[]) => void
}

const FilterWidget: FC<FilterWidgetProps> = ({ filterTitle, values, onChangeFilterList }) => {

   const [searchValue, setSearchValue] = useState<string>("");
   const filteredManufacturers: ManufacturersType = useMemo(() =>
      searchManufacturersByName(values, searchValue),
      [values, searchValue])

   return (
      <div className='filter'>
         <div className='filter__name'>{filterTitle}</div>
         <Search className='filter__search' onSearch={(value) => setSearchValue(value)} />
         <FilterList values={filteredManufacturers} onChangeFilterList={onChangeFilterList} />
      </div>
   );
}

export default FilterWidget;