/**
 * update clock
 */
var clockElement = document.getElementById('clock');
var time = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var dateString = year + '年' + month + '月' + day + '日';
    var timeString = hour + ':' + minute + ':' + second;
    var clockString = dateString + ' ' + timeString
    clockElement.textContent = clockString;
}, 1000)