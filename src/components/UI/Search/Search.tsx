import { FC, useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames';
import Button from 'components/UI/Button/Button';
import { ReactComponent as SearchImg } from "assets/images/Search/search.svg";


interface SearchProps {
   className?: string,
   onSearch: (searchValue: string) => void,
}

const Search: FC<SearchProps> = ({ className, onSearch }) => {
   const [inputValue, setInputValue] = useState<string>("");
   return (
      <form className={classNames(styles.form, className)}
         onSubmit={
            (e) => {
               e.preventDefault();
               onSearch(inputValue)
            }
         } >
         <input type='search'
            className={styles.input}
            placeholder='Поиск...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <Button className={styles.button}>
            <SearchImg />
         </Button>
      </form >
   );
}

export default Search;


