function addMessage() {
    let message = document.createElement('div');
    message.innerHTML = 'Hello Tokyo';
    message.className = 'message';

    let message_top = document.querySelector('#message_top');
    //let message = document.getElementById('message');
    message_top.after(message);
}

function addCity() {
    let city_area = document.querySelector('#city_area');
    //let city_area = document.getElementById('city_area');

	if (!city_area.hasChildNodes()){
        let p1 = document.createElement('p');
        p1.innerHTML = '<strong>Tokyo</strong>'
		city_area.appendChild(p1);
	}
}

function removeCity() {
    let city_area = document.querySelector('#city_area');
    //let city_area = document.getElementById('city_area');

	if (city_area.hasChildNodes()){
		city_area.removeChild(city_area.firstChild);
	} 
}

function addItem() {
    let item_name = document.querySelector('#item_name');
    //let item_name = document.getElementById('item_name');

    if (item_name.value) {
        let item_list = document.getElementById('item_list');
        let li = document.createElement('ul');
        li.innerHTML = item_name.value;
        li.style.cssText = 'background: red; color: white;'
        item_list.appendChild(li);
    }
    item_name.value = ''
}

function removeItems() {
    let item_list = document.querySelector('#item_list');
    //let item_list = document.getElementById('item_list');

    item_list.innerHTML = '';
    // while (item_list.firstChild) {
    //     if (item_list.hasChildNodes()){
    //         item_list.removeChild(item_list.lastChild);
    //     }
    // }
}

function addNumber() {
    let number = 0
    let number_selector = document.querySelectorAll('.number')
    if (number_selector) number = number_selector.length

    let start = document.getElementById('start');
    let span = document.createElement('span');
    span.className = 'number';  
    span.innerHTML = number;
    span.style.cssText = 'background: red; color: white; padding: 5px; margin: 2px';

    start.after(span); 
}