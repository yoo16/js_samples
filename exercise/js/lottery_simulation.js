// 定数: くじの価格、賞金、最大番号
const LOTTERY_COST = 300;           // 1回300円
const PRIZE_AMOUNT_1 = 700000000;   // 1等賞金
const PRIZE_AMOUNT_2 = 1000000;     // 2等賞金
const MAX_NUMBER_1 = 20000000;      // 1等の最大番号
const MAX_NUMBER_2 = 5000000;       // 2等の最大番号

// 生涯収支
var lifetimeProfit = 0;

// 当たり番号をランダムに設定
const winningNumber1 = Math.floor(Math.random() * MAX_NUMBER_1) + 1;  // 1等
const winningNumber2 = Math.floor(Math.random() * MAX_NUMBER_2) + 1;  // 2等

// 初期メッセージ
document.getElementById("message").innerHTML = `1等 ${PRIZE_AMOUNT_1.toLocaleString()}円！ 2等 ${PRIZE_AMOUNT_2.toLocaleString()}円！`;

// シミュレーション関数
function simulateLottery() {
    var attempts = 0;
    var totalCost = 0;
    var prizeWon = 0;
    var isWinner = false;

    // １等当選するまでループ
    while (!isWinner) {
        // 試行回数を増やす
        attempts++; 

        // くじを引く
        const ticketNumber = Math.floor(Math.random() * MAX_NUMBER_1) + 1;
        totalCost += LOTTERY_COST; // 総コストを計算

        // 当選チェック
        if (ticketNumber === winningNumber1) {
            prizeWon = PRIZE_AMOUNT_1; // 1等当選
            isWinner = true;
        } else if (ticketNumber === winningNumber2) {
            prizeWon = PRIZE_AMOUNT_2; // 2等当選
        }

        // １等当選表示
        if (isWinner) {
            document.getElementById("result").innerHTML = "🎉 1等当選！";
            document.getElementById("lotteryNumber").innerHTML = winningNumber1;
        }
    }

    // 今回の収支計算
    const profit = prizeWon - totalCost;

    // 生涯収支計算
    lifetimeProfit += profit;

    // 収支表示
    document.getElementById("attempts").textContent = attempts.toLocaleString();
    document.getElementById("cost").textContent = totalCost.toLocaleString();
    document.getElementById("profit").textContent = profit.toLocaleString();
    document.getElementById("lifetime-profit").textContent = lifetimeProfit.toLocaleString();
}
