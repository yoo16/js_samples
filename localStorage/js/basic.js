const output = document.getElementById('output');
const text = 'こんにちは';
const todos = [
    { id: 1, text: '牛乳を買う', done: false },
    { id: 2, text: 'メール返信', done: true },
];

document.getElementById('save').addEventListener('click', () => {
    localStorage.setItem('greet', text);
    output.textContent = `保存:\n ${text}`;
});

document.getElementById('load').addEventListener('click', () => {
    const text = localStorage.getItem('greet');
    output.textContent = `読み込み:\n ${text ? text : ''}`;
});

document.getElementById('remove').addEventListener('click', () => {
    localStorage.removeItem('greet');
    output.textContent = '削除しました。';
});

document.getElementById('saveList').addEventListener('click', () => {
    localStorage.setItem('list', JSON.stringify(todos));
    const text = todos.map(todo => `${todo.id}: ${todo.text} (${todo.done})`).join('\n');
    output.textContent = `保存:\n ${text}`;
});

document.getElementById('loadList').addEventListener('click', () => {
    const json = localStorage.getItem('list');
    const data = json ? JSON.parse(json) : [];
    const text = data.map(value => `${value.id}: ${value.text} (${value.done})`).join('\n');
    output.textContent = `読み込み:\n ${text}`;
});

document.getElementById('removeList').addEventListener('click', () => {
    localStorage.removeItem('list');
    output.textContent = '削除しました。';
});