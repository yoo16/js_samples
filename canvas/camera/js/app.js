// DOM 要素
const video = document.getElementById('video');
const captureBtn = document.getElementById('capture-btn');
const photoInput = document.getElementById('photo');
const canvasArea = document.getElementById('canvas-area');
const countdownOverlay = document.getElementById('countdownOverlay');
const countdownCircle = document.getElementById('countdownCircle');
const loadingModal = document.getElementById('loadingModal');
const toggleAudioBtn = document.getElementById('toggleAudioBtn');
const imageModal = document.getElementById('imageModal');
const capturedImage = document.getElementById('capturedImage');
const closeImageModal = document.getElementById('closeImageModal');

// キャンバスサイズ
const canvasWidth = 640;
const canvasHeight = 480;

// シャッタータイマーの遅延時間（秒）を設定（ここでは3秒）
const shutterDelaySeconds = 3;

// キャプチャされた画像を保持するための DataTransfer オブジェクト
const dataTransfer = new DataTransfer();

// カウントダウンのオーディオを読み込む
const countdownAudio = new Audio('audio/countdown.wav');

// 音声再生のON/OFFを制御するフラグ（初期値：ON）
let audioEnabled = true;


/**
 * カメラ有効
 * @description
 * - getUserMedia() を使用して、カメラストリームを取得
 * - 取得したストリームを、video要素に設定
 * @returns {Promise<void>}
 */
const onCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
};

/**
 * ボタンクリックイベントハンドラ（画像キャプチャ）
 * @description
 * - 画像を生成して、input[type="file"] に設定
 * - 画像を表示するモーダルを表示
 * - 画像生成中はローディングモーダルを表示
 * @returns {Promise<void>}
 */
const onCapture = async () => {
    // ローディングモーダルを表示
    loadingModal.classList.remove('hidden');

    // 新しい canvas 作成
    const newCanvas = document.createElement('canvas');
    newCanvas.width = canvasWidth;
    newCanvas.height = canvasHeight;
    const ctx = newCanvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvasWidth, canvasHeight);

    // キャプチャされた画像を DataTransfer に追加
    newCanvas.toBlob((blob) => {
        // ファイル生成（必要に応じて）
        const file = new File([blob], `captured-image-${Date.now()}.jpg`, { type: 'image/jpeg' });
        dataTransfer.items.add(file);
        photoInput.files = dataTransfer.files;

        // Blob からオブジェクトURLを生成して、モーダル内の <img> に設定
        const imageUrl = URL.createObjectURL(blob);
        capturedImage.src = imageUrl;

        // 画像表示モーダルを表示（モーダルは１枚の画像のみ表示）
        imageModal.classList.remove('hidden');

        // ローディングモーダルを非表示に
        loadingModal.classList.add('hidden');
    });
};


/**
 * カウントダウン処理
 * @description
 * 1. カウントダウン用のオーバーレイを表示
 * 2. カウントダウンを開始し、1秒間隔で数字を減らす
 * 3. カウントが0になったら、カメラを撮影し、画像を生成
 * 4. カウントダウン用のオーバーレイを非表示に
 * 5. captureBtn を有効化
 */
const countDown = () => {
    let count = shutterDelaySeconds;
    countdownCircle.textContent = count;
    countdownOverlay.classList.remove('hidden');
    countdownCircle.classList.add('animate-ping');

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownCircle.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownOverlay.classList.add('hidden');
            countdownCircle.classList.remove('animate-ping');
            onCapture();
            captureBtn.disabled = false;
        }
    }, 1000);
}

/**
 * Countdown Audio を再生
 * @function playSound
 */
const playSound = () => {
    countdownAudio.currentTime = 0;
    countdownAudio.play();
}

// キャプチャボタンをクリックしたとき、タイマーで遅延後にキャプチャ実行
captureBtn.addEventListener('click', () => {
    captureBtn.disabled = true;

    if (audioEnabled) {
        playSound();
    }

    countDown();
});

// 画像モーダルの「Close」ボタンでモーダルを非表示
closeImageModal.addEventListener('click', () => {
    imageModal.classList.add('hidden');
});

// Audio ON/OFF を切り替え
toggleAudioBtn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    toggleAudioBtn.textContent = audioEnabled ? "Audio ON" : "Audio OFF";
});

// カメラ有効
onCamera();