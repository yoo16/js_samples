var constraints = { audio: false, video: { facingMode: "user" } };
// var constraints = { audio: false, video: { facingMode: { exact: "environment" } } };

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
        var video = document.getElementById('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })