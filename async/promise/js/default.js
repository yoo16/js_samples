fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('取得したデータ');
        }, 2000);
    });
}

async function processData() {
    const data = await fetchData();
    document.getElementById("result").innerHTML = data;
}

processData();