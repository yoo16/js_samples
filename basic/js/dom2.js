

var monstersElement = document.getElementById('monsters');

//追加
var monsterElement1 = document.createElement('p');
monsterElement1.innerHTML = 'スライム'
monstersElement.appendChild(monsterElement1)

var monsterElement2 = document.createElement('p');
monsterElement2.innerHTML = 'キメラ'
monstersElement.appendChild(monsterElement2)

//削除
monstersElement.removeChild(monsterElement1)

//プロパティ追加
var monster1A = document.createElement('a');
monster1A.href = "http://google.com/search?q=" + monsterElement1.innerHTML;
monster1A.target = "_blank";
monster1A.innerText = monsterElement1.innerHTML;
monstersElement.appendChild(monster1A)


function createMonsterElement(name, imageName) {
    var div = document.createElement('div')
    var p = document.createElement('p')
    var img = document.createElement('img')

    p.textContent = name
    img.src = '../images/' + imageName
    div.appendChild(p)
    div.appendChild(img)

    monstersElement.appendChild(div)
}

createMonsterElement('モンスター1', 'monster_006.png')
createMonsterElement('モンスター2', 'monster_022.png')
createMonsterElement('モンスター3', 'monster_040.png')