// Element
const stationMap = document.getElementById('station-map');
const currentName = document.getElementById('current-station');
const currentFurigana = document.getElementById('current-furigana');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// 駅名リストとふりがな
const stations = [
    { id: 1, name: '東京', furigana: 'とうきょう' },
    { id: 2, name: '有楽町', furigana: 'ゆうらくちょう' },
    { id: 3, name: '新橋', furigana: 'しんばし' },
    { id: 4, name: '浜松町', furigana: 'はままつちょう' },
    { id: 5, name: '田町', furigana: 'たまち' },
    { id: 6, name: '品川', furigana: 'しながわ' },
    { id: 7, name: '大崎', furigana: 'おおさき' },
    { id: 8, name: '五反田', furigana: 'ごたんだ' },
    { id: 9, name: '目黒', furigana: 'めぐろ' },
    { id: 10, name: '恵比寿', furigana: 'えびす' },
    { id: 11, name: '渋谷', furigana: 'しぶや' },
    { id: 12, name: '原宿', furigana: 'はらじゅく' },
    { id: 13, name: '代々木', furigana: 'よよぎ' },
    { id: 14, name: '新宿', furigana: 'しんじゅく' },
    { id: 15, name: '新大久保', furigana: 'しんおおくぼ' },
    { id: 16, name: '高田馬場', furigana: 'たかだのばば' },
    { id: 17, name: '目白', furigana: 'めじろ' },
    { id: 18, name: '池袋', furigana: 'いけぶくろ' },
    { id: 19, name: '大塚', furigana: 'おおつか' },
    { id: 20, name: '巣鴨', furigana: 'すがも' },
    { id: 21, name: '駒込', furigana: 'こまごめ' },
    { id: 22, name: '田端', furigana: 'たばた' },
    { id: 23, name: '西日暮里', furigana: 'にしにっぽり' },
    { id: 24, name: '日暮里', furigana: 'にっぽり' },
    { id: 25, name: '鶯谷', furigana: 'うぐいすだに' },
    { id: 26, name: '上野', furigana: 'うえの' },
    { id: 27, name: '御徒町', furigana: 'おかちまち' },
    { id: 28, name: '秋葉原', furigana: 'あきはばら' },
    { id: 29, name: '神田', furigana: 'かんだ' }
];

// インデックス（現在の駅）
var currentStationIndex = getStationIndexById(1);
// インデックス（次の駅）
var nextStationIndex = getNextStationIndex();
// インデックス（前の駅）
var prevStationIndex = getPrevStationIndex();

// 駅看板を更新する関数
function updateStation() {
    // 現在の駅
    const station = stations[currentStationIndex];
    currentName.innerHTML = station.name;
    currentFurigana.innerHTML = station.furigana;

    // 現在の駅の情報
    for (const key in station) {
        console.log(key, station[key]);
    }

    // 次の駅
    nextStationIndex = getNextStationIndex();
    nextButton.innerHTML = stations[nextStationIndex].name;

    // 前の駅
    prevStationIndex = getPrevStationIndex();
    prevButton.innerHTML = stations[prevStationIndex].name;
}

// IDで駅取得
function getStationIndexById(id) {
    return stations.findIndex(station => station.id === id);
}

// 次の駅のインデックス
function getNextStationIndex() {
    return (currentStationIndex + 1) % stations.length;
}

// 前の駅のインデックス
function getPrevStationIndex() {
    return (currentStationIndex - 1 + stations.length) % stations.length;
}

// 次の駅に進む関数
function nextStation() {
    currentStationIndex = getNextStationIndex();
    updateStation();
}

// 前の駅に戻る関数
function prevStation() {
    currentStationIndex = getPrevStationIndex();
    updateStation();
}

// 駅をクリック
function onStationClick(id) {
    currentStationIndex = getStationIndexById(id)
    updateStation();
}

// 路線図に駅を配置する関数
function displayStations() {
    for (const station of stations) {
        console.log(station.name, station.furigana)

        const stationElement = document.createElement('div');
        stationElement.className = `
            station text-sm w-full h-[40px] rounded-full 
            bg-green-500 text-white flex items-center justify-center 
            m-1 cursor-pointer
        `;
        stationElement.innerHTML = station.name;
        stationElement.onclick = () => onStationClick(station.id);

        stationMap.appendChild(stationElement);
    }
}

// ページ読み込み時に初期化
window.onload = () => {
    // 駅一覧表示
    displayStations();
    // 駅の看板更新
    updateStation();
};
