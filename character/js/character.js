const characterElement = document.getElementById('character')
const rect = characterElement.getClientRects()[0]
characterElement.style.position = 'absolute'

const character = {
    element: characterElement,
    x: 0,
    y: 0,
    speed: 3,
    direction: '',
    width: rect.width,
    height: rect.height,
}

//境界線
const limitX = window.innerWidth - character.width
const limitY = window.innerHeight - character.height

//タイマーの時間間隔
const interval = 10
//タイマー
var timer

/**
 * キーアクション
 */
const keyActions = {
    32: () => { character.direction = '' },
    37: () => { character.direction = 'left' },
    38: () => { character.direction = 'top' },
    39: () => { character.direction = 'right' },
    40: () => { character.direction = 'down' },
}

/**
 * 座標計算
 */
const updatePlots = {
    left: () => { character.x -= character.speed },
    right: () => { character.x += character.speed },
    down: () => { character.y += character.speed },
    top: () => { character.y -= character.speed },
}

/**
 * キャラクター座標更新
 */
const updateCharacterPlot = () => {
    character.element.style.left = character.x + 'px'
    character.element.style.top = character.y + 'px'
}


/**
 * 境界チェック
 */
const checkBoarder = () => {
    //左
    if (character.x < 0) character.x = 0
    //上
    if (character.y < 0) character.y = 0
    //右
    if (character.x > limitX) character.x = limitX
    //下
    if (character.y > limitY) character.y = limitY
}

const moveCharacter = () => {
    timer = setInterval(() => {
        //上下左右移動
        updatePlots[character.direction]()

        //境界線チェック
        checkBoarder()

        //座標更新
        updateCharacterPlot()
    }, interval)
}

/**
 * キャラクター停止
 */
const stopCharacter = () => {
    clearInterval(timer)
}



/**
 * keydownイベントハンドラー
 */
const keydownEventHandler = (event) => {
    //キー取得
    const keyCode = event.keyCode
    // console.log(keyCode)

    //キーボードアクション
    if (keyActions.hasOwnProperty(keyCode)) {
        keyActions[keyCode]()
    }

    //タイマー停止
    stopCharacter()
    //方向があればタイマー処理
    if (character.direction) moveCharacter()
}

//keydownイベント
updateCharacterPlot()
document.addEventListener('keydown', keydownEventHandler)