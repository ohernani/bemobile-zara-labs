import { ComicResponse } from '../../shared/types';

export const comicMock: ComicResponse = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '\u003Ca href="http://marvel.com"\u003EData provided by Marvel. © 2024 MARVEL\u003C/a\u003E',
  etag: '04d4a5129598276ff8a5521841993d190ce63d51',
  data: {
    offset: 0,
    limit: 20,
    total: 58,
    count: 20,
    results: [
      {
        id: 94083,
        digitalId: 59614,
        title: 'Maestro: World War M (2022) #5',
        issueNumber: 5,
        variantDescription: '',
        description:
          "When you can live forever, what does it mean to live? In this shocking series finale, Maestro finds himself partnered with an old enemy against even older allies to determine once and for all the true ruler of Dystopia. But opportunism depends on knowing how your opponents think, and someone's failed to account for a few tricks…",
        modified: '2022-09-09T14:14:36-0400',
        isbn: '',
        upc: '75960620143300511',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/94083',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/94083/maestro_world_war_m_2022_5?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Maestro-World-War-M-5/digital-comic/59614?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=59614&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/32108',
          name: 'Maestro: World War M (2022)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/99693',
            name: 'Maestro: World War M (2022) #5 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2022-07-20T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2022-06-20T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2022-10-24T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2022-04-07T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/62d0454381496',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/62d0454381496',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94083/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11482',
              name: 'Jesus Aburtov',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13510',
              name: 'Sebastian Cabrol',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/121',
              name: 'Peter David',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13247',
              name: 'Rafael Fonteriz',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14075',
              name: 'Vc Ariana Maher',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12376',
              name: 'Wilson Moss',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/101',
              name: 'Carlos Pacheco',
              role: 'penciler (cover)',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94083/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010932',
              name: 'Human Torch (Jim Hammond)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011328',
              name: 'Maestro',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009466',
              name: 'Namor',
            },
          ],
          returned: 4,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94083/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/209281',
              name: 'cover from Maestro: TBD (2021) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/209282',
              name: 'story from Maestro: TBD (2021) #5',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94083/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 94081,
        digitalId: 59149,
        title: 'Maestro: World War M (2022) #3',
        issueNumber: 3,
        variantDescription: '',
        description:
          'Maestro clashes with the Abomination in a showdown for the ages! But Abomination is far from the only person gunning for Maestro, and when Emil Blonsky turns out to be just the opening salvo of a larger attack, can the Maestro continue to out-smash and outwit the forces that want him dead?',
        modified: '2022-07-09T09:04:48-0400',
        isbn: '',
        upc: '75960620143300311',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/94081',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/94081/maestro_world_war_m_2022_3?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Maestro-World-War-M-3/digital-comic/59149?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=59149&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/32108',
          name: 'Maestro: World War M (2022)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/99691',
            name: 'Maestro: World War M (2022) #3 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2022-05-04T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2022-04-04T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2022-08-08T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2022-03-29T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/30/62685195f3744',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/30/62685195f3744',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94081/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11482',
              name: 'Jesus Aburtov',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/121',
              name: 'Peter David',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13247',
              name: 'Rafael Fonteriz',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14075',
              name: 'Vc Ariana Maher',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12376',
              name: 'Wilson Moss',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/101',
              name: 'Carlos Pacheco',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12435',
              name: 'German Peralta',
              role: 'inker',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94081/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011328',
              name: 'Maestro',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94081/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/209277',
              name: 'cover from Maestro: TBD (2021) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/209278',
              name: 'story from Maestro: TBD (2021) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/94081/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 60446,
        digitalId: 46323,
        title: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 11 HC (Trade Paperback)',
        issueNumber: 11,
        variantDescription: '',
        description:
          "Collecting Incredible Hulk (1968) #184-196 and material from Giant-Size Hulk (1975) #1 and Marvel Treasury Edition #5. Hulk is the strongest! Why? Because it's hard not to be when you go from strength to strength with artists Herb Trimpe and Sal Buscema! Trimpe defined the incredible Hulk in an artistic tenure stretching from 1968 to 1975. When Sal Buscema took over the reins, not only did the series gain a great talent, but one that, unbelievably, would have a tenure longer than even Trimpe's! Add to that Len Wein writing some of his greatest Hulk stories and you've got a bona fi de Marvel Masterworks! The adventures include Hulk smashing his way through the Mole Man, the Gremlin, the Shaper of Worlds, Doc Samson, the Abomination...and, of course, the never-ending military machinations of Gen. \"Thunderbolt\" Ross!",
        modified: '2017-11-01T17:55:21-0400',
        isbn: '978-1-302-90349-7',
        upc: '',
        diamondCode: 'MAY170938',
        ean: '9781302 903497 57500',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 272,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Collecting Incredible Hulk (1968) #184-196 and material from Giant-Size Hulk (1975) #1 and Marvel Treasury Edition #5. Hulk is the strongest! Why? Because it's hard not to be when you go from strength to strength with artists Herb Trimpe and Sal Buscema! Trimpe defined the incredible Hulk in an artistic tenure stretching from 1968 to 1975. When Sal Buscema took over the reins, not only did the series gain a great talent, but one that, unbelievably, would have a tenure longer than even Trimpe's! Add to that Len Wein writing some of his greatest Hulk stories and you've got a bonafide Marvel Masterworks! The adventures include Hulk smashing his way through the Mole Man, the Gremlin, the Shaper of Worlds, Doc Samson, the Abomination...and, of course, the never-ending military machinations of Gen. \"Thunderbolt\" Ross!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/60446',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/60446/marvel_masterworks_the_incredible_hulk_vol_11_hc_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=46323&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22327',
          name: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 11 HC (2017)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2017-11-08T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2017-07-10T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2023-04-28T17:18:07-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 75,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/6467d162ca2a3',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/6467d162ca2a3',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 14,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60446/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
              name: 'Sal Buscema',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13226',
              name: 'Robert Cassell',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
              name: 'Len Wein',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1746',
              name: 'John Costanza',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1759',
              name: 'Joe Rosen',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13093',
              name: 'Art Simek',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7935',
              name: 'Sheila Johnson',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/586',
              name: 'Michael Kelleher',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1283',
              name: 'Wesley Wong',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1872',
              name: 'Glynis Oliver',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/198',
              name: 'Marie Severin',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1217',
              name: 'Joe Staton',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/199',
              name: 'Herb Trimpe',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 14,
        },
        characters: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60446/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009548',
              name: 'Betty Ross',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009275',
              name: 'Doc Samson',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009449',
              name: 'Mole Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1014812',
              name: 'Thunderbolt Ross',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60446/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/131361',
              name: 'cover from Marvel Masterworks: The Incredible Hulk (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/131362',
              name: 'story from Marvel Masterworks: The Incredible Hulk (2017)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60446/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 60692,
        digitalId: 46009,
        title: 'Incredible Hulk Epic Collection: The Hulk Must Die (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          'Marvel’s Green Goliath is pulling no punches! After the cancellation of his debut series, the Incredible Hulk returns in TALES TO ASTONISH — and he means business! Dr. Robert Bruce Banner’s alter ego battles General “Thunderbolt” Ross, the Leader and his Humanoids, the Executioner, and more Communists than you can shake a tank at. And if that’s not enough, round two pits the Hulk against Hercules, introduces classic villain the Abomination, dives into the intrigue of the Secret Empire, and goes cosmic with the Silver Surfer and the High Evolutionary! Featuring stories by Stan Lee and art by a who’s who of Marvel greats — Steve Ditko, Jack Kirby, Gil Kane, Bill Everett and John Buscema — these are the tales that made the Hulk a global icon! Collecting material from TALES TO ASTONISH (1959) #60-96 and NOT BRAND ECHH #3.',
        modified: '2017-10-19T17:41:13-0400',
        isbn: '978-1-302-90445-6',
        upc: '',
        diamondCode: 'AUG171040',
        ean: '9781302 904456 53999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 432,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Marvel's green goliath is pulling no punches! After the cancellation of his debut series, the incredible Hulk returns in Tales to Astonish...and he means business! Dr. Robert Bruce Banner's alter ego battles General \"Thunderbolt\" Ross, the Leader and his Humanoids, the Executioner, and more communists than you can shake a tank at. And if that's not enough, round two pits the Hulk against Hercules, introduces classic villain the Abomination, dives into the intrigue of the Secret Empire, and goes cosmic with the Silver Surfer and the High Evolutionary! Featuring stories by Stan Lee and art by a who's who of Marvel greats - Steve Ditko, Jack Kirby, Gil Kane, Bill Everett and John Buscema - these are the tales that made the Incredible Hulk a global icon! Collects Tales to Astonish (1959) #60-96, material from Not Brand Echh (1967) #3.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/60692',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/60692/incredible_hulk_epic_collection_the_hulk_must_die_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=46009&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22424',
          name: 'Incredible Hulk Epic Collection: The Hulk Must Die (2017)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2017-10-25T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2017-09-04T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2023-04-28T17:18:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 39.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/00/646d1bcd80eca',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/00/646d1bcd80eca',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60692/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1612',
              name: 'John Buscema',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/297',
              name: 'Bill Everett',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/148',
              name: 'Gil Kane',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1209',
              name: 'Gary Friedrich',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/30',
              name: 'Stan Lee',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/196',
              name: 'Jack Kirby',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/479',
              name: 'Paul Mounts',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60692/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009548',
              name: 'Betty Ross',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009167',
              name: 'Bruce Banner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009343',
              name: 'Hercules',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011300',
              name: 'High Evolutionary',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009398',
              name: 'Leader',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009592',
              name: 'Silver Surfer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1014812',
              name: 'Thunderbolt Ross',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60692/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/131853',
              name: 'cover from Incredible Hulk Epic Collection: The Hulk Must Die (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/131854',
              name: 'story from Incredible Hulk Epic Collection: The Hulk Must Die (2017)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/60692/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 59511,
        digitalId: 44483,
        title: 'Marvel Cinematic Universe Guidebook: The Avengers Initiative (Trade Paperback)',
        issueNumber: 1,
        variantDescription: '',
        description:
          'The official handbook of the Marvel Cinematic Universe takes you all the way through Phase One and to the dawn of Phase Two! Filled with fact sheets, movie-to-comic comparisons, behind-the-scenes art and production stills, this volume details the first eight blockbuster Marvel movies — from 2008’s Iron Man to 2013’s Thor: The Dark World. In-depth character profiles give you the whole story on heroes like Captain America, Hulk, Black Widow, War Machine, Hawkeye and more; deadly villains including Abomination, Loki, Red Skull and Mandarin; and a universe of supporting characters such as Nick Fury, Bucky Barnes, Peggy Carter and Phil Coulson! It’s your indispensable MCU guide! Collecting GUIDEBOOK TO THE MARVEL CINEMATIC UNIVERSE — MARVEL’S IRON MAN, MARVEL’S INCREDIBLE HULK, MARVEL’S IRON MAN 2, MARVEL’S THOR, MARVEL’S CAPTAIN AMERICA: THE FIRST AVENGER, MARVEL’S THE AVENGERS, MARVEL’S IRON MAN 3 and MARVEL’S THOR: THE DARK WORLD.',
        modified: '2017-03-31T17:15:07-0400',
        isbn: '978-0-7851-9660-0',
        upc: '',
        diamondCode: 'OCT161004',
        ean: '9780785 196600 53499',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 192,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The official handbook of the Marvel Cinematic Universe takes you all the way through Phase One and to the dawn of Phase Two! Filled with fact sheets, movie-to-comic comparisons, behind-the-scenes art and production stills, this volume details the first eight blockbuster Marvel movies - from 2008's Iron Man to 2013's Thor: The Dark World. In-depth character profiles give you the whole story on heroes like Captain America, the Hulk, Black Widow, War Machine, Hawkeye and more! Deadly villains including Abomination, Loki, Red Skull and the Mandarin! Plus a universe of supporting characters like Nick Fury, Bucky Barnes, Peggy Carter and Phil Coulson! It's your indispensable guide to the MCU! Collects Guidebook To The Marvel Cinematic Universe - Marvel's Iron Man, Marvel's Incredible Hulk, Marvel's Iron Man 2, Marvel's Thor, Marvel's Captain America: The First Avenger, Marvel's The Avengers, Marvel's Iron Man 3, Marvel's Thor: The Dark World.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/59511',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/59511/marvel_cinematic_universe_guidebook_the_avengers_initiative_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=44483&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/21675',
          name: 'Marvel Cinematic Universe Guidebook: The Avengers Initiative (2017)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2017-04-05T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2016-12-05T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2023-04-28T17:17:24-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 34.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/e0/58debf0a7c8e7',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/e0/58debf0a7c8e7',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/59511/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10785',
              name: 'Stephanie Hans',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/59511/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009407',
              name: 'Loki',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009421',
              name: 'Mandarin',
            },
          ],
          returned: 4,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/59511/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/129523',
              name: 'cover from Guidebook to the Marvel Cinematic Universe (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/129524',
              name: 'story from Guidebook to the Marvel Cinematic Universe (2017)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/59511/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 34050,
        digitalId: 18552,
        title: 'Incredible Hulks (2010) #619',
        issueNumber: 619,
        variantDescription: '',
        description: '',
        modified: '2012-05-22T11:06:01-0400',
        isbn: '',
        upc: '5960606637-61911',
        diamondCode: 'OCT100604',
        ean: '',
        issn: '0274-5275',
        format: 'Comic',
        pageCount: 40,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text: "CHAOS WAR TIE-IN! A terrible secret makes Marlo Chandler, Rick Jones's wife, the most important mortal on the planet. The Incredible Hulks race their enemies across the country to reach Marlo in time -- but can they handle the revelations she brings?\n",
          },
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'A CHAOS WAR TIE-IN! Bring out your dead -- and the Hulks will smash them!  When the King of Chaos and Darkness unleashes his horrors upon Planet Earth, Doctor Strange calls on the strongest team there is to save life itself.  A Chaos War tie-in featuring the return of the most horrifying Hulk villain in Hades -- and fan-favorite "Fall of the Hulks" and "World War Hulks" penciller Paul Pelletier! Plus an all-new backup showcasing one Hulk\'s Allies! 40 PGS./Rated T  ...$3.99',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/34050',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/34050/incredible_hulks_2010_619?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Incredible-Hulks-619/digital-comic/18552?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=18552&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/18552?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
          name: 'Incredible Hulks (2010 - 2011)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-12-22T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2010-12-11T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2013-04-08T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2012-06-19T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/52c5b57d98070',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/52c5b57d98070',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/4c90e7b781b05',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/34050/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4992',
              name: 'Simon Bowland',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13146',
              name: 'Danny Miki',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/479',
              name: 'Paul Mounts',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/537',
              name: 'Carlo Pagulayan',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/536',
              name: 'Greg Pak',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
              name: 'Paul Pelletier',
              role: 'penciller',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/34050/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009282',
              name: 'Doctor Strange',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011080',
              name: 'Korg',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009379',
              name: 'Rick Jones',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
              name: 'She-Hulk (Jennifer Walters)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011223',
              name: 'Skaar',
            },
          ],
          returned: 7,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/34050/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/76014',
              name: 'Cover From Incredible Hulks (2009) #619',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/76015',
              name: 'Interior From Incredible Hulks (2009) #619',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/34050/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
          ],
          returned: 1,
        },
      },
      {
        id: 31236,
        digitalId: 18248,
        title: 'Incredible Hulks (2010) #618',
        issueNumber: 618,
        variantDescription: '',
        description: '',
        modified: '2017-11-02T16:23:46-0400',
        isbn: '',
        upc: '5960606637-61811',
        diamondCode: 'OCT100602',
        ean: '',
        issn: '0274-5275',
        format: 'Comic',
        pageCount: 40,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text: 'CHAOS WAR TIE-IN! When the King of Chaos and Darkness unleashes his horrors upon Planet Earth, Doctor Strange calls on the strongest team there is to save life itself. Featuring the return of the most horrifying Hulk villain in Hades!',
          },
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'A CHAOS WAR TIE-IN! Bring out your dead -- and the Hulks will smash them!  When the King of Chaos and Darkness unleashes his horrors upon Planet Earth, Doctor Strange calls on the strongest team there is to save life itself.  A Chaos War tie-in featuring the return of the most horrifying Hulk villain in Hades -- and fan-favorite "Fall of the Hulks" and "World War Hulks" penciller Paul Pelletier! Plus an all-new backup showcasing one Hulk\'s Allies! 40 PGS./Rated T  ...$3.99',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/31236',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/31236/incredible_hulks_2010_618?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Incredible-Hulks-618/digital-comic/18248?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=18248&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/18248?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
          name: 'Incredible Hulks (2010 - 2011)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37016',
            name: 'Incredible Hulks (2010) #618 (TRON VARIANT)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-12-08T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2010-11-27T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2013-04-08T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2012-06-19T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/52c5b58c47334',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/52c5b58c47334',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c910ef6a8a63',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/31236/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4992',
              name: 'Simon Bowland',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13146',
              name: 'Danny Miki',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/479',
              name: 'Paul Mounts',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/537',
              name: 'Carlo Pagulayan',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/536',
              name: 'Greg Pak',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
              name: 'Paul Pelletier',
              role: 'penciller',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/31236/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009282',
              name: 'Doctor Strange',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011080',
              name: 'Korg',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011436',
              name: 'Red She-Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009379',
              name: 'Rick Jones',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/31236/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/71181',
              name: 'INCREDIBLE HULKS (2009) #618',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/71182',
              name: 'Interior #71182',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/31236/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
          ],
          returned: 1,
        },
      },
      {
        id: 29541,
        digitalId: 0,
        title: 'Incredible Hulks (2010) #602 (SHS VARIANT)',
        issueNumber: 602,
        variantDescription: 'SHS VARIANT',
        description: '',
        modified: '2011-09-20T14:33:30-0400',
        isbn: '',
        upc: '5960606637-60221',
        diamondCode: 'JUL098007',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "X marks the spot as the most insane father and son duo in the Marvel Universe take on one of the Green Goliath's most formidable adversaries. That's right, it's the JUGGERNAUT, bi--bi--boys and girls!  What happens when an unstoppable force meets the Old Power and the gamma-fueled genes of the Strongest One There Is?  Massive destruction and emotional revelation, that's what!  Continuing the acclaimed writer Greg Pak's return to the \"Incredible Hulk, plus, in the \"Savage She-Hulk\" backup story written by Fred Van Lente, Lyra takes on the all-new Gamma Corps Black! Rated T $3.99",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/29541',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/29541/incredible_hulks_2010_602_shs_variant/shs_variant?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
          name: 'Incredible Hulks (2010 - 2011)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27646',
            name: 'Incredible Hulks (2010) #602',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-09-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-09-03T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/4e78dcbabf40a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/29541/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
              name: 'Guru-eFX',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4992',
              name: 'Simon Bowland',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1082',
              name: 'Ariel Olivetti',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/434',
              name: 'Michael Ryan',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/536',
              name: 'Greg Pak',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7894',
              name: 'Fred Van Lente',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4600',
              name: 'Mark Paniccia',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8822',
              name: 'Jordan D. White',
              role: 'editor',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 12,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/29541/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
              name: 'Beast',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009382',
              name: 'Juggernaut',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009459',
              name: 'Mr. Fantastic',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009325',
              name: 'Norman Osborn',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
              name: 'She-Hulk (Jennifer Walters)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011392',
              name: 'She-Hulk (Lyra)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011223',
              name: 'Skaar',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010788',
              name: 'Venom (Mac Gargan)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009742',
              name: 'Zzzax',
            },
          ],
          returned: 12,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/29541/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/64234',
              name: 'Interior #64234',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/94784',
              name: 'Incredible Hulks (2009) #602, SHS VARIANT',
              type: 'cover',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/29541/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 20863,
        digitalId: 10797,
        title: 'Hulk (2008) #3',
        issueNumber: 3,
        variantDescription: '',
        description: '',
        modified: '2016-11-30T14:53:31-0500',
        isbn: '',
        upc: '5960605992-00311',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text: "Not a flashback!  Not a dream! Together again for the first time! The battle you NEVER thought you'd see -- The Hulk Vs. The Abomination!  But...wait, we've seen that lots of times!  Well... No you HAVE NOT.",
          },
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Not a flashback!  Not a dream! Together again for the first time! The battle you NEVER thought you'd see -- The Hulk Vs. The Abomination!  But...wait, we've seen that lots of times!  Well... No you HAVE NOT. And it isn't just because superstars Jeph Loeb & Ed McGuinness are bringing it to you for the first time -- it's because if you've been reading the Hulk (yes, we know there's one or two of you), it CAN'T be possible! But it is -- AND IN COLOR -- LOTS OF THEM! The pulse-pounding, gamma-spawned action adventure continues in Hulk #3!!!\r\u003Cbr\u003ERated A...$2.99 \r\u003Cbr\u003E",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/20863',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/20863/hulk_2008_3?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Hulk-3/digital-comic/10797?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=10797&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/10797?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)',
        },
        variants: [],
        collections: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23677',
            name: 'Hulk Vol. 1: Red Hulk (Trade Paperback)',
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2008-04-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2009-03-13T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2010-05-27T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/5109ab5908cce',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/5109ab5908cce',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4bb890a45c700',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/4babb066d6269',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/20863/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/807',
              name: 'Comicraft',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/426',
              name: 'Jason Keith',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/18',
              name: 'Jeph Loeb',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/649',
              name: 'Ed Mcguinness',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/471',
              name: 'Dexter Vines',
              role: 'inker',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/20863/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/20863/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44674',
              name: 'Red Hulk 3 of 12',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/44675',
              name: 'Red Hulk 3 of 12',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/20863/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 15894,
        digitalId: 30251,
        title: 'IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE DIGEST (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2016-12-08T11:27:39-0500',
        isbn: '0-7851-1962-0',
        upc: '5960611962-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Introducing the world's worst super hero! When a low-level S.H.I.E.L.D. agent gets a hold of Hank Pym's new Ant-Man suit, you know the Marvel Universe is in trouble. He's not concerned with saving the world or helping others. He's concerned with getting through the day and getting a leg up on life. He's not going to use his powers responsibly, he's going to use them for the betterment of himself. He's Ant-Man, a new \"hero\" for the modern world. If you thought Robert Kirkman pushed the boundaries of what could be in a Marvel Comic with MARVEL ZOMBIES just wait until you see what he does in here! \r\u003Cbr\u003ECollecting IRREDEEMABLE ANT-MAN #1-6.\r\u003Cbr\u003E144 PGS./Rated T+ ...$9.99\r\u003Cbr\u003EISBN: 0-7851-1962-0\r\u003Cbr\u003E",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/15894',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/15894/irredeemable_ant-man_vol_1_low-life_digest_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Irredeemable-Ant-Man-Vol-1-Low-Life-0/digital-comic/30251?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=30251&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/30251?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2423',
          name: 'IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE DIGEST (2007)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6076',
            name: 'Irredeemable Ant-Man (2006) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5938',
            name: 'Irredeemable Ant-Man (2006) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5775',
            name: 'Irredeemable Ant-Man (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5628',
            name: 'Irredeemable Ant-Man (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5360',
            name: 'Irredeemable Ant-Man (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5199',
            name: 'Irredeemable Ant-Man (2006) #1',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2007-06-27T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2013-06-27T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-06-27T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 10.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bc353d839901',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/70/58498971b9eba',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/584988ab7b1a0',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/50/584987e1e7fba',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/90/584986f8b9797',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/60/584985c189045',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/58498477421c8',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/d0/517acfb8bcd0b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/e0/4bc5a55b4ba5f',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bc353d839901',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15894/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13152',
              name: 'Joe Quesada',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5249',
              name: 'Aubrey Sitterson',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/868',
              name: 'Bill Crabtree',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/832',
              name: 'Val Staples',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/869',
              name: 'Phil Hester',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/553',
              name: 'Robert Kirkman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5248',
              name: 'Molly Lazer',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/410',
              name: 'Rus Wooton',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/870',
              name: 'Ande Parks',
              role: 'inker',
            },
          ],
          returned: 10,
        },
        characters: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15894/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009281',
              name: 'Doctor Doom',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011490',
              name: 'Hank Pym',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009359',
              name: 'Hydra',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011335',
              name: 'Maria Hill',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009471',
              name: 'Nick Fury',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009639',
              name: 'Super-Skrull',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 15,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15894/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5496',
              name: 'Irredeemable Ant-Man (2006) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5497',
              name: '1 of 6 -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5498',
              name: 'Irredeemable Ant-Man (2006) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5499',
              name: '2 of 6 -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5500',
              name: 'Irredeemable Ant-Man (2006) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5501',
              name: '3 of 6 -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5502',
              name: 'Irredeemable Ant-Man (2006) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5503',
              name: '4 of 6 - Story A',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7767',
              name: 'Irredeemable Ant-Man (2006) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7768',
              name: '5 of 6 - Story A; Franklin Richards back-ups',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7769',
              name: 'Irredeemable Ant-Man (2006) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7770',
              name: '6 of 6 - Story A',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8239',
              name: '6 of 6 - Story A',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8240',
              name: '6 of 6 - Story A',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/67490',
              name: 'IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE 0 cover',
              type: 'cover',
            },
          ],
          returned: 15,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15894/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 15908,
        digitalId: 55279,
        title: 'KILLRAVEN PREMIERE HC (Trade Paperback)',
        issueNumber: 1,
        variantDescription: '',
        description:
          'Collects Killraven (2002) #1-6.  In the not-so-distant future, Martians have invaded our world and laid waste to our civilization! Now, only Jonathan Raven – the gladiator known as Killraven – and his band of Freemen stand between Earth and utter annihilation! Dig sci-fi action? Love great visuals? Then grab your tub of popcorn and get ready for this modern classic from the great Alan Davis!',
        modified: '2021-03-11T16:21:46-0500',
        isbn: '978-0-7851-2538-9',
        upc: '75960612538800111',
        diamondCode: 'APR072360',
        ean: '9780785 125389 51999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'In the not-so-distant future, Martians have invaded our world and laid waste to our civilization! Now, only Jonathan Raven - the gladiator known as Killraven - and his band of Freemen stand between Earth and utter annihilation! Dig sci-fi action? Love great visuals? Then grab your tub of popcorn and get ready for this modern classic from the great Alan Davis! \r\u003Cbr\u003ECollecting KILLRAVEN #1-6.\r\u003Cbr\u003E144 PGS./Rated T+ ...$19.99\r\u003Cbr\u003EISBN: 0-7851-2538-8 \r\u003Cbr\u003ETrim size: standard\r\u003Cbr\u003E',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/15908',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/15908/killraven_premiere_hc_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=55279&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2437',
          name: 'KILLRAVEN PREMIERE HC (2007)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19860',
            name: 'Killraven (2002) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19859',
            name: 'Killraven (2002) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19858',
            name: 'Killraven (2002) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19857',
            name: 'Killraven (2002) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19856',
            name: 'Killraven (2002) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19855',
            name: 'Killraven (2002) #1',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2007-06-13T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2023-04-28T17:20:56-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 19.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bc495382b075',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bc495382b075',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15908/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15908/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009382',
              name: 'Juggernaut',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011116',
              name: 'Killraven',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009618',
              name: 'Stacy X',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009697',
              name: 'Vision',
            },
          ],
          returned: 8,
        },
        stories: {
          available: 11,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15908/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32486',
              name: 'Killraven 1-6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32487',
              name: 'Killraven 1-6',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42543',
              name: '[untitled]',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42544',
              name: '[untitled]',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42546',
              name: '[untitled]',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42548',
              name: '[untitled]',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42549',
              name: '[untitled]',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42551',
              name: 'Interior #42551',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42552',
              name: 'Interior #42552',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42554',
              name: 'Interior #42554',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/42556',
              name: 'Interior #42556',
              type: 'interiorStory',
            },
          ],
          returned: 11,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/15908/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 5199,
        digitalId: 2043,
        title: 'Irredeemable Ant-Man (2006) #1',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '2015-06-25T17:26:26-0400',
        isbn: '',
        upc: '5960605811-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text: "Introducing the world's worst superhero! When a S.H.I.E.L.D. agent gets a hold of Hank Pym's new Ant-Man suit, you know there's trouble. He's not concerned with saving the world. He's concerned with getting through the day and getting a leg up on life!",
          },
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Introducing the world's WORST superhero!  When a low-level S.H.I.E.L.D. agent gets a hold of Hank Pym's new Ant-Man suit you know the Marvel Universe is in trouble.  He's not concerned with saving the world or helping others.  He's concerned with getting through the day and getting a leg up on life.  He's not going to use his powers responsibly, he's going to use them for the betterment of himself.  He's ANT-MAN a NEW \"hero\" for the modern world.  If you thought Robert Kirkman pushed the boundaries of what could be in a Marvel Comic with MARVEL ZOMBIES just WAIT until you see what he does in THE IRREDEEMABLE ANT-MAN!\r\u003Cbr\u003E32 PGS./Rated T+ ...$2.99\r\u003Cbr\u003E",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/5199',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/5199/irredeemable_ant-man_2006_1?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Irredeemable-Ant-Man-1/digital-comic/2043?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=2043&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/2043?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/977',
          name: 'Irredeemable Ant-Man (2006 - 2007)',
        },
        variants: [],
        collections: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15894',
            name: 'IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE DIGEST (Trade Paperback)',
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2006-10-04T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2007-04-28T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2012-10-02T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/58498477421c8',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/58498477421c8',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/5199/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13152',
              name: 'Joe Quesada',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5249',
              name: 'Aubrey Sitterson',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/868',
              name: 'Bill Crabtree',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/869',
              name: 'Phil Hester',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/553',
              name: 'Robert Kirkman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5248',
              name: 'Molly Lazer',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/410',
              name: 'Rus Wooton',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/870',
              name: 'Ande Parks',
              role: 'inker',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/5199/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009281',
              name: 'Doctor Doom',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011490',
              name: 'Hank Pym',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009639',
              name: 'Super-Skrull',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/5199/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5496',
              name: 'Irredeemable Ant-Man (2006) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5497',
              name: '1 of 6 -',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/5199/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 4241,
        digitalId: 0,
        title: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2019-12-11T17:59:39-0500',
        isbn: '0-7851-2325-3',
        upc: '5960612325-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Great epics come along only once in a long while. Stories that push the normal boundaries and force the reader to think. Stories so powerful in message and so grand in scale that the guidelines by which such tales are usually judged are completely rearranged. Spawned from the brilliant creative mind of Alex Ross, EARTH X is one such epic. Along with writer Jim Krueger and artist John Paul Leon, Ross breathes life into and gives amazing detail to every facet of the EARTH X mythos - made evident by everything from his early conceptual pencil sketches to each of his fourteen beautifully painted covers. EARTH X explores the depths and heights of the Marvel Universe, from the roots of its humble beginnings to the peak of its ultimate potential. \r\u003Cbr\u003ECollects all twelve issues of the EARTH X regular series, and the #0 and #X bookends.\r\u003Cbr\u003E472 PGS./Rated T+ ...$29.99\r\u003Cbr\u003EISBN: 0-7851-2325-3\r\u003Cbr\u003E',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/4241/earth_x_tpb_new_printing_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
          name: 'EARTH X TPB [NEW PRINTING] (2006)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8547',
            name: 'Earth X (1999) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8551',
            name: 'Earth X (1999) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8550',
            name: 'Earth X (1999) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8549',
            name: 'Earth X (1999) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8559',
            name: 'Earth X (1999) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8558',
            name: 'Earth X (1999) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8557',
            name: 'Earth X (1999) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8556',
            name: 'Earth X (1999) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8555',
            name: 'Earth X (1999) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8554',
            name: 'Earth X (1999) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8553',
            name: 'Earth X (1999) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8552',
            name: 'Earth X (1999) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8548',
            name: 'Earth X (1999) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8546',
            name: 'Earth X (1999)',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2006-06-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/4241/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13971',
              name: '#X',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/267',
              name: 'Jim Krueger',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/63',
              name: 'Alex Ross',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2535',
              name: 'Melissa Edwards',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/507',
              name: 'Matt Hollingsworth',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4186',
              name: 'James Sinclair',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7843',
              name: 'Todd Klein',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/127',
              name: 'John Paul Leon',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/523',
              name: 'Bill Reinhold',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4182',
              name: 'Polly Watson',
              role: 'editor',
            },
          ],
          returned: 10,
        },
        characters: {
          available: 91,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/4241/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010354',
              name: 'Adam Warlock',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009168',
              name: 'Banshee',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009169',
              name: 'Baron Strucker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009170',
              name: 'Baron Zemo (Heinrich Zemo)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
              name: 'Beast',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009184',
              name: 'Black Bolt',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009186',
              name: 'Black Knight (Sir Percy of Scandia)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009187',
              name: 'Black Panther',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009189',
              name: 'Black Widow',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009219',
              name: 'Cannonball',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009223',
              name: 'Captain Britain',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009224',
              name: 'Captain Marvel (Mar-Vell)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009239',
              name: 'Clea',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009247',
              name: 'Corsair',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009251',
              name: 'Crimson Dynamo',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009255',
              name: 'Crystal',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 27,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/4241/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24903',
              name: 'Earth X',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24905',
              name: 'Earth X: Chapter One',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24906',
              name: 'Earth X: Appendix To Chapter One',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24908',
              name: 'Earth X Chapter Ten',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24909',
              name: 'Appendix to Chapter Ten',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24911',
              name: 'Earth X Chapter Eleven',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24912',
              name: 'Appendix to Chapter Eleven',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24914',
              name: 'Earth X Chapter Twelve',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24915',
              name: 'Appendix to Chapter Twelve',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24917',
              name: 'Earth X Chapter Two',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24918',
              name: 'Appendix to Chapter Two',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24920',
              name: 'Earth X Chapter Three',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24921',
              name: 'Appendix to Chapter Three',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24923',
              name: 'Earth X Chapter Four',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24924',
              name: 'Appendix to Chapter Four',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24926',
              name: 'Earth X Chapter Five',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24927',
              name: 'Appendix to Chapter Five',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24929',
              name: 'Earth X Chapter Six',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24930',
              name: 'Appendix to Chapter Six',
              type: 'text story',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/24932',
              name: 'Earth X Chapter Seven',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/4241/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 3435,
        digitalId: 0,
        title: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 3 HC (Hardcover)',
        issueNumber: 3,
        variantDescription: '',
        description: '',
        modified: '2020-08-19T12:56:58-0400',
        isbn: '978-0-7851-2032-2',
        upc: '75960612032100111',
        diamondCode: 'NOV052018',
        ean: '',
        issn: '',
        format: 'Hardcover',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Brace yourself, True Believer, Hulk is smashing his way into another marvelous monster-sized Masterworks! The batty bullpen declareth that you'd better hide behind a Hulk-Buster because it's not a happy Hulk who faces off against the likes of bombastic Boomerang, the android Hulk-Killer and the one and only Abomination in his classic first appearance by Stan \"The Man\" and Gil Kane! That's only the warm up, though! The cosmos itself shudders when the strongest man-like being in the Marvel U. goes toe-to-toe with the Silver Surfer, Prince Namor and the Mighty Thor himself!\r\u003Cbr\u003EGrab a crash helmet, bunker down and prepare yourself to be Hulk-inued this January!\r\u003Cbr\u003ECollecting TALES TO ASTONISH #80-101 and INCREDIBLE HULK (Vol. 2) #102\r\u003Cbr\u003E288 PGS./All Ages ...$49.99\r\u003Cbr\u003EISBN: 0-7851-2032-7\r\u003Cbr\u003EMARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 3 - VARIANT EDITION\r\u003Cbr\u003E288 PGS./All Ages ...$54.99\r\u003Cbr\u003EISBN: 0-7851-2033-5\r\u003Cbr\u003E",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/3435',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/3435/marvel_masterworks_the_incredible_hulk_vol_3_hc_hardcover?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1671',
          name: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 3 HC (2006)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8913',
            name: 'Incredible Hulk (1962) #102',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11443',
            name: 'Tales to Astonish (1959) #95',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11439',
            name: 'Tales to Astonish (1959) #91',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11434',
            name: 'Tales to Astonish (1959) #87',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11433',
            name: 'Tales to Astonish (1959) #86',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11432',
            name: 'Tales to Astonish (1959) #85',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11431',
            name: 'Tales to Astonish (1959) #84',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11430',
            name: 'Tales to Astonish (1959) #83',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11429',
            name: 'Tales to Astonish (1959) #82',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11428',
            name: 'Tales to Astonish (1959) #81',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11427',
            name: 'Tales to Astonish (1959) #80',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11425',
            name: 'Tales to Astonish (1959) #79',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11424',
            name: 'Tales to Astonish (1959) #78',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11423',
            name: 'Tales to Astonish (1959) #77',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11421',
            name: 'Tales to Astonish (1959) #75',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11420',
            name: 'Tales to Astonish (1959) #74',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/11419',
            name: 'Tales to Astonish (1959) #73',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2006-01-06T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 49.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4bc60634340ea',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5f3d580502ce0',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/5b6c4fe6485a8',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/594add3ad3643',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/60/536d4d6874fd8',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/536d4cd61e6f7',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/70/536d4c7779e37',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/536d4bbbc76fc',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/00/536d4b1bd07c6',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/80/536d4ab702ac1',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/536d4a524a0cf',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/536d45c41716b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/f0/536d45929b83b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/20/536d455f1aadd',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/d0/536d4526c69a6',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/80/536d44f45e34b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/536d44bd58fa7',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/536d43e07a711',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/536d4305a62e0',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4bc60634340ea',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/40/4bc37dec7c6ca',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc37c4e2ab8e',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/20/4bc369ade3b07',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/30/4bc36999a2011',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/50/4bc3617d9a5eb',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/4bc361788a8a5',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bc3617363f2f',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/4bc3616e55bf3',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/4bc36163d2e7e',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/4bc3615e9f91f',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc361596b0fb',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/4bc3615461fcd',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4bc3614f16c13',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/4bc3608e92082',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/f0/4bc36089760f8',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bc3608482b72',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3435/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1209',
              name: 'Gary Friedrich',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/30',
              name: 'Stan Lee',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/198',
              name: 'Marie Severin',
              role: 'penciller',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3435/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010371',
              name: 'Boomerang',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009167',
              name: 'Bruce Banner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009299',
              name: 'Fantastic Four',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011300',
              name: 'High Evolutionary',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009519',
              name: 'Puppet Master',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010791',
              name: 'Sub-Mariner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009660',
              name: 'The Stranger',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009680',
              name: 'Tyrannus',
            },
          ],
          returned: 10,
        },
        stories: {
          available: 54,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3435/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12301',
              name: 'Cover #12301',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12302',
              name: 'By Force of Arms!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12303',
              name: 'Another World, Another Foe!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12304',
              name: '',
              type: 'letters',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12305',
              name: 'Cover #12305',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12306',
              name: 'When Fails the Quest!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12307',
              name: 'The Wisdom of the Watcher!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12308',
              name: 'Cover #12308',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12309',
              name: 'The End of the Quest!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12310',
              name: 'Not All My Power Can Save Me!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12314',
              name: 'Cover #12314',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12315',
              name: 'To Walk Amongst Men!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12316',
              name: 'Bruce Banner is the Hulk!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12317',
              name: 'Cover #12317',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12318',
              name: 'The Prince and the Puppet!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12319',
              name: 'The Hulk Must Die!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12320',
              name: 'Cover #12320',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12321',
              name: 'When Rises the Behemoth',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12322',
              name: 'The Titan and the Torment',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/12329',
              name: 'Cover #12329',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3435/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 2499,
        digitalId: 1968,
        title: 'Hulk: Destruction (2005) #4',
        issueNumber: 4,
        variantDescription: '',
        description: '',
        modified: '2017-01-09T17:45:36-0500',
        isbn: '',
        upc: '5960605734-00411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Secrets revealed! Allies betrayed! Buildings destroyed! It's the final chapter in the story that redefines Hulk's most abominable and deadly foe!\r\u003Cbr\u003E\r\u003Cbr\u003E32 PGS./ PARENTAL ADVISORY ...$2.99\r\u003Cbr\u003E\r\u003Cbr\u003E",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/2499',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/2499/hulk_destruction_2005_4?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=1968&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/924',
          name: 'Hulk: Destruction (2005)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2005-10-26T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2007-11-13T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/58741280c4f3e',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/58741280c4f3e',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bc61ef49e55a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2499/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/121',
              name: 'Peter David',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8635',
              name: 'Vc Randy Gentile',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/558',
              name: 'Mark Mckenna',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/775',
              name: 'Jim Muniz',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/973',
              name: 'Matt Nelson',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2499/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2499/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4946',
              name: '4 of 4 - 4XLS',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4947',
              name: '4 of 4 - 4XLS',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2499/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 2577,
        digitalId: 0,
        title: 'Marvel Visionaries: John Romita Jr. (Hardcover)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2018-07-19T11:11:32-0400',
        isbn: '0-7851-1964-7',
        upc: '5960611964-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Hardcover',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Celebrating the artwork of John Romita Jr., a legend in his own right, on the anniversary of his first work on AMAZING SPIDER-MAN! Tony Stark battles alcoholism! Spider-Man battles the Juggernaut though the streets of New York! The dawn of a New Universe! Daredevil and Kingpin celebrate Christmas! The Punisher joins the Mafia! Also featuring the Hulk, Magneto, Professor X, a masterful retelling of Daredevil's origin, and more! Collects stories from AMAZING SPIDER-MAN #229-230, #36, ANNUAL #11; IRON MAN #128 and #256; UNCANNY X-MEN #183 and #309; STAR BRAND #1; DAREDEVIL #253; PUNISHER WAR ZONE #1; DAREDEVIL: MAN WITHOUT FEAR #1-2; and HULK #25 and #34.\r\u003Cbr\u003E\r\u003Cbr\u003E360 PGS./T+ SUGGESTED FOR TEENS AND UP ...$29.99\r\u003Cbr\u003E",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/2577',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/2577/marvel_visionaries_john_romita_jr_hardcover?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1637',
          name: 'Marvel Visionaries: John Romita Jr. (2005)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14425',
            name: 'Hulk (1999) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13850',
            name: 'Uncanny X-Men (1981) #309',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9501',
            name: 'Iron Man (1968) #256',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8244',
            name: 'Daredevil (1964) #253',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13724',
            name: 'Uncanny X-Men (1981) #183',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6628',
            name: 'The Amazing Spider-Man (1963) #230',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6626',
            name: 'The Amazing Spider-Man (1963) #229',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2005-10-26T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/59036a83ee291',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/59036a83ee291',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 20,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2577/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1935',
              name: 'Paul Becton',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1872',
              name: 'Glynis Oliver',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4388',
              name: 'Arsia Rozegar',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4207',
              name: 'Avalon Studio',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/718',
              name: 'Marc Sumerak',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1887',
              name: 'Janice Chiang',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1759',
              name: 'Joe Rosen',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/44',
              name: 'Chris Claremont',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/74',
              name: 'Chuck Dixon',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/55',
              name: 'Paul Jenkins',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/52',
              name: 'Bruce Jones',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1247',
              name: 'Bob Layton',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2784',
              name: 'David Michelinie',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/17',
              name: 'Frank Miller',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/215',
              name: 'Ann Nocenti',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/958',
              name: 'Roger Stern',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/389',
              name: 'Jim Mooney',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/527',
              name: 'Tom Palmer',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13196',
              name: 'John Romita Jr.',
              role: 'penciler',
            },
          ],
          returned: 20,
        },
        characters: {
          available: 23,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2577/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009733',
              name: 'Charles Xavier',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
              name: 'Cyclops',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009262',
              name: 'Daredevil',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009275',
              name: 'Doc Samson',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009327',
              name: 'Jean Grey',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009382',
              name: 'Juggernaut',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009389',
              name: 'Kingpin',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
              name: 'Kitty Pryde',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009402',
              name: 'Lilandra',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009415',
              name: 'Magik (Illyana Rasputin)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009465',
              name: 'Mystique',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009546',
              name: 'Rogue',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009568',
              name: 'Selene',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2577/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/7184',
              name: 'Interior #7184',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13835',
              name: 'Nothing Can Stop the Juggernaut!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13839',
              name: 'To Fight the Unbeatable Foe!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/16064',
              name: 'Merry Christmas, Kingpin!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19482',
              name: 'cover to John Romita Jr.',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19483',
              name: 'interior to Iron Man (1968) #256',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/27876',
              name: "He'll Never Make Me Cry",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28130',
              name: '...When The Tigers Come At Night!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29357',
              name: 'Always on My Mind',
              type: 'interiorStory',
            },
          ],
          returned: 9,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2577/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1187,
        digitalId: 0,
        title: 'Incredible Hulk Vol. IV: Abominable (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2018-08-06T11:39:15-0400',
        isbn: '0-7851-1113-1',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 136,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The secret organization hell-bent on capturing the Incredible Hulk has hired the services of one of his deadliest and oldest foes, The Abomination! Two of the Marvel Universe's most powerful adversaries go head-to-head and toe-to-toe in a gamma-powered slugfest!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1187',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1187/incredible_hulk_vol_iv_abominable_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/244',
          name: 'Incredible Hulk Vol. IV: Abominable (2003)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14454',
            name: 'Hulk (1999) #54',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14453',
            name: 'Hulk (1999) #53',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14452',
            name: 'Hulk (1999) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14451',
            name: 'Hulk (1999) #51',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14450',
            name: 'Hulk (1999) #50',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2003-09-01T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1187/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1187/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009167',
              name: 'Bruce Banner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1187/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29414',
              name: 'Dark Mind, Dark Hearts',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29416',
              name: 'Killing Season',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29418',
              name: 'Vicious Circles',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29420',
              name: 'Enemy Mine',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29422',
              name: 'Welcome to Entropy',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65277',
              name: 'Incredible Hulk Vol. IV: Abominable TPB 0 cover',
              type: 'cover',
            },
          ],
          returned: 6,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1187/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1153,
        digitalId: 0,
        title: 'Incredible Hulk Vol. 4: Abominable (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2018-08-06T11:39:15-0400',
        isbn: '0-7851-1113-1',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 136,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The secret organization hell-bent on capturing the Incredible Hulk has hired the services of one of his deadliest and oldest foes, The Abomination! Two of the Marvel Universe's most powerful adversaries go head-to-head and toe-to-toe in a gamma-powered slugfest!\r\nCollects Incredible Hulk #50-54.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1153',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1153/incredible_hulk_vol_4_abominable_trade_paperback?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/212',
          name: 'Incredible Hulk Vol. 4: Abominable (2003)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14454',
            name: 'Hulk (1999) #54',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14453',
            name: 'Hulk (1999) #53',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14452',
            name: 'Hulk (1999) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14451',
            name: 'Hulk (1999) #51',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/14450',
            name: 'Hulk (1999) #50',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2003-07-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1153/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1153/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009167',
              name: 'Bruce Banner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1153/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29414',
              name: 'Dark Mind, Dark Hearts',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29416',
              name: 'Killing Season',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29418',
              name: 'Vicious Circles',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29420',
              name: 'Enemy Mine',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29422',
              name: 'Welcome to Entropy',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65257',
              name: 'INCREDIBLE HULK VOL. 4: ABOMINABLE TPB 0 cover',
              type: 'cover',
            },
          ],
          returned: 6,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1153/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 14454,
        digitalId: 3026,
        title: 'Hulk (1999) #54',
        issueNumber: 54,
        variantDescription: '',
        description:
          "When the Hulk and Abomination have a battle, the city of Entropy suffers! Nadia tries to stop the two giants...but what can a puny human do? Meanwhile Home Base learns a little about Mr. Blue's current whereabouts, and Agent S-3 takes her plan to the next phase!",
        modified: '2019-11-22T13:32:40-0500',
        isbn: '',
        upc: '75960604745105411',
        diamondCode: 'MAR031564',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/14454',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/14454/hulk_1999_54?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=3026&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/465',
          name: 'Hulk (1999 - 2008)',
        },
        variants: [],
        collections: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1187',
            name: 'Incredible Hulk Vol. IV: Abominable (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1153',
            name: 'Incredible Hulk Vol. 4: Abominable (Trade Paperback)',
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2008-03-28T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/4bc46b87d49c7',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/4bc46b87d49c7',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14454/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13567',
              name: 'Mike Deodato Jr.',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/52',
              name: 'Bruce Jones',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8429',
              name: 'Dave Sharpe',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/670',
              name: 'Raul Trevino',
              role: 'colorist',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14454/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009167',
              name: 'Bruce Banner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14454/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29421',
              name: 'Cover #29421',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29422',
              name: 'Welcome to Entropy',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/149887',
              name: 'cover from Incredible Hulk (1999) #54',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/149888',
              name: 'story from Incredible Hulk (1999) #54',
              type: 'interiorStory',
            },
          ],
          returned: 4,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14454/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 14453,
        digitalId: 3025,
        title: 'Hulk (1999) #53',
        issueNumber: 53,
        variantDescription: '',
        description:
          'Agent S-3 has a plan of her own--but is it to take down the Hulk or Home Base? Meanwhile, Abomination is released and Nadia stabs Bruce in the back one final time! Who will survive the high noon showdown in Entropy, and what is the true identity of Mr. Blue?',
        modified: '2019-06-06T09:03:48-0400',
        isbn: '',
        upc: '75960604745105311',
        diamondCode: 'FEB031377',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/14453',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/14453/hulk_1999_53?utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=3025&utm_campaign=apiRef&utm_source=d84c67904b224dee8671c661fcdf8530',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/465',
          name: 'Hulk (1999 - 2008)',
        },
        variants: [],
        collections: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1187',
            name: 'Incredible Hulk Vol. IV: Abominable (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1153',
            name: 'Incredible Hulk Vol. 4: Abominable (Trade Paperback)',
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2003-04-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2008-03-14T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/f0/4bc46b8cdf0ca',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/f0/4bc46b8cdf0ca',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14453/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13567',
              name: 'Mike Deodato Jr.',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/52',
              name: 'Bruce Jones',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8429',
              name: 'Dave Sharpe',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/670',
              name: 'Raul Trevino',
              role: 'colorist',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14453/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              name: 'Abomination (Emil Blonsky)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009167',
              name: 'Bruce Banner',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14453/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29419',
              name: 'Cover #29419',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/29420',
              name: 'Enemy Mine',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/149885',
              name: 'cover from Incredible Hulk (1999) #53',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/149886',
              name: 'story from Incredible Hulk (1999) #53',
              type: 'interiorStory',
            },
          ],
          returned: 4,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/14453/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
};
