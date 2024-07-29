import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { CharacterBanner } from './CharacterBanner';
import { FavoriteProps, Favorites } from '../../providers/FavoritesContext';
import { characterMock } from '../../api/queries/characterMock';

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

vi.mock('../Heart', () => ({
  Heart: ({ selected, onClick }: { selected: boolean; onClick: () => void }) => (
    <button onClick={onClick}>{selected ? '❤️' : '🤍'}</button>
  ),
}));

describe('CharacterBanner', () => {
  it('should render the component correctly and handle favorite actions', () => {
    const char = characterMock.data.results[4];
    const imgUrl = char.thumbnail.path + '/detail.' + char.thumbnail.extension;
    const id = char.id;
    const name = char.name;
    const description = char.description;
    const isFav = false;

    render(
      <MockFavoritesProvider>
        <CharacterBanner
          imgUrl={imgUrl}
          id={id}
          name={name}
          description={description}
          isFav={isFav}
        />
      </MockFavoritesProvider>,
    );

    expect(screen.getByAltText(`${name}_banner`)).toHaveAttribute('src', imgUrl);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();

    const heartButton = screen.getByText('🤍');
    expect(heartButton).toBeInTheDocument();

    fireEvent.click(heartButton);

    expect(mockAddFavorite).toHaveBeenCalledWith(id);
  });

  it('should call removeFavorite when heart is clicked and isFav is true', () => {
    const char = characterMock.data.results[4];
    const imgUrl = char.thumbnail.path + '/detail.' + char.thumbnail.extension;
    const id = char.id;
    const name = char.name;
    const description = char.description;
    const isFav = true;

    render(
      <MockFavoritesProvider>
        <CharacterBanner
          imgUrl={imgUrl}
          id={id}
          name={name}
          description={description}
          isFav={isFav}
        />
      </MockFavoritesProvider>,
    );

    const heartButton = screen.getByText('❤️');
    expect(heartButton).toBeInTheDocument();

    fireEvent.click(heartButton);

    expect(mockRemoveFavorite).toHaveBeenCalledWith(id);
  });
});
