// 配列の初期化
var todoList = [];

// 要素を追加する関数
function addTodo() {
    const input = document.getElementById('todo');
    const value = input.value.trim();

    if (value) {
        todoList.push(value);  // 要素を追加
        input.value = '';  // 入力フィールドをクリア
        displayTodoList();  // 配列を表示
    } else {
        alert('TODOを入力してください');
    }
}

// 最後の要素を削除する関数
function removeLastTodo() {
    if (todoList.length > 0) {
        todoList.pop();  // 配列の最後の要素を削除
        displayTodoList();  // 配列を表示
    } else {
        alert('TODOリストがありません');
    }
}

// 配列を表示する関数
function displayTodoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    todoList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        todoListElement.appendChild(li);
    });
}
