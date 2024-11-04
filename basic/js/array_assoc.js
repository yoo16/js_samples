const current = document.getElementById('current-station');
const furigana = document.getElementById('current-furigana');
const next = document.getElementById('next-station');
const prev = document.getElementById('prev-station');

// 連想配列
const station = {
    name: '東京',
    furigana: 'とうきょう'
}
console.log(station)

furigana.innerHTML = station.furigana;
// 連想配列の値取得
current.innerHTML = station.name;

// 連想配列のデータ更新
station.name = '有楽町'
station.furigana = "ゆうらくちょう"

current.innerHTML = station.name;
furigana.innerHTML = station.furigana;

// 連想配列の配列
const stations = [
    { name: '東京', furigana: 'とうきょう' },
    { name: '有楽町', furigana: 'ゆうらくちょう' },
    { name: '新橋', furigana: 'しんばし' },
];

console.log(stations)

// prev.innerHTML = stations[0].name;
// next.innerHTML = stations[2].name;