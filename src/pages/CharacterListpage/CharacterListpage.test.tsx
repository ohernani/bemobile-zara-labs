import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { FavoritesPage } from '../FavoritesPage';
import { FavoriteProps, Favorites } from '../../providers/FavoritesContext';
import { characterMock } from '../../api/queries/characterMock';

const mockFavorites = [characterMock.data.results[4].id];

const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();

const MockFavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const value: FavoriteProps = {
    favorites: mockFavorites,
    addFavorite: mockAddFavorite,
    removeFavorite: mockRemoveFavorite,
  };

  return <Favorites.Provider value={value}>{children}</Favorites.Provider>;
};

vi.mock('../../components/CharacterGrid', () => ({
  CharacterGrid: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('../../components/CharacterCard', () => ({
  CharacterCard: ({
    name,
    id,
    characterImg,
    isFav,
  }: {
    name: string;
    id: number;
    characterImg: string;
    isFav: boolean;
  }) => (
    <div data-testid={`character-card-${id}`}>
      <img src={characterImg} alt={name} />
      <h2>{name}</h2>
      <span>{isFav ? '❤️' : '🤍'}</span>
    </div>
  ),
}));

vi.mock('../../components/GridLayout', () => ({
  GridLayout: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('../../components/InputSearch', () => ({
  InputSearch: ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <input
      data-testid="search-input"
      value={value}
      onChange={onChange}
      placeholder="Search characters"
    />
  ),
}));

describe('FavoritesPage', () => {
  it('should render favorite characters and handle search input', () => {
    render(
      <MockFavoritesProvider>
        <FavoritesPage />
      </MockFavoritesProvider>,
    );

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: characterMock.data.results[4].name } });

    expect(
      screen.getByTestId('character-card-' + characterMock.data.results[4].id),
    ).toBeInTheDocument();
    expect(screen.queryByTestId('character-card-XXXXXX')).not.toBeInTheDocument();
  });
});
