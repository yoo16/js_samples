const centerContainer = document.getElementById('center-container');
const officeContainer = document.getElementById('office-container');
const weatherContainer = document.getElementById('weather-container');
const reportedAtContainer = document.getElementById('reported-at');
const topicContainer = document.getElementById('topics');
const errorContainer = document.getElementById('error');

var centerData;
var forecastData;
var weatherData;
var centers;
var offices;

async function getCenter() {
    try {
        // API URI
        // const uri = 'https://www.jma.go.jp/bosai/common/const/area.json';
        const uri = './data/area2.json';
        const response = await fetch(uri);
        if (!response.ok) {
            displayError("エリア取得に失敗しました");
        }
        return await response.json();
    } catch (error) {
        displayError("APIエラー");
    }
}

async function getForecast(officeCode) {
    try {
        // API URI
        const uri = `https://www.jma.go.jp/bosai/forecast/data/forecast/${officeCode}.json`;
        // const uri = "./data/dummy.json";
        console.log(uri)
        const response = await fetch(uri);
        if (!response.ok) {
            displayError("予想データ取得に失敗しました");
        }
        return await response.json();
    } catch (error) {
        displayError("APIエラー");
    }
}

async function displayCenters() {
    try {
        // Fetch API データ
        centerData = await getCenter();
        centers = centerData.centers;
        offices = centerData.offices;

        for (const centerCode in centers) {
            const center = centers[centerCode];
            var div = document.createElement('div');
            div.className = 'area-btn bg-white px-4 py-2 rounded';
            div.dataset.centerCode = centerCode;

            var h2 = document.createElement('h2');
            h2.textContent = center.name;
            h2.className = 'text-2xl font-bold py-2';

            div.appendChild(h2);

            const ul = document.createElement('ul')
            for (const officeCode of center.children) {
                const li = document.createElement('li');
                const office = offices[officeCode];
                li.textContent = office.name;
                li.dataset.officeCode = officeCode;
                li.addEventListener('click', () => displayWeather(officeCode));
                ul.appendChild(li)
            }
            div.appendChild(ul);
            centerContainer.appendChild(div);
        }
    } catch (error) {
        displayError(error);
    }
}

// Function to isplay weather data
async function displayWeather(officeCode) {
    // 現在のリストクリア
    weatherContainer.innerHTML = '';
    errorContainer.innerHTML = '';

    try {
        console.log(`Office Code: ${officeCode}`);
        forecastData = await getForecast(officeCode);
        console.log(forecastData);

        // 予報日時
        reportedAtContainer.textContent = forecastData[0].reportDatetime;

        const weathers = forecastData[0].timeSeries[0].areas;
        const precipitations = forecastData[0].timeSeries[1].areas;
        const areas = forecastData[0].timeSeries[2].areas;

        // 天気カード生成
        areas.forEach((value, index) => {
            console.log("value: ", value)
            const name = value.area.name;
            const temperature = value.temps;

            const weather = weathers[index];
            if (!weathers[index]) return;

            const code = weather.weatherCodes[0];
            console.log("code: ", code)
            const weatherName = weather.weathers[0];
            const image = weatherCodes[code][0];

            const precipitaion = precipitations[index].pops[0];

            const card = document.createElement('div');
            card.className = 'bg-white shadow-md rounded-lg p-3 text-center';
            card.innerHTML = `
                    <h2 class="text-md font-bold mb-2">${name}</h2>
                    <p class="flex justify-center">
                        <img class="w-12 h-12" src="svg/${image}" alt="${weatherName}">
                    </p>
                    <p class="text-gray-500">
                        <span class="text-red-500 font-bold">${temperature[0]}</span>
                        /
                        <span class="text-blue-500 font-bold">${temperature[1]}</span>
                    </p>
                    <p class="text-gray-500">${precipitaion}%</p>
                `;
            weatherContainer.appendChild(card);
        });
    } catch (error) {
        displayError("予報データがありません。");
    }
}

/**
 * エラーメッセージ
 * @param {*} error 
 */
function displayError(error) {
    errorContainer.innerHTML = error;
}

document.addEventListener('DOMContentLoaded', () => {
    // 気象センター表示
    displayCenters();
});
