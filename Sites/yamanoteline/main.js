const CACHE_BUST = '?v=202403';

function resolveMediaPath(path) {
  if (path.startsWith('Sites/')) {
    return path.replace(/^Sites\/yamanoteline\//, '');
  }
  return path;
}

function getAnnouncementSrc(station) {
  return `${resolveMediaPath(station.mp3Announcement)}${CACHE_BUST}`;
}

function getJingleSrc(station) {
  return `${resolveMediaPath(station.mp3Station)}${CACHE_BUST}`;
}

const lineCatalog = {
  'jr-chuo-rapid': {
    name: 'JR Chuo Line (Rapid)',
    operator: 'JR East',
    symbol: 'JC',
    color: '#f15a24',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-keihin-tohoku': {
    name: 'JR Keihin-Tohoku Line',
    operator: 'JR East',
    symbol: 'JK',
    color: '#00a0de',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-tokaido': {
    name: 'JR Tokaido Line',
    operator: 'JR East',
    symbol: 'JT',
    color: '#f39700',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-utsunomiya': {
    name: 'JR Utsunomiya Line',
    operator: 'JR East',
    symbol: 'JU',
    color: '#f58220',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-takasaki': {
    name: 'JR Takasaki Line',
    operator: 'JR East',
    symbol: 'JU',
    color: '#f58220',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-joban-rapid': {
    name: 'JR Joban Line (Rapid)',
    operator: 'JR East',
    symbol: 'JJ',
    color: '#00796b',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-keiyo': {
    name: 'JR Keiyo Line',
    operator: 'JR East',
    symbol: 'JE',
    color: '#d81b60',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-yokosuka-sobu': {
    name: 'JR Yokosuka Line / Sobu Rapid Line',
    operator: 'JR East',
    symbol: 'JO',
    color: '#1e3a8a',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-chuo-sobu': {
    name: 'JR Chuo-Sobu Line (Local)',
    operator: 'JR East',
    symbol: 'JB',
    color: '#f6b221',
    textColor: '#1f1f1f',
    iconType: 'circle'
  },
  'jr-saikyo': {
    name: 'JR Saikyo Line',
    operator: 'JR East',
    symbol: 'JA',
    color: '#009944',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'jr-shonan-shinjuku': {
    name: 'JR Shonan-Shinjuku Line',
    operator: 'JR East',
    symbol: 'JS',
    color: '#ef5350',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-marunouchi': {
    name: 'Tokyo Metro Marunouchi Line',
    operator: 'Tokyo Metro',
    symbol: 'M',
    color: '#e60012',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-ginza': {
    name: 'Tokyo Metro Ginza Line',
    operator: 'Tokyo Metro',
    symbol: 'G',
    color: '#f9a825',
    textColor: '#1f1f1f',
    iconType: 'circle'
  },
  'tokyo-metro-hibiya': {
    name: 'Tokyo Metro Hibiya Line',
    operator: 'Tokyo Metro',
    symbol: 'H',
    color: '#b0b7b6',
    textColor: '#1f1f1f',
    iconType: 'circle'
  },
  'tokyo-metro-tozai': {
    name: 'Tokyo Metro Tozai Line',
    operator: 'Tokyo Metro',
    symbol: 'T',
    color: '#00a7db',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-yurakucho': {
    name: 'Tokyo Metro Yurakucho Line',
    operator: 'Tokyo Metro',
    symbol: 'Y',
    color: '#c3922d',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-chiyoda': {
    name: 'Tokyo Metro Chiyoda Line',
    operator: 'Tokyo Metro',
    symbol: 'C',
    color: '#00a65f',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-namboku': {
    name: 'Tokyo Metro Namboku Line',
    operator: 'Tokyo Metro',
    symbol: 'N',
    color: '#00ada9',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-fukutoshin': {
    name: 'Tokyo Metro Fukutoshin Line',
    operator: 'Tokyo Metro',
    symbol: 'F',
    color: '#6d4c41',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-metro-hanzomon': {
    name: 'Tokyo Metro Hanzomon Line',
    operator: 'Tokyo Metro',
    symbol: 'Z',
    color: '#7b1fa2',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'toei-asakusa': {
    name: 'Toei Asakusa Line',
    operator: 'Toei',
    symbol: 'A',
    color: '#e4007f',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'toei-mita': {
    name: 'Toei Mita Line',
    operator: 'Toei',
    symbol: 'I',
    color: '#0064a4',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'toei-oedo': {
    name: 'Toei Oedo Line',
    operator: 'Toei',
    symbol: 'E',
    color: '#b6007a',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'toei-shinjuku': {
    name: 'Toei Shinjuku Line',
    operator: 'Toei',
    symbol: 'S',
    color: '#6cbb5a',
    textColor: '#1f1f1f',
    iconType: 'circle'
  },
  'keio-line': {
    name: 'Keio Line',
    operator: 'Keio Corporation',
    symbol: 'KO',
    color: '#d5007f',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'keio-inokashira': {
    name: 'Keio Inokashira Line',
    operator: 'Keio Corporation',
    symbol: 'IN',
    color: '#f06292',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'odakyu-odawara': {
    name: 'Odakyu Odawara Line',
    operator: 'Odakyu Electric Railway',
    symbol: 'OH',
    color: '#009fe8',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'seibu-ikebukuro': {
    name: 'Seibu Ikebukuro Line',
    operator: 'Seibu Railway',
    symbol: 'SI',
    color: '#005bac',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'seibu-shinjuku': {
    name: 'Seibu Shinjuku Line',
    operator: 'Seibu Railway',
    symbol: 'SS',
    color: '#8e24aa',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tobu-tojo': {
    name: 'Tobu Tojo Line',
    operator: 'Tobu Railway',
    symbol: 'TJ',
    color: '#0064c8',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyu-den-en-toshi': {
    name: 'Tokyu Den-en-toshi Line',
    operator: 'Tokyu Corporation',
    symbol: 'DT',
    color: '#009688',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyu-toyoko': {
    name: 'Tokyu Toyoko Line',
    operator: 'Tokyu Corporation',
    symbol: 'TY',
    color: '#e53935',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyu-ikegami': {
    name: 'Tokyu Ikegami Line',
    operator: 'Tokyu Corporation',
    symbol: 'IK',
    color: '#ff7043',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyu-meguro': {
    name: 'Tokyu Meguro Line',
    operator: 'Tokyu Corporation',
    symbol: 'MG',
    color: '#795548',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-sakura-tram': {
    name: 'Tokyo Sakura Tram (Toden Arakawa Line)',
    operator: 'Toei',
    symbol: 'SA',
    color: '#ec407a',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'nippori-toneri': {
    name: 'Nippori-Toneri Liner',
    operator: 'Toei',
    symbol: 'NT',
    color: '#43a047',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tsukuba-express': {
    name: 'Tsukuba Express',
    operator: 'Metropolitan Intercity Railway',
    symbol: 'TX',
    color: '#1f2f96',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'keisei-main': {
    name: 'Keisei Main Line',
    operator: 'Keisei Electric Railway',
    symbol: 'KS',
    color: '#1a73e8',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'keisei-skyliner': {
    name: 'Keisei Skyliner',
    operator: 'Keisei Electric Railway',
    symbol: 'SK',
    color: '#0d47a1',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'tokyo-monorail': {
    name: 'Tokyo Monorail',
    operator: 'Tokyo Monorail',
    symbol: 'MO',
    color: '#0f70b7',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'yurikamome': {
    name: 'Yurikamome Line',
    operator: 'Yurikamome Inc.',
    symbol: 'U',
    color: '#26c6da',
    textColor: '#1f1f1f',
    iconType: 'circle'
  },
  'rinkai-line': {
    name: 'Rinkai Line',
    operator: 'Tokyo Waterfront Area Rapid Transit',
    symbol: 'R',
    color: '#3949ab',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'keikyu-main': {
    name: 'Keikyu Main Line',
    operator: 'Keikyu Corporation',
    symbol: 'KK',
    color: '#d32f2f',
    textColor: '#ffffff',
    iconType: 'circle'
  },
  'shinkansen-tokaido': {
    name: 'Tokaido Shinkansen',
    operator: 'JR Central',
    color: '#0d47a1',
    accentColor: '#4fc3f7',
    textColor: '#ffffff',
    iconType: 'shinkansen'
  },
  'shinkansen-tohoku-hokkaido': {
    name: 'Tohoku / Hokkaido Shinkansen',
    operator: 'JR East',
    color: '#00796b',
    accentColor: '#80cbc4',
    textColor: '#ffffff',
    iconType: 'shinkansen'
  },
  'shinkansen-joetsu': {
    name: 'Joetsu Shinkansen',
    operator: 'JR East',
    color: '#ff8f00',
    accentColor: '#ffe082',
    textColor: '#ffffff',
    iconType: 'shinkansen'
  },
  'shinkansen-hokuriku': {
    name: 'Hokuriku Shinkansen',
    operator: 'JR East / JR West',
    color: '#b8860b',
    accentColor: '#f9e0a3',
    textColor: '#ffffff',
    iconType: 'shinkansen'
  },
  'shinkansen-yamagata': {
    name: 'Yamagata Shinkansen',
    operator: 'JR East',
    color: '#689f38',
    accentColor: '#c5e1a5',
    textColor: '#ffffff',
    iconType: 'shinkansen'
  },
  'shinkansen-akita': {
    name: 'Akita Shinkansen',
    operator: 'JR East',
    color: '#c62828',
    accentColor: '#ef9a9a',
    textColor: '#ffffff',
    iconType: 'shinkansen'
  }
};

const lineLogos = {
  'jr-chuo-rapid': 'https://upload.wikimedia.org/wikipedia/commons/7/79/JR_JC_line_symbol.svg',
  'jr-keihin-tohoku': 'https://upload.wikimedia.org/wikipedia/commons/1/16/JR_JK_line_symbol.svg',
  'jr-tokaido': 'https://upload.wikimedia.org/wikipedia/commons/9/92/JR_JT_line_symbol.svg',
  'jr-utsunomiya': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/JR_JU_line_symbol.svg',
  'jr-takasaki': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/JR_JU_line_symbol.svg',
  'jr-joban-rapid': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/JR_JJ_line_symbol.svg',
  'jr-keiyo': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/JR_JE_line_symbol.svg',
  'jr-yokosuka-sobu': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/JR_JO_line_symbol.svg',
  'jr-chuo-sobu': 'https://upload.wikimedia.org/wikipedia/commons/0/03/JR_JB_line_symbol.svg',
  'jr-saikyo': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/JR_JA_line_symbol.svg',
  'jr-shonan-shinjuku': 'https://upload.wikimedia.org/wikipedia/commons/0/04/JR_JS_line_symbol.svg',
  'tokyo-metro-marunouchi': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Logo_of_Tokyo_Metro_Marunouchi_Line.svg',
  'tokyo-metro-ginza': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_of_Tokyo_Metro_Ginza_Line.svg',
  'tokyo-metro-hibiya': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_of_Tokyo_Metro_Hibiya_Line.svg',
  'tokyo-metro-tozai': 'https://upload.wikimedia.org/wikipedia/commons/d/db/Logo_of_Tokyo_Metro_T%C5%8Dzai_Line.svg',
  'tokyo-metro-yurakucho': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Logo_of_Tokyo_Metro_Y%C5%ABrakuch%C5%8D_Line.svg',
  'tokyo-metro-chiyoda': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Logo_of_Tokyo_Metro_Chiyoda_Line.svg',
  'tokyo-metro-namboku': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_of_Tokyo_Metro_Namboku_Line.svg',
  'tokyo-metro-fukutoshin': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_of_Tokyo_Metro_Fukutoshin_Line.svg',
  'tokyo-metro-hanzomon': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Logo_of_Tokyo_Metro_Hanz%C5%8Dmon_Line.svg',
  'toei-asakusa': 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Toei_Asakusa_line_symbol.svg',
  'toei-mita': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Toei_Mita_line_symbol.svg',
  'toei-oedo': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Toei_Oedo_line_symbol.svg',
  'toei-shinjuku': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Toei_Shinjuku_line_symbol.svg',
  'keio-line': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Number_prefix_Keio-line.svg',
  'keio-inokashira': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Number_prefix_Keio-Inokashira-line.svg',
  'odakyu-odawara': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Odakyu_odawara.svg',
  'tobu-tojo': 'https://upload.wikimedia.org/wikipedia/commons/7/76/Tobu_Tojo_Line_%28TJ%29_symbol.svg',
  'tokyu-den-en-toshi': 'https://upload.wikimedia.org/wikipedia/commons/8/80/Tokyu_DT_line_symbol.svg',
  'tokyu-toyoko': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Tokyu_TY_line_symbol.svg',
  'tokyu-ikegami': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Tokyu_IK_line_symbol.svg',
  'tokyu-meguro': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Tokyu_MG_line_symbol.svg',
  'tokyo-sakura-tram': 'https://upload.wikimedia.org/wikipedia/commons/6/66/Tokyo_Sakura_Tram_symbol.svg',
  'nippori-toneri': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Nippori-Toneri_Liner_symbol.svg',
  'tsukuba-express': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Tsukuba_Express_symbol.svg',
  'keisei-main': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Number_prefix_Keisei.svg',
  'keisei-skyliner': 'https://upload.wikimedia.org/wikipedia/commons/4/40/Number_prefix_SkyAccess.svg',
  'tokyo-monorail': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Tokyo_Monorail_Line_symbol.svg',
  'yurikamome': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Yurikamome_line_symbol.svg',
  'rinkai-line': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Rinkai_Line_symbol.svg',
  'keikyu-main': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Number_prefix_Keiky%C5%AB.svg'
};

Object.entries(lineLogos).forEach(([id, logoUrl]) => {
  if (lineCatalog[id]) {
    lineCatalog[id].logo = logoUrl;
  }
});

const stations = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    japaneseName: '東京',
    about:
      'Tokyo Station anchors Japan\'s capital with its red-brick Marunouchi facade and bustling underground concourses. Marunouchi and Nihonbashi surround the hub with flagship stores, refined dining, and the Imperial Palace gardens just a short stroll away.',
    background:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80',
    transfers: [
      'jr-chuo-rapid',
      'jr-keihin-tohoku',
      'jr-tokaido',
      'jr-utsunomiya',
      'jr-takasaki',
      'jr-joban-rapid',
      'jr-keiyo',
      'jr-yokosuka-sobu',
      'shinkansen-tokaido',
      'shinkansen-tohoku-hokkaido',
      'shinkansen-joetsu',
      'shinkansen-hokuriku',
      'shinkansen-yamagata',
      'shinkansen-akita',
      'tokyo-metro-marunouchi'
    ],
    mp3Announcement: "Sites/yamanoteline/announcements/tokyo-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Tokyo.mp3"
  },
  {
    id: 'kanda',
    name: 'Kanda',
    japaneseName: '神田',
    about:
      'Kanda blends old-world wholesalers with a growing tech crowd, filling the side streets with retro coffee shops and lively izakaya. Students from nearby universities keep the district energetic well into the night.',
    background:
      'https://images.unsplash.com/photo-1512455102795-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-chuo-rapid', 'jr-keihin-tohoku', 'tokyo-metro-ginza'],
    mp3Announcement: "Sites/yamanoteline/announcements/kanda-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Kanda.mp3"
  },
  {
    id: 'akihabara',
    name: 'Akihabara',
    japaneseName: '秋葉原',
    about:
      'Electric Town dazzles with towering anime billboards, electronics megastores, and specialty game shops. From maid cafés to retro arcades, Akihabara celebrates subculture and tech innovation on every block.',
    background:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'jr-chuo-sobu', 'tokyo-metro-hibiya', 'tsukuba-express'],
    mp3Announcement: "Sites/yamanoteline/announcements/akihabara-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Akihabara.mp3"
  },
  {
    id: 'okachimachi',
    name: 'Okachimachi',
    japaneseName: '御徒町',
    about:
      'Okachimachi connects the open-air stalls of Ameya-Yokocho with polished jewelry boutiques under the tracks. The neighborhood\'s mix of street eats and craft workshops makes it a favorite for treasure hunters.',
    background:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'tokyo-metro-ginza', 'tokyo-metro-hibiya', 'toei-oedo'],
    mp3Announcement: "Sites/yamanoteline/announcements/okachimachi-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Okachimachi.mp3"
  },
  {
    id: 'ueno',
    name: 'Ueno',
    japaneseName: '上野',
    about:
      'Ueno is Tokyo\'s cultural commons, where national museums line the edges of Ueno Park and street food fills Ameyoko market. Springtime hanami crowds gather beneath the park\'s famous cherry blossoms.',
    background:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    transfers: [
      'jr-keihin-tohoku',
      'jr-utsunomiya',
      'jr-takasaki',
      'jr-joban-rapid',
      'tokyo-metro-ginza',
      'tokyo-metro-hibiya',
      'keisei-main',
      'keisei-skyliner',
      'shinkansen-tohoku-hokkaido',
      'shinkansen-yamagata',
      'shinkansen-akita',
      'shinkansen-joetsu',
      'shinkansen-hokuriku'
    ],
    mp3Announcement: "Sites/yamanoteline/announcements/ueno-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Ueno.mp3"
  },
  {
    id: 'uguisudani',
    name: 'Uguisudani',
    japaneseName: '鶯谷',
    about:
      'Named for the warbling nightingales once heard here, Uguisudani now offers quiet residential lanes beside small museums and Showa-era cafés. The gentle hillside views contrast with the bustle of nearby Ueno.',
    background:
      'https://images.unsplash.com/photo-1542038791-0d9df90f6a5a?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku'],
    mp3Announcement: "Sites/yamanoteline/announcements/uguisudani-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Uguisudani.mp3"
  },
  {
    id: 'nippori',
    name: 'Nippori',
    japaneseName: '日暮里',
    about:
      'Nippori bridges tradition and creativity, with Yanaka\'s old temples on one side and the fabric district\'s rainbow bolts on the other. Travelers connect here to reach Narita via the Keisei Skyliner.',
    background:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'jr-joban-rapid', 'keisei-main', 'keisei-skyliner', 'nippori-toneri'],
    mp3Announcement: "Sites/yamanoteline/announcements/nippori-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Nippori.mp3"
  },
  {
    id: 'nishi-nippori',
    name: 'Nishi-Nippori',
    japaneseName: '西日暮里',
    about:
      'Residential towers and neighborhood ramen counters define Nishi-Nippori. It is a convenient interchange linking the Chiyoda Line and the Nippori-Toneri Liner to Tokyo\'s northeastern suburbs.',
    background:
      'https://images.unsplash.com/photo-1517638851339-4aa32003c11a?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'tokyo-metro-chiyoda', 'nippori-toneri'],
    mp3Announcement: "Sites/yamanoteline/announcements/nishinippori-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Nishinippori.mp3"
  },
  {
    id: 'tabata',
    name: 'Tabata',
    japaneseName: '田端',
    about:
      'Tabata sits atop a ridge with long-established residential streets and views over the Sumida River rail yards. It is a practical stop for commuters heading toward Saitama and northern Tokyo.',
    background:
      'https://images.unsplash.com/photo-1566977744263-0bb0048e9b25?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'jr-utsunomiya', 'jr-takasaki'],
    mp3Announcement: "Sites/yamanoteline/announcements/tabata-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Tabata.mp3"
  },
  {
    id: 'komagome',
    name: 'Komagome',
    japaneseName: '駒込',
    about:
      'Komagome is famed for Rikugien Garden, a classical landscaped retreat glowing with autumn maples and spring azaleas. Shopping arcades by the station serve fresh wagashi and tea to strolling visitors.',
    background:
      'https://images.unsplash.com/photo-1526481280695-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['tokyo-metro-namboku'],
    mp3Announcement: "Sites/yamanoteline/announcements/komagome-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Komagome.mp3"
  },
  {
    id: 'sugamo',
    name: 'Sugamo',
    japaneseName: '巣鴨',
    about:
      'Nicknamed the “Harajuku for grandmas,” Sugamo\'s Jizo-dori shopping street bustles with red underwear shops, sweets stalls, and pilgrims to Koganji Temple. Seasonal festivals keep the retro atmosphere lively.',
    background:
      'https://images.unsplash.com/photo-1529921879218-f9956cc87d77?auto=format&fit=crop&w=1600&q=80',
    transfers: ['toei-mita'],
    mp3Announcement: "Sites/yamanoteline/announcements/sugamo-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Sugamo.mp3"
  },
  {
    id: 'otsuka',
    name: 'Otsuka',
    japaneseName: '大塚',
    about:
      'Otsuka mixes vintage tram charm with a wave of new cafés and craft beer bars. The Tokyo Sakura Tram still trundles past the station, connecting quiet residential pockets in northern Tokyo.',
    background:
      'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?auto=format&fit=crop&w=1600&q=80',
    transfers: ['tokyo-sakura-tram'],
    mp3Announcement: "Sites/yamanoteline/announcements/otsuka-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Otsuka.mp3"
  },
  {
    id: 'ikebukuro',
    name: 'Ikebukuro',
    japaneseName: '池袋',
    about:
      'Ikebukuro is a mega terminal anchored by Sunshine City, anime boutiques, and rooftop observatories. West Gate Park and student-filled diners keep the area buzzing day and night.',
    background:
      'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1600&q=80',
    transfers: [
      'jr-saikyo',
      'jr-shonan-shinjuku',
      'tokyo-metro-marunouchi',
      'tokyo-metro-yurakucho',
      'tokyo-metro-fukutoshin',
      'seibu-ikebukuro',
      'tobu-tojo'
    ],
    mp3Announcement: "Sites/yamanoteline/announcements/ikebukuro-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Ikebukuro.mp3"
  },
  {
    id: 'mejiro',
    name: 'Mejiro',
    japaneseName: '目白',
    about:
      'Leafy Mejiro is defined by Gakushuin University and tranquil residential streets lined with embassies. Charming bakeries and bookshops cluster around the compact station.',
    background:
      'https://images.unsplash.com/photo-1518860308377-0d91b5a7bb1c?auto=format&fit=crop&w=1600&q=80',
    transfers: [],
    mp3Announcement: "Sites/yamanoteline/announcements/mejiro-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Mejiro.mp3"
  },
  {
    id: 'takadanobaba',
    name: 'Takadanobaba',
    japaneseName: '高田馬場',
    about:
      'Takadanobaba pulses with student energy thanks to Waseda University. Retro game centers, budget eats, and jazz bars line the streets, while the Astro Boy theme plays as the station melody.',
    background:
      'https://images.unsplash.com/photo-1526481280695-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['tokyo-metro-tozai', 'seibu-shinjuku'],
    mp3Announcement: "Sites/yamanoteline/announcements/takadanobaba-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Takadanobaba.mp3"
  },
  {
    id: 'shin-okubo',
    name: 'Shin-Okubo',
    japaneseName: '新大久保',
    about:
      'Tokyo\'s Koreatown thrives in Shin-Okubo with neon-lit restaurants, K-pop boutiques, and dessert cafés. The multicultural streets stay lively late into the evening.',
    background:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    transfers: [],
    mp3Announcement: "Sites/yamanoteline/announcements/shinokubo-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Shinokubo.mp3"
  },
  {
    id: 'shinjuku',
    name: 'Shinjuku',
    japaneseName: '新宿',
    about:
      'Shinjuku Station is the world\'s busiest, funneling travelers to skyscraper canyons, Kabukicho nightlife, and the calm greenery of Shinjuku Gyoen. Observation decks offer sweeping views over Tokyo.',
    background:
      'https://images.unsplash.com/photo-1478432780021-b8d273730d8c?auto=format&fit=crop&w=1600&q=80',
    transfers: [
      'jr-chuo-rapid',
      'jr-chuo-sobu',
      'jr-saikyo',
      'jr-shonan-shinjuku',
      'tokyo-metro-marunouchi',
      'toei-shinjuku',
      'toei-oedo',
      'odakyu-odawara',
      'keio-line'
    ],
    mp3Announcement: "Sites/yamanoteline/announcements/shinjuku-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Shinjuku.mp3"
  },
  {
    id: 'yoyogi',
    name: 'Yoyogi',
    japaneseName: '代々木',
    about:
      'Yoyogi balances quiet offices with access to Yoyogi Park and the towering National Gymnasium. Art schools and climbing gyms keep the youthful spirit alive around the station.',
    background:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d8?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-chuo-sobu', 'toei-oedo'],
    mp3Announcement: "Sites/yamanoteline/announcements/yoyogi-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Yoyogi.mp3"
  },
  {
    id: 'harajuku',
    name: 'Harajuku',
    japaneseName: '原宿',
    about:
      'Harajuku is a playground for street fashion, from Takeshita Street\'s pop culture boutiques to Omotesando\'s flagship architecture. The leafy Meiji Shrine grounds offer a quiet counterpoint nearby.',
    background:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    transfers: ['tokyo-metro-chiyoda', 'tokyo-metro-fukutoshin'],
    mp3Announcement: "Sites/yamanoteline/announcements/harajuku-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Harajuku.mp3"
  },
  {
    id: 'shibuya',
    name: 'Shibuya',
    japaneseName: '渋谷',
    about:
      'Shibuya Crossing pulses with neon billboards, music, and constant foot traffic. The district blends next-generation retail, creative agencies, and late-night entertainment that define modern Tokyo.',
    background:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80',
    transfers: [
      'jr-saikyo',
      'jr-shonan-shinjuku',
      'tokyo-metro-ginza',
      'tokyo-metro-hanzomon',
      'tokyo-metro-fukutoshin',
      'tokyu-den-en-toshi',
      'tokyu-toyoko',
      'keio-inokashira'
    ],
    mp3Announcement: "Sites/yamanoteline/announcements/shibuya-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Shibuya.mp3"
  },
  {
    id: 'ebisu',
    name: 'Ebisu',
    japaneseName: '恵比寿',
    about:
      'Ebisu offers refined dining, craft beer bars, and the Yebisu Garden Place promenade. Brick arcades, photography museums, and relaxed terraces give the area an elegant urban village feel.',
    background:
      'https://images.unsplash.com/photo-1478432780021-b8d273730d8c?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-saikyo', 'tokyo-metro-hibiya'],
    mp3Announcement: "Sites/yamanoteline/announcements/ebisu-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Ebisu.mp3"
  },
  {
    id: 'meguro',
    name: 'Meguro',
    japaneseName: '目黒',
    about:
      'Meguro\'s tree-lined avenues lead to specialty coffee shops, design studios, and the serene Meguro River. Spring cherry blossoms transform the riverside into a soft pink tunnel.',
    background:
      'https://images.unsplash.com/photo-1526481280695-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['tokyo-metro-namboku', 'toei-mita', 'tokyu-meguro'],
    mp3Announcement: "Sites/yamanoteline/announcements/meguro-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Meguro.mp3"
  },
  {
    id: 'gotanda',
    name: 'Gotanda',
    japaneseName: '五反田',
    about:
      'Gotanda mixes riverside offices with late-night eateries and karaoke lounges. Local izakaya clusters under the elevated tracks while megabanks loom overhead.',
    background:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80',
    transfers: ['toei-asakusa', 'tokyu-ikegami'],
    mp3Announcement: "Sites/yamanoteline/announcements/gotanda-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Gotanda.mp3"
  },
  {
    id: 'osaki',
    name: 'Osaki',
    japaneseName: '大崎',
    about:
      'Redeveloped Osaki is home to tech offices, open plazas, and elevated walkways that connect Shinagawa\'s business zone. Art installations dot the corporate campuses.',
    background:
      'https://images.unsplash.com/photo-1526481280695-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-saikyo', 'jr-shonan-shinjuku', 'rinkai-line'],
    mp3Announcement: "Sites/yamanoteline/announcements/osaki-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Osaki.mp3"
  },
  {
    id: 'shinagawa',
    name: 'Shinagawa',
    japaneseName: '品川',
    about:
      'Shinagawa links Tokyo to the south with Shinkansen platforms, waterfront hotels, and the historic Tokaido road. High-rise offices and aquarium attractions make it a major gateway.',
    background:
      'https://images.unsplash.com/photo-1478432780021-b8d273730d8c?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'jr-tokaido', 'jr-yokosuka-sobu', 'shinkansen-tokaido', 'keikyu-main'],
    mp3Announcement: "Sites/yamanoteline/announcements/shinagawa-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Shinagawa.mp3"
  },
  {
    id: 'takanawa-gateway',
    name: 'Takanawa Gateway',
    japaneseName: '高輪ゲートウェイ',
    about:
      'Takanawa Gateway is the newest Yamanote station, with a light-filled design by architect Kengo Kuma. Emerging smart-city developments surround the spacious concourse.',
    background:
      'https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku'],
    mp3Announcement: "Sites/yamanoteline/announcements/takanawagateway-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/TakanawaGateway.mp3"
  },
  {
    id: 'tamachi',
    name: 'Tamachi',
    japaneseName: '田町',
    about:
      'Tamachi links office towers with the canalside campus of Keio University. Elevated promenades lead toward the redeveloped Shibaura waterfront and tiny yakitori bars under the tracks.',
    background:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'toei-asakusa', 'toei-mita'],
    mp3Announcement: "Sites/yamanoteline/announcements/tamachi-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Tamachi.mp3"
  },
  {
    id: 'hamamatsucho',
    name: 'Hamamatsucho',
    japaneseName: '浜松町',
    about:
      'Hamamatsucho connects to Haneda Airport via the Tokyo Monorail and sits beside the iconic Tokyo Tower. Zojoji Temple and waterfront gardens offer moments of calm in the business district.',
    background:
      'https://images.unsplash.com/photo-1512455102795-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'tokyo-monorail', 'toei-asakusa', 'toei-oedo'],
    mp3Announcement: "Sites/yamanoteline/announcements/hamamatsucho-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Hamamatsucho.mp3"
  },
  {
    id: 'shimbashi',
    name: 'Shimbashi',
    japaneseName: '新橋',
    about:
      'Salarymen gather in Shimbashi\'s lantern-lit alleys after work, while corporate media towers rise above. The station is the historic birthplace of Japan\'s first railway terminal.',
    background:
      'https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1600&q=80',
    transfers: [
      'jr-keihin-tohoku',
      'jr-tokaido',
      'jr-yokosuka-sobu',
      'tokyo-metro-ginza',
      'toei-asakusa',
      'yurikamome'
    ],
    mp3Announcement: "Sites/yamanoteline/announcements/shimbashi-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Shimbashi.mp3"
  },
  {
    id: 'yurakucho',
    name: 'Yurakucho',
    japaneseName: '有楽町',
    about:
      'Yurakucho combines upscale Ginza shopping with Showa-era yakitori alleys tucked under the viaducts. The Tokyo International Forum\'s glass canopy hosts design fairs and concerts year-round.',
    background:
      'https://images.unsplash.com/photo-1526481280695-3d1d229e2b6f?auto=format&fit=crop&w=1600&q=80',
    transfers: ['jr-keihin-tohoku', 'tokyo-metro-yurakucho', 'tokyo-metro-hibiya', 'tokyo-metro-chiyoda', 'toei-mita'],
    mp3Announcement: "Sites/yamanoteline/announcements/yurakucho-announcement.mp3",
    mp3Station: "Sites/yamanoteline/sounds/Yurakucho.mp3"
  }
];

const appEl = document.getElementById('app');
const viewport = document.getElementById('stationViewport');
const backgroundEl = document.getElementById('stationBackground');
const nameJpEl = document.getElementById('stationNameJp');
const nameEnEl = document.getElementById('stationNameEn');
const aboutEl = document.getElementById('stationAbout');
const transferListEl = document.getElementById('transferLines');
const prevPreviewEl = document.getElementById('prevStationPreview');
const nextPreviewEl = document.getElementById('nextStationPreview');
const prevBtn = document.getElementById('prevStation');
const playPauseBtn = document.getElementById('playPause');
const skipBtn = document.getElementById('skipStation');
const announcementsToggle = document.getElementById('announcementsToggle');
const trackLabel = document.getElementById('currentTrackLabel');
const rideModeButton = document.getElementById('rideModeButton');
const ambientToggle = document.getElementById('ambientToggle');
const darkModeToggle = document.getElementById('darkModeToggle');
const mapToggle = document.getElementById('mapToggle');
const audioMapButton = document.getElementById('audioMapButton');
const mapOverlay = document.getElementById('mapOverlay');
const closeMap = document.getElementById('closeMap');
const mapLine = document.getElementById('mapLine');
const mapScrim = mapOverlay.querySelector('[data-close="true"]');
const mapPanel = mapOverlay.querySelector('.map-overlay__panel');
const mapHeading = document.getElementById('mapHeading');
const searchInput = document.getElementById('stationSearch');
const searchGoButton = document.getElementById('jumpButton');
const datalist = document.getElementById('stationList');
const directionPrevName = document.getElementById('directionPrevName');
const directionNextName = document.getElementById('directionNextName');
const volumeSlider = document.getElementById('volumeSlider');
const stationDirectionEl = document.querySelector('.station-direction');
const directionRailEl = stationDirectionEl
  ? stationDirectionEl.querySelector('.station-direction__rail')
  : null;
const directionPrevItem = stationDirectionEl
  ? stationDirectionEl.querySelector('.station-direction__item--prev')
  : null;
const directionNextItem = stationDirectionEl
  ? stationDirectionEl.querySelector('.station-direction__item--next')
  : null;
const directionShuttle = stationDirectionEl
  ? stationDirectionEl.querySelector('.station-direction__shuttle')
  : null;

const announcementAudio = document.getElementById('announcementAudio');
const jingleAudio = document.getElementById('jingleAudio');
const ambientAudio = document.getElementById('ambientAudio');

let currentStationIndex = 0;
let scrollLock = false;
let rideMode = true;
let ambientOn = false;
let darkMode = false;
let jingleEngaged = false;
let rideTimeout = null;
let motionTimeoutHandle = null;
let masterVolume = 0.8;
let announcementsEnabled = true;
let directionTravel = 0;
let directionProgress = 0;
let directionTicker = null;
let lastDirection = 1;
let directionAnnouncementDuration = 0;
let directionJingleDuration = 0;
let previousFocusedElement = null;
let mapFocusReturnElement = null;

const mapFocusableSelector = [
  'button:not([disabled])',
  '[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(', ');

if (appEl) {
  appEl.dataset.direction = 'forward';
}

const volumeKey = 'yamanote-volume';
const rideModeKey = 'yamanote-ride-mode';
const ambientKey = 'yamanote-ambient';
const darkModeKey = 'yamanote-dark-mode';
const announcementsKey = 'yamanote-announcements';

function clampIndex(index) {
  const total = stations.length;
  return (index % total + total) % total;
}

function setBackground(url, stationName = '') {
  if (stationName) {
    backgroundEl.setAttribute('aria-label', `Background image of ${stationName}`);
  }
  backgroundEl.classList.remove('is-active');
  requestAnimationFrame(() => {
    backgroundEl.style.backgroundImage = `url(${url})`;
    requestAnimationFrame(() => backgroundEl.classList.add('is-active'));
  });
}

function renderLineIcon(line) {
  if (line.logo) {
    const img = document.createElement('img');
    img.src = line.logo;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.className = 'transfer-chip__logo';
    img.setAttribute('aria-hidden', 'true');
    return img;
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  if (line.iconType === 'shinkansen') {
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 96 64');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('aria-hidden', 'true');

    const body = document.createElementNS(svgNS, 'rect');
    body.setAttribute('x', '10');
    body.setAttribute('y', '24');
    body.setAttribute('width', '60');
    body.setAttribute('height', '24');
    body.setAttribute('rx', '12');
    body.setAttribute('fill', line.color);

    const nose = document.createElementNS(svgNS, 'path');
    nose.setAttribute('d', 'M70 24h10c7 0 14 6 14 12s-7 12-14 12H70z');
    nose.setAttribute('fill', line.color);

    const windows = document.createElementNS(svgNS, 'rect');
    windows.setAttribute('x', '22');
    windows.setAttribute('y', '28');
    windows.setAttribute('width', '28');
    windows.setAttribute('height', '8');
    windows.setAttribute('rx', '4');
    windows.setAttribute('fill', '#ffffff');
    windows.setAttribute('opacity', '0.88');

    const cockpit = document.createElementNS(svgNS, 'circle');
    cockpit.setAttribute('cx', '80');
    cockpit.setAttribute('cy', '35');
    cockpit.setAttribute('r', '5');
    cockpit.setAttribute('fill', '#ffffff');
    cockpit.setAttribute('opacity', '0.85');

    const light = document.createElementNS(svgNS, 'circle');
    light.setAttribute('cx', '80');
    light.setAttribute('cy', '44');
    light.setAttribute('r', '3.5');
    light.setAttribute('fill', line.accentColor || '#ffffff');
    light.setAttribute('opacity', '0.85');

    const accent = document.createElementNS(svgNS, 'path');
    accent.setAttribute('d', 'M16 40h58c10 0 18 4 24 9');
    accent.setAttribute('stroke', line.accentColor || '#ffffff');
    accent.setAttribute('stroke-width', '4');
    accent.setAttribute('stroke-linecap', 'round');
    accent.setAttribute('fill', 'none');
    accent.setAttribute('opacity', '0.85');

    svg.append(body, nose, accent, windows, cockpit, light);
    return svg;
  }

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 64 64');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('aria-hidden', 'true');

  const base = document.createElementNS(svgNS, 'circle');
  base.setAttribute('cx', '32');
  base.setAttribute('cy', '32');
  base.setAttribute('r', '30');
  base.setAttribute('fill', line.color);
  base.setAttribute('stroke', '#ffffff');
  base.setAttribute('stroke-width', '3');
  base.setAttribute('stroke-opacity', '0.85');

  const overlay = document.createElementNS(svgNS, 'circle');
  overlay.setAttribute('cx', '32');
  overlay.setAttribute('cy', '32');
  overlay.setAttribute('r', '22');
  overlay.setAttribute('fill', 'rgba(255,255,255,0.18)');
  overlay.setAttribute('opacity', '0.35');

  const text = document.createElementNS(svgNS, 'text');
  text.setAttribute('x', '32');
  text.setAttribute('y', line.symbol && line.symbol.length > 1 ? '39' : '41');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('font-family', "'Inter', 'Noto Sans JP', sans-serif");
  text.setAttribute('font-weight', '700');
  text.setAttribute('fill', line.textColor || '#0a1a15');
  const symbol = line.symbol || '';
  const fontSize = symbol.length > 2 ? 18 : symbol.length === 2 ? 22 : 28;
  text.setAttribute('font-size', String(fontSize));
  text.textContent = symbol;

  svg.append(base, overlay, text);
  return svg;
}

function createTransferChip(lineId) {
  const line = lineCatalog[lineId];
  if (!line) return null;

  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'transfer-chip';
  chip.dataset.tooltipPosition = 'above';
  chip.setAttribute('aria-label', `${line.name} (${line.operator})`);

  const icon = document.createElement('span');
  icon.className = 'transfer-chip__icon';
  icon.appendChild(renderLineIcon(line));
  chip.appendChild(icon);

  const tooltip = document.createElement('span');
  tooltip.className = 'transfer-chip__tooltip';
  tooltip.textContent = `${line.name} • ${line.operator}`;
  chip.appendChild(tooltip);

  const updateTooltipPosition = () => {
    const rect = chip.getBoundingClientRect();
    const tooltipHeight = tooltip.offsetHeight || 0;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const margin = 24;
    let position = 'above';
    if (spaceAbove < tooltipHeight + margin && spaceBelow > spaceAbove) {
      position = 'below';
    }
    chip.dataset.tooltipPosition = position;
  };

  const showTooltip = () => {
    updateTooltipPosition();
    chip.classList.add('is-tooltip-visible');
  };

  const hideTooltip = () => {
    chip.classList.remove('is-tooltip-visible');
  };

  chip.addEventListener('pointerenter', showTooltip);
  chip.addEventListener('pointerleave', hideTooltip);
  chip.addEventListener('focus', showTooltip);
  chip.addEventListener('blur', hideTooltip);

  return chip;
}

function updateTransferLines(station) {
  transferListEl.innerHTML = '';
  if (!station.transfers.length) {
    const none = document.createElement('p');
    none.className = 'transfer-lines__empty';
    none.textContent = 'No direct transfers';
    transferListEl.appendChild(none);
    return;
  }

  station.transfers.forEach((lineId) => {
    const chip = createTransferChip(lineId);
    if (chip) {
      transferListEl.appendChild(chip);
    }
  });
}

function updatePreviews(index) {
  const prevIndex = clampIndex(index - 1);
  const nextIndex = clampIndex(index + 1);
  prevPreviewEl.textContent = stations[prevIndex].name;
  nextPreviewEl.textContent = stations[nextIndex].name;
  if (directionPrevName) {
    directionPrevName.textContent = stations[prevIndex].name;
  }
  if (directionNextName) {
    directionNextName.textContent = stations[nextIndex].name;
  }
}

function calculateDirectionTravel() {
  if (!directionPrevItem || !directionNextItem) {
    directionTravel = 0;
    applyDirectionProgress();
    return;
  }
  const prevRect = directionPrevItem.getBoundingClientRect();
  const nextRect = directionNextItem.getBoundingClientRect();
  const distance = nextRect.top - prevRect.top;
  if (Number.isFinite(distance) && distance !== 0) {
    directionTravel = distance;
    if (directionRailEl) {
      directionRailEl.style.setProperty('--direction-travel', `${Math.abs(distance)}px`);
    }
  } else {
    directionTravel = 0;
    if (directionRailEl) {
      directionRailEl.style.setProperty('--direction-travel', '0px');
    }
  }
  applyDirectionProgress();
}

function applyDirectionProgress() {
  if (!directionShuttle) {
    return;
  }
  if (!directionTravel) {
    directionShuttle.style.setProperty('--shuttle-offset', '0px');
    return;
  }
  const travel = Math.abs(directionTravel);
  const clampedProgress = Math.max(0, Math.min(1, directionProgress));
  const offset = lastDirection >= 0 ? clampedProgress * travel : (1 - clampedProgress) * travel;
  directionShuttle.style.setProperty('--shuttle-offset', `${offset}px`);
}

function setDirectionProgress(progress) {
  if (Number.isFinite(progress)) {
    directionProgress = Math.max(0, Math.min(1, progress));
  } else {
    directionProgress = 0;
  }
  applyDirectionProgress();
}

function resetDirectionTimeline() {
  directionAnnouncementDuration = 0;
  directionJingleDuration = 0;
  setDirectionProgress(0);
}

function getSafeDuration(value) {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getAnnouncementDuration() {
  if (!announcementsEnabled) {
    return 0;
  }
  if (!announcementAudio) {
    return 0;
  }
  return directionAnnouncementDuration || getSafeDuration(announcementAudio.duration);
}

function getJingleDuration() {
  if (!jingleAudio) {
    return 0;
  }
  return directionJingleDuration || getSafeDuration(jingleAudio.duration);
}

function setAnnouncementDuration(duration) {
  directionAnnouncementDuration = getSafeDuration(duration);
  syncDirectionProgress();
}

function setJingleDuration(duration) {
  directionJingleDuration = getSafeDuration(duration);
  syncDirectionProgress();
}

function getAnnouncementElapsed() {
  if (!announcementsEnabled || !announcementAudio) {
    return 0;
  }
  if (announcementAudio.ended) {
    return getAnnouncementDuration();
  }
  const current = announcementAudio.currentTime;
  if (!Number.isFinite(current) || current < 0) {
    return 0;
  }
  const max = getAnnouncementDuration();
  return max > 0 ? Math.min(current, max) : 0;
}

function getJingleElapsed() {
  if (!jingleAudio) {
    return 0;
  }
  if (jingleAudio.ended) {
    return getJingleDuration();
  }
  if (!isJingleActive() && !isJinglePaused()) {
    return 0;
  }
  const current = jingleAudio.currentTime;
  const max = getJingleDuration();
  if (!Number.isFinite(current) || current < 0 || max <= 0) {
    return 0;
  }
  return Math.min(current, max);
}

function getDirectionTotalDuration() {
  const total = getAnnouncementDuration() + getJingleDuration();
  return total > 0 ? total : 0;
}

function syncDirectionProgress() {
  const total = getDirectionTotalDuration();
  if (!total) {
    return;
  }
  const elapsed = getAnnouncementElapsed() + getJingleElapsed();
  const progress = elapsed / total;
  if (!Number.isFinite(progress)) {
    return;
  }
  setDirectionProgress(progress);
}

function startDirectionTicker() {
  if (directionTicker) {
    return;
  }
  syncDirectionProgress();
  const tick = () => {
    directionTicker = null;
    const announcementActive = announcementsEnabled && announcementAudio && !announcementAudio.paused && !announcementAudio.ended;
    const jingleActive = isJingleActive();
    if (!announcementActive && !jingleActive) {
      return;
    }
    syncDirectionProgress();
    directionTicker = requestAnimationFrame(tick);
  };
  directionTicker = requestAnimationFrame(tick);
}

function stopDirectionTicker() {
  if (directionTicker) {
    cancelAnimationFrame(directionTicker);
    directionTicker = null;
  }
}

function updateTrackLabel(mode = 'Stopped') {
  const station = stations[currentStationIndex];
  trackLabel.textContent = `${mode} • ${station.name}`;
}

function updatePlayButtons(isPlaying) {
  const symbol = isPlaying ? '⏸' : '▶';
  playPauseBtn.textContent = symbol;
  playPauseBtn.setAttribute('aria-pressed', String(isPlaying));
}

function stopRideTimer() {
  if (rideTimeout) {
    clearTimeout(rideTimeout);
    rideTimeout = null;
  }
}

function scheduleRideAdvance() {
  stopRideTimer();
  if (!rideMode) return;
  rideTimeout = setTimeout(() => {
    goToStation(currentStationIndex + 1, { playAudio: true });
  }, 5000);
}

function setRideMode(enabled) {
  rideMode = enabled;
  rideModeButton.setAttribute('aria-pressed', String(enabled));
  rideModeButton.textContent = enabled ? 'Ride Mode On' : 'Ride Mode';
  localStorage.setItem(rideModeKey, enabled ? '1' : '0');
  if (enabled) {
    if (!isJingleActive() && !isJinglePaused() && announcementAudio.paused) {
      startPlayback();
    }
  } else {
    stopRideTimer();
  }
}

function setAmbient(enabled) {
  ambientOn = enabled;
  ambientToggle.setAttribute('aria-pressed', String(enabled));
  ambientToggle.textContent = enabled ? 'Ambient On' : 'Ambient Off';
  localStorage.setItem(ambientKey, enabled ? '1' : '0');
  if (enabled) {
    applyVolume();
    ambientAudio.play().catch(() => {});
  } else {
    ambientAudio.pause();
  }
}

function setDarkMode(enabled) {
  darkMode = enabled;
  document.body.classList.toggle('theme-dark', enabled);
  if (darkModeToggle) {
    darkModeToggle.setAttribute('aria-pressed', String(enabled));
    darkModeToggle.textContent = enabled ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  localStorage.setItem(darkModeKey, enabled ? '1' : '0');
}

function setAnnouncementsEnabled(enabled, options = {}) {
  const { autoPlay = true } = options;
  const wasAnnouncementActive = !announcementAudio.paused && !announcementAudio.ended;
  const wasJinglePlaying = isJingleActive() || isJinglePaused();
  announcementsEnabled = enabled;
  prepareJingleForStation(stations[currentStationIndex]);
  if (announcementsToggle) {
    announcementsToggle.setAttribute('aria-pressed', String(enabled));
    announcementsToggle.textContent = enabled ? 'Announcements On' : 'Announcements Off';
    announcementsToggle.setAttribute(
      'title',
      enabled ? 'Switch to jingles only' : 'Switch to full announcements'
    );
  }
  localStorage.setItem(announcementsKey, enabled ? '1' : '0');
  const shouldResume = autoPlay && (rideMode || wasAnnouncementActive || wasJinglePlaying);
  if (!enabled) {
    announcementAudio.pause();
    stopDirectionTicker();
    if (shouldResume) {
      startPlayback();
    } else {
      stopJinglePlayback(false);
      updateTrackLabel('Ready');
    }
    syncDirectionProgress();
    return;
  }
  if (shouldResume) {
    startPlayback();
  } else {
    announcementAudio.pause();
    stopJinglePlayback(false);
  }
  syncDirectionProgress();
}

function applyVolume() {
  const volume = masterVolume;
  announcementAudio.volume = volume;
  if (jingleAudio) {
    jingleAudio.volume = volume;
  }
  ambientAudio.volume = ambientOn ? Math.min(0.5, volume * 0.5) : 0;
}

function updateVolumeSliderUI() {
  if (!volumeSlider) return;
  const sliderValue = Math.round(masterVolume * 100);
  volumeSlider.value = String(sliderValue);
  volumeSlider.setAttribute('aria-valuenow', String(sliderValue));
  volumeSlider.setAttribute('aria-valuetext', `${sliderValue}%`);
  const clamped = Math.max(0, Math.min(1, masterVolume));
  volumeSlider.style.setProperty('--volume-fill', clamped.toString());
}

function setMasterVolume(volume, options = {}) {
  const { persist = true } = options;
  const normalized = Math.max(0, Math.min(1, volume));
  masterVolume = normalized;
  applyVolume();
  updateVolumeSliderUI();
  if (persist) {
    localStorage.setItem(volumeKey, normalized.toString());
  }
}

function stopJinglePlayback(clearSrc = true) {
  if (!jingleAudio) return;
  jingleAudio.pause();
  try {
    jingleAudio.currentTime = 0;
  } catch (error) {
    /* ignore reset errors */
  }
  if (clearSrc) {
    jingleAudio.removeAttribute('src');
    delete jingleAudio.dataset.preparedSrc;
    jingleAudio.load();
    setJingleDuration(0);
  } else {
    syncDirectionProgress();
  }
  jingleEngaged = false;
}

function isJingleActive() {
  return Boolean(jingleAudio && jingleEngaged && !jingleAudio.paused && !jingleAudio.ended);
}

function isJinglePaused() {
  return Boolean(jingleAudio && jingleEngaged && jingleAudio.paused && !jingleAudio.ended && jingleAudio.currentTime > 0);
}

function prepareJingleForStation(station) {
  if (!jingleAudio || !station?.mp3Station) {
    setJingleDuration(0);
    return;
  }
  if (isJingleActive()) {
    return;
  }
  const src = getJingleSrc(station);
  if (jingleAudio.dataset.preparedSrc === src) {
    return;
  }
  jingleAudio.dataset.preparedSrc = src;
  jingleAudio.src = src;
  try {
    jingleAudio.load();
  } catch (error) {
    /* ignore preload issues */
  }
}

function playStationJingle() {
  if (!jingleAudio) return false;
  const station = stations[currentStationIndex];
  if (!station?.mp3Station) return false;
  prepareJingleForStation(station);
  jingleEngaged = true;
  applyVolume();
  jingleAudio
    .play()
    .catch((error) => {
      console.error('Unable to play station jingle', error);
      stopJinglePlayback();
      finalizeTrack();
    });
  return true;
}

function finalizeTrack(status = 'Finished') {
  updateTrackLabel(status);
  updatePlayButtons(false);
  scheduleRideAdvance();
}

function triggerMotion(direction) {
  if (direction === 0) {
    return;
  }
  appEl.dataset.direction = direction > 0 ? 'forward' : 'backward';
  if (motionTimeoutHandle) {
    clearTimeout(motionTimeoutHandle);
    motionTimeoutHandle = null;
  }
  delete appEl.dataset.motion;
  requestAnimationFrame(() => {
    appEl.dataset.motion = direction > 0 ? 'forward' : 'backward';
    motionTimeoutHandle = setTimeout(() => {
      delete appEl.dataset.motion;
    }, 700);
  });
}

function goToStation(index, options = {}) {
  const { playAudio = false } = options;
  const previousIndex = currentStationIndex;
  currentStationIndex = clampIndex(index);
  const direction = Math.sign(index - previousIndex);
  if (direction !== 0) {
    lastDirection = direction;
  }
  triggerMotion(direction);
  stopRideTimer();
  stopJinglePlayback();
  stopDirectionTicker();
  resetDirectionTimeline();
  const station = stations[currentStationIndex];

  setBackground(station.background, station.name);
  nameJpEl.textContent = station.japaneseName;
  nameEnEl.textContent = station.name;
  aboutEl.textContent = station.about;
  updateTransferLines(station);
  updatePreviews(currentStationIndex);
  updateTrackLabel('Ready');
  prepareJingleForStation(station);
  requestAnimationFrame(() => {
    calculateDirectionTravel();
  });
  centerMapOnIndex(currentStationIndex);

  announcementAudio.src = getAnnouncementSrc(station);

  if (playAudio) {
    startPlayback();
  } else {
    updatePlayButtons(false);
    announcementAudio.pause();
  }
}

function startPlayback() {
  if (!announcementsEnabled) {
    stopJinglePlayback(false);
    if (!playStationJingle()) {
      finalizeTrack();
    }
    return;
  }
  playAnnouncement();
}

function playAnnouncement() {
  const station = stations[currentStationIndex];
  stopJinglePlayback(false);
  prepareJingleForStation(station);
  announcementAudio.src = getAnnouncementSrc(station);
  applyVolume();
  announcementAudio
    .play()
    .then(() => {
      updatePlayButtons(true);
      updateTrackLabel('Announcement');
    })
    .catch((error) => {
      console.error('Unable to play audio', error);
      updatePlayButtons(false);
      updateTrackLabel('Audio unavailable');
    });
}

function togglePlayPause() {
  if (isJingleActive()) {
    jingleAudio.pause();
    return;
  }
  if (isJinglePaused()) {
    jingleAudio
      .play()
      .catch((error) => {
        console.error('Unable to resume station jingle', error);
        stopJinglePlayback();
        finalizeTrack();
      });
    return;
  }
  if (!announcementsEnabled) {
    startPlayback();
    return;
  }
  if (announcementAudio.paused) {
    playAnnouncement();
  } else {
    announcementAudio.pause();
  }
}

function handleAnnouncementMetadata() {
  if (!announcementAudio) return;
  setAnnouncementDuration(announcementAudio.duration);
}

function handleJingleMetadata() {
  if (!jingleAudio) return;
  setJingleDuration(jingleAudio.duration);
}

function handleAudioEnd() {
  stopDirectionTicker();
  syncDirectionProgress();
  if (!playStationJingle()) {
    setDirectionProgress(1);
    finalizeTrack();
  }
}

function handleAudioPlay() {
  updatePlayButtons(true);
  updateTrackLabel('Announcement');
  startDirectionTicker();
  syncDirectionProgress();
}

function handleAudioPause() {
  updatePlayButtons(false);
  if (!announcementAudio.ended) {
    updateTrackLabel('Paused');
  }
  stopDirectionTicker();
  syncDirectionProgress();
}

function handleJinglePlay() {
  jingleEngaged = true;
  updatePlayButtons(true);
  updateTrackLabel('Station Jingle');
  startDirectionTicker();
  syncDirectionProgress();
}

function handleJinglePause() {
  if (!jingleEngaged || !jingleAudio || jingleAudio.ended) return;
  updatePlayButtons(false);
  updateTrackLabel('Jingle Paused');
  stopDirectionTicker();
  syncDirectionProgress();
}

function handleJingleEnd() {
  stopDirectionTicker();
  setDirectionProgress(1);
  stopJinglePlayback();
  finalizeTrack();
}

function handleJingleError() {
  console.error('Station jingle error', jingleAudio?.error);
  stopDirectionTicker();
  stopJinglePlayback();
  setDirectionProgress(1);
  finalizeTrack();
}

function openMap() {
  if (document.activeElement instanceof HTMLElement) {
    previousFocusedElement = document.activeElement;
  }
  if (previousFocusedElement !== mapToggle && previousFocusedElement !== audioMapButton) {
    previousFocusedElement = mapFocusReturnElement || mapToggle;
  }

  mapOverlay.classList.add('is-visible');
  mapOverlay.setAttribute('aria-hidden', 'false');
  mapToggle.setAttribute('aria-expanded', 'true');
  audioMapButton?.setAttribute('aria-expanded', 'true');
  document.querySelector('.top-bar')?.setAttribute('inert', '');
  document.querySelector('.top-bar')?.setAttribute('aria-hidden', 'true');
  viewport?.setAttribute('inert', '');
  viewport?.setAttribute('aria-hidden', 'true');
  centerMapOnIndex(currentStationIndex);

  const initialFocusTarget = closeMap || mapHeading || mapPanel;
  if (mapPanel && !mapPanel.hasAttribute('tabindex')) {
    mapPanel.setAttribute('tabindex', '-1');
  }
  requestAnimationFrame(() => {
    initialFocusTarget?.focus();
  });
}

function closeMapOverlay() {
  mapOverlay.classList.remove('is-visible');
  mapOverlay.setAttribute('aria-hidden', 'true');
  mapToggle.setAttribute('aria-expanded', 'false');
  audioMapButton?.setAttribute('aria-expanded', 'false');
  document.querySelector('.top-bar')?.removeAttribute('inert');
  document.querySelector('.top-bar')?.removeAttribute('aria-hidden');
  viewport?.removeAttribute('inert');
  viewport?.removeAttribute('aria-hidden');

  const focusTarget = mapFocusReturnElement || previousFocusedElement || mapToggle;
  if (focusTarget instanceof HTMLElement) {
    focusTarget.focus();
  }
  previousFocusedElement = null;
  mapFocusReturnElement = null;
}

function getMapFocusableElements() {
  if (!mapPanel) return [];
  return Array.from(mapPanel.querySelectorAll(mapFocusableSelector)).filter((element) => {
    return element instanceof HTMLElement && element.offsetParent !== null;
  });
}

function buildMap() {
  mapLine.innerHTML = '';
  stations.forEach((station, index) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'map-node';
    node.dataset.index = String(index);
    node.setAttribute('role', 'listitem');
    node.setAttribute('aria-label', `${station.name} ${station.japaneseName}`);

    const label = document.createElement('span');
    label.className = 'map-node__label';

    const nameEn = document.createElement('span');
    nameEn.textContent = station.name;
    label.appendChild(nameEn);

    const nameJp = document.createElement('span');
    nameJp.textContent = station.japaneseName;
    nameJp.lang = 'ja';
    label.appendChild(nameJp);

    node.appendChild(label);

    node.addEventListener('click', () => {
      centerMapOnIndex(index);
      setTimeout(() => {
        goToStation(index, { playAudio: rideMode });
        closeMapOverlay();
      }, 450);
    });

    mapLine.appendChild(node);
  });
}

function highlightMapNode() {
  const nodes = mapLine.querySelectorAll('.map-node');
  nodes.forEach((node) => node.classList.remove('is-active'));
  const active = mapLine.querySelector(`.map-node[data-index="${currentStationIndex}"]`);
  if (active) {
    active.classList.add('is-active');
  }
}

function centerMapOnIndex(index) {
  const node = mapLine.querySelector(`.map-node[data-index="${index}"]`);
  if (!node) return;
  const container = mapLine.parentElement;
  if (!container) return;
  const containerHeight = container.clientHeight;
  if (!containerHeight) {
    highlightMapNode();
    return;
  }
  const offsetTop = node.offsetTop + node.offsetHeight / 2;
  const target = Math.max(offsetTop - containerHeight / 2, 0);
  container.scrollTop = target;
  if (mapOverlay.classList.contains('is-visible')) {
    container.scrollTo({ top: target, behavior: 'smooth' });
  }
  highlightMapNode();
}

function navigate(delta) {
  if (scrollLock) return;
  scrollLock = true;
  goToStation(currentStationIndex + delta, { playAudio: rideMode });
  setTimeout(() => {
    scrollLock = false;
  }, 650);
}

function handleWheel(event) {
  if (mapOverlay.classList.contains('is-visible')) return;
  if (Math.abs(event.deltaY) < 30) return;
  navigate(event.deltaY > 0 ? 1 : -1);
}

let touchStartY = null;

function handleTouchStart(event) {
  touchStartY = event.touches[0]?.clientY ?? null;
}

function handleTouchEnd(event) {
  if (touchStartY === null) return;
  const endY = event.changedTouches[0]?.clientY ?? touchStartY;
  const diff = touchStartY - endY;
  if (Math.abs(diff) > 40) {
    navigate(diff > 0 ? 1 : -1);
  }
  touchStartY = null;
}

function handleKeydown(event) {
  if (mapOverlay.classList.contains('is-visible')) {
    if (event.key === 'Escape') {
      closeMapOverlay();
    } else if (event.key === 'Tab') {
      const focusableElements = getMapFocusableElements();
      const first = focusableElements[0] || mapPanel;
      const last = focusableElements[focusableElements.length - 1] || mapPanel;
      const active = document.activeElement;

      if (!(first instanceof HTMLElement) || !(last instanceof HTMLElement)) {
        return;
      }

      if (event.shiftKey && (active === first || !mapOverlay.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !mapOverlay.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    }
    return;
  }
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      navigate(1);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      navigate(-1);
      break;
    case ' ': // space
      event.preventDefault();
      togglePlayPause();
      break;
    case 'Enter':
      if (document.activeElement === searchInput) {
        jumpToSearch();
      }
      break;
    default:
      break;
  }
}

function jumpToSearch() {
  const query = searchInput.value.trim();
  if (!query) return;
  const normalized = query.toLowerCase();
  const foundIndex = stations.findIndex((station) => {
    return (
      station.name.toLowerCase() === normalized ||
      station.japaneseName === query ||
      station.name.toLowerCase().includes(normalized) ||
      station.japaneseName.includes(query)
    );
  });
  if (foundIndex >= 0) {
    goToStation(foundIndex, { playAudio: rideMode });
    closeMapOverlay();
  }
}

function populateSearchOptions() {
  datalist.innerHTML = '';
  stations.forEach((station) => {
    const optionEn = document.createElement('option');
    optionEn.value = station.name;
    datalist.appendChild(optionEn);

    const optionJp = document.createElement('option');
    optionJp.value = station.japaneseName;
    datalist.appendChild(optionJp);
  });
}

function hydrateSettings() {
  const storedVolume = localStorage.getItem(volumeKey);
  if (storedVolume !== null) {
    const parsedVolume = parseFloat(storedVolume);
    if (!Number.isNaN(parsedVolume)) {
      setMasterVolume(parsedVolume, { persist: false });
    } else {
      setMasterVolume(0.8, { persist: false });
    }
  } else {
    setMasterVolume(0.8, { persist: false });
  }

  const storedAnnouncements = localStorage.getItem(announcementsKey);
  setAnnouncementsEnabled(storedAnnouncements !== '0', { autoPlay: false });

  const storedDark = localStorage.getItem(darkModeKey);
  if (storedDark === null) {
    const prefersDark = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    setDarkMode(prefersDark);
  } else {
    setDarkMode(storedDark === '1');
  }

  const storedRideMode = localStorage.getItem(rideModeKey);
  setRideMode(storedRideMode !== '0');

  const storedAmbient = localStorage.getItem(ambientKey) === '1';
  setAmbient(storedAmbient);
}

function bindEvents() {
  playPauseBtn.addEventListener('click', togglePlayPause);
  prevBtn?.addEventListener('click', () => navigate(-1));
  skipBtn.addEventListener('click', () => navigate(1));
  rideModeButton.addEventListener('click', () => setRideMode(!rideMode));
  ambientToggle.addEventListener('click', () => setAmbient(!ambientOn));
  announcementsToggle?.addEventListener('click', () => setAnnouncementsEnabled(!announcementsEnabled));
  mapToggle.addEventListener('click', () => {
    if (mapOverlay.classList.contains('is-visible')) {
      closeMapOverlay();
    } else {
      mapFocusReturnElement = mapToggle;
      openMap();
    }
  });
  audioMapButton?.addEventListener('click', () => {
    if (mapOverlay.classList.contains('is-visible')) {
      closeMapOverlay();
    } else {
      mapFocusReturnElement = audioMapButton;
      openMap();
    }
  });
  closeMap.addEventListener('click', closeMapOverlay);
  mapScrim?.addEventListener('click', closeMapOverlay);
  viewport.addEventListener('wheel', handleWheel, { passive: true });
  viewport.addEventListener('touchstart', handleTouchStart, { passive: true });
  viewport.addEventListener('touchend', handleTouchEnd, { passive: true });
  document.addEventListener('keydown', handleKeydown);
  announcementAudio.addEventListener('ended', handleAudioEnd);
  announcementAudio.addEventListener('pause', handleAudioPause);
  announcementAudio.addEventListener('play', handleAudioPlay);
  announcementAudio.addEventListener('timeupdate', syncDirectionProgress);
  announcementAudio.addEventListener('loadedmetadata', handleAnnouncementMetadata);
  announcementAudio.addEventListener('durationchange', handleAnnouncementMetadata);
  announcementAudio.addEventListener('seeking', syncDirectionProgress);
  announcementAudio.addEventListener('seeked', syncDirectionProgress);
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      jumpToSearch();
    }
  });
  searchGoButton.addEventListener('click', jumpToSearch);
  darkModeToggle?.addEventListener('click', () => setDarkMode(!darkMode));
  if (volumeSlider) {
    volumeSlider.setAttribute('aria-valuemin', '0');
    volumeSlider.setAttribute('aria-valuemax', '100');
    const handleVolumeInput = (event) => {
      const target = event.currentTarget;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      const value = Number.parseFloat(target.value);
      if (!Number.isNaN(value)) {
        setMasterVolume(value / 100);
      }
    };
    volumeSlider.addEventListener('input', handleVolumeInput);
    volumeSlider.addEventListener('change', handleVolumeInput);
  }
  if (jingleAudio) {
    jingleAudio.addEventListener('ended', handleJingleEnd);
    jingleAudio.addEventListener('pause', handleJinglePause);
    jingleAudio.addEventListener('play', handleJinglePlay);
    jingleAudio.addEventListener('error', handleJingleError);
    jingleAudio.addEventListener('timeupdate', syncDirectionProgress);
    jingleAudio.addEventListener('loadedmetadata', handleJingleMetadata);
    jingleAudio.addEventListener('durationchange', handleJingleMetadata);
    jingleAudio.addEventListener('seeking', syncDirectionProgress);
    jingleAudio.addEventListener('seeked', syncDirectionProgress);
  }
  window.addEventListener('resize', () => {
    requestAnimationFrame(calculateDirectionTravel);
  });
}

function init() {
  populateSearchOptions();
  buildMap();
  goToStation(0, { playAudio: false });
  hydrateSettings();
  centerMapOnIndex(0);
  bindEvents();
}

init();
