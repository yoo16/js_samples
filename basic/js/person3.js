// コンストラクタ定義の場合
function Person(name = "", image = "") {
    this.name = name;
    this.image = image;
    this.greet = function () {
        greet(this);
    };
}

const characterImageElement = document.getElementById("characterImage");
const characterNameElement = document.getElementById("characterName");
const messageElement = document.getElementById("message");

function greet(person) {
    var message = "";
    if (person.name) {
        message = "これからゲームのスタートするよ。";
    } else {
        message = "名前を入力して";
    }
    messageElement.textContent = message;
}

// displayGreeting関数を定義
function displayGreeting() {
    // テキストボックスの入力を取得し、personオブジェクトに設定
    const inputName = document.getElementById("nameInput").value;
    const imagePath = "images/character_1.webp";
    person = new Person(inputName, imagePath);

    // メッセージボックスにキャラクター名
    characterNameElement.textContent = person.name;

    // greet() でテキストを取得し、メッセージボックスに表示
    person.greet();

    // 入力エリアを隠す
    hideInputArea();

    // キャラクター画像を表示
    createImage();
}

function createImage() {
    // 画像オブジェクトを作成
    const img = new Image();
    // 画像のソースを設定
    img.src = person.image;
    // 画像のスタイルを追加
    img.className = "w-[250px]";

    // 画像をDOMに追加
    characterImageElement.innerHTML = "";
    characterImageElement.appendChild(img);
}

/**
 * hideInputArea()
 * 入力エリアを隠す
 **/
function hideInputArea() {
    const inputArea = document.getElementById("input-area");
    inputArea.style.display = "none";
}