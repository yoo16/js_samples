// クラス定義
class Person {
    constructor(selectPerson) {
        this.id = selectPerson.id;
        this.name = selectPerson.name;
        this.imagePath = selectPerson.imagePath;
        this.furigana = selectPerson.furigana;
        this.age = selectPerson.age;
        this.gender = selectPerson.gender;
        this.ability = selectPerson.ability;
        this.likes = selectPerson.likes;
        this.description = selectPerson.description;
    }

    greet() {
        addMessage(`${this.name}（${this.furigana}）、${this.age}歳。`, this.name);
        addMessage(`好きなことは、${this.likes}。`, this.name);
        addMessage(`得意なことは、${this.ability}です。`, this.name);
        showMessages();
    }
}
