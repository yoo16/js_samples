var person = {
    "name": "John",
    "age": 30,
    "city": "New York",
}

// stringify()
const jsonString = JSON.stringify(person);
console.log(jsonString);

// parse()
person = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);