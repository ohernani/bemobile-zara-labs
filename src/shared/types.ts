interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicItem {
  resourceURI: string;
  name: string;
}

interface Comic {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

interface SeriesItem {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
  returned: number;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface Story {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

interface Event {
  available: number;
  collectionURI: string;
  items: EventItem[];
  returned: number;
}

interface Url {
  type: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comic;
  series: Series;
  stories: Story;
  events: Event;
  urls: Url[];
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface CharacterResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface SeriesComic {
  resourceURI: string;
  name: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Date {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Image {
  path: string;
  extension: string;
}

interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorItem[];
  returned: number;
}

interface CharacterItem {
  resourceURI: string;
  name: string;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: CharacterItem[];
  returned: number;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: EventItem[];
  returned: number;
}

interface ComicResponseResults {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SeriesComic;
  variants: Variant[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

interface ComicResponseData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicResponseResults[];
}

export interface ComicResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ComicResponseData;
}
