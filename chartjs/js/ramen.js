async function loadRamenData() {
    const uri = 'api/ramen.json';
    const response = await fetch(uri);
    if (!response.ok) {
        throw new Error('ラーメンデータの取得に失敗しました');
    }
    return await response.json();
}

function renderTotal(labels, groups) {
    const container = document.getElementById('total-container');
    container.innerHTML = `<h2 class="text-xl font-bold mb-4">総合ランキング</h2>`;

    // 合計票数を集計してラベルと一緒にオブジェクトに
    const totalList = labels.map((label, i) => ({
        label,
        total: groups.reduce((sum, group) => sum + (group.data[i] || 0), 0)
    }));

    // 得票数で降順にソート
    totalList.sort((a, b) => b.total - a.total);

    // カードHTML生成（No付き）
    const cards = totalList.map((item, index) => `
        <div class="bg-white border-b py-4 w-full">
            <div class="text-xl text-gray-500 mb-1">No.${index + 1}</div>
            <div class="flex gap-4 items-center">
                <div class="text-xl font-semibold">${item.label}</div>
                <div class="text-xl text-center text-red-600 font-bold">${item.total}票</div>
            </div>
        </div>
    `).join('');

    // 表示
    container.innerHTML += `<div class="flex flex-wrap gap-4">${cards}</div>`;
}


function renderByGender(labels, groups) {
    const container = document.getElementById('gender-container');
    container.innerHTML = `<h2 class="text-xl font-bold mb-4">男女別ラーメン人気</h2>`;

    const groupSections = groups.map(group => {
        const items = labels.map((label, i) => `
            <div class="bg-white rounded shadow p-3">
                <div class="text-sm text-gray-600">${label}</div>
                <div class="text-lg font-bold text-center">${group.data[i]}票</div>
            </div>
        `).join('');

        return `
            <div class="mb-6">
                <h3 class="text-md font-bold mb-2">${group.name}</h3>
                <div class="grid grid-cols-2 gap-3">${items}</div>
            </div>
        `;
    }).join('');

    container.innerHTML += `<div class="flex flex-wrap gap-6">${groupSections}</div>`;
}

function createBarChart(labels, groups, colors) {
    const barCtx = document.getElementById('barChart').getContext('2d');

    const datasets = groups.map((group, index) => ({
        label: group.name,
        data: group.data,
        backgroundColor: colors[index % colors.length]
    }));

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 5 }
                }
            }
        }
    });
}

function createPieChart(labels, dataValues, groupName) {
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: `${groupName}の人気度`,
                data: dataValues,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
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

async function main() {
    const { labels, colors, groups } = await loadRamenData();

    renderTotal(labels, groups);

    renderByGender(labels, groups);

    createBarChart(labels, groups, colors);

    const targetGroup = groups.find(g => g.name === '男性');
    if (targetGroup) {
        createPieChart(labels, targetGroup.data, targetGroup.name);
    }
}

main();
