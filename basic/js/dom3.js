console.log('--- createElement ---');
let element_div = document.createElement('div');
console.log(element_div);

console.log('--- innerText ---');
let text_title = document.querySelector('#text_title');
//let text_title = document.getElementById('title');
console.log(text_title);
text_title.innerText = '<p>Text Title!!</p>'

console.log('--- innerHTML ---');
let html_title = document.querySelector('#html_title');
//let html_title = document.getElementById('html_title');
console.log(html_title);
html_title.innerHTML = '<p>HTML Title</p>'

console.log('--- value ---');
//document.getElementById('amount').value = 15;
document.querySelector('#amount').value = 15;

console.log('--- style ---');
let style_element = document.querySelector('#price');
//let style_element = document.getElementById('price');
style_element.style.color = '#ff0000';
style_element.style.border = '1px solid #ff0000';
style_element.style.padding = '10px';

console.log('--- appendChild ---');
let comment_p = document.createElement('p');
comment_p.innerHTML = 'こんにちわ';
comment_p.style.cssText = "background-color: yellow; padding: 10px;";

document.getElementById('parent').appendChild(comment_p);
