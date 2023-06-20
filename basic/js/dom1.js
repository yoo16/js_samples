//console.log(document)

var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('price');
var messageElement = document.getElementById('message');

//console.log(priceElement);

var price = priceElement.textContent;
//console.log('price', price);

messageElement.innerHTML = '<span>いらっしゃい</span>';
//console.log(itemElement)


/**
 * ランダムな整数をブラウザ表示
 */
 function randomNumber(min, max)
 {
     //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
     var number = Math.floor( Math.random() * (max + 1 - min) ) + min;
     return number;
 }
 
 var titleElement = document.getElementById("title")
 titleElement.innerHTML = 'DICE'

 var number = randomNumber(1, 6)
 var resultElement = document.getElementById("result")
 resultElement.innerHTML = number;