import { FC } from 'react';
import { SortTypes, stringToSortType } from 'types/filter';
import { useActions } from "hooks/useActions";
import { useTypedSelector } from 'hooks/useTypedSelector';
import Select from 'components/UI/Select/Select';
import "./SortWidget.scss";

const sortTypes: Array<SortTypes> = [
   SortTypes.FirstCheap,
   SortTypes.FirstExpensive,
   SortTypes.ByName,
];

const SortWidget: FC = () => {
   const { setSort } = useActions();
   const sort = useTypedSelector(state => state.filter.sort)

   return (
      <Select
         startValue={sort}
         valueList={sortTypes}
         onChange={(sortType) => setSort(stringToSortType(sortType))}
      />
   );
}

export default SortWidget;


