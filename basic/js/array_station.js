const stationMap = document.getElementById('station-map');
const currentStation = document.getElementById('current-station');
const currentFurigana = document.getElementById('current-furigana');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// 駅名リストとふりがな
const stations = [
    { name: '東京', furigana: 'とうきょう' },
    { name: '有楽町', furigana: 'ゆうらくちょう' },
    { name: '新橋', furigana: 'しんばし' },
    { name: '浜松町', furigana: 'はままつちょう' },
    { name: '田町', furigana: 'たまち' },
    { name: '品川', furigana: 'しながわ' },
    { name: '大崎', furigana: 'おおさき' },
    { name: '五反田', furigana: 'ごたんだ' },
    { name: '目黒', furigana: 'めぐろ' },
    { name: '恵比寿', furigana: 'えびす' },
    { name: '渋谷', furigana: 'しぶや' },
    { name: '原宿', furigana: 'はらじゅく' },
    { name: '代々木', furigana: 'よよぎ' },
    { name: '新宿', furigana: 'しんじゅく' },
    { name: '新大久保', furigana: 'しんおおくぼ' },
    { name: '高田馬場', furigana: 'たかだのばば' },
    { name: '目白', furigana: 'めじろ' },
    { name: '池袋', furigana: 'いけぶくろ' },
    { name: '大塚', furigana: 'おおつか' },
    { name: '巣鴨', furigana: 'すがも' },
    { name: '駒込', furigana: 'こまごめ' },
    { name: '田端', furigana: 'たばた' },
    { name: '西日暮里', furigana: 'にしにっぽり' },
    { name: '日暮里', furigana: 'にっぽり' },
    { name: '鶯谷', furigana: 'うぐいすだに' },
    { name: '上野', furigana: 'うえの' },
    { name: '御徒町', furigana: 'おかちまち' },
    { name: '秋葉原', furigana: 'あきはばら' },
    { name: '神田', furigana: 'かんだ' }
];

// 駅のインデックス
var currentStationIndex = 0;
var nextStationIndex = getNextStationIndex();
var prevStationIndex = getPrevStationIndex();

// 駅看板を更新する関数
function updateStation() {
    // 現在の駅取得
    const station = stations[currentStationIndex];
    currentStation.textContent = station.name;
    currentFurigana.textContent = station.furigana;

    // 次の駅名
    nextStationIndex = getNextStationIndex();
    nextButton.textContent = stations[nextStationIndex].name;

    // 前の駅名
    prevStationIndex = getPrevStationIndex();
    prevButton.textContent = stations[prevStationIndex].name;
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
function onStationClick(index) {
    currentStationIndex = index;
    updateStation();
}

// 路線図に駅を配置する関数
function displayStations() {
    stations.forEach((station, index) => {
        const stationElement = document.createElement('div');
        stationElement.className = `
            station text-sm w-[80px] h-[40px] rounded-full 
            bg-green-500 text-white flex items-center justify-center 
            m-2 cursor-pointer
        `;
        stationElement.textContent = station.name;
        stationElement.addEventListener('click', () => onStationClick(index));
        stationMap.appendChild(stationElement);
    });
}

// ページ読み込み時に初期化
window.onload = function () {
    displayStations();
    updateStation();
};