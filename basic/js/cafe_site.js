// キャッチコピーの文字
var message = "心ほどける、甘くて香ばしいブレイクタイム";
// 背景画像の配列
const images = [
    'images/cafe-shop-1.jpg',
    'images/cafe-shop-2.jpg',
    'images/cafe-shop-3.jpg',
];
// 画像の指定インデックス
var imageIndex = 0;
// アニメーションテキストのディレイ時間
const animationTextDelay = 200;
// 背景画像のフェードイン時間
const fadeInTime = 1000;
// 背景画像の切り替え時間
const backgroundSwitchTime = 8000;

// キャッチコピーのElement
const copyElement = document.getElementById('copy');
// 背景画像のElement
const backgroundImage = document.getElementById('background-image');

/**
 * animationText()
 * アニメーションテキスト
 */
function animationText(text, callback) {
    var index = 0;
    function displayNextChar() {
        const span = document.createElement('span');
        span.textContent = text[index];
        span.classList.add('fade-in');
        copyElement.appendChild(span);

        index++;
        if (index < text.length) {
            setTimeout(displayNextChar, animationTextDelay);
        } else {
            // 初回背景画像切り替え
            switchBackground();
            // 背景画像スライドショー
            setInterval(switchBackground, backgroundSwitchTime);
        }
    }
    displayNextChar();
}

/**
 * switchBackground()
 * 背景画像のスライドショー
 */
function switchBackground() {
    // 背景画像のインデックス更新
    imageIndex = (imageIndex + 1) % images.length;

    // Imageオブジェクト作成
    const image = new Image();
    // 画像を設定
    image.src = images[imageIndex];

    // 画像がロードされたら実行
    image.onload = () => {
        // フェードアウト
        backgroundImage.style.opacity = 0;

        // フェードインで画像表示
        setTimeout(() => {
            // imgタグのsrcを更新
            backgroundImage.src = images[imageIndex];
            // フェードイン
            backgroundImage.style.opacity = 1;
        }, fadeInTime);
    };
}

// テキストアニメーションを開始
animationText(message);