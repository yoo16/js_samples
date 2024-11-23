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

// ビデオスキップ（秒）
const step1 = 0.5;

// ビデオスキップ2（秒）
const step2 = 3;

// ビデオボリューム(0 - 1)
var volume = 0.5;

// ビデオファイル
const videoFile = "videos/video1.mp4";

/**
 * loadVideo()
 * ビデオ読み込み
 */
function loadVideo(filePath) {
    video.pause();
    video.src = filePath;
    video.load();
}

/**
 * onLoadedVideo()
 * ビデオ読み込み後の処理
 */
function onLoadedVideo(event) {
    video.volume = volume;
    volumeSlider.value = volume;

    updatePlayIcon();
    updateDuration();
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
        video.play();
    } else {
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
        video.muted = false;
        volumeSlider.value = video.volume;
    } else {
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
    volume = event.target.value;
    changeVolume(volume)
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function changeVolume(value) {
    // ボリューム設定
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
    const currentTime = Math.floor(video.currentTime);
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * updateDuration()
 * ビデオの長さ更新
 */
function updateDuration() {
    const duration = Math.floor(video.duration);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    durationDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
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

// ビデオ読み込み
loadVideo(videoFile);