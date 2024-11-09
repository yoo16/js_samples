const statusContainer = document.getElementById("status-container");
const selectButton = document.getElementById('select-button')
const messageElement = document.getElementById("message");
const selectPersonElement = document.getElementById("select-person")
const characterNameElement = document.getElementById("characterName");
const characterImageElement = document.getElementById("characterImage");
const thumbnailContainer = document.getElementById("thumbnail-container");
const continueMark = document.getElementById("continue-mark");

// 選択キャラクター
var selectedPerson = {};
// 複数メッセージ
var messages = [];
// 複数メッセージインデックス
var currentMessageIndex = 0;
// タイピングアニメーションの状態
var typingTimeout;

/**
 * サムネイル画像を生成
 */
function createThumbnails() {
    persons.forEach(person => {
        const thumb = document.createElement("img");
        thumb.id = "person-" + person.id;
        thumb.src = person.imagePath;
        thumb.className = "thumbnail-image w-24 h-24 object-cover rounded-full border-2 cursor-pointer";
        thumb.onclick = () => selectPerson(person);
        thumbnailContainer.appendChild(thumb);
    });
}

/**
 * キャラクターの詳細をステータスエリアに表示
 */
function displayStatus(person) {
    // キャラクター画像表示
    showImage(person.imagePath);

    document.getElementById("person-name").textContent = person.name;
    document.getElementById("person-furigana").textContent = `(${person.furigana})`;
    document.getElementById("person-description").textContent = person.description;
}

/**
 * 画像を選択
 */
function selectPerson(person) {
    if (!person) return;

    // キャラクター選択
    selectedPerson = person;

    // ステータスを表示
    displayStatus(person);

    // メッセージ
    showMessage("このキャラクターで良いですか？");

    // 決定ボタン表示
    selectButton.classList.remove('hidden');
    selectButton.classList.add("blink");

    // サムネイルハイライト
    document.querySelectorAll(".thumbnail-image").forEach(img => {
        img.classList.remove("border-blue-500");
    });
    document.getElementById(`person-${selectedPerson.id}`).classList.add("border-blue-500");
}


/**
 * showImage()
 * キャラクターイメージ表示
 **/
function showImage(imagePath) {
     // 既存の画像をクリア
    characterImageElement.innerHTML = "";
    if (imagePath) {
        const image = new Image();
        image.src = imagePath;
        image.className = "w-[300px] rounded-xl slide-in";
        characterImageElement.appendChild(image);
    }
}

/**
 * addMessage()
 * メッセージ配列に追加
 **/
function addMessage(text, name = "") {
    // 複数メッセージ
    messages.push({ text: text, name: name });
}

/**
 * showMessages()
 * メッセージの配列を順に表示
 **/
function showMessages() {
    currentMessageIndex = 0;
    var message = messages[currentMessageIndex];
    showMessage(message.text, message.name);
}

/**
 * showMessage()
 * 単一メッセージ表示（タイプライター風）
 **/
function showMessage(message, name = "") {
    // タイピング中のアニメーションをクリアし、メッセージをリセット
    clearTimeout(typingTimeout);

    // メッセージ空欄
    messageElement.textContent = "";

    // キャラクター名更新
    if (name) characterNameElement.textContent = name;

    // Enterキー非表示
    continueMark.classList.add("hidden");

    // タイピングアニメーション
    var messageIndex = 0;
    function typeMessage() {
        if (messageIndex < message.length) {
            // メッセージを1文字ずつ表示
            messageElement.textContent += message[messageIndex];
            messageIndex++;
            // タイムラグ
            typingTimeout = setTimeout(typeMessage, 50);
        } else if (currentMessageIndex < messages.length - 1) {
            continueMark.classList.remove("hidden");
            continueMark.classList.add("blink");
        }
    }

    // タイピングアニメーション開始
    typeMessage();
}

/**
 * nextMessage()
 * 次のメッセージを表示
 **/
function nextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        var message = messages[currentMessageIndex];
        showMessage(message.text, message.name);
    }
}

/**
 * hideInputArea()
 * 入力エリアを隠す
 **/
function hideInputArea() {
    selectPersonElement.classList.add('hidden');
    selectButton.classList.add('hidden');
}

/**
 * ゲームスタート
 */
function start() {
    if (selectedPerson.id) {
        const person = new Person(selectedPerson);
        person.greet();
        hideInputArea();
    } else {
        showMessage("キャラクターを選択してください。");
    }
}

/**
 * Keydownイベント
 * Enterキーで次のメッセージへ進む
 */
document.onkeydown = function (event) {
    if (event.key === "Enter") nextMessage();
}

/**
 * init()
 * 初期化
 */
function init() {
    createThumbnails();
    showMessage("キャラクターを選択してください。");
}

// 初期化&開始
init();