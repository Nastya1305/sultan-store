import { FC, useState } from 'react';
import './Search.scss';
import Button from 'components/UI/Button/Button';

const searchImg: string = require("assets/images/Search/search.svg").default

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
            <img src={searchImg} alt="Лупа" />
         </Button>
      </form >
   );
}

export default Search;


