import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Heart } from '../Heart';
import { Favorites } from '../../providers/FavoritesContext';
import logo from '../../assets/marvel_logo.png';
import classes from './Header.module.scss';

export const Header = () => {
  const { favorites } = useContext(Favorites);
  return (
    <div className={classes.headerRoot}>
      <Link to={'/'}>
        <img src={logo} alt="marvel_logo" />
      </Link>
      <Link to={'favorites'}>
        <Heart selected={true} value={favorites.length} />
      </Link>
    </div>
  );
};
