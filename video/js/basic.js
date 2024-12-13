const video = document.getElementById('video');
const volumeSlider = document.getElementById('volumeSlider');

// ビデオボリューム(0 - 1)
var volume = 0;
// ビデオファイル
const videoFile = "videos/video1.mp4";

/**
 * loadVideo()
 * ビデオ読み込み
 */
function loadVideo(filePath) {
    video.src = filePath;
    // video.load();
}

/**
 * onLoadedMetadata()
 * ビデオメタデータ読み込み後の処理
 */
function onLoadedMetadata() {
    document.getElementById('duration').textContent = video.duration
    document.getElementById('volume').textContent = video.volume
    document.getElementById('currentTime').textContent = video.currentTime
    document.getElementById('paused').textContent = video.paused
    document.getElementById('playbackRate').textContent = video.playbackRate
}

/**
 * onLoadedVideo()
 * ビデオ読み込み後の処理
 */
function onLoadedVideo() {
    video.volume = volume;
    volumeSlider.value = volume;
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
    video.volume = value;
}

/**
 * play()
 * 再生
 */
function play() {
    video.play();
}

/**
 * pause()
 * 停止
 */
function pause() {
    video.pause();
}

/**
 * toggleMute()
 * 音声ミュート切り替え
 */
function toggleMute() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

// ビデオ読み込み
loadVideo(videoFile);