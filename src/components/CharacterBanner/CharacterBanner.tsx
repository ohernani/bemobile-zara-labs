import { useContext } from 'react';

import { Heart } from '../Heart';
import { Favorites } from '../../providers/FavoritesContext';
import classes from './CharacterBanner.module.scss';

interface CharacterBannerProps {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  isFav: boolean;
}

export const CharacterBanner = ({ imgUrl, id, name, description, isFav }: CharacterBannerProps) => {
  const { addFavorite, removeFavorite } = useContext(Favorites);
  return (
    <div className={classes.characterBannerRoot}>
      <div className={classes.characterBannerRoot__wrapper}>
        <img
          className={classes.characterBannerRoot__wrapper__img}
          src={imgUrl}
          alt={`${name}_banner`}
        />
        <div className={classes.characterBannerRoot__wrapper__info}>
          <div className={classes.characterBannerRoot__wrapper__info__title}>
            <h1 className={classes.characterBannerRoot__wrapper__info__title__name}>{name}</h1>
            <Heart
              selected={isFav}
              onClick={() => (isFav ? removeFavorite(id) : addFavorite(id))}
            />
          </div>
          <p className={classes.characterBannerRoot__wrapper__info__description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
