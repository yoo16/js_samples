const video = document.getElementById('video');
const volumeSlider = document.getElementById('volumeSlider');

// ビデオボリューム(0 - 1)
const volume = 0;
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
function onLoadedVideo() {
    video.volume = volume;
    volumeSlider.value = volume;
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function changeVolume(event) {
    const volume = event.target.value;
    // ボリューム設定
    video.volume = volume;
    // Mute判別
    video.muted = volume == 0;
    // 音声アイコン更新
    updateVolumeIcon();
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