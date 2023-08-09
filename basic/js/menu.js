var messageElement = document.getElementById('message');

function Person(name) {
    this.name = name;
    messageElement.innerHTML = this.name
}

const person = {
    name: "John",
    sayHello1: function () {
        messageElement.innerHTML = this.name
    },
    sayHello2: () => {
        messageElement.innerHTML = this.name
    }
}

this.name = "Bob"
function sayFunction(element) {
    messageElement.innerHTML = element.name
}

function sayAnonymous(element) {
    person.sayHello1()
}

function sayArrow(element) {
    person.sayHello2()
}

function sayPerson(element) {
    new Person("Alice")
}

function over(element) {
    const submenus = document.getElementsByClassName("submenu")
    for (submenu of submenus) {
        submenu.classList.remove("show", "fadein")
    }
    var id = element.dataset.menu
    if (id) {
        document.getElementById(id).classList.add("show", "fadein")
    }
}
