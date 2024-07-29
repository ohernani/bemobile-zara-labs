import { useQuery } from '@tanstack/react-query';

import MarvelAPI from '../Singleton';
import { Data } from '../../shared/types';

export function useGetCharacters() {
  const getCharacters = async () => {
    try {
      const response = await MarvelAPI.fetchCharacters();
      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      throw error;
    }
  };

  return useQuery<Data, Error>({
    queryKey: ['useGetCharacters'],
    queryFn: getCharacters,
  });
}
