const container = document.getElementById('weather-container');
const reportedAtContainer = document.getElementById('reported-at');
const topicContainer = document.getElementById('topics');
const errorContainer = document.getElementById('error');
var weatherData;

// Fetch API to get weather data from the endpoint
async function fetchWeather() {
    try {
        // API URI
        const uri = 'api/weather/report.php';
        // const uri = 'api/weather/list.json';

        const response = await fetch(uri);
        if (!response.ok) {
            displayError("天気情報の取得に失敗しました");
        }
        return await response.json();
    } catch (error) {
        displayError("天気情報の取得に失敗しました");
    }
}

// Function to display weather data
async function displayWeather(area = "") {
    try {
        // 現在のリストクリア
        container.innerHTML = '';
        errorContainer.innerHTML = '';

        // Fetch API データ
        weatherData = await fetchWeather();

        // フィルタリング
        const cities = filterWeather(area);
        if (cities.length === 0) {
            displayError("天気情報がありません");
            return;
        }

        // 日時
        reportedAtContainer.innerHTML = weatherData.reportedAt;

        // トピック表示
        topicContainer.innerHTML = weatherData.topics;

        // 天気カード生成
        cities.forEach(({ area, city, temperature_max, temperature_min, condition, precipitationProbability }) => {
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
                <p class="text-gray-500">${precipitationProbability}%</p>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        displayError(error);
    }
}

/**
 * 天気データフィルタイング
 * @param {*} data 
 * @param {*} selected 
 * @returns 
 */
function filterWeather(selected) {
    console.log(selected)
    if (!selected) return weatherData.cities;
    return weatherData.cities.filter(({ area }) => area == selected)
}

/**
 * フィルタボタン
 */
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const area = event.currentTarget.dataset.area || '';
            displayWeather(area);
        });
    });
}

/**
 * エラーメッセージ
 * @param {*} error 
 */
function displayError(error) {
    errorContainer.innerHTML = error;
}

document.addEventListener('DOMContentLoaded', () => {
    // 全データ表示
    displayWeather();

    // フィルターボタンをセットアップ
    setupFilterButtons();
});