let playerChart; // Chart.js のグローバルインスタンス
let playersList = []; // get.jsonから取得したプレイヤー一覧を保持

// Chart.js のインスタンスを生成する共通関数
function createChart(chartConfig) {
    const ctx = document.getElementById('playerChart').getContext('2d');
    if (playerChart) {
        playerChart.destroy();
    }

    // // chartConfig.options が存在しない場合は空オブジェクトに設定
    // chartConfig.options = chartConfig.options || {};

    // // scales オブジェクトがなければ作成
    chartConfig.options.scales = chartConfig.options.scales || {};

    // レーダーチャート用の radial scale (r) を設定（既存の値があればマージ）
    chartConfig.options.scales.r = Object.assign(
        {
            suggestedMin: 0,
            ticks: { stepSize: 25 },
        },
        chartConfig.options.scales.r
    );

    playerChart = new Chart(ctx, chartConfig);
}

function createThumbnails(players) {
    const thumbnailContainer = document.getElementById("thumbnailContainer");
    thumbnailContainer.innerHTML = "";

    players.forEach(player => {
        const thumb = createThumbnail(player);
        thumbnailContainer.appendChild(thumb);
    });
}

// プレイヤーのサムネイル画像を作成する関数
function createThumbnail(player) {
    const thumb = document.createElement("img");
    thumb.src = `images/player_${player.id}.png`;
    thumb.alt = player.name;
    thumb.className = "w-20 h-20 object-cover rounded cursor-pointer border border-gray-300 hover:border-blue-400";
    // クリック時に対応するプレイヤーの詳細を読み込む
    thumb.addEventListener("click", () => {
        loadPlayer(player.id);
    });
    return thumb;
}


// プレイヤーの詳細データを読み込み、大画像、名前、チャートを更新する関数
async function loadPlayer(playerId) {
    try {
        const uri = `api/players/${playerId}.json?v=${new Date().getTime()}`;
        const response = await fetch(uri);
        if (!response.ok) {
            alert('詳細データの取得に失敗しました。');
            return;
        }
        const playerData = await response.json();

        // 大画像更新（詳細エリア用の画像）
        document.getElementById("playerImage").src = `images/player_${playerId}.png`;
        // キャラクター名更新
        document.getElementById("player-name").textContent = playerData.name;

        // チャート更新（JSONデータの構成そのまま Chart.js の設定として利用）
        createChart(playerData);
    } catch (error) {
        console.error('詳細データ取得エラー:', error);
    }
}

// プレイヤー一覧 (get.json) を読み込み、サムネイル画像を横一列に表示する関数
async function loadPlayerList() {
    try {
        const response = await fetch('api/players/get.json');
        if (!response.ok) {
            alert('キャラクター一覧の取得に失敗しました。');
            return;
        }
        const data = await response.json();
        playersList = data.players;

    } catch (error) {
        console.error('キャラクター一覧取得エラー:', error);
    }
}

// 初回ロード処理
async function init() {
    // Player一覧を取得
    await loadPlayerList();

    // 各プレイヤーのサムネイル画像を作成
    createThumbnails(playersList);

    // 初期表示は、一覧の最初のプレイヤーを表示
    if (playersList.length > 0) {
        loadPlayer(playersList[0].id);
    }
}

init();
