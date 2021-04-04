
var height = 160;
var message = '';
if (height >= 150) {
    message = '乗車できます';
} else {
    message = '乗車できません';
}
console.log(message);


var distance = 3;
var action = '';
if (distance < 1) {
    action = '徒歩';
} else if (distance >= 1 && distance < 5) {
    action = '自転車';
} else {
    action = '電車';
}
console.log(action);

var weekday = '水';
var type = '';
switch (weekday) {
    case '月':
        type = '燃えるゴミ';
        break;
    case '水':
        type = '燃えないゴミ';
        break;
    default:
        type = '回収なし';
        break;
}
console.log(weekday);
console.log(type);


var os = 'Ubuntu';
var barnd = '';
switch (os) {
    case 'CentOS':
    case 'Debian':
    case 'Ubuntu':
        brand = 'Linux';
        break;
    case 'Catalina':
    case 'Mojave':
        brand = 'MacOS';
        break;
    case 'Windows7':
    case 'Windows10':
        brand = 'Windows';
        break;
    default:
        brand = 'Not found';
        break;
}