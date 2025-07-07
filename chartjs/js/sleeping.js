async function fetchScatterData() {
    const res = await fetch('api/sleeping.json');
    if (!res.ok) {
        throw new Error('データの取得に失敗しました');
    }
    return await res.json();
}

async function createScatterChart() {
    const ctx = document.getElementById('scatterChart').getContext('2d');
    const json = await fetchScatterData();

    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: json.label,
                data: json.data,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const x = context.raw.x;
                            const y = context.raw.y;
                            return `睡眠: ${x}時間 / 生産性: ${y}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '睡眠時間（時間）',
                        font: { size: 14 }
                    },
                    min: 4,
                    max: 13,
                    ticks: {
                        stepSize: 1
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '生産性（1〜10）',
                        font: { size: 14 }
                    },
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// 実行
createScatterChart().catch(error => {
    console.error('エラー:', error);
    alert('グラフの表示に失敗しました。');
});