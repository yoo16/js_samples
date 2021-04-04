/**
 * 変数
 */
 var flower1 = "サクラ";
 var flower2 = "チューリップ";
 var flower3 = "ヒマワリ";
 
 /**
  * array
  */
 var flowers = ['サクラ', 'チューリップ', 'ヒマワリ'];
 console.log(flowers);
 
 /**
  * new Array()
  */
 var array1 = new Array();
 console.log(array1);
 
 /**
  * []
  */
 var array2 = [];
 console.log(array2);
 
 /**
  * create array
  */
 var cities = ['Tokyo', 'Osaka', 'Yokohama'];
 console.log(cities);
 console.log(cities[1]);
 
 /**
  * Array.length
  */
 var length = cities.length;
 console.log(length);
 
 /**
  * array push
  */
 cities.push('Nagoya');
 console.log(cities);
 
 /**
  * array pop
  */
 cities.pop();
 console.log(cities);
 
 /**
  * array shift
  */
 cities.shift();
 console.log(cities);
 
 /**
  * array unshift
  */
 cities.unshift('Tokyo');
 console.log(cities);
 
 /**
  * array splice
  */
 cities.splice(1, 1);
 console.log(cities);
 
 /**
  * array splice add
  */
 cities.splice(1, 0, "Osaka");
 console.log(cities);

 /**
  * array indexOf
  */
 var index = cities.indexOf('Tokyo');
 console.log(index);
 