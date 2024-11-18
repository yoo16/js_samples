const carouselImages = document.getElementById("carousel-images");

// スクロールの速度
const scrollSpeed = 1;
// スクロール座標
var scrollX = 0;

// 動的に追加されるインデックス
var currentIndex = 0;

/**
 * createCarouselItem(item)
 * カルーセル画像要素を作成して追加
 */
function createCarouselItem(item) {
    const img = document.createElement("img");
    img.src = item.image;
    img.classList.add("carousel-image");
    img.onclick = () => openModal(item.id);
    carouselImages.appendChild(img);
}

/**
 * createCarousel()
 * 初期カルーセル画像を作成
 */
function createCarousel() {
    // 無限スクロール用に items を連結
    const scrollItems = items.concat(items);
    scrollItems.forEach((item) => {
        createCarouselItem(item);
    });
}

/**
 * scrollCarousel()
 * スクロールアニメーション（スムーズ）
 */
function scrollCarousel() {
    // スクロールを左方向に進める
    scrollX -= scrollSpeed;
    carouselImages.style.transform = `translateX(${scrollX}px)`;

    // カルーセルの幅を取得
    const totalWidth = carouselImages.scrollWidth;

    // スクロールが一定距離（全体幅の半分）を超えたらリセット
    if (-scrollX >= totalWidth / 2) {
        scrollX += totalWidth / 2;
        carouselImages.style.transform = `translateX(${scrollX}px)`;
    }

    // アニメーションを継続
    requestAnimationFrame(scrollCarousel);
}

// ページ読み込み完了後に実行
createCarousel();
// カルーセルアニメーション実行
setTimeout(scrollCarousel, 500);
