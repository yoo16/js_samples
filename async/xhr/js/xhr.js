function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL + 'data/persons.json';
}

const API_URL = getApiURL();
console.log(API_URL)

const xhr = new XMLHttpRequest();
xhr.open('GET', API_URL, true);
xhr.onload = function () {
    if (xhr.status === 200) {
        const json = xhr.responseText;
        console.log(json);

        const persons = JSON.parse(json)
        for (const person of persons) {
            console.log(person.name)
        }
    } else {
        console.error('リクエストが失敗しました。');
    }
};

xhr.send();