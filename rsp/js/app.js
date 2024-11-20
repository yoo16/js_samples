function play(playerChoice) {
    const choices = ["グー", "チョキ", "パー"];
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);

    // 手の画像ファイル名をインデックスに合わせて変更
    document.getElementById("computerChoiceImage").src = `images/${computerChoiceIndex}.png`;

    // 勝敗の判定
    var result = "";
    if (playerChoice === computerChoiceIndex) {
        result = "引き分け";
    } else if (
        (playerChoice === 0 && computerChoiceIndex === 1) ||  // グー vs チョキ
        (playerChoice === 1 && computerChoiceIndex === 2) ||  // チョキ vs パー
        (playerChoice === 2 && computerChoiceIndex === 0)     // パー vs グー
    ) {
        result = "あなたの勝ち！";
    } else {
        result = "あなたの負け...";
    }

    // 結果を表示
    document.getElementById("result").innerText = result;
}
