// 複数のアスキーアートのフレームを配列として用意
const frames = [
    `(・∀・)`,
    `(≧∀≦)`,
    `(＾∀＾)`,
    `(≧∇≦)`
];

// const frames = [
//     `
//   🚃🚋🚋🚋🚋
//   `,
//     `
//    🚃🚋🚋🚋🚋
//   `,
//     `
//     🚃🚋🚋🚋🚋
//   `,
//   `
//      🚃🚋🚋🚋🚋
//   `,
//     `
//     🚃🚋🚋🚋🚋
//   `,
//     `
//    🚃🚋🚋🚋🚋
//   `,
//   ];


// アニメーションのフレーム表示関数
var currentFrame = 0;

function showNextFrame() {
    // フレームを順番に表示
    const asciiArtElement = document.getElementById("asciiArt");
    asciiArtElement.textContent = frames[currentFrame];

    // 次のフレームに切り替え
    currentFrame = (currentFrame + 1) % frames.length;
}

// 一定時間ごとにフレームを切り替える
setInterval(showNextFrame, 500);
