// 定数: くじの価格、賞金、最大番号
const LOTTERY_COST = 300; // 1回300円
const PRIZE_AMOUNT = 300000000; // 当選賞金1億円
const MAX_NUMBER = 10000000; // くじの最大番号

// 宝くじの当たり番号を設定 (1～MAX_NUMBER の中からランダムに選ぶ)
const winningNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;

// 初期メッセージ
document.getElementById("message").innerHTML = `１等 ${PRIZE_AMOUNT.toLocaleString()}円！`;

// シミュレーション関数
function simulateLottery() {
    var attempts = 0;
    var isWinner = false;
    var totalCost = 0;

    while (!isWinner) {
        const ticketNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
        attempts++; // 試行回数を増やす
        totalCost += LOTTERY_COST; // 総コストを計算

        if (ticketNumber === winningNumber) {
            isWinner = true;
        }
    }

    // 収支計算
    const profit = PRIZE_AMOUNT - totalCost;

    // 結果の表示
    document.getElementById("result").innerHTML = `🎉 当選番号 ${winningNumber}`;
    document.getElementById("attempts").textContent = attempts.toLocaleString();
    document.getElementById("cost").textContent = totalCost.toLocaleString();
    document.getElementById("profit").textContent = profit.toLocaleString();
}
