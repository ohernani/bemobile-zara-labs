import { ChangeEvent, useContext, useState } from 'react';

import { CharacterGrid } from '../../components/CharacterGrid';
import { CharacterCard } from '../../components/CharacterCard';
import { GridLayout } from '../../components/GridLayout';
import { InputSearch } from '../../components/InputSearch';
import { Favorites } from '../../providers/FavoritesContext';
import { Character } from '../../shared/types';
import { characterMock } from '../../api/queries/characterMock';

export const FavoritesPage = () => {
  const { favorites } = useContext(Favorites);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Character[]>(
    characterMock.data.results.filter((char) => favorites.includes(char.id)),
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = characterMock.data.results
      .filter((char) => favorites.includes(char.id))
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <GridLayout>
      <InputSearch value={searchTerm} onChange={handleSearchChange} results={filteredData} />
      <CharacterGrid>
        {filteredData.map((character: Character) => {
          return (
            favorites.includes(character.id) && (
              <CharacterCard
                key={character.id}
                name={character.name}
                id={character.id}
                isFav={true}
                characterImg={
                  character.thumbnail.path + '/standard_xlarge.' + character.thumbnail.extension
                }
              />
            )
          );
        })}
      </CharacterGrid>
    </GridLayout>
  );
};
