import { FC, useMemo, useState } from 'react';
import "./FilterWidget.scss";
import Search from 'components/UI/Search/Search';
import { ManufacturersType } from 'types/filter';
import { searchManufacturersByName } from 'utils/manufacturers';
import FilterWidgetList from './List/FilterWidgetList';


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
         <FilterWidgetList values={filteredManufacturers} onChangeFilterList={onChangeFilterList} />
      </div>
   );
}

export default FilterWidget;