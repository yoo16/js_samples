var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

/** 
 * array iterator
 */
var items = ['どうのつるぎ', 'かわのよろい', 'かわのぼうし'];
items.forEach(function (item, index, array) {
    console.log(item);
    console.log(index);
});

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'かわのよろい') {
        break;
    }
}
console.log(item);

/** 
 * array object iterator
 */
let prefectures = [
    { code: "1", label: "北海道" },
    { code: "2", label: "青森県" },
    { code: "3", label: "岩手県" },
    { code: "4", label: "宮城県" },
    { code: "5", label: "秋田県" },
    { code: "6", label: "山形県" },
    { code: "7", label: "福島県" },
    { code: "8", label: "茨城県" },
    { code: "9", label: "栃木県" },
    { code: "10", label: "群馬県" },
    { code: "11", label: "埼玉県" },
    { code: "12", label: "千葉県" },
    { code: "13", label: "東京都" },
    { code: "14", label: "神奈川県" },
    { code: "15", label: "新潟県" },
    { code: "16", label: "富山県" },
    { code: "17", label: "石川県" },
    { code: "18", label: "福井県" },
    { code: "19", label: "山梨県" },
    { code: "20", label: "長野県" },
    { code: "21", label: "岐阜県" },
    { code: "22", label: "静岡県" },
    { code: "23", label: "愛知県" },
    { code: "24", label: "三重県" },
    { code: "25", label: "滋賀県" },
    { code: "26", label: "京都府" },
    { code: "27", label: "大阪府" },
    { code: "28", label: "兵庫県" },
    { code: "29", label: "奈良県" },
    { code: "30", label: "和歌山県" },
    { code: "31", label: "鳥取県" },
    { code: "32", label: "島根県" },
    { code: "33", label: "岡山県" },
    { code: "34", label: "広島県" },
    { code: "35", label: "山口県" },
    { code: "36", label: "徳島県" },
    { code: "37", label: "香川県" },
    { code: "38", label: "愛媛県" },
    { code: "39", label: "高知県" },
    { code: "40", label: "福岡県" },
    { code: "41", label: "佐賀県" },
    { code: "42", label: "長崎県" },
    { code: "43", label: "熊本県" },
    { code: "44", label: "大分県" },
    { code: "45", label: "宮崎県" },
    { code: "46", label: "鹿児島県" },
    { code: "47", label: "沖縄県" }
];

/**
 * foreach
 */
prefectures.forEach(function (prefecture, index) {
    console.log(prefecture.code);
    console.log(prefecture.label);
    console.log(index);
});

/**
 * map() 1
 */
console.log('map()');
let numbers = [15, 20, 30, 5];
let map_result1 = numbers.map(number => number * 2);
console.log(map_result1);

/**
 * map() 2
 */
let map_result2 = numbers.map(function (number) {
    return number * 2;
});
console.log(map_result2);

let map_result3 = numbers.map(calculateMap);

/**
 * map() 3
 */
function calculateMap(number) {
    return number * 2;
}
console.log(map_result3);

/**
 * some
 */
prefectures.some(function (prefecture, index) {
    if (prefecture.code == '13') {
        console.log(prefecture.code);
        console.log(prefecture.label);
        console.log(index);
        return;
    }
});

/**
 * concat()
 */
console.log('concat()');
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7];
let numbers3 = numbers1.concat(numbers2);
console.log(numbers3);

/**
 * find()
 */
let prefecture_value = prefectures.find(prefecture => prefecture.code == '13');
console.log(prefecture_value);

/**
 * findIndex()
 */
let prefecture_index = prefectures.findIndex(prefecture => prefecture.code == '13');
console.log(prefecture_index);