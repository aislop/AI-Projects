const CACHE_BUST = '?v=202403';

const STATIONS = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    japaneseName: '東京',
    about:
      "Tokyo Station anchors Japan's capital with its red-brick Marunouchi facade and bustling underground concourses. Marunouchi and Nihonbashi surround the hub with flagship stores, refined dining, and the Imperial Palace gardens just a short stroll away.",
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
      "Kanda blends old-world wholesalers with a growing tech crowd, filling the side streets with retro coffee shops and lively izakaya. Students from nearby universities keep the district energetic well into the night.",
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
      "Okachimachi connects the open-air stalls of Ameya-Yokocho with polished jewelry boutiques under the tracks. The neighborhood's mix of street eats and craft workshops makes it a favorite for treasure hunters.",
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
      "Ueno is Tokyo's cultural commons, where national museums line the edges of Ueno Park and street food fills Ameyoko market. Springtime hanami crowds gather beneath the park's famous cherry blossoms.",
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
      "Named for the warbling nightingales once heard here, Uguisudani now offers quiet residential lanes beside small museums and Showa-era cafés. The gentle hillside views contrast with the bustle of nearby Ueno.",
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
      "Nippori bridges tradition and creativity, with Yanaka's old temples on one side and the fabric district's rainbow bolts on the other. Travelers connect here to reach Narita via the Keisei Skyliner.",
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
      "Residential towers and neighborhood ramen counters define Nishi-Nippori. It is a convenient interchange linking the Chiyoda Line and the Nippori-Toneri Liner to Tokyo's northeastern suburbs.",
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
      "Tabata sits atop a ridge with long-established residential streets and views over the Sumida River rail yards. It is a practical stop for commuters heading toward Saitama and northern Tokyo.",
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
      "Otsuka mixes vintage tram charm with a wave of new cafés and craft beer bars. The Tokyo Sakura Tram still trundles past the station, connecting quiet residential pockets in northern Tokyo.",
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
      "Tokyo's Koreatown thrives in Shin-Okubo with neon-lit restaurants, K-pop boutiques, and dessert cafés. The multicultural streets stay lively late into the evening.",
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
      "Shinjuku Station is the world's busiest, funneling travelers to skyscraper canyons, Kabukicho nightlife, and the calm greenery of Shinjuku Gyoen. Observation decks offer sweeping views over Tokyo.",
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
      "Harajuku is a playground for street fashion, from Takeshita Street's pop culture boutiques to Omotesando's flagship architecture. The leafy Meiji Shrine grounds offer a quiet counterpoint nearby.",
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
      "Meguro's tree-lined avenues lead to specialty coffee shops, design studios, and the serene Meguro River. Spring cherry blossoms transform the riverside into a soft pink tunnel.",
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
      "Redeveloped Osaki is home to tech offices, open plazas, and elevated walkways that connect Shinagawa's business zone. Art installations dot the corporate campuses.",
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
      "Shinagawa links Tokyo to the south with Shinkansen platforms, waterfront hotels, and the historic Tokaido road. High-rise offices and aquarium attractions make it a major gateway.",
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
      "Hamamatsucho connects to Haneda Airport via the Tokyo Monorail and sits beside the iconic Tokyo Tower. Zojoji Temple and waterfront gardens offer moments of calm in the business district.",
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
      "Salarymen gather in Shimbashi's lantern-lit alleys after work, while corporate media towers rise above. The station is the historic birthplace of Japan's first railway terminal.",
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
      'Yurakucho combines upscale Ginza shopping with Showa-era yakitori alleys tucked under the viaducts. The Tokyo International Forum's glass canopy hosts design fairs and concerts year-round.',
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

const elements = {
  viewport: document.getElementById('stationViewport'),
  background: document.getElementById('stationBackground'),
  nameJp: document.getElementById('stationNameJp'),
  nameEn: document.getElementById('stationNameEn'),
  about: document.getElementById('stationAbout'),
  transferList: document.getElementById('transferLines'),
  prevPreview: document.getElementById('prevStationPreview'),
  nextPreview: document.getElementById('nextStationPreview'),
  playPause: document.getElementById('playPause'),
  skip: document.getElementById('skipStation'),
  volume: document.getElementById('volumeSlider'),
  mute: document.getElementById('muteButton'),
  trackLabel: document.getElementById('currentTrackLabel'),
  rideMode: document.getElementById('rideModeButton'),
  ambientToggle: document.getElementById('ambientToggle'),
  mapToggle: document.getElementById('mapToggle'),
  mobileMap: document.getElementById('mobileMap'),
  mobilePlay: document.getElementById('mobilePlay'),
  mobileSkip: document.getElementById('mobileSkip'),
  mapOverlay: document.getElementById('mapOverlay'),
  closeMap: document.getElementById('closeMap'),
  loopMap: document.getElementById('loopMap'),
  searchInput: document.getElementById('stationSearch'),
  jumpButton: document.getElementById('jumpButton'),
  datalist: document.getElementById('stationList'),
  announcementAudio: document.getElementById('announcementAudio'),
  ambientAudio: document.getElementById('ambientAudio')
};

const MEDIA_PREFIX = 'Sites/yamanoteline/';

const STORAGE_KEYS = {
  volume: 'yamanote-volume',
  rideMode: 'yamanote-ride-mode',
  ambient: 'yamanote-ambient',
  muted: 'yamanote-muted'
};

const state = {
  index: 0,
  rideMode: true,
  playing: false,
  muted: false,
  ambient: false,
  scrollLock: false,
  touchStartY: null
};

let endedNaturally = false;

function toLocalPath(path) {
  return path.startsWith(MEDIA_PREFIX) ? path.slice(MEDIA_PREFIX.length) : path;
}

function clampIndex(index) {
  const total = STATIONS.length;
  return ((index % total) + total) % total;
}

function updateBackground(url) {
  elements.background.style.backgroundImage = url ? `url(${url})` : 'none';
}

function buildPreviewMarkup(station, label, arrow) {
  return `
    <div class="station-preview__inner">
      <span class="station-preview__direction">${arrow} ${label}</span>
      <span class="station-preview__jp" lang="ja">${station.japaneseName}</span>
      <span class="station-preview__en">${station.name}</span>
    </div>
  `;
}

function updatePreviews() {
  const previous = STATIONS[clampIndex(state.index - 1)];
  const next = STATIONS[clampIndex(state.index + 1)];

  elements.prevPreview.innerHTML = buildPreviewMarkup(previous, 'Previous', '▲');
  elements.nextPreview.innerHTML = buildPreviewMarkup(next, 'Next', '▼');
  elements.prevPreview.setAttribute('aria-hidden', 'false');
  elements.nextPreview.setAttribute('aria-hidden', 'false');
}

function clearChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function renderTransfers(station) {
  clearChildren(elements.transferList);

  if (!station.transfers.length) {
    const empty = document.createElement('p');
    empty.className = 'transfer-lines__empty';
    empty.textContent = 'No direct transfers';
    elements.transferList.appendChild(empty);
    return;
  }

  station.transfers.forEach((transfer) => {
    const chip = document.createElement('span');
    chip.className = 'transfer-chip';
    chip.title = transfer.operator;

    const badge = document.createElement('span');
    badge.className = 'transfer-chip__icon';
    badge.textContent = transfer.code;
    badge.style.background = transfer.color;
    chip.appendChild(badge);

    const label = document.createElement('span');
    label.className = 'transfer-chip__name';
    label.textContent = transfer.name;
    chip.appendChild(label);

    elements.transferList.appendChild(chip);
  });
}

function updateTrackLabel(status) {
  const station = STATIONS[state.index];
  elements.trackLabel.textContent = `${status} • ${station.name}`;
}

function syncPlayButtons() {
  const symbol = state.playing ? '⏸' : '▶';
  elements.playPause.textContent = symbol;
  elements.playPause.setAttribute('aria-pressed', String(state.playing));
  if (elements.mobilePlay) {
    elements.mobilePlay.textContent = symbol;
    elements.mobilePlay.setAttribute('aria-pressed', String(state.playing));
  }
}

function syncMuteButton() {
  elements.mute.textContent = state.muted ? 'Unmute' : 'Mute';
  elements.mute.setAttribute('aria-pressed', String(state.muted));
}

function syncRideModeButton() {
  elements.rideMode.textContent = state.rideMode ? 'Ride Mode On' : 'Ride Mode Off';
  elements.rideMode.setAttribute('aria-pressed', String(state.rideMode));
}

function syncAmbientButton() {
  elements.ambientToggle.textContent = state.ambient ? 'Ambient On' : 'Ambient Off';
  elements.ambientToggle.setAttribute('aria-pressed', String(state.ambient));
}

function syncMapButtons(isOpen) {
  elements.mapToggle.setAttribute('aria-expanded', String(isOpen));
  if (elements.mobileMap) {
    elements.mobileMap.setAttribute('aria-expanded', String(isOpen));
  }
  elements.mapOverlay.setAttribute('aria-hidden', String(!isOpen));
}

function highlightMapNode() {
  const nodes = elements.loopMap.querySelectorAll('.map-node');
  nodes.forEach((node, index) => {
    node.classList.toggle('is-active', index === state.index);
  });
}

function prepareAnnouncementSource() {
  const station = STATIONS[state.index];
  const src = `${toLocalPath(station.mp3Announcement)}${CACHE_BUST}`;
  if (elements.announcementAudio.dataset.src !== src) {
    elements.announcementAudio.dataset.src = src;
    elements.announcementAudio.src = src;
  }
}

function goToStation(index, { play = false } = {}) {
  state.index = clampIndex(index);
  const station = STATIONS[state.index];

  elements.announcementAudio.pause();
  prepareAnnouncementSource();

  updateBackground(station.background);
  elements.background.setAttribute('aria-label', `${station.name} station background`);
  elements.nameJp.textContent = station.japaneseName;
  elements.nameEn.textContent = station.name;
  elements.about.textContent = station.about;
  renderTransfers(station);
  updatePreviews();
  highlightMapNode();
  updateTrackLabel(play ? 'Loading' : 'Ready');

  if (play) {
    playCurrent();
  } else {
    state.playing = false;
    syncPlayButtons();
  }
}

function playCurrent() {
  prepareAnnouncementSource();
  const playPromise = elements.announcementAudio.play();
  if (playPromise && typeof playPromise.then === 'function') {
    playPromise
      .then(() => {
        state.playing = true;
        updateTrackLabel('Playing');
        syncPlayButtons();
      })
      .catch(() => {
        state.playing = false;
        updateTrackLabel('Ready');
        syncPlayButtons();
      });
  } else {
    state.playing = true;
    updateTrackLabel('Playing');
    syncPlayButtons();
  }
}

function pauseCurrent(updateLabel = true) {
  elements.announcementAudio.pause();
  state.playing = false;
  if (updateLabel) {
    updateTrackLabel('Paused');
  }
  syncPlayButtons();
}

function changeStation(delta, { auto = false } = {}) {
  const shouldPlay = auto ? state.rideMode : state.playing;
  goToStation(state.index + delta, { play: shouldPlay });
}

function handlePlayToggle() {
  if (state.playing) {
    pauseCurrent();
  } else {
    playCurrent();
  }
}

function toggleRideMode() {
  state.rideMode = !state.rideMode;
  localStorage.setItem(STORAGE_KEYS.rideMode, String(state.rideMode));
  syncRideModeButton();
}

function toggleAmbient() {
  state.ambient = !state.ambient;
  localStorage.setItem(STORAGE_KEYS.ambient, String(state.ambient));
  if (state.ambient) {
    elements.ambientAudio.volume = 0.25;
    elements.ambientAudio
      .play()
      .catch(() => {
        state.ambient = false;
        localStorage.setItem(STORAGE_KEYS.ambient, 'false');
      })
      .finally(() => {
        syncAmbientButton();
      });
  } else {
    elements.ambientAudio.pause();
    syncAmbientButton();
  }
}

function toggleMap(force) {
  const isOpen = typeof force === 'boolean'
    ? force
    : !elements.mapOverlay.classList.contains('map-overlay--active');

  elements.mapOverlay.classList.toggle('map-overlay--active', isOpen);
  syncMapButtons(isOpen);

  if (isOpen) {
    highlightMapNode();
    const activeNode = elements.loopMap.querySelector(`.map-node[data-index="${state.index}"]`);
    activeNode?.focus({ preventScroll: true });
  } else {
    elements.mapToggle.focus({ preventScroll: true });
  }
}

function buildSearchOptions() {
  clearChildren(elements.datalist);
  STATIONS.forEach((station) => {
    const optionEn = document.createElement('option');
    optionEn.value = station.name;
    optionEn.label = station.japaneseName;
    elements.datalist.appendChild(optionEn);

    const optionJp = document.createElement('option');
    optionJp.value = station.japaneseName;
    optionJp.label = station.name;
    elements.datalist.appendChild(optionJp);
  });
}

function buildMap() {
  const svgNS = 'http://www.w3.org/2000/svg';
  elements.loopMap.innerHTML = '';

  const path = document.createElementNS(svgNS, 'circle');
  path.setAttribute('cx', '300');
  path.setAttribute('cy', '300');
  path.setAttribute('r', '220');
  path.classList.add('loop-path');
  elements.loopMap.appendChild(path);

  const radius = 220;
  const labelRadius = radius + 32;
  const center = 300;

  STATIONS.forEach((station, index) => {
    const angle = (2 * Math.PI * index) / STATIONS.length - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    const lx = center + labelRadius * Math.cos(angle);
    const ly = center + labelRadius * Math.sin(angle);

    const node = document.createElementNS(svgNS, 'g');
    node.classList.add('map-node');
    node.dataset.index = String(index);
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', `Jump to ${station.name}`);

    const dot = document.createElementNS(svgNS, 'circle');
    dot.setAttribute('cx', x.toFixed(2));
    dot.setAttribute('cy', y.toFixed(2));
    dot.setAttribute('r', '10');
    node.appendChild(dot);

    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', lx.toFixed(2));
    label.setAttribute('y', ly.toFixed(2));
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('dominant-baseline', 'middle');
    label.textContent = station.name;
    node.appendChild(label);

    node.addEventListener('click', () => {
      toggleMap(false);
      goToStation(index, { play: state.playing });
    });

    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMap(false);
        goToStation(index, { play: state.playing });
      }
    });

    elements.loopMap.appendChild(node);
  });

  highlightMapNode();
}

function findStationIndex(query) {
  if (!query) {
    return -1;
  }

  const normalized = query.trim().toLowerCase();
  return STATIONS.findIndex((station) => {
    return (
      station.name.toLowerCase() === normalized ||
      station.japaneseName === query.trim() ||
      station.name.toLowerCase().includes(normalized) ||
      station.japaneseName.includes(query.trim())
    );
  });
}

function handleSearchJump() {
  const query = elements.searchInput.value;
  const targetIndex = findStationIndex(query);
  if (targetIndex >= 0) {
    goToStation(targetIndex, { play: state.playing });
  }
}

function handleWheel(event) {
  if (state.scrollLock) {
    return;
  }

  if (Math.abs(event.deltaY) > 40) {
    state.scrollLock = true;
    changeStation(event.deltaY > 0 ? 1 : -1);
    setTimeout(() => {
      state.scrollLock = false;
    }, 650);
  }
}

function handleTouchStart(event) {
  state.touchStartY = event.touches[0]?.clientY ?? null;
}

function handleTouchEnd(event) {
  if (state.touchStartY === null) {
    return;
  }
  const delta = state.touchStartY - (event.changedTouches[0]?.clientY ?? state.touchStartY);
  state.touchStartY = null;
  if (Math.abs(delta) > 45) {
    changeStation(delta > 0 ? 1 : -1);
  }
}

function handleKeyNavigation(event) {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault();
      changeStation(1);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault();
      changeStation(-1);
      break;
    case ' ': {
      if (event.target === elements.viewport) {
        event.preventDefault();
        handlePlayToggle();
      }
      break;
    }
    default:
      break;
  }
}

function loadSettings() {
  const storedVolume = localStorage.getItem(STORAGE_KEYS.volume);
  const volume = storedVolume !== null ? Math.min(1, Math.max(0, Number(storedVolume))) : 0.7;
  elements.volume.value = String(volume);
  elements.announcementAudio.volume = volume;

  const storedMute = localStorage.getItem(STORAGE_KEYS.muted);
  if (storedMute !== null) {
    state.muted = storedMute === 'true';
    elements.announcementAudio.muted = state.muted;
  }
  syncMuteButton();

  const storedRideMode = localStorage.getItem(STORAGE_KEYS.rideMode);
  state.rideMode = storedRideMode === null ? true : storedRideMode === 'true';
  syncRideModeButton();

  const storedAmbient = localStorage.getItem(STORAGE_KEYS.ambient);
  state.ambient = storedAmbient === 'true';
  if (state.ambient) {
    elements.ambientAudio.volume = 0.25;
    elements.ambientAudio.play().catch(() => {
      state.ambient = false;
      localStorage.setItem(STORAGE_KEYS.ambient, 'false');
    });
  } else {
    elements.ambientAudio.pause();
  }
  syncAmbientButton();
}

function initAudioEvents() {
  elements.announcementAudio.addEventListener('play', () => {
    state.playing = true;
    updateTrackLabel('Playing');
    syncPlayButtons();
  });

  elements.announcementAudio.addEventListener('pause', () => {
    if (endedNaturally) {
      endedNaturally = false;
      return;
    }
    state.playing = false;
    updateTrackLabel('Paused');
    syncPlayButtons();
  });

  elements.announcementAudio.addEventListener('ended', () => {
    endedNaturally = true;
    state.playing = false;
    updateTrackLabel('Complete');
    syncPlayButtons();
    if (state.rideMode) {
      changeStation(1, { auto: true });
    }
  });
}

function initEventListeners() {
  elements.playPause.addEventListener('click', handlePlayToggle);
  elements.skip.addEventListener('click', () => changeStation(1));
  elements.volume.addEventListener('input', (event) => {
    const value = Number(event.target.value);
    elements.announcementAudio.volume = value;
    localStorage.setItem(STORAGE_KEYS.volume, String(value));
    if (value > 0 && state.muted) {
      state.muted = false;
      elements.announcementAudio.muted = false;
      localStorage.setItem(STORAGE_KEYS.muted, 'false');
      syncMuteButton();
    }
  });
  elements.mute.addEventListener('click', () => {
    state.muted = !state.muted;
    elements.announcementAudio.muted = state.muted;
    localStorage.setItem(STORAGE_KEYS.muted, String(state.muted));
    syncMuteButton();
  });

  elements.rideMode.addEventListener('click', toggleRideMode);
  elements.ambientToggle.addEventListener('click', toggleAmbient);

  elements.mapToggle.addEventListener('click', () => toggleMap());
  elements.closeMap.addEventListener('click', () => toggleMap(false));
  if (elements.mobileMap) {
    elements.mobileMap.addEventListener('click', () => toggleMap());
  }
  if (elements.mobilePlay) {
    elements.mobilePlay.addEventListener('click', handlePlayToggle);
  }
  if (elements.mobileSkip) {
    elements.mobileSkip.addEventListener('click', () => changeStation(1));
  }

  elements.searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearchJump();
    }
  });
  elements.jumpButton.addEventListener('click', handleSearchJump);

  elements.viewport.addEventListener('wheel', handleWheel, { passive: true });
  elements.viewport.addEventListener('touchstart', handleTouchStart, { passive: true });
  elements.viewport.addEventListener('touchend', handleTouchEnd, { passive: true });
  elements.viewport.addEventListener('keydown', handleKeyNavigation);
}

function init() {
  loadSettings();
  syncPlayButtons();
  buildSearchOptions();
  buildMap();
  initAudioEvents();
  initEventListeners();
  goToStation(state.index);
  updateTrackLabel('Ready');
}

init();
