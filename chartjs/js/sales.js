let myChart; // グローバル変数で管理

// チャートを生成する共通関数
function createChart(type, data, options) {
    // 2Dコンテキストを取得
    const ctx = document.getElementById('myChart').getContext('2d');
    // Chart.jsのインスタンスを生成
    myChart = new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });
}

// 初期データ
let chartData = {
    labels: [],
    datasets: [{
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
    }]
};

// 初期オプション
let chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

async function loadGraphData() {
    try {
        // APIからデータを取得
        const results = await fetch('./api/sales.json');
        if (!results.ok) {
            alert('データ取得に失敗しました。');
            return;
        }
        // json形式でデータを取得
        const data = await results.json();

        // APIから取得したデータでグローバル変数を更新
        chartData.labels = data.labels;
        chartData.datasets[0].label = data.datasets[0].label;
        chartData.datasets[0].data = data.datasets[0].data;
        chartData.datasets[0].backgroundColor = data.datasets[0].backgroundColor;
        chartData.datasets[0].borderColor = data.datasets[0].borderColor;
    } catch (error) {
        console.error('データ取得エラー:', error);
    }
}

// 棒グラフを描画する関数
function barGraph() {
    // 現在のチャートを破棄
    if (myChart) myChart.destroy();

    // 新しいチャートを棒グラフとして再生成
    createChart('bar', chartData, chartOptions);
}

// 折れ線グラフを描画する関数
function lineGraph() {
    // 現在のチャートを破棄
    if (myChart) myChart.destroy();

    // 新しいチャートを折れ線グラフとして再生成
    createChart('line', chartData, chartOptions);
}

// グラフの初期化関数
async function initGraph() {
    // 初期データを取得
    await loadGraphData();
    // 初期グラフを描画
    barGraph();
}

// グラフの初期化を実行
initGraph();