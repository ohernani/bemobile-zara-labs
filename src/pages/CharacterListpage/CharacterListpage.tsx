import { ChangeEvent, useContext, useState } from 'react';

import { CharacterCard } from '../../components/CharacterCard';
import { CharacterGrid } from '../../components/CharacterGrid';
import { InputSearch } from '../../components/InputSearch';
import { GridLayout } from '../../components/GridLayout';
import { Favorites } from '../../providers/FavoritesContext';
import { characterMock } from '../../api/queries/characterMock';
import { Character } from '../../shared/types';

export const CharacterListpage = () => {
  const { favorites } = useContext(Favorites);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Character[]>(characterMock.data.results);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = characterMock.data.results.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <GridLayout>
      <InputSearch value={searchTerm} onChange={handleSearchChange} results={filteredData} />
      <CharacterGrid>
        {filteredData?.map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              isFav={favorites.includes(character.id)}
              characterImg={
                character.thumbnail.path + '/standard_xlarge.' + character.thumbnail.extension
              }
            />
          );
        })}
      </CharacterGrid>
    </GridLayout>
  );
};
