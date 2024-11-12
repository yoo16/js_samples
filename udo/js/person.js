// オブジェクトリテラル
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// 関数型
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
}

// クラス型
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// オブジェクトリテラルで処理
document.getElementById('object-literal').innerHTML = person.greet();

// 関数型またはクラス型で、インスタンス生成
const person1 = new Person("Alice", 30);
// ブラウザに greet() の結果を表示
document.getElementById('instance-object').innerHTML = person.greet();
