const PREFECTURE_FILE_PATH = "./data/prefectures.json";

const loadPrefectures = async () => {
    const response = await fetch(PREFECTURE_FILE_PATH);
    const prefectures = await response.json();
    prefectures.map((prefecture) => {
        var option = document.createElement('option')
        option.value = prefecture.code;
        option.innerHTML = prefecture.name;
        document.getElementById('prefecture').appendChild(option)
    })
}

(() => {
    loadPrefectures();
})();