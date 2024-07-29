import { describe, it, expect, vi } from 'vitest';

import MarvelAPI from './Singleton';
import { generateHash } from '../shared/utils';
import { characterMock } from './queries/characterMock';
import { comicMock } from './queries/comicMock';

vi.mock('../shared/utils', () => ({
  generateHash: vi.fn(),
}));

describe('MarvelAPI', () => {
  const mockGenerateHash = generateHash as jest.Mock;

  it('should generate auth params correctly', () => {
    const mockHash = 'mockedHash';
    mockGenerateHash.mockReturnValue(mockHash);

    const authParams = MarvelAPI.generateAuthParams();
    const ts = new Date().getTime();

    expect(authParams).toContain(`ts=${ts}`);
    expect(authParams).toContain(`apikey=${MarvelAPI.publicKey}`);
    expect(authParams).toContain(`hash=${mockHash}`);
  });

  it('should throw an error if fetchCharacters fails', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      } as Response),
    );

    await expect(MarvelAPI.fetchCharacters()).rejects.toThrow('Network response was not ok');
  });

  it('should throw an error if fetchCharacter fails', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      } as Response),
    );

    await expect(MarvelAPI.fetchCharacter('')).rejects.toThrow('Network response was not ok');
  });

  it('should throw an error if comics fails', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      } as Response),
    );

    await expect(MarvelAPI.fetchComics('')).rejects.toThrow('Network response was not ok');
  });

  it('should return characters if fetchCharacters succeeds', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(characterMock),
      } as Response),
    );

    const data = await MarvelAPI.fetchCharacters();
    expect(data).toEqual(characterMock);
  });

  it('should return character if fetchCharacters succeeds', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(characterMock.data.results[4]),
      } as Response),
    );

    const data = await MarvelAPI.fetchCharacter(characterMock.data.results[4].id.toString());
    expect(data).toEqual(characterMock.data.results[4]);
  });

  it('should return comics if fetchComics succeeds', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(comicMock.data.results),
      } as Response),
    );

    const data = await MarvelAPI.fetchComics(comicMock.data.results[4].id.toString());
    expect(data).toEqual(comicMock.data.results);
  });
});
