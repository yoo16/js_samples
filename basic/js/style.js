var messageElement = document.getElementById('message');

function add() {
    messageElement.classList.add("active");
}

function remove() {
    messageElement.classList.remove("active");
}

function toggle() {
    messageElement.classList.toggle("active");
}

function replace() {
    messageElement.classList.replace("message", "frame");
}

function Person(name) {
    this.name = name;
    console.log(this);
}

const person = {
    name: "John",
    sayHello1: function () {
        console.log("Anonymous:", this.name);
    },
    sayHello2: () => {
        console.log("Arrow:", this.name);
    }
}

function check(element) {
    console.log(element)

    const person1 = new Person("Alice");

    this.name = "Bob"
    //Anonymous Function
    person.sayHello1()

    //Arrow Function
    person.sayHello2()
}

function over(element) {
    const submenus = document.getElementsByClassName("submenu")
    for (submenu of submenus) {
        submenu.classList.remove("show")
    }
    var id
    if (id = element.dataset.menu) {
        document.getElementById(id).classList.add("show", "fadein")
    }
}
