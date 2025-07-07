// Canvas: 棒グラフ
const barCtx = document.getElementById('barChart').getContext('2d');
// Canvas: 円グラフ
const pieCtx = document.getElementById('pieChart').getContext('2d');

/**
 * APIからラーメンデータ(JSON)を取得する関数
 * @returns 
 */
async function loadRamenData() {
    const uri = './data/ramen.json';
    const response = await fetch(uri);
    if (!response.ok) {
        throw new Error('ラーメンデータの取得に失敗しました');
    }
    return await response.json();
}

/**
 * 円グラフ作成
 * @param {Array} labels - ラベルの配列
 * @param {Array} dataValues - データの配列
 */
function createPieChart(labels, dataValues) {
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: '人気度',
                data: dataValues,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const value = context.parsed;
                            const percent = ((value / total) * 100).toFixed(1);
                            return `${context.label}: ${value}票 (${percent}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * 棒グラフを作成
 * @param {*} labels 
 * @param {*} dataValues 
 */
function createBarChart(labels, dataValues) {
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '人気度（票数）',
                data: dataValues,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        }
    });
}

// メイン処理
async function main() {
    // APIからラーメンデータを取得
    const { labels, data } = await loadRamenData();
    // 棒グラフ
    createBarChart(labels, data);
    // 円グラフ
    createPieChart(labels, data);
}

main();