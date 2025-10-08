#!/usr/bin/env node
const { execFile } = require('child_process');
const fs = require('fs');
const { writeFile, readFile } = require('fs/promises');
const path = require('path');

const STATIONS_URL = 'https://raw.githubusercontent.com/piuccio/open-data-jp-railway-stations/master/stations.json';
const LINES_URL = 'https://raw.githubusercontent.com/piuccio/open-data-jp-railway-lines/master/lines.json';
const OUTPUT_PATH = path.resolve(__dirname, '..', 'stations.json');

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    execFile('curl', ['-fsSL', url], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }, (error, stdout) => {
      if (error) {
        reject(new Error(`curl failed for ${url}: ${error.message}`));
        return;
      }
      try {
        resolve(JSON.parse(stdout));
      } catch (err) {
        reject(new Error(`Failed to parse JSON from ${url}: ${err.message}`));
      }
    });
  });
}

const prefectureMap = {
  '01': 'Hokkaido Prefecture',
  '02': 'Aomori Prefecture',
  '03': 'Iwate Prefecture',
  '04': 'Miyagi Prefecture',
  '05': 'Akita Prefecture',
  '06': 'Yamagata Prefecture',
  '07': 'Fukushima Prefecture',
  '08': 'Ibaraki Prefecture',
  '09': 'Tochigi Prefecture',
  '10': 'Gunma Prefecture',
  '11': 'Saitama Prefecture',
  '12': 'Chiba Prefecture',
  '13': 'Tokyo Prefecture',
  '14': 'Kanagawa Prefecture',
  '15': 'Niigata Prefecture',
  '16': 'Toyama Prefecture',
  '17': 'Ishikawa Prefecture',
  '18': 'Fukui Prefecture',
  '19': 'Yamanashi Prefecture',
  '20': 'Nagano Prefecture',
  '21': 'Gifu Prefecture',
  '22': 'Shizuoka Prefecture',
  '23': 'Aichi Prefecture',
  '24': 'Mie Prefecture',
  '25': 'Shiga Prefecture',
  '26': 'Kyoto Prefecture',
  '27': 'Osaka Prefecture',
  '28': 'Hyogo Prefecture',
  '29': 'Nara Prefecture',
  '30': 'Wakayama Prefecture',
  '31': 'Tottori Prefecture',
  '32': 'Shimane Prefecture',
  '33': 'Okayama Prefecture',
  '34': 'Hiroshima Prefecture',
  '35': 'Yamaguchi Prefecture',
  '36': 'Tokushima Prefecture',
  '37': 'Kagawa Prefecture',
  '38': 'Ehime Prefecture',
  '39': 'Kochi Prefecture',
  '40': 'Fukuoka Prefecture',
  '41': 'Saga Prefecture',
  '42': 'Nagasaki Prefecture',
  '43': 'Kumamoto Prefecture',
  '44': 'Oita Prefecture',
  '45': 'Miyazaki Prefecture',
  '46': 'Kagoshima Prefecture',
  '47': 'Okinawa Prefecture',
};

const kanaToRomajiTable = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
  ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho',
  にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
  ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
  みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
  てぃ: 'ti', でぃ: 'di', うぃ: 'wi', うぇ: 'we', うぉ: 'wo',
  ふぁ: 'fa', ふぃ: 'fi', ふぇ: 'fe', ふぉ: 'fo',
  しぇ: 'she', じぇ: 'je', ちぇ: 'che',
  つぁ: 'tsa', つぃ: 'tsi', つぇ: 'tse', つぉ: 'tso',
};

const kanaMap = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', ゐ: 'wi', ゑ: 'we', を: 'o',
  ん: 'n',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o',
  ゃ: 'ya', ゅ: 'yu', ょ: 'yo',
  ゎ: 'wa',
};

function isKana(text) {
  return /^[\u3040-\u309F\u30A0-\u30FFー・]+$/.test(text);
}

function normaliseKana(text) {
  let result = '';
  for (const char of text) {
    const code = char.charCodeAt(0);
    if (code >= 0x30a1 && code <= 0x30f6) {
      result += String.fromCharCode(code - 0x60);
    } else {
      result += char;
    }
  }
  return result;
}

function kanaToRomaji(text) {
  const hiragana = normaliseKana(text);
  let romaji = '';
  for (let i = 0; i < hiragana.length; i += 1) {
    const current = hiragana[i];
    const pair = hiragana.slice(i, i + 2);
    if (kanaToRomajiTable[pair]) {
      romaji += kanaToRomajiTable[pair];
      i += 1;
      continue;
    }
    if (current === 'っ') {
      const next = hiragana[i + 1];
      if (next) {
        const nextRomaji = kanaToRomajiTable[hiragana.slice(i + 1, i + 3)] || kanaMap[next] || '';
        if (nextRomaji) {
          romaji += nextRomaji[0];
        }
      }
      continue;
    }
    if (current === 'ー') {
      const lastVowel = romaji.match(/[aeiou]$/);
      if (lastVowel) {
        romaji += lastVowel[0];
      }
      continue;
    }
    const mapped = kanaMap[current];
    if (mapped) {
      romaji += mapped;
    } else if (current === '・') {
      romaji += ' ';
    }
  }
  return romaji;
}

function capitaliseWords(text) {
  return text
    .toLowerCase()
    .replace(/(?:^|\s)([a-z])/g, (match) => match.toUpperCase());
}

let tokenizerPromise;

async function getTokenizer() {
  if (tokenizerPromise !== undefined) {
    return tokenizerPromise;
  }
  try {
    const kuromoji = require('kuromoji');
    const basePath = path.join(__dirname, 'node_modules', 'kuromoji', 'dict');
    if (!fs.existsSync(basePath)) {
      throw new Error(`Dictionary folder not found at ${basePath}`);
    }
    tokenizerPromise = new Promise((resolve) => {
      kuromoji.builder({ dicPath: basePath }).build((error, tokenizer) => {
        if (error) {
          console.warn(`Unable to initialise kuromoji tokenizer: ${error.message}`);
          resolve(null);
          return;
        }
        resolve(tokenizer);
      });
    });
  } catch (error) {
    console.warn(`kuromoji is not installed; falling back to source station names for romaji. (${error.message})`);
    tokenizerPromise = Promise.resolve(null);
  }
  return tokenizerPromise;
}

async function kanjiToRomaji(text) {
  if (!text) return null;
  if (isKana(text)) {
    const romaji = kanaToRomaji(text);
    return romaji ? capitaliseWords(romaji) : null;
  }
  const tokenizer = await getTokenizer();
  if (!tokenizer) return null;
  const tokens = tokenizer.tokenize(text);
  const reading = tokens
    .map((token) => token.reading || token.pronunciation || '')
    .join('');
  if (!reading) return null;
  const romaji = kanaToRomaji(reading);
  return romaji ? capitaliseWords(romaji) : null;
}

function humanizeOperator(code) {
  if (!code) return null;
  const cleaned = code.replace(/[_.-]/g, ' ');
  const withSpaces = cleaned
    .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return withSpaces.replace(/\s+/g, ' ').trim().replace(/^Jr /i, 'JR ');
}

async function resolveLineLabel(line) {
  if (!line) return null;
  if (line.name_romaji) return line.name_romaji.trim();
  if (line.code) {
    const parts = line.code.split('.');
    const raw = parts[parts.length - 1];
    if (raw) {
      return raw
        .replace(/[_.-]/g, ' ')
        .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim();
    }
  }
  const romaji = await kanjiToRomaji(line.name_kanji);
  if (romaji) return romaji;
  return line.name_kanji ? line.name_kanji.trim() : null;
}

function slugify(name, fallback) {
  if (!name) return fallback;
  const normalised = name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return normalised || fallback;
}

async function extractRomaji(group) {
  const asciiCandidates = [];
  const addCandidate = (value) => {
    if (value && /[A-Za-z]/.test(value)) {
      asciiCandidates.push(value.trim());
    }
  };

  if (group.name_romaji) addCandidate(group.name_romaji);
  (group.alternative_names || []).forEach(addCandidate);

  group.stations.forEach((station) => {
    if (station.code) {
      const parts = station.code.split(/[.:]/);
      addCandidate(parts[parts.length - 1]);
    }
    (station.alternative_names || []).forEach(addCandidate);
  });

  if (asciiCandidates.length > 0) {
    return asciiCandidates[0];
  }

  const candidates = [group.name_kanji, group.name_kana, ...(group.alternative_names || [])];
  for (const station of group.stations) {
    candidates.push(station.name_kanji, station.name_kana, ...(station.alternative_names || []));
  }

  for (const candidate of candidates) {
    const romaji = await kanjiToRomaji(candidate);
    if (romaji) return romaji;
  }

  return group.name_kanji;
}

function averageCoordinates(stations) {
  const valid = stations.filter((station) => Number.isFinite(station.lat) && Number.isFinite(station.lon));
  if (valid.length === 0) return null;
  const sum = valid.reduce(
    (acc, station) => {
      acc.lat += Number(station.lat);
      acc.lon += Number(station.lon);
      return acc;
    },
    { lat: 0, lon: 0 },
  );
  return { lat: sum.lat / valid.length, lon: sum.lon / valid.length };
}

async function buildStationObject(group, linesById, existingExtras) {
  const romaji = await extractRomaji(group);
  const slug = slugify(romaji, group.group_code.toLowerCase());
  const coordinates = averageCoordinates(group.stations);
  if (!coordinates) return null;

  const lineLabels = new Set();
  const operatorLabels = new Set();

  for (const lineId of group.ekidata_line_ids) {
    const line = linesById.get(lineId);
    if (!line) continue;
    const lineName = await resolveLineLabel(line);
    if (lineName) {
      lineLabels.add(lineName.trim());
    }
    const operator = humanizeOperator(line.code ? line.code.split(/[.:]/)[0] : null);
    if (operator) {
      operatorLabels.add(operator);
    }
  }

  if (lineLabels.size === 0) {
    group.line_codes.forEach((code) => {
      const parts = code.split('.');
      const raw = parts[parts.length - 1];
      if (raw) {
        lineLabels.add(
          raw
            .replace(/[_.-]/g, ' ')
            .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
            .replace(/\s+/g, ' ')
            .trim(),
        );
      }
      if (parts.length > 1) {
        const operator = humanizeOperator(parts[0]);
        if (operator) operatorLabels.add(operator);
      }
    });
  }

  if (operatorLabels.size === 0) {
    operatorLabels.add('Independent operator');
  }

  const extras = existingExtras.get(slug) || {};

  return {
    id: slug,
    name: romaji,
    region: prefectureMap[group.prefecture] || 'Japan',
    lines: Array.from(lineLabels).sort((a, b) => a.localeCompare(b)),
    operators: Array.from(operatorLabels).sort((a, b) => a.localeCompare(b)),
    latitude: Number(coordinates.lat.toFixed(6)),
    longitude: Number(coordinates.lon.toFixed(6)),
    ...(extras.platforms ? { platforms: extras.platforms } : {}),
    ...(extras.melodies ? { melodies: extras.melodies } : {}),
  };
}

async function loadExistingExtras() {
  try {
    const existingRaw = await readFile(OUTPUT_PATH, 'utf8');
    const existing = JSON.parse(existingRaw);
    const map = new Map();
    existing.forEach((station) => {
      map.set(station.id, {
        platforms: station.platforms,
        melodies: station.melodies,
      });
    });
    return map;
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn('Could not load existing stations.json, continuing without merging extras.');
    }
    return new Map();
  }
}

(async () => {
  try {
    console.log('Fetching source datasets…');
    const [groups, lines, extras] = await Promise.all([
      fetchJson(STATIONS_URL),
      fetchJson(LINES_URL),
      loadExistingExtras(),
    ]);

    const linesById = new Map(lines.map((line) => [String(line.ekidata_id), line]));

    console.log(`Transforming ${groups.length} station groups…`);
    const transformed = [];
    for (const group of groups) {
      const record = await buildStationObject(group, linesById, extras);
      if (record) {
        transformed.push(record);
      }
    }
    transformed.sort((a, b) => a.name.localeCompare(b.name));

    await writeFile(OUTPUT_PATH, `${JSON.stringify(transformed, null, 2)}\n`, 'utf8');
    console.log(`Wrote ${transformed.length} stations to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
