function getPerson(resolve) {
    setTimeout(() => {
        var person = {
            "name": "John",
            "age": 30,
            "city": "New York",
        }
        resolve(person);
    }, 2000);
}

function showPerson(person) {
    document.getElementById("name").innerHTML = person.name;
    document.getElementById("age").innerHTML = person.age;
    document.getElementById("city").innerHTML = person.city;
}

// const promise = new Promise((resolve, reject) => {
//     getPerson(resolve);
// });

// promise.then((value) => {
//     showPerson(value);
// }).catch((error) => {
//     console.log(error);
// });

async function fetchPerson() {
    return new Promise((resolve, reject) => {
        getPerson(resolve);
    });
}

(async function () {
    try {
        const person = await fetchPerson();
        showPerson(person);
    } catch (error) {
        console.error(error);
    }
})();