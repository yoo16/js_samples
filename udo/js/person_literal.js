// オブジェクトリテラル
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    }
};

// オブジェクトリテラルで処理
// name
document.getElementById('person-name').innerHTML = person.name;

// age
document.getElementById('person-age').innerHTML = person.age;

// greet()
document.getElementById('person-greet').innerHTML = person.greet();