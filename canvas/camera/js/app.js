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

// キャプチャされた画像を保持するための DataTransfer オブジェクト
const dataTransfer = new DataTransfer();

// カウントダウンのオーディオを読み込む
const countdownAudio = new Audio('audio/countdown.wav');

// 音声再生のON/OFFを制御するフラグ（初期値：ON）
let audioEnabled = true;
toggleAudioBtn.addEventListener('click', () => {
  audioEnabled = !audioEnabled;
  toggleAudioBtn.textContent = audioEnabled ? "Audio ON" : "Audio OFF";
});

// カメラ起動処理
const onCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
};

// 画像キャプチャ処理
const onCapture = async () => {
    // ローディングモーダルを表示
    loadingModal.classList.remove('hidden');

    // 新しい canvas 作成（この canvas は画像生成用で、画面上に追加しなくてもよい）
    const newCanvas = document.createElement('canvas');
    newCanvas.width = 640;
    newCanvas.height = 480;
    const ctx = newCanvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 640, 480);

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

// シャッタータイマーの遅延時間（秒）を設定（ここでは3秒）
const shutterDelaySeconds = 3;

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

// 画像モーダルの「Close」ボタンでモーダルを非表示にする
closeImageModal.addEventListener('click', () => {
    imageModal.classList.add('hidden');
});

onCamera();