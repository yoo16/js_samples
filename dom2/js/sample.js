
let element_title = document.getElementById('title');
element_title.innerHTML = 'City';
element_title.style.color = '#3355ff';

console.log('select_number');
let select_number = document.getElementById('select_number').value;
console.log(select_number);

console.log('city_name_elements');
let city_name_elements = document.querySelectorAll('.city_name');
//let city_name_elements = document.getElementsByClassName('city_name');
console.log(city_name_elements);

console.log('city_name');
let index = select_number - 1;
document.getElementById('result_city_name').innerHTML = city_name_elements[index].innerText;

let input_elements = document.querySelectorAll('.lat_lng')[index];
let lat = input_elements.querySelector('input[name=lat]').value;
let lng = input_elements.querySelector('input[name=lng]').value;

// let lat_elements = document.querySelectorAll('#city_list>li input[name=lat]');
// let lng_elements = document.querySelectorAll('#city_list>li input[name=lng]');
// let lat = lat_elements[2].value;
// let lng = lat_elements[2].value;

console.log(lat);
console.log(lng);
document.getElementById('result_lat_lng').innerHTML = `(lat, lng) = (${lat} ${lng})`;