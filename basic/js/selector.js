var h1 = document.querySelector('h1');
console.log(h1);

var title = document.querySelector('#title');
console.log(title);

var title = document.querySelector('h1#title');
console.log(title)

var cities = document.querySelector('.city');
console.log(cities);

var cities = document.querySelectorAll('.city');
console.log(cities);

console.log('--- forEach ---')
cities.forEach(function(city) {
    console.log(city.innerHTML);
})

console.log('--- for of ---')
for (var city of cities) {
	console.log(city.innerHTML);
}

var menus = document.querySelectorAll('ul.menus > li');
console.log(menus);

var elements = document.querySelectorAll('div span');
console.log(elements);