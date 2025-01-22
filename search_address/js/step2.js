const PREFECTURE_FILE_PATH = './data/prefectures.json';
const SEARCH_URI = "https://zipcloud.ibsnet.co.jp/api/search";

// 都道府県JSON読み込み
const loadPrefectures = async () => {
    const response = await fetch(PREFECTURE_FILE_PATH);
    const prefectures = await response.json();
    console.log(prefectures);
    renderPrefectures(prefectures);
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

// 郵便番号検索
const searchAPI = async (zipcode) => {
    if (!zipcode) return;
    const query_param = new URLSearchParams({ zipcode: zipcode, })
    const uri = SEARCH_URI + "?" + query_param;
    // console.log(uri)
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}

const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    var data = await searchAPI(zipcode);
    console.log(data);
}

(() => {
    loadPrefectures();
})();