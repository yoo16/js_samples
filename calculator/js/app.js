// 現在の入力
var currentInput = '';
// 現在の演算子
var operator = null;
// 前の入力
var previousInput = '';
// 計算後かどうかのフラグ
var isCalculated = false;

// 数字ボタンが押されたとき
function appendNumber(number) {
    // 計算後に数字を入力した場合、新しい計算を始める
    if (isCalculated) {
        // 現在の入力をリセット
        currentInput = ''; 
        // フラグを解除
        isCalculated = false; 
    }

    // 0が先頭の場合の処理
    if (currentInput === '0') {
        currentInput = number; // 上書きする
    } else {
        currentInput += number; // 追加する
    }
    updateDisplay(currentInput);
}

// 演算子ボタンが押されたとき
function setOperator(op) {
    // 現在の入力が空の場合は処理しない
    if (currentInput === '') return;
    // 演算の連続処理
    if (previousInput !== '') calculate();
    // 演算子を設定
    operator = op;
    // 前の入力を設定
    previousInput = currentInput;
    // 現在の入力をリセット
    currentInput = '';
}

// "="ボタンが押されたとき
function calculate() {
    // 結果を格納する変数
    var result;
    // 前の入力を数値に変換
    const prev = parseFloat(previousInput);
    // 現在の入力を数値に変換
    const curr = parseFloat(currentInput);

    // 数値が不正な場合は処理しない
    if (isNaN(prev) || isNaN(curr)) return;

    // 計算
    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = curr !== 0 ? prev / curr : 'エラー'; break;
        default: return;
    }

    // 演算子をリセット
    operator = null;
    // 前の入力をリセット
    previousInput = '';
    // 結果を現在の入力として保持
    currentInput = result.toString();
    // 計算後の状態を設定
    isCalculated = true;
    // 結果を表示
    updateDisplay(currentInput);
}

// ディスプレイをクリア
function clearDisplay() {
    // 現在の入力をリセット
    currentInput = '';
    // 前の入力をリセット
    previousInput = '';
    // 演算子をリセット
    operator = null;
    // フラグをリセット
    isCalculated = false;
    // ディスプレイを更新
    updateDisplay(0);
}

// ディスプレイを更新
function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}
