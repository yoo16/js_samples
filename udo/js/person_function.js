// 関数型オブジェクト
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `I'm ${this.name}. ${this.age} years old.`;
    };
}

// 関数型でインスタンス生成
const person = new Person("Alice", 30);

// name
document.getElementById('person-name').innerHTML = person.name;

// age
document.getElementById('person-age').innerHTML = person.age;

// greet()
document.getElementById('person-greet').innerHTML = person.greet();
