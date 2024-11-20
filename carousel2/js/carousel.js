// カルーセルの表示場所
const carouselImages = document.getElementById("carousel-images");
// サムネイルの表示場所
const thumbnailContainer = document.getElementById("thumbnail-container");
// 自動スライド変数
var autoSlide;
// スライドショーのインターバル
const slideShowInterval = 5000;
// 画像インデックス
var currentIndex = 0;
// アニメーション中フラグ
var isTransitioning = false;

/**
 * createCarousel()
 * カルーセル画像を初期化
 */
function createCarousel() {
    items.forEach(item => {
        const img = document.createElement("img");
        img.src = item.image;
        img.classList.add("carousel-image");
        img.onclick = () => openModal(item.id);
        carouselImages.appendChild(img);
    });
}

/**
 * updateCarousel()
 * カルーセルのアニメーションスライド処理
 */
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
    carouselImages.style.transition = "transform 1.0s ease";
    // サムネイル更新
    updateThumbnails();
}

/**
 * moveSlide
 * 方向に応じてスライド
 * 左: 1
 * 右: -1
 */
function moveSlide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    // direction でインデックス計算
    currentIndex = (currentIndex + direction + items.length) % items.length;

    // カルーセル処理
    updateCarousel();

    setTimeout(() => {
        isTransitioning = false;
    }, 500);
}

/**
 * createThumbnails()
 * サムネイル画像を作成し、クリックでカルーセルが移動
 */
function createThumbnails() {
    items.forEach((item, index) => {
        // サムネイル画像作成
        const thumb = document.createElement("img");
        thumb.src = item.image;
        thumb.classList.add("thumbnail-image");
        // サムネイルクリックで、カルーセル移動
        thumb.onclick = () => {
            // 現在のインデックス設定
            currentIndex = index;
            updateCarousel();
            stopSlide();
            startSlide();
        };
        thumbnailContainer.appendChild(thumb);
    });
}

/**
 * next()
 * 次のカルーセル
 */
function next() {
    stopSlide()
    startSlide()
    moveSlide(1)
}

/**
 * prev()
 * 前のカルーセル
 */
function prev() {
    stopSlide()
    startSlide()
    moveSlide(-1)
}

/**
 * updateThumbnails
 * 現在のインデックスに対応するサムネイルをハイライト
 */
function updateThumbnails() {
    const thumbnails = document.querySelectorAll(".thumbnail-image");
    thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add("active-thumbnail");
        } else {
            thumb.classList.remove("active-thumbnail");
        }
    });
}

/**
 * startSlide()
 * スライドショー開始
 */
function startSlide() {
    updateThumbnails();
    autoSlide = setInterval(() => moveSlide(1), slideShowInterval);
}

/**
 * stopSlide()
 * スライドショー開始
 */
function stopSlide() {
    clearInterval(autoSlide)
}

/**
 * 初期設定
 */
// カルーセル作成
createCarousel();
// サムネイルの作成
createThumbnails();
// スライドショー開始
startSlide();