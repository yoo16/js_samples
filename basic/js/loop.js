
/**
 * 0 から1ずつ増やして10回表示
 */
for (var index = 0; index < 10; index++) {
    console.log(index + 1);
}

/**
 * 1 から 1000までの足し算
 */
var sum = 0;
for (let index = 1; index <= 1000; index++) {
    sum += index;
}
console.log(sum);

// for文を使って年齢のプルダウンメニューを生成
const ageSelect = document.getElementById('age-select');
for (let index = 0; index <= 100; index++) {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = index + ' 歳';
    ageSelect.appendChild(option);
}

/**
 * 複利計算 while
 */
function calculateYears() {
    // 入力値を取得
    const initialDeposit = parseFloat(document.getElementById('initial-deposit').value);
    const interestRate = parseFloat(document.getElementById('saving-interest-rate').value) / 100;
    const savingTarget = parseFloat(document.getElementById('saving-target').value);

    // 入力が正しいかどうかのチェック
    if (isNaN(initialDeposit)
        || isNaN(interestRate)
        || isNaN(savingTarget) 
        || initialDeposit <= 0 
        || interestRate <= 0 
        || savingTarget <= initialDeposit) {
        document.getElementById('year').textContent = '有効な値を入力してください。';
        return;
    }

    var years = 0;
    var currentAmount = initialDeposit;

    // 複利計算: 目標金額に達するまで年ごとに増やす
    while (currentAmount < savingTarget) {
        currentAmount += currentAmount * interestRate;
        years++;
    }

    // 結果を表示
    document.getElementById('year').textContent = `${years} 年`;
}