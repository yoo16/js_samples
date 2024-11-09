const carouselImages = document.getElementById("carousel-images");

// スクロール開始時間
const startInterval = 500;
// スクロールの速度
const scrollSpeed = 1;
// スクロール座標
var scrollX = 0;

/**
 * createCarousel()
 * カルーセル画像を初期化
 */
function createCarousel() {
    // 画像を2回繰り返して追加し、無限スクロールを視覚的に実現
    items.concat(items).forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item.image;
        img.classList.add("carousel-image");
        // クリック時にモーダルを開く
        img.onclick = () => openModal(item.id);
        carouselImages.appendChild(img);
    });
}

/**
 * scrollCarousel()
 * スクロールアニメーション（スムーズ）
 */
function scrollCarousel() {
    // スクロールを進める
    scrollX += scrollSpeed;
    carouselImages.style.transform = `translateX(-${scrollX}px)`;

    // 無限スクロールを実現するためのリセット
    if (scrollX >= carouselImages.scrollWidth / 2) {
        scrollX = 0; // スクロール位置をリセット
    }

    // アニメーションを継続
    requestAnimationFrame(scrollCarousel);
}

// ページ読み込み完了後に実行
createCarousel();
setTimeout(() => {
    scrollCarousel();
}, startInterval);