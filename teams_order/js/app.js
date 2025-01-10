const generateFieldsButton = document.getElementById('generateFields');
const shuffleButton = document.getElementById('shuffleBtn');
const teamListDiv = document.getElementById('team-list');
const resultDiv = document.getElementById('result');
const countField = document.getElementById('teamCount');

/**
 * createFiels()
 * 
 * フィールドを生成する
 */
const createFields = () => {
    // 値を取得し、数値に変換
    const teamCount = Number(countField.value)
    // 前回のフィールドをクリア
    teamListDiv.innerHTML = '';
    // 前回の結果をクリア
    resultDiv.innerHTML = '';

    if (teamCount && teamCount > 0) {
        // 名前入力フィールドを生成
        for (var i = 1; i <= teamCount; i++) {
            const div = document.createElement('div');
            div.classList.add('flex', 'mb-4');
            const input = document.createElement('input');
            input.type = "text";
            input.id = `teamName${i}`;
            input.classList.add('flex-1', 'p-2', 'border', 'border-gray-300', 'rounded');
            input.placeholder = `名前${i}`;
            div.appendChild(input);
            teamListDiv.appendChild(div);
        }
        // シャッフルボタンを有効化
        shuffleButton.classList.remove('hidden');
    } else {
        alert('チーム数を正しく入力してください');
        shuffleButton.classList.add('hidden');
    }
}

/**
 * createFiels()
 * 
 * チームをシャッフルする
 */
const shuffleTeams = () => {
    const teamNames = [];
    const teamCount = parseInt(document.getElementById('teamCount').value);

    // 名前を配列に格納
    for (let i = 1; i <= teamCount; i++) {
        const teamName = document.getElementById(`teamName${i}`).value;
        if (teamName) {
            teamNames.push(teamName);
        }
    }

    // 名前が入力されていない場合は警告
    if (teamNames.length === 0) {
        alert('少なくとも1つの名前を入力してください');
        return;
    }

    // 名前をシャッフル
    const shuffledTeams = teamNames.sort(() => Math.random() - 0.5);

    // 結果を表示
    resultDiv.innerHTML = `
    <ol class="list-decimal list-inside">
    ${shuffledTeams.map(team => `<li>${team}</li>`).join('')}
    </ol>`;
}