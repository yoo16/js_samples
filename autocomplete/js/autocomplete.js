window.onload = function () {
    var cities = [
        { value: "Tokyo" },
        { value: "Osaka" },
        { value: "Yokohama" },
        { value: "Nagoya" },
    ];

    cities.forEach(function(city) {
        let option = document.createElement('option');
        option.value = city.value;
        document.getElementById('cityList').appendChild(option);
    })
};