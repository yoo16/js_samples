const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const volumeOnIcon = document.getElementById('volumeOnIcon');
const volumeMuteIcon = document.getElementById('volumeMuteIcon');
const volumeSlider = document.getElementById('volumeSlider');
const playbackSpeed = document.getElementById('playbackSpeed');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// ビデオファイル
const videoFile = "videos/video1.mp4";

// ビデオスキップ（秒）
const step1 = 0.5;

// ビデオスキップ2（秒）
const step2 = 3;

// ビデオボリューム(0 - 1)
var volume = 0.1;

// コメント表示用
var displayedComments = [];

/**
 * loadVideo()
 * ビデオ読み込み
 */
function loadVideo(filePath) {
    // ビデオファイル設定
    video.src = filePath;
    // ビデオファイル読み込み
    video.load();
}

/**
 * onLoadedVideo()
 * ビデオ読み込み後の処理
 */
function onLoadedVideo(event) {
    // ビデオ音量設定
    video.volume = volume;
    // 音量スライダー設定
    volumeSlider.value = volume;
    // 再生アイコン表示
    updatePlayIcon();
    // 再生時間表示
    updateDuration();
    // トータル時間表示
    updateCurrentTime();
}

function onEnded(event) {
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
        // ミュートOFF
        video.muted = false;
        volumeSlider.value = video.volume;
    } else {
        // ミュートON
        video.muted = true;
        volumeSlider.value = 0;
    }
    // 音声アイコン更新
    updateVolumeIcon();
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function onChangeVolume(event) {
    // 音量スライダーの値取得
    volume = event.target.value;
    // 音量設定
    changeVolume(volume)
}

/**
 * changeVolume()
 * 音量変更
 */
function changeVolume(value) {
    // 音量設定
    video.volume = value;
    // Mute判別
    video.muted = (value == 0);
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
function updateCurrentTime() {
    // 現在の再生時間
    const currentTime = video.currentTime;
    // 時間フォーマットして表示
    currentTimeDisplay.textContent = formatTime(currentTime);
}

/**
 * updateDuration()
 * ビデオの長さ更新
 */
function updateDuration() {
    durationDisplay.textContent = formatTime(video.duration);
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
 * コメントを更新する
 */
function updateComments(currentTime) {
    // 表示済みのコメントを除外して新しいコメントを追加
    comments.forEach(comment => {
        // コメントの時間が動画の再生時間以上だったら、コメント表示
        if (currentTime >= comment.time && !displayedComments.includes(comment.time)) {
            // 時間をフォーマット
            const formattedTime = formatTime(currentTime);

            const commentItem = document.createElement('div');
            commentItem.innerHTML = `
                <span class="mr-1">${formattedTime}</span>
                <span>${comment.text}</span>
                `
            commentItem.className = "p-1 text-xs text-gray-700";
            commentsList.appendChild(commentItem);

            // すでに表示したコメントとして記録
            displayedComments.push(comment.time);
        }
    });
}

/**
 * 現在の時間とコメントを更新
 */
function updateCurrentTimeAndComments() {
    // 再生時間を更新
    updateCurrentTime();

     // コメントの表示を更新
    const currentTime = Math.floor(video.currentTime);
    updateComments(currentTime);
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

// ビデオ読み込み
loadVideo(videoFile);