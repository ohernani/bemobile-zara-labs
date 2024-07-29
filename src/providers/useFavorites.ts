import { useEffect, useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]') as number[];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(id)) {
        return [...prevFavorites, id];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite !== id));
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};
