const backgroundColor = 'rgba(255, 255, 255, 0)';
const borderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
];

async function loadExamChart() {
    const res = await fetch('api/exam.json');
    if (!res.ok) {
        alert('データ取得に失敗しました');
        return;
    }

    const json = await res.json();

    const data = json.subjects.map((subject, index) => ({
        label: subject.name,
        data: json.srandard_scores[subject.key],
        borderColor: borderColors[index],
        backgroundColor: backgroundColor,
    }));

    const ctx = document.getElementById('chart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: json.exam_names,
            datasets: data,
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: json.title,
                    font: { size: 18 }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '偏差値',
                        font: { size: 14 }
                    },
                    min: 30,
                    max: 70,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        }
    });
}

loadExamChart();
