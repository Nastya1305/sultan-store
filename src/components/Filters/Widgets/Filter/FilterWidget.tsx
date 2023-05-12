import { FC, useMemo, useState } from 'react';
import Search from 'components/UI/Search/Search';
import { ManufacturersType } from 'types/filter';
import { searchManufacturersByName } from 'utils/manufacturers';
import FilterWidgetList from './List/FilterWidgetList';
import styles from './FilterWidget.module.scss';


interface FilterWidgetProps {
   filterTitle: string,
   values: Map<string, number>,
   onChangeFilterList: (selectedValues: string[]) => void,
   className?: string
}

const FilterWidget: FC<FilterWidgetProps> = ({ filterTitle, values, onChangeFilterList, className }) => {

   const [searchValue, setSearchValue] = useState<string>("");
   const filteredManufacturers: ManufacturersType = useMemo(() =>
      searchManufacturersByName(values, searchValue),
      [values, searchValue])

   return (
      <div className={className}>
         <div className={styles.name}>{filterTitle}</div>
         <Search className={styles.search} onSearch={(value) => setSearchValue(value)} />
         <FilterWidgetList values={filteredManufacturers} onChangeFilterList={onChangeFilterList} />
      </div>
   );
}

export default FilterWidget;