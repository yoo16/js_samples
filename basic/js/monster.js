'use strict';

var stage = document.getElementById('stage')
var monsterList = document.getElementById('monster-list')

//追加
var monsterElement1 = document.createElement('p')
monsterElement1.innerHTML = 'スライム'
stage.appendChild(monsterElement1)

var monsterElement2 = document.createElement('p')
monsterElement2.innerHTML = 'キメラ'
stage.appendChild(monsterElement2)

//削除
stage.removeChild(monsterElement1)

//プロパティ追加
var a = document.createElement('a')
a.href = "http://google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerText = monsterElement1.innerHTML
stage.appendChild(a)

function createMonsterElement(name, imageName) {
    var div = document.createElement('div')
    var p = document.createElement('p')
    var img = document.createElement('img')
    div.className = "col-4"

    p.textContent = name
    img.src = 'images/' + imageName
    div.appendChild(p)
    div.appendChild(img)

    monsterList.appendChild(div)
}

createMonsterElement('モンスター1', 'monster_006.png')
createMonsterElement('モンスター2', 'monster_022.png')
createMonsterElement('モンスター3', 'monster_040.png')