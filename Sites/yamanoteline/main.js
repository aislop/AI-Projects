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
      { name: 'JR Chuo Line (Rapid)', code: 'JC', color: '#f15a24', operator: 'JR East' },
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' },
      { name: 'Tokaido Shinkansen', code: '🚄', color: '#1b5e20', operator: 'JR Central' },
      { name: 'Tokyo Metro Marunouchi Line', code: 'M', color: '#c62828', operator: 'Tokyo Metro' }
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
    transfers: [
      { name: 'JR Chuo Line (Rapid)', code: 'JC', color: '#f15a24', operator: 'JR East' },
      { name: 'Tokyo Metro Ginza Line', code: 'G', color: '#f9a825', operator: 'Tokyo Metro' }
    ],
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
    transfers: [
      { name: 'JR Sobu Line', code: 'JB', color: '#f6b27b', operator: 'JR East' },
      { name: 'Tokyo Metro Hibiya Line', code: 'H', color: '#9e9d24', operator: 'Tokyo Metro' },
      { name: 'Tsukuba Express', code: 'TX', color: '#5c6bc0', operator: 'Metropolitan Intercity Railway' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' }
    ],
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
      { name: 'JR Utsunomiya Line', code: 'JU', color: '#f57c00', operator: 'JR East' },
      { name: 'JR Joban Line', code: 'JJ', color: '#00796b', operator: 'JR East' },
      { name: 'Tokyo Metro Ginza Line', code: 'G', color: '#f9a825', operator: 'Tokyo Metro' },
      { name: 'Tokyo Metro Hibiya Line', code: 'H', color: '#9e9d24', operator: 'Tokyo Metro' },
      { name: 'Keisei Main Line', code: 'KS', color: '#1a73e8', operator: 'Keisei Electric Railway' }
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' },
      { name: 'JR Joban Line', code: 'JJ', color: '#00796b', operator: 'JR East' },
      { name: 'Keisei Skyliner', code: 'KS', color: '#1a73e8', operator: 'Keisei Electric Railway' }
    ],
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
    transfers: [
      { name: 'Tokyo Metro Chiyoda Line', code: 'C', color: '#009688', operator: 'Tokyo Metro' },
      { name: 'Nippori-Toneri Liner', code: 'NT', color: '#43a047', operator: 'Toei' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' }
    ],
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
    transfers: [
      { name: 'Tokyo Metro Namboku Line', code: 'N', color: '#26a69a', operator: 'Tokyo Metro' }
    ],
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
    transfers: [
      { name: 'Toei Mita Line', code: 'I', color: '#1565c0', operator: 'Toei' }
    ],
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
    transfers: [
      { name: 'Tokyo Sakura Tram (Toden Arakawa Line)', code: 'SA', color: '#ec407a', operator: 'Toei' }
    ],
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
      { name: 'JR Saikyo Line', code: 'JA', color: '#4caf50', operator: 'JR East' },
      { name: 'Tokyo Metro Marunouchi Line', code: 'M', color: '#c62828', operator: 'Tokyo Metro' },
      { name: 'Tokyo Metro Fukutoshin Line', code: 'F', color: '#6d4c41', operator: 'Tokyo Metro' },
      { name: 'Seibu Ikebukuro Line', code: 'SI', color: '#2196f3', operator: 'Seibu Railway' },
      { name: 'Tobu Tojo Line', code: 'TJ', color: '#ff7043', operator: 'Tobu Railway' }
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
    transfers: [
      { name: 'Tokyo Metro Tozai Line', code: 'T', color: '#0288d1', operator: 'Tokyo Metro' },
      { name: 'Seibu Shinjuku Line', code: 'SS', color: '#388e3c', operator: 'Seibu Railway' }
    ],
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
      { name: 'JR Chuo Line (Rapid)', code: 'JC', color: '#f15a24', operator: 'JR East' },
      { name: 'JR Saikyo Line', code: 'JA', color: '#4caf50', operator: 'JR East' },
      { name: 'Tokyo Metro Marunouchi Line', code: 'M', color: '#c62828', operator: 'Tokyo Metro' },
      { name: 'Toei Oedo Line', code: 'E', color: '#7b1fa2', operator: 'Toei' }
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
    transfers: [
      { name: 'JR Chuo-Sobu Line', code: 'JB', color: '#f6b27b', operator: 'JR East' },
      { name: 'Toei Oedo Line', code: 'E', color: '#7b1fa2', operator: 'Toei' }
    ],
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
    transfers: [
      { name: 'Tokyo Metro Chiyoda Line (Meiji-jingumae)', code: 'C', color: '#009688', operator: 'Tokyo Metro' },
      { name: 'Tokyo Metro Fukutoshin Line', code: 'F', color: '#6d4c41', operator: 'Tokyo Metro' }
    ],
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
      { name: 'JR Saikyo Line', code: 'JA', color: '#4caf50', operator: 'JR East' },
      { name: 'JR Shonan-Shinjuku Line', code: 'JS', color: '#ef5350', operator: 'JR East' },
      { name: 'Tokyo Metro Ginza Line', code: 'G', color: '#f9a825', operator: 'Tokyo Metro' },
      { name: 'Tokyo Metro Hanzomon Line', code: 'Z', color: '#7b1fa2', operator: 'Tokyo Metro' },
      { name: 'Tokyo Metro Fukutoshin Line', code: 'F', color: '#6d4c41', operator: 'Tokyo Metro' },
      { name: 'Tokyu Den-en-toshi Line', code: 'DT', color: '#00897b', operator: 'Tokyu Corporation' }
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
    transfers: [
      { name: 'JR Saikyo Line', code: 'JA', color: '#4caf50', operator: 'JR East' },
      { name: 'Tokyo Metro Hibiya Line', code: 'H', color: '#9e9d24', operator: 'Tokyo Metro' }
    ],
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
    transfers: [
      { name: 'Tokyo Metro Namboku Line', code: 'N', color: '#26a69a', operator: 'Tokyo Metro' },
      { name: 'Toei Mita Line', code: 'I', color: '#1565c0', operator: 'Toei' },
      { name: 'Tokyu Meguro Line', code: 'MG', color: '#795548', operator: 'Tokyu Corporation' }
    ],
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
    transfers: [
      { name: 'Toei Asakusa Line', code: 'A', color: '#e53935', operator: 'Toei' },
      { name: 'Tokyu Ikegami Line', code: 'IK', color: '#ff7043', operator: 'Tokyu Corporation' }
    ],
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
    transfers: [
      { name: 'JR Saikyo Line', code: 'JA', color: '#4caf50', operator: 'JR East' },
      { name: 'Rinkai Line', code: 'R', color: '#3949ab', operator: 'Tokyo Waterfront Area Rapid Transit' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' },
      { name: 'JR Tokaido Line', code: 'JT', color: '#f57c00', operator: 'JR East' },
      { name: 'Tokaido Shinkansen', code: '🚄', color: '#1b5e20', operator: 'JR Central' },
      { name: 'Keikyu Main Line', code: 'KK', color: '#d32f2f', operator: 'Keikyu Corporation' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' }
    ],
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
    transfers: [
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' },
      { name: 'Tokyo Monorail', code: 'MO', color: '#0288d1', operator: 'Tokyo Monorail' }
    ],
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
      { name: 'JR Keihin-Tohoku Line', code: 'JK', color: '#00bcd4', operator: 'JR East' },
      { name: 'Toei Asakusa Line', code: 'A', color: '#e53935', operator: 'Toei' },
      { name: 'Toei Oedo Line', code: 'E', color: '#7b1fa2', operator: 'Toei' },
      { name: 'Yurikamome Line', code: 'U', color: '#26c6da', operator: 'Yurikamome Inc.' }
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
    transfers: [
      { name: 'Tokyo Metro Yurakucho Line', code: 'Y', color: '#fdd835', operator: 'Tokyo Metro' },
      { name: 'Tokyo Metro Hibiya Line', code: 'H', color: '#9e9d24', operator: 'Tokyo Metro' }
    ],
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
const playPauseBtn = document.getElementById('playPause');
const skipBtn = document.getElementById('skipStation');
const volumeSlider = document.getElementById('volumeSlider');
const volumeToggle = document.getElementById('volumeToggle');
const audioVolumeContainer = document.querySelector('.audio-pill__volume');
const muteButton = document.getElementById('muteButton');
const trackLabel = document.getElementById('currentTrackLabel');
const rideModeButton = document.getElementById('rideModeButton');
const ambientToggle = document.getElementById('ambientToggle');
const mapToggle = document.getElementById('mapToggle');
const audioMapButton = document.getElementById('audioMapButton');
const mapOverlay = document.getElementById('mapOverlay');
const closeMap = document.getElementById('closeMap');
const mapLine = document.getElementById('mapLine');
const mapScrim = mapOverlay.querySelector('[data-close="true"]');
const searchInput = document.getElementById('stationSearch');
const searchGoButton = document.getElementById('jumpButton');
const datalist = document.getElementById('stationList');

const announcementAudio = document.getElementById('announcementAudio');
const ambientAudio = document.getElementById('ambientAudio');

let currentStationIndex = 0;
let scrollLock = false;
let isMuted = false;
let rideMode = false;
let ambientOn = false;
let rideTimeout = null;
let motionTimeoutHandle = null;

const volumeKey = 'yamanote-volume';
const rideModeKey = 'yamanote-ride-mode';
const ambientKey = 'yamanote-ambient';

function clampIndex(index) {
  const total = stations.length;
  return (index % total + total) % total;
}

function setBackground(url) {
  backgroundEl.classList.remove('is-active');
  requestAnimationFrame(() => {
    backgroundEl.style.backgroundImage = `url(${url})`;
    requestAnimationFrame(() => backgroundEl.classList.add('is-active'));
  });
}

function createTransferChip(transfer) {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'transfer-chip';
  chip.dataset.tooltip = `${transfer.name} • ${transfer.operator}`;

  const icon = document.createElement('span');
  icon.className = 'transfer-chip__icon';
  icon.textContent = transfer.code;
  icon.style.background = transfer.color;
  chip.appendChild(icon);

  const label = document.createElement('span');
  label.className = 'transfer-chip__name';
  label.textContent = transfer.name;
  chip.appendChild(label);

  chip.addEventListener('focus', () => chip.classList.add('is-focused'));
  chip.addEventListener('blur', () => chip.classList.remove('is-focused'));

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

  station.transfers.forEach((transfer) => {
    const chip = createTransferChip(transfer);
    transferListEl.appendChild(chip);
  });
}

function updatePreviews(index) {
  const prevIndex = clampIndex(index - 1);
  const nextIndex = clampIndex(index + 1);
  prevPreviewEl.textContent = stations[prevIndex].name;
  nextPreviewEl.textContent = stations[nextIndex].name;
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
    if (announcementAudio.paused) {
      playAnnouncement();
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

function setMute(enabled) {
  isMuted = enabled;
  muteButton.setAttribute('aria-pressed', String(enabled));
  muteButton.textContent = enabled ? 'Unmute' : 'Mute';
  applyVolume();
}

function applyVolume() {
  const volume = parseFloat(volumeSlider.value);
  announcementAudio.volume = isMuted ? 0 : volume;
  ambientAudio.volume = ambientOn ? Math.min(0.5, volume * 0.5) : 0;
}

function setVolume(value) {
  volumeSlider.value = value;
  localStorage.setItem(volumeKey, value);
  applyVolume();
}

function triggerMotion(direction) {
  if (direction === 0) {
    return;
  }
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
  triggerMotion(direction);
  stopRideTimer();
  const station = stations[currentStationIndex];

  setBackground(station.background);
  nameJpEl.textContent = station.japaneseName;
  nameEnEl.textContent = station.name;
  aboutEl.textContent = station.about;
  updateTransferLines(station);
  updatePreviews(currentStationIndex);
  updateTrackLabel('Ready');
  centerMapOnIndex(currentStationIndex);

  announcementAudio.src = getAnnouncementSrc(station);

  if (playAudio) {
    playAnnouncement();
  } else {
    updatePlayButtons(false);
    announcementAudio.pause();
  }
}

function playAnnouncement() {
  const station = stations[currentStationIndex];
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
  if (announcementAudio.paused) {
    playAnnouncement();
  } else {
    announcementAudio.pause();
  }
}

function handleAudioEnd() {
  updatePlayButtons(false);
  updateTrackLabel('Finished');
  if (rideMode) {
    scheduleRideAdvance();
  }
}

function handleAudioPlay() {
  updatePlayButtons(true);
  updateTrackLabel('Announcement');
}

function handleAudioPause() {
  updatePlayButtons(false);
  if (!announcementAudio.ended) {
    updateTrackLabel('Paused');
  }
}

function openMap() {
  mapOverlay.classList.add('is-visible');
  mapOverlay.setAttribute('aria-hidden', 'false');
  mapToggle.setAttribute('aria-expanded', 'true');
  audioMapButton.setAttribute('aria-expanded', 'true');
  centerMapOnIndex(currentStationIndex);
}

function closeMapOverlay() {
  mapOverlay.classList.remove('is-visible');
  mapOverlay.setAttribute('aria-hidden', 'true');
  mapToggle.setAttribute('aria-expanded', 'false');
  audioMapButton.setAttribute('aria-expanded', 'false');
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
  const offset = containerHeight / 2 - offsetTop;
  mapLine.style.transform = `translateY(${offset}px)`;
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
  setVolume(storedVolume ?? '0.8');

  const storedRideValue = localStorage.getItem(rideModeKey);
  const rideDefault = storedRideValue === null ? true : storedRideValue === '1';
  setRideMode(rideDefault);

  const storedAmbient = localStorage.getItem(ambientKey) === '1';
  setAmbient(storedAmbient);
}

function bindEvents() {
  playPauseBtn.addEventListener('click', togglePlayPause);
  skipBtn.addEventListener('click', () => navigate(1));
  volumeSlider.addEventListener('input', (event) => setVolume(event.target.value));
  volumeSlider.addEventListener('change', () => {
    if (!audioVolumeContainer) return;
    audioVolumeContainer.dataset.open = 'false';
    volumeToggle?.setAttribute('aria-expanded', 'false');
  });
  volumeSlider.addEventListener('blur', () => {
    if (!audioVolumeContainer) return;
    audioVolumeContainer.dataset.open = 'false';
    volumeToggle?.setAttribute('aria-expanded', 'false');
  });
  muteButton.addEventListener('click', () => setMute(!isMuted));
  rideModeButton.addEventListener('click', () => setRideMode(!rideMode));
  ambientToggle.addEventListener('click', () => setAmbient(!ambientOn));
  mapToggle.addEventListener('click', () => {
    if (mapOverlay.classList.contains('is-visible')) {
      closeMapOverlay();
    } else {
      openMap();
    }
  });
  audioMapButton?.addEventListener('click', () => {
    if (mapOverlay.classList.contains('is-visible')) {
      closeMapOverlay();
    } else {
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
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      jumpToSearch();
    }
  });
  searchGoButton.addEventListener('click', jumpToSearch);
  if (volumeToggle && audioVolumeContainer) {
    volumeToggle.addEventListener('click', () => {
      const open = audioVolumeContainer.dataset.open === 'true';
      audioVolumeContainer.dataset.open = open ? 'false' : 'true';
      volumeToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }
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
