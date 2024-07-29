import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Heart } from '../Heart';
import { Favorites } from '../../providers/FavoritesContext';
import classes from './CharacterCard.module.scss';

interface CharacterCardProps {
  id: number;
  name: string;
  characterImg: string;
  isFav?: boolean;
}

export const CharacterCard = ({ id, name, characterImg, isFav = false }: CharacterCardProps) => {
  const { addFavorite, removeFavorite } = useContext(Favorites);

  return (
    <li className={classes.characterCardRoot}>
      <Link to={`/detail/${id}`}>
        <img
          className={classes.characterCardRoot__characterImg}
          src={characterImg}
          alt={`character image ${characterImg}`}
        />
      </Link>
      <div className={classes.characterCardRoot__wrapperFooter}>
        <Link to={`/detail/${id}`} className={classes.characterCardRoot__wrapperFooter__name}>
          <h5>{name}</h5>
        </Link>
        <Heart
          className={classes.characterCardRoot__wrapperFooter__fav}
          selected={isFav}
          onClick={() => (isFav ? removeFavorite(id) : addFavorite(id))}
        />
      </div>
    </li>
  );
};
