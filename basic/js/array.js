/**
 * 変数
 */
 var monster1 = "スライム";
 var monster2 = "キメラ";
 var monster3 = "ノーム";
 
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
 var monsters = ['スライム', 'キメラ', 'ノーム'];
 console.log(monsters);
 console.log(monsters[1]);
 
 /**
  * Array.length
  */
 var length = monsters.length;
 console.log(length);
 
 /**
  * array push
  */
 monsters.push('ゾンビ');
 console.log(monsters);
 
 /**
  * array pop
  */
 monsters.pop();
 console.log(monsters);
 
 /**
  * array shift
  */
 monsters.shift();
 console.log(monsters);
 
 /**
  * array unshift
  */
 monsters.unshift('スライム');
 console.log(monsters);
 
 /**
  * array splice add
  */
 monsters.splice(1, 0, "ドラゴン");
 console.log(monsters);

 /**
  * array splice
  */
 monsters.splice(1, 1);
 console.log(monsters);
 
 /**
  * array indexOf
  */
 var index = monsters.indexOf('ノーム');
 console.log(index);
