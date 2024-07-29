import { createContext, ReactNode } from 'react';

import { useFavorites } from './useFavorites';

export interface FavoriteProps {
  favorites: number[];
  addFavorite: (item: number) => void;
  removeFavorite: (itemId: number) => void;
}

export const Favorites = createContext<FavoriteProps>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export interface FavoritesProviderProps {
  children?: JSX.Element | ReactNode | string;
}

export const FavoriteProvider = (props: FavoritesProviderProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  return (
    <Favorites.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {props.children}
    </Favorites.Provider>
  );
};
