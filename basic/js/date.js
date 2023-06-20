var time = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var datetime = `${year}/${month}/${day} ${hour}:${minute}:${second}`
    document.getElementById('datetime').innerHTML = datetime;
}, 1000)