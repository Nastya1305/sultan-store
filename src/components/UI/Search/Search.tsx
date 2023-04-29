import { FC, useState } from 'react';
import './Search.scss';
import Button from 'components/UI/Button/Button';
import { ReactComponent as SearchImg } from "assets/images/Search/search.svg";


interface SearchProps {
   className?: string,
   onSearch: (searchValue: string) => void,
}

const Search: FC<SearchProps> = ({ className, onSearch }) => {
   const [inputValue, setInputValue] = useState<string>("");
   return (
      <form className={"search " + (className ? className : "")}
         onSubmit={
            (e) => {
               e.preventDefault();
               onSearch(inputValue)
            }
         } >
         <input type='search'
            className='search__input'
            placeholder='Поиск...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <Button className='search__button'>
            <SearchImg />
         </Button>
      </form >
   );
}

export default Search;


