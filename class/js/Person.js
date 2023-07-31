class Person {
    name

    constructor(name) {
        this.name = name
    }

    speack() {
        console.log(this.name)    
    }
}

var person = new Person("Alice")
person.speack()