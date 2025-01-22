const PREFECTURE_FILE_PATH = './data/prefectures.json';
const SEARCH_URI = "https://zipcloud.ibsnet.co.jp/api/search";

const errorDisplay = document.getElementById('error');

// 都道府県JSON読み込み
const loadPrefectures = async () => {
    try {
        // TODO: 都道府県JSON読み込み（非同期）: PREFECTURE_FILE_PATH
        const response = await fetch(PREFECTURE_FILE_PATH);
        if (!response.ok) {
            errorDisplay.innerHTML = '都道府県読み込みエラー';
            return;
        }
        const prefectures = await response.json();
        console.log(prefectures);

        // 都道府県プルダウン作成
        renderPrefectures(prefectures);
    } catch (error) {
        errorDisplay.innerHTML = error;
    }
}

// 都道府県プルダウン作成
const renderPrefectures = (prefectures) => {
    prefectures.forEach((prefecture) => {
        var option = document.createElement('option');
        option.value = prefecture.code;
        option.innerHTML = prefecture.name;
        document.getElementById('prefecture').appendChild(option)
    })
}

const loadPrefecturesForThen = () => {
    fetch(PREFECTURE_FILE_PATH)
        .then((response) => {
            if (!response.ok) {
                errorDisplay.innerHTML = '都道府県読み込みエラー';
                return;
            }
            console.log(response.json());
            return response.json();
        })
        .then((prefectures) => {
            renderPrefectures(prefectures);
        })
        .catch(error => {
            console.log(error);
        });
}

// 郵便番号検索
const searchAddress = async (zipcode) => {
    if (!zipcode) return;
    try {
        const query_param = new URLSearchParams({ zipcode: zipcode, })
        const uri = SEARCH_URI + "?" + query_param;
        console.log(uri);
        const response = await fetch(uri);
        const data = await response.json();
        return data;
    } catch (error) {

    }
}

const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    if (!zipcode) {
        errorDisplay.innerHTML = '郵便番号を入力してください';
        return;
    }
    var data = await searchAddress(zipcode);
    console.log(data);
    if (data.results) {
        var results = data.results[0]
        document.getElementById('prefecture').value = results.prefcode;
        document.getElementById('city').value = results.address2 + results.address3;
    } else {
        errorDisplay.innerHTML = data.message;
    }
}

(() => {
    loadPrefectures();
})();