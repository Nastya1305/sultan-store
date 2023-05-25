import { FC, useMemo, useState } from 'react';
import Input from 'shared/UI/Input/Input';
import { ManufacturersType } from 'types/filter';
import { searchManufacturersByName } from 'utils/manufacturers';
import CheckboxList from 'screens/Catalog/CheckboxList/CheckboxList';
import styles from './FilterWidget.module.scss';
import { ReactComponent as SearchIcon } from "assets/images/search.svg";

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
         <Input
            className={styles.search}
            onInput={(value) => setSearchValue(value)}
            placeholder='Поиск...'
            btnIcon={<SearchIcon stroke='white' />}
         />
         <CheckboxList values={filteredManufacturers} onChangeList={onChangeFilterList} />
      </div>
   );
}

export default FilterWidget;