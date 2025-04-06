const ctx = document.getElementById('myChart').getContext('2d');

// Chart.js の初期化（初期データは空またはプレースホルダー）
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// API からデータを取得してグラフを更新する例
async function loadGraph() {
    try {
        const results = await fetch('./api/vote.json');
        console.log(results);
        const data = await results.json();

        // API から取得したデータを Chart.js の形式に合わせて更新
        myChart.data.labels = data.labels;
        myChart.data.datasets[0].label = data.datasets[0].label;
        myChart.data.datasets[0].data = data.datasets[0].data;
        myChart.data.datasets[0].backgroundColor = data.datasets[0].backgroundColor;
        myChart.data.datasets[0].borderColor = data.datasets[0].borderColor;
        myChart.update();
    } catch (error) {
        console.error('データ取得エラー:', error);
    }
}

loadGraph();