const container = document.getElementById('weather-container');
const reportedAtContainer = document.getElementById('reported-at');
const topicContainer = document.getElementById('topics');
const errorContainer = document.getElementById('error');

// Fetch API to get weather data from the endpoint
async function fetchWeather() {
    try {
        const response = await fetch('api/weather/list.json');
        if (!response.ok) {
            throw new Error('Response error');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

// Function to display weather data
async function displayWeather(conditionFilter = null) {
    try {
        // Fetch API データ
        const data = await fetchWeather();

        // 日時
        reportedAtContainer.innerHTML = data.reportedAt;

        // トピック表示
        topicContainer.innerHTML = data.topics;

        // 現在のリストクリア
        container.innerHTML = '';
        errorContainer.innerHTML = '';

        // フィルタリング
        const filteredData = conditionFilter
            ? data.cities.filter(({ condition }) => condition === conditionFilter)
            : data.cities;

        // 天気カード生成
        filteredData.forEach(({ city, temperature_max, temperature_min, condition, precipitationProbability }) => {
            const card = document.createElement('div');
            card.className = 'bg-white shadow-md rounded-lg p-3 text-center';

            card.innerHTML = `
                <h2 class="text-md font-bold mb-2">${city}</h2>
                <p class="flex justify-center">
                    <img class="w-12 h-12" src="images/${condition}.png" alt="${condition}">
                </p>
                <p class="text-gray-500">
                <span class="text-red-500 font-bold">${temperature_max}</span>
                /
                <span class="text-blue-500 font-bold">${temperature_min}</span>
                </p>
                <p class="text-gray-500">降水確率: ${precipitationProbability}%</p>
            `;

            container.appendChild(card);
        });

        if (filteredData.length === 0) {
            errorContainer.innerHTML = "該当する天気情報がありません";
        }
    } catch (error) {
        errorContainer.innerHTML = "天気情報の取得に失敗しました。";
    }
}

// Event listener for filter buttons
function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const condition = event.target.getAttribute('data-condition');
            displayWeather(condition);
        });
    });
}

// Load weather data and set up filters on page load
document.addEventListener('DOMContentLoaded', () => {
    displayWeather(); // 全データ表示
    setupFilterButtons(); // フィルターボタンをセットアップ
});
