function addMessage() {
    const newMessage = document.createElement("h4");
    newMessage.innerText = "New Message";
    document.getElementById("message_top").after(newMessage);
}

function addCity() {
    const cityArea = document.getElementById("city_area");
    const newCity = document.createElement("div");
    newCity.innerText = "City";
    newCity.className = "p-2 bg-gray-200 rounded-md mb-2";
    cityArea.appendChild(newCity);
}

function removeCity() {
    const cityArea = document.getElementById("city_area");
    if (cityArea.lastChild) {
        cityArea.removeChild(cityArea.lastChild);
    }
}

function addItem() {
    const itemName = document.getElementById("item_name").value;
    if (itemName) {
        const newItem = document.createElement("li");
        newItem.innerText = itemName;
        document.getElementById("item_list").appendChild(newItem);
        document.getElementById("item_name").value = ""; // 入力をクリア
    }
}

function removeItems() {
    const itemList = document.getElementById("item_list");
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function addNumber() {
    const newNumber = document.createElement("div");
    newNumber.innerText = Math.floor(Math.random() * 100);
    newNumber.className = "text-blue-600 font-bold mt-2";
    document.getElementById("start").after(newNumber);
}