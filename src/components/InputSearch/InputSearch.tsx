import { ChangeEvent } from 'react';

import searchIcon from '../../assets/search_icon.png';
import { Character } from '../../shared/types';
import classes from './InputSearch.module.scss';

interface InputSearchProps {
  value: string;
  results: Character[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ value, onChange, results }: InputSearchProps) => {
  return (
    <div className={classes.inputSearchRoot}>
      <img className={classes.inputSearchRoot__img} src={searchIcon} alt="search_icon" />
      <input
        className={classes.inputSearchRoot__input}
        type="text"
        placeholder="SEARCH A CHARACTER"
        value={value}
        onChange={onChange}
        aria-label="Search"
      />
      <p className={classes.inputSearchRoot__results}>{results?.length} RESULTS</p>
    </div>
  );
};
