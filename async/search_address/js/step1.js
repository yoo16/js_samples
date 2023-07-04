const PREFECTURE_FILE_PATH = "./data/prefectures.json";

const loadPrefectures = async () => {
    const response = await fetch(PREFECTURE_FILE_PATH);
    const prefectures = await response.json();
    console.log(prefectures);
}

(() => {
    loadPrefectures();
})();