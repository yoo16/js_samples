const PREFECTURE_FILE_PATH = "./data/prefectures.json";
const SEARCH_URI = "https://zipcloud.ibsnet.co.jp/api/search";

const requestAPI = async (zipcode) => {
    if (!zipcode) return;
    const query_param = new URLSearchParams({ zipcode: zipcode, })
    const uri = SEARCH_URI + "?" + query_param;
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}

const loadPrefectures = () => {
    // const response = await fetch(PREFECTURE_FILE_PATH);
    // const prefectures = await response.json();
    // console.log(prefectures)
    // prefectures.map((prefecture) => {
    //     var option = document.createElement('option')
    //     option.value = prefecture.code;
    //     option.innerHTML = prefecture.name;
    //     document.getElementById('prefecture').appendChild(option)
    // })

    fetch(PREFECTURE_FILE_PATH)
        .then((response) => response.json())
        .then((prefectures) => {
            prefectures.map((prefecture) => {
                var option = document.createElement('option')
                option.value = prefecture.code;
                option.innerHTML = prefecture.name;
                document.getElementById('prefecture').appendChild(option)
            })
        });
}

const loadPrefectures2 = async () => {
    // const response = await fetch(PREFECTURE_FILE_PATH);
    // const prefectures = await response.json();
    // console.log(prefectures)
    // prefectures.map((prefecture) => {
    //     var option = document.createElement('option')
    //     option.value = prefecture.code;
    //     option.innerHTML = prefecture.name;
    //     document.getElementById('prefecture').appendChild(option)
    // })

    fetch(PREFECTURE_FILE_PATH)
        .then((response) => response.json())
        .then((prefectures) => {
            prefectures.map((prefecture) => {
                var option = document.createElement('option')
                option.value = prefecture.code;
                option.innerHTML = prefecture.name;
                document.getElementById('prefecture').appendChild(option)
            })
        });
}


const searchAdddress = async () => {
    const zipcode = document.getElementById('zipcode').value;
    if (!zipcode) {
        alert('郵便番号を入力してください')
    }
    var data = await requestAPI(zipcode);
    if (!data) return;
    if (!data.results) return;
    var results = data.results[0]

    document.getElementById('prefecture').value = results.prefcode;
    document.getElementById('city').value = results.address2 + results.address3;
}

(() => {
    loadPrefectures();
})();