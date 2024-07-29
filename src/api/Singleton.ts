import { CharacterResponse, ComicResponse } from '../shared/types';
import { generateHash } from '../shared/utils';

class MarvelAPI {
  publicKey: string;
  privateKey: string;
  baseURL: string;
  constructor() {
    this.publicKey = 'd84c67904b224dee8671c661fcdf8530';
    this.privateKey = 'e62a65d724596fa5c97b642083a1b11fe2709640';
    this.baseURL = 'http://gateway.marvel.com/v1/public';
  }

  generateAuthParams() {
    const ts = new Date().getTime();
    const hash = generateHash(ts + this.privateKey + this.publicKey);
    return `ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
  }

  async fetchCharacters(limit = 20, offset = 0): Promise<CharacterResponse> {
    const authParams = this.generateAuthParams();
    const url = `${this.baseURL}/characters?${authParams}&limit=${limit}&offset=${offset}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  }

  async fetchCharacter(id: string): Promise<CharacterResponse> {
    const authParams = this.generateAuthParams();
    const url = `${this.baseURL}/characters?${authParams}/${id}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  }

  async fetchComics(id: string): Promise<ComicResponse> {
    const authParams = this.generateAuthParams();
    const url = `${this.baseURL}/characters?${authParams}/${id}/comics`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  }
}

const instance = new MarvelAPI();
Object.freeze(instance);

export default instance;
