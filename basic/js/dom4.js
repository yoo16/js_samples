function addNumberAppend() {
    const message = document.createElement("p");
    message.innerText = Math.floor(Math.random() * 100);
    message.className = "text-blue-600 font-bold mt-2";

    const info = document.createElement("span");
    info.textContent = "More text"

    // TODO: id=message-list の後に追加
    document.getElementById("message-list").append(message, info);
}


function addNumberAfter() {
    const newNumber = document.createElement("div");
    newNumber.innerText = Math.floor(Math.random() * 100);
    newNumber.className = "text-blue-600 font-bold mt-2";

    const info = document.createElement("span");
    info.textContent = "More text"
    // TODO: id=start の後に追加
    document.getElementById("start").after(newNumber, info);
}

function addNumber() {
    // id=item-name-1 のDOMから（親要素）、入力値を取得
    const cityArea = document.getElementById("number-list");
    const newItem = document.createElement("div");
    newItem.innerText = Math.floor(Math.random() * 100);;
    newItem.className = "p-2 bg-gray-200 rounded-md mb-2";

    cityArea.appendChild(newItem);
}


function removeNumber() {
    const numberList = document.getElementById("number-list");
    // 最後の要素があれば
    if (numberList.lastChild) {
        // 最後の要素を削除
        //const removedElement = numberList.removeChild(numberList.lastChild);
        numberList.lastChild.remove();
    }
}

function addItem() {
    // id=item-name のDOMから（親要素）、入力値を取得
    const itemName = document.getElementById("item-name").value;
    if (!itemName) {
        alert("項目を入力してください。")
        return
    }
    // liタグ作成
    const newItem = document.createElement("div");
    // テキスト挿入
    newItem.innerText = itemName;
    newItem.className = "p-2 bg-gray-200 rounded-md mb-2";

    newItem.onclick = function () {
        this.classList.toggle("selected");
        this.classList.toggle("bg-orange-200");
    };

    // クラス設定
    newItem.classList.add('item');
    // 親要素に liタグの追加
    document.getElementById("item-list").appendChild(newItem);
    // 入力をクリア
    document.getElementById("item-name").value = "";
}

function removeItems() {
    // class=selected の要素をすべて取得
    const selectedItems = document.querySelectorAll(".selected");

    // 要素がなければ終了
    if (!selectedItems) return;

    // 子要素があれば、すべて削除
    selectedItems.forEach(selectedItem => {
        // document.getElementById("item-list").removeChild(selectedItem);
        selectedItem.remove();
    });
}