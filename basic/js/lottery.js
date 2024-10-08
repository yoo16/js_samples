const rarities = [
    { type: 'N', name: 'ノーマル', probability: 70 },
    { type: 'R', name: 'レア', probability: 23 },
    { type: 'SR', name: 'スーパーレア', probability: 6 },
    { type: 'SSR', name: 'スーパースペシャルレア', probability: 1 }
];

var totalCount = 0;
var counts = { N: 0, R: 0, SR: 0, SSR: 0 };

const getRandomItemByProbability = (items) => {
    var totalProbability = items.reduce((sum, item) => sum + item.probability, 0);
    var randomValue = Math.random() * totalProbability;
    var accumulatedProbability = 0;

    for (var item of items) {
        accumulatedProbability += item.probability;
        if (randomValue <= accumulatedProbability) {
            return item;
        }
    }
};

const play = () => {
    var cardImage = document.getElementById('card-image');
    var loadingModal = document.getElementById('loading-modal');

    // モーダルを表示してローディングを開始
    loadingModal.classList.remove('hidden');
    cardImage.classList.remove('revealed');

    // カードの切り替え処理
    var item = getRandomItemByProbability(rarities);
    var newCardImage = `./images/card-${item.type}.png`;

    setTimeout(() => {
        // 新しい画像をセット
        cardImage.src = newCardImage;
        cardImage.classList.add('revealed');

        // モーダルを非表示にする
        loadingModal.classList.add('hidden');

        // カウントの更新
        totalCount++;
        counts[item.type]++;
        document.getElementById('total-count').innerHTML = totalCount;
        document.getElementById(`count-${item.type}`).innerHTML = counts[item.type];
    }, 2000);
};
