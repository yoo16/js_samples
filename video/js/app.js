const video = document.getElementById('video');
const videoTitle = document.getElementById('video-title');
const videoThumbnails = document.getElementById("videoThumbnails");
const playPauseBtn = document.getElementById('playPauseBtn');
const progressSlider = document.getElementById('progressSlider');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const volumeOnIcon = document.getElementById('volumeOnIcon');
const volumeMuteIcon = document.getElementById('volumeMuteIcon');
const volumeSlider = document.getElementById('volumeSlider');
const playbackSpeed = document.getElementById('playbackSpeed');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// コメントデータ
var comments = [];

// コメント表示済みデータ
var displayedComments = [];

// ビデオスキップ（秒）
const step1 = 0.5;

// ビデオスキップ2（秒）
const step2 = 3;

// デフォルト音量ボリューム(0 - 1)
const defaultVolume = 0.1;

/**
 * generateVideoList()
 * 動画サムネイルリスト
 */
function generateVideoList() {
    videos.forEach((video, index) => {
        // 画像
        const thumbnail = document.createElement("img");
        thumbnail.src = video.thumbnailPath;
        thumbnail.alt = video.title;
        thumbnail.className = "h-20 object-cover rounded mr-2";

        // タイトル
        const title = document.createElement("span");
        title.textContent = video.title;
        title.className = "text-sm text-gray-700";

        // サムネイルアイテム
        const videoItem = document.createElement("div");
        videoItem.className = "flex items-center bg-white p-1 cursor-pointer hover:bg-gray-200";
        // サムネイルアイテムに画像、タイトル追加
        videoItem.append(thumbnail, title);

        // 動画クリック時の処理
        videoItem.onclick = () => loadAndPlayVideo(video);

        // サムネイルリストに追加
        videoThumbnails.appendChild(videoItem);
    });
}

/**
 * loadAndPlayVideo()
 * 動画をロードして再生
 */
function loadAndPlayVideo(selectedVideo) {
    // ビデオタイトル
    videoTitle.textContent = selectedVideo.title;

    // 動画のロード
    video.src = selectedVideo.videoPath;
    video.load();
    video.play();

    // コメントデータを更新
    comments = selectedVideo.comments;
    // 表示済みコメントをリセット
    displayedComments = [];
    // コメントリストをリセット
    commentsList.innerHTML = "";

    // UI 更新
    updatePlayIcon();
    progressSlider.value = 0;
    updateCurrentTime(0)
    updateDuration(0)
}


/**
 * onLoadedVideo()
 * ビデオ読み込み後の処理
 */
function onLoadedVideo(event) {
    // 時間関連のデータ更新
    updateTimeData();

    // 再生アイコンの更新
    updatePlayIcon();
}

/**
 * playPause()
 * 再生＆停止
 */
function playPause() {
    if (video.paused) {
        // ビデオ停止中なら再生
        video.play();
    } else {
        // ビデオ再生中なら停止
        video.pause();
    }
    updatePlayIcon();
}

/**
 * updateTimeData()
 * 時間関連データの更新
 */
function updateTimeData() {
    // 再生時間を更新
    const currentTime = video.currentTime;
    // 動画のトータル時間
    const duration = video.duration;

    // 現在の再生時間を更新
    updateCurrentTime(currentTime);

    // トータル再生時間を更新
    updateDuration(duration);

    // スライダーの位置更新
    const progress = (currentTime / duration) * 100;
    progressSlider.value = progress;

    // スライダー背景の更新
    progressSlider.style.background = `linear-gradient(to right, red ${progress}%, gray ${progress}%)`;

    // コメントを更新
    updateComments(Math.floor(currentTime));
}

/**
 * onProgressSlider()
 * スライダードラッグ時のイベントハンドラ
 */
function onProgressSlider(event) {
    // スライダーの値
    const sliderValue = event.target.value;
    // 動画の現在の時間 = スライドの割合 x トータル時間
    video.currentTime = (sliderValue / 100) * video.duration;
}

/**
 * updateProgress()
 * 再生スライダー更新
 */
function updateProgress() {
    const currentTime = video.currentTime;
    const duration = video.duration;

    // スライダーの位置計算
    const progress = (currentTime / duration) * 100;
    // スライダーの位置更新
    progressSlider.value = progress;

    // スライダーの背景更新
    progressSlider.style.background = `linear-gradient(to right, red ${progress}%, gray ${progress}%)`;
}

/**
 * updatePlayIcon()
 * 再生アイコン更新
 */
function updatePlayIcon() {
    if (video.paused) {
        pauseIcon.classList.add("hidden"); // 停止アイコンを非表示
        playIcon.classList.remove("hidden"); // 再生アイコンを表示
    } else {
        playIcon.classList.add("hidden"); // 再生アイコンを非表示
        pauseIcon.classList.remove("hidden"); // 停止アイコンを表示
    }
}

/**
 * fullscreen()
 * フルスクリーン
 * ブラウザの種類によって異なる
 */
function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}

/**
 * toggleMute()
 * 音声ミュート切り替え
 */
function toggleMute() {
    if (video.muted) {
        // ミュートOFF muted = false
        video.muted = false;
        // 音量スライダーにビデオ音量を設定
        volumeSlider.value = video.volume;
    } else {
        // ミュートON muted = true
        video.muted = true;
        // 音量スライダーを 0
        volumeSlider.value = 0;
    }
    // 音声アイコン更新
    updateVolumeIcon();
}

/**
 * onChangeVolume()
 * 音声ボリューム変更
 */
function onChangeVolume(event) {
    // 音量スライダーの値取得 & 音量設定
    updateVolume(event.target.value)
}

/**
 * updateVolume()
 * 音声更新
 */
function updateVolume(volume) {
    // 音量設定
    video.volume = volume;
    // Mute判別
    video.muted = (volume == 0);
    // 音量スライダー設定
    volumeSlider.value = volume;
    // 音声アイコン更新
    updateVolumeIcon();
}

/**
 * updateVolumeIcon()
 * 音声アイコン更新
 */
function updateVolumeIcon() {
    if (video.muted) {
        // Muteの場合
        volumeOnIcon.classList.add("hidden");
        volumeMuteIcon.classList.remove("hidden");
    } else {
        // 音量がある場合
        volumeMuteIcon.classList.add("hidden");
        volumeOnIcon.classList.remove("hidden");
    }
}

/**
 * updateCurrentTime()
 * 現在の時間更新
 */
function updateCurrentTime(currentTime) {
    currentTimeDisplay.textContent = formatTime(currentTime);
}

/**
 * updateDuration()
 * ビデオの長さ更新
 */
function updateDuration(duration) {
    durationDisplay.textContent = formatTime(duration);
}

/**
 * skip()
 * ビデオの時間スキップ
 */
function skip(seconds) {
    video.currentTime += seconds;
}

/**
 * changePlaybackSpeed()
 * ビデオの再生速度変更
 */
function changePlaybackSpeed() {
    video.playbackRate = parseFloat(playbackSpeed.value);
}

/**
 * updateComments()
 * コメント更新
 */
function updateComments(currentTime) {
    // 表示済みのコメントを除外して新しいコメントを追加
    comments.forEach(comment => {
        // コメントの時間が動画の再生時間以上だったら、コメント表示
        if (currentTime >= comment.time && !displayedComments.includes(comment.time)) {
            // コメント時間
            const commentTime = document.createElement('span');
            commentTime.textContent = formatTime(currentTime);
            commentTime.className = "mr-1"

            // コメントテキスト
            const commentText = document.createElement('span');
            commentText.textContent = comment.text;

            // コメント時間とコメントテキスト追加
            commentItem.append(commentTime, commentText)

            // コメントリスト
            const commentItem = document.createElement('div');
            commentItem.className = "p-1 text-xs text-gray-700";
            commentsList.appendChild(commentItem);

            // すでに表示したコメントとして記録
            displayedComments.push(comment.time);
        }
    });
}

/**
 * formatTime()
 * 時間を 00:00 形式にフォーマット
 */
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// キーボードイベント
window.onkeydown = (event) => {
    if (event.key == " ") {
        event.preventDefault();
        playPause();
    } else if (event.shiftKey && event.key == "ArrowRight") {
        event.preventDefault();
        skip(step2);
    } else if (event.key == "ArrowRight") {
        event.preventDefault();
        skip(step1);
    } else if (event.shiftKey && event.key == "ArrowLeft") {
        event.preventDefault();
        skip(-step2);
    } else if (event.key == "ArrowLeft") {
        event.preventDefault();
        skip(-step1);
    }
};

/**
 * 初期化処理
 */
function init() {
    // ビデオ読み込み
    generateVideoList();
    // 音量設定
    updateVolume(defaultVolume);
}

init();