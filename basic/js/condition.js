
var hp = 10
var attack = 10;
var message = '';
hp -= attack;
if (hp > 0) {
    message = 'モンスターの攻撃';
} else {
    message = 'モンスターを倒した';
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


var magic_name = 'ファイヤー';
var element = '';
switch (magic_name) {
    case "ファイヤー":
    case "メガファイヤー":
    case "テラファイヤー":
        element = "火属性";
        break;
    case "アイス":
    case "メガアイス":
        element = "水属性";
        break;
    case "サンダー":
    case "メガサンダー":
        element = "雷属性";
        break;
    default:
        element = "物理属性";
        break;
}
console.log(element)