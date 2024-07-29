import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CharacterBanner } from '../../components/CharacterBanner';
import { Swiper } from '../../components/Swiper';
import { Favorites } from '../../providers/FavoritesContext';
import { ComicCard } from '../../components/ComicCard';
import { getYearFromDate } from '../../shared/utils';
import { characterMock } from '../../api/queries/characterMock';
import { comicMock } from '../../api/queries/comicMock';
import classes from './CharacterDetail.module.scss';

export const CharacterDetail = () => {
  const { id } = useParams();
  const { favorites } = useContext(Favorites);
  const char = id && characterMock.data.results.find((entry) => entry.id === +id);
  const charComics = comicMock.data.results;

  return (
    <>
      {char && (
        <CharacterBanner
          imgUrl={char.thumbnail.path + '/detail.' + char.thumbnail.extension}
          id={char.id}
          name={char.name}
          description={char.description}
          isFav={favorites.includes(char.id)}
        />
      )}
      <h1 className={classes.comicTitle}>COMICS</h1>

      <Swiper>
        {charComics.map((comic) => {
          const date = comic.dates.find((entry) => entry.type === 'onsaleDate');
          return (
            <ComicCard
              key={comic.title}
              imgUrl={comic.thumbnail.path + '/portrait_uncanny.' + comic.thumbnail.extension}
              title={comic.title}
              year={date ? getYearFromDate(date?.date) : '??'}
            />
          );
        })}
      </Swiper>
    </>
  );
};
