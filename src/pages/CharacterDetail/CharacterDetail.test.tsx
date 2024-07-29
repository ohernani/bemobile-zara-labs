import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { CharacterDetail } from './CharacterDetail';
import { FavoriteProps, Favorites } from '../../providers/FavoritesContext';
import { characterMock } from '../../api/queries/characterMock';
import { comicMock } from '../../api/queries/comicMock';

const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();

const MockFavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const value: FavoriteProps = {
    favorites: [],
    addFavorite: mockAddFavorite,
    removeFavorite: mockRemoveFavorite,
  };

  return <Favorites.Provider value={value}>{children}</Favorites.Provider>;
};

vi.mock('react-router-dom', () => ({
  useParams: () => ({ id: '1009146' }),
}));

vi.mock('../Swiper', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('../ComicCard', () => ({
  ComicCard: ({ imgUrl, title, year }: { imgUrl: string; title: string; year: string }) => (
    <div>
      <img src={imgUrl} alt={title} />
      <h4>{title}</h4>
      <p>{year}</p>
    </div>
  ),
}));

vi.mock('../CharacterBanner', () => ({
  CharacterBanner: ({
    imgUrl,
    name,
    description,
    isFav,
  }: {
    imgUrl: string;
    id: number;
    name: string;
    description: string;
    isFav: boolean;
  }) => (
    <div>
      <img src={imgUrl} alt={`${name}_banner`} />
      <h1>{name}</h1>
      <p>{description}</p>
      <span>{isFav ? '❤️' : '🤍'}</span>
    </div>
  ),
}));

describe('CharacterDetail', () => {
  it('should render the CharacterBanner and ComicCard components with correct data', () => {
    const char = characterMock.data.results[4];
    const charComics = comicMock.data.results[0];
    render(
      <MockFavoritesProvider>
        <CharacterDetail />
      </MockFavoritesProvider>,
    );
    expect(screen.getByAltText(char.name + '_banner')).toHaveAttribute(
      'src',
      char.thumbnail.path + '/detail.' + char.thumbnail.extension,
    );
    expect(screen.getByText(char.name)).toBeInTheDocument();
    expect(screen.getByText(char.description)).toBeInTheDocument();

    expect(screen.getByAltText(charComics.title + '_comic')).toHaveAttribute(
      'src',
      charComics.thumbnail.path + '/portrait_uncanny.' + charComics.thumbnail.extension,
    );
    expect(screen.getByText(charComics.title)).toBeInTheDocument();
    expect(screen.getByText('??')).toBeInTheDocument();
  });
});
