const video = document.getElementById("video");
const canvas = document.getElementById("effectCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const emojiSelector = document.createElement("select");
const emojis = ["😀", "😂", "😜", "😎", "🤪", "🥴", "🤯", "😵"];
emojis.forEach(emoji => {
    const option = document.createElement("option");
    option.value = emoji;
    option.textContent = emoji;
    emojiSelector.appendChild(option);
});
emojiSelector.style.position = "absolute";
emojiSelector.style.top = "10px";
emojiSelector.style.left = "10px";
document.body.appendChild(emojiSelector);

const captureButton = document.createElement("button");
captureButton.textContent = "Download Image";
captureButton.style.position = "absolute";
captureButton.style.top = "50px";
captureButton.style.left = "10px";
document.body.appendChild(captureButton);

let emojiPosition = { x: canvas.width / 2, y: canvas.height / 2 };
let dragging = false;

async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
    video.srcObject = stream;
    return new Promise(resolve => {
        video.onloadedmetadata = () => {
            video.play();
            resolve();
        };
    });
}

function captureFrame() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    overlayEmoji();
}

document.addEventListener("click", () => {
    captureFrame();
});

function overlayEmoji() {
    const selectedEmoji = emojiSelector.value;
    ctx.font = "50px Arial";
    ctx.fillText(selectedEmoji, emojiPosition.x, emojiPosition.y);
}

canvas.addEventListener("mousedown", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (Math.abs(x - emojiPosition.x) < 30 && Math.abs(y - emojiPosition.y) < 30) {
        dragging = true;
    }
});

canvas.addEventListener("mousemove", (event) => {
    if (dragging) {
        const rect = canvas.getBoundingClientRect();
        emojiPosition.x = event.clientX - rect.left;
        emojiPosition.y = event.clientY - rect.top;
        captureFrame();
    }
});

canvas.addEventListener("mouseup", () => {
    dragging = false;
});

function downloadImage() {
    const link = document.createElement("a");
    link.download = "prikura.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

captureButton.addEventListener("click", downloadImage);

(async function start() {
    await setupCamera();
})();
